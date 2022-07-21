using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMove : MonoBehaviour
{
    [SerializeField] private Camera camera;
    [SerializeField] private Transform target;

    public Vector3 offset;

    private void FixedUpdate() {

        camera.transform.position = new Vector3(target.transform.position.x, Vector3.Slerp(camera.transform.position, target.transform.position, 1 * Time.deltaTime).y, camera.transform.position.z);
        
    
    }
}
