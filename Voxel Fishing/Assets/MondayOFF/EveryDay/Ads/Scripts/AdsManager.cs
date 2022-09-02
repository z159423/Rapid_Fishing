using UnityEngine;

namespace MondayOFF {
    public partial class AdsManager : MonoBehaviour {
        public static AdsManager instance { get; private set; }
        public static string privacyString = "";
        public static System.Action<MaxSdk.AdInfo> sendAdData = default;

        public static void PrepareManager() {
            isReady = true;
            if (instance != null) {
                instance.StartCoroutine(instance.DelayedAdLoad());
            }
        }
        static bool isReady = false;

        [Header("Check this to show Banner upon initialization")]
        [SerializeField] bool _showBannerOnLoad = false;

        [Header("Delayed Ad Loading (in seconds)")]
        [SerializeField] AdLoadingOrder _adLoadingOrder = AdLoadingOrder.Banner_Inter_Reward;
        [SerializeField][Range(0f, 30f)] float delay = 3f;

        [Header("Loading Panel")]
        [Tooltip("Reference to Loading Panel if there is any")]
        [SerializeField] GameObject _pannelLoading = default;

        [Header("Ad Unit ID")]
        [LabelOverride("Ad Unit ID Object")]
        [SerializeField] MondayOFFAdUnitID _adUnitIDs = default;

        public

        System.Action _onRewarded = default;
        bool _isBannerCreated = false;


        public bool IsInterstitialReady() {
            return IsInterstitialValid() && MaxSdk.IsInterstitialReady(_adUnitIDs.interstitialAdUnitId);
        }

        public bool IsRewardedReady() {
            return IsRewardedValid() && MaxSdk.IsRewardedAdReady(_adUnitIDs.rewardedAdUnitId);
        }

        /// <summary>
        /// Show Interstitial Ad
        /// </summary>
        public bool ShowInterstitial() {
            if (!IsInterstitialValid()) {
                return false;
            }

            if (MaxSdk.IsInterstitialReady(_adUnitIDs.interstitialAdUnitId)) {
                if (_pannelLoading != null) {
                    _pannelLoading.SetActive(true);
                }
                MaxSdk.ShowInterstitial(_adUnitIDs.interstitialAdUnitId);
                return true;
            } else {
                LoadInterstitial();
            }
            return false;
        }

        /// <summary>
        /// Show Rewarded Ad
        /// </summary>
        /// <param name="onRewarded"> Method to call when reward is granted..</param>
        public void ShowRewardedVideo(System.Action onRewarded) {
            if (!IsRewardedValid()) {
                return;
            }

            if (onRewarded == null) {
                Debug.LogWarning("[AdsManager] CANNOT show rewarded video without reward!");
                // return;
            }

            if (MaxSdk.IsRewardedAdReady(_adUnitIDs.rewardedAdUnitId)) {
                this._onRewarded = onRewarded;
                MaxSdk.ShowRewardedAd(_adUnitIDs.rewardedAdUnitId);
            } else {
                LoadRewardedAd();
            }
        }

        public void ShowBanner() {
            if (!IsBannerValid()) {
                return;
            }

            //show banner
            if (_isBannerCreated) {
                MaxSdk.ShowBanner(_adUnitIDs.bannerAdUnitId);
            } else {
                _showBannerOnLoad = true;
            }
        }

        public void HideBannder() {
            if (!IsBannerValid()) {
                return;
            }

            MaxSdk.HideBanner(_adUnitIDs.bannerAdUnitId);
        }

        private System.Collections.IEnumerator DelayedAdLoad() {
            var wfs = new WaitForSeconds(delay);
            System.Action[] adLoadingFuncs = new System.Action[3]{
                InitializeBannerAds,
                InitializeInterstitialAds,
                InitializeRewardedAds
            };

            byte loadingOrder = (byte)_adLoadingOrder;

            adLoadingFuncs[(loadingOrder >> 0) & 0b11].Invoke();

            yield return wfs;

            adLoadingFuncs[(loadingOrder >> 2) & 0b11].Invoke();

            yield return wfs;

            adLoadingFuncs[(loadingOrder >> 4) & 0b11].Invoke();

            if (_adUnitIDs.hasPlayOn) {
                InitializePlayOnSDK();
            }
        }

