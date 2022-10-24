#if UNITY_EDITOR && UNITY_ANDROID
using UnityEngine;
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using System.IO;
using System.Linq;
using System.Xml.Linq;

namespace MondayOFF {
    public class MondayOFFPrebuildAndroid : IPreprocessBuildWithReport {

        public int callbackOrder => 0;

        public void OnPreprocessBuild(BuildReport report) {
            // ! WARNING ! It sets Keystore password automatically. If you wish to user different Keystore/Aslias, comment out lines below.
            PlayerSettings.keystorePass = "MondayOFF!@";
            PlayerSettings.keyaliasPass = "MondayOFF!@";


            AddLibrariesToProguard();
            CheckNetworkSecurityConfig();
        }

        private static void AddLibrariesToProguard() {
            string android_path = $"Plugins{Path.DirectorySeparatorChar}Android{Path.DirectorySeparatorChar}";
            string proguardFilename =
#if UNITY_2021_2_OR_NEWER
        "proguard-user.txt"
#else
    "proguard.txt"
#endif
    ;

//             const string CONTENT = @"
// # Singular
// -keep class com.singular.sdk.** { *; }
// -keep public class com.android.installreferrer.** { *; }

// # GameAnalytics
// -keep class  com.gameanalytics.sdk { *; }
// -keep class  com.gameanalytics.sdk.** { *; }
 
// -keep class  com.gameanalytics.sdk.GAPlatform { *; }
// -keep class  com.gameanalytics.sdk.GAPlatform.** { *; }
// -keep class android.net.ConnectivityManager.** { *; }
// -keep class com.google.android.instantapps.InstantApps { *; }
// -keepclassmembers class com.google.android.instantapps.InstantApps { *; }

// # Facebook
// -keep class com.facebook.** { *; }";

            string androidPath = Path.Combine(Application.dataPath, android_path);
            Directory.CreateDirectory(androidPath);

            string proguardPath = Path.Combine(androidPath, proguardFilename);

            if (File.Exists(proguardPath)) {
                string currentContent = File.ReadAllText(proguardPath);
                if (currentContent.Contains(CONTENT)) {
                    Debug.Log("Required libraries are already listed in proguard");
                } else {
                    Debug.Log($"Appending required libraries to {proguardPath}");

                    currentContent += $"\n\n{CONTENT}";
                    File.WriteAllText(proguardPath, currentContent);
                }
            } else {
                Debug.Log($"Creating {proguardPath}");

                using (StreamWriter writer = File.CreateText(proguardPath)) {
                    writer.Write(CONTENT);
                }
            }
        }

        private void CheckNetworkSecurityConfig() {
            string android_path = $"Plugins{Path.DirectorySeparatorChar}Android{Path.DirectorySeparatorChar}";
            string manifestFileName = "AndroidManifest.xml";
            string fullPath = Path.Combine(Application.dataPath, android_path, manifestFileName);
            var androidManifestDocument = XDocument.Load(fullPath);

            // AndroidManifest should have android namespace.. right?
            XNamespace androidNamespace = androidManifestDocument.Root.Attribute(XNamespace.Xmlns + "android").Value;

            // and Application should exsit as well..
            var applicationNode = androidManifestDocument.Root
                                        .Descendants("application")
                                        .FirstOrDefault();

            if (applicationNode == null) {
                Debug.LogWarning("Application node doest not exist!");
                return;
            }

            var networkSecurityName = androidNamespace + "networkSecurityConfig";
            var networkSecurityValue = "@xml/network_security_config";
            var networkSecurityAttribute = applicationNode.Attribute(networkSecurityName);
            if (networkSecurityAttribute == null || !networkSecurityAttribute.Value.Equals(networkSecurityValue)) {
                applicationNode.SetAttributeValue(networkSecurityName, networkSecurityValue);
                applicationNode.Document.Save(fullPath);
                Debug.Log("Updated android:networkSecurityConfig");
            }
        }
    }
}
#endif