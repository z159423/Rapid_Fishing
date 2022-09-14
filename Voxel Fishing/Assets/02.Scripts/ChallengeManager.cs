using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using DG.Tweening;
using MondayOFF;

public class ChallengeManager : MonoBehaviour
{
    public static ChallengeManager instance;

    public List<IChallenge> challengeList = new List<IChallenge>();


    public List<fishClass> fishList = new List<fishClass>();
    public List<GameObject> fishList2 = new List<GameObject>();

    public IChallenge currentChallenge = null;
    public Transform fishObjectParent;

    [SerializeField] private FishingHook hook;
    [SerializeField] private Transform fishObectParent;
    [SerializeField] private GameObject catchAnyTargetImage;

    [Space]

    [SerializeField] private GameObject challengeSuccessPanel;
    [SerializeField] private TextMeshProUGUI rewardText;
    [SerializeField] private GameObject challengeSuccess_CatchAnyTargetImage;
    [SerializeField] private Transform challengeSuccess_TargetTransform;
    [SerializeField] private GameObject fishObject;

    private int currentReward = 0;

    [Space]

    [SerializeField] private GameObject currentChallengeImage;
    [SerializeField] private GameObject upgradeButton;
    [SerializeField] private GameObject tapToStartText;
    [SerializeField] private GameObject tapToContinueText;

    [SerializeField] private GameObject targetMarkerPrefab;
    [SerializeField] private Material outlineMat;
    [SerializeField] private GameObject glowparticlePrefab;

    public int stageNum = 0;

    public bool challengeSuccessPanelOn = false;

    private void Awake()
    {
        instance = this;
        if (!PlayerPrefs.HasKey("ClearZero"))
        {
            MondayOFF.EventsManager.instance.ClearStage(0);

            //MondayOFF.EventsManager.instance.TryStage(stageNum);
            PlayerPrefs.SetInt("ClearZero", 1);
        }

        if (!PlayerPrefs.HasKey("ChallengeNum"))
        {
            PlayerPrefs.SetInt("ChallengeNum", 1);
        }
    }

    public void NextStage()
    {
        MondayOFF.EventsManager.instance.ClearStage(stageNum);
        stageNum++;
    }

    private void Update()
    {

        if (Input.GetKeyDown(KeyCode.Z))
        {
            GenerateNewChallenge();
        }

        if (Input.GetKeyDown(KeyCode.X))
        {
            currentChallenge.ChallengeSuccess();
        }

        if (Input.GetKeyDown(KeyCode.C))
        {
            FishingHook.instance.GetMoney(1000);
        }

        if (Input.GetKeyDown(KeyCode.R))
        {
            ResetValues();
            //Upgrades.instance.ResetUpgrades();
        }

        if (Input.GetKeyDown(KeyCode.Q))
        {
            ResetResolution();
        }
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
        //challengeList.Add(new CatchAnyTarget());

        //print(challengeList.Count);

        GenerateNewChallenge();

        ChallengeManager.instance.outlineMat.DOBlendableColor(new Color32(255, 178, 6, 0), "_Outline_Color", 1f).SetEase(Ease.Linear).SetLoops(-1, LoopType.Yoyo);
    }

    public void ShowChallengeSuccessPanel(int reward, GameObject fishObject = null)
    {
        currentReward = reward;
        tapToStartText.SetActive(false);
        currentChallengeImage.SetActive(false);
        upgradeButton.SetActive(false);

        rewardText.text = "+" + reward;

        if (fishObject != null)
        {
            Destroy(this.fishObject);
            challengeSuccess_CatchAnyTargetImage.SetActive(false);
            this.fishObject = Instantiate(fishObject, challengeSuccess_TargetTransform);
        }
        else
        {
            challengeSuccess_CatchAnyTargetImage.SetActive(true);
        }

        challengeSuccessPanel.SetActive(true);

        challengeSuccessPanelOn = true;

        //Time.timeScale = 0.5f;
    }

    public void CloseChallengeSuccessPanel()
    {
        if (currentChallenge.GetChallengeType() == challengeType.catchTarget)
            PlayerPrefs.SetInt("ChallengeNum", PlayerPrefs.GetInt("ChallengeNum") + 1);
        FishingHook.instance.GetMoney(currentReward);

        Destroy(fishObject);

        tapToStartText.SetActive(true);
        currentChallengeImage.SetActive(true);
        upgradeButton.SetActive(true);

        challengeSuccessPanel.SetActive(false);

        GenerateNewChallenge();

        challengeSuccessPanelOn = false;

        //Time.timeScale = 1;
    }

    public void GenerateNewChallenge()
    {
        if (fishObectParent.GetComponentInChildren<Fish>() != null)
        {
            Destroy(fishObectParent.GetComponentInChildren<Fish>().gameObject);
        }

        catchAnyTargetImage.SetActive(false);

        //currentChallenge = challengeList[Random.Range(0, challengeList.Count)];


        if (PlayerPrefs.GetInt("ChallengeNum") > fishList2.Count)
            currentChallenge = new CatchAnyTarget();
        else
            currentChallenge = new CatchTarget();

        currentChallenge.SetChallengeInit();

        print("Current Stage : " + PlayerPrefs.GetInt("ChallengeNum"));

        //print(currentChallenge.GetChallengeType());
    }

