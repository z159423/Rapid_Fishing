using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishingRod : MonoBehaviour
{
    [SerializeField] private Rigidbody hookRigid;

    [SerializeField] private Transform pivot = null;

    private void Awake()
    {
        // pivot = transform.GetChild(1);
    }
    public void ReleaseHook()
    {
        hookRigid.isKinematic = false;
        hookRigid.AddForce((Vector2.right + Vector2.up) * 200);
        isStart = true;
    }

    bool isStart = false;
    private void LateUpdate()
    {
        if (isStart)
        {
            float dis = Vector3.Distance(pivot.position, hookRigid.position);
            if (dis > 3)
            {
                Vector3 dir = (hookRigid.transform.localPosition - pivot.localPosition).normalized;
                hookRigid.transform.localPosition = pivot.localPosition + (3 * dir);
            }
        }
    }

}
