var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i6336 = root || request.c( 'UnityEngine.JointSpring' )
  var i6337 = data
  i6336.spring = i6337[0]
  i6336.damper = i6337[1]
  i6336.targetPosition = i6337[2]
  return i6336
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i6338 = root || request.c( 'UnityEngine.JointMotor' )
  var i6339 = data
  i6338.m_TargetVelocity = i6339[0]
  i6338.m_Force = i6339[1]
  i6338.m_FreeSpin = i6339[2]
  return i6338
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i6340 = root || request.c( 'UnityEngine.JointLimits' )
  var i6341 = data
  i6340.m_Min = i6341[0]
  i6340.m_Max = i6341[1]
  i6340.m_Bounciness = i6341[2]
  i6340.m_BounceMinVelocity = i6341[3]
  i6340.m_ContactDistance = i6341[4]
  i6340.minBounce = i6341[5]
  i6340.maxBounce = i6341[6]
  return i6340
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i6342 = root || request.c( 'UnityEngine.JointDrive' )
  var i6343 = data
  i6342.m_PositionSpring = i6343[0]
  i6342.m_PositionDamper = i6343[1]
  i6342.m_MaximumForce = i6343[2]
  return i6342
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i6344 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i6345 = data
  i6344.m_Spring = i6345[0]
  i6344.m_Damper = i6345[1]
  return i6344
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i6346 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i6347 = data
  i6346.m_Limit = i6347[0]
  i6346.m_Bounciness = i6347[1]
  i6346.m_ContactDistance = i6347[2]
  return i6346
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i6348 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i6349 = data
  i6348.m_ExtremumSlip = i6349[0]
  i6348.m_ExtremumValue = i6349[1]
  i6348.m_AsymptoteSlip = i6349[2]
  i6348.m_AsymptoteValue = i6349[3]
  i6348.m_Stiffness = i6349[4]
  return i6348
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i6350 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i6351 = data
  i6350.m_LowerAngle = i6351[0]
  i6350.m_UpperAngle = i6351[1]
  return i6350
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i6352 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i6353 = data
  i6352.m_MotorSpeed = i6353[0]
  i6352.m_MaximumMotorTorque = i6353[1]
  return i6352
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i6354 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i6355 = data
  i6354.m_DampingRatio = i6355[0]
  i6354.m_Frequency = i6355[1]
  i6354.m_Angle = i6355[2]
  return i6354
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i6356 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i6357 = data
  i6356.m_LowerTranslation = i6357[0]
  i6356.m_UpperTranslation = i6357[1]
  return i6356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i6358 = root || new pc.UnityMaterial()
  var i6359 = data
  i6358.name = i6359[0]
  request.r(i6359[1], i6359[2], 0, i6358, 'shader')
  i6358.renderQueue = i6359[3]
  i6358.enableInstancing = !!i6359[4]
  var i6361 = i6359[5]
  var i6360 = []
  for(var i = 0; i < i6361.length; i += 1) {
    i6360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i6361[i + 0]) );
  }
  i6358.floatParameters = i6360
  var i6363 = i6359[6]
  var i6362 = []
  for(var i = 0; i < i6363.length; i += 1) {
    i6362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i6363[i + 0]) );
  }
  i6358.colorParameters = i6362
  var i6365 = i6359[7]
  var i6364 = []
  for(var i = 0; i < i6365.length; i += 1) {
    i6364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i6365[i + 0]) );
  }
  i6358.vectorParameters = i6364
  var i6367 = i6359[8]
  var i6366 = []
  for(var i = 0; i < i6367.length; i += 1) {
    i6366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i6367[i + 0]) );
  }
  i6358.textureParameters = i6366
  var i6369 = i6359[9]
  var i6368 = []
  for(var i = 0; i < i6369.length; i += 1) {
    i6368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i6369[i + 0]) );
  }
  i6358.materialFlags = i6368
  return i6358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i6372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i6373 = data
  i6372.name = i6373[0]
  i6372.value = i6373[1]
  return i6372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i6376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i6377 = data
  i6376.name = i6377[0]
  i6376.value = new pc.Color(i6377[1], i6377[2], i6377[3], i6377[4])
  return i6376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i6380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i6381 = data
  i6380.name = i6381[0]
  i6380.value = new pc.Vec4( i6381[1], i6381[2], i6381[3], i6381[4] )
  return i6380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i6384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i6385 = data
  i6384.name = i6385[0]
  request.r(i6385[1], i6385[2], 0, i6384, 'value')
  return i6384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i6388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i6389 = data
  i6388.name = i6389[0]
  i6388.enabled = !!i6389[1]
  return i6388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i6390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i6391 = data
  i6390.position = new pc.Vec3( i6391[0], i6391[1], i6391[2] )
  i6390.scale = new pc.Vec3( i6391[3], i6391[4], i6391[5] )
  i6390.rotation = new pc.Quat(i6391[6], i6391[7], i6391[8], i6391[9])
  return i6390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i6392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i6393 = data
  i6392.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i6393[0], i6392.main)
  i6392.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i6393[1], i6392.colorBySpeed)
  i6392.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i6393[2], i6392.colorOverLifetime)
  i6392.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i6393[3], i6392.emission)
  i6392.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i6393[4], i6392.rotationBySpeed)
  i6392.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i6393[5], i6392.rotationOverLifetime)
  i6392.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i6393[6], i6392.shape)
  i6392.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i6393[7], i6392.sizeBySpeed)
  i6392.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i6393[8], i6392.sizeOverLifetime)
  i6392.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i6393[9], i6392.textureSheetAnimation)
  i6392.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i6393[10], i6392.velocityOverLifetime)
  i6392.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i6393[11], i6392.noise)
  i6392.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i6393[12], i6392.inheritVelocity)
  i6392.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i6393[13], i6392.forceOverLifetime)
  i6392.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i6393[14], i6392.limitVelocityOverLifetime)
  i6392.useAutoRandomSeed = !!i6393[15]
  i6392.randomSeed = i6393[16]
  return i6392
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i6394 = root || new pc.ParticleSystemMain()
  var i6395 = data
  i6394.duration = i6395[0]
  i6394.loop = !!i6395[1]
  i6394.prewarm = !!i6395[2]
  i6394.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[3], i6394.startDelay)
  i6394.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[4], i6394.startLifetime)
  i6394.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[5], i6394.startSpeed)
  i6394.startSize3D = !!i6395[6]
  i6394.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[7], i6394.startSizeX)
  i6394.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[8], i6394.startSizeY)
  i6394.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[9], i6394.startSizeZ)
  i6394.startRotation3D = !!i6395[10]
  i6394.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[11], i6394.startRotationX)
  i6394.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[12], i6394.startRotationY)
  i6394.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[13], i6394.startRotationZ)
  i6394.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6395[14], i6394.startColor)
  i6394.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6395[15], i6394.gravityModifier)
  i6394.simulationSpace = i6395[16]
  request.r(i6395[17], i6395[18], 0, i6394, 'customSimulationSpace')
  i6394.simulationSpeed = i6395[19]
  i6394.useUnscaledTime = !!i6395[20]
  i6394.scalingMode = i6395[21]
  i6394.playOnAwake = !!i6395[22]
  i6394.maxParticles = i6395[23]
  i6394.emitterVelocityMode = i6395[24]
  i6394.stopAction = i6395[25]
  return i6394
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i6396 = root || new pc.MinMaxCurve()
  var i6397 = data
  i6396.mode = i6397[0]
  i6396.curveMin = new pc.AnimationCurve( { keys_flow: i6397[1] } )
  i6396.curveMax = new pc.AnimationCurve( { keys_flow: i6397[2] } )
  i6396.curveMultiplier = i6397[3]
  i6396.constantMin = i6397[4]
  i6396.constantMax = i6397[5]
  return i6396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i6398 = root || new pc.MinMaxGradient()
  var i6399 = data
  i6398.mode = i6399[0]
  i6398.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6399[1], i6398.gradientMin)
  i6398.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i6399[2], i6398.gradientMax)
  i6398.colorMin = new pc.Color(i6399[3], i6399[4], i6399[5], i6399[6])
  i6398.colorMax = new pc.Color(i6399[7], i6399[8], i6399[9], i6399[10])
  return i6398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i6400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i6401 = data
  i6400.mode = i6401[0]
  var i6403 = i6401[1]
  var i6402 = []
  for(var i = 0; i < i6403.length; i += 1) {
    i6402.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i6403[i + 0]) );
  }
  i6400.colorKeys = i6402
  var i6405 = i6401[2]
  var i6404 = []
  for(var i = 0; i < i6405.length; i += 1) {
    i6404.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i6405[i + 0]) );
  }
  i6400.alphaKeys = i6404
  return i6400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i6406 = root || new pc.ParticleSystemColorBySpeed()
  var i6407 = data
  i6406.enabled = !!i6407[0]
  i6406.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6407[1], i6406.color)
  i6406.range = new pc.Vec2( i6407[2], i6407[3] )
  return i6406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i6410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i6411 = data
  i6410.color = new pc.Color(i6411[0], i6411[1], i6411[2], i6411[3])
  i6410.time = i6411[4]
  return i6410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i6414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i6415 = data
  i6414.alpha = i6415[0]
  i6414.time = i6415[1]
  return i6414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i6416 = root || new pc.ParticleSystemColorOverLifetime()
  var i6417 = data
  i6416.enabled = !!i6417[0]
  i6416.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i6417[1], i6416.color)
  return i6416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i6418 = root || new pc.ParticleSystemEmitter()
  var i6419 = data
  i6418.enabled = !!i6419[0]
  i6418.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6419[1], i6418.rateOverTime)
  i6418.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6419[2], i6418.rateOverDistance)
  var i6421 = i6419[3]
  var i6420 = []
  for(var i = 0; i < i6421.length; i += 1) {
    i6420.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i6421[i + 0]) );
  }
  i6418.bursts = i6420
  return i6418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i6424 = root || new pc.ParticleSystemBurst()
  var i6425 = data
  i6424.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6425[0], i6424.count)
  i6424.cycleCount = i6425[1]
  i6424.minCount = i6425[2]
  i6424.maxCount = i6425[3]
  i6424.repeatInterval = i6425[4]
  i6424.time = i6425[5]
  return i6424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i6426 = root || new pc.ParticleSystemRotationBySpeed()
  var i6427 = data
  i6426.enabled = !!i6427[0]
  i6426.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6427[1], i6426.x)
  i6426.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6427[2], i6426.y)
  i6426.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6427[3], i6426.z)
  i6426.separateAxes = !!i6427[4]
  i6426.range = new pc.Vec2( i6427[5], i6427[6] )
  return i6426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i6428 = root || new pc.ParticleSystemRotationOverLifetime()
  var i6429 = data
  i6428.enabled = !!i6429[0]
  i6428.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6429[1], i6428.x)
  i6428.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6429[2], i6428.y)
  i6428.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6429[3], i6428.z)
  i6428.separateAxes = !!i6429[4]
  return i6428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i6430 = root || new pc.ParticleSystemShape()
  var i6431 = data
  i6430.enabled = !!i6431[0]
  i6430.shapeType = i6431[1]
  i6430.randomDirectionAmount = i6431[2]
  i6430.sphericalDirectionAmount = i6431[3]
  i6430.randomPositionAmount = i6431[4]
  i6430.alignToDirection = !!i6431[5]
  i6430.radius = i6431[6]
  i6430.radiusMode = i6431[7]
  i6430.radiusSpread = i6431[8]
  i6430.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6431[9], i6430.radiusSpeed)
  i6430.radiusThickness = i6431[10]
  i6430.angle = i6431[11]
  i6430.length = i6431[12]
  i6430.boxThickness = new pc.Vec3( i6431[13], i6431[14], i6431[15] )
  i6430.meshShapeType = i6431[16]
  request.r(i6431[17], i6431[18], 0, i6430, 'mesh')
  request.r(i6431[19], i6431[20], 0, i6430, 'meshRenderer')
  request.r(i6431[21], i6431[22], 0, i6430, 'skinnedMeshRenderer')
  i6430.useMeshMaterialIndex = !!i6431[23]
  i6430.meshMaterialIndex = i6431[24]
  i6430.useMeshColors = !!i6431[25]
  i6430.normalOffset = i6431[26]
  i6430.arc = i6431[27]
  i6430.arcMode = i6431[28]
  i6430.arcSpread = i6431[29]
  i6430.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6431[30], i6430.arcSpeed)
  i6430.donutRadius = i6431[31]
  i6430.position = new pc.Vec3( i6431[32], i6431[33], i6431[34] )
  i6430.rotation = new pc.Vec3( i6431[35], i6431[36], i6431[37] )
  i6430.scale = new pc.Vec3( i6431[38], i6431[39], i6431[40] )
  return i6430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i6432 = root || new pc.ParticleSystemSizeBySpeed()
  var i6433 = data
  i6432.enabled = !!i6433[0]
  i6432.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6433[1], i6432.x)
  i6432.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6433[2], i6432.y)
  i6432.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6433[3], i6432.z)
  i6432.separateAxes = !!i6433[4]
  i6432.range = new pc.Vec2( i6433[5], i6433[6] )
  return i6432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i6434 = root || new pc.ParticleSystemSizeOverLifetime()
  var i6435 = data
  i6434.enabled = !!i6435[0]
  i6434.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6435[1], i6434.x)
  i6434.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6435[2], i6434.y)
  i6434.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6435[3], i6434.z)
  i6434.separateAxes = !!i6435[4]
  return i6434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i6436 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i6437 = data
  i6436.enabled = !!i6437[0]
  i6436.mode = i6437[1]
  i6436.animation = i6437[2]
  i6436.numTilesX = i6437[3]
  i6436.numTilesY = i6437[4]
  i6436.useRandomRow = !!i6437[5]
  i6436.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6437[6], i6436.frameOverTime)
  i6436.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6437[7], i6436.startFrame)
  i6436.cycleCount = i6437[8]
  i6436.rowIndex = i6437[9]
  i6436.flipU = i6437[10]
  i6436.flipV = i6437[11]
  i6436.spriteCount = i6437[12]
  var i6439 = i6437[13]
  var i6438 = []
  for(var i = 0; i < i6439.length; i += 2) {
  request.r(i6439[i + 0], i6439[i + 1], 2, i6438, '')
  }
  i6436.sprites = i6438
  return i6436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i6442 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i6443 = data
  i6442.enabled = !!i6443[0]
  i6442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6443[1], i6442.x)
  i6442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6443[2], i6442.y)
  i6442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6443[3], i6442.z)
  i6442.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6443[4], i6442.speedModifier)
  i6442.space = i6443[5]
  return i6442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i6444 = root || new pc.ParticleSystemNoise()
  var i6445 = data
  i6444.enabled = !!i6445[0]
  i6444.separateAxes = !!i6445[1]
  i6444.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[2], i6444.strengthX)
  i6444.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[3], i6444.strengthY)
  i6444.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[4], i6444.strengthZ)
  i6444.frequency = i6445[5]
  i6444.damping = !!i6445[6]
  i6444.octaveCount = i6445[7]
  i6444.octaveMultiplier = i6445[8]
  i6444.octaveScale = i6445[9]
  i6444.quality = i6445[10]
  i6444.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[11], i6444.scrollSpeed)
  i6444.scrollSpeedMultiplier = i6445[12]
  i6444.remapEnabled = !!i6445[13]
  i6444.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[14], i6444.remapX)
  i6444.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[15], i6444.remapY)
  i6444.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[16], i6444.remapZ)
  i6444.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[17], i6444.positionAmount)
  i6444.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[18], i6444.rotationAmount)
  i6444.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6445[19], i6444.sizeAmount)
  return i6444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i6446 = root || new pc.ParticleSystemInheritVelocity()
  var i6447 = data
  i6446.enabled = !!i6447[0]
  i6446.mode = i6447[1]
  i6446.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6447[2], i6446.curve)
  return i6446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i6448 = root || new pc.ParticleSystemForceOverLifetime()
  var i6449 = data
  i6448.enabled = !!i6449[0]
  i6448.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6449[1], i6448.x)
  i6448.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6449[2], i6448.y)
  i6448.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6449[3], i6448.z)
  i6448.space = i6449[4]
  i6448.randomized = !!i6449[5]
  return i6448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i6450 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i6451 = data
  i6450.enabled = !!i6451[0]
  i6450.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6451[1], i6450.limitX)
  i6450.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6451[2], i6450.limitY)
  i6450.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6451[3], i6450.limitZ)
  i6450.dampen = i6451[4]
  i6450.separateAxes = !!i6451[5]
  i6450.space = i6451[6]
  i6450.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i6451[7], i6450.drag)
  i6450.multiplyDragByParticleSize = !!i6451[8]
  i6450.multiplyDragByParticleVelocity = !!i6451[9]
  return i6450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i6452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i6453 = data
  i6452.enabled = !!i6453[0]
  request.r(i6453[1], i6453[2], 0, i6452, 'sharedMaterial')
  var i6455 = i6453[3]
  var i6454 = []
  for(var i = 0; i < i6455.length; i += 2) {
  request.r(i6455[i + 0], i6455[i + 1], 2, i6454, '')
  }
  i6452.sharedMaterials = i6454
  i6452.receiveShadows = !!i6453[4]
  i6452.shadowCastingMode = i6453[5]
  i6452.sortingLayerID = i6453[6]
  i6452.sortingOrder = i6453[7]
  i6452.lightmapIndex = i6453[8]
  i6452.lightmapSceneIndex = i6453[9]
  i6452.lightmapScaleOffset = new pc.Vec4( i6453[10], i6453[11], i6453[12], i6453[13] )
  i6452.lightProbeUsage = i6453[14]
  i6452.reflectionProbeUsage = i6453[15]
  request.r(i6453[16], i6453[17], 0, i6452, 'mesh')
  i6452.meshCount = i6453[18]
  i6452.activeVertexStreamsCount = i6453[19]
  i6452.alignment = i6453[20]
  i6452.renderMode = i6453[21]
  i6452.sortMode = i6453[22]
  i6452.lengthScale = i6453[23]
  i6452.velocityScale = i6453[24]
  i6452.cameraVelocityScale = i6453[25]
  i6452.normalDirection = i6453[26]
  i6452.sortingFudge = i6453[27]
  i6452.minParticleSize = i6453[28]
  i6452.maxParticleSize = i6453[29]
  i6452.pivot = new pc.Vec3( i6453[30], i6453[31], i6453[32] )
  request.r(i6453[33], i6453[34], 0, i6452, 'trailMaterial')
  return i6452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i6458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i6459 = data
  i6458.name = i6459[0]
  i6458.tag = i6459[1]
  i6458.enabled = !!i6459[2]
  i6458.isStatic = !!i6459[3]
  i6458.layer = i6459[4]
  return i6458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i6460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i6461 = data
  i6460.name = i6461[0]
  i6460.width = i6461[1]
  i6460.height = i6461[2]
  i6460.mipmapCount = i6461[3]
  i6460.anisoLevel = i6461[4]
  i6460.filterMode = i6461[5]
  i6460.hdr = !!i6461[6]
  i6460.format = i6461[7]
  i6460.wrapMode = i6461[8]
  i6460.alphaIsTransparency = !!i6461[9]
  i6460.alphaSource = i6461[10]
  return i6460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i6462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i6463 = data
  request.r(i6463[0], i6463[1], 0, i6462, 'sharedMesh')
  return i6462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i6464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i6465 = data
  request.r(i6465[0], i6465[1], 0, i6464, 'additionalVertexStreams')
  i6464.enabled = !!i6465[2]
  request.r(i6465[3], i6465[4], 0, i6464, 'sharedMaterial')
  var i6467 = i6465[5]
  var i6466 = []
  for(var i = 0; i < i6467.length; i += 2) {
  request.r(i6467[i + 0], i6467[i + 1], 2, i6466, '')
  }
  i6464.sharedMaterials = i6466
  i6464.receiveShadows = !!i6465[6]
  i6464.shadowCastingMode = i6465[7]
  i6464.sortingLayerID = i6465[8]
  i6464.sortingOrder = i6465[9]
  i6464.lightmapIndex = i6465[10]
  i6464.lightmapSceneIndex = i6465[11]
  i6464.lightmapScaleOffset = new pc.Vec4( i6465[12], i6465[13], i6465[14], i6465[15] )
  i6464.lightProbeUsage = i6465[16]
  i6464.reflectionProbeUsage = i6465[17]
  return i6464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i6468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i6469 = data
  i6468.name = i6469[0]
  i6468.halfPrecision = !!i6469[1]
  i6468.vertexCount = i6469[2]
  i6468.aabb = i6469[3]
  var i6471 = i6469[4]
  var i6470 = []
  for(var i = 0; i < i6471.length; i += 1) {
    i6470.push( !!i6471[i + 0] );
  }
  i6468.streams = i6470
  i6468.vertices = i6469[5]
  var i6473 = i6469[6]
  var i6472 = []
  for(var i = 0; i < i6473.length; i += 1) {
    i6472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i6473[i + 0]) );
  }
  i6468.subMeshes = i6472
  var i6475 = i6469[7]
  var i6474 = []
  for(var i = 0; i < i6475.length; i += 16) {
    i6474.push( new pc.Mat4().setData(i6475[i + 0], i6475[i + 1], i6475[i + 2], i6475[i + 3],  i6475[i + 4], i6475[i + 5], i6475[i + 6], i6475[i + 7],  i6475[i + 8], i6475[i + 9], i6475[i + 10], i6475[i + 11],  i6475[i + 12], i6475[i + 13], i6475[i + 14], i6475[i + 15]) );
  }
  i6468.bindposes = i6474
  var i6477 = i6469[8]
  var i6476 = []
  for(var i = 0; i < i6477.length; i += 1) {
    i6476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i6477[i + 0]) );
  }
  i6468.blendShapes = i6476
  return i6468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i6482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i6483 = data
  i6482.triangles = i6483[0]
  return i6482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i6488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i6489 = data
  i6488.name = i6489[0]
  var i6491 = i6489[1]
  var i6490 = []
  for(var i = 0; i < i6491.length; i += 1) {
    i6490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i6491[i + 0]) );
  }
  i6488.frames = i6490
  return i6488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i6492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i6493 = data
  i6492.textureMode = i6493[0]
  i6492.alignment = i6493[1]
  i6492.widthCurve = new pc.AnimationCurve( { keys_flow: i6493[2] } )
  i6492.colorGradient = i6493[3] ? new pc.ColorGradient(i6493[3][0], i6493[3][1], i6493[3][2]) : null
  var i6495 = i6493[4]
  var i6494 = []
  for(var i = 0; i < i6495.length; i += 3) {
    i6494.push( new pc.Vec3( i6495[i + 0], i6495[i + 1], i6495[i + 2] ) );
  }
  i6492.positions = i6494
  i6492.positionCount = i6493[5]
  i6492.widthMultiplier = i6493[6]
  i6492.startWidth = i6493[7]
  i6492.endWidth = i6493[8]
  i6492.numCornerVertices = i6493[9]
  i6492.numCapVertices = i6493[10]
  i6492.useWorldSpace = !!i6493[11]
  i6492.loop = !!i6493[12]
  i6492.startColor = new pc.Color(i6493[13], i6493[14], i6493[15], i6493[16])
  i6492.endColor = new pc.Color(i6493[17], i6493[18], i6493[19], i6493[20])
  i6492.generateLightingData = !!i6493[21]
  i6492.enabled = !!i6493[22]
  request.r(i6493[23], i6493[24], 0, i6492, 'sharedMaterial')
  var i6497 = i6493[25]
  var i6496 = []
  for(var i = 0; i < i6497.length; i += 2) {
  request.r(i6497[i + 0], i6497[i + 1], 2, i6496, '')
  }
  i6492.sharedMaterials = i6496
  i6492.receiveShadows = !!i6493[26]
  i6492.shadowCastingMode = i6493[27]
  i6492.sortingLayerID = i6493[28]
  i6492.sortingOrder = i6493[29]
  i6492.lightmapIndex = i6493[30]
  i6492.lightmapSceneIndex = i6493[31]
  i6492.lightmapScaleOffset = new pc.Vec4( i6493[32], i6493[33], i6493[34], i6493[35] )
  i6492.lightProbeUsage = i6493[36]
  i6492.reflectionProbeUsage = i6493[37]
  return i6492
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i6500 = root || request.c( 'RopeBridge' )
  var i6501 = data
  request.r(i6501[0], i6501[1], 0, i6500, 'StartPoint')
  request.r(i6501[2], i6501[3], 0, i6500, 'EndPoint')
  i6500.ropeSegLen = i6501[4]
  i6500.segmentLength = i6501[5]
  i6500.lineWidth = i6501[6]
  i6500.distOfStartToEnd = i6501[7]
  i6500.lineLengthMultifly = i6501[8]
  return i6500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i6502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i6503 = data
  request.r(i6503[0], i6503[1], 0, i6502, 'animatorController')
  i6502.updateMode = i6503[2]
  var i6505 = i6503[3]
  var i6504 = []
  for(var i = 0; i < i6505.length; i += 2) {
  request.r(i6505[i + 0], i6505[i + 1], 2, i6504, '')
  }
  i6502.humanBones = i6504
  i6502.enabled = !!i6503[4]
  return i6502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i6508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i6509 = data
  i6508.playAutomatically = !!i6509[0]
  request.r(i6509[1], i6509[2], 0, i6508, 'clip')
  var i6511 = i6509[3]
  var i6510 = []
  for(var i = 0; i < i6511.length; i += 2) {
  request.r(i6511[i + 0], i6511[i + 1], 2, i6510, '')
  }
  i6508.clips = i6510
  i6508.wrapMode = i6509[4]
  i6508.enabled = !!i6509[5]
  return i6508
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i6514 = root || request.c( 'AnimationController' )
  var i6515 = data
  return i6514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i6516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i6517 = data
  i6516.center = new pc.Vec3( i6517[0], i6517[1], i6517[2] )
  i6516.size = new pc.Vec3( i6517[3], i6517[4], i6517[5] )
  i6516.enabled = !!i6517[6]
  i6516.isTrigger = !!i6517[7]
  request.r(i6517[8], i6517[9], 0, i6516, 'material')
  return i6516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i6518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i6519 = data
  i6518.enabled = !!i6519[0]
  request.r(i6519[1], i6519[2], 0, i6518, 'sharedMaterial')
  var i6521 = i6519[3]
  var i6520 = []
  for(var i = 0; i < i6521.length; i += 2) {
  request.r(i6521[i + 0], i6521[i + 1], 2, i6520, '')
  }
  i6518.sharedMaterials = i6520
  i6518.receiveShadows = !!i6519[4]
  i6518.shadowCastingMode = i6519[5]
  i6518.sortingLayerID = i6519[6]
  i6518.sortingOrder = i6519[7]
  i6518.lightmapIndex = i6519[8]
  i6518.lightmapSceneIndex = i6519[9]
  i6518.lightmapScaleOffset = new pc.Vec4( i6519[10], i6519[11], i6519[12], i6519[13] )
  i6518.lightProbeUsage = i6519[14]
  i6518.reflectionProbeUsage = i6519[15]
  request.r(i6519[16], i6519[17], 0, i6518, 'sharedMesh')
  var i6523 = i6519[18]
  var i6522 = []
  for(var i = 0; i < i6523.length; i += 2) {
  request.r(i6523[i + 0], i6523[i + 1], 2, i6522, '')
  }
  i6518.bones = i6522
  i6518.updateWhenOffscreen = !!i6519[19]
  i6518.localBounds = i6519[20]
  request.r(i6519[21], i6519[22], 0, i6518, 'rootBone')
  var i6525 = i6519[23]
  var i6524 = []
  for(var i = 0; i < i6525.length; i += 1) {
    i6524.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i6525[i + 0]) );
  }
  i6518.blendShapesWeights = i6524
  return i6518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i6528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i6529 = data
  i6528.weight = i6529[0]
  return i6528
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i6530 = root || request.c( 'FishingLine' )
  var i6531 = data
  request.r(i6531[0], i6531[1], 0, i6530, 'line')
  request.r(i6531[2], i6531[3], 0, i6530, 'startPoint')
  request.r(i6531[4], i6531[5], 0, i6530, 'endPoint')
  return i6530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i6532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i6533 = data
  i6532.mass = i6533[0]
  i6532.drag = i6533[1]
  i6532.angularDrag = i6533[2]
  i6532.useGravity = !!i6533[3]
  i6532.isKinematic = !!i6533[4]
  i6532.constraints = i6533[5]
  i6532.maxAngularVelocity = i6533[6]
  i6532.collisionDetectionMode = i6533[7]
  i6532.interpolation = i6533[8]
  return i6532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i6534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i6535 = data
  i6534.swingAxis = new pc.Vec3( i6535[0], i6535[1], i6535[2] )
  i6534.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i6535[3], i6534.twistLimitSpring)
  i6534.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i6535[4], i6534.swingLimitSpring)
  i6534.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i6535[5], i6534.lowTwistLimit)
  i6534.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i6535[6], i6534.highTwistLimit)
  i6534.swing1Limit = request.d('UnityEngine.SoftJointLimit', i6535[7], i6534.swing1Limit)
  i6534.swing2Limit = request.d('UnityEngine.SoftJointLimit', i6535[8], i6534.swing2Limit)
  request.r(i6535[9], i6535[10], 0, i6534, 'connectedBody')
  i6534.axis = new pc.Vec3( i6535[11], i6535[12], i6535[13] )
  i6534.anchor = new pc.Vec3( i6535[14], i6535[15], i6535[16] )
  i6534.connectedAnchor = new pc.Vec3( i6535[17], i6535[18], i6535[19] )
  i6534.autoConfigureConnectedAnchor = !!i6535[20]
  i6534.massScale = i6535[21]
  i6534.connectedMassScale = i6535[22]
  i6534.enableCollision = !!i6535[23]
  i6534.breakForce = i6535[24]
  i6534.breakTorque = i6535[25]
  return i6534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i6538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i6539 = data
  i6538.weight = i6539[0]
  i6538.vertices = i6539[1]
  i6538.normals = i6539[2]
  i6538.tangents = i6539[3]
  return i6538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i6540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i6541 = data
  i6540.pivot = new pc.Vec2( i6541[0], i6541[1] )
  i6540.anchorMin = new pc.Vec2( i6541[2], i6541[3] )
  i6540.anchorMax = new pc.Vec2( i6541[4], i6541[5] )
  i6540.sizeDelta = new pc.Vec2( i6541[6], i6541[7] )
  i6540.anchoredPosition3D = new pc.Vec3( i6541[8], i6541[9], i6541[10] )
  i6540.rotation = new pc.Quat(i6541[11], i6541[12], i6541[13], i6541[14])
  i6540.scale = new pc.Vec3( i6541[15], i6541[16], i6541[17] )
  return i6540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i6542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i6543 = data
  i6542.cullTransparentMesh = !!i6543[0]
  return i6542
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i6544 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i6545 = data
  i6544.m_hasFontAssetChanged = !!i6545[0]
  request.r(i6545[1], i6545[2], 0, i6544, 'm_baseMaterial')
  i6544.m_maskOffset = new pc.Vec4( i6545[3], i6545[4], i6545[5], i6545[6] )
  i6544.m_text = i6545[7]
  i6544.m_isRightToLeft = !!i6545[8]
  request.r(i6545[9], i6545[10], 0, i6544, 'm_fontAsset')
  request.r(i6545[11], i6545[12], 0, i6544, 'm_sharedMaterial')
  var i6547 = i6545[13]
  var i6546 = []
  for(var i = 0; i < i6547.length; i += 2) {
  request.r(i6547[i + 0], i6547[i + 1], 2, i6546, '')
  }
  i6544.m_fontSharedMaterials = i6546
  request.r(i6545[14], i6545[15], 0, i6544, 'm_fontMaterial')
  var i6549 = i6545[16]
  var i6548 = []
  for(var i = 0; i < i6549.length; i += 2) {
  request.r(i6549[i + 0], i6549[i + 1], 2, i6548, '')
  }
  i6544.m_fontMaterials = i6548
  i6544.m_fontColor32 = UnityEngine.Color32.ConstructColor(i6545[17], i6545[18], i6545[19], i6545[20])
  i6544.m_fontColor = new pc.Color(i6545[21], i6545[22], i6545[23], i6545[24])
  i6544.m_enableVertexGradient = !!i6545[25]
  i6544.m_colorMode = i6545[26]
  i6544.m_fontColorGradient = request.d('TMPro.VertexGradient', i6545[27], i6544.m_fontColorGradient)
  request.r(i6545[28], i6545[29], 0, i6544, 'm_fontColorGradientPreset')
  request.r(i6545[30], i6545[31], 0, i6544, 'm_spriteAsset')
  i6544.m_tintAllSprites = !!i6545[32]
  request.r(i6545[33], i6545[34], 0, i6544, 'm_StyleSheet')
  i6544.m_TextStyleHashCode = i6545[35]
  i6544.m_overrideHtmlColors = !!i6545[36]
  i6544.m_faceColor = UnityEngine.Color32.ConstructColor(i6545[37], i6545[38], i6545[39], i6545[40])
  i6544.m_fontSize = i6545[41]
  i6544.m_fontSizeBase = i6545[42]
  i6544.m_fontWeight = i6545[43]
  i6544.m_enableAutoSizing = !!i6545[44]
  i6544.m_fontSizeMin = i6545[45]
  i6544.m_fontSizeMax = i6545[46]
  i6544.m_fontStyle = i6545[47]
  i6544.m_HorizontalAlignment = i6545[48]
  i6544.m_VerticalAlignment = i6545[49]
  i6544.m_textAlignment = i6545[50]
  i6544.m_characterSpacing = i6545[51]
  i6544.m_wordSpacing = i6545[52]
  i6544.m_lineSpacing = i6545[53]
  i6544.m_lineSpacingMax = i6545[54]
  i6544.m_paragraphSpacing = i6545[55]
  i6544.m_charWidthMaxAdj = i6545[56]
  i6544.m_enableWordWrapping = !!i6545[57]
  i6544.m_wordWrappingRatios = i6545[58]
  i6544.m_overflowMode = i6545[59]
  request.r(i6545[60], i6545[61], 0, i6544, 'm_linkedTextComponent')
  request.r(i6545[62], i6545[63], 0, i6544, 'parentLinkedComponent')
  i6544.m_enableKerning = !!i6545[64]
  i6544.m_enableExtraPadding = !!i6545[65]
  i6544.checkPaddingRequired = !!i6545[66]
  i6544.m_isRichText = !!i6545[67]
  i6544.m_parseCtrlCharacters = !!i6545[68]
  i6544.m_isOrthographic = !!i6545[69]
  i6544.m_isCullingEnabled = !!i6545[70]
  i6544.m_horizontalMapping = i6545[71]
  i6544.m_verticalMapping = i6545[72]
  i6544.m_uvLineOffset = i6545[73]
  i6544.m_geometrySortingOrder = i6545[74]
  i6544.m_IsTextObjectScaleStatic = !!i6545[75]
  i6544.m_VertexBufferAutoSizeReduction = !!i6545[76]
  i6544.m_useMaxVisibleDescender = !!i6545[77]
  i6544.m_pageToDisplay = i6545[78]
  i6544.m_margin = new pc.Vec4( i6545[79], i6545[80], i6545[81], i6545[82] )
  i6544.m_isUsingLegacyAnimationComponent = !!i6545[83]
  i6544.m_isVolumetricText = !!i6545[84]
  request.r(i6545[85], i6545[86], 0, i6544, 'm_Material')
  i6544.m_Maskable = !!i6545[87]
  i6544.m_Color = new pc.Color(i6545[88], i6545[89], i6545[90], i6545[91])
  i6544.m_RaycastTarget = !!i6545[92]
  i6544.m_RaycastPadding = new pc.Vec4( i6545[93], i6545[94], i6545[95], i6545[96] )
  return i6544
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i6550 = root || request.c( 'TMPro.VertexGradient' )
  var i6551 = data
  i6550.topLeft = new pc.Color(i6551[0], i6551[1], i6551[2], i6551[3])
  i6550.topRight = new pc.Color(i6551[4], i6551[5], i6551[6], i6551[7])
  i6550.bottomLeft = new pc.Color(i6551[8], i6551[9], i6551[10], i6551[11])
  i6550.bottomRight = new pc.Color(i6551[12], i6551[13], i6551[14], i6551[15])
  return i6550
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i6552 = root || request.c( 'UnityEngine.UI.Image' )
  var i6553 = data
  request.r(i6553[0], i6553[1], 0, i6552, 'm_Sprite')
  i6552.m_Type = i6553[2]
  i6552.m_PreserveAspect = !!i6553[3]
  i6552.m_FillCenter = !!i6553[4]
  i6552.m_FillMethod = i6553[5]
  i6552.m_FillAmount = i6553[6]
  i6552.m_FillClockwise = !!i6553[7]
  i6552.m_FillOrigin = i6553[8]
  i6552.m_UseSpriteMesh = !!i6553[9]
  i6552.m_PixelsPerUnitMultiplier = i6553[10]
  request.r(i6553[11], i6553[12], 0, i6552, 'm_Material')
  i6552.m_Maskable = !!i6553[13]
  i6552.m_Color = new pc.Color(i6553[14], i6553[15], i6553[16], i6553[17])
  i6552.m_RaycastTarget = !!i6553[18]
  i6552.m_RaycastPadding = new pc.Vec4( i6553[19], i6553[20], i6553[21], i6553[22] )
  return i6552
}

