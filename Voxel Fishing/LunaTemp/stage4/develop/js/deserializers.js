var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3510 = root || request.c( 'UnityEngine.JointSpring' )
  var i3511 = data
  i3510.spring = i3511[0]
  i3510.damper = i3511[1]
  i3510.targetPosition = i3511[2]
  return i3510
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3512 = root || request.c( 'UnityEngine.JointMotor' )
  var i3513 = data
  i3512.m_TargetVelocity = i3513[0]
  i3512.m_Force = i3513[1]
  i3512.m_FreeSpin = i3513[2]
  return i3512
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3514 = root || request.c( 'UnityEngine.JointLimits' )
  var i3515 = data
  i3514.m_Min = i3515[0]
  i3514.m_Max = i3515[1]
  i3514.m_Bounciness = i3515[2]
  i3514.m_BounceMinVelocity = i3515[3]
  i3514.m_ContactDistance = i3515[4]
  i3514.minBounce = i3515[5]
  i3514.maxBounce = i3515[6]
  return i3514
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3516 = root || request.c( 'UnityEngine.JointDrive' )
  var i3517 = data
  i3516.m_PositionSpring = i3517[0]
  i3516.m_PositionDamper = i3517[1]
  i3516.m_MaximumForce = i3517[2]
  return i3516
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3518 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3519 = data
  i3518.m_Spring = i3519[0]
  i3518.m_Damper = i3519[1]
  return i3518
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3521 = data
  i3520.m_Limit = i3521[0]
  i3520.m_Bounciness = i3521[1]
  i3520.m_ContactDistance = i3521[2]
  return i3520
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3523 = data
  i3522.m_ExtremumSlip = i3523[0]
  i3522.m_ExtremumValue = i3523[1]
  i3522.m_AsymptoteSlip = i3523[2]
  i3522.m_AsymptoteValue = i3523[3]
  i3522.m_Stiffness = i3523[4]
  return i3522
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3524 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3525 = data
  i3524.m_LowerAngle = i3525[0]
  i3524.m_UpperAngle = i3525[1]
  return i3524
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3526 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3527 = data
  i3526.m_MotorSpeed = i3527[0]
  i3526.m_MaximumMotorTorque = i3527[1]
  return i3526
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3528 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3529 = data
  i3528.m_DampingRatio = i3529[0]
  i3528.m_Frequency = i3529[1]
  i3528.m_Angle = i3529[2]
  return i3528
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3530 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3531 = data
  i3530.m_LowerTranslation = i3531[0]
  i3530.m_UpperTranslation = i3531[1]
  return i3530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3532 = root || new pc.UnityMaterial()
  var i3533 = data
  i3532.name = i3533[0]
  request.r(i3533[1], i3533[2], 0, i3532, 'shader')
  i3532.renderQueue = i3533[3]
  i3532.enableInstancing = !!i3533[4]
  var i3535 = i3533[5]
  var i3534 = []
  for(var i = 0; i < i3535.length; i += 1) {
    i3534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3535[i + 0]) );
  }
  i3532.floatParameters = i3534
  var i3537 = i3533[6]
  var i3536 = []
  for(var i = 0; i < i3537.length; i += 1) {
    i3536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3537[i + 0]) );
  }
  i3532.colorParameters = i3536
  var i3539 = i3533[7]
  var i3538 = []
  for(var i = 0; i < i3539.length; i += 1) {
    i3538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3539[i + 0]) );
  }
  i3532.vectorParameters = i3538
  var i3541 = i3533[8]
  var i3540 = []
  for(var i = 0; i < i3541.length; i += 1) {
    i3540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3541[i + 0]) );
  }
  i3532.textureParameters = i3540
  var i3543 = i3533[9]
  var i3542 = []
  for(var i = 0; i < i3543.length; i += 1) {
    i3542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3543[i + 0]) );
  }
  i3532.materialFlags = i3542
  return i3532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3547 = data
  i3546.name = i3547[0]
  i3546.value = i3547[1]
  return i3546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3551 = data
  i3550.name = i3551[0]
  i3550.value = new pc.Color(i3551[1], i3551[2], i3551[3], i3551[4])
  return i3550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3555 = data
  i3554.name = i3555[0]
  i3554.value = new pc.Vec4( i3555[1], i3555[2], i3555[3], i3555[4] )
  return i3554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3559 = data
  i3558.name = i3559[0]
  request.r(i3559[1], i3559[2], 0, i3558, 'value')
  return i3558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3563 = data
  i3562.name = i3563[0]
  i3562.enabled = !!i3563[1]
  return i3562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3565 = data
  i3564.position = new pc.Vec3( i3565[0], i3565[1], i3565[2] )
  i3564.scale = new pc.Vec3( i3565[3], i3565[4], i3565[5] )
  i3564.rotation = new pc.Quat(i3565[6], i3565[7], i3565[8], i3565[9])
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3567 = data
  i3566.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3567[0], i3566.main)
  i3566.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3567[1], i3566.colorBySpeed)
  i3566.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3567[2], i3566.colorOverLifetime)
  i3566.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3567[3], i3566.emission)
  i3566.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3567[4], i3566.rotationBySpeed)
  i3566.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3567[5], i3566.rotationOverLifetime)
  i3566.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3567[6], i3566.shape)
  i3566.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3567[7], i3566.sizeBySpeed)
  i3566.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3567[8], i3566.sizeOverLifetime)
  i3566.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3567[9], i3566.textureSheetAnimation)
  i3566.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3567[10], i3566.velocityOverLifetime)
  i3566.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3567[11], i3566.noise)
  i3566.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3567[12], i3566.inheritVelocity)
  i3566.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3567[13], i3566.forceOverLifetime)
  i3566.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3567[14], i3566.limitVelocityOverLifetime)
  i3566.useAutoRandomSeed = !!i3567[15]
  i3566.randomSeed = i3567[16]
  return i3566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3568 = root || new pc.ParticleSystemMain()
  var i3569 = data
  i3568.duration = i3569[0]
  i3568.loop = !!i3569[1]
  i3568.prewarm = !!i3569[2]
  i3568.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[3], i3568.startDelay)
  i3568.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[4], i3568.startLifetime)
  i3568.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[5], i3568.startSpeed)
  i3568.startSize3D = !!i3569[6]
  i3568.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[7], i3568.startSizeX)
  i3568.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[8], i3568.startSizeY)
  i3568.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[9], i3568.startSizeZ)
  i3568.startRotation3D = !!i3569[10]
  i3568.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[11], i3568.startRotationX)
  i3568.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[12], i3568.startRotationY)
  i3568.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[13], i3568.startRotationZ)
  i3568.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3569[14], i3568.startColor)
  i3568.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3569[15], i3568.gravityModifier)
  i3568.simulationSpace = i3569[16]
  request.r(i3569[17], i3569[18], 0, i3568, 'customSimulationSpace')
  i3568.simulationSpeed = i3569[19]
  i3568.useUnscaledTime = !!i3569[20]
  i3568.scalingMode = i3569[21]
  i3568.playOnAwake = !!i3569[22]
  i3568.maxParticles = i3569[23]
  i3568.emitterVelocityMode = i3569[24]
  i3568.stopAction = i3569[25]
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3570 = root || new pc.MinMaxCurve()
  var i3571 = data
  i3570.mode = i3571[0]
  i3570.curveMin = new pc.AnimationCurve( { keys_flow: i3571[1] } )
  i3570.curveMax = new pc.AnimationCurve( { keys_flow: i3571[2] } )
  i3570.curveMultiplier = i3571[3]
  i3570.constantMin = i3571[4]
  i3570.constantMax = i3571[5]
  return i3570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3572 = root || new pc.MinMaxGradient()
  var i3573 = data
  i3572.mode = i3573[0]
  i3572.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3573[1], i3572.gradientMin)
  i3572.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3573[2], i3572.gradientMax)
  i3572.colorMin = new pc.Color(i3573[3], i3573[4], i3573[5], i3573[6])
  i3572.colorMax = new pc.Color(i3573[7], i3573[8], i3573[9], i3573[10])
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3575 = data
  i3574.mode = i3575[0]
  var i3577 = i3575[1]
  var i3576 = []
  for(var i = 0; i < i3577.length; i += 1) {
    i3576.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3577[i + 0]) );
  }
  i3574.colorKeys = i3576
  var i3579 = i3575[2]
  var i3578 = []
  for(var i = 0; i < i3579.length; i += 1) {
    i3578.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3579[i + 0]) );
  }
  i3574.alphaKeys = i3578
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3580 = root || new pc.ParticleSystemColorBySpeed()
  var i3581 = data
  i3580.enabled = !!i3581[0]
  i3580.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3581[1], i3580.color)
  i3580.range = new pc.Vec2( i3581[2], i3581[3] )
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3585 = data
  i3584.color = new pc.Color(i3585[0], i3585[1], i3585[2], i3585[3])
  i3584.time = i3585[4]
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3589 = data
  i3588.alpha = i3589[0]
  i3588.time = i3589[1]
  return i3588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3590 = root || new pc.ParticleSystemColorOverLifetime()
  var i3591 = data
  i3590.enabled = !!i3591[0]
  i3590.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3591[1], i3590.color)
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3592 = root || new pc.ParticleSystemEmitter()
  var i3593 = data
  i3592.enabled = !!i3593[0]
  i3592.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[1], i3592.rateOverTime)
  i3592.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3593[2], i3592.rateOverDistance)
  var i3595 = i3593[3]
  var i3594 = []
  for(var i = 0; i < i3595.length; i += 1) {
    i3594.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3595[i + 0]) );
  }
  i3592.bursts = i3594
  return i3592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3598 = root || new pc.ParticleSystemBurst()
  var i3599 = data
  i3598.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3599[0], i3598.count)
  i3598.cycleCount = i3599[1]
  i3598.minCount = i3599[2]
  i3598.maxCount = i3599[3]
  i3598.repeatInterval = i3599[4]
  i3598.time = i3599[5]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3600 = root || new pc.ParticleSystemRotationBySpeed()
  var i3601 = data
  i3600.enabled = !!i3601[0]
  i3600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3601[1], i3600.x)
  i3600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3601[2], i3600.y)
  i3600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3601[3], i3600.z)
  i3600.separateAxes = !!i3601[4]
  i3600.range = new pc.Vec2( i3601[5], i3601[6] )
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3602 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3603 = data
  i3602.enabled = !!i3603[0]
  i3602.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3603[1], i3602.x)
  i3602.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3603[2], i3602.y)
  i3602.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3603[3], i3602.z)
  i3602.separateAxes = !!i3603[4]
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3604 = root || new pc.ParticleSystemShape()
  var i3605 = data
  i3604.enabled = !!i3605[0]
  i3604.shapeType = i3605[1]
  i3604.randomDirectionAmount = i3605[2]
  i3604.sphericalDirectionAmount = i3605[3]
  i3604.randomPositionAmount = i3605[4]
  i3604.alignToDirection = !!i3605[5]
  i3604.radius = i3605[6]
  i3604.radiusMode = i3605[7]
  i3604.radiusSpread = i3605[8]
  i3604.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3605[9], i3604.radiusSpeed)
  i3604.radiusThickness = i3605[10]
  i3604.angle = i3605[11]
  i3604.length = i3605[12]
  i3604.boxThickness = new pc.Vec3( i3605[13], i3605[14], i3605[15] )
  i3604.meshShapeType = i3605[16]
  request.r(i3605[17], i3605[18], 0, i3604, 'mesh')
  request.r(i3605[19], i3605[20], 0, i3604, 'meshRenderer')
  request.r(i3605[21], i3605[22], 0, i3604, 'skinnedMeshRenderer')
  i3604.useMeshMaterialIndex = !!i3605[23]
  i3604.meshMaterialIndex = i3605[24]
  i3604.useMeshColors = !!i3605[25]
  i3604.normalOffset = i3605[26]
  i3604.arc = i3605[27]
  i3604.arcMode = i3605[28]
  i3604.arcSpread = i3605[29]
  i3604.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3605[30], i3604.arcSpeed)
  i3604.donutRadius = i3605[31]
  i3604.position = new pc.Vec3( i3605[32], i3605[33], i3605[34] )
  i3604.rotation = new pc.Vec3( i3605[35], i3605[36], i3605[37] )
  i3604.scale = new pc.Vec3( i3605[38], i3605[39], i3605[40] )
  return i3604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3606 = root || new pc.ParticleSystemSizeBySpeed()
  var i3607 = data
  i3606.enabled = !!i3607[0]
  i3606.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[1], i3606.x)
  i3606.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[2], i3606.y)
  i3606.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3607[3], i3606.z)
  i3606.separateAxes = !!i3607[4]
  i3606.range = new pc.Vec2( i3607[5], i3607[6] )
  return i3606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3608 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3609 = data
  i3608.enabled = !!i3609[0]
  i3608.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3609[1], i3608.x)
  i3608.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3609[2], i3608.y)
  i3608.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3609[3], i3608.z)
  i3608.separateAxes = !!i3609[4]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3610 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3611 = data
  i3610.enabled = !!i3611[0]
  i3610.mode = i3611[1]
  i3610.animation = i3611[2]
  i3610.numTilesX = i3611[3]
  i3610.numTilesY = i3611[4]
  i3610.useRandomRow = !!i3611[5]
  i3610.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[6], i3610.frameOverTime)
  i3610.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[7], i3610.startFrame)
  i3610.cycleCount = i3611[8]
  i3610.rowIndex = i3611[9]
  i3610.flipU = i3611[10]
  i3610.flipV = i3611[11]
  i3610.spriteCount = i3611[12]
  var i3613 = i3611[13]
  var i3612 = []
  for(var i = 0; i < i3613.length; i += 2) {
  request.r(i3613[i + 0], i3613[i + 1], 2, i3612, '')
  }
  i3610.sprites = i3612
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3616 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3617 = data
  i3616.enabled = !!i3617[0]
  i3616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[1], i3616.x)
  i3616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[2], i3616.y)
  i3616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[3], i3616.z)
  i3616.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[4], i3616.speedModifier)
  i3616.space = i3617[5]
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3618 = root || new pc.ParticleSystemNoise()
  var i3619 = data
  i3618.enabled = !!i3619[0]
  i3618.separateAxes = !!i3619[1]
  i3618.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[2], i3618.strengthX)
  i3618.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[3], i3618.strengthY)
  i3618.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[4], i3618.strengthZ)
  i3618.frequency = i3619[5]
  i3618.damping = !!i3619[6]
  i3618.octaveCount = i3619[7]
  i3618.octaveMultiplier = i3619[8]
  i3618.octaveScale = i3619[9]
  i3618.quality = i3619[10]
  i3618.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[11], i3618.scrollSpeed)
  i3618.scrollSpeedMultiplier = i3619[12]
  i3618.remapEnabled = !!i3619[13]
  i3618.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[14], i3618.remapX)
  i3618.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[15], i3618.remapY)
  i3618.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[16], i3618.remapZ)
  i3618.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[17], i3618.positionAmount)
  i3618.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[18], i3618.rotationAmount)
  i3618.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[19], i3618.sizeAmount)
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3620 = root || new pc.ParticleSystemInheritVelocity()
  var i3621 = data
  i3620.enabled = !!i3621[0]
  i3620.mode = i3621[1]
  i3620.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3621[2], i3620.curve)
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3622 = root || new pc.ParticleSystemForceOverLifetime()
  var i3623 = data
  i3622.enabled = !!i3623[0]
  i3622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[1], i3622.x)
  i3622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[2], i3622.y)
  i3622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3623[3], i3622.z)
  i3622.space = i3623[4]
  i3622.randomized = !!i3623[5]
  return i3622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3624 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3625 = data
  i3624.enabled = !!i3625[0]
  i3624.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[1], i3624.limitX)
  i3624.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[2], i3624.limitY)
  i3624.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[3], i3624.limitZ)
  i3624.dampen = i3625[4]
  i3624.separateAxes = !!i3625[5]
  i3624.space = i3625[6]
  i3624.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3625[7], i3624.drag)
  i3624.multiplyDragByParticleSize = !!i3625[8]
  i3624.multiplyDragByParticleVelocity = !!i3625[9]
  return i3624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3627 = data
  i3626.enabled = !!i3627[0]
  request.r(i3627[1], i3627[2], 0, i3626, 'sharedMaterial')
  var i3629 = i3627[3]
  var i3628 = []
  for(var i = 0; i < i3629.length; i += 2) {
  request.r(i3629[i + 0], i3629[i + 1], 2, i3628, '')
  }
  i3626.sharedMaterials = i3628
  i3626.receiveShadows = !!i3627[4]
  i3626.shadowCastingMode = i3627[5]
  i3626.sortingLayerID = i3627[6]
  i3626.sortingOrder = i3627[7]
  i3626.lightmapIndex = i3627[8]
  i3626.lightmapSceneIndex = i3627[9]
  i3626.lightmapScaleOffset = new pc.Vec4( i3627[10], i3627[11], i3627[12], i3627[13] )
  i3626.lightProbeUsage = i3627[14]
  i3626.reflectionProbeUsage = i3627[15]
  request.r(i3627[16], i3627[17], 0, i3626, 'mesh')
  i3626.meshCount = i3627[18]
  i3626.activeVertexStreamsCount = i3627[19]
  i3626.alignment = i3627[20]
  i3626.renderMode = i3627[21]
  i3626.sortMode = i3627[22]
  i3626.lengthScale = i3627[23]
  i3626.velocityScale = i3627[24]
  i3626.cameraVelocityScale = i3627[25]
  i3626.normalDirection = i3627[26]
  i3626.sortingFudge = i3627[27]
  i3626.minParticleSize = i3627[28]
  i3626.maxParticleSize = i3627[29]
  i3626.pivot = new pc.Vec3( i3627[30], i3627[31], i3627[32] )
  request.r(i3627[33], i3627[34], 0, i3626, 'trailMaterial')
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3633 = data
  i3632.name = i3633[0]
  i3632.tag = i3633[1]
  i3632.enabled = !!i3633[2]
  i3632.isStatic = !!i3633[3]
  i3632.layer = i3633[4]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3635 = data
  i3634.name = i3635[0]
  i3634.width = i3635[1]
  i3634.height = i3635[2]
  i3634.mipmapCount = i3635[3]
  i3634.anisoLevel = i3635[4]
  i3634.filterMode = i3635[5]
  i3634.hdr = !!i3635[6]
  i3634.format = i3635[7]
  i3634.wrapMode = i3635[8]
  i3634.alphaIsTransparency = !!i3635[9]
  i3634.alphaSource = i3635[10]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3637 = data
  request.r(i3637[0], i3637[1], 0, i3636, 'sharedMesh')
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3639 = data
  request.r(i3639[0], i3639[1], 0, i3638, 'additionalVertexStreams')
  i3638.enabled = !!i3639[2]
  request.r(i3639[3], i3639[4], 0, i3638, 'sharedMaterial')
  var i3641 = i3639[5]
  var i3640 = []
  for(var i = 0; i < i3641.length; i += 2) {
  request.r(i3641[i + 0], i3641[i + 1], 2, i3640, '')
  }
  i3638.sharedMaterials = i3640
  i3638.receiveShadows = !!i3639[6]
  i3638.shadowCastingMode = i3639[7]
  i3638.sortingLayerID = i3639[8]
  i3638.sortingOrder = i3639[9]
  i3638.lightmapIndex = i3639[10]
  i3638.lightmapSceneIndex = i3639[11]
  i3638.lightmapScaleOffset = new pc.Vec4( i3639[12], i3639[13], i3639[14], i3639[15] )
  i3638.lightProbeUsage = i3639[16]
  i3638.reflectionProbeUsage = i3639[17]
  return i3638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3643 = data
  i3642.name = i3643[0]
  i3642.halfPrecision = !!i3643[1]
  i3642.vertexCount = i3643[2]
  i3642.aabb = i3643[3]
  var i3645 = i3643[4]
  var i3644 = []
  for(var i = 0; i < i3645.length; i += 1) {
    i3644.push( !!i3645[i + 0] );
  }
  i3642.streams = i3644
  i3642.vertices = i3643[5]
  var i3647 = i3643[6]
  var i3646 = []
  for(var i = 0; i < i3647.length; i += 1) {
    i3646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3647[i + 0]) );
  }
  i3642.subMeshes = i3646
  var i3649 = i3643[7]
  var i3648 = []
  for(var i = 0; i < i3649.length; i += 16) {
    i3648.push( new pc.Mat4().setData(i3649[i + 0], i3649[i + 1], i3649[i + 2], i3649[i + 3],  i3649[i + 4], i3649[i + 5], i3649[i + 6], i3649[i + 7],  i3649[i + 8], i3649[i + 9], i3649[i + 10], i3649[i + 11],  i3649[i + 12], i3649[i + 13], i3649[i + 14], i3649[i + 15]) );
  }
  i3642.bindposes = i3648
  var i3651 = i3643[8]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 1) {
    i3650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3651[i + 0]) );
  }
  i3642.blendShapes = i3650
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3657 = data
  i3656.triangles = i3657[0]
  return i3656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3663 = data
  i3662.name = i3663[0]
  var i3665 = i3663[1]
  var i3664 = []
  for(var i = 0; i < i3665.length; i += 1) {
    i3664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3665[i + 0]) );
  }
  i3662.frames = i3664
  return i3662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3667 = data
  i3666.pivot = new pc.Vec2( i3667[0], i3667[1] )
  i3666.anchorMin = new pc.Vec2( i3667[2], i3667[3] )
  i3666.anchorMax = new pc.Vec2( i3667[4], i3667[5] )
  i3666.sizeDelta = new pc.Vec2( i3667[6], i3667[7] )
  i3666.anchoredPosition3D = new pc.Vec3( i3667[8], i3667[9], i3667[10] )
  i3666.rotation = new pc.Quat(i3667[11], i3667[12], i3667[13], i3667[14])
  i3666.scale = new pc.Vec3( i3667[15], i3667[16], i3667[17] )
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3669 = data
  i3668.cullTransparentMesh = !!i3669[0]
  return i3668
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3670 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3671 = data
  i3670.m_hasFontAssetChanged = !!i3671[0]
  request.r(i3671[1], i3671[2], 0, i3670, 'm_baseMaterial')
  i3670.m_maskOffset = new pc.Vec4( i3671[3], i3671[4], i3671[5], i3671[6] )
  i3670.m_text = i3671[7]
  i3670.m_isRightToLeft = !!i3671[8]
  request.r(i3671[9], i3671[10], 0, i3670, 'm_fontAsset')
  request.r(i3671[11], i3671[12], 0, i3670, 'm_sharedMaterial')
  var i3673 = i3671[13]
  var i3672 = []
  for(var i = 0; i < i3673.length; i += 2) {
  request.r(i3673[i + 0], i3673[i + 1], 2, i3672, '')
  }
  i3670.m_fontSharedMaterials = i3672
  request.r(i3671[14], i3671[15], 0, i3670, 'm_fontMaterial')
  var i3675 = i3671[16]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 2) {
  request.r(i3675[i + 0], i3675[i + 1], 2, i3674, '')
  }
  i3670.m_fontMaterials = i3674
  i3670.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3671[17], i3671[18], i3671[19], i3671[20])
  i3670.m_fontColor = new pc.Color(i3671[21], i3671[22], i3671[23], i3671[24])
  i3670.m_enableVertexGradient = !!i3671[25]
  i3670.m_colorMode = i3671[26]
  i3670.m_fontColorGradient = request.d('TMPro.VertexGradient', i3671[27], i3670.m_fontColorGradient)
  request.r(i3671[28], i3671[29], 0, i3670, 'm_fontColorGradientPreset')
  request.r(i3671[30], i3671[31], 0, i3670, 'm_spriteAsset')
  i3670.m_tintAllSprites = !!i3671[32]
  request.r(i3671[33], i3671[34], 0, i3670, 'm_StyleSheet')
  i3670.m_TextStyleHashCode = i3671[35]
  i3670.m_overrideHtmlColors = !!i3671[36]
  i3670.m_faceColor = UnityEngine.Color32.ConstructColor(i3671[37], i3671[38], i3671[39], i3671[40])
  i3670.m_fontSize = i3671[41]
  i3670.m_fontSizeBase = i3671[42]
  i3670.m_fontWeight = i3671[43]
  i3670.m_enableAutoSizing = !!i3671[44]
  i3670.m_fontSizeMin = i3671[45]
  i3670.m_fontSizeMax = i3671[46]
  i3670.m_fontStyle = i3671[47]
  i3670.m_HorizontalAlignment = i3671[48]
  i3670.m_VerticalAlignment = i3671[49]
  i3670.m_textAlignment = i3671[50]
  i3670.m_characterSpacing = i3671[51]
  i3670.m_wordSpacing = i3671[52]
  i3670.m_lineSpacing = i3671[53]
  i3670.m_lineSpacingMax = i3671[54]
  i3670.m_paragraphSpacing = i3671[55]
  i3670.m_charWidthMaxAdj = i3671[56]
  i3670.m_enableWordWrapping = !!i3671[57]
  i3670.m_wordWrappingRatios = i3671[58]
  i3670.m_overflowMode = i3671[59]
  request.r(i3671[60], i3671[61], 0, i3670, 'm_linkedTextComponent')
  request.r(i3671[62], i3671[63], 0, i3670, 'parentLinkedComponent')
  i3670.m_enableKerning = !!i3671[64]
  i3670.m_enableExtraPadding = !!i3671[65]
  i3670.checkPaddingRequired = !!i3671[66]
  i3670.m_isRichText = !!i3671[67]
  i3670.m_parseCtrlCharacters = !!i3671[68]
  i3670.m_isOrthographic = !!i3671[69]
  i3670.m_isCullingEnabled = !!i3671[70]
  i3670.m_horizontalMapping = i3671[71]
  i3670.m_verticalMapping = i3671[72]
  i3670.m_uvLineOffset = i3671[73]
  i3670.m_geometrySortingOrder = i3671[74]
  i3670.m_IsTextObjectScaleStatic = !!i3671[75]
  i3670.m_VertexBufferAutoSizeReduction = !!i3671[76]
  i3670.m_useMaxVisibleDescender = !!i3671[77]
  i3670.m_pageToDisplay = i3671[78]
  i3670.m_margin = new pc.Vec4( i3671[79], i3671[80], i3671[81], i3671[82] )
  i3670.m_isUsingLegacyAnimationComponent = !!i3671[83]
  i3670.m_isVolumetricText = !!i3671[84]
  request.r(i3671[85], i3671[86], 0, i3670, 'm_Material')
  i3670.m_Maskable = !!i3671[87]
  i3670.m_Color = new pc.Color(i3671[88], i3671[89], i3671[90], i3671[91])
  i3670.m_RaycastTarget = !!i3671[92]
  i3670.m_RaycastPadding = new pc.Vec4( i3671[93], i3671[94], i3671[95], i3671[96] )
  return i3670
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3676 = root || request.c( 'TMPro.VertexGradient' )
  var i3677 = data
  i3676.topLeft = new pc.Color(i3677[0], i3677[1], i3677[2], i3677[3])
  i3676.topRight = new pc.Color(i3677[4], i3677[5], i3677[6], i3677[7])
  i3676.bottomLeft = new pc.Color(i3677[8], i3677[9], i3677[10], i3677[11])
  i3676.bottomRight = new pc.Color(i3677[12], i3677[13], i3677[14], i3677[15])
  return i3676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3679 = data
  request.r(i3679[0], i3679[1], 0, i3678, 'animatorController')
  i3678.updateMode = i3679[2]
  var i3681 = i3679[3]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 2) {
  request.r(i3681[i + 0], i3681[i + 1], 2, i3680, '')
  }
  i3678.humanBones = i3680
  i3678.enabled = !!i3679[4]
  return i3678
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3684 = root || request.c( 'UnityEngine.UI.Image' )
  var i3685 = data
  request.r(i3685[0], i3685[1], 0, i3684, 'm_Sprite')
  i3684.m_Type = i3685[2]
  i3684.m_PreserveAspect = !!i3685[3]
  i3684.m_FillCenter = !!i3685[4]
  i3684.m_FillMethod = i3685[5]
  i3684.m_FillAmount = i3685[6]
  i3684.m_FillClockwise = !!i3685[7]
  i3684.m_FillOrigin = i3685[8]
  i3684.m_UseSpriteMesh = !!i3685[9]
  i3684.m_PixelsPerUnitMultiplier = i3685[10]
  request.r(i3685[11], i3685[12], 0, i3684, 'm_Material')
  i3684.m_Maskable = !!i3685[13]
  i3684.m_Color = new pc.Color(i3685[14], i3685[15], i3685[16], i3685[17])
  i3684.m_RaycastTarget = !!i3685[18]
  i3684.m_RaycastPadding = new pc.Vec4( i3685[19], i3685[20], i3685[21], i3685[22] )
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3687 = data
  i3686.center = new pc.Vec3( i3687[0], i3687[1], i3687[2] )
  i3686.size = new pc.Vec3( i3687[3], i3687[4], i3687[5] )
  i3686.enabled = !!i3687[6]
  i3686.isTrigger = !!i3687[7]
  request.r(i3687[8], i3687[9], 0, i3686, 'material')
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3689 = data
  i3688.enabled = !!i3689[0]
  request.r(i3689[1], i3689[2], 0, i3688, 'sharedMaterial')
  var i3691 = i3689[3]
  var i3690 = []
  for(var i = 0; i < i3691.length; i += 2) {
  request.r(i3691[i + 0], i3691[i + 1], 2, i3690, '')
  }
  i3688.sharedMaterials = i3690
  i3688.receiveShadows = !!i3689[4]
  i3688.shadowCastingMode = i3689[5]
  i3688.sortingLayerID = i3689[6]
  i3688.sortingOrder = i3689[7]
  i3688.lightmapIndex = i3689[8]
  i3688.lightmapSceneIndex = i3689[9]
  i3688.lightmapScaleOffset = new pc.Vec4( i3689[10], i3689[11], i3689[12], i3689[13] )
  i3688.lightProbeUsage = i3689[14]
  i3688.reflectionProbeUsage = i3689[15]
  request.r(i3689[16], i3689[17], 0, i3688, 'sharedMesh')
  var i3693 = i3689[18]
  var i3692 = []
  for(var i = 0; i < i3693.length; i += 2) {
  request.r(i3693[i + 0], i3693[i + 1], 2, i3692, '')
  }
  i3688.bones = i3692
  i3688.updateWhenOffscreen = !!i3689[19]
  i3688.localBounds = i3689[20]
  request.r(i3689[21], i3689[22], 0, i3688, 'rootBone')
  var i3695 = i3689[23]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 1) {
    i3694.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3695[i + 0]) );
  }
  i3688.blendShapesWeights = i3694
  return i3688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3699 = data
  i3698.weight = i3699[0]
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3701 = data
  i3700.textureMode = i3701[0]
  i3700.alignment = i3701[1]
  i3700.widthCurve = new pc.AnimationCurve( { keys_flow: i3701[2] } )
  i3700.colorGradient = i3701[3] ? new pc.ColorGradient(i3701[3][0], i3701[3][1], i3701[3][2]) : null
  var i3703 = i3701[4]
  var i3702 = []
  for(var i = 0; i < i3703.length; i += 3) {
    i3702.push( new pc.Vec3( i3703[i + 0], i3703[i + 1], i3703[i + 2] ) );
  }
  i3700.positions = i3702
  i3700.positionCount = i3701[5]
  i3700.widthMultiplier = i3701[6]
  i3700.startWidth = i3701[7]
  i3700.endWidth = i3701[8]
  i3700.numCornerVertices = i3701[9]
  i3700.numCapVertices = i3701[10]
  i3700.useWorldSpace = !!i3701[11]
  i3700.loop = !!i3701[12]
  i3700.startColor = new pc.Color(i3701[13], i3701[14], i3701[15], i3701[16])
  i3700.endColor = new pc.Color(i3701[17], i3701[18], i3701[19], i3701[20])
  i3700.generateLightingData = !!i3701[21]
  i3700.enabled = !!i3701[22]
  request.r(i3701[23], i3701[24], 0, i3700, 'sharedMaterial')
  var i3705 = i3701[25]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 2) {
  request.r(i3705[i + 0], i3705[i + 1], 2, i3704, '')
  }
  i3700.sharedMaterials = i3704
  i3700.receiveShadows = !!i3701[26]
  i3700.shadowCastingMode = i3701[27]
  i3700.sortingLayerID = i3701[28]
  i3700.sortingOrder = i3701[29]
  i3700.lightmapIndex = i3701[30]
  i3700.lightmapSceneIndex = i3701[31]
  i3700.lightmapScaleOffset = new pc.Vec4( i3701[32], i3701[33], i3701[34], i3701[35] )
  i3700.lightProbeUsage = i3701[36]
  i3700.reflectionProbeUsage = i3701[37]
  return i3700
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i3708 = root || request.c( 'FishingLine' )
  var i3709 = data
  request.r(i3709[0], i3709[1], 0, i3708, 'line')
  request.r(i3709[2], i3709[3], 0, i3708, 'startPoint')
  request.r(i3709[4], i3709[5], 0, i3708, 'endPoint')
  return i3708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3711 = data
  i3710.mass = i3711[0]
  i3710.drag = i3711[1]
  i3710.angularDrag = i3711[2]
  i3710.useGravity = !!i3711[3]
  i3710.isKinematic = !!i3711[4]
  i3710.constraints = i3711[5]
  i3710.maxAngularVelocity = i3711[6]
  i3710.collisionDetectionMode = i3711[7]
  i3710.interpolation = i3711[8]
  return i3710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i3713 = data
  i3712.swingAxis = new pc.Vec3( i3713[0], i3713[1], i3713[2] )
  i3712.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3713[3], i3712.twistLimitSpring)
  i3712.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3713[4], i3712.swingLimitSpring)
  i3712.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i3713[5], i3712.lowTwistLimit)
  i3712.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i3713[6], i3712.highTwistLimit)
  i3712.swing1Limit = request.d('UnityEngine.SoftJointLimit', i3713[7], i3712.swing1Limit)
  i3712.swing2Limit = request.d('UnityEngine.SoftJointLimit', i3713[8], i3712.swing2Limit)
  request.r(i3713[9], i3713[10], 0, i3712, 'connectedBody')
  i3712.axis = new pc.Vec3( i3713[11], i3713[12], i3713[13] )
  i3712.anchor = new pc.Vec3( i3713[14], i3713[15], i3713[16] )
  i3712.connectedAnchor = new pc.Vec3( i3713[17], i3713[18], i3713[19] )
  i3712.autoConfigureConnectedAnchor = !!i3713[20]
  i3712.massScale = i3713[21]
  i3712.connectedMassScale = i3713[22]
  i3712.enableCollision = !!i3713[23]
  i3712.breakForce = i3713[24]
  i3712.breakTorque = i3713[25]
  return i3712
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i3714 = root || request.c( 'RopeBridge' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, 'StartPoint')
  request.r(i3715[2], i3715[3], 0, i3714, 'EndPoint')
  i3714.ropeSegLen = i3715[4]
  i3714.segmentLength = i3715[5]
  i3714.lineWidth = i3715[6]
  i3714.distOfStartToEnd = i3715[7]
  i3714.lineLengthMultifly = i3715[8]
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3719 = data
  i3718.weight = i3719[0]
  i3718.vertices = i3719[1]
  i3718.normals = i3719[2]
  i3718.tangents = i3719[3]
  return i3718
}

