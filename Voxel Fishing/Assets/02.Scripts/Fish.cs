using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fish : MonoBehaviour
{

    public float sensingRadius = 2f;

    public float moveSpeed = 1f;
    public float followTargetSpeed = 1.5f;
    public float rotationSpeed = 1f;

    public Transform target = null;

    private bool targetSearching = true;
    private Vector3 dir = Vector3.zero;

    [SerializeField] private Rigidbody rigid;

    [SerializeField] private bool biteBait = false;
    [SerializeField] private Vector3 dirToHook;
    [SerializeField] private Transform head;

    // Update is called once per frame

    private void Start() {
        
        //StartCoroutine(ChangeDir());
        //StartCoroutine(FindTarget());
    }

    void Update()
    {
        if(biteBait)
        {
            dirToHook = (target.position - head.transform.position).normalized;

                var rotateAmount = Vector3.Cross(dirToHook, transform.up);
                rigid.angularVelocity = -rotateAmount * 5f;

                rigid.transform.position = target.position;

                rigid.velocity = Vector3.zero;
        }
        else
        {
            if(targetSearching)
            {
                rigid.transform.Translate(Vector3.up * moveSpeed * Time.deltaTime);
                rigid.velocity = Vector3.zero;
                transform.Rotate(new Vector3(0,0, rotationSpeed * Time.deltaTime));
            }
            else 
            {
                dirToHook = (target.position - head.transform.position).normalized;

                var rotateAmount = Vector3.Cross(dirToHook, transform.up);
                rigid.angularVelocity = -rotateAmount * 3f;

                rigid.transform.Translate(Vector3.up * (moveSpeed * followTargetSpeed) * Time.deltaTime);
            }

        }

        if(target != null)
        {
            if(Vector3.Distance(target.position, head.position) < 0.2f)
                BiteBait();
        }

    }

    private IEnumerator FindTarget()
    {
        float searchingTime = Random.Range(.4f, .6f);

        while(true)
        {
            yield return new WaitForSeconds(searchingTime);

            Collider[] colls = Physics.OverlapSphere(transform.position, sensingRadius);

            for(int i = 0; i < colls.Length; i++)
            {
                if(colls[i].CompareTag("FishingHook"))
                {
                    if(!FishingLogic.instance.biteBate)
                    {
                        target = colls[i].transform;
                        targetSearching = false;
                    }
                    else
                    {
                        target = null;
                        targetSearching = true;
                    }
                }
            }
        }
    }

    private IEnumerator ChangeDir()
    {
        while(targetSearching)
        {
            yield return new WaitForSeconds(Random.Range(1,5));

            rotationSpeed = Random.Range(-100, 100);
        }
    }

    private void BiteBait()
    {
        biteBait = true;

        FishingLogic.instance.biteBate = true;
    }
}
