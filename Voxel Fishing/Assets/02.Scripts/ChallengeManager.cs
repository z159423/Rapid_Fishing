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
        currentChallenge = challengeList[0 /*Random.Range(0, challengeList.Count)*/];

        currentChallenge.SetChallengeInit();

        print(currentChallenge.GetChallengeType());
    }

    public abstract class Challenge
    {
        public challengeType ChallengeType;


        public abstract bool CheckingChallengeClear();
    }

    public interface IChallenge
    {
        public challengeType GetChallengeType();
        public void SetChallengeInit();
        public void ChangeChallengeProgress(int fishNumber);
    }

    public class CatchTarget : Challenge, IChallenge
    {
        public challengeType type = challengeType.catchTarget;

        public int catchAmount;
        public int currentCatchCount;
        public int targetFishNumber;
        public int reward;

        public GameObject fishObject;

        public override bool CheckingChallengeClear()
        {
            if (catchAmount <= currentCatchCount)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public void SetChallengeInit()
        {
            var currentLineLengthUpgrade = Upgrades.instance.lineLengthUpgrade.currentLevel;

            int tier = 1;

            if(currentLineLengthUpgrade >= 0 && currentLineLengthUpgrade < 6)
            {
                tier = 1;
                catchAmount = Random.Range(2, 11);
            }
            else if(currentLineLengthUpgrade >= 6 && currentLineLengthUpgrade < 11)
            {
                tier = Random.Range(1,3);
                catchAmount = Random.Range(1, 6);
            }
            else if(currentLineLengthUpgrade >= 11 && currentLineLengthUpgrade < 16)
            {
                tier = Random.Range(2,4);
                catchAmount = Random.Range(1, 4);
            }
            else if(currentLineLengthUpgrade >= 16 && currentLineLengthUpgrade < 21)
            {
                tier = Random.Range(3,6);
                catchAmount = Random.Range(1, 3);
            }

            var targetFish = ChallengeManager.instance.fishList[tier-1].fishList[Random.Range(0, ChallengeManager.instance.fishList[tier].fishList.Count)].prefab;

            targetFishNumber = targetFish.GetComponent<Fish>().fishType.fishNumber;

            reward = (targetFish.GetComponent<Fish>().fishType.cost * catchAmount) * 2;

            UIManager.instance.challengeText.text = "(" + 0 + " / " + catchAmount + ")";

            fishObject = Instantiate(targetFish, ChallengeManager.instance.fishObjectParent);

            fishObject.GetComponent<Rigidbody>().useGravity = false;
            fishObject.GetComponent<Fish>().enabled = false;
            fishObject.GetComponent<Animator>().enabled = false;
        }

        public challengeType GetChallengeType()
        {
            return this.type;
        }

        public void ChangeChallengeProgress(int fishNumber)
        {
            if(fishNumber == this.targetFishNumber)
                currentCatchCount++;

            if (fishNumber == targetFishNumber)
            {
                UIManager.instance.challengeText.text = "(" + currentCatchCount + " / " + catchAmount + ")";
            }

            CheckingChallengeClear();
        }
    }

    public class CatchAnyTarget : Challenge, IChallenge
    {
        public challengeType type = challengeType.catchAnyTarget;
        public int catchAmount;

        public override bool CheckingChallengeClear()
        {
            return false;
        }

        public void SetChallengeInit()
        {
            UIManager.instance.challengeText.text = "(" + 0 + " / " + catchAmount + ")";
        }

        public challengeType GetChallengeType()
        {
            return this.type;
        }

        public void ChangeChallengeProgress(int fishNumber)
        {
            
        }
    }
}

public enum challengeType { catchTarget, catchAnyTarget, catchManyFishAtTime }
