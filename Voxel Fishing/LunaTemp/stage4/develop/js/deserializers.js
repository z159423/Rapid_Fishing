var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i3520 = root || request.c( 'UnityEngine.JointSpring' )
  var i3521 = data
  i3520.spring = i3521[0]
  i3520.damper = i3521[1]
  i3520.targetPosition = i3521[2]
  return i3520
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i3522 = root || request.c( 'UnityEngine.JointMotor' )
  var i3523 = data
  i3522.m_TargetVelocity = i3523[0]
  i3522.m_Force = i3523[1]
  i3522.m_FreeSpin = i3523[2]
  return i3522
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i3524 = root || request.c( 'UnityEngine.JointLimits' )
  var i3525 = data
  i3524.m_Min = i3525[0]
  i3524.m_Max = i3525[1]
  i3524.m_Bounciness = i3525[2]
  i3524.m_BounceMinVelocity = i3525[3]
  i3524.m_ContactDistance = i3525[4]
  i3524.minBounce = i3525[5]
  i3524.maxBounce = i3525[6]
  return i3524
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i3526 = root || request.c( 'UnityEngine.JointDrive' )
  var i3527 = data
  i3526.m_PositionSpring = i3527[0]
  i3526.m_PositionDamper = i3527[1]
  i3526.m_MaximumForce = i3527[2]
  return i3526
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i3528 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i3529 = data
  i3528.m_Spring = i3529[0]
  i3528.m_Damper = i3529[1]
  return i3528
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i3530 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i3531 = data
  i3530.m_Limit = i3531[0]
  i3530.m_Bounciness = i3531[1]
  i3530.m_ContactDistance = i3531[2]
  return i3530
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i3532 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i3533 = data
  i3532.m_ExtremumSlip = i3533[0]
  i3532.m_ExtremumValue = i3533[1]
  i3532.m_AsymptoteSlip = i3533[2]
  i3532.m_AsymptoteValue = i3533[3]
  i3532.m_Stiffness = i3533[4]
  return i3532
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i3534 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i3535 = data
  i3534.m_LowerAngle = i3535[0]
  i3534.m_UpperAngle = i3535[1]
  return i3534
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i3536 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i3537 = data
  i3536.m_MotorSpeed = i3537[0]
  i3536.m_MaximumMotorTorque = i3537[1]
  return i3536
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i3538 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i3539 = data
  i3538.m_DampingRatio = i3539[0]
  i3538.m_Frequency = i3539[1]
  i3538.m_Angle = i3539[2]
  return i3538
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i3540 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i3541 = data
  i3540.m_LowerTranslation = i3541[0]
  i3540.m_UpperTranslation = i3541[1]
  return i3540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i3542 = root || new pc.UnityMaterial()
  var i3543 = data
  i3542.name = i3543[0]
  request.r(i3543[1], i3543[2], 0, i3542, 'shader')
  i3542.renderQueue = i3543[3]
  i3542.enableInstancing = !!i3543[4]
  var i3545 = i3543[5]
  var i3544 = []
  for(var i = 0; i < i3545.length; i += 1) {
    i3544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i3545[i + 0]) );
  }
  i3542.floatParameters = i3544
  var i3547 = i3543[6]
  var i3546 = []
  for(var i = 0; i < i3547.length; i += 1) {
    i3546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i3547[i + 0]) );
  }
  i3542.colorParameters = i3546
  var i3549 = i3543[7]
  var i3548 = []
  for(var i = 0; i < i3549.length; i += 1) {
    i3548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i3549[i + 0]) );
  }
  i3542.vectorParameters = i3548
  var i3551 = i3543[8]
  var i3550 = []
  for(var i = 0; i < i3551.length; i += 1) {
    i3550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i3551[i + 0]) );
  }
  i3542.textureParameters = i3550
  var i3553 = i3543[9]
  var i3552 = []
  for(var i = 0; i < i3553.length; i += 1) {
    i3552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i3553[i + 0]) );
  }
  i3542.materialFlags = i3552
  return i3542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i3556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i3557 = data
  i3556.name = i3557[0]
  i3556.value = i3557[1]
  return i3556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i3560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i3561 = data
  i3560.name = i3561[0]
  i3560.value = new pc.Color(i3561[1], i3561[2], i3561[3], i3561[4])
  return i3560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i3564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i3565 = data
  i3564.name = i3565[0]
  i3564.value = new pc.Vec4( i3565[1], i3565[2], i3565[3], i3565[4] )
  return i3564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i3568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i3569 = data
  i3568.name = i3569[0]
  request.r(i3569[1], i3569[2], 0, i3568, 'value')
  return i3568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i3572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i3573 = data
  i3572.name = i3573[0]
  i3572.enabled = !!i3573[1]
  return i3572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i3574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i3575 = data
  i3574.position = new pc.Vec3( i3575[0], i3575[1], i3575[2] )
  i3574.scale = new pc.Vec3( i3575[3], i3575[4], i3575[5] )
  i3574.rotation = new pc.Quat(i3575[6], i3575[7], i3575[8], i3575[9])
  return i3574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i3576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i3577 = data
  i3576.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i3577[0], i3576.main)
  i3576.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i3577[1], i3576.colorBySpeed)
  i3576.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i3577[2], i3576.colorOverLifetime)
  i3576.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i3577[3], i3576.emission)
  i3576.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i3577[4], i3576.rotationBySpeed)
  i3576.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i3577[5], i3576.rotationOverLifetime)
  i3576.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i3577[6], i3576.shape)
  i3576.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i3577[7], i3576.sizeBySpeed)
  i3576.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i3577[8], i3576.sizeOverLifetime)
  i3576.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i3577[9], i3576.textureSheetAnimation)
  i3576.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i3577[10], i3576.velocityOverLifetime)
  i3576.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i3577[11], i3576.noise)
  i3576.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i3577[12], i3576.inheritVelocity)
  i3576.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i3577[13], i3576.forceOverLifetime)
  i3576.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i3577[14], i3576.limitVelocityOverLifetime)
  i3576.useAutoRandomSeed = !!i3577[15]
  i3576.randomSeed = i3577[16]
  return i3576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i3578 = root || new pc.ParticleSystemMain()
  var i3579 = data
  i3578.duration = i3579[0]
  i3578.loop = !!i3579[1]
  i3578.prewarm = !!i3579[2]
  i3578.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[3], i3578.startDelay)
  i3578.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[4], i3578.startLifetime)
  i3578.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[5], i3578.startSpeed)
  i3578.startSize3D = !!i3579[6]
  i3578.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[7], i3578.startSizeX)
  i3578.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[8], i3578.startSizeY)
  i3578.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[9], i3578.startSizeZ)
  i3578.startRotation3D = !!i3579[10]
  i3578.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[11], i3578.startRotationX)
  i3578.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[12], i3578.startRotationY)
  i3578.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[13], i3578.startRotationZ)
  i3578.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3579[14], i3578.startColor)
  i3578.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3579[15], i3578.gravityModifier)
  i3578.simulationSpace = i3579[16]
  request.r(i3579[17], i3579[18], 0, i3578, 'customSimulationSpace')
  i3578.simulationSpeed = i3579[19]
  i3578.useUnscaledTime = !!i3579[20]
  i3578.scalingMode = i3579[21]
  i3578.playOnAwake = !!i3579[22]
  i3578.maxParticles = i3579[23]
  i3578.emitterVelocityMode = i3579[24]
  i3578.stopAction = i3579[25]
  return i3578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i3580 = root || new pc.MinMaxCurve()
  var i3581 = data
  i3580.mode = i3581[0]
  i3580.curveMin = new pc.AnimationCurve( { keys_flow: i3581[1] } )
  i3580.curveMax = new pc.AnimationCurve( { keys_flow: i3581[2] } )
  i3580.curveMultiplier = i3581[3]
  i3580.constantMin = i3581[4]
  i3580.constantMax = i3581[5]
  return i3580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i3582 = root || new pc.MinMaxGradient()
  var i3583 = data
  i3582.mode = i3583[0]
  i3582.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3583[1], i3582.gradientMin)
  i3582.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i3583[2], i3582.gradientMax)
  i3582.colorMin = new pc.Color(i3583[3], i3583[4], i3583[5], i3583[6])
  i3582.colorMax = new pc.Color(i3583[7], i3583[8], i3583[9], i3583[10])
  return i3582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i3584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i3585 = data
  i3584.mode = i3585[0]
  var i3587 = i3585[1]
  var i3586 = []
  for(var i = 0; i < i3587.length; i += 1) {
    i3586.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i3587[i + 0]) );
  }
  i3584.colorKeys = i3586
  var i3589 = i3585[2]
  var i3588 = []
  for(var i = 0; i < i3589.length; i += 1) {
    i3588.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i3589[i + 0]) );
  }
  i3584.alphaKeys = i3588
  return i3584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i3590 = root || new pc.ParticleSystemColorBySpeed()
  var i3591 = data
  i3590.enabled = !!i3591[0]
  i3590.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3591[1], i3590.color)
  i3590.range = new pc.Vec2( i3591[2], i3591[3] )
  return i3590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i3594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i3595 = data
  i3594.color = new pc.Color(i3595[0], i3595[1], i3595[2], i3595[3])
  i3594.time = i3595[4]
  return i3594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i3598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i3599 = data
  i3598.alpha = i3599[0]
  i3598.time = i3599[1]
  return i3598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i3600 = root || new pc.ParticleSystemColorOverLifetime()
  var i3601 = data
  i3600.enabled = !!i3601[0]
  i3600.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i3601[1], i3600.color)
  return i3600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i3602 = root || new pc.ParticleSystemEmitter()
  var i3603 = data
  i3602.enabled = !!i3603[0]
  i3602.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3603[1], i3602.rateOverTime)
  i3602.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3603[2], i3602.rateOverDistance)
  var i3605 = i3603[3]
  var i3604 = []
  for(var i = 0; i < i3605.length; i += 1) {
    i3604.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i3605[i + 0]) );
  }
  i3602.bursts = i3604
  return i3602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i3608 = root || new pc.ParticleSystemBurst()
  var i3609 = data
  i3608.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3609[0], i3608.count)
  i3608.cycleCount = i3609[1]
  i3608.minCount = i3609[2]
  i3608.maxCount = i3609[3]
  i3608.repeatInterval = i3609[4]
  i3608.time = i3609[5]
  return i3608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i3610 = root || new pc.ParticleSystemRotationBySpeed()
  var i3611 = data
  i3610.enabled = !!i3611[0]
  i3610.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[1], i3610.x)
  i3610.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[2], i3610.y)
  i3610.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3611[3], i3610.z)
  i3610.separateAxes = !!i3611[4]
  i3610.range = new pc.Vec2( i3611[5], i3611[6] )
  return i3610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i3612 = root || new pc.ParticleSystemRotationOverLifetime()
  var i3613 = data
  i3612.enabled = !!i3613[0]
  i3612.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3613[1], i3612.x)
  i3612.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3613[2], i3612.y)
  i3612.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3613[3], i3612.z)
  i3612.separateAxes = !!i3613[4]
  return i3612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i3614 = root || new pc.ParticleSystemShape()
  var i3615 = data
  i3614.enabled = !!i3615[0]
  i3614.shapeType = i3615[1]
  i3614.randomDirectionAmount = i3615[2]
  i3614.sphericalDirectionAmount = i3615[3]
  i3614.randomPositionAmount = i3615[4]
  i3614.alignToDirection = !!i3615[5]
  i3614.radius = i3615[6]
  i3614.radiusMode = i3615[7]
  i3614.radiusSpread = i3615[8]
  i3614.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3615[9], i3614.radiusSpeed)
  i3614.radiusThickness = i3615[10]
  i3614.angle = i3615[11]
  i3614.length = i3615[12]
  i3614.boxThickness = new pc.Vec3( i3615[13], i3615[14], i3615[15] )
  i3614.meshShapeType = i3615[16]
  request.r(i3615[17], i3615[18], 0, i3614, 'mesh')
  request.r(i3615[19], i3615[20], 0, i3614, 'meshRenderer')
  request.r(i3615[21], i3615[22], 0, i3614, 'skinnedMeshRenderer')
  i3614.useMeshMaterialIndex = !!i3615[23]
  i3614.meshMaterialIndex = i3615[24]
  i3614.useMeshColors = !!i3615[25]
  i3614.normalOffset = i3615[26]
  i3614.arc = i3615[27]
  i3614.arcMode = i3615[28]
  i3614.arcSpread = i3615[29]
  i3614.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3615[30], i3614.arcSpeed)
  i3614.donutRadius = i3615[31]
  i3614.position = new pc.Vec3( i3615[32], i3615[33], i3615[34] )
  i3614.rotation = new pc.Vec3( i3615[35], i3615[36], i3615[37] )
  i3614.scale = new pc.Vec3( i3615[38], i3615[39], i3615[40] )
  return i3614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i3616 = root || new pc.ParticleSystemSizeBySpeed()
  var i3617 = data
  i3616.enabled = !!i3617[0]
  i3616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[1], i3616.x)
  i3616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[2], i3616.y)
  i3616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3617[3], i3616.z)
  i3616.separateAxes = !!i3617[4]
  i3616.range = new pc.Vec2( i3617[5], i3617[6] )
  return i3616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i3618 = root || new pc.ParticleSystemSizeOverLifetime()
  var i3619 = data
  i3618.enabled = !!i3619[0]
  i3618.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[1], i3618.x)
  i3618.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[2], i3618.y)
  i3618.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3619[3], i3618.z)
  i3618.separateAxes = !!i3619[4]
  return i3618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i3620 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i3621 = data
  i3620.enabled = !!i3621[0]
  i3620.mode = i3621[1]
  i3620.animation = i3621[2]
  i3620.numTilesX = i3621[3]
  i3620.numTilesY = i3621[4]
  i3620.useRandomRow = !!i3621[5]
  i3620.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3621[6], i3620.frameOverTime)
  i3620.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3621[7], i3620.startFrame)
  i3620.cycleCount = i3621[8]
  i3620.rowIndex = i3621[9]
  i3620.flipU = i3621[10]
  i3620.flipV = i3621[11]
  i3620.spriteCount = i3621[12]
  var i3623 = i3621[13]
  var i3622 = []
  for(var i = 0; i < i3623.length; i += 2) {
  request.r(i3623[i + 0], i3623[i + 1], 2, i3622, '')
  }
  i3620.sprites = i3622
  return i3620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i3626 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i3627 = data
  i3626.enabled = !!i3627[0]
  i3626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[1], i3626.x)
  i3626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[2], i3626.y)
  i3626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[3], i3626.z)
  i3626.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3627[4], i3626.speedModifier)
  i3626.space = i3627[5]
  return i3626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i3628 = root || new pc.ParticleSystemNoise()
  var i3629 = data
  i3628.enabled = !!i3629[0]
  i3628.separateAxes = !!i3629[1]
  i3628.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[2], i3628.strengthX)
  i3628.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[3], i3628.strengthY)
  i3628.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[4], i3628.strengthZ)
  i3628.frequency = i3629[5]
  i3628.damping = !!i3629[6]
  i3628.octaveCount = i3629[7]
  i3628.octaveMultiplier = i3629[8]
  i3628.octaveScale = i3629[9]
  i3628.quality = i3629[10]
  i3628.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[11], i3628.scrollSpeed)
  i3628.scrollSpeedMultiplier = i3629[12]
  i3628.remapEnabled = !!i3629[13]
  i3628.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[14], i3628.remapX)
  i3628.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[15], i3628.remapY)
  i3628.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[16], i3628.remapZ)
  i3628.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[17], i3628.positionAmount)
  i3628.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[18], i3628.rotationAmount)
  i3628.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3629[19], i3628.sizeAmount)
  return i3628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i3630 = root || new pc.ParticleSystemInheritVelocity()
  var i3631 = data
  i3630.enabled = !!i3631[0]
  i3630.mode = i3631[1]
  i3630.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3631[2], i3630.curve)
  return i3630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i3632 = root || new pc.ParticleSystemForceOverLifetime()
  var i3633 = data
  i3632.enabled = !!i3633[0]
  i3632.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[1], i3632.x)
  i3632.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[2], i3632.y)
  i3632.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3633[3], i3632.z)
  i3632.space = i3633[4]
  i3632.randomized = !!i3633[5]
  return i3632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i3634 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i3635 = data
  i3634.enabled = !!i3635[0]
  i3634.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[1], i3634.limitX)
  i3634.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[2], i3634.limitY)
  i3634.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[3], i3634.limitZ)
  i3634.dampen = i3635[4]
  i3634.separateAxes = !!i3635[5]
  i3634.space = i3635[6]
  i3634.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i3635[7], i3634.drag)
  i3634.multiplyDragByParticleSize = !!i3635[8]
  i3634.multiplyDragByParticleVelocity = !!i3635[9]
  return i3634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i3636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i3637 = data
  i3636.enabled = !!i3637[0]
  request.r(i3637[1], i3637[2], 0, i3636, 'sharedMaterial')
  var i3639 = i3637[3]
  var i3638 = []
  for(var i = 0; i < i3639.length; i += 2) {
  request.r(i3639[i + 0], i3639[i + 1], 2, i3638, '')
  }
  i3636.sharedMaterials = i3638
  i3636.receiveShadows = !!i3637[4]
  i3636.shadowCastingMode = i3637[5]
  i3636.sortingLayerID = i3637[6]
  i3636.sortingOrder = i3637[7]
  i3636.lightmapIndex = i3637[8]
  i3636.lightmapSceneIndex = i3637[9]
  i3636.lightmapScaleOffset = new pc.Vec4( i3637[10], i3637[11], i3637[12], i3637[13] )
  i3636.lightProbeUsage = i3637[14]
  i3636.reflectionProbeUsage = i3637[15]
  request.r(i3637[16], i3637[17], 0, i3636, 'mesh')
  i3636.meshCount = i3637[18]
  i3636.activeVertexStreamsCount = i3637[19]
  i3636.alignment = i3637[20]
  i3636.renderMode = i3637[21]
  i3636.sortMode = i3637[22]
  i3636.lengthScale = i3637[23]
  i3636.velocityScale = i3637[24]
  i3636.cameraVelocityScale = i3637[25]
  i3636.normalDirection = i3637[26]
  i3636.sortingFudge = i3637[27]
  i3636.minParticleSize = i3637[28]
  i3636.maxParticleSize = i3637[29]
  i3636.pivot = new pc.Vec3( i3637[30], i3637[31], i3637[32] )
  request.r(i3637[33], i3637[34], 0, i3636, 'trailMaterial')
  return i3636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i3642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i3643 = data
  i3642.name = i3643[0]
  i3642.tag = i3643[1]
  i3642.enabled = !!i3643[2]
  i3642.isStatic = !!i3643[3]
  i3642.layer = i3643[4]
  return i3642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i3644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i3645 = data
  i3644.name = i3645[0]
  i3644.width = i3645[1]
  i3644.height = i3645[2]
  i3644.mipmapCount = i3645[3]
  i3644.anisoLevel = i3645[4]
  i3644.filterMode = i3645[5]
  i3644.hdr = !!i3645[6]
  i3644.format = i3645[7]
  i3644.wrapMode = i3645[8]
  i3644.alphaIsTransparency = !!i3645[9]
  i3644.alphaSource = i3645[10]
  return i3644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i3646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i3647 = data
  request.r(i3647[0], i3647[1], 0, i3646, 'sharedMesh')
  return i3646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i3648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i3649 = data
  request.r(i3649[0], i3649[1], 0, i3648, 'additionalVertexStreams')
  i3648.enabled = !!i3649[2]
  request.r(i3649[3], i3649[4], 0, i3648, 'sharedMaterial')
  var i3651 = i3649[5]
  var i3650 = []
  for(var i = 0; i < i3651.length; i += 2) {
  request.r(i3651[i + 0], i3651[i + 1], 2, i3650, '')
  }
  i3648.sharedMaterials = i3650
  i3648.receiveShadows = !!i3649[6]
  i3648.shadowCastingMode = i3649[7]
  i3648.sortingLayerID = i3649[8]
  i3648.sortingOrder = i3649[9]
  i3648.lightmapIndex = i3649[10]
  i3648.lightmapSceneIndex = i3649[11]
  i3648.lightmapScaleOffset = new pc.Vec4( i3649[12], i3649[13], i3649[14], i3649[15] )
  i3648.lightProbeUsage = i3649[16]
  i3648.reflectionProbeUsage = i3649[17]
  return i3648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i3652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i3653 = data
  i3652.name = i3653[0]
  i3652.halfPrecision = !!i3653[1]
  i3652.vertexCount = i3653[2]
  i3652.aabb = i3653[3]
  var i3655 = i3653[4]
  var i3654 = []
  for(var i = 0; i < i3655.length; i += 1) {
    i3654.push( !!i3655[i + 0] );
  }
  i3652.streams = i3654
  i3652.vertices = i3653[5]
  var i3657 = i3653[6]
  var i3656 = []
  for(var i = 0; i < i3657.length; i += 1) {
    i3656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i3657[i + 0]) );
  }
  i3652.subMeshes = i3656
  var i3659 = i3653[7]
  var i3658 = []
  for(var i = 0; i < i3659.length; i += 16) {
    i3658.push( new pc.Mat4().setData(i3659[i + 0], i3659[i + 1], i3659[i + 2], i3659[i + 3],  i3659[i + 4], i3659[i + 5], i3659[i + 6], i3659[i + 7],  i3659[i + 8], i3659[i + 9], i3659[i + 10], i3659[i + 11],  i3659[i + 12], i3659[i + 13], i3659[i + 14], i3659[i + 15]) );
  }
  i3652.bindposes = i3658
  var i3661 = i3653[8]
  var i3660 = []
  for(var i = 0; i < i3661.length; i += 1) {
    i3660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i3661[i + 0]) );
  }
  i3652.blendShapes = i3660
  return i3652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i3666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i3667 = data
  i3666.triangles = i3667[0]
  return i3666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i3672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i3673 = data
  i3672.name = i3673[0]
  var i3675 = i3673[1]
  var i3674 = []
  for(var i = 0; i < i3675.length; i += 1) {
    i3674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i3675[i + 0]) );
  }
  i3672.frames = i3674
  return i3672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i3676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i3677 = data
  i3676.textureMode = i3677[0]
  i3676.alignment = i3677[1]
  i3676.widthCurve = new pc.AnimationCurve( { keys_flow: i3677[2] } )
  i3676.colorGradient = i3677[3] ? new pc.ColorGradient(i3677[3][0], i3677[3][1], i3677[3][2]) : null
  var i3679 = i3677[4]
  var i3678 = []
  for(var i = 0; i < i3679.length; i += 3) {
    i3678.push( new pc.Vec3( i3679[i + 0], i3679[i + 1], i3679[i + 2] ) );
  }
  i3676.positions = i3678
  i3676.positionCount = i3677[5]
  i3676.widthMultiplier = i3677[6]
  i3676.startWidth = i3677[7]
  i3676.endWidth = i3677[8]
  i3676.numCornerVertices = i3677[9]
  i3676.numCapVertices = i3677[10]
  i3676.useWorldSpace = !!i3677[11]
  i3676.loop = !!i3677[12]
  i3676.startColor = new pc.Color(i3677[13], i3677[14], i3677[15], i3677[16])
  i3676.endColor = new pc.Color(i3677[17], i3677[18], i3677[19], i3677[20])
  i3676.generateLightingData = !!i3677[21]
  i3676.enabled = !!i3677[22]
  request.r(i3677[23], i3677[24], 0, i3676, 'sharedMaterial')
  var i3681 = i3677[25]
  var i3680 = []
  for(var i = 0; i < i3681.length; i += 2) {
  request.r(i3681[i + 0], i3681[i + 1], 2, i3680, '')
  }
  i3676.sharedMaterials = i3680
  i3676.receiveShadows = !!i3677[26]
  i3676.shadowCastingMode = i3677[27]
  i3676.sortingLayerID = i3677[28]
  i3676.sortingOrder = i3677[29]
  i3676.lightmapIndex = i3677[30]
  i3676.lightmapSceneIndex = i3677[31]
  i3676.lightmapScaleOffset = new pc.Vec4( i3677[32], i3677[33], i3677[34], i3677[35] )
  i3676.lightProbeUsage = i3677[36]
  i3676.reflectionProbeUsage = i3677[37]
  return i3676
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i3684 = root || request.c( 'RopeBridge' )
  var i3685 = data
  request.r(i3685[0], i3685[1], 0, i3684, 'StartPoint')
  request.r(i3685[2], i3685[3], 0, i3684, 'EndPoint')
  i3684.ropeSegLen = i3685[4]
  i3684.segmentLength = i3685[5]
  i3684.lineWidth = i3685[6]
  i3684.distOfStartToEnd = i3685[7]
  i3684.lineLengthMultifly = i3685[8]
  return i3684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i3686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i3687 = data
  request.r(i3687[0], i3687[1], 0, i3686, 'animatorController')
  i3686.updateMode = i3687[2]
  var i3689 = i3687[3]
  var i3688 = []
  for(var i = 0; i < i3689.length; i += 2) {
  request.r(i3689[i + 0], i3689[i + 1], 2, i3688, '')
  }
  i3686.humanBones = i3688
  i3686.enabled = !!i3687[4]
  return i3686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i3692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i3693 = data
  i3692.playAutomatically = !!i3693[0]
  request.r(i3693[1], i3693[2], 0, i3692, 'clip')
  var i3695 = i3693[3]
  var i3694 = []
  for(var i = 0; i < i3695.length; i += 2) {
  request.r(i3695[i + 0], i3695[i + 1], 2, i3694, '')
  }
  i3692.clips = i3694
  i3692.wrapMode = i3693[4]
  i3692.enabled = !!i3693[5]
  return i3692
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i3698 = root || request.c( 'AnimationController' )
  var i3699 = data
  return i3698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i3700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i3701 = data
  i3700.center = new pc.Vec3( i3701[0], i3701[1], i3701[2] )
  i3700.size = new pc.Vec3( i3701[3], i3701[4], i3701[5] )
  i3700.enabled = !!i3701[6]
  i3700.isTrigger = !!i3701[7]
  request.r(i3701[8], i3701[9], 0, i3700, 'material')
  return i3700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i3702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i3703 = data
  i3702.enabled = !!i3703[0]
  request.r(i3703[1], i3703[2], 0, i3702, 'sharedMaterial')
  var i3705 = i3703[3]
  var i3704 = []
  for(var i = 0; i < i3705.length; i += 2) {
  request.r(i3705[i + 0], i3705[i + 1], 2, i3704, '')
  }
  i3702.sharedMaterials = i3704
  i3702.receiveShadows = !!i3703[4]
  i3702.shadowCastingMode = i3703[5]
  i3702.sortingLayerID = i3703[6]
  i3702.sortingOrder = i3703[7]
  i3702.lightmapIndex = i3703[8]
  i3702.lightmapSceneIndex = i3703[9]
  i3702.lightmapScaleOffset = new pc.Vec4( i3703[10], i3703[11], i3703[12], i3703[13] )
  i3702.lightProbeUsage = i3703[14]
  i3702.reflectionProbeUsage = i3703[15]
  request.r(i3703[16], i3703[17], 0, i3702, 'sharedMesh')
  var i3707 = i3703[18]
  var i3706 = []
  for(var i = 0; i < i3707.length; i += 2) {
  request.r(i3707[i + 0], i3707[i + 1], 2, i3706, '')
  }
  i3702.bones = i3706
  i3702.updateWhenOffscreen = !!i3703[19]
  i3702.localBounds = i3703[20]
  request.r(i3703[21], i3703[22], 0, i3702, 'rootBone')
  var i3709 = i3703[23]
  var i3708 = []
  for(var i = 0; i < i3709.length; i += 1) {
    i3708.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i3709[i + 0]) );
  }
  i3702.blendShapesWeights = i3708
  return i3702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i3712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i3713 = data
  i3712.weight = i3713[0]
  return i3712
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i3714 = root || request.c( 'FishingLine' )
  var i3715 = data
  request.r(i3715[0], i3715[1], 0, i3714, 'line')
  request.r(i3715[2], i3715[3], 0, i3714, 'startPoint')
  request.r(i3715[4], i3715[5], 0, i3714, 'endPoint')
  return i3714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i3716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i3717 = data
  i3716.mass = i3717[0]
  i3716.drag = i3717[1]
  i3716.angularDrag = i3717[2]
  i3716.useGravity = !!i3717[3]
  i3716.isKinematic = !!i3717[4]
  i3716.constraints = i3717[5]
  i3716.maxAngularVelocity = i3717[6]
  i3716.collisionDetectionMode = i3717[7]
  i3716.interpolation = i3717[8]
  return i3716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i3718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i3719 = data
  i3718.swingAxis = new pc.Vec3( i3719[0], i3719[1], i3719[2] )
  i3718.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3719[3], i3718.twistLimitSpring)
  i3718.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i3719[4], i3718.swingLimitSpring)
  i3718.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i3719[5], i3718.lowTwistLimit)
  i3718.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i3719[6], i3718.highTwistLimit)
  i3718.swing1Limit = request.d('UnityEngine.SoftJointLimit', i3719[7], i3718.swing1Limit)
  i3718.swing2Limit = request.d('UnityEngine.SoftJointLimit', i3719[8], i3718.swing2Limit)
  request.r(i3719[9], i3719[10], 0, i3718, 'connectedBody')
  i3718.axis = new pc.Vec3( i3719[11], i3719[12], i3719[13] )
  i3718.anchor = new pc.Vec3( i3719[14], i3719[15], i3719[16] )
  i3718.connectedAnchor = new pc.Vec3( i3719[17], i3719[18], i3719[19] )
  i3718.autoConfigureConnectedAnchor = !!i3719[20]
  i3718.massScale = i3719[21]
  i3718.connectedMassScale = i3719[22]
  i3718.enableCollision = !!i3719[23]
  i3718.breakForce = i3719[24]
  i3718.breakTorque = i3719[25]
  return i3718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i3722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i3723 = data
  i3722.weight = i3723[0]
  i3722.vertices = i3723[1]
  i3722.normals = i3723[2]
  i3722.tangents = i3723[3]
  return i3722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i3724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i3725 = data
  i3724.pivot = new pc.Vec2( i3725[0], i3725[1] )
  i3724.anchorMin = new pc.Vec2( i3725[2], i3725[3] )
  i3724.anchorMax = new pc.Vec2( i3725[4], i3725[5] )
  i3724.sizeDelta = new pc.Vec2( i3725[6], i3725[7] )
  i3724.anchoredPosition3D = new pc.Vec3( i3725[8], i3725[9], i3725[10] )
  i3724.rotation = new pc.Quat(i3725[11], i3725[12], i3725[13], i3725[14])
  i3724.scale = new pc.Vec3( i3725[15], i3725[16], i3725[17] )
  return i3724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i3726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i3727 = data
  i3726.cullTransparentMesh = !!i3727[0]
  return i3726
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i3728 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i3729 = data
  i3728.m_hasFontAssetChanged = !!i3729[0]
  request.r(i3729[1], i3729[2], 0, i3728, 'm_baseMaterial')
  i3728.m_maskOffset = new pc.Vec4( i3729[3], i3729[4], i3729[5], i3729[6] )
  i3728.m_text = i3729[7]
  i3728.m_isRightToLeft = !!i3729[8]
  request.r(i3729[9], i3729[10], 0, i3728, 'm_fontAsset')
  request.r(i3729[11], i3729[12], 0, i3728, 'm_sharedMaterial')
  var i3731 = i3729[13]
  var i3730 = []
  for(var i = 0; i < i3731.length; i += 2) {
  request.r(i3731[i + 0], i3731[i + 1], 2, i3730, '')
  }
  i3728.m_fontSharedMaterials = i3730
  request.r(i3729[14], i3729[15], 0, i3728, 'm_fontMaterial')
  var i3733 = i3729[16]
  var i3732 = []
  for(var i = 0; i < i3733.length; i += 2) {
  request.r(i3733[i + 0], i3733[i + 1], 2, i3732, '')
  }
  i3728.m_fontMaterials = i3732
  i3728.m_fontColor32 = UnityEngine.Color32.ConstructColor(i3729[17], i3729[18], i3729[19], i3729[20])
  i3728.m_fontColor = new pc.Color(i3729[21], i3729[22], i3729[23], i3729[24])
  i3728.m_enableVertexGradient = !!i3729[25]
  i3728.m_colorMode = i3729[26]
  i3728.m_fontColorGradient = request.d('TMPro.VertexGradient', i3729[27], i3728.m_fontColorGradient)
  request.r(i3729[28], i3729[29], 0, i3728, 'm_fontColorGradientPreset')
  request.r(i3729[30], i3729[31], 0, i3728, 'm_spriteAsset')
  i3728.m_tintAllSprites = !!i3729[32]
  request.r(i3729[33], i3729[34], 0, i3728, 'm_StyleSheet')
  i3728.m_TextStyleHashCode = i3729[35]
  i3728.m_overrideHtmlColors = !!i3729[36]
  i3728.m_faceColor = UnityEngine.Color32.ConstructColor(i3729[37], i3729[38], i3729[39], i3729[40])
  i3728.m_fontSize = i3729[41]
  i3728.m_fontSizeBase = i3729[42]
  i3728.m_fontWeight = i3729[43]
  i3728.m_enableAutoSizing = !!i3729[44]
  i3728.m_fontSizeMin = i3729[45]
  i3728.m_fontSizeMax = i3729[46]
  i3728.m_fontStyle = i3729[47]
  i3728.m_HorizontalAlignment = i3729[48]
  i3728.m_VerticalAlignment = i3729[49]
  i3728.m_textAlignment = i3729[50]
  i3728.m_characterSpacing = i3729[51]
  i3728.m_wordSpacing = i3729[52]
  i3728.m_lineSpacing = i3729[53]
  i3728.m_lineSpacingMax = i3729[54]
  i3728.m_paragraphSpacing = i3729[55]
  i3728.m_charWidthMaxAdj = i3729[56]
  i3728.m_enableWordWrapping = !!i3729[57]
  i3728.m_wordWrappingRatios = i3729[58]
  i3728.m_overflowMode = i3729[59]
  request.r(i3729[60], i3729[61], 0, i3728, 'm_linkedTextComponent')
  request.r(i3729[62], i3729[63], 0, i3728, 'parentLinkedComponent')
  i3728.m_enableKerning = !!i3729[64]
  i3728.m_enableExtraPadding = !!i3729[65]
  i3728.checkPaddingRequired = !!i3729[66]
  i3728.m_isRichText = !!i3729[67]
  i3728.m_parseCtrlCharacters = !!i3729[68]
  i3728.m_isOrthographic = !!i3729[69]
  i3728.m_isCullingEnabled = !!i3729[70]
  i3728.m_horizontalMapping = i3729[71]
  i3728.m_verticalMapping = i3729[72]
  i3728.m_uvLineOffset = i3729[73]
  i3728.m_geometrySortingOrder = i3729[74]
  i3728.m_IsTextObjectScaleStatic = !!i3729[75]
  i3728.m_VertexBufferAutoSizeReduction = !!i3729[76]
  i3728.m_useMaxVisibleDescender = !!i3729[77]
  i3728.m_pageToDisplay = i3729[78]
  i3728.m_margin = new pc.Vec4( i3729[79], i3729[80], i3729[81], i3729[82] )
  i3728.m_isUsingLegacyAnimationComponent = !!i3729[83]
  i3728.m_isVolumetricText = !!i3729[84]
  request.r(i3729[85], i3729[86], 0, i3728, 'm_Material')
  i3728.m_Maskable = !!i3729[87]
  i3728.m_Color = new pc.Color(i3729[88], i3729[89], i3729[90], i3729[91])
  i3728.m_RaycastTarget = !!i3729[92]
  i3728.m_RaycastPadding = new pc.Vec4( i3729[93], i3729[94], i3729[95], i3729[96] )
  return i3728
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i3734 = root || request.c( 'TMPro.VertexGradient' )
  var i3735 = data
  i3734.topLeft = new pc.Color(i3735[0], i3735[1], i3735[2], i3735[3])
  i3734.topRight = new pc.Color(i3735[4], i3735[5], i3735[6], i3735[7])
  i3734.bottomLeft = new pc.Color(i3735[8], i3735[9], i3735[10], i3735[11])
  i3734.bottomRight = new pc.Color(i3735[12], i3735[13], i3735[14], i3735[15])
  return i3734
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i3736 = root || request.c( 'UnityEngine.UI.Image' )
  var i3737 = data
  request.r(i3737[0], i3737[1], 0, i3736, 'm_Sprite')
  i3736.m_Type = i3737[2]
  i3736.m_PreserveAspect = !!i3737[3]
  i3736.m_FillCenter = !!i3737[4]
  i3736.m_FillMethod = i3737[5]
  i3736.m_FillAmount = i3737[6]
  i3736.m_FillClockwise = !!i3737[7]
  i3736.m_FillOrigin = i3737[8]
  i3736.m_UseSpriteMesh = !!i3737[9]
  i3736.m_PixelsPerUnitMultiplier = i3737[10]
  request.r(i3737[11], i3737[12], 0, i3736, 'm_Material')
  i3736.m_Maskable = !!i3737[13]
  i3736.m_Color = new pc.Color(i3737[14], i3737[15], i3737[16], i3737[17])
  i3736.m_RaycastTarget = !!i3737[18]
  i3736.m_RaycastPadding = new pc.Vec4( i3737[19], i3737[20], i3737[21], i3737[22] )
  return i3736
}

