var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.JointSpring' )
  var i2251 = data
  i2250.spring = i2251[0]
  i2250.damper = i2251[1]
  i2250.targetPosition = i2251[2]
  return i2250
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.JointMotor' )
  var i2253 = data
  i2252.m_TargetVelocity = i2253[0]
  i2252.m_Force = i2253[1]
  i2252.m_FreeSpin = i2253[2]
  return i2252
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.JointLimits' )
  var i2255 = data
  i2254.m_Min = i2255[0]
  i2254.m_Max = i2255[1]
  i2254.m_Bounciness = i2255[2]
  i2254.m_BounceMinVelocity = i2255[3]
  i2254.m_ContactDistance = i2255[4]
  i2254.minBounce = i2255[5]
  i2254.maxBounce = i2255[6]
  return i2254
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.JointDrive' )
  var i2257 = data
  i2256.m_PositionSpring = i2257[0]
  i2256.m_PositionDamper = i2257[1]
  i2256.m_MaximumForce = i2257[2]
  return i2256
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2259 = data
  i2258.m_Spring = i2259[0]
  i2258.m_Damper = i2259[1]
  return i2258
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2261 = data
  i2260.m_Limit = i2261[0]
  i2260.m_Bounciness = i2261[1]
  i2260.m_ContactDistance = i2261[2]
  return i2260
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2262 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2263 = data
  i2262.m_ExtremumSlip = i2263[0]
  i2262.m_ExtremumValue = i2263[1]
  i2262.m_AsymptoteSlip = i2263[2]
  i2262.m_AsymptoteValue = i2263[3]
  i2262.m_Stiffness = i2263[4]
  return i2262
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2264 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2265 = data
  i2264.m_LowerAngle = i2265[0]
  i2264.m_UpperAngle = i2265[1]
  return i2264
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2266 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2267 = data
  i2266.m_MotorSpeed = i2267[0]
  i2266.m_MaximumMotorTorque = i2267[1]
  return i2266
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2268 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2269 = data
  i2268.m_DampingRatio = i2269[0]
  i2268.m_Frequency = i2269[1]
  i2268.m_Angle = i2269[2]
  return i2268
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2270 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2271 = data
  i2270.m_LowerTranslation = i2271[0]
  i2270.m_UpperTranslation = i2271[1]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2272 = root || new pc.UnityMaterial()
  var i2273 = data
  i2272.name = i2273[0]
  request.r(i2273[1], i2273[2], 0, i2272, 'shader')
  i2272.renderQueue = i2273[3]
  i2272.enableInstancing = !!i2273[4]
  var i2275 = i2273[5]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2275[i + 0]) );
  }
  i2272.floatParameters = i2274
  var i2277 = i2273[6]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 1) {
    i2276.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2277[i + 0]) );
  }
  i2272.colorParameters = i2276
  var i2279 = i2273[7]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2279[i + 0]) );
  }
  i2272.vectorParameters = i2278
  var i2281 = i2273[8]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 1) {
    i2280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2281[i + 0]) );
  }
  i2272.textureParameters = i2280
  var i2283 = i2273[9]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2283[i + 0]) );
  }
  i2272.materialFlags = i2282
  return i2272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.value = i2287[1]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2291 = data
  i2290.name = i2291[0]
  i2290.value = new pc.Color(i2291[1], i2291[2], i2291[3], i2291[4])
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.value = new pc.Vec4( i2295[1], i2295[2], i2295[3], i2295[4] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2299 = data
  i2298.name = i2299[0]
  request.r(i2299[1], i2299[2], 0, i2298, 'value')
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2303 = data
  i2302.name = i2303[0]
  i2302.enabled = !!i2303[1]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2305 = data
  i2304.position = new pc.Vec3( i2305[0], i2305[1], i2305[2] )
  i2304.scale = new pc.Vec3( i2305[3], i2305[4], i2305[5] )
  i2304.rotation = new pc.Quat(i2305[6], i2305[7], i2305[8], i2305[9])
  return i2304
}

Deserializers["Fish"] = function (request, data, root) {
  var i2306 = root || request.c( 'Fish' )
  var i2307 = data
  i2306.fishType = request.d('FishType', i2307[0], i2306.fishType)
  request.r(i2307[1], i2307[2], 0, i2306, 'fishData')
  i2306.sensingRadius = i2307[3]
  i2306.moveSpeed = i2307[4]
  i2306.followTargetSpeed = i2307[5]
  i2306.rotationSpeed = i2307[6]
  request.r(i2307[7], i2307[8], 0, i2306, 'target')
  i2306.usingMapDataNumber = i2307[9]
  i2306.hooked = !!i2307[10]
  request.r(i2307[11], i2307[12], 0, i2306, 'rigid')
  i2306.dirToHook = new pc.Vec3( i2307[13], i2307[14], i2307[15] )
  request.r(i2307[16], i2307[17], 0, i2306, 'head')
  request.r(i2307[18], i2307[19], 0, i2306, 'mapData')
  request.r(i2307[20], i2307[21], 0, i2306, 'mousePoint')
  return i2306
}

