using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Upgrades : MonoBehaviour
{

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

    private void Awake() {
        Application.targetFrameRate = 60;
    }

    private void Start()
    {

        lineLengthUpgrade.SetText();
        hookMaxUpgrade.SetText();
        hookMoveSpeedUpgrade.SetText();
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

    //최대 후킹수 업그레이드
    public void UpgradeHookMaxCount()
    {
        if (hookMaxUpgrade.currentLevel == hookMaxUpgrade.maxLevel)
            return;

        hookMaxUpgrade.currentLevel++;
        hook.UpgradeHookMaxCount(hookMaxUpgrade.upgradeValue);

        hookMaxUpgrade.SetText();

        //hookMaxUpgrade.levelText.text = hookMaxUpgrade.currentLevel.ToString();
    }


    //줄 길이 업그레이드
    public void UpgradeLineLength()
    {
        if (lineLengthUpgrade.currentLevel == lineLengthUpgrade.maxLevel)
            return;

        lineLengthUpgrade.currentLevel++;

        rod.UpgradeLineLength(lineLengthUpgrade.upgradeValue);

        lineLengthUpgrade.SetText();
    }

    //찌 움직이는 속도 업그레이드
    public void UpgradeHookMoveSpeed()
    {
        if (hookMoveSpeedUpgrade.currentLevel == hookMoveSpeedUpgrade.maxLevel)
            return;

        hookMoveSpeedUpgrade.currentLevel++;

        touchField.UpgradeHookMoveSpeed(hookMoveSpeedUpgrade.upgradeValue);

        hookMoveSpeedUpgrade.SetText();
    }

    //자석 업그레이드
    public void UpgradeMagnetic()
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

        }

    }
}