Deserializers["Fish"] = function (request, data, root) {
  var i3738 = root || request.c( 'Fish' )
  var i3739 = data
  i3738.fishType = request.d('FishType', i3739[0], i3738.fishType)
  request.r(i3739[1], i3739[2], 0, i3738, 'fishData')
  i3738.sensingRadius = i3739[3]
  i3738.moveSpeed = i3739[4]
  i3738.followTargetSpeed = i3739[5]
  i3738.rotationSpeed = i3739[6]
  request.r(i3739[7], i3739[8], 0, i3738, 'target')
  i3738.usingMapDataNumber = i3739[9]
  i3738.hooked = !!i3739[10]
  request.r(i3739[11], i3739[12], 0, i3738, 'rigid')
  i3738.dirToHook = new pc.Vec3( i3739[13], i3739[14], i3739[15] )
  request.r(i3739[16], i3739[17], 0, i3738, 'head')
  request.r(i3739[18], i3739[19], 0, i3738, 'mapData')
  request.r(i3739[20], i3739[21], 0, i3738, 'mousePoint')
  return i3738
}

Deserializers["FishType"] = function (request, data, root) {
  var i3740 = root || request.c( 'FishType' )
  var i3741 = data
  i3740.cost = i3741[0]
  i3740.tier = i3741[1]
  i3740.fishNumber = i3741[2]
  i3740.boundSize = new pc.Vec3( i3741[3], i3741[4], i3741[5] )
  return i3740
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i3742 = root || request.c( 'ChestMover' )
  var i3743 = data
  request.r(i3743[0], i3743[1], 0, i3742, 'chest')
  return i3742
}

