using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LowLineRenderer : MonoBehaviour
{
    [SerializeField] private LineRenderer line;

    [Space]

    [SerializeField] private Transform start;
    [SerializeField] private Transform end;


    // Update is called once per frame
    void FixedUpdate()
    {
        line.SetPosition(0, start.position);
        line.SetPosition(1, end.position);
    }
}