Deserializers["Fish"] = function (request, data, root) {
  var i6554 = root || request.c( 'Fish' )
  var i6555 = data
  i6554.fishType = request.d('FishType', i6555[0], i6554.fishType)
  request.r(i6555[1], i6555[2], 0, i6554, 'fishData')
  i6554.sensingRadius = i6555[3]
  i6554.moveSpeed = i6555[4]
  i6554.followTargetSpeed = i6555[5]
  i6554.rotationSpeed = i6555[6]
  request.r(i6555[7], i6555[8], 0, i6554, 'target')
  i6554.usingMapDataNumber = i6555[9]
  i6554.hooked = !!i6555[10]
  request.r(i6555[11], i6555[12], 0, i6554, 'rigid')
  i6554.dirToHook = new pc.Vec3( i6555[13], i6555[14], i6555[15] )
  request.r(i6555[16], i6555[17], 0, i6554, 'head')
  request.r(i6555[18], i6555[19], 0, i6554, 'mapData')
  request.r(i6555[20], i6555[21], 0, i6554, 'mousePoint')
  return i6554
}

Deserializers["FishType"] = function (request, data, root) {
  var i6556 = root || request.c( 'FishType' )
  var i6557 = data
  i6556.cost = i6557[0]
  i6556.tier = i6557[1]
  i6556.fishNumber = i6557[2]
  i6556.boundSize = new pc.Vec3( i6557[3], i6557[4], i6557[5] )
  return i6556
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i6558 = root || request.c( 'ChestMover' )
  var i6559 = data
  request.r(i6559[0], i6559[1], 0, i6558, 'chest')
  return i6558
}