    public void ResetValues()
    {

        PlayerPrefs.SetInt("ChallengeNum", 1);
        PlayerPrefs.SetInt("currentCatchCount", 0);

        currentChallenge.DeleteParticle();

        GenerateNewChallenge();

        FishingHook.instance.GetMoney(-FishingHook.instance.money);
    }

    public void ResetResolution()
    {
        //Screen.SetResolution(900, 1800, false);
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

        public void ChallengeSuccess();

        public void DeleteParticle();
    }

    public void ChallengeChange()
    {
        currentChallenge.SetChallengeInit();
    }


    [System.Serializable]
    public class CatchTarget : Challenge, IChallenge
    {
        public challengeType type = challengeType.catchTarget;

        public int catchAmount;
        public int currentCatchCount = 0;
        public int targetFishNumber;
        public int reward;

        public GameObject fishObject;

        public List<GameObject> targetMarkerList = new List<GameObject>();

        public bool CheckingChallengeClear()
        {
            if (catchAmount <= currentCatchCount)
            {
                //FishingHook.instance.GetMoney(reward);
                ChallengeSuccess();
                ChallengeManager.instance.ShowChallengeSuccessPanel(reward, fishObject);
                //SetChallengeInit();
                return true;
            }
            else
            {
                return false;
            }
        }

        public void ChallengeSuccess()
        {
            currentCatchCount = 0;

            for (int i = 0; i < targetMarkerList.Count; i++)
            {
                Destroy(targetMarkerList[i]);
            }

            targetMarkerList.Clear();

            ChallengeManager.instance.ShowChallengeSuccessPanel(reward, fishObject);

            PlayerPrefs.SetInt("currentCatchCount", currentCatchCount);

            MondayOFF.EventsManager.instance.ClearStage(PlayerPrefs.GetInt("ChallengeNum"));
        }



        public void SetChallengeInit()
        {

            catchAmount = 0;
            currentCatchCount = PlayerPrefs.GetInt("currentCatchCount");

            var currentLineLengthUpgrade = Upgrades.instance.lineLengthUpgrade.currentLevel;

            /*

            int tier = 1;

            if (currentLineLengthUpgrade >= 0 && currentLineLengthUpgrade < 6)
            {
                tier = 1;
                catchAmount = Random.Range(2, 7);
            }
            else if (currentLineLengthUpgrade >= 5 && currentLineLengthUpgrade < 11)
            {
                tier = Random.Range(1, 3);
                catchAmount = Random.Range(1, 5);
            }
            else if (currentLineLengthUpgrade >= 10 && currentLineLengthUpgrade < 16)
            {
                tier = Random.Range(2, 4);
                catchAmount = Random.Range(1, 4);
            }
            else if (currentLineLengthUpgrade >= 15 && currentLineLengthUpgrade < 21)
            {
                tier = Random.Range(3, 6);
                catchAmount = 1;
            } */
            int targetNum = PlayerPrefs.GetInt("ChallengeNum");


            if (targetNum < 8)
            {
                catchAmount = 5;
            }
            else if (targetNum > 7 && targetNum < 14)
            {
                catchAmount = 4;
            }
            else if (targetNum > 13 && targetNum < 23)
            {
                catchAmount = 3;
            }
            else if (targetNum > 24 && targetNum < 28)
            {
                catchAmount = 2;
            }
            else if (targetNum > 29 && targetNum < 33)
            {
                catchAmount = 1;
            }
            else
            {
                catchAmount = 1;
            }

            //var targetFish = ChallengeManager.instance.fishList[tier - 1].fishList[Random.Range(0, ChallengeManager.instance.fishList[tier - 1].fishList.Count)].prefab;

            var targetFish = ChallengeManager.instance.fishList2[targetNum - 1];
            targetFishNumber = targetFish.GetComponent<Fish>().fishType.fishNumber;
            reward = (targetFish.GetComponent<Fish>().fishType.cost * catchAmount) * 2;

            UIManager.instance.challengeText.text = "(" + currentCatchCount + " / " + catchAmount + ")";

            Destroy(fishObject);

            fishObject = Instantiate(targetFish, ChallengeManager.instance.fishObjectParent);
            fishObject.transform.localPosition = Vector3.zero;
            Vector3 size = fishObject.GetComponentInChildren<SkinnedMeshRenderer>().bounds.size;
            var fishLights = fishObject.GetComponentsInChildren<Light>();

            for (int i = 0; i < fishLights.Length; i++)
            {
                fishLights[i].enabled = false;
            }

            if (size.x > 0.8f)
            {
                float value = (size.x - 0.8f) + 1;

                fishObject.transform.localScale = fishObject.transform.localScale / value;
            }

            //if(size.y > 0.8)

            fishObject.GetComponent<Rigidbody>().useGravity = false;
            fishObject.GetComponent<Fish>().enabled = false;
            fishObject.GetComponent<Animator>().enabled = false;

            GenerateTargetMarker();
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

            PlayerPrefs.SetInt("currentCatchCount", currentCatchCount);
        }

