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

    [SerializeField] private RectTransform canvas;
    [SerializeField] private Camera camera;

    private Vector2 touchStartPoint;
    private Vector2 currentTouchPoint;
    private Vector2 joystickDir;

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

                Vector2 pos;
                if (RectTransformUtility.ScreenPointToLocalPointInRectangle(
                            canvas, new Vector2(Input.mousePosition.x, Input.mousePosition.y),
                            camera, out pos))

                    currentTouchPoint = pos;
                

                joystickDir = (currentTouchPoint - touchStartPoint);

                Vector2 clampJoystickDir = new Vector2(Mathf.Clamp(joystickDir.x, -100, 100), Mathf.Clamp(joystickDir.y, -100, 100));

                joystick_Handle.transform.localPosition = touchStartPoint + clampJoystickDir;

                if (FishingLogic.instance.pulling)
                {
                    hook.Translate(new Vector3(joystickDir.normalized.x, joystickDir.normalized.y * 0.5f, 0) * hookMoveSpeed * Time.deltaTime * 100);
                }

                //print(joystickDir);

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

                Vector2 pos;
                if (RectTransformUtility.ScreenPointToLocalPointInRectangle(

                            canvas, new Vector2(Input.mousePosition.x, Input.mousePosition.y),

                            camera, out pos))

                    joystick_Background.transform.localPosition = pos;
                joystick_Handle.transform.localPosition = pos;

                joystick_Background.gameObject.SetActive(true);
                joystick_Handle.gameObject.SetActive(true);

                
                touchStartPoint = pos;
            }
        }
    }


    public void OnPointerUp(PointerEventData eventData)
    {
        Pressed = false;

        HideJoystick();
        //print("2222");
    }

    public void UpgradeHookMoveSpeed(float value)
    {
        hookMoveSpeed += value;
    }

    public void HideJoystick()
    {
        joystick_Background.gameObject.SetActive(false);
        joystick_Handle.gameObject.SetActive(false);
    }

}