Deserializers["FishType"] = function (request, data, root) {
  var i2308 = root || request.c( 'FishType' )
  var i2309 = data
  i2308.cost = i2309[0]
  i2308.tier = i2309[1]
  i2308.fishNumber = i2309[2]
  i2308.boundSize = new pc.Vec3( i2309[3], i2309[4], i2309[5] )
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2311 = data
  i2310.mass = i2311[0]
  i2310.drag = i2311[1]
  i2310.angularDrag = i2311[2]
  i2310.useGravity = !!i2311[3]
  i2310.isKinematic = !!i2311[4]
  i2310.constraints = i2311[5]
  i2310.maxAngularVelocity = i2311[6]
  i2310.collisionDetectionMode = i2311[7]
  i2310.interpolation = i2311[8]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2313 = data
  request.r(i2313[0], i2313[1], 0, i2312, 'animatorController')
  i2312.updateMode = i2313[2]
  var i2315 = i2313[3]
  var i2314 = []
  for(var i = 0; i < i2315.length; i += 2) {
  request.r(i2315[i + 0], i2315[i + 1], 2, i2314, '')
  }
  i2312.humanBones = i2314
  i2312.enabled = !!i2313[4]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2319 = data
  i2318.center = new pc.Vec3( i2319[0], i2319[1], i2319[2] )
  i2318.size = new pc.Vec3( i2319[3], i2319[4], i2319[5] )
  i2318.enabled = !!i2319[6]
  i2318.isTrigger = !!i2319[7]
  request.r(i2319[8], i2319[9], 0, i2318, 'material')
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2321 = data
  i2320.name = i2321[0]
  i2320.tag = i2321[1]
  i2320.enabled = !!i2321[2]
  i2320.isStatic = !!i2321[3]
  i2320.layer = i2321[4]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2323 = data
  i2322.enabled = !!i2323[0]
  request.r(i2323[1], i2323[2], 0, i2322, 'sharedMaterial')
  var i2325 = i2323[3]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 2, i2324, '')
  }
  i2322.sharedMaterials = i2324
  i2322.receiveShadows = !!i2323[4]
  i2322.shadowCastingMode = i2323[5]
  i2322.sortingLayerID = i2323[6]
  i2322.sortingOrder = i2323[7]
  i2322.lightmapIndex = i2323[8]
  i2322.lightmapSceneIndex = i2323[9]
  i2322.lightmapScaleOffset = new pc.Vec4( i2323[10], i2323[11], i2323[12], i2323[13] )
  i2322.lightProbeUsage = i2323[14]
  i2322.reflectionProbeUsage = i2323[15]
  request.r(i2323[16], i2323[17], 0, i2322, 'sharedMesh')
  var i2327 = i2323[18]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2322.bones = i2326
  i2322.updateWhenOffscreen = !!i2323[19]
  i2322.localBounds = i2323[20]
  request.r(i2323[21], i2323[22], 0, i2322, 'rootBone')
  var i2329 = i2323[23]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 1) {
    i2328.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2329[i + 0]) );
  }
  i2322.blendShapesWeights = i2328
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2335 = data
  i2334.weight = i2335[0]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2337 = data
  i2336.name = i2337[0]
  i2336.width = i2337[1]
  i2336.height = i2337[2]
  i2336.mipmapCount = i2337[3]
  i2336.anisoLevel = i2337[4]
  i2336.filterMode = i2337[5]
  i2336.hdr = !!i2337[6]
  i2336.format = i2337[7]
  i2336.wrapMode = i2337[8]
  i2336.alphaIsTransparency = !!i2337[9]
  i2336.alphaSource = i2337[10]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2339 = data
  i2338.name = i2339[0]
  i2338.halfPrecision = !!i2339[1]
  i2338.vertexCount = i2339[2]
  i2338.aabb = i2339[3]
  var i2341 = i2339[4]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( !!i2341[i + 0] );
  }
  i2338.streams = i2340
  i2338.vertices = i2339[5]
  var i2343 = i2339[6]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 1) {
    i2342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2343[i + 0]) );
  }
  i2338.subMeshes = i2342
  var i2345 = i2339[7]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 16) {
    i2344.push( new pc.Mat4().setData(i2345[i + 0], i2345[i + 1], i2345[i + 2], i2345[i + 3],  i2345[i + 4], i2345[i + 5], i2345[i + 6], i2345[i + 7],  i2345[i + 8], i2345[i + 9], i2345[i + 10], i2345[i + 11],  i2345[i + 12], i2345[i + 13], i2345[i + 14], i2345[i + 15]) );
  }
  i2338.bindposes = i2344
  var i2347 = i2339[8]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 1) {
    i2346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2347[i + 0]) );
  }
  i2338.blendShapes = i2346
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2353 = data
  i2352.triangles = i2353[0]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2359 = data
  i2358.name = i2359[0]
  var i2361 = i2359[1]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 1) {
    i2360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2361[i + 0]) );
  }
  i2358.frames = i2360
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2363 = data
  i2362.enabled = !!i2363[0]
  i2362.isTrigger = !!i2363[1]
  request.r(i2363[2], i2363[3], 0, i2362, 'material')
  i2362.center = new pc.Vec3( i2363[4], i2363[5], i2363[6] )
  i2362.radius = i2363[7]
  return i2362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2365 = data
  i2364.enabled = !!i2365[0]
  i2364.type = i2365[1]
  i2364.color = new pc.Color(i2365[2], i2365[3], i2365[4], i2365[5])
  i2364.cullingMask = i2365[6]
  i2364.intensity = i2365[7]
  i2364.range = i2365[8]
  i2364.spotAngle = i2365[9]
  i2364.shadows = i2365[10]
  i2364.shadowNormalBias = i2365[11]
  i2364.shadowBias = i2365[12]
  i2364.shadowStrength = i2365[13]
  i2364.shadowResolution = i2365[14]
  i2364.lightmapBakeType = i2365[15]
  i2364.renderMode = i2365[16]
  request.r(i2365[17], i2365[18], 0, i2364, 'cookie')
  i2364.cookieSize = i2365[19]
  return i2364
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i2367 = data
  i2366.m_Version = i2367[0]
  i2366.m_UsePipelineSettings = !!i2367[1]
  i2366.m_AdditionalLightsShadowResolutionTier = i2367[2]
  i2366.m_LightLayerMask = i2367[3]
  i2366.m_CustomShadowLayers = !!i2367[4]
  i2366.m_ShadowLayerMask = i2367[5]
  i2366.m_LightCookieSize = new pc.Vec2( i2367[6], i2367[7] )
  i2366.m_LightCookieOffset = new pc.Vec2( i2367[8], i2367[9] )
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2369 = data
  i2368.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2369[0], i2368.main)
  i2368.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2369[1], i2368.colorBySpeed)
  i2368.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2369[2], i2368.colorOverLifetime)
  i2368.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2369[3], i2368.emission)
  i2368.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2369[4], i2368.rotationBySpeed)
  i2368.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2369[5], i2368.rotationOverLifetime)
  i2368.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2369[6], i2368.shape)
  i2368.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2369[7], i2368.sizeBySpeed)
  i2368.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2369[8], i2368.sizeOverLifetime)
  i2368.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2369[9], i2368.textureSheetAnimation)
  i2368.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2369[10], i2368.velocityOverLifetime)
  i2368.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2369[11], i2368.noise)
  i2368.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2369[12], i2368.inheritVelocity)
  i2368.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2369[13], i2368.forceOverLifetime)
  i2368.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2369[14], i2368.limitVelocityOverLifetime)
  i2368.useAutoRandomSeed = !!i2369[15]
  i2368.randomSeed = i2369[16]
  return i2368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2370 = root || new pc.ParticleSystemMain()
  var i2371 = data
  i2370.duration = i2371[0]
  i2370.loop = !!i2371[1]
  i2370.prewarm = !!i2371[2]
  i2370.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[3], i2370.startDelay)
  i2370.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[4], i2370.startLifetime)
  i2370.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[5], i2370.startSpeed)
  i2370.startSize3D = !!i2371[6]
  i2370.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[7], i2370.startSizeX)
  i2370.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[8], i2370.startSizeY)
  i2370.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[9], i2370.startSizeZ)
  i2370.startRotation3D = !!i2371[10]
  i2370.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[11], i2370.startRotationX)
  i2370.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[12], i2370.startRotationY)
  i2370.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[13], i2370.startRotationZ)
  i2370.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2371[14], i2370.startColor)
  i2370.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2371[15], i2370.gravityModifier)
  i2370.simulationSpace = i2371[16]
  request.r(i2371[17], i2371[18], 0, i2370, 'customSimulationSpace')
  i2370.simulationSpeed = i2371[19]
  i2370.useUnscaledTime = !!i2371[20]
  i2370.scalingMode = i2371[21]
  i2370.playOnAwake = !!i2371[22]
  i2370.maxParticles = i2371[23]
  i2370.emitterVelocityMode = i2371[24]
  i2370.stopAction = i2371[25]
  return i2370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2372 = root || new pc.MinMaxCurve()
  var i2373 = data
  i2372.mode = i2373[0]
  i2372.curveMin = new pc.AnimationCurve( { keys_flow: i2373[1] } )
  i2372.curveMax = new pc.AnimationCurve( { keys_flow: i2373[2] } )
  i2372.curveMultiplier = i2373[3]
  i2372.constantMin = i2373[4]
  i2372.constantMax = i2373[5]
  return i2372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2374 = root || new pc.MinMaxGradient()
  var i2375 = data
  i2374.mode = i2375[0]
  i2374.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2375[1], i2374.gradientMin)
  i2374.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2375[2], i2374.gradientMax)
  i2374.colorMin = new pc.Color(i2375[3], i2375[4], i2375[5], i2375[6])
  i2374.colorMax = new pc.Color(i2375[7], i2375[8], i2375[9], i2375[10])
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2377 = data
  i2376.mode = i2377[0]
  var i2379 = i2377[1]
  var i2378 = []
  for(var i = 0; i < i2379.length; i += 1) {
    i2378.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2379[i + 0]) );
  }
  i2376.colorKeys = i2378
  var i2381 = i2377[2]
  var i2380 = []
  for(var i = 0; i < i2381.length; i += 1) {
    i2380.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2381[i + 0]) );
  }
  i2376.alphaKeys = i2380
  return i2376
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2382 = root || new pc.ParticleSystemColorBySpeed()
  var i2383 = data
  i2382.enabled = !!i2383[0]
  i2382.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2383[1], i2382.color)
  i2382.range = new pc.Vec2( i2383[2], i2383[3] )
  return i2382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2387 = data
  i2386.color = new pc.Color(i2387[0], i2387[1], i2387[2], i2387[3])
  i2386.time = i2387[4]
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2391 = data
  i2390.alpha = i2391[0]
  i2390.time = i2391[1]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2392 = root || new pc.ParticleSystemColorOverLifetime()
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2393[1], i2392.color)
  return i2392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2394 = root || new pc.ParticleSystemEmitter()
  var i2395 = data
  i2394.enabled = !!i2395[0]
  i2394.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[1], i2394.rateOverTime)
  i2394.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2395[2], i2394.rateOverDistance)
  var i2397 = i2395[3]
  var i2396 = []
  for(var i = 0; i < i2397.length; i += 1) {
    i2396.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2397[i + 0]) );
  }
  i2394.bursts = i2396
  return i2394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2400 = root || new pc.ParticleSystemBurst()
  var i2401 = data
  i2400.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2401[0], i2400.count)
  i2400.cycleCount = i2401[1]
  i2400.minCount = i2401[2]
  i2400.maxCount = i2401[3]
  i2400.repeatInterval = i2401[4]
  i2400.time = i2401[5]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2402 = root || new pc.ParticleSystemRotationBySpeed()
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[1], i2402.x)
  i2402.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[2], i2402.y)
  i2402.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2403[3], i2402.z)
  i2402.separateAxes = !!i2403[4]
  i2402.range = new pc.Vec2( i2403[5], i2403[6] )
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2404 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2405 = data
  i2404.enabled = !!i2405[0]
  i2404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[1], i2404.x)
  i2404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[2], i2404.y)
  i2404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2405[3], i2404.z)
  i2404.separateAxes = !!i2405[4]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2406 = root || new pc.ParticleSystemShape()
  var i2407 = data
  i2406.enabled = !!i2407[0]
  i2406.shapeType = i2407[1]
  i2406.randomDirectionAmount = i2407[2]
  i2406.sphericalDirectionAmount = i2407[3]
  i2406.randomPositionAmount = i2407[4]
  i2406.alignToDirection = !!i2407[5]
  i2406.radius = i2407[6]
  i2406.radiusMode = i2407[7]
  i2406.radiusSpread = i2407[8]
  i2406.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[9], i2406.radiusSpeed)
  i2406.radiusThickness = i2407[10]
  i2406.angle = i2407[11]
  i2406.length = i2407[12]
  i2406.boxThickness = new pc.Vec3( i2407[13], i2407[14], i2407[15] )
  i2406.meshShapeType = i2407[16]
  request.r(i2407[17], i2407[18], 0, i2406, 'mesh')
  request.r(i2407[19], i2407[20], 0, i2406, 'meshRenderer')
  request.r(i2407[21], i2407[22], 0, i2406, 'skinnedMeshRenderer')
  i2406.useMeshMaterialIndex = !!i2407[23]
  i2406.meshMaterialIndex = i2407[24]
  i2406.useMeshColors = !!i2407[25]
  i2406.normalOffset = i2407[26]
  i2406.arc = i2407[27]
  i2406.arcMode = i2407[28]
  i2406.arcSpread = i2407[29]
  i2406.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2407[30], i2406.arcSpeed)
  i2406.donutRadius = i2407[31]
  i2406.position = new pc.Vec3( i2407[32], i2407[33], i2407[34] )
  i2406.rotation = new pc.Vec3( i2407[35], i2407[36], i2407[37] )
  i2406.scale = new pc.Vec3( i2407[38], i2407[39], i2407[40] )
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2408 = root || new pc.ParticleSystemSizeBySpeed()
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[1], i2408.x)
  i2408.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[2], i2408.y)
  i2408.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2409[3], i2408.z)
  i2408.separateAxes = !!i2409[4]
  i2408.range = new pc.Vec2( i2409[5], i2409[6] )
  return i2408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2410 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2411 = data
  i2410.enabled = !!i2411[0]
  i2410.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[1], i2410.x)
  i2410.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[2], i2410.y)
  i2410.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2411[3], i2410.z)
  i2410.separateAxes = !!i2411[4]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2412 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2413 = data
  i2412.enabled = !!i2413[0]
  i2412.mode = i2413[1]
  i2412.animation = i2413[2]
  i2412.numTilesX = i2413[3]
  i2412.numTilesY = i2413[4]
  i2412.useRandomRow = !!i2413[5]
  i2412.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[6], i2412.frameOverTime)
  i2412.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2413[7], i2412.startFrame)
  i2412.cycleCount = i2413[8]
  i2412.rowIndex = i2413[9]
  i2412.flipU = i2413[10]
  i2412.flipV = i2413[11]
  i2412.spriteCount = i2413[12]
  var i2415 = i2413[13]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2412.sprites = i2414
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2418 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2419 = data
  i2418.enabled = !!i2419[0]
  i2418.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[1], i2418.x)
  i2418.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[2], i2418.y)
  i2418.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[3], i2418.z)
  i2418.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2419[4], i2418.speedModifier)
  i2418.space = i2419[5]
  return i2418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2420 = root || new pc.ParticleSystemNoise()
  var i2421 = data
  i2420.enabled = !!i2421[0]
  i2420.separateAxes = !!i2421[1]
  i2420.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[2], i2420.strengthX)
  i2420.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[3], i2420.strengthY)
  i2420.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[4], i2420.strengthZ)
  i2420.frequency = i2421[5]
  i2420.damping = !!i2421[6]
  i2420.octaveCount = i2421[7]
  i2420.octaveMultiplier = i2421[8]
  i2420.octaveScale = i2421[9]
  i2420.quality = i2421[10]
  i2420.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[11], i2420.scrollSpeed)
  i2420.scrollSpeedMultiplier = i2421[12]
  i2420.remapEnabled = !!i2421[13]
  i2420.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[14], i2420.remapX)
  i2420.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[15], i2420.remapY)
  i2420.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[16], i2420.remapZ)
  i2420.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[17], i2420.positionAmount)
  i2420.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[18], i2420.rotationAmount)
  i2420.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2421[19], i2420.sizeAmount)
  return i2420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2422 = root || new pc.ParticleSystemInheritVelocity()
  var i2423 = data
  i2422.enabled = !!i2423[0]
  i2422.mode = i2423[1]
  i2422.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2423[2], i2422.curve)
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2424 = root || new pc.ParticleSystemForceOverLifetime()
  var i2425 = data
  i2424.enabled = !!i2425[0]
  i2424.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[1], i2424.x)
  i2424.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[2], i2424.y)
  i2424.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2425[3], i2424.z)
  i2424.space = i2425[4]
  i2424.randomized = !!i2425[5]
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2426 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2427 = data
  i2426.enabled = !!i2427[0]
  i2426.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[1], i2426.limitX)
  i2426.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[2], i2426.limitY)
  i2426.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[3], i2426.limitZ)
  i2426.dampen = i2427[4]
  i2426.separateAxes = !!i2427[5]
  i2426.space = i2427[6]
  i2426.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2427[7], i2426.drag)
  i2426.multiplyDragByParticleSize = !!i2427[8]
  i2426.multiplyDragByParticleVelocity = !!i2427[9]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2429 = data
  i2428.enabled = !!i2429[0]
  request.r(i2429[1], i2429[2], 0, i2428, 'sharedMaterial')
  var i2431 = i2429[3]
  var i2430 = []
  for(var i = 0; i < i2431.length; i += 2) {
  request.r(i2431[i + 0], i2431[i + 1], 2, i2430, '')
  }
  i2428.sharedMaterials = i2430
  i2428.receiveShadows = !!i2429[4]
  i2428.shadowCastingMode = i2429[5]
  i2428.sortingLayerID = i2429[6]
  i2428.sortingOrder = i2429[7]
  i2428.lightmapIndex = i2429[8]
  i2428.lightmapSceneIndex = i2429[9]
  i2428.lightmapScaleOffset = new pc.Vec4( i2429[10], i2429[11], i2429[12], i2429[13] )
  i2428.lightProbeUsage = i2429[14]
  i2428.reflectionProbeUsage = i2429[15]
  request.r(i2429[16], i2429[17], 0, i2428, 'mesh')
  i2428.meshCount = i2429[18]
  i2428.activeVertexStreamsCount = i2429[19]
  i2428.alignment = i2429[20]
  i2428.renderMode = i2429[21]
  i2428.sortMode = i2429[22]
  i2428.lengthScale = i2429[23]
  i2428.velocityScale = i2429[24]
  i2428.cameraVelocityScale = i2429[25]
  i2428.normalDirection = i2429[26]
  i2428.sortingFudge = i2429[27]
  i2428.minParticleSize = i2429[28]
  i2428.maxParticleSize = i2429[29]
  i2428.pivot = new pc.Vec3( i2429[30], i2429[31], i2429[32] )
  request.r(i2429[33], i2429[34], 0, i2428, 'trailMaterial')
  return i2428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'sharedMesh')
  return i2432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'additionalVertexStreams')
  i2434.enabled = !!i2435[2]
  request.r(i2435[3], i2435[4], 0, i2434, 'sharedMaterial')
  var i2437 = i2435[5]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.sharedMaterials = i2436
  i2434.receiveShadows = !!i2435[6]
  i2434.shadowCastingMode = i2435[7]
  i2434.sortingLayerID = i2435[8]
  i2434.sortingOrder = i2435[9]
  i2434.lightmapIndex = i2435[10]
  i2434.lightmapSceneIndex = i2435[11]
  i2434.lightmapScaleOffset = new pc.Vec4( i2435[12], i2435[13], i2435[14], i2435[15] )
  i2434.lightProbeUsage = i2435[16]
  i2434.reflectionProbeUsage = i2435[17]
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2439 = data
  i2438.textureMode = i2439[0]
  i2438.alignment = i2439[1]
  i2438.widthCurve = new pc.AnimationCurve( { keys_flow: i2439[2] } )
  i2438.colorGradient = i2439[3] ? new pc.ColorGradient(i2439[3][0], i2439[3][1], i2439[3][2]) : null
  var i2441 = i2439[4]
  var i2440 = []
  for(var i = 0; i < i2441.length; i += 3) {
    i2440.push( new pc.Vec3( i2441[i + 0], i2441[i + 1], i2441[i + 2] ) );
  }
  i2438.positions = i2440
  i2438.positionCount = i2439[5]
  i2438.widthMultiplier = i2439[6]
  i2438.startWidth = i2439[7]
  i2438.endWidth = i2439[8]
  i2438.numCornerVertices = i2439[9]
  i2438.numCapVertices = i2439[10]
  i2438.useWorldSpace = !!i2439[11]
  i2438.loop = !!i2439[12]
  i2438.startColor = new pc.Color(i2439[13], i2439[14], i2439[15], i2439[16])
  i2438.endColor = new pc.Color(i2439[17], i2439[18], i2439[19], i2439[20])
  i2438.generateLightingData = !!i2439[21]
  i2438.enabled = !!i2439[22]
  request.r(i2439[23], i2439[24], 0, i2438, 'sharedMaterial')
  var i2443 = i2439[25]
  var i2442 = []
  for(var i = 0; i < i2443.length; i += 2) {
  request.r(i2443[i + 0], i2443[i + 1], 2, i2442, '')
  }
  i2438.sharedMaterials = i2442
  i2438.receiveShadows = !!i2439[26]
  i2438.shadowCastingMode = i2439[27]
  i2438.sortingLayerID = i2439[28]
  i2438.sortingOrder = i2439[29]
  i2438.lightmapIndex = i2439[30]
  i2438.lightmapSceneIndex = i2439[31]
  i2438.lightmapScaleOffset = new pc.Vec4( i2439[32], i2439[33], i2439[34], i2439[35] )
  i2438.lightProbeUsage = i2439[36]
  i2438.reflectionProbeUsage = i2439[37]
  return i2438
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i2446 = root || request.c( 'FishingLine' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'line')
  request.r(i2447[2], i2447[3], 0, i2446, 'startPoint')
  request.r(i2447[4], i2447[5], 0, i2446, 'endPoint')
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i2449 = data
  i2448.swingAxis = new pc.Vec3( i2449[0], i2449[1], i2449[2] )
  i2448.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2449[3], i2448.twistLimitSpring)
  i2448.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2449[4], i2448.swingLimitSpring)
  i2448.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i2449[5], i2448.lowTwistLimit)
  i2448.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i2449[6], i2448.highTwistLimit)
  i2448.swing1Limit = request.d('UnityEngine.SoftJointLimit', i2449[7], i2448.swing1Limit)
  i2448.swing2Limit = request.d('UnityEngine.SoftJointLimit', i2449[8], i2448.swing2Limit)
  request.r(i2449[9], i2449[10], 0, i2448, 'connectedBody')
  i2448.axis = new pc.Vec3( i2449[11], i2449[12], i2449[13] )
  i2448.anchor = new pc.Vec3( i2449[14], i2449[15], i2449[16] )
  i2448.connectedAnchor = new pc.Vec3( i2449[17], i2449[18], i2449[19] )
  i2448.autoConfigureConnectedAnchor = !!i2449[20]
  i2448.massScale = i2449[21]
  i2448.connectedMassScale = i2449[22]
  i2448.enableCollision = !!i2449[23]
  i2448.breakForce = i2449[24]
  i2448.breakTorque = i2449[25]
  return i2448
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i2450 = root || request.c( 'RopeBridge' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'StartPoint')
  request.r(i2451[2], i2451[3], 0, i2450, 'EndPoint')
  i2450.ropeSegLen = i2451[4]
  i2450.segmentLength = i2451[5]
  i2450.lineWidth = i2451[6]
  i2450.distOfStartToEnd = i2451[7]
  i2450.lineLengthMultifly = i2451[8]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2455 = data
  i2454.weight = i2455[0]
  i2454.vertices = i2455[1]
  i2454.normals = i2455[2]
  i2454.tangents = i2455[3]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2457 = data
  i2456.pivot = new pc.Vec2( i2457[0], i2457[1] )
  i2456.anchorMin = new pc.Vec2( i2457[2], i2457[3] )
  i2456.anchorMax = new pc.Vec2( i2457[4], i2457[5] )
  i2456.sizeDelta = new pc.Vec2( i2457[6], i2457[7] )
  i2456.anchoredPosition3D = new pc.Vec3( i2457[8], i2457[9], i2457[10] )
  i2456.rotation = new pc.Quat(i2457[11], i2457[12], i2457[13], i2457[14])
  i2456.scale = new pc.Vec3( i2457[15], i2457[16], i2457[17] )
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2459 = data
  i2458.cullTransparentMesh = !!i2459[0]
  return i2458
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2460 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2461 = data
  i2460.m_hasFontAssetChanged = !!i2461[0]
  request.r(i2461[1], i2461[2], 0, i2460, 'm_baseMaterial')
  i2460.m_maskOffset = new pc.Vec4( i2461[3], i2461[4], i2461[5], i2461[6] )
  i2460.m_text = i2461[7]
  i2460.m_isRightToLeft = !!i2461[8]
  request.r(i2461[9], i2461[10], 0, i2460, 'm_fontAsset')
  request.r(i2461[11], i2461[12], 0, i2460, 'm_sharedMaterial')
  var i2463 = i2461[13]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2460.m_fontSharedMaterials = i2462
  request.r(i2461[14], i2461[15], 0, i2460, 'm_fontMaterial')
  var i2465 = i2461[16]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 2) {
  request.r(i2465[i + 0], i2465[i + 1], 2, i2464, '')
  }
  i2460.m_fontMaterials = i2464
  i2460.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2461[17], i2461[18], i2461[19], i2461[20])
  i2460.m_fontColor = new pc.Color(i2461[21], i2461[22], i2461[23], i2461[24])
  i2460.m_enableVertexGradient = !!i2461[25]
  i2460.m_colorMode = i2461[26]
  i2460.m_fontColorGradient = request.d('TMPro.VertexGradient', i2461[27], i2460.m_fontColorGradient)
  request.r(i2461[28], i2461[29], 0, i2460, 'm_fontColorGradientPreset')
  request.r(i2461[30], i2461[31], 0, i2460, 'm_spriteAsset')
  i2460.m_tintAllSprites = !!i2461[32]
  request.r(i2461[33], i2461[34], 0, i2460, 'm_StyleSheet')
  i2460.m_TextStyleHashCode = i2461[35]
  i2460.m_overrideHtmlColors = !!i2461[36]
  i2460.m_faceColor = UnityEngine.Color32.ConstructColor(i2461[37], i2461[38], i2461[39], i2461[40])
  i2460.m_fontSize = i2461[41]
  i2460.m_fontSizeBase = i2461[42]
  i2460.m_fontWeight = i2461[43]
  i2460.m_enableAutoSizing = !!i2461[44]
  i2460.m_fontSizeMin = i2461[45]
  i2460.m_fontSizeMax = i2461[46]
  i2460.m_fontStyle = i2461[47]
  i2460.m_HorizontalAlignment = i2461[48]
  i2460.m_VerticalAlignment = i2461[49]
  i2460.m_textAlignment = i2461[50]
  i2460.m_characterSpacing = i2461[51]
  i2460.m_wordSpacing = i2461[52]
  i2460.m_lineSpacing = i2461[53]
  i2460.m_lineSpacingMax = i2461[54]
  i2460.m_paragraphSpacing = i2461[55]
  i2460.m_charWidthMaxAdj = i2461[56]
  i2460.m_enableWordWrapping = !!i2461[57]
  i2460.m_wordWrappingRatios = i2461[58]
  i2460.m_overflowMode = i2461[59]
  request.r(i2461[60], i2461[61], 0, i2460, 'm_linkedTextComponent')
  request.r(i2461[62], i2461[63], 0, i2460, 'parentLinkedComponent')
  i2460.m_enableKerning = !!i2461[64]
  i2460.m_enableExtraPadding = !!i2461[65]
  i2460.checkPaddingRequired = !!i2461[66]
  i2460.m_isRichText = !!i2461[67]
  i2460.m_parseCtrlCharacters = !!i2461[68]
  i2460.m_isOrthographic = !!i2461[69]
  i2460.m_isCullingEnabled = !!i2461[70]
  i2460.m_horizontalMapping = i2461[71]
  i2460.m_verticalMapping = i2461[72]
  i2460.m_uvLineOffset = i2461[73]
  i2460.m_geometrySortingOrder = i2461[74]
  i2460.m_IsTextObjectScaleStatic = !!i2461[75]
  i2460.m_VertexBufferAutoSizeReduction = !!i2461[76]
  i2460.m_useMaxVisibleDescender = !!i2461[77]
  i2460.m_pageToDisplay = i2461[78]
  i2460.m_margin = new pc.Vec4( i2461[79], i2461[80], i2461[81], i2461[82] )
  i2460.m_isUsingLegacyAnimationComponent = !!i2461[83]
  i2460.m_isVolumetricText = !!i2461[84]
  request.r(i2461[85], i2461[86], 0, i2460, 'm_Material')
  i2460.m_Maskable = !!i2461[87]
  i2460.m_Color = new pc.Color(i2461[88], i2461[89], i2461[90], i2461[91])
  i2460.m_RaycastTarget = !!i2461[92]
  i2460.m_RaycastPadding = new pc.Vec4( i2461[93], i2461[94], i2461[95], i2461[96] )
  return i2460
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2466 = root || request.c( 'TMPro.VertexGradient' )
  var i2467 = data
  i2466.topLeft = new pc.Color(i2467[0], i2467[1], i2467[2], i2467[3])
  i2466.topRight = new pc.Color(i2467[4], i2467[5], i2467[6], i2467[7])
  i2466.bottomLeft = new pc.Color(i2467[8], i2467[9], i2467[10], i2467[11])
  i2466.bottomRight = new pc.Color(i2467[12], i2467[13], i2467[14], i2467[15])
  return i2466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2468 = root || request.c( 'UnityEngine.UI.Image' )
  var i2469 = data
  request.r(i2469[0], i2469[1], 0, i2468, 'm_Sprite')
  i2468.m_Type = i2469[2]
  i2468.m_PreserveAspect = !!i2469[3]
  i2468.m_FillCenter = !!i2469[4]
  i2468.m_FillMethod = i2469[5]
  i2468.m_FillAmount = i2469[6]
  i2468.m_FillClockwise = !!i2469[7]
  i2468.m_FillOrigin = i2469[8]
  i2468.m_UseSpriteMesh = !!i2469[9]
  i2468.m_PixelsPerUnitMultiplier = i2469[10]
  request.r(i2469[11], i2469[12], 0, i2468, 'm_Material')
  i2468.m_Maskable = !!i2469[13]
  i2468.m_Color = new pc.Color(i2469[14], i2469[15], i2469[16], i2469[17])
  i2468.m_RaycastTarget = !!i2469[18]
  i2468.m_RaycastPadding = new pc.Vec4( i2469[19], i2469[20], i2469[21], i2469[22] )
  return i2468
}