Deserializers["Chest"] = function (request, data, root) {
  var i6560 = root || request.c( 'Chest' )
  var i6561 = data
  request.r(i6561[0], i6561[1], 0, i6560, 'chestMover')
  i6560.chestTier = i6561[2]
  request.r(i6561[3], i6561[4], 0, i6560, 'line')
  i6560.chestPullDist = i6561[5]
  i6560.pullForce = i6561[6]
  i6560.fishType = request.d('FishType', i6561[7], i6560.fishType)
  request.r(i6561[8], i6561[9], 0, i6560, 'fishData')
  i6560.sensingRadius = i6561[10]
  i6560.moveSpeed = i6561[11]
  i6560.followTargetSpeed = i6561[12]
  i6560.rotationSpeed = i6561[13]
  request.r(i6561[14], i6561[15], 0, i6560, 'target')
  i6560.usingMapDataNumber = i6561[16]
  i6560.hooked = !!i6561[17]
  request.r(i6561[18], i6561[19], 0, i6560, 'rigid2')
  request.r(i6561[20], i6561[21], 0, i6560, 'rigid')
  i6560.dirToHook = new pc.Vec3( i6561[22], i6561[23], i6561[24] )
  request.r(i6561[25], i6561[26], 0, i6560, 'head')
  request.r(i6561[27], i6561[28], 0, i6560, 'mapData')
  request.r(i6561[29], i6561[30], 0, i6560, 'mousePoint')
  return i6560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i6562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i6563 = data
  i6562.enabled = !!i6563[0]
  i6562.type = i6563[1]
  i6562.color = new pc.Color(i6563[2], i6563[3], i6563[4], i6563[5])
  i6562.cullingMask = i6563[6]
  i6562.intensity = i6563[7]
  i6562.range = i6563[8]
  i6562.spotAngle = i6563[9]
  i6562.shadows = i6563[10]
  i6562.shadowNormalBias = i6563[11]
  i6562.shadowBias = i6563[12]
  i6562.shadowStrength = i6563[13]
  i6562.shadowResolution = i6563[14]
  i6562.lightmapBakeType = i6563[15]
  i6562.renderMode = i6563[16]
  request.r(i6563[17], i6563[18], 0, i6562, 'cookie')
  i6562.cookieSize = i6563[19]
  return i6562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i6564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i6565 = data
  i6564.enabled = !!i6565[0]
  request.r(i6565[1], i6565[2], 0, i6564, 'sharedMaterial')
  var i6567 = i6565[3]
  var i6566 = []
  for(var i = 0; i < i6567.length; i += 2) {
  request.r(i6567[i + 0], i6567[i + 1], 2, i6566, '')
  }
  i6564.sharedMaterials = i6566
  i6564.receiveShadows = !!i6565[4]
  i6564.shadowCastingMode = i6565[5]
  i6564.sortingLayerID = i6565[6]
  i6564.sortingOrder = i6565[7]
  i6564.lightmapIndex = i6565[8]
  i6564.lightmapSceneIndex = i6565[9]
  i6564.lightmapScaleOffset = new pc.Vec4( i6565[10], i6565[11], i6565[12], i6565[13] )
  i6564.lightProbeUsage = i6565[14]
  i6564.reflectionProbeUsage = i6565[15]
  i6564.color = new pc.Color(i6565[16], i6565[17], i6565[18], i6565[19])
  request.r(i6565[20], i6565[21], 0, i6564, 'sprite')
  i6564.flipX = !!i6565[22]
  i6564.flipY = !!i6565[23]
  i6564.drawMode = i6565[24]
  i6564.size = new pc.Vec2( i6565[25], i6565[26] )
  i6564.tileMode = i6565[27]
  i6564.adaptiveModeThreshold = i6565[28]
  i6564.maskInteraction = i6565[29]
  i6564.spriteSortPoint = i6565[30]
  return i6564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i6568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i6569 = data
  i6568.name = i6569[0]
  i6568.atlasId = i6569[1]
  i6568.mipmapCount = i6569[2]
  i6568.hdr = !!i6569[3]
  i6568.size = i6569[4]
  i6568.anisoLevel = i6569[5]
  i6568.filterMode = i6569[6]
  i6568.wrapMode = i6569[7]
  var i6571 = i6569[8]
  var i6570 = []
  for(var i = 0; i < i6571.length; i += 4) {
    i6570.push( UnityEngine.Rect.MinMaxRect(i6571[i + 0], i6571[i + 1], i6571[i + 2], i6571[i + 3]) );
  }
  i6568.rects = i6570
  return i6568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i6574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i6575 = data
  i6574.name = i6575[0]
  i6574.index = i6575[1]
  i6574.startup = !!i6575[2]
  return i6574
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i6576 = root || request.c( 'LunaChallenge' )
  var i6577 = data
  i6576.challengeClear = !!i6577[0]
  request.r(i6577[1], i6577[2], 0, i6576, 'challengeObject')
  request.r(i6577[3], i6577[4], 0, i6576, 'challengeCount')
  request.r(i6577[5], i6577[6], 0, i6576, 'challengeClearObject')
  request.r(i6577[7], i6577[8], 0, i6576, 'challengeSlotObject')
  request.r(i6577[9], i6577[10], 0, i6576, 'tapToStartObject')
  request.r(i6577[11], i6577[12], 0, i6576, 'EndCard')
  i6576.goalCount = i6577[13]
  i6576.currentCount = i6577[14]
  return i6576
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i6578 = root || request.c( 'FishingRod' )
  var i6579 = data
  i6578.hookThrowForce = i6579[0]
  i6578.lineForce = i6579[1]
  i6578.maxPullingForce = i6579[2]
  i6578.minPullingForce = i6579[3]
  i6578.currentPullingForece = i6579[4]
  i6578.maxLine = i6579[5]
  i6578.pullingSpeed = i6579[6]
  i6578.playAdsPullCount = i6579[7]
  i6578.isStart = !!i6579[8]
  request.r(i6579[9], i6579[10], 0, i6578, 'hookRigid')
  request.r(i6579[11], i6579[12], 0, i6578, 'pivot')
  request.r(i6579[13], i6579[14], 0, i6578, 'touchToStartPanel')
  request.r(i6579[15], i6579[16], 0, i6578, 'rodAnimator')
  request.r(i6579[17], i6579[18], 0, i6578, 'fishingHook')
  request.r(i6579[19], i6579[20], 0, i6578, 'touchField')
  request.r(i6579[21], i6579[22], 0, i6578, 'upgradePanel')
  request.r(i6579[23], i6579[24], 0, i6578, 'upgradeButton')
  request.r(i6579[25], i6579[26], 0, i6578, 'depthText')
  request.r(i6579[27], i6579[28], 0, i6578, 'touchToPullPanel')
  request.r(i6579[29], i6579[30], 0, i6578, 'throwTarget1')
  request.r(i6579[31], i6579[32], 0, i6578, 'throwTarget2')
  request.r(i6579[33], i6579[34], 0, i6578, 'hookObject')
  request.r(i6579[35], i6579[36], 0, i6578, 'playerObject')
  request.r(i6579[37], i6579[38], 0, i6578, 'animationController')
  return i6578
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i6580 = root || request.c( 'FishingLogic' )
  var i6581 = data
  request.r(i6581[0], i6581[1], 0, i6580, 'joint')
  i6580.biteBate = !!i6581[2]
  i6580.pulling = !!i6581[3]
  i6580.enablePulling = !!i6581[4]
  request.r(i6581[5], i6581[6], 0, i6580, 'rodAnimator')
  request.r(i6581[7], i6581[8], 0, i6580, 'animationController')
  request.r(i6581[9], i6581[10], 0, i6580, 'startButton')
  request.r(i6581[11], i6581[12], 0, i6580, 'catchSlider')
  request.r(i6581[13], i6581[14], 0, i6580, 'catchButton')
  request.r(i6581[15], i6581[16], 0, i6580, 'fishingRod')
  request.r(i6581[17], i6581[18], 0, i6580, 'arrow')
  request.r(i6581[19], i6581[20], 0, i6580, 'fishingRodSkinned')
  request.r(i6581[21], i6581[22], 0, i6580, 'bubbleParticle')
  request.r(i6581[23], i6581[24], 0, i6580, 'hookRigid')
  request.r(i6581[25], i6581[26], 0, i6580, 'hook')
  return i6580
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i6582 = root || request.c( 'Upgrades' )
  var i6583 = data
  i6582.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i6583[0], i6582.lineLengthUpgrade)
  i6582.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i6583[1], i6582.hookMaxUpgrade)
  i6582.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i6583[2], i6582.hookMoveSpeedUpgrade)
  request.r(i6583[3], i6583[4], 0, i6582, 'hook')
  request.r(i6583[5], i6583[6], 0, i6582, 'rod')
  request.r(i6583[7], i6583[8], 0, i6582, 'touchField')
  request.r(i6583[9], i6583[10], 0, i6582, 'upgradePanel')
  request.r(i6583[11], i6583[12], 0, i6582, 'upgradeTap')
  request.r(i6583[13], i6583[14], 0, i6582, 'closeTap')
  request.r(i6583[15], i6583[16], 0, i6582, 'tapToStartText')
  return i6582
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i6584 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i6585 = data
  i6584.currentLevel = i6585[0]
  i6584.maxLevel = i6585[1]
  i6584.upgradeValue = i6585[2]
  i6584.upgradeNeedyCost = i6585[3]
  i6584.upgradeCostIncreaseValue = i6585[4]
  i6584.upgradeCostIncreaseValueMultifly = i6585[5]
  request.r(i6585[6], i6585[7], 0, i6584, 'levelText')
  request.r(i6585[8], i6585[9], 0, i6584, 'needyCostText')
  request.r(i6585[10], i6585[11], 0, i6584, 'cover')
  request.r(i6585[12], i6585[13], 0, i6584, 'rod')
  return i6584
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i6586 = root || request.c( 'Upgrades+CountUpgrade' )
  var i6587 = data
  i6586.currentLevel = i6587[0]
  i6586.maxLevel = i6587[1]
  i6586.upgradeValue = i6587[2]
  i6586.upgradeNeedyCost = i6587[3]
  i6586.upgradeCostIncreaseValue = i6587[4]
  i6586.upgradeCostIncreaseValueMultifly = i6587[5]
  request.r(i6587[6], i6587[7], 0, i6586, 'levelText')
  request.r(i6587[8], i6587[9], 0, i6586, 'needyCostText')
  request.r(i6587[10], i6587[11], 0, i6586, 'cover')
  request.r(i6587[12], i6587[13], 0, i6586, 'hook')
  return i6586
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i6588 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i6589 = data
  i6588.currentLevel = i6589[0]
  i6588.maxLevel = i6589[1]
  i6588.upgradeValue = i6589[2]
  i6588.upgradeNeedyCost = i6589[3]
  i6588.upgradeCostIncreaseValue = i6589[4]
  i6588.upgradeCostIncreaseValueMultifly = i6589[5]
  request.r(i6589[6], i6589[7], 0, i6588, 'levelText')
  request.r(i6589[8], i6589[9], 0, i6588, 'needyCostText')
  request.r(i6589[10], i6589[11], 0, i6588, 'cover')
  request.r(i6589[12], i6589[13], 0, i6588, 'touchField')
  return i6588
}

