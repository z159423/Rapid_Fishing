using UnityEngine;
using UnityEngine.EventSystems;

public class FixedTouchField : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{
    [HideInInspector]
    public Vector2 TouchDist;
    [HideInInspector]
    public Vector2 PointerOld;
    [HideInInspector]
    protected int PointerId;
    [HideInInspector]
    public bool Pressed;

    [SerializeField] private Transform hook;

    [Space]

    [SerializeField] private GameObject joystick_Background;
    [SerializeField] private GameObject joystick_Handle;

    public float hookMoveSpeed = 1f;

    private void Start()
    {

    }

    // Update is called once per frame
    void LateUpdate()
    {
        if (Pressed)
        {
            //print(PointerId + " " + Input.touches.Length + " " + Input.touches.Length);
            if (PointerId >= 0 && PointerId < Input.touches.Length)
            {
                TouchDist = Input.touches[PointerId].position - PointerOld;
                PointerOld = Input.touches[PointerId].position;

                if (FishingLogic.instance.pulling)
                {
                    hook.Translate(new Vector3(TouchDist.x, TouchDist.y * 0.5f, 0) * hookMoveSpeed * Time.deltaTime);
                }

            }
            else
            {
                TouchDist = new Vector2(Input.mousePosition.x, Input.mousePosition.y) - PointerOld;
                PointerOld = Input.mousePosition;
            }
        }
        else
        {
            TouchDist = new Vector2();
        }
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        Pressed = true;
        PointerId = eventData.pointerId;
        PointerOld = eventData.position;

        //print(PointerId);



        if (PointerId >= 0 && PointerId < Input.touches.Length)
        {
            if (FishingLogic.instance.pulling)
            {
                joystick_Background.transform.localPosition = new Vector3(eventData.position.x - (eventData.position.x * 2), eventData.position.y - (eventData.position.y * 2));
                joystick_Handle.transform.localPosition = new Vector3(eventData.position.x - (eventData.position.x * 2), eventData.position.y - (eventData.position.y * 2));

                print(eventData.position);
            }
        }
    }


    public void OnPointerUp(PointerEventData eventData)
    {
        Pressed = false;

        //print("2222");
    }

    public void UpgradeHookMoveSpeed(float value)
    {
        hookMoveSpeed += value;
    }

}
