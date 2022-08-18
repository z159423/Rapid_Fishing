/*
 _ _ _                             __    _____   _____
' ) ) )             /             / ')    /  '    /  '
 / / /  __ ____  __/  __.  __  , /  /  ,-/-,   ,-/-,  
/ ' (_ (_)/ / <_(_/_ (_/|_/ (_/_(__/  (_/     (_/     
                             /                        
                            '                         

Identifier.cs, v 1.0.0
Copyright(c) 2019 Monday OFF, http://mondayoff.me
*/
using UnityEngine;

namespace MondayOFF {
    public static class Identifier {
        const string Idcu = "PREF_IDCU";

        public static string CustomUserID {
            get {
                if (!PlayerPrefs.HasKey(Idcu)) {
                    System.DateTime epochStart = new System.DateTime(1970, 1, 1, 0, 0, 0, System.DateTimeKind.Utc);
                    var timestamp = (int)(System.DateTime.UtcNow - epochStart).TotalSeconds;
                    PlayerPrefs.SetString(Idcu, HashMd5(ForVendor + timestamp));
                }
                return PlayerPrefs.GetString(Idcu);
            }
        }

        internal static string ForVendor => UnityEngine.SystemInfo.deviceUniqueIdentifier;

        private static string HashMd5(string strToEncrypt) {
            System.Text.UTF8Encoding ue = new System.Text.UTF8Encoding();
            byte[] bytes = ue.GetBytes(strToEncrypt);
            System.Security.Cryptography.MD5CryptoServiceProvider md5 = new System.Security.Cryptography.MD5CryptoServiceProvider();
            byte[] hashBytes = md5.ComputeHash(bytes);
            string hashString = "";
            for (int i = 0; i < hashBytes.Length; i++) {
                hashString += System.Convert.ToString(hashBytes[i], 16).PadLeft(2, '0');
            }

            return hashString.PadLeft(32, '0');
        }
    }
}
