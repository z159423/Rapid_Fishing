using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishingRod : MonoBehaviour
{
    [SerializeField] private Rigidbody hookRigid;

    [SerializeField] private Transform pivot = null;

    public int hookThrowForce = 400;

    public float lineForce = 1f;

    private void Awake()
    {
        // pivot = transform.GetChild(1);
    }
    public void ReleaseHook()
    {
        hookRigid.isKinematic = false;
        hookRigid.AddForce((Vector2.right + Vector2.up) * 400);
        isStart = true;
    }

    bool isStart = false;
    private void LateUpdate()
    {
        if (!isStart)
        {
            float dis = Vector3.Distance(pivot.position, hookRigid.position);
            if (dis > 1.5f)
            {
                Vector3 dir = (hookRigid.transform.position - pivot.position).normalized;
                //hookRigid.transform.position = pivot.position + (1.5f * dir);
                hookRigid.velocity = (-dir * lineForce);
                //hookRigid.velocity = Vector3.zero;
            }
            
        }
    }

}
