var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.JointSpring' )
  var i789 = data
  i788.spring = i789[0]
  i788.damper = i789[1]
  i788.targetPosition = i789[2]
  return i788
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.JointMotor' )
  var i791 = data
  i790.m_TargetVelocity = i791[0]
  i790.m_Force = i791[1]
  i790.m_FreeSpin = i791[2]
  return i790
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.JointLimits' )
  var i793 = data
  i792.m_Min = i793[0]
  i792.m_Max = i793[1]
  i792.m_Bounciness = i793[2]
  i792.m_BounceMinVelocity = i793[3]
  i792.m_ContactDistance = i793[4]
  i792.minBounce = i793[5]
  i792.maxBounce = i793[6]
  return i792
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.JointDrive' )
  var i795 = data
  i794.m_PositionSpring = i795[0]
  i794.m_PositionDamper = i795[1]
  i794.m_MaximumForce = i795[2]
  return i794
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i797 = data
  i796.m_Spring = i797[0]
  i796.m_Damper = i797[1]
  return i796
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i799 = data
  i798.m_Limit = i799[0]
  i798.m_Bounciness = i799[1]
  i798.m_ContactDistance = i799[2]
  return i798
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i801 = data
  i800.m_ExtremumSlip = i801[0]
  i800.m_ExtremumValue = i801[1]
  i800.m_AsymptoteSlip = i801[2]
  i800.m_AsymptoteValue = i801[3]
  i800.m_Stiffness = i801[4]
  return i800
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i803 = data
  i802.m_LowerAngle = i803[0]
  i802.m_UpperAngle = i803[1]
  return i802
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i805 = data
  i804.m_MotorSpeed = i805[0]
  i804.m_MaximumMotorTorque = i805[1]
  return i804
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i807 = data
  i806.m_DampingRatio = i807[0]
  i806.m_Frequency = i807[1]
  i806.m_Angle = i807[2]
  return i806
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i809 = data
  i808.m_LowerTranslation = i809[0]
  i808.m_UpperTranslation = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i810 = root || new pc.UnityMaterial()
  var i811 = data
  i810.name = i811[0]
  request.r(i811[1], i811[2], 0, i810, 'shader')
  i810.renderQueue = i811[3]
  i810.enableInstancing = !!i811[4]
  var i813 = i811[5]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i813[i + 0]) );
  }
  i810.floatParameters = i812
  var i815 = i811[6]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i815[i + 0]) );
  }
  i810.colorParameters = i814
  var i817 = i811[7]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i817[i + 0]) );
  }
  i810.vectorParameters = i816
  var i819 = i811[8]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i819[i + 0]) );
  }
  i810.textureParameters = i818
  var i821 = i811[9]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i821[i + 0]) );
  }
  i810.materialFlags = i820
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i829 = data
  i828.name = i829[0]
  i828.value = new pc.Color(i829[1], i829[2], i829[3], i829[4])
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i833 = data
  i832.name = i833[0]
  i832.value = new pc.Vec4( i833[1], i833[2], i833[3], i833[4] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i837 = data
  i836.name = i837[0]
  request.r(i837[1], i837[2], 0, i836, 'value')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i841 = data
  i840.name = i841[0]
  i840.enabled = !!i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i843 = data
  i842.position = new pc.Vec3( i843[0], i843[1], i843[2] )
  i842.scale = new pc.Vec3( i843[3], i843[4], i843[5] )
  i842.rotation = new pc.Quat(i843[6], i843[7], i843[8], i843[9])
  return i842
}

Deserializers["AsyncSceneTransfer"] = function (request, data, root) {
  var i844 = root || request.c( 'AsyncSceneTransfer' )
  var i845 = data
  i844.sceneIndex = i845[0]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i847 = data
  i846.pivot = new pc.Vec2( i847[0], i847[1] )
  i846.anchorMin = new pc.Vec2( i847[2], i847[3] )
  i846.anchorMax = new pc.Vec2( i847[4], i847[5] )
  i846.sizeDelta = new pc.Vec2( i847[6], i847[7] )
  i846.anchoredPosition3D = new pc.Vec3( i847[8], i847[9], i847[10] )
  i846.rotation = new pc.Quat(i847[11], i847[12], i847[13], i847[14])
  i846.scale = new pc.Vec3( i847[15], i847[16], i847[17] )
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.planeDistance = i849[1]
  i848.referencePixelsPerUnit = i849[2]
  i848.isFallbackOverlay = !!i849[3]
  i848.renderMode = i849[4]
  i848.renderOrder = i849[5]
  i848.sortingLayerName = i849[6]
  i848.sortingOrder = i849[7]
  i848.scaleFactor = i849[8]
  request.r(i849[9], i849[10], 0, i848, 'worldCamera')
  i848.overrideSorting = !!i849[11]
  i848.pixelPerfect = !!i849[12]
  i848.targetDisplay = i849[13]
  i848.overridePixelPerfect = !!i849[14]
  return i848
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i851 = data
  i850.m_UiScaleMode = i851[0]
  i850.m_ReferencePixelsPerUnit = i851[1]
  i850.m_ScaleFactor = i851[2]
  i850.m_ReferenceResolution = new pc.Vec2( i851[3], i851[4] )
  i850.m_ScreenMatchMode = i851[5]
  i850.m_MatchWidthOrHeight = i851[6]
  i850.m_PhysicalUnit = i851[7]
  i850.m_FallbackScreenDPI = i851[8]
  i850.m_DefaultSpriteDPI = i851[9]
  i850.m_DynamicPixelsPerUnit = i851[10]
  i850.m_PresetInfoIsWorld = !!i851[11]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i853 = data
  i852.m_Alpha = i853[0]
  i852.m_Interactable = !!i853[1]
  i852.m_BlocksRaycasts = !!i853[2]
  i852.m_IgnoreParentGroups = !!i853[3]
  i852.enabled = !!i853[4]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'animatorController')
  i854.updateMode = i855[2]
  var i857 = i855[3]
  var i856 = []
  for(var i = 0; i < i857.length; i += 2) {
  request.r(i857[i + 0], i857[i + 1], 2, i856, '')
  }
  i854.humanBones = i856
  i854.enabled = !!i855[4]
  return i854
}

Deserializers["MondayOFFSplash"] = function (request, data, root) {
  var i860 = root || request.c( 'MondayOFFSplash' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, '_sceneTransfer')
  request.r(i861[2], i861[3], 0, i860, '_canvasGroup')
  request.r(i861[4], i861[5], 0, i860, '_fadeAnimator')
  request.r(i861[6], i861[7], 0, i860, '_logoImage')
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i863 = data
  i862.cullTransparentMesh = !!i863[0]
  return i862
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Texture')
  i864.m_UVRect = UnityEngine.Rect.MinMaxRect(i865[2], i865[3], i865[4], i865[5])
  request.r(i865[6], i865[7], 0, i864, 'm_Material')
  i864.m_Maskable = !!i865[8]
  i864.m_Color = new pc.Color(i865[9], i865[10], i865[11], i865[12])
  i864.m_RaycastTarget = !!i865[13]
  i864.m_RaycastPadding = new pc.Vec4( i865[14], i865[15], i865[16], i865[17] )
  return i864
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Image' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'm_Sprite')
  i866.m_Type = i867[2]
  i866.m_PreserveAspect = !!i867[3]
  i866.m_FillCenter = !!i867[4]
  i866.m_FillMethod = i867[5]
  i866.m_FillAmount = i867[6]
  i866.m_FillClockwise = !!i867[7]
  i866.m_FillOrigin = i867[8]
  i866.m_UseSpriteMesh = !!i867[9]
  i866.m_PixelsPerUnitMultiplier = i867[10]
  request.r(i867[11], i867[12], 0, i866, 'm_Material')
  i866.m_Maskable = !!i867[13]
  i866.m_Color = new pc.Color(i867[14], i867[15], i867[16], i867[17])
  i866.m_RaycastTarget = !!i867[18]
  i866.m_RaycastPadding = new pc.Vec4( i867[19], i867[20], i867[21], i867[22] )
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i869 = data
  i868.name = i869[0]
  i868.tag = i869[1]
  i868.enabled = !!i869[2]
  i868.isStatic = !!i869[3]
  i868.layer = i869[4]
  return i868
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i870 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'm_FirstSelected')
  i870.m_sendNavigationEvents = !!i871[2]
  i870.m_DragThreshold = i871[3]
  return i870
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i873 = data
  i872.m_HorizontalAxis = i873[0]
  i872.m_VerticalAxis = i873[1]
  i872.m_SubmitButton = i873[2]
  i872.m_CancelButton = i873[3]
  i872.m_InputActionsPerSecond = i873[4]
  i872.m_RepeatDelay = i873[5]
  i872.m_ForceModuleActive = !!i873[6]
  i872.m_SendPointerHoverToParent = !!i873[7]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i875 = data
  i874.name = i875[0]
  i874.width = i875[1]
  i874.height = i875[2]
  i874.mipmapCount = i875[3]
  i874.anisoLevel = i875[4]
  i874.filterMode = i875[5]
  i874.hdr = !!i875[6]
  i874.format = i875[7]
  i874.wrapMode = i875[8]
  i874.alphaIsTransparency = !!i875[9]
  i874.alphaSource = i875[10]
  return i874
}

Deserializers["DontDestroyObj"] = function (request, data, root) {
  var i876 = root || request.c( 'DontDestroyObj' )
  var i877 = data
  return i876
}

Deserializers["MondayOFF.EventsManager"] = function (request, data, root) {
  var i878 = root || request.c( 'MondayOFF.EventsManager' )
  var i879 = data
  return i878
}

Deserializers["MondayOFF.IAP.IAPManager"] = function (request, data, root) {
  var i880 = root || request.c( 'MondayOFF.IAP.IAPManager' )
  var i881 = data
  return i880
}

Deserializers["MondayOFF.AdsManager"] = function (request, data, root) {
  var i882 = root || request.c( 'MondayOFF.AdsManager' )
  var i883 = data
  i882._showBannerOnLoad = !!i883[0]
  i882._adLoadingOrder = i883[1]
  i882.delay = i883[2]
  request.r(i883[3], i883[4], 0, i882, '_pannelLoading')
  request.r(i883[5], i883[6], 0, i882, '_adUnitIDs')
  return i882
}

Deserializers["TimeInterstitialShower"] = function (request, data, root) {
  var i884 = root || request.c( 'TimeInterstitialShower' )
  var i885 = data
  i884.interval = i885[0]
  return i884
}

Deserializers["SingularSDK"] = function (request, data, root) {
  var i886 = root || request.c( 'SingularSDK' )
  var i887 = data
  i886.SingularAPIKey = i887[0]
  i886.SingularAPISecret = i887[1]
  i886.autoIAPComplete = !!i887[2]
  i886.enableLogging = !!i887[3]
  i886.logLevel = i887[4]
  i886.clipboardAttribution = !!i887[5]
  i886.collectOAID = !!i887[6]
  i886.ddlTimeoutSec = System.Int64(i887[7])
  i886.sessionTimeoutSec = System.Int64(i887[8])
  i886.shortlinkResolveTimeout = System.Int64(i887[9])
  i886.SKANEnabled = !!i887[10]
  i886.manualSKANConversionManagement = !!i887[11]
  i886.waitForTrackingAuthorizationWithTimeoutInterval = i887[12]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i889 = data
  i888.name = i889[0]
  i888.atlasId = i889[1]
  i888.mipmapCount = i889[2]
  i888.hdr = !!i889[3]
  i888.size = i889[4]
  i888.anisoLevel = i889[5]
  i888.filterMode = i889[6]
  i888.wrapMode = i889[7]
  var i891 = i889[8]
  var i890 = []
  for(var i = 0; i < i891.length; i += 4) {
    i890.push( UnityEngine.Rect.MinMaxRect(i891[i + 0], i891[i + 1], i891[i + 2], i891[i + 3]) );
  }
  i888.rects = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i895 = data
  i894.name = i895[0]
  i894.index = i895[1]
  i894.startup = !!i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i897 = data
  i896.enabled = !!i897[0]
  i896.type = i897[1]
  i896.color = new pc.Color(i897[2], i897[3], i897[4], i897[5])
  i896.cullingMask = i897[6]
  i896.intensity = i897[7]
  i896.range = i897[8]
  i896.spotAngle = i897[9]
  i896.shadows = i897[10]
  i896.shadowNormalBias = i897[11]
  i896.shadowBias = i897[12]
  i896.shadowStrength = i897[13]
  i896.shadowResolution = i897[14]
  i896.lightmapBakeType = i897[15]
  i896.renderMode = i897[16]
  request.r(i897[17], i897[18], 0, i896, 'cookie')
  i896.cookieSize = i897[19]
  return i896
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i899 = data
  i898.m_Version = i899[0]
  i898.m_UsePipelineSettings = !!i899[1]
  i898.m_AdditionalLightsShadowResolutionTier = i899[2]
  i898.m_LightLayerMask = i899[3]
  i898.m_CustomShadowLayers = !!i899[4]
  i898.m_ShadowLayerMask = i899[5]
  i898.m_LightCookieSize = new pc.Vec2( i899[6], i899[7] )
  i898.m_LightCookieOffset = new pc.Vec2( i899[8], i899[9] )
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i901 = data
  i900.ambientIntensity = i901[0]
  i900.reflectionIntensity = i901[1]
  i900.ambientMode = i901[2]
  i900.ambientLight = new pc.Color(i901[3], i901[4], i901[5], i901[6])
  i900.ambientSkyColor = new pc.Color(i901[7], i901[8], i901[9], i901[10])
  i900.ambientGroundColor = new pc.Color(i901[11], i901[12], i901[13], i901[14])
  i900.ambientEquatorColor = new pc.Color(i901[15], i901[16], i901[17], i901[18])
  i900.fogColor = new pc.Color(i901[19], i901[20], i901[21], i901[22])
  i900.fogEndDistance = i901[23]
  i900.fogStartDistance = i901[24]
  i900.fogDensity = i901[25]
  i900.fog = !!i901[26]
  request.r(i901[27], i901[28], 0, i900, 'skybox')
  i900.fogMode = i901[29]
  var i903 = i901[30]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i903[i + 0]) );
  }
  i900.lightmaps = i902
  i900.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i901[31], i900.lightProbes)
  i900.lightmapsMode = i901[32]
  i900.environmentLightingMode = i901[33]
  i900.ambientProbe = new pc.SphericalHarmonicsL2(i901[34])
  i900.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i901[35])
  i900.useReferenceAmbientProbe = !!i901[36]
  request.r(i901[37], i901[38], 0, i900, 'customReflection')
  request.r(i901[39], i901[40], 0, i900, 'defaultReflection')
  i900.defaultReflectionMode = i901[41]
  i900.defaultReflectionResolution = i901[42]
  i900.sunLightObjectId = i901[43]
  i900.pixelLightCount = i901[44]
  i900.defaultReflectionHDR = !!i901[45]
  i900.hasLightDataAsset = !!i901[46]
  i900.hasManualGenerate = !!i901[47]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'lightmapColor')
  request.r(i907[2], i907[3], 0, i906, 'lightmapDirection')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i908 = root || new UnityEngine.LightProbes()
  var i909 = data
  return i908
}

