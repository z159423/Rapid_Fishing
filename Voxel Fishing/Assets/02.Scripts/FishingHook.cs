using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.Events;
using DG.Tweening;

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
    // [SerializeField] private Animator upgradeNeedleTextAnimator;

    [Space]

    // [SerializeField] private SpriteRenderer[] Oceans;
    // [SerializeField] private SpriteRenderer OceanSurface;
    // [SerializeField] private MeshRenderer depthMask;
    // [SerializeField] private Material depthMaskMat;


    // [SerializeField] private Light sunLights;
    // [SerializeField] private Light hookLight;
    // [SerializeField] private Light challengeLight;
    [SerializeField] private ParticleSystem catchRingParticle;

    [Space]

    [SerializeField] private GameObject fishSkinPrefab;
    [SerializeField] private Transform fishSkinPoint1;
    [SerializeField] private Transform fishSkinPoint2;

    [Space]

    // public float oceanSpriteValueMultifly = 1f;


    float currentHookZoomSpeed = 0;
    public float targetHookZoomOffset = 0;

    public float minDrag = 1f;
    public float maxDrag = 6.5f;
    public float dragSpeed = 1f;

    [Space]

    public float fishingHookScaleUpgradeValue = 0.007f;

    [Space]

    private int maxHookableCount = 2;
    private int currentHookedCount = 0;

    [SerializeField] private TextMeshProUGUI moneyText;
    [SerializeField] private TextMeshProUGUI HookedCount;

    public bool fullHooked = false;
    public bool inTheOcean = false;

    //private LightingSettings lightingSettings = new LightingSettings();

    public int money = 0;

    private void Awake()
    {
        instance = this;
    }

    private void FixedUpdate()
    {
        if (FishingLogic.instance.enablePulling)
        {
            float dis = Vector3.Distance(startPoint.position, hook.position);
            if (rod.maxLine * 0.8f < dis)
                rigid.drag = Mathf.Lerp(rigid.drag, maxDrag, dragSpeed * Time.deltaTime);
        }

        currentHookZoomSpeed = Mathf.Lerp(currentHookZoomSpeed, targetHookZoomOffset, .5f * Time.deltaTime);

        cinemachineCamera.GetCinemachineComponent<Cinemachine.CinemachineTransposer>().m_FollowOffset.z = -10 - (currentHookZoomSpeed);

        if (hook.position.y < 0)
        {
            depthText.text = Mathf.Abs((int)(hook.position.y)).ToString() + " M";

            /*
            float value = (255 + hook.position.y * oceanSpriteValueMultifly) / 255f;
            value = Mathf.Clamp(value, 30f / 255f, 1);

            float value2 = (200 + (hook.position.y * 2.5f)) / 255f;
            float value3 = hook.position.y * 0.01f;

            for (int i = 0; i < Oceans.Length; i++)
            {
                Oceans[i].color = new Color(value, value, value, Oceans[i].color.a);
                RenderSettings.ambientLight = new Color(value2, value2, value2);
            }

            depthMask.materials[0].color = new Color(depthMask.materials[0].color.r, depthMask.materials[0].color.g, depthMask.materials[0].color.b, (Mathf.Abs(hook.position.y) * 4.5f) / 255f);

            sunLights.intensity = 1 + value3;
            sunLights.intensity = Mathf.Clamp(sunLights.intensity, 0.25f, 1);

            hookLight.intensity = Mathf.Abs(value3);
            challengeLight.intensity = Mathf.Abs(value3) * 4.5f;

            OceanSurface.color = new Color(OceanSurface.color.r, OceanSurface.color.g, OceanSurface.color.b, (210 + Mathf.Abs((int)(hook.position.y))) / 255f);
        */
        }
        else
        {
            depthText.text = "0 M";
        }
        
        transform.position = new Vector3(transform.position.x, transform.position.y, 0);
    }


    private void OnTriggerStay(Collider other)
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

            currentHookedCount++;

            catchRingParticle.Play();

            //찌에 걸린 수만큼 텍스트 변경
            if (currentHookedCount >= maxHookableCount)
            {
                fullHooked = true;
                HookedCount.text = "MAX!";
            }
            else
                HookedCount.text = "(" + currentHookedCount.ToString() + " / " + maxHookableCount + ")";


            //찌에 걸린 물고기들 콜라이더 비활성화
            var fishColliders = fish.GetComponentsInChildren<Collider>();
            for (int i = 0; i < fishColliders.Length; i++)
            {
                fishColliders[i].enabled = false;
            }
        }
    }

    //찌에 걸린 모든 물고기 판매
    public void SellFish()
    {
        rigid.velocity = rigid.velocity * 0.5f;

        upgradeButton.SetActive(true);
        depthText.gameObject.SetActive(false);

        touchField.HideJoystick();

        targetHookZoomOffset = 0;

        rigid.useGravity = true;
        fullHooked = false;

        Queue<GameObject> fishSkins = new Queue<GameObject>();

        for (int i = 0; i < hookedFish.Count; i++)
        {
            var fishSkin = Instantiate(fishSkinPrefab, new Vector3(0, 10000, 0), Quaternion.identity);
            fishSkin.GetComponent<MeshRenderer>().materials = hookedFish[i].GetComponentInChildren<SkinnedMeshRenderer>().materials;
            fishSkin.GetComponent<MeshFilter>().mesh = hookedFish[i].GetComponentInChildren<SkinnedMeshRenderer>().sharedMesh;

            fishSkin.transform.localScale = hookedFish[i].transform.localScale * 4f * hookedFish[i].GetComponentInChildren<SkinnedMeshRenderer>().transform.localScale.x;
            fishSkin.transform.Rotate(hookedFish[i].GetComponentInChildren<SkinnedMeshRenderer>().transform.localRotation.eulerAngles);
            fishSkin.transform.Rotate(new Vector3(0, 180, 0));

            fishSkins.Enqueue(fishSkin);


            ChallengeManager.instance.currentChallenge.ChangeChallengeProgress(hookedFish[i].fishType);

            moneyQueue.Enqueue(hookedFish[i].fishType.cost);

            FishPool.instance.EnequeueFish(hookedFish[i]);
            //Destroy(hookedFish[i].gameObject);

            GetMoney(hookedFish[i].fishType.cost);

            //콜라이더 다시 활성화
            var fishColliders = hookedFish[i].GetComponentsInChildren<Collider>();
            for (int j = 0; j < fishColliders.Length; j++)
            {
                fishColliders[j].enabled = true;
            }

            hookedFish[i].SellFish();
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

                var fishSkin = fishSkins.Dequeue();

                Destroy(fishSkin.GetComponent<Fish>());
                Destroy(fishSkin.GetComponent<Collider>());

                fishSkin.transform.position = fishSkinPoint1.position;

                fishSkin.transform.DOMoveY(fishSkinPoint2.position.y, 1f).SetEase(Ease.Linear).OnComplete(() => Destroy(fishSkin));

                text.GetComponent<TextMeshProUGUI>().text = "+" + moneyQueue.Dequeue().ToString();

                Destroy(text, 1.5f);

                yield return new WaitForSeconds(.3f);
            }
        }

        fishingRodSkinned.SetBlendShapeWeight(1, 0);

        playerModel.rotation = Quaternion.Euler(0, 90, 0);
        CinemachineController.instance.FollowPlayer();

        
    }

    public void UpgradeHookMaxCount(float value)
    {
        maxHookableCount += (int)value;
        transform.localScale = new Vector3(transform.localScale.x + fishingHookScaleUpgradeValue, transform.localScale.y + fishingHookScaleUpgradeValue, transform.localScale.z + fishingHookScaleUpgradeValue);
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
