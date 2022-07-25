using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class FishingHook : MonoBehaviour
{

    public List<Fish> hookedFish = new List<Fish>();

    public GameObject sellParticle;
    public Transform sellParticleParent;

    [SerializeField] private Rigidbody rigid;

    public float minDrag = 1f;
    public float maxDrag = 6.5f;
    public float dragSpeed = 1f;



    [SerializeField] private TextMeshProUGUI moneyText;
    public int money = 0;

    private void Update()
    {

        if (FishingLogic.instance.enablePulling)
        {
            rigid.drag = Mathf.Lerp(rigid.drag, maxDrag, dragSpeed * Time.deltaTime);
        }
        else
        {
            
        }

    }

    private void LateUpdate() {
        //transform.position = new Vector3(transform.position.x, transform.position.y, 0);
    }

    private void OnTriggerEnter(Collider other)
    {

        if (other.TryGetComponent<Fish>(out Fish fish))
        {
            if (fish.hooked || !FishingLogic.instance.pulling)
                return;

            hookedFish.Add(fish);

            fish.Hooked(transform);
        }
    }

    public void SellFish()
    {
        for (int i = 0; i < hookedFish.Count; i++)
        {
            Destroy(hookedFish[i].gameObject);

            var particle = Instantiate(sellParticle, sellParticleParent.position, Quaternion.identity);

            Destroy(particle, 5f);

            money += hookedFish[i].fishType.cost;

            moneyText.text = money.ToString();

        }
        hookedFish.Clear();
    }
}