Deserializers["Chest"] = function (request, data, root) {
  var i2470 = root || request.c( 'Chest' )
  var i2471 = data
  request.r(i2471[0], i2471[1], 0, i2470, 'chestMover')
  i2470.chestTier = i2471[2]
  request.r(i2471[3], i2471[4], 0, i2470, 'line')
  i2470.chestPullDist = i2471[5]
  i2470.pullForce = i2471[6]
  i2470.fishType = request.d('FishType', i2471[7], i2470.fishType)
  request.r(i2471[8], i2471[9], 0, i2470, 'fishData')
  i2470.sensingRadius = i2471[10]
  i2470.moveSpeed = i2471[11]
  i2470.followTargetSpeed = i2471[12]
  i2470.rotationSpeed = i2471[13]
  request.r(i2471[14], i2471[15], 0, i2470, 'target')
  i2470.usingMapDataNumber = i2471[16]
  i2470.hooked = !!i2471[17]
  request.r(i2471[18], i2471[19], 0, i2470, 'rigid2')
  request.r(i2471[20], i2471[21], 0, i2470, 'rigid')
  i2470.dirToHook = new pc.Vec3( i2471[22], i2471[23], i2471[24] )
  request.r(i2471[25], i2471[26], 0, i2470, 'head')
  request.r(i2471[27], i2471[28], 0, i2470, 'mapData')
  request.r(i2471[29], i2471[30], 0, i2470, 'mousePoint')
  return i2470
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i2472 = root || request.c( 'ChestMover' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'chest')
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2475 = data
  i2474.enabled = !!i2475[0]
  request.r(i2475[1], i2475[2], 0, i2474, 'sharedMaterial')
  var i2477 = i2475[3]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 2, i2476, '')
  }
  i2474.sharedMaterials = i2476
  i2474.receiveShadows = !!i2475[4]
  i2474.shadowCastingMode = i2475[5]
  i2474.sortingLayerID = i2475[6]
  i2474.sortingOrder = i2475[7]
  i2474.lightmapIndex = i2475[8]
  i2474.lightmapSceneIndex = i2475[9]
  i2474.lightmapScaleOffset = new pc.Vec4( i2475[10], i2475[11], i2475[12], i2475[13] )
  i2474.lightProbeUsage = i2475[14]
  i2474.reflectionProbeUsage = i2475[15]
  i2474.color = new pc.Color(i2475[16], i2475[17], i2475[18], i2475[19])
  request.r(i2475[20], i2475[21], 0, i2474, 'sprite')
  i2474.flipX = !!i2475[22]
  i2474.flipY = !!i2475[23]
  i2474.drawMode = i2475[24]
  i2474.size = new pc.Vec2( i2475[25], i2475[26] )
  i2474.tileMode = i2475[27]
  i2474.adaptiveModeThreshold = i2475[28]
  i2474.maskInteraction = i2475[29]
  i2474.spriteSortPoint = i2475[30]
  return i2474
}

Deserializers["FlockUnit"] = function (request, data, root) {
  var i2478 = root || request.c( 'FlockUnit' )
  var i2479 = data
  i2478.FOVAngle = i2479[0]
  i2478.smoothDamp = i2479[1]
  i2478.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i2479[2] )
  var i2481 = i2479[3]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 3) {
    i2480.push( new pc.Vec3( i2481[i + 0], i2481[i + 1], i2481[i + 2] ) );
  }
  i2478.directionsToCheckWhenAvoidingObstacles = i2480
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2483 = data
  i2482.name = i2483[0]
  i2482.atlasId = i2483[1]
  i2482.mipmapCount = i2483[2]
  i2482.hdr = !!i2483[3]
  i2482.size = i2483[4]
  i2482.anisoLevel = i2483[5]
  i2482.filterMode = i2483[6]
  i2482.wrapMode = i2483[7]
  var i2485 = i2483[8]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 4) {
    i2484.push( UnityEngine.Rect.MinMaxRect(i2485[i + 0], i2485[i + 1], i2485[i + 2], i2485[i + 3]) );
  }
  i2482.rects = i2484
  return i2482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2489 = data
  i2488.name = i2489[0]
  i2488.index = i2489[1]
  i2488.startup = !!i2489[2]
  return i2488
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2490 = root || request.c( 'AudioManager' )
  var i2491 = data
  var i2493 = i2491[0]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Sound', i2493[i + 0]) );
  }
  i2490.Bgm = i2492
  request.r(i2491[1], i2491[2], 0, i2490, 'bgmPrefab')
  var i2495 = i2491[3]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 1) {
    i2494.push( request.d('Sound', i2495[i + 0]) );
  }
  i2490.SFX = i2494
  request.r(i2491[4], i2491[5], 0, i2490, 'SFXPrefab')
  return i2490
}

Deserializers["Sound"] = function (request, data, root) {
  var i2498 = root || request.c( 'Sound' )
  var i2499 = data
  i2498.name = i2499[0]
  request.r(i2499[1], i2499[2], 0, i2498, 'clip')
  i2498.volume = i2499[3]
  i2498.pitch = i2499[4]
  i2498.time = i2499[5]
  i2498.loop = !!i2499[6]
  i2498.bgm = !!i2499[7]
  request.r(i2499[8], i2499[9], 0, i2498, 'audioMixerGroup')
  request.r(i2499[10], i2499[11], 0, i2498, 'source')
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2501 = data
  request.r(i2501[0], i2501[1], 0, i2500, 'clip')
  request.r(i2501[2], i2501[3], 0, i2500, 'outputAudioMixerGroup')
  i2500.playOnAwake = !!i2501[4]
  i2500.loop = !!i2501[5]
  i2500.time = i2501[6]
  i2500.volume = i2501[7]
  i2500.pitch = i2501[8]
  i2500.enabled = !!i2501[9]
  return i2500
}

Deserializers["ChallengeManager"] = function (request, data, root) {
  var i2502 = root || request.c( 'ChallengeManager' )
  var i2503 = data
  var i2505 = i2503[0]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('ChallengeManager+fishClass')))
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.add(request.d('ChallengeManager+fishClass', i2505[i + 0]));
  }
  i2502.fishList = i2504
  var i2507 = i2503[1]
  var i2506 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2507.length; i += 2) {
  request.r(i2507[i + 0], i2507[i + 1], 1, i2506, '')
  }
  i2502.fishList2 = i2506
  request.r(i2503[2], i2503[3], 0, i2502, 'fishObjectParent')
  i2502.stageNum = i2503[4]
  i2502.challengeSuccessPanelOn = !!i2503[5]
  request.r(i2503[6], i2503[7], 0, i2502, 'hook')
  request.r(i2503[8], i2503[9], 0, i2502, 'fishObectParent')
  request.r(i2503[10], i2503[11], 0, i2502, 'catchAnyTargetImage')
  request.r(i2503[12], i2503[13], 0, i2502, 'challengeSuccessPanel')
  request.r(i2503[14], i2503[15], 0, i2502, 'rewardText')
  request.r(i2503[16], i2503[17], 0, i2502, 'challengeSuccess_CatchAnyTargetImage')
  request.r(i2503[18], i2503[19], 0, i2502, 'challengeSuccess_TargetTransform')
  request.r(i2503[20], i2503[21], 0, i2502, 'fishObject')
  request.r(i2503[22], i2503[23], 0, i2502, 'currentChallengeImage')
  request.r(i2503[24], i2503[25], 0, i2502, 'upgradeButton')
  request.r(i2503[26], i2503[27], 0, i2502, 'tapToStartText')
  request.r(i2503[28], i2503[29], 0, i2502, 'tapToContinueText')
  request.r(i2503[30], i2503[31], 0, i2502, 'targetMarkerPrefab')
  request.r(i2503[32], i2503[33], 0, i2502, 'outlineMat')
  request.r(i2503[34], i2503[35], 0, i2502, 'glowparticlePrefab')
  return i2502
}

