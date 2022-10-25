using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimationController : MonoBehaviour
{
    Animation anim;

    private void Awake()
    {
        anim = GetComponent<Animation>();
    }

    public void PlayThrowAnim()
    {
        anim.Play("fishing_1");
    }

    public void PlayDefaultAnim()
    {
        anim.Play("fishing_0");
    }
}
