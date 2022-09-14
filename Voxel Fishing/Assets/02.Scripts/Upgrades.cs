using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Upgrades : MonoBehaviour
{

    public static Upgrades instance;

    [SerializeField] private FishingHook hook;
    [SerializeField] private FishingRod rod;
    [SerializeField] private FixedTouchField touchField;
    [SerializeField] private GameObject upgradePanel;
    [SerializeField] private GameObject upgradeTap;
    [SerializeField] private GameObject closeTap;
    [SerializeField] private GameObject tapToStartText;


    [Space]
    public RangeUpgrade lineLengthUpgrade = new RangeUpgrade();
    //public float upgradeLineLengthValue = 10f;
    //public int upgradeLineLength_needMoney = 10;

    [Space]
    public CountUpgrade hookMaxUpgrade = new CountUpgrade();
    //public int upgradeHookMaxCountValue = 1;
    //public int upgradeHookMaxCount_needMoney = 10;

    [Space]
    public MovementUpgrade hookMoveSpeedUpgrade = new MovementUpgrade();

    //public float upgradeHookMoveSpeedValue = 0.05f;

    public interface IUpgrade
    {
        public void SetText();
        public void ChangeUpgradeCost();
        public void CheckingCover();
        public void ChangeCurrentLevel(int level);
        public void UpgradeStat();
    }

    private void Awake()
    {
        instance = this;

        Application.targetFrameRate = 60;
    }

    private void Start()
    {

        lineLengthUpgrade.SetText();
        hookMaxUpgrade.SetText();
        hookMoveSpeedUpgrade.SetText();

        OnMoneyChange();
    }

    public void OnClickUpgradeButton()
    {
        upgradePanel.SetActive(!upgradePanel.activeSelf);

        if (upgradePanel.activeSelf)
        {
            upgradeTap.SetActive(false);
            closeTap.SetActive(true);

            if(tapToStartText.activeSelf)
            {
                tapToStartText.SetActive(false);
            }
        }
        else
        {
            upgradeTap.SetActive(true);
            closeTap.SetActive(false);
            tapToStartText.SetActive(true);
        }
    }

    public void OnMoneyChange()
    {
        lineLengthUpgrade.CheckingCover();
        hookMaxUpgrade.CheckingCover();
        hookMoveSpeedUpgrade.CheckingCover();

    }

    //최대 후킹수 업그레이드
    public void UpgradeHookMaxCount()
    {
        if (hookMaxUpgrade.currentLevel == hookMaxUpgrade.maxLevel || !FishingHook.instance.UseMoney(hookMaxUpgrade.upgradeNeedyCost))
            return;

        hookMaxUpgrade.currentLevel++;
        hook.UpgradeHookMaxCount(hookMaxUpgrade.upgradeValue);

        //FishingHook.instance.UseMoney(hookMaxUpgrade.upgradeNeedyCost);

        hookMaxUpgrade.ChangeUpgradeCost();

        hookMaxUpgrade.SetText();

        OnMoneyChange();

        //hookMaxUpgrade.levelText.text = hookMaxUpgrade.currentLevel.ToString();
    }


    //줄 길이 업그레이드
    public void UpgradeLineLength()
    {
        if (lineLengthUpgrade.currentLevel == lineLengthUpgrade.maxLevel || !FishingHook.instance.UseMoney(lineLengthUpgrade.upgradeNeedyCost))
            return;

        lineLengthUpgrade.currentLevel++;

        rod.UpgradeLineLength(lineLengthUpgrade.upgradeValue);

        //FishingHook.instance.UseMoney(lineLengthUpgrade.upgradeNeedyCost);

        lineLengthUpgrade.ChangeUpgradeCost();

        lineLengthUpgrade.SetText();

        OnMoneyChange();
    }

    //찌 움직이는 속도 업그레이드
    public void UpgradeHookMoveSpeed()
    {
        if (hookMoveSpeedUpgrade.currentLevel == hookMoveSpeedUpgrade.maxLevel || !FishingHook.instance.UseMoney(hookMoveSpeedUpgrade.upgradeNeedyCost))
            return;

        hookMoveSpeedUpgrade.currentLevel++;

        touchField.UpgradeHookMoveSpeed(hookMoveSpeedUpgrade.upgradeValue);

        //FishingHook.instance.UseMoney(hookMoveSpeedUpgrade.upgradeNeedyCost);

        hookMoveSpeedUpgrade.ChangeUpgradeCost();

        hookMoveSpeedUpgrade.SetText();

        OnMoneyChange();
    }

    public void UpgradeValue()
    {

    }


    [System.Serializable]
    public class Upgrade
    {
        public int currentLevel = 0;
        public int maxLevel = 5;
        public float upgradeValue;
        public int upgradeNeedyCost;
        public int upgradeCostIncreaseValue;

        public TextMeshProUGUI levelText;
        public TextMeshProUGUI needyCostText;
        public GameObject cover;

        public void SetText()
        {
            levelText.text = "LV. " + currentLevel.ToString();

            needyCostText.text = upgradeNeedyCost.ToString();

            if (currentLevel == maxLevel)
            {
                levelText.text = "LV.MAX";
                needyCostText.gameObject.SetActive(false);
            }

        }

        public void ChangeUpgradeCost()
        {
            upgradeNeedyCost += upgradeCostIncreaseValue;
        }

        public void CheckingCover()
        {
            if(upgradeNeedyCost > FishingHook.instance.money && !(currentLevel >= maxLevel))
            {
                cover.SetActive(true);
            }
            else{
                cover.SetActive(false);
            }
        }

        public void ChangeCurrentLevel(int level)
        {
            currentLevel = level;
            upgradeNeedyCost = upgradeNeedyCost + (upgradeCostIncreaseValue * level);

            SetText();
            CheckingCover();
        }

    }

    [System.Serializable]
    public class CountUpgrade : IUpgrade
    {
        public int currentLevel = 0;
        public int maxLevel = 10;
        public float upgradeValue = 1;
        public int upgradeNeedyCost = 50;
        public int upgradeCostIncreaseValue = 80;

        public TextMeshProUGUI levelText;
        public TextMeshProUGUI needyCostText;
        public GameObject cover;

        public FishingHook hook;

        public void SetText()
        {
            levelText.text = "LV. " + currentLevel.ToString();

            needyCostText.text = upgradeNeedyCost.ToString();

            if (currentLevel == maxLevel)
            {
                levelText.text = "LV.MAX";
                needyCostText.gameObject.SetActive(false);
            }

        }

        public void ChangeUpgradeCost()
        {
            upgradeNeedyCost += upgradeCostIncreaseValue;
        }

        public void CheckingCover()
        {
            if(upgradeNeedyCost > FishingHook.instance.money && !(currentLevel >= maxLevel))
            {
                cover.SetActive(true);
            }
            else{
                cover.SetActive(false);
            }
        }

        public void ChangeCurrentLevel(int level)
        {
            currentLevel = level;
            upgradeNeedyCost = upgradeNeedyCost + (upgradeCostIncreaseValue * level);

            for(int i = 0; i < level; i++)
            {
                UpgradeStat();
            }

            SetText();
            CheckingCover();
        }

        public void UpgradeStat()
        {
            hook.UpgradeHookMaxCount(upgradeValue);
        }

    }

    [System.Serializable]
    public class RangeUpgrade : IUpgrade
    {
        public int currentLevel = 0;
        public int maxLevel = 20;
        public float upgradeValue = 4.3f;
        public int upgradeNeedyCost = 20;
        public int upgradeCostIncreaseValue = 40;
        public float upgradeCostIncreaseValueMultifly = 1f;

        public TextMeshProUGUI levelText;
        public TextMeshProUGUI needyCostText;
        public GameObject cover;

        public FishingRod rod;

        public void SetText()
        {
            levelText.text = "LV. " + currentLevel.ToString();

            needyCostText.text = upgradeNeedyCost.ToString();

            if (currentLevel == maxLevel)
            {
                levelText.text = "LV.MAX";
                needyCostText.gameObject.SetActive(false);
            }

        }

        public void ChangeUpgradeCost()
        {
            upgradeNeedyCost += upgradeCostIncreaseValue;

            upgradeNeedyCost = Mathf.RoundToInt(upgradeNeedyCost * upgradeCostIncreaseValueMultifly) / 10 * 10;
        }

        public void CheckingCover()
        {
            if(upgradeNeedyCost > FishingHook.instance.money && !(currentLevel >= maxLevel))
            {
                cover.SetActive(true);
            }
            else{
                cover.SetActive(false);
            }
        }

        public void ChangeCurrentLevel(int level)
        {
            currentLevel = level;
            upgradeNeedyCost = upgradeNeedyCost + (upgradeCostIncreaseValue * level);

            for(int i = 0; i < level; i++)
            {
                UpgradeStat();
            }

            SetText();
            CheckingCover();
        }

        public void UpgradeStat()
        {
            rod.UpgradeLineLength(upgradeValue);
        }

    }

    [System.Serializable]
    public class MovementUpgrade : IUpgrade
    {
        public int currentLevel = 0;
        public int maxLevel = 10;
        public float upgradeValue = 0.007f;
        public int upgradeNeedyCost = 30;
        public int upgradeCostIncreaseValue = 60;

        public TextMeshProUGUI levelText;
        public TextMeshProUGUI needyCostText;
        public GameObject cover;

        public FixedTouchField touchField;

        public void SetText()
        {
            levelText.text = "LV. " + currentLevel.ToString();

            needyCostText.text = upgradeNeedyCost.ToString();

            if (currentLevel == maxLevel)
            {
                levelText.text = "LV.MAX";
                needyCostText.gameObject.SetActive(false);
            }

        }

        public void ChangeUpgradeCost()
        {
            upgradeNeedyCost += upgradeCostIncreaseValue;
        }

        public void CheckingCover()
        {
            if(upgradeNeedyCost > FishingHook.instance.money && !(currentLevel >= maxLevel))
            {
                cover.SetActive(true);
            }
            else{
                cover.SetActive(false);
            }
        }

        public void ChangeCurrentLevel(int level)
        {
            currentLevel = level;
            upgradeNeedyCost = upgradeNeedyCost + (upgradeCostIncreaseValue * level);

            for(int i = 0; i < level; i++)
            {
                UpgradeStat();
            }

            SetText();
            CheckingCover();
        }

        public void UpgradeStat()
        {
            touchField.UpgradeHookMoveSpeed(upgradeValue);
        }

    }
}
