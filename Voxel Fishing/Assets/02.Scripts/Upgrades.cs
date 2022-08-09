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


    [Space]
    public Upgrade lineLengthUpgrade = new Upgrade();
    //public float upgradeLineLengthValue = 10f;
    //public int upgradeLineLength_needMoney = 10;

    [Space]
    public Upgrade hookMaxUpgrade = new Upgrade();
    //public int upgradeHookMaxCountValue = 1;
    //public int upgradeHookMaxCount_needMoney = 10;

    [Space]
    public Upgrade hookMoveSpeedUpgrade = new Upgrade();

    //public float upgradeHookMoveSpeedValue = 0.05f;

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
        }
        else
        {
            upgradeTap.SetActive(true);
            closeTap.SetActive(false);
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
            if(upgradeNeedyCost > FishingHook.instance.money)
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
}
