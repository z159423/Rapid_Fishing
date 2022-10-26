using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class OceanTrigger : MonoBehaviour
{
    [SerializeField] private GameObject touchToPullButton;

    [SerializeField] private GameObject waterSplashParticle;
    [SerializeField] private ParticleSystem bubbleParticle;

    [SerializeField] private GameObject arrow;
    [SerializeField] private Rigidbody rigid;

    [SerializeField] private FishingHook hook;
    [SerializeField] private FishingRod rod;



    private void OnTriggerEnter(Collider other)
    {
        /*
        if (other.CompareTag("FishingHook") && rod.isStart)
        {
            //other.GetComponent<Rigidbody>().drag = 6.5f;

            if (FishingLogic.instance.pulling == false)
                touchToPullButton.SetActive(true);

            FishingLogic.instance.enablePulling = true;

            var particle = Instantiate(waterSplashParticle, other.transform.position, Quaternion.Euler(-90, 0, 0));

            bubbleParticle.Play();

            Destroy(particle, 5f);

            hook.targetHookZoomOffset = 7f;
        }

        if (other.CompareTag("FishingHook"))
        {
            hook.inTheOcean = true;
        } */
        if (other.CompareTag("FishingHook") && rod.isStart)
        {
            var particle = Instantiate(waterSplashParticle, other.transform.position, Quaternion.Euler(-90, 0, 0));
            bubbleParticle.Play();
            Destroy(particle, 5f);
        }

        if (other.TryGetComponent<Fish>(out Fish fish))
        {
            fish.GetComponent<Rigidbody>().useGravity = false;
            fish.GetComponent<Rigidbody>().velocity = Vector3.zero;
        }

        if (FishingLogic.instance.pulling)
        {
            rigid.useGravity = false;
        }
    }

    private void OnTriggerStay(Collider other)
    {
        if (other.CompareTag("FishingHook") && rod.isStart && !FishingLogic.instance.enablePulling)
        {
            if (FishingLogic.instance.pulling == false)
                //touchToPullButton.SetActive(true);

            //FishingLogic.instance.enablePulling = true;

            hook.targetHookZoomOffset = 7f;

            hook.inTheOcean = true;
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.CompareTag("FishingHook"))
        {
            other.GetComponent<Rigidbody>().drag = 1f;
            FishingLogic.instance.enablePulling = false;
            touchToPullButton.SetActive(false);

            var particle = Instantiate(waterSplashParticle, other.transform.position, Quaternion.Euler(-90, 0, 0));

            bubbleParticle.Stop();

            Destroy(particle, 5f);

            arrow.SetActive(false);

            if (FishingLogic.instance.pulling)
            {
                rigid.useGravity = true;
            }

            hook.inTheOcean = false;

        }

        if (other.TryGetComponent<Fish>(out Fish fish))
        {
            fish.GetComponent<Rigidbody>().useGravity = true;
        }


    }
}
