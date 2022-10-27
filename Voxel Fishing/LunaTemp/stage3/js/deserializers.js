var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointSpring' )
  var i705 = data
  i704.spring = i705[0]
  i704.damper = i705[1]
  i704.targetPosition = i705[2]
  return i704
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointMotor' )
  var i707 = data
  i706.m_TargetVelocity = i707[0]
  i706.m_Force = i707[1]
  i706.m_FreeSpin = i707[2]
  return i706
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointLimits' )
  var i709 = data
  i708.m_Min = i709[0]
  i708.m_Max = i709[1]
  i708.m_Bounciness = i709[2]
  i708.m_BounceMinVelocity = i709[3]
  i708.m_ContactDistance = i709[4]
  i708.minBounce = i709[5]
  i708.maxBounce = i709[6]
  return i708
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointDrive' )
  var i711 = data
  i710.m_PositionSpring = i711[0]
  i710.m_PositionDamper = i711[1]
  i710.m_MaximumForce = i711[2]
  return i710
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i713 = data
  i712.m_Spring = i713[0]
  i712.m_Damper = i713[1]
  return i712
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i715 = data
  i714.m_Limit = i715[0]
  i714.m_Bounciness = i715[1]
  i714.m_ContactDistance = i715[2]
  return i714
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i717 = data
  i716.m_ExtremumSlip = i717[0]
  i716.m_ExtremumValue = i717[1]
  i716.m_AsymptoteSlip = i717[2]
  i716.m_AsymptoteValue = i717[3]
  i716.m_Stiffness = i717[4]
  return i716
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i719 = data
  i718.m_LowerAngle = i719[0]
  i718.m_UpperAngle = i719[1]
  return i718
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i721 = data
  i720.m_MotorSpeed = i721[0]
  i720.m_MaximumMotorTorque = i721[1]
  return i720
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i723 = data
  i722.m_DampingRatio = i723[0]
  i722.m_Frequency = i723[1]
  i722.m_Angle = i723[2]
  return i722
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i725 = data
  i724.m_LowerTranslation = i725[0]
  i724.m_UpperTranslation = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i726 = root || new pc.UnityMaterial()
  var i727 = data
  i726.name = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'shader')
  i726.renderQueue = i727[3]
  i726.enableInstancing = !!i727[4]
  var i729 = i727[5]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i729[i + 0]) );
  }
  i726.floatParameters = i728
  var i731 = i727[6]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i731[i + 0]) );
  }
  i726.colorParameters = i730
  var i733 = i727[7]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i733[i + 0]) );
  }
  i726.vectorParameters = i732
  var i735 = i727[8]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i735[i + 0]) );
  }
  i726.textureParameters = i734
  var i737 = i727[9]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i737[i + 0]) );
  }
  i726.materialFlags = i736
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i741 = data
  i740.name = i741[0]
  i740.value = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i745 = data
  i744.name = i745[0]
  i744.value = new pc.Color(i745[1], i745[2], i745[3], i745[4])
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i749 = data
  i748.name = i749[0]
  i748.value = new pc.Vec4( i749[1], i749[2], i749[3], i749[4] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i753 = data
  i752.name = i753[0]
  request.r(i753[1], i753[2], 0, i752, 'value')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i757 = data
  i756.name = i757[0]
  i756.enabled = !!i757[1]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i759 = data
  i758.position = new pc.Vec3( i759[0], i759[1], i759[2] )
  i758.scale = new pc.Vec3( i759[3], i759[4], i759[5] )
  i758.rotation = new pc.Quat(i759[6], i759[7], i759[8], i759[9])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i761 = data
  i760.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i761[0], i760.main)
  i760.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i761[1], i760.colorBySpeed)
  i760.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i761[2], i760.colorOverLifetime)
  i760.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i761[3], i760.emission)
  i760.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i761[4], i760.rotationBySpeed)
  i760.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i761[5], i760.rotationOverLifetime)
  i760.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i761[6], i760.shape)
  i760.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i761[7], i760.sizeBySpeed)
  i760.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i761[8], i760.sizeOverLifetime)
  i760.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i761[9], i760.textureSheetAnimation)
  i760.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i761[10], i760.velocityOverLifetime)
  i760.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i761[11], i760.noise)
  i760.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i761[12], i760.inheritVelocity)
  i760.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i761[13], i760.forceOverLifetime)
  i760.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i761[14], i760.limitVelocityOverLifetime)
  i760.useAutoRandomSeed = !!i761[15]
  i760.randomSeed = i761[16]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i762 = root || new pc.ParticleSystemMain()
  var i763 = data
  i762.duration = i763[0]
  i762.loop = !!i763[1]
  i762.prewarm = !!i763[2]
  i762.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[3], i762.startDelay)
  i762.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[4], i762.startLifetime)
  i762.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[5], i762.startSpeed)
  i762.startSize3D = !!i763[6]
  i762.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[7], i762.startSizeX)
  i762.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[8], i762.startSizeY)
  i762.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[9], i762.startSizeZ)
  i762.startRotation3D = !!i763[10]
  i762.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[11], i762.startRotationX)
  i762.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[12], i762.startRotationY)
  i762.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[13], i762.startRotationZ)
  i762.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i763[14], i762.startColor)
  i762.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i763[15], i762.gravityModifier)
  i762.simulationSpace = i763[16]
  request.r(i763[17], i763[18], 0, i762, 'customSimulationSpace')
  i762.simulationSpeed = i763[19]
  i762.useUnscaledTime = !!i763[20]
  i762.scalingMode = i763[21]
  i762.playOnAwake = !!i763[22]
  i762.maxParticles = i763[23]
  i762.emitterVelocityMode = i763[24]
  i762.stopAction = i763[25]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i764 = root || new pc.MinMaxCurve()
  var i765 = data
  i764.mode = i765[0]
  i764.curveMin = new pc.AnimationCurve( { keys_flow: i765[1] } )
  i764.curveMax = new pc.AnimationCurve( { keys_flow: i765[2] } )
  i764.curveMultiplier = i765[3]
  i764.constantMin = i765[4]
  i764.constantMax = i765[5]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i766 = root || new pc.MinMaxGradient()
  var i767 = data
  i766.mode = i767[0]
  i766.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[1], i766.gradientMin)
  i766.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i767[2], i766.gradientMax)
  i766.colorMin = new pc.Color(i767[3], i767[4], i767[5], i767[6])
  i766.colorMax = new pc.Color(i767[7], i767[8], i767[9], i767[10])
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i769 = data
  i768.mode = i769[0]
  var i771 = i769[1]
  var i770 = []
  for(var i = 0; i < i771.length; i += 1) {
    i770.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i771[i + 0]) );
  }
  i768.colorKeys = i770
  var i773 = i769[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i773[i + 0]) );
  }
  i768.alphaKeys = i772
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i774 = root || new pc.ParticleSystemColorBySpeed()
  var i775 = data
  i774.enabled = !!i775[0]
  i774.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i775[1], i774.color)
  i774.range = new pc.Vec2( i775[2], i775[3] )
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i779 = data
  i778.color = new pc.Color(i779[0], i779[1], i779[2], i779[3])
  i778.time = i779[4]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i783 = data
  i782.alpha = i783[0]
  i782.time = i783[1]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemColorOverLifetime()
  var i785 = data
  i784.enabled = !!i785[0]
  i784.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i785[1], i784.color)
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemEmitter()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.rateOverTime)
  i786.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.rateOverDistance)
  var i789 = i787[3]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i789[i + 0]) );
  }
  i786.bursts = i788
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemBurst()
  var i793 = data
  i792.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[0], i792.count)
  i792.cycleCount = i793[1]
  i792.minCount = i793[2]
  i792.maxCount = i793[3]
  i792.repeatInterval = i793[4]
  i792.time = i793[5]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemRotationBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemRotationOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemShape()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.shapeType = i799[1]
  i798.randomDirectionAmount = i799[2]
  i798.sphericalDirectionAmount = i799[3]
  i798.randomPositionAmount = i799[4]
  i798.alignToDirection = !!i799[5]
  i798.radius = i799[6]
  i798.radiusMode = i799[7]
  i798.radiusSpread = i799[8]
  i798.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[9], i798.radiusSpeed)
  i798.radiusThickness = i799[10]
  i798.angle = i799[11]
  i798.length = i799[12]
  i798.boxThickness = new pc.Vec3( i799[13], i799[14], i799[15] )
  i798.meshShapeType = i799[16]
  request.r(i799[17], i799[18], 0, i798, 'mesh')
  request.r(i799[19], i799[20], 0, i798, 'meshRenderer')
  request.r(i799[21], i799[22], 0, i798, 'skinnedMeshRenderer')
  i798.useMeshMaterialIndex = !!i799[23]
  i798.meshMaterialIndex = i799[24]
  i798.useMeshColors = !!i799[25]
  i798.normalOffset = i799[26]
  i798.arc = i799[27]
  i798.arcMode = i799[28]
  i798.arcSpread = i799[29]
  i798.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[30], i798.arcSpeed)
  i798.donutRadius = i799[31]
  i798.position = new pc.Vec3( i799[32], i799[33], i799[34] )
  i798.rotation = new pc.Vec3( i799[35], i799[36], i799[37] )
  i798.scale = new pc.Vec3( i799[38], i799[39], i799[40] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemSizeBySpeed()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  i800.range = new pc.Vec2( i801[5], i801[6] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemSizeOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.mode = i805[1]
  i804.animation = i805[2]
  i804.numTilesX = i805[3]
  i804.numTilesY = i805[4]
  i804.useRandomRow = !!i805[5]
  i804.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[6], i804.frameOverTime)
  i804.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.startFrame)
  i804.cycleCount = i805[8]
  i804.rowIndex = i805[9]
  i804.flipU = i805[10]
  i804.flipV = i805[11]
  i804.spriteCount = i805[12]
  var i807 = i805[13]
  var i806 = []
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 2, i806, '')
  }
  i804.sprites = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.speedModifier)
  i810.space = i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemNoise()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.separateAxes = !!i813[1]
  i812.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.strengthX)
  i812.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.strengthY)
  i812.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.strengthZ)
  i812.frequency = i813[5]
  i812.damping = !!i813[6]
  i812.octaveCount = i813[7]
  i812.octaveMultiplier = i813[8]
  i812.octaveScale = i813[9]
  i812.quality = i813[10]
  i812.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[11], i812.scrollSpeed)
  i812.scrollSpeedMultiplier = i813[12]
  i812.remapEnabled = !!i813[13]
  i812.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[14], i812.remapX)
  i812.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[15], i812.remapY)
  i812.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[16], i812.remapZ)
  i812.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[17], i812.positionAmount)
  i812.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[18], i812.rotationAmount)
  i812.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[19], i812.sizeAmount)
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemInheritVelocity()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.mode = i815[1]
  i814.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.curve)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemForceOverLifetime()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[1], i816.x)
  i816.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.y)
  i816.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.z)
  i816.space = i817[4]
  i816.randomized = !!i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.limitX)
  i818.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.limitY)
  i818.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.limitZ)
  i818.dampen = i819[4]
  i818.separateAxes = !!i819[5]
  i818.space = i819[6]
  i818.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[7], i818.drag)
  i818.multiplyDragByParticleSize = !!i819[8]
  i818.multiplyDragByParticleVelocity = !!i819[9]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i821 = data
  i820.enabled = !!i821[0]
  request.r(i821[1], i821[2], 0, i820, 'sharedMaterial')
  var i823 = i821[3]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.sharedMaterials = i822
  i820.receiveShadows = !!i821[4]
  i820.shadowCastingMode = i821[5]
  i820.sortingLayerID = i821[6]
  i820.sortingOrder = i821[7]
  i820.lightmapIndex = i821[8]
  i820.lightmapSceneIndex = i821[9]
  i820.lightmapScaleOffset = new pc.Vec4( i821[10], i821[11], i821[12], i821[13] )
  i820.lightProbeUsage = i821[14]
  i820.reflectionProbeUsage = i821[15]
  request.r(i821[16], i821[17], 0, i820, 'mesh')
  i820.meshCount = i821[18]
  i820.activeVertexStreamsCount = i821[19]
  i820.alignment = i821[20]
  i820.renderMode = i821[21]
  i820.sortMode = i821[22]
  i820.lengthScale = i821[23]
  i820.velocityScale = i821[24]
  i820.cameraVelocityScale = i821[25]
  i820.normalDirection = i821[26]
  i820.sortingFudge = i821[27]
  i820.minParticleSize = i821[28]
  i820.maxParticleSize = i821[29]
  i820.pivot = new pc.Vec3( i821[30], i821[31], i821[32] )
  request.r(i821[33], i821[34], 0, i820, 'trailMaterial')
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i827 = data
  i826.name = i827[0]
  i826.tag = i827[1]
  i826.enabled = !!i827[2]
  i826.isStatic = !!i827[3]
  i826.layer = i827[4]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i829 = data
  i828.name = i829[0]
  i828.width = i829[1]
  i828.height = i829[2]
  i828.mipmapCount = i829[3]
  i828.anisoLevel = i829[4]
  i828.filterMode = i829[5]
  i828.hdr = !!i829[6]
  i828.format = i829[7]
  i828.wrapMode = i829[8]
  i828.alphaIsTransparency = !!i829[9]
  i828.alphaSource = i829[10]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'sharedMesh')
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'additionalVertexStreams')
  i832.enabled = !!i833[2]
  request.r(i833[3], i833[4], 0, i832, 'sharedMaterial')
  var i835 = i833[5]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i832.sharedMaterials = i834
  i832.receiveShadows = !!i833[6]
  i832.shadowCastingMode = i833[7]
  i832.sortingLayerID = i833[8]
  i832.sortingOrder = i833[9]
  i832.lightmapIndex = i833[10]
  i832.lightmapSceneIndex = i833[11]
  i832.lightmapScaleOffset = new pc.Vec4( i833[12], i833[13], i833[14], i833[15] )
  i832.lightProbeUsage = i833[16]
  i832.reflectionProbeUsage = i833[17]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i837 = data
  i836.name = i837[0]
  i836.halfPrecision = !!i837[1]
  i836.vertexCount = i837[2]
  i836.aabb = i837[3]
  var i839 = i837[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( !!i839[i + 0] );
  }
  i836.streams = i838
  i836.vertices = i837[5]
  var i841 = i837[6]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i841[i + 0]) );
  }
  i836.subMeshes = i840
  var i843 = i837[7]
  var i842 = []
  for(var i = 0; i < i843.length; i += 16) {
    i842.push( new pc.Mat4().setData(i843[i + 0], i843[i + 1], i843[i + 2], i843[i + 3],  i843[i + 4], i843[i + 5], i843[i + 6], i843[i + 7],  i843[i + 8], i843[i + 9], i843[i + 10], i843[i + 11],  i843[i + 12], i843[i + 13], i843[i + 14], i843[i + 15]) );
  }
  i836.bindposes = i842
  var i845 = i837[8]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i845[i + 0]) );
  }
  i836.blendShapes = i844
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i851 = data
  i850.triangles = i851[0]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i857 = data
  i856.name = i857[0]
  var i859 = i857[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i859[i + 0]) );
  }
  i856.frames = i858
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i861 = data
  i860.textureMode = i861[0]
  i860.alignment = i861[1]
  i860.widthCurve = new pc.AnimationCurve( { keys_flow: i861[2] } )
  i860.colorGradient = i861[3] ? new pc.ColorGradient(i861[3][0], i861[3][1], i861[3][2]) : null
  var i863 = i861[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 3) {
    i862.push( new pc.Vec3( i863[i + 0], i863[i + 1], i863[i + 2] ) );
  }
  i860.positions = i862
  i860.positionCount = i861[5]
  i860.widthMultiplier = i861[6]
  i860.startWidth = i861[7]
  i860.endWidth = i861[8]
  i860.numCornerVertices = i861[9]
  i860.numCapVertices = i861[10]
  i860.useWorldSpace = !!i861[11]
  i860.loop = !!i861[12]
  i860.startColor = new pc.Color(i861[13], i861[14], i861[15], i861[16])
  i860.endColor = new pc.Color(i861[17], i861[18], i861[19], i861[20])
  i860.generateLightingData = !!i861[21]
  i860.enabled = !!i861[22]
  request.r(i861[23], i861[24], 0, i860, 'sharedMaterial')
  var i865 = i861[25]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i860.sharedMaterials = i864
  i860.receiveShadows = !!i861[26]
  i860.shadowCastingMode = i861[27]
  i860.sortingLayerID = i861[28]
  i860.sortingOrder = i861[29]
  i860.lightmapIndex = i861[30]
  i860.lightmapSceneIndex = i861[31]
  i860.lightmapScaleOffset = new pc.Vec4( i861[32], i861[33], i861[34], i861[35] )
  i860.lightProbeUsage = i861[36]
  i860.reflectionProbeUsage = i861[37]
  return i860
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i868 = root || request.c( 'RopeBridge' )
  var i869 = data
  request.r(i869[0], i869[1], 0, i868, 'StartPoint')
  request.r(i869[2], i869[3], 0, i868, 'EndPoint')
  i868.ropeSegLen = i869[4]
  i868.segmentLength = i869[5]
  i868.lineWidth = i869[6]
  i868.distOfStartToEnd = i869[7]
  i868.lineLengthMultifly = i869[8]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'animatorController')
  i870.updateMode = i871[2]
  var i873 = i871[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.humanBones = i872
  i870.enabled = !!i871[4]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i877 = data
  i876.playAutomatically = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'clip')
  var i879 = i877[3]
  var i878 = []
  for(var i = 0; i < i879.length; i += 2) {
  request.r(i879[i + 0], i879[i + 1], 2, i878, '')
  }
  i876.clips = i878
  i876.wrapMode = i877[4]
  i876.enabled = !!i877[5]
  return i876
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i882 = root || request.c( 'AnimationController' )
  var i883 = data
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i885 = data
  i884.center = new pc.Vec3( i885[0], i885[1], i885[2] )
  i884.size = new pc.Vec3( i885[3], i885[4], i885[5] )
  i884.enabled = !!i885[6]
  i884.isTrigger = !!i885[7]
  request.r(i885[8], i885[9], 0, i884, 'material')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i887 = data
  i886.enabled = !!i887[0]
  request.r(i887[1], i887[2], 0, i886, 'sharedMaterial')
  var i889 = i887[3]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i886.sharedMaterials = i888
  i886.receiveShadows = !!i887[4]
  i886.shadowCastingMode = i887[5]
  i886.sortingLayerID = i887[6]
  i886.sortingOrder = i887[7]
  i886.lightmapIndex = i887[8]
  i886.lightmapSceneIndex = i887[9]
  i886.lightmapScaleOffset = new pc.Vec4( i887[10], i887[11], i887[12], i887[13] )
  i886.lightProbeUsage = i887[14]
  i886.reflectionProbeUsage = i887[15]
  request.r(i887[16], i887[17], 0, i886, 'sharedMesh')
  var i891 = i887[18]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i886.bones = i890
  i886.updateWhenOffscreen = !!i887[19]
  i886.localBounds = i887[20]
  request.r(i887[21], i887[22], 0, i886, 'rootBone')
  var i893 = i887[23]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i893[i + 0]) );
  }
  i886.blendShapesWeights = i892
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i897 = data
  i896.weight = i897[0]
  return i896
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i898 = root || request.c( 'FishingLine' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, 'line')
  request.r(i899[2], i899[3], 0, i898, 'startPoint')
  request.r(i899[4], i899[5], 0, i898, 'endPoint')
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i901 = data
  i900.mass = i901[0]
  i900.drag = i901[1]
  i900.angularDrag = i901[2]
  i900.useGravity = !!i901[3]
  i900.isKinematic = !!i901[4]
  i900.constraints = i901[5]
  i900.maxAngularVelocity = i901[6]
  i900.collisionDetectionMode = i901[7]
  i900.interpolation = i901[8]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i903 = data
  i902.swingAxis = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i903[3], i902.twistLimitSpring)
  i902.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i903[4], i902.swingLimitSpring)
  i902.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i903[5], i902.lowTwistLimit)
  i902.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i903[6], i902.highTwistLimit)
  i902.swing1Limit = request.d('UnityEngine.SoftJointLimit', i903[7], i902.swing1Limit)
  i902.swing2Limit = request.d('UnityEngine.SoftJointLimit', i903[8], i902.swing2Limit)
  request.r(i903[9], i903[10], 0, i902, 'connectedBody')
  i902.axis = new pc.Vec3( i903[11], i903[12], i903[13] )
  i902.anchor = new pc.Vec3( i903[14], i903[15], i903[16] )
  i902.connectedAnchor = new pc.Vec3( i903[17], i903[18], i903[19] )
  i902.autoConfigureConnectedAnchor = !!i903[20]
  i902.massScale = i903[21]
  i902.connectedMassScale = i903[22]
  i902.enableCollision = !!i903[23]
  i902.breakForce = i903[24]
  i902.breakTorque = i903[25]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i907 = data
  i906.weight = i907[0]
  i906.vertices = i907[1]
  i906.normals = i907[2]
  i906.tangents = i907[3]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i909 = data
  i908.pivot = new pc.Vec2( i909[0], i909[1] )
  i908.anchorMin = new pc.Vec2( i909[2], i909[3] )
  i908.anchorMax = new pc.Vec2( i909[4], i909[5] )
  i908.sizeDelta = new pc.Vec2( i909[6], i909[7] )
  i908.anchoredPosition3D = new pc.Vec3( i909[8], i909[9], i909[10] )
  i908.rotation = new pc.Quat(i909[11], i909[12], i909[13], i909[14])
  i908.scale = new pc.Vec3( i909[15], i909[16], i909[17] )
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i911 = data
  i910.cullTransparentMesh = !!i911[0]
  return i910
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i913 = data
  i912.m_hasFontAssetChanged = !!i913[0]
  request.r(i913[1], i913[2], 0, i912, 'm_baseMaterial')
  i912.m_maskOffset = new pc.Vec4( i913[3], i913[4], i913[5], i913[6] )
  i912.m_text = i913[7]
  i912.m_isRightToLeft = !!i913[8]
  request.r(i913[9], i913[10], 0, i912, 'm_fontAsset')
  request.r(i913[11], i913[12], 0, i912, 'm_sharedMaterial')
  var i915 = i913[13]
  var i914 = []
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 2, i914, '')
  }
  i912.m_fontSharedMaterials = i914
  request.r(i913[14], i913[15], 0, i912, 'm_fontMaterial')
  var i917 = i913[16]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i912.m_fontMaterials = i916
  i912.m_fontColor32 = UnityEngine.Color32.ConstructColor(i913[17], i913[18], i913[19], i913[20])
  i912.m_fontColor = new pc.Color(i913[21], i913[22], i913[23], i913[24])
  i912.m_enableVertexGradient = !!i913[25]
  i912.m_colorMode = i913[26]
  i912.m_fontColorGradient = request.d('TMPro.VertexGradient', i913[27], i912.m_fontColorGradient)
  request.r(i913[28], i913[29], 0, i912, 'm_fontColorGradientPreset')
  request.r(i913[30], i913[31], 0, i912, 'm_spriteAsset')
  i912.m_tintAllSprites = !!i913[32]
  request.r(i913[33], i913[34], 0, i912, 'm_StyleSheet')
  i912.m_TextStyleHashCode = i913[35]
  i912.m_overrideHtmlColors = !!i913[36]
  i912.m_faceColor = UnityEngine.Color32.ConstructColor(i913[37], i913[38], i913[39], i913[40])
  i912.m_fontSize = i913[41]
  i912.m_fontSizeBase = i913[42]
  i912.m_fontWeight = i913[43]
  i912.m_enableAutoSizing = !!i913[44]
  i912.m_fontSizeMin = i913[45]
  i912.m_fontSizeMax = i913[46]
  i912.m_fontStyle = i913[47]
  i912.m_HorizontalAlignment = i913[48]
  i912.m_VerticalAlignment = i913[49]
  i912.m_textAlignment = i913[50]
  i912.m_characterSpacing = i913[51]
  i912.m_wordSpacing = i913[52]
  i912.m_lineSpacing = i913[53]
  i912.m_lineSpacingMax = i913[54]
  i912.m_paragraphSpacing = i913[55]
  i912.m_charWidthMaxAdj = i913[56]
  i912.m_enableWordWrapping = !!i913[57]
  i912.m_wordWrappingRatios = i913[58]
  i912.m_overflowMode = i913[59]
  request.r(i913[60], i913[61], 0, i912, 'm_linkedTextComponent')
  request.r(i913[62], i913[63], 0, i912, 'parentLinkedComponent')
  i912.m_enableKerning = !!i913[64]
  i912.m_enableExtraPadding = !!i913[65]
  i912.checkPaddingRequired = !!i913[66]
  i912.m_isRichText = !!i913[67]
  i912.m_parseCtrlCharacters = !!i913[68]
  i912.m_isOrthographic = !!i913[69]
  i912.m_isCullingEnabled = !!i913[70]
  i912.m_horizontalMapping = i913[71]
  i912.m_verticalMapping = i913[72]
  i912.m_uvLineOffset = i913[73]
  i912.m_geometrySortingOrder = i913[74]
  i912.m_IsTextObjectScaleStatic = !!i913[75]
  i912.m_VertexBufferAutoSizeReduction = !!i913[76]
  i912.m_useMaxVisibleDescender = !!i913[77]
  i912.m_pageToDisplay = i913[78]
  i912.m_margin = new pc.Vec4( i913[79], i913[80], i913[81], i913[82] )
  i912.m_isUsingLegacyAnimationComponent = !!i913[83]
  i912.m_isVolumetricText = !!i913[84]
  request.r(i913[85], i913[86], 0, i912, 'm_Material')
  i912.m_Maskable = !!i913[87]
  i912.m_Color = new pc.Color(i913[88], i913[89], i913[90], i913[91])
  i912.m_RaycastTarget = !!i913[92]
  i912.m_RaycastPadding = new pc.Vec4( i913[93], i913[94], i913[95], i913[96] )
  return i912
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i918 = root || request.c( 'TMPro.VertexGradient' )
  var i919 = data
  i918.topLeft = new pc.Color(i919[0], i919[1], i919[2], i919[3])
  i918.topRight = new pc.Color(i919[4], i919[5], i919[6], i919[7])
  i918.bottomLeft = new pc.Color(i919[8], i919[9], i919[10], i919[11])
  i918.bottomRight = new pc.Color(i919[12], i919[13], i919[14], i919[15])
  return i918
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i920 = root || request.c( 'UnityEngine.UI.Image' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'm_Sprite')
  i920.m_Type = i921[2]
  i920.m_PreserveAspect = !!i921[3]
  i920.m_FillCenter = !!i921[4]
  i920.m_FillMethod = i921[5]
  i920.m_FillAmount = i921[6]
  i920.m_FillClockwise = !!i921[7]
  i920.m_FillOrigin = i921[8]
  i920.m_UseSpriteMesh = !!i921[9]
  i920.m_PixelsPerUnitMultiplier = i921[10]
  request.r(i921[11], i921[12], 0, i920, 'm_Material')
  i920.m_Maskable = !!i921[13]
  i920.m_Color = new pc.Color(i921[14], i921[15], i921[16], i921[17])
  i920.m_RaycastTarget = !!i921[18]
  i920.m_RaycastPadding = new pc.Vec4( i921[19], i921[20], i921[21], i921[22] )
  return i920
}