Deserializers["Fish"] = function (request, data, root) {
  var i916 = root || request.c( 'Fish' )
  var i917 = data
  i916.fishType = request.d('FishType', i917[0], i916.fishType)
  request.r(i917[1], i917[2], 0, i916, 'fishData')
  i916.sensingRadius = i917[3]
  i916.moveSpeed = i917[4]
  i916.followTargetSpeed = i917[5]
  i916.rotationSpeed = i917[6]
  request.r(i917[7], i917[8], 0, i916, 'target')
  i916.usingMapDataNumber = i917[9]
  i916.hooked = !!i917[10]
  request.r(i917[11], i917[12], 0, i916, 'rigid')
  i916.dirToHook = new pc.Vec3( i917[13], i917[14], i917[15] )
  request.r(i917[16], i917[17], 0, i916, 'head')
  request.r(i917[18], i917[19], 0, i916, 'mapData')
  request.r(i917[20], i917[21], 0, i916, 'mousePoint')
  return i916
}

Deserializers["FishType"] = function (request, data, root) {
  var i918 = root || request.c( 'FishType' )
  var i919 = data
  i918.cost = i919[0]
  i918.tier = i919[1]
  i918.fishNumber = i919[2]
  i918.boundSize = new pc.Vec3( i919[3], i919[4], i919[5] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i921 = data
  i920.mass = i921[0]
  i920.drag = i921[1]
  i920.angularDrag = i921[2]
  i920.useGravity = !!i921[3]
  i920.isKinematic = !!i921[4]
  i920.constraints = i921[5]
  i920.maxAngularVelocity = i921[6]
  i920.collisionDetectionMode = i921[7]
  i920.interpolation = i921[8]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i923 = data
  i922.center = new pc.Vec3( i923[0], i923[1], i923[2] )
  i922.size = new pc.Vec3( i923[3], i923[4], i923[5] )
  i922.enabled = !!i923[6]
  i922.isTrigger = !!i923[7]
  request.r(i923[8], i923[9], 0, i922, 'material')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i925 = data
  i924.enabled = !!i925[0]
  request.r(i925[1], i925[2], 0, i924, 'sharedMaterial')
  var i927 = i925[3]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i924.sharedMaterials = i926
  i924.receiveShadows = !!i925[4]
  i924.shadowCastingMode = i925[5]
  i924.sortingLayerID = i925[6]
  i924.sortingOrder = i925[7]
  i924.lightmapIndex = i925[8]
  i924.lightmapSceneIndex = i925[9]
  i924.lightmapScaleOffset = new pc.Vec4( i925[10], i925[11], i925[12], i925[13] )
  i924.lightProbeUsage = i925[14]
  i924.reflectionProbeUsage = i925[15]
  request.r(i925[16], i925[17], 0, i924, 'sharedMesh')
  var i929 = i925[18]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i924.bones = i928
  i924.updateWhenOffscreen = !!i925[19]
  i924.localBounds = i925[20]
  request.r(i925[21], i925[22], 0, i924, 'rootBone')
  var i931 = i925[23]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i931[i + 0]) );
  }
  i924.blendShapesWeights = i930
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i937 = data
  i936.weight = i937[0]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i939 = data
  i938.name = i939[0]
  i938.halfPrecision = !!i939[1]
  i938.vertexCount = i939[2]
  i938.aabb = i939[3]
  var i941 = i939[4]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( !!i941[i + 0] );
  }
  i938.streams = i940
  i938.vertices = i939[5]
  var i943 = i939[6]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i943[i + 0]) );
  }
  i938.subMeshes = i942
  var i945 = i939[7]
  var i944 = []
  for(var i = 0; i < i945.length; i += 16) {
    i944.push( new pc.Mat4().setData(i945[i + 0], i945[i + 1], i945[i + 2], i945[i + 3],  i945[i + 4], i945[i + 5], i945[i + 6], i945[i + 7],  i945[i + 8], i945[i + 9], i945[i + 10], i945[i + 11],  i945[i + 12], i945[i + 13], i945[i + 14], i945[i + 15]) );
  }
  i938.bindposes = i944
  var i947 = i939[8]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i947[i + 0]) );
  }
  i938.blendShapes = i946
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i953 = data
  i952.triangles = i953[0]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i959 = data
  i958.name = i959[0]
  var i961 = i959[1]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i961[i + 0]) );
  }
  i958.frames = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i963 = data
  i962.enabled = !!i963[0]
  i962.isTrigger = !!i963[1]
  request.r(i963[2], i963[3], 0, i962, 'material')
  i962.center = new pc.Vec3( i963[4], i963[5], i963[6] )
  i962.radius = i963[7]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i965 = data
  i964.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i965[0], i964.main)
  i964.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i965[1], i964.colorBySpeed)
  i964.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i965[2], i964.colorOverLifetime)
  i964.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i965[3], i964.emission)
  i964.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i965[4], i964.rotationBySpeed)
  i964.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i965[5], i964.rotationOverLifetime)
  i964.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i965[6], i964.shape)
  i964.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i965[7], i964.sizeBySpeed)
  i964.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i965[8], i964.sizeOverLifetime)
  i964.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i965[9], i964.textureSheetAnimation)
  i964.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i965[10], i964.velocityOverLifetime)
  i964.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i965[11], i964.noise)
  i964.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i965[12], i964.inheritVelocity)
  i964.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i965[13], i964.forceOverLifetime)
  i964.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i965[14], i964.limitVelocityOverLifetime)
  i964.useAutoRandomSeed = !!i965[15]
  i964.randomSeed = i965[16]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i966 = root || new pc.ParticleSystemMain()
  var i967 = data
  i966.duration = i967[0]
  i966.loop = !!i967[1]
  i966.prewarm = !!i967[2]
  i966.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[3], i966.startDelay)
  i966.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[4], i966.startLifetime)
  i966.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[5], i966.startSpeed)
  i966.startSize3D = !!i967[6]
  i966.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[7], i966.startSizeX)
  i966.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[8], i966.startSizeY)
  i966.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[9], i966.startSizeZ)
  i966.startRotation3D = !!i967[10]
  i966.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[11], i966.startRotationX)
  i966.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[12], i966.startRotationY)
  i966.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[13], i966.startRotationZ)
  i966.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i967[14], i966.startColor)
  i966.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i967[15], i966.gravityModifier)
  i966.simulationSpace = i967[16]
  request.r(i967[17], i967[18], 0, i966, 'customSimulationSpace')
  i966.simulationSpeed = i967[19]
  i966.useUnscaledTime = !!i967[20]
  i966.scalingMode = i967[21]
  i966.playOnAwake = !!i967[22]
  i966.maxParticles = i967[23]
  i966.emitterVelocityMode = i967[24]
  i966.stopAction = i967[25]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i968 = root || new pc.MinMaxCurve()
  var i969 = data
  i968.mode = i969[0]
  i968.curveMin = new pc.AnimationCurve( { keys_flow: i969[1] } )
  i968.curveMax = new pc.AnimationCurve( { keys_flow: i969[2] } )
  i968.curveMultiplier = i969[3]
  i968.constantMin = i969[4]
  i968.constantMax = i969[5]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i970 = root || new pc.MinMaxGradient()
  var i971 = data
  i970.mode = i971[0]
  i970.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i971[1], i970.gradientMin)
  i970.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i971[2], i970.gradientMax)
  i970.colorMin = new pc.Color(i971[3], i971[4], i971[5], i971[6])
  i970.colorMax = new pc.Color(i971[7], i971[8], i971[9], i971[10])
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i973 = data
  i972.mode = i973[0]
  var i975 = i973[1]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i975[i + 0]) );
  }
  i972.colorKeys = i974
  var i977 = i973[2]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i977[i + 0]) );
  }
  i972.alphaKeys = i976
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i978 = root || new pc.ParticleSystemColorBySpeed()
  var i979 = data
  i978.enabled = !!i979[0]
  i978.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i979[1], i978.color)
  i978.range = new pc.Vec2( i979[2], i979[3] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i983 = data
  i982.color = new pc.Color(i983[0], i983[1], i983[2], i983[3])
  i982.time = i983[4]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i987 = data
  i986.alpha = i987[0]
  i986.time = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i988 = root || new pc.ParticleSystemColorOverLifetime()
  var i989 = data
  i988.enabled = !!i989[0]
  i988.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i989[1], i988.color)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i990 = root || new pc.ParticleSystemEmitter()
  var i991 = data
  i990.enabled = !!i991[0]
  i990.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[1], i990.rateOverTime)
  i990.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i991[2], i990.rateOverDistance)
  var i993 = i991[3]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i993[i + 0]) );
  }
  i990.bursts = i992
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i996 = root || new pc.ParticleSystemBurst()
  var i997 = data
  i996.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i997[0], i996.count)
  i996.cycleCount = i997[1]
  i996.minCount = i997[2]
  i996.maxCount = i997[3]
  i996.repeatInterval = i997[4]
  i996.time = i997[5]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i998 = root || new pc.ParticleSystemRotationBySpeed()
  var i999 = data
  i998.enabled = !!i999[0]
  i998.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[1], i998.x)
  i998.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[2], i998.y)
  i998.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i999[3], i998.z)
  i998.separateAxes = !!i999[4]
  i998.range = new pc.Vec2( i999[5], i999[6] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1000 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1001 = data
  i1000.enabled = !!i1001[0]
  i1000.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[1], i1000.x)
  i1000.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[2], i1000.y)
  i1000.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1001[3], i1000.z)
  i1000.separateAxes = !!i1001[4]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1002 = root || new pc.ParticleSystemShape()
  var i1003 = data
  i1002.enabled = !!i1003[0]
  i1002.shapeType = i1003[1]
  i1002.randomDirectionAmount = i1003[2]
  i1002.sphericalDirectionAmount = i1003[3]
  i1002.randomPositionAmount = i1003[4]
  i1002.alignToDirection = !!i1003[5]
  i1002.radius = i1003[6]
  i1002.radiusMode = i1003[7]
  i1002.radiusSpread = i1003[8]
  i1002.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1003[9], i1002.radiusSpeed)
  i1002.radiusThickness = i1003[10]
  i1002.angle = i1003[11]
  i1002.length = i1003[12]
  i1002.boxThickness = new pc.Vec3( i1003[13], i1003[14], i1003[15] )
  i1002.meshShapeType = i1003[16]
  request.r(i1003[17], i1003[18], 0, i1002, 'mesh')
  request.r(i1003[19], i1003[20], 0, i1002, 'meshRenderer')
  request.r(i1003[21], i1003[22], 0, i1002, 'skinnedMeshRenderer')
  i1002.useMeshMaterialIndex = !!i1003[23]
  i1002.meshMaterialIndex = i1003[24]
  i1002.useMeshColors = !!i1003[25]
  i1002.normalOffset = i1003[26]
  i1002.arc = i1003[27]
  i1002.arcMode = i1003[28]
  i1002.arcSpread = i1003[29]
  i1002.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1003[30], i1002.arcSpeed)
  i1002.donutRadius = i1003[31]
  i1002.position = new pc.Vec3( i1003[32], i1003[33], i1003[34] )
  i1002.rotation = new pc.Vec3( i1003[35], i1003[36], i1003[37] )
  i1002.scale = new pc.Vec3( i1003[38], i1003[39], i1003[40] )
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1004 = root || new pc.ParticleSystemSizeBySpeed()
  var i1005 = data
  i1004.enabled = !!i1005[0]
  i1004.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[1], i1004.x)
  i1004.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[2], i1004.y)
  i1004.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1005[3], i1004.z)
  i1004.separateAxes = !!i1005[4]
  i1004.range = new pc.Vec2( i1005[5], i1005[6] )
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1006 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[1], i1006.x)
  i1006.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[2], i1006.y)
  i1006.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1007[3], i1006.z)
  i1006.separateAxes = !!i1007[4]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1008 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1009 = data
  i1008.enabled = !!i1009[0]
  i1008.mode = i1009[1]
  i1008.animation = i1009[2]
  i1008.numTilesX = i1009[3]
  i1008.numTilesY = i1009[4]
  i1008.useRandomRow = !!i1009[5]
  i1008.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[6], i1008.frameOverTime)
  i1008.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1009[7], i1008.startFrame)
  i1008.cycleCount = i1009[8]
  i1008.rowIndex = i1009[9]
  i1008.flipU = i1009[10]
  i1008.flipV = i1009[11]
  i1008.spriteCount = i1009[12]
  var i1011 = i1009[13]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1008.sprites = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1014 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1015 = data
  i1014.enabled = !!i1015[0]
  i1014.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[1], i1014.x)
  i1014.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[2], i1014.y)
  i1014.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[3], i1014.z)
  i1014.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1015[4], i1014.speedModifier)
  i1014.space = i1015[5]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1016 = root || new pc.ParticleSystemNoise()
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.separateAxes = !!i1017[1]
  i1016.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[2], i1016.strengthX)
  i1016.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[3], i1016.strengthY)
  i1016.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[4], i1016.strengthZ)
  i1016.frequency = i1017[5]
  i1016.damping = !!i1017[6]
  i1016.octaveCount = i1017[7]
  i1016.octaveMultiplier = i1017[8]
  i1016.octaveScale = i1017[9]
  i1016.quality = i1017[10]
  i1016.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[11], i1016.scrollSpeed)
  i1016.scrollSpeedMultiplier = i1017[12]
  i1016.remapEnabled = !!i1017[13]
  i1016.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[14], i1016.remapX)
  i1016.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[15], i1016.remapY)
  i1016.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[16], i1016.remapZ)
  i1016.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[17], i1016.positionAmount)
  i1016.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[18], i1016.rotationAmount)
  i1016.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1017[19], i1016.sizeAmount)
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1018 = root || new pc.ParticleSystemInheritVelocity()
  var i1019 = data
  i1018.enabled = !!i1019[0]
  i1018.mode = i1019[1]
  i1018.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1019[2], i1018.curve)
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1020 = root || new pc.ParticleSystemForceOverLifetime()
  var i1021 = data
  i1020.enabled = !!i1021[0]
  i1020.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1021[1], i1020.x)
  i1020.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1021[2], i1020.y)
  i1020.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1021[3], i1020.z)
  i1020.space = i1021[4]
  i1020.randomized = !!i1021[5]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1022 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1023 = data
  i1022.enabled = !!i1023[0]
  i1022.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1023[1], i1022.limitX)
  i1022.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1023[2], i1022.limitY)
  i1022.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1023[3], i1022.limitZ)
  i1022.dampen = i1023[4]
  i1022.separateAxes = !!i1023[5]
  i1022.space = i1023[6]
  i1022.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1023[7], i1022.drag)
  i1022.multiplyDragByParticleSize = !!i1023[8]
  i1022.multiplyDragByParticleVelocity = !!i1023[9]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  request.r(i1025[1], i1025[2], 0, i1024, 'sharedMaterial')
  var i1027 = i1025[3]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 2) {
  request.r(i1027[i + 0], i1027[i + 1], 2, i1026, '')
  }
  i1024.sharedMaterials = i1026
  i1024.receiveShadows = !!i1025[4]
  i1024.shadowCastingMode = i1025[5]
  i1024.sortingLayerID = i1025[6]
  i1024.sortingOrder = i1025[7]
  i1024.lightmapIndex = i1025[8]
  i1024.lightmapSceneIndex = i1025[9]
  i1024.lightmapScaleOffset = new pc.Vec4( i1025[10], i1025[11], i1025[12], i1025[13] )
  i1024.lightProbeUsage = i1025[14]
  i1024.reflectionProbeUsage = i1025[15]
  request.r(i1025[16], i1025[17], 0, i1024, 'mesh')
  i1024.meshCount = i1025[18]
  i1024.activeVertexStreamsCount = i1025[19]
  i1024.alignment = i1025[20]
  i1024.renderMode = i1025[21]
  i1024.sortMode = i1025[22]
  i1024.lengthScale = i1025[23]
  i1024.velocityScale = i1025[24]
  i1024.cameraVelocityScale = i1025[25]
  i1024.normalDirection = i1025[26]
  i1024.sortingFudge = i1025[27]
  i1024.minParticleSize = i1025[28]
  i1024.maxParticleSize = i1025[29]
  i1024.pivot = new pc.Vec3( i1025[30], i1025[31], i1025[32] )
  request.r(i1025[33], i1025[34], 0, i1024, 'trailMaterial')
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'sharedMesh')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'additionalVertexStreams')
  i1030.enabled = !!i1031[2]
  request.r(i1031[3], i1031[4], 0, i1030, 'sharedMaterial')
  var i1033 = i1031[5]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1030.sharedMaterials = i1032
  i1030.receiveShadows = !!i1031[6]
  i1030.shadowCastingMode = i1031[7]
  i1030.sortingLayerID = i1031[8]
  i1030.sortingOrder = i1031[9]
  i1030.lightmapIndex = i1031[10]
  i1030.lightmapSceneIndex = i1031[11]
  i1030.lightmapScaleOffset = new pc.Vec4( i1031[12], i1031[13], i1031[14], i1031[15] )
  i1030.lightProbeUsage = i1031[16]
  i1030.reflectionProbeUsage = i1031[17]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i1035 = data
  i1034.textureMode = i1035[0]
  i1034.alignment = i1035[1]
  i1034.widthCurve = new pc.AnimationCurve( { keys_flow: i1035[2] } )
  i1034.colorGradient = i1035[3] ? new pc.ColorGradient(i1035[3][0], i1035[3][1], i1035[3][2]) : null
  var i1037 = i1035[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 3) {
    i1036.push( new pc.Vec3( i1037[i + 0], i1037[i + 1], i1037[i + 2] ) );
  }
  i1034.positions = i1036
  i1034.positionCount = i1035[5]
  i1034.widthMultiplier = i1035[6]
  i1034.startWidth = i1035[7]
  i1034.endWidth = i1035[8]
  i1034.numCornerVertices = i1035[9]
  i1034.numCapVertices = i1035[10]
  i1034.useWorldSpace = !!i1035[11]
  i1034.loop = !!i1035[12]
  i1034.startColor = new pc.Color(i1035[13], i1035[14], i1035[15], i1035[16])
  i1034.endColor = new pc.Color(i1035[17], i1035[18], i1035[19], i1035[20])
  i1034.generateLightingData = !!i1035[21]
  i1034.enabled = !!i1035[22]
  request.r(i1035[23], i1035[24], 0, i1034, 'sharedMaterial')
  var i1039 = i1035[25]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 2) {
  request.r(i1039[i + 0], i1039[i + 1], 2, i1038, '')
  }
  i1034.sharedMaterials = i1038
  i1034.receiveShadows = !!i1035[26]
  i1034.shadowCastingMode = i1035[27]
  i1034.sortingLayerID = i1035[28]
  i1034.sortingOrder = i1035[29]
  i1034.lightmapIndex = i1035[30]
  i1034.lightmapSceneIndex = i1035[31]
  i1034.lightmapScaleOffset = new pc.Vec4( i1035[32], i1035[33], i1035[34], i1035[35] )
  i1034.lightProbeUsage = i1035[36]
  i1034.reflectionProbeUsage = i1035[37]
  return i1034
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i1040 = root || request.c( 'FishingLine' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'line')
  request.r(i1041[2], i1041[3], 0, i1040, 'startPoint')
  request.r(i1041[4], i1041[5], 0, i1040, 'endPoint')
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i1043 = data
  i1042.swingAxis = new pc.Vec3( i1043[0], i1043[1], i1043[2] )
  i1042.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1043[3], i1042.twistLimitSpring)
  i1042.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1043[4], i1042.swingLimitSpring)
  i1042.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i1043[5], i1042.lowTwistLimit)
  i1042.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i1043[6], i1042.highTwistLimit)
  i1042.swing1Limit = request.d('UnityEngine.SoftJointLimit', i1043[7], i1042.swing1Limit)
  i1042.swing2Limit = request.d('UnityEngine.SoftJointLimit', i1043[8], i1042.swing2Limit)
  request.r(i1043[9], i1043[10], 0, i1042, 'connectedBody')
  i1042.axis = new pc.Vec3( i1043[11], i1043[12], i1043[13] )
  i1042.anchor = new pc.Vec3( i1043[14], i1043[15], i1043[16] )
  i1042.connectedAnchor = new pc.Vec3( i1043[17], i1043[18], i1043[19] )
  i1042.autoConfigureConnectedAnchor = !!i1043[20]
  i1042.massScale = i1043[21]
  i1042.connectedMassScale = i1043[22]
  i1042.enableCollision = !!i1043[23]
  i1042.breakForce = i1043[24]
  i1042.breakTorque = i1043[25]
  return i1042
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i1044 = root || request.c( 'RopeBridge' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'StartPoint')
  request.r(i1045[2], i1045[3], 0, i1044, 'EndPoint')
  i1044.ropeSegLen = i1045[4]
  i1044.segmentLength = i1045[5]
  i1044.lineWidth = i1045[6]
  i1044.distOfStartToEnd = i1045[7]
  i1044.lineLengthMultifly = i1045[8]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1049 = data
  i1048.weight = i1049[0]
  i1048.vertices = i1049[1]
  i1048.normals = i1049[2]
  i1048.tangents = i1049[3]
  return i1048
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1051 = data
  i1050.m_hasFontAssetChanged = !!i1051[0]
  request.r(i1051[1], i1051[2], 0, i1050, 'm_baseMaterial')
  i1050.m_maskOffset = new pc.Vec4( i1051[3], i1051[4], i1051[5], i1051[6] )
  i1050.m_text = i1051[7]
  i1050.m_isRightToLeft = !!i1051[8]
  request.r(i1051[9], i1051[10], 0, i1050, 'm_fontAsset')
  request.r(i1051[11], i1051[12], 0, i1050, 'm_sharedMaterial')
  var i1053 = i1051[13]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1050.m_fontSharedMaterials = i1052
  request.r(i1051[14], i1051[15], 0, i1050, 'm_fontMaterial')
  var i1055 = i1051[16]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 2) {
  request.r(i1055[i + 0], i1055[i + 1], 2, i1054, '')
  }
  i1050.m_fontMaterials = i1054
  i1050.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1051[17], i1051[18], i1051[19], i1051[20])
  i1050.m_fontColor = new pc.Color(i1051[21], i1051[22], i1051[23], i1051[24])
  i1050.m_enableVertexGradient = !!i1051[25]
  i1050.m_colorMode = i1051[26]
  i1050.m_fontColorGradient = request.d('TMPro.VertexGradient', i1051[27], i1050.m_fontColorGradient)
  request.r(i1051[28], i1051[29], 0, i1050, 'm_fontColorGradientPreset')
  request.r(i1051[30], i1051[31], 0, i1050, 'm_spriteAsset')
  i1050.m_tintAllSprites = !!i1051[32]
  request.r(i1051[33], i1051[34], 0, i1050, 'm_StyleSheet')
  i1050.m_TextStyleHashCode = i1051[35]
  i1050.m_overrideHtmlColors = !!i1051[36]
  i1050.m_faceColor = UnityEngine.Color32.ConstructColor(i1051[37], i1051[38], i1051[39], i1051[40])
  i1050.m_fontSize = i1051[41]
  i1050.m_fontSizeBase = i1051[42]
  i1050.m_fontWeight = i1051[43]
  i1050.m_enableAutoSizing = !!i1051[44]
  i1050.m_fontSizeMin = i1051[45]
  i1050.m_fontSizeMax = i1051[46]
  i1050.m_fontStyle = i1051[47]
  i1050.m_HorizontalAlignment = i1051[48]
  i1050.m_VerticalAlignment = i1051[49]
  i1050.m_textAlignment = i1051[50]
  i1050.m_characterSpacing = i1051[51]
  i1050.m_wordSpacing = i1051[52]
  i1050.m_lineSpacing = i1051[53]
  i1050.m_lineSpacingMax = i1051[54]
  i1050.m_paragraphSpacing = i1051[55]
  i1050.m_charWidthMaxAdj = i1051[56]
  i1050.m_enableWordWrapping = !!i1051[57]
  i1050.m_wordWrappingRatios = i1051[58]
  i1050.m_overflowMode = i1051[59]
  request.r(i1051[60], i1051[61], 0, i1050, 'm_linkedTextComponent')
  request.r(i1051[62], i1051[63], 0, i1050, 'parentLinkedComponent')
  i1050.m_enableKerning = !!i1051[64]
  i1050.m_enableExtraPadding = !!i1051[65]
  i1050.checkPaddingRequired = !!i1051[66]
  i1050.m_isRichText = !!i1051[67]
  i1050.m_parseCtrlCharacters = !!i1051[68]
  i1050.m_isOrthographic = !!i1051[69]
  i1050.m_isCullingEnabled = !!i1051[70]
  i1050.m_horizontalMapping = i1051[71]
  i1050.m_verticalMapping = i1051[72]
  i1050.m_uvLineOffset = i1051[73]
  i1050.m_geometrySortingOrder = i1051[74]
  i1050.m_IsTextObjectScaleStatic = !!i1051[75]
  i1050.m_VertexBufferAutoSizeReduction = !!i1051[76]
  i1050.m_useMaxVisibleDescender = !!i1051[77]
  i1050.m_pageToDisplay = i1051[78]
  i1050.m_margin = new pc.Vec4( i1051[79], i1051[80], i1051[81], i1051[82] )
  i1050.m_isUsingLegacyAnimationComponent = !!i1051[83]
  i1050.m_isVolumetricText = !!i1051[84]
  request.r(i1051[85], i1051[86], 0, i1050, 'm_Material')
  i1050.m_Maskable = !!i1051[87]
  i1050.m_Color = new pc.Color(i1051[88], i1051[89], i1051[90], i1051[91])
  i1050.m_RaycastTarget = !!i1051[92]
  i1050.m_RaycastPadding = new pc.Vec4( i1051[93], i1051[94], i1051[95], i1051[96] )
  return i1050
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.VertexGradient' )
  var i1057 = data
  i1056.topLeft = new pc.Color(i1057[0], i1057[1], i1057[2], i1057[3])
  i1056.topRight = new pc.Color(i1057[4], i1057[5], i1057[6], i1057[7])
  i1056.bottomLeft = new pc.Color(i1057[8], i1057[9], i1057[10], i1057[11])
  i1056.bottomRight = new pc.Color(i1057[12], i1057[13], i1057[14], i1057[15])
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i1059 = data
  i1058.enabled = !!i1059[0]
  i1058.source = i1059[1]
  request.r(i1059[2], i1059[3], 0, i1058, 'clip')
  i1058.url = i1059[4]
  i1058.playOnAwake = !!i1059[5]
  i1058.isLooping = !!i1059[6]
  i1058.renderMode = i1059[7]
  request.r(i1059[8], i1059[9], 0, i1058, 'targetTexture')
  request.r(i1059[10], i1059[11], 0, i1058, 'targetMaterialRenderer')
  i1058.targetMaterialProperty = i1059[12]
  i1058.playbackSpeed = i1059[13]
  return i1058
}