Deserializers["Fish"] = function (request, data, root) {
  var i3720 = root || request.c( 'Fish' )
  var i3721 = data
  i3720.fishType = request.d('FishType', i3721[0], i3720.fishType)
  request.r(i3721[1], i3721[2], 0, i3720, 'fishData')
  i3720.sensingRadius = i3721[3]
  i3720.moveSpeed = i3721[4]
  i3720.followTargetSpeed = i3721[5]
  i3720.rotationSpeed = i3721[6]
  request.r(i3721[7], i3721[8], 0, i3720, 'target')
  i3720.usingMapDataNumber = i3721[9]
  i3720.hooked = !!i3721[10]
  request.r(i3721[11], i3721[12], 0, i3720, 'rigid')
  i3720.dirToHook = new pc.Vec3( i3721[13], i3721[14], i3721[15] )
  request.r(i3721[16], i3721[17], 0, i3720, 'head')
  request.r(i3721[18], i3721[19], 0, i3720, 'mapData')
  request.r(i3721[20], i3721[21], 0, i3720, 'mousePoint')
  return i3720
}

Deserializers["FishType"] = function (request, data, root) {
  var i3722 = root || request.c( 'FishType' )
  var i3723 = data
  i3722.cost = i3723[0]
  i3722.tier = i3723[1]
  i3722.fishNumber = i3723[2]
  i3722.boundSize = new pc.Vec3( i3723[3], i3723[4], i3723[5] )
  return i3722
}

