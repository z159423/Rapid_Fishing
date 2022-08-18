using UnityEngine;

#if UNITY_ANDROID && !UNITY_EDITOR
namespace MondayOFF {
    public static partial class EveryDay {
        private static void PrepareSettings(MaxSdkBase.SdkConfiguration sdkConfiguration) {
            // MAX
            MaxSdk.SetHasUserConsent(true);
            MaxSdk.SetDoNotSell(false);

            // FB
            AudienceNetwork.AdSettings.SetDataProcessingOptions(new string[] { });

            // US privacy string
            privacyString = "1---";
        }
    }
}
#endif