Deserializers["MondayOFF.CPButton"] = function (request, data, root) {
  var i1060 = root || request.c( 'MondayOFF.CPButton' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, '_vp')
  request.r(i1061[2], i1061[3], 0, i1060, '_videoList')
  return i1060
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.Button' )
  var i1063 = data
  i1062.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1063[0], i1062.m_OnClick)
  i1062.m_Navigation = request.d('UnityEngine.UI.Navigation', i1063[1], i1062.m_Navigation)
  i1062.m_Transition = i1063[2]
  i1062.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1063[3], i1062.m_Colors)
  i1062.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1063[4], i1062.m_SpriteState)
  i1062.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1063[5], i1062.m_AnimationTriggers)
  i1062.m_Interactable = !!i1063[6]
  request.r(i1063[7], i1063[8], 0, i1062, 'm_TargetGraphic')
  return i1062
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1065 = data
  i1064.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1065[0], i1064.m_PersistentCalls)
  return i1064
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1066 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('UnityEngine.Events.PersistentCall', i1069[i + 0]));
  }
  i1066.m_Calls = i1068
  return i1066
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1072 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'm_Target')
  i1072.m_TargetAssemblyTypeName = i1073[2]
  i1072.m_MethodName = i1073[3]
  i1072.m_Mode = i1073[4]
  i1072.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1073[5], i1072.m_Arguments)
  i1072.m_CallState = i1073[6]
  return i1072
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1075 = data
  i1074.m_Mode = i1075[0]
  i1074.m_WrapAround = !!i1075[1]
  request.r(i1075[2], i1075[3], 0, i1074, 'm_SelectOnUp')
  request.r(i1075[4], i1075[5], 0, i1074, 'm_SelectOnDown')
  request.r(i1075[6], i1075[7], 0, i1074, 'm_SelectOnLeft')
  request.r(i1075[8], i1075[9], 0, i1074, 'm_SelectOnRight')
  return i1074
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1077 = data
  i1076.m_NormalColor = new pc.Color(i1077[0], i1077[1], i1077[2], i1077[3])
  i1076.m_HighlightedColor = new pc.Color(i1077[4], i1077[5], i1077[6], i1077[7])
  i1076.m_PressedColor = new pc.Color(i1077[8], i1077[9], i1077[10], i1077[11])
  i1076.m_SelectedColor = new pc.Color(i1077[12], i1077[13], i1077[14], i1077[15])
  i1076.m_DisabledColor = new pc.Color(i1077[16], i1077[17], i1077[18], i1077[19])
  i1076.m_ColorMultiplier = i1077[20]
  i1076.m_FadeDuration = i1077[21]
  return i1076
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1078 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'm_HighlightedSprite')
  request.r(i1079[2], i1079[3], 0, i1078, 'm_PressedSprite')
  request.r(i1079[4], i1079[5], 0, i1078, 'm_SelectedSprite')
  request.r(i1079[6], i1079[7], 0, i1078, 'm_DisabledSprite')
  return i1078
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1080 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1081 = data
  i1080.m_NormalTrigger = i1081[0]
  i1080.m_HighlightedTrigger = i1081[1]
  i1080.m_PressedTrigger = i1081[2]
  i1080.m_SelectedTrigger = i1081[3]
  i1080.m_DisabledTrigger = i1081[4]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i1083 = data
  i1082.name = i1083[0]
  i1082.width = i1083[1]
  i1082.height = i1083[2]
  i1082.anisoLevel = i1083[3]
  i1082.filterMode = i1083[4]
  i1082.hdr = !!i1083[5]
  i1082.format = i1083[6]
  i1082.wrapMode = i1083[7]
  return i1082
}

