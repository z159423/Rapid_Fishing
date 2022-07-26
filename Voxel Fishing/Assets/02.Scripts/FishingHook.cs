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

    [SerializeField] private Cinemachine.CinemachineVirtualCamera virtualCamera;

    float hookspeed;



    public float minDrag = 1f;
    public float maxDrag = 6.5f;
    public float dragSpeed = 1f;

    [Space]

    private int maxHookableCount = 2;
    private int currentHookedCount = 0;



    [SerializeField] private TextMeshProUGUI moneyText;
    [SerializeField] private TextMeshProUGUI HookedCount;

    public int money = 0;

    private void Update()
    {

        if (FishingLogic.instance.enablePulling)
        {
            rigid.drag = Mathf.Lerp(rigid.drag, maxDrag, dragSpeed * Time.deltaTime);
        }
        else
        {

        }

        hookspeed = Mathf.Abs(rigid.velocity.x) + Mathf.Abs(rigid.velocity.y);
        //virtualCamera.
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

        //money TMP Display

    }

    public void UpgradeHookMaxCount(float value)
    {
        maxHookableCount += (int)value;
    }
}
