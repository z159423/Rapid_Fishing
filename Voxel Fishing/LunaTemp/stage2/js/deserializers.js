var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointSpring' )
  var i701 = data
  i700.spring = i701[0]
  i700.damper = i701[1]
  i700.targetPosition = i701[2]
  return i700
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointMotor' )
  var i703 = data
  i702.m_TargetVelocity = i703[0]
  i702.m_Force = i703[1]
  i702.m_FreeSpin = i703[2]
  return i702
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointLimits' )
  var i705 = data
  i704.m_Min = i705[0]
  i704.m_Max = i705[1]
  i704.m_Bounciness = i705[2]
  i704.m_BounceMinVelocity = i705[3]
  i704.m_ContactDistance = i705[4]
  i704.minBounce = i705[5]
  i704.maxBounce = i705[6]
  return i704
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointDrive' )
  var i707 = data
  i706.m_PositionSpring = i707[0]
  i706.m_PositionDamper = i707[1]
  i706.m_MaximumForce = i707[2]
  return i706
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i709 = data
  i708.m_Spring = i709[0]
  i708.m_Damper = i709[1]
  return i708
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i711 = data
  i710.m_Limit = i711[0]
  i710.m_Bounciness = i711[1]
  i710.m_ContactDistance = i711[2]
  return i710
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i713 = data
  i712.m_ExtremumSlip = i713[0]
  i712.m_ExtremumValue = i713[1]
  i712.m_AsymptoteSlip = i713[2]
  i712.m_AsymptoteValue = i713[3]
  i712.m_Stiffness = i713[4]
  return i712
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i715 = data
  i714.m_LowerAngle = i715[0]
  i714.m_UpperAngle = i715[1]
  return i714
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i717 = data
  i716.m_MotorSpeed = i717[0]
  i716.m_MaximumMotorTorque = i717[1]
  return i716
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i719 = data
  i718.m_DampingRatio = i719[0]
  i718.m_Frequency = i719[1]
  i718.m_Angle = i719[2]
  return i718
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i721 = data
  i720.m_LowerTranslation = i721[0]
  i720.m_UpperTranslation = i721[1]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i722 = root || new pc.UnityMaterial()
  var i723 = data
  i722.name = i723[0]
  request.r(i723[1], i723[2], 0, i722, 'shader')
  i722.renderQueue = i723[3]
  i722.enableInstancing = !!i723[4]
  var i725 = i723[5]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i725[i + 0]) );
  }
  i722.floatParameters = i724
  var i727 = i723[6]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i727[i + 0]) );
  }
  i722.colorParameters = i726
  var i729 = i723[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i729[i + 0]) );
  }
  i722.vectorParameters = i728
  var i731 = i723[8]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i731[i + 0]) );
  }
  i722.textureParameters = i730
  var i733 = i723[9]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i733[i + 0]) );
  }
  i722.materialFlags = i732
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i737 = data
  i736.name = i737[0]
  i736.value = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i741 = data
  i740.name = i741[0]
  i740.value = new pc.Color(i741[1], i741[2], i741[3], i741[4])
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i745 = data
  i744.name = i745[0]
  i744.value = new pc.Vec4( i745[1], i745[2], i745[3], i745[4] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i749 = data
  i748.name = i749[0]
  request.r(i749[1], i749[2], 0, i748, 'value')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i753 = data
  i752.name = i753[0]
  i752.enabled = !!i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i755 = data
  i754.position = new pc.Vec3( i755[0], i755[1], i755[2] )
  i754.scale = new pc.Vec3( i755[3], i755[4], i755[5] )
  i754.rotation = new pc.Quat(i755[6], i755[7], i755[8], i755[9])
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i757 = data
  i756.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i757[0], i756.main)
  i756.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i757[1], i756.colorBySpeed)
  i756.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i757[2], i756.colorOverLifetime)
  i756.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i757[3], i756.emission)
  i756.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i757[4], i756.rotationBySpeed)
  i756.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i757[5], i756.rotationOverLifetime)
  i756.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i757[6], i756.shape)
  i756.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i757[7], i756.sizeBySpeed)
  i756.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i757[8], i756.sizeOverLifetime)
  i756.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i757[9], i756.textureSheetAnimation)
  i756.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i757[10], i756.velocityOverLifetime)
  i756.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i757[11], i756.noise)
  i756.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i757[12], i756.inheritVelocity)
  i756.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i757[13], i756.forceOverLifetime)
  i756.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i757[14], i756.limitVelocityOverLifetime)
  i756.useAutoRandomSeed = !!i757[15]
  i756.randomSeed = i757[16]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemMain()
  var i759 = data
  i758.duration = i759[0]
  i758.loop = !!i759[1]
  i758.prewarm = !!i759[2]
  i758.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.startDelay)
  i758.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[4], i758.startLifetime)
  i758.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[5], i758.startSpeed)
  i758.startSize3D = !!i759[6]
  i758.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[7], i758.startSizeX)
  i758.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[8], i758.startSizeY)
  i758.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[9], i758.startSizeZ)
  i758.startRotation3D = !!i759[10]
  i758.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[11], i758.startRotationX)
  i758.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[12], i758.startRotationY)
  i758.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[13], i758.startRotationZ)
  i758.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i759[14], i758.startColor)
  i758.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[15], i758.gravityModifier)
  i758.simulationSpace = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'customSimulationSpace')
  i758.simulationSpeed = i759[19]
  i758.useUnscaledTime = !!i759[20]
  i758.scalingMode = i759[21]
  i758.playOnAwake = !!i759[22]
  i758.maxParticles = i759[23]
  i758.emitterVelocityMode = i759[24]
  i758.stopAction = i759[25]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxCurve()
  var i761 = data
  i760.mode = i761[0]
  i760.curveMin = new pc.AnimationCurve( { keys_flow: i761[1] } )
  i760.curveMax = new pc.AnimationCurve( { keys_flow: i761[2] } )
  i760.curveMultiplier = i761[3]
  i760.constantMin = i761[4]
  i760.constantMax = i761[5]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i762 = root || new pc.MinMaxGradient()
  var i763 = data
  i762.mode = i763[0]
  i762.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[1], i762.gradientMin)
  i762.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i763[2], i762.gradientMax)
  i762.colorMin = new pc.Color(i763[3], i763[4], i763[5], i763[6])
  i762.colorMax = new pc.Color(i763[7], i763[8], i763[9], i763[10])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i765 = data
  i764.mode = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i767[i + 0]) );
  }
  i764.colorKeys = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i769[i + 0]) );
  }
  i764.alphaKeys = i768
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i770 = root || new pc.ParticleSystemColorBySpeed()
  var i771 = data
  i770.enabled = !!i771[0]
  i770.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i771[1], i770.color)
  i770.range = new pc.Vec2( i771[2], i771[3] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i775 = data
  i774.color = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.time = i775[4]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i779 = data
  i778.alpha = i779[0]
  i778.time = i779[1]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemColorOverLifetime()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i781[1], i780.color)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i782 = root || new pc.ParticleSystemEmitter()
  var i783 = data
  i782.enabled = !!i783[0]
  i782.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[1], i782.rateOverTime)
  i782.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i783[2], i782.rateOverDistance)
  var i785 = i783[3]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i785[i + 0]) );
  }
  i782.bursts = i784
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemBurst()
  var i789 = data
  i788.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[0], i788.count)
  i788.cycleCount = i789[1]
  i788.minCount = i789[2]
  i788.maxCount = i789[3]
  i788.repeatInterval = i789[4]
  i788.time = i789[5]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationBySpeed()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  i790.range = new pc.Vec2( i791[5], i791[6] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemRotationOverLifetime()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemShape()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.shapeType = i795[1]
  i794.randomDirectionAmount = i795[2]
  i794.sphericalDirectionAmount = i795[3]
  i794.randomPositionAmount = i795[4]
  i794.alignToDirection = !!i795[5]
  i794.radius = i795[6]
  i794.radiusMode = i795[7]
  i794.radiusSpread = i795[8]
  i794.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[9], i794.radiusSpeed)
  i794.radiusThickness = i795[10]
  i794.angle = i795[11]
  i794.length = i795[12]
  i794.boxThickness = new pc.Vec3( i795[13], i795[14], i795[15] )
  i794.meshShapeType = i795[16]
  request.r(i795[17], i795[18], 0, i794, 'mesh')
  request.r(i795[19], i795[20], 0, i794, 'meshRenderer')
  request.r(i795[21], i795[22], 0, i794, 'skinnedMeshRenderer')
  i794.useMeshMaterialIndex = !!i795[23]
  i794.meshMaterialIndex = i795[24]
  i794.useMeshColors = !!i795[25]
  i794.normalOffset = i795[26]
  i794.arc = i795[27]
  i794.arcMode = i795[28]
  i794.arcSpread = i795[29]
  i794.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[30], i794.arcSpeed)
  i794.donutRadius = i795[31]
  i794.position = new pc.Vec3( i795[32], i795[33], i795[34] )
  i794.rotation = new pc.Vec3( i795[35], i795[36], i795[37] )
  i794.scale = new pc.Vec3( i795[38], i795[39], i795[40] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  i796.range = new pc.Vec2( i797[5], i797[6] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemSizeOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.mode = i801[1]
  i800.animation = i801[2]
  i800.numTilesX = i801[3]
  i800.numTilesY = i801[4]
  i800.useRandomRow = !!i801[5]
  i800.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[6], i800.frameOverTime)
  i800.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[7], i800.startFrame)
  i800.cycleCount = i801[8]
  i800.rowIndex = i801[9]
  i800.flipU = i801[10]
  i800.flipV = i801[11]
  i800.spriteCount = i801[12]
  var i803 = i801[13]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.sprites = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.speedModifier)
  i806.space = i807[5]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemNoise()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.separateAxes = !!i809[1]
  i808.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.strengthX)
  i808.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.strengthY)
  i808.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[4], i808.strengthZ)
  i808.frequency = i809[5]
  i808.damping = !!i809[6]
  i808.octaveCount = i809[7]
  i808.octaveMultiplier = i809[8]
  i808.octaveScale = i809[9]
  i808.quality = i809[10]
  i808.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[11], i808.scrollSpeed)
  i808.scrollSpeedMultiplier = i809[12]
  i808.remapEnabled = !!i809[13]
  i808.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[14], i808.remapX)
  i808.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[15], i808.remapY)
  i808.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[16], i808.remapZ)
  i808.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[17], i808.positionAmount)
  i808.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[18], i808.rotationAmount)
  i808.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[19], i808.sizeAmount)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemInheritVelocity()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.mode = i811[1]
  i810.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.curve)
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemForceOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.space = i813[4]
  i812.randomized = !!i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.limitX)
  i814.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.limitY)
  i814.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.limitZ)
  i814.dampen = i815[4]
  i814.separateAxes = !!i815[5]
  i814.space = i815[6]
  i814.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[7], i814.drag)
  i814.multiplyDragByParticleSize = !!i815[8]
  i814.multiplyDragByParticleVelocity = !!i815[9]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i817 = data
  i816.enabled = !!i817[0]
  request.r(i817[1], i817[2], 0, i816, 'sharedMaterial')
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.sharedMaterials = i818
  i816.receiveShadows = !!i817[4]
  i816.shadowCastingMode = i817[5]
  i816.sortingLayerID = i817[6]
  i816.sortingOrder = i817[7]
  i816.lightmapIndex = i817[8]
  i816.lightmapSceneIndex = i817[9]
  i816.lightmapScaleOffset = new pc.Vec4( i817[10], i817[11], i817[12], i817[13] )
  i816.lightProbeUsage = i817[14]
  i816.reflectionProbeUsage = i817[15]
  request.r(i817[16], i817[17], 0, i816, 'mesh')
  i816.meshCount = i817[18]
  i816.activeVertexStreamsCount = i817[19]
  i816.alignment = i817[20]
  i816.renderMode = i817[21]
  i816.sortMode = i817[22]
  i816.lengthScale = i817[23]
  i816.velocityScale = i817[24]
  i816.cameraVelocityScale = i817[25]
  i816.normalDirection = i817[26]
  i816.sortingFudge = i817[27]
  i816.minParticleSize = i817[28]
  i816.maxParticleSize = i817[29]
  i816.pivot = new pc.Vec3( i817[30], i817[31], i817[32] )
  request.r(i817[33], i817[34], 0, i816, 'trailMaterial')
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i823 = data
  i822.name = i823[0]
  i822.tag = i823[1]
  i822.enabled = !!i823[2]
  i822.isStatic = !!i823[3]
  i822.layer = i823[4]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i825 = data
  i824.name = i825[0]
  i824.width = i825[1]
  i824.height = i825[2]
  i824.mipmapCount = i825[3]
  i824.anisoLevel = i825[4]
  i824.filterMode = i825[5]
  i824.hdr = !!i825[6]
  i824.format = i825[7]
  i824.wrapMode = i825[8]
  i824.alphaIsTransparency = !!i825[9]
  i824.alphaSource = i825[10]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'sharedMesh')
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'additionalVertexStreams')
  i828.enabled = !!i829[2]
  request.r(i829[3], i829[4], 0, i828, 'sharedMaterial')
  var i831 = i829[5]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[6]
  i828.shadowCastingMode = i829[7]
  i828.sortingLayerID = i829[8]
  i828.sortingOrder = i829[9]
  i828.lightmapIndex = i829[10]
  i828.lightmapSceneIndex = i829[11]
  i828.lightmapScaleOffset = new pc.Vec4( i829[12], i829[13], i829[14], i829[15] )
  i828.lightProbeUsage = i829[16]
  i828.reflectionProbeUsage = i829[17]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i833 = data
  i832.name = i833[0]
  i832.halfPrecision = !!i833[1]
  i832.vertexCount = i833[2]
  i832.aabb = i833[3]
  var i835 = i833[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( !!i835[i + 0] );
  }
  i832.streams = i834
  i832.vertices = i833[5]
  var i837 = i833[6]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i837[i + 0]) );
  }
  i832.subMeshes = i836
  var i839 = i833[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 16) {
    i838.push( new pc.Mat4().setData(i839[i + 0], i839[i + 1], i839[i + 2], i839[i + 3],  i839[i + 4], i839[i + 5], i839[i + 6], i839[i + 7],  i839[i + 8], i839[i + 9], i839[i + 10], i839[i + 11],  i839[i + 12], i839[i + 13], i839[i + 14], i839[i + 15]) );
  }
  i832.bindposes = i838
  var i841 = i833[8]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i841[i + 0]) );
  }
  i832.blendShapes = i840
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i847 = data
  i846.triangles = i847[0]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i853 = data
  i852.name = i853[0]
  var i855 = i853[1]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i855[i + 0]) );
  }
  i852.frames = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i857 = data
  i856.textureMode = i857[0]
  i856.alignment = i857[1]
  i856.widthCurve = new pc.AnimationCurve( { keys_flow: i857[2] } )
  i856.colorGradient = i857[3] ? new pc.ColorGradient(i857[3][0], i857[3][1], i857[3][2]) : null
  var i859 = i857[4]
  var i858 = []
  for(var i = 0; i < i859.length; i += 3) {
    i858.push( new pc.Vec3( i859[i + 0], i859[i + 1], i859[i + 2] ) );
  }
  i856.positions = i858
  i856.positionCount = i857[5]
  i856.widthMultiplier = i857[6]
  i856.startWidth = i857[7]
  i856.endWidth = i857[8]
  i856.numCornerVertices = i857[9]
  i856.numCapVertices = i857[10]
  i856.useWorldSpace = !!i857[11]
  i856.loop = !!i857[12]
  i856.startColor = new pc.Color(i857[13], i857[14], i857[15], i857[16])
  i856.endColor = new pc.Color(i857[17], i857[18], i857[19], i857[20])
  i856.generateLightingData = !!i857[21]
  i856.enabled = !!i857[22]
  request.r(i857[23], i857[24], 0, i856, 'sharedMaterial')
  var i861 = i857[25]
  var i860 = []
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 2, i860, '')
  }
  i856.sharedMaterials = i860
  i856.receiveShadows = !!i857[26]
  i856.shadowCastingMode = i857[27]
  i856.sortingLayerID = i857[28]
  i856.sortingOrder = i857[29]
  i856.lightmapIndex = i857[30]
  i856.lightmapSceneIndex = i857[31]
  i856.lightmapScaleOffset = new pc.Vec4( i857[32], i857[33], i857[34], i857[35] )
  i856.lightProbeUsage = i857[36]
  i856.reflectionProbeUsage = i857[37]
  return i856
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i864 = root || request.c( 'RopeBridge' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'StartPoint')
  request.r(i865[2], i865[3], 0, i864, 'EndPoint')
  i864.ropeSegLen = i865[4]
  i864.segmentLength = i865[5]
  i864.lineWidth = i865[6]
  i864.distOfStartToEnd = i865[7]
  i864.lineLengthMultifly = i865[8]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'animatorController')
  i866.updateMode = i867[2]
  var i869 = i867[3]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i866.humanBones = i868
  i866.enabled = !!i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i873 = data
  i872.playAutomatically = !!i873[0]
  request.r(i873[1], i873[2], 0, i872, 'clip')
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.clips = i874
  i872.wrapMode = i873[4]
  i872.enabled = !!i873[5]
  return i872
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i878 = root || request.c( 'AnimationController' )
  var i879 = data
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i881 = data
  i880.center = new pc.Vec3( i881[0], i881[1], i881[2] )
  i880.size = new pc.Vec3( i881[3], i881[4], i881[5] )
  i880.enabled = !!i881[6]
  i880.isTrigger = !!i881[7]
  request.r(i881[8], i881[9], 0, i880, 'material')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i883 = data
  i882.enabled = !!i883[0]
  request.r(i883[1], i883[2], 0, i882, 'sharedMaterial')
  var i885 = i883[3]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i882.sharedMaterials = i884
  i882.receiveShadows = !!i883[4]
  i882.shadowCastingMode = i883[5]
  i882.sortingLayerID = i883[6]
  i882.sortingOrder = i883[7]
  i882.lightmapIndex = i883[8]
  i882.lightmapSceneIndex = i883[9]
  i882.lightmapScaleOffset = new pc.Vec4( i883[10], i883[11], i883[12], i883[13] )
  i882.lightProbeUsage = i883[14]
  i882.reflectionProbeUsage = i883[15]
  request.r(i883[16], i883[17], 0, i882, 'sharedMesh')
  var i887 = i883[18]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i882.bones = i886
  i882.updateWhenOffscreen = !!i883[19]
  i882.localBounds = i883[20]
  request.r(i883[21], i883[22], 0, i882, 'rootBone')
  var i889 = i883[23]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i889[i + 0]) );
  }
  i882.blendShapesWeights = i888
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i893 = data
  i892.weight = i893[0]
  return i892
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i894 = root || request.c( 'FishingLine' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'line')
  request.r(i895[2], i895[3], 0, i894, 'startPoint')
  request.r(i895[4], i895[5], 0, i894, 'endPoint')
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i897 = data
  i896.mass = i897[0]
  i896.drag = i897[1]
  i896.angularDrag = i897[2]
  i896.useGravity = !!i897[3]
  i896.isKinematic = !!i897[4]
  i896.constraints = i897[5]
  i896.maxAngularVelocity = i897[6]
  i896.collisionDetectionMode = i897[7]
  i896.interpolation = i897[8]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i899 = data
  i898.swingAxis = new pc.Vec3( i899[0], i899[1], i899[2] )
  i898.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i899[3], i898.twistLimitSpring)
  i898.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i899[4], i898.swingLimitSpring)
  i898.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i899[5], i898.lowTwistLimit)
  i898.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i899[6], i898.highTwistLimit)
  i898.swing1Limit = request.d('UnityEngine.SoftJointLimit', i899[7], i898.swing1Limit)
  i898.swing2Limit = request.d('UnityEngine.SoftJointLimit', i899[8], i898.swing2Limit)
  request.r(i899[9], i899[10], 0, i898, 'connectedBody')
  i898.axis = new pc.Vec3( i899[11], i899[12], i899[13] )
  i898.anchor = new pc.Vec3( i899[14], i899[15], i899[16] )
  i898.connectedAnchor = new pc.Vec3( i899[17], i899[18], i899[19] )
  i898.autoConfigureConnectedAnchor = !!i899[20]
  i898.massScale = i899[21]
  i898.connectedMassScale = i899[22]
  i898.enableCollision = !!i899[23]
  i898.breakForce = i899[24]
  i898.breakTorque = i899[25]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i903 = data
  i902.weight = i903[0]
  i902.vertices = i903[1]
  i902.normals = i903[2]
  i902.tangents = i903[3]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i905 = data
  i904.pivot = new pc.Vec2( i905[0], i905[1] )
  i904.anchorMin = new pc.Vec2( i905[2], i905[3] )
  i904.anchorMax = new pc.Vec2( i905[4], i905[5] )
  i904.sizeDelta = new pc.Vec2( i905[6], i905[7] )
  i904.anchoredPosition3D = new pc.Vec3( i905[8], i905[9], i905[10] )
  i904.rotation = new pc.Quat(i905[11], i905[12], i905[13], i905[14])
  i904.scale = new pc.Vec3( i905[15], i905[16], i905[17] )
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i907 = data
  i906.cullTransparentMesh = !!i907[0]
  return i906
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i908 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i909 = data
  i908.m_hasFontAssetChanged = !!i909[0]
  request.r(i909[1], i909[2], 0, i908, 'm_baseMaterial')
  i908.m_maskOffset = new pc.Vec4( i909[3], i909[4], i909[5], i909[6] )
  i908.m_text = i909[7]
  i908.m_isRightToLeft = !!i909[8]
  request.r(i909[9], i909[10], 0, i908, 'm_fontAsset')
  request.r(i909[11], i909[12], 0, i908, 'm_sharedMaterial')
  var i911 = i909[13]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.m_fontSharedMaterials = i910
  request.r(i909[14], i909[15], 0, i908, 'm_fontMaterial')
  var i913 = i909[16]
  var i912 = []
  for(var i = 0; i < i913.length; i += 2) {
  request.r(i913[i + 0], i913[i + 1], 2, i912, '')
  }
  i908.m_fontMaterials = i912
  i908.m_fontColor32 = UnityEngine.Color32.ConstructColor(i909[17], i909[18], i909[19], i909[20])
  i908.m_fontColor = new pc.Color(i909[21], i909[22], i909[23], i909[24])
  i908.m_enableVertexGradient = !!i909[25]
  i908.m_colorMode = i909[26]
  i908.m_fontColorGradient = request.d('TMPro.VertexGradient', i909[27], i908.m_fontColorGradient)
  request.r(i909[28], i909[29], 0, i908, 'm_fontColorGradientPreset')
  request.r(i909[30], i909[31], 0, i908, 'm_spriteAsset')
  i908.m_tintAllSprites = !!i909[32]
  request.r(i909[33], i909[34], 0, i908, 'm_StyleSheet')
  i908.m_TextStyleHashCode = i909[35]
  i908.m_overrideHtmlColors = !!i909[36]
  i908.m_faceColor = UnityEngine.Color32.ConstructColor(i909[37], i909[38], i909[39], i909[40])
  i908.m_fontSize = i909[41]
  i908.m_fontSizeBase = i909[42]
  i908.m_fontWeight = i909[43]
  i908.m_enableAutoSizing = !!i909[44]
  i908.m_fontSizeMin = i909[45]
  i908.m_fontSizeMax = i909[46]
  i908.m_fontStyle = i909[47]
  i908.m_HorizontalAlignment = i909[48]
  i908.m_VerticalAlignment = i909[49]
  i908.m_textAlignment = i909[50]
  i908.m_characterSpacing = i909[51]
  i908.m_wordSpacing = i909[52]
  i908.m_lineSpacing = i909[53]
  i908.m_lineSpacingMax = i909[54]
  i908.m_paragraphSpacing = i909[55]
  i908.m_charWidthMaxAdj = i909[56]
  i908.m_enableWordWrapping = !!i909[57]
  i908.m_wordWrappingRatios = i909[58]
  i908.m_overflowMode = i909[59]
  request.r(i909[60], i909[61], 0, i908, 'm_linkedTextComponent')
  request.r(i909[62], i909[63], 0, i908, 'parentLinkedComponent')
  i908.m_enableKerning = !!i909[64]
  i908.m_enableExtraPadding = !!i909[65]
  i908.checkPaddingRequired = !!i909[66]
  i908.m_isRichText = !!i909[67]
  i908.m_parseCtrlCharacters = !!i909[68]
  i908.m_isOrthographic = !!i909[69]
  i908.m_isCullingEnabled = !!i909[70]
  i908.m_horizontalMapping = i909[71]
  i908.m_verticalMapping = i909[72]
  i908.m_uvLineOffset = i909[73]
  i908.m_geometrySortingOrder = i909[74]
  i908.m_IsTextObjectScaleStatic = !!i909[75]
  i908.m_VertexBufferAutoSizeReduction = !!i909[76]
  i908.m_useMaxVisibleDescender = !!i909[77]
  i908.m_pageToDisplay = i909[78]
  i908.m_margin = new pc.Vec4( i909[79], i909[80], i909[81], i909[82] )
  i908.m_isUsingLegacyAnimationComponent = !!i909[83]
  i908.m_isVolumetricText = !!i909[84]
  request.r(i909[85], i909[86], 0, i908, 'm_Material')
  i908.m_Maskable = !!i909[87]
  i908.m_Color = new pc.Color(i909[88], i909[89], i909[90], i909[91])
  i908.m_RaycastTarget = !!i909[92]
  i908.m_RaycastPadding = new pc.Vec4( i909[93], i909[94], i909[95], i909[96] )
  return i908
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.VertexGradient' )
  var i915 = data
  i914.topLeft = new pc.Color(i915[0], i915[1], i915[2], i915[3])
  i914.topRight = new pc.Color(i915[4], i915[5], i915[6], i915[7])
  i914.bottomLeft = new pc.Color(i915[8], i915[9], i915[10], i915[11])
  i914.bottomRight = new pc.Color(i915[12], i915[13], i915[14], i915[15])
  return i914
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i916 = root || request.c( 'UnityEngine.UI.Image' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'm_Sprite')
  i916.m_Type = i917[2]
  i916.m_PreserveAspect = !!i917[3]
  i916.m_FillCenter = !!i917[4]
  i916.m_FillMethod = i917[5]
  i916.m_FillAmount = i917[6]
  i916.m_FillClockwise = !!i917[7]
  i916.m_FillOrigin = i917[8]
  i916.m_UseSpriteMesh = !!i917[9]
  i916.m_PixelsPerUnitMultiplier = i917[10]
  request.r(i917[11], i917[12], 0, i916, 'm_Material')
  i916.m_Maskable = !!i917[13]
  i916.m_Color = new pc.Color(i917[14], i917[15], i917[16], i917[17])
  i916.m_RaycastTarget = !!i917[18]
  i916.m_RaycastPadding = new pc.Vec4( i917[19], i917[20], i917[21], i917[22] )
  return i916
}

