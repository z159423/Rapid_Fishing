using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishingRod : MonoBehaviour
{
    [SerializeField] private Rigidbody hookRigid;

    [SerializeField] private Transform pivot = null;

    [SerializeField] private GameObject startButton;
    [SerializeField] private Animator rodAnimator;
    [SerializeField] private FishingHook fishingHook;
    [SerializeField] private FixedTouchField touchField;
    [SerializeField] private GameObject upgradePanel;
    [SerializeField] private GameObject upgradeButton;
    [SerializeField] private GameObject depthText;

    [Space]

    [SerializeField] private Transform throwTarget1;
    [SerializeField] private Transform throwTarget2;


    public int hookThrowForce = 400;

    public float lineForce = 1f;
    public float maxPullingForce = 6f;
    public float minPullingForce = 2.5f;

    public float currentPullingForece = 0;

    [Space]
    public float maxLine = 20f;
    public float pullingSpeed = 1f;

    [Space]
    public bool isStart = false;


    private void Update()
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
                hookRigid.velocity = (-dir * lineForce);
            }
        }

        if (FishingLogic.instance.pulling && touchField.Pressed)
        {
            //float dis = Vector3.Distance(pivot.position, hookRigid.position);

            if (dis < 1.5f)
            {
                ReloadHook();
            }
            else
            {
                //Vector3 dir = (hookRigid.transform.position - pivot.position).normalized;
                currentPullingForece = Mathf.Lerp(currentPullingForece, maxPullingForce, pullingSpeed * Time.deltaTime);

                currentPullingForece = Mathf.Clamp(currentPullingForece, minPullingForce, maxPullingForce);
                hookRigid.velocity = (-dir * currentPullingForece);
                //hookRigid.AddForce(-dir * currentPullingForece * Time.deltaTime * 300);
            }
        }

    }

    public IEnumerator ReleaseHook()
    {

        upgradePanel.SetActive(false);
        upgradeButton.SetActive(false);
        depthText.SetActive(true);
        hookRigid.useGravity = true;

        yield return new WaitForSeconds(0.3f);
        Vector2 dir1 = (throwTarget1.position - hookRigid.transform.position).normalized;

        hookRigid.isKinematic = false;
        hookRigid.velocity = Vector3.zero;
        hookRigid.drag = 0.05f;
        hookRigid.AddForce(dir1 * 300);
        isStart = true;
        fishingHook.targetHookZoomOffset = 15f;

        yield return new WaitForSeconds(0.8f);

        Vector2 dir2 = (throwTarget2.position - hookRigid.transform.position).normalized;

        hookRigid.isKinematic = false;
        hookRigid.drag = 0.5f;
        hookRigid.AddForce((Vector2.right + Vector2.up) * 700);
        isStart = true;

        //yield return new WaitForSeconds(1);
        //fishingHook.targetHookZoomOffset = 0;


    }

    public void ReloadHook()
    {
        isStart = false;
        startButton.SetActive(true);
        FishingLogic.instance.pulling = false;
        rodAnimator.SetTrigger("Reload");

        fishingHook.SellFish();
    }

    public void UpgradeLineLength(float value)
    {
        maxLine += value;
    }
}
