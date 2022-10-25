using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnviromentEditor : MonoBehaviour
{
    [SerializeField] private Transform hook;

    [SerializeField] private SpriteRenderer[] Oceans;
    [SerializeField] private SpriteRenderer OceanSurface;
    [SerializeField] private MeshRenderer depthMask;
    [SerializeField] private SpriteRenderer depthSprite;
    [SerializeField] private Material depthMaskMat;

    [SerializeField] private Light sunLights;
    [SerializeField] private Light hookLight;
    [SerializeField] private Light challengeLight;

    public float oceanSpriteValueMultifly = 1f;
    public float sunLightIntensity = 0.01f;
    public float minSunLightIntensity = 0.25f;
    public float challengeLightIntensity = 4.5f;
    public float depthMaskTransparentValue = 4.5f;
    public float ambientLightIntensity = 2.5f;
    // Start is called before the first frame update
    void Start()
    {
        depthMask.material = Instantiate(depthMaskMat);
        depthSprite.material = Instantiate(depthMaskMat);
    }

    // Update is called once per frame
    void Update()
    {
        if (hook.position.y < 0)
        {
            float oceancolorValue = (255 + hook.position.y * oceanSpriteValueMultifly) / 255f;
            oceancolorValue = Mathf.Clamp(oceancolorValue, 30f / 255f, 1);

            float value2 = (200 + (hook.position.y * 2.5f)) / 255f;
            float sunLightValue = hook.position.y * sunLightIntensity;

            for (int i = 0; i < Oceans.Length; i++)
            {
                Oceans[i].color = new Color(oceancolorValue, oceancolorValue, oceancolorValue, Oceans[i].color.a);
                RenderSettings.ambientLight = new Color(value2, value2, value2);
            }

            float depthMaskValue = (Mathf.Abs(hook.position.y) * depthMaskTransparentValue) / 255f;

            depthMask.materials[0].color = new Color(depthMask.materials[0].color.r, depthMask.materials[0].color.g, depthMask.materials[0].color.b, depthMaskValue);
            depthSprite.material.color = new Color(depthSprite.material.color.r, depthSprite.material.color.g, depthSprite.material.color.b, depthMaskValue);
            sunLights.intensity = 1 + sunLightValue;
            sunLights.intensity = Mathf.Clamp(sunLights.intensity, minSunLightIntensity, 1);

            //hookLight.intensity = Mathf.Abs(sunLightValue);
            challengeLight.intensity = Mathf.Abs(sunLightValue) * challengeLightIntensity;

            //OceanSurface.color = new Color(OceanSurface.color.r, OceanSurface.color.g, OceanSurface.color.b, (210 + Mathf.Abs((int)(hook.position.y))) / 255f);
            OceanSurface.color = new Color(OceanSurface.color.r, OceanSurface.color.g, OceanSurface.color.b, ((190f + Mathf.Abs(hook.position.y)) / 255f));
        }
        else
        {

        }
    }
}
