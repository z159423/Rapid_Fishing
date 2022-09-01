using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;
using UnityEditor;
using UnityEditor.Compilation;

namespace MondayOFF.EditorUtil {
    public class AsmdefLinker : AssetPostprocessor {
        const string MOFF_PURCHASING = "MOFF_PURCHASING";
        const string FIREBASE_ENABLED = "FIREBASE_ENABLED";
        const string PLAYON_ENABLED = "PLAYON_ENABLED";
        const string UGS_ENABLED = "UGS_ENABLED";

        [System.Serializable]
        class Asmdef {
            public string name;
            public string[] references;
            public string[] includePlatforms;
            public string[] excludePlatforms;
            public bool allowUnsafeCode;
            public bool overrideReferences;
            public string[] precompiledReferences;
            public bool autoReferenced;
            public string[] defineConstraints;
            public bool noEngineReferences;
        }

        internal static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromAssetPaths) {
            DidReloadScripts();

            // PURCHASING
            if (UnityEditor.Purchasing.PurchasingSettings.enabled) {
                DefinePurchasing(true);
            } else {
                DefinePurchasing(false);
            }
        }

        [UnityEditor.Callbacks.DidReloadScripts(0)]
        internal static void DidReloadScripts() {
            // Json.Net 
            CheckBuiltInJson();

            // FIREBASE
            // Assembly integrated
            System.Reflection.Assembly firebaseAssembly = AppDomain.CurrentDomain.GetAssemblies().SingleOrDefault(assembly => assembly.GetName().Name == "Firebase.App");
            // Configfiles exist
            bool hasConfigFile = File.Exists(Path.Combine(Application.dataPath,
#if UNITY_IOS
"GoogleServices-Info.plist"
#else
"google-services.json"
#endif
            ));

            if (firebaseAssembly != null && hasConfigFile) {
                ModifyScriptingDefineSymbol(FIREBASE_ENABLED, true);
            } else {
                ModifyScriptingDefineSymbol(FIREBASE_ENABLED, false);
            }

            // PlayOn
            // System.Reflection.Assembly playOnAssembly = AppDomain.CurrentDomain.GetAssemblies().SingleOrDefault(assembly => assembly.GetName().Name == "PlayOn");
            var playOnAsmdefs = AssetDatabase.FindAssets("t:asmdef PlayOn");
            if (playOnAsmdefs != null && playOnAsmdefs.Length > 0) {
                DefinePlayOn(true);
            } else {
                DefinePlayOn(false);
            }
        }

        private static bool RequiresUGS() {
            // Unity Gaming Services must be initialized for Unity Purchasing 4.2+
            DirectoryInfo directory = Directory.GetParent(Application.dataPath);
            var packagePath = Path.Combine(Path.Combine(directory.ToString(), "Packages"), "manifest.json");
            var packageContent = File.ReadAllText(packagePath);
            var IAPPackageName = "\"com.unity.purchasing\"";
            var startIndex = packageContent.IndexOf(IAPPackageName) + IAPPackageName.Length;
            if (startIndex <= IAPPackageName.Length) {
                return false;
            }
            var endIndex = packageContent.IndexOf(',', startIndex);
            var version = packageContent.Substring(startIndex, endIndex - startIndex);
            version = version.Trim('\"', ':', ' ');
            System.Version v = System.Version.Parse(version);
            return (v >= new System.Version("4.2"));
        }

        private static void CheckBuiltInJson() {
            // Some Unity packages have newtonsoft-json as their dependencies. Json.Net installed with Singular conflicts with it!
            DirectoryInfo directory = Directory.GetParent(Application.dataPath);
            var packagePath = Path.Combine(Path.Combine(directory.ToString(), "Packages"), "packages-lock.json");
            var packageContent = File.ReadAllText(packagePath);
            bool useBuiltIn = packageContent.Contains("nuget.newtonsoft-json");

            var jsonDotNetGUIDs = AssetDatabase.FindAssets("t:asmdef JsonDotNet");
            if (jsonDotNetGUIDs.Length <= 0) {
                Debug.LogWarning("Failed to find JsonDotNet.asmdef");
                return;
            }

            bool hasChanged = false;

            var jsonDotNetPath = AssetDatabase.GUIDToAssetPath(jsonDotNetGUIDs[0]);
            var jsonDotNetAssembly = File.ReadAllText(jsonDotNetPath);
            var asmdefObject = JsonUtility.FromJson<Asmdef>(jsonDotNetAssembly);
            if (useBuiltIn) {
                if (asmdefObject.includePlatforms.Length <= 0) {
                    asmdefObject.includePlatforms = new string[] { "XboxOne" };
                    hasChanged = true;
                }
            } else {
                if (asmdefObject.includePlatforms.Contains("XboxOne")) {
                    asmdefObject.includePlatforms = new string[] { };
                    hasChanged = true;
                }
            }

            if (hasChanged) {
                var jsonOutput = JsonUtility.ToJson(asmdefObject);
                File.WriteAllText(jsonDotNetPath, jsonOutput);
                AssetDatabase.Refresh(ImportAssetOptions.Default);
            }
        }

