using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class FishingHook : MonoBehaviour
{

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

    [SerializeField] private SkinnedMeshRenderer fishingRodSkinned;

    [SerializeField] private Cinemachine.CinemachineVirtualCamera cinemachineCamera;

    [SerializeField] private Transform startPoint;
    [SerializeField] private Transform hook;
    [SerializeField] private FishingRod rod;
    [SerializeField] private Transform playerModel;
    [SerializeField] private TextMeshProUGUI depthText;

    [Space]

    [SerializeField] private SpriteRenderer[] Oceans;
    [SerializeField] private Light lights;
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

//    private LightingSettings lightingSettings = new LightingSettings();

    public int money = 0;

    private void Update()
    {

        if (FishingLogic.instance.enablePulling)
        {
            float dis = Vector3.Distance(startPoint.position, hook.position);
            if (rod.maxLine - 20 < dis)
                rigid.drag = Mathf.Lerp(rigid.drag, maxDrag, dragSpeed * Time.deltaTime);
        }
        else
        {

        }

        if(FishingLogic.instance.enablePulling)
        {
            targetHookZoomOffset = 5f;
        }
        {

        }


        currentHookZoomSpeed = Mathf.Lerp(currentHookZoomSpeed, targetHookZoomOffset, .5f * Time.deltaTime);

        cinemachineCamera.GetCinemachineComponent<Cinemachine.CinemachineTransposer>().m_FollowOffset.z = -10 - (currentHookZoomSpeed);
        //virtualCamera.

        if (hook.position.y < 0)
        {
            depthText.text = Mathf.Abs((int)(hook.position.y)).ToString() + " M";

            for(int i = 0; i < Oceans.Length; i++)
            {
                float value = (255 + hook.position.y * oceanSpriteValueMultifly) / 255f;
                float value2 = (200 + (hook.position.y * 2.5f)) / 255f;
                float value3 = hook.position.y * 0.01f;

                Oceans[i].color = new Color(value, value,value, Oceans[i].color.a);

                RenderSettings.ambientLight = new Color(value2,value2,value2);

                lights.intensity = 1 + value3;
                lights.intensity = Mathf.Clamp(lights.intensity, 0, 1);
                
            }
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

        if (other.TryGetComponent<Fish>(out Fish fish) && currentHookedCount < maxHookableCount)
        {
            if (fish.hooked || !FishingLogic.instance.pulling)
                return;

            hookedFish.Add(fish);

            fish.Hooked(transform);

            currentHookedCount++;

            if (currentHookedCount == maxHookableCount)
                HookedCount.text = "X" + currentHookedCount.ToString() + " (MAX!)";
            else
                HookedCount.text = "X" + currentHookedCount.ToString();
        }
    }

    public void SellFish()
    {
        rigid.useGravity = true;

        for (int i = 0; i < hookedFish.Count; i++)
        {
            moneyQueue.Enqueue(hookedFish[i].fishType.cost);

            FishPool.instance.EnequeueFish(hookedFish[i]);
            //Destroy(hookedFish[i].gameObject);

            var particle = Instantiate(sellParticle, sellParticleParent.position, Quaternion.identity);

            Destroy(particle, 5f);

            money += hookedFish[i].fishType.cost;

            moneyText.text = money.ToString();

        }

        currentHookedCount = 0;
        hookedFish.Clear();

        HookedCount.text = "";

        StartCoroutine(spawnMoneyText());

        IEnumerator spawnMoneyText()
        {
            while (moneyQueue.Count > 0)
            {
                var text = Instantiate(moneyTextPrefab,
                moneyTextSpawnTransform.position + new Vector3(Random.Range(moneyTextSpawnMinOffset.x, moneyTextSpawnMaxOffset.x), Random.Range(moneyTextSpawnMinOffset.y, moneyTextSpawnMaxOffset.y))
                , Quaternion.identity, canvas);

                text.GetComponent<TextMeshProUGUI>().text = "+" + moneyQueue.Dequeue().ToString();

                Destroy(text, 1.5f);

                yield return new WaitForSeconds(.3f);
            }


        }

        fishingRodSkinned.SetBlendShapeWeight(1, 0);

        playerModel.rotation = Quaternion.Euler(0, 90, 0);

        //money TMP Display

    }

    public void UpgradeHookMaxCount(float value)
    {
        maxHookableCount += (int)value;
    }
}