Deserializers["Chest"] = function (request, data, root) {
  var i3724 = root || request.c( 'Chest' )
  var i3725 = data
  request.r(i3725[0], i3725[1], 0, i3724, 'chestMover')
  i3724.chestTier = i3725[2]
  request.r(i3725[3], i3725[4], 0, i3724, 'line')
  i3724.chestPullDist = i3725[5]
  i3724.pullForce = i3725[6]
  i3724.fishType = request.d('FishType', i3725[7], i3724.fishType)
  request.r(i3725[8], i3725[9], 0, i3724, 'fishData')
  i3724.sensingRadius = i3725[10]
  i3724.moveSpeed = i3725[11]
  i3724.followTargetSpeed = i3725[12]
  i3724.rotationSpeed = i3725[13]
  request.r(i3725[14], i3725[15], 0, i3724, 'target')
  i3724.usingMapDataNumber = i3725[16]
  i3724.hooked = !!i3725[17]
  request.r(i3725[18], i3725[19], 0, i3724, 'rigid2')
  request.r(i3725[20], i3725[21], 0, i3724, 'rigid')
  i3724.dirToHook = new pc.Vec3( i3725[22], i3725[23], i3725[24] )
  request.r(i3725[25], i3725[26], 0, i3724, 'head')
  request.r(i3725[27], i3725[28], 0, i3724, 'mapData')
  request.r(i3725[29], i3725[30], 0, i3724, 'mousePoint')
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3727 = data
  i3726.enabled = !!i3727[0]
  i3726.type = i3727[1]
  i3726.color = new pc.Color(i3727[2], i3727[3], i3727[4], i3727[5])
  i3726.cullingMask = i3727[6]
  i3726.intensity = i3727[7]
  i3726.range = i3727[8]
  i3726.spotAngle = i3727[9]
  i3726.shadows = i3727[10]
  i3726.shadowNormalBias = i3727[11]
  i3726.shadowBias = i3727[12]
  i3726.shadowStrength = i3727[13]
  i3726.shadowResolution = i3727[14]
  i3726.lightmapBakeType = i3727[15]
  i3726.renderMode = i3727[16]
  request.r(i3727[17], i3727[18], 0, i3726, 'cookie')
  i3726.cookieSize = i3727[19]
  return i3726
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i3728 = root || request.c( 'ChestMover' )
  var i3729 = data
  request.r(i3729[0], i3729[1], 0, i3728, 'chest')
  return i3728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3731 = data
  i3730.enabled = !!i3731[0]
  request.r(i3731[1], i3731[2], 0, i3730, 'sharedMaterial')
  var i3733 = i3731[3]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 2) {
  request.r(i3733[i + 0], i3733[i + 1], 2, i3732, '')
  }
  i3730.sharedMaterials = i3732
  i3730.receiveShadows = !!i3731[4]
  i3730.shadowCastingMode = i3731[5]
  i3730.sortingLayerID = i3731[6]
  i3730.sortingOrder = i3731[7]
  i3730.lightmapIndex = i3731[8]
  i3730.lightmapSceneIndex = i3731[9]
  i3730.lightmapScaleOffset = new pc.Vec4( i3731[10], i3731[11], i3731[12], i3731[13] )
  i3730.lightProbeUsage = i3731[14]
  i3730.reflectionProbeUsage = i3731[15]
  i3730.color = new pc.Color(i3731[16], i3731[17], i3731[18], i3731[19])
  request.r(i3731[20], i3731[21], 0, i3730, 'sprite')
  i3730.flipX = !!i3731[22]
  i3730.flipY = !!i3731[23]
  i3730.drawMode = i3731[24]
  i3730.size = new pc.Vec2( i3731[25], i3731[26] )
  i3730.tileMode = i3731[27]
  i3730.adaptiveModeThreshold = i3731[28]
  i3730.maskInteraction = i3731[29]
  i3730.spriteSortPoint = i3731[30]
  return i3730
}

