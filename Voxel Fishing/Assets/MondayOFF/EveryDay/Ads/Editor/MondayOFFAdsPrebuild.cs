#if UNITY_IOS
using System.Net.Http;
#endif
#if UNITY_ANDROID
using System.Collections.Generic;
using System.Linq;
#endif
using System;
using System.IO;
using System.Text.RegularExpressions;
using UnityEditor;
using UnityEngine;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;

namespace MondayOFF {
    class MondayOFFAdsPrebuild : IPreprocessBuildWithReport {
        public int callbackOrder => 1;
        public void OnPreprocessBuild(BuildReport report) {
            var appId = GetAppIdFromAppLovinSettings(
#if UNITY_IOS
                "AdMobIosAppId"
#else
                "AdMobAndroidAppId"
#endif
                );

            // Log error if the App ID is not set.
            if (string.IsNullOrEmpty(appId) || !appId.StartsWith("ca-app-pub-")) {
                if (!EditorUtility.DisplayDialog("Missing Google AdMob ID", "Admob ID is missing!\nAre you sure you want to continue build?", "Continue", "Cancel")) {
                    try {
                        var integrationManagerAssembly = System.Reflection.Assembly.Load("MaxSdk.Scripts.IntegrationManager.Editor");

                        if (integrationManagerAssembly != null) {
                            var integrationManagerWindow = integrationManagerAssembly.GetType("AppLovinMax.Scripts.IntegrationManager.Editor.AppLovinIntegrationManagerWindow");
                            var showManager = integrationManagerWindow.GetMethod("ShowManager", System.Reflection.BindingFlags.Static | System.Reflection.BindingFlags.Public);
                            showManager.Invoke(null, null);
                        }
                    } finally {
                        throw new UnityEditor.Build.BuildFailedException("[AppLovin MAX] AdMob App ID is not set. Please enter a valid app ID within the AppLovin Integration Manager window.");
                    }
                }
            }


            // Check Ad Unit
            var adUnitIDs = AssetDatabase.FindAssets("t:MondayOFFAdUnitID");

            if (adUnitIDs.Length != 1) {
                throw new UnityEditor.Build.BuildFailedException("There should only be 1 ad unit ID object");
            }

            var adUnitID = AssetDatabase.LoadAssetAtPath<MondayOFFAdUnitID>(AssetDatabase.GUIDToAssetPath(adUnitIDs[0]));

            if (!adUnitID.HasValidAdUnitIDs()) {
                if (!EditorUtility.DisplayDialog("Missing Ad Unit ID", "Some of ad placements are checked but missing Ad Unit ID!\nAre you sure you want to continue build?", "Continue", "Cancel")) {
                    UnityEditor.Selection.activeObject = adUnitID;
                    throw new UnityEditor.Build.BuildFailedException("Please check Ad Unit IDs.");
                }
            }

#if PLAYON_ENABLED
            ValidatePlayOn(adUnitID);
#endif
        }

        private string GetAppIdFromAppLovinSettings(string property) {
            var settingsFileName = GetAppLovinSettingsAssetPath();
            if (!File.Exists(settingsFileName)) {
                Debug.LogError("[AppLovin MAX] The current plugin version is incompatible with the AdMob adapter. Please update the AppLovin MAX plugin to version 2.4.0 or higher.");
                return null;
            }

            var instance = AssetDatabase.LoadAssetAtPath(settingsFileName, Type.GetType("AppLovinSettings, MaxSdk.Scripts.IntegrationManager.Editor"));
            if (instance == null) {
                Debug.LogError("[AppLovin MAX] The current plugin version is incompatible with the AdMob adapter. Please update the AppLovin MAX plugin to version 2.4.15 or higher");
                return null;
            }

            var adMobAppIdProperty = instance.GetType().GetProperty(property);
            return adMobAppIdProperty == null ? null : adMobAppIdProperty.GetValue(instance, null).ToString();
        }


        private string GetAppLovinSettingsAssetPath() {
            const string AppLovinSettingsExportPath = "MaxSdk/Resources/AppLovinSettings.asset";
            // Since the settings asset is generated during compile time, the asset label will contain platform specific path separator. So, use platform specific export path.  
            var assetLabel = "l:al_max_export_path-" + AppLovinSettingsExportPath.Replace(Path.AltDirectorySeparatorChar, Path.DirectorySeparatorChar);
            var guids = AssetDatabase.FindAssets(assetLabel);

            var defaultPath = Path.Combine("Assets", AppLovinSettingsExportPath);

            return guids.Length > 0 ? AssetDatabase.GUIDToAssetPath(guids[0]) : defaultPath;
        }