Deserializers["Chest"] = function (request, data, root) {
  var i1084 = root || request.c( 'Chest' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'chestMover')
  i1084.chestTier = i1085[2]
  request.r(i1085[3], i1085[4], 0, i1084, 'line')
  i1084.chestPullDist = i1085[5]
  i1084.pullForce = i1085[6]
  i1084.fishType = request.d('FishType', i1085[7], i1084.fishType)
  request.r(i1085[8], i1085[9], 0, i1084, 'fishData')
  i1084.sensingRadius = i1085[10]
  i1084.moveSpeed = i1085[11]
  i1084.followTargetSpeed = i1085[12]
  i1084.rotationSpeed = i1085[13]
  request.r(i1085[14], i1085[15], 0, i1084, 'target')
  i1084.usingMapDataNumber = i1085[16]
  i1084.hooked = !!i1085[17]
  request.r(i1085[18], i1085[19], 0, i1084, 'rigid2')
  request.r(i1085[20], i1085[21], 0, i1084, 'rigid')
  i1084.dirToHook = new pc.Vec3( i1085[22], i1085[23], i1085[24] )
  request.r(i1085[25], i1085[26], 0, i1084, 'head')
  request.r(i1085[27], i1085[28], 0, i1084, 'mapData')
  request.r(i1085[29], i1085[30], 0, i1084, 'mousePoint')
  return i1084
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i1086 = root || request.c( 'ChestMover' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'chest')
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1089 = data
  i1088.enabled = !!i1089[0]
  request.r(i1089[1], i1089[2], 0, i1088, 'sharedMaterial')
  var i1091 = i1089[3]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1088.sharedMaterials = i1090
  i1088.receiveShadows = !!i1089[4]
  i1088.shadowCastingMode = i1089[5]
  i1088.sortingLayerID = i1089[6]
  i1088.sortingOrder = i1089[7]
  i1088.lightmapIndex = i1089[8]
  i1088.lightmapSceneIndex = i1089[9]
  i1088.lightmapScaleOffset = new pc.Vec4( i1089[10], i1089[11], i1089[12], i1089[13] )
  i1088.lightProbeUsage = i1089[14]
  i1088.reflectionProbeUsage = i1089[15]
  i1088.color = new pc.Color(i1089[16], i1089[17], i1089[18], i1089[19])
  request.r(i1089[20], i1089[21], 0, i1088, 'sprite')
  i1088.flipX = !!i1089[22]
  i1088.flipY = !!i1089[23]
  i1088.drawMode = i1089[24]
  i1088.size = new pc.Vec2( i1089[25], i1089[26] )
  i1088.tileMode = i1089[27]
  i1088.adaptiveModeThreshold = i1089[28]
  i1088.maskInteraction = i1089[29]
  i1088.spriteSortPoint = i1089[30]
  return i1088
}

Deserializers["FlockUnit"] = function (request, data, root) {
  var i1092 = root || request.c( 'FlockUnit' )
  var i1093 = data
  i1092.FOVAngle = i1093[0]
  i1092.smoothDamp = i1093[1]
  i1092.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i1093[2] )
  var i1095 = i1093[3]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 3) {
    i1094.push( new pc.Vec3( i1095[i + 0], i1095[i + 1], i1095[i + 2] ) );
  }
  i1092.directionsToCheckWhenAvoidingObstacles = i1094
  return i1092
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1096 = root || request.c( 'AudioManager' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Sound', i1099[i + 0]) );
  }
  i1096.Bgm = i1098
  request.r(i1097[1], i1097[2], 0, i1096, 'bgmPrefab')
  var i1101 = i1097[3]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Sound', i1101[i + 0]) );
  }
  i1096.SFX = i1100
  request.r(i1097[4], i1097[5], 0, i1096, 'SFXPrefab')
  return i1096
}

Deserializers["Sound"] = function (request, data, root) {
  var i1104 = root || request.c( 'Sound' )
  var i1105 = data
  i1104.name = i1105[0]
  request.r(i1105[1], i1105[2], 0, i1104, 'clip')
  i1104.volume = i1105[3]
  i1104.pitch = i1105[4]
  i1104.time = i1105[5]
  i1104.loop = !!i1105[6]
  i1104.bgm = !!i1105[7]
  request.r(i1105[8], i1105[9], 0, i1104, 'audioMixerGroup')
  request.r(i1105[10], i1105[11], 0, i1104, 'source')
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1107 = data
  request.r(i1107[0], i1107[1], 0, i1106, 'clip')
  request.r(i1107[2], i1107[3], 0, i1106, 'outputAudioMixerGroup')
  i1106.playOnAwake = !!i1107[4]
  i1106.loop = !!i1107[5]
  i1106.time = i1107[6]
  i1106.volume = i1107[7]
  i1106.pitch = i1107[8]
  i1106.enabled = !!i1107[9]
  return i1106
}

Deserializers["ChallengeManager"] = function (request, data, root) {
  var i1108 = root || request.c( 'ChallengeManager' )
  var i1109 = data
  var i1111 = i1109[0]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('ChallengeManager+fishClass')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('ChallengeManager+fishClass', i1111[i + 0]));
  }
  i1108.fishList = i1110
  var i1113 = i1109[1]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1113.length; i += 2) {
  request.r(i1113[i + 0], i1113[i + 1], 1, i1112, '')
  }
  i1108.fishList2 = i1112
  request.r(i1109[2], i1109[3], 0, i1108, 'fishObjectParent')
  i1108.stageNum = i1109[4]
  i1108.challengeSuccessPanelOn = !!i1109[5]
  request.r(i1109[6], i1109[7], 0, i1108, 'hook')
  request.r(i1109[8], i1109[9], 0, i1108, 'fishObectParent')
  request.r(i1109[10], i1109[11], 0, i1108, 'catchAnyTargetImage')
  request.r(i1109[12], i1109[13], 0, i1108, 'challengeSuccessPanel')
  request.r(i1109[14], i1109[15], 0, i1108, 'rewardText')
  request.r(i1109[16], i1109[17], 0, i1108, 'challengeSuccess_CatchAnyTargetImage')
  request.r(i1109[18], i1109[19], 0, i1108, 'challengeSuccess_TargetTransform')
  request.r(i1109[20], i1109[21], 0, i1108, 'fishObject')
  request.r(i1109[22], i1109[23], 0, i1108, 'currentChallengeImage')
  request.r(i1109[24], i1109[25], 0, i1108, 'upgradeButton')
  request.r(i1109[26], i1109[27], 0, i1108, 'tapToStartText')
  request.r(i1109[28], i1109[29], 0, i1108, 'tapToContinueText')
  request.r(i1109[30], i1109[31], 0, i1108, 'targetMarkerPrefab')
  request.r(i1109[32], i1109[33], 0, i1108, 'outlineMat')
  request.r(i1109[34], i1109[35], 0, i1108, 'glowparticlePrefab')
  return i1108
}

Deserializers["ChallengeManager+fishClass"] = function (request, data, root) {
  var i1116 = root || request.c( 'ChallengeManager+fishClass' )
  var i1117 = data
  i1116.tier = i1117[0]
  var i1119 = i1117[1]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('ChallengeManager+targetFish')))
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.add(request.d('ChallengeManager+targetFish', i1119[i + 0]));
  }
  i1116.fishList = i1118
  return i1116
}

Deserializers["ChallengeManager+targetFish"] = function (request, data, root) {
  var i1122 = root || request.c( 'ChallengeManager+targetFish' )
  var i1123 = data
  i1122.fishNumber = i1123[0]
  request.r(i1123[1], i1123[2], 0, i1122, 'prefab')
  return i1122
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i1126 = root || request.c( 'FishingRod' )
  var i1127 = data
  i1126.hookThrowForce = i1127[0]
  i1126.lineForce = i1127[1]
  i1126.maxPullingForce = i1127[2]
  i1126.minPullingForce = i1127[3]
  i1126.currentPullingForece = i1127[4]
  i1126.maxLine = i1127[5]
  i1126.pullingSpeed = i1127[6]
  i1126.playAdsPullCount = i1127[7]
  i1126.isStart = !!i1127[8]
  request.r(i1127[9], i1127[10], 0, i1126, 'hookRigid')
  request.r(i1127[11], i1127[12], 0, i1126, 'pivot')
  request.r(i1127[13], i1127[14], 0, i1126, 'touchToStartPanel')
  request.r(i1127[15], i1127[16], 0, i1126, 'rodAnimator')
  request.r(i1127[17], i1127[18], 0, i1126, 'fishingHook')
  request.r(i1127[19], i1127[20], 0, i1126, 'touchField')
  request.r(i1127[21], i1127[22], 0, i1126, 'upgradePanel')
  request.r(i1127[23], i1127[24], 0, i1126, 'upgradeButton')
  request.r(i1127[25], i1127[26], 0, i1126, 'depthText')
  request.r(i1127[27], i1127[28], 0, i1126, 'throwTarget1')
  request.r(i1127[29], i1127[30], 0, i1126, 'throwTarget2')
  request.r(i1127[31], i1127[32], 0, i1126, 'hookObject')
  request.r(i1127[33], i1127[34], 0, i1126, 'playerObject')
  return i1126
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i1128 = root || request.c( 'FishingLogic' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'joint')
  i1128.biteBate = !!i1129[2]
  i1128.pulling = !!i1129[3]
  i1128.enablePulling = !!i1129[4]
  request.r(i1129[5], i1129[6], 0, i1128, 'rodAnimator')
  request.r(i1129[7], i1129[8], 0, i1128, 'startButton')
  request.r(i1129[9], i1129[10], 0, i1128, 'catchSlider')
  request.r(i1129[11], i1129[12], 0, i1128, 'catchButton')
  request.r(i1129[13], i1129[14], 0, i1128, 'fishingRod')
  request.r(i1129[15], i1129[16], 0, i1128, 'arrow')
  request.r(i1129[17], i1129[18], 0, i1128, 'fishingRodSkinned')
  request.r(i1129[19], i1129[20], 0, i1128, 'bubbleParticle')
  request.r(i1129[21], i1129[22], 0, i1128, 'hookRigid')
  request.r(i1129[23], i1129[24], 0, i1128, 'hook')
  return i1128
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i1130 = root || request.c( 'Upgrades' )
  var i1131 = data
  i1130.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i1131[0], i1130.lineLengthUpgrade)
  i1130.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i1131[1], i1130.hookMaxUpgrade)
  i1130.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i1131[2], i1130.hookMoveSpeedUpgrade)
  request.r(i1131[3], i1131[4], 0, i1130, 'hook')
  request.r(i1131[5], i1131[6], 0, i1130, 'rod')
  request.r(i1131[7], i1131[8], 0, i1130, 'touchField')
  request.r(i1131[9], i1131[10], 0, i1130, 'upgradePanel')
  request.r(i1131[11], i1131[12], 0, i1130, 'upgradeTap')
  request.r(i1131[13], i1131[14], 0, i1130, 'closeTap')
  request.r(i1131[15], i1131[16], 0, i1130, 'tapToStartText')
  return i1130
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i1132 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i1133 = data
  i1132.currentLevel = i1133[0]
  i1132.maxLevel = i1133[1]
  i1132.upgradeValue = i1133[2]
  i1132.upgradeNeedyCost = i1133[3]
  i1132.upgradeCostIncreaseValue = i1133[4]
  i1132.upgradeCostIncreaseValueMultifly = i1133[5]
  request.r(i1133[6], i1133[7], 0, i1132, 'levelText')
  request.r(i1133[8], i1133[9], 0, i1132, 'needyCostText')
  request.r(i1133[10], i1133[11], 0, i1132, 'cover')
  request.r(i1133[12], i1133[13], 0, i1132, 'rod')
  return i1132
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i1134 = root || request.c( 'Upgrades+CountUpgrade' )
  var i1135 = data
  i1134.currentLevel = i1135[0]
  i1134.maxLevel = i1135[1]
  i1134.upgradeValue = i1135[2]
  i1134.upgradeNeedyCost = i1135[3]
  i1134.upgradeCostIncreaseValue = i1135[4]
  i1134.upgradeCostIncreaseValueMultifly = i1135[5]
  request.r(i1135[6], i1135[7], 0, i1134, 'levelText')
  request.r(i1135[8], i1135[9], 0, i1134, 'needyCostText')
  request.r(i1135[10], i1135[11], 0, i1134, 'cover')
  request.r(i1135[12], i1135[13], 0, i1134, 'hook')
  return i1134
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i1136 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i1137 = data
  i1136.currentLevel = i1137[0]
  i1136.maxLevel = i1137[1]
  i1136.upgradeValue = i1137[2]
  i1136.upgradeNeedyCost = i1137[3]
  i1136.upgradeCostIncreaseValue = i1137[4]
  i1136.upgradeCostIncreaseValueMultifly = i1137[5]
  request.r(i1137[6], i1137[7], 0, i1136, 'levelText')
  request.r(i1137[8], i1137[9], 0, i1136, 'needyCostText')
  request.r(i1137[10], i1137[11], 0, i1136, 'cover')
  request.r(i1137[12], i1137[13], 0, i1136, 'touchField')
  return i1136
}

Deserializers["FishPool"] = function (request, data, root) {
  var i1138 = root || request.c( 'FishPool' )
  var i1139 = data
  i1138.oneTierFishList = request.d('FishList', i1139[0], i1138.oneTierFishList)
  i1138.twoTierFishList = request.d('FishList', i1139[1], i1138.twoTierFishList)
  i1138.threeTierFishList = request.d('FishList', i1139[2], i1138.threeTierFishList)
  i1138.fourTierFishList = request.d('FishList', i1139[3], i1138.fourTierFishList)
  i1138.fiveTierFishList = request.d('FishList', i1139[4], i1138.fiveTierFishList)
  i1138.chestList_one = request.d('FishList', i1139[5], i1138.chestList_one)
  i1138.chestList_two = request.d('FishList', i1139[6], i1138.chestList_two)
  i1138.chestList_three = request.d('FishList', i1139[7], i1138.chestList_three)
  i1138.chestMover = request.d('FishList', i1139[8], i1138.chestMover)
  var i1141 = i1139[9]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1141.length; i += 2) {
  request.r(i1141[i + 0], i1141[i + 1], 1, i1140, '')
  }
  i1138.generatedFishList = i1140
  request.r(i1139[10], i1139[11], 0, i1138, 'poolParent')
  return i1138
}