        public void GenerateTargetMarker()
        {
            for (int i = 0; i < FishPool.instance.generatedFishList.Count; i++)
            {
                if (FishPool.instance.generatedFishList[i].fishType.fishNumber == targetFishNumber)
                {
                    /*
                    var marker = Instantiate(ChallengeManager.instance.targetMarkerPrefab,
                    FishPool.instance.generatedFishList[i].GetComponentInChildren<SkinnedMeshRenderer>().bounds.center
                    , Quaternion.identity
                    , FishPool.instance.generatedFishList[i].transform);

                    marker.transform.localScale = FishPool.instance.generatedFishList[i].fishType.boundSize;

                    targetMarkerList.Add(marker);
                    */

                    /*
                    GameObject obj = new GameObject("outline");
                    obj.transform.SetParent(FishPool.instance.generatedFishList[i].transform);
                    obj.transform.localPosition = Vector3.zero;
                    obj.transform.localRotation = Quaternion.identity;
                    obj.transform.localScale = new Vector3(0,0,0);
                    
                    var skinned = obj.AddComponent<SkinnedMeshRenderer>();
                    skinned.material = ChallengeManager.instance.outlineMat;

                    var originSkinned = FishPool.instance.generatedFishList[i].GetComponentInChildren<SkinnedMeshRenderer>();

                    skinned.bounds = originSkinned.bounds;
                    skinned.sharedMesh = originSkinned.sharedMesh;
                    skinned.rootBone = originSkinned.rootBone; */

                    var copy = Instantiate(FishPool.instance.generatedFishList[i].GetComponentInChildren<SkinnedMeshRenderer>().gameObject, FishPool.instance.generatedFishList[i].transform);
                    copy.GetComponent<SkinnedMeshRenderer>().material = ChallengeManager.instance.outlineMat;

                    var glowParticle = Instantiate(ChallengeManager.instance.glowparticlePrefab, copy.transform).GetComponent<ParticleSystem>();
                    float startSize = FishPool.instance.generatedFishList[i].fishType.boundSize.x + FishPool.instance.generatedFishList[i].fishType.boundSize.y + 1;

                    var main = glowParticle.main;
                    main.startSize = startSize;

                    //Utils.ComponentUtil.CopyComponent<SkinnedMeshRenderer>(FishPool.instance.generatedFishList[i].GetComponentInChildren<SkinnedMeshRenderer>(), obj);
                    //CopyComponent(FishPool.instance.generatedFishList[i].GetComponentInChildren<SkinnedMeshRenderer>(), obj);
                    //obj.GetComponent<SkinnedMeshRenderer>().materials[0] = ChallengeManager.instance.outlineMat;

                    targetMarkerList.Add(copy);
                }
            }
        }

        public void DeleteParticle()
        {
            for (int i = 0; i < targetMarkerList.Count; i++)
            {
                Destroy(targetMarkerList[i]);
            }

            targetMarkerList.Clear();
        }

    }

    [System.Serializable]
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
                //FishingHook.instance.GetMoney(reward);
                currentCatchAmount = 0;
                ChallengeSuccess();
                ChallengeManager.instance.ShowChallengeSuccessPanel(reward);

                return true;

            }
            else
            {
                return false;
            }
        }

        public void ChallengeSuccess()
        {
            PlayerPrefs.DeleteKey("catchGoalAmount_Any");
            ChallengeManager.instance.ShowChallengeSuccessPanel(reward);
        }

        public void SetChallengeInit()
        {
            ChallengeManager.instance.catchAnyTargetImage.SetActive(true);

            var currentLineLengthUpgrade = Upgrades.instance.lineLengthUpgrade.currentLevel;

            if (PlayerPrefs.HasKey("currentCatchCount_Any"))
            {
                currentCatchAmount = PlayerPrefs.GetInt("currentCatchCount");
            }
            else
            {
                currentCatchAmount = 0;
            }

            if (PlayerPrefs.HasKey("catchGoalAmount_Any"))
            {
                catchGoalAmount = PlayerPrefs.GetInt("catchGoalAmount_Any");
            }
            else
            {
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
                    catchGoalAmount = Random.Range(20, 25);
                }

                PlayerPrefs.SetInt("catchGoalAmount_Any", catchGoalAmount);
            }

            reward = catchGoalAmount * 45;

            UIManager.instance.challengeText.text = "(" + currentCatchAmount + " / " + catchGoalAmount + ")";
        }

        public challengeType GetChallengeType()
        {
            return this.type;
        }

        public void ChangeChallengeProgress(FishType fish)
        {

            currentCatchAmount++;
            UIManager.instance.challengeText.text = "(" + currentCatchAmount + " / " + catchGoalAmount + ")";

            CheckingChallengeClear();

            PlayerPrefs.SetInt("currentCatchCount_Any", currentCatchAmount);
        }

        public void DeleteParticle()
        {

        }
    }
}

public enum challengeType { catchTarget, catchAnyTarget, catchManyFishAtTime }
