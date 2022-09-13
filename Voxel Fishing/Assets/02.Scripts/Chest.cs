using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Chest : Fish
{

    [Header("==========chest==========")]
    public Fish chestMover;

    public int chestTier;

    [SerializeField] private Rigidbody rigid2;
    public LineRenderer line;
    private float distToMover = 0;
    private Vector3 dirToMover;

    public float chestPullDist = 5f;
    public float pullForce = 1f;

    public void Update()
    {
        if(chestMover != null)
        {
        distToMover = Vector3.Distance(transform.position, chestMover.transform.position);
            dirToMover = (chestMover.transform.position - transform.position).normalized;
        }
    }

    public void FixedUpdate()
    {
        if(chestMover != null)
        {
            if(chestPullDist < distToMover)
            {
                rigid2.velocity = dirToMover * pullForce;
            }
            else
            {
                rigid2.velocity = Vector3.zero;
            }
        }
    }


    

    public override void Hooked(Transform hook)
    {
        base.Hooked(hook);

        deleteConnect();
    }

    public void deleteConnect()
    {
        chestMover = null;
        line.enabled = false;
    }
}
