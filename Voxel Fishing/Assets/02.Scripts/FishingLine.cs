using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FishingLine : MonoBehaviour
{

    [SerializeField] private LineRenderer line;

    [SerializeField] private Transform startPoint;
    [SerializeField] private Transform endPoint;
    

    // Update is called once per frame
    void FixedUpdate()
    {
        line.SetPosition(0, startPoint.position);
        line.SetPosition(1, endPoint.position);
    }
}
