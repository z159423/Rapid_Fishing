using UnityEngine;

namespace MondayOFF {
#if PLAYON_ENABLED //&& !UNITY_EDITOR
    public partial class AdsManager : MonoBehaviour {
        AdUnit _adUnit = default;
        int _adCount = 0;

        public bool CustomShowAudioAd() {
            if (_adUnitIDs.shouldShowLogoAfterInterstitial) {
                return false;
            }
            return ShowAudioAd();
        }

        public void CloseAudioAd() {
            _adUnit.CloseAd();
        }

        private bool ShowAudioAd() {
            if (PlayOnSDK.IsInitialized() && _adUnit.IsAdAvailable()) {
                _adUnit.ShowAd();
                return true;
            }

            return false;
        }

        private void InitializePlayOnSDK() {
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

            if (_adUnitIDs.shouldShowLogoAfterInterstitial && _adUnitIDs.interstitialDisplayCount > 0) {
                MaxSdkCallbacks.Interstitial.OnAdHiddenEvent += (_, __) => {
                    if (_adCount++ % _adUnitIDs.interstitialDisplayCount == 0) {
                        CustomShowAudioAd();
                    }
                };
            }

            PlayOnSDK.SetLogLevel(_adUnitIDs.playOnLogLevel);
            _adUnit.SetLogo(_adUnitIDs.playOnLogoAnchor, _adUnitIDs.playOnLogoOffset.x, _adUnitIDs.playOnLogoOffset.y, _adUnitIDs.playOnLogoSize);
        }

        private void OnApplicationPause(bool pauseStatus) {
            PlayOnSDK.onApplicationPause(pauseStatus);
        }
    }
#else
    public partial class AdsManager : MonoBehaviour {
        private void InitializePlayOnSDK() { }
    }
#endif
}