        public static void ValidatePlayOn(MondayOFFAdUnitID adUnitID) {
#if PLAYON_ENABLED
            if (adUnitID.hasPlayOn) {

#if UNITY_ANDROID
                /*********************************************************************
                   Patch mainTamplate.gradle to use exoplayer 2.16.0
               **********************************************************************/
                const string DependenciesToken = @".*\*\*DEPS\*\*.*";
                string[] strictExoPlayerList = {
                    @"// Force exoplayer version to 2.16.0 for PlayOnSDK",
                    @"    implementation(""com.google.android.exoplayer:exoplayer"") {",
                    @"        version {",
                    @"            strictly(""2.16.0"")",
                    @"        }",
                    @"    }"
                };

                string mainTemplatePath = Path.Combine(Application.dataPath, $"Plugins{Path.DirectorySeparatorChar}Android{Path.DirectorySeparatorChar}mainTemplate.gradle");

                List<string> lines = File.ReadAllLines(mainTemplatePath).ToList();

                var exoplayerRegex = new Regex(strictExoPlayerList[0]);
                var dependenciesToken = new Regex(DependenciesToken);
                for (int i = 0; i < lines.Count; ++i) {
                    var line = lines[i];
                    if (exoplayerRegex.IsMatch(line)) {
                        // already contains strict version
                        Debug.Log("mainTemplate.gradle is already using exoplayer 2.16.0");
                        goto PATCH_COMPLETED;
                    } else if (dependenciesToken.IsMatch(line)) {
                        lines.InsertRange(i, strictExoPlayerList);
                        File.WriteAllLines(mainTemplatePath, lines);
                        Debug.Log("Patched mainTemplate.gradle to use exoplayer 2.16.0");
                        goto PATCH_COMPLETED;
                    }
                }

                throw new UnityEditor.Build.BuildFailedException($"mainTemplate.gradle does not exist or has invalid format!");

            PATCH_COMPLETED:
#endif
                /*********************************************************************
                    It tests validity of PlayOn keys
                        1. Checks if game key is UUID with regex.
                        2. (iOS only) Get Appstore ID using bundle ID and match it
                **********************************************************************/

                bool isValid = true;

                string playOnKey = adUnitID.playOnKey;
                Regex uuidRegex = new Regex("[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}");
                isValid &= uuidRegex.IsMatch(playOnKey);
                Debug.Log("PlayOn Key passed: " + isValid + " (" + playOnKey + ")");
#if UNITY_IOS
                if (isValid) {
                    bool hasValidStoreID = false;
                    string storeID = adUnitID.storeID;

                    using (var client = new HttpClient()) {
                        var bundleID = Application.identifier;
                        var getRequest = new HttpRequestMessage(HttpMethod.Get, $"http://itunes.apple.com/lookup?bundleId={bundleID}");

                        var task = System.Threading.Tasks.Task.Run(() => client.SendAsync(getRequest));
                        task.Wait();
                        var response = task.Result;
                        if (response.IsSuccessStatusCode) {
                            var readTask = System.Threading.Tasks.Task.Run(() => response.Content.ReadAsStringAsync());
                            readTask.Wait();
                            var content = readTask.Result;
                            // ! DANGER! 50 is an arbitary number 
                            if (content.Length < 50) {
                                if (EditorUtility.DisplayDialog("Incorrect Key or StoreID enterd for PlayOn!", "Try turning off 'has PlayOn' in AdUnits.", "Ok")) {
                                    UnityEditor.Selection.activeObject = adUnitID;
                                }
                                throw new UnityEditor.Build.BuildFailedException("This app is NOT publishined on Apple AppStore! Try turning off 'has PlayOn' in AdUnits.\nIf the app is already published, please check bundle ID");
                            }
                            
                            if (content.Contains($":{storeID},")) {
                                hasValidStoreID = true;
                            } else {
                                var keywordToSearch = "trackId\":";
                                var indexOfTrackID = content.IndexOf(keywordToSearch) + keywordToSearch.Length;
                                var indexOfEndingComma = content.IndexOf(',', indexOfTrackID);
                                var trackID = content.Substring(indexOfTrackID, indexOfEndingComma - indexOfTrackID);

                                if (EditorUtility.DisplayDialog("Incorrect AppStore ID", $"Appstore ID {storeID} does NOT match with {trackID} for bundle id {bundleID}!\nDo you want to change it?", "Open AdUnitID", "Cancel")) {
                                    UnityEditor.Selection.activeObject = adUnitID;
                                }
                                throw new UnityEditor.Build.BuildFailedException($"Try setting store ID to <color=yellow>{trackID}</color>");

                            }
                            Debug.Log("PlayOn store ID passed: " + hasValidStoreID + " (" + storeID + ")");
                        }
                        isValid &= hasValidStoreID;
                    }
                }
#endif
                if (!isValid) {
                    if (EditorUtility.DisplayDialog("Incorrect Key or StoreID enterd for PlayOn!", "Try turning off 'has PlayOn' in AdUnits.", "Ok")) {
                        UnityEditor.Selection.activeObject = adUnitID;
                    }
                    throw new UnityEditor.Build.BuildFailedException("Incorrect Key or StoreID enterd for PlayOn!  Try turning off 'has PlayOn' in AdUnits.");
                }
            }
#endif
        }
    }
}