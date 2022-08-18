using System.Collections.Generic;
using UnityEngine;
// FB is a MUST!
using Facebook.Unity;

namespace MondayOFF {
    public class EventsManager : MonoBehaviour {
        public static EventsManager instance { get; private set; }
        static bool isReady = false;

        public static void PrepareManager() {
            isReady = true;
            if (instance != null) {
                instance.Initialize();
            }
        }

        EventTracker _eventTracker = new EventTracker();
        public void TryStage(int stageNum, string stageName = "Stage") => _eventTracker.TryStage(stageNum, stageName);
        public void ClearStage(int stageNum, string stageName = "Stage") => _eventTracker.ClearStage(stageNum, stageName);
        public void LogCustomEvent(string eventName, Dictionary<string, string> parameters = null) => _eventTracker.LogCustomEvent(eventName, parameters);

        private void Initialize() {
            // Facebook
            if (!FB.IsInitialized) {
                try {
                    FB.Init(OnFBInitialization);
                } catch (System.Exception e) {
                    Debug.LogException(e);
                    Debug.LogWarning("Failed to initialize Facebook SDK");
                }
            } else {
                FB.ActivateApp();
            }

            _eventTracker.initialize();

            // Initialize Game Analytics if implemented
            var unityAssembly = System.Reflection.Assembly.Load("Assembly-CSharp");
            var gaType = unityAssembly.GetType("GameAnalyticsSDK.GameAnalytics");
            if (gaType == null) {
                Debug.LogWarning("GameAnalytics not integrated");
                return;
            }

            if (GameObject.FindObjectOfType(gaType) == null) {
                var item = Resources.Load("GameAnalytics", typeof(GameObject)) as GameObject;
                GameObject go = GameObject.Instantiate(item);
                go.name = "GameAnalytics";
            }

            var initializeMethodInfo = gaType.GetMethod("Initialize");
            initializeMethodInfo.Invoke(null, null);
        }

        private void OnFBInitialization() {
            if (FB.IsInitialized) {
                FB.ActivateApp();
            } else {
                Debug.LogWarning("Failed to Initialize the Facebook SDK");
            }
        }

        private void OnApplicationPause(bool pauseStatus) {
            if (!pauseStatus) {
                if (FB.IsInitialized) {
                    OnFBInitialization();
                }
            }
        }

        private void Awake() {
            if (instance != null) {
                Debug.Assert(false, "Duplicate EventsManager found");
                DestroyImmediate(this.gameObject);
                return;
            }
            instance = this;

            if (isReady) {
                Initialize();
            }
        }
    }
}