Deserializers["ChallengeManager+fishClass"] = function (request, data, root) {
  var i2510 = root || request.c( 'ChallengeManager+fishClass' )
  var i2511 = data
  i2510.tier = i2511[0]
  var i2513 = i2511[1]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('ChallengeManager+targetFish')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(request.d('ChallengeManager+targetFish', i2513[i + 0]));
  }
  i2510.fishList = i2512
  return i2510
}

Deserializers["ChallengeManager+targetFish"] = function (request, data, root) {
  var i2516 = root || request.c( 'ChallengeManager+targetFish' )
  var i2517 = data
  i2516.fishNumber = i2517[0]
  request.r(i2517[1], i2517[2], 0, i2516, 'prefab')
  return i2516
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i2520 = root || request.c( 'FishingRod' )
  var i2521 = data
  i2520.hookThrowForce = i2521[0]
  i2520.lineForce = i2521[1]
  i2520.maxPullingForce = i2521[2]
  i2520.minPullingForce = i2521[3]
  i2520.currentPullingForece = i2521[4]
  i2520.maxLine = i2521[5]
  i2520.pullingSpeed = i2521[6]
  i2520.playAdsPullCount = i2521[7]
  i2520.isStart = !!i2521[8]
  request.r(i2521[9], i2521[10], 0, i2520, 'hookRigid')
  request.r(i2521[11], i2521[12], 0, i2520, 'pivot')
  request.r(i2521[13], i2521[14], 0, i2520, 'touchToStartPanel')
  request.r(i2521[15], i2521[16], 0, i2520, 'rodAnimator')
  request.r(i2521[17], i2521[18], 0, i2520, 'fishingHook')
  request.r(i2521[19], i2521[20], 0, i2520, 'touchField')
  request.r(i2521[21], i2521[22], 0, i2520, 'upgradePanel')
  request.r(i2521[23], i2521[24], 0, i2520, 'upgradeButton')
  request.r(i2521[25], i2521[26], 0, i2520, 'depthText')
  request.r(i2521[27], i2521[28], 0, i2520, 'throwTarget1')
  request.r(i2521[29], i2521[30], 0, i2520, 'throwTarget2')
  request.r(i2521[31], i2521[32], 0, i2520, 'hookObject')
  request.r(i2521[33], i2521[34], 0, i2520, 'playerObject')
  return i2520
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i2522 = root || request.c( 'FishingLogic' )
  var i2523 = data
  request.r(i2523[0], i2523[1], 0, i2522, 'joint')
  i2522.biteBate = !!i2523[2]
  i2522.pulling = !!i2523[3]
  i2522.enablePulling = !!i2523[4]
  request.r(i2523[5], i2523[6], 0, i2522, 'rodAnimator')
  request.r(i2523[7], i2523[8], 0, i2522, 'startButton')
  request.r(i2523[9], i2523[10], 0, i2522, 'catchSlider')
  request.r(i2523[11], i2523[12], 0, i2522, 'catchButton')
  request.r(i2523[13], i2523[14], 0, i2522, 'fishingRod')
  request.r(i2523[15], i2523[16], 0, i2522, 'arrow')
  request.r(i2523[17], i2523[18], 0, i2522, 'fishingRodSkinned')
  request.r(i2523[19], i2523[20], 0, i2522, 'bubbleParticle')
  request.r(i2523[21], i2523[22], 0, i2522, 'hookRigid')
  request.r(i2523[23], i2523[24], 0, i2522, 'hook')
  return i2522
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i2524 = root || request.c( 'Upgrades' )
  var i2525 = data
  i2524.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i2525[0], i2524.lineLengthUpgrade)
  i2524.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i2525[1], i2524.hookMaxUpgrade)
  i2524.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i2525[2], i2524.hookMoveSpeedUpgrade)
  request.r(i2525[3], i2525[4], 0, i2524, 'hook')
  request.r(i2525[5], i2525[6], 0, i2524, 'rod')
  request.r(i2525[7], i2525[8], 0, i2524, 'touchField')
  request.r(i2525[9], i2525[10], 0, i2524, 'upgradePanel')
  request.r(i2525[11], i2525[12], 0, i2524, 'upgradeTap')
  request.r(i2525[13], i2525[14], 0, i2524, 'closeTap')
  request.r(i2525[15], i2525[16], 0, i2524, 'tapToStartText')
  return i2524
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i2526 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i2527 = data
  i2526.currentLevel = i2527[0]
  i2526.maxLevel = i2527[1]
  i2526.upgradeValue = i2527[2]
  i2526.upgradeNeedyCost = i2527[3]
  i2526.upgradeCostIncreaseValue = i2527[4]
  i2526.upgradeCostIncreaseValueMultifly = i2527[5]
  request.r(i2527[6], i2527[7], 0, i2526, 'levelText')
  request.r(i2527[8], i2527[9], 0, i2526, 'needyCostText')
  request.r(i2527[10], i2527[11], 0, i2526, 'cover')
  request.r(i2527[12], i2527[13], 0, i2526, 'rod')
  return i2526
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i2528 = root || request.c( 'Upgrades+CountUpgrade' )
  var i2529 = data
  i2528.currentLevel = i2529[0]
  i2528.maxLevel = i2529[1]
  i2528.upgradeValue = i2529[2]
  i2528.upgradeNeedyCost = i2529[3]
  i2528.upgradeCostIncreaseValue = i2529[4]
  i2528.upgradeCostIncreaseValueMultifly = i2529[5]
  request.r(i2529[6], i2529[7], 0, i2528, 'levelText')
  request.r(i2529[8], i2529[9], 0, i2528, 'needyCostText')
  request.r(i2529[10], i2529[11], 0, i2528, 'cover')
  request.r(i2529[12], i2529[13], 0, i2528, 'hook')
  return i2528
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i2530 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i2531 = data
  i2530.currentLevel = i2531[0]
  i2530.maxLevel = i2531[1]
  i2530.upgradeValue = i2531[2]
  i2530.upgradeNeedyCost = i2531[3]
  i2530.upgradeCostIncreaseValue = i2531[4]
  i2530.upgradeCostIncreaseValueMultifly = i2531[5]
  request.r(i2531[6], i2531[7], 0, i2530, 'levelText')
  request.r(i2531[8], i2531[9], 0, i2530, 'needyCostText')
  request.r(i2531[10], i2531[11], 0, i2530, 'cover')
  request.r(i2531[12], i2531[13], 0, i2530, 'touchField')
  return i2530
}

Deserializers["FishPool"] = function (request, data, root) {
  var i2532 = root || request.c( 'FishPool' )
  var i2533 = data
  i2532.oneTierFishList = request.d('FishList', i2533[0], i2532.oneTierFishList)
  i2532.twoTierFishList = request.d('FishList', i2533[1], i2532.twoTierFishList)
  i2532.threeTierFishList = request.d('FishList', i2533[2], i2532.threeTierFishList)
  i2532.fourTierFishList = request.d('FishList', i2533[3], i2532.fourTierFishList)
  i2532.fiveTierFishList = request.d('FishList', i2533[4], i2532.fiveTierFishList)
  i2532.chestList_one = request.d('FishList', i2533[5], i2532.chestList_one)
  i2532.chestList_two = request.d('FishList', i2533[6], i2532.chestList_two)
  i2532.chestList_three = request.d('FishList', i2533[7], i2532.chestList_three)
  i2532.chestMover = request.d('FishList', i2533[8], i2532.chestMover)
  var i2535 = i2533[9]
  var i2534 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2535.length; i += 2) {
  request.r(i2535[i + 0], i2535[i + 1], 1, i2534, '')
  }
  i2532.generatedFishList = i2534
  request.r(i2533[10], i2533[11], 0, i2532, 'poolParent')
  return i2532
}

Deserializers["FishList"] = function (request, data, root) {
  var i2536 = root || request.c( 'FishList' )
  var i2537 = data
  var i2539 = i2537[0]
  var i2538 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2539.length; i += 2) {
  request.r(i2539[i + 0], i2539[i + 1], 1, i2538, '')
  }
  i2536.fishList = i2538
  var i2541 = i2537[1]
  var i2540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2541.length; i += 2) {
  request.r(i2541[i + 0], i2541[i + 1], 1, i2540, '')
  }
  i2536.spawnPoints = i2540
  return i2536
}

Deserializers["DataManager"] = function (request, data, root) {
  var i2546 = root || request.c( 'DataManager' )
  var i2547 = data
  request.r(i2547[0], i2547[1], 0, i2546, 'setting')
  request.r(i2547[2], i2547[3], 0, i2546, 'soundSlider')
  request.r(i2547[4], i2547[5], 0, i2546, 'hapticSlider')
  i2546.gameDataFileName = i2547[6]
  i2546._gameData = request.d('GameData', i2547[7], i2546._gameData)
  request.r(i2547[8], i2547[9], 0, i2546, 'soundSliderHandleText')
  request.r(i2547[10], i2547[11], 0, i2546, 'hapticSliderHandleText')
  return i2546
}

Deserializers["GameData"] = function (request, data, root) {
  var i2548 = root || request.c( 'GameData' )
  var i2549 = data
  i2548.money = i2549[0]
  i2548.needleUpgrade = i2549[1]
  i2548.lineUpgrade = i2549[2]
  i2548.reelUpgrade = i2549[3]
  i2548.sound = i2549[4]
  i2548.haptic = i2549[5]
  return i2548
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2550 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2551 = data
  request.r(i2551[0], i2551[1], 0, i2550, 'm_FirstSelected')
  i2550.m_sendNavigationEvents = !!i2551[2]
  i2550.m_DragThreshold = i2551[3]
  return i2550
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2552 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2553 = data
  i2552.m_HorizontalAxis = i2553[0]
  i2552.m_VerticalAxis = i2553[1]
  i2552.m_SubmitButton = i2553[2]
  i2552.m_CancelButton = i2553[3]
  i2552.m_InputActionsPerSecond = i2553[4]
  i2552.m_RepeatDelay = i2553[5]
  i2552.m_ForceModuleActive = !!i2553[6]
  i2552.m_SendPointerHoverToParent = !!i2553[7]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2555 = data
  i2554.enabled = !!i2555[0]
  i2554.planeDistance = i2555[1]
  i2554.referencePixelsPerUnit = i2555[2]
  i2554.isFallbackOverlay = !!i2555[3]
  i2554.renderMode = i2555[4]
  i2554.renderOrder = i2555[5]
  i2554.sortingLayerName = i2555[6]
  i2554.sortingOrder = i2555[7]
  i2554.scaleFactor = i2555[8]
  request.r(i2555[9], i2555[10], 0, i2554, 'worldCamera')
  i2554.overrideSorting = !!i2555[11]
  i2554.pixelPerfect = !!i2555[12]
  i2554.targetDisplay = i2555[13]
  i2554.overridePixelPerfect = !!i2555[14]
  return i2554
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2556 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2557 = data
  i2556.m_UiScaleMode = i2557[0]
  i2556.m_ReferencePixelsPerUnit = i2557[1]
  i2556.m_ScaleFactor = i2557[2]
  i2556.m_ReferenceResolution = new pc.Vec2( i2557[3], i2557[4] )
  i2556.m_ScreenMatchMode = i2557[5]
  i2556.m_MatchWidthOrHeight = i2557[6]
  i2556.m_PhysicalUnit = i2557[7]
  i2556.m_FallbackScreenDPI = i2557[8]
  i2556.m_DefaultSpriteDPI = i2557[9]
  i2556.m_DynamicPixelsPerUnit = i2557[10]
  i2556.m_PresetInfoIsWorld = !!i2557[11]
  return i2556
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2558 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2559 = data
  i2558.m_IgnoreReversedGraphics = !!i2559[0]
  i2558.m_BlockingObjects = i2559[1]
  i2558.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2559[2] )
  return i2558
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2560 = root || request.c( 'UIManager' )
  var i2561 = data
  request.r(i2561[0], i2561[1], 0, i2560, 'challengeTarget')
  request.r(i2561[2], i2561[3], 0, i2560, 'challengeText')
  request.r(i2561[4], i2561[5], 0, i2560, 'versionText')
  i2560.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2561[6] )
  i2560.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2561[7] )
  request.r(i2561[8], i2561[9], 0, i2560, 'uiCamera')
  var i2563 = i2561[10]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.pictureModeObjects = i2562
  return i2560
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i2566 = root || request.c( 'FixedTouchField' )
  var i2567 = data
  i2566.TouchDist = new pc.Vec2( i2567[0], i2567[1] )
  i2566.PointerOld = new pc.Vec2( i2567[2], i2567[3] )
  i2566.Pressed = !!i2567[4]
  i2566.hookMoveSpeed = i2567[5]
  request.r(i2567[6], i2567[7], 0, i2566, 'hook')
  request.r(i2567[8], i2567[9], 0, i2566, 'logic')
  request.r(i2567[10], i2567[11], 0, i2566, 'joystick_Background')
  request.r(i2567[12], i2567[13], 0, i2566, 'joystick_Handle')
  request.r(i2567[14], i2567[15], 0, i2566, 'canvas')
  request.r(i2567[16], i2567[17], 0, i2566, 'newCamera')
  i2566.clampDist = i2567[18]
  return i2566
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2568 = root || request.c( 'UnityEngine.UI.Button' )
  var i2569 = data
  i2568.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2569[0], i2568.m_OnClick)
  i2568.m_Navigation = request.d('UnityEngine.UI.Navigation', i2569[1], i2568.m_Navigation)
  i2568.m_Transition = i2569[2]
  i2568.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2569[3], i2568.m_Colors)
  i2568.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2569[4], i2568.m_SpriteState)
  i2568.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2569[5], i2568.m_AnimationTriggers)
  i2568.m_Interactable = !!i2569[6]
  request.r(i2569[7], i2569[8], 0, i2568, 'm_TargetGraphic')
  return i2568
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2570 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2571 = data
  i2570.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2571[0], i2570.m_PersistentCalls)
  return i2570
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2572 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2573 = data
  var i2575 = i2573[0]
  var i2574 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.add(request.d('UnityEngine.Events.PersistentCall', i2575[i + 0]));
  }
  i2572.m_Calls = i2574
  return i2572
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2578 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'm_Target')
  i2578.m_TargetAssemblyTypeName = i2579[2]
  i2578.m_MethodName = i2579[3]
  i2578.m_Mode = i2579[4]
  i2578.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2579[5], i2578.m_Arguments)
  i2578.m_CallState = i2579[6]
  return i2578
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2580 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2581 = data
  request.r(i2581[0], i2581[1], 0, i2580, 'm_ObjectArgument')
  i2580.m_ObjectArgumentAssemblyTypeName = i2581[2]
  i2580.m_IntArgument = i2581[3]
  i2580.m_FloatArgument = i2581[4]
  i2580.m_StringArgument = i2581[5]
  i2580.m_BoolArgument = !!i2581[6]
  return i2580
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2582 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2583 = data
  i2582.m_Mode = i2583[0]
  i2582.m_WrapAround = !!i2583[1]
  request.r(i2583[2], i2583[3], 0, i2582, 'm_SelectOnUp')
  request.r(i2583[4], i2583[5], 0, i2582, 'm_SelectOnDown')
  request.r(i2583[6], i2583[7], 0, i2582, 'm_SelectOnLeft')
  request.r(i2583[8], i2583[9], 0, i2582, 'm_SelectOnRight')
  return i2582
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2584 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2585 = data
  i2584.m_NormalColor = new pc.Color(i2585[0], i2585[1], i2585[2], i2585[3])
  i2584.m_HighlightedColor = new pc.Color(i2585[4], i2585[5], i2585[6], i2585[7])
  i2584.m_PressedColor = new pc.Color(i2585[8], i2585[9], i2585[10], i2585[11])
  i2584.m_SelectedColor = new pc.Color(i2585[12], i2585[13], i2585[14], i2585[15])
  i2584.m_DisabledColor = new pc.Color(i2585[16], i2585[17], i2585[18], i2585[19])
  i2584.m_ColorMultiplier = i2585[20]
  i2584.m_FadeDuration = i2585[21]
  return i2584
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2586 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2587 = data
  request.r(i2587[0], i2587[1], 0, i2586, 'm_HighlightedSprite')
  request.r(i2587[2], i2587[3], 0, i2586, 'm_PressedSprite')
  request.r(i2587[4], i2587[5], 0, i2586, 'm_SelectedSprite')
  request.r(i2587[6], i2587[7], 0, i2586, 'm_DisabledSprite')
  return i2586
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2588 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2589 = data
  i2588.m_NormalTrigger = i2589[0]
  i2588.m_HighlightedTrigger = i2589[1]
  i2588.m_PressedTrigger = i2589[2]
  i2588.m_SelectedTrigger = i2589[3]
  i2588.m_DisabledTrigger = i2589[4]
  return i2588
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'm_FillRect')
  request.r(i2591[2], i2591[3], 0, i2590, 'm_HandleRect')
  i2590.m_Direction = i2591[4]
  i2590.m_MinValue = i2591[5]
  i2590.m_MaxValue = i2591[6]
  i2590.m_WholeNumbers = !!i2591[7]
  i2590.m_Value = i2591[8]
  i2590.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2591[9], i2590.m_OnValueChanged)
  i2590.m_Navigation = request.d('UnityEngine.UI.Navigation', i2591[10], i2590.m_Navigation)
  i2590.m_Transition = i2591[11]
  i2590.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2591[12], i2590.m_Colors)
  i2590.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2591[13], i2590.m_SpriteState)
  i2590.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2591[14], i2590.m_AnimationTriggers)
  i2590.m_Interactable = !!i2591[15]
  request.r(i2591[16], i2591[17], 0, i2590, 'm_TargetGraphic')
  return i2590
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2593 = data
  i2592.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2593[0], i2592.m_PersistentCalls)
  return i2592
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i2594 = root || request.c( 'EnviromentEditor' )
  var i2595 = data
  i2594.oceanSpriteValueMultifly = i2595[0]
  i2594.sunLightIntensity = i2595[1]
  i2594.minSunLightIntensity = i2595[2]
  i2594.challengeLightIntensity = i2595[3]
  i2594.depthMaskTransparentValue = i2595[4]
  i2594.ambientLightIntensity = i2595[5]
  request.r(i2595[6], i2595[7], 0, i2594, 'hook')
  var i2597 = i2595[8]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 2) {
  request.r(i2597[i + 0], i2597[i + 1], 2, i2596, '')
  }
  i2594.Oceans = i2596
  request.r(i2595[9], i2595[10], 0, i2594, 'OceanSurface')
  request.r(i2595[11], i2595[12], 0, i2594, 'depthMask')
  request.r(i2595[13], i2595[14], 0, i2594, 'depthSprite')
  request.r(i2595[15], i2595[16], 0, i2594, 'depthMaskMat')
  request.r(i2595[17], i2595[18], 0, i2594, 'sunLights')
  request.r(i2595[19], i2595[20], 0, i2594, 'hookLight')
  request.r(i2595[21], i2595[22], 0, i2594, 'challengeLight')
  return i2594
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i2600 = root || request.c( 'ObjectMovement' )
  var i2601 = data
  i2600.moveX = i2601[0]
  i2600.moveSec = i2601[1]
  return i2600
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i2602 = root || request.c( 'OceanTrigger' )
  var i2603 = data
  request.r(i2603[0], i2603[1], 0, i2602, 'touchToPullButton')
  request.r(i2603[2], i2603[3], 0, i2602, 'waterSplashParticle')
  request.r(i2603[4], i2603[5], 0, i2602, 'bubbleParticle')
  request.r(i2603[6], i2603[7], 0, i2602, 'arrow')
  request.r(i2603[8], i2603[9], 0, i2602, 'rigid')
  request.r(i2603[10], i2603[11], 0, i2602, 'hook')
  request.r(i2603[12], i2603[13], 0, i2602, 'rod')
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2605 = data
  i2604.enabled = !!i2605[0]
  i2604.isTrigger = !!i2605[1]
  request.r(i2605[2], i2605[3], 0, i2604, 'material')
  request.r(i2605[4], i2605[5], 0, i2604, 'sharedMesh')
  i2604.convex = !!i2605[6]
  return i2604
}

