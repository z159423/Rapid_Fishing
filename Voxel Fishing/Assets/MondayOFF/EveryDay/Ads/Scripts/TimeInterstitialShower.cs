using UnityEngine;

public class TimeInterstitialShower : MonoBehaviour {
    public static TimeInterstitialShower instance = default;
    [SerializeField] float interval = default;
    float lastShown = default;

    public void SetInterval(float newInterval) {
        interval = newInterval;
    }

    public bool CheckTime() {
        // Check timer interval
        if ((interval < Time.realtimeSinceStartup - lastShown)) {
            return true;
        }
        return false;
    }

    /// <summary>
    /// Show Interstitial Ad if an interval has passed.
    /// </summary>
    public bool CheckTimeAndShowInterstitial() {
        // Check timer intervalß
        if ((interval < Time.realtimeSinceStartup - lastShown)) {
            return MondayOFF.AdsManager.instance.ShowInterstitial();
        }
        return false;
    }

    public void ResetTime() {
        lastShown = Time.realtimeSinceStartup;
    }

    private void ResetTime(string _, MaxSdkBase.AdInfo __) {
        ResetTime();
    }

    private void ResetTime(string _, MaxSdk.Reward __, MaxSdkBase.AdInfo ___) {
        ResetTime();
    }

    private void Awake() {
        if (instance == null) {
            instance = this;
        } else {
            Debug.Assert(false, "Multiple instance of TimeInterstitialShower found!");
            DestroyImmediate(this.gameObject);
        }
    }

    private void Start() {
        ResetTime();

        MaxSdkCallbacks.Interstitial.OnAdHiddenEvent += ResetTime;
        MaxSdkCallbacks.Rewarded.OnAdReceivedRewardEvent += ResetTime;
    }
}