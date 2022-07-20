using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;
using TMPro;
using UnityEngine.UI;

public class FishingLogic : MonoBehaviour
{
    [SerializeField] private Animator rodAnimator;
    [SerializeField] private Button startButton;

    private FishingState fishingState;

    public void FishingStart()
    {
        rodAnimator.SetTrigger("StartFishing");
        startButton.gameObject.SetActive(false);
    }
}

public enum FishingState { Ready, Fishing, End }
