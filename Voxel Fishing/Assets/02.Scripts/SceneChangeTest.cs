using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneChangeTest : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(ChangeScene());

        IEnumerator ChangeScene()
        {
            yield return null;

            SceneManager.LoadScene(1);
        }

        
    }

    
}
