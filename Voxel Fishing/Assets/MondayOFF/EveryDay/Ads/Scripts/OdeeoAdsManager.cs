using UnityEngine;
namespace MondayOFF {
    public partial class AdsManager : MonoBehaviour {
#if PLAYON_ENABLED
        AdUnit _adUnit = default;
        int _adCount = 0;

        public bool CustomShowAudioAd() {
#if UNITY_EDITOR
            return false;
#endif
            if (PlayOnSDK.IsInitialized() && _adUnit.IsAdAvailable()) {
                _adUnit.ShowAd();
                return true;
            }

            return false;
        }

        public void CustomCloseAudioAd() {
#if UNITY_EDITOR
            return;
#endif
            _adUnit.CloseAd();
        }

        private void InitializePlayOnSDK() {
#if UNITY_EDITOR
            return;
#endif

            PlayOnSDK.OnInitializationFinished += OnPlayOnInitialized;

            _adUnit = new AdUnit(PlayOnSDK.AdUnitType.AudioLogoAd);
            
            PlayOnSDK.Initialize(_adUnitIDs.playOnKey
#if UNITY_IOS
              , _adUnitIDs.storeID
#endif
         );
        }

        private void OnPlayOnInitialized() {
#if UNITY_IOS
            if (MaxSdk.HasUserConsent())
#endif
            {
                PlayOnSDK.SetGdprConsent(true);
                PlayOnSDK.SetIABUSPrivacyString(AdsManager.privacyString);
            }

            if (_adUnitIDs.shouldShowLogoAfterInterstitial && _adUnitIDs.interstitialCount > 0) {
                MaxSdkCallbacks.Interstitial.OnAdHiddenEvent += (_, __) => {
                    if (_adCount++ % _adUnitIDs.interstitialCount == 0) {
                        CustomShowAudioAd();
                    }
                };
            }

            PlayOnSDK.SetLogLevel(_adUnitIDs.playOnLogLevel);
            _adUnit.SetLogo(_adUnitIDs.playOnLogoAnchor, _adUnitIDs.playOnLogoOffset.x, _adUnitIDs.playOnLogoOffset.y, _adUnitIDs.playOnLogoSize);
        }

        private void OnApplicationPause(bool pauseStatus) {
#if UNITY_EDITOR
            return;
#endif
            PlayOnSDK.onApplicationPause(pauseStatus);
        }

#endif
    }
}
