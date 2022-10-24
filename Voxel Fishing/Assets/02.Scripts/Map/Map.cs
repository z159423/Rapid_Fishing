using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Maps : MonoBehaviour
{
    public List<mapData> mapDataList = new List<mapData>();


    public static Maps instance;

    private void Awake() {
        instance = this;
    }

    [System.Serializable]
    public class mapData
    {
        public int tier = 1;
        public Vector3 minMapSize;
        public Vector3 maxMapSize;
        
    }
}
