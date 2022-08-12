using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class ObjectMovement : MonoBehaviour
{
    public int moveX = 0;
    public int moveSec = 0;

    private void Start() {
        transform.DOLocalMoveX(moveX, moveSec).OnComplete(LoopMoveX);
    }

    public void LoopMoveX()
    {
        transform.Rotate(new Vector3(0,180,0));
        moveX = -moveX;
        transform.DOLocalMoveX(moveX, moveSec)
        .OnComplete(LoopMoveX);
    }
}
