using UnityEngine;

[assembly: UnityEngine.Scripting.Preserve]
namespace MondayOFF {
    public static partial class EveryDay {
        public static string privacyString { get; private set; }

        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        public static void AfterSceneLoad() {
            initialize();
        }

        static void OnMaxSdkInitialized(MaxSdk.SdkConfiguration sdkConfiguration) {
            PrepareSettings(sdkConfiguration);

            // Singular
            SingularSDK.InitializeSingularSDK();

            // Load Ads when ready
            AdsManager.privacyString = privacyString;
            AdsManager.sendAdData = SingularAdDataSender.SendAdData;
            AdsManager.PrepareManager();

            // Initialize Events when ready
            EventsManager.PrepareManager();
        }

        static void initialize() {
            Debug.Log("[EVERYDAY] Initialize..");

            // Disable logger
            Debug.Log("[EVERYDAY] Disable logger");
            UnityEngine.Debug.unityLogger.logEnabled = true;

            // Singular
            SingularSDK.SetCustomUserId(Identifier.CustomUserID);

            // MaxSDK
            MaxSdkCallbacks.OnSdkInitializedEvent += OnMaxSdkInitialized;

            MaxSdk.SetSdkKey("-uBAP4IJbzlOMFq-KJUwdvW8bwGdhtGgmRr9V8T65CUSSIQocwhFqCNP7e2pVITFkJPERuLW5q-X7PJlJ_-7CM");
            MaxSdk.SetUserId(Identifier.CustomUserID);

            MaxSdk.InitializeSdk();
        }
    }
}