Deserializers["Fish"] = function (request, data, root) {
  var i918 = root || request.c( 'Fish' )
  var i919 = data
  i918.fishType = request.d('FishType', i919[0], i918.fishType)
  request.r(i919[1], i919[2], 0, i918, 'fishData')
  i918.sensingRadius = i919[3]
  i918.moveSpeed = i919[4]
  i918.followTargetSpeed = i919[5]
  i918.rotationSpeed = i919[6]
  request.r(i919[7], i919[8], 0, i918, 'target')
  i918.usingMapDataNumber = i919[9]
  i918.hooked = !!i919[10]
  request.r(i919[11], i919[12], 0, i918, 'rigid')
  i918.dirToHook = new pc.Vec3( i919[13], i919[14], i919[15] )
  request.r(i919[16], i919[17], 0, i918, 'head')
  request.r(i919[18], i919[19], 0, i918, 'mapData')
  request.r(i919[20], i919[21], 0, i918, 'mousePoint')
  return i918
}

Deserializers["FishType"] = function (request, data, root) {
  var i920 = root || request.c( 'FishType' )
  var i921 = data
  i920.cost = i921[0]
  i920.tier = i921[1]
  i920.fishNumber = i921[2]
  i920.boundSize = new pc.Vec3( i921[3], i921[4], i921[5] )
  return i920
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i922 = root || request.c( 'ChestMover' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'chest')
  return i922
}

