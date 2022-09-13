using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Fish : MonoBehaviour
{
    public FishType fishType;

    public FishData fishData;

    public float sensingRadius = 2f;

    public float moveSpeed = 1f;
    public float followTargetSpeed = 1.5f;
    public float rotationSpeed = 1f;

    public Transform target = null;

    private bool targetSearching = true;
    private Vector3 dir = Vector3.zero;

    [SerializeField] private Rigidbody rigid;

    //[SerializeField] private bool biteBait = false;
    [SerializeField] private Vector3 dirToHook;
    [SerializeField] private Transform head;

    [SerializeField] private MapData mapData;
    public int usingMapDataNumber;

    //=================================================

    [Space]
    private Vector3 targetPosition;
    private float changePositionTime = 5;
    private Vector3 dirToTarget;
    private Vector3 targetAngle;

    [Space]
    public bool hooked = false;

    // Update is called once per frame

    private void Start()
    {
        if (rigid == null)
            rigid = GetComponent<Rigidbody>();

        //StartCoroutine(ChangeDir());
        //StartCoroutine(FindTarget());
    }

    private void OnEnable()
    {
        FishPool.instance.generatedFishList.Add(this);
        StartCoroutine(ChangeTargetPosition());

    }

    private void OnDisable() {
        FishPool.instance.generatedFishList.Remove(this);
    }

    void Update()
    {
        /*
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
        }*/

        if (!hooked)
        {
            //transform.Rotate(new Vector3(0, 0, rotationSpeed * Time.deltaTime));

            //transform.Translate(dirToTarget * (moveSpeed * followTargetSpeed) * Time.deltaTime);
            rigid.velocity = dirToTarget * moveSpeed;

            transform.rotation = Quaternion.Lerp(transform.rotation, Quaternion.Euler(0,targetAngle.y,targetAngle.z), rotationSpeed * Time.deltaTime);
        }
    }

    private IEnumerator FindTarget()
    {
        float searchingTime = Random.Range(.4f, .6f);

        while (true)
        {
            yield return new WaitForSeconds(searchingTime);

            Collider[] colls = Physics.OverlapSphere(transform.position, sensingRadius);

            for (int i = 0; i < colls.Length; i++)
            {
                if (colls[i].CompareTag("FishingHook"))
                {
                    if (!FishingLogic.instance.biteBate)
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
        while (targetSearching)
        {
            yield return new WaitForSeconds(Random.Range(1, 5));

            rotationSpeed = Random.Range(-100, 100);

        }
    }

    private void BiteBait()
    {
        //biteBait = true;

        FishingLogic.instance.biteBate = true;
    }

    public virtual void Hooked(Transform hook)
    {
        hooked = true;

        transform.SetParent(hook);

        GetComponent<Rigidbody>().isKinematic = true;
        //transform.localPosition = new Vector3(Random.Range(-3f, 3f), Random.Range(-3f, 3f), 0);

        //transform.position = transform.position - head.position;

        GetComponent<Collider>().isTrigger = true;

        Vibration.Vibrate((long)100);

        if (GetComponent<ChestMover>() != null)
            GetComponent<ChestMover>().chest.deleteConnect();

    }

    public IEnumerator ChangeTargetPosition()
    {
        while (gameObject.activeSelf)
        {
            targetPosition = new Vector3
            (Random.Range(mapData.mapDataList[usingMapDataNumber].minMapSize.x, mapData.mapDataList[usingMapDataNumber].maxMapSize.x),
            Random.Range(mapData.mapDataList[usingMapDataNumber].minMapSize.y, mapData.mapDataList[usingMapDataNumber].maxMapSize.y), 0);

            dirToTarget = (targetPosition - transform.position).normalized;

            //transform.rotation = Quaternion.LookRotation(dirToTarget);

            Quaternion tempDir = Quaternion.LookRotation(dirToTarget);

            float y = 0, z = 0;

            z = -tempDir.eulerAngles.x;

            if ((int)tempDir.eulerAngles.y > 80 && (int)tempDir.eulerAngles.y < 100)
                y = 0;
            else
                y = -180;

                //print(tempDir.eulerAngles);

                targetAngle = new Vector3(0,y,z);


            yield return new WaitForSeconds(Random.Range(1, changePositionTime));
        }
    }

    public IEnumerator Stuggling()
    {
        yield return null;
    }

    public virtual void SellFish()
    {
        
    }
    
}

[System.Serializable]
public class FishType
{
    public int cost;
    public int tier = 1;

    public int fishNumber = 1;
    public Vector3 boundSize = new Vector3(1,1,1);
}
