using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.Events;

public class FishingHook : MonoBehaviour
{
    public static FishingHook instance;

    public UnityEvent OnMoneyChangeEvent;


    public List<Fish> hookedFish = new List<Fish>();
    public Queue<int> moneyQueue = new Queue<int>();

    public GameObject sellParticle;
    public Transform sellParticleParent;

    [SerializeField] private Rigidbody rigid;


    [SerializeField] private Transform canvas;
    [SerializeField] private GameObject moneyTextPrefab;
    [SerializeField] private Transform moneyTextSpawnTransform;
    [SerializeField] private Vector2 moneyTextSpawnMinOffset;
    [SerializeField] private Vector2 moneyTextSpawnMaxOffset;
    [SerializeField] private Transform[] hookedTransforms;

    [SerializeField] private SkinnedMeshRenderer fishingRodSkinned;

    [SerializeField] private Cinemachine.CinemachineVirtualCamera cinemachineCamera;

    [SerializeField] private Transform startPoint;
    [SerializeField] private Transform hook;
    [SerializeField] private FishingRod rod;
    [SerializeField] private Transform playerModel;
    [SerializeField] private GameObject upgradeButton;
    [SerializeField] private TextMeshProUGUI depthText;
    [SerializeField] private FixedTouchField touchField;
    [SerializeField] private Animator upgradeNeedleTextAnimator;

    [Space]

    [SerializeField] private SpriteRenderer[] Oceans;
    [SerializeField] private SpriteRenderer OceanSurface;
    
    [SerializeField] private Light lights;
    [SerializeField] private ParticleSystem catchRingParticle;
    public float oceanSpriteValueMultifly = 1f;


    float currentHookZoomSpeed = 0;
    public float targetHookZoomOffset = 0;

    public float minDrag = 1f;
    public float maxDrag = 6.5f;
    public float dragSpeed = 1f;

    [Space]

    private int maxHookableCount = 2;
    private int currentHookedCount = 0;

    [SerializeField] private TextMeshProUGUI moneyText;
    [SerializeField] private TextMeshProUGUI HookedCount;

    public bool fullHooked = false;
    public bool inTheOcean = false;

    //    private LightingSettings lightingSettings = new LightingSettings();

    public int money = 0;

    private void Awake()
    {
        instance = this;
    }

    private void Update()
    {

        if (FishingLogic.instance.enablePulling)
        {
            float dis = Vector3.Distance(startPoint.position, hook.position);
            if (rod.maxLine * 0.8f < dis)
                rigid.drag = Mathf.Lerp(rigid.drag, maxDrag, dragSpeed * Time.deltaTime);
        }
        else
        {

        }

        if (FishingLogic.instance.enablePulling)
        {
            //targetHookZoomOffset = 5f;
        }

        currentHookZoomSpeed = Mathf.Lerp(currentHookZoomSpeed, targetHookZoomOffset, .5f * Time.deltaTime);

        cinemachineCamera.GetCinemachineComponent<Cinemachine.CinemachineTransposer>().m_FollowOffset.z = -10 - (currentHookZoomSpeed);
        //virtualCamera.

        if (hook.position.y < 0)
        {
            depthText.text = Mathf.Abs((int)(hook.position.y)).ToString() + " M";

            for (int i = 0; i < Oceans.Length; i++)
            {
                float value = (255 + hook.position.y * oceanSpriteValueMultifly) / 255f;
                float value2 = (200 + (hook.position.y * 2.5f)) / 255f;
                float value3 = hook.position.y * 0.01f;

                Oceans[i].color = new Color(value, value, value, Oceans[i].color.a);

                RenderSettings.ambientLight = new Color(value2, value2, value2);

                lights.intensity = 1 + value3;
                lights.intensity = Mathf.Clamp(lights.intensity, 0, 1);

            }

            OceanSurface.color = new Color(OceanSurface.color.r,OceanSurface.color.g,OceanSurface.color.b,(210 + Mathf.Abs((int)(hook.position.y))) / 255f);
        }
        else
        {

            depthText.text = "0 M";

        }
    }