Deserializers["Chest"] = function (request, data, root) {
  var i3744 = root || request.c( 'Chest' )
  var i3745 = data
  request.r(i3745[0], i3745[1], 0, i3744, 'chestMover')
  i3744.chestTier = i3745[2]
  request.r(i3745[3], i3745[4], 0, i3744, 'line')
  i3744.chestPullDist = i3745[5]
  i3744.pullForce = i3745[6]
  i3744.fishType = request.d('FishType', i3745[7], i3744.fishType)
  request.r(i3745[8], i3745[9], 0, i3744, 'fishData')
  i3744.sensingRadius = i3745[10]
  i3744.moveSpeed = i3745[11]
  i3744.followTargetSpeed = i3745[12]
  i3744.rotationSpeed = i3745[13]
  request.r(i3745[14], i3745[15], 0, i3744, 'target')
  i3744.usingMapDataNumber = i3745[16]
  i3744.hooked = !!i3745[17]
  request.r(i3745[18], i3745[19], 0, i3744, 'rigid2')
  request.r(i3745[20], i3745[21], 0, i3744, 'rigid')
  i3744.dirToHook = new pc.Vec3( i3745[22], i3745[23], i3745[24] )
  request.r(i3745[25], i3745[26], 0, i3744, 'head')
  request.r(i3745[27], i3745[28], 0, i3744, 'mapData')
  request.r(i3745[29], i3745[30], 0, i3744, 'mousePoint')
  return i3744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i3746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i3747 = data
  i3746.enabled = !!i3747[0]
  i3746.type = i3747[1]
  i3746.color = new pc.Color(i3747[2], i3747[3], i3747[4], i3747[5])
  i3746.cullingMask = i3747[6]
  i3746.intensity = i3747[7]
  i3746.range = i3747[8]
  i3746.spotAngle = i3747[9]
  i3746.shadows = i3747[10]
  i3746.shadowNormalBias = i3747[11]
  i3746.shadowBias = i3747[12]
  i3746.shadowStrength = i3747[13]
  i3746.shadowResolution = i3747[14]
  i3746.lightmapBakeType = i3747[15]
  i3746.renderMode = i3747[16]
  request.r(i3747[17], i3747[18], 0, i3746, 'cookie')
  i3746.cookieSize = i3747[19]
  return i3746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i3748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i3749 = data
  i3748.enabled = !!i3749[0]
  request.r(i3749[1], i3749[2], 0, i3748, 'sharedMaterial')
  var i3751 = i3749[3]
  var i3750 = []
  for(var i = 0; i < i3751.length; i += 2) {
  request.r(i3751[i + 0], i3751[i + 1], 2, i3750, '')
  }
  i3748.sharedMaterials = i3750
  i3748.receiveShadows = !!i3749[4]
  i3748.shadowCastingMode = i3749[5]
  i3748.sortingLayerID = i3749[6]
  i3748.sortingOrder = i3749[7]
  i3748.lightmapIndex = i3749[8]
  i3748.lightmapSceneIndex = i3749[9]
  i3748.lightmapScaleOffset = new pc.Vec4( i3749[10], i3749[11], i3749[12], i3749[13] )
  i3748.lightProbeUsage = i3749[14]
  i3748.reflectionProbeUsage = i3749[15]
  i3748.color = new pc.Color(i3749[16], i3749[17], i3749[18], i3749[19])
  request.r(i3749[20], i3749[21], 0, i3748, 'sprite')
  i3748.flipX = !!i3749[22]
  i3748.flipY = !!i3749[23]
  i3748.drawMode = i3749[24]
  i3748.size = new pc.Vec2( i3749[25], i3749[26] )
  i3748.tileMode = i3749[27]
  i3748.adaptiveModeThreshold = i3749[28]
  i3748.maskInteraction = i3749[29]
  i3748.spriteSortPoint = i3749[30]
  return i3748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i3752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i3753 = data
  i3752.name = i3753[0]
  i3752.atlasId = i3753[1]
  i3752.mipmapCount = i3753[2]
  i3752.hdr = !!i3753[3]
  i3752.size = i3753[4]
  i3752.anisoLevel = i3753[5]
  i3752.filterMode = i3753[6]
  i3752.wrapMode = i3753[7]
  var i3755 = i3753[8]
  var i3754 = []
  for(var i = 0; i < i3755.length; i += 4) {
    i3754.push( UnityEngine.Rect.MinMaxRect(i3755[i + 0], i3755[i + 1], i3755[i + 2], i3755[i + 3]) );
  }
  i3752.rects = i3754
  return i3752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i3758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i3759 = data
  i3758.name = i3759[0]
  i3758.index = i3759[1]
  i3758.startup = !!i3759[2]
  return i3758
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i3760 = root || request.c( 'LunaChallenge' )
  var i3761 = data
  i3760.challengeClear = !!i3761[0]
  request.r(i3761[1], i3761[2], 0, i3760, 'challengeObject')
  request.r(i3761[3], i3761[4], 0, i3760, 'challengeCount')
  request.r(i3761[5], i3761[6], 0, i3760, 'challengeClearObject')
  request.r(i3761[7], i3761[8], 0, i3760, 'challengeSlotObject')
  request.r(i3761[9], i3761[10], 0, i3760, 'tapToStartObject')
  request.r(i3761[11], i3761[12], 0, i3760, 'EndCard')
  i3760.goalCount = i3761[13]
  i3760.currentCount = i3761[14]
  return i3760
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i3762 = root || request.c( 'FishingRod' )
  var i3763 = data
  i3762.hookThrowForce = i3763[0]
  i3762.lineForce = i3763[1]
  i3762.maxPullingForce = i3763[2]
  i3762.minPullingForce = i3763[3]
  i3762.currentPullingForece = i3763[4]
  i3762.maxLine = i3763[5]
  i3762.pullingSpeed = i3763[6]
  i3762.playAdsPullCount = i3763[7]
  i3762.isStart = !!i3763[8]
  request.r(i3763[9], i3763[10], 0, i3762, 'hookRigid')
  request.r(i3763[11], i3763[12], 0, i3762, 'pivot')
  request.r(i3763[13], i3763[14], 0, i3762, 'touchToStartPanel')
  request.r(i3763[15], i3763[16], 0, i3762, 'rodAnimator')
  request.r(i3763[17], i3763[18], 0, i3762, 'fishingHook')
  request.r(i3763[19], i3763[20], 0, i3762, 'touchField')
  request.r(i3763[21], i3763[22], 0, i3762, 'upgradePanel')
  request.r(i3763[23], i3763[24], 0, i3762, 'upgradeButton')
  request.r(i3763[25], i3763[26], 0, i3762, 'depthText')
  request.r(i3763[27], i3763[28], 0, i3762, 'touchToPullPanel')
  request.r(i3763[29], i3763[30], 0, i3762, 'throwTarget1')
  request.r(i3763[31], i3763[32], 0, i3762, 'throwTarget2')
  request.r(i3763[33], i3763[34], 0, i3762, 'hookObject')
  request.r(i3763[35], i3763[36], 0, i3762, 'playerObject')
  request.r(i3763[37], i3763[38], 0, i3762, 'animationController')
  return i3762
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i3764 = root || request.c( 'FishingLogic' )
  var i3765 = data
  request.r(i3765[0], i3765[1], 0, i3764, 'joint')
  i3764.biteBate = !!i3765[2]
  i3764.pulling = !!i3765[3]
  i3764.enablePulling = !!i3765[4]
  request.r(i3765[5], i3765[6], 0, i3764, 'rodAnimator')
  request.r(i3765[7], i3765[8], 0, i3764, 'animationController')
  request.r(i3765[9], i3765[10], 0, i3764, 'startButton')
  request.r(i3765[11], i3765[12], 0, i3764, 'catchSlider')
  request.r(i3765[13], i3765[14], 0, i3764, 'catchButton')
  request.r(i3765[15], i3765[16], 0, i3764, 'fishingRod')
  request.r(i3765[17], i3765[18], 0, i3764, 'arrow')
  request.r(i3765[19], i3765[20], 0, i3764, 'fishingRodSkinned')
  request.r(i3765[21], i3765[22], 0, i3764, 'bubbleParticle')
  request.r(i3765[23], i3765[24], 0, i3764, 'hookRigid')
  request.r(i3765[25], i3765[26], 0, i3764, 'hook')
  return i3764
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i3766 = root || request.c( 'Upgrades' )
  var i3767 = data
  i3766.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i3767[0], i3766.lineLengthUpgrade)
  i3766.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i3767[1], i3766.hookMaxUpgrade)
  i3766.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i3767[2], i3766.hookMoveSpeedUpgrade)
  request.r(i3767[3], i3767[4], 0, i3766, 'hook')
  request.r(i3767[5], i3767[6], 0, i3766, 'rod')
  request.r(i3767[7], i3767[8], 0, i3766, 'touchField')
  request.r(i3767[9], i3767[10], 0, i3766, 'upgradePanel')
  request.r(i3767[11], i3767[12], 0, i3766, 'upgradeTap')
  request.r(i3767[13], i3767[14], 0, i3766, 'closeTap')
  request.r(i3767[15], i3767[16], 0, i3766, 'tapToStartText')
  return i3766
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i3768 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i3769 = data
  i3768.currentLevel = i3769[0]
  i3768.maxLevel = i3769[1]
  i3768.upgradeValue = i3769[2]
  i3768.upgradeNeedyCost = i3769[3]
  i3768.upgradeCostIncreaseValue = i3769[4]
  i3768.upgradeCostIncreaseValueMultifly = i3769[5]
  request.r(i3769[6], i3769[7], 0, i3768, 'levelText')
  request.r(i3769[8], i3769[9], 0, i3768, 'needyCostText')
  request.r(i3769[10], i3769[11], 0, i3768, 'cover')
  request.r(i3769[12], i3769[13], 0, i3768, 'rod')
  return i3768
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i3770 = root || request.c( 'Upgrades+CountUpgrade' )
  var i3771 = data
  i3770.currentLevel = i3771[0]
  i3770.maxLevel = i3771[1]
  i3770.upgradeValue = i3771[2]
  i3770.upgradeNeedyCost = i3771[3]
  i3770.upgradeCostIncreaseValue = i3771[4]
  i3770.upgradeCostIncreaseValueMultifly = i3771[5]
  request.r(i3771[6], i3771[7], 0, i3770, 'levelText')
  request.r(i3771[8], i3771[9], 0, i3770, 'needyCostText')
  request.r(i3771[10], i3771[11], 0, i3770, 'cover')
  request.r(i3771[12], i3771[13], 0, i3770, 'hook')
  return i3770
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i3772 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i3773 = data
  i3772.currentLevel = i3773[0]
  i3772.maxLevel = i3773[1]
  i3772.upgradeValue = i3773[2]
  i3772.upgradeNeedyCost = i3773[3]
  i3772.upgradeCostIncreaseValue = i3773[4]
  i3772.upgradeCostIncreaseValueMultifly = i3773[5]
  request.r(i3773[6], i3773[7], 0, i3772, 'levelText')
  request.r(i3773[8], i3773[9], 0, i3772, 'needyCostText')
  request.r(i3773[10], i3773[11], 0, i3772, 'cover')
  request.r(i3773[12], i3773[13], 0, i3772, 'touchField')
  return i3772
}