        private static void DefinePlayOn(bool isDefine) {
            if (isDefine) {
                ModifyScriptingDefineSymbol(PLAYON_ENABLED, true);
                SetAsmdefReference(new Dictionary<string, string[]> { { "MondayOFF.Ads", new string[] { "MaxSdk.Scripts", "PlayOn" } } });
            } else {
                ModifyScriptingDefineSymbol(PLAYON_ENABLED, false);
                SetAsmdefReference(new Dictionary<string, string[]> { { "MondayOFF.Ads", new string[] { "MaxSdk.Scripts" } } });
            }
        }

        private static void DefinePurchasing(bool isDefine) {
            ModifyScriptingDefineSymbol(MOFF_PURCHASING, isDefine);
            if (isDefine) {
                if (RequiresUGS()) {
                    ModifyScriptingDefineSymbol(UGS_ENABLED, true);

                    SetAsmdefReference(
                        new Dictionary<string, string[]>{
                            {"MondayOFF.IAP", new string[] { "UnityEngine.Purchasing", "UnityEngine.Purchasing.Security", "UnityEngine.Purchasing.SecurityStub", "UnityEngine.Purchasing.SecurityCore", "UnityEngine.Purchasing.Stores", "Tangle","Unity.Services.Core", "Unity.Services.Core.Environments"}},
                            {"Tangle", new string[] { "UnityEngine.Purchasing.Security", "UnityEngine.Purchasing.SecurityStub", "UnityEngine.Purchasing.SecurityCore" }},
                        }
                    );
                } else {
                    SetAsmdefReference(
                        new Dictionary<string, string[]>{
                            {"MondayOFF.IAP", new string[] { "UnityEngine.Purchasing", "UnityEngine.Purchasing.Security", "UnityEngine.Purchasing.SecurityStub", "UnityEngine.Purchasing.SecurityCore", "UnityEngine.Purchasing.Stores", "Tangle"}},
                            {"Tangle", new string[] { "UnityEngine.Purchasing.Security", "UnityEngine.Purchasing.SecurityStub", "UnityEngine.Purchasing.SecurityCore" }},
                        }
                    );
                }
            } else {
                ModifyScriptingDefineSymbol(UGS_ENABLED, false);

                SetAsmdefReference(
                        new Dictionary<string, string[]>{
                        {"MondayOFF.IAP", new string[] { }},
                        { "Tangle", new string[] { }},
                    }
                );
            }
        }

        private static void ModifyScriptingDefineSymbol(string symbol, bool isAdd) {
            BuildTargetGroup[] groups = new BuildTargetGroup[]{
                BuildTargetGroup.iOS, BuildTargetGroup.Android
            };

            foreach (var currentGroup in groups) {
                bool hasChanged = false;
                var definedSymbols = PlayerSettings.GetScriptingDefineSymbolsForGroup(currentGroup);
                var defines = new List<string>(definedSymbols.Split(new[] { ';' }, StringSplitOptions.RemoveEmptyEntries));
                if (isAdd) {
                    if (!defines.Contains(symbol)) {
                        defines.Add(symbol);
                        hasChanged = true;
                    }
                } else {
                    if (defines.Contains(symbol)) {
                        defines.Remove(symbol);
                        hasChanged = true;
                    }
                }

                if (hasChanged) {
                    PlayerSettings.SetScriptingDefineSymbolsForGroup(currentGroup, string.Join(";", defines.ToArray()));
                    CompilationPipeline.RequestScriptCompilation();
                }
            }
        }

        private static void SetAsmdefReference(Dictionary<string, string[]> asmdefReferenceDict) {
            bool hasChanged = false;
            foreach (var asmdefRefencePair in asmdefReferenceDict) {
                hasChanged |= AddReferenceToAsmdef(asmdefRefencePair.Key, asmdefRefencePair.Value);
            }

            if (hasChanged) {
                AssetDatabase.Refresh(ImportAssetOptions.Default);
            }
        }

        private static bool AddReferenceToAsmdef(string targetAssemblyName, string[] requiredReferences) {
            var iapAssemblyPath = CompilationPipeline.GetAssemblyDefinitionFilePathFromAssemblyName(targetAssemblyName);
            var iapAssemblyContent = File.ReadAllText(iapAssemblyPath);
            var asmdefObject = JsonUtility.FromJson<Asmdef>(iapAssemblyContent);

            if (asmdefObject.references.SequenceEqual(requiredReferences)) {
                return false;
            }

            asmdefObject.references = requiredReferences;

            var jsonOutput = JsonUtility.ToJson(asmdefObject);
            File.WriteAllText(iapAssemblyPath, jsonOutput);
            return true;
        }
    }
}

/*
In case if you need to use GUID for reference, refer to code below

    ...

    HashSet<string> assemblyReferenceGUIDs = new HashSet<string>();

    foreach (var assembly in allAssemblies) {
        if (requiredReferences.Contains(assembly.name)) {
            var assetGUID = AssetDatabase.AssetPathToGUID(CompilationPipeline.GetAssemblyDefinitionFilePathFromAssemblyName(assembly.name));
            var assemblyGUID = CompilationPipeline.GUIDToAssemblyDefinitionReferenceGUID(assetGUID);
            assemblyReferenceGUIDs.Add(assemblyGUID);
        }
    }

    ...

    var newGUIDs = new string[assemblyReferenceGUIDs.Count];
    assemblyReferenceGUIDs.CopyTo(asmdefObject.references);

    ...


*/