    private void LateUpdate()
    {
        //transform.position = new Vector3(transform.position.x, transform.position.y, 0);
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.TryGetComponent<Fish>(out Fish fish) && currentHookedCount < maxHookableCount && touchField.Pressed)
        {
            if (fish.hooked || !FishingLogic.instance.pulling)
                return;

            /*
            if (fish.fishType.tier > maxHookableCount)
            {
                //바늘을 업그레이드 하라는 메시지 출력
                print("이 물고기는 잡을 수 없습니다, 바늘을 업그레이드 하세요");

                Vector2 dir = (transform.position - other.bounds.center).normalized;

                rigid.AddForce(dir * 1000f);

                upgradeNeedleTextAnimator.SetTrigger("Fadein");
                return;
            } */

            if (currentHookedCount >= maxHookableCount)
            {
                //바늘을 업그레이드 하라는 메시지 출력
                print("바늘이 가득찼습니다.");
                return;
            }

            hookedFish.Add(fish);

            Transform tempTrans = hookedTransforms[Random.Range(0, hookedTransforms.Length)];

            fish.Hooked(tempTrans);

            //currentHookedCount += fish.fishType.tier;
            currentHookedCount++;

            catchRingParticle.Play();

            if (currentHookedCount >= maxHookableCount)
            {
                fullHooked = true;
                HookedCount.text = "MAX!";
            }
                //HookedCount.text = "X" + currentHookedCount.ToString() + " (MAX!)";
            else
                //HookedCount.text = "X" + currentHookedCount.ToString();
                HookedCount.text = "(" + currentHookedCount.ToString() + " / " + maxHookableCount + ")";
        }
    }

    public void SellFish()
    {
        upgradeButton.SetActive(true);
        depthText.gameObject.SetActive(false);

        touchField.HideJoystick();

        targetHookZoomOffset = 0;

        rigid.useGravity = true;
        fullHooked = false;

        for (int i = 0; i < hookedFish.Count; i++)
        {
            ChallengeManager.instance.currentChallenge.ChangeChallengeProgress(hookedFish[i].fishType);

            moneyQueue.Enqueue(hookedFish[i].fishType.cost);

            FishPool.instance.EnequeueFish(hookedFish[i]);
            //Destroy(hookedFish[i].gameObject);

            GetMoney(hookedFish[i].fishType.cost);
        }

        ChallengeManager.instance.currentChallenge.CheckingChallengeClear();

        currentHookedCount = 0;
        hookedFish.Clear();

        HookedCount.text = "";

        StartCoroutine(spawnMoneyText());

        IEnumerator spawnMoneyText()
        {
            while (moneyQueue.Count > 0)
            {
                var text = Instantiate(moneyTextPrefab, moneyTextSpawnTransform);

                text.transform.localPosition = new Vector3(Random.Range(moneyTextSpawnMinOffset.x, moneyTextSpawnMaxOffset.x), Random.Range(moneyTextSpawnMinOffset.y, moneyTextSpawnMaxOffset.y), 0);
                //var text.position = text.position + moneyTextSpawnTransform.position + new Vector3(Random.Range(moneyTextSpawnMinOffset.x, moneyTextSpawnMaxOffset.x), Random.Range(moneyTextSpawnMinOffset.y, moneyTextSpawnMaxOffset.y)

                text.GetComponent<TextMeshProUGUI>().text = "+" + moneyQueue.Dequeue().ToString();

                Destroy(text, 1.5f);

                yield return new WaitForSeconds(.3f);
            }
        }

        fishingRodSkinned.SetBlendShapeWeight(1, 0);

        playerModel.rotation = Quaternion.Euler(0, 90, 0);

        //CinemachineController.instance.ChangeFollow(CinemachineController.instance.playerTrans);
        //CinemachineController.instance.ChnageOffset(CinemachineController.instance.playerOffset);
        CinemachineController.instance.FollowPlayer();

        //money TMP Display

    }

    public void UpgradeHookMaxCount(float value)
    {
        maxHookableCount += (int)value;
        transform.localScale = new Vector3(transform.localScale.x + 0.007f, transform.localScale.y + 0.007f, transform.localScale.z + 0.007f);
    }

    public void GetMoney(int money)
    {
        var particle = Instantiate(sellParticle, sellParticleParent.position, Quaternion.identity);

        Destroy(particle, 5f);

        this.money += money;

        moneyText.text = this.money.ToString();

        OnMoneyChangeEvent.Invoke();
    }

    public bool UseMoney(int money)
    {
        if (this.money >= money)
        {
            this.money -= money;
            
            moneyText.text = this.money.ToString();

            OnMoneyChangeEvent.Invoke();

            return true;
        }
        else
        {
            return false;
        }
    }

    public void ChangeMoney(int value)
    {
        money = value;

        moneyText.text = this.money.ToString();

        OnMoneyChangeEvent.Invoke();

        //DataManager.instance.SaveGameData();
    }
}
