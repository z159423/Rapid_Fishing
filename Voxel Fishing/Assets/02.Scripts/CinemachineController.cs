using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Cinemachine;

public class CinemachineController : MonoBehaviour
{
    public static CinemachineController instance;

    [SerializeField] private CinemachineVirtualCamera cvc_Hook;
    [SerializeField] private CinemachineVirtualCamera cvc_Player;


    public Transform playerTrans;
    public Vector3 playerOffset;

    public Transform hookTrans;
    public Vector3 hookOffset;

    private void Awake()
    {
        instance = this;
    }

    public void ChangeFollow(Transform target)
    {
        cvc_Hook.Follow = target;
    }

    public void ChnageOffset(Vector3 offset)
    {
        cvc_Player.GetCinemachineComponent<Cinemachine.CinemachineTransposer>().m_FollowOffset = offset;
    }

    public void FollowHook()
    {
        cvc_Hook.m_Priority = 3;
    }

    public void FollowPlayer()
    {
        cvc_Hook.m_Priority = 1;
    }
}
