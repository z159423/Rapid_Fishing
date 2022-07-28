using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Setting : MonoBehaviour
{

    [SerializeField] private GameObject setting;



    public void SettingOnOff()
    {
        setting.SetActive(!setting.activeSelf);
    }
}