Deserializers["FishPool"] = function (request, data, root) {
  var i3774 = root || request.c( 'FishPool' )
  var i3775 = data
  i3774.oneTierFishList = request.d('FishList', i3775[0], i3774.oneTierFishList)
  i3774.twoTierFishList = request.d('FishList', i3775[1], i3774.twoTierFishList)
  i3774.threeTierFishList = request.d('FishList', i3775[2], i3774.threeTierFishList)
  i3774.fourTierFishList = request.d('FishList', i3775[3], i3774.fourTierFishList)
  i3774.fiveTierFishList = request.d('FishList', i3775[4], i3774.fiveTierFishList)
  i3774.chestList_one = request.d('FishList', i3775[5], i3774.chestList_one)
  i3774.chestList_two = request.d('FishList', i3775[6], i3774.chestList_two)
  i3774.chestList_three = request.d('FishList', i3775[7], i3774.chestList_three)
  i3774.chestMover = request.d('FishList', i3775[8], i3774.chestMover)
  var i3777 = i3775[9]
  var i3776 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i3777.length; i += 2) {
  request.r(i3777[i + 0], i3777[i + 1], 1, i3776, '')
  }
  i3774.generatedFishList = i3776
  request.r(i3775[10], i3775[11], 0, i3774, 'poolParent')
  return i3774
}

Deserializers["FishList"] = function (request, data, root) {
  var i3778 = root || request.c( 'FishList' )
  var i3779 = data
  var i3781 = i3779[0]
  var i3780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i3781.length; i += 2) {
  request.r(i3781[i + 0], i3781[i + 1], 1, i3780, '')
  }
  i3778.fishList = i3780
  var i3783 = i3779[1]
  var i3782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i3783.length; i += 2) {
  request.r(i3783[i + 0], i3783[i + 1], 1, i3782, '')
  }
  i3778.spawnPoints = i3782
  return i3778
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i3790 = root || request.c( 'LowLineRenderer' )
  var i3791 = data
  request.r(i3791[0], i3791[1], 0, i3790, 'line')
  request.r(i3791[2], i3791[3], 0, i3790, 'start')
  request.r(i3791[4], i3791[5], 0, i3790, 'end')
  return i3790
}

Deserializers["DataManager"] = function (request, data, root) {
  var i3792 = root || request.c( 'DataManager' )
  var i3793 = data
  request.r(i3793[0], i3793[1], 0, i3792, 'setting')
  request.r(i3793[2], i3793[3], 0, i3792, 'soundSlider')
  request.r(i3793[4], i3793[5], 0, i3792, 'hapticSlider')
  i3792.gameDataFileName = i3793[6]
  i3792._gameData = request.d('GameData', i3793[7], i3792._gameData)
  request.r(i3793[8], i3793[9], 0, i3792, 'soundSliderHandleText')
  request.r(i3793[10], i3793[11], 0, i3792, 'hapticSliderHandleText')
  return i3792
}

Deserializers["GameData"] = function (request, data, root) {
  var i3794 = root || request.c( 'GameData' )
  var i3795 = data
  i3794.money = i3795[0]
  i3794.needleUpgrade = i3795[1]
  i3794.lineUpgrade = i3795[2]
  i3794.reelUpgrade = i3795[3]
  i3794.sound = i3795[4]
  i3794.haptic = i3795[5]
  return i3794
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i3796 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i3797 = data
  request.r(i3797[0], i3797[1], 0, i3796, 'm_FirstSelected')
  i3796.m_sendNavigationEvents = !!i3797[2]
  i3796.m_DragThreshold = i3797[3]
  return i3796
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i3798 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i3799 = data
  i3798.m_HorizontalAxis = i3799[0]
  i3798.m_VerticalAxis = i3799[1]
  i3798.m_SubmitButton = i3799[2]
  i3798.m_CancelButton = i3799[3]
  i3798.m_InputActionsPerSecond = i3799[4]
  i3798.m_RepeatDelay = i3799[5]
  i3798.m_ForceModuleActive = !!i3799[6]
  i3798.m_SendPointerHoverToParent = !!i3799[7]
  return i3798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i3800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i3801 = data
  i3800.enabled = !!i3801[0]
  i3800.planeDistance = i3801[1]
  i3800.referencePixelsPerUnit = i3801[2]
  i3800.isFallbackOverlay = !!i3801[3]
  i3800.renderMode = i3801[4]
  i3800.renderOrder = i3801[5]
  i3800.sortingLayerName = i3801[6]
  i3800.sortingOrder = i3801[7]
  i3800.scaleFactor = i3801[8]
  request.r(i3801[9], i3801[10], 0, i3800, 'worldCamera')
  i3800.overrideSorting = !!i3801[11]
  i3800.pixelPerfect = !!i3801[12]
  i3800.targetDisplay = i3801[13]
  i3800.overridePixelPerfect = !!i3801[14]
  return i3800
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i3802 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i3803 = data
  i3802.m_UiScaleMode = i3803[0]
  i3802.m_ReferencePixelsPerUnit = i3803[1]
  i3802.m_ScaleFactor = i3803[2]
  i3802.m_ReferenceResolution = new pc.Vec2( i3803[3], i3803[4] )
  i3802.m_ScreenMatchMode = i3803[5]
  i3802.m_MatchWidthOrHeight = i3803[6]
  i3802.m_PhysicalUnit = i3803[7]
  i3802.m_FallbackScreenDPI = i3803[8]
  i3802.m_DefaultSpriteDPI = i3803[9]
  i3802.m_DynamicPixelsPerUnit = i3803[10]
  i3802.m_PresetInfoIsWorld = !!i3803[11]
  return i3802
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i3804 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i3805 = data
  i3804.m_IgnoreReversedGraphics = !!i3805[0]
  i3804.m_BlockingObjects = i3805[1]
  i3804.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i3805[2] )
  return i3804
}

