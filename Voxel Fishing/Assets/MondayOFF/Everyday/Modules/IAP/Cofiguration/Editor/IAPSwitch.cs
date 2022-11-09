using UnityEngine;
using UnityEditor;

namespace MondayOFF {
    internal class IAPSwitch : AssetPostprocessor {
        const string UNITY_PURCHASING = "UNITY_PURCHASING";

        private static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromAssetPaths, bool didDomainReload) {
#if UNITY_PURCHASING
            foreach (var item in deletedAssets) {
                if (item.Contains("com.unity.purchasing")) {
                    Debug.Log($"[EVERYDAY] Removing Unity Purchasing from project");
                    DefineSymbols.ModifyScriptingDefineSymbol(UNITY_PURCHASING, false);
                    return;
                }
            }
#else
            foreach (var item in importedAssets) {
                if (item.Contains("com.unity.purchasing")) {
                    Debug.Log($"[EVERYDAY] Importing Unity Purchasing to project");
                    DefineSymbols.ModifyScriptingDefineSymbol(UNITY_PURCHASING, true);
                    return;
                }
            }
#endif
        }
    }
}