using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OceanTrigger : MonoBehaviour
{
    [SerializeField] private GameObject touchToPullButton;

    private void OnTriggerEnter(Collider other) {
        if(other.CompareTag("FishingHook"))
        {
            other.GetComponent<Rigidbody>().drag = 10f;
            FishingLogic.instance.enablePulling = true;
            touchToPullButton.SetActive(true);

        }
    }

    private void OnTriggerExit(Collider other) {
        if(other.CompareTag("FishingHook"))
        {
            other.GetComponent<Rigidbody>().drag= 3f;
            FishingLogic.instance.enablePulling = false;
            touchToPullButton.SetActive(false);
        }
    }
}