        private void ValidateAdUnitIDObject() {
            if (_adUnitIDs == null) {
                var loadedAdUnitIDs = Resources.FindObjectsOfTypeAll<MondayOFFAdUnitID>();

                if (loadedAdUnitIDs.Length == 1) {
                    _adUnitIDs = loadedAdUnitIDs[0];
                } else {
                    Debug.LogError("[AdsManager] There should only be 1 Ad unit ID object");
                }
            }
        }

        private bool IsInterstitialValid() {
            return _adUnitIDs.HasInterstitialAdUnitID() && MaxSdk.IsInitialized();
        }

        private bool IsRewardedValid() {
            return _adUnitIDs.HadRewardedAdUnitID() && MaxSdk.IsInitialized();
        }

        private bool IsBannerValid() {
            return _adUnitIDs.HasBannerAdUnitID() && MaxSdk.IsInitialized();
        }

        #region Interstitial
        int retryAttempt_IS;

        private void InitializeInterstitialAds() {
            if (!IsInterstitialValid()) {
                return;
            }

            // Attach callbacks
            MaxSdkCallbacks.Interstitial.OnAdLoadedEvent += OnInterstitialLoadedEvent;
            MaxSdkCallbacks.Interstitial.OnAdLoadFailedEvent += OnInterstitialFailedEvent;
            MaxSdkCallbacks.Interstitial.OnAdDisplayFailedEvent += InterstitialFailedToDisplayEvent;
            MaxSdkCallbacks.Interstitial.OnAdHiddenEvent += OnInterstitialDismissedEvent;

            MaxSdkCallbacks.Interstitial.OnAdRevenuePaidEvent += OnRevenuePaid;

            LoadInterstitial();
        }

        private void LoadInterstitial() {
            if (!IsInterstitialValid()) {
                return;
            }

            MaxSdk.LoadInterstitial(_adUnitIDs.interstitialAdUnitId);
        }

        private void OnInterstitialLoadedEvent(string adUnitId, MaxSdkBase.AdInfo adInfo) {
            // Interstitial ad is ready to be shown. MaxSdk.IsInterstitialReady(interstitialAdUnitId) will now return 'true'
            retryAttempt_IS = 0;
        }

        private void OnInterstitialFailedEvent(string adUnitId, MaxSdkBase.ErrorInfo errorInfo) {
            // Interstitial ad failed to load. We recommend retrying with exponentially higher delays.
            retryAttempt_IS++;
            double retryDelay = Mathf.Pow(2, retryAttempt_IS);

            Invoke("LoadInterstitial", (float)retryDelay);
        }

        private void InterstitialFailedToDisplayEvent(string adUnitId, MaxSdkBase.ErrorInfo errorInfo, MaxSdkBase.AdInfo adInfo) {
            // Interstitial ad failed to display. We recommend loading the next ad
            if (_pannelLoading != null) {
                _pannelLoading.SetActive(false);
            }
            LoadInterstitial();
        }

        private void OnInterstitialDismissedEvent(string adUnitId, MaxSdkBase.AdInfo adInfo) {
            // Interstitial ad is hidden. Pre-load the next ad
            if (_pannelLoading != null) {
                _pannelLoading.SetActive(false);
            }

            LoadInterstitial();
        }
        #endregion

        #region Rewarded
        int retryAttempt_RV;

        private void InitializeRewardedAds() {
            if (!IsRewardedValid()) {
                return;
            }

            // Attach callback
            MaxSdkCallbacks.Rewarded.OnAdLoadedEvent += OnRewardedAdLoadedEvent;
            MaxSdkCallbacks.Rewarded.OnAdLoadFailedEvent += OnRewardedAdFailedEvent;
            MaxSdkCallbacks.Rewarded.OnAdDisplayFailedEvent += OnRewardedAdFailedToDisplayEvent;
            MaxSdkCallbacks.Rewarded.OnAdDisplayedEvent += OnRewardedAdDisplayedEvent;
            MaxSdkCallbacks.Rewarded.OnAdClickedEvent += OnRewardedAdClickedEvent;
            MaxSdkCallbacks.Rewarded.OnAdHiddenEvent += OnRewardedAdDismissedEvent;
            MaxSdkCallbacks.Rewarded.OnAdReceivedRewardEvent += OnRewardedAdReceivedRewardEvent;

            MaxSdkCallbacks.Rewarded.OnAdRevenuePaidEvent += OnRevenuePaid;

            LoadRewardedAd();
        }

