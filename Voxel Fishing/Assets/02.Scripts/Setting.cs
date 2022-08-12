using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;


public class Setting : MonoBehaviour
{


    [SerializeField] private GameObject setting;
    [SerializeField] public Slider soundSlider {get {return soundSlider;}}
    [SerializeField] private TextMeshProUGUI soundSliderHandleText;

    [SerializeField] public Slider hapticSlider {get {return hapticSlider;}}
    [SerializeField] private TextMeshProUGUI hapticSliderHandleText;

    public void SettingOnOff()
    {
        setting.SetActive(!setting.activeSelf);
    }

    public void OnSoundChangeValue()
    {
        if (soundSlider.value == 0)
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
        if (hapticSlider.value == 0)
        {
            hapticSliderHandleText.text = "OFF";
        }
        else
        {
            hapticSliderHandleText.text = "ON";
        }
    }
}