Deserializers["FishList"] = function (request, data, root) {
  var i1142 = root || request.c( 'FishList' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1145.length; i += 2) {
  request.r(i1145[i + 0], i1145[i + 1], 1, i1144, '')
  }
  i1142.fishList = i1144
  var i1147 = i1143[1]
  var i1146 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1147.length; i += 2) {
  request.r(i1147[i + 0], i1147[i + 1], 1, i1146, '')
  }
  i1142.spawnPoints = i1146
  return i1142
}

Deserializers["DataManager"] = function (request, data, root) {
  var i1152 = root || request.c( 'DataManager' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'setting')
  request.r(i1153[2], i1153[3], 0, i1152, 'soundSlider')
  request.r(i1153[4], i1153[5], 0, i1152, 'hapticSlider')
  i1152.gameDataFileName = i1153[6]
  i1152._gameData = request.d('GameData', i1153[7], i1152._gameData)
  request.r(i1153[8], i1153[9], 0, i1152, 'soundSliderHandleText')
  request.r(i1153[10], i1153[11], 0, i1152, 'hapticSliderHandleText')
  return i1152
}

Deserializers["GameData"] = function (request, data, root) {
  var i1154 = root || request.c( 'GameData' )
  var i1155 = data
  i1154.money = i1155[0]
  i1154.needleUpgrade = i1155[1]
  i1154.lineUpgrade = i1155[2]
  i1154.reelUpgrade = i1155[3]
  i1154.sound = i1155[4]
  i1154.haptic = i1155[5]
  return i1154
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1157 = data
  i1156.m_IgnoreReversedGraphics = !!i1157[0]
  i1156.m_BlockingObjects = i1157[1]
  i1156.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1157[2] )
  return i1156
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1158 = root || request.c( 'UIManager' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'challengeTarget')
  request.r(i1159[2], i1159[3], 0, i1158, 'challengeText')
  request.r(i1159[4], i1159[5], 0, i1158, 'versionText')
  i1158.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1159[6] )
  i1158.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1159[7] )
  request.r(i1159[8], i1159[9], 0, i1158, 'uiCamera')
  var i1161 = i1159[10]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 2, i1160, '')
  }
  i1158.pictureModeObjects = i1160
  return i1158
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i1164 = root || request.c( 'FixedTouchField' )
  var i1165 = data
  i1164.TouchDist = new pc.Vec2( i1165[0], i1165[1] )
  i1164.PointerOld = new pc.Vec2( i1165[2], i1165[3] )
  i1164.Pressed = !!i1165[4]
  i1164.hookMoveSpeed = i1165[5]
  request.r(i1165[6], i1165[7], 0, i1164, 'hook')
  request.r(i1165[8], i1165[9], 0, i1164, 'logic')
  request.r(i1165[10], i1165[11], 0, i1164, 'joystick_Background')
  request.r(i1165[12], i1165[13], 0, i1164, 'joystick_Handle')
  request.r(i1165[14], i1165[15], 0, i1164, 'canvas')
  request.r(i1165[16], i1165[17], 0, i1164, 'newCamera')
  i1164.clampDist = i1165[18]
  return i1164
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'm_ObjectArgument')
  i1166.m_ObjectArgumentAssemblyTypeName = i1167[2]
  i1166.m_IntArgument = i1167[3]
  i1166.m_FloatArgument = i1167[4]
  i1166.m_StringArgument = i1167[5]
  i1166.m_BoolArgument = !!i1167[6]
  return i1166
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'm_FillRect')
  request.r(i1169[2], i1169[3], 0, i1168, 'm_HandleRect')
  i1168.m_Direction = i1169[4]
  i1168.m_MinValue = i1169[5]
  i1168.m_MaxValue = i1169[6]
  i1168.m_WholeNumbers = !!i1169[7]
  i1168.m_Value = i1169[8]
  i1168.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1169[9], i1168.m_OnValueChanged)
  i1168.m_Navigation = request.d('UnityEngine.UI.Navigation', i1169[10], i1168.m_Navigation)
  i1168.m_Transition = i1169[11]
  i1168.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1169[12], i1168.m_Colors)
  i1168.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1169[13], i1168.m_SpriteState)
  i1168.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1169[14], i1168.m_AnimationTriggers)
  i1168.m_Interactable = !!i1169[15]
  request.r(i1169[16], i1169[17], 0, i1168, 'm_TargetGraphic')
  return i1168
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1171 = data
  i1170.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1171[0], i1170.m_PersistentCalls)
  return i1170
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i1172 = root || request.c( 'EnviromentEditor' )
  var i1173 = data
  i1172.oceanSpriteValueMultifly = i1173[0]
  i1172.sunLightIntensity = i1173[1]
  i1172.minSunLightIntensity = i1173[2]
  i1172.challengeLightIntensity = i1173[3]
  i1172.depthMaskTransparentValue = i1173[4]
  i1172.ambientLightIntensity = i1173[5]
  request.r(i1173[6], i1173[7], 0, i1172, 'hook')
  var i1175 = i1173[8]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 2) {
  request.r(i1175[i + 0], i1175[i + 1], 2, i1174, '')
  }
  i1172.Oceans = i1174
  request.r(i1173[9], i1173[10], 0, i1172, 'OceanSurface')
  request.r(i1173[11], i1173[12], 0, i1172, 'depthMask')
  request.r(i1173[13], i1173[14], 0, i1172, 'depthSprite')
  request.r(i1173[15], i1173[16], 0, i1172, 'depthMaskMat')
  request.r(i1173[17], i1173[18], 0, i1172, 'sunLights')
  request.r(i1173[19], i1173[20], 0, i1172, 'hookLight')
  request.r(i1173[21], i1173[22], 0, i1172, 'challengeLight')
  return i1172
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i1178 = root || request.c( 'ObjectMovement' )
  var i1179 = data
  i1178.moveX = i1179[0]
  i1178.moveSec = i1179[1]
  return i1178
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i1180 = root || request.c( 'OceanTrigger' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'touchToPullButton')
  request.r(i1181[2], i1181[3], 0, i1180, 'waterSplashParticle')
  request.r(i1181[4], i1181[5], 0, i1180, 'bubbleParticle')
  request.r(i1181[6], i1181[7], 0, i1180, 'arrow')
  request.r(i1181[8], i1181[9], 0, i1180, 'rigid')
  request.r(i1181[10], i1181[11], 0, i1180, 'hook')
  request.r(i1181[12], i1181[13], 0, i1180, 'rod')
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1183 = data
  i1182.enabled = !!i1183[0]
  i1182.isTrigger = !!i1183[1]
  request.r(i1183[2], i1183[3], 0, i1182, 'material')
  request.r(i1183[4], i1183[5], 0, i1182, 'sharedMesh')
  i1182.convex = !!i1183[6]
  return i1182
}