        private void LoadRewardedAd() {
            if (!IsRewardedValid()) {
                return;
            }

            MaxSdk.LoadRewardedAd(_adUnitIDs.rewardedAdUnitId);
        }

        private void OnRewardedAdLoadedEvent(string adUnitId, MaxSdkBase.AdInfo adInfo) {
            // Rewarded ad is ready to be shown. MaxSdk.IsRewardedAdReady(rewardedAdUnitId) will now return 'true'
            // Reset retry attempt
            retryAttempt_RV = 0;
        }

        private void OnRewardedAdFailedEvent(string adUnitId, MaxSdkBase.ErrorInfo errorInfo) {
            // Rewarded ad failed to load. We recommend retrying with exponentially higher delays.
            retryAttempt_RV++;
            double retryDelay = Mathf.Pow(2, retryAttempt_RV);

            Invoke("LoadRewardedAd", (float)retryDelay);
        }

        private void OnRewardedAdFailedToDisplayEvent(string adUnitId, MaxSdkBase.ErrorInfo errorInfo, MaxSdkBase.AdInfo adInfo) {
            // Rewarded ad failed to display. We recommend loading the next ad
            LoadRewardedAd();
        }

        private void OnRewardedAdDisplayedEvent(string adUnitId, MaxSdkBase.AdInfo adInfo) {

        }

        private void OnRewardedAdClickedEvent(string adUnitId, MaxSdkBase.AdInfo adInfo) {

        }

        private void OnRewardedAdDismissedEvent(string adUnitId, MaxSdkBase.AdInfo adInfo) {
            // Rewarded ad is hidden. Pre-load the next ad
            LoadRewardedAd();
        }

        private void OnRewardedAdReceivedRewardEvent(string adUnitId, MaxSdk.Reward reward, MaxSdkBase.AdInfo adInfo) {
            // Rewarded ad was displayed and user should receive the reward
            this._onRewarded?.Invoke();
            this._onRewarded = null;
        }
        #endregion

        #region Banner
        private void InitializeBannerAds() {
            if (!IsBannerValid()) {
                return;
            }

            // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
            // You may use the utility method `MaxSdkUtils.isTablet()` to help with view sizing adjustments
            MaxSdk.CreateBanner(_adUnitIDs.bannerAdUnitId, MaxSdkBase.BannerPosition.BottomCenter);
            MaxSdkCallbacks.Banner.OnAdRevenuePaidEvent += OnRevenuePaid;
            _isBannerCreated = true;

            if (_showBannerOnLoad) {
                this.ShowBanner();
            }
        }
        #endregion

        // Common for all ad types
        private void OnRevenuePaid(string adUnitID, MaxSdk.AdInfo adInfo) {
            sendAdData?.Invoke(adInfo);
        }

        private void Awake() {
            if (instance != null) {
                Debug.Assert(false, "Duplicate AdsManager found");
                DestroyImmediate(this.gameObject);
                return;
            }
            ValidateAdUnitIDObject();

            instance = this;

            if (isReady) {
                StartCoroutine(DelayedAdLoad());
            }
        }

        private enum AdLoadingOrder : byte {
            // Functions order is 
            // 0 = 0b00 = banner
            // 1 = 0b01 = interstitial
            // 2 = 0b10 = rewarded
            // 3 = NOT USED
            Inter_Reward_Banner = 0b001001,
            Inter_Banner_Reward = 0b100001,

            Reward_Inter_Banner = 0b000110,
            Reward_Banner_Inter = 0b010010,

            Banner_Inter_Reward = 0b100100,
            Banner_Reward_Inter = 0b011000,
        }
    }
}