Deserializers["Chest"] = function (request, data, root) {
  var i924 = root || request.c( 'Chest' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'chestMover')
  i924.chestTier = i925[2]
  request.r(i925[3], i925[4], 0, i924, 'line')
  i924.chestPullDist = i925[5]
  i924.pullForce = i925[6]
  i924.fishType = request.d('FishType', i925[7], i924.fishType)
  request.r(i925[8], i925[9], 0, i924, 'fishData')
  i924.sensingRadius = i925[10]
  i924.moveSpeed = i925[11]
  i924.followTargetSpeed = i925[12]
  i924.rotationSpeed = i925[13]
  request.r(i925[14], i925[15], 0, i924, 'target')
  i924.usingMapDataNumber = i925[16]
  i924.hooked = !!i925[17]
  request.r(i925[18], i925[19], 0, i924, 'rigid2')
  request.r(i925[20], i925[21], 0, i924, 'rigid')
  i924.dirToHook = new pc.Vec3( i925[22], i925[23], i925[24] )
  request.r(i925[25], i925[26], 0, i924, 'head')
  request.r(i925[27], i925[28], 0, i924, 'mapData')
  request.r(i925[29], i925[30], 0, i924, 'mousePoint')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i927 = data
  i926.enabled = !!i927[0]
  i926.type = i927[1]
  i926.color = new pc.Color(i927[2], i927[3], i927[4], i927[5])
  i926.cullingMask = i927[6]
  i926.intensity = i927[7]
  i926.range = i927[8]
  i926.spotAngle = i927[9]
  i926.shadows = i927[10]
  i926.shadowNormalBias = i927[11]
  i926.shadowBias = i927[12]
  i926.shadowStrength = i927[13]
  i926.shadowResolution = i927[14]
  i926.lightmapBakeType = i927[15]
  i926.renderMode = i927[16]
  request.r(i927[17], i927[18], 0, i926, 'cookie')
  i926.cookieSize = i927[19]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i929 = data
  i928.enabled = !!i929[0]
  request.r(i929[1], i929[2], 0, i928, 'sharedMaterial')
  var i931 = i929[3]
  var i930 = []
  for(var i = 0; i < i931.length; i += 2) {
  request.r(i931[i + 0], i931[i + 1], 2, i930, '')
  }
  i928.sharedMaterials = i930
  i928.receiveShadows = !!i929[4]
  i928.shadowCastingMode = i929[5]
  i928.sortingLayerID = i929[6]
  i928.sortingOrder = i929[7]
  i928.lightmapIndex = i929[8]
  i928.lightmapSceneIndex = i929[9]
  i928.lightmapScaleOffset = new pc.Vec4( i929[10], i929[11], i929[12], i929[13] )
  i928.lightProbeUsage = i929[14]
  i928.reflectionProbeUsage = i929[15]
  i928.color = new pc.Color(i929[16], i929[17], i929[18], i929[19])
  request.r(i929[20], i929[21], 0, i928, 'sprite')
  i928.flipX = !!i929[22]
  i928.flipY = !!i929[23]
  i928.drawMode = i929[24]
  i928.size = new pc.Vec2( i929[25], i929[26] )
  i928.tileMode = i929[27]
  i928.adaptiveModeThreshold = i929[28]
  i928.maskInteraction = i929[29]
  i928.spriteSortPoint = i929[30]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i933 = data
  i932.name = i933[0]
  i932.atlasId = i933[1]
  i932.mipmapCount = i933[2]
  i932.hdr = !!i933[3]
  i932.size = i933[4]
  i932.anisoLevel = i933[5]
  i932.filterMode = i933[6]
  i932.wrapMode = i933[7]
  var i935 = i933[8]
  var i934 = []
  for(var i = 0; i < i935.length; i += 4) {
    i934.push( UnityEngine.Rect.MinMaxRect(i935[i + 0], i935[i + 1], i935[i + 2], i935[i + 3]) );
  }
  i932.rects = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i939 = data
  i938.name = i939[0]
  i938.index = i939[1]
  i938.startup = !!i939[2]
  return i938
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i940 = root || request.c( 'FishingRod' )
  var i941 = data
  i940.hookThrowForce = i941[0]
  i940.lineForce = i941[1]
  i940.maxPullingForce = i941[2]
  i940.minPullingForce = i941[3]
  i940.currentPullingForece = i941[4]
  i940.maxLine = i941[5]
  i940.pullingSpeed = i941[6]
  i940.playAdsPullCount = i941[7]
  i940.isStart = !!i941[8]
  request.r(i941[9], i941[10], 0, i940, 'hookRigid')
  request.r(i941[11], i941[12], 0, i940, 'pivot')
  request.r(i941[13], i941[14], 0, i940, 'touchToStartPanel')
  request.r(i941[15], i941[16], 0, i940, 'rodAnimator')
  request.r(i941[17], i941[18], 0, i940, 'fishingHook')
  request.r(i941[19], i941[20], 0, i940, 'touchField')
  request.r(i941[21], i941[22], 0, i940, 'upgradePanel')
  request.r(i941[23], i941[24], 0, i940, 'upgradeButton')
  request.r(i941[25], i941[26], 0, i940, 'depthText')
  request.r(i941[27], i941[28], 0, i940, 'throwTarget1')
  request.r(i941[29], i941[30], 0, i940, 'throwTarget2')
  request.r(i941[31], i941[32], 0, i940, 'hookObject')
  request.r(i941[33], i941[34], 0, i940, 'playerObject')
  request.r(i941[35], i941[36], 0, i940, 'animationController')
  return i940
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i942 = root || request.c( 'FishingLogic' )
  var i943 = data
  request.r(i943[0], i943[1], 0, i942, 'joint')
  i942.biteBate = !!i943[2]
  i942.pulling = !!i943[3]
  i942.enablePulling = !!i943[4]
  request.r(i943[5], i943[6], 0, i942, 'rodAnimator')
  request.r(i943[7], i943[8], 0, i942, 'animationController')
  request.r(i943[9], i943[10], 0, i942, 'startButton')
  request.r(i943[11], i943[12], 0, i942, 'catchSlider')
  request.r(i943[13], i943[14], 0, i942, 'catchButton')
  request.r(i943[15], i943[16], 0, i942, 'fishingRod')
  request.r(i943[17], i943[18], 0, i942, 'arrow')
  request.r(i943[19], i943[20], 0, i942, 'fishingRodSkinned')
  request.r(i943[21], i943[22], 0, i942, 'bubbleParticle')
  request.r(i943[23], i943[24], 0, i942, 'hookRigid')
  request.r(i943[25], i943[26], 0, i942, 'hook')
  return i942
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i944 = root || request.c( 'Upgrades' )
  var i945 = data
  i944.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i945[0], i944.lineLengthUpgrade)
  i944.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i945[1], i944.hookMaxUpgrade)
  i944.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i945[2], i944.hookMoveSpeedUpgrade)
  request.r(i945[3], i945[4], 0, i944, 'hook')
  request.r(i945[5], i945[6], 0, i944, 'rod')
  request.r(i945[7], i945[8], 0, i944, 'touchField')
  request.r(i945[9], i945[10], 0, i944, 'upgradePanel')
  request.r(i945[11], i945[12], 0, i944, 'upgradeTap')
  request.r(i945[13], i945[14], 0, i944, 'closeTap')
  request.r(i945[15], i945[16], 0, i944, 'tapToStartText')
  return i944
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i946 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i947 = data
  i946.currentLevel = i947[0]
  i946.maxLevel = i947[1]
  i946.upgradeValue = i947[2]
  i946.upgradeNeedyCost = i947[3]
  i946.upgradeCostIncreaseValue = i947[4]
  i946.upgradeCostIncreaseValueMultifly = i947[5]
  request.r(i947[6], i947[7], 0, i946, 'levelText')
  request.r(i947[8], i947[9], 0, i946, 'needyCostText')
  request.r(i947[10], i947[11], 0, i946, 'cover')
  request.r(i947[12], i947[13], 0, i946, 'rod')
  return i946
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i948 = root || request.c( 'Upgrades+CountUpgrade' )
  var i949 = data
  i948.currentLevel = i949[0]
  i948.maxLevel = i949[1]
  i948.upgradeValue = i949[2]
  i948.upgradeNeedyCost = i949[3]
  i948.upgradeCostIncreaseValue = i949[4]
  i948.upgradeCostIncreaseValueMultifly = i949[5]
  request.r(i949[6], i949[7], 0, i948, 'levelText')
  request.r(i949[8], i949[9], 0, i948, 'needyCostText')
  request.r(i949[10], i949[11], 0, i948, 'cover')
  request.r(i949[12], i949[13], 0, i948, 'hook')
  return i948
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i950 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i951 = data
  i950.currentLevel = i951[0]
  i950.maxLevel = i951[1]
  i950.upgradeValue = i951[2]
  i950.upgradeNeedyCost = i951[3]
  i950.upgradeCostIncreaseValue = i951[4]
  i950.upgradeCostIncreaseValueMultifly = i951[5]
  request.r(i951[6], i951[7], 0, i950, 'levelText')
  request.r(i951[8], i951[9], 0, i950, 'needyCostText')
  request.r(i951[10], i951[11], 0, i950, 'cover')
  request.r(i951[12], i951[13], 0, i950, 'touchField')
  return i950
}