Deserializers["UIManager"] = function (request, data, root) {
  var i3806 = root || request.c( 'UIManager' )
  var i3807 = data
  request.r(i3807[0], i3807[1], 0, i3806, 'challengeTarget')
  request.r(i3807[2], i3807[3], 0, i3806, 'challengeText')
  request.r(i3807[4], i3807[5], 0, i3806, 'versionText')
  i3806.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3807[6] )
  i3806.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i3807[7] )
  request.r(i3807[8], i3807[9], 0, i3806, 'uiCamera')
  var i3809 = i3807[10]
  var i3808 = []
  for(var i = 0; i < i3809.length; i += 2) {
  request.r(i3809[i + 0], i3809[i + 1], 2, i3808, '')
  }
  i3806.pictureModeObjects = i3808
  return i3806
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i3812 = root || request.c( 'FixedTouchField' )
  var i3813 = data
  i3812.TouchDist = new pc.Vec2( i3813[0], i3813[1] )
  i3812.PointerOld = new pc.Vec2( i3813[2], i3813[3] )
  i3812.Pressed = !!i3813[4]
  i3812.hookMoveSpeed = i3813[5]
  request.r(i3813[6], i3813[7], 0, i3812, 'hook')
  request.r(i3813[8], i3813[9], 0, i3812, 'logic')
  request.r(i3813[10], i3813[11], 0, i3812, 'joystick_Background')
  request.r(i3813[12], i3813[13], 0, i3812, 'joystick_Handle')
  request.r(i3813[14], i3813[15], 0, i3812, 'canvas')
  request.r(i3813[16], i3813[17], 0, i3812, 'newCamera')
  i3812.clampDist = i3813[18]
  return i3812
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i3814 = root || request.c( 'UnityEngine.UI.Button' )
  var i3815 = data
  i3814.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i3815[0], i3814.m_OnClick)
  i3814.m_Navigation = request.d('UnityEngine.UI.Navigation', i3815[1], i3814.m_Navigation)
  i3814.m_Transition = i3815[2]
  i3814.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3815[3], i3814.m_Colors)
  i3814.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3815[4], i3814.m_SpriteState)
  i3814.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3815[5], i3814.m_AnimationTriggers)
  i3814.m_Interactable = !!i3815[6]
  request.r(i3815[7], i3815[8], 0, i3814, 'm_TargetGraphic')
  return i3814
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i3816 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i3817 = data
  i3816.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3817[0], i3816.m_PersistentCalls)
  return i3816
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i3818 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i3819 = data
  var i3821 = i3819[0]
  var i3820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i3821.length; i += 1) {
    i3820.add(request.d('UnityEngine.Events.PersistentCall', i3821[i + 0]));
  }
  i3818.m_Calls = i3820
  return i3818
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i3824 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i3825 = data
  request.r(i3825[0], i3825[1], 0, i3824, 'm_Target')
  i3824.m_TargetAssemblyTypeName = i3825[2]
  i3824.m_MethodName = i3825[3]
  i3824.m_Mode = i3825[4]
  i3824.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i3825[5], i3824.m_Arguments)
  i3824.m_CallState = i3825[6]
  return i3824
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i3826 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i3827 = data
  request.r(i3827[0], i3827[1], 0, i3826, 'm_ObjectArgument')
  i3826.m_ObjectArgumentAssemblyTypeName = i3827[2]
  i3826.m_IntArgument = i3827[3]
  i3826.m_FloatArgument = i3827[4]
  i3826.m_StringArgument = i3827[5]
  i3826.m_BoolArgument = !!i3827[6]
  return i3826
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i3828 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i3829 = data
  i3828.m_Mode = i3829[0]
  i3828.m_WrapAround = !!i3829[1]
  request.r(i3829[2], i3829[3], 0, i3828, 'm_SelectOnUp')
  request.r(i3829[4], i3829[5], 0, i3828, 'm_SelectOnDown')
  request.r(i3829[6], i3829[7], 0, i3828, 'm_SelectOnLeft')
  request.r(i3829[8], i3829[9], 0, i3828, 'm_SelectOnRight')
  return i3828
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i3830 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i3831 = data
  i3830.m_NormalColor = new pc.Color(i3831[0], i3831[1], i3831[2], i3831[3])
  i3830.m_HighlightedColor = new pc.Color(i3831[4], i3831[5], i3831[6], i3831[7])
  i3830.m_PressedColor = new pc.Color(i3831[8], i3831[9], i3831[10], i3831[11])
  i3830.m_SelectedColor = new pc.Color(i3831[12], i3831[13], i3831[14], i3831[15])
  i3830.m_DisabledColor = new pc.Color(i3831[16], i3831[17], i3831[18], i3831[19])
  i3830.m_ColorMultiplier = i3831[20]
  i3830.m_FadeDuration = i3831[21]
  return i3830
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i3832 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i3833 = data
  request.r(i3833[0], i3833[1], 0, i3832, 'm_HighlightedSprite')
  request.r(i3833[2], i3833[3], 0, i3832, 'm_PressedSprite')
  request.r(i3833[4], i3833[5], 0, i3832, 'm_SelectedSprite')
  request.r(i3833[6], i3833[7], 0, i3832, 'm_DisabledSprite')
  return i3832
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i3834 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i3835 = data
  i3834.m_NormalTrigger = i3835[0]
  i3834.m_HighlightedTrigger = i3835[1]
  i3834.m_PressedTrigger = i3835[2]
  i3834.m_SelectedTrigger = i3835[3]
  i3834.m_DisabledTrigger = i3835[4]
  return i3834
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i3836 = root || request.c( 'UnityEngine.UI.Outline' )
  var i3837 = data
  i3836.m_EffectColor = new pc.Color(i3837[0], i3837[1], i3837[2], i3837[3])
  i3836.m_EffectDistance = new pc.Vec2( i3837[4], i3837[5] )
  i3836.m_UseGraphicAlpha = !!i3837[6]
  return i3836
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i3838 = root || request.c( 'UnityEngine.UI.Slider' )
  var i3839 = data
  request.r(i3839[0], i3839[1], 0, i3838, 'm_FillRect')
  request.r(i3839[2], i3839[3], 0, i3838, 'm_HandleRect')
  i3838.m_Direction = i3839[4]
  i3838.m_MinValue = i3839[5]
  i3838.m_MaxValue = i3839[6]
  i3838.m_WholeNumbers = !!i3839[7]
  i3838.m_Value = i3839[8]
  i3838.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i3839[9], i3838.m_OnValueChanged)
  i3838.m_Navigation = request.d('UnityEngine.UI.Navigation', i3839[10], i3838.m_Navigation)
  i3838.m_Transition = i3839[11]
  i3838.m_Colors = request.d('UnityEngine.UI.ColorBlock', i3839[12], i3838.m_Colors)
  i3838.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i3839[13], i3838.m_SpriteState)
  i3838.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i3839[14], i3838.m_AnimationTriggers)
  i3838.m_Interactable = !!i3839[15]
  request.r(i3839[16], i3839[17], 0, i3838, 'm_TargetGraphic')
  return i3838
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i3840 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i3841 = data
  i3840.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3841[0], i3840.m_PersistentCalls)
  return i3840
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i3842 = root || request.c( 'EnviromentEditor' )
  var i3843 = data
  i3842.oceanSpriteValueMultifly = i3843[0]
  i3842.sunLightIntensity = i3843[1]
  i3842.minSunLightIntensity = i3843[2]
  i3842.challengeLightIntensity = i3843[3]
  i3842.depthMaskTransparentValue = i3843[4]
  i3842.ambientLightIntensity = i3843[5]
  request.r(i3843[6], i3843[7], 0, i3842, 'hook')
  var i3845 = i3843[8]
  var i3844 = []
  for(var i = 0; i < i3845.length; i += 2) {
  request.r(i3845[i + 0], i3845[i + 1], 2, i3844, '')
  }
  i3842.Oceans = i3844
  request.r(i3843[9], i3843[10], 0, i3842, 'OceanSurface')
  request.r(i3843[11], i3843[12], 0, i3842, 'depthMask')
  request.r(i3843[13], i3843[14], 0, i3842, 'depthSprite')
  request.r(i3843[15], i3843[16], 0, i3842, 'depthMaskMat')
  request.r(i3843[17], i3843[18], 0, i3842, 'sunLights')
  request.r(i3843[19], i3843[20], 0, i3842, 'hookLight')
  request.r(i3843[21], i3843[22], 0, i3842, 'challengeLight')
  return i3842
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i3848 = root || request.c( 'ObjectMovement' )
  var i3849 = data
  i3848.moveX = i3849[0]
  i3848.moveSec = i3849[1]
  return i3848
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i3850 = root || request.c( 'OceanTrigger' )
  var i3851 = data
  request.r(i3851[0], i3851[1], 0, i3850, 'touchToPullButton')
  request.r(i3851[2], i3851[3], 0, i3850, 'waterSplashParticle')
  request.r(i3851[4], i3851[5], 0, i3850, 'bubbleParticle')
  request.r(i3851[6], i3851[7], 0, i3850, 'arrow')
  request.r(i3851[8], i3851[9], 0, i3850, 'rigid')
  request.r(i3851[10], i3851[11], 0, i3850, 'hook')
  request.r(i3851[12], i3851[13], 0, i3850, 'rod')
  return i3850
}

