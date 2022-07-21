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
    [SerializeField] private Slider catchSlider;
    [SerializeField] private GameObject catchButton;

    private FishingState fishingState;
    private bool catching = false;
    private float catchBarMoveSpeed = 1f;

    public bool biteBate = false;
    public bool pulling = false;
    public bool enablePulling = false;

    public static FishingLogic instance;

    private void Awake() {
        instance = this;
    }

    private void Update() 
    {
        if(catching)
        {
            if(catchSlider.value >= 1)
            {
                catchBarMoveSpeed = -1f;
            }
            else if(catchSlider.value <= 0)
            {
                catchBarMoveSpeed = 1f;
            }
        }

        catchSlider.value += catchBarMoveSpeed * Time.deltaTime;
    }

    public void FishingStart()
    {
        rodAnimator.SetTrigger("StartFishing");
        startButton.gameObject.SetActive(false);
    }

    public void StartPull()
    {
        if(!enablePulling)
            return;

        pulling = true;
        enablePulling = false;

        catchButton.SetActive(false);

        //catchSlider.gameObject.SetActive(true);
        //catchButton.SetActive(true);
        //catching = true;
    }

    public void Catch()
    {
        catchButton.SetActive(true);
        StartCoroutine(disableSlider());
        catching = false;

        IEnumerator disableSlider()
        {
            yield return new WaitForSeconds(1f);

            catchSlider.gameObject.SetActive(true);
        }
    }
}

public enum FishingState { Ready, Fishing, End }