Deserializers["FishPool"] = function (request, data, root) {
  var i952 = root || request.c( 'FishPool' )
  var i953 = data
  i952.oneTierFishList = request.d('FishList', i953[0], i952.oneTierFishList)
  i952.twoTierFishList = request.d('FishList', i953[1], i952.twoTierFishList)
  i952.threeTierFishList = request.d('FishList', i953[2], i952.threeTierFishList)
  i952.fourTierFishList = request.d('FishList', i953[3], i952.fourTierFishList)
  i952.fiveTierFishList = request.d('FishList', i953[4], i952.fiveTierFishList)
  i952.chestList_one = request.d('FishList', i953[5], i952.chestList_one)
  i952.chestList_two = request.d('FishList', i953[6], i952.chestList_two)
  i952.chestList_three = request.d('FishList', i953[7], i952.chestList_three)
  i952.chestMover = request.d('FishList', i953[8], i952.chestMover)
  var i955 = i953[9]
  var i954 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 1, i954, '')
  }
  i952.generatedFishList = i954
  request.r(i953[10], i953[11], 0, i952, 'poolParent')
  return i952
}

Deserializers["FishList"] = function (request, data, root) {
  var i956 = root || request.c( 'FishList' )
  var i957 = data
  var i959 = i957[0]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i956.fishList = i958
  var i961 = i957[1]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i956.spawnPoints = i960
  return i956
}

Deserializers["DataManager"] = function (request, data, root) {
  var i968 = root || request.c( 'DataManager' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'setting')
  request.r(i969[2], i969[3], 0, i968, 'soundSlider')
  request.r(i969[4], i969[5], 0, i968, 'hapticSlider')
  i968.gameDataFileName = i969[6]
  i968._gameData = request.d('GameData', i969[7], i968._gameData)
  request.r(i969[8], i969[9], 0, i968, 'soundSliderHandleText')
  request.r(i969[10], i969[11], 0, i968, 'hapticSliderHandleText')
  return i968
}

Deserializers["GameData"] = function (request, data, root) {
  var i970 = root || request.c( 'GameData' )
  var i971 = data
  i970.money = i971[0]
  i970.needleUpgrade = i971[1]
  i970.lineUpgrade = i971[2]
  i970.reelUpgrade = i971[3]
  i970.sound = i971[4]
  i970.haptic = i971[5]
  return i970
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'm_FirstSelected')
  i972.m_sendNavigationEvents = !!i973[2]
  i972.m_DragThreshold = i973[3]
  return i972
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i975 = data
  i974.m_HorizontalAxis = i975[0]
  i974.m_VerticalAxis = i975[1]
  i974.m_SubmitButton = i975[2]
  i974.m_CancelButton = i975[3]
  i974.m_InputActionsPerSecond = i975[4]
  i974.m_RepeatDelay = i975[5]
  i974.m_ForceModuleActive = !!i975[6]
  i974.m_SendPointerHoverToParent = !!i975[7]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i977 = data
  i976.enabled = !!i977[0]
  i976.planeDistance = i977[1]
  i976.referencePixelsPerUnit = i977[2]
  i976.isFallbackOverlay = !!i977[3]
  i976.renderMode = i977[4]
  i976.renderOrder = i977[5]
  i976.sortingLayerName = i977[6]
  i976.sortingOrder = i977[7]
  i976.scaleFactor = i977[8]
  request.r(i977[9], i977[10], 0, i976, 'worldCamera')
  i976.overrideSorting = !!i977[11]
  i976.pixelPerfect = !!i977[12]
  i976.targetDisplay = i977[13]
  i976.overridePixelPerfect = !!i977[14]
  return i976
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i979 = data
  i978.m_UiScaleMode = i979[0]
  i978.m_ReferencePixelsPerUnit = i979[1]
  i978.m_ScaleFactor = i979[2]
  i978.m_ReferenceResolution = new pc.Vec2( i979[3], i979[4] )
  i978.m_ScreenMatchMode = i979[5]
  i978.m_MatchWidthOrHeight = i979[6]
  i978.m_PhysicalUnit = i979[7]
  i978.m_FallbackScreenDPI = i979[8]
  i978.m_DefaultSpriteDPI = i979[9]
  i978.m_DynamicPixelsPerUnit = i979[10]
  i978.m_PresetInfoIsWorld = !!i979[11]
  return i978
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i981 = data
  i980.m_IgnoreReversedGraphics = !!i981[0]
  i980.m_BlockingObjects = i981[1]
  i980.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i981[2] )
  return i980
}

Deserializers["UIManager"] = function (request, data, root) {
  var i982 = root || request.c( 'UIManager' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'challengeTarget')
  request.r(i983[2], i983[3], 0, i982, 'challengeText')
  request.r(i983[4], i983[5], 0, i982, 'versionText')
  i982.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i983[6] )
  i982.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i983[7] )
  request.r(i983[8], i983[9], 0, i982, 'uiCamera')
  var i985 = i983[10]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i982.pictureModeObjects = i984
  return i982
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i988 = root || request.c( 'FixedTouchField' )
  var i989 = data
  i988.TouchDist = new pc.Vec2( i989[0], i989[1] )
  i988.PointerOld = new pc.Vec2( i989[2], i989[3] )
  i988.Pressed = !!i989[4]
  i988.hookMoveSpeed = i989[5]
  request.r(i989[6], i989[7], 0, i988, 'hook')
  request.r(i989[8], i989[9], 0, i988, 'logic')
  request.r(i989[10], i989[11], 0, i988, 'joystick_Background')
  request.r(i989[12], i989[13], 0, i988, 'joystick_Handle')
  request.r(i989[14], i989[15], 0, i988, 'canvas')
  request.r(i989[16], i989[17], 0, i988, 'newCamera')
  i988.clampDist = i989[18]
  return i988
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.Button' )
  var i991 = data
  i990.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i991[0], i990.m_OnClick)
  i990.m_Navigation = request.d('UnityEngine.UI.Navigation', i991[1], i990.m_Navigation)
  i990.m_Transition = i991[2]
  i990.m_Colors = request.d('UnityEngine.UI.ColorBlock', i991[3], i990.m_Colors)
  i990.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i991[4], i990.m_SpriteState)
  i990.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i991[5], i990.m_AnimationTriggers)
  i990.m_Interactable = !!i991[6]
  request.r(i991[7], i991[8], 0, i990, 'm_TargetGraphic')
  return i990
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i993 = data
  i992.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i993[0], i992.m_PersistentCalls)
  return i992
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i995 = data
  var i997 = i995[0]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('UnityEngine.Events.PersistentCall', i997[i + 0]));
  }
  i994.m_Calls = i996
  return i994
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_Target')
  i1000.m_TargetAssemblyTypeName = i1001[2]
  i1000.m_MethodName = i1001[3]
  i1000.m_Mode = i1001[4]
  i1000.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1001[5], i1000.m_Arguments)
  i1000.m_CallState = i1001[6]
  return i1000
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'm_ObjectArgument')
  i1002.m_ObjectArgumentAssemblyTypeName = i1003[2]
  i1002.m_IntArgument = i1003[3]
  i1002.m_FloatArgument = i1003[4]
  i1002.m_StringArgument = i1003[5]
  i1002.m_BoolArgument = !!i1003[6]
  return i1002
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1005 = data
  i1004.m_Mode = i1005[0]
  i1004.m_WrapAround = !!i1005[1]
  request.r(i1005[2], i1005[3], 0, i1004, 'm_SelectOnUp')
  request.r(i1005[4], i1005[5], 0, i1004, 'm_SelectOnDown')
  request.r(i1005[6], i1005[7], 0, i1004, 'm_SelectOnLeft')
  request.r(i1005[8], i1005[9], 0, i1004, 'm_SelectOnRight')
  return i1004
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1007 = data
  i1006.m_NormalColor = new pc.Color(i1007[0], i1007[1], i1007[2], i1007[3])
  i1006.m_HighlightedColor = new pc.Color(i1007[4], i1007[5], i1007[6], i1007[7])
  i1006.m_PressedColor = new pc.Color(i1007[8], i1007[9], i1007[10], i1007[11])
  i1006.m_SelectedColor = new pc.Color(i1007[12], i1007[13], i1007[14], i1007[15])
  i1006.m_DisabledColor = new pc.Color(i1007[16], i1007[17], i1007[18], i1007[19])
  i1006.m_ColorMultiplier = i1007[20]
  i1006.m_FadeDuration = i1007[21]
  return i1006
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_HighlightedSprite')
  request.r(i1009[2], i1009[3], 0, i1008, 'm_PressedSprite')
  request.r(i1009[4], i1009[5], 0, i1008, 'm_SelectedSprite')
  request.r(i1009[6], i1009[7], 0, i1008, 'm_DisabledSprite')
  return i1008
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1011 = data
  i1010.m_NormalTrigger = i1011[0]
  i1010.m_HighlightedTrigger = i1011[1]
  i1010.m_PressedTrigger = i1011[2]
  i1010.m_SelectedTrigger = i1011[3]
  i1010.m_DisabledTrigger = i1011[4]
  return i1010
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_FillRect')
  request.r(i1013[2], i1013[3], 0, i1012, 'm_HandleRect')
  i1012.m_Direction = i1013[4]
  i1012.m_MinValue = i1013[5]
  i1012.m_MaxValue = i1013[6]
  i1012.m_WholeNumbers = !!i1013[7]
  i1012.m_Value = i1013[8]
  i1012.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1013[9], i1012.m_OnValueChanged)
  i1012.m_Navigation = request.d('UnityEngine.UI.Navigation', i1013[10], i1012.m_Navigation)
  i1012.m_Transition = i1013[11]
  i1012.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1013[12], i1012.m_Colors)
  i1012.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1013[13], i1012.m_SpriteState)
  i1012.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1013[14], i1012.m_AnimationTriggers)
  i1012.m_Interactable = !!i1013[15]
  request.r(i1013[16], i1013[17], 0, i1012, 'm_TargetGraphic')
  return i1012
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1015 = data
  i1014.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1015[0], i1014.m_PersistentCalls)
  return i1014
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i1016 = root || request.c( 'EnviromentEditor' )
  var i1017 = data
  i1016.oceanSpriteValueMultifly = i1017[0]
  i1016.sunLightIntensity = i1017[1]
  i1016.minSunLightIntensity = i1017[2]
  i1016.challengeLightIntensity = i1017[3]
  i1016.depthMaskTransparentValue = i1017[4]
  i1016.ambientLightIntensity = i1017[5]
  request.r(i1017[6], i1017[7], 0, i1016, 'hook')
  var i1019 = i1017[8]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1016.Oceans = i1018
  request.r(i1017[9], i1017[10], 0, i1016, 'OceanSurface')
  request.r(i1017[11], i1017[12], 0, i1016, 'depthMask')
  request.r(i1017[13], i1017[14], 0, i1016, 'depthSprite')
  request.r(i1017[15], i1017[16], 0, i1016, 'depthMaskMat')
  request.r(i1017[17], i1017[18], 0, i1016, 'sunLights')
  request.r(i1017[19], i1017[20], 0, i1016, 'hookLight')
  request.r(i1017[21], i1017[22], 0, i1016, 'challengeLight')
  return i1016
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i1022 = root || request.c( 'ObjectMovement' )
  var i1023 = data
  i1022.moveX = i1023[0]
  i1022.moveSec = i1023[1]
  return i1022
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i1024 = root || request.c( 'OceanTrigger' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'touchToPullButton')
  request.r(i1025[2], i1025[3], 0, i1024, 'waterSplashParticle')
  request.r(i1025[4], i1025[5], 0, i1024, 'bubbleParticle')
  request.r(i1025[6], i1025[7], 0, i1024, 'arrow')
  request.r(i1025[8], i1025[9], 0, i1024, 'rigid')
  request.r(i1025[10], i1025[11], 0, i1024, 'hook')
  request.r(i1025[12], i1025[13], 0, i1024, 'rod')
  return i1024
}