Deserializers["Flock"] = function (request, data, root) {
  var i2606 = root || request.c( 'Flock' )
  var i2607 = data
  request.r(i2607[0], i2607[1], 0, i2606, 'flockUnitPrefab')
  i2606.flockSize = i2607[2]
  i2606.spawnBounds = new pc.Vec3( i2607[3], i2607[4], i2607[5] )
  i2606._minSpeed = i2607[6]
  i2606._maxSpeed = i2607[7]
  i2606._cohesionDistance = i2607[8]
  i2606._avoidanceDistance = i2607[9]
  i2606._aligementDistance = i2607[10]
  i2606._obstacleDistance = i2607[11]
  i2606._boundsDistance = i2607[12]
  i2606._cohesionWeight = i2607[13]
  i2606._avoidanceWeight = i2607[14]
  i2606._aligementWeight = i2607[15]
  i2606._boundsWeight = i2607[16]
  i2606._obstacleWeight = i2607[17]
  return i2606
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i2608 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'm_LookAt')
  request.r(i2609[2], i2609[3], 0, i2608, 'm_Follow')
  i2608.m_Lens = request.d('Cinemachine.LensSettings', i2609[4], i2608.m_Lens)
  i2608.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i2609[5], i2608.m_Transitions)
  var i2611 = i2609[6]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( i2611[i + 0] );
  }
  i2608.m_ExcludedPropertiesInInspector = i2610
  var i2613 = i2609[7]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( i2613[i + 0] );
  }
  i2608.m_LockStageInInspector = i2612
  i2608.m_Priority = i2609[8]
  i2608.m_StandbyUpdate = i2609[9]
  i2608.m_LegacyBlendHint = i2609[10]
  request.r(i2609[11], i2609[12], 0, i2608, 'm_ComponentOwner')
  i2608.m_StreamingVersion = i2609[13]
  return i2608
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i2614 = root || request.c( 'Cinemachine.LensSettings' )
  var i2615 = data
  i2614.FieldOfView = i2615[0]
  i2614.OrthographicSize = i2615[1]
  i2614.NearClipPlane = i2615[2]
  i2614.FarClipPlane = i2615[3]
  i2614.Dutch = i2615[4]
  i2614.ModeOverride = i2615[5]
  i2614.LensShift = new pc.Vec2( i2615[6], i2615[7] )
  i2614.GateFit = i2615[8]
  i2614.m_SensorSize = new pc.Vec2( i2615[9], i2615[10] )
  return i2614
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i2616 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i2617 = data
  i2616.m_BlendHint = i2617[0]
  i2616.m_InheritPosition = !!i2617[1]
  i2616.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2617[2], i2616.m_OnCameraLive)
  return i2616
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i2618 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i2619 = data
  i2618.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2619[0], i2618.m_PersistentCalls)
  return i2618
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i2624 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i2625 = data
  return i2624
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i2626 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i2627 = data
  i2626.m_TrackedObjectOffset = new pc.Vec3( i2627[0], i2627[1], i2627[2] )
  i2626.m_LookaheadTime = i2627[3]
  i2626.m_LookaheadSmoothing = i2627[4]
  i2626.m_LookaheadIgnoreY = !!i2627[5]
  i2626.m_HorizontalDamping = i2627[6]
  i2626.m_VerticalDamping = i2627[7]
  i2626.m_ScreenX = i2627[8]
  i2626.m_ScreenY = i2627[9]
  i2626.m_DeadZoneWidth = i2627[10]
  i2626.m_DeadZoneHeight = i2627[11]
  i2626.m_SoftZoneWidth = i2627[12]
  i2626.m_SoftZoneHeight = i2627[13]
  i2626.m_BiasX = i2627[14]
  i2626.m_BiasY = i2627[15]
  i2626.m_CenterOnActivate = !!i2627[16]
  return i2626
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i2628 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i2629 = data
  i2628.m_BindingMode = i2629[0]
  i2628.m_FollowOffset = new pc.Vec3( i2629[1], i2629[2], i2629[3] )
  i2628.m_XDamping = i2629[4]
  i2628.m_YDamping = i2629[5]
  i2628.m_ZDamping = i2629[6]
  i2628.m_AngularDampingMode = i2629[7]
  i2628.m_PitchDamping = i2629[8]
  i2628.m_YawDamping = i2629[9]
  i2628.m_RollDamping = i2629[10]
  i2628.m_AngularDamping = i2629[11]
  return i2628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2631 = data
  i2630.enabled = !!i2631[0]
  i2630.aspect = i2631[1]
  i2630.orthographic = !!i2631[2]
  i2630.orthographicSize = i2631[3]
  i2630.backgroundColor = new pc.Color(i2631[4], i2631[5], i2631[6], i2631[7])
  i2630.nearClipPlane = i2631[8]
  i2630.farClipPlane = i2631[9]
  i2630.fieldOfView = i2631[10]
  i2630.depth = i2631[11]
  i2630.clearFlags = i2631[12]
  i2630.cullingMask = i2631[13]
  i2630.rect = i2631[14]
  request.r(i2631[15], i2631[16], 0, i2630, 'targetTexture')
  return i2630
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i2633 = data
  i2632.m_RenderShadows = !!i2633[0]
  i2632.m_RequiresDepthTextureOption = i2633[1]
  i2632.m_RequiresOpaqueTextureOption = i2633[2]
  i2632.m_CameraType = i2633[3]
  var i2635 = i2633[4]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i2635.length; i += 2) {
  request.r(i2635[i + 0], i2635[i + 1], 1, i2634, '')
  }
  i2632.m_Cameras = i2634
  i2632.m_RendererIndex = i2633[5]
  i2632.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2633[6] )
  request.r(i2633[7], i2633[8], 0, i2632, 'm_VolumeTrigger')
  i2632.m_VolumeFrameworkUpdateModeOption = i2633[9]
  i2632.m_RenderPostProcessing = !!i2633[10]
  i2632.m_Antialiasing = i2633[11]
  i2632.m_AntialiasingQuality = i2633[12]
  i2632.m_StopNaN = !!i2633[13]
  i2632.m_Dithering = !!i2633[14]
  i2632.m_ClearDepth = !!i2633[15]
  i2632.m_AllowXRRendering = !!i2633[16]
  i2632.m_RequiresDepthTexture = !!i2633[17]
  i2632.m_RequiresColorTexture = !!i2633[18]
  i2632.m_Version = i2633[19]
  return i2632
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i2638 = root || request.c( 'CameraMove' )
  var i2639 = data
  i2638.offset = new pc.Vec3( i2639[0], i2639[1], i2639[2] )
  request.r(i2639[3], i2639[4], 0, i2638, 'newCamera')
  request.r(i2639[5], i2639[6], 0, i2638, 'target')
  return i2638
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i2640 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i2641 = data
  i2640.m_ShowDebugText = !!i2641[0]
  i2640.m_ShowCameraFrustum = !!i2641[1]
  i2640.m_IgnoreTimeScale = !!i2641[2]
  request.r(i2641[3], i2641[4], 0, i2640, 'm_WorldUpOverride')
  i2640.m_UpdateMethod = i2641[5]
  i2640.m_BlendUpdateMethod = i2641[6]
  i2640.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i2641[7], i2640.m_DefaultBlend)
  request.r(i2641[8], i2641[9], 0, i2640, 'm_CustomBlends')
  i2640.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i2641[10], i2640.m_CameraCutEvent)
  i2640.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2641[11], i2640.m_CameraActivatedEvent)
  return i2640
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i2642 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i2643 = data
  i2642.m_Style = i2643[0]
  i2642.m_Time = i2643[1]
  i2642.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i2643[2] } )
  return i2642
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i2644 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i2645 = data
  i2644.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2645[0], i2644.m_PersistentCalls)
  return i2644
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i2646 = root || request.c( 'CinemachineController' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, 'playerTrans')
  i2646.playerOffset = new pc.Vec3( i2647[2], i2647[3], i2647[4] )
  request.r(i2647[5], i2647[6], 0, i2646, 'hookTrans')
  i2646.hookOffset = new pc.Vec3( i2647[7], i2647[8], i2647[9] )
  request.r(i2647[10], i2647[11], 0, i2646, 'cvc_Hook')
  request.r(i2647[12], i2647[13], 0, i2646, 'cvc_Player')
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2649 = data
  i2648.enabled = !!i2649[0]
  request.r(i2649[1], i2649[2], 0, i2648, 'sharedMaterial')
  var i2651 = i2649[3]
  var i2650 = []
  for(var i = 0; i < i2651.length; i += 2) {
  request.r(i2651[i + 0], i2651[i + 1], 2, i2650, '')
  }
  i2648.sharedMaterials = i2650
  i2648.receiveShadows = !!i2649[4]
  i2648.shadowCastingMode = i2649[5]
  i2648.sortingLayerID = i2649[6]
  i2648.sortingOrder = i2649[7]
  i2648.lightmapIndex = i2649[8]
  i2648.lightmapSceneIndex = i2649[9]
  i2648.lightmapScaleOffset = new pc.Vec4( i2649[10], i2649[11], i2649[12], i2649[13] )
  i2648.lightProbeUsage = i2649[14]
  i2648.reflectionProbeUsage = i2649[15]
  var i2653 = i2649[16]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 3) {
    i2652.push( new pc.Vec3( i2653[i + 0], i2653[i + 1], i2653[i + 2] ) );
  }
  i2648.positions = i2652
  i2648.positionCount = i2649[17]
  i2648.time = i2649[18]
  i2648.startWidth = i2649[19]
  i2648.endWidth = i2649[20]
  i2648.widthMultiplier = i2649[21]
  i2648.autodestruct = !!i2649[22]
  i2648.emitting = !!i2649[23]
  i2648.numCornerVertices = i2649[24]
  i2648.numCapVertices = i2649[25]
  i2648.minVertexDistance = i2649[26]
  i2648.colorGradient = i2649[27] ? new pc.ColorGradient(i2649[27][0], i2649[27][1], i2649[27][2]) : null
  i2648.startColor = new pc.Color(i2649[28], i2649[29], i2649[30], i2649[31])
  i2648.endColor = new pc.Color(i2649[32], i2649[33], i2649[34], i2649[35])
  i2648.generateLightingData = !!i2649[36]
  i2648.textureMode = i2649[37]
  i2648.alignment = i2649[38]
  i2648.widthCurve = new pc.AnimationCurve( { keys_flow: i2649[39] } )
  return i2648
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i2654 = root || request.c( 'FishingHook' )
  var i2655 = data
  i2654.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i2655[0], i2654.OnMoneyChangeEvent)
  var i2657 = i2655[1]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 1, i2656, '')
  }
  i2654.hookedFish = i2656
  request.r(i2655[2], i2655[3], 0, i2654, 'sellParticle')
  request.r(i2655[4], i2655[5], 0, i2654, 'sellParticleParent')
  i2654.targetHookZoomOffset = i2655[6]
  i2654.minDrag = i2655[7]
  i2654.maxDrag = i2655[8]
  i2654.dragSpeed = i2655[9]
  i2654.fishingHookScaleUpgradeValue = i2655[10]
  i2654.fullHooked = !!i2655[11]
  i2654.inTheOcean = !!i2655[12]
  i2654.money = i2655[13]
  request.r(i2655[14], i2655[15], 0, i2654, 'rigid')
  request.r(i2655[16], i2655[17], 0, i2654, 'canvas')
  request.r(i2655[18], i2655[19], 0, i2654, 'moneyTextPrefab')
  request.r(i2655[20], i2655[21], 0, i2654, 'moneyTextSpawnTransform')
  i2654.moneyTextSpawnMinOffset = new pc.Vec2( i2655[22], i2655[23] )
  i2654.moneyTextSpawnMaxOffset = new pc.Vec2( i2655[24], i2655[25] )
  var i2659 = i2655[26]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 2, i2658, '')
  }
  i2654.hookedTransforms = i2658
  request.r(i2655[27], i2655[28], 0, i2654, 'fishingRodSkinned')
  request.r(i2655[29], i2655[30], 0, i2654, 'cinemachineCamera')
  request.r(i2655[31], i2655[32], 0, i2654, 'startPoint')
  request.r(i2655[33], i2655[34], 0, i2654, 'hook')
  request.r(i2655[35], i2655[36], 0, i2654, 'rod')
  request.r(i2655[37], i2655[38], 0, i2654, 'playerModel')
  request.r(i2655[39], i2655[40], 0, i2654, 'upgradeButton')
  request.r(i2655[41], i2655[42], 0, i2654, 'depthText')
  request.r(i2655[43], i2655[44], 0, i2654, 'touchField')
  request.r(i2655[45], i2655[46], 0, i2654, 'catchRingParticle')
  request.r(i2655[47], i2655[48], 0, i2654, 'fishSkinPrefab')
  request.r(i2655[49], i2655[50], 0, i2654, 'fishSkinPoint1')
  request.r(i2655[51], i2655[52], 0, i2654, 'fishSkinPoint2')
  request.r(i2655[53], i2655[54], 0, i2654, 'moneyText')
  request.r(i2655[55], i2655[56], 0, i2654, 'HookedCount')
  return i2654
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2660 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2661 = data
  i2660.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2661[0], i2660.m_PersistentCalls)
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2663 = data
  i2662.ambientIntensity = i2663[0]
  i2662.reflectionIntensity = i2663[1]
  i2662.ambientMode = i2663[2]
  i2662.ambientLight = new pc.Color(i2663[3], i2663[4], i2663[5], i2663[6])
  i2662.ambientSkyColor = new pc.Color(i2663[7], i2663[8], i2663[9], i2663[10])
  i2662.ambientGroundColor = new pc.Color(i2663[11], i2663[12], i2663[13], i2663[14])
  i2662.ambientEquatorColor = new pc.Color(i2663[15], i2663[16], i2663[17], i2663[18])
  i2662.fogColor = new pc.Color(i2663[19], i2663[20], i2663[21], i2663[22])
  i2662.fogEndDistance = i2663[23]
  i2662.fogStartDistance = i2663[24]
  i2662.fogDensity = i2663[25]
  i2662.fog = !!i2663[26]
  request.r(i2663[27], i2663[28], 0, i2662, 'skybox')
  i2662.fogMode = i2663[29]
  var i2665 = i2663[30]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2665[i + 0]) );
  }
  i2662.lightmaps = i2664
  i2662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2663[31], i2662.lightProbes)
  i2662.lightmapsMode = i2663[32]
  i2662.environmentLightingMode = i2663[33]
  i2662.ambientProbe = new pc.SphericalHarmonicsL2(i2663[34])
  i2662.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2663[35])
  i2662.useReferenceAmbientProbe = !!i2663[36]
  request.r(i2663[37], i2663[38], 0, i2662, 'customReflection')
  request.r(i2663[39], i2663[40], 0, i2662, 'defaultReflection')
  i2662.defaultReflectionMode = i2663[41]
  i2662.defaultReflectionResolution = i2663[42]
  i2662.sunLightObjectId = i2663[43]
  i2662.pixelLightCount = i2663[44]
  i2662.defaultReflectionHDR = !!i2663[45]
  i2662.hasLightDataAsset = !!i2663[46]
  i2662.hasManualGenerate = !!i2663[47]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'lightmapColor')
  request.r(i2669[2], i2669[3], 0, i2668, 'lightmapDirection')
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2670 = root || new UnityEngine.LightProbes()
  var i2671 = data
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2677 = data
  var i2679 = i2677[0]
  var i2678 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.add(i2679[i + 0]);
  }
  i2676.invalidShaderVariants = i2678
  i2676.name = i2677[1]
  i2676.guid = i2677[2]
  var i2681 = i2677[3]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( i2681[i + 0] );
  }
  i2676.shaderDefinedKeywords = i2680
  var i2683 = i2677[4]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2683[i + 0]) );
  }
  i2676.passes = i2682
  var i2685 = i2677[5]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2685[i + 0]) );
  }
  i2676.usePasses = i2684
  var i2687 = i2677[6]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2687[i + 0]) );
  }
  i2676.defaultParameterValues = i2686
  request.r(i2677[7], i2677[8], 0, i2676, 'unityFallbackShader')
  i2676.readDepth = !!i2677[9]
  i2676.isCreatedByShaderGraph = !!i2677[10]
  return i2676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2692 = root || new pc.UnityShaderPass()
  var i2693 = data
  i2692.id = i2693[0]
  i2692.subShaderIndex = i2693[1]
  i2692.name = i2693[2]
  i2692.passType = i2693[3]
  i2692.usePass = !!i2693[4]
  i2692.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[5], i2692.zTest)
  i2692.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[6], i2692.zWrite)
  i2692.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[7], i2692.culling)
  i2692.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2693[8], i2692.blending)
  i2692.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2693[9], i2692.alphaBlending)
  i2692.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[10], i2692.colorWriteMask)
  i2692.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[11], i2692.offsetUnits)
  i2692.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[12], i2692.offsetFactor)
  i2692.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[13], i2692.stencilRef)
  i2692.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[14], i2692.stencilReadMask)
  i2692.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2693[15], i2692.stencilWriteMask)
  i2692.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2693[16], i2692.stencilOp)
  i2692.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2693[17], i2692.stencilOpFront)
  i2692.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2693[18], i2692.stencilOpBack)
  var i2695 = i2693[19]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2695[i + 0]) );
  }
  i2692.tags = i2694
  var i2697 = i2693[20]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( i2697[i + 0] );
  }
  i2692.passDefinedKeywords = i2696
  var i2699 = i2693[21]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2699[i + 0]) );
  }
  i2692.passDefinedKeywordGroups = i2698
  var i2701 = i2693[22]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2701[i + 0]) );
  }
  i2692.variants = i2700
  var i2703 = i2693[23]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2703[i + 0]) );
  }
  i2692.excludedVariants = i2702
  i2692.hasDepthReader = !!i2693[24]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2705 = data
  i2704.val = i2705[0]
  i2704.name = i2705[1]
  return i2704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2707 = data
  i2706.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[0], i2706.src)
  i2706.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[1], i2706.dst)
  i2706.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2707[2], i2706.op)
  return i2706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2709 = data
  i2708.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[0], i2708.pass)
  i2708.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[1], i2708.fail)
  i2708.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[2], i2708.zFail)
  i2708.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[3], i2708.comp)
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.value = i2713[1]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2717 = data
  var i2719 = i2717[0]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( i2719[i + 0] );
  }
  i2716.keywords = i2718
  i2716.hasDiscard = !!i2717[1]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2723 = data
  i2722.passId = i2723[0]
  i2722.subShaderIndex = i2723[1]
  var i2725 = i2723[2]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( i2725[i + 0] );
  }
  i2722.keywords = i2724
  i2722.vertexProgram = i2723[3]
  i2722.fragmentProgram = i2723[4]
  i2722.readDepth = !!i2723[5]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2729 = data
  request.r(i2729[0], i2729[1], 0, i2728, 'shader')
  i2728.pass = i2729[2]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2733 = data
  i2732.name = i2733[0]
  i2732.type = i2733[1]
  i2732.value = new pc.Vec4( i2733[2], i2733[3], i2733[4], i2733[5] )
  i2732.textureValue = i2733[6]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2735 = data
  i2734.name = i2735[0]
  request.r(i2735[1], i2735[2], 0, i2734, 'texture')
  i2734.aabb = i2735[3]
  i2734.vertices = i2735[4]
  i2734.triangles = i2735[5]
  i2734.textureRect = UnityEngine.Rect.MinMaxRect(i2735[6], i2735[7], i2735[8], i2735[9])
  i2734.packedRect = UnityEngine.Rect.MinMaxRect(i2735[10], i2735[11], i2735[12], i2735[13])
  i2734.border = new pc.Vec4( i2735[14], i2735[15], i2735[16], i2735[17] )
  i2734.transparency = i2735[18]
  i2734.bounds = i2735[19]
  i2734.pixelsPerUnit = i2735[20]
  i2734.textureWidth = i2735[21]
  i2734.textureHeight = i2735[22]
  i2734.nativeSize = new pc.Vec2( i2735[23], i2735[24] )
  i2734.pivot = new pc.Vec2( i2735[25], i2735[26] )
  i2734.textureRectOffset = new pc.Vec2( i2735[27], i2735[28] )
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.wrapMode = i2737[1]
  i2736.isLooping = !!i2737[2]
  i2736.length = i2737[3]
  var i2739 = i2737[4]
  var i2738 = []
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2739[i + 0]) );
  }
  i2736.curves = i2738
  var i2741 = i2737[5]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2741[i + 0]) );
  }
  i2736.events = i2740
  i2736.halfPrecision = !!i2737[6]
  return i2736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2745 = data
  i2744.path = i2745[0]
  i2744.componentType = i2745[1]
  i2744.property = i2745[2]
  i2744.keys = i2745[3]
  var i2747 = i2745[4]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2747[i + 0]) );
  }
  i2744.objectReferenceKeys = i2746
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2751 = data
  i2750.time = i2751[0]
  request.r(i2751[1], i2751[2], 0, i2750, 'value')
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2755 = data
  i2754.functionName = i2755[0]
  i2754.floatParameter = i2755[1]
  i2754.intParameter = i2755[2]
  i2754.stringParameter = i2755[3]
  request.r(i2755[4], i2755[5], 0, i2754, 'objectReferenceParameter')
  i2754.time = i2755[6]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2757 = data
  i2756.name = i2757[0]
  i2756.ascent = i2757[1]
  i2756.originalLineHeight = i2757[2]
  i2756.fontSize = i2757[3]
  var i2759 = i2757[4]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2759[i + 0]) );
  }
  i2756.characterInfo = i2758
  request.r(i2757[5], i2757[6], 0, i2756, 'texture')
  i2756.originalFontSize = i2757[7]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2763 = data
  i2762.index = i2763[0]
  i2762.advance = i2763[1]
  i2762.bearing = i2763[2]
  i2762.glyphWidth = i2763[3]
  i2762.glyphHeight = i2763[4]
  i2762.minX = i2763[5]
  i2762.maxX = i2763[6]
  i2762.minY = i2763[7]
  i2762.maxY = i2763[8]
  i2762.uvBottomLeftX = i2763[9]
  i2762.uvBottomLeftY = i2763[10]
  i2762.uvBottomRightX = i2763[11]
  i2762.uvBottomRightY = i2763[12]
  i2762.uvTopLeftX = i2763[13]
  i2762.uvTopLeftY = i2763[14]
  i2762.uvTopRightX = i2763[15]
  i2762.uvTopRightY = i2763[16]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2765 = data
  i2764.name = i2765[0]
  var i2767 = i2765[1]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2767[i + 0]) );
  }
  i2764.states = i2766
  var i2769 = i2765[2]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2769[i + 0]) );
  }
  i2764.layers = i2768
  var i2771 = i2765[3]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2771[i + 0]) );
  }
  i2764.parameters = i2770
  var i2773 = i2765[4]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( i2773[i + 0] );
  }
  i2764.animationClips = i2772
  i2764.HasSubStateMachines = !!i2765[5]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2777 = data
  i2776.cycleOffset = i2777[0]
  i2776.cycleOffsetParameter = i2777[1]
  i2776.cycleOffsetParameterActive = !!i2777[2]
  i2776.mirror = !!i2777[3]
  i2776.mirrorParameter = i2777[4]
  i2776.mirrorParameterActive = !!i2777[5]
  i2776.motionId = i2777[6]
  i2776.nameHash = i2777[7]
  i2776.fullPathHash = i2777[8]
  i2776.speed = i2777[9]
  i2776.speedParameter = i2777[10]
  i2776.speedParameterActive = !!i2777[11]
  i2776.tag = i2777[12]
  i2776.name = i2777[13]
  i2776.writeDefaultValues = !!i2777[14]
  var i2779 = i2777[15]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2779[i + 0]) );
  }
  i2776.transitions = i2778
  var i2781 = i2777[16]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 2) {
  request.r(i2781[i + 0], i2781[i + 1], 2, i2780, '')
  }
  i2776.behaviours = i2780
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2785 = data
  i2784.fullPath = i2785[0]
  i2784.canTransitionToSelf = !!i2785[1]
  i2784.duration = i2785[2]
  i2784.exitTime = i2785[3]
  i2784.hasExitTime = !!i2785[4]
  i2784.hasFixedDuration = !!i2785[5]
  i2784.interruptionSource = i2785[6]
  i2784.offset = i2785[7]
  i2784.orderedInterruption = !!i2785[8]
  i2784.destinationStateNameHash = i2785[9]
  i2784.destinationStateMachineId = i2785[10]
  i2784.isExit = !!i2785[11]
  i2784.mute = !!i2785[12]
  i2784.solo = !!i2785[13]
  var i2787 = i2785[14]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2787[i + 0]) );
  }
  i2784.conditions = i2786
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2793 = data
  i2792.blendingMode = i2793[0]
  i2792.defaultWeight = i2793[1]
  i2792.name = i2793[2]
  i2792.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2793[3], i2792.stateMachine)
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2795 = data
  i2794.id = i2795[0]
  i2794.defaultStateNameHash = i2795[1]
  var i2797 = i2795[2]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2797[i + 0]) );
  }
  i2794.entryTransitions = i2796
  var i2799 = i2795[3]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2799[i + 0]) );
  }
  i2794.anyStateTransitions = i2798
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2803 = data
  i2802.destinationStateNameHash = i2803[0]
  i2802.destinationStateMachineId = i2803[1]
  i2802.isExit = !!i2803[2]
  i2802.mute = !!i2803[3]
  i2802.solo = !!i2803[4]
  var i2805 = i2803[5]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2805[i + 0]) );
  }
  i2802.conditions = i2804
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2809 = data
  i2808.defaultBool = !!i2809[0]
  i2808.defaultFloat = i2809[1]
  i2808.defaultInt = i2809[2]
  i2808.name = i2809[3]
  i2808.nameHash = i2809[4]
  i2808.type = i2809[5]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2813 = data
  i2812.mode = i2813[0]
  i2812.parameter = i2813[1]
  i2812.threshold = i2813[2]
  return i2812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2815 = data
  i2814.name = i2815[0]
  i2814.bytes64 = i2815[1]
  i2814.data = i2815[2]
  return i2814
}