Deserializers["Fish"] = function (request, data, root) {
  var i922 = root || request.c( 'Fish' )
  var i923 = data
  i922.fishType = request.d('FishType', i923[0], i922.fishType)
  request.r(i923[1], i923[2], 0, i922, 'fishData')
  i922.sensingRadius = i923[3]
  i922.moveSpeed = i923[4]
  i922.followTargetSpeed = i923[5]
  i922.rotationSpeed = i923[6]
  request.r(i923[7], i923[8], 0, i922, 'target')
  i922.usingMapDataNumber = i923[9]
  i922.hooked = !!i923[10]
  request.r(i923[11], i923[12], 0, i922, 'rigid')
  i922.dirToHook = new pc.Vec3( i923[13], i923[14], i923[15] )
  request.r(i923[16], i923[17], 0, i922, 'head')
  request.r(i923[18], i923[19], 0, i922, 'mapData')
  request.r(i923[20], i923[21], 0, i922, 'mousePoint')
  return i922
}

Deserializers["FishType"] = function (request, data, root) {
  var i924 = root || request.c( 'FishType' )
  var i925 = data
  i924.cost = i925[0]
  i924.tier = i925[1]
  i924.fishNumber = i925[2]
  i924.boundSize = new pc.Vec3( i925[3], i925[4], i925[5] )
  return i924
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i926 = root || request.c( 'ChestMover' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'chest')
  return i926
}