Deserializers["Flock"] = function (request, data, root) {
  var i1026 = root || request.c( 'Flock' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'flockUnitPrefab')
  i1026.flockSize = i1027[2]
  i1026.spawnBounds = new pc.Vec3( i1027[3], i1027[4], i1027[5] )
  i1026._minSpeed = i1027[6]
  i1026._maxSpeed = i1027[7]
  i1026._cohesionDistance = i1027[8]
  i1026._avoidanceDistance = i1027[9]
  i1026._aligementDistance = i1027[10]
  i1026._obstacleDistance = i1027[11]
  i1026._boundsDistance = i1027[12]
  i1026._cohesionWeight = i1027[13]
  i1026._avoidanceWeight = i1027[14]
  i1026._aligementWeight = i1027[15]
  i1026._boundsWeight = i1027[16]
  i1026._obstacleWeight = i1027[17]
  return i1026
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1028 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'm_LookAt')
  request.r(i1029[2], i1029[3], 0, i1028, 'm_Follow')
  i1028.m_Lens = request.d('Cinemachine.LensSettings', i1029[4], i1028.m_Lens)
  i1028.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1029[5], i1028.m_Transitions)
  var i1031 = i1029[6]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1028.m_ExcludedPropertiesInInspector = i1030
  var i1033 = i1029[7]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( i1033[i + 0] );
  }
  i1028.m_LockStageInInspector = i1032
  i1028.m_Priority = i1029[8]
  i1028.m_StandbyUpdate = i1029[9]
  i1028.m_LegacyBlendHint = i1029[10]
  request.r(i1029[11], i1029[12], 0, i1028, 'm_ComponentOwner')
  i1028.m_StreamingVersion = i1029[13]
  return i1028
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Cinemachine.LensSettings' )
  var i1035 = data
  i1034.FieldOfView = i1035[0]
  i1034.OrthographicSize = i1035[1]
  i1034.NearClipPlane = i1035[2]
  i1034.FarClipPlane = i1035[3]
  i1034.Dutch = i1035[4]
  i1034.ModeOverride = i1035[5]
  i1034.LensShift = new pc.Vec2( i1035[6], i1035[7] )
  i1034.GateFit = i1035[8]
  i1034.m_SensorSize = new pc.Vec2( i1035[9], i1035[10] )
  return i1034
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1036 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1037 = data
  i1036.m_BlendHint = i1037[0]
  i1036.m_InheritPosition = !!i1037[1]
  i1036.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1037[2], i1036.m_OnCameraLive)
  return i1036
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1038 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1039 = data
  i1038.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1039[0], i1038.m_PersistentCalls)
  return i1038
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1044 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1045 = data
  return i1044
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1047 = data
  i1046.m_TrackedObjectOffset = new pc.Vec3( i1047[0], i1047[1], i1047[2] )
  i1046.m_LookaheadTime = i1047[3]
  i1046.m_LookaheadSmoothing = i1047[4]
  i1046.m_LookaheadIgnoreY = !!i1047[5]
  i1046.m_HorizontalDamping = i1047[6]
  i1046.m_VerticalDamping = i1047[7]
  i1046.m_ScreenX = i1047[8]
  i1046.m_ScreenY = i1047[9]
  i1046.m_DeadZoneWidth = i1047[10]
  i1046.m_DeadZoneHeight = i1047[11]
  i1046.m_SoftZoneWidth = i1047[12]
  i1046.m_SoftZoneHeight = i1047[13]
  i1046.m_BiasX = i1047[14]
  i1046.m_BiasY = i1047[15]
  i1046.m_CenterOnActivate = !!i1047[16]
  return i1046
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1048 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1049 = data
  i1048.m_BindingMode = i1049[0]
  i1048.m_FollowOffset = new pc.Vec3( i1049[1], i1049[2], i1049[3] )
  i1048.m_XDamping = i1049[4]
  i1048.m_YDamping = i1049[5]
  i1048.m_ZDamping = i1049[6]
  i1048.m_AngularDampingMode = i1049[7]
  i1048.m_PitchDamping = i1049[8]
  i1048.m_YawDamping = i1049[9]
  i1048.m_RollDamping = i1049[10]
  i1048.m_AngularDamping = i1049[11]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.aspect = i1051[1]
  i1050.orthographic = !!i1051[2]
  i1050.orthographicSize = i1051[3]
  i1050.backgroundColor = new pc.Color(i1051[4], i1051[5], i1051[6], i1051[7])
  i1050.nearClipPlane = i1051[8]
  i1050.farClipPlane = i1051[9]
  i1050.fieldOfView = i1051[10]
  i1050.depth = i1051[11]
  i1050.clearFlags = i1051[12]
  i1050.cullingMask = i1051[13]
  i1050.rect = i1051[14]
  request.r(i1051[15], i1051[16], 0, i1050, 'targetTexture')
  return i1050
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i1052 = root || request.c( 'CameraMove' )
  var i1053 = data
  i1052.offset = new pc.Vec3( i1053[0], i1053[1], i1053[2] )
  request.r(i1053[3], i1053[4], 0, i1052, 'newCamera')
  request.r(i1053[5], i1053[6], 0, i1052, 'target')
  return i1052
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1054 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1055 = data
  i1054.m_ShowDebugText = !!i1055[0]
  i1054.m_ShowCameraFrustum = !!i1055[1]
  i1054.m_IgnoreTimeScale = !!i1055[2]
  request.r(i1055[3], i1055[4], 0, i1054, 'm_WorldUpOverride')
  i1054.m_UpdateMethod = i1055[5]
  i1054.m_BlendUpdateMethod = i1055[6]
  i1054.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1055[7], i1054.m_DefaultBlend)
  request.r(i1055[8], i1055[9], 0, i1054, 'm_CustomBlends')
  i1054.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1055[10], i1054.m_CameraCutEvent)
  i1054.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1055[11], i1054.m_CameraActivatedEvent)
  return i1054
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1056 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1057 = data
  i1056.m_Style = i1057[0]
  i1056.m_Time = i1057[1]
  i1056.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1057[2] } )
  return i1056
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1058 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1059 = data
  i1058.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1059[0], i1058.m_PersistentCalls)
  return i1058
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i1060 = root || request.c( 'CinemachineController' )
  var i1061 = data
  request.r(i1061[0], i1061[1], 0, i1060, 'playerTrans')
  i1060.playerOffset = new pc.Vec3( i1061[2], i1061[3], i1061[4] )
  request.r(i1061[5], i1061[6], 0, i1060, 'hookTrans')
  i1060.hookOffset = new pc.Vec3( i1061[7], i1061[8], i1061[9] )
  request.r(i1061[10], i1061[11], 0, i1060, 'cvc_Hook')
  request.r(i1061[12], i1061[13], 0, i1060, 'cvc_Player')
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1063 = data
  i1062.enabled = !!i1063[0]
  i1062.isTrigger = !!i1063[1]
  request.r(i1063[2], i1063[3], 0, i1062, 'material')
  i1062.center = new pc.Vec3( i1063[4], i1063[5], i1063[6] )
  i1062.radius = i1063[7]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1065 = data
  i1064.enabled = !!i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'sharedMaterial')
  var i1067 = i1065[3]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1064.sharedMaterials = i1066
  i1064.receiveShadows = !!i1065[4]
  i1064.shadowCastingMode = i1065[5]
  i1064.sortingLayerID = i1065[6]
  i1064.sortingOrder = i1065[7]
  i1064.lightmapIndex = i1065[8]
  i1064.lightmapSceneIndex = i1065[9]
  i1064.lightmapScaleOffset = new pc.Vec4( i1065[10], i1065[11], i1065[12], i1065[13] )
  i1064.lightProbeUsage = i1065[14]
  i1064.reflectionProbeUsage = i1065[15]
  var i1069 = i1065[16]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 3) {
    i1068.push( new pc.Vec3( i1069[i + 0], i1069[i + 1], i1069[i + 2] ) );
  }
  i1064.positions = i1068
  i1064.positionCount = i1065[17]
  i1064.time = i1065[18]
  i1064.startWidth = i1065[19]
  i1064.endWidth = i1065[20]
  i1064.widthMultiplier = i1065[21]
  i1064.autodestruct = !!i1065[22]
  i1064.emitting = !!i1065[23]
  i1064.numCornerVertices = i1065[24]
  i1064.numCapVertices = i1065[25]
  i1064.minVertexDistance = i1065[26]
  i1064.colorGradient = i1065[27] ? new pc.ColorGradient(i1065[27][0], i1065[27][1], i1065[27][2]) : null
  i1064.startColor = new pc.Color(i1065[28], i1065[29], i1065[30], i1065[31])
  i1064.endColor = new pc.Color(i1065[32], i1065[33], i1065[34], i1065[35])
  i1064.generateLightingData = !!i1065[36]
  i1064.textureMode = i1065[37]
  i1064.alignment = i1065[38]
  i1064.widthCurve = new pc.AnimationCurve( { keys_flow: i1065[39] } )
  return i1064
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i1070 = root || request.c( 'FishingHook' )
  var i1071 = data
  i1070.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i1071[0], i1070.OnMoneyChangeEvent)
  var i1073 = i1071[1]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 1, i1072, '')
  }
  i1070.hookedFish = i1072
  request.r(i1071[2], i1071[3], 0, i1070, 'sellParticle')
  request.r(i1071[4], i1071[5], 0, i1070, 'sellParticleParent')
  i1070.targetHookZoomOffset = i1071[6]
  i1070.minDrag = i1071[7]
  i1070.maxDrag = i1071[8]
  i1070.dragSpeed = i1071[9]
  i1070.fishingHookScaleUpgradeValue = i1071[10]
  i1070.fullHooked = !!i1071[11]
  i1070.inTheOcean = !!i1071[12]
  i1070.money = i1071[13]
  request.r(i1071[14], i1071[15], 0, i1070, 'rigid')
  request.r(i1071[16], i1071[17], 0, i1070, 'canvas')
  request.r(i1071[18], i1071[19], 0, i1070, 'moneyTextPrefab')
  request.r(i1071[20], i1071[21], 0, i1070, 'moneyTextSpawnTransform')
  i1070.moneyTextSpawnMinOffset = new pc.Vec2( i1071[22], i1071[23] )
  i1070.moneyTextSpawnMaxOffset = new pc.Vec2( i1071[24], i1071[25] )
  var i1075 = i1071[26]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 2, i1074, '')
  }
  i1070.hookedTransforms = i1074
  request.r(i1071[27], i1071[28], 0, i1070, 'fishingRodSkinned')
  request.r(i1071[29], i1071[30], 0, i1070, 'cinemachineCamera')
  request.r(i1071[31], i1071[32], 0, i1070, 'startPoint')
  request.r(i1071[33], i1071[34], 0, i1070, 'hook')
  request.r(i1071[35], i1071[36], 0, i1070, 'rod')
  request.r(i1071[37], i1071[38], 0, i1070, 'playerModel')
  request.r(i1071[39], i1071[40], 0, i1070, 'upgradeButton')
  request.r(i1071[41], i1071[42], 0, i1070, 'depthText')
  request.r(i1071[43], i1071[44], 0, i1070, 'touchField')
  request.r(i1071[45], i1071[46], 0, i1070, 'catchRingParticle')
  request.r(i1071[47], i1071[48], 0, i1070, 'fishSkinPrefab')
  request.r(i1071[49], i1071[50], 0, i1070, 'fishSkinPoint1')
  request.r(i1071[51], i1071[52], 0, i1070, 'fishSkinPoint2')
  request.r(i1071[53], i1071[54], 0, i1070, 'moneyText')
  request.r(i1071[55], i1071[56], 0, i1070, 'HookedCount')
  return i1070
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1076 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1077 = data
  i1076.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1077[0], i1076.m_PersistentCalls)
  return i1076
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i1078 = root || request.c( 'LowLineRenderer' )
  var i1079 = data
  request.r(i1079[0], i1079[1], 0, i1078, 'line')
  request.r(i1079[2], i1079[3], 0, i1078, 'start')
  request.r(i1079[4], i1079[5], 0, i1078, 'end')
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1081 = data
  i1080.ambientIntensity = i1081[0]
  i1080.reflectionIntensity = i1081[1]
  i1080.ambientMode = i1081[2]
  i1080.ambientLight = new pc.Color(i1081[3], i1081[4], i1081[5], i1081[6])
  i1080.ambientSkyColor = new pc.Color(i1081[7], i1081[8], i1081[9], i1081[10])
  i1080.ambientGroundColor = new pc.Color(i1081[11], i1081[12], i1081[13], i1081[14])
  i1080.ambientEquatorColor = new pc.Color(i1081[15], i1081[16], i1081[17], i1081[18])
  i1080.fogColor = new pc.Color(i1081[19], i1081[20], i1081[21], i1081[22])
  i1080.fogEndDistance = i1081[23]
  i1080.fogStartDistance = i1081[24]
  i1080.fogDensity = i1081[25]
  i1080.fog = !!i1081[26]
  request.r(i1081[27], i1081[28], 0, i1080, 'skybox')
  i1080.fogMode = i1081[29]
  var i1083 = i1081[30]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1083[i + 0]) );
  }
  i1080.lightmaps = i1082
  i1080.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1081[31], i1080.lightProbes)
  i1080.lightmapsMode = i1081[32]
  i1080.environmentLightingMode = i1081[33]
  i1080.ambientProbe = new pc.SphericalHarmonicsL2(i1081[34])
  i1080.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1081[35])
  i1080.useReferenceAmbientProbe = !!i1081[36]
  request.r(i1081[37], i1081[38], 0, i1080, 'customReflection')
  request.r(i1081[39], i1081[40], 0, i1080, 'defaultReflection')
  i1080.defaultReflectionMode = i1081[41]
  i1080.defaultReflectionResolution = i1081[42]
  i1080.sunLightObjectId = i1081[43]
  i1080.pixelLightCount = i1081[44]
  i1080.defaultReflectionHDR = !!i1081[45]
  i1080.hasLightDataAsset = !!i1081[46]
  i1080.hasManualGenerate = !!i1081[47]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'lightmapColor')
  request.r(i1087[2], i1087[3], 0, i1086, 'lightmapDirection')
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1088 = root || new UnityEngine.LightProbes()
  var i1089 = data
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.add(i1097[i + 0]);
  }
  i1094.invalidShaderVariants = i1096
  i1094.name = i1095[1]
  i1094.guid = i1095[2]
  var i1099 = i1095[3]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1094.shaderDefinedKeywords = i1098
  var i1101 = i1095[4]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1101[i + 0]) );
  }
  i1094.passes = i1100
  var i1103 = i1095[5]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1103[i + 0]) );
  }
  i1094.usePasses = i1102
  var i1105 = i1095[6]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1105[i + 0]) );
  }
  i1094.defaultParameterValues = i1104
  request.r(i1095[7], i1095[8], 0, i1094, 'unityFallbackShader')
  i1094.readDepth = !!i1095[9]
  i1094.isCreatedByShaderGraph = !!i1095[10]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1110 = root || new pc.UnityShaderPass()
  var i1111 = data
  i1110.id = i1111[0]
  i1110.subShaderIndex = i1111[1]
  i1110.name = i1111[2]
  i1110.passType = i1111[3]
  i1110.usePass = !!i1111[4]
  i1110.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[5], i1110.zTest)
  i1110.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[6], i1110.zWrite)
  i1110.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[7], i1110.culling)
  i1110.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1111[8], i1110.blending)
  i1110.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1111[9], i1110.alphaBlending)
  i1110.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[10], i1110.colorWriteMask)
  i1110.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[11], i1110.offsetUnits)
  i1110.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[12], i1110.offsetFactor)
  i1110.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[13], i1110.stencilRef)
  i1110.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[14], i1110.stencilReadMask)
  i1110.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1111[15], i1110.stencilWriteMask)
  i1110.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1111[16], i1110.stencilOp)
  i1110.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1111[17], i1110.stencilOpFront)
  i1110.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1111[18], i1110.stencilOpBack)
  var i1113 = i1111[19]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1113[i + 0]) );
  }
  i1110.tags = i1112
  var i1115 = i1111[20]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.passDefinedKeywords = i1114
  var i1117 = i1111[21]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1117[i + 0]) );
  }
  i1110.passDefinedKeywordGroups = i1116
  var i1119 = i1111[22]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1119[i + 0]) );
  }
  i1110.variants = i1118
  var i1121 = i1111[23]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1121[i + 0]) );
  }
  i1110.excludedVariants = i1120
  i1110.hasDepthReader = !!i1111[24]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1123 = data
  i1122.val = i1123[0]
  i1122.name = i1123[1]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1125 = data
  i1124.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1125[0], i1124.src)
  i1124.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1125[1], i1124.dst)
  i1124.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1125[2], i1124.op)
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1127 = data
  i1126.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[0], i1126.pass)
  i1126.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[1], i1126.fail)
  i1126.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[2], i1126.zFail)
  i1126.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[3], i1126.comp)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.value = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( i1137[i + 0] );
  }
  i1134.keywords = i1136
  i1134.hasDiscard = !!i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1141 = data
  i1140.passId = i1141[0]
  i1140.subShaderIndex = i1141[1]
  var i1143 = i1141[2]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1140.keywords = i1142
  i1140.vertexProgram = i1141[3]
  i1140.fragmentProgram = i1141[4]
  i1140.readDepth = !!i1141[5]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1147 = data
  request.r(i1147[0], i1147[1], 0, i1146, 'shader')
  i1146.pass = i1147[2]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.type = i1151[1]
  i1150.value = new pc.Vec4( i1151[2], i1151[3], i1151[4], i1151[5] )
  i1150.textureValue = i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1153 = data
  i1152.name = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'texture')
  i1152.aabb = i1153[3]
  i1152.vertices = i1153[4]
  i1152.triangles = i1153[5]
  i1152.textureRect = UnityEngine.Rect.MinMaxRect(i1153[6], i1153[7], i1153[8], i1153[9])
  i1152.packedRect = UnityEngine.Rect.MinMaxRect(i1153[10], i1153[11], i1153[12], i1153[13])
  i1152.border = new pc.Vec4( i1153[14], i1153[15], i1153[16], i1153[17] )
  i1152.transparency = i1153[18]
  i1152.bounds = i1153[19]
  i1152.pixelsPerUnit = i1153[20]
  i1152.textureWidth = i1153[21]
  i1152.textureHeight = i1153[22]
  i1152.nativeSize = new pc.Vec2( i1153[23], i1153[24] )
  i1152.pivot = new pc.Vec2( i1153[25], i1153[26] )
  i1152.textureRectOffset = new pc.Vec2( i1153[27], i1153[28] )
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1155 = data
  i1154.name = i1155[0]
  i1154.wrapMode = i1155[1]
  i1154.isLooping = !!i1155[2]
  i1154.length = i1155[3]
  var i1157 = i1155[4]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1157[i + 0]) );
  }
  i1154.curves = i1156
  var i1159 = i1155[5]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1159[i + 0]) );
  }
  i1154.events = i1158
  i1154.halfPrecision = !!i1155[6]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1163 = data
  i1162.path = i1163[0]
  i1162.componentType = i1163[1]
  i1162.property = i1163[2]
  i1162.keys = i1163[3]
  var i1165 = i1163[4]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1165[i + 0]) );
  }
  i1162.objectReferenceKeys = i1164
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1169 = data
  i1168.time = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'value')
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1173 = data
  i1172.functionName = i1173[0]
  i1172.floatParameter = i1173[1]
  i1172.intParameter = i1173[2]
  i1172.stringParameter = i1173[3]
  request.r(i1173[4], i1173[5], 0, i1172, 'objectReferenceParameter')
  i1172.time = i1173[6]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1175 = data
  i1174.name = i1175[0]
  var i1177 = i1175[1]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1177[i + 0]) );
  }
  i1174.states = i1176
  var i1179 = i1175[2]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1179[i + 0]) );
  }
  i1174.layers = i1178
  var i1181 = i1175[3]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1181[i + 0]) );
  }
  i1174.parameters = i1180
  var i1183 = i1175[4]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( i1183[i + 0] );
  }
  i1174.animationClips = i1182
  i1174.HasSubStateMachines = !!i1175[5]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1187 = data
  i1186.cycleOffset = i1187[0]
  i1186.cycleOffsetParameter = i1187[1]
  i1186.cycleOffsetParameterActive = !!i1187[2]
  i1186.mirror = !!i1187[3]
  i1186.mirrorParameter = i1187[4]
  i1186.mirrorParameterActive = !!i1187[5]
  i1186.motionId = i1187[6]
  i1186.nameHash = i1187[7]
  i1186.fullPathHash = i1187[8]
  i1186.speed = i1187[9]
  i1186.speedParameter = i1187[10]
  i1186.speedParameterActive = !!i1187[11]
  i1186.tag = i1187[12]
  i1186.name = i1187[13]
  i1186.writeDefaultValues = !!i1187[14]
  var i1189 = i1187[15]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1189[i + 0]) );
  }
  i1186.transitions = i1188
  var i1191 = i1187[16]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 2, i1190, '')
  }
  i1186.behaviours = i1190
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1195 = data
  i1194.fullPath = i1195[0]
  i1194.canTransitionToSelf = !!i1195[1]
  i1194.duration = i1195[2]
  i1194.exitTime = i1195[3]
  i1194.hasExitTime = !!i1195[4]
  i1194.hasFixedDuration = !!i1195[5]
  i1194.interruptionSource = i1195[6]
  i1194.offset = i1195[7]
  i1194.orderedInterruption = !!i1195[8]
  i1194.destinationStateNameHash = i1195[9]
  i1194.destinationStateMachineId = i1195[10]
  i1194.isExit = !!i1195[11]
  i1194.mute = !!i1195[12]
  i1194.solo = !!i1195[13]
  var i1197 = i1195[14]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1197[i + 0]) );
  }
  i1194.conditions = i1196
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1201 = data
  i1200.mode = i1201[0]
  i1200.parameter = i1201[1]
  i1200.threshold = i1201[2]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1207 = data
  i1206.blendingMode = i1207[0]
  i1206.defaultWeight = i1207[1]
  i1206.name = i1207[2]
  i1206.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1207[3], i1206.stateMachine)
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1209 = data
  i1208.id = i1209[0]
  i1208.defaultStateNameHash = i1209[1]
  var i1211 = i1209[2]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1211[i + 0]) );
  }
  i1208.entryTransitions = i1210
  var i1213 = i1209[3]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1213[i + 0]) );
  }
  i1208.anyStateTransitions = i1212
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1217 = data
  i1216.destinationStateNameHash = i1217[0]
  i1216.destinationStateMachineId = i1217[1]
  i1216.isExit = !!i1217[2]
  i1216.mute = !!i1217[3]
  i1216.solo = !!i1217[4]
  var i1219 = i1217[5]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1219[i + 0]) );
  }
  i1216.conditions = i1218
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1223 = data
  i1222.defaultBool = !!i1223[0]
  i1222.defaultFloat = i1223[1]
  i1222.defaultInt = i1223[2]
  i1222.name = i1223[3]
  i1222.nameHash = i1223[4]
  i1222.type = i1223[5]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1225 = data
  i1224.name = i1225[0]
  i1224.bytes64 = i1225[1]
  i1224.data = i1225[2]
  return i1224
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1226 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1227 = data
  i1226.hashCode = i1227[0]
  request.r(i1227[1], i1227[2], 0, i1226, 'material')
  i1226.materialHashCode = i1227[3]
  request.r(i1227[4], i1227[5], 0, i1226, 'atlas')
  i1226.normalStyle = i1227[6]
  i1226.normalSpacingOffset = i1227[7]
  i1226.boldStyle = i1227[8]
  i1226.boldSpacing = i1227[9]
  i1226.italicStyle = i1227[10]
  i1226.tabSize = i1227[11]
  i1226.m_Version = i1227[12]
  i1226.m_SourceFontFileGUID = i1227[13]
  request.r(i1227[14], i1227[15], 0, i1226, 'm_SourceFontFile_EditorRef')
  request.r(i1227[16], i1227[17], 0, i1226, 'm_SourceFontFile')
  i1226.m_AtlasPopulationMode = i1227[18]
  i1226.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1227[19], i1226.m_FaceInfo)
  var i1229 = i1227[20]
  var i1228 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.add(request.d('UnityEngine.TextCore.Glyph', i1229[i + 0]));
  }
  i1226.m_GlyphTable = i1228
  var i1231 = i1227[21]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('TMPro.TMP_Character', i1231[i + 0]));
  }
  i1226.m_CharacterTable = i1230
  var i1233 = i1227[22]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 2) {
  request.r(i1233[i + 0], i1233[i + 1], 2, i1232, '')
  }
  i1226.m_AtlasTextures = i1232
  i1226.m_AtlasTextureIndex = i1227[23]
  i1226.m_IsMultiAtlasTexturesEnabled = !!i1227[24]
  i1226.m_ClearDynamicDataOnBuild = !!i1227[25]
  var i1235 = i1227[26]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('UnityEngine.TextCore.GlyphRect', i1235[i + 0]));
  }
  i1226.m_UsedGlyphRects = i1234
  var i1237 = i1227[27]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.GlyphRect', i1237[i + 0]));
  }
  i1226.m_FreeGlyphRects = i1236
  i1226.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1227[28], i1226.m_fontInfo)
  i1226.m_AtlasWidth = i1227[29]
  i1226.m_AtlasHeight = i1227[30]
  i1226.m_AtlasPadding = i1227[31]
  i1226.m_AtlasRenderMode = i1227[32]
  var i1239 = i1227[33]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_Glyph', i1239[i + 0]));
  }
  i1226.m_glyphInfoList = i1238
  i1226.m_KerningTable = request.d('TMPro.KerningTable', i1227[34], i1226.m_KerningTable)
  i1226.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1227[35], i1226.m_FontFeatureTable)
  var i1241 = i1227[36]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 1, i1240, '')
  }
  i1226.fallbackFontAssets = i1240
  var i1243 = i1227[37]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1243.length; i += 2) {
  request.r(i1243[i + 0], i1243[i + 1], 1, i1242, '')
  }
  i1226.m_FallbackFontAssetTable = i1242
  i1226.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1227[38], i1226.m_CreationSettings)
  var i1245 = i1227[39]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('TMPro.TMP_FontWeightPair', i1245[i + 0]) );
  }
  i1226.m_FontWeightTable = i1244
  var i1247 = i1227[40]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('TMPro.TMP_FontWeightPair', i1247[i + 0]) );
  }
  i1226.fontWeights = i1246
  return i1226
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1249 = data
  i1248.m_FaceIndex = i1249[0]
  i1248.m_FamilyName = i1249[1]
  i1248.m_StyleName = i1249[2]
  i1248.m_PointSize = i1249[3]
  i1248.m_Scale = i1249[4]
  i1248.m_LineHeight = i1249[5]
  i1248.m_AscentLine = i1249[6]
  i1248.m_CapLine = i1249[7]
  i1248.m_MeanLine = i1249[8]
  i1248.m_Baseline = i1249[9]
  i1248.m_DescentLine = i1249[10]
  i1248.m_SuperscriptOffset = i1249[11]
  i1248.m_SuperscriptSize = i1249[12]
  i1248.m_SubscriptOffset = i1249[13]
  i1248.m_SubscriptSize = i1249[14]
  i1248.m_UnderlineOffset = i1249[15]
  i1248.m_UnderlineThickness = i1249[16]
  i1248.m_StrikethroughOffset = i1249[17]
  i1248.m_StrikethroughThickness = i1249[18]
  i1248.m_TabWidth = i1249[19]
  return i1248
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1253 = data
  i1252.m_Index = i1253[0]
  i1252.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1253[1], i1252.m_Metrics)
  i1252.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1253[2], i1252.m_GlyphRect)
  i1252.m_Scale = i1253[3]
  i1252.m_AtlasIndex = i1253[4]
  return i1252
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1254 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1255 = data
  i1254.m_Width = i1255[0]
  i1254.m_Height = i1255[1]
  i1254.m_HorizontalBearingX = i1255[2]
  i1254.m_HorizontalBearingY = i1255[3]
  i1254.m_HorizontalAdvance = i1255[4]
  return i1254
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1257 = data
  i1256.m_X = i1257[0]
  i1256.m_Y = i1257[1]
  i1256.m_Width = i1257[2]
  i1256.m_Height = i1257[3]
  return i1256
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1260 = root || request.c( 'TMPro.TMP_Character' )
  var i1261 = data
  i1260.m_ElementType = i1261[0]
  i1260.m_Unicode = i1261[1]
  i1260.m_GlyphIndex = i1261[2]
  i1260.m_Scale = i1261[3]
  return i1260
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1267 = data
  i1266.Name = i1267[0]
  i1266.PointSize = i1267[1]
  i1266.Scale = i1267[2]
  i1266.CharacterCount = i1267[3]
  i1266.LineHeight = i1267[4]
  i1266.Baseline = i1267[5]
  i1266.Ascender = i1267[6]
  i1266.CapHeight = i1267[7]
  i1266.Descender = i1267[8]
  i1266.CenterLine = i1267[9]
  i1266.SuperscriptOffset = i1267[10]
  i1266.SubscriptOffset = i1267[11]
  i1266.SubSize = i1267[12]
  i1266.Underline = i1267[13]
  i1266.UnderlineThickness = i1267[14]
  i1266.strikethrough = i1267[15]
  i1266.strikethroughThickness = i1267[16]
  i1266.TabWidth = i1267[17]
  i1266.Padding = i1267[18]
  i1266.AtlasWidth = i1267[19]
  i1266.AtlasHeight = i1267[20]
  return i1266
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1270 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1271 = data
  i1270.id = i1271[0]
  i1270.x = i1271[1]
  i1270.y = i1271[2]
  i1270.width = i1271[3]
  i1270.height = i1271[4]
  i1270.xOffset = i1271[5]
  i1270.yOffset = i1271[6]
  i1270.xAdvance = i1271[7]
  i1270.scale = i1271[8]
  return i1270
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.KerningTable' )
  var i1273 = data
  var i1275 = i1273[0]
  var i1274 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.add(request.d('TMPro.KerningPair', i1275[i + 0]));
  }
  i1272.kerningPairs = i1274
  return i1272
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.KerningPair' )
  var i1279 = data
  i1278.xOffset = i1279[0]
  i1278.m_FirstGlyph = i1279[1]
  i1278.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1279[2], i1278.m_FirstGlyphAdjustments)
  i1278.m_SecondGlyph = i1279[3]
  i1278.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1279[4], i1278.m_SecondGlyphAdjustments)
  i1278.m_IgnoreSpacingAdjustments = !!i1279[5]
  return i1278
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1283[i + 0]));
  }
  i1280.m_GlyphPairAdjustmentRecords = i1282
  return i1280
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1287 = data
  i1286.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1287[0], i1286.m_FirstAdjustmentRecord)
  i1286.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1287[1], i1286.m_SecondAdjustmentRecord)
  i1286.m_FeatureLookupFlags = i1287[2]
  return i1286
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1291 = data
  i1290.sourceFontFileName = i1291[0]
  i1290.sourceFontFileGUID = i1291[1]
  i1290.pointSizeSamplingMode = i1291[2]
  i1290.pointSize = i1291[3]
  i1290.padding = i1291[4]
  i1290.packingMode = i1291[5]
  i1290.atlasWidth = i1291[6]
  i1290.atlasHeight = i1291[7]
  i1290.characterSetSelectionMode = i1291[8]
  i1290.characterSequence = i1291[9]
  i1290.referencedFontAssetGUID = i1291[10]
  i1290.referencedTextAssetGUID = i1291[11]
  i1290.fontStyle = i1291[12]
  i1290.fontStyleModifier = i1291[13]
  i1290.renderMode = i1291[14]
  i1290.includeFontFeatures = !!i1291[15]
  return i1290
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'regularTypeface')
  request.r(i1295[2], i1295[3], 0, i1294, 'italicTypeface')
  return i1294
}

