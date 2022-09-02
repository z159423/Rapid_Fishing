using UnityEngine;

#if UNITY_ANDROID && !UNITY_EDITOR
namespace MondayOFF {
    public partial class AdsManager : MonoBehaviour {
        private System.Collections.IEnumerator CheckConsentStatus(MaxSdkBase.SdkConfiguration sdkConfiguration) {
            // MAX
            MaxSdk.SetHasUserConsent(true);
            MaxSdk.SetDoNotSell(false);

            // FB
            Facebook.Unity.FB.Mobile.SetDataProcessingOptions(new string[] { });
            AudienceNetwork.AdSettings.SetDataProcessingOptions(new string[] { });

            // US privacy string
            privacyString = "1---";

            yield return DelayedAdLoad();
        }
    }
}
#endif