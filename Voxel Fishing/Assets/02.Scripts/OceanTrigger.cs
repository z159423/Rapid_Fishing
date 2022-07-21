using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OceanTrigger : MonoBehaviour
{
    private void OnTriggerEnter(Collider other) {
        if(other.CompareTag("FishingHook"))
        {
            other.GetComponent<Rigidbody>().drag = 10f;
        }
    }

    private void OnTriggerExit(Collider other) {
        if(other.CompareTag("FishingHook"))
        {
            other.GetComponent<Rigidbody>().drag= 3f;
        }
    }
}
