using UnityEngine;
using System.Runtime.InteropServices;

namespace AudienceNetwork {
    public static class AdSettings {

        public static void SetDataProcessingOptions(string[] dataProcessingOptions) {
#if UNITY_ANDROID
            AndroidJavaClass adSettings = new AndroidJavaClass("com.facebook.ads.AdSettings");
            adSettings.CallStatic("setDataProcessingOptions", (object)dataProcessingOptions);
#endif

#if UNITY_IOS
            FBAdSettingsBridgeSetDataProcessingOptions(dataProcessingOptions, dataProcessingOptions.Length);
#endif
        }

        public static void SetDataProcessingOptions(string[] dataProcessingOptions, int country, int state) {
#if UNITY_ANDROID
            AndroidJavaClass adSettings = new AndroidJavaClass("com.facebook.ads.AdSettings");
            adSettings.CallStatic("setDataProcessingOptions", (object)dataProcessingOptions, country, state);
#endif

#if UNITY_IOS
            FBAdSettingsBridgeSetDetailedDataProcessingOptions(dataProcessingOptions, dataProcessingOptions.Length, country, state);
#endif
        }

#if UNITY_IOS
        [DllImport("__Internal")]
        private static extern void FBAdSettingsBridgeSetDataProcessingOptions(string[] dataProcessingOptions, int length);

        [DllImport("__Internal")]
        private static extern void FBAdSettingsBridgeSetDetailedDataProcessingOptions(string[] dataProcessingOptions, int length, int country, int state);

        [DllImport("__Internal")] 
        private static extern void FBAdSettingsBridgeSetAdvertiserTrackingEnabled(bool advertiserTrackingEnabled);

        public static void SetAdvertiserTrackingEnabled(bool advertiserTrackingEnabled) {
            FBAdSettingsBridgeSetAdvertiserTrackingEnabled(advertiserTrackingEnabled);
        }
#endif
    }
}