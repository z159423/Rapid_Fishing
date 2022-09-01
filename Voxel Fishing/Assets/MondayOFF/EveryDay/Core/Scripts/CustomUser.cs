﻿using UnityEngine;

namespace MondayOFF {
    public class CustomUser {
        const string Idcu = "PREF_IDCU";

        public static string ID {
            get {
                if (!PlayerPrefs.HasKey(Idcu)) {
                    PlayerPrefs.SetString(Idcu, HashMd5(UnityEngine.SystemInfo.deviceUniqueIdentifier + System.DateTime.UtcNow.Ticks));
                    PlayerPrefs.Save();
                }
                return PlayerPrefs.GetString(Idcu);
            }
        }

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