Deserializers["FishPool"] = function (request, data, root) {
  var i6590 = root || request.c( 'FishPool' )
  var i6591 = data
  i6590.oneTierFishList = request.d('FishList', i6591[0], i6590.oneTierFishList)
  i6590.twoTierFishList = request.d('FishList', i6591[1], i6590.twoTierFishList)
  i6590.threeTierFishList = request.d('FishList', i6591[2], i6590.threeTierFishList)
  i6590.fourTierFishList = request.d('FishList', i6591[3], i6590.fourTierFishList)
  i6590.fiveTierFishList = request.d('FishList', i6591[4], i6590.fiveTierFishList)
  i6590.chestList_one = request.d('FishList', i6591[5], i6590.chestList_one)
  i6590.chestList_two = request.d('FishList', i6591[6], i6590.chestList_two)
  i6590.chestList_three = request.d('FishList', i6591[7], i6590.chestList_three)
  i6590.chestMover = request.d('FishList', i6591[8], i6590.chestMover)
  var i6593 = i6591[9]
  var i6592 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i6593.length; i += 2) {
  request.r(i6593[i + 0], i6593[i + 1], 1, i6592, '')
  }
  i6590.generatedFishList = i6592
  request.r(i6591[10], i6591[11], 0, i6590, 'poolParent')
  return i6590
}

Deserializers["FishList"] = function (request, data, root) {
  var i6594 = root || request.c( 'FishList' )
  var i6595 = data
  var i6597 = i6595[0]
  var i6596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i6597.length; i += 2) {
  request.r(i6597[i + 0], i6597[i + 1], 1, i6596, '')
  }
  i6594.fishList = i6596
  var i6599 = i6595[1]
  var i6598 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i6599.length; i += 2) {
  request.r(i6599[i + 0], i6599[i + 1], 1, i6598, '')
  }
  i6594.spawnPoints = i6598
  return i6594
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i6606 = root || request.c( 'LowLineRenderer' )
  var i6607 = data
  request.r(i6607[0], i6607[1], 0, i6606, 'line')
  request.r(i6607[2], i6607[3], 0, i6606, 'start')
  request.r(i6607[4], i6607[5], 0, i6606, 'end')
  return i6606
}

Deserializers["DataManager"] = function (request, data, root) {
  var i6608 = root || request.c( 'DataManager' )
  var i6609 = data
  request.r(i6609[0], i6609[1], 0, i6608, 'setting')
  request.r(i6609[2], i6609[3], 0, i6608, 'soundSlider')
  request.r(i6609[4], i6609[5], 0, i6608, 'hapticSlider')
  i6608.gameDataFileName = i6609[6]
  i6608._gameData = request.d('GameData', i6609[7], i6608._gameData)
  request.r(i6609[8], i6609[9], 0, i6608, 'soundSliderHandleText')
  request.r(i6609[10], i6609[11], 0, i6608, 'hapticSliderHandleText')
  return i6608
}

Deserializers["GameData"] = function (request, data, root) {
  var i6610 = root || request.c( 'GameData' )
  var i6611 = data
  i6610.money = i6611[0]
  i6610.needleUpgrade = i6611[1]
  i6610.lineUpgrade = i6611[2]
  i6610.reelUpgrade = i6611[3]
  i6610.sound = i6611[4]
  i6610.haptic = i6611[5]
  return i6610
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i6612 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i6613 = data
  request.r(i6613[0], i6613[1], 0, i6612, 'm_FirstSelected')
  i6612.m_sendNavigationEvents = !!i6613[2]
  i6612.m_DragThreshold = i6613[3]
  return i6612
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i6614 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i6615 = data
  i6614.m_HorizontalAxis = i6615[0]
  i6614.m_VerticalAxis = i6615[1]
  i6614.m_SubmitButton = i6615[2]
  i6614.m_CancelButton = i6615[3]
  i6614.m_InputActionsPerSecond = i6615[4]
  i6614.m_RepeatDelay = i6615[5]
  i6614.m_ForceModuleActive = !!i6615[6]
  i6614.m_SendPointerHoverToParent = !!i6615[7]
  return i6614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i6616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i6617 = data
  i6616.enabled = !!i6617[0]
  i6616.planeDistance = i6617[1]
  i6616.referencePixelsPerUnit = i6617[2]
  i6616.isFallbackOverlay = !!i6617[3]
  i6616.renderMode = i6617[4]
  i6616.renderOrder = i6617[5]
  i6616.sortingLayerName = i6617[6]
  i6616.sortingOrder = i6617[7]
  i6616.scaleFactor = i6617[8]
  request.r(i6617[9], i6617[10], 0, i6616, 'worldCamera')
  i6616.overrideSorting = !!i6617[11]
  i6616.pixelPerfect = !!i6617[12]
  i6616.targetDisplay = i6617[13]
  i6616.overridePixelPerfect = !!i6617[14]
  return i6616
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i6618 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i6619 = data
  i6618.m_UiScaleMode = i6619[0]
  i6618.m_ReferencePixelsPerUnit = i6619[1]
  i6618.m_ScaleFactor = i6619[2]
  i6618.m_ReferenceResolution = new pc.Vec2( i6619[3], i6619[4] )
  i6618.m_ScreenMatchMode = i6619[5]
  i6618.m_MatchWidthOrHeight = i6619[6]
  i6618.m_PhysicalUnit = i6619[7]
  i6618.m_FallbackScreenDPI = i6619[8]
  i6618.m_DefaultSpriteDPI = i6619[9]
  i6618.m_DynamicPixelsPerUnit = i6619[10]
  i6618.m_PresetInfoIsWorld = !!i6619[11]
  return i6618
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i6620 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i6621 = data
  i6620.m_IgnoreReversedGraphics = !!i6621[0]
  i6620.m_BlockingObjects = i6621[1]
  i6620.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i6621[2] )
  return i6620
}

