using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class UIManager : MonoBehaviour
{
    public static UIManager instance;

    public Transform challengeTarget;
    public TextMeshProUGUI challengeText;
    

    private void Awake() {
        instance = this;
    }
}