Deserializers["MapData"] = function (request, data, root) {
  var i2816 = root || request.c( 'MapData' )
  var i2817 = data
  var i2819 = i2817[0]
  var i2818 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.add(request.d('MapData+mapData', i2819[i + 0]));
  }
  i2816.mapDataList = i2818
  return i2816
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i2822 = root || request.c( 'MapData+mapData' )
  var i2823 = data
  i2822.tier = i2823[0]
  i2822.minMapSize = new pc.Vec3( i2823[1], i2823[2], i2823[3] )
  i2822.maxMapSize = new pc.Vec3( i2823[4], i2823[5], i2823[6] )
  return i2822
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2824 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2825 = data
  i2824.hashCode = i2825[0]
  request.r(i2825[1], i2825[2], 0, i2824, 'material')
  i2824.materialHashCode = i2825[3]
  request.r(i2825[4], i2825[5], 0, i2824, 'atlas')
  i2824.normalStyle = i2825[6]
  i2824.normalSpacingOffset = i2825[7]
  i2824.boldStyle = i2825[8]
  i2824.boldSpacing = i2825[9]
  i2824.italicStyle = i2825[10]
  i2824.tabSize = i2825[11]
  i2824.m_Version = i2825[12]
  i2824.m_SourceFontFileGUID = i2825[13]
  request.r(i2825[14], i2825[15], 0, i2824, 'm_SourceFontFile_EditorRef')
  request.r(i2825[16], i2825[17], 0, i2824, 'm_SourceFontFile')
  i2824.m_AtlasPopulationMode = i2825[18]
  i2824.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2825[19], i2824.m_FaceInfo)
  var i2827 = i2825[20]
  var i2826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2827.length; i += 1) {
    i2826.add(request.d('UnityEngine.TextCore.Glyph', i2827[i + 0]));
  }
  i2824.m_GlyphTable = i2826
  var i2829 = i2825[21]
  var i2828 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.add(request.d('TMPro.TMP_Character', i2829[i + 0]));
  }
  i2824.m_CharacterTable = i2828
  var i2831 = i2825[22]
  var i2830 = []
  for(var i = 0; i < i2831.length; i += 2) {
  request.r(i2831[i + 0], i2831[i + 1], 2, i2830, '')
  }
  i2824.m_AtlasTextures = i2830
  i2824.m_AtlasTextureIndex = i2825[23]
  i2824.m_IsMultiAtlasTexturesEnabled = !!i2825[24]
  i2824.m_ClearDynamicDataOnBuild = !!i2825[25]
  var i2833 = i2825[26]
  var i2832 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.add(request.d('UnityEngine.TextCore.GlyphRect', i2833[i + 0]));
  }
  i2824.m_UsedGlyphRects = i2832
  var i2835 = i2825[27]
  var i2834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2835.length; i += 1) {
    i2834.add(request.d('UnityEngine.TextCore.GlyphRect', i2835[i + 0]));
  }
  i2824.m_FreeGlyphRects = i2834
  i2824.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2825[28], i2824.m_fontInfo)
  i2824.m_AtlasWidth = i2825[29]
  i2824.m_AtlasHeight = i2825[30]
  i2824.m_AtlasPadding = i2825[31]
  i2824.m_AtlasRenderMode = i2825[32]
  var i2837 = i2825[33]
  var i2836 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.add(request.d('TMPro.TMP_Glyph', i2837[i + 0]));
  }
  i2824.m_glyphInfoList = i2836
  i2824.m_KerningTable = request.d('TMPro.KerningTable', i2825[34], i2824.m_KerningTable)
  i2824.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2825[35], i2824.m_FontFeatureTable)
  var i2839 = i2825[36]
  var i2838 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2839.length; i += 2) {
  request.r(i2839[i + 0], i2839[i + 1], 1, i2838, '')
  }
  i2824.fallbackFontAssets = i2838
  var i2841 = i2825[37]
  var i2840 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2841.length; i += 2) {
  request.r(i2841[i + 0], i2841[i + 1], 1, i2840, '')
  }
  i2824.m_FallbackFontAssetTable = i2840
  i2824.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2825[38], i2824.m_CreationSettings)
  var i2843 = i2825[39]
  var i2842 = []
  for(var i = 0; i < i2843.length; i += 1) {
    i2842.push( request.d('TMPro.TMP_FontWeightPair', i2843[i + 0]) );
  }
  i2824.m_FontWeightTable = i2842
  var i2845 = i2825[40]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('TMPro.TMP_FontWeightPair', i2845[i + 0]) );
  }
  i2824.fontWeights = i2844
  return i2824
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2846 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2847 = data
  i2846.m_FaceIndex = i2847[0]
  i2846.m_FamilyName = i2847[1]
  i2846.m_StyleName = i2847[2]
  i2846.m_PointSize = i2847[3]
  i2846.m_Scale = i2847[4]
  i2846.m_LineHeight = i2847[5]
  i2846.m_AscentLine = i2847[6]
  i2846.m_CapLine = i2847[7]
  i2846.m_MeanLine = i2847[8]
  i2846.m_Baseline = i2847[9]
  i2846.m_DescentLine = i2847[10]
  i2846.m_SuperscriptOffset = i2847[11]
  i2846.m_SuperscriptSize = i2847[12]
  i2846.m_SubscriptOffset = i2847[13]
  i2846.m_SubscriptSize = i2847[14]
  i2846.m_UnderlineOffset = i2847[15]
  i2846.m_UnderlineThickness = i2847[16]
  i2846.m_StrikethroughOffset = i2847[17]
  i2846.m_StrikethroughThickness = i2847[18]
  i2846.m_TabWidth = i2847[19]
  return i2846
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2850 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2851 = data
  i2850.m_Index = i2851[0]
  i2850.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2851[1], i2850.m_Metrics)
  i2850.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2851[2], i2850.m_GlyphRect)
  i2850.m_Scale = i2851[3]
  i2850.m_AtlasIndex = i2851[4]
  return i2850
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2852 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2853 = data
  i2852.m_Width = i2853[0]
  i2852.m_Height = i2853[1]
  i2852.m_HorizontalBearingX = i2853[2]
  i2852.m_HorizontalBearingY = i2853[3]
  i2852.m_HorizontalAdvance = i2853[4]
  return i2852
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2854 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2855 = data
  i2854.m_X = i2855[0]
  i2854.m_Y = i2855[1]
  i2854.m_Width = i2855[2]
  i2854.m_Height = i2855[3]
  return i2854
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2858 = root || request.c( 'TMPro.TMP_Character' )
  var i2859 = data
  i2858.m_ElementType = i2859[0]
  i2858.m_Unicode = i2859[1]
  i2858.m_GlyphIndex = i2859[2]
  i2858.m_Scale = i2859[3]
  return i2858
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2864 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2865 = data
  i2864.Name = i2865[0]
  i2864.PointSize = i2865[1]
  i2864.Scale = i2865[2]
  i2864.CharacterCount = i2865[3]
  i2864.LineHeight = i2865[4]
  i2864.Baseline = i2865[5]
  i2864.Ascender = i2865[6]
  i2864.CapHeight = i2865[7]
  i2864.Descender = i2865[8]
  i2864.CenterLine = i2865[9]
  i2864.SuperscriptOffset = i2865[10]
  i2864.SubscriptOffset = i2865[11]
  i2864.SubSize = i2865[12]
  i2864.Underline = i2865[13]
  i2864.UnderlineThickness = i2865[14]
  i2864.strikethrough = i2865[15]
  i2864.strikethroughThickness = i2865[16]
  i2864.TabWidth = i2865[17]
  i2864.Padding = i2865[18]
  i2864.AtlasWidth = i2865[19]
  i2864.AtlasHeight = i2865[20]
  return i2864
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2868 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2869 = data
  i2868.id = i2869[0]
  i2868.x = i2869[1]
  i2868.y = i2869[2]
  i2868.width = i2869[3]
  i2868.height = i2869[4]
  i2868.xOffset = i2869[5]
  i2868.yOffset = i2869[6]
  i2868.xAdvance = i2869[7]
  i2868.scale = i2869[8]
  return i2868
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2870 = root || request.c( 'TMPro.KerningTable' )
  var i2871 = data
  var i2873 = i2871[0]
  var i2872 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2873.length; i += 1) {
    i2872.add(request.d('TMPro.KerningPair', i2873[i + 0]));
  }
  i2870.kerningPairs = i2872
  return i2870
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2876 = root || request.c( 'TMPro.KerningPair' )
  var i2877 = data
  i2876.xOffset = i2877[0]
  i2876.m_FirstGlyph = i2877[1]
  i2876.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2877[2], i2876.m_FirstGlyphAdjustments)
  i2876.m_SecondGlyph = i2877[3]
  i2876.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2877[4], i2876.m_SecondGlyphAdjustments)
  i2876.m_IgnoreSpacingAdjustments = !!i2877[5]
  return i2876
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2878 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2879 = data
  var i2881 = i2879[0]
  var i2880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2881.length; i += 1) {
    i2880.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2881[i + 0]));
  }
  i2878.m_GlyphPairAdjustmentRecords = i2880
  return i2878
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2884 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2885 = data
  i2884.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2885[0], i2884.m_FirstAdjustmentRecord)
  i2884.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2885[1], i2884.m_SecondAdjustmentRecord)
  i2884.m_FeatureLookupFlags = i2885[2]
  return i2884
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2888 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2889 = data
  i2888.sourceFontFileName = i2889[0]
  i2888.sourceFontFileGUID = i2889[1]
  i2888.pointSizeSamplingMode = i2889[2]
  i2888.pointSize = i2889[3]
  i2888.padding = i2889[4]
  i2888.packingMode = i2889[5]
  i2888.atlasWidth = i2889[6]
  i2888.atlasHeight = i2889[7]
  i2888.characterSetSelectionMode = i2889[8]
  i2888.characterSequence = i2889[9]
  i2888.referencedFontAssetGUID = i2889[10]
  i2888.referencedTextAssetGUID = i2889[11]
  i2888.fontStyle = i2889[12]
  i2888.fontStyleModifier = i2889[13]
  i2888.renderMode = i2889[14]
  i2888.includeFontFeatures = !!i2889[15]
  return i2888
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2892 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2893 = data
  request.r(i2893[0], i2893[1], 0, i2892, 'regularTypeface')
  request.r(i2893[2], i2893[3], 0, i2892, 'italicTypeface')
  return i2892
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2894 = root || request.c( 'TMPro.TMP_Settings' )
  var i2895 = data
  i2894.m_enableWordWrapping = !!i2895[0]
  i2894.m_enableKerning = !!i2895[1]
  i2894.m_enableExtraPadding = !!i2895[2]
  i2894.m_enableTintAllSprites = !!i2895[3]
  i2894.m_enableParseEscapeCharacters = !!i2895[4]
  i2894.m_EnableRaycastTarget = !!i2895[5]
  i2894.m_GetFontFeaturesAtRuntime = !!i2895[6]
  i2894.m_missingGlyphCharacter = i2895[7]
  i2894.m_warningsDisabled = !!i2895[8]
  request.r(i2895[9], i2895[10], 0, i2894, 'm_defaultFontAsset')
  i2894.m_defaultFontAssetPath = i2895[11]
  i2894.m_defaultFontSize = i2895[12]
  i2894.m_defaultAutoSizeMinRatio = i2895[13]
  i2894.m_defaultAutoSizeMaxRatio = i2895[14]
  i2894.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2895[15], i2895[16] )
  i2894.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2895[17], i2895[18] )
  i2894.m_autoSizeTextContainer = !!i2895[19]
  i2894.m_IsTextObjectScaleStatic = !!i2895[20]
  var i2897 = i2895[21]
  var i2896 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2897.length; i += 2) {
  request.r(i2897[i + 0], i2897[i + 1], 1, i2896, '')
  }
  i2894.m_fallbackFontAssets = i2896
  i2894.m_matchMaterialPreset = !!i2895[22]
  request.r(i2895[23], i2895[24], 0, i2894, 'm_defaultSpriteAsset')
  i2894.m_defaultSpriteAssetPath = i2895[25]
  i2894.m_enableEmojiSupport = !!i2895[26]
  i2894.m_MissingCharacterSpriteUnicode = i2895[27]
  i2894.m_defaultColorGradientPresetsPath = i2895[28]
  request.r(i2895[29], i2895[30], 0, i2894, 'm_defaultStyleSheet')
  i2894.m_StyleSheetsResourcePath = i2895[31]
  request.r(i2895[32], i2895[33], 0, i2894, 'm_leadingCharacters')
  request.r(i2895[34], i2895[35], 0, i2894, 'm_followingCharacters')
  i2894.m_UseModernHangulLineBreakingRules = !!i2895[36]
  return i2894
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2898 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2899 = data
  i2898.hashCode = i2899[0]
  request.r(i2899[1], i2899[2], 0, i2898, 'material')
  i2898.materialHashCode = i2899[3]
  request.r(i2899[4], i2899[5], 0, i2898, 'spriteSheet')
  var i2901 = i2899[6]
  var i2900 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2901.length; i += 1) {
    i2900.add(request.d('TMPro.TMP_Sprite', i2901[i + 0]));
  }
  i2898.spriteInfoList = i2900
  var i2903 = i2899[7]
  var i2902 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2903.length; i += 2) {
  request.r(i2903[i + 0], i2903[i + 1], 1, i2902, '')
  }
  i2898.fallbackSpriteAssets = i2902
  i2898.m_Version = i2899[8]
  i2898.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2899[9], i2898.m_FaceInfo)
  var i2905 = i2899[10]
  var i2904 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2905.length; i += 1) {
    i2904.add(request.d('TMPro.TMP_SpriteCharacter', i2905[i + 0]));
  }
  i2898.m_SpriteCharacterTable = i2904
  var i2907 = i2899[11]
  var i2906 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2907.length; i += 1) {
    i2906.add(request.d('TMPro.TMP_SpriteGlyph', i2907[i + 0]));
  }
  i2898.m_SpriteGlyphTable = i2906
  return i2898
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2910 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2911 = data
  i2910.name = i2911[0]
  i2910.hashCode = i2911[1]
  i2910.unicode = i2911[2]
  i2910.pivot = new pc.Vec2( i2911[3], i2911[4] )
  request.r(i2911[5], i2911[6], 0, i2910, 'sprite')
  i2910.id = i2911[7]
  i2910.x = i2911[8]
  i2910.y = i2911[9]
  i2910.width = i2911[10]
  i2910.height = i2911[11]
  i2910.xOffset = i2911[12]
  i2910.yOffset = i2911[13]
  i2910.xAdvance = i2911[14]
  i2910.scale = i2911[15]
  return i2910
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2916 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2917 = data
  i2916.m_Name = i2917[0]
  i2916.m_HashCode = i2917[1]
  i2916.m_ElementType = i2917[2]
  i2916.m_Unicode = i2917[3]
  i2916.m_GlyphIndex = i2917[4]
  i2916.m_Scale = i2917[5]
  return i2916
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2920 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2921 = data
  request.r(i2921[0], i2921[1], 0, i2920, 'sprite')
  i2920.m_Index = i2921[2]
  i2920.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2921[3], i2920.m_Metrics)
  i2920.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2921[4], i2920.m_GlyphRect)
  i2920.m_Scale = i2921[5]
  i2920.m_AtlasIndex = i2921[6]
  return i2920
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2922 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2923 = data
  var i2925 = i2923[0]
  var i2924 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2925.length; i += 1) {
    i2924.add(request.d('TMPro.TMP_Style', i2925[i + 0]));
  }
  i2922.m_StyleList = i2924
  return i2922
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2928 = root || request.c( 'TMPro.TMP_Style' )
  var i2929 = data
  i2928.m_Name = i2929[0]
  i2928.m_HashCode = i2929[1]
  i2928.m_OpeningDefinition = i2929[2]
  i2928.m_ClosingDefinition = i2929[3]
  i2928.m_OpeningTagArray = i2929[4]
  i2928.m_ClosingTagArray = i2929[5]
  i2928.m_OpeningTagUnicodeArray = i2929[6]
  i2928.m_ClosingTagUnicodeArray = i2929[7]
  return i2928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2931 = data
  var i2933 = i2931[0]
  var i2932 = []
  for(var i = 0; i < i2933.length; i += 1) {
    i2932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2933[i + 0]) );
  }
  i2930.files = i2932
  i2930.componentToPrefabIds = i2931[1]
  return i2930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2937 = data
  i2936.path = i2937[0]
  request.r(i2937[1], i2937[2], 0, i2936, 'unityObject')
  return i2936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2939 = data
  var i2941 = i2939[0]
  var i2940 = []
  for(var i = 0; i < i2941.length; i += 1) {
    i2940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2941[i + 0]) );
  }
  i2938.scriptsExecutionOrder = i2940
  var i2943 = i2939[1]
  var i2942 = []
  for(var i = 0; i < i2943.length; i += 1) {
    i2942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2943[i + 0]) );
  }
  i2938.sortingLayers = i2942
  var i2945 = i2939[2]
  var i2944 = []
  for(var i = 0; i < i2945.length; i += 1) {
    i2944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2945[i + 0]) );
  }
  i2938.cullingLayers = i2944
  i2938.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2939[3], i2938.timeSettings)
  i2938.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2939[4], i2938.physicsSettings)
  i2938.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2939[5], i2938.physics2DSettings)
  i2938.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2939[6], i2938.qualitySettings)
  i2938.enableRealtimeShadows = !!i2939[7]
  i2938.autoInstantiatePrefabs = !!i2939[8]
  i2938.enableAutoInstancing = !!i2939[9]
  i2938.lightmapEncodingQuality = i2939[10]
  i2938.desiredColorSpace = i2939[11]
  return i2938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2949 = data
  i2948.name = i2949[0]
  i2948.value = i2949[1]
  return i2948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2953 = data
  i2952.id = i2953[0]
  i2952.name = i2953[1]
  i2952.value = i2953[2]
  return i2952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2957 = data
  i2956.id = i2957[0]
  i2956.name = i2957[1]
  return i2956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2959 = data
  i2958.fixedDeltaTime = i2959[0]
  i2958.maximumDeltaTime = i2959[1]
  i2958.timeScale = i2959[2]
  i2958.maximumParticleTimestep = i2959[3]
  return i2958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2961 = data
  i2960.gravity = new pc.Vec3( i2961[0], i2961[1], i2961[2] )
  i2960.defaultSolverIterations = i2961[3]
  i2960.bounceThreshold = i2961[4]
  i2960.autoSyncTransforms = !!i2961[5]
  i2960.autoSimulation = !!i2961[6]
  var i2963 = i2961[7]
  var i2962 = []
  for(var i = 0; i < i2963.length; i += 1) {
    i2962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2963[i + 0]) );
  }
  i2960.collisionMatrix = i2962
  return i2960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2967 = data
  i2966.enabled = !!i2967[0]
  i2966.layerId = i2967[1]
  i2966.otherLayerId = i2967[2]
  return i2966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2969 = data
  request.r(i2969[0], i2969[1], 0, i2968, 'material')
  i2968.gravity = new pc.Vec2( i2969[2], i2969[3] )
  i2968.positionIterations = i2969[4]
  i2968.velocityIterations = i2969[5]
  i2968.velocityThreshold = i2969[6]
  i2968.maxLinearCorrection = i2969[7]
  i2968.maxAngularCorrection = i2969[8]
  i2968.maxTranslationSpeed = i2969[9]
  i2968.maxRotationSpeed = i2969[10]
  i2968.timeToSleep = i2969[11]
  i2968.linearSleepTolerance = i2969[12]
  i2968.angularSleepTolerance = i2969[13]
  i2968.defaultContactOffset = i2969[14]
  i2968.autoSimulation = !!i2969[15]
  i2968.queriesHitTriggers = !!i2969[16]
  i2968.queriesStartInColliders = !!i2969[17]
  i2968.callbacksOnDisable = !!i2969[18]
  i2968.reuseCollisionCallbacks = !!i2969[19]
  i2968.autoSyncTransforms = !!i2969[20]
  var i2971 = i2969[21]
  var i2970 = []
  for(var i = 0; i < i2971.length; i += 1) {
    i2970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2971[i + 0]) );
  }
  i2968.collisionMatrix = i2970
  return i2968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2975 = data
  i2974.enabled = !!i2975[0]
  i2974.layerId = i2975[1]
  i2974.otherLayerId = i2975[2]
  return i2974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2977 = data
  var i2979 = i2977[0]
  var i2978 = []
  for(var i = 0; i < i2979.length; i += 1) {
    i2978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2979[i + 0]) );
  }
  i2976.qualityLevels = i2978
  var i2981 = i2977[1]
  var i2980 = []
  for(var i = 0; i < i2981.length; i += 1) {
    i2980.push( i2981[i + 0] );
  }
  i2976.names = i2980
  i2976.shadows = i2977[2]
  i2976.anisotropicFiltering = i2977[3]
  i2976.antiAliasing = i2977[4]
  i2976.lodBias = i2977[5]
  i2976.shadowCascades = i2977[6]
  i2976.shadowDistance = i2977[7]
  i2976.shadowmaskMode = i2977[8]
  i2976.shadowProjection = i2977[9]
  i2976.shadowResolution = i2977[10]
  i2976.softParticles = !!i2977[11]
  i2976.softVegetation = !!i2977[12]
  i2976.activeColorSpace = i2977[13]
  i2976.desiredColorSpace = i2977[14]
  i2976.masterTextureLimit = i2977[15]
  i2976.maxQueuedFrames = i2977[16]
  i2976.particleRaycastBudget = i2977[17]
  i2976.pixelLightCount = i2977[18]
  i2976.realtimeReflectionProbes = !!i2977[19]
  i2976.shadowCascade2Split = i2977[20]
  i2976.shadowCascade4Split = new pc.Vec3( i2977[21], i2977[22], i2977[23] )
  i2976.streamingMipmapsActive = !!i2977[24]
  i2976.vSyncCount = i2977[25]
  i2976.asyncUploadBufferSize = i2977[26]
  i2976.asyncUploadTimeSlice = i2977[27]
  i2976.billboardsFaceCameraPosition = !!i2977[28]
  i2976.shadowNearPlaneOffset = i2977[29]
  i2976.streamingMipmapsMemoryBudget = i2977[30]
  i2976.maximumLODLevel = i2977[31]
  i2976.streamingMipmapsAddAllCameras = !!i2977[32]
  i2976.streamingMipmapsMaxLevelReduction = i2977[33]
  i2976.streamingMipmapsRenderersPerFrame = i2977[34]
  i2976.resolutionScalingFixedDPIFactor = i2977[35]
  i2976.streamingMipmapsMaxFileIORequests = i2977[36]
  i2976.currentQualityLevel = i2977[37]
  return i2976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i2984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i2985 = data
  i2984.AdditionalLightsPerObjectLimit = i2985[0]
  i2984.AdditionalLightsRenderingMode = i2985[1]
  i2984.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2985[2], i2984.LightRenderingMode)
  i2984.ColorGradingLutSize = i2985[3]
  i2984.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i2985[4], i2984.ColorGradingMode)
  i2984.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i2985[5], i2984.MainLightRenderingMode)
  i2984.MainLightShadowsSupported = !!i2985[6]
  i2984.MixedLightingSupported = !!i2985[7]
  i2984.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i2985[8], i2984.MsaaQuality)
  i2984.MSAA = i2985[9]
  i2984.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i2985[10], i2984.OpaqueDownsampling)
  i2984.RenderScale = i2985[11]
  i2984.RequireDepthTexture = !!i2985[12]
  i2984.RequireOpaqueTexture = !!i2985[13]
  i2984.ShadowAtlasResolution = i2985[14]
  i2984.ShadowDepthBias = i2985[15]
  i2984.SupportsHDR = !!i2985[16]
  i2984.SupportsTerrainHoles = !!i2985[17]
  return i2984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i2986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i2987 = data
  i2986.Disabled = i2987[0]
  i2986.PerVertex = i2987[1]
  i2986.PerPixel = i2987[2]
  return i2986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i2988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i2989 = data
  i2988.LowDynamicRange = i2989[0]
  i2988.HighDynamicRange = i2989[1]
  return i2988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i2990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i2991 = data
  i2990.Disabled = i2991[0]
  i2990._2x = i2991[1]
  i2990._4x = i2991[2]
  i2990._8x = i2991[3]
  return i2990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i2992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i2993 = data
  i2992.None = i2993[0]
  i2992._2xBilinear = i2993[1]
  i2992._4xBox = i2993[2]
  i2992._4xBilinear = i2993[3]
  return i2992
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2994 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2995 = data
  i2994.xPlacement = i2995[0]
  i2994.yPlacement = i2995[1]
  i2994.xAdvance = i2995[2]
  i2994.yAdvance = i2995[3]
  return i2994
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2996 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2997 = data
  i2996.m_GlyphIndex = i2997[0]
  i2996.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2997[1], i2996.m_GlyphValueRecord)
  return i2996
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2998 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2999 = data
  i2998.m_XPlacement = i2999[0]
  i2998.m_YPlacement = i2999[1]
  i2998.m_XAdvance = i2999[2]
  i2998.m_YAdvance = i2999[3]
  return i2998
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightShadowsSupported":6,"MixedLightingSupported":7,"MsaaQuality":8,"MSAA":9,"OpaqueDownsampling":10,"RenderScale":11,"RequireDepthTexture":12,"RequireOpaqueTexture":13,"ShadowAtlasResolution":14,"ShadowDepthBias":15,"SupportsHDR":16,"SupportsTerrainHoles":17},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3}}