Deserializers["Chest"] = function (request, data, root) {
  var i928 = root || request.c( 'Chest' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'chestMover')
  i928.chestTier = i929[2]
  request.r(i929[3], i929[4], 0, i928, 'line')
  i928.chestPullDist = i929[5]
  i928.pullForce = i929[6]
  i928.fishType = request.d('FishType', i929[7], i928.fishType)
  request.r(i929[8], i929[9], 0, i928, 'fishData')
  i928.sensingRadius = i929[10]
  i928.moveSpeed = i929[11]
  i928.followTargetSpeed = i929[12]
  i928.rotationSpeed = i929[13]
  request.r(i929[14], i929[15], 0, i928, 'target')
  i928.usingMapDataNumber = i929[16]
  i928.hooked = !!i929[17]
  request.r(i929[18], i929[19], 0, i928, 'rigid2')
  request.r(i929[20], i929[21], 0, i928, 'rigid')
  i928.dirToHook = new pc.Vec3( i929[22], i929[23], i929[24] )
  request.r(i929[25], i929[26], 0, i928, 'head')
  request.r(i929[27], i929[28], 0, i928, 'mapData')
  request.r(i929[29], i929[30], 0, i928, 'mousePoint')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i931 = data
  i930.enabled = !!i931[0]
  i930.type = i931[1]
  i930.color = new pc.Color(i931[2], i931[3], i931[4], i931[5])
  i930.cullingMask = i931[6]
  i930.intensity = i931[7]
  i930.range = i931[8]
  i930.spotAngle = i931[9]
  i930.shadows = i931[10]
  i930.shadowNormalBias = i931[11]
  i930.shadowBias = i931[12]
  i930.shadowStrength = i931[13]
  i930.shadowResolution = i931[14]
  i930.lightmapBakeType = i931[15]
  i930.renderMode = i931[16]
  request.r(i931[17], i931[18], 0, i930, 'cookie')
  i930.cookieSize = i931[19]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i933 = data
  i932.enabled = !!i933[0]
  request.r(i933[1], i933[2], 0, i932, 'sharedMaterial')
  var i935 = i933[3]
  var i934 = []
  for(var i = 0; i < i935.length; i += 2) {
  request.r(i935[i + 0], i935[i + 1], 2, i934, '')
  }
  i932.sharedMaterials = i934
  i932.receiveShadows = !!i933[4]
  i932.shadowCastingMode = i933[5]
  i932.sortingLayerID = i933[6]
  i932.sortingOrder = i933[7]
  i932.lightmapIndex = i933[8]
  i932.lightmapSceneIndex = i933[9]
  i932.lightmapScaleOffset = new pc.Vec4( i933[10], i933[11], i933[12], i933[13] )
  i932.lightProbeUsage = i933[14]
  i932.reflectionProbeUsage = i933[15]
  i932.color = new pc.Color(i933[16], i933[17], i933[18], i933[19])
  request.r(i933[20], i933[21], 0, i932, 'sprite')
  i932.flipX = !!i933[22]
  i932.flipY = !!i933[23]
  i932.drawMode = i933[24]
  i932.size = new pc.Vec2( i933[25], i933[26] )
  i932.tileMode = i933[27]
  i932.adaptiveModeThreshold = i933[28]
  i932.maskInteraction = i933[29]
  i932.spriteSortPoint = i933[30]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i937 = data
  i936.name = i937[0]
  i936.atlasId = i937[1]
  i936.mipmapCount = i937[2]
  i936.hdr = !!i937[3]
  i936.size = i937[4]
  i936.anisoLevel = i937[5]
  i936.filterMode = i937[6]
  i936.wrapMode = i937[7]
  var i939 = i937[8]
  var i938 = []
  for(var i = 0; i < i939.length; i += 4) {
    i938.push( UnityEngine.Rect.MinMaxRect(i939[i + 0], i939[i + 1], i939[i + 2], i939[i + 3]) );
  }
  i936.rects = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i943 = data
  i942.name = i943[0]
  i942.index = i943[1]
  i942.startup = !!i943[2]
  return i942
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i944 = root || request.c( 'LunaChallenge' )
  var i945 = data
  i944.challengeClear = !!i945[0]
  request.r(i945[1], i945[2], 0, i944, 'challengeObject')
  request.r(i945[3], i945[4], 0, i944, 'challengeCount')
  request.r(i945[5], i945[6], 0, i944, 'challengeClearObject')
  request.r(i945[7], i945[8], 0, i944, 'challengeSlotObject')
  request.r(i945[9], i945[10], 0, i944, 'tapToStartObject')
  request.r(i945[11], i945[12], 0, i944, 'EndCard')
  i944.goalCount = i945[13]
  i944.currentCount = i945[14]
  return i944
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i946 = root || request.c( 'FishingRod' )
  var i947 = data
  i946.hookThrowForce = i947[0]
  i946.lineForce = i947[1]
  i946.maxPullingForce = i947[2]
  i946.minPullingForce = i947[3]
  i946.currentPullingForece = i947[4]
  i946.maxLine = i947[5]
  i946.pullingSpeed = i947[6]
  i946.playAdsPullCount = i947[7]
  i946.isStart = !!i947[8]
  request.r(i947[9], i947[10], 0, i946, 'hookRigid')
  request.r(i947[11], i947[12], 0, i946, 'pivot')
  request.r(i947[13], i947[14], 0, i946, 'touchToStartPanel')
  request.r(i947[15], i947[16], 0, i946, 'rodAnimator')
  request.r(i947[17], i947[18], 0, i946, 'fishingHook')
  request.r(i947[19], i947[20], 0, i946, 'touchField')
  request.r(i947[21], i947[22], 0, i946, 'upgradePanel')
  request.r(i947[23], i947[24], 0, i946, 'upgradeButton')
  request.r(i947[25], i947[26], 0, i946, 'depthText')
  request.r(i947[27], i947[28], 0, i946, 'touchToPullPanel')
  request.r(i947[29], i947[30], 0, i946, 'throwTarget1')
  request.r(i947[31], i947[32], 0, i946, 'throwTarget2')
  request.r(i947[33], i947[34], 0, i946, 'hookObject')
  request.r(i947[35], i947[36], 0, i946, 'playerObject')
  request.r(i947[37], i947[38], 0, i946, 'animationController')
  return i946
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i948 = root || request.c( 'FishingLogic' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'joint')
  i948.biteBate = !!i949[2]
  i948.pulling = !!i949[3]
  i948.enablePulling = !!i949[4]
  request.r(i949[5], i949[6], 0, i948, 'rodAnimator')
  request.r(i949[7], i949[8], 0, i948, 'animationController')
  request.r(i949[9], i949[10], 0, i948, 'startButton')
  request.r(i949[11], i949[12], 0, i948, 'catchSlider')
  request.r(i949[13], i949[14], 0, i948, 'catchButton')
  request.r(i949[15], i949[16], 0, i948, 'fishingRod')
  request.r(i949[17], i949[18], 0, i948, 'arrow')
  request.r(i949[19], i949[20], 0, i948, 'fishingRodSkinned')
  request.r(i949[21], i949[22], 0, i948, 'bubbleParticle')
  request.r(i949[23], i949[24], 0, i948, 'hookRigid')
  request.r(i949[25], i949[26], 0, i948, 'hook')
  return i948
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i950 = root || request.c( 'Upgrades' )
  var i951 = data
  i950.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i951[0], i950.lineLengthUpgrade)
  i950.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i951[1], i950.hookMaxUpgrade)
  i950.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i951[2], i950.hookMoveSpeedUpgrade)
  request.r(i951[3], i951[4], 0, i950, 'hook')
  request.r(i951[5], i951[6], 0, i950, 'rod')
  request.r(i951[7], i951[8], 0, i950, 'touchField')
  request.r(i951[9], i951[10], 0, i950, 'upgradePanel')
  request.r(i951[11], i951[12], 0, i950, 'upgradeTap')
  request.r(i951[13], i951[14], 0, i950, 'closeTap')
  request.r(i951[15], i951[16], 0, i950, 'tapToStartText')
  return i950
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i952 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i953 = data
  i952.currentLevel = i953[0]
  i952.maxLevel = i953[1]
  i952.upgradeValue = i953[2]
  i952.upgradeNeedyCost = i953[3]
  i952.upgradeCostIncreaseValue = i953[4]
  i952.upgradeCostIncreaseValueMultifly = i953[5]
  request.r(i953[6], i953[7], 0, i952, 'levelText')
  request.r(i953[8], i953[9], 0, i952, 'needyCostText')
  request.r(i953[10], i953[11], 0, i952, 'cover')
  request.r(i953[12], i953[13], 0, i952, 'rod')
  return i952
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i954 = root || request.c( 'Upgrades+CountUpgrade' )
  var i955 = data
  i954.currentLevel = i955[0]
  i954.maxLevel = i955[1]
  i954.upgradeValue = i955[2]
  i954.upgradeNeedyCost = i955[3]
  i954.upgradeCostIncreaseValue = i955[4]
  i954.upgradeCostIncreaseValueMultifly = i955[5]
  request.r(i955[6], i955[7], 0, i954, 'levelText')
  request.r(i955[8], i955[9], 0, i954, 'needyCostText')
  request.r(i955[10], i955[11], 0, i954, 'cover')
  request.r(i955[12], i955[13], 0, i954, 'hook')
  return i954
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i956 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i957 = data
  i956.currentLevel = i957[0]
  i956.maxLevel = i957[1]
  i956.upgradeValue = i957[2]
  i956.upgradeNeedyCost = i957[3]
  i956.upgradeCostIncreaseValue = i957[4]
  i956.upgradeCostIncreaseValueMultifly = i957[5]
  request.r(i957[6], i957[7], 0, i956, 'levelText')
  request.r(i957[8], i957[9], 0, i956, 'needyCostText')
  request.r(i957[10], i957[11], 0, i956, 'cover')
  request.r(i957[12], i957[13], 0, i956, 'touchField')
  return i956
}

