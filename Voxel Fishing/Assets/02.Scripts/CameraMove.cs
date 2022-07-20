using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    [SerializeField] private Camera camera;
    [SerializeField] private Transform target;

    public Vector3 offset;
    

    private void LateUpdate() {
        //Vector3.Slerp(camera.transform.position, target.transform.position, 1 * Time.deltaTime);
    }
}