Deserializers["Flock"] = function (request, data, root) {
  var i3852 = root || request.c( 'Flock' )
  var i3853 = data
  request.r(i3853[0], i3853[1], 0, i3852, 'flockUnitPrefab')
  i3852.flockSize = i3853[2]
  i3852.spawnBounds = new pc.Vec3( i3853[3], i3853[4], i3853[5] )
  i3852._minSpeed = i3853[6]
  i3852._maxSpeed = i3853[7]
  i3852._cohesionDistance = i3853[8]
  i3852._avoidanceDistance = i3853[9]
  i3852._aligementDistance = i3853[10]
  i3852._obstacleDistance = i3853[11]
  i3852._boundsDistance = i3853[12]
  i3852._cohesionWeight = i3853[13]
  i3852._avoidanceWeight = i3853[14]
  i3852._aligementWeight = i3853[15]
  i3852._boundsWeight = i3853[16]
  i3852._obstacleWeight = i3853[17]
  return i3852
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i3854 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i3855 = data
  request.r(i3855[0], i3855[1], 0, i3854, 'm_LookAt')
  request.r(i3855[2], i3855[3], 0, i3854, 'm_Follow')
  i3854.m_Lens = request.d('Cinemachine.LensSettings', i3855[4], i3854.m_Lens)
  i3854.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i3855[5], i3854.m_Transitions)
  var i3857 = i3855[6]
  var i3856 = []
  for(var i = 0; i < i3857.length; i += 1) {
    i3856.push( i3857[i + 0] );
  }
  i3854.m_ExcludedPropertiesInInspector = i3856
  var i3859 = i3855[7]
  var i3858 = []
  for(var i = 0; i < i3859.length; i += 1) {
    i3858.push( i3859[i + 0] );
  }
  i3854.m_LockStageInInspector = i3858
  i3854.m_Priority = i3855[8]
  i3854.m_StandbyUpdate = i3855[9]
  i3854.m_LegacyBlendHint = i3855[10]
  request.r(i3855[11], i3855[12], 0, i3854, 'm_ComponentOwner')
  i3854.m_StreamingVersion = i3855[13]
  return i3854
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i3860 = root || request.c( 'Cinemachine.LensSettings' )
  var i3861 = data
  i3860.FieldOfView = i3861[0]
  i3860.OrthographicSize = i3861[1]
  i3860.NearClipPlane = i3861[2]
  i3860.FarClipPlane = i3861[3]
  i3860.Dutch = i3861[4]
  i3860.ModeOverride = i3861[5]
  i3860.LensShift = new pc.Vec2( i3861[6], i3861[7] )
  i3860.GateFit = i3861[8]
  i3860.m_SensorSize = new pc.Vec2( i3861[9], i3861[10] )
  return i3860
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i3862 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i3863 = data
  i3862.m_BlendHint = i3863[0]
  i3862.m_InheritPosition = !!i3863[1]
  i3862.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i3863[2], i3862.m_OnCameraLive)
  return i3862
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i3864 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i3865 = data
  i3864.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3865[0], i3864.m_PersistentCalls)
  return i3864
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i3870 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i3871 = data
  return i3870
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i3872 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i3873 = data
  i3872.m_TrackedObjectOffset = new pc.Vec3( i3873[0], i3873[1], i3873[2] )
  i3872.m_LookaheadTime = i3873[3]
  i3872.m_LookaheadSmoothing = i3873[4]
  i3872.m_LookaheadIgnoreY = !!i3873[5]
  i3872.m_HorizontalDamping = i3873[6]
  i3872.m_VerticalDamping = i3873[7]
  i3872.m_ScreenX = i3873[8]
  i3872.m_ScreenY = i3873[9]
  i3872.m_DeadZoneWidth = i3873[10]
  i3872.m_DeadZoneHeight = i3873[11]
  i3872.m_SoftZoneWidth = i3873[12]
  i3872.m_SoftZoneHeight = i3873[13]
  i3872.m_BiasX = i3873[14]
  i3872.m_BiasY = i3873[15]
  i3872.m_CenterOnActivate = !!i3873[16]
  return i3872
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i3874 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i3875 = data
  i3874.m_BindingMode = i3875[0]
  i3874.m_FollowOffset = new pc.Vec3( i3875[1], i3875[2], i3875[3] )
  i3874.m_XDamping = i3875[4]
  i3874.m_YDamping = i3875[5]
  i3874.m_ZDamping = i3875[6]
  i3874.m_AngularDampingMode = i3875[7]
  i3874.m_PitchDamping = i3875[8]
  i3874.m_YawDamping = i3875[9]
  i3874.m_RollDamping = i3875[10]
  i3874.m_AngularDamping = i3875[11]
  return i3874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i3876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i3877 = data
  i3876.enabled = !!i3877[0]
  i3876.aspect = i3877[1]
  i3876.orthographic = !!i3877[2]
  i3876.orthographicSize = i3877[3]
  i3876.backgroundColor = new pc.Color(i3877[4], i3877[5], i3877[6], i3877[7])
  i3876.nearClipPlane = i3877[8]
  i3876.farClipPlane = i3877[9]
  i3876.fieldOfView = i3877[10]
  i3876.depth = i3877[11]
  i3876.clearFlags = i3877[12]
  i3876.cullingMask = i3877[13]
  i3876.rect = i3877[14]
  request.r(i3877[15], i3877[16], 0, i3876, 'targetTexture')
  return i3876
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i3878 = root || request.c( 'CameraMove' )
  var i3879 = data
  i3878.offset = new pc.Vec3( i3879[0], i3879[1], i3879[2] )
  request.r(i3879[3], i3879[4], 0, i3878, 'newCamera')
  request.r(i3879[5], i3879[6], 0, i3878, 'target')
  return i3878
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i3880 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i3881 = data
  i3880.m_ShowDebugText = !!i3881[0]
  i3880.m_ShowCameraFrustum = !!i3881[1]
  i3880.m_IgnoreTimeScale = !!i3881[2]
  request.r(i3881[3], i3881[4], 0, i3880, 'm_WorldUpOverride')
  i3880.m_UpdateMethod = i3881[5]
  i3880.m_BlendUpdateMethod = i3881[6]
  i3880.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i3881[7], i3880.m_DefaultBlend)
  request.r(i3881[8], i3881[9], 0, i3880, 'm_CustomBlends')
  i3880.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i3881[10], i3880.m_CameraCutEvent)
  i3880.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i3881[11], i3880.m_CameraActivatedEvent)
  return i3880
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i3882 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i3883 = data
  i3882.m_Style = i3883[0]
  i3882.m_Time = i3883[1]
  i3882.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i3883[2] } )
  return i3882
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i3884 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i3885 = data
  i3884.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3885[0], i3884.m_PersistentCalls)
  return i3884
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i3886 = root || request.c( 'CinemachineController' )
  var i3887 = data
  request.r(i3887[0], i3887[1], 0, i3886, 'playerTrans')
  i3886.playerOffset = new pc.Vec3( i3887[2], i3887[3], i3887[4] )
  request.r(i3887[5], i3887[6], 0, i3886, 'hookTrans')
  i3886.hookOffset = new pc.Vec3( i3887[7], i3887[8], i3887[9] )
  request.r(i3887[10], i3887[11], 0, i3886, 'cvc_Hook')
  request.r(i3887[12], i3887[13], 0, i3886, 'cvc_Player')
  return i3886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i3888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i3889 = data
  i3888.enabled = !!i3889[0]
  i3888.isTrigger = !!i3889[1]
  request.r(i3889[2], i3889[3], 0, i3888, 'material')
  i3888.center = new pc.Vec3( i3889[4], i3889[5], i3889[6] )
  i3888.radius = i3889[7]
  return i3888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i3890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i3891 = data
  i3890.enabled = !!i3891[0]
  request.r(i3891[1], i3891[2], 0, i3890, 'sharedMaterial')
  var i3893 = i3891[3]
  var i3892 = []
  for(var i = 0; i < i3893.length; i += 2) {
  request.r(i3893[i + 0], i3893[i + 1], 2, i3892, '')
  }
  i3890.sharedMaterials = i3892
  i3890.receiveShadows = !!i3891[4]
  i3890.shadowCastingMode = i3891[5]
  i3890.sortingLayerID = i3891[6]
  i3890.sortingOrder = i3891[7]
  i3890.lightmapIndex = i3891[8]
  i3890.lightmapSceneIndex = i3891[9]
  i3890.lightmapScaleOffset = new pc.Vec4( i3891[10], i3891[11], i3891[12], i3891[13] )
  i3890.lightProbeUsage = i3891[14]
  i3890.reflectionProbeUsage = i3891[15]
  var i3895 = i3891[16]
  var i3894 = []
  for(var i = 0; i < i3895.length; i += 3) {
    i3894.push( new pc.Vec3( i3895[i + 0], i3895[i + 1], i3895[i + 2] ) );
  }
  i3890.positions = i3894
  i3890.positionCount = i3891[17]
  i3890.time = i3891[18]
  i3890.startWidth = i3891[19]
  i3890.endWidth = i3891[20]
  i3890.widthMultiplier = i3891[21]
  i3890.autodestruct = !!i3891[22]
  i3890.emitting = !!i3891[23]
  i3890.numCornerVertices = i3891[24]
  i3890.numCapVertices = i3891[25]
  i3890.minVertexDistance = i3891[26]
  i3890.colorGradient = i3891[27] ? new pc.ColorGradient(i3891[27][0], i3891[27][1], i3891[27][2]) : null
  i3890.startColor = new pc.Color(i3891[28], i3891[29], i3891[30], i3891[31])
  i3890.endColor = new pc.Color(i3891[32], i3891[33], i3891[34], i3891[35])
  i3890.generateLightingData = !!i3891[36]
  i3890.textureMode = i3891[37]
  i3890.alignment = i3891[38]
  i3890.widthCurve = new pc.AnimationCurve( { keys_flow: i3891[39] } )
  return i3890
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i3896 = root || request.c( 'FishingHook' )
  var i3897 = data
  i3896.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i3897[0], i3896.OnMoneyChangeEvent)
  var i3899 = i3897[1]
  var i3898 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i3899.length; i += 2) {
  request.r(i3899[i + 0], i3899[i + 1], 1, i3898, '')
  }
  i3896.hookedFish = i3898
  request.r(i3897[2], i3897[3], 0, i3896, 'sellParticle')
  request.r(i3897[4], i3897[5], 0, i3896, 'sellParticleParent')
  i3896.targetHookZoomOffset = i3897[6]
  i3896.minDrag = i3897[7]
  i3896.maxDrag = i3897[8]
  i3896.dragSpeed = i3897[9]
  i3896.fishingHookScaleUpgradeValue = i3897[10]
  i3896.fullHooked = !!i3897[11]
  i3896.inTheOcean = !!i3897[12]
  i3896.money = i3897[13]
  request.r(i3897[14], i3897[15], 0, i3896, 'rigid')
  request.r(i3897[16], i3897[17], 0, i3896, 'canvas')
  request.r(i3897[18], i3897[19], 0, i3896, 'moneyTextPrefab')
  request.r(i3897[20], i3897[21], 0, i3896, 'moneyTextSpawnTransform')
  i3896.moneyTextSpawnMinOffset = new pc.Vec2( i3897[22], i3897[23] )
  i3896.moneyTextSpawnMaxOffset = new pc.Vec2( i3897[24], i3897[25] )
  var i3901 = i3897[26]
  var i3900 = []
  for(var i = 0; i < i3901.length; i += 2) {
  request.r(i3901[i + 0], i3901[i + 1], 2, i3900, '')
  }
  i3896.hookedTransforms = i3900
  request.r(i3897[27], i3897[28], 0, i3896, 'fishingRodSkinned')
  request.r(i3897[29], i3897[30], 0, i3896, 'cinemachineCamera')
  request.r(i3897[31], i3897[32], 0, i3896, 'startPoint')
  request.r(i3897[33], i3897[34], 0, i3896, 'hook')
  request.r(i3897[35], i3897[36], 0, i3896, 'rod')
  request.r(i3897[37], i3897[38], 0, i3896, 'playerModel')
  request.r(i3897[39], i3897[40], 0, i3896, 'upgradeButton')
  request.r(i3897[41], i3897[42], 0, i3896, 'depthText')
  request.r(i3897[43], i3897[44], 0, i3896, 'touchField')
  request.r(i3897[45], i3897[46], 0, i3896, 'catchRingParticle')
  request.r(i3897[47], i3897[48], 0, i3896, 'fishSkinPrefab')
  request.r(i3897[49], i3897[50], 0, i3896, 'fishSkinPoint1')
  request.r(i3897[51], i3897[52], 0, i3896, 'fishSkinPoint2')
  request.r(i3897[53], i3897[54], 0, i3896, 'moneyText')
  request.r(i3897[55], i3897[56], 0, i3896, 'HookedCount')
  return i3896
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i3902 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i3903 = data
  i3902.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i3903[0], i3902.m_PersistentCalls)
  return i3902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i3904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i3905 = data
  i3904.ambientIntensity = i3905[0]
  i3904.reflectionIntensity = i3905[1]
  i3904.ambientMode = i3905[2]
  i3904.ambientLight = new pc.Color(i3905[3], i3905[4], i3905[5], i3905[6])
  i3904.ambientSkyColor = new pc.Color(i3905[7], i3905[8], i3905[9], i3905[10])
  i3904.ambientGroundColor = new pc.Color(i3905[11], i3905[12], i3905[13], i3905[14])
  i3904.ambientEquatorColor = new pc.Color(i3905[15], i3905[16], i3905[17], i3905[18])
  i3904.fogColor = new pc.Color(i3905[19], i3905[20], i3905[21], i3905[22])
  i3904.fogEndDistance = i3905[23]
  i3904.fogStartDistance = i3905[24]
  i3904.fogDensity = i3905[25]
  i3904.fog = !!i3905[26]
  request.r(i3905[27], i3905[28], 0, i3904, 'skybox')
  i3904.fogMode = i3905[29]
  var i3907 = i3905[30]
  var i3906 = []
  for(var i = 0; i < i3907.length; i += 1) {
    i3906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i3907[i + 0]) );
  }
  i3904.lightmaps = i3906
  i3904.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i3905[31], i3904.lightProbes)
  i3904.lightmapsMode = i3905[32]
  i3904.environmentLightingMode = i3905[33]
  i3904.ambientProbe = new pc.SphericalHarmonicsL2(i3905[34])
  i3904.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i3905[35])
  i3904.useReferenceAmbientProbe = !!i3905[36]
  request.r(i3905[37], i3905[38], 0, i3904, 'customReflection')
  request.r(i3905[39], i3905[40], 0, i3904, 'defaultReflection')
  i3904.defaultReflectionMode = i3905[41]
  i3904.defaultReflectionResolution = i3905[42]
  i3904.sunLightObjectId = i3905[43]
  i3904.pixelLightCount = i3905[44]
  i3904.defaultReflectionHDR = !!i3905[45]
  i3904.hasLightDataAsset = !!i3905[46]
  i3904.hasManualGenerate = !!i3905[47]
  return i3904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i3910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i3911 = data
  request.r(i3911[0], i3911[1], 0, i3910, 'lightmapColor')
  request.r(i3911[2], i3911[3], 0, i3910, 'lightmapDirection')
  return i3910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i3912 = root || new UnityEngine.LightProbes()
  var i3913 = data
  return i3912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i3918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i3919 = data
  var i3921 = i3919[0]
  var i3920 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i3921.length; i += 1) {
    i3920.add(i3921[i + 0]);
  }
  i3918.invalidShaderVariants = i3920
  i3918.name = i3919[1]
  i3918.guid = i3919[2]
  var i3923 = i3919[3]
  var i3922 = []
  for(var i = 0; i < i3923.length; i += 1) {
    i3922.push( i3923[i + 0] );
  }
  i3918.shaderDefinedKeywords = i3922
  var i3925 = i3919[4]
  var i3924 = []
  for(var i = 0; i < i3925.length; i += 1) {
    i3924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i3925[i + 0]) );
  }
  i3918.passes = i3924
  var i3927 = i3919[5]
  var i3926 = []
  for(var i = 0; i < i3927.length; i += 1) {
    i3926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i3927[i + 0]) );
  }
  i3918.usePasses = i3926
  var i3929 = i3919[6]
  var i3928 = []
  for(var i = 0; i < i3929.length; i += 1) {
    i3928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i3929[i + 0]) );
  }
  i3918.defaultParameterValues = i3928
  request.r(i3919[7], i3919[8], 0, i3918, 'unityFallbackShader')
  i3918.readDepth = !!i3919[9]
  i3918.isCreatedByShaderGraph = !!i3919[10]
  return i3918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i3934 = root || new pc.UnityShaderPass()
  var i3935 = data
  i3934.id = i3935[0]
  i3934.subShaderIndex = i3935[1]
  i3934.name = i3935[2]
  i3934.passType = i3935[3]
  i3934.usePass = !!i3935[4]
  i3934.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[5], i3934.zTest)
  i3934.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[6], i3934.zWrite)
  i3934.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[7], i3934.culling)
  i3934.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3935[8], i3934.blending)
  i3934.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i3935[9], i3934.alphaBlending)
  i3934.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[10], i3934.colorWriteMask)
  i3934.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[11], i3934.offsetUnits)
  i3934.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[12], i3934.offsetFactor)
  i3934.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[13], i3934.stencilRef)
  i3934.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[14], i3934.stencilReadMask)
  i3934.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3935[15], i3934.stencilWriteMask)
  i3934.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3935[16], i3934.stencilOp)
  i3934.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3935[17], i3934.stencilOpFront)
  i3934.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i3935[18], i3934.stencilOpBack)
  var i3937 = i3935[19]
  var i3936 = []
  for(var i = 0; i < i3937.length; i += 1) {
    i3936.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i3937[i + 0]) );
  }
  i3934.tags = i3936
  var i3939 = i3935[20]
  var i3938 = []
  for(var i = 0; i < i3939.length; i += 1) {
    i3938.push( i3939[i + 0] );
  }
  i3934.passDefinedKeywords = i3938
  var i3941 = i3935[21]
  var i3940 = []
  for(var i = 0; i < i3941.length; i += 1) {
    i3940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i3941[i + 0]) );
  }
  i3934.passDefinedKeywordGroups = i3940
  var i3943 = i3935[22]
  var i3942 = []
  for(var i = 0; i < i3943.length; i += 1) {
    i3942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3943[i + 0]) );
  }
  i3934.variants = i3942
  var i3945 = i3935[23]
  var i3944 = []
  for(var i = 0; i < i3945.length; i += 1) {
    i3944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i3945[i + 0]) );
  }
  i3934.excludedVariants = i3944
  i3934.hasDepthReader = !!i3935[24]
  return i3934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i3946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i3947 = data
  i3946.val = i3947[0]
  i3946.name = i3947[1]
  return i3946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i3948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i3949 = data
  i3948.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[0], i3948.src)
  i3948.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[1], i3948.dst)
  i3948.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3949[2], i3948.op)
  return i3948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i3950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i3951 = data
  i3950.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3951[0], i3950.pass)
  i3950.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3951[1], i3950.fail)
  i3950.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3951[2], i3950.zFail)
  i3950.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i3951[3], i3950.comp)
  return i3950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i3954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i3955 = data
  i3954.name = i3955[0]
  i3954.value = i3955[1]
  return i3954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i3958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i3959 = data
  var i3961 = i3959[0]
  var i3960 = []
  for(var i = 0; i < i3961.length; i += 1) {
    i3960.push( i3961[i + 0] );
  }
  i3958.keywords = i3960
  i3958.hasDiscard = !!i3959[1]
  return i3958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i3964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i3965 = data
  i3964.passId = i3965[0]
  i3964.subShaderIndex = i3965[1]
  var i3967 = i3965[2]
  var i3966 = []
  for(var i = 0; i < i3967.length; i += 1) {
    i3966.push( i3967[i + 0] );
  }
  i3964.keywords = i3966
  i3964.vertexProgram = i3965[3]
  i3964.fragmentProgram = i3965[4]
  i3964.readDepth = !!i3965[5]
  return i3964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i3970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i3971 = data
  request.r(i3971[0], i3971[1], 0, i3970, 'shader')
  i3970.pass = i3971[2]
  return i3970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i3974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i3975 = data
  i3974.name = i3975[0]
  i3974.type = i3975[1]
  i3974.value = new pc.Vec4( i3975[2], i3975[3], i3975[4], i3975[5] )
  i3974.textureValue = i3975[6]
  return i3974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i3976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i3977 = data
  i3976.name = i3977[0]
  request.r(i3977[1], i3977[2], 0, i3976, 'texture')
  i3976.aabb = i3977[3]
  i3976.vertices = i3977[4]
  i3976.triangles = i3977[5]
  i3976.textureRect = UnityEngine.Rect.MinMaxRect(i3977[6], i3977[7], i3977[8], i3977[9])
  i3976.packedRect = UnityEngine.Rect.MinMaxRect(i3977[10], i3977[11], i3977[12], i3977[13])
  i3976.border = new pc.Vec4( i3977[14], i3977[15], i3977[16], i3977[17] )
  i3976.transparency = i3977[18]
  i3976.bounds = i3977[19]
  i3976.pixelsPerUnit = i3977[20]
  i3976.textureWidth = i3977[21]
  i3976.textureHeight = i3977[22]
  i3976.nativeSize = new pc.Vec2( i3977[23], i3977[24] )
  i3976.pivot = new pc.Vec2( i3977[25], i3977[26] )
  i3976.textureRectOffset = new pc.Vec2( i3977[27], i3977[28] )
  return i3976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i3978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i3979 = data
  i3978.name = i3979[0]
  i3978.wrapMode = i3979[1]
  i3978.isLooping = !!i3979[2]
  i3978.length = i3979[3]
  var i3981 = i3979[4]
  var i3980 = []
  for(var i = 0; i < i3981.length; i += 1) {
    i3980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i3981[i + 0]) );
  }
  i3978.curves = i3980
  var i3983 = i3979[5]
  var i3982 = []
  for(var i = 0; i < i3983.length; i += 1) {
    i3982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i3983[i + 0]) );
  }
  i3978.events = i3982
  i3978.halfPrecision = !!i3979[6]
  return i3978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i3986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i3987 = data
  i3986.path = i3987[0]
  i3986.componentType = i3987[1]
  i3986.property = i3987[2]
  i3986.keys = i3987[3]
  var i3989 = i3987[4]
  var i3988 = []
  for(var i = 0; i < i3989.length; i += 1) {
    i3988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i3989[i + 0]) );
  }
  i3986.objectReferenceKeys = i3988
  return i3986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i3992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i3993 = data
  i3992.time = i3993[0]
  request.r(i3993[1], i3993[2], 0, i3992, 'value')
  return i3992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i3996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i3997 = data
  i3996.functionName = i3997[0]
  i3996.floatParameter = i3997[1]
  i3996.intParameter = i3997[2]
  i3996.stringParameter = i3997[3]
  request.r(i3997[4], i3997[5], 0, i3996, 'objectReferenceParameter')
  i3996.time = i3997[6]
  return i3996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i3998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i3999 = data
  i3998.name = i3999[0]
  var i4001 = i3999[1]
  var i4000 = []
  for(var i = 0; i < i4001.length; i += 1) {
    i4000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4001[i + 0]) );
  }
  i3998.states = i4000
  var i4003 = i3999[2]
  var i4002 = []
  for(var i = 0; i < i4003.length; i += 1) {
    i4002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4003[i + 0]) );
  }
  i3998.layers = i4002
  var i4005 = i3999[3]
  var i4004 = []
  for(var i = 0; i < i4005.length; i += 1) {
    i4004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4005[i + 0]) );
  }
  i3998.parameters = i4004
  var i4007 = i3999[4]
  var i4006 = []
  for(var i = 0; i < i4007.length; i += 1) {
    i4006.push( i4007[i + 0] );
  }
  i3998.animationClips = i4006
  i3998.HasSubStateMachines = !!i3999[5]
  return i3998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4011 = data
  i4010.cycleOffset = i4011[0]
  i4010.cycleOffsetParameter = i4011[1]
  i4010.cycleOffsetParameterActive = !!i4011[2]
  i4010.mirror = !!i4011[3]
  i4010.mirrorParameter = i4011[4]
  i4010.mirrorParameterActive = !!i4011[5]
  i4010.motionId = i4011[6]
  i4010.nameHash = i4011[7]
  i4010.fullPathHash = i4011[8]
  i4010.speed = i4011[9]
  i4010.speedParameter = i4011[10]
  i4010.speedParameterActive = !!i4011[11]
  i4010.tag = i4011[12]
  i4010.name = i4011[13]
  i4010.writeDefaultValues = !!i4011[14]
  var i4013 = i4011[15]
  var i4012 = []
  for(var i = 0; i < i4013.length; i += 1) {
    i4012.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4013[i + 0]) );
  }
  i4010.transitions = i4012
  var i4015 = i4011[16]
  var i4014 = []
  for(var i = 0; i < i4015.length; i += 2) {
  request.r(i4015[i + 0], i4015[i + 1], 2, i4014, '')
  }
  i4010.behaviours = i4014
  return i4010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4019 = data
  i4018.fullPath = i4019[0]
  i4018.canTransitionToSelf = !!i4019[1]
  i4018.duration = i4019[2]
  i4018.exitTime = i4019[3]
  i4018.hasExitTime = !!i4019[4]
  i4018.hasFixedDuration = !!i4019[5]
  i4018.interruptionSource = i4019[6]
  i4018.offset = i4019[7]
  i4018.orderedInterruption = !!i4019[8]
  i4018.destinationStateNameHash = i4019[9]
  i4018.destinationStateMachineId = i4019[10]
  i4018.isExit = !!i4019[11]
  i4018.mute = !!i4019[12]
  i4018.solo = !!i4019[13]
  var i4021 = i4019[14]
  var i4020 = []
  for(var i = 0; i < i4021.length; i += 1) {
    i4020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4021[i + 0]) );
  }
  i4018.conditions = i4020
  return i4018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4025 = data
  i4024.mode = i4025[0]
  i4024.parameter = i4025[1]
  i4024.threshold = i4025[2]
  return i4024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4031 = data
  i4030.blendingMode = i4031[0]
  i4030.defaultWeight = i4031[1]
  i4030.name = i4031[2]
  i4030.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4031[3], i4030.stateMachine)
  return i4030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4033 = data
  i4032.id = i4033[0]
  i4032.defaultStateNameHash = i4033[1]
  var i4035 = i4033[2]
  var i4034 = []
  for(var i = 0; i < i4035.length; i += 1) {
    i4034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4035[i + 0]) );
  }
  i4032.entryTransitions = i4034
  var i4037 = i4033[3]
  var i4036 = []
  for(var i = 0; i < i4037.length; i += 1) {
    i4036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4037[i + 0]) );
  }
  i4032.anyStateTransitions = i4036
  return i4032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4041 = data
  i4040.destinationStateNameHash = i4041[0]
  i4040.destinationStateMachineId = i4041[1]
  i4040.isExit = !!i4041[2]
  i4040.mute = !!i4041[3]
  i4040.solo = !!i4041[4]
  var i4043 = i4041[5]
  var i4042 = []
  for(var i = 0; i < i4043.length; i += 1) {
    i4042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4043[i + 0]) );
  }
  i4040.conditions = i4042
  return i4040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4047 = data
  i4046.defaultBool = !!i4047[0]
  i4046.defaultFloat = i4047[1]
  i4046.defaultInt = i4047[2]
  i4046.name = i4047[3]
  i4046.nameHash = i4047[4]
  i4046.type = i4047[5]
  return i4046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4049 = data
  i4048.name = i4049[0]
  i4048.bytes64 = i4049[1]
  i4048.data = i4049[2]
  return i4048
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4050 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4051 = data
  i4050.hashCode = i4051[0]
  request.r(i4051[1], i4051[2], 0, i4050, 'material')
  i4050.materialHashCode = i4051[3]
  request.r(i4051[4], i4051[5], 0, i4050, 'atlas')
  i4050.normalStyle = i4051[6]
  i4050.normalSpacingOffset = i4051[7]
  i4050.boldStyle = i4051[8]
  i4050.boldSpacing = i4051[9]
  i4050.italicStyle = i4051[10]
  i4050.tabSize = i4051[11]
  i4050.m_Version = i4051[12]
  i4050.m_SourceFontFileGUID = i4051[13]
  request.r(i4051[14], i4051[15], 0, i4050, 'm_SourceFontFile_EditorRef')
  request.r(i4051[16], i4051[17], 0, i4050, 'm_SourceFontFile')
  i4050.m_AtlasPopulationMode = i4051[18]
  i4050.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4051[19], i4050.m_FaceInfo)
  var i4053 = i4051[20]
  var i4052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4053.length; i += 1) {
    i4052.add(request.d('UnityEngine.TextCore.Glyph', i4053[i + 0]));
  }
  i4050.m_GlyphTable = i4052
  var i4055 = i4051[21]
  var i4054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4055.length; i += 1) {
    i4054.add(request.d('TMPro.TMP_Character', i4055[i + 0]));
  }
  i4050.m_CharacterTable = i4054
  var i4057 = i4051[22]
  var i4056 = []
  for(var i = 0; i < i4057.length; i += 2) {
  request.r(i4057[i + 0], i4057[i + 1], 2, i4056, '')
  }
  i4050.m_AtlasTextures = i4056
  i4050.m_AtlasTextureIndex = i4051[23]
  i4050.m_IsMultiAtlasTexturesEnabled = !!i4051[24]
  i4050.m_ClearDynamicDataOnBuild = !!i4051[25]
  var i4059 = i4051[26]
  var i4058 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4059.length; i += 1) {
    i4058.add(request.d('UnityEngine.TextCore.GlyphRect', i4059[i + 0]));
  }
  i4050.m_UsedGlyphRects = i4058
  var i4061 = i4051[27]
  var i4060 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4061.length; i += 1) {
    i4060.add(request.d('UnityEngine.TextCore.GlyphRect', i4061[i + 0]));
  }
  i4050.m_FreeGlyphRects = i4060
  i4050.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4051[28], i4050.m_fontInfo)
  i4050.m_AtlasWidth = i4051[29]
  i4050.m_AtlasHeight = i4051[30]
  i4050.m_AtlasPadding = i4051[31]
  i4050.m_AtlasRenderMode = i4051[32]
  var i4063 = i4051[33]
  var i4062 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4063.length; i += 1) {
    i4062.add(request.d('TMPro.TMP_Glyph', i4063[i + 0]));
  }
  i4050.m_glyphInfoList = i4062
  i4050.m_KerningTable = request.d('TMPro.KerningTable', i4051[34], i4050.m_KerningTable)
  i4050.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4051[35], i4050.m_FontFeatureTable)
  var i4065 = i4051[36]
  var i4064 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4065.length; i += 2) {
  request.r(i4065[i + 0], i4065[i + 1], 1, i4064, '')
  }
  i4050.fallbackFontAssets = i4064
  var i4067 = i4051[37]
  var i4066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4067.length; i += 2) {
  request.r(i4067[i + 0], i4067[i + 1], 1, i4066, '')
  }
  i4050.m_FallbackFontAssetTable = i4066
  i4050.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4051[38], i4050.m_CreationSettings)
  var i4069 = i4051[39]
  var i4068 = []
  for(var i = 0; i < i4069.length; i += 1) {
    i4068.push( request.d('TMPro.TMP_FontWeightPair', i4069[i + 0]) );
  }
  i4050.m_FontWeightTable = i4068
  var i4071 = i4051[40]
  var i4070 = []
  for(var i = 0; i < i4071.length; i += 1) {
    i4070.push( request.d('TMPro.TMP_FontWeightPair', i4071[i + 0]) );
  }
  i4050.fontWeights = i4070
  return i4050
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4072 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4073 = data
  i4072.m_FaceIndex = i4073[0]
  i4072.m_FamilyName = i4073[1]
  i4072.m_StyleName = i4073[2]
  i4072.m_PointSize = i4073[3]
  i4072.m_Scale = i4073[4]
  i4072.m_LineHeight = i4073[5]
  i4072.m_AscentLine = i4073[6]
  i4072.m_CapLine = i4073[7]
  i4072.m_MeanLine = i4073[8]
  i4072.m_Baseline = i4073[9]
  i4072.m_DescentLine = i4073[10]
  i4072.m_SuperscriptOffset = i4073[11]
  i4072.m_SuperscriptSize = i4073[12]
  i4072.m_SubscriptOffset = i4073[13]
  i4072.m_SubscriptSize = i4073[14]
  i4072.m_UnderlineOffset = i4073[15]
  i4072.m_UnderlineThickness = i4073[16]
  i4072.m_StrikethroughOffset = i4073[17]
  i4072.m_StrikethroughThickness = i4073[18]
  i4072.m_TabWidth = i4073[19]
  return i4072
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4076 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4077 = data
  i4076.m_Index = i4077[0]
  i4076.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4077[1], i4076.m_Metrics)
  i4076.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4077[2], i4076.m_GlyphRect)
  i4076.m_Scale = i4077[3]
  i4076.m_AtlasIndex = i4077[4]
  return i4076
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4078 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4079 = data
  i4078.m_Width = i4079[0]
  i4078.m_Height = i4079[1]
  i4078.m_HorizontalBearingX = i4079[2]
  i4078.m_HorizontalBearingY = i4079[3]
  i4078.m_HorizontalAdvance = i4079[4]
  return i4078
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4080 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4081 = data
  i4080.m_X = i4081[0]
  i4080.m_Y = i4081[1]
  i4080.m_Width = i4081[2]
  i4080.m_Height = i4081[3]
  return i4080
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4084 = root || request.c( 'TMPro.TMP_Character' )
  var i4085 = data
  i4084.m_ElementType = i4085[0]
  i4084.m_Unicode = i4085[1]
  i4084.m_GlyphIndex = i4085[2]
  i4084.m_Scale = i4085[3]
  return i4084
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4090 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4091 = data
  i4090.Name = i4091[0]
  i4090.PointSize = i4091[1]
  i4090.Scale = i4091[2]
  i4090.CharacterCount = i4091[3]
  i4090.LineHeight = i4091[4]
  i4090.Baseline = i4091[5]
  i4090.Ascender = i4091[6]
  i4090.CapHeight = i4091[7]
  i4090.Descender = i4091[8]
  i4090.CenterLine = i4091[9]
  i4090.SuperscriptOffset = i4091[10]
  i4090.SubscriptOffset = i4091[11]
  i4090.SubSize = i4091[12]
  i4090.Underline = i4091[13]
  i4090.UnderlineThickness = i4091[14]
  i4090.strikethrough = i4091[15]
  i4090.strikethroughThickness = i4091[16]
  i4090.TabWidth = i4091[17]
  i4090.Padding = i4091[18]
  i4090.AtlasWidth = i4091[19]
  i4090.AtlasHeight = i4091[20]
  return i4090
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4094 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4095 = data
  i4094.id = i4095[0]
  i4094.x = i4095[1]
  i4094.y = i4095[2]
  i4094.width = i4095[3]
  i4094.height = i4095[4]
  i4094.xOffset = i4095[5]
  i4094.yOffset = i4095[6]
  i4094.xAdvance = i4095[7]
  i4094.scale = i4095[8]
  return i4094
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i4096 = root || request.c( 'TMPro.KerningTable' )
  var i4097 = data
  var i4099 = i4097[0]
  var i4098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i4099.length; i += 1) {
    i4098.add(request.d('TMPro.KerningPair', i4099[i + 0]));
  }
  i4096.kerningPairs = i4098
  return i4096
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i4102 = root || request.c( 'TMPro.KerningPair' )
  var i4103 = data
  i4102.xOffset = i4103[0]
  i4102.m_FirstGlyph = i4103[1]
  i4102.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4103[2], i4102.m_FirstGlyphAdjustments)
  i4102.m_SecondGlyph = i4103[3]
  i4102.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i4103[4], i4102.m_SecondGlyphAdjustments)
  i4102.m_IgnoreSpacingAdjustments = !!i4103[5]
  return i4102
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i4104 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i4105 = data
  var i4107 = i4105[0]
  var i4106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i4107.length; i += 1) {
    i4106.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i4107[i + 0]));
  }
  i4104.m_GlyphPairAdjustmentRecords = i4106
  return i4104
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i4110 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i4111 = data
  i4110.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4111[0], i4110.m_FirstAdjustmentRecord)
  i4110.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i4111[1], i4110.m_SecondAdjustmentRecord)
  i4110.m_FeatureLookupFlags = i4111[2]
  return i4110
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i4114 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i4115 = data
  i4114.sourceFontFileName = i4115[0]
  i4114.sourceFontFileGUID = i4115[1]
  i4114.pointSizeSamplingMode = i4115[2]
  i4114.pointSize = i4115[3]
  i4114.padding = i4115[4]
  i4114.packingMode = i4115[5]
  i4114.atlasWidth = i4115[6]
  i4114.atlasHeight = i4115[7]
  i4114.characterSetSelectionMode = i4115[8]
  i4114.characterSequence = i4115[9]
  i4114.referencedFontAssetGUID = i4115[10]
  i4114.referencedTextAssetGUID = i4115[11]
  i4114.fontStyle = i4115[12]
  i4114.fontStyleModifier = i4115[13]
  i4114.renderMode = i4115[14]
  i4114.includeFontFeatures = !!i4115[15]
  return i4114
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i4118 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i4119 = data
  request.r(i4119[0], i4119[1], 0, i4118, 'regularTypeface')
  request.r(i4119[2], i4119[3], 0, i4118, 'italicTypeface')
  return i4118
}

