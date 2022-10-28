using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LunaDynamic : MonoBehaviour
{
    [SerializeField]
    [LunaPlaygroundField("Catch fish count to clear Challenge", 1, "challengeCount")]
    public int challengeCount = 10;

    [SerializeField]
    [LunaPlaygroundFieldArrayLength(1, 3)]
    [LunaPlaygroundField("Stage Number", 1, "StageNum")]
    public int stageNum = 0;

    [SerializeField] private GameObject[] stages;

    [SerializeField]
    [LunaPlaygroundField("스토어 전송 여부", 3, "Store")]
    public bool goToStore = false;

    private void Start()
    {
        stages[stageNum].SetActive(true);
    }
}