Deserializers["UIManager"] = function (request, data, root) {
  var i6622 = root || request.c( 'UIManager' )
  var i6623 = data
  request.r(i6623[0], i6623[1], 0, i6622, 'challengeTarget')
  request.r(i6623[2], i6623[3], 0, i6622, 'challengeText')
  request.r(i6623[4], i6623[5], 0, i6622, 'versionText')
  i6622.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6623[6] )
  i6622.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i6623[7] )
  request.r(i6623[8], i6623[9], 0, i6622, 'uiCamera')
  var i6625 = i6623[10]
  var i6624 = []
  for(var i = 0; i < i6625.length; i += 2) {
  request.r(i6625[i + 0], i6625[i + 1], 2, i6624, '')
  }
  i6622.pictureModeObjects = i6624
  return i6622
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i6628 = root || request.c( 'FixedTouchField' )
  var i6629 = data
  i6628.TouchDist = new pc.Vec2( i6629[0], i6629[1] )
  i6628.PointerOld = new pc.Vec2( i6629[2], i6629[3] )
  i6628.Pressed = !!i6629[4]
  i6628.hookMoveSpeed = i6629[5]
  request.r(i6629[6], i6629[7], 0, i6628, 'hook')
  request.r(i6629[8], i6629[9], 0, i6628, 'logic')
  request.r(i6629[10], i6629[11], 0, i6628, 'joystick_Background')
  request.r(i6629[12], i6629[13], 0, i6628, 'joystick_Handle')
  request.r(i6629[14], i6629[15], 0, i6628, 'canvas')
  request.r(i6629[16], i6629[17], 0, i6628, 'newCamera')
  i6628.clampDist = i6629[18]
  return i6628
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i6630 = root || request.c( 'UnityEngine.UI.Button' )
  var i6631 = data
  i6630.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i6631[0], i6630.m_OnClick)
  i6630.m_Navigation = request.d('UnityEngine.UI.Navigation', i6631[1], i6630.m_Navigation)
  i6630.m_Transition = i6631[2]
  i6630.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6631[3], i6630.m_Colors)
  i6630.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6631[4], i6630.m_SpriteState)
  i6630.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6631[5], i6630.m_AnimationTriggers)
  i6630.m_Interactable = !!i6631[6]
  request.r(i6631[7], i6631[8], 0, i6630, 'm_TargetGraphic')
  return i6630
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i6632 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i6633 = data
  i6632.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6633[0], i6632.m_PersistentCalls)
  return i6632
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i6634 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i6635 = data
  var i6637 = i6635[0]
  var i6636 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i6637.length; i += 1) {
    i6636.add(request.d('UnityEngine.Events.PersistentCall', i6637[i + 0]));
  }
  i6634.m_Calls = i6636
  return i6634
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i6640 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i6641 = data
  request.r(i6641[0], i6641[1], 0, i6640, 'm_Target')
  i6640.m_TargetAssemblyTypeName = i6641[2]
  i6640.m_MethodName = i6641[3]
  i6640.m_Mode = i6641[4]
  i6640.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i6641[5], i6640.m_Arguments)
  i6640.m_CallState = i6641[6]
  return i6640
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i6642 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i6643 = data
  request.r(i6643[0], i6643[1], 0, i6642, 'm_ObjectArgument')
  i6642.m_ObjectArgumentAssemblyTypeName = i6643[2]
  i6642.m_IntArgument = i6643[3]
  i6642.m_FloatArgument = i6643[4]
  i6642.m_StringArgument = i6643[5]
  i6642.m_BoolArgument = !!i6643[6]
  return i6642
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i6644 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i6645 = data
  i6644.m_Mode = i6645[0]
  i6644.m_WrapAround = !!i6645[1]
  request.r(i6645[2], i6645[3], 0, i6644, 'm_SelectOnUp')
  request.r(i6645[4], i6645[5], 0, i6644, 'm_SelectOnDown')
  request.r(i6645[6], i6645[7], 0, i6644, 'm_SelectOnLeft')
  request.r(i6645[8], i6645[9], 0, i6644, 'm_SelectOnRight')
  return i6644
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i6646 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i6647 = data
  i6646.m_NormalColor = new pc.Color(i6647[0], i6647[1], i6647[2], i6647[3])
  i6646.m_HighlightedColor = new pc.Color(i6647[4], i6647[5], i6647[6], i6647[7])
  i6646.m_PressedColor = new pc.Color(i6647[8], i6647[9], i6647[10], i6647[11])
  i6646.m_SelectedColor = new pc.Color(i6647[12], i6647[13], i6647[14], i6647[15])
  i6646.m_DisabledColor = new pc.Color(i6647[16], i6647[17], i6647[18], i6647[19])
  i6646.m_ColorMultiplier = i6647[20]
  i6646.m_FadeDuration = i6647[21]
  return i6646
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i6648 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i6649 = data
  request.r(i6649[0], i6649[1], 0, i6648, 'm_HighlightedSprite')
  request.r(i6649[2], i6649[3], 0, i6648, 'm_PressedSprite')
  request.r(i6649[4], i6649[5], 0, i6648, 'm_SelectedSprite')
  request.r(i6649[6], i6649[7], 0, i6648, 'm_DisabledSprite')
  return i6648
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i6650 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i6651 = data
  i6650.m_NormalTrigger = i6651[0]
  i6650.m_HighlightedTrigger = i6651[1]
  i6650.m_PressedTrigger = i6651[2]
  i6650.m_SelectedTrigger = i6651[3]
  i6650.m_DisabledTrigger = i6651[4]
  return i6650
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i6652 = root || request.c( 'UnityEngine.UI.Outline' )
  var i6653 = data
  i6652.m_EffectColor = new pc.Color(i6653[0], i6653[1], i6653[2], i6653[3])
  i6652.m_EffectDistance = new pc.Vec2( i6653[4], i6653[5] )
  i6652.m_UseGraphicAlpha = !!i6653[6]
  return i6652
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i6654 = root || request.c( 'UnityEngine.UI.Slider' )
  var i6655 = data
  request.r(i6655[0], i6655[1], 0, i6654, 'm_FillRect')
  request.r(i6655[2], i6655[3], 0, i6654, 'm_HandleRect')
  i6654.m_Direction = i6655[4]
  i6654.m_MinValue = i6655[5]
  i6654.m_MaxValue = i6655[6]
  i6654.m_WholeNumbers = !!i6655[7]
  i6654.m_Value = i6655[8]
  i6654.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i6655[9], i6654.m_OnValueChanged)
  i6654.m_Navigation = request.d('UnityEngine.UI.Navigation', i6655[10], i6654.m_Navigation)
  i6654.m_Transition = i6655[11]
  i6654.m_Colors = request.d('UnityEngine.UI.ColorBlock', i6655[12], i6654.m_Colors)
  i6654.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i6655[13], i6654.m_SpriteState)
  i6654.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i6655[14], i6654.m_AnimationTriggers)
  i6654.m_Interactable = !!i6655[15]
  request.r(i6655[16], i6655[17], 0, i6654, 'm_TargetGraphic')
  return i6654
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i6656 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i6657 = data
  i6656.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6657[0], i6656.m_PersistentCalls)
  return i6656
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i6658 = root || request.c( 'EnviromentEditor' )
  var i6659 = data
  i6658.oceanSpriteValueMultifly = i6659[0]
  i6658.sunLightIntensity = i6659[1]
  i6658.minSunLightIntensity = i6659[2]
  i6658.challengeLightIntensity = i6659[3]
  i6658.depthMaskTransparentValue = i6659[4]
  i6658.ambientLightIntensity = i6659[5]
  request.r(i6659[6], i6659[7], 0, i6658, 'hook')
  var i6661 = i6659[8]
  var i6660 = []
  for(var i = 0; i < i6661.length; i += 2) {
  request.r(i6661[i + 0], i6661[i + 1], 2, i6660, '')
  }
  i6658.Oceans = i6660
  request.r(i6659[9], i6659[10], 0, i6658, 'OceanSurface')
  request.r(i6659[11], i6659[12], 0, i6658, 'depthMask')
  request.r(i6659[13], i6659[14], 0, i6658, 'depthSprite')
  request.r(i6659[15], i6659[16], 0, i6658, 'depthMaskMat')
  request.r(i6659[17], i6659[18], 0, i6658, 'sunLights')
  request.r(i6659[19], i6659[20], 0, i6658, 'hookLight')
  request.r(i6659[21], i6659[22], 0, i6658, 'challengeLight')
  return i6658
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i6664 = root || request.c( 'ObjectMovement' )
  var i6665 = data
  i6664.moveX = i6665[0]
  i6664.moveSec = i6665[1]
  return i6664
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i6666 = root || request.c( 'OceanTrigger' )
  var i6667 = data
  request.r(i6667[0], i6667[1], 0, i6666, 'touchToPullButton')
  request.r(i6667[2], i6667[3], 0, i6666, 'waterSplashParticle')
  request.r(i6667[4], i6667[5], 0, i6666, 'bubbleParticle')
  request.r(i6667[6], i6667[7], 0, i6666, 'arrow')
  request.r(i6667[8], i6667[9], 0, i6666, 'rigid')
  request.r(i6667[10], i6667[11], 0, i6666, 'hook')
  request.r(i6667[12], i6667[13], 0, i6666, 'rod')
  return i6666
}

