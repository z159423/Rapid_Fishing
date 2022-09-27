using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;
using UnityEngine.UI;
using TMPro;

public class DataManager : MonoBehaviour
{

    public static DataManager instance;

    public GameObject setting;

    [SerializeField] public Slider soundSlider;
    [SerializeField] private TextMeshProUGUI soundSliderHandleText;

    [SerializeField] public Slider hapticSlider;
    [SerializeField] private TextMeshProUGUI hapticSliderHandleText;

    private void Awake()
    {
        instance = this;
    }

    public string gameDataFileName = "FishingData";

    public GameData _gameData;
    public GameData gameData
    {
        get
        {
            if (_gameData == null)
            {
                LoadGameData();
                SaveGameData();
            }
            return _gameData;
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        LoadGameData();
        //SaveGameData();
    }

    public void LoadGameData()
    {
        string filePath = Application.persistentDataPath + gameDataFileName;

        if (File.Exists(filePath))
        {
            print("세이브 파일 불러오기 성공" + filePath);
            string FromJsonData = File.ReadAllText(filePath);
            _gameData = JsonUtility.FromJson<GameData>(FromJsonData);

            print("money : " + _gameData.money);

            print("Needle : " + _gameData.needleUpgrade);
            print("Line : " + _gameData.lineUpgrade);
            print("Reel : " + _gameData.reelUpgrade);

            FishingHook.instance.ChangeMoney(_gameData.money);

            Upgrades.instance.hookMaxUpgrade.ChangeCurrentLevel(_gameData.needleUpgrade);
            Upgrades.instance.lineLengthUpgrade.ChangeCurrentLevel(_gameData.lineUpgrade);
            Upgrades.instance.hookMoveSpeedUpgrade.ChangeCurrentLevel(_gameData.reelUpgrade);

            soundSlider.value = _gameData.sound;
            soundSlider.onValueChanged.Invoke(0);

            hapticSlider.value = _gameData.haptic;
            hapticSlider.onValueChanged.Invoke(0);
            
        }
        else
        {
            print("세이브 파일이 없어 새로운 데이터 생성");
            _gameData = new GameData();
        }
    }

    public void SaveGameData()
    {
        gameData.money = FishingHook.instance.money;
        gameData.needleUpgrade = Upgrades.instance.hookMaxUpgrade.currentLevel;
        gameData.lineUpgrade = Upgrades.instance.lineLengthUpgrade.currentLevel;
        gameData.reelUpgrade = Upgrades.instance.hookMoveSpeedUpgrade.currentLevel;
        gameData.sound = soundSlider.value;
        gameData.haptic = hapticSlider.value;


        string ToJsonData = JsonUtility.ToJson(gameData);
        string filePath = Application.persistentDataPath + gameDataFileName;

        File.WriteAllText(filePath, ToJsonData);

        print("세이브 파일 저장됨 : " + filePath);

        print("money : " + gameData.money);

        print("Needle : " + _gameData.needleUpgrade);
        print("Line : " + _gameData.lineUpgrade);
        print("Reel : " + _gameData.reelUpgrade);
    }

    public void ResetSaveData()
    {
        FishingHook.instance.ChangeMoney(0);

        Upgrades.instance.hookMaxUpgrade.ChangeCurrentLevel(0);
        Upgrades.instance.lineLengthUpgrade.ChangeCurrentLevel(0);
        Upgrades.instance.hookMoveSpeedUpgrade.ChangeCurrentLevel(0);

        string ToJsonData = JsonUtility.ToJson(gameData);
        string filePath = Application.persistentDataPath + gameDataFileName;

        File.WriteAllText(filePath, ToJsonData);

        print("세이브 리셋됨");

        SaveGameData();
    }

    private void OnApplicationPause(bool pauseStatus) {

        if(pauseStatus)
        {
            SaveGameData();
        }
        
    }

    public void SettingOnOff()
    {
        setting.SetActive(!setting.activeSelf);
    }

    public void OnSoundChangeValue()
    {
        if (soundSlider.value == 0f)
        {
            soundSliderHandleText.text = "OFF";
        }
        else
        {
            soundSliderHandleText.text = "ON";
        }
    }

    public void OnHapticChangeValue()
    {
        if (hapticSlider.value == 0f)
        {
            hapticSliderHandleText.text = "OFF";
        }
        else
        {
            hapticSliderHandleText.text = "ON";
        }
    }

}

[System.Serializable]
public class GameData
{
    public int money;
    
    public int needleUpgrade;
    public int lineUpgrade;
    public int reelUpgrade;

    public float sound = 1;
    public float haptic = 1;
}
