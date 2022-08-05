using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishPool : MonoBehaviour
{

    public FishList oneTierFishList = new FishList();
    public FishList twoTierFishList = new FishList();
    public FishList threeTierFishList = new FishList();
    public FishList fourTierFishList = new FishList();
    public FishList fiveTierFishList = new FishList();

    [Space]

    [SerializeField] private Transform poolParent;

    public static FishPool instance;

    private void Awake()
    {
        instance = this;
    }

    public void EnequeueFish(Fish fish)
    {
        //print("EnqueueFish " + fish);

        switch (fish.fishType.tier)
        {
            case 1:
                oneTierFishList.EnqueueFish(fish.gameObject);
                break;

            case 2:
                twoTierFishList.EnqueueFish(fish.gameObject);
                break;

            case 3:
                threeTierFishList.EnqueueFish(fish.gameObject);
                break;

            case 4:
                fourTierFishList.EnqueueFish(fish.gameObject);
                break;

            case 5:
                fiveTierFishList.EnqueueFish(fish.gameObject);
                break;
        }

        DequeueFish(fish.fishType.tier, poolParent);
    }

    public void DequeueFish(int tier, Transform poolParent)
    {
        //print("DequeueFish " + tier);

        switch (tier)
        {
            case 1:
                oneTierFishList.DequeueFish(poolParent);
                break;

            case 2:
                twoTierFishList.DequeueFish(poolParent);
                break;

            case 3:
                threeTierFishList.DequeueFish(poolParent);
                break;

            case 4:
                fourTierFishList.DequeueFish(poolParent);
                break;

            case 5:
                fiveTierFishList.DequeueFish(poolParent);
                break;
        }
    }

}

[System.Serializable]
public class FishList
{
    public List<GameObject> fishList = new List<GameObject>();
    public Queue<GameObject> fishQueue = new Queue<GameObject>();

    public List<Transform> spawnPoints = new List<Transform>();

    public void EnqueueFish(GameObject fish)
    {
        fishQueue.Enqueue(fish);
        fish.SetActive(false);
    }

    public GameObject DequeueFish(Transform Parent)
    {
        if (fishQueue.Count > 0)
        {
            var fish = fishQueue.Dequeue();

            fish.transform.SetParent(Parent);
            fish.transform.position = spawnPoints[Random.Range(0, spawnPoints.Count)].position;
            fish.GetComponent<Fish>().hooked = false;
            fish.GetComponent<Rigidbody>().isKinematic = false;
            fish.SetActive(true);

            return fish;
        }
        else
        {
            return GameObject.Instantiate(fishList[Random.Range(0, fishList.Count)], spawnPoints[Random.Range(0, spawnPoints.Count)].position, Quaternion.identity, Parent);
        }

    }

}
