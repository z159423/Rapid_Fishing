using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    [SerializeField] private Camera newCamera;
    [SerializeField] private Transform target;

    public Vector3 offset;

    private void FixedUpdate() {

        newCamera.transform.position = new Vector3(target.transform.position.x, Vector3.Slerp(newCamera.transform.position, target.transform.position, 1 * Time.deltaTime).y, newCamera.transform.position.z);
        
    }
}
