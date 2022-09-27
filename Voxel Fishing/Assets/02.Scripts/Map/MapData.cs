using System.Collections;
using System.Collections.Generic;
using UnityEngine;


[CreateAssetMenu(fileName = "mapData", menuName = "Map/mapData")]
public class MapData : ScriptableObject
{
    public List<mapData> mapDataList = new List<mapData>();

    [System.Serializable]
    public class mapData
    {
        public int tier = 1;
        public Vector3 minMapSize;
        public Vector3 maxMapSize;
        
    }
}