Deserializers["MapData"] = function (request, data, root) {
  var i1296 = root || request.c( 'MapData' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('MapData+mapData', i1299[i + 0]));
  }
  i1296.mapDataList = i1298
  return i1296
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i1302 = root || request.c( 'MapData+mapData' )
  var i1303 = data
  i1302.tier = i1303[0]
  i1302.minMapSize = new pc.Vec3( i1303[1], i1303[2], i1303[3] )
  i1302.maxMapSize = new pc.Vec3( i1303[4], i1303[5], i1303[6] )
  return i1302
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_Settings' )
  var i1305 = data
  i1304.m_enableWordWrapping = !!i1305[0]
  i1304.m_enableKerning = !!i1305[1]
  i1304.m_enableExtraPadding = !!i1305[2]
  i1304.m_enableTintAllSprites = !!i1305[3]
  i1304.m_enableParseEscapeCharacters = !!i1305[4]
  i1304.m_EnableRaycastTarget = !!i1305[5]
  i1304.m_GetFontFeaturesAtRuntime = !!i1305[6]
  i1304.m_missingGlyphCharacter = i1305[7]
  i1304.m_warningsDisabled = !!i1305[8]
  request.r(i1305[9], i1305[10], 0, i1304, 'm_defaultFontAsset')
  i1304.m_defaultFontAssetPath = i1305[11]
  i1304.m_defaultFontSize = i1305[12]
  i1304.m_defaultAutoSizeMinRatio = i1305[13]
  i1304.m_defaultAutoSizeMaxRatio = i1305[14]
  i1304.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1305[15], i1305[16] )
  i1304.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1305[17], i1305[18] )
  i1304.m_autoSizeTextContainer = !!i1305[19]
  i1304.m_IsTextObjectScaleStatic = !!i1305[20]
  var i1307 = i1305[21]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1307.length; i += 2) {
  request.r(i1307[i + 0], i1307[i + 1], 1, i1306, '')
  }
  i1304.m_fallbackFontAssets = i1306
  i1304.m_matchMaterialPreset = !!i1305[22]
  request.r(i1305[23], i1305[24], 0, i1304, 'm_defaultSpriteAsset')
  i1304.m_defaultSpriteAssetPath = i1305[25]
  i1304.m_enableEmojiSupport = !!i1305[26]
  i1304.m_MissingCharacterSpriteUnicode = i1305[27]
  i1304.m_defaultColorGradientPresetsPath = i1305[28]
  request.r(i1305[29], i1305[30], 0, i1304, 'm_defaultStyleSheet')
  i1304.m_StyleSheetsResourcePath = i1305[31]
  request.r(i1305[32], i1305[33], 0, i1304, 'm_leadingCharacters')
  request.r(i1305[34], i1305[35], 0, i1304, 'm_followingCharacters')
  i1304.m_UseModernHangulLineBreakingRules = !!i1305[36]
  return i1304
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1308 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1309 = data
  i1308.hashCode = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'material')
  i1308.materialHashCode = i1309[3]
  request.r(i1309[4], i1309[5], 0, i1308, 'spriteSheet')
  var i1311 = i1309[6]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.TMP_Sprite', i1311[i + 0]));
  }
  i1308.spriteInfoList = i1310
  var i1313 = i1309[7]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1313.length; i += 2) {
  request.r(i1313[i + 0], i1313[i + 1], 1, i1312, '')
  }
  i1308.fallbackSpriteAssets = i1312
  i1308.m_Version = i1309[8]
  i1308.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1309[9], i1308.m_FaceInfo)
  var i1315 = i1309[10]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('TMPro.TMP_SpriteCharacter', i1315[i + 0]));
  }
  i1308.m_SpriteCharacterTable = i1314
  var i1317 = i1309[11]
  var i1316 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.add(request.d('TMPro.TMP_SpriteGlyph', i1317[i + 0]));
  }
  i1308.m_SpriteGlyphTable = i1316
  return i1308
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1321 = data
  i1320.name = i1321[0]
  i1320.hashCode = i1321[1]
  i1320.unicode = i1321[2]
  i1320.pivot = new pc.Vec2( i1321[3], i1321[4] )
  request.r(i1321[5], i1321[6], 0, i1320, 'sprite')
  i1320.id = i1321[7]
  i1320.x = i1321[8]
  i1320.y = i1321[9]
  i1320.width = i1321[10]
  i1320.height = i1321[11]
  i1320.xOffset = i1321[12]
  i1320.yOffset = i1321[13]
  i1320.xAdvance = i1321[14]
  i1320.scale = i1321[15]
  return i1320
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1327 = data
  i1326.m_Name = i1327[0]
  i1326.m_HashCode = i1327[1]
  i1326.m_ElementType = i1327[2]
  i1326.m_Unicode = i1327[3]
  i1326.m_GlyphIndex = i1327[4]
  i1326.m_Scale = i1327[5]
  return i1326
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1330 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1331 = data
  request.r(i1331[0], i1331[1], 0, i1330, 'sprite')
  i1330.m_Index = i1331[2]
  i1330.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1331[3], i1330.m_Metrics)
  i1330.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1331[4], i1330.m_GlyphRect)
  i1330.m_Scale = i1331[5]
  i1330.m_AtlasIndex = i1331[6]
  return i1330
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1333 = data
  var i1335 = i1333[0]
  var i1334 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.add(request.d('TMPro.TMP_Style', i1335[i + 0]));
  }
  i1332.m_StyleList = i1334
  return i1332
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_Style' )
  var i1339 = data
  i1338.m_Name = i1339[0]
  i1338.m_HashCode = i1339[1]
  i1338.m_OpeningDefinition = i1339[2]
  i1338.m_ClosingDefinition = i1339[3]
  i1338.m_OpeningTagArray = i1339[4]
  i1338.m_ClosingTagArray = i1339[5]
  i1338.m_OpeningTagUnicodeArray = i1339[6]
  i1338.m_ClosingTagUnicodeArray = i1339[7]
  return i1338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1343[i + 0]) );
  }
  i1340.files = i1342
  i1340.componentToPrefabIds = i1341[1]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1347 = data
  i1346.path = i1347[0]
  request.r(i1347[1], i1347[2], 0, i1346, 'unityObject')
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1351[i + 0]) );
  }
  i1348.scriptsExecutionOrder = i1350
  var i1353 = i1349[1]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1353[i + 0]) );
  }
  i1348.sortingLayers = i1352
  var i1355 = i1349[2]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1355[i + 0]) );
  }
  i1348.cullingLayers = i1354
  i1348.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1349[3], i1348.timeSettings)
  i1348.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1349[4], i1348.physicsSettings)
  i1348.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1349[5], i1348.physics2DSettings)
  i1348.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1349[6], i1348.qualitySettings)
  i1348.enableRealtimeShadows = !!i1349[7]
  i1348.autoInstantiatePrefabs = !!i1349[8]
  i1348.enableAutoInstancing = !!i1349[9]
  i1348.lightmapEncodingQuality = i1349[10]
  i1348.desiredColorSpace = i1349[11]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1359 = data
  i1358.name = i1359[0]
  i1358.value = i1359[1]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1363 = data
  i1362.id = i1363[0]
  i1362.name = i1363[1]
  i1362.value = i1363[2]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1367 = data
  i1366.id = i1367[0]
  i1366.name = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1369 = data
  i1368.fixedDeltaTime = i1369[0]
  i1368.maximumDeltaTime = i1369[1]
  i1368.timeScale = i1369[2]
  i1368.maximumParticleTimestep = i1369[3]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1371 = data
  i1370.gravity = new pc.Vec3( i1371[0], i1371[1], i1371[2] )
  i1370.defaultSolverIterations = i1371[3]
  i1370.bounceThreshold = i1371[4]
  i1370.autoSyncTransforms = !!i1371[5]
  i1370.autoSimulation = !!i1371[6]
  var i1373 = i1371[7]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1373[i + 0]) );
  }
  i1370.collisionMatrix = i1372
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1377 = data
  i1376.enabled = !!i1377[0]
  i1376.layerId = i1377[1]
  i1376.otherLayerId = i1377[2]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1379 = data
  request.r(i1379[0], i1379[1], 0, i1378, 'material')
  i1378.gravity = new pc.Vec2( i1379[2], i1379[3] )
  i1378.positionIterations = i1379[4]
  i1378.velocityIterations = i1379[5]
  i1378.velocityThreshold = i1379[6]
  i1378.maxLinearCorrection = i1379[7]
  i1378.maxAngularCorrection = i1379[8]
  i1378.maxTranslationSpeed = i1379[9]
  i1378.maxRotationSpeed = i1379[10]
  i1378.timeToSleep = i1379[11]
  i1378.linearSleepTolerance = i1379[12]
  i1378.angularSleepTolerance = i1379[13]
  i1378.defaultContactOffset = i1379[14]
  i1378.autoSimulation = !!i1379[15]
  i1378.queriesHitTriggers = !!i1379[16]
  i1378.queriesStartInColliders = !!i1379[17]
  i1378.callbacksOnDisable = !!i1379[18]
  i1378.reuseCollisionCallbacks = !!i1379[19]
  i1378.autoSyncTransforms = !!i1379[20]
  var i1381 = i1379[21]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1381[i + 0]) );
  }
  i1378.collisionMatrix = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.layerId = i1385[1]
  i1384.otherLayerId = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1389[i + 0]) );
  }
  i1386.qualityLevels = i1388
  var i1391 = i1387[1]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( i1391[i + 0] );
  }
  i1386.names = i1390
  i1386.shadows = i1387[2]
  i1386.anisotropicFiltering = i1387[3]
  i1386.antiAliasing = i1387[4]
  i1386.lodBias = i1387[5]
  i1386.shadowCascades = i1387[6]
  i1386.shadowDistance = i1387[7]
  i1386.shadowmaskMode = i1387[8]
  i1386.shadowProjection = i1387[9]
  i1386.shadowResolution = i1387[10]
  i1386.softParticles = !!i1387[11]
  i1386.softVegetation = !!i1387[12]
  i1386.activeColorSpace = i1387[13]
  i1386.desiredColorSpace = i1387[14]
  i1386.masterTextureLimit = i1387[15]
  i1386.maxQueuedFrames = i1387[16]
  i1386.particleRaycastBudget = i1387[17]
  i1386.pixelLightCount = i1387[18]
  i1386.realtimeReflectionProbes = !!i1387[19]
  i1386.shadowCascade2Split = i1387[20]
  i1386.shadowCascade4Split = new pc.Vec3( i1387[21], i1387[22], i1387[23] )
  i1386.streamingMipmapsActive = !!i1387[24]
  i1386.vSyncCount = i1387[25]
  i1386.asyncUploadBufferSize = i1387[26]
  i1386.asyncUploadTimeSlice = i1387[27]
  i1386.billboardsFaceCameraPosition = !!i1387[28]
  i1386.shadowNearPlaneOffset = i1387[29]
  i1386.streamingMipmapsMemoryBudget = i1387[30]
  i1386.maximumLODLevel = i1387[31]
  i1386.streamingMipmapsAddAllCameras = !!i1387[32]
  i1386.streamingMipmapsMaxLevelReduction = i1387[33]
  i1386.streamingMipmapsRenderersPerFrame = i1387[34]
  i1386.resolutionScalingFixedDPIFactor = i1387[35]
  i1386.streamingMipmapsMaxFileIORequests = i1387[36]
  i1386.currentQualityLevel = i1387[37]
  return i1386
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1395 = data
  i1394.xPlacement = i1395[0]
  i1394.yPlacement = i1395[1]
  i1394.xAdvance = i1395[2]
  i1394.yAdvance = i1395[3]
  return i1394
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1396 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1397 = data
  i1396.m_GlyphIndex = i1397[0]
  i1396.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1397[1], i1396.m_GlyphValueRecord)
  return i1396
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1398 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1399 = data
  i1398.m_XPlacement = i1399[0]
  i1398.m_YPlacement = i1399[1]
  i1398.m_XAdvance = i1399[2]
  i1398.m_YAdvance = i1399[3]
  return i1398
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[18],"80":[48],"21":[20],"81":[20],"82":[20],"83":[20],"84":[20],"85":[20],"86":[20],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[88],"96":[88],"97":[88],"98":[88],"99":[88],"100":[88],"101":[48],"102":[8],"103":[104],"105":[104],"47":[22],"106":[9],"107":[9],"108":[9],"109":[9],"110":[22],"111":[8,22],"25":[22,23],"112":[22],"113":[23,22],"114":[8],"115":[23,22],"116":[22],"117":[22],"118":[22],"50":[47],"27":[23,22],"119":[22],"49":[47],"120":[22],"121":[22],"122":[22],"123":[22],"124":[22],"125":[22],"126":[22],"127":[22],"128":[22],"129":[23,22],"130":[22],"131":[22],"132":[22],"44":[22],"133":[23,22],"134":[22],"135":[45],"136":[45],"46":[45],"137":[45],"138":[48],"139":[48],"140":[141],"142":[22],"143":[141],"144":[48],"145":[146],"147":[141]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","AnimationController","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","FishingRod","UnityEngine.GameObject","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","LowLineRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "60.1";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1167";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4519";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "8e3f0f29-8d0a-4db7-aabb-3ea32f554afe";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