Deserializers["FlockUnit"] = function (request, data, root) {
  var i3734 = root || request.c( 'FlockUnit' )
  var i3735 = data
  i3734.FOVAngle = i3735[0]
  i3734.smoothDamp = i3735[1]
  i3734.obstacleMask = UnityEngine.LayerMask.FromIntegerValue( i3735[2] )
  var i3737 = i3735[3]
  var i3736 = []
  for(var i = 0; i < i3737.length; i += 3) {
    i3736.push( new pc.Vec3( i3737[i + 0], i3737[i + 1], i3737[i + 2] ) );
  }
  i3734.directionsToCheckWhenAvoidingObstacles = i3736
  return i3734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3739 = data
  i3738.enabled = !!i3739[0]
  i3738.isTrigger = !!i3739[1]
  request.r(i3739[2], i3739[3], 0, i3738, 'material')
  i3738.center = new pc.Vec3( i3739[4], i3739[5], i3739[6] )
  i3738.radius = i3739[7]
  return i3738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3741 = data
  i3740.name = i3741[0]
  i3740.atlasId = i3741[1]
  i3740.mipmapCount = i3741[2]
  i3740.hdr = !!i3741[3]
  i3740.size = i3741[4]
  i3740.anisoLevel = i3741[5]
  i3740.filterMode = i3741[6]
  i3740.wrapMode = i3741[7]
  var i3743 = i3741[8]
  var i3742 = []
  for(var i = 0; i < i3743.length; i += 4) {
    i3742.push( UnityEngine.Rect.MinMaxRect(i3743[i + 0], i3743[i + 1], i3743[i + 2], i3743[i + 3]) );
  }
  i3740.rects = i3742
  return i3740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3747 = data
  i3746.name = i3747[0]
  i3746.index = i3747[1]
  i3746.startup = !!i3747[2]
  return i3746
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i3748 = root || request.c( 'FishingRod' )
  var i3749 = data
  i3748.hookThrowForce = i3749[0]
  i3748.lineForce = i3749[1]
  i3748.maxPullingForce = i3749[2]
  i3748.minPullingForce = i3749[3]
  i3748.currentPullingForece = i3749[4]
  i3748.maxLine = i3749[5]
  i3748.pullingSpeed = i3749[6]
  i3748.playAdsPullCount = i3749[7]
  i3748.isStart = !!i3749[8]
  request.r(i3749[9], i3749[10], 0, i3748, 'hookRigid')
  request.r(i3749[11], i3749[12], 0, i3748, 'pivot')
  request.r(i3749[13], i3749[14], 0, i3748, 'touchToStartPanel')
  request.r(i3749[15], i3749[16], 0, i3748, 'rodAnimator')
  request.r(i3749[17], i3749[18], 0, i3748, 'fishingHook')
  request.r(i3749[19], i3749[20], 0, i3748, 'touchField')
  request.r(i3749[21], i3749[22], 0, i3748, 'upgradePanel')
  request.r(i3749[23], i3749[24], 0, i3748, 'upgradeButton')
  request.r(i3749[25], i3749[26], 0, i3748, 'depthText')
  request.r(i3749[27], i3749[28], 0, i3748, 'throwTarget1')
  request.r(i3749[29], i3749[30], 0, i3748, 'throwTarget2')
  request.r(i3749[31], i3749[32], 0, i3748, 'hookObject')
  request.r(i3749[33], i3749[34], 0, i3748, 'playerObject')
  return i3748
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i3750 = root || request.c( 'FishingLogic' )
  var i3751 = data
  request.r(i3751[0], i3751[1], 0, i3750, 'joint')
  i3750.biteBate = !!i3751[2]
  i3750.pulling = !!i3751[3]
  i3750.enablePulling = !!i3751[4]
  request.r(i3751[5], i3751[6], 0, i3750, 'rodAnimator')
  request.r(i3751[7], i3751[8], 0, i3750, 'startButton')
  request.r(i3751[9], i3751[10], 0, i3750, 'catchSlider')
  request.r(i3751[11], i3751[12], 0, i3750, 'catchButton')
  request.r(i3751[13], i3751[14], 0, i3750, 'fishingRod')
  request.r(i3751[15], i3751[16], 0, i3750, 'arrow')
  request.r(i3751[17], i3751[18], 0, i3750, 'fishingRodSkinned')
  request.r(i3751[19], i3751[20], 0, i3750, 'bubbleParticle')
  request.r(i3751[21], i3751[22], 0, i3750, 'hookRigid')
  request.r(i3751[23], i3751[24], 0, i3750, 'hook')
  return i3750
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i3752 = root || request.c( 'Upgrades' )
  var i3753 = data
  i3752.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i3753[0], i3752.lineLengthUpgrade)
  i3752.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i3753[1], i3752.hookMaxUpgrade)
  i3752.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i3753[2], i3752.hookMoveSpeedUpgrade)
  request.r(i3753[3], i3753[4], 0, i3752, 'hook')
  request.r(i3753[5], i3753[6], 0, i3752, 'rod')
  request.r(i3753[7], i3753[8], 0, i3752, 'touchField')
  request.r(i3753[9], i3753[10], 0, i3752, 'upgradePanel')
  request.r(i3753[11], i3753[12], 0, i3752, 'upgradeTap')
  request.r(i3753[13], i3753[14], 0, i3752, 'closeTap')
  request.r(i3753[15], i3753[16], 0, i3752, 'tapToStartText')
  return i3752
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i3754 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i3755 = data
  i3754.currentLevel = i3755[0]
  i3754.maxLevel = i3755[1]
  i3754.upgradeValue = i3755[2]
  i3754.upgradeNeedyCost = i3755[3]
  i3754.upgradeCostIncreaseValue = i3755[4]
  i3754.upgradeCostIncreaseValueMultifly = i3755[5]
  request.r(i3755[6], i3755[7], 0, i3754, 'levelText')
  request.r(i3755[8], i3755[9], 0, i3754, 'needyCostText')
  request.r(i3755[10], i3755[11], 0, i3754, 'cover')
  request.r(i3755[12], i3755[13], 0, i3754, 'rod')
  return i3754
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i3756 = root || request.c( 'Upgrades+CountUpgrade' )
  var i3757 = data
  i3756.currentLevel = i3757[0]
  i3756.maxLevel = i3757[1]
  i3756.upgradeValue = i3757[2]
  i3756.upgradeNeedyCost = i3757[3]
  i3756.upgradeCostIncreaseValue = i3757[4]
  i3756.upgradeCostIncreaseValueMultifly = i3757[5]
  request.r(i3757[6], i3757[7], 0, i3756, 'levelText')
  request.r(i3757[8], i3757[9], 0, i3756, 'needyCostText')
  request.r(i3757[10], i3757[11], 0, i3756, 'cover')
  request.r(i3757[12], i3757[13], 0, i3756, 'hook')
  return i3756
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i3758 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i3759 = data
  i3758.currentLevel = i3759[0]
  i3758.maxLevel = i3759[1]
  i3758.upgradeValue = i3759[2]
  i3758.upgradeNeedyCost = i3759[3]
  i3758.upgradeCostIncreaseValue = i3759[4]
  i3758.upgradeCostIncreaseValueMultifly = i3759[5]
  request.r(i3759[6], i3759[7], 0, i3758, 'levelText')
  request.r(i3759[8], i3759[9], 0, i3758, 'needyCostText')
  request.r(i3759[10], i3759[11], 0, i3758, 'cover')
  request.r(i3759[12], i3759[13], 0, i3758, 'touchField')
  return i3758
}

Deserializers["FishPool"] = function (request, data, root) {
  var i3760 = root || request.c( 'FishPool' )
  var i3761 = data
  i3760.oneTierFishList = request.d('FishList', i3761[0], i3760.oneTierFishList)
  i3760.twoTierFishList = request.d('FishList', i3761[1], i3760.twoTierFishList)
  i3760.threeTierFishList = request.d('FishList', i3761[2], i3760.threeTierFishList)
  i3760.fourTierFishList = request.d('FishList', i3761[3], i3760.fourTierFishList)
  i3760.fiveTierFishList = request.d('FishList', i3761[4], i3760.fiveTierFishList)
  i3760.chestList_one = request.d('FishList', i3761[5], i3760.chestList_one)
  i3760.chestList_two = request.d('FishList', i3761[6], i3760.chestList_two)
  i3760.chestList_three = request.d('FishList', i3761[7], i3760.chestList_three)
  i3760.chestMover = request.d('FishList', i3761[8], i3760.chestMover)
  var i3763 = i3761[9]
  var i3762 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i3763.length; i += 2) {
  request.r(i3763[i + 0], i3763[i + 1], 1, i3762, '')
  }
  i3760.generatedFishList = i3762
  request.r(i3761[10], i3761[11], 0, i3760, 'poolParent')
  return i3760
}

Deserializers["FishList"] = function (request, data, root) {
  var i3764 = root || request.c( 'FishList' )
  var i3765 = data
  var i3767 = i3765[0]
  var i3766 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3767.length; i += 2) {
  request.r(i3767[i + 0], i3767[i + 1], 1, i3766, '')
  }
  i3764.fishList = i3766
  var i3769 = i3765[1]
  var i3768 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3769.length; i += 2) {
  request.r(i3769[i + 0], i3769[i + 1], 1, i3768, '')
  }
  i3764.spawnPoints = i3768
  return i3764
}

Deserializers["DataManager"] = function (request, data, root) {
  var i3776 = root || request.c( 'DataManager' )
  var i3777 = data
  request.r(i3777[0], i3777[1], 0, i3776, 'setting')
  request.r(i3777[2], i3777[3], 0, i3776, 'soundSlider')
  request.r(i3777[4], i3777[5], 0, i3776, 'hapticSlider')
  i3776.gameDataFileName = i3777[6]
  i3776._gameData = request.d('GameData', i3777[7], i3776._gameData)
  request.r(i3777[8], i3777[9], 0, i3776, 'soundSliderHandleText')
  request.r(i3777[10], i3777[11], 0, i3776, 'hapticSliderHandleText')
  return i3776
}

Deserializers["GameData"] = function (request, data, root) {
  var i3778 = root || request.c( 'GameData' )
  var i3779 = data
  i3778.money = i3779[0]
  i3778.needleUpgrade = i3779[1]
  i3778.lineUpgrade = i3779[2]
  i3778.reelUpgrade = i3779[3]
  i3778.sound = i3779[4]
  i3778.haptic = i3779[5]
  return i3778
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3780 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3781 = data
  request.r(i3781[0], i3781[1], 0, i3780, 'm_FirstSelected')
  i3780.m_sendNavigationEvents = !!i3781[2]
  i3780.m_DragThreshold = i3781[3]
  return i3780
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3782 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3783 = data
  i3782.m_HorizontalAxis = i3783[0]
  i3782.m_VerticalAxis = i3783[1]
  i3782.m_SubmitButton = i3783[2]
  i3782.m_CancelButton = i3783[3]
  i3782.m_InputActionsPerSecond = i3783[4]
  i3782.m_RepeatDelay = i3783[5]
  i3782.m_ForceModuleActive = !!i3783[6]
  i3782.m_SendPointerHoverToParent = !!i3783[7]
  return i3782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3785 = data
  i3784.enabled = !!i3785[0]
  i3784.planeDistance = i3785[1]
  i3784.referencePixelsPerUnit = i3785[2]
  i3784.isFallbackOverlay = !!i3785[3]
  i3784.renderMode = i3785[4]
  i3784.renderOrder = i3785[5]
  i3784.sortingLayerName = i3785[6]
  i3784.sortingOrder = i3785[7]
  i3784.scaleFactor = i3785[8]
  request.r(i3785[9], i3785[10], 0, i3784, 'worldCamera')
  i3784.overrideSorting = !!i3785[11]
  i3784.pixelPerfect = !!i3785[12]
  i3784.targetDisplay = i3785[13]
  i3784.overridePixelPerfect = !!i3785[14]
  return i3784
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3786 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3787 = data
  i3786.m_UiScaleMode = i3787[0]
  i3786.m_ReferencePixelsPerUnit = i3787[1]
  i3786.m_ScaleFactor = i3787[2]
  i3786.m_ReferenceResolution = new pc.Vec2( i3787[3], i3787[4] )
  i3786.m_ScreenMatchMode = i3787[5]
  i3786.m_MatchWidthOrHeight = i3787[6]
  i3786.m_PhysicalUnit = i3787[7]
  i3786.m_FallbackScreenDPI = i3787[8]
  i3786.m_DefaultSpriteDPI = i3787[9]
  i3786.m_DynamicPixelsPerUnit = i3787[10]
  i3786.m_PresetInfoIsWorld = !!i3787[11]
  return i3786
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3788 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3789 = data
  i3788.m_IgnoreReversedGraphics = !!i3789[0]
  i3788.m_BlockingObjects = i3789[1]
  i3788.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3789[2] )
  return i3788
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3790 = root || request.c( 'UIManager' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'challengeTarget')
  request.r(i3791[2], i3791[3], 0, i3790, 'challengeText')
  request.r(i3791[4], i3791[5], 0, i3790, 'versionText')
  i3790.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3791[6] )
  i3790.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3791[7] )
  request.r(i3791[8], i3791[9], 0, i3790, 'uiCamera')
  var i3793 = i3791[10]
  var i3792 = []
  for(var i = 0; i < i3793.length; i += 2) {
  request.r(i3793[i + 0], i3793[i + 1], 2, i3792, '')
  }
  i3790.pictureModeObjects = i3792
  return i3790
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i3796 = root || request.c( 'FixedTouchField' )
  var i3797 = data
  i3796.TouchDist = new pc.Vec2( i3797[0], i3797[1] )
  i3796.PointerOld = new pc.Vec2( i3797[2], i3797[3] )
  i3796.Pressed = !!i3797[4]
  i3796.hookMoveSpeed = i3797[5]
  request.r(i3797[6], i3797[7], 0, i3796, 'hook')
  request.r(i3797[8], i3797[9], 0, i3796, 'logic')
  request.r(i3797[10], i3797[11], 0, i3796, 'joystick_Background')
  request.r(i3797[12], i3797[13], 0, i3796, 'joystick_Handle')
  request.r(i3797[14], i3797[15], 0, i3796, 'canvas')
  request.r(i3797[16], i3797[17], 0, i3796, 'newCamera')
  i3796.clampDist = i3797[18]
  return i3796
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.UI.Button' )
  var i3799 = data
  i3798.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3799[0], i3798.m_OnClick)
  i3798.m_Navigation = request.d('UnityEngine.UI.Navigation', i3799[1], i3798.m_Navigation)
  i3798.m_Transition = i3799[2]
  i3798.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3799[3], i3798.m_Colors)
  i3798.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3799[4], i3798.m_SpriteState)
  i3798.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3799[5], i3798.m_AnimationTriggers)
  i3798.m_Interactable = !!i3799[6]
  request.r(i3799[7], i3799[8], 0, i3798, 'm_TargetGraphic')
  return i3798
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3800 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3801 = data
  i3800.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3801[0], i3800.m_PersistentCalls)
  return i3800
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3802 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3803 = data
  var i3805 = i3803[0]
  var i3804 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3805.length; i += 1) {
    i3804.add(request.d('UnityEngine.Events.PersistentCall', i3805[i + 0]));
  }
  i3802.m_Calls = i3804
  return i3802
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3808 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3809 = data
  request.r(i3809[0], i3809[1], 0, i3808, 'm_Target')
  i3808.m_TargetAssemblyTypeName = i3809[2]
  i3808.m_MethodName = i3809[3]
  i3808.m_Mode = i3809[4]
  i3808.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3809[5], i3808.m_Arguments)
  i3808.m_CallState = i3809[6]
  return i3808
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3810 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3811 = data
  request.r(i3811[0], i3811[1], 0, i3810, 'm_ObjectArgument')
  i3810.m_ObjectArgumentAssemblyTypeName = i3811[2]
  i3810.m_IntArgument = i3811[3]
  i3810.m_FloatArgument = i3811[4]
  i3810.m_StringArgument = i3811[5]
  i3810.m_BoolArgument = !!i3811[6]
  return i3810
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3812 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3813 = data
  i3812.m_Mode = i3813[0]
  i3812.m_WrapAround = !!i3813[1]
  request.r(i3813[2], i3813[3], 0, i3812, 'm_SelectOnUp')
  request.r(i3813[4], i3813[5], 0, i3812, 'm_SelectOnDown')
  request.r(i3813[6], i3813[7], 0, i3812, 'm_SelectOnLeft')
  request.r(i3813[8], i3813[9], 0, i3812, 'm_SelectOnRight')
  return i3812
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3815 = data
  i3814.m_NormalColor = new pc.Color(i3815[0], i3815[1], i3815[2], i3815[3])
  i3814.m_HighlightedColor = new pc.Color(i3815[4], i3815[5], i3815[6], i3815[7])
  i3814.m_PressedColor = new pc.Color(i3815[8], i3815[9], i3815[10], i3815[11])
  i3814.m_SelectedColor = new pc.Color(i3815[12], i3815[13], i3815[14], i3815[15])
  i3814.m_DisabledColor = new pc.Color(i3815[16], i3815[17], i3815[18], i3815[19])
  i3814.m_ColorMultiplier = i3815[20]
  i3814.m_FadeDuration = i3815[21]
  return i3814
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3817 = data
  request.r(i3817[0], i3817[1], 0, i3816, 'm_HighlightedSprite')
  request.r(i3817[2], i3817[3], 0, i3816, 'm_PressedSprite')
  request.r(i3817[4], i3817[5], 0, i3816, 'm_SelectedSprite')
  request.r(i3817[6], i3817[7], 0, i3816, 'm_DisabledSprite')
  return i3816
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3818 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3819 = data
  i3818.m_NormalTrigger = i3819[0]
  i3818.m_HighlightedTrigger = i3819[1]
  i3818.m_PressedTrigger = i3819[2]
  i3818.m_SelectedTrigger = i3819[3]
  i3818.m_DisabledTrigger = i3819[4]
  return i3818
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3820 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3821 = data
  request.r(i3821[0], i3821[1], 0, i3820, 'm_FillRect')
  request.r(i3821[2], i3821[3], 0, i3820, 'm_HandleRect')
  i3820.m_Direction = i3821[4]
  i3820.m_MinValue = i3821[5]
  i3820.m_MaxValue = i3821[6]
  i3820.m_WholeNumbers = !!i3821[7]
  i3820.m_Value = i3821[8]
  i3820.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3821[9], i3820.m_OnValueChanged)
  i3820.m_Navigation = request.d('UnityEngine.UI.Navigation', i3821[10], i3820.m_Navigation)
  i3820.m_Transition = i3821[11]
  i3820.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3821[12], i3820.m_Colors)
  i3820.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3821[13], i3820.m_SpriteState)
  i3820.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3821[14], i3820.m_AnimationTriggers)
  i3820.m_Interactable = !!i3821[15]
  request.r(i3821[16], i3821[17], 0, i3820, 'm_TargetGraphic')
  return i3820
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3822 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3823 = data
  i3822.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3823[0], i3822.m_PersistentCalls)
  return i3822
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i3824 = root || request.c( 'EnviromentEditor' )
  var i3825 = data
  i3824.oceanSpriteValueMultifly = i3825[0]
  i3824.sunLightIntensity = i3825[1]
  i3824.minSunLightIntensity = i3825[2]
  i3824.challengeLightIntensity = i3825[3]
  i3824.depthMaskTransparentValue = i3825[4]
  i3824.ambientLightIntensity = i3825[5]
  request.r(i3825[6], i3825[7], 0, i3824, 'hook')
  var i3827 = i3825[8]
  var i3826 = []
  for(var i = 0; i < i3827.length; i += 2) {
  request.r(i3827[i + 0], i3827[i + 1], 2, i3826, '')
  }
  i3824.Oceans = i3826
  request.r(i3825[9], i3825[10], 0, i3824, 'OceanSurface')
  request.r(i3825[11], i3825[12], 0, i3824, 'depthMask')
  request.r(i3825[13], i3825[14], 0, i3824, 'depthSprite')
  request.r(i3825[15], i3825[16], 0, i3824, 'depthMaskMat')
  request.r(i3825[17], i3825[18], 0, i3824, 'sunLights')
  request.r(i3825[19], i3825[20], 0, i3824, 'hookLight')
  request.r(i3825[21], i3825[22], 0, i3824, 'challengeLight')
  return i3824
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i3830 = root || request.c( 'ObjectMovement' )
  var i3831 = data
  i3830.moveX = i3831[0]
  i3830.moveSec = i3831[1]
  return i3830
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i3832 = root || request.c( 'OceanTrigger' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'touchToPullButton')
  request.r(i3833[2], i3833[3], 0, i3832, 'waterSplashParticle')
  request.r(i3833[4], i3833[5], 0, i3832, 'bubbleParticle')
  request.r(i3833[6], i3833[7], 0, i3832, 'arrow')
  request.r(i3833[8], i3833[9], 0, i3832, 'rigid')
  request.r(i3833[10], i3833[11], 0, i3832, 'hook')
  request.r(i3833[12], i3833[13], 0, i3832, 'rod')
  return i3832
}