Deserializers["FishPool"] = function (request, data, root) {
  var i958 = root || request.c( 'FishPool' )
  var i959 = data
  i958.oneTierFishList = request.d('FishList', i959[0], i958.oneTierFishList)
  i958.twoTierFishList = request.d('FishList', i959[1], i958.twoTierFishList)
  i958.threeTierFishList = request.d('FishList', i959[2], i958.threeTierFishList)
  i958.fourTierFishList = request.d('FishList', i959[3], i958.fourTierFishList)
  i958.fiveTierFishList = request.d('FishList', i959[4], i958.fiveTierFishList)
  i958.chestList_one = request.d('FishList', i959[5], i958.chestList_one)
  i958.chestList_two = request.d('FishList', i959[6], i958.chestList_two)
  i958.chestList_three = request.d('FishList', i959[7], i958.chestList_three)
  i958.chestMover = request.d('FishList', i959[8], i958.chestMover)
  var i961 = i959[9]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 1, i960, '')
  }
  i958.generatedFishList = i960
  request.r(i959[10], i959[11], 0, i958, 'poolParent')
  return i958
}

Deserializers["FishList"] = function (request, data, root) {
  var i962 = root || request.c( 'FishList' )
  var i963 = data
  var i965 = i963[0]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i962.fishList = i964
  var i967 = i963[1]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i962.spawnPoints = i966
  return i962
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i974 = root || request.c( 'LowLineRenderer' )
  var i975 = data
  request.r(i975[0], i975[1], 0, i974, 'line')
  request.r(i975[2], i975[3], 0, i974, 'start')
  request.r(i975[4], i975[5], 0, i974, 'end')
  return i974
}

Deserializers["DataManager"] = function (request, data, root) {
  var i976 = root || request.c( 'DataManager' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'setting')
  request.r(i977[2], i977[3], 0, i976, 'soundSlider')
  request.r(i977[4], i977[5], 0, i976, 'hapticSlider')
  i976.gameDataFileName = i977[6]
  i976._gameData = request.d('GameData', i977[7], i976._gameData)
  request.r(i977[8], i977[9], 0, i976, 'soundSliderHandleText')
  request.r(i977[10], i977[11], 0, i976, 'hapticSliderHandleText')
  return i976
}

Deserializers["GameData"] = function (request, data, root) {
  var i978 = root || request.c( 'GameData' )
  var i979 = data
  i978.money = i979[0]
  i978.needleUpgrade = i979[1]
  i978.lineUpgrade = i979[2]
  i978.reelUpgrade = i979[3]
  i978.sound = i979[4]
  i978.haptic = i979[5]
  return i978
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'm_FirstSelected')
  i980.m_sendNavigationEvents = !!i981[2]
  i980.m_DragThreshold = i981[3]
  return i980
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i983 = data
  i982.m_HorizontalAxis = i983[0]
  i982.m_VerticalAxis = i983[1]
  i982.m_SubmitButton = i983[2]
  i982.m_CancelButton = i983[3]
  i982.m_InputActionsPerSecond = i983[4]
  i982.m_RepeatDelay = i983[5]
  i982.m_ForceModuleActive = !!i983[6]
  i982.m_SendPointerHoverToParent = !!i983[7]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i985 = data
  i984.enabled = !!i985[0]
  i984.planeDistance = i985[1]
  i984.referencePixelsPerUnit = i985[2]
  i984.isFallbackOverlay = !!i985[3]
  i984.renderMode = i985[4]
  i984.renderOrder = i985[5]
  i984.sortingLayerName = i985[6]
  i984.sortingOrder = i985[7]
  i984.scaleFactor = i985[8]
  request.r(i985[9], i985[10], 0, i984, 'worldCamera')
  i984.overrideSorting = !!i985[11]
  i984.pixelPerfect = !!i985[12]
  i984.targetDisplay = i985[13]
  i984.overridePixelPerfect = !!i985[14]
  return i984
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i987 = data
  i986.m_UiScaleMode = i987[0]
  i986.m_ReferencePixelsPerUnit = i987[1]
  i986.m_ScaleFactor = i987[2]
  i986.m_ReferenceResolution = new pc.Vec2( i987[3], i987[4] )
  i986.m_ScreenMatchMode = i987[5]
  i986.m_MatchWidthOrHeight = i987[6]
  i986.m_PhysicalUnit = i987[7]
  i986.m_FallbackScreenDPI = i987[8]
  i986.m_DefaultSpriteDPI = i987[9]
  i986.m_DynamicPixelsPerUnit = i987[10]
  i986.m_PresetInfoIsWorld = !!i987[11]
  return i986
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i989 = data
  i988.m_IgnoreReversedGraphics = !!i989[0]
  i988.m_BlockingObjects = i989[1]
  i988.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i989[2] )
  return i988
}

Deserializers["UIManager"] = function (request, data, root) {
  var i990 = root || request.c( 'UIManager' )
  var i991 = data
  request.r(i991[0], i991[1], 0, i990, 'challengeTarget')
  request.r(i991[2], i991[3], 0, i990, 'challengeText')
  request.r(i991[4], i991[5], 0, i990, 'versionText')
  i990.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i991[6] )
  i990.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i991[7] )
  request.r(i991[8], i991[9], 0, i990, 'uiCamera')
  var i993 = i991[10]
  var i992 = []
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 2, i992, '')
  }
  i990.pictureModeObjects = i992
  return i990
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i996 = root || request.c( 'FixedTouchField' )
  var i997 = data
  i996.TouchDist = new pc.Vec2( i997[0], i997[1] )
  i996.PointerOld = new pc.Vec2( i997[2], i997[3] )
  i996.Pressed = !!i997[4]
  i996.hookMoveSpeed = i997[5]
  request.r(i997[6], i997[7], 0, i996, 'hook')
  request.r(i997[8], i997[9], 0, i996, 'logic')
  request.r(i997[10], i997[11], 0, i996, 'joystick_Background')
  request.r(i997[12], i997[13], 0, i996, 'joystick_Handle')
  request.r(i997[14], i997[15], 0, i996, 'canvas')
  request.r(i997[16], i997[17], 0, i996, 'newCamera')
  i996.clampDist = i997[18]
  return i996
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.UI.Button' )
  var i999 = data
  i998.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i999[0], i998.m_OnClick)
  i998.m_Navigation = request.d('UnityEngine.UI.Navigation', i999[1], i998.m_Navigation)
  i998.m_Transition = i999[2]
  i998.m_Colors = request.d('UnityEngine.UI.ColorBlock', i999[3], i998.m_Colors)
  i998.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i999[4], i998.m_SpriteState)
  i998.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i999[5], i998.m_AnimationTriggers)
  i998.m_Interactable = !!i999[6]
  request.r(i999[7], i999[8], 0, i998, 'm_TargetGraphic')
  return i998
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1001 = data
  i1000.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1001[0], i1000.m_PersistentCalls)
  return i1000
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('UnityEngine.Events.PersistentCall', i1005[i + 0]));
  }
  i1002.m_Calls = i1004
  return i1002
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'm_Target')
  i1008.m_TargetAssemblyTypeName = i1009[2]
  i1008.m_MethodName = i1009[3]
  i1008.m_Mode = i1009[4]
  i1008.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1009[5], i1008.m_Arguments)
  i1008.m_CallState = i1009[6]
  return i1008
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'm_ObjectArgument')
  i1010.m_ObjectArgumentAssemblyTypeName = i1011[2]
  i1010.m_IntArgument = i1011[3]
  i1010.m_FloatArgument = i1011[4]
  i1010.m_StringArgument = i1011[5]
  i1010.m_BoolArgument = !!i1011[6]
  return i1010
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1013 = data
  i1012.m_Mode = i1013[0]
  i1012.m_WrapAround = !!i1013[1]
  request.r(i1013[2], i1013[3], 0, i1012, 'm_SelectOnUp')
  request.r(i1013[4], i1013[5], 0, i1012, 'm_SelectOnDown')
  request.r(i1013[6], i1013[7], 0, i1012, 'm_SelectOnLeft')
  request.r(i1013[8], i1013[9], 0, i1012, 'm_SelectOnRight')
  return i1012
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1015 = data
  i1014.m_NormalColor = new pc.Color(i1015[0], i1015[1], i1015[2], i1015[3])
  i1014.m_HighlightedColor = new pc.Color(i1015[4], i1015[5], i1015[6], i1015[7])
  i1014.m_PressedColor = new pc.Color(i1015[8], i1015[9], i1015[10], i1015[11])
  i1014.m_SelectedColor = new pc.Color(i1015[12], i1015[13], i1015[14], i1015[15])
  i1014.m_DisabledColor = new pc.Color(i1015[16], i1015[17], i1015[18], i1015[19])
  i1014.m_ColorMultiplier = i1015[20]
  i1014.m_FadeDuration = i1015[21]
  return i1014
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_HighlightedSprite')
  request.r(i1017[2], i1017[3], 0, i1016, 'm_PressedSprite')
  request.r(i1017[4], i1017[5], 0, i1016, 'm_SelectedSprite')
  request.r(i1017[6], i1017[7], 0, i1016, 'm_DisabledSprite')
  return i1016
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1019 = data
  i1018.m_NormalTrigger = i1019[0]
  i1018.m_HighlightedTrigger = i1019[1]
  i1018.m_PressedTrigger = i1019[2]
  i1018.m_SelectedTrigger = i1019[3]
  i1018.m_DisabledTrigger = i1019[4]
  return i1018
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1021 = data
  i1020.m_EffectColor = new pc.Color(i1021[0], i1021[1], i1021[2], i1021[3])
  i1020.m_EffectDistance = new pc.Vec2( i1021[4], i1021[5] )
  i1020.m_UseGraphicAlpha = !!i1021[6]
  return i1020
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'm_FillRect')
  request.r(i1023[2], i1023[3], 0, i1022, 'm_HandleRect')
  i1022.m_Direction = i1023[4]
  i1022.m_MinValue = i1023[5]
  i1022.m_MaxValue = i1023[6]
  i1022.m_WholeNumbers = !!i1023[7]
  i1022.m_Value = i1023[8]
  i1022.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1023[9], i1022.m_OnValueChanged)
  i1022.m_Navigation = request.d('UnityEngine.UI.Navigation', i1023[10], i1022.m_Navigation)
  i1022.m_Transition = i1023[11]
  i1022.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1023[12], i1022.m_Colors)
  i1022.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1023[13], i1022.m_SpriteState)
  i1022.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1023[14], i1022.m_AnimationTriggers)
  i1022.m_Interactable = !!i1023[15]
  request.r(i1023[16], i1023[17], 0, i1022, 'm_TargetGraphic')
  return i1022
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1025 = data
  i1024.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1025[0], i1024.m_PersistentCalls)
  return i1024
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i1026 = root || request.c( 'EnviromentEditor' )
  var i1027 = data
  i1026.oceanSpriteValueMultifly = i1027[0]
  i1026.sunLightIntensity = i1027[1]
  i1026.minSunLightIntensity = i1027[2]
  i1026.challengeLightIntensity = i1027[3]
  i1026.depthMaskTransparentValue = i1027[4]
  i1026.ambientLightIntensity = i1027[5]
  request.r(i1027[6], i1027[7], 0, i1026, 'hook')
  var i1029 = i1027[8]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 2) {
  request.r(i1029[i + 0], i1029[i + 1], 2, i1028, '')
  }
  i1026.Oceans = i1028
  request.r(i1027[9], i1027[10], 0, i1026, 'OceanSurface')
  request.r(i1027[11], i1027[12], 0, i1026, 'depthMask')
  request.r(i1027[13], i1027[14], 0, i1026, 'depthSprite')
  request.r(i1027[15], i1027[16], 0, i1026, 'depthMaskMat')
  request.r(i1027[17], i1027[18], 0, i1026, 'sunLights')
  request.r(i1027[19], i1027[20], 0, i1026, 'hookLight')
  request.r(i1027[21], i1027[22], 0, i1026, 'challengeLight')
  return i1026
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i1032 = root || request.c( 'ObjectMovement' )
  var i1033 = data
  i1032.moveX = i1033[0]
  i1032.moveSec = i1033[1]
  return i1032
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i1034 = root || request.c( 'OceanTrigger' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'touchToPullButton')
  request.r(i1035[2], i1035[3], 0, i1034, 'waterSplashParticle')
  request.r(i1035[4], i1035[5], 0, i1034, 'bubbleParticle')
  request.r(i1035[6], i1035[7], 0, i1034, 'arrow')
  request.r(i1035[8], i1035[9], 0, i1034, 'rigid')
  request.r(i1035[10], i1035[11], 0, i1034, 'hook')
  request.r(i1035[12], i1035[13], 0, i1034, 'rod')
  return i1034
}

