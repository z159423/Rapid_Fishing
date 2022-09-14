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

    public FishList chestList_one = new FishList();
    public FishList chestList_two = new FishList();
    public FishList chestList_three = new FishList();

    public FishList chestMover = new FishList();
    

    [Space]

    [SerializeField] private Transform poolParent;

    public static FishPool instance;

    [Space]

    public List<Fish> generatedFishList = new List<Fish>();

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

        if (fish.GetComponent<Chest>() != null)
        {
            var chest = fish.GetComponent<Chest>();

            if(chest.chestMover != null)
            {
                if (chest.chestMover.gameObject.activeSelf && !FishingHook.instance.hookedFish.Contains(chest.chestMover))
                {
                    chestMover.EnqueueFish(chest.chestMover.gameObject);
                }
            }
            

            switch (chest.chestTier)
            {
                case 1:
                    chestList_one.EnqueueFish(fish.gameObject);
                    break;

                case 2:
                    chestList_two.EnqueueFish(fish.gameObject);
                    break;

                case 3:
                    chestList_three.EnqueueFish(fish.gameObject);
                    break;

            }


            DequeueChest(chest.chestTier, poolParent);
        }

        if(fish.GetComponent<ChestMover>() != null)
        {
            chestMover.EnqueueFish(fish.gameObject);
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

    public void DequeueChest(int tier, Transform poolParent)
    {
        GameObject chest = null;
        switch (tier)
        {
            case 1:
                chest = chestList_one.DequeueFish(poolParent);
                break;

            case 2:
                chest = chestList_two.DequeueFish(poolParent);
                break;

            case 3:
                chest = chestList_three.DequeueFish(poolParent);
                break;
        }

        chest.GetComponent<Chest>().chestMover = chestMover.DequeueFish(poolParent).GetComponent<Fish>();
        chest.transform.position = chest.GetComponent<Chest>().chestMover.transform.position;
        chest.GetComponentInChildren<RopeBridge>().StartPoint = chest.transform;
        chest.GetComponentInChildren<RopeBridge>().EndPoint = chest.GetComponent<Chest>().chestMover.transform;
        chest.GetComponent<Chest>().chestMover.GetComponent<ChestMover>().chest = chest.GetComponent<Chest>();
        chest.GetComponent<Chest>().line.enabled = true;

        switch (tier)
        {
            case 1:
                chest.GetComponent<Chest>().chestMover.usingMapDataNumber = 13;
                break;

            case 2:
                chest.GetComponent<Chest>().chestMover.usingMapDataNumber = 2;
                break;

            case 3:
                chest.GetComponent<Chest>().chestMover.usingMapDataNumber = 3;
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
