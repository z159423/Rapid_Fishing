using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LunaDynamic : MonoBehaviour
{
    [SerializeField]
    [LunaPlaygroundField("Fish Count to Success Challenge", 1, "challengeCount")]
    public int challengeCount = 10;

    [SerializeField]
    [LunaPlaygroundFieldArrayLength(1, 3)]
    [LunaPlaygroundField("Stage Number", 2, "StageNum")]
    public int stageNum = 1;

    [SerializeField]
    [LunaPlaygroundField("스토어", 3, "Store")]
    public bool goToStore = false;
}