Deserializers["Flock"] = function (request, data, root) {
  var i1036 = root || request.c( 'Flock' )
  var i1037 = data
  request.r(i1037[0], i1037[1], 0, i1036, 'flockUnitPrefab')
  i1036.flockSize = i1037[2]
  i1036.spawnBounds = new pc.Vec3( i1037[3], i1037[4], i1037[5] )
  i1036._minSpeed = i1037[6]
  i1036._maxSpeed = i1037[7]
  i1036._cohesionDistance = i1037[8]
  i1036._avoidanceDistance = i1037[9]
  i1036._aligementDistance = i1037[10]
  i1036._obstacleDistance = i1037[11]
  i1036._boundsDistance = i1037[12]
  i1036._cohesionWeight = i1037[13]
  i1036._avoidanceWeight = i1037[14]
  i1036._aligementWeight = i1037[15]
  i1036._boundsWeight = i1037[16]
  i1036._obstacleWeight = i1037[17]
  return i1036
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1038 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'm_LookAt')
  request.r(i1039[2], i1039[3], 0, i1038, 'm_Follow')
  i1038.m_Lens = request.d('Cinemachine.LensSettings', i1039[4], i1038.m_Lens)
  i1038.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1039[5], i1038.m_Transitions)
  var i1041 = i1039[6]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.m_ExcludedPropertiesInInspector = i1040
  var i1043 = i1039[7]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.m_LockStageInInspector = i1042
  i1038.m_Priority = i1039[8]
  i1038.m_StandbyUpdate = i1039[9]
  i1038.m_LegacyBlendHint = i1039[10]
  request.r(i1039[11], i1039[12], 0, i1038, 'm_ComponentOwner')
  i1038.m_StreamingVersion = i1039[13]
  return i1038
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Cinemachine.LensSettings' )
  var i1045 = data
  i1044.FieldOfView = i1045[0]
  i1044.OrthographicSize = i1045[1]
  i1044.NearClipPlane = i1045[2]
  i1044.FarClipPlane = i1045[3]
  i1044.Dutch = i1045[4]
  i1044.ModeOverride = i1045[5]
  i1044.LensShift = new pc.Vec2( i1045[6], i1045[7] )
  i1044.GateFit = i1045[8]
  i1044.m_SensorSize = new pc.Vec2( i1045[9], i1045[10] )
  return i1044
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1046 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1047 = data
  i1046.m_BlendHint = i1047[0]
  i1046.m_InheritPosition = !!i1047[1]
  i1046.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1047[2], i1046.m_OnCameraLive)
  return i1046
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1048 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1049 = data
  i1048.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1049[0], i1048.m_PersistentCalls)
  return i1048
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1054 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1055 = data
  return i1054
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1056 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1057 = data
  i1056.m_TrackedObjectOffset = new pc.Vec3( i1057[0], i1057[1], i1057[2] )
  i1056.m_LookaheadTime = i1057[3]
  i1056.m_LookaheadSmoothing = i1057[4]
  i1056.m_LookaheadIgnoreY = !!i1057[5]
  i1056.m_HorizontalDamping = i1057[6]
  i1056.m_VerticalDamping = i1057[7]
  i1056.m_ScreenX = i1057[8]
  i1056.m_ScreenY = i1057[9]
  i1056.m_DeadZoneWidth = i1057[10]
  i1056.m_DeadZoneHeight = i1057[11]
  i1056.m_SoftZoneWidth = i1057[12]
  i1056.m_SoftZoneHeight = i1057[13]
  i1056.m_BiasX = i1057[14]
  i1056.m_BiasY = i1057[15]
  i1056.m_CenterOnActivate = !!i1057[16]
  return i1056
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1058 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1059 = data
  i1058.m_BindingMode = i1059[0]
  i1058.m_FollowOffset = new pc.Vec3( i1059[1], i1059[2], i1059[3] )
  i1058.m_XDamping = i1059[4]
  i1058.m_YDamping = i1059[5]
  i1058.m_ZDamping = i1059[6]
  i1058.m_AngularDampingMode = i1059[7]
  i1058.m_PitchDamping = i1059[8]
  i1058.m_YawDamping = i1059[9]
  i1058.m_RollDamping = i1059[10]
  i1058.m_AngularDamping = i1059[11]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.aspect = i1061[1]
  i1060.orthographic = !!i1061[2]
  i1060.orthographicSize = i1061[3]
  i1060.backgroundColor = new pc.Color(i1061[4], i1061[5], i1061[6], i1061[7])
  i1060.nearClipPlane = i1061[8]
  i1060.farClipPlane = i1061[9]
  i1060.fieldOfView = i1061[10]
  i1060.depth = i1061[11]
  i1060.clearFlags = i1061[12]
  i1060.cullingMask = i1061[13]
  i1060.rect = i1061[14]
  request.r(i1061[15], i1061[16], 0, i1060, 'targetTexture')
  return i1060
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i1062 = root || request.c( 'CameraMove' )
  var i1063 = data
  i1062.offset = new pc.Vec3( i1063[0], i1063[1], i1063[2] )
  request.r(i1063[3], i1063[4], 0, i1062, 'newCamera')
  request.r(i1063[5], i1063[6], 0, i1062, 'target')
  return i1062
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1064 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1065 = data
  i1064.m_ShowDebugText = !!i1065[0]
  i1064.m_ShowCameraFrustum = !!i1065[1]
  i1064.m_IgnoreTimeScale = !!i1065[2]
  request.r(i1065[3], i1065[4], 0, i1064, 'm_WorldUpOverride')
  i1064.m_UpdateMethod = i1065[5]
  i1064.m_BlendUpdateMethod = i1065[6]
  i1064.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1065[7], i1064.m_DefaultBlend)
  request.r(i1065[8], i1065[9], 0, i1064, 'm_CustomBlends')
  i1064.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1065[10], i1064.m_CameraCutEvent)
  i1064.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1065[11], i1064.m_CameraActivatedEvent)
  return i1064
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1066 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1067 = data
  i1066.m_Style = i1067[0]
  i1066.m_Time = i1067[1]
  i1066.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1067[2] } )
  return i1066
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1068 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1069 = data
  i1068.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1069[0], i1068.m_PersistentCalls)
  return i1068
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i1070 = root || request.c( 'CinemachineController' )
  var i1071 = data
  request.r(i1071[0], i1071[1], 0, i1070, 'playerTrans')
  i1070.playerOffset = new pc.Vec3( i1071[2], i1071[3], i1071[4] )
  request.r(i1071[5], i1071[6], 0, i1070, 'hookTrans')
  i1070.hookOffset = new pc.Vec3( i1071[7], i1071[8], i1071[9] )
  request.r(i1071[10], i1071[11], 0, i1070, 'cvc_Hook')
  request.r(i1071[12], i1071[13], 0, i1070, 'cvc_Player')
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1073 = data
  i1072.enabled = !!i1073[0]
  i1072.isTrigger = !!i1073[1]
  request.r(i1073[2], i1073[3], 0, i1072, 'material')
  i1072.center = new pc.Vec3( i1073[4], i1073[5], i1073[6] )
  i1072.radius = i1073[7]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1075 = data
  i1074.enabled = !!i1075[0]
  request.r(i1075[1], i1075[2], 0, i1074, 'sharedMaterial')
  var i1077 = i1075[3]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 2) {
  request.r(i1077[i + 0], i1077[i + 1], 2, i1076, '')
  }
  i1074.sharedMaterials = i1076
  i1074.receiveShadows = !!i1075[4]
  i1074.shadowCastingMode = i1075[5]
  i1074.sortingLayerID = i1075[6]
  i1074.sortingOrder = i1075[7]
  i1074.lightmapIndex = i1075[8]
  i1074.lightmapSceneIndex = i1075[9]
  i1074.lightmapScaleOffset = new pc.Vec4( i1075[10], i1075[11], i1075[12], i1075[13] )
  i1074.lightProbeUsage = i1075[14]
  i1074.reflectionProbeUsage = i1075[15]
  var i1079 = i1075[16]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 3) {
    i1078.push( new pc.Vec3( i1079[i + 0], i1079[i + 1], i1079[i + 2] ) );
  }
  i1074.positions = i1078
  i1074.positionCount = i1075[17]
  i1074.time = i1075[18]
  i1074.startWidth = i1075[19]
  i1074.endWidth = i1075[20]
  i1074.widthMultiplier = i1075[21]
  i1074.autodestruct = !!i1075[22]
  i1074.emitting = !!i1075[23]
  i1074.numCornerVertices = i1075[24]
  i1074.numCapVertices = i1075[25]
  i1074.minVertexDistance = i1075[26]
  i1074.colorGradient = i1075[27] ? new pc.ColorGradient(i1075[27][0], i1075[27][1], i1075[27][2]) : null
  i1074.startColor = new pc.Color(i1075[28], i1075[29], i1075[30], i1075[31])
  i1074.endColor = new pc.Color(i1075[32], i1075[33], i1075[34], i1075[35])
  i1074.generateLightingData = !!i1075[36]
  i1074.textureMode = i1075[37]
  i1074.alignment = i1075[38]
  i1074.widthCurve = new pc.AnimationCurve( { keys_flow: i1075[39] } )
  return i1074
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i1080 = root || request.c( 'FishingHook' )
  var i1081 = data
  i1080.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i1081[0], i1080.OnMoneyChangeEvent)
  var i1083 = i1081[1]
  var i1082 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 1, i1082, '')
  }
  i1080.hookedFish = i1082
  request.r(i1081[2], i1081[3], 0, i1080, 'sellParticle')
  request.r(i1081[4], i1081[5], 0, i1080, 'sellParticleParent')
  i1080.targetHookZoomOffset = i1081[6]
  i1080.minDrag = i1081[7]
  i1080.maxDrag = i1081[8]
  i1080.dragSpeed = i1081[9]
  i1080.fishingHookScaleUpgradeValue = i1081[10]
  i1080.fullHooked = !!i1081[11]
  i1080.inTheOcean = !!i1081[12]
  i1080.money = i1081[13]
  request.r(i1081[14], i1081[15], 0, i1080, 'rigid')
  request.r(i1081[16], i1081[17], 0, i1080, 'canvas')
  request.r(i1081[18], i1081[19], 0, i1080, 'moneyTextPrefab')
  request.r(i1081[20], i1081[21], 0, i1080, 'moneyTextSpawnTransform')
  i1080.moneyTextSpawnMinOffset = new pc.Vec2( i1081[22], i1081[23] )
  i1080.moneyTextSpawnMaxOffset = new pc.Vec2( i1081[24], i1081[25] )
  var i1085 = i1081[26]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 2) {
  request.r(i1085[i + 0], i1085[i + 1], 2, i1084, '')
  }
  i1080.hookedTransforms = i1084
  request.r(i1081[27], i1081[28], 0, i1080, 'fishingRodSkinned')
  request.r(i1081[29], i1081[30], 0, i1080, 'cinemachineCamera')
  request.r(i1081[31], i1081[32], 0, i1080, 'startPoint')
  request.r(i1081[33], i1081[34], 0, i1080, 'hook')
  request.r(i1081[35], i1081[36], 0, i1080, 'rod')
  request.r(i1081[37], i1081[38], 0, i1080, 'playerModel')
  request.r(i1081[39], i1081[40], 0, i1080, 'upgradeButton')
  request.r(i1081[41], i1081[42], 0, i1080, 'depthText')
  request.r(i1081[43], i1081[44], 0, i1080, 'touchField')
  request.r(i1081[45], i1081[46], 0, i1080, 'catchRingParticle')
  request.r(i1081[47], i1081[48], 0, i1080, 'fishSkinPrefab')
  request.r(i1081[49], i1081[50], 0, i1080, 'fishSkinPoint1')
  request.r(i1081[51], i1081[52], 0, i1080, 'fishSkinPoint2')
  request.r(i1081[53], i1081[54], 0, i1080, 'moneyText')
  request.r(i1081[55], i1081[56], 0, i1080, 'HookedCount')
  return i1080
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1086 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1087 = data
  i1086.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1087[0], i1086.m_PersistentCalls)
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1089 = data
  i1088.ambientIntensity = i1089[0]
  i1088.reflectionIntensity = i1089[1]
  i1088.ambientMode = i1089[2]
  i1088.ambientLight = new pc.Color(i1089[3], i1089[4], i1089[5], i1089[6])
  i1088.ambientSkyColor = new pc.Color(i1089[7], i1089[8], i1089[9], i1089[10])
  i1088.ambientGroundColor = new pc.Color(i1089[11], i1089[12], i1089[13], i1089[14])
  i1088.ambientEquatorColor = new pc.Color(i1089[15], i1089[16], i1089[17], i1089[18])
  i1088.fogColor = new pc.Color(i1089[19], i1089[20], i1089[21], i1089[22])
  i1088.fogEndDistance = i1089[23]
  i1088.fogStartDistance = i1089[24]
  i1088.fogDensity = i1089[25]
  i1088.fog = !!i1089[26]
  request.r(i1089[27], i1089[28], 0, i1088, 'skybox')
  i1088.fogMode = i1089[29]
  var i1091 = i1089[30]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1091[i + 0]) );
  }
  i1088.lightmaps = i1090
  i1088.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1089[31], i1088.lightProbes)
  i1088.lightmapsMode = i1089[32]
  i1088.environmentLightingMode = i1089[33]
  i1088.ambientProbe = new pc.SphericalHarmonicsL2(i1089[34])
  i1088.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1089[35])
  i1088.useReferenceAmbientProbe = !!i1089[36]
  request.r(i1089[37], i1089[38], 0, i1088, 'customReflection')
  request.r(i1089[39], i1089[40], 0, i1088, 'defaultReflection')
  i1088.defaultReflectionMode = i1089[41]
  i1088.defaultReflectionResolution = i1089[42]
  i1088.sunLightObjectId = i1089[43]
  i1088.pixelLightCount = i1089[44]
  i1088.defaultReflectionHDR = !!i1089[45]
  i1088.hasLightDataAsset = !!i1089[46]
  i1088.hasManualGenerate = !!i1089[47]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'lightmapColor')
  request.r(i1095[2], i1095[3], 0, i1094, 'lightmapDirection')
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1096 = root || new UnityEngine.LightProbes()
  var i1097 = data
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1103 = data
  var i1105 = i1103[0]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(i1105[i + 0]);
  }
  i1102.invalidShaderVariants = i1104
  i1102.name = i1103[1]
  i1102.guid = i1103[2]
  var i1107 = i1103[3]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.shaderDefinedKeywords = i1106
  var i1109 = i1103[4]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1109[i + 0]) );
  }
  i1102.passes = i1108
  var i1111 = i1103[5]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1111[i + 0]) );
  }
  i1102.usePasses = i1110
  var i1113 = i1103[6]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1113[i + 0]) );
  }
  i1102.defaultParameterValues = i1112
  request.r(i1103[7], i1103[8], 0, i1102, 'unityFallbackShader')
  i1102.readDepth = !!i1103[9]
  i1102.isCreatedByShaderGraph = !!i1103[10]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1118 = root || new pc.UnityShaderPass()
  var i1119 = data
  i1118.id = i1119[0]
  i1118.subShaderIndex = i1119[1]
  i1118.name = i1119[2]
  i1118.passType = i1119[3]
  i1118.usePass = !!i1119[4]
  i1118.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[5], i1118.zTest)
  i1118.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[6], i1118.zWrite)
  i1118.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[7], i1118.culling)
  i1118.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1119[8], i1118.blending)
  i1118.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1119[9], i1118.alphaBlending)
  i1118.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[10], i1118.colorWriteMask)
  i1118.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[11], i1118.offsetUnits)
  i1118.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[12], i1118.offsetFactor)
  i1118.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[13], i1118.stencilRef)
  i1118.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[14], i1118.stencilReadMask)
  i1118.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1119[15], i1118.stencilWriteMask)
  i1118.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1119[16], i1118.stencilOp)
  i1118.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1119[17], i1118.stencilOpFront)
  i1118.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1119[18], i1118.stencilOpBack)
  var i1121 = i1119[19]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1121[i + 0]) );
  }
  i1118.tags = i1120
  var i1123 = i1119[20]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.passDefinedKeywords = i1122
  var i1125 = i1119[21]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1125[i + 0]) );
  }
  i1118.passDefinedKeywordGroups = i1124
  var i1127 = i1119[22]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1127[i + 0]) );
  }
  i1118.variants = i1126
  var i1129 = i1119[23]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1129[i + 0]) );
  }
  i1118.excludedVariants = i1128
  i1118.hasDepthReader = !!i1119[24]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1131 = data
  i1130.val = i1131[0]
  i1130.name = i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1133 = data
  i1132.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[0], i1132.src)
  i1132.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[1], i1132.dst)
  i1132.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1133[2], i1132.op)
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1135 = data
  i1134.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[0], i1134.pass)
  i1134.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[1], i1134.fail)
  i1134.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[2], i1134.zFail)
  i1134.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1135[3], i1134.comp)
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1139 = data
  i1138.name = i1139[0]
  i1138.value = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1143 = data
  var i1145 = i1143[0]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1142.keywords = i1144
  i1142.hasDiscard = !!i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1149 = data
  i1148.passId = i1149[0]
  i1148.subShaderIndex = i1149[1]
  var i1151 = i1149[2]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1148.keywords = i1150
  i1148.vertexProgram = i1149[3]
  i1148.fragmentProgram = i1149[4]
  i1148.readDepth = !!i1149[5]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1155 = data
  request.r(i1155[0], i1155[1], 0, i1154, 'shader')
  i1154.pass = i1155[2]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1159 = data
  i1158.name = i1159[0]
  i1158.type = i1159[1]
  i1158.value = new pc.Vec4( i1159[2], i1159[3], i1159[4], i1159[5] )
  i1158.textureValue = i1159[6]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1161 = data
  i1160.name = i1161[0]
  request.r(i1161[1], i1161[2], 0, i1160, 'texture')
  i1160.aabb = i1161[3]
  i1160.vertices = i1161[4]
  i1160.triangles = i1161[5]
  i1160.textureRect = UnityEngine.Rect.MinMaxRect(i1161[6], i1161[7], i1161[8], i1161[9])
  i1160.packedRect = UnityEngine.Rect.MinMaxRect(i1161[10], i1161[11], i1161[12], i1161[13])
  i1160.border = new pc.Vec4( i1161[14], i1161[15], i1161[16], i1161[17] )
  i1160.transparency = i1161[18]
  i1160.bounds = i1161[19]
  i1160.pixelsPerUnit = i1161[20]
  i1160.textureWidth = i1161[21]
  i1160.textureHeight = i1161[22]
  i1160.nativeSize = new pc.Vec2( i1161[23], i1161[24] )
  i1160.pivot = new pc.Vec2( i1161[25], i1161[26] )
  i1160.textureRectOffset = new pc.Vec2( i1161[27], i1161[28] )
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.wrapMode = i1163[1]
  i1162.isLooping = !!i1163[2]
  i1162.length = i1163[3]
  var i1165 = i1163[4]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1165[i + 0]) );
  }
  i1162.curves = i1164
  var i1167 = i1163[5]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1167[i + 0]) );
  }
  i1162.events = i1166
  i1162.halfPrecision = !!i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1171 = data
  i1170.path = i1171[0]
  i1170.componentType = i1171[1]
  i1170.property = i1171[2]
  i1170.keys = i1171[3]
  var i1173 = i1171[4]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1173[i + 0]) );
  }
  i1170.objectReferenceKeys = i1172
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1177 = data
  i1176.time = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'value')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1181 = data
  i1180.functionName = i1181[0]
  i1180.floatParameter = i1181[1]
  i1180.intParameter = i1181[2]
  i1180.stringParameter = i1181[3]
  request.r(i1181[4], i1181[5], 0, i1180, 'objectReferenceParameter')
  i1180.time = i1181[6]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1183 = data
  i1182.name = i1183[0]
  var i1185 = i1183[1]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1185[i + 0]) );
  }
  i1182.states = i1184
  var i1187 = i1183[2]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1187[i + 0]) );
  }
  i1182.layers = i1186
  var i1189 = i1183[3]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1189[i + 0]) );
  }
  i1182.parameters = i1188
  var i1191 = i1183[4]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( i1191[i + 0] );
  }
  i1182.animationClips = i1190
  i1182.HasSubStateMachines = !!i1183[5]
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1195 = data
  i1194.cycleOffset = i1195[0]
  i1194.cycleOffsetParameter = i1195[1]
  i1194.cycleOffsetParameterActive = !!i1195[2]
  i1194.mirror = !!i1195[3]
  i1194.mirrorParameter = i1195[4]
  i1194.mirrorParameterActive = !!i1195[5]
  i1194.motionId = i1195[6]
  i1194.nameHash = i1195[7]
  i1194.fullPathHash = i1195[8]
  i1194.speed = i1195[9]
  i1194.speedParameter = i1195[10]
  i1194.speedParameterActive = !!i1195[11]
  i1194.tag = i1195[12]
  i1194.name = i1195[13]
  i1194.writeDefaultValues = !!i1195[14]
  var i1197 = i1195[15]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1197[i + 0]) );
  }
  i1194.transitions = i1196
  var i1199 = i1195[16]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 2, i1198, '')
  }
  i1194.behaviours = i1198
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1203 = data
  i1202.fullPath = i1203[0]
  i1202.canTransitionToSelf = !!i1203[1]
  i1202.duration = i1203[2]
  i1202.exitTime = i1203[3]
  i1202.hasExitTime = !!i1203[4]
  i1202.hasFixedDuration = !!i1203[5]
  i1202.interruptionSource = i1203[6]
  i1202.offset = i1203[7]
  i1202.orderedInterruption = !!i1203[8]
  i1202.destinationStateNameHash = i1203[9]
  i1202.destinationStateMachineId = i1203[10]
  i1202.isExit = !!i1203[11]
  i1202.mute = !!i1203[12]
  i1202.solo = !!i1203[13]
  var i1205 = i1203[14]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1205[i + 0]) );
  }
  i1202.conditions = i1204
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1209 = data
  i1208.mode = i1209[0]
  i1208.parameter = i1209[1]
  i1208.threshold = i1209[2]
  return i1208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1215 = data
  i1214.blendingMode = i1215[0]
  i1214.defaultWeight = i1215[1]
  i1214.name = i1215[2]
  i1214.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1215[3], i1214.stateMachine)
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1217 = data
  i1216.id = i1217[0]
  i1216.defaultStateNameHash = i1217[1]
  var i1219 = i1217[2]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1219[i + 0]) );
  }
  i1216.entryTransitions = i1218
  var i1221 = i1217[3]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1221[i + 0]) );
  }
  i1216.anyStateTransitions = i1220
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1225 = data
  i1224.destinationStateNameHash = i1225[0]
  i1224.destinationStateMachineId = i1225[1]
  i1224.isExit = !!i1225[2]
  i1224.mute = !!i1225[3]
  i1224.solo = !!i1225[4]
  var i1227 = i1225[5]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1227[i + 0]) );
  }
  i1224.conditions = i1226
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1231 = data
  i1230.defaultBool = !!i1231[0]
  i1230.defaultFloat = i1231[1]
  i1230.defaultInt = i1231[2]
  i1230.name = i1231[3]
  i1230.nameHash = i1231[4]
  i1230.type = i1231[5]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1233 = data
  i1232.name = i1233[0]
  i1232.bytes64 = i1233[1]
  i1232.data = i1233[2]
  return i1232
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1234 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1235 = data
  i1234.hashCode = i1235[0]
  request.r(i1235[1], i1235[2], 0, i1234, 'material')
  i1234.materialHashCode = i1235[3]
  request.r(i1235[4], i1235[5], 0, i1234, 'atlas')
  i1234.normalStyle = i1235[6]
  i1234.normalSpacingOffset = i1235[7]
  i1234.boldStyle = i1235[8]
  i1234.boldSpacing = i1235[9]
  i1234.italicStyle = i1235[10]
  i1234.tabSize = i1235[11]
  i1234.m_Version = i1235[12]
  i1234.m_SourceFontFileGUID = i1235[13]
  request.r(i1235[14], i1235[15], 0, i1234, 'm_SourceFontFile_EditorRef')
  request.r(i1235[16], i1235[17], 0, i1234, 'm_SourceFontFile')
  i1234.m_AtlasPopulationMode = i1235[18]
  i1234.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1235[19], i1234.m_FaceInfo)
  var i1237 = i1235[20]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1237.length; i += 1) {
    i1236.add(request.d('UnityEngine.TextCore.Glyph', i1237[i + 0]));
  }
  i1234.m_GlyphTable = i1236
  var i1239 = i1235[21]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.add(request.d('TMPro.TMP_Character', i1239[i + 0]));
  }
  i1234.m_CharacterTable = i1238
  var i1241 = i1235[22]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 2) {
  request.r(i1241[i + 0], i1241[i + 1], 2, i1240, '')
  }
  i1234.m_AtlasTextures = i1240
  i1234.m_AtlasTextureIndex = i1235[23]
  i1234.m_IsMultiAtlasTexturesEnabled = !!i1235[24]
  i1234.m_ClearDynamicDataOnBuild = !!i1235[25]
  var i1243 = i1235[26]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('UnityEngine.TextCore.GlyphRect', i1243[i + 0]));
  }
  i1234.m_UsedGlyphRects = i1242
  var i1245 = i1235[27]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('UnityEngine.TextCore.GlyphRect', i1245[i + 0]));
  }
  i1234.m_FreeGlyphRects = i1244
  i1234.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1235[28], i1234.m_fontInfo)
  i1234.m_AtlasWidth = i1235[29]
  i1234.m_AtlasHeight = i1235[30]
  i1234.m_AtlasPadding = i1235[31]
  i1234.m_AtlasRenderMode = i1235[32]
  var i1247 = i1235[33]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_Glyph', i1247[i + 0]));
  }
  i1234.m_glyphInfoList = i1246
  i1234.m_KerningTable = request.d('TMPro.KerningTable', i1235[34], i1234.m_KerningTable)
  i1234.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1235[35], i1234.m_FontFeatureTable)
  var i1249 = i1235[36]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 1, i1248, '')
  }
  i1234.fallbackFontAssets = i1248
  var i1251 = i1235[37]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1251.length; i += 2) {
  request.r(i1251[i + 0], i1251[i + 1], 1, i1250, '')
  }
  i1234.m_FallbackFontAssetTable = i1250
  i1234.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1235[38], i1234.m_CreationSettings)
  var i1253 = i1235[39]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('TMPro.TMP_FontWeightPair', i1253[i + 0]) );
  }
  i1234.m_FontWeightTable = i1252
  var i1255 = i1235[40]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('TMPro.TMP_FontWeightPair', i1255[i + 0]) );
  }
  i1234.fontWeights = i1254
  return i1234
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1256 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1257 = data
  i1256.m_FaceIndex = i1257[0]
  i1256.m_FamilyName = i1257[1]
  i1256.m_StyleName = i1257[2]
  i1256.m_PointSize = i1257[3]
  i1256.m_Scale = i1257[4]
  i1256.m_LineHeight = i1257[5]
  i1256.m_AscentLine = i1257[6]
  i1256.m_CapLine = i1257[7]
  i1256.m_MeanLine = i1257[8]
  i1256.m_Baseline = i1257[9]
  i1256.m_DescentLine = i1257[10]
  i1256.m_SuperscriptOffset = i1257[11]
  i1256.m_SuperscriptSize = i1257[12]
  i1256.m_SubscriptOffset = i1257[13]
  i1256.m_SubscriptSize = i1257[14]
  i1256.m_UnderlineOffset = i1257[15]
  i1256.m_UnderlineThickness = i1257[16]
  i1256.m_StrikethroughOffset = i1257[17]
  i1256.m_StrikethroughThickness = i1257[18]
  i1256.m_TabWidth = i1257[19]
  return i1256
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1261 = data
  i1260.m_Index = i1261[0]
  i1260.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1261[1], i1260.m_Metrics)
  i1260.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1261[2], i1260.m_GlyphRect)
  i1260.m_Scale = i1261[3]
  i1260.m_AtlasIndex = i1261[4]
  return i1260
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1262 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1263 = data
  i1262.m_Width = i1263[0]
  i1262.m_Height = i1263[1]
  i1262.m_HorizontalBearingX = i1263[2]
  i1262.m_HorizontalBearingY = i1263[3]
  i1262.m_HorizontalAdvance = i1263[4]
  return i1262
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1265 = data
  i1264.m_X = i1265[0]
  i1264.m_Y = i1265[1]
  i1264.m_Width = i1265[2]
  i1264.m_Height = i1265[3]
  return i1264
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.TMP_Character' )
  var i1269 = data
  i1268.m_ElementType = i1269[0]
  i1268.m_Unicode = i1269[1]
  i1268.m_GlyphIndex = i1269[2]
  i1268.m_Scale = i1269[3]
  return i1268
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1275 = data
  i1274.Name = i1275[0]
  i1274.PointSize = i1275[1]
  i1274.Scale = i1275[2]
  i1274.CharacterCount = i1275[3]
  i1274.LineHeight = i1275[4]
  i1274.Baseline = i1275[5]
  i1274.Ascender = i1275[6]
  i1274.CapHeight = i1275[7]
  i1274.Descender = i1275[8]
  i1274.CenterLine = i1275[9]
  i1274.SuperscriptOffset = i1275[10]
  i1274.SubscriptOffset = i1275[11]
  i1274.SubSize = i1275[12]
  i1274.Underline = i1275[13]
  i1274.UnderlineThickness = i1275[14]
  i1274.strikethrough = i1275[15]
  i1274.strikethroughThickness = i1275[16]
  i1274.TabWidth = i1275[17]
  i1274.Padding = i1275[18]
  i1274.AtlasWidth = i1275[19]
  i1274.AtlasHeight = i1275[20]
  return i1274
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1279 = data
  i1278.id = i1279[0]
  i1278.x = i1279[1]
  i1278.y = i1279[2]
  i1278.width = i1279[3]
  i1278.height = i1279[4]
  i1278.xOffset = i1279[5]
  i1278.yOffset = i1279[6]
  i1278.xAdvance = i1279[7]
  i1278.scale = i1279[8]
  return i1278
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1280 = root || request.c( 'TMPro.KerningTable' )
  var i1281 = data
  var i1283 = i1281[0]
  var i1282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.add(request.d('TMPro.KerningPair', i1283[i + 0]));
  }
  i1280.kerningPairs = i1282
  return i1280
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.KerningPair' )
  var i1287 = data
  i1286.xOffset = i1287[0]
  i1286.m_FirstGlyph = i1287[1]
  i1286.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1287[2], i1286.m_FirstGlyphAdjustments)
  i1286.m_SecondGlyph = i1287[3]
  i1286.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1287[4], i1286.m_SecondGlyphAdjustments)
  i1286.m_IgnoreSpacingAdjustments = !!i1287[5]
  return i1286
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1291[i + 0]));
  }
  i1288.m_GlyphPairAdjustmentRecords = i1290
  return i1288
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1295 = data
  i1294.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1295[0], i1294.m_FirstAdjustmentRecord)
  i1294.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1295[1], i1294.m_SecondAdjustmentRecord)
  i1294.m_FeatureLookupFlags = i1295[2]
  return i1294
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1299 = data
  i1298.sourceFontFileName = i1299[0]
  i1298.sourceFontFileGUID = i1299[1]
  i1298.pointSizeSamplingMode = i1299[2]
  i1298.pointSize = i1299[3]
  i1298.padding = i1299[4]
  i1298.packingMode = i1299[5]
  i1298.atlasWidth = i1299[6]
  i1298.atlasHeight = i1299[7]
  i1298.characterSetSelectionMode = i1299[8]
  i1298.characterSequence = i1299[9]
  i1298.referencedFontAssetGUID = i1299[10]
  i1298.referencedTextAssetGUID = i1299[11]
  i1298.fontStyle = i1299[12]
  i1298.fontStyleModifier = i1299[13]
  i1298.renderMode = i1299[14]
  i1298.includeFontFeatures = !!i1299[15]
  return i1298
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1303 = data
  request.r(i1303[0], i1303[1], 0, i1302, 'regularTypeface')
  request.r(i1303[2], i1303[3], 0, i1302, 'italicTypeface')
  return i1302
}