Deserializers["MapData"] = function (request, data, root) {
  var i4120 = root || request.c( 'MapData' )
  var i4121 = data
  var i4123 = i4121[0]
  var i4122 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i4123.length; i += 1) {
    i4122.add(request.d('MapData+mapData', i4123[i + 0]));
  }
  i4120.mapDataList = i4122
  return i4120
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i4126 = root || request.c( 'MapData+mapData' )
  var i4127 = data
  i4126.tier = i4127[0]
  i4126.minMapSize = new pc.Vec3( i4127[1], i4127[2], i4127[3] )
  i4126.maxMapSize = new pc.Vec3( i4127[4], i4127[5], i4127[6] )
  return i4126
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i4128 = root || request.c( 'TMPro.TMP_Settings' )
  var i4129 = data
  i4128.m_enableWordWrapping = !!i4129[0]
  i4128.m_enableKerning = !!i4129[1]
  i4128.m_enableExtraPadding = !!i4129[2]
  i4128.m_enableTintAllSprites = !!i4129[3]
  i4128.m_enableParseEscapeCharacters = !!i4129[4]
  i4128.m_EnableRaycastTarget = !!i4129[5]
  i4128.m_GetFontFeaturesAtRuntime = !!i4129[6]
  i4128.m_missingGlyphCharacter = i4129[7]
  i4128.m_warningsDisabled = !!i4129[8]
  request.r(i4129[9], i4129[10], 0, i4128, 'm_defaultFontAsset')
  i4128.m_defaultFontAssetPath = i4129[11]
  i4128.m_defaultFontSize = i4129[12]
  i4128.m_defaultAutoSizeMinRatio = i4129[13]
  i4128.m_defaultAutoSizeMaxRatio = i4129[14]
  i4128.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i4129[15], i4129[16] )
  i4128.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i4129[17], i4129[18] )
  i4128.m_autoSizeTextContainer = !!i4129[19]
  i4128.m_IsTextObjectScaleStatic = !!i4129[20]
  var i4131 = i4129[21]
  var i4130 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4131.length; i += 2) {
  request.r(i4131[i + 0], i4131[i + 1], 1, i4130, '')
  }
  i4128.m_fallbackFontAssets = i4130
  i4128.m_matchMaterialPreset = !!i4129[22]
  request.r(i4129[23], i4129[24], 0, i4128, 'm_defaultSpriteAsset')
  i4128.m_defaultSpriteAssetPath = i4129[25]
  i4128.m_enableEmojiSupport = !!i4129[26]
  i4128.m_MissingCharacterSpriteUnicode = i4129[27]
  i4128.m_defaultColorGradientPresetsPath = i4129[28]
  request.r(i4129[29], i4129[30], 0, i4128, 'm_defaultStyleSheet')
  i4128.m_StyleSheetsResourcePath = i4129[31]
  request.r(i4129[32], i4129[33], 0, i4128, 'm_leadingCharacters')
  request.r(i4129[34], i4129[35], 0, i4128, 'm_followingCharacters')
  i4128.m_UseModernHangulLineBreakingRules = !!i4129[36]
  return i4128
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i4132 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i4133 = data
  i4132.hashCode = i4133[0]
  request.r(i4133[1], i4133[2], 0, i4132, 'material')
  i4132.materialHashCode = i4133[3]
  request.r(i4133[4], i4133[5], 0, i4132, 'spriteSheet')
  var i4135 = i4133[6]
  var i4134 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i4135.length; i += 1) {
    i4134.add(request.d('TMPro.TMP_Sprite', i4135[i + 0]));
  }
  i4132.spriteInfoList = i4134
  var i4137 = i4133[7]
  var i4136 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i4137.length; i += 2) {
  request.r(i4137[i + 0], i4137[i + 1], 1, i4136, '')
  }
  i4132.fallbackSpriteAssets = i4136
  i4132.m_Version = i4133[8]
  i4132.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4133[9], i4132.m_FaceInfo)
  var i4139 = i4133[10]
  var i4138 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i4139.length; i += 1) {
    i4138.add(request.d('TMPro.TMP_SpriteCharacter', i4139[i + 0]));
  }
  i4132.m_SpriteCharacterTable = i4138
  var i4141 = i4133[11]
  var i4140 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i4141.length; i += 1) {
    i4140.add(request.d('TMPro.TMP_SpriteGlyph', i4141[i + 0]));
  }
  i4132.m_SpriteGlyphTable = i4140
  return i4132
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i4144 = root || request.c( 'TMPro.TMP_Sprite' )
  var i4145 = data
  i4144.name = i4145[0]
  i4144.hashCode = i4145[1]
  i4144.unicode = i4145[2]
  i4144.pivot = new pc.Vec2( i4145[3], i4145[4] )
  request.r(i4145[5], i4145[6], 0, i4144, 'sprite')
  i4144.id = i4145[7]
  i4144.x = i4145[8]
  i4144.y = i4145[9]
  i4144.width = i4145[10]
  i4144.height = i4145[11]
  i4144.xOffset = i4145[12]
  i4144.yOffset = i4145[13]
  i4144.xAdvance = i4145[14]
  i4144.scale = i4145[15]
  return i4144
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i4150 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i4151 = data
  i4150.m_Name = i4151[0]
  i4150.m_HashCode = i4151[1]
  i4150.m_ElementType = i4151[2]
  i4150.m_Unicode = i4151[3]
  i4150.m_GlyphIndex = i4151[4]
  i4150.m_Scale = i4151[5]
  return i4150
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i4154 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i4155 = data
  request.r(i4155[0], i4155[1], 0, i4154, 'sprite')
  i4154.m_Index = i4155[2]
  i4154.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4155[3], i4154.m_Metrics)
  i4154.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4155[4], i4154.m_GlyphRect)
  i4154.m_Scale = i4155[5]
  i4154.m_AtlasIndex = i4155[6]
  return i4154
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i4156 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i4157 = data
  var i4159 = i4157[0]
  var i4158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i4159.length; i += 1) {
    i4158.add(request.d('TMPro.TMP_Style', i4159[i + 0]));
  }
  i4156.m_StyleList = i4158
  return i4156
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i4162 = root || request.c( 'TMPro.TMP_Style' )
  var i4163 = data
  i4162.m_Name = i4163[0]
  i4162.m_HashCode = i4163[1]
  i4162.m_OpeningDefinition = i4163[2]
  i4162.m_ClosingDefinition = i4163[3]
  i4162.m_OpeningTagArray = i4163[4]
  i4162.m_ClosingTagArray = i4163[5]
  i4162.m_OpeningTagUnicodeArray = i4163[6]
  i4162.m_ClosingTagUnicodeArray = i4163[7]
  return i4162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i4164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i4165 = data
  var i4167 = i4165[0]
  var i4166 = []
  for(var i = 0; i < i4167.length; i += 1) {
    i4166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i4167[i + 0]) );
  }
  i4164.files = i4166
  i4164.componentToPrefabIds = i4165[1]
  return i4164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i4170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i4171 = data
  i4170.path = i4171[0]
  request.r(i4171[1], i4171[2], 0, i4170, 'unityObject')
  return i4170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i4172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i4173 = data
  var i4175 = i4173[0]
  var i4174 = []
  for(var i = 0; i < i4175.length; i += 1) {
    i4174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i4175[i + 0]) );
  }
  i4172.scriptsExecutionOrder = i4174
  var i4177 = i4173[1]
  var i4176 = []
  for(var i = 0; i < i4177.length; i += 1) {
    i4176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i4177[i + 0]) );
  }
  i4172.sortingLayers = i4176
  var i4179 = i4173[2]
  var i4178 = []
  for(var i = 0; i < i4179.length; i += 1) {
    i4178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i4179[i + 0]) );
  }
  i4172.cullingLayers = i4178
  i4172.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i4173[3], i4172.timeSettings)
  i4172.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i4173[4], i4172.physicsSettings)
  i4172.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i4173[5], i4172.physics2DSettings)
  i4172.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4173[6], i4172.qualitySettings)
  i4172.enableRealtimeShadows = !!i4173[7]
  i4172.autoInstantiatePrefabs = !!i4173[8]
  i4172.enableAutoInstancing = !!i4173[9]
  i4172.lightmapEncodingQuality = i4173[10]
  i4172.desiredColorSpace = i4173[11]
  return i4172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i4182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i4183 = data
  i4182.name = i4183[0]
  i4182.value = i4183[1]
  return i4182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i4186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i4187 = data
  i4186.id = i4187[0]
  i4186.name = i4187[1]
  i4186.value = i4187[2]
  return i4186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i4190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i4191 = data
  i4190.id = i4191[0]
  i4190.name = i4191[1]
  return i4190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i4192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i4193 = data
  i4192.fixedDeltaTime = i4193[0]
  i4192.maximumDeltaTime = i4193[1]
  i4192.timeScale = i4193[2]
  i4192.maximumParticleTimestep = i4193[3]
  return i4192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i4194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i4195 = data
  i4194.gravity = new pc.Vec3( i4195[0], i4195[1], i4195[2] )
  i4194.defaultSolverIterations = i4195[3]
  i4194.bounceThreshold = i4195[4]
  i4194.autoSyncTransforms = !!i4195[5]
  i4194.autoSimulation = !!i4195[6]
  var i4197 = i4195[7]
  var i4196 = []
  for(var i = 0; i < i4197.length; i += 1) {
    i4196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i4197[i + 0]) );
  }
  i4194.collisionMatrix = i4196
  return i4194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i4200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i4201 = data
  i4200.enabled = !!i4201[0]
  i4200.layerId = i4201[1]
  i4200.otherLayerId = i4201[2]
  return i4200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i4202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i4203 = data
  request.r(i4203[0], i4203[1], 0, i4202, 'material')
  i4202.gravity = new pc.Vec2( i4203[2], i4203[3] )
  i4202.positionIterations = i4203[4]
  i4202.velocityIterations = i4203[5]
  i4202.velocityThreshold = i4203[6]
  i4202.maxLinearCorrection = i4203[7]
  i4202.maxAngularCorrection = i4203[8]
  i4202.maxTranslationSpeed = i4203[9]
  i4202.maxRotationSpeed = i4203[10]
  i4202.timeToSleep = i4203[11]
  i4202.linearSleepTolerance = i4203[12]
  i4202.angularSleepTolerance = i4203[13]
  i4202.defaultContactOffset = i4203[14]
  i4202.autoSimulation = !!i4203[15]
  i4202.queriesHitTriggers = !!i4203[16]
  i4202.queriesStartInColliders = !!i4203[17]
  i4202.callbacksOnDisable = !!i4203[18]
  i4202.reuseCollisionCallbacks = !!i4203[19]
  i4202.autoSyncTransforms = !!i4203[20]
  var i4205 = i4203[21]
  var i4204 = []
  for(var i = 0; i < i4205.length; i += 1) {
    i4204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i4205[i + 0]) );
  }
  i4202.collisionMatrix = i4204
  return i4202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i4208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i4209 = data
  i4208.enabled = !!i4209[0]
  i4208.layerId = i4209[1]
  i4208.otherLayerId = i4209[2]
  return i4208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i4210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i4211 = data
  var i4213 = i4211[0]
  var i4212 = []
  for(var i = 0; i < i4213.length; i += 1) {
    i4212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i4213[i + 0]) );
  }
  i4210.qualityLevels = i4212
  var i4215 = i4211[1]
  var i4214 = []
  for(var i = 0; i < i4215.length; i += 1) {
    i4214.push( i4215[i + 0] );
  }
  i4210.names = i4214
  i4210.shadows = i4211[2]
  i4210.anisotropicFiltering = i4211[3]
  i4210.antiAliasing = i4211[4]
  i4210.lodBias = i4211[5]
  i4210.shadowCascades = i4211[6]
  i4210.shadowDistance = i4211[7]
  i4210.shadowmaskMode = i4211[8]
  i4210.shadowProjection = i4211[9]
  i4210.shadowResolution = i4211[10]
  i4210.softParticles = !!i4211[11]
  i4210.softVegetation = !!i4211[12]
  i4210.activeColorSpace = i4211[13]
  i4210.desiredColorSpace = i4211[14]
  i4210.masterTextureLimit = i4211[15]
  i4210.maxQueuedFrames = i4211[16]
  i4210.particleRaycastBudget = i4211[17]
  i4210.pixelLightCount = i4211[18]
  i4210.realtimeReflectionProbes = !!i4211[19]
  i4210.shadowCascade2Split = i4211[20]
  i4210.shadowCascade4Split = new pc.Vec3( i4211[21], i4211[22], i4211[23] )
  i4210.streamingMipmapsActive = !!i4211[24]
  i4210.vSyncCount = i4211[25]
  i4210.asyncUploadBufferSize = i4211[26]
  i4210.asyncUploadTimeSlice = i4211[27]
  i4210.billboardsFaceCameraPosition = !!i4211[28]
  i4210.shadowNearPlaneOffset = i4211[29]
  i4210.streamingMipmapsMemoryBudget = i4211[30]
  i4210.maximumLODLevel = i4211[31]
  i4210.streamingMipmapsAddAllCameras = !!i4211[32]
  i4210.streamingMipmapsMaxLevelReduction = i4211[33]
  i4210.streamingMipmapsRenderersPerFrame = i4211[34]
  i4210.resolutionScalingFixedDPIFactor = i4211[35]
  i4210.streamingMipmapsMaxFileIORequests = i4211[36]
  i4210.currentQualityLevel = i4211[37]
  return i4210
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i4218 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i4219 = data
  i4218.xPlacement = i4219[0]
  i4218.yPlacement = i4219[1]
  i4218.xAdvance = i4219[2]
  i4218.yAdvance = i4219[3]
  return i4218
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i4220 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i4221 = data
  i4220.m_GlyphIndex = i4221[0]
  i4220.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i4221[1], i4220.m_GlyphValueRecord)
  return i4220
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i4222 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i4223 = data
  i4222.m_XPlacement = i4223[0]
  i4222.m_YPlacement = i4223[1]
  i4222.m_XAdvance = i4223[2]
  i4222.m_YAdvance = i4223[3]
  return i4222
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

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e348c685-5cce-4c01-8941-adc8fabbd702";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

