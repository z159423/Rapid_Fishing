#if !FIREBASE_ENABLED || UNITY_EDITOR
using UnityEngine;
using System.Collections.Generic;

namespace MondayOFF {
    public class EventTracker {
        public void initialize() {
            Debug.Log("[EventTracker] Initialze event tracker");
        }

        public void TryStage(int stageNum, string stageName = "Stage") {
            Debug.Log($"[EventTracker] Trying {stageName} {stageNum}");
        }

        public void ClearStage(int stageNum, string stageName = "Stage") {
            Debug.Log($"[EventTracker] Cleared {stageName} {stageNum}");
        }

        // Stringify prameter values
        public void LogCustomEvent(string eventName, Dictionary<string, string> parameters = null) {
            if (parameters == null) {
                Debug.Log($"[EventTracker] {eventName} logged without any parameters");
            } else {
                string paramString = "\n";
                foreach (var item in parameters) {
                    paramString += $"{item.Key} : {item.Value}\n";
                }

                Debug.Log($"[EventTracker] {eventName} logged with parameters: {paramString}");
            }
        }
    }
}
#endif