Deserializers["Flock"] = function (request, data, root) {
  var i1184 = root || request.c( 'Flock' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'flockUnitPrefab')
  i1184.flockSize = i1185[2]
  i1184.spawnBounds = new pc.Vec3( i1185[3], i1185[4], i1185[5] )
  i1184._minSpeed = i1185[6]
  i1184._maxSpeed = i1185[7]
  i1184._cohesionDistance = i1185[8]
  i1184._avoidanceDistance = i1185[9]
  i1184._aligementDistance = i1185[10]
  i1184._obstacleDistance = i1185[11]
  i1184._boundsDistance = i1185[12]
  i1184._cohesionWeight = i1185[13]
  i1184._avoidanceWeight = i1185[14]
  i1184._aligementWeight = i1185[15]
  i1184._boundsWeight = i1185[16]
  i1184._obstacleWeight = i1185[17]
  return i1184
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1186 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'm_LookAt')
  request.r(i1187[2], i1187[3], 0, i1186, 'm_Follow')
  i1186.m_Lens = request.d('Cinemachine.LensSettings', i1187[4], i1186.m_Lens)
  i1186.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1187[5], i1186.m_Transitions)
  var i1189 = i1187[6]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1186.m_ExcludedPropertiesInInspector = i1188
  var i1191 = i1187[7]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( i1191[i + 0] );
  }
  i1186.m_LockStageInInspector = i1190
  i1186.m_Priority = i1187[8]
  i1186.m_StandbyUpdate = i1187[9]
  i1186.m_LegacyBlendHint = i1187[10]
  request.r(i1187[11], i1187[12], 0, i1186, 'm_ComponentOwner')
  i1186.m_StreamingVersion = i1187[13]
  return i1186
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1192 = root || request.c( 'Cinemachine.LensSettings' )
  var i1193 = data
  i1192.FieldOfView = i1193[0]
  i1192.OrthographicSize = i1193[1]
  i1192.NearClipPlane = i1193[2]
  i1192.FarClipPlane = i1193[3]
  i1192.Dutch = i1193[4]
  i1192.ModeOverride = i1193[5]
  i1192.LensShift = new pc.Vec2( i1193[6], i1193[7] )
  i1192.GateFit = i1193[8]
  i1192.m_SensorSize = new pc.Vec2( i1193[9], i1193[10] )
  return i1192
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1194 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1195 = data
  i1194.m_BlendHint = i1195[0]
  i1194.m_InheritPosition = !!i1195[1]
  i1194.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1195[2], i1194.m_OnCameraLive)
  return i1194
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1196 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1197 = data
  i1196.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1197[0], i1196.m_PersistentCalls)
  return i1196
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1202 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1203 = data
  return i1202
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1204 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1205 = data
  i1204.m_TrackedObjectOffset = new pc.Vec3( i1205[0], i1205[1], i1205[2] )
  i1204.m_LookaheadTime = i1205[3]
  i1204.m_LookaheadSmoothing = i1205[4]
  i1204.m_LookaheadIgnoreY = !!i1205[5]
  i1204.m_HorizontalDamping = i1205[6]
  i1204.m_VerticalDamping = i1205[7]
  i1204.m_ScreenX = i1205[8]
  i1204.m_ScreenY = i1205[9]
  i1204.m_DeadZoneWidth = i1205[10]
  i1204.m_DeadZoneHeight = i1205[11]
  i1204.m_SoftZoneWidth = i1205[12]
  i1204.m_SoftZoneHeight = i1205[13]
  i1204.m_BiasX = i1205[14]
  i1204.m_BiasY = i1205[15]
  i1204.m_CenterOnActivate = !!i1205[16]
  return i1204
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1206 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1207 = data
  i1206.m_BindingMode = i1207[0]
  i1206.m_FollowOffset = new pc.Vec3( i1207[1], i1207[2], i1207[3] )
  i1206.m_XDamping = i1207[4]
  i1206.m_YDamping = i1207[5]
  i1206.m_ZDamping = i1207[6]
  i1206.m_AngularDampingMode = i1207[7]
  i1206.m_PitchDamping = i1207[8]
  i1206.m_YawDamping = i1207[9]
  i1206.m_RollDamping = i1207[10]
  i1206.m_AngularDamping = i1207[11]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1209 = data
  i1208.enabled = !!i1209[0]
  i1208.aspect = i1209[1]
  i1208.orthographic = !!i1209[2]
  i1208.orthographicSize = i1209[3]
  i1208.backgroundColor = new pc.Color(i1209[4], i1209[5], i1209[6], i1209[7])
  i1208.nearClipPlane = i1209[8]
  i1208.farClipPlane = i1209[9]
  i1208.fieldOfView = i1209[10]
  i1208.depth = i1209[11]
  i1208.clearFlags = i1209[12]
  i1208.cullingMask = i1209[13]
  i1208.rect = i1209[14]
  request.r(i1209[15], i1209[16], 0, i1208, 'targetTexture')
  return i1208
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1211 = data
  i1210.m_RenderShadows = !!i1211[0]
  i1210.m_RequiresDepthTextureOption = i1211[1]
  i1210.m_RequiresOpaqueTextureOption = i1211[2]
  i1210.m_CameraType = i1211[3]
  var i1213 = i1211[4]
  var i1212 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1213.length; i += 2) {
  request.r(i1213[i + 0], i1213[i + 1], 1, i1212, '')
  }
  i1210.m_Cameras = i1212
  i1210.m_RendererIndex = i1211[5]
  i1210.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1211[6] )
  request.r(i1211[7], i1211[8], 0, i1210, 'm_VolumeTrigger')
  i1210.m_VolumeFrameworkUpdateModeOption = i1211[9]
  i1210.m_RenderPostProcessing = !!i1211[10]
  i1210.m_Antialiasing = i1211[11]
  i1210.m_AntialiasingQuality = i1211[12]
  i1210.m_StopNaN = !!i1211[13]
  i1210.m_Dithering = !!i1211[14]
  i1210.m_ClearDepth = !!i1211[15]
  i1210.m_AllowXRRendering = !!i1211[16]
  i1210.m_RequiresDepthTexture = !!i1211[17]
  i1210.m_RequiresColorTexture = !!i1211[18]
  i1210.m_Version = i1211[19]
  return i1210
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i1216 = root || request.c( 'CameraMove' )
  var i1217 = data
  i1216.offset = new pc.Vec3( i1217[0], i1217[1], i1217[2] )
  request.r(i1217[3], i1217[4], 0, i1216, 'newCamera')
  request.r(i1217[5], i1217[6], 0, i1216, 'target')
  return i1216
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1218 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1219 = data
  i1218.m_ShowDebugText = !!i1219[0]
  i1218.m_ShowCameraFrustum = !!i1219[1]
  i1218.m_IgnoreTimeScale = !!i1219[2]
  request.r(i1219[3], i1219[4], 0, i1218, 'm_WorldUpOverride')
  i1218.m_UpdateMethod = i1219[5]
  i1218.m_BlendUpdateMethod = i1219[6]
  i1218.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1219[7], i1218.m_DefaultBlend)
  request.r(i1219[8], i1219[9], 0, i1218, 'm_CustomBlends')
  i1218.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1219[10], i1218.m_CameraCutEvent)
  i1218.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1219[11], i1218.m_CameraActivatedEvent)
  return i1218
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1220 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1221 = data
  i1220.m_Style = i1221[0]
  i1220.m_Time = i1221[1]
  i1220.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1221[2] } )
  return i1220
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1222 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1223 = data
  i1222.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1223[0], i1222.m_PersistentCalls)
  return i1222
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i1224 = root || request.c( 'CinemachineController' )
  var i1225 = data
  request.r(i1225[0], i1225[1], 0, i1224, 'playerTrans')
  i1224.playerOffset = new pc.Vec3( i1225[2], i1225[3], i1225[4] )
  request.r(i1225[5], i1225[6], 0, i1224, 'hookTrans')
  i1224.hookOffset = new pc.Vec3( i1225[7], i1225[8], i1225[9] )
  request.r(i1225[10], i1225[11], 0, i1224, 'cvc_Hook')
  request.r(i1225[12], i1225[13], 0, i1224, 'cvc_Player')
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1227 = data
  i1226.enabled = !!i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'sharedMaterial')
  var i1229 = i1227[3]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 2, i1228, '')
  }
  i1226.sharedMaterials = i1228
  i1226.receiveShadows = !!i1227[4]
  i1226.shadowCastingMode = i1227[5]
  i1226.sortingLayerID = i1227[6]
  i1226.sortingOrder = i1227[7]
  i1226.lightmapIndex = i1227[8]
  i1226.lightmapSceneIndex = i1227[9]
  i1226.lightmapScaleOffset = new pc.Vec4( i1227[10], i1227[11], i1227[12], i1227[13] )
  i1226.lightProbeUsage = i1227[14]
  i1226.reflectionProbeUsage = i1227[15]
  var i1231 = i1227[16]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 3) {
    i1230.push( new pc.Vec3( i1231[i + 0], i1231[i + 1], i1231[i + 2] ) );
  }
  i1226.positions = i1230
  i1226.positionCount = i1227[17]
  i1226.time = i1227[18]
  i1226.startWidth = i1227[19]
  i1226.endWidth = i1227[20]
  i1226.widthMultiplier = i1227[21]
  i1226.autodestruct = !!i1227[22]
  i1226.emitting = !!i1227[23]
  i1226.numCornerVertices = i1227[24]
  i1226.numCapVertices = i1227[25]
  i1226.minVertexDistance = i1227[26]
  i1226.colorGradient = i1227[27] ? new pc.ColorGradient(i1227[27][0], i1227[27][1], i1227[27][2]) : null
  i1226.startColor = new pc.Color(i1227[28], i1227[29], i1227[30], i1227[31])
  i1226.endColor = new pc.Color(i1227[32], i1227[33], i1227[34], i1227[35])
  i1226.generateLightingData = !!i1227[36]
  i1226.textureMode = i1227[37]
  i1226.alignment = i1227[38]
  i1226.widthCurve = new pc.AnimationCurve( { keys_flow: i1227[39] } )
  return i1226
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i1232 = root || request.c( 'FishingHook' )
  var i1233 = data
  i1232.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i1233[0], i1232.OnMoneyChangeEvent)
  var i1235 = i1233[1]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1235.length; i += 2) {
  request.r(i1235[i + 0], i1235[i + 1], 1, i1234, '')
  }
  i1232.hookedFish = i1234
  request.r(i1233[2], i1233[3], 0, i1232, 'sellParticle')
  request.r(i1233[4], i1233[5], 0, i1232, 'sellParticleParent')
  i1232.targetHookZoomOffset = i1233[6]
  i1232.minDrag = i1233[7]
  i1232.maxDrag = i1233[8]
  i1232.dragSpeed = i1233[9]
  i1232.fishingHookScaleUpgradeValue = i1233[10]
  i1232.fullHooked = !!i1233[11]
  i1232.inTheOcean = !!i1233[12]
  i1232.money = i1233[13]
  request.r(i1233[14], i1233[15], 0, i1232, 'rigid')
  request.r(i1233[16], i1233[17], 0, i1232, 'canvas')
  request.r(i1233[18], i1233[19], 0, i1232, 'moneyTextPrefab')
  request.r(i1233[20], i1233[21], 0, i1232, 'moneyTextSpawnTransform')
  i1232.moneyTextSpawnMinOffset = new pc.Vec2( i1233[22], i1233[23] )
  i1232.moneyTextSpawnMaxOffset = new pc.Vec2( i1233[24], i1233[25] )
  var i1237 = i1233[26]
  var i1236 = []
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 2, i1236, '')
  }
  i1232.hookedTransforms = i1236
  request.r(i1233[27], i1233[28], 0, i1232, 'fishingRodSkinned')
  request.r(i1233[29], i1233[30], 0, i1232, 'cinemachineCamera')
  request.r(i1233[31], i1233[32], 0, i1232, 'startPoint')
  request.r(i1233[33], i1233[34], 0, i1232, 'hook')
  request.r(i1233[35], i1233[36], 0, i1232, 'rod')
  request.r(i1233[37], i1233[38], 0, i1232, 'playerModel')
  request.r(i1233[39], i1233[40], 0, i1232, 'upgradeButton')
  request.r(i1233[41], i1233[42], 0, i1232, 'depthText')
  request.r(i1233[43], i1233[44], 0, i1232, 'touchField')
  request.r(i1233[45], i1233[46], 0, i1232, 'catchRingParticle')
  request.r(i1233[47], i1233[48], 0, i1232, 'fishSkinPrefab')
  request.r(i1233[49], i1233[50], 0, i1232, 'fishSkinPoint1')
  request.r(i1233[51], i1233[52], 0, i1232, 'fishSkinPoint2')
  request.r(i1233[53], i1233[54], 0, i1232, 'moneyText')
  request.r(i1233[55], i1233[56], 0, i1232, 'HookedCount')
  return i1232
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1238 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1239 = data
  i1238.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1239[0], i1238.m_PersistentCalls)
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(i1243[i + 0]);
  }
  i1240.invalidShaderVariants = i1242
  i1240.name = i1241[1]
  i1240.guid = i1241[2]
  var i1245 = i1241[3]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( i1245[i + 0] );
  }
  i1240.shaderDefinedKeywords = i1244
  var i1247 = i1241[4]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1247[i + 0]) );
  }
  i1240.passes = i1246
  var i1249 = i1241[5]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1249[i + 0]) );
  }
  i1240.usePasses = i1248
  var i1251 = i1241[6]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1251[i + 0]) );
  }
  i1240.defaultParameterValues = i1250
  request.r(i1241[7], i1241[8], 0, i1240, 'unityFallbackShader')
  i1240.readDepth = !!i1241[9]
  i1240.isCreatedByShaderGraph = !!i1241[10]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1256 = root || new pc.UnityShaderPass()
  var i1257 = data
  i1256.id = i1257[0]
  i1256.subShaderIndex = i1257[1]
  i1256.name = i1257[2]
  i1256.passType = i1257[3]
  i1256.usePass = !!i1257[4]
  i1256.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[5], i1256.zTest)
  i1256.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[6], i1256.zWrite)
  i1256.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[7], i1256.culling)
  i1256.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1257[8], i1256.blending)
  i1256.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1257[9], i1256.alphaBlending)
  i1256.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[10], i1256.colorWriteMask)
  i1256.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[11], i1256.offsetUnits)
  i1256.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[12], i1256.offsetFactor)
  i1256.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[13], i1256.stencilRef)
  i1256.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[14], i1256.stencilReadMask)
  i1256.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[15], i1256.stencilWriteMask)
  i1256.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1257[16], i1256.stencilOp)
  i1256.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1257[17], i1256.stencilOpFront)
  i1256.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1257[18], i1256.stencilOpBack)
  var i1259 = i1257[19]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1259[i + 0]) );
  }
  i1256.tags = i1258
  var i1261 = i1257[20]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( i1261[i + 0] );
  }
  i1256.passDefinedKeywords = i1260
  var i1263 = i1257[21]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1263[i + 0]) );
  }
  i1256.passDefinedKeywordGroups = i1262
  var i1265 = i1257[22]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1265[i + 0]) );
  }
  i1256.variants = i1264
  var i1267 = i1257[23]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1267[i + 0]) );
  }
  i1256.excludedVariants = i1266
  i1256.hasDepthReader = !!i1257[24]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1269 = data
  i1268.val = i1269[0]
  i1268.name = i1269[1]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1271 = data
  i1270.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[0], i1270.src)
  i1270.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[1], i1270.dst)
  i1270.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1271[2], i1270.op)
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1273 = data
  i1272.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[0], i1272.pass)
  i1272.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[1], i1272.fail)
  i1272.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[2], i1272.zFail)
  i1272.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[3], i1272.comp)
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1277 = data
  i1276.name = i1277[0]
  i1276.value = i1277[1]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1280.keywords = i1282
  i1280.hasDiscard = !!i1281[1]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1287 = data
  i1286.passId = i1287[0]
  i1286.subShaderIndex = i1287[1]
  var i1289 = i1287[2]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1286.keywords = i1288
  i1286.vertexProgram = i1287[3]
  i1286.fragmentProgram = i1287[4]
  i1286.readDepth = !!i1287[5]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1293 = data
  request.r(i1293[0], i1293[1], 0, i1292, 'shader')
  i1292.pass = i1293[2]
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1297 = data
  i1296.name = i1297[0]
  i1296.type = i1297[1]
  i1296.value = new pc.Vec4( i1297[2], i1297[3], i1297[4], i1297[5] )
  i1296.textureValue = i1297[6]
  return i1296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1299 = data
  i1298.name = i1299[0]
  request.r(i1299[1], i1299[2], 0, i1298, 'texture')
  i1298.aabb = i1299[3]
  i1298.vertices = i1299[4]
  i1298.triangles = i1299[5]
  i1298.textureRect = UnityEngine.Rect.MinMaxRect(i1299[6], i1299[7], i1299[8], i1299[9])
  i1298.packedRect = UnityEngine.Rect.MinMaxRect(i1299[10], i1299[11], i1299[12], i1299[13])
  i1298.border = new pc.Vec4( i1299[14], i1299[15], i1299[16], i1299[17] )
  i1298.transparency = i1299[18]
  i1298.bounds = i1299[19]
  i1298.pixelsPerUnit = i1299[20]
  i1298.textureWidth = i1299[21]
  i1298.textureHeight = i1299[22]
  i1298.nativeSize = new pc.Vec2( i1299[23], i1299[24] )
  i1298.pivot = new pc.Vec2( i1299[25], i1299[26] )
  i1298.textureRectOffset = new pc.Vec2( i1299[27], i1299[28] )
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.width = i1301[1]
  i1300.height = i1301[2]
  i1300.frameRate = i1301[3]
  i1300.frameCount = System.UInt64(i1301[4])
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1303 = data
  i1302.name = i1303[0]
  i1302.wrapMode = i1303[1]
  i1302.isLooping = !!i1303[2]
  i1302.length = i1303[3]
  var i1305 = i1303[4]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1305[i + 0]) );
  }
  i1302.curves = i1304
  var i1307 = i1303[5]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1307[i + 0]) );
  }
  i1302.events = i1306
  i1302.halfPrecision = !!i1303[6]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1311 = data
  i1310.path = i1311[0]
  i1310.componentType = i1311[1]
  i1310.property = i1311[2]
  i1310.keys = i1311[3]
  var i1313 = i1311[4]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1313[i + 0]) );
  }
  i1310.objectReferenceKeys = i1312
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1317 = data
  i1316.time = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'value')
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1321 = data
  i1320.functionName = i1321[0]
  i1320.floatParameter = i1321[1]
  i1320.intParameter = i1321[2]
  i1320.stringParameter = i1321[3]
  request.r(i1321[4], i1321[5], 0, i1320, 'objectReferenceParameter')
  i1320.time = i1321[6]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.ascent = i1323[1]
  i1322.originalLineHeight = i1323[2]
  i1322.fontSize = i1323[3]
  var i1325 = i1323[4]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1325[i + 0]) );
  }
  i1322.characterInfo = i1324
  request.r(i1323[5], i1323[6], 0, i1322, 'texture')
  i1322.originalFontSize = i1323[7]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1329 = data
  i1328.index = i1329[0]
  i1328.advance = i1329[1]
  i1328.bearing = i1329[2]
  i1328.glyphWidth = i1329[3]
  i1328.glyphHeight = i1329[4]
  i1328.minX = i1329[5]
  i1328.maxX = i1329[6]
  i1328.minY = i1329[7]
  i1328.maxY = i1329[8]
  i1328.uvBottomLeftX = i1329[9]
  i1328.uvBottomLeftY = i1329[10]
  i1328.uvBottomRightX = i1329[11]
  i1328.uvBottomRightY = i1329[12]
  i1328.uvTopLeftX = i1329[13]
  i1328.uvTopLeftY = i1329[14]
  i1328.uvTopRightX = i1329[15]
  i1328.uvTopRightY = i1329[16]
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1331 = data
  i1330.name = i1331[0]
  var i1333 = i1331[1]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1333[i + 0]) );
  }
  i1330.states = i1332
  var i1335 = i1331[2]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1335[i + 0]) );
  }
  i1330.layers = i1334
  var i1337 = i1331[3]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1337[i + 0]) );
  }
  i1330.parameters = i1336
  var i1339 = i1331[4]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( i1339[i + 0] );
  }
  i1330.animationClips = i1338
  i1330.HasSubStateMachines = !!i1331[5]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1343 = data
  i1342.cycleOffset = i1343[0]
  i1342.cycleOffsetParameter = i1343[1]
  i1342.cycleOffsetParameterActive = !!i1343[2]
  i1342.mirror = !!i1343[3]
  i1342.mirrorParameter = i1343[4]
  i1342.mirrorParameterActive = !!i1343[5]
  i1342.motionId = i1343[6]
  i1342.nameHash = i1343[7]
  i1342.fullPathHash = i1343[8]
  i1342.speed = i1343[9]
  i1342.speedParameter = i1343[10]
  i1342.speedParameterActive = !!i1343[11]
  i1342.tag = i1343[12]
  i1342.name = i1343[13]
  i1342.writeDefaultValues = !!i1343[14]
  var i1345 = i1343[15]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1345[i + 0]) );
  }
  i1342.transitions = i1344
  var i1347 = i1343[16]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 2) {
  request.r(i1347[i + 0], i1347[i + 1], 2, i1346, '')
  }
  i1342.behaviours = i1346
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1351 = data
  i1350.fullPath = i1351[0]
  i1350.canTransitionToSelf = !!i1351[1]
  i1350.duration = i1351[2]
  i1350.exitTime = i1351[3]
  i1350.hasExitTime = !!i1351[4]
  i1350.hasFixedDuration = !!i1351[5]
  i1350.interruptionSource = i1351[6]
  i1350.offset = i1351[7]
  i1350.orderedInterruption = !!i1351[8]
  i1350.destinationStateNameHash = i1351[9]
  i1350.destinationStateMachineId = i1351[10]
  i1350.isExit = !!i1351[11]
  i1350.mute = !!i1351[12]
  i1350.solo = !!i1351[13]
  var i1353 = i1351[14]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1353[i + 0]) );
  }
  i1350.conditions = i1352
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1359 = data
  i1358.blendingMode = i1359[0]
  i1358.defaultWeight = i1359[1]
  i1358.name = i1359[2]
  i1358.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1359[3], i1358.stateMachine)
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1361 = data
  i1360.id = i1361[0]
  i1360.defaultStateNameHash = i1361[1]
  var i1363 = i1361[2]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1363[i + 0]) );
  }
  i1360.entryTransitions = i1362
  var i1365 = i1361[3]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1365[i + 0]) );
  }
  i1360.anyStateTransitions = i1364
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1369 = data
  i1368.destinationStateNameHash = i1369[0]
  i1368.destinationStateMachineId = i1369[1]
  i1368.isExit = !!i1369[2]
  i1368.mute = !!i1369[3]
  i1368.solo = !!i1369[4]
  var i1371 = i1369[5]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1371[i + 0]) );
  }
  i1368.conditions = i1370
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1375 = data
  i1374.defaultBool = !!i1375[0]
  i1374.defaultFloat = i1375[1]
  i1374.defaultInt = i1375[2]
  i1374.name = i1375[3]
  i1374.nameHash = i1375[4]
  i1374.type = i1375[5]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1379 = data
  i1378.mode = i1379[0]
  i1378.parameter = i1379[1]
  i1378.threshold = i1379[2]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1381 = data
  i1380.name = i1381[0]
  i1380.bytes64 = i1381[1]
  i1380.data = i1381[2]
  return i1380
}

