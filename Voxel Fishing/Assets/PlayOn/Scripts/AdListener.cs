using UnityEngine;
using AOT;
using System;
using System.Runtime.InteropServices;

public class AdListener 
#if UNITY_ANDROID && !UNITY_EDITOR
: AndroidJavaProxy
#endif
{
    public PlayOnSDK.PlayOnStateDelegate OnAvailabilityChanged = (flag) => { };
    public PlayOnSDK.PlayOnNoArgsDelegate OnShow = () => { };
    public PlayOnSDK.PlayOnNoArgsDelegate OnClose = () => { };
    public PlayOnSDK.PlayOnNoArgsDelegate OnClick = () => { };
    public PlayOnSDK.PlayOnFloatDelegate OnReward = (amount) => { };
    public PlayOnSDK.PlayOnImpressionDelegate OnImpression = (data) => { };


#if UNITY_ANDROID && !UNITY_EDITOR
    public AdListener() : base ("com.playon.bridge.PlayOnManager$AdListener") { }

    void onAvailabilityChanged (bool availablity) {
        UnityMainThreadDispatcher.Instance().Enqueue( () =>  OnAvailabilityChanged(availablity) );
    }

    void onShow () {
       UnityMainThreadDispatcher.Instance().Enqueue( () => OnShow() ) ;
    }

    void onClose(){
        UnityMainThreadDispatcher.Instance().Enqueue( () => OnClose() ) ;
    }

    void onClick(){
        UnityMainThreadDispatcher.Instance().Enqueue( () => OnClick() ) ;
    }

    void onReward (float amount) {
        UnityMainThreadDispatcher.Instance().Enqueue( () => OnReward (amount) ) ;
    }

    void onImpression (AndroidJavaObject data) {
        AdUnit.ImpressionData impressionData = new AdUnit.ImpressionData(data);
        UnityMainThreadDispatcher.Instance().Enqueue( () => OnImpression (impressionData) ) ;
    }
#endif


#if UNITY_IOS && !UNITY_EDITOR
    public IntPtr adNativeListenerRef;
    
    public delegate void PlayOnNoArgsDelegateNative (IntPtr client);
    public delegate void PlayOnStateDelegateNative (IntPtr client, bool flag);
    public delegate void PlayOnDataDelegateNative (IntPtr client, IntPtr data);
    public delegate void PlayOnFloatDelegateNative (IntPtr client, float amount);

    private static AdListener IntPtrToClient(IntPtr cl){
        GCHandle handle = (GCHandle)cl;
        return handle.Target as AdListener;
    }

    [MonoPInvokeCallback(typeof(PlayOnNoArgsDelegateNative))]
    public static void OnShowNative(IntPtr client){
        AdListener listener = IntPtrToClient(client);
        listener.OnShow();
    }

    [MonoPInvokeCallback(typeof(PlayOnNoArgsDelegateNative))]
    public static void OnCloseNative(IntPtr client){
        AdListener listener = IntPtrToClient(client);
        listener.OnClose();
    }

    [MonoPInvokeCallback(typeof(PlayOnNoArgsDelegateNative))]
    public static void OnClickNative(IntPtr client){
        AdListener listener = IntPtrToClient(client);
        listener.OnClick();
    }

    [MonoPInvokeCallback(typeof(PlayOnStateDelegateNative))]
    public static void OnAvailabilityChangedNative(IntPtr client, bool flag){
        AdListener listener = IntPtrToClient(client);
        listener.OnAvailabilityChanged(flag);
    }

    [MonoPInvokeCallback(typeof(PlayOnFloatDelegateNative))]
    public static void OnRewardNative(IntPtr client, float amount){
        AdListener listener = IntPtrToClient(client);
        listener.OnReward(amount);
    }

    [MonoPInvokeCallback(typeof(PlayOnDataDelegateNative))]
    public static void OnImpressionNative(IntPtr client, IntPtr data){
        AdListener listener = IntPtrToClient(client);
        AdUnit.ImpressionData impressionData = new AdUnit.ImpressionData(data);
        listener.OnImpression(impressionData);
    }
#endif

}