Deserializers["MapData"] = function (request, data, root) {
  var i1304 = root || request.c( 'MapData' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('MapData+mapData', i1307[i + 0]));
  }
  i1304.mapDataList = i1306
  return i1304
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i1310 = root || request.c( 'MapData+mapData' )
  var i1311 = data
  i1310.tier = i1311[0]
  i1310.minMapSize = new pc.Vec3( i1311[1], i1311[2], i1311[3] )
  i1310.maxMapSize = new pc.Vec3( i1311[4], i1311[5], i1311[6] )
  return i1310
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_Settings' )
  var i1313 = data
  i1312.m_enableWordWrapping = !!i1313[0]
  i1312.m_enableKerning = !!i1313[1]
  i1312.m_enableExtraPadding = !!i1313[2]
  i1312.m_enableTintAllSprites = !!i1313[3]
  i1312.m_enableParseEscapeCharacters = !!i1313[4]
  i1312.m_EnableRaycastTarget = !!i1313[5]
  i1312.m_GetFontFeaturesAtRuntime = !!i1313[6]
  i1312.m_missingGlyphCharacter = i1313[7]
  i1312.m_warningsDisabled = !!i1313[8]
  request.r(i1313[9], i1313[10], 0, i1312, 'm_defaultFontAsset')
  i1312.m_defaultFontAssetPath = i1313[11]
  i1312.m_defaultFontSize = i1313[12]
  i1312.m_defaultAutoSizeMinRatio = i1313[13]
  i1312.m_defaultAutoSizeMaxRatio = i1313[14]
  i1312.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1313[15], i1313[16] )
  i1312.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1313[17], i1313[18] )
  i1312.m_autoSizeTextContainer = !!i1313[19]
  i1312.m_IsTextObjectScaleStatic = !!i1313[20]
  var i1315 = i1313[21]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1315.length; i += 2) {
  request.r(i1315[i + 0], i1315[i + 1], 1, i1314, '')
  }
  i1312.m_fallbackFontAssets = i1314
  i1312.m_matchMaterialPreset = !!i1313[22]
  request.r(i1313[23], i1313[24], 0, i1312, 'm_defaultSpriteAsset')
  i1312.m_defaultSpriteAssetPath = i1313[25]
  i1312.m_enableEmojiSupport = !!i1313[26]
  i1312.m_MissingCharacterSpriteUnicode = i1313[27]
  i1312.m_defaultColorGradientPresetsPath = i1313[28]
  request.r(i1313[29], i1313[30], 0, i1312, 'm_defaultStyleSheet')
  i1312.m_StyleSheetsResourcePath = i1313[31]
  request.r(i1313[32], i1313[33], 0, i1312, 'm_leadingCharacters')
  request.r(i1313[34], i1313[35], 0, i1312, 'm_followingCharacters')
  i1312.m_UseModernHangulLineBreakingRules = !!i1313[36]
  return i1312
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1317 = data
  i1316.hashCode = i1317[0]
  request.r(i1317[1], i1317[2], 0, i1316, 'material')
  i1316.materialHashCode = i1317[3]
  request.r(i1317[4], i1317[5], 0, i1316, 'spriteSheet')
  var i1319 = i1317[6]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.add(request.d('TMPro.TMP_Sprite', i1319[i + 0]));
  }
  i1316.spriteInfoList = i1318
  var i1321 = i1317[7]
  var i1320 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1321.length; i += 2) {
  request.r(i1321[i + 0], i1321[i + 1], 1, i1320, '')
  }
  i1316.fallbackSpriteAssets = i1320
  i1316.m_Version = i1317[8]
  i1316.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1317[9], i1316.m_FaceInfo)
  var i1323 = i1317[10]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.TMP_SpriteCharacter', i1323[i + 0]));
  }
  i1316.m_SpriteCharacterTable = i1322
  var i1325 = i1317[11]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.add(request.d('TMPro.TMP_SpriteGlyph', i1325[i + 0]));
  }
  i1316.m_SpriteGlyphTable = i1324
  return i1316
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1329 = data
  i1328.name = i1329[0]
  i1328.hashCode = i1329[1]
  i1328.unicode = i1329[2]
  i1328.pivot = new pc.Vec2( i1329[3], i1329[4] )
  request.r(i1329[5], i1329[6], 0, i1328, 'sprite')
  i1328.id = i1329[7]
  i1328.x = i1329[8]
  i1328.y = i1329[9]
  i1328.width = i1329[10]
  i1328.height = i1329[11]
  i1328.xOffset = i1329[12]
  i1328.yOffset = i1329[13]
  i1328.xAdvance = i1329[14]
  i1328.scale = i1329[15]
  return i1328
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1335 = data
  i1334.m_Name = i1335[0]
  i1334.m_HashCode = i1335[1]
  i1334.m_ElementType = i1335[2]
  i1334.m_Unicode = i1335[3]
  i1334.m_GlyphIndex = i1335[4]
  i1334.m_Scale = i1335[5]
  return i1334
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'sprite')
  i1338.m_Index = i1339[2]
  i1338.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1339[3], i1338.m_Metrics)
  i1338.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1339[4], i1338.m_GlyphRect)
  i1338.m_Scale = i1339[5]
  i1338.m_AtlasIndex = i1339[6]
  return i1338
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1340 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1341 = data
  var i1343 = i1341[0]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.add(request.d('TMPro.TMP_Style', i1343[i + 0]));
  }
  i1340.m_StyleList = i1342
  return i1340
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_Style' )
  var i1347 = data
  i1346.m_Name = i1347[0]
  i1346.m_HashCode = i1347[1]
  i1346.m_OpeningDefinition = i1347[2]
  i1346.m_ClosingDefinition = i1347[3]
  i1346.m_OpeningTagArray = i1347[4]
  i1346.m_ClosingTagArray = i1347[5]
  i1346.m_OpeningTagUnicodeArray = i1347[6]
  i1346.m_ClosingTagUnicodeArray = i1347[7]
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1351[i + 0]) );
  }
  i1348.files = i1350
  i1348.componentToPrefabIds = i1349[1]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1355 = data
  i1354.path = i1355[0]
  request.r(i1355[1], i1355[2], 0, i1354, 'unityObject')
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1357 = data
  var i1359 = i1357[0]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1359[i + 0]) );
  }
  i1356.scriptsExecutionOrder = i1358
  var i1361 = i1357[1]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1361[i + 0]) );
  }
  i1356.sortingLayers = i1360
  var i1363 = i1357[2]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1363[i + 0]) );
  }
  i1356.cullingLayers = i1362
  i1356.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1357[3], i1356.timeSettings)
  i1356.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1357[4], i1356.physicsSettings)
  i1356.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1357[5], i1356.physics2DSettings)
  i1356.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1357[6], i1356.qualitySettings)
  i1356.enableRealtimeShadows = !!i1357[7]
  i1356.autoInstantiatePrefabs = !!i1357[8]
  i1356.enableAutoInstancing = !!i1357[9]
  i1356.lightmapEncodingQuality = i1357[10]
  i1356.desiredColorSpace = i1357[11]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.value = i1367[1]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1371 = data
  i1370.id = i1371[0]
  i1370.name = i1371[1]
  i1370.value = i1371[2]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1375 = data
  i1374.id = i1375[0]
  i1374.name = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1377 = data
  i1376.fixedDeltaTime = i1377[0]
  i1376.maximumDeltaTime = i1377[1]
  i1376.timeScale = i1377[2]
  i1376.maximumParticleTimestep = i1377[3]
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1379 = data
  i1378.gravity = new pc.Vec3( i1379[0], i1379[1], i1379[2] )
  i1378.defaultSolverIterations = i1379[3]
  i1378.bounceThreshold = i1379[4]
  i1378.autoSyncTransforms = !!i1379[5]
  i1378.autoSimulation = !!i1379[6]
  var i1381 = i1379[7]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1381[i + 0]) );
  }
  i1378.collisionMatrix = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1385 = data
  i1384.enabled = !!i1385[0]
  i1384.layerId = i1385[1]
  i1384.otherLayerId = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1387 = data
  request.r(i1387[0], i1387[1], 0, i1386, 'material')
  i1386.gravity = new pc.Vec2( i1387[2], i1387[3] )
  i1386.positionIterations = i1387[4]
  i1386.velocityIterations = i1387[5]
  i1386.velocityThreshold = i1387[6]
  i1386.maxLinearCorrection = i1387[7]
  i1386.maxAngularCorrection = i1387[8]
  i1386.maxTranslationSpeed = i1387[9]
  i1386.maxRotationSpeed = i1387[10]
  i1386.timeToSleep = i1387[11]
  i1386.linearSleepTolerance = i1387[12]
  i1386.angularSleepTolerance = i1387[13]
  i1386.defaultContactOffset = i1387[14]
  i1386.autoSimulation = !!i1387[15]
  i1386.queriesHitTriggers = !!i1387[16]
  i1386.queriesStartInColliders = !!i1387[17]
  i1386.callbacksOnDisable = !!i1387[18]
  i1386.reuseCollisionCallbacks = !!i1387[19]
  i1386.autoSyncTransforms = !!i1387[20]
  var i1389 = i1387[21]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1389[i + 0]) );
  }
  i1386.collisionMatrix = i1388
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.layerId = i1393[1]
  i1392.otherLayerId = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1395 = data
  var i1397 = i1395[0]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1397[i + 0]) );
  }
  i1394.qualityLevels = i1396
  var i1399 = i1395[1]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( i1399[i + 0] );
  }
  i1394.names = i1398
  i1394.shadows = i1395[2]
  i1394.anisotropicFiltering = i1395[3]
  i1394.antiAliasing = i1395[4]
  i1394.lodBias = i1395[5]
  i1394.shadowCascades = i1395[6]
  i1394.shadowDistance = i1395[7]
  i1394.shadowmaskMode = i1395[8]
  i1394.shadowProjection = i1395[9]
  i1394.shadowResolution = i1395[10]
  i1394.softParticles = !!i1395[11]
  i1394.softVegetation = !!i1395[12]
  i1394.activeColorSpace = i1395[13]
  i1394.desiredColorSpace = i1395[14]
  i1394.masterTextureLimit = i1395[15]
  i1394.maxQueuedFrames = i1395[16]
  i1394.particleRaycastBudget = i1395[17]
  i1394.pixelLightCount = i1395[18]
  i1394.realtimeReflectionProbes = !!i1395[19]
  i1394.shadowCascade2Split = i1395[20]
  i1394.shadowCascade4Split = new pc.Vec3( i1395[21], i1395[22], i1395[23] )
  i1394.streamingMipmapsActive = !!i1395[24]
  i1394.vSyncCount = i1395[25]
  i1394.asyncUploadBufferSize = i1395[26]
  i1394.asyncUploadTimeSlice = i1395[27]
  i1394.billboardsFaceCameraPosition = !!i1395[28]
  i1394.shadowNearPlaneOffset = i1395[29]
  i1394.streamingMipmapsMemoryBudget = i1395[30]
  i1394.maximumLODLevel = i1395[31]
  i1394.streamingMipmapsAddAllCameras = !!i1395[32]
  i1394.streamingMipmapsMaxLevelReduction = i1395[33]
  i1394.streamingMipmapsRenderersPerFrame = i1395[34]
  i1394.resolutionScalingFixedDPIFactor = i1395[35]
  i1394.streamingMipmapsMaxFileIORequests = i1395[36]
  i1394.currentQualityLevel = i1395[37]
  return i1394
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1402 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1403 = data
  i1402.xPlacement = i1403[0]
  i1402.yPlacement = i1403[1]
  i1402.xAdvance = i1403[2]
  i1402.yAdvance = i1403[3]
  return i1402
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1404 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1405 = data
  i1404.m_GlyphIndex = i1405[0]
  i1404.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1405[1], i1404.m_GlyphValueRecord)
  return i1404
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1407 = data
  i1406.m_XPlacement = i1407[0]
  i1406.m_YPlacement = i1407[1]
  i1406.m_XAdvance = i1407[2]
  i1406.m_YAdvance = i1407[3]
  return i1406
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[18],"82":[50],"21":[20],"83":[20],"84":[20],"85":[20],"86":[20],"87":[20],"88":[20],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[50],"104":[8],"105":[106],"107":[106],"49":[22],"108":[9],"109":[9],"110":[9],"111":[9],"112":[22],"113":[8,22],"25":[22,23],"114":[22],"115":[23,22],"116":[8],"117":[23,22],"118":[22],"119":[22],"120":[22],"52":[49],"27":[23,22],"121":[22],"51":[49],"122":[22],"123":[22],"124":[22],"125":[22],"126":[22],"127":[22],"128":[22],"129":[22],"130":[22],"131":[23,22],"132":[22],"133":[22],"134":[22],"46":[22],"135":[23,22],"136":[22],"137":[47],"138":[47],"48":[47],"139":[47],"140":[50],"141":[50],"142":[143],"144":[22],"145":[143],"146":[50],"147":[148],"149":[143]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","AnimationController","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","LunaChallenge","UnityEngine.GameObject","FishingRod","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","LowLineRenderer","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Outline","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "61.8";

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

Deserializers.buildID = "ff5a51d6-2e76-47b8-b930-15344e56a713";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

