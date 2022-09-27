using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "NewFishData", menuName = "FishData/newFish")]
public class FishData : ScriptableObject
{
    public int fishTier = 0;
    public int fishNumber = 0;
    public int fishCost = 0;
}
