using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class FishingRod : MonoBehaviour
{
    [SerializeField] private Rigidbody hookRigid;

    [SerializeField] private Transform pivot = null;

    [SerializeField] private GameObject touchToStartPanel;
    [SerializeField] private Animator rodAnimator;
    [SerializeField] private FishingHook fishingHook;
    [SerializeField] private FixedTouchField touchField;
    [SerializeField] private GameObject upgradePanel;
    [SerializeField] private GameObject upgradeButton;
    [SerializeField] private GameObject depthText;

    [Space]

    [SerializeField] private Transform throwTarget1;
    [SerializeField] private Transform throwTarget2;
    [SerializeField] private Transform hookObject;
    [SerializeField] private Transform playerObject;


    public int hookThrowForce = 400;

    public float lineForce = 1f;
    public float maxPullingForce = 6f;
    public float minPullingForce = 2.5f;

    public float currentPullingForece = 0;

    [Space]
    public float maxLine = 20f;
    public float pullingSpeed = 1f;

    [Space]

    private int currentpullCount = 0;
    public int playAdsPullCount = 5;

    [Space]
    public bool isStart = false;


    private void FixedUpdate()
    {
        float dis = Vector3.Distance(pivot.position, hookRigid.position);
        Vector3 dir = (hookRigid.transform.position - new Vector3(pivot.position.x, pivot.position.y, 0)).normalized;

        if (!isStart)
        {
            //float dis = Vector3.Distance(pivot.position, hookRigid.position);

            if (dis > 1.5f)
            {
                //Vector3 dir = (hookRigid.transform.position - new Vector3(pivot.position.x, pivot.position.y, 0)).normalized;
                //hookRigid.transform.position = pivot.position + (1.5f * dir);

                //hookRigid.velocity = (-dir * lineForce);
                hookRigid.AddForce((-dir * lineForce) * 15, ForceMode.Acceleration);

                //hookRigid.velocity = Vector3.zero;
                //hookRigid.velocity = Vector3.zero;
            }
        }
        else
        {
            //float dis = Vector3.Distance(pivot.position, hookRigid.position);

            if (maxLine < dis)
            {
                //print(dis);
                hookRigid.velocity = (-dir * lineForce);
            }
        }

        if (FishingLogic.instance.pulling)
        {
            //float dis = Vector3.Distance(pivot.position, hookRigid.position);

            if (dis < 1.5f)
            {
                ReloadHook();
            }
            else if(touchField.Pressed)
            {
                //Vector3 dir = (hookRigid.transform.position - pivot.position).normalized;
                currentPullingForece = Mathf.Lerp(currentPullingForece, maxPullingForce, pullingSpeed * Time.deltaTime);

                currentPullingForece = Mathf.Clamp(currentPullingForece, minPullingForce, maxPullingForce);

                if (fishingHook.fullHooked || !fishingHook.inTheOcean)
                {
                    hookRigid.velocity = (-dir * (currentPullingForece * 3.5f));
                }
                else
                {
                    hookRigid.velocity = (-dir * currentPullingForece);
                }

                //hookRigid.AddForce(-dir * currentPullingForece * Time.deltaTime * 300);
            }
        }
    }



    public IEnumerator ReleaseHook()
    {
        //CinemachineController.instance.ChangeFollow(CinemachineController.instance.hookTrans);
        //CinemachineController.instance.ChnageOffset(CinemachineController.instance.hookOffset);

        CinemachineController.instance.FollowHook();

        upgradePanel.SetActive(false);
        upgradeButton.SetActive(false);
        depthText.SetActive(true);
        hookRigid.useGravity = true;

        yield return new WaitForSeconds(0.2f);
        Vector2 dir1 = (throwTarget1.position - hookRigid.transform.position).normalized;

        hookRigid.isKinematic = false;
        hookRigid.velocity = Vector3.zero;
        hookRigid.drag = 0.05f;
        hookRigid.AddForce(dir1 * 400);
        isStart = true;
        fishingHook.targetHookZoomOffset = 15f;

        yield return new WaitForSeconds(0.45f);

        Vector2 dir2 = (throwTarget2.position - hookRigid.transform.position).normalized;

        hookRigid.isKinematic = false;
        hookRigid.drag = 0.5f;
        hookRigid.AddForce((dir2) * 900);
        //isStart = true;

        //yield return new WaitForSeconds(1);
        //fishingHook.targetHookZoomOffset = 0;


    }

    public void ReloadHook()
    {
        isStart = false;
        FishingLogic.instance.pulling = false;
        rodAnimator.SetTrigger("Reload");

        fishingHook.SellFish();

        currentpullCount++;
        
        //광고 interval 시간을 체크해서 시간이 지났으면 전면광고 송출 안지났으면 TouchToStart 활성화
            TapToStartUIOnOff();
    }

    IEnumerator StartIsAd()
    {
        yield return new WaitForSeconds(2f);

        currentpullCount = 0;

        TapToStartUIOnOff();
    }

    private void TapToStartUIOnOff()
    {
        if(!ChallengeManager.instance.challengeSuccessPanelOn)
            touchToStartPanel.SetActive(!touchToStartPanel.activeSelf);
    }

    public void UpgradeLineLength(float value)
    {
        maxLine += value;
    }
}
