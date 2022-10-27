using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using DG.Tweening;

public class LunaChallenge : MonoBehaviour
{
    [SerializeField] private GameObject challengeObject;
    [SerializeField] private TextMeshProUGUI challengeCount;
    [SerializeField] private GameObject challengeClearObject;
    [SerializeField] private GameObject challengeSlotObject;
    [SerializeField] private GameObject tapToStartObject;
    [SerializeField] private GameObject EndCard;
    [SerializeField] private LunaDynamic lunaDynamic;


    [Space]

    [SerializeField] private int goalCount;
    [SerializeField] private int currentCount;

    public bool challengeClear = false;

    public static LunaChallenge instance;

    private void Awake()
    {
        instance = this;
    }

    private void Start()
    {
        goalCount = lunaDynamic.challengeCount;

        challengeCount.text = "(" + currentCount + " / " + goalCount + ")";

        StartCoroutine(ShowEndCard());

        IEnumerator ShowEndCard()
        {
            yield return new WaitForSeconds(30);
            if(!EndCard.activeSelf)
            {
                EndCard.SetActive(true);
            Luna.Unity.LifeCycle.GameEnded();

            }
        }
    }

    public void GetCount()
    {
        currentCount++;

        challengeCount.text = "(" + currentCount + " / " + goalCount + ")";

        if (currentCount >= goalCount && !challengeClear)
            ClearChallenge();

        challengeObject.transform.DOScale(new Vector3(1.8f, 1.8f, 1), 0.15f).SetEase(Ease.Linear).SetLoops(2, LoopType.Yoyo);
    }

    public void ClearChallenge()
    {
        

        challengeClearObject.SetActive(true);
        tapToStartObject.SetActive(false);
        challengeSlotObject.SetActive(false);

        challengeClear = true;

        StartCoroutine(EndCardShow());
        Luna.Unity.LifeCycle.GameEnded();

        IEnumerator EndCardShow()
        {
            yield return new WaitForSeconds(3f);
            if (!EndCard.activeSelf)
            {
                EndCard.SetActive(true);

            }

        }

        if(lunaDynamic.goToStore)
            Luna.Unity.Playable.InstallFullGame();
    }

    public void OnPlayNowBtnClick()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