Deserializers["Flock"] = function (request, data, root) {
  var i6668 = root || request.c( 'Flock' )
  var i6669 = data
  request.r(i6669[0], i6669[1], 0, i6668, 'flockUnitPrefab')
  i6668.flockSize = i6669[2]
  i6668.spawnBounds = new pc.Vec3( i6669[3], i6669[4], i6669[5] )
  i6668._minSpeed = i6669[6]
  i6668._maxSpeed = i6669[7]
  i6668._cohesionDistance = i6669[8]
  i6668._avoidanceDistance = i6669[9]
  i6668._aligementDistance = i6669[10]
  i6668._obstacleDistance = i6669[11]
  i6668._boundsDistance = i6669[12]
  i6668._cohesionWeight = i6669[13]
  i6668._avoidanceWeight = i6669[14]
  i6668._aligementWeight = i6669[15]
  i6668._boundsWeight = i6669[16]
  i6668._obstacleWeight = i6669[17]
  return i6668
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i6670 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i6671 = data
  request.r(i6671[0], i6671[1], 0, i6670, 'm_LookAt')
  request.r(i6671[2], i6671[3], 0, i6670, 'm_Follow')
  i6670.m_Lens = request.d('Cinemachine.LensSettings', i6671[4], i6670.m_Lens)
  i6670.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i6671[5], i6670.m_Transitions)
  var i6673 = i6671[6]
  var i6672 = []
  for(var i = 0; i < i6673.length; i += 1) {
    i6672.push( i6673[i + 0] );
  }
  i6670.m_ExcludedPropertiesInInspector = i6672
  var i6675 = i6671[7]
  var i6674 = []
  for(var i = 0; i < i6675.length; i += 1) {
    i6674.push( i6675[i + 0] );
  }
  i6670.m_LockStageInInspector = i6674
  i6670.m_Priority = i6671[8]
  i6670.m_StandbyUpdate = i6671[9]
  i6670.m_LegacyBlendHint = i6671[10]
  request.r(i6671[11], i6671[12], 0, i6670, 'm_ComponentOwner')
  i6670.m_StreamingVersion = i6671[13]
  return i6670
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i6676 = root || request.c( 'Cinemachine.LensSettings' )
  var i6677 = data
  i6676.FieldOfView = i6677[0]
  i6676.OrthographicSize = i6677[1]
  i6676.NearClipPlane = i6677[2]
  i6676.FarClipPlane = i6677[3]
  i6676.Dutch = i6677[4]
  i6676.ModeOverride = i6677[5]
  i6676.LensShift = new pc.Vec2( i6677[6], i6677[7] )
  i6676.GateFit = i6677[8]
  i6676.m_SensorSize = new pc.Vec2( i6677[9], i6677[10] )
  return i6676
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i6678 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i6679 = data
  i6678.m_BlendHint = i6679[0]
  i6678.m_InheritPosition = !!i6679[1]
  i6678.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i6679[2], i6678.m_OnCameraLive)
  return i6678
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i6680 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i6681 = data
  i6680.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6681[0], i6680.m_PersistentCalls)
  return i6680
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i6686 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i6687 = data
  return i6686
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i6688 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i6689 = data
  i6688.m_TrackedObjectOffset = new pc.Vec3( i6689[0], i6689[1], i6689[2] )
  i6688.m_LookaheadTime = i6689[3]
  i6688.m_LookaheadSmoothing = i6689[4]
  i6688.m_LookaheadIgnoreY = !!i6689[5]
  i6688.m_HorizontalDamping = i6689[6]
  i6688.m_VerticalDamping = i6689[7]
  i6688.m_ScreenX = i6689[8]
  i6688.m_ScreenY = i6689[9]
  i6688.m_DeadZoneWidth = i6689[10]
  i6688.m_DeadZoneHeight = i6689[11]
  i6688.m_SoftZoneWidth = i6689[12]
  i6688.m_SoftZoneHeight = i6689[13]
  i6688.m_BiasX = i6689[14]
  i6688.m_BiasY = i6689[15]
  i6688.m_CenterOnActivate = !!i6689[16]
  return i6688
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i6690 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i6691 = data
  i6690.m_BindingMode = i6691[0]
  i6690.m_FollowOffset = new pc.Vec3( i6691[1], i6691[2], i6691[3] )
  i6690.m_XDamping = i6691[4]
  i6690.m_YDamping = i6691[5]
  i6690.m_ZDamping = i6691[6]
  i6690.m_AngularDampingMode = i6691[7]
  i6690.m_PitchDamping = i6691[8]
  i6690.m_YawDamping = i6691[9]
  i6690.m_RollDamping = i6691[10]
  i6690.m_AngularDamping = i6691[11]
  return i6690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i6692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i6693 = data
  i6692.enabled = !!i6693[0]
  i6692.aspect = i6693[1]
  i6692.orthographic = !!i6693[2]
  i6692.orthographicSize = i6693[3]
  i6692.backgroundColor = new pc.Color(i6693[4], i6693[5], i6693[6], i6693[7])
  i6692.nearClipPlane = i6693[8]
  i6692.farClipPlane = i6693[9]
  i6692.fieldOfView = i6693[10]
  i6692.depth = i6693[11]
  i6692.clearFlags = i6693[12]
  i6692.cullingMask = i6693[13]
  i6692.rect = i6693[14]
  request.r(i6693[15], i6693[16], 0, i6692, 'targetTexture')
  return i6692
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i6694 = root || request.c( 'CameraMove' )
  var i6695 = data
  i6694.offset = new pc.Vec3( i6695[0], i6695[1], i6695[2] )
  request.r(i6695[3], i6695[4], 0, i6694, 'newCamera')
  request.r(i6695[5], i6695[6], 0, i6694, 'target')
  return i6694
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i6696 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i6697 = data
  i6696.m_ShowDebugText = !!i6697[0]
  i6696.m_ShowCameraFrustum = !!i6697[1]
  i6696.m_IgnoreTimeScale = !!i6697[2]
  request.r(i6697[3], i6697[4], 0, i6696, 'm_WorldUpOverride')
  i6696.m_UpdateMethod = i6697[5]
  i6696.m_BlendUpdateMethod = i6697[6]
  i6696.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i6697[7], i6696.m_DefaultBlend)
  request.r(i6697[8], i6697[9], 0, i6696, 'm_CustomBlends')
  i6696.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i6697[10], i6696.m_CameraCutEvent)
  i6696.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i6697[11], i6696.m_CameraActivatedEvent)
  return i6696
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i6698 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i6699 = data
  i6698.m_Style = i6699[0]
  i6698.m_Time = i6699[1]
  i6698.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i6699[2] } )
  return i6698
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i6700 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i6701 = data
  i6700.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6701[0], i6700.m_PersistentCalls)
  return i6700
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i6702 = root || request.c( 'CinemachineController' )
  var i6703 = data
  request.r(i6703[0], i6703[1], 0, i6702, 'playerTrans')
  i6702.playerOffset = new pc.Vec3( i6703[2], i6703[3], i6703[4] )
  request.r(i6703[5], i6703[6], 0, i6702, 'hookTrans')
  i6702.hookOffset = new pc.Vec3( i6703[7], i6703[8], i6703[9] )
  request.r(i6703[10], i6703[11], 0, i6702, 'cvc_Hook')
  request.r(i6703[12], i6703[13], 0, i6702, 'cvc_Player')
  return i6702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i6704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i6705 = data
  i6704.enabled = !!i6705[0]
  i6704.isTrigger = !!i6705[1]
  request.r(i6705[2], i6705[3], 0, i6704, 'material')
  i6704.center = new pc.Vec3( i6705[4], i6705[5], i6705[6] )
  i6704.radius = i6705[7]
  return i6704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i6706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i6707 = data
  i6706.enabled = !!i6707[0]
  request.r(i6707[1], i6707[2], 0, i6706, 'sharedMaterial')
  var i6709 = i6707[3]
  var i6708 = []
  for(var i = 0; i < i6709.length; i += 2) {
  request.r(i6709[i + 0], i6709[i + 1], 2, i6708, '')
  }
  i6706.sharedMaterials = i6708
  i6706.receiveShadows = !!i6707[4]
  i6706.shadowCastingMode = i6707[5]
  i6706.sortingLayerID = i6707[6]
  i6706.sortingOrder = i6707[7]
  i6706.lightmapIndex = i6707[8]
  i6706.lightmapSceneIndex = i6707[9]
  i6706.lightmapScaleOffset = new pc.Vec4( i6707[10], i6707[11], i6707[12], i6707[13] )
  i6706.lightProbeUsage = i6707[14]
  i6706.reflectionProbeUsage = i6707[15]
  var i6711 = i6707[16]
  var i6710 = []
  for(var i = 0; i < i6711.length; i += 3) {
    i6710.push( new pc.Vec3( i6711[i + 0], i6711[i + 1], i6711[i + 2] ) );
  }
  i6706.positions = i6710
  i6706.positionCount = i6707[17]
  i6706.time = i6707[18]
  i6706.startWidth = i6707[19]
  i6706.endWidth = i6707[20]
  i6706.widthMultiplier = i6707[21]
  i6706.autodestruct = !!i6707[22]
  i6706.emitting = !!i6707[23]
  i6706.numCornerVertices = i6707[24]
  i6706.numCapVertices = i6707[25]
  i6706.minVertexDistance = i6707[26]
  i6706.colorGradient = i6707[27] ? new pc.ColorGradient(i6707[27][0], i6707[27][1], i6707[27][2]) : null
  i6706.startColor = new pc.Color(i6707[28], i6707[29], i6707[30], i6707[31])
  i6706.endColor = new pc.Color(i6707[32], i6707[33], i6707[34], i6707[35])
  i6706.generateLightingData = !!i6707[36]
  i6706.textureMode = i6707[37]
  i6706.alignment = i6707[38]
  i6706.widthCurve = new pc.AnimationCurve( { keys_flow: i6707[39] } )
  return i6706
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i6712 = root || request.c( 'FishingHook' )
  var i6713 = data
  i6712.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i6713[0], i6712.OnMoneyChangeEvent)
  var i6715 = i6713[1]
  var i6714 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i6715.length; i += 2) {
  request.r(i6715[i + 0], i6715[i + 1], 1, i6714, '')
  }
  i6712.hookedFish = i6714
  request.r(i6713[2], i6713[3], 0, i6712, 'sellParticle')
  request.r(i6713[4], i6713[5], 0, i6712, 'sellParticleParent')
  i6712.targetHookZoomOffset = i6713[6]
  i6712.minDrag = i6713[7]
  i6712.maxDrag = i6713[8]
  i6712.dragSpeed = i6713[9]
  i6712.fishingHookScaleUpgradeValue = i6713[10]
  i6712.fullHooked = !!i6713[11]
  i6712.inTheOcean = !!i6713[12]
  i6712.money = i6713[13]
  request.r(i6713[14], i6713[15], 0, i6712, 'rigid')
  request.r(i6713[16], i6713[17], 0, i6712, 'canvas')
  request.r(i6713[18], i6713[19], 0, i6712, 'moneyTextPrefab')
  request.r(i6713[20], i6713[21], 0, i6712, 'moneyTextSpawnTransform')
  i6712.moneyTextSpawnMinOffset = new pc.Vec2( i6713[22], i6713[23] )
  i6712.moneyTextSpawnMaxOffset = new pc.Vec2( i6713[24], i6713[25] )
  var i6717 = i6713[26]
  var i6716 = []
  for(var i = 0; i < i6717.length; i += 2) {
  request.r(i6717[i + 0], i6717[i + 1], 2, i6716, '')
  }
  i6712.hookedTransforms = i6716
  request.r(i6713[27], i6713[28], 0, i6712, 'fishingRodSkinned')
  request.r(i6713[29], i6713[30], 0, i6712, 'cinemachineCamera')
  request.r(i6713[31], i6713[32], 0, i6712, 'startPoint')
  request.r(i6713[33], i6713[34], 0, i6712, 'hook')
  request.r(i6713[35], i6713[36], 0, i6712, 'rod')
  request.r(i6713[37], i6713[38], 0, i6712, 'playerModel')
  request.r(i6713[39], i6713[40], 0, i6712, 'upgradeButton')
  request.r(i6713[41], i6713[42], 0, i6712, 'depthText')
  request.r(i6713[43], i6713[44], 0, i6712, 'touchField')
  request.r(i6713[45], i6713[46], 0, i6712, 'catchRingParticle')
  request.r(i6713[47], i6713[48], 0, i6712, 'fishSkinPrefab')
  request.r(i6713[49], i6713[50], 0, i6712, 'fishSkinPoint1')
  request.r(i6713[51], i6713[52], 0, i6712, 'fishSkinPoint2')
  request.r(i6713[53], i6713[54], 0, i6712, 'moneyText')
  request.r(i6713[55], i6713[56], 0, i6712, 'HookedCount')
  return i6712
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i6718 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i6719 = data
  i6718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i6719[0], i6718.m_PersistentCalls)
  return i6718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i6720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i6721 = data
  i6720.ambientIntensity = i6721[0]
  i6720.reflectionIntensity = i6721[1]
  i6720.ambientMode = i6721[2]
  i6720.ambientLight = new pc.Color(i6721[3], i6721[4], i6721[5], i6721[6])
  i6720.ambientSkyColor = new pc.Color(i6721[7], i6721[8], i6721[9], i6721[10])
  i6720.ambientGroundColor = new pc.Color(i6721[11], i6721[12], i6721[13], i6721[14])
  i6720.ambientEquatorColor = new pc.Color(i6721[15], i6721[16], i6721[17], i6721[18])
  i6720.fogColor = new pc.Color(i6721[19], i6721[20], i6721[21], i6721[22])
  i6720.fogEndDistance = i6721[23]
  i6720.fogStartDistance = i6721[24]
  i6720.fogDensity = i6721[25]
  i6720.fog = !!i6721[26]
  request.r(i6721[27], i6721[28], 0, i6720, 'skybox')
  i6720.fogMode = i6721[29]
  var i6723 = i6721[30]
  var i6722 = []
  for(var i = 0; i < i6723.length; i += 1) {
    i6722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i6723[i + 0]) );
  }
  i6720.lightmaps = i6722
  i6720.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i6721[31], i6720.lightProbes)
  i6720.lightmapsMode = i6721[32]
  i6720.environmentLightingMode = i6721[33]
  i6720.ambientProbe = new pc.SphericalHarmonicsL2(i6721[34])
  i6720.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i6721[35])
  i6720.useReferenceAmbientProbe = !!i6721[36]
  request.r(i6721[37], i6721[38], 0, i6720, 'customReflection')
  request.r(i6721[39], i6721[40], 0, i6720, 'defaultReflection')
  i6720.defaultReflectionMode = i6721[41]
  i6720.defaultReflectionResolution = i6721[42]
  i6720.sunLightObjectId = i6721[43]
  i6720.pixelLightCount = i6721[44]
  i6720.defaultReflectionHDR = !!i6721[45]
  i6720.hasLightDataAsset = !!i6721[46]
  i6720.hasManualGenerate = !!i6721[47]
  return i6720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i6726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i6727 = data
  request.r(i6727[0], i6727[1], 0, i6726, 'lightmapColor')
  request.r(i6727[2], i6727[3], 0, i6726, 'lightmapDirection')
  return i6726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i6728 = root || new UnityEngine.LightProbes()
  var i6729 = data
  return i6728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i6734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i6735 = data
  var i6737 = i6735[0]
  var i6736 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i6737.length; i += 1) {
    i6736.add(i6737[i + 0]);
  }
  i6734.invalidShaderVariants = i6736
  i6734.name = i6735[1]
  i6734.guid = i6735[2]
  var i6739 = i6735[3]
  var i6738 = []
  for(var i = 0; i < i6739.length; i += 1) {
    i6738.push( i6739[i + 0] );
  }
  i6734.shaderDefinedKeywords = i6738
  var i6741 = i6735[4]
  var i6740 = []
  for(var i = 0; i < i6741.length; i += 1) {
    i6740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i6741[i + 0]) );
  }
  i6734.passes = i6740
  var i6743 = i6735[5]
  var i6742 = []
  for(var i = 0; i < i6743.length; i += 1) {
    i6742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i6743[i + 0]) );
  }
  i6734.usePasses = i6742
  var i6745 = i6735[6]
  var i6744 = []
  for(var i = 0; i < i6745.length; i += 1) {
    i6744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i6745[i + 0]) );
  }
  i6734.defaultParameterValues = i6744
  request.r(i6735[7], i6735[8], 0, i6734, 'unityFallbackShader')
  i6734.readDepth = !!i6735[9]
  i6734.isCreatedByShaderGraph = !!i6735[10]
  return i6734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i6750 = root || new pc.UnityShaderPass()
  var i6751 = data
  i6750.id = i6751[0]
  i6750.subShaderIndex = i6751[1]
  i6750.name = i6751[2]
  i6750.passType = i6751[3]
  i6750.usePass = !!i6751[4]
  i6750.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[5], i6750.zTest)
  i6750.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[6], i6750.zWrite)
  i6750.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[7], i6750.culling)
  i6750.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6751[8], i6750.blending)
  i6750.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i6751[9], i6750.alphaBlending)
  i6750.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[10], i6750.colorWriteMask)
  i6750.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[11], i6750.offsetUnits)
  i6750.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[12], i6750.offsetFactor)
  i6750.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[13], i6750.stencilRef)
  i6750.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[14], i6750.stencilReadMask)
  i6750.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6751[15], i6750.stencilWriteMask)
  i6750.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6751[16], i6750.stencilOp)
  i6750.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6751[17], i6750.stencilOpFront)
  i6750.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i6751[18], i6750.stencilOpBack)
  var i6753 = i6751[19]
  var i6752 = []
  for(var i = 0; i < i6753.length; i += 1) {
    i6752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i6753[i + 0]) );
  }
  i6750.tags = i6752
  var i6755 = i6751[20]
  var i6754 = []
  for(var i = 0; i < i6755.length; i += 1) {
    i6754.push( i6755[i + 0] );
  }
  i6750.passDefinedKeywords = i6754
  var i6757 = i6751[21]
  var i6756 = []
  for(var i = 0; i < i6757.length; i += 1) {
    i6756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i6757[i + 0]) );
  }
  i6750.passDefinedKeywordGroups = i6756
  var i6759 = i6751[22]
  var i6758 = []
  for(var i = 0; i < i6759.length; i += 1) {
    i6758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6759[i + 0]) );
  }
  i6750.variants = i6758
  var i6761 = i6751[23]
  var i6760 = []
  for(var i = 0; i < i6761.length; i += 1) {
    i6760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i6761[i + 0]) );
  }
  i6750.excludedVariants = i6760
  i6750.hasDepthReader = !!i6751[24]
  return i6750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i6762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i6763 = data
  i6762.val = i6763[0]
  i6762.name = i6763[1]
  return i6762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i6764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i6765 = data
  i6764.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6765[0], i6764.src)
  i6764.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6765[1], i6764.dst)
  i6764.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6765[2], i6764.op)
  return i6764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i6766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i6767 = data
  i6766.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6767[0], i6766.pass)
  i6766.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6767[1], i6766.fail)
  i6766.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6767[2], i6766.zFail)
  i6766.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i6767[3], i6766.comp)
  return i6766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i6770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i6771 = data
  i6770.name = i6771[0]
  i6770.value = i6771[1]
  return i6770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i6774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i6775 = data
  var i6777 = i6775[0]
  var i6776 = []
  for(var i = 0; i < i6777.length; i += 1) {
    i6776.push( i6777[i + 0] );
  }
  i6774.keywords = i6776
  i6774.hasDiscard = !!i6775[1]
  return i6774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i6780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i6781 = data
  i6780.passId = i6781[0]
  i6780.subShaderIndex = i6781[1]
  var i6783 = i6781[2]
  var i6782 = []
  for(var i = 0; i < i6783.length; i += 1) {
    i6782.push( i6783[i + 0] );
  }
  i6780.keywords = i6782
  i6780.vertexProgram = i6781[3]
  i6780.fragmentProgram = i6781[4]
  i6780.readDepth = !!i6781[5]
  return i6780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i6786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i6787 = data
  request.r(i6787[0], i6787[1], 0, i6786, 'shader')
  i6786.pass = i6787[2]
  return i6786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i6790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i6791 = data
  i6790.name = i6791[0]
  i6790.type = i6791[1]
  i6790.value = new pc.Vec4( i6791[2], i6791[3], i6791[4], i6791[5] )
  i6790.textureValue = i6791[6]
  return i6790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i6792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i6793 = data
  i6792.name = i6793[0]
  request.r(i6793[1], i6793[2], 0, i6792, 'texture')
  i6792.aabb = i6793[3]
  i6792.vertices = i6793[4]
  i6792.triangles = i6793[5]
  i6792.textureRect = UnityEngine.Rect.MinMaxRect(i6793[6], i6793[7], i6793[8], i6793[9])
  i6792.packedRect = UnityEngine.Rect.MinMaxRect(i6793[10], i6793[11], i6793[12], i6793[13])
  i6792.border = new pc.Vec4( i6793[14], i6793[15], i6793[16], i6793[17] )
  i6792.transparency = i6793[18]
  i6792.bounds = i6793[19]
  i6792.pixelsPerUnit = i6793[20]
  i6792.textureWidth = i6793[21]
  i6792.textureHeight = i6793[22]
  i6792.nativeSize = new pc.Vec2( i6793[23], i6793[24] )
  i6792.pivot = new pc.Vec2( i6793[25], i6793[26] )
  i6792.textureRectOffset = new pc.Vec2( i6793[27], i6793[28] )
  return i6792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i6794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i6795 = data
  i6794.name = i6795[0]
  i6794.wrapMode = i6795[1]
  i6794.isLooping = !!i6795[2]
  i6794.length = i6795[3]
  var i6797 = i6795[4]
  var i6796 = []
  for(var i = 0; i < i6797.length; i += 1) {
    i6796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i6797[i + 0]) );
  }
  i6794.curves = i6796
  var i6799 = i6795[5]
  var i6798 = []
  for(var i = 0; i < i6799.length; i += 1) {
    i6798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i6799[i + 0]) );
  }
  i6794.events = i6798
  i6794.halfPrecision = !!i6795[6]
  return i6794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i6802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i6803 = data
  i6802.path = i6803[0]
  i6802.componentType = i6803[1]
  i6802.property = i6803[2]
  i6802.keys = i6803[3]
  var i6805 = i6803[4]
  var i6804 = []
  for(var i = 0; i < i6805.length; i += 1) {
    i6804.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i6805[i + 0]) );
  }
  i6802.objectReferenceKeys = i6804
  return i6802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i6808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i6809 = data
  i6808.time = i6809[0]
  request.r(i6809[1], i6809[2], 0, i6808, 'value')
  return i6808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i6812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i6813 = data
  i6812.functionName = i6813[0]
  i6812.floatParameter = i6813[1]
  i6812.intParameter = i6813[2]
  i6812.stringParameter = i6813[3]
  request.r(i6813[4], i6813[5], 0, i6812, 'objectReferenceParameter')
  i6812.time = i6813[6]
  return i6812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i6814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i6815 = data
  i6814.name = i6815[0]
  var i6817 = i6815[1]
  var i6816 = []
  for(var i = 0; i < i6817.length; i += 1) {
    i6816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i6817[i + 0]) );
  }
  i6814.states = i6816
  var i6819 = i6815[2]
  var i6818 = []
  for(var i = 0; i < i6819.length; i += 1) {
    i6818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i6819[i + 0]) );
  }
  i6814.layers = i6818
  var i6821 = i6815[3]
  var i6820 = []
  for(var i = 0; i < i6821.length; i += 1) {
    i6820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i6821[i + 0]) );
  }
  i6814.parameters = i6820
  var i6823 = i6815[4]
  var i6822 = []
  for(var i = 0; i < i6823.length; i += 1) {
    i6822.push( i6823[i + 0] );
  }
  i6814.animationClips = i6822
  i6814.HasSubStateMachines = !!i6815[5]
  return i6814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i6826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i6827 = data
  i6826.cycleOffset = i6827[0]
  i6826.cycleOffsetParameter = i6827[1]
  i6826.cycleOffsetParameterActive = !!i6827[2]
  i6826.mirror = !!i6827[3]
  i6826.mirrorParameter = i6827[4]
  i6826.mirrorParameterActive = !!i6827[5]
  i6826.motionId = i6827[6]
  i6826.nameHash = i6827[7]
  i6826.fullPathHash = i6827[8]
  i6826.speed = i6827[9]
  i6826.speedParameter = i6827[10]
  i6826.speedParameterActive = !!i6827[11]
  i6826.tag = i6827[12]
  i6826.name = i6827[13]
  i6826.writeDefaultValues = !!i6827[14]
  var i6829 = i6827[15]
  var i6828 = []
  for(var i = 0; i < i6829.length; i += 1) {
    i6828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6829[i + 0]) );
  }
  i6826.transitions = i6828
  var i6831 = i6827[16]
  var i6830 = []
  for(var i = 0; i < i6831.length; i += 2) {
  request.r(i6831[i + 0], i6831[i + 1], 2, i6830, '')
  }
  i6826.behaviours = i6830
  return i6826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i6834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i6835 = data
  i6834.fullPath = i6835[0]
  i6834.canTransitionToSelf = !!i6835[1]
  i6834.duration = i6835[2]
  i6834.exitTime = i6835[3]
  i6834.hasExitTime = !!i6835[4]
  i6834.hasFixedDuration = !!i6835[5]
  i6834.interruptionSource = i6835[6]
  i6834.offset = i6835[7]
  i6834.orderedInterruption = !!i6835[8]
  i6834.destinationStateNameHash = i6835[9]
  i6834.destinationStateMachineId = i6835[10]
  i6834.isExit = !!i6835[11]
  i6834.mute = !!i6835[12]
  i6834.solo = !!i6835[13]
  var i6837 = i6835[14]
  var i6836 = []
  for(var i = 0; i < i6837.length; i += 1) {
    i6836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6837[i + 0]) );
  }
  i6834.conditions = i6836
  return i6834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i6840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i6841 = data
  i6840.mode = i6841[0]
  i6840.parameter = i6841[1]
  i6840.threshold = i6841[2]
  return i6840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i6846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i6847 = data
  i6846.blendingMode = i6847[0]
  i6846.defaultWeight = i6847[1]
  i6846.name = i6847[2]
  i6846.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i6847[3], i6846.stateMachine)
  return i6846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i6848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i6849 = data
  i6848.id = i6849[0]
  i6848.defaultStateNameHash = i6849[1]
  var i6851 = i6849[2]
  var i6850 = []
  for(var i = 0; i < i6851.length; i += 1) {
    i6850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i6851[i + 0]) );
  }
  i6848.entryTransitions = i6850
  var i6853 = i6849[3]
  var i6852 = []
  for(var i = 0; i < i6853.length; i += 1) {
    i6852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i6853[i + 0]) );
  }
  i6848.anyStateTransitions = i6852
  return i6848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i6856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i6857 = data
  i6856.destinationStateNameHash = i6857[0]
  i6856.destinationStateMachineId = i6857[1]
  i6856.isExit = !!i6857[2]
  i6856.mute = !!i6857[3]
  i6856.solo = !!i6857[4]
  var i6859 = i6857[5]
  var i6858 = []
  for(var i = 0; i < i6859.length; i += 1) {
    i6858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i6859[i + 0]) );
  }
  i6856.conditions = i6858
  return i6856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i6862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i6863 = data
  i6862.defaultBool = !!i6863[0]
  i6862.defaultFloat = i6863[1]
  i6862.defaultInt = i6863[2]
  i6862.name = i6863[3]
  i6862.nameHash = i6863[4]
  i6862.type = i6863[5]
  return i6862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i6864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i6865 = data
  i6864.name = i6865[0]
  i6864.bytes64 = i6865[1]
  i6864.data = i6865[2]
  return i6864
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i6866 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i6867 = data
  i6866.hashCode = i6867[0]
  request.r(i6867[1], i6867[2], 0, i6866, 'material')
  i6866.materialHashCode = i6867[3]
  request.r(i6867[4], i6867[5], 0, i6866, 'atlas')
  i6866.normalStyle = i6867[6]
  i6866.normalSpacingOffset = i6867[7]
  i6866.boldStyle = i6867[8]
  i6866.boldSpacing = i6867[9]
  i6866.italicStyle = i6867[10]
  i6866.tabSize = i6867[11]
  i6866.m_Version = i6867[12]
  i6866.m_SourceFontFileGUID = i6867[13]
  request.r(i6867[14], i6867[15], 0, i6866, 'm_SourceFontFile_EditorRef')
  request.r(i6867[16], i6867[17], 0, i6866, 'm_SourceFontFile')
  i6866.m_AtlasPopulationMode = i6867[18]
  i6866.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6867[19], i6866.m_FaceInfo)
  var i6869 = i6867[20]
  var i6868 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i6869.length; i += 1) {
    i6868.add(request.d('UnityEngine.TextCore.Glyph', i6869[i + 0]));
  }
  i6866.m_GlyphTable = i6868
  var i6871 = i6867[21]
  var i6870 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i6871.length; i += 1) {
    i6870.add(request.d('TMPro.TMP_Character', i6871[i + 0]));
  }
  i6866.m_CharacterTable = i6870
  var i6873 = i6867[22]
  var i6872 = []
  for(var i = 0; i < i6873.length; i += 2) {
  request.r(i6873[i + 0], i6873[i + 1], 2, i6872, '')
  }
  i6866.m_AtlasTextures = i6872
  i6866.m_AtlasTextureIndex = i6867[23]
  i6866.m_IsMultiAtlasTexturesEnabled = !!i6867[24]
  i6866.m_ClearDynamicDataOnBuild = !!i6867[25]
  var i6875 = i6867[26]
  var i6874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6875.length; i += 1) {
    i6874.add(request.d('UnityEngine.TextCore.GlyphRect', i6875[i + 0]));
  }
  i6866.m_UsedGlyphRects = i6874
  var i6877 = i6867[27]
  var i6876 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i6877.length; i += 1) {
    i6876.add(request.d('UnityEngine.TextCore.GlyphRect', i6877[i + 0]));
  }
  i6866.m_FreeGlyphRects = i6876
  i6866.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i6867[28], i6866.m_fontInfo)
  i6866.m_AtlasWidth = i6867[29]
  i6866.m_AtlasHeight = i6867[30]
  i6866.m_AtlasPadding = i6867[31]
  i6866.m_AtlasRenderMode = i6867[32]
  var i6879 = i6867[33]
  var i6878 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i6879.length; i += 1) {
    i6878.add(request.d('TMPro.TMP_Glyph', i6879[i + 0]));
  }
  i6866.m_glyphInfoList = i6878
  i6866.m_KerningTable = request.d('TMPro.KerningTable', i6867[34], i6866.m_KerningTable)
  i6866.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i6867[35], i6866.m_FontFeatureTable)
  var i6881 = i6867[36]
  var i6880 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6881.length; i += 2) {
  request.r(i6881[i + 0], i6881[i + 1], 1, i6880, '')
  }
  i6866.fallbackFontAssets = i6880
  var i6883 = i6867[37]
  var i6882 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6883.length; i += 2) {
  request.r(i6883[i + 0], i6883[i + 1], 1, i6882, '')
  }
  i6866.m_FallbackFontAssetTable = i6882
  i6866.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i6867[38], i6866.m_CreationSettings)
  var i6885 = i6867[39]
  var i6884 = []
  for(var i = 0; i < i6885.length; i += 1) {
    i6884.push( request.d('TMPro.TMP_FontWeightPair', i6885[i + 0]) );
  }
  i6866.m_FontWeightTable = i6884
  var i6887 = i6867[40]
  var i6886 = []
  for(var i = 0; i < i6887.length; i += 1) {
    i6886.push( request.d('TMPro.TMP_FontWeightPair', i6887[i + 0]) );
  }
  i6866.fontWeights = i6886
  return i6866
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i6888 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i6889 = data
  i6888.m_FaceIndex = i6889[0]
  i6888.m_FamilyName = i6889[1]
  i6888.m_StyleName = i6889[2]
  i6888.m_PointSize = i6889[3]
  i6888.m_Scale = i6889[4]
  i6888.m_LineHeight = i6889[5]
  i6888.m_AscentLine = i6889[6]
  i6888.m_CapLine = i6889[7]
  i6888.m_MeanLine = i6889[8]
  i6888.m_Baseline = i6889[9]
  i6888.m_DescentLine = i6889[10]
  i6888.m_SuperscriptOffset = i6889[11]
  i6888.m_SuperscriptSize = i6889[12]
  i6888.m_SubscriptOffset = i6889[13]
  i6888.m_SubscriptSize = i6889[14]
  i6888.m_UnderlineOffset = i6889[15]
  i6888.m_UnderlineThickness = i6889[16]
  i6888.m_StrikethroughOffset = i6889[17]
  i6888.m_StrikethroughThickness = i6889[18]
  i6888.m_TabWidth = i6889[19]
  return i6888
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i6892 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i6893 = data
  i6892.m_Index = i6893[0]
  i6892.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6893[1], i6892.m_Metrics)
  i6892.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6893[2], i6892.m_GlyphRect)
  i6892.m_Scale = i6893[3]
  i6892.m_AtlasIndex = i6893[4]
  return i6892
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i6894 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i6895 = data
  i6894.m_Width = i6895[0]
  i6894.m_Height = i6895[1]
  i6894.m_HorizontalBearingX = i6895[2]
  i6894.m_HorizontalBearingY = i6895[3]
  i6894.m_HorizontalAdvance = i6895[4]
  return i6894
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i6896 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i6897 = data
  i6896.m_X = i6897[0]
  i6896.m_Y = i6897[1]
  i6896.m_Width = i6897[2]
  i6896.m_Height = i6897[3]
  return i6896
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i6900 = root || request.c( 'TMPro.TMP_Character' )
  var i6901 = data
  i6900.m_ElementType = i6901[0]
  i6900.m_Unicode = i6901[1]
  i6900.m_GlyphIndex = i6901[2]
  i6900.m_Scale = i6901[3]
  return i6900
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i6906 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i6907 = data
  i6906.Name = i6907[0]
  i6906.PointSize = i6907[1]
  i6906.Scale = i6907[2]
  i6906.CharacterCount = i6907[3]
  i6906.LineHeight = i6907[4]
  i6906.Baseline = i6907[5]
  i6906.Ascender = i6907[6]
  i6906.CapHeight = i6907[7]
  i6906.Descender = i6907[8]
  i6906.CenterLine = i6907[9]
  i6906.SuperscriptOffset = i6907[10]
  i6906.SubscriptOffset = i6907[11]
  i6906.SubSize = i6907[12]
  i6906.Underline = i6907[13]
  i6906.UnderlineThickness = i6907[14]
  i6906.strikethrough = i6907[15]
  i6906.strikethroughThickness = i6907[16]
  i6906.TabWidth = i6907[17]
  i6906.Padding = i6907[18]
  i6906.AtlasWidth = i6907[19]
  i6906.AtlasHeight = i6907[20]
  return i6906
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i6910 = root || request.c( 'TMPro.TMP_Glyph' )
  var i6911 = data
  i6910.id = i6911[0]
  i6910.x = i6911[1]
  i6910.y = i6911[2]
  i6910.width = i6911[3]
  i6910.height = i6911[4]
  i6910.xOffset = i6911[5]
  i6910.yOffset = i6911[6]
  i6910.xAdvance = i6911[7]
  i6910.scale = i6911[8]
  return i6910
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i6912 = root || request.c( 'TMPro.KerningTable' )
  var i6913 = data
  var i6915 = i6913[0]
  var i6914 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i6915.length; i += 1) {
    i6914.add(request.d('TMPro.KerningPair', i6915[i + 0]));
  }
  i6912.kerningPairs = i6914
  return i6912
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i6918 = root || request.c( 'TMPro.KerningPair' )
  var i6919 = data
  i6918.xOffset = i6919[0]
  i6918.m_FirstGlyph = i6919[1]
  i6918.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6919[2], i6918.m_FirstGlyphAdjustments)
  i6918.m_SecondGlyph = i6919[3]
  i6918.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i6919[4], i6918.m_SecondGlyphAdjustments)
  i6918.m_IgnoreSpacingAdjustments = !!i6919[5]
  return i6918
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i6920 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i6921 = data
  var i6923 = i6921[0]
  var i6922 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i6923.length; i += 1) {
    i6922.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i6923[i + 0]));
  }
  i6920.m_GlyphPairAdjustmentRecords = i6922
  return i6920
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i6926 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i6927 = data
  i6926.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6927[0], i6926.m_FirstAdjustmentRecord)
  i6926.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i6927[1], i6926.m_SecondAdjustmentRecord)
  i6926.m_FeatureLookupFlags = i6927[2]
  return i6926
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i6930 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i6931 = data
  i6930.sourceFontFileName = i6931[0]
  i6930.sourceFontFileGUID = i6931[1]
  i6930.pointSizeSamplingMode = i6931[2]
  i6930.pointSize = i6931[3]
  i6930.padding = i6931[4]
  i6930.packingMode = i6931[5]
  i6930.atlasWidth = i6931[6]
  i6930.atlasHeight = i6931[7]
  i6930.characterSetSelectionMode = i6931[8]
  i6930.characterSequence = i6931[9]
  i6930.referencedFontAssetGUID = i6931[10]
  i6930.referencedTextAssetGUID = i6931[11]
  i6930.fontStyle = i6931[12]
  i6930.fontStyleModifier = i6931[13]
  i6930.renderMode = i6931[14]
  i6930.includeFontFeatures = !!i6931[15]
  return i6930
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i6934 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i6935 = data
  request.r(i6935[0], i6935[1], 0, i6934, 'regularTypeface')
  request.r(i6935[2], i6935[3], 0, i6934, 'italicTypeface')
  return i6934
}