Deserializers["Flock"] = function (request, data, root) {
  var i3834 = root || request.c( 'Flock' )
  var i3835 = data
  request.r(i3835[0], i3835[1], 0, i3834, 'flockUnitPrefab')
  i3834.flockSize = i3835[2]
  i3834.spawnBounds = new pc.Vec3( i3835[3], i3835[4], i3835[5] )
  i3834._minSpeed = i3835[6]
  i3834._maxSpeed = i3835[7]
  i3834._cohesionDistance = i3835[8]
  i3834._avoidanceDistance = i3835[9]
  i3834._aligementDistance = i3835[10]
  i3834._obstacleDistance = i3835[11]
  i3834._boundsDistance = i3835[12]
  i3834._cohesionWeight = i3835[13]
  i3834._avoidanceWeight = i3835[14]
  i3834._aligementWeight = i3835[15]
  i3834._boundsWeight = i3835[16]
  i3834._obstacleWeight = i3835[17]
  return i3834
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i3836 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i3837 = data
  request.r(i3837[0], i3837[1], 0, i3836, 'm_LookAt')
  request.r(i3837[2], i3837[3], 0, i3836, 'm_Follow')
  i3836.m_Lens = request.d('Cinemachine.LensSettings', i3837[4], i3836.m_Lens)
  i3836.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i3837[5], i3836.m_Transitions)
  var i3839 = i3837[6]
  var i3838 = []
  for(var i = 0; i < i3839.length; i += 1) {
    i3838.push( i3839[i + 0] );
  }
  i3836.m_ExcludedPropertiesInInspector = i3838
  var i3841 = i3837[7]
  var i3840 = []
  for(var i = 0; i < i3841.length; i += 1) {
    i3840.push( i3841[i + 0] );
  }
  i3836.m_LockStageInInspector = i3840
  i3836.m_Priority = i3837[8]
  i3836.m_StandbyUpdate = i3837[9]
  i3836.m_LegacyBlendHint = i3837[10]
  request.r(i3837[11], i3837[12], 0, i3836, 'm_ComponentOwner')
  i3836.m_StreamingVersion = i3837[13]
  return i3836
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i3842 = root || request.c( 'Cinemachine.LensSettings' )
  var i3843 = data
  i3842.FieldOfView = i3843[0]
  i3842.OrthographicSize = i3843[1]
  i3842.NearClipPlane = i3843[2]
  i3842.FarClipPlane = i3843[3]
  i3842.Dutch = i3843[4]
  i3842.ModeOverride = i3843[5]
  i3842.LensShift = new pc.Vec2( i3843[6], i3843[7] )
  i3842.GateFit = i3843[8]
  i3842.m_SensorSize = new pc.Vec2( i3843[9], i3843[10] )
  return i3842
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i3844 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i3845 = data
  i3844.m_BlendHint = i3845[0]
  i3844.m_InheritPosition = !!i3845[1]
  i3844.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i3845[2], i3844.m_OnCameraLive)
  return i3844
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i3846 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i3847 = data
  i3846.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3847[0], i3846.m_PersistentCalls)
  return i3846
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i3852 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i3853 = data
  return i3852
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i3854 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i3855 = data
  i3854.m_TrackedObjectOffset = new pc.Vec3( i3855[0], i3855[1], i3855[2] )
  i3854.m_LookaheadTime = i3855[3]
  i3854.m_LookaheadSmoothing = i3855[4]
  i3854.m_LookaheadIgnoreY = !!i3855[5]
  i3854.m_HorizontalDamping = i3855[6]
  i3854.m_VerticalDamping = i3855[7]
  i3854.m_ScreenX = i3855[8]
  i3854.m_ScreenY = i3855[9]
  i3854.m_DeadZoneWidth = i3855[10]
  i3854.m_DeadZoneHeight = i3855[11]
  i3854.m_SoftZoneWidth = i3855[12]
  i3854.m_SoftZoneHeight = i3855[13]
  i3854.m_BiasX = i3855[14]
  i3854.m_BiasY = i3855[15]
  i3854.m_CenterOnActivate = !!i3855[16]
  return i3854
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i3856 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i3857 = data
  i3856.m_BindingMode = i3857[0]
  i3856.m_FollowOffset = new pc.Vec3( i3857[1], i3857[2], i3857[3] )
  i3856.m_XDamping = i3857[4]
  i3856.m_YDamping = i3857[5]
  i3856.m_ZDamping = i3857[6]
  i3856.m_AngularDampingMode = i3857[7]
  i3856.m_PitchDamping = i3857[8]
  i3856.m_YawDamping = i3857[9]
  i3856.m_RollDamping = i3857[10]
  i3856.m_AngularDamping = i3857[11]
  return i3856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3859 = data
  i3858.enabled = !!i3859[0]
  i3858.aspect = i3859[1]
  i3858.orthographic = !!i3859[2]
  i3858.orthographicSize = i3859[3]
  i3858.backgroundColor = new pc.Color(i3859[4], i3859[5], i3859[6], i3859[7])
  i3858.nearClipPlane = i3859[8]
  i3858.farClipPlane = i3859[9]
  i3858.fieldOfView = i3859[10]
  i3858.depth = i3859[11]
  i3858.clearFlags = i3859[12]
  i3858.cullingMask = i3859[13]
  i3858.rect = i3859[14]
  request.r(i3859[15], i3859[16], 0, i3858, 'targetTexture')
  return i3858
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i3860 = root || request.c( 'CameraMove' )
  var i3861 = data
  i3860.offset = new pc.Vec3( i3861[0], i3861[1], i3861[2] )
  request.r(i3861[3], i3861[4], 0, i3860, 'newCamera')
  request.r(i3861[5], i3861[6], 0, i3860, 'target')
  return i3860
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i3862 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i3863 = data
  i3862.m_ShowDebugText = !!i3863[0]
  i3862.m_ShowCameraFrustum = !!i3863[1]
  i3862.m_IgnoreTimeScale = !!i3863[2]
  request.r(i3863[3], i3863[4], 0, i3862, 'm_WorldUpOverride')
  i3862.m_UpdateMethod = i3863[5]
  i3862.m_BlendUpdateMethod = i3863[6]
  i3862.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i3863[7], i3862.m_DefaultBlend)
  request.r(i3863[8], i3863[9], 0, i3862, 'm_CustomBlends')
  i3862.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i3863[10], i3862.m_CameraCutEvent)
  i3862.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i3863[11], i3862.m_CameraActivatedEvent)
  return i3862
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i3864 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i3865 = data
  i3864.m_Style = i3865[0]
  i3864.m_Time = i3865[1]
  i3864.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i3865[2] } )
  return i3864
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i3866 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i3867 = data
  i3866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3867[0], i3866.m_PersistentCalls)
  return i3866
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i3868 = root || request.c( 'CinemachineController' )
  var i3869 = data
  request.r(i3869[0], i3869[1], 0, i3868, 'playerTrans')
  i3868.playerOffset = new pc.Vec3( i3869[2], i3869[3], i3869[4] )
  request.r(i3869[5], i3869[6], 0, i3868, 'hookTrans')
  i3868.hookOffset = new pc.Vec3( i3869[7], i3869[8], i3869[9] )
  request.r(i3869[10], i3869[11], 0, i3868, 'cvc_Hook')
  request.r(i3869[12], i3869[13], 0, i3868, 'cvc_Player')
  return i3868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3871 = data
  i3870.enabled = !!i3871[0]
  request.r(i3871[1], i3871[2], 0, i3870, 'sharedMaterial')
  var i3873 = i3871[3]
  var i3872 = []
  for(var i = 0; i < i3873.length; i += 2) {
  request.r(i3873[i + 0], i3873[i + 1], 2, i3872, '')
  }
  i3870.sharedMaterials = i3872
  i3870.receiveShadows = !!i3871[4]
  i3870.shadowCastingMode = i3871[5]
  i3870.sortingLayerID = i3871[6]
  i3870.sortingOrder = i3871[7]
  i3870.lightmapIndex = i3871[8]
  i3870.lightmapSceneIndex = i3871[9]
  i3870.lightmapScaleOffset = new pc.Vec4( i3871[10], i3871[11], i3871[12], i3871[13] )
  i3870.lightProbeUsage = i3871[14]
  i3870.reflectionProbeUsage = i3871[15]
  var i3875 = i3871[16]
  var i3874 = []
  for(var i = 0; i < i3875.length; i += 3) {
    i3874.push( new pc.Vec3( i3875[i + 0], i3875[i + 1], i3875[i + 2] ) );
  }
  i3870.positions = i3874
  i3870.positionCount = i3871[17]
  i3870.time = i3871[18]
  i3870.startWidth = i3871[19]
  i3870.endWidth = i3871[20]
  i3870.widthMultiplier = i3871[21]
  i3870.autodestruct = !!i3871[22]
  i3870.emitting = !!i3871[23]
  i3870.numCornerVertices = i3871[24]
  i3870.numCapVertices = i3871[25]
  i3870.minVertexDistance = i3871[26]
  i3870.colorGradient = i3871[27] ? new pc.ColorGradient(i3871[27][0], i3871[27][1], i3871[27][2]) : null
  i3870.startColor = new pc.Color(i3871[28], i3871[29], i3871[30], i3871[31])
  i3870.endColor = new pc.Color(i3871[32], i3871[33], i3871[34], i3871[35])
  i3870.generateLightingData = !!i3871[36]
  i3870.textureMode = i3871[37]
  i3870.alignment = i3871[38]
  i3870.widthCurve = new pc.AnimationCurve( { keys_flow: i3871[39] } )
  return i3870
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i3876 = root || request.c( 'FishingHook' )
  var i3877 = data
  i3876.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i3877[0], i3876.OnMoneyChangeEvent)
  var i3879 = i3877[1]
  var i3878 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i3879.length; i += 2) {
  request.r(i3879[i + 0], i3879[i + 1], 1, i3878, '')
  }
  i3876.hookedFish = i3878
  request.r(i3877[2], i3877[3], 0, i3876, 'sellParticle')
  request.r(i3877[4], i3877[5], 0, i3876, 'sellParticleParent')
  i3876.targetHookZoomOffset = i3877[6]
  i3876.minDrag = i3877[7]
  i3876.maxDrag = i3877[8]
  i3876.dragSpeed = i3877[9]
  i3876.fishingHookScaleUpgradeValue = i3877[10]
  i3876.fullHooked = !!i3877[11]
  i3876.inTheOcean = !!i3877[12]
  i3876.money = i3877[13]
  request.r(i3877[14], i3877[15], 0, i3876, 'rigid')
  request.r(i3877[16], i3877[17], 0, i3876, 'canvas')
  request.r(i3877[18], i3877[19], 0, i3876, 'moneyTextPrefab')
  request.r(i3877[20], i3877[21], 0, i3876, 'moneyTextSpawnTransform')
  i3876.moneyTextSpawnMinOffset = new pc.Vec2( i3877[22], i3877[23] )
  i3876.moneyTextSpawnMaxOffset = new pc.Vec2( i3877[24], i3877[25] )
  var i3881 = i3877[26]
  var i3880 = []
  for(var i = 0; i < i3881.length; i += 2) {
  request.r(i3881[i + 0], i3881[i + 1], 2, i3880, '')
  }
  i3876.hookedTransforms = i3880
  request.r(i3877[27], i3877[28], 0, i3876, 'fishingRodSkinned')
  request.r(i3877[29], i3877[30], 0, i3876, 'cinemachineCamera')
  request.r(i3877[31], i3877[32], 0, i3876, 'startPoint')
  request.r(i3877[33], i3877[34], 0, i3876, 'hook')
  request.r(i3877[35], i3877[36], 0, i3876, 'rod')
  request.r(i3877[37], i3877[38], 0, i3876, 'playerModel')
  request.r(i3877[39], i3877[40], 0, i3876, 'upgradeButton')
  request.r(i3877[41], i3877[42], 0, i3876, 'depthText')
  request.r(i3877[43], i3877[44], 0, i3876, 'touchField')
  request.r(i3877[45], i3877[46], 0, i3876, 'catchRingParticle')
  request.r(i3877[47], i3877[48], 0, i3876, 'fishSkinPrefab')
  request.r(i3877[49], i3877[50], 0, i3876, 'fishSkinPoint1')
  request.r(i3877[51], i3877[52], 0, i3876, 'fishSkinPoint2')
  request.r(i3877[53], i3877[54], 0, i3876, 'moneyText')
  request.r(i3877[55], i3877[56], 0, i3876, 'HookedCount')
  return i3876
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3882 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3883 = data
  i3882.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3883[0], i3882.m_PersistentCalls)
  return i3882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3885 = data
  i3884.ambientIntensity = i3885[0]
  i3884.reflectionIntensity = i3885[1]
  i3884.ambientMode = i3885[2]
  i3884.ambientLight = new pc.Color(i3885[3], i3885[4], i3885[5], i3885[6])
  i3884.ambientSkyColor = new pc.Color(i3885[7], i3885[8], i3885[9], i3885[10])
  i3884.ambientGroundColor = new pc.Color(i3885[11], i3885[12], i3885[13], i3885[14])
  i3884.ambientEquatorColor = new pc.Color(i3885[15], i3885[16], i3885[17], i3885[18])
  i3884.fogColor = new pc.Color(i3885[19], i3885[20], i3885[21], i3885[22])
  i3884.fogEndDistance = i3885[23]
  i3884.fogStartDistance = i3885[24]
  i3884.fogDensity = i3885[25]
  i3884.fog = !!i3885[26]
  request.r(i3885[27], i3885[28], 0, i3884, 'skybox')
  i3884.fogMode = i3885[29]
  var i3887 = i3885[30]
  var i3886 = []
  for(var i = 0; i < i3887.length; i += 1) {
    i3886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3887[i + 0]) );
  }
  i3884.lightmaps = i3886
  i3884.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3885[31], i3884.lightProbes)
  i3884.lightmapsMode = i3885[32]
  i3884.environmentLightingMode = i3885[33]
  i3884.ambientProbe = new pc.SphericalHarmonicsL2(i3885[34])
  i3884.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3885[35])
  i3884.useReferenceAmbientProbe = !!i3885[36]
  request.r(i3885[37], i3885[38], 0, i3884, 'customReflection')
  request.r(i3885[39], i3885[40], 0, i3884, 'defaultReflection')
  i3884.defaultReflectionMode = i3885[41]
  i3884.defaultReflectionResolution = i3885[42]
  i3884.sunLightObjectId = i3885[43]
  i3884.pixelLightCount = i3885[44]
  i3884.defaultReflectionHDR = !!i3885[45]
  i3884.hasLightDataAsset = !!i3885[46]
  i3884.hasManualGenerate = !!i3885[47]
  return i3884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3891 = data
  request.r(i3891[0], i3891[1], 0, i3890, 'lightmapColor')
  request.r(i3891[2], i3891[3], 0, i3890, 'lightmapDirection')
  return i3890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3892 = root || new UnityEngine.LightProbes()
  var i3893 = data
  return i3892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3899 = data
  var i3901 = i3899[0]
  var i3900 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3901.length; i += 1) {
    i3900.add(i3901[i + 0]);
  }
  i3898.invalidShaderVariants = i3900
  i3898.name = i3899[1]
  i3898.guid = i3899[2]
  var i3903 = i3899[3]
  var i3902 = []
  for(var i = 0; i < i3903.length; i += 1) {
    i3902.push( i3903[i + 0] );
  }
  i3898.shaderDefinedKeywords = i3902
  var i3905 = i3899[4]
  var i3904 = []
  for(var i = 0; i < i3905.length; i += 1) {
    i3904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3905[i + 0]) );
  }
  i3898.passes = i3904
  var i3907 = i3899[5]
  var i3906 = []
  for(var i = 0; i < i3907.length; i += 1) {
    i3906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3907[i + 0]) );
  }
  i3898.usePasses = i3906
  var i3909 = i3899[6]
  var i3908 = []
  for(var i = 0; i < i3909.length; i += 1) {
    i3908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3909[i + 0]) );
  }
  i3898.defaultParameterValues = i3908
  request.r(i3899[7], i3899[8], 0, i3898, 'unityFallbackShader')
  i3898.readDepth = !!i3899[9]
  i3898.isCreatedByShaderGraph = !!i3899[10]
  return i3898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3914 = root || new pc.UnityShaderPass()
  var i3915 = data
  i3914.id = i3915[0]
  i3914.subShaderIndex = i3915[1]
  i3914.name = i3915[2]
  i3914.passType = i3915[3]
  i3914.usePass = !!i3915[4]
  i3914.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[5], i3914.zTest)
  i3914.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[6], i3914.zWrite)
  i3914.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[7], i3914.culling)
  i3914.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3915[8], i3914.blending)
  i3914.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3915[9], i3914.alphaBlending)
  i3914.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[10], i3914.colorWriteMask)
  i3914.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[11], i3914.offsetUnits)
  i3914.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[12], i3914.offsetFactor)
  i3914.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[13], i3914.stencilRef)
  i3914.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[14], i3914.stencilReadMask)
  i3914.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3915[15], i3914.stencilWriteMask)
  i3914.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3915[16], i3914.stencilOp)
  i3914.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3915[17], i3914.stencilOpFront)
  i3914.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3915[18], i3914.stencilOpBack)
  var i3917 = i3915[19]
  var i3916 = []
  for(var i = 0; i < i3917.length; i += 1) {
    i3916.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3917[i + 0]) );
  }
  i3914.tags = i3916
  var i3919 = i3915[20]
  var i3918 = []
  for(var i = 0; i < i3919.length; i += 1) {
    i3918.push( i3919[i + 0] );
  }
  i3914.passDefinedKeywords = i3918
  var i3921 = i3915[21]
  var i3920 = []
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3921[i + 0]) );
  }
  i3914.passDefinedKeywordGroups = i3920
  var i3923 = i3915[22]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3923[i + 0]) );
  }
  i3914.variants = i3922
  var i3925 = i3915[23]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3925[i + 0]) );
  }
  i3914.excludedVariants = i3924
  i3914.hasDepthReader = !!i3915[24]
  return i3914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3927 = data
  i3926.val = i3927[0]
  i3926.name = i3927[1]
  return i3926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3929 = data
  i3928.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[0], i3928.src)
  i3928.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[1], i3928.dst)
  i3928.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3929[2], i3928.op)
  return i3928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3931 = data
  i3930.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3931[0], i3930.pass)
  i3930.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3931[1], i3930.fail)
  i3930.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3931[2], i3930.zFail)
  i3930.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3931[3], i3930.comp)
  return i3930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3935 = data
  i3934.name = i3935[0]
  i3934.value = i3935[1]
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3939 = data
  var i3941 = i3939[0]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( i3941[i + 0] );
  }
  i3938.keywords = i3940
  i3938.hasDiscard = !!i3939[1]
  return i3938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3945 = data
  i3944.passId = i3945[0]
  i3944.subShaderIndex = i3945[1]
  var i3947 = i3945[2]
  var i3946 = []
  for(var i = 0; i < i3947.length; i += 1) {
    i3946.push( i3947[i + 0] );
  }
  i3944.keywords = i3946
  i3944.vertexProgram = i3945[3]
  i3944.fragmentProgram = i3945[4]
  i3944.readDepth = !!i3945[5]
  return i3944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3951 = data
  request.r(i3951[0], i3951[1], 0, i3950, 'shader')
  i3950.pass = i3951[2]
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3955 = data
  i3954.name = i3955[0]
  i3954.type = i3955[1]
  i3954.value = new pc.Vec4( i3955[2], i3955[3], i3955[4], i3955[5] )
  i3954.textureValue = i3955[6]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3957 = data
  i3956.name = i3957[0]
  request.r(i3957[1], i3957[2], 0, i3956, 'texture')
  i3956.aabb = i3957[3]
  i3956.vertices = i3957[4]
  i3956.triangles = i3957[5]
  i3956.textureRect = UnityEngine.Rect.MinMaxRect(i3957[6], i3957[7], i3957[8], i3957[9])
  i3956.packedRect = UnityEngine.Rect.MinMaxRect(i3957[10], i3957[11], i3957[12], i3957[13])
  i3956.border = new pc.Vec4( i3957[14], i3957[15], i3957[16], i3957[17] )
  i3956.transparency = i3957[18]
  i3956.bounds = i3957[19]
  i3956.pixelsPerUnit = i3957[20]
  i3956.textureWidth = i3957[21]
  i3956.textureHeight = i3957[22]
  i3956.nativeSize = new pc.Vec2( i3957[23], i3957[24] )
  i3956.pivot = new pc.Vec2( i3957[25], i3957[26] )
  i3956.textureRectOffset = new pc.Vec2( i3957[27], i3957[28] )
  return i3956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3959 = data
  i3958.name = i3959[0]
  i3958.wrapMode = i3959[1]
  i3958.isLooping = !!i3959[2]
  i3958.length = i3959[3]
  var i3961 = i3959[4]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3961[i + 0]) );
  }
  i3958.curves = i3960
  var i3963 = i3959[5]
  var i3962 = []
  for(var i = 0; i < i3963.length; i += 1) {
    i3962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3963[i + 0]) );
  }
  i3958.events = i3962
  i3958.halfPrecision = !!i3959[6]
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3967 = data
  i3966.path = i3967[0]
  i3966.componentType = i3967[1]
  i3966.property = i3967[2]
  i3966.keys = i3967[3]
  var i3969 = i3967[4]
  var i3968 = []
  for(var i = 0; i < i3969.length; i += 1) {
    i3968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3969[i + 0]) );
  }
  i3966.objectReferenceKeys = i3968
  return i3966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3973 = data
  i3972.time = i3973[0]
  request.r(i3973[1], i3973[2], 0, i3972, 'value')
  return i3972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3977 = data
  i3976.functionName = i3977[0]
  i3976.floatParameter = i3977[1]
  i3976.intParameter = i3977[2]
  i3976.stringParameter = i3977[3]
  request.r(i3977[4], i3977[5], 0, i3976, 'objectReferenceParameter')
  i3976.time = i3977[6]
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i3979 = data
  i3978.name = i3979[0]
  i3978.ascent = i3979[1]
  i3978.originalLineHeight = i3979[2]
  i3978.fontSize = i3979[3]
  var i3981 = i3979[4]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i3981[i + 0]) );
  }
  i3978.characterInfo = i3980
  request.r(i3979[5], i3979[6], 0, i3978, 'texture')
  i3978.originalFontSize = i3979[7]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i3984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i3985 = data
  i3984.index = i3985[0]
  i3984.advance = i3985[1]
  i3984.bearing = i3985[2]
  i3984.glyphWidth = i3985[3]
  i3984.glyphHeight = i3985[4]
  i3984.minX = i3985[5]
  i3984.maxX = i3985[6]
  i3984.minY = i3985[7]
  i3984.maxY = i3985[8]
  i3984.uvBottomLeftX = i3985[9]
  i3984.uvBottomLeftY = i3985[10]
  i3984.uvBottomRightX = i3985[11]
  i3984.uvBottomRightY = i3985[12]
  i3984.uvTopLeftX = i3985[13]
  i3984.uvTopLeftY = i3985[14]
  i3984.uvTopRightX = i3985[15]
  i3984.uvTopRightY = i3985[16]
  return i3984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3987 = data
  i3986.name = i3987[0]
  var i3989 = i3987[1]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i3989[i + 0]) );
  }
  i3986.states = i3988
  var i3991 = i3987[2]
  var i3990 = []
  for(var i = 0; i < i3991.length; i += 1) {
    i3990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i3991[i + 0]) );
  }
  i3986.layers = i3990
  var i3993 = i3987[3]
  var i3992 = []
  for(var i = 0; i < i3993.length; i += 1) {
    i3992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i3993[i + 0]) );
  }
  i3986.parameters = i3992
  var i3995 = i3987[4]
  var i3994 = []
  for(var i = 0; i < i3995.length; i += 1) {
    i3994.push( i3995[i + 0] );
  }
  i3986.animationClips = i3994
  i3986.HasSubStateMachines = !!i3987[5]
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i3999 = data
  i3998.cycleOffset = i3999[0]
  i3998.cycleOffsetParameter = i3999[1]
  i3998.cycleOffsetParameterActive = !!i3999[2]
  i3998.mirror = !!i3999[3]
  i3998.mirrorParameter = i3999[4]
  i3998.mirrorParameterActive = !!i3999[5]
  i3998.motionId = i3999[6]
  i3998.nameHash = i3999[7]
  i3998.fullPathHash = i3999[8]
  i3998.speed = i3999[9]
  i3998.speedParameter = i3999[10]
  i3998.speedParameterActive = !!i3999[11]
  i3998.tag = i3999[12]
  i3998.name = i3999[13]
  i3998.writeDefaultValues = !!i3999[14]
  var i4001 = i3999[15]
  var i4000 = []
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4001[i + 0]) );
  }
  i3998.transitions = i4000
  var i4003 = i3999[16]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 2) {
  request.r(i4003[i + 0], i4003[i + 1], 2, i4002, '')
  }
  i3998.behaviours = i4002
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4007 = data
  i4006.fullPath = i4007[0]
  i4006.canTransitionToSelf = !!i4007[1]
  i4006.duration = i4007[2]
  i4006.exitTime = i4007[3]
  i4006.hasExitTime = !!i4007[4]
  i4006.hasFixedDuration = !!i4007[5]
  i4006.interruptionSource = i4007[6]
  i4006.offset = i4007[7]
  i4006.orderedInterruption = !!i4007[8]
  i4006.destinationStateNameHash = i4007[9]
  i4006.destinationStateMachineId = i4007[10]
  i4006.isExit = !!i4007[11]
  i4006.mute = !!i4007[12]
  i4006.solo = !!i4007[13]
  var i4009 = i4007[14]
  var i4008 = []
  for(var i = 0; i < i4009.length; i += 1) {
    i4008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4009[i + 0]) );
  }
  i4006.conditions = i4008
  return i4006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4013 = data
  i4012.mode = i4013[0]
  i4012.parameter = i4013[1]
  i4012.threshold = i4013[2]
  return i4012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4019 = data
  i4018.blendingMode = i4019[0]
  i4018.defaultWeight = i4019[1]
  i4018.name = i4019[2]
  i4018.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4019[3], i4018.stateMachine)
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4021 = data
  i4020.id = i4021[0]
  i4020.defaultStateNameHash = i4021[1]
  var i4023 = i4021[2]
  var i4022 = []
  for(var i = 0; i < i4023.length; i += 1) {
    i4022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4023[i + 0]) );
  }
  i4020.entryTransitions = i4022
  var i4025 = i4021[3]
  var i4024 = []
  for(var i = 0; i < i4025.length; i += 1) {
    i4024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4025[i + 0]) );
  }
  i4020.anyStateTransitions = i4024
  return i4020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4029 = data
  i4028.destinationStateNameHash = i4029[0]
  i4028.destinationStateMachineId = i4029[1]
  i4028.isExit = !!i4029[2]
  i4028.mute = !!i4029[3]
  i4028.solo = !!i4029[4]
  var i4031 = i4029[5]
  var i4030 = []
  for(var i = 0; i < i4031.length; i += 1) {
    i4030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4031[i + 0]) );
  }
  i4028.conditions = i4030
  return i4028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4035 = data
  i4034.defaultBool = !!i4035[0]
  i4034.defaultFloat = i4035[1]
  i4034.defaultInt = i4035[2]
  i4034.name = i4035[3]
  i4034.nameHash = i4035[4]
  i4034.type = i4035[5]
  return i4034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4037 = data
  i4036.name = i4037[0]
  i4036.bytes64 = i4037[1]
  i4036.data = i4037[2]
  return i4036
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4038 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4039 = data
  i4038.hashCode = i4039[0]
  request.r(i4039[1], i4039[2], 0, i4038, 'material')
  i4038.materialHashCode = i4039[3]
  request.r(i4039[4], i4039[5], 0, i4038, 'atlas')
  i4038.normalStyle = i4039[6]
  i4038.normalSpacingOffset = i4039[7]
  i4038.boldStyle = i4039[8]
  i4038.boldSpacing = i4039[9]
  i4038.italicStyle = i4039[10]
  i4038.tabSize = i4039[11]
  i4038.m_Version = i4039[12]
  i4038.m_SourceFontFileGUID = i4039[13]
  request.r(i4039[14], i4039[15], 0, i4038, 'm_SourceFontFile_EditorRef')
  request.r(i4039[16], i4039[17], 0, i4038, 'm_SourceFontFile')
  i4038.m_AtlasPopulationMode = i4039[18]
  i4038.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4039[19], i4038.m_FaceInfo)
  var i4041 = i4039[20]
  var i4040 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4041.length; i += 1) {
    i4040.add(request.d('UnityEngine.TextCore.Glyph', i4041[i + 0]));
  }
  i4038.m_GlyphTable = i4040
  var i4043 = i4039[21]
  var i4042 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.add(request.d('TMPro.TMP_Character', i4043[i + 0]));
  }
  i4038.m_CharacterTable = i4042
  var i4045 = i4039[22]
  var i4044 = []
  for(var i = 0; i < i4045.length; i += 2) {
  request.r(i4045[i + 0], i4045[i + 1], 2, i4044, '')
  }
  i4038.m_AtlasTextures = i4044
  i4038.m_AtlasTextureIndex = i4039[23]
  i4038.m_IsMultiAtlasTexturesEnabled = !!i4039[24]
  i4038.m_ClearDynamicDataOnBuild = !!i4039[25]
  var i4047 = i4039[26]
  var i4046 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4047.length; i += 1) {
    i4046.add(request.d('UnityEngine.TextCore.GlyphRect', i4047[i + 0]));
  }
  i4038.m_UsedGlyphRects = i4046
  var i4049 = i4039[27]
  var i4048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4049.length; i += 1) {
    i4048.add(request.d('UnityEngine.TextCore.GlyphRect', i4049[i + 0]));
  }
  i4038.m_FreeGlyphRects = i4048
  i4038.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4039[28], i4038.m_fontInfo)
  i4038.m_AtlasWidth = i4039[29]
  i4038.m_AtlasHeight = i4039[30]
  i4038.m_AtlasPadding = i4039[31]
  i4038.m_AtlasRenderMode = i4039[32]
  var i4051 = i4039[33]
  var i4050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4051.length; i += 1) {
    i4050.add(request.d('TMPro.TMP_Glyph', i4051[i + 0]));
  }
  i4038.m_glyphInfoList = i4050
  i4038.m_KerningTable = request.d('TMPro.KerningTable', i4039[34], i4038.m_KerningTable)
  i4038.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4039[35], i4038.m_FontFeatureTable)
  var i4053 = i4039[36]
  var i4052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4053.length; i += 2) {
  request.r(i4053[i + 0], i4053[i + 1], 1, i4052, '')
  }
  i4038.fallbackFontAssets = i4052
  var i4055 = i4039[37]
  var i4054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4055.length; i += 2) {
  request.r(i4055[i + 0], i4055[i + 1], 1, i4054, '')
  }
  i4038.m_FallbackFontAssetTable = i4054
  i4038.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4039[38], i4038.m_CreationSettings)
  var i4057 = i4039[39]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 1) {
    i4056.push( request.d('TMPro.TMP_FontWeightPair', i4057[i + 0]) );
  }
  i4038.m_FontWeightTable = i4056
  var i4059 = i4039[40]
  var i4058 = []
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.push( request.d('TMPro.TMP_FontWeightPair', i4059[i + 0]) );
  }
  i4038.fontWeights = i4058
  return i4038
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4060 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4061 = data
  i4060.m_FaceIndex = i4061[0]
  i4060.m_FamilyName = i4061[1]
  i4060.m_StyleName = i4061[2]
  i4060.m_PointSize = i4061[3]
  i4060.m_Scale = i4061[4]
  i4060.m_LineHeight = i4061[5]
  i4060.m_AscentLine = i4061[6]
  i4060.m_CapLine = i4061[7]
  i4060.m_MeanLine = i4061[8]
  i4060.m_Baseline = i4061[9]
  i4060.m_DescentLine = i4061[10]
  i4060.m_SuperscriptOffset = i4061[11]
  i4060.m_SuperscriptSize = i4061[12]
  i4060.m_SubscriptOffset = i4061[13]
  i4060.m_SubscriptSize = i4061[14]
  i4060.m_UnderlineOffset = i4061[15]
  i4060.m_UnderlineThickness = i4061[16]
  i4060.m_StrikethroughOffset = i4061[17]
  i4060.m_StrikethroughThickness = i4061[18]
  i4060.m_TabWidth = i4061[19]
  return i4060
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4064 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4065 = data
  i4064.m_Index = i4065[0]
  i4064.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4065[1], i4064.m_Metrics)
  i4064.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4065[2], i4064.m_GlyphRect)
  i4064.m_Scale = i4065[3]
  i4064.m_AtlasIndex = i4065[4]
  return i4064
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4066 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4067 = data
  i4066.m_Width = i4067[0]
  i4066.m_Height = i4067[1]
  i4066.m_HorizontalBearingX = i4067[2]
  i4066.m_HorizontalBearingY = i4067[3]
  i4066.m_HorizontalAdvance = i4067[4]
  return i4066
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4068 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4069 = data
  i4068.m_X = i4069[0]
  i4068.m_Y = i4069[1]
  i4068.m_Width = i4069[2]
  i4068.m_Height = i4069[3]
  return i4068
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4072 = root || request.c( 'TMPro.TMP_Character' )
  var i4073 = data
  i4072.m_ElementType = i4073[0]
  i4072.m_Unicode = i4073[1]
  i4072.m_GlyphIndex = i4073[2]
  i4072.m_Scale = i4073[3]
  return i4072
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4078 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4079 = data
  i4078.Name = i4079[0]
  i4078.PointSize = i4079[1]
  i4078.Scale = i4079[2]
  i4078.CharacterCount = i4079[3]
  i4078.LineHeight = i4079[4]
  i4078.Baseline = i4079[5]
  i4078.Ascender = i4079[6]
  i4078.CapHeight = i4079[7]
  i4078.Descender = i4079[8]
  i4078.CenterLine = i4079[9]
  i4078.SuperscriptOffset = i4079[10]
  i4078.SubscriptOffset = i4079[11]
  i4078.SubSize = i4079[12]
  i4078.Underline = i4079[13]
  i4078.UnderlineThickness = i4079[14]
  i4078.strikethrough = i4079[15]
  i4078.strikethroughThickness = i4079[16]
  i4078.TabWidth = i4079[17]
  i4078.Padding = i4079[18]
  i4078.AtlasWidth = i4079[19]
  i4078.AtlasHeight = i4079[20]
  return i4078
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4082 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4083 = data
  i4082.id = i4083[0]
  i4082.x = i4083[1]
  i4082.y = i4083[2]
  i4082.width = i4083[3]
  i4082.height = i4083[4]
  i4082.xOffset = i4083[5]
  i4082.yOffset = i4083[6]
  i4082.xAdvance = i4083[7]
  i4082.scale = i4083[8]
  return i4082
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4084 = root || request.c( 'TMPro.KerningTable' )
  var i4085 = data
  var i4087 = i4085[0]
  var i4086 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4087.length; i += 1) {
    i4086.add(request.d('TMPro.KerningPair', i4087[i + 0]));
  }
  i4084.kerningPairs = i4086
  return i4084
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4090 = root || request.c( 'TMPro.KerningPair' )
  var i4091 = data
  i4090.xOffset = i4091[0]
  i4090.m_FirstGlyph = i4091[1]
  i4090.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4091[2], i4090.m_FirstGlyphAdjustments)
  i4090.m_SecondGlyph = i4091[3]
  i4090.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4091[4], i4090.m_SecondGlyphAdjustments)
  i4090.m_IgnoreSpacingAdjustments = !!i4091[5]
  return i4090
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4092 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4093 = data
  var i4095 = i4093[0]
  var i4094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4095.length; i += 1) {
    i4094.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4095[i + 0]));
  }
  i4092.m_GlyphPairAdjustmentRecords = i4094
  return i4092
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4098 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4099 = data
  i4098.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4099[0], i4098.m_FirstAdjustmentRecord)
  i4098.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4099[1], i4098.m_SecondAdjustmentRecord)
  i4098.m_FeatureLookupFlags = i4099[2]
  return i4098
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4102 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4103 = data
  i4102.sourceFontFileName = i4103[0]
  i4102.sourceFontFileGUID = i4103[1]
  i4102.pointSizeSamplingMode = i4103[2]
  i4102.pointSize = i4103[3]
  i4102.padding = i4103[4]
  i4102.packingMode = i4103[5]
  i4102.atlasWidth = i4103[6]
  i4102.atlasHeight = i4103[7]
  i4102.characterSetSelectionMode = i4103[8]
  i4102.characterSequence = i4103[9]
  i4102.referencedFontAssetGUID = i4103[10]
  i4102.referencedTextAssetGUID = i4103[11]
  i4102.fontStyle = i4103[12]
  i4102.fontStyleModifier = i4103[13]
  i4102.renderMode = i4103[14]
  i4102.includeFontFeatures = !!i4103[15]
  return i4102
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4106 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4107 = data
  request.r(i4107[0], i4107[1], 0, i4106, 'regularTypeface')
  request.r(i4107[2], i4107[3], 0, i4106, 'italicTypeface')
  return i4106
}

