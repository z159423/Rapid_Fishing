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

            if (dis > 1)
            {
                //Vector3 dir = (hookRigid.transform.position - new Vector3(pivot.position.x, pivot.position.y, 0)).normalized;
                //hookRigid.transform.position = pivot.position + (1.5f * dir);
                hookRigid.velocity = (-dir * lineForce);
                //hookRigid.velocity = Vector3.zero;
            }
        }
        else
        {
            //float dis = Vector3.Distance(pivot.position, hookRigid.position);

            if(maxLine < dis)
            {
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
            else
            {
                //Vector3 dir = (hookRigid.transform.position - pivot.position).normalized;
                currentPullingForece = Mathf.Lerp(currentPullingForece, maxPullingForce, pullingSpeed * Time.deltaTime);

                currentPullingForece = Mathf.Clamp(currentPullingForece, minPullingForce, maxPullingForce);
                hookRigid.velocity = (-dir * currentPullingForece);
            }
        }

    }

    public IEnumerator ReleaseHook()
    {
        yield return new WaitForSeconds(0.3f);
        hookRigid.isKinematic = false;
        hookRigid.AddForce((Vector2.up + Vector2.left) * 250);
        isStart = true;

        yield return new WaitForSeconds(0.9f);
        hookRigid.isKinematic = false;
        hookRigid.AddForce((Vector2.right + Vector2.up) * 700);
        isStart = true;
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