Deserializers["MondayOFF.MondayOFFAdUnitID"] = function (request, data, root) {
  var i1382 = root || request.c( 'MondayOFF.MondayOFFAdUnitID' )
  var i1383 = data
  i1382.shouldShowLogoAfterInterstitial = !!i1383[0]
  i1382.interstitialDisplayCount = i1383[1]
  i1382.playOnLogoAnchor = i1383[2]
  i1382.playOnLogoOffset = new pc.Vec2( i1383[3], i1383[4] )
  i1382.playOnLogoSize = i1383[5]
  i1382.playOnLogLevel = i1383[6]
  i1382.iOS_has_IS = !!i1383[7]
  i1382.iOS_IS_AdUnitID = i1383[8]
  i1382.iOS_has_RV = !!i1383[9]
  i1382.iOS_RV_AdUnitID = i1383[10]
  i1382.iOS_has_BN = !!i1383[11]
  i1382.iOS_BN_AdUnitID = i1383[12]
  i1382.AOS_has_IS = !!i1383[13]
  i1382.AOS_IS_AdUnitID = i1383[14]
  i1382.AOS_has_RV = !!i1383[15]
  i1382.AOS_RV_AdUnitID = i1383[16]
  i1382.AOS_has_BN = !!i1383[17]
  i1382.AOS_BN_AdUnitID = i1383[18]
  i1382.has_PlayOn = !!i1383[19]
  i1382.AOS_PlayOnGameKey = i1383[20]
  i1382.iOS_PlayOnGameKey = i1383[21]
  i1382.iOS_store_id = i1383[22]
  return i1382
}

Deserializers["MapData"] = function (request, data, root) {
  var i1384 = root || request.c( 'MapData' )
  var i1385 = data
  var i1387 = i1385[0]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('MapData+mapData', i1387[i + 0]));
  }
  i1384.mapDataList = i1386
  return i1384
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i1390 = root || request.c( 'MapData+mapData' )
  var i1391 = data
  i1390.tier = i1391[0]
  i1390.minMapSize = new pc.Vec3( i1391[1], i1391[2], i1391[3] )
  i1390.maxMapSize = new pc.Vec3( i1391[4], i1391[5], i1391[6] )
  return i1390
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1393 = data
  i1392.hashCode = i1393[0]
  request.r(i1393[1], i1393[2], 0, i1392, 'material')
  i1392.materialHashCode = i1393[3]
  request.r(i1393[4], i1393[5], 0, i1392, 'atlas')
  i1392.normalStyle = i1393[6]
  i1392.normalSpacingOffset = i1393[7]
  i1392.boldStyle = i1393[8]
  i1392.boldSpacing = i1393[9]
  i1392.italicStyle = i1393[10]
  i1392.tabSize = i1393[11]
  i1392.m_Version = i1393[12]
  i1392.m_SourceFontFileGUID = i1393[13]
  request.r(i1393[14], i1393[15], 0, i1392, 'm_SourceFontFile_EditorRef')
  request.r(i1393[16], i1393[17], 0, i1392, 'm_SourceFontFile')
  i1392.m_AtlasPopulationMode = i1393[18]
  i1392.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1393[19], i1392.m_FaceInfo)
  var i1395 = i1393[20]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1395.length; i += 1) {
    i1394.add(request.d('UnityEngine.TextCore.Glyph', i1395[i + 0]));
  }
  i1392.m_GlyphTable = i1394
  var i1397 = i1393[21]
  var i1396 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.add(request.d('TMPro.TMP_Character', i1397[i + 0]));
  }
  i1392.m_CharacterTable = i1396
  var i1399 = i1393[22]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 2) {
  request.r(i1399[i + 0], i1399[i + 1], 2, i1398, '')
  }
  i1392.m_AtlasTextures = i1398
  i1392.m_AtlasTextureIndex = i1393[23]
  i1392.m_IsMultiAtlasTexturesEnabled = !!i1393[24]
  i1392.m_ClearDynamicDataOnBuild = !!i1393[25]
  var i1401 = i1393[26]
  var i1400 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.add(request.d('UnityEngine.TextCore.GlyphRect', i1401[i + 0]));
  }
  i1392.m_UsedGlyphRects = i1400
  var i1403 = i1393[27]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('UnityEngine.TextCore.GlyphRect', i1403[i + 0]));
  }
  i1392.m_FreeGlyphRects = i1402
  i1392.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1393[28], i1392.m_fontInfo)
  i1392.m_AtlasWidth = i1393[29]
  i1392.m_AtlasHeight = i1393[30]
  i1392.m_AtlasPadding = i1393[31]
  i1392.m_AtlasRenderMode = i1393[32]
  var i1405 = i1393[33]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('TMPro.TMP_Glyph', i1405[i + 0]));
  }
  i1392.m_glyphInfoList = i1404
  i1392.m_KerningTable = request.d('TMPro.KerningTable', i1393[34], i1392.m_KerningTable)
  i1392.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1393[35], i1392.m_FontFeatureTable)
  var i1407 = i1393[36]
  var i1406 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1407.length; i += 2) {
  request.r(i1407[i + 0], i1407[i + 1], 1, i1406, '')
  }
  i1392.fallbackFontAssets = i1406
  var i1409 = i1393[37]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1409.length; i += 2) {
  request.r(i1409[i + 0], i1409[i + 1], 1, i1408, '')
  }
  i1392.m_FallbackFontAssetTable = i1408
  i1392.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1393[38], i1392.m_CreationSettings)
  var i1411 = i1393[39]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('TMPro.TMP_FontWeightPair', i1411[i + 0]) );
  }
  i1392.m_FontWeightTable = i1410
  var i1413 = i1393[40]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('TMPro.TMP_FontWeightPair', i1413[i + 0]) );
  }
  i1392.fontWeights = i1412
  return i1392
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1414 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1415 = data
  i1414.m_FaceIndex = i1415[0]
  i1414.m_FamilyName = i1415[1]
  i1414.m_StyleName = i1415[2]
  i1414.m_PointSize = i1415[3]
  i1414.m_Scale = i1415[4]
  i1414.m_LineHeight = i1415[5]
  i1414.m_AscentLine = i1415[6]
  i1414.m_CapLine = i1415[7]
  i1414.m_MeanLine = i1415[8]
  i1414.m_Baseline = i1415[9]
  i1414.m_DescentLine = i1415[10]
  i1414.m_SuperscriptOffset = i1415[11]
  i1414.m_SuperscriptSize = i1415[12]
  i1414.m_SubscriptOffset = i1415[13]
  i1414.m_SubscriptSize = i1415[14]
  i1414.m_UnderlineOffset = i1415[15]
  i1414.m_UnderlineThickness = i1415[16]
  i1414.m_StrikethroughOffset = i1415[17]
  i1414.m_StrikethroughThickness = i1415[18]
  i1414.m_TabWidth = i1415[19]
  return i1414
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1418 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1419 = data
  i1418.m_Index = i1419[0]
  i1418.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1419[1], i1418.m_Metrics)
  i1418.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1419[2], i1418.m_GlyphRect)
  i1418.m_Scale = i1419[3]
  i1418.m_AtlasIndex = i1419[4]
  return i1418
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1420 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1421 = data
  i1420.m_Width = i1421[0]
  i1420.m_Height = i1421[1]
  i1420.m_HorizontalBearingX = i1421[2]
  i1420.m_HorizontalBearingY = i1421[3]
  i1420.m_HorizontalAdvance = i1421[4]
  return i1420
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1423 = data
  i1422.m_X = i1423[0]
  i1422.m_Y = i1423[1]
  i1422.m_Width = i1423[2]
  i1422.m_Height = i1423[3]
  return i1422
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1426 = root || request.c( 'TMPro.TMP_Character' )
  var i1427 = data
  i1426.m_ElementType = i1427[0]
  i1426.m_Unicode = i1427[1]
  i1426.m_GlyphIndex = i1427[2]
  i1426.m_Scale = i1427[3]
  return i1426
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1433 = data
  i1432.Name = i1433[0]
  i1432.PointSize = i1433[1]
  i1432.Scale = i1433[2]
  i1432.CharacterCount = i1433[3]
  i1432.LineHeight = i1433[4]
  i1432.Baseline = i1433[5]
  i1432.Ascender = i1433[6]
  i1432.CapHeight = i1433[7]
  i1432.Descender = i1433[8]
  i1432.CenterLine = i1433[9]
  i1432.SuperscriptOffset = i1433[10]
  i1432.SubscriptOffset = i1433[11]
  i1432.SubSize = i1433[12]
  i1432.Underline = i1433[13]
  i1432.UnderlineThickness = i1433[14]
  i1432.strikethrough = i1433[15]
  i1432.strikethroughThickness = i1433[16]
  i1432.TabWidth = i1433[17]
  i1432.Padding = i1433[18]
  i1432.AtlasWidth = i1433[19]
  i1432.AtlasHeight = i1433[20]
  return i1432
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1436 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1437 = data
  i1436.id = i1437[0]
  i1436.x = i1437[1]
  i1436.y = i1437[2]
  i1436.width = i1437[3]
  i1436.height = i1437[4]
  i1436.xOffset = i1437[5]
  i1436.yOffset = i1437[6]
  i1436.xAdvance = i1437[7]
  i1436.scale = i1437[8]
  return i1436
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1438 = root || request.c( 'TMPro.KerningTable' )
  var i1439 = data
  var i1441 = i1439[0]
  var i1440 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1441.length; i += 1) {
    i1440.add(request.d('TMPro.KerningPair', i1441[i + 0]));
  }
  i1438.kerningPairs = i1440
  return i1438
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.KerningPair' )
  var i1445 = data
  i1444.xOffset = i1445[0]
  i1444.m_FirstGlyph = i1445[1]
  i1444.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1445[2], i1444.m_FirstGlyphAdjustments)
  i1444.m_SecondGlyph = i1445[3]
  i1444.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1445[4], i1444.m_SecondGlyphAdjustments)
  i1444.m_IgnoreSpacingAdjustments = !!i1445[5]
  return i1444
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1449[i + 0]));
  }
  i1446.m_GlyphPairAdjustmentRecords = i1448
  return i1446
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1453 = data
  i1452.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1453[0], i1452.m_FirstAdjustmentRecord)
  i1452.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1453[1], i1452.m_SecondAdjustmentRecord)
  i1452.m_FeatureLookupFlags = i1453[2]
  return i1452
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1457 = data
  i1456.sourceFontFileName = i1457[0]
  i1456.sourceFontFileGUID = i1457[1]
  i1456.pointSizeSamplingMode = i1457[2]
  i1456.pointSize = i1457[3]
  i1456.padding = i1457[4]
  i1456.packingMode = i1457[5]
  i1456.atlasWidth = i1457[6]
  i1456.atlasHeight = i1457[7]
  i1456.characterSetSelectionMode = i1457[8]
  i1456.characterSequence = i1457[9]
  i1456.referencedFontAssetGUID = i1457[10]
  i1456.referencedTextAssetGUID = i1457[11]
  i1456.fontStyle = i1457[12]
  i1456.fontStyleModifier = i1457[13]
  i1456.renderMode = i1457[14]
  i1456.includeFontFeatures = !!i1457[15]
  return i1456
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1461 = data
  request.r(i1461[0], i1461[1], 0, i1460, 'regularTypeface')
  request.r(i1461[2], i1461[3], 0, i1460, 'italicTypeface')
  return i1460
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1462 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1463 = data
  i1462.m_GlyphIndex = i1463[0]
  i1462.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1463[1], i1462.m_GlyphValueRecord)
  return i1462
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1464 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1465 = data
  i1464.m_XPlacement = i1465[0]
  i1464.m_YPlacement = i1465[1]
  i1464.m_XAdvance = i1465[2]
  i1464.m_YAdvance = i1465[3]
  return i1464
}

Deserializers["MondayOFF.CPVideoList"] = function (request, data, root) {
  var i1466 = root || request.c( 'MondayOFF.CPVideoList' )
  var i1467 = data
  var i1469 = i1467[0]
  var i1468 = new (System.Collections.Generic.List$1(Bridge.ns('MondayOFF.VideoAndUrl')))
  for(var i = 0; i < i1469.length; i += 1) {
    i1468.add(request.d('MondayOFF.VideoAndUrl', i1469[i + 0]));
  }
  i1466.list = i1468
  return i1466
}