Deserializers["MapData"] = function (request, data, root) {
  var i4108 = root || request.c( 'MapData' )
  var i4109 = data
  var i4111 = i4109[0]
  var i4110 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i4111.length; i += 1) {
    i4110.add(request.d('MapData+mapData', i4111[i + 0]));
  }
  i4108.mapDataList = i4110
  return i4108
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i4114 = root || request.c( 'MapData+mapData' )
  var i4115 = data
  i4114.tier = i4115[0]
  i4114.minMapSize = new pc.Vec3( i4115[1], i4115[2], i4115[3] )
  i4114.maxMapSize = new pc.Vec3( i4115[4], i4115[5], i4115[6] )
  return i4114
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4116 = root || request.c( 'TMPro.TMP_Settings' )
  var i4117 = data
  i4116.m_enableWordWrapping = !!i4117[0]
  i4116.m_enableKerning = !!i4117[1]
  i4116.m_enableExtraPadding = !!i4117[2]
  i4116.m_enableTintAllSprites = !!i4117[3]
  i4116.m_enableParseEscapeCharacters = !!i4117[4]
  i4116.m_EnableRaycastTarget = !!i4117[5]
  i4116.m_GetFontFeaturesAtRuntime = !!i4117[6]
  i4116.m_missingGlyphCharacter = i4117[7]
  i4116.m_warningsDisabled = !!i4117[8]
  request.r(i4117[9], i4117[10], 0, i4116, 'm_defaultFontAsset')
  i4116.m_defaultFontAssetPath = i4117[11]
  i4116.m_defaultFontSize = i4117[12]
  i4116.m_defaultAutoSizeMinRatio = i4117[13]
  i4116.m_defaultAutoSizeMaxRatio = i4117[14]
  i4116.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4117[15], i4117[16] )
  i4116.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4117[17], i4117[18] )
  i4116.m_autoSizeTextContainer = !!i4117[19]
  i4116.m_IsTextObjectScaleStatic = !!i4117[20]
  var i4119 = i4117[21]
  var i4118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4119.length; i += 2) {
  request.r(i4119[i + 0], i4119[i + 1], 1, i4118, '')
  }
  i4116.m_fallbackFontAssets = i4118
  i4116.m_matchMaterialPreset = !!i4117[22]
  request.r(i4117[23], i4117[24], 0, i4116, 'm_defaultSpriteAsset')
  i4116.m_defaultSpriteAssetPath = i4117[25]
  i4116.m_enableEmojiSupport = !!i4117[26]
  i4116.m_MissingCharacterSpriteUnicode = i4117[27]
  i4116.m_defaultColorGradientPresetsPath = i4117[28]
  request.r(i4117[29], i4117[30], 0, i4116, 'm_defaultStyleSheet')
  i4116.m_StyleSheetsResourcePath = i4117[31]
  request.r(i4117[32], i4117[33], 0, i4116, 'm_leadingCharacters')
  request.r(i4117[34], i4117[35], 0, i4116, 'm_followingCharacters')
  i4116.m_UseModernHangulLineBreakingRules = !!i4117[36]
  return i4116
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4120 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4121 = data
  i4120.hashCode = i4121[0]
  request.r(i4121[1], i4121[2], 0, i4120, 'material')
  i4120.materialHashCode = i4121[3]
  request.r(i4121[4], i4121[5], 0, i4120, 'spriteSheet')
  var i4123 = i4121[6]
  var i4122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.add(request.d('TMPro.TMP_Sprite', i4123[i + 0]));
  }
  i4120.spriteInfoList = i4122
  var i4125 = i4121[7]
  var i4124 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4125.length; i += 2) {
  request.r(i4125[i + 0], i4125[i + 1], 1, i4124, '')
  }
  i4120.fallbackSpriteAssets = i4124
  i4120.m_Version = i4121[8]
  i4120.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4121[9], i4120.m_FaceInfo)
  var i4127 = i4121[10]
  var i4126 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4127.length; i += 1) {
    i4126.add(request.d('TMPro.TMP_SpriteCharacter', i4127[i + 0]));
  }
  i4120.m_SpriteCharacterTable = i4126
  var i4129 = i4121[11]
  var i4128 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4129.length; i += 1) {
    i4128.add(request.d('TMPro.TMP_SpriteGlyph', i4129[i + 0]));
  }
  i4120.m_SpriteGlyphTable = i4128
  return i4120
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4132 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4133 = data
  i4132.name = i4133[0]
  i4132.hashCode = i4133[1]
  i4132.unicode = i4133[2]
  i4132.pivot = new pc.Vec2( i4133[3], i4133[4] )
  request.r(i4133[5], i4133[6], 0, i4132, 'sprite')
  i4132.id = i4133[7]
  i4132.x = i4133[8]
  i4132.y = i4133[9]
  i4132.width = i4133[10]
  i4132.height = i4133[11]
  i4132.xOffset = i4133[12]
  i4132.yOffset = i4133[13]
  i4132.xAdvance = i4133[14]
  i4132.scale = i4133[15]
  return i4132
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4138 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4139 = data
  i4138.m_Name = i4139[0]
  i4138.m_HashCode = i4139[1]
  i4138.m_ElementType = i4139[2]
  i4138.m_Unicode = i4139[3]
  i4138.m_GlyphIndex = i4139[4]
  i4138.m_Scale = i4139[5]
  return i4138
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4142 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4143 = data
  request.r(i4143[0], i4143[1], 0, i4142, 'sprite')
  i4142.m_Index = i4143[2]
  i4142.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4143[3], i4142.m_Metrics)
  i4142.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4143[4], i4142.m_GlyphRect)
  i4142.m_Scale = i4143[5]
  i4142.m_AtlasIndex = i4143[6]
  return i4142
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4145 = data
  var i4147 = i4145[0]
  var i4146 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4147.length; i += 1) {
    i4146.add(request.d('TMPro.TMP_Style', i4147[i + 0]));
  }
  i4144.m_StyleList = i4146
  return i4144
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4150 = root || request.c( 'TMPro.TMP_Style' )
  var i4151 = data
  i4150.m_Name = i4151[0]
  i4150.m_HashCode = i4151[1]
  i4150.m_OpeningDefinition = i4151[2]
  i4150.m_ClosingDefinition = i4151[3]
  i4150.m_OpeningTagArray = i4151[4]
  i4150.m_ClosingTagArray = i4151[5]
  i4150.m_OpeningTagUnicodeArray = i4151[6]
  i4150.m_ClosingTagUnicodeArray = i4151[7]
  return i4150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4153 = data
  var i4155 = i4153[0]
  var i4154 = []
  for(var i = 0; i < i4155.length; i += 1) {
    i4154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4155[i + 0]) );
  }
  i4152.files = i4154
  i4152.componentToPrefabIds = i4153[1]
  return i4152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4159 = data
  i4158.path = i4159[0]
  request.r(i4159[1], i4159[2], 0, i4158, 'unityObject')
  return i4158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4161 = data
  var i4163 = i4161[0]
  var i4162 = []
  for(var i = 0; i < i4163.length; i += 1) {
    i4162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4163[i + 0]) );
  }
  i4160.scriptsExecutionOrder = i4162
  var i4165 = i4161[1]
  var i4164 = []
  for(var i = 0; i < i4165.length; i += 1) {
    i4164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4165[i + 0]) );
  }
  i4160.sortingLayers = i4164
  var i4167 = i4161[2]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4167[i + 0]) );
  }
  i4160.cullingLayers = i4166
  i4160.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4161[3], i4160.timeSettings)
  i4160.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4161[4], i4160.physicsSettings)
  i4160.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4161[5], i4160.physics2DSettings)
  i4160.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4161[6], i4160.qualitySettings)
  i4160.enableRealtimeShadows = !!i4161[7]
  i4160.autoInstantiatePrefabs = !!i4161[8]
  i4160.enableAutoInstancing = !!i4161[9]
  i4160.lightmapEncodingQuality = i4161[10]
  i4160.desiredColorSpace = i4161[11]
  return i4160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4171 = data
  i4170.name = i4171[0]
  i4170.value = i4171[1]
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4175 = data
  i4174.id = i4175[0]
  i4174.name = i4175[1]
  i4174.value = i4175[2]
  return i4174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4179 = data
  i4178.id = i4179[0]
  i4178.name = i4179[1]
  return i4178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4181 = data
  i4180.fixedDeltaTime = i4181[0]
  i4180.maximumDeltaTime = i4181[1]
  i4180.timeScale = i4181[2]
  i4180.maximumParticleTimestep = i4181[3]
  return i4180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4183 = data
  i4182.gravity = new pc.Vec3( i4183[0], i4183[1], i4183[2] )
  i4182.defaultSolverIterations = i4183[3]
  i4182.bounceThreshold = i4183[4]
  i4182.autoSyncTransforms = !!i4183[5]
  i4182.autoSimulation = !!i4183[6]
  var i4185 = i4183[7]
  var i4184 = []
  for(var i = 0; i < i4185.length; i += 1) {
    i4184.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4185[i + 0]) );
  }
  i4182.collisionMatrix = i4184
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4189 = data
  i4188.enabled = !!i4189[0]
  i4188.layerId = i4189[1]
  i4188.otherLayerId = i4189[2]
  return i4188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4191 = data
  request.r(i4191[0], i4191[1], 0, i4190, 'material')
  i4190.gravity = new pc.Vec2( i4191[2], i4191[3] )
  i4190.positionIterations = i4191[4]
  i4190.velocityIterations = i4191[5]
  i4190.velocityThreshold = i4191[6]
  i4190.maxLinearCorrection = i4191[7]
  i4190.maxAngularCorrection = i4191[8]
  i4190.maxTranslationSpeed = i4191[9]
  i4190.maxRotationSpeed = i4191[10]
  i4190.timeToSleep = i4191[11]
  i4190.linearSleepTolerance = i4191[12]
  i4190.angularSleepTolerance = i4191[13]
  i4190.defaultContactOffset = i4191[14]
  i4190.autoSimulation = !!i4191[15]
  i4190.queriesHitTriggers = !!i4191[16]
  i4190.queriesStartInColliders = !!i4191[17]
  i4190.callbacksOnDisable = !!i4191[18]
  i4190.reuseCollisionCallbacks = !!i4191[19]
  i4190.autoSyncTransforms = !!i4191[20]
  var i4193 = i4191[21]
  var i4192 = []
  for(var i = 0; i < i4193.length; i += 1) {
    i4192.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4193[i + 0]) );
  }
  i4190.collisionMatrix = i4192
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4197 = data
  i4196.enabled = !!i4197[0]
  i4196.layerId = i4197[1]
  i4196.otherLayerId = i4197[2]
  return i4196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4199 = data
  var i4201 = i4199[0]
  var i4200 = []
  for(var i = 0; i < i4201.length; i += 1) {
    i4200.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4201[i + 0]) );
  }
  i4198.qualityLevels = i4200
  var i4203 = i4199[1]
  var i4202 = []
  for(var i = 0; i < i4203.length; i += 1) {
    i4202.push( i4203[i + 0] );
  }
  i4198.names = i4202
  i4198.shadows = i4199[2]
  i4198.anisotropicFiltering = i4199[3]
  i4198.antiAliasing = i4199[4]
  i4198.lodBias = i4199[5]
  i4198.shadowCascades = i4199[6]
  i4198.shadowDistance = i4199[7]
  i4198.shadowmaskMode = i4199[8]
  i4198.shadowProjection = i4199[9]
  i4198.shadowResolution = i4199[10]
  i4198.softParticles = !!i4199[11]
  i4198.softVegetation = !!i4199[12]
  i4198.activeColorSpace = i4199[13]
  i4198.desiredColorSpace = i4199[14]
  i4198.masterTextureLimit = i4199[15]
  i4198.maxQueuedFrames = i4199[16]
  i4198.particleRaycastBudget = i4199[17]
  i4198.pixelLightCount = i4199[18]
  i4198.realtimeReflectionProbes = !!i4199[19]
  i4198.shadowCascade2Split = i4199[20]
  i4198.shadowCascade4Split = new pc.Vec3( i4199[21], i4199[22], i4199[23] )
  i4198.streamingMipmapsActive = !!i4199[24]
  i4198.vSyncCount = i4199[25]
  i4198.asyncUploadBufferSize = i4199[26]
  i4198.asyncUploadTimeSlice = i4199[27]
  i4198.billboardsFaceCameraPosition = !!i4199[28]
  i4198.shadowNearPlaneOffset = i4199[29]
  i4198.streamingMipmapsMemoryBudget = i4199[30]
  i4198.maximumLODLevel = i4199[31]
  i4198.streamingMipmapsAddAllCameras = !!i4199[32]
  i4198.streamingMipmapsMaxLevelReduction = i4199[33]
  i4198.streamingMipmapsRenderersPerFrame = i4199[34]
  i4198.resolutionScalingFixedDPIFactor = i4199[35]
  i4198.streamingMipmapsMaxFileIORequests = i4199[36]
  i4198.currentQualityLevel = i4199[37]
  return i4198
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4206 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4207 = data
  i4206.xPlacement = i4207[0]
  i4206.yPlacement = i4207[1]
  i4206.xAdvance = i4207[2]
  i4206.yAdvance = i4207[3]
  return i4206
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4208 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4209 = data
  i4208.m_GlyphIndex = i4209[0]
  i4208.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4209[1], i4208.m_GlyphValueRecord)
  return i4208
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4210 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4211 = data
  i4210.m_XPlacement = i4211[0]
  i4210.m_YPlacement = i4211[1]
  i4210.m_XAdvance = i4211[2]
  i4210.m_YAdvance = i4211[3]
  return i4210
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[19],"78":[47],"24":[23],"79":[23],"80":[23],"81":[23],"82":[23],"83":[23],"84":[23],"85":[86],"87":[86],"88":[86],"89":[86],"90":[86],"91":[86],"92":[86],"93":[86],"94":[86],"95":[86],"96":[86],"97":[86],"98":[86],"99":[47],"100":[8],"101":[102],"103":[102],"46":[9],"104":[20],"105":[20],"106":[20],"107":[20],"108":[9],"109":[9],"49":[46],"16":[10,9],"110":[9],"48":[46],"111":[9],"112":[9],"113":[9],"114":[9],"115":[9],"116":[9],"117":[9],"118":[9],"119":[9],"120":[10,9],"121":[9],"122":[9],"123":[9],"43":[9],"124":[10,9],"125":[9],"126":[44],"127":[44],"45":[44],"128":[44],"129":[47],"130":[47],"131":[47],"132":[133],"134":[9],"135":[8,9],"12":[9,10],"136":[9],"137":[10,9],"138":[8],"139":[10,9],"140":[9],"141":[9],"142":[143],"144":[143],"145":[143]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","RopeBridge","Fish","MapData","Chest","UnityEngine.Light","ChestMover","UnityEngine.SpriteRenderer","FlockUnit","UnityEngine.SphereCollider","FishingRod","UnityEngine.GameObject","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.TrailRenderer","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "59.0";

Deserializers.lunaVersion = "4.1.0";

Deserializers.lunaSHA = "91c879214bba20dae808cf7766c2e7f67914f5b5";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "0";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1170";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4501";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "dc66aa95-3c3b-4356-a037-fd423d9c8c40";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

