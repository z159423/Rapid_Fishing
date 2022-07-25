using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OceanTrigger : MonoBehaviour
{
    [SerializeField] private GameObject touchToPullButton;

    [SerializeField] private GameObject waterSplashParticle;

    private void OnTriggerEnter(Collider other) {
        if(other.CompareTag("FishingHook"))
        {
            //other.GetComponent<Rigidbody>().drag = 6.5f;
            FishingLogic.instance.enablePulling = true;
            touchToPullButton.SetActive(true);

            var particle = Instantiate(waterSplashParticle, other.transform.position, Quaternion.Euler(-90,0,0));

            Destroy(particle, 5f);
        }

        if(other.TryGetComponent<Fish>(out Fish fish))
        {
            fish.GetComponent<Rigidbody>().useGravity = false;
            fish.GetComponent<Rigidbody>().velocity = Vector3.zero;
        }
    }

    private void OnTriggerExit(Collider other) {
        if(other.CompareTag("FishingHook"))
        {
            other.GetComponent<Rigidbody>().drag= 1f;
            FishingLogic.instance.enablePulling = false;
            touchToPullButton.SetActive(false);

            var particle = Instantiate(waterSplashParticle, other.transform.position, Quaternion.Euler(-90,0,0));

            Destroy(particle, 5f);
        }

        if(other.TryGetComponent<Fish>(out Fish fish))
        {
            fish.GetComponent<Rigidbody>().useGravity = true;
        }
    }
}
