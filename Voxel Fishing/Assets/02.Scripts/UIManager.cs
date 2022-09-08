using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class UIManager : MonoBehaviour
{
    public static UIManager instance;

    public Transform challengeTarget;
    public TextMeshProUGUI challengeText;
    public TextMeshProUGUI versionText;


    [Space]
    [Header("촬영모드")]

    private bool pictureMode;
    [SerializeField] private Camera uiCamera;
    [SerializeField] private GameObject[] pictureModeObjects;

    public LayerMask normalModeLayerMask;
    public LayerMask pictureModeLayerMask;

    private void Awake()
    {
        instance = this;

        versionText.text = "version : " + Application.version;
    }

    private void Update() {
        
        if(Input.GetKeyDown(KeyCode.P))
            PictureMode();
    }

    public void PictureMode()
    {
        pictureMode = !pictureMode;

        if (pictureMode)
            uiCamera.cullingMask = pictureModeLayerMask;
        else
            uiCamera.cullingMask = normalModeLayerMask;


        for (int i = 0; i < pictureModeObjects.Length; i++)
        {
            pictureModeObjects[i].SetActive(!pictureMode);
        }
    }
}