Deserializers["MondayOFF.VideoAndUrl"] = function (request, data, root) {
  var i1472 = root || request.c( 'MondayOFF.VideoAndUrl' )
  var i1473 = data
  i1472.name = i1473[0]
  request.r(i1473[1], i1473[2], 0, i1472, 'videoClip')
  i1472.weight = i1473[3]
  i1472.iosUrl = i1473[4]
  i1472.androidUrl = i1473[5]
  return i1472
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1474 = root || request.c( 'TMPro.TMP_Settings' )
  var i1475 = data
  i1474.m_enableWordWrapping = !!i1475[0]
  i1474.m_enableKerning = !!i1475[1]
  i1474.m_enableExtraPadding = !!i1475[2]
  i1474.m_enableTintAllSprites = !!i1475[3]
  i1474.m_enableParseEscapeCharacters = !!i1475[4]
  i1474.m_EnableRaycastTarget = !!i1475[5]
  i1474.m_GetFontFeaturesAtRuntime = !!i1475[6]
  i1474.m_missingGlyphCharacter = i1475[7]
  i1474.m_warningsDisabled = !!i1475[8]
  request.r(i1475[9], i1475[10], 0, i1474, 'm_defaultFontAsset')
  i1474.m_defaultFontAssetPath = i1475[11]
  i1474.m_defaultFontSize = i1475[12]
  i1474.m_defaultAutoSizeMinRatio = i1475[13]
  i1474.m_defaultAutoSizeMaxRatio = i1475[14]
  i1474.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1475[15], i1475[16] )
  i1474.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1475[17], i1475[18] )
  i1474.m_autoSizeTextContainer = !!i1475[19]
  i1474.m_IsTextObjectScaleStatic = !!i1475[20]
  var i1477 = i1475[21]
  var i1476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1477.length; i += 2) {
  request.r(i1477[i + 0], i1477[i + 1], 1, i1476, '')
  }
  i1474.m_fallbackFontAssets = i1476
  i1474.m_matchMaterialPreset = !!i1475[22]
  request.r(i1475[23], i1475[24], 0, i1474, 'm_defaultSpriteAsset')
  i1474.m_defaultSpriteAssetPath = i1475[25]
  i1474.m_enableEmojiSupport = !!i1475[26]
  i1474.m_MissingCharacterSpriteUnicode = i1475[27]
  i1474.m_defaultColorGradientPresetsPath = i1475[28]
  request.r(i1475[29], i1475[30], 0, i1474, 'm_defaultStyleSheet')
  i1474.m_StyleSheetsResourcePath = i1475[31]
  request.r(i1475[32], i1475[33], 0, i1474, 'm_leadingCharacters')
  request.r(i1475[34], i1475[35], 0, i1474, 'm_followingCharacters')
  i1474.m_UseModernHangulLineBreakingRules = !!i1475[36]
  return i1474
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1478 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1479 = data
  i1478.hashCode = i1479[0]
  request.r(i1479[1], i1479[2], 0, i1478, 'material')
  i1478.materialHashCode = i1479[3]
  request.r(i1479[4], i1479[5], 0, i1478, 'spriteSheet')
  var i1481 = i1479[6]
  var i1480 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.add(request.d('TMPro.TMP_Sprite', i1481[i + 0]));
  }
  i1478.spriteInfoList = i1480
  var i1483 = i1479[7]
  var i1482 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1483.length; i += 2) {
  request.r(i1483[i + 0], i1483[i + 1], 1, i1482, '')
  }
  i1478.fallbackSpriteAssets = i1482
  i1478.m_Version = i1479[8]
  i1478.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1479[9], i1478.m_FaceInfo)
  var i1485 = i1479[10]
  var i1484 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1485.length; i += 1) {
    i1484.add(request.d('TMPro.TMP_SpriteCharacter', i1485[i + 0]));
  }
  i1478.m_SpriteCharacterTable = i1484
  var i1487 = i1479[11]
  var i1486 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1487.length; i += 1) {
    i1486.add(request.d('TMPro.TMP_SpriteGlyph', i1487[i + 0]));
  }
  i1478.m_SpriteGlyphTable = i1486
  return i1478
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1490 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1491 = data
  i1490.name = i1491[0]
  i1490.hashCode = i1491[1]
  i1490.unicode = i1491[2]
  i1490.pivot = new pc.Vec2( i1491[3], i1491[4] )
  request.r(i1491[5], i1491[6], 0, i1490, 'sprite')
  i1490.id = i1491[7]
  i1490.x = i1491[8]
  i1490.y = i1491[9]
  i1490.width = i1491[10]
  i1490.height = i1491[11]
  i1490.xOffset = i1491[12]
  i1490.yOffset = i1491[13]
  i1490.xAdvance = i1491[14]
  i1490.scale = i1491[15]
  return i1490
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1496 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1497 = data
  i1496.m_Name = i1497[0]
  i1496.m_HashCode = i1497[1]
  i1496.m_ElementType = i1497[2]
  i1496.m_Unicode = i1497[3]
  i1496.m_GlyphIndex = i1497[4]
  i1496.m_Scale = i1497[5]
  return i1496
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1501 = data
  request.r(i1501[0], i1501[1], 0, i1500, 'sprite')
  i1500.m_Index = i1501[2]
  i1500.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1501[3], i1500.m_Metrics)
  i1500.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1501[4], i1500.m_GlyphRect)
  i1500.m_Scale = i1501[5]
  i1500.m_AtlasIndex = i1501[6]
  return i1500
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1502 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1503 = data
  var i1505 = i1503[0]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.add(request.d('TMPro.TMP_Style', i1505[i + 0]));
  }
  i1502.m_StyleList = i1504
  return i1502
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1508 = root || request.c( 'TMPro.TMP_Style' )
  var i1509 = data
  i1508.m_Name = i1509[0]
  i1508.m_HashCode = i1509[1]
  i1508.m_OpeningDefinition = i1509[2]
  i1508.m_ClosingDefinition = i1509[3]
  i1508.m_OpeningTagArray = i1509[4]
  i1508.m_ClosingTagArray = i1509[5]
  i1508.m_OpeningTagUnicodeArray = i1509[6]
  i1508.m_ClosingTagUnicodeArray = i1509[7]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1513[i + 0]) );
  }
  i1510.files = i1512
  i1510.componentToPrefabIds = i1511[1]
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1517 = data
  i1516.path = i1517[0]
  request.r(i1517[1], i1517[2], 0, i1516, 'unityObject')
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1519 = data
  var i1521 = i1519[0]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1521[i + 0]) );
  }
  i1518.scriptsExecutionOrder = i1520
  var i1523 = i1519[1]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1523[i + 0]) );
  }
  i1518.sortingLayers = i1522
  var i1525 = i1519[2]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 1) {
    i1524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1525[i + 0]) );
  }
  i1518.cullingLayers = i1524
  i1518.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1519[3], i1518.timeSettings)
  i1518.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1519[4], i1518.physicsSettings)
  i1518.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1519[5], i1518.physics2DSettings)
  i1518.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1519[6], i1518.qualitySettings)
  i1518.enableRealtimeShadows = !!i1519[7]
  i1518.autoInstantiatePrefabs = !!i1519[8]
  i1518.enableAutoInstancing = !!i1519[9]
  i1518.lightmapEncodingQuality = i1519[10]
  i1518.desiredColorSpace = i1519[11]
  return i1518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.value = i1529[1]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1533 = data
  i1532.id = i1533[0]
  i1532.name = i1533[1]
  i1532.value = i1533[2]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1537 = data
  i1536.id = i1537[0]
  i1536.name = i1537[1]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1539 = data
  i1538.fixedDeltaTime = i1539[0]
  i1538.maximumDeltaTime = i1539[1]
  i1538.timeScale = i1539[2]
  i1538.maximumParticleTimestep = i1539[3]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1541 = data
  i1540.gravity = new pc.Vec3( i1541[0], i1541[1], i1541[2] )
  i1540.defaultSolverIterations = i1541[3]
  i1540.bounceThreshold = i1541[4]
  i1540.autoSyncTransforms = !!i1541[5]
  i1540.autoSimulation = !!i1541[6]
  var i1543 = i1541[7]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1543[i + 0]) );
  }
  i1540.collisionMatrix = i1542
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1547 = data
  i1546.enabled = !!i1547[0]
  i1546.layerId = i1547[1]
  i1546.otherLayerId = i1547[2]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1549 = data
  request.r(i1549[0], i1549[1], 0, i1548, 'material')
  i1548.gravity = new pc.Vec2( i1549[2], i1549[3] )
  i1548.positionIterations = i1549[4]
  i1548.velocityIterations = i1549[5]
  i1548.velocityThreshold = i1549[6]
  i1548.maxLinearCorrection = i1549[7]
  i1548.maxAngularCorrection = i1549[8]
  i1548.maxTranslationSpeed = i1549[9]
  i1548.maxRotationSpeed = i1549[10]
  i1548.timeToSleep = i1549[11]
  i1548.linearSleepTolerance = i1549[12]
  i1548.angularSleepTolerance = i1549[13]
  i1548.defaultContactOffset = i1549[14]
  i1548.autoSimulation = !!i1549[15]
  i1548.queriesHitTriggers = !!i1549[16]
  i1548.queriesStartInColliders = !!i1549[17]
  i1548.callbacksOnDisable = !!i1549[18]
  i1548.reuseCollisionCallbacks = !!i1549[19]
  i1548.autoSyncTransforms = !!i1549[20]
  var i1551 = i1549[21]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1551[i + 0]) );
  }
  i1548.collisionMatrix = i1550
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1555 = data
  i1554.enabled = !!i1555[0]
  i1554.layerId = i1555[1]
  i1554.otherLayerId = i1555[2]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1557 = data
  var i1559 = i1557[0]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1559[i + 0]) );
  }
  i1556.qualityLevels = i1558
  var i1561 = i1557[1]
  var i1560 = []
  for(var i = 0; i < i1561.length; i += 1) {
    i1560.push( i1561[i + 0] );
  }
  i1556.names = i1560
  i1556.shadows = i1557[2]
  i1556.anisotropicFiltering = i1557[3]
  i1556.antiAliasing = i1557[4]
  i1556.lodBias = i1557[5]
  i1556.shadowCascades = i1557[6]
  i1556.shadowDistance = i1557[7]
  i1556.shadowmaskMode = i1557[8]
  i1556.shadowProjection = i1557[9]
  i1556.shadowResolution = i1557[10]
  i1556.softParticles = !!i1557[11]
  i1556.softVegetation = !!i1557[12]
  i1556.activeColorSpace = i1557[13]
  i1556.desiredColorSpace = i1557[14]
  i1556.masterTextureLimit = i1557[15]
  i1556.maxQueuedFrames = i1557[16]
  i1556.particleRaycastBudget = i1557[17]
  i1556.pixelLightCount = i1557[18]
  i1556.realtimeReflectionProbes = !!i1557[19]
  i1556.shadowCascade2Split = i1557[20]
  i1556.shadowCascade4Split = new pc.Vec3( i1557[21], i1557[22], i1557[23] )
  i1556.streamingMipmapsActive = !!i1557[24]
  i1556.vSyncCount = i1557[25]
  i1556.asyncUploadBufferSize = i1557[26]
  i1556.asyncUploadTimeSlice = i1557[27]
  i1556.billboardsFaceCameraPosition = !!i1557[28]
  i1556.shadowNearPlaneOffset = i1557[29]
  i1556.streamingMipmapsMemoryBudget = i1557[30]
  i1556.maximumLODLevel = i1557[31]
  i1556.streamingMipmapsAddAllCameras = !!i1557[32]
  i1556.streamingMipmapsMaxLevelReduction = i1557[33]
  i1556.streamingMipmapsRenderersPerFrame = i1557[34]
  i1556.resolutionScalingFixedDPIFactor = i1557[35]
  i1556.streamingMipmapsMaxFileIORequests = i1557[36]
  i1556.currentQualityLevel = i1557[37]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1565 = data
  i1564.AdditionalLightsPerObjectLimit = i1565[0]
  i1564.AdditionalLightsRenderingMode = i1565[1]
  i1564.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1565[2], i1564.LightRenderingMode)
  i1564.ColorGradingLutSize = i1565[3]
  i1564.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1565[4], i1564.ColorGradingMode)
  i1564.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1565[5], i1564.MainLightRenderingMode)
  i1564.MainLightShadowsSupported = !!i1565[6]
  i1564.MixedLightingSupported = !!i1565[7]
  i1564.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1565[8], i1564.MsaaQuality)
  i1564.MSAA = i1565[9]
  i1564.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1565[10], i1564.OpaqueDownsampling)
  i1564.RenderScale = i1565[11]
  i1564.RequireDepthTexture = !!i1565[12]
  i1564.RequireOpaqueTexture = !!i1565[13]
  i1564.ShadowAtlasResolution = i1565[14]
  i1564.ShadowDepthBias = i1565[15]
  i1564.SupportsHDR = !!i1565[16]
  i1564.SupportsTerrainHoles = !!i1565[17]
  return i1564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1567 = data
  i1566.Disabled = i1567[0]
  i1566.PerVertex = i1567[1]
  i1566.PerPixel = i1567[2]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1569 = data
  i1568.LowDynamicRange = i1569[0]
  i1568.HighDynamicRange = i1569[1]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1571 = data
  i1570.Disabled = i1571[0]
  i1570._2x = i1571[1]
  i1570._4x = i1571[2]
  i1570._8x = i1571[3]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1573 = data
  i1572.None = i1573[0]
  i1572._2xBilinear = i1573[1]
  i1572._4xBox = i1573[2]
  i1572._4xBilinear = i1573[3]
  return i1572
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1575 = data
  i1574.xPlacement = i1575[0]
  i1574.yPlacement = i1575[1]
  i1574.xAdvance = i1575[2]
  i1574.yAdvance = i1575[3]
  return i1574
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"format":6,"wrapMode":7},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightShadowsSupported":6,"MixedLightingSupported":7,"MsaaQuality":8,"MSAA":9,"OpaqueDownsampling":10,"RenderScale":11,"RequireDepthTexture":12,"RequireOpaqueTexture":13,"ShadowAtlasResolution":14,"ShadowDepthBias":15,"SupportsHDR":16,"SupportsTerrainHoles":17},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3}}

Deserializers.requiredComponents = {"93":[94],"95":[94],"96":[94],"97":[94],"98":[94],"99":[94],"100":[34],"101":[69],"43":[32],"102":[32],"103":[32],"104":[32],"105":[32],"106":[32],"107":[32],"108":[109],"110":[109],"111":[109],"112":[109],"113":[109],"114":[109],"115":[109],"116":[109],"117":[109],"118":[109],"119":[109],"120":[109],"121":[109],"122":[69],"123":[40],"124":[125],"126":[125],"5":[4],"127":[41],"128":[41],"129":[41],"130":[41],"131":[132],"133":[4],"134":[4],"70":[5],"12":[13,4],"135":[4],"7":[5],"136":[4],"137":[4],"138":[4],"139":[4],"140":[4],"141":[4],"142":[4],"143":[4],"144":[4],"14":[13,4],"145":[4],"146":[4],"147":[4],"68":[4],"148":[13,4],"149":[4],"150":[17],"151":[17],"18":[17],"152":[17],"153":[69],"154":[69],"155":[69],"156":[157],"158":[69],"81":[69],"27":[26],"159":[4],"160":[40,4],"45":[4,13],"161":[4],"162":[13,4],"163":[40],"164":[13,4],"165":[4],"166":[4],"167":[168],"11":[8,9],"169":[168],"170":[168]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","AsyncSceneTransfer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasGroup","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","MondayOFFSplash","UnityEngine.UI.Image","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.Sprite","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DontDestroyObj","MondayOFF.EventsManager","MondayOFF.IAP.IAPManager","MondayOFF.AdsManager","MondayOFF.MondayOFFAdUnitID","TimeInterstitialShower","SingularSDK","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Material","UnityEngine.Cubemap","Fish","MapData","UnityEngine.Rigidbody","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.SphereCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","FishingLine","UnityEngine.CharacterJoint","RopeBridge","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Video.VideoPlayer","UnityEngine.RenderTexture","MondayOFF.CPButton","MondayOFF.CPVideoList","UnityEngine.UI.Button","Chest","ChestMover","UnityEngine.SpriteRenderer","FlockUnit","AudioManager","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","ChallengeManager","FishingHook","FishingRod","FixedTouchField","FishingLogic","Upgrades","FishPool","DataManager","UnityEngine.UI.Slider","UnityEngine.Camera","UnityEngine.UI.GraphicRaycaster","UIManager","EnviromentEditor","ObjectMovement","OceanTrigger","UnityEngine.MeshCollider","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.TrailRenderer","UnityEngine.Font","UnityEngine.Video.VideoClip","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","GameAnalyticsSDK.GameAnalytics","GameAnalyticsSDK.Events.GA_SpecialEvents","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "58.8";

Deserializers.lunaVersion = "4.1.0";

Deserializers.lunaSHA = "91c879214bba20dae808cf7766c2e7f67914f5b5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

Deserializers.projectId = "bbbf5d6b-7dba-4762-ac82-31056fd84bde";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.8.6\ncom.unity.render-pipelines.universal: 12.1.7\ncom.unity.shadergraph: 12.1.7\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "iOS";

Deserializers.applicationIdentifier = "com.mondayoff.rapid";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e43933ce-c46b-4692-81ae-bd51e95d41c6";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

