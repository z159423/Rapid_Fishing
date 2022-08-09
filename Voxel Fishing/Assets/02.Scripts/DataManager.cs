using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

public class DataManager : MonoBehaviour
{

    public static DataManager instance;

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
        SaveGameData();
    }

    private void Update() {
        if(Input.GetKeyDown(KeyCode.M))
        {
            ResetSaveData();
        }     
    }

    public void LoadGameData()
    {
        string filePath = Application.persistentDataPath + gameDataFileName;

        if (File.Exists(filePath))
        {
            print("세이브 파일 불러오기 성공");
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
    }

    private void OnApplicationQuit()
    {
        SaveGameData();
    }
}
