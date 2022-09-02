/**************************************
        ! INCOMPLETE !
    Trying to avoid integrating game logic inside this script.
**************************************/

using UnityEngine;
#if MOFF_PURCHASING 
using System.Collections.Generic;
using UnityEngine.Purchasing;
#if UGS_ENABLED
using Unity.Services.Core;
using Unity.Services.Core.Environments;
#endif

namespace MondayOFF.IAP {
    public class IAPManager : MonoBehaviour {
        public static IAPManager instance = default;

        [SerializeField] GameObject pannelLoading = default;
        [SerializeField] MondayOFFProducts productList = default;
        StoreListener storeListner = default;
        readonly Dictionary<string, ProductData> productDict = new Dictionary<string, ProductData>();

        public void ActiveLoading() {
            if (pannelLoading != null) {
                pannelLoading.SetActive(true);
            }
        }

        public void HideLoading() {
            if (pannelLoading != null) {
                pannelLoading.SetActive(false);
            }
        }

        public void RegisterProducts(string productID, System.Action onPurchase) {
            if (!productDict.TryGetValue(productID, out var productData)) {
                Debug.LogWarning($"[IAPManager] {productID} does not exist in MondayOFFProducts");
                return;
            }

            if (productData.isRegistered) {
                Debug.LogWarning($"[IAPManager] {productID} is already registered with rewarding callback! Do you really want to replace reward of this product??");
            }

            productData.onPurchase = onPurchase;

            while (productData.purchaseCount > 0) {
                Debug.Log($"[IAPManager] {productData.purchaseCount} puchases were made before initialization. Process them");
                onPurchase.Invoke();
                --productData.purchaseCount;
            }
        }

        public void PurchaseProduct(string productID) {
            if (!productDict.TryGetValue(productID, out var productData)) {
                Debug.LogWarning($"[IAPManager] {productID} does not exist in MondayOFFProducts");
                return;
            }

            if (!storeListner.isInitialized) {
                Debug.Log("[IAPManager] Store listener is not initialized yet. Purchase will proceed after initialization");

                var lazyProduct = new LazyProduct(productID, PurchaseProduct);
                storeListner.onInitialized += lazyProduct.Purchase;

                Initialize();
                return;
            }

            if (!productData.isRegistered) {
                Debug.LogWarning($"[IAPManager] {productData.productID} is not registered with any rewarding callback. It will grant previously purchased rewards once rewarding callback is set.");
                return;
            }

            Product p = storeListner.storeController.products.WithID(productID);
            if (p != null && p.availableToPurchase) {
                Debug.Log(string.Format("[IAPManager] Purchasing product : '{0}'", p.definition.id));
                storeListner.storeController.InitiatePurchase(p);
            } else {
                Debug.Log("[IAPManager] BuyProductID: FAIL. Not purchasing product, either is not found or is not available for purchase");
            }
        }

        public void RestorePurchase() {
            if (!storeListner.isInitialized) {
                Debug.Log("[IAPManager] RestorePurchase failed. Store listener is not initialized.");
                return;
            }

            // if (Application.platform == RuntimePlatform.IPhonePlayer || Application.platform == RuntimePlatform.OSXPlayer) {
#if UNITY_IOS
            Debug.Log("[IAPManager] RestorePurchases started ...");

            var apple = storeListner.extensionProvider.GetExtension<IAppleExtensions>();

            apple.RestoreTransactions(
                (result) => { Debug.Log("[IAPManager] RestorePurchases continuing: " + result + ". If no further messages, no purchases available to restore."); }
            );
#endif
            // } else {
            //     Debug.Log("RestorePurchases failed. Not supported on this platform. Current = " + Application.platform);
            // }
        }

        private void Awake() {
            if (instance != null) {
                Debug.Assert(false, "[IAPManager] Duplicate IAP Manager found");
                DestroyImmediate(this);
                return;
            }
            instance = this;
        }

        private void Start() {
            Initialize();
        }

        private
#if UGS_ENABLED
        async 
#endif
        void Initialize() {
#if UGS_ENABLED
            try {
                var options = new InitializationOptions()
                    .SetEnvironmentName("production");

                await UnityServices.InitializeAsync(options);

                storeListner = new StoreListener();

                ValidateProductsObject();

                var module = StandardPurchasingModule.Instance();
                ConfigurationBuilder builder = ConfigurationBuilder.Instance(module);

                // Add product
                foreach (var item in productList.products) {
                    builder.AddProduct(item.productID, item.productType, new IDs { { item.productID, AppleAppStore.Name }, { item.productID, GooglePlay.Name } });
                    productDict.Add(item.productID, item);
                }

                storeListner.productDict = productDict;
                storeListner.hideLoading = HideLoading;

                UnityPurchasing.Initialize(storeListner, builder);

            } catch (System.Exception exception) {
                Debug.Log(exception.StackTrace);
            }
#else

            storeListner = new StoreListener();

            ValidateProductsObject();

            var module = StandardPurchasingModule.Instance();
            ConfigurationBuilder builder = ConfigurationBuilder.Instance(module);

            // Add product
            foreach (var item in productList.products) {
                // Debug.Log("Adding " + item.productID + " : " + item.productType.ToString());
                builder.AddProduct(item.productID, item.productType, new IDs { { item.productID, AppleAppStore.Name }, { item.productID, GooglePlay.Name } });
                productDict.Add(item.productID, item);
            }

            storeListner.productDict = productDict;
            storeListner.hideLoading = HideLoading;

            UnityPurchasing.Initialize(storeListner, builder);
#endif
        }

        private void ValidateProductsObject() {
            if (productList == null) {
                var productResource = Resources.FindObjectsOfTypeAll<MondayOFFProducts>();

                if (productResource.Length == 1) {
                    productList = productResource[0];
                } else {
                    Debug.LogError("[IAPManager] There should only be 1 IAP manager object");
                }
            }
        }
    }

    internal class LazyProduct {
        internal string productID;
        internal System.Action<string> purchaseCallback;
        internal LazyProduct(string productID, System.Action<string> purchaseCallback) {
            this.productID = productID;
            this.purchaseCallback = purchaseCallback;
        }

        internal void Purchase() {
            purchaseCallback.Invoke(productID);
        }
    }
}

#else

namespace MondayOFF.IAP {
    public class IAPManager : MonoBehaviour {
        private void Awake() {
            Debug.Log("[IAPManager] Purchasing is NOT enabled.");
            DestroyImmediate(this);
        }
    }
}

#endif