Deserializers.requiredComponents = {"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[9],"85":[52],"22":[5],"86":[5],"87":[5],"88":[5],"89":[5],"90":[5],"91":[5],"92":[93],"94":[93],"95":[93],"96":[93],"97":[93],"98":[93],"99":[93],"100":[93],"101":[93],"102":[93],"103":[93],"104":[93],"105":[93],"106":[52],"107":[19],"108":[109],"110":[109],"51":[24],"111":[20],"112":[20],"113":[20],"114":[20],"115":[24],"116":[24],"54":[51],"29":[25,24],"117":[24],"53":[51],"118":[24],"119":[24],"120":[24],"121":[24],"122":[24],"123":[24],"124":[24],"125":[24],"126":[24],"127":[25,24],"128":[24],"129":[24],"130":[24],"48":[24],"131":[25,24],"132":[24],"133":[49],"134":[49],"50":[49],"135":[49],"136":[52],"137":[52],"138":[52],"139":[140],"141":[52],"65":[52],"15":[14],"142":[24],"143":[19,24],"27":[24,25],"144":[24],"145":[25,24],"146":[19],"147":[25,24],"148":[24],"149":[24],"150":[151],"152":[151],"153":[151]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","Fish","MapData","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.Texture2D","UnityEngine.SphereCollider","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","FishingLine","UnityEngine.CharacterJoint","RopeBridge","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Chest","ChestMover","UnityEngine.SpriteRenderer","FlockUnit","AudioManager","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEditor.Audio.AudioMixerGroupController","ChallengeManager","FishingHook","FishingRod","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","EnviromentEditor","ObjectMovement","OceanTrigger","UnityEngine.MeshCollider","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.TrailRenderer","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "58.9";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1170";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4515";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e1b50e58-89d4-40f3-9428-00cc0e741f0e";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

