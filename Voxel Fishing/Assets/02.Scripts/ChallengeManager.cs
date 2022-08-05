using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChallengeManager : MonoBehaviour
{
    public static ChallengeManager instance;

    public List<IChallenge> challengeList = new List<IChallenge>();


    public List<fishClass> fishList = new List<fishClass>();

    public IChallenge currentChallenge = null;
    public Transform fishObjectParent;

    [SerializeField] private FishingHook hook;
    [SerializeField] private Transform fishObectParent;
    [SerializeField] private GameObject catchAnyTargetImage;
    

    private void Awake()
    {
        instance = this;
    }

    [System.Serializable]
    public class fishClass
    {
        public int tier = 1;

        public List<targetFish> fishList = new List<targetFish>();
    }

    [System.Serializable]
    public class targetFish
    {
        public int fishNumber = 0;
        public GameObject prefab;
    }

    private void Start()
    {
        challengeList.Add(new CatchTarget());
        challengeList.Add(new CatchAnyTarget());

        //print(challengeList.Count);

        GenerateNewChallenge();
    }

    public void GenerateNewChallenge()
    {
        if(fishObectParent.GetComponentInChildren<Fish>() != null)
        {
            Destroy(fishObectParent.GetComponentInChildren<Fish>().gameObject);
        }
        
        catchAnyTargetImage.SetActive(false);
        
        currentChallenge = challengeList[Random.Range(0, challengeList.Count)];

        currentChallenge.SetChallengeInit();



        //print(currentChallenge.GetChallengeType());
    }

    public abstract class Challenge
    {
        public challengeType ChallengeType;
    }

    public interface IChallenge
    {
        public challengeType GetChallengeType();
        public void SetChallengeInit();
        public void ChangeChallengeProgress(FishType fish);
        public bool CheckingChallengeClear();
    }

    public void ChallengeChange()
    {
        currentChallenge.SetChallengeInit();
    }



    public class CatchTarget : Challenge, IChallenge
    {
        public challengeType type = challengeType.catchTarget;

        public int catchAmount;
        public int currentCatchCount;
        public int targetFishNumber;
        public int reward;

        public GameObject fishObject;

        public bool CheckingChallengeClear()
        {
            if (catchAmount <= currentCatchCount)
            {
                FishingHook.instance.GetMoney(reward);
                SetChallengeInit();
                return true;
            }
            else
            {
                return false;
            }
        }

        public void SetChallengeInit()
        {

            catchAmount = 0;
            currentCatchCount = 0;

            var currentLineLengthUpgrade = Upgrades.instance.lineLengthUpgrade.currentLevel;

            int tier = 1;

            if (currentLineLengthUpgrade >= 0 && currentLineLengthUpgrade < 6)
            {
                tier = 1;
                catchAmount = Random.Range(2, 7);
            }
            else if (currentLineLengthUpgrade >= 6 && currentLineLengthUpgrade < 11)
            {
                tier = Random.Range(1, 3);
                catchAmount = Random.Range(1, 5);
            }
            else if (currentLineLengthUpgrade >= 11 && currentLineLengthUpgrade < 16)
            {
                tier = Random.Range(2, 4);
                catchAmount = Random.Range(1, 4);
            }
            else if (currentLineLengthUpgrade >= 16 && currentLineLengthUpgrade < 21)
            {
                tier = Random.Range(3, 6);
                catchAmount = 1;
            }

            var targetFish = ChallengeManager.instance.fishList[tier - 1].fishList[Random.Range(0, ChallengeManager.instance.fishList[tier - 1].fishList.Count)].prefab;

            targetFishNumber = targetFish.GetComponent<Fish>().fishType.fishNumber;

            reward = (targetFish.GetComponent<Fish>().fishType.cost * catchAmount) * 2;

            UIManager.instance.challengeText.text = "(" + 0 + " / " + catchAmount + ")";

            Destroy(fishObject);

            fishObject = Instantiate(targetFish, ChallengeManager.instance.fishObjectParent);

            fishObject.transform.localPosition = Vector3.zero;

            Vector3 size = fishObject.GetComponentInChildren<SkinnedMeshRenderer>().bounds.size;

            if (size.x > 0.8f)
            {
                float value = (size.x - 0.8f) + 1;

                fishObject.transform.localScale = fishObject.transform.localScale / value;
            }

            //if(size.y > 0.8)

            fishObject.GetComponent<Rigidbody>().useGravity = false;
            fishObject.GetComponent<Fish>().enabled = false;
            fishObject.GetComponent<Animator>().enabled = false;
        }

        public challengeType GetChallengeType()
        {
            return this.type;
        }

        public void ChangeChallengeProgress(FishType fish)
        {
            if (fish.fishNumber == this.targetFishNumber)
                currentCatchCount++;

            if (fish.fishNumber == targetFishNumber)
            {
                UIManager.instance.challengeText.text = "(" + currentCatchCount + " / " + catchAmount + ")";
            }
        }
    }

    public class CatchAnyTarget : Challenge, IChallenge
    {
        public challengeType type = challengeType.catchAnyTarget;
        public int catchGoalAmount;
        public int currentCatchAmount = 0;
        public int reward;

        public bool CheckingChallengeClear()
        {

            if (currentCatchAmount >= catchGoalAmount)
            {
                FishingHook.instance.GetMoney(reward);
                ChallengeManager.instance.GenerateNewChallenge();

                return true;

            }
            else
            {
                return false;
            }
        }

        public void SetChallengeInit()
        {
            ChallengeManager.instance.catchAnyTargetImage.SetActive(true);

            var currentLineLengthUpgrade = Upgrades.instance.lineLengthUpgrade.currentLevel;

            if (currentLineLengthUpgrade >= 0 && currentLineLengthUpgrade < 6)
            {
                catchGoalAmount = Random.Range(5, 11);
            }
            else if (currentLineLengthUpgrade >= 6 && currentLineLengthUpgrade < 11)
            {
                catchGoalAmount = Random.Range(10, 16);
            }
            else if (currentLineLengthUpgrade >= 11 && currentLineLengthUpgrade < 16)
            {
                catchGoalAmount = Random.Range(15, 21);
            }
            else if (currentLineLengthUpgrade >= 16 && currentLineLengthUpgrade < 21)
            {
                catchGoalAmount = Random.Range(20, 26);
            }

            UIManager.instance.challengeText.text = "(" + 0 + " / " + catchGoalAmount + ")";
        }

        public challengeType GetChallengeType()
        {
            return this.type;
        }

        public void ChangeChallengeProgress(FishType fish)
        {
            currentCatchAmount += fish.tier;
            UIManager.instance.challengeText.text = "(" + currentCatchAmount + " / " + catchGoalAmount + ")";

            CheckingChallengeClear();
        }
    }
}

public enum challengeType { catchTarget, catchAnyTarget, catchManyFishAtTime }