Deserializers["MapData"] = function (request, data, root) {
  var i6936 = root || request.c( 'MapData' )
  var i6937 = data
  var i6939 = i6937[0]
  var i6938 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i6939.length; i += 1) {
    i6938.add(request.d('MapData+mapData', i6939[i + 0]));
  }
  i6936.mapDataList = i6938
  return i6936
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i6942 = root || request.c( 'MapData+mapData' )
  var i6943 = data
  i6942.tier = i6943[0]
  i6942.minMapSize = new pc.Vec3( i6943[1], i6943[2], i6943[3] )
  i6942.maxMapSize = new pc.Vec3( i6943[4], i6943[5], i6943[6] )
  return i6942
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i6944 = root || request.c( 'TMPro.TMP_Settings' )
  var i6945 = data
  i6944.m_enableWordWrapping = !!i6945[0]
  i6944.m_enableKerning = !!i6945[1]
  i6944.m_enableExtraPadding = !!i6945[2]
  i6944.m_enableTintAllSprites = !!i6945[3]
  i6944.m_enableParseEscapeCharacters = !!i6945[4]
  i6944.m_EnableRaycastTarget = !!i6945[5]
  i6944.m_GetFontFeaturesAtRuntime = !!i6945[6]
  i6944.m_missingGlyphCharacter = i6945[7]
  i6944.m_warningsDisabled = !!i6945[8]
  request.r(i6945[9], i6945[10], 0, i6944, 'm_defaultFontAsset')
  i6944.m_defaultFontAssetPath = i6945[11]
  i6944.m_defaultFontSize = i6945[12]
  i6944.m_defaultAutoSizeMinRatio = i6945[13]
  i6944.m_defaultAutoSizeMaxRatio = i6945[14]
  i6944.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i6945[15], i6945[16] )
  i6944.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i6945[17], i6945[18] )
  i6944.m_autoSizeTextContainer = !!i6945[19]
  i6944.m_IsTextObjectScaleStatic = !!i6945[20]
  var i6947 = i6945[21]
  var i6946 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i6947.length; i += 2) {
  request.r(i6947[i + 0], i6947[i + 1], 1, i6946, '')
  }
  i6944.m_fallbackFontAssets = i6946
  i6944.m_matchMaterialPreset = !!i6945[22]
  request.r(i6945[23], i6945[24], 0, i6944, 'm_defaultSpriteAsset')
  i6944.m_defaultSpriteAssetPath = i6945[25]
  i6944.m_enableEmojiSupport = !!i6945[26]
  i6944.m_MissingCharacterSpriteUnicode = i6945[27]
  i6944.m_defaultColorGradientPresetsPath = i6945[28]
  request.r(i6945[29], i6945[30], 0, i6944, 'm_defaultStyleSheet')
  i6944.m_StyleSheetsResourcePath = i6945[31]
  request.r(i6945[32], i6945[33], 0, i6944, 'm_leadingCharacters')
  request.r(i6945[34], i6945[35], 0, i6944, 'm_followingCharacters')
  i6944.m_UseModernHangulLineBreakingRules = !!i6945[36]
  return i6944
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i6948 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i6949 = data
  i6948.hashCode = i6949[0]
  request.r(i6949[1], i6949[2], 0, i6948, 'material')
  i6948.materialHashCode = i6949[3]
  request.r(i6949[4], i6949[5], 0, i6948, 'spriteSheet')
  var i6951 = i6949[6]
  var i6950 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i6951.length; i += 1) {
    i6950.add(request.d('TMPro.TMP_Sprite', i6951[i + 0]));
  }
  i6948.spriteInfoList = i6950
  var i6953 = i6949[7]
  var i6952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i6953.length; i += 2) {
  request.r(i6953[i + 0], i6953[i + 1], 1, i6952, '')
  }
  i6948.fallbackSpriteAssets = i6952
  i6948.m_Version = i6949[8]
  i6948.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i6949[9], i6948.m_FaceInfo)
  var i6955 = i6949[10]
  var i6954 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i6955.length; i += 1) {
    i6954.add(request.d('TMPro.TMP_SpriteCharacter', i6955[i + 0]));
  }
  i6948.m_SpriteCharacterTable = i6954
  var i6957 = i6949[11]
  var i6956 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i6957.length; i += 1) {
    i6956.add(request.d('TMPro.TMP_SpriteGlyph', i6957[i + 0]));
  }
  i6948.m_SpriteGlyphTable = i6956
  return i6948
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i6960 = root || request.c( 'TMPro.TMP_Sprite' )
  var i6961 = data
  i6960.name = i6961[0]
  i6960.hashCode = i6961[1]
  i6960.unicode = i6961[2]
  i6960.pivot = new pc.Vec2( i6961[3], i6961[4] )
  request.r(i6961[5], i6961[6], 0, i6960, 'sprite')
  i6960.id = i6961[7]
  i6960.x = i6961[8]
  i6960.y = i6961[9]
  i6960.width = i6961[10]
  i6960.height = i6961[11]
  i6960.xOffset = i6961[12]
  i6960.yOffset = i6961[13]
  i6960.xAdvance = i6961[14]
  i6960.scale = i6961[15]
  return i6960
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i6966 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i6967 = data
  i6966.m_Name = i6967[0]
  i6966.m_HashCode = i6967[1]
  i6966.m_ElementType = i6967[2]
  i6966.m_Unicode = i6967[3]
  i6966.m_GlyphIndex = i6967[4]
  i6966.m_Scale = i6967[5]
  return i6966
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i6970 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i6971 = data
  request.r(i6971[0], i6971[1], 0, i6970, 'sprite')
  i6970.m_Index = i6971[2]
  i6970.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i6971[3], i6970.m_Metrics)
  i6970.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i6971[4], i6970.m_GlyphRect)
  i6970.m_Scale = i6971[5]
  i6970.m_AtlasIndex = i6971[6]
  return i6970
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i6972 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i6973 = data
  var i6975 = i6973[0]
  var i6974 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i6975.length; i += 1) {
    i6974.add(request.d('TMPro.TMP_Style', i6975[i + 0]));
  }
  i6972.m_StyleList = i6974
  return i6972
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i6978 = root || request.c( 'TMPro.TMP_Style' )
  var i6979 = data
  i6978.m_Name = i6979[0]
  i6978.m_HashCode = i6979[1]
  i6978.m_OpeningDefinition = i6979[2]
  i6978.m_ClosingDefinition = i6979[3]
  i6978.m_OpeningTagArray = i6979[4]
  i6978.m_ClosingTagArray = i6979[5]
  i6978.m_OpeningTagUnicodeArray = i6979[6]
  i6978.m_ClosingTagUnicodeArray = i6979[7]
  return i6978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i6980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i6981 = data
  var i6983 = i6981[0]
  var i6982 = []
  for(var i = 0; i < i6983.length; i += 1) {
    i6982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i6983[i + 0]) );
  }
  i6980.files = i6982
  i6980.componentToPrefabIds = i6981[1]
  return i6980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i6986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i6987 = data
  i6986.path = i6987[0]
  request.r(i6987[1], i6987[2], 0, i6986, 'unityObject')
  return i6986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i6988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i6989 = data
  var i6991 = i6989[0]
  var i6990 = []
  for(var i = 0; i < i6991.length; i += 1) {
    i6990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i6991[i + 0]) );
  }
  i6988.scriptsExecutionOrder = i6990
  var i6993 = i6989[1]
  var i6992 = []
  for(var i = 0; i < i6993.length; i += 1) {
    i6992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i6993[i + 0]) );
  }
  i6988.sortingLayers = i6992
  var i6995 = i6989[2]
  var i6994 = []
  for(var i = 0; i < i6995.length; i += 1) {
    i6994.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i6995[i + 0]) );
  }
  i6988.cullingLayers = i6994
  i6988.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i6989[3], i6988.timeSettings)
  i6988.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i6989[4], i6988.physicsSettings)
  i6988.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i6989[5], i6988.physics2DSettings)
  i6988.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i6989[6], i6988.qualitySettings)
  i6988.enableRealtimeShadows = !!i6989[7]
  i6988.autoInstantiatePrefabs = !!i6989[8]
  i6988.enableAutoInstancing = !!i6989[9]
  i6988.lightmapEncodingQuality = i6989[10]
  i6988.desiredColorSpace = i6989[11]
  return i6988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i6998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i6999 = data
  i6998.name = i6999[0]
  i6998.value = i6999[1]
  return i6998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7003 = data
  i7002.id = i7003[0]
  i7002.name = i7003[1]
  i7002.value = i7003[2]
  return i7002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7007 = data
  i7006.id = i7007[0]
  i7006.name = i7007[1]
  return i7006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7009 = data
  i7008.fixedDeltaTime = i7009[0]
  i7008.maximumDeltaTime = i7009[1]
  i7008.timeScale = i7009[2]
  i7008.maximumParticleTimestep = i7009[3]
  return i7008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7011 = data
  i7010.gravity = new pc.Vec3( i7011[0], i7011[1], i7011[2] )
  i7010.defaultSolverIterations = i7011[3]
  i7010.bounceThreshold = i7011[4]
  i7010.autoSyncTransforms = !!i7011[5]
  i7010.autoSimulation = !!i7011[6]
  var i7013 = i7011[7]
  var i7012 = []
  for(var i = 0; i < i7013.length; i += 1) {
    i7012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7013[i + 0]) );
  }
  i7010.collisionMatrix = i7012
  return i7010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7017 = data
  i7016.enabled = !!i7017[0]
  i7016.layerId = i7017[1]
  i7016.otherLayerId = i7017[2]
  return i7016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7019 = data
  request.r(i7019[0], i7019[1], 0, i7018, 'material')
  i7018.gravity = new pc.Vec2( i7019[2], i7019[3] )
  i7018.positionIterations = i7019[4]
  i7018.velocityIterations = i7019[5]
  i7018.velocityThreshold = i7019[6]
  i7018.maxLinearCorrection = i7019[7]
  i7018.maxAngularCorrection = i7019[8]
  i7018.maxTranslationSpeed = i7019[9]
  i7018.maxRotationSpeed = i7019[10]
  i7018.timeToSleep = i7019[11]
  i7018.linearSleepTolerance = i7019[12]
  i7018.angularSleepTolerance = i7019[13]
  i7018.defaultContactOffset = i7019[14]
  i7018.autoSimulation = !!i7019[15]
  i7018.queriesHitTriggers = !!i7019[16]
  i7018.queriesStartInColliders = !!i7019[17]
  i7018.callbacksOnDisable = !!i7019[18]
  i7018.reuseCollisionCallbacks = !!i7019[19]
  i7018.autoSyncTransforms = !!i7019[20]
  var i7021 = i7019[21]
  var i7020 = []
  for(var i = 0; i < i7021.length; i += 1) {
    i7020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7021[i + 0]) );
  }
  i7018.collisionMatrix = i7020
  return i7018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7025 = data
  i7024.enabled = !!i7025[0]
  i7024.layerId = i7025[1]
  i7024.otherLayerId = i7025[2]
  return i7024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7027 = data
  var i7029 = i7027[0]
  var i7028 = []
  for(var i = 0; i < i7029.length; i += 1) {
    i7028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7029[i + 0]) );
  }
  i7026.qualityLevels = i7028
  var i7031 = i7027[1]
  var i7030 = []
  for(var i = 0; i < i7031.length; i += 1) {
    i7030.push( i7031[i + 0] );
  }
  i7026.names = i7030
  i7026.shadows = i7027[2]
  i7026.anisotropicFiltering = i7027[3]
  i7026.antiAliasing = i7027[4]
  i7026.lodBias = i7027[5]
  i7026.shadowCascades = i7027[6]
  i7026.shadowDistance = i7027[7]
  i7026.shadowmaskMode = i7027[8]
  i7026.shadowProjection = i7027[9]
  i7026.shadowResolution = i7027[10]
  i7026.softParticles = !!i7027[11]
  i7026.softVegetation = !!i7027[12]
  i7026.activeColorSpace = i7027[13]
  i7026.desiredColorSpace = i7027[14]
  i7026.masterTextureLimit = i7027[15]
  i7026.maxQueuedFrames = i7027[16]
  i7026.particleRaycastBudget = i7027[17]
  i7026.pixelLightCount = i7027[18]
  i7026.realtimeReflectionProbes = !!i7027[19]
  i7026.shadowCascade2Split = i7027[20]
  i7026.shadowCascade4Split = new pc.Vec3( i7027[21], i7027[22], i7027[23] )
  i7026.streamingMipmapsActive = !!i7027[24]
  i7026.vSyncCount = i7027[25]
  i7026.asyncUploadBufferSize = i7027[26]
  i7026.asyncUploadTimeSlice = i7027[27]
  i7026.billboardsFaceCameraPosition = !!i7027[28]
  i7026.shadowNearPlaneOffset = i7027[29]
  i7026.streamingMipmapsMemoryBudget = i7027[30]
  i7026.maximumLODLevel = i7027[31]
  i7026.streamingMipmapsAddAllCameras = !!i7027[32]
  i7026.streamingMipmapsMaxLevelReduction = i7027[33]
  i7026.streamingMipmapsRenderersPerFrame = i7027[34]
  i7026.resolutionScalingFixedDPIFactor = i7027[35]
  i7026.streamingMipmapsMaxFileIORequests = i7027[36]
  i7026.currentQualityLevel = i7027[37]
  return i7026
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i7034 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i7035 = data
  i7034.xPlacement = i7035[0]
  i7034.yPlacement = i7035[1]
  i7034.xAdvance = i7035[2]
  i7034.yAdvance = i7035[3]
  return i7034
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i7036 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i7037 = data
  i7036.m_GlyphIndex = i7037[0]
  i7036.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i7037[1], i7036.m_GlyphValueRecord)
  return i7036
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i7038 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i7039 = data
  i7038.m_XPlacement = i7039[0]
  i7038.m_YPlacement = i7039[1]
  i7038.m_XAdvance = i7039[2]
  i7038.m_YAdvance = i7039[3]
  return i7038
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[18],"82":[50],"21":[20],"83":[20],"84":[20],"85":[20],"86":[20],"87":[20],"88":[20],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[50],"104":[8],"105":[106],"107":[106],"49":[22],"108":[9],"109":[9],"110":[9],"111":[9],"112":[22],"113":[8,22],"25":[22,23],"114":[22],"115":[23,22],"116":[8],"117":[23,22],"118":[22],"119":[22],"120":[22],"52":[49],"27":[23,22],"121":[22],"51":[49],"122":[22],"123":[22],"124":[22],"125":[22],"126":[22],"127":[22],"128":[22],"129":[22],"130":[22],"131":[23,22],"132":[22],"133":[22],"134":[22],"46":[22],"135":[23,22],"136":[22],"137":[47],"138":[47],"48":[47],"139":[47],"140":[50],"141":[50],"142":[143],"144":[22],"145":[143],"146":[50],"147":[148],"149":[143]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","AnimationController","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","LunaChallenge","UnityEngine.GameObject","FishingRod","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","LowLineRenderer","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Outline","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "61.1";

Deserializers.lunaVersion = "4.1.0";

Deserializers.lunaSHA = "91c879214bba20dae808cf7766c2e7f67914f5b5";

Deserializers.creativeName = "version-1";

Deserializers.lunaAppID = "13949";

Deserializers.projectId = "bbbf5d6b-7dba-4762-ac82-31056fd84bde";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.8.6\ncom.unity.shadergraph: 12.1.7\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "";

Deserializers.iosLink = "";

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1163";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4523";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "f48c14ed-3c80-4b52-96f3-38b86a91e11d";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

