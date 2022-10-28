var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointSpring' )
  var i709 = data
  i708.spring = i709[0]
  i708.damper = i709[1]
  i708.targetPosition = i709[2]
  return i708
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointMotor' )
  var i711 = data
  i710.m_TargetVelocity = i711[0]
  i710.m_Force = i711[1]
  i710.m_FreeSpin = i711[2]
  return i710
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointLimits' )
  var i713 = data
  i712.m_Min = i713[0]
  i712.m_Max = i713[1]
  i712.m_Bounciness = i713[2]
  i712.m_BounceMinVelocity = i713[3]
  i712.m_ContactDistance = i713[4]
  i712.minBounce = i713[5]
  i712.maxBounce = i713[6]
  return i712
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointDrive' )
  var i715 = data
  i714.m_PositionSpring = i715[0]
  i714.m_PositionDamper = i715[1]
  i714.m_MaximumForce = i715[2]
  return i714
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i717 = data
  i716.m_Spring = i717[0]
  i716.m_Damper = i717[1]
  return i716
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i719 = data
  i718.m_Limit = i719[0]
  i718.m_Bounciness = i719[1]
  i718.m_ContactDistance = i719[2]
  return i718
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i721 = data
  i720.m_ExtremumSlip = i721[0]
  i720.m_ExtremumValue = i721[1]
  i720.m_AsymptoteSlip = i721[2]
  i720.m_AsymptoteValue = i721[3]
  i720.m_Stiffness = i721[4]
  return i720
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i723 = data
  i722.m_LowerAngle = i723[0]
  i722.m_UpperAngle = i723[1]
  return i722
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i725 = data
  i724.m_MotorSpeed = i725[0]
  i724.m_MaximumMotorTorque = i725[1]
  return i724
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i727 = data
  i726.m_DampingRatio = i727[0]
  i726.m_Frequency = i727[1]
  i726.m_Angle = i727[2]
  return i726
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i729 = data
  i728.m_LowerTranslation = i729[0]
  i728.m_UpperTranslation = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i730 = root || new pc.UnityMaterial()
  var i731 = data
  i730.name = i731[0]
  request.r(i731[1], i731[2], 0, i730, 'shader')
  i730.renderQueue = i731[3]
  i730.enableInstancing = !!i731[4]
  var i733 = i731[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i733[i + 0]) );
  }
  i730.floatParameters = i732
  var i735 = i731[6]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i735[i + 0]) );
  }
  i730.colorParameters = i734
  var i737 = i731[7]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i737[i + 0]) );
  }
  i730.vectorParameters = i736
  var i739 = i731[8]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i739[i + 0]) );
  }
  i730.textureParameters = i738
  var i741 = i731[9]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i741[i + 0]) );
  }
  i730.materialFlags = i740
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i745 = data
  i744.name = i745[0]
  i744.value = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i749 = data
  i748.name = i749[0]
  i748.value = new pc.Color(i749[1], i749[2], i749[3], i749[4])
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i753 = data
  i752.name = i753[0]
  i752.value = new pc.Vec4( i753[1], i753[2], i753[3], i753[4] )
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i757 = data
  i756.name = i757[0]
  request.r(i757[1], i757[2], 0, i756, 'value')
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i761 = data
  i760.name = i761[0]
  i760.enabled = !!i761[1]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i763 = data
  i762.position = new pc.Vec3( i763[0], i763[1], i763[2] )
  i762.scale = new pc.Vec3( i763[3], i763[4], i763[5] )
  i762.rotation = new pc.Quat(i763[6], i763[7], i763[8], i763[9])
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i765 = data
  i764.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i765[0], i764.main)
  i764.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i765[1], i764.colorBySpeed)
  i764.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i765[2], i764.colorOverLifetime)
  i764.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i765[3], i764.emission)
  i764.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i765[4], i764.rotationBySpeed)
  i764.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i765[5], i764.rotationOverLifetime)
  i764.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i765[6], i764.shape)
  i764.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i765[7], i764.sizeBySpeed)
  i764.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i765[8], i764.sizeOverLifetime)
  i764.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i765[9], i764.textureSheetAnimation)
  i764.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i765[10], i764.velocityOverLifetime)
  i764.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i765[11], i764.noise)
  i764.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i765[12], i764.inheritVelocity)
  i764.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i765[13], i764.forceOverLifetime)
  i764.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i765[14], i764.limitVelocityOverLifetime)
  i764.useAutoRandomSeed = !!i765[15]
  i764.randomSeed = i765[16]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemMain()
  var i767 = data
  i766.duration = i767[0]
  i766.loop = !!i767[1]
  i766.prewarm = !!i767[2]
  i766.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[3], i766.startDelay)
  i766.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[4], i766.startLifetime)
  i766.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[5], i766.startSpeed)
  i766.startSize3D = !!i767[6]
  i766.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[7], i766.startSizeX)
  i766.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[8], i766.startSizeY)
  i766.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[9], i766.startSizeZ)
  i766.startRotation3D = !!i767[10]
  i766.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[11], i766.startRotationX)
  i766.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[12], i766.startRotationY)
  i766.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[13], i766.startRotationZ)
  i766.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[14], i766.startColor)
  i766.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i767[15], i766.gravityModifier)
  i766.simulationSpace = i767[16]
  request.r(i767[17], i767[18], 0, i766, 'customSimulationSpace')
  i766.simulationSpeed = i767[19]
  i766.useUnscaledTime = !!i767[20]
  i766.scalingMode = i767[21]
  i766.playOnAwake = !!i767[22]
  i766.maxParticles = i767[23]
  i766.emitterVelocityMode = i767[24]
  i766.stopAction = i767[25]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i768 = root || new pc.MinMaxCurve()
  var i769 = data
  i768.mode = i769[0]
  i768.curveMin = new pc.AnimationCurve( { keys_flow: i769[1] } )
  i768.curveMax = new pc.AnimationCurve( { keys_flow: i769[2] } )
  i768.curveMultiplier = i769[3]
  i768.constantMin = i769[4]
  i768.constantMax = i769[5]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i770 = root || new pc.MinMaxGradient()
  var i771 = data
  i770.mode = i771[0]
  i770.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[1], i770.gradientMin)
  i770.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i771[2], i770.gradientMax)
  i770.colorMin = new pc.Color(i771[3], i771[4], i771[5], i771[6])
  i770.colorMax = new pc.Color(i771[7], i771[8], i771[9], i771[10])
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i773 = data
  i772.mode = i773[0]
  var i775 = i773[1]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i775[i + 0]) );
  }
  i772.colorKeys = i774
  var i777 = i773[2]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i777[i + 0]) );
  }
  i772.alphaKeys = i776
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorBySpeed()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  i778.range = new pc.Vec2( i779[2], i779[3] )
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i783 = data
  i782.color = new pc.Color(i783[0], i783[1], i783[2], i783[3])
  i782.time = i783[4]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i787 = data
  i786.alpha = i787[0]
  i786.time = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemColorOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i789[1], i788.color)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemEmitter()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.rateOverTime)
  i790.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.rateOverDistance)
  var i793 = i791[3]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i793[i + 0]) );
  }
  i790.bursts = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemBurst()
  var i797 = data
  i796.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[0], i796.count)
  i796.cycleCount = i797[1]
  i796.minCount = i797[2]
  i796.maxCount = i797[3]
  i796.repeatInterval = i797[4]
  i796.time = i797[5]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemRotationBySpeed()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  i798.range = new pc.Vec2( i799[5], i799[6] )
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemRotationOverLifetime()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[1], i800.x)
  i800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[2], i800.y)
  i800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[3], i800.z)
  i800.separateAxes = !!i801[4]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemShape()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.shapeType = i803[1]
  i802.randomDirectionAmount = i803[2]
  i802.sphericalDirectionAmount = i803[3]
  i802.randomPositionAmount = i803[4]
  i802.alignToDirection = !!i803[5]
  i802.radius = i803[6]
  i802.radiusMode = i803[7]
  i802.radiusSpread = i803[8]
  i802.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.radiusSpeed)
  i802.radiusThickness = i803[10]
  i802.angle = i803[11]
  i802.length = i803[12]
  i802.boxThickness = new pc.Vec3( i803[13], i803[14], i803[15] )
  i802.meshShapeType = i803[16]
  request.r(i803[17], i803[18], 0, i802, 'mesh')
  request.r(i803[19], i803[20], 0, i802, 'meshRenderer')
  request.r(i803[21], i803[22], 0, i802, 'skinnedMeshRenderer')
  i802.useMeshMaterialIndex = !!i803[23]
  i802.meshMaterialIndex = i803[24]
  i802.useMeshColors = !!i803[25]
  i802.normalOffset = i803[26]
  i802.arc = i803[27]
  i802.arcMode = i803[28]
  i802.arcSpread = i803[29]
  i802.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[30], i802.arcSpeed)
  i802.donutRadius = i803[31]
  i802.position = new pc.Vec3( i803[32], i803[33], i803[34] )
  i802.rotation = new pc.Vec3( i803[35], i803[36], i803[37] )
  i802.scale = new pc.Vec3( i803[38], i803[39], i803[40] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemSizeBySpeed()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  i804.range = new pc.Vec2( i805[5], i805[6] )
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemSizeOverLifetime()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[1], i806.x)
  i806.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.y)
  i806.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.z)
  i806.separateAxes = !!i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.animation = i809[2]
  i808.numTilesX = i809[3]
  i808.numTilesY = i809[4]
  i808.useRandomRow = !!i809[5]
  i808.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[6], i808.frameOverTime)
  i808.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[7], i808.startFrame)
  i808.cycleCount = i809[8]
  i808.rowIndex = i809[9]
  i808.flipU = i809[10]
  i808.flipV = i809[11]
  i808.spriteCount = i809[12]
  var i811 = i809[13]
  var i810 = []
  for(var i = 0; i < i811.length; i += 2) {
  request.r(i811[i + 0], i811[i + 1], 2, i810, '')
  }
  i808.sprites = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[1], i814.x)
  i814.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.y)
  i814.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.z)
  i814.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.speedModifier)
  i814.space = i815[5]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemNoise()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.separateAxes = !!i817[1]
  i816.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.strengthX)
  i816.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[3], i816.strengthY)
  i816.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[4], i816.strengthZ)
  i816.frequency = i817[5]
  i816.damping = !!i817[6]
  i816.octaveCount = i817[7]
  i816.octaveMultiplier = i817[8]
  i816.octaveScale = i817[9]
  i816.quality = i817[10]
  i816.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[11], i816.scrollSpeed)
  i816.scrollSpeedMultiplier = i817[12]
  i816.remapEnabled = !!i817[13]
  i816.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[14], i816.remapX)
  i816.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[15], i816.remapY)
  i816.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[16], i816.remapZ)
  i816.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[17], i816.positionAmount)
  i816.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[18], i816.rotationAmount)
  i816.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[19], i816.sizeAmount)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemInheritVelocity()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.mode = i819[1]
  i818.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.curve)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemForceOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.x)
  i820.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.y)
  i820.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.z)
  i820.space = i821[4]
  i820.randomized = !!i821[5]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i822 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i823 = data
  i822.enabled = !!i823[0]
  i822.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[1], i822.limitX)
  i822.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[2], i822.limitY)
  i822.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[3], i822.limitZ)
  i822.dampen = i823[4]
  i822.separateAxes = !!i823[5]
  i822.space = i823[6]
  i822.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i823[7], i822.drag)
  i822.multiplyDragByParticleSize = !!i823[8]
  i822.multiplyDragByParticleVelocity = !!i823[9]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i825 = data
  i824.enabled = !!i825[0]
  request.r(i825[1], i825[2], 0, i824, 'sharedMaterial')
  var i827 = i825[3]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.sharedMaterials = i826
  i824.receiveShadows = !!i825[4]
  i824.shadowCastingMode = i825[5]
  i824.sortingLayerID = i825[6]
  i824.sortingOrder = i825[7]
  i824.lightmapIndex = i825[8]
  i824.lightmapSceneIndex = i825[9]
  i824.lightmapScaleOffset = new pc.Vec4( i825[10], i825[11], i825[12], i825[13] )
  i824.lightProbeUsage = i825[14]
  i824.reflectionProbeUsage = i825[15]
  request.r(i825[16], i825[17], 0, i824, 'mesh')
  i824.meshCount = i825[18]
  i824.activeVertexStreamsCount = i825[19]
  i824.alignment = i825[20]
  i824.renderMode = i825[21]
  i824.sortMode = i825[22]
  i824.lengthScale = i825[23]
  i824.velocityScale = i825[24]
  i824.cameraVelocityScale = i825[25]
  i824.normalDirection = i825[26]
  i824.sortingFudge = i825[27]
  i824.minParticleSize = i825[28]
  i824.maxParticleSize = i825[29]
  i824.pivot = new pc.Vec3( i825[30], i825[31], i825[32] )
  request.r(i825[33], i825[34], 0, i824, 'trailMaterial')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i831 = data
  i830.name = i831[0]
  i830.tag = i831[1]
  i830.enabled = !!i831[2]
  i830.isStatic = !!i831[3]
  i830.layer = i831[4]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i833 = data
  i832.name = i833[0]
  i832.width = i833[1]
  i832.height = i833[2]
  i832.mipmapCount = i833[3]
  i832.anisoLevel = i833[4]
  i832.filterMode = i833[5]
  i832.hdr = !!i833[6]
  i832.format = i833[7]
  i832.wrapMode = i833[8]
  i832.alphaIsTransparency = !!i833[9]
  i832.alphaSource = i833[10]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'sharedMesh')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'additionalVertexStreams')
  i836.enabled = !!i837[2]
  request.r(i837[3], i837[4], 0, i836, 'sharedMaterial')
  var i839 = i837[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.sharedMaterials = i838
  i836.receiveShadows = !!i837[6]
  i836.shadowCastingMode = i837[7]
  i836.sortingLayerID = i837[8]
  i836.sortingOrder = i837[9]
  i836.lightmapIndex = i837[10]
  i836.lightmapSceneIndex = i837[11]
  i836.lightmapScaleOffset = new pc.Vec4( i837[12], i837[13], i837[14], i837[15] )
  i836.lightProbeUsage = i837[16]
  i836.reflectionProbeUsage = i837[17]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i841 = data
  i840.name = i841[0]
  i840.halfPrecision = !!i841[1]
  i840.vertexCount = i841[2]
  i840.aabb = i841[3]
  var i843 = i841[4]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( !!i843[i + 0] );
  }
  i840.streams = i842
  i840.vertices = i841[5]
  var i845 = i841[6]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i845[i + 0]) );
  }
  i840.subMeshes = i844
  var i847 = i841[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 16) {
    i846.push( new pc.Mat4().setData(i847[i + 0], i847[i + 1], i847[i + 2], i847[i + 3],  i847[i + 4], i847[i + 5], i847[i + 6], i847[i + 7],  i847[i + 8], i847[i + 9], i847[i + 10], i847[i + 11],  i847[i + 12], i847[i + 13], i847[i + 14], i847[i + 15]) );
  }
  i840.bindposes = i846
  var i849 = i841[8]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i849[i + 0]) );
  }
  i840.blendShapes = i848
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i855 = data
  i854.triangles = i855[0]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i861 = data
  i860.name = i861[0]
  var i863 = i861[1]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i863[i + 0]) );
  }
  i860.frames = i862
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i865 = data
  i864.textureMode = i865[0]
  i864.alignment = i865[1]
  i864.widthCurve = new pc.AnimationCurve( { keys_flow: i865[2] } )
  i864.colorGradient = i865[3] ? new pc.ColorGradient(i865[3][0], i865[3][1], i865[3][2]) : null
  var i867 = i865[4]
  var i866 = []
  for(var i = 0; i < i867.length; i += 3) {
    i866.push( new pc.Vec3( i867[i + 0], i867[i + 1], i867[i + 2] ) );
  }
  i864.positions = i866
  i864.positionCount = i865[5]
  i864.widthMultiplier = i865[6]
  i864.startWidth = i865[7]
  i864.endWidth = i865[8]
  i864.numCornerVertices = i865[9]
  i864.numCapVertices = i865[10]
  i864.useWorldSpace = !!i865[11]
  i864.loop = !!i865[12]
  i864.startColor = new pc.Color(i865[13], i865[14], i865[15], i865[16])
  i864.endColor = new pc.Color(i865[17], i865[18], i865[19], i865[20])
  i864.generateLightingData = !!i865[21]
  i864.enabled = !!i865[22]
  request.r(i865[23], i865[24], 0, i864, 'sharedMaterial')
  var i869 = i865[25]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i864.sharedMaterials = i868
  i864.receiveShadows = !!i865[26]
  i864.shadowCastingMode = i865[27]
  i864.sortingLayerID = i865[28]
  i864.sortingOrder = i865[29]
  i864.lightmapIndex = i865[30]
  i864.lightmapSceneIndex = i865[31]
  i864.lightmapScaleOffset = new pc.Vec4( i865[32], i865[33], i865[34], i865[35] )
  i864.lightProbeUsage = i865[36]
  i864.reflectionProbeUsage = i865[37]
  return i864
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i872 = root || request.c( 'RopeBridge' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'StartPoint')
  request.r(i873[2], i873[3], 0, i872, 'EndPoint')
  i872.ropeSegLen = i873[4]
  i872.segmentLength = i873[5]
  i872.lineWidth = i873[6]
  i872.distOfStartToEnd = i873[7]
  i872.lineLengthMultifly = i873[8]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, 'animatorController')
  i874.updateMode = i875[2]
  var i877 = i875[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 2) {
  request.r(i877[i + 0], i877[i + 1], 2, i876, '')
  }
  i874.humanBones = i876
  i874.enabled = !!i875[4]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i881 = data
  i880.playAutomatically = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'clip')
  var i883 = i881[3]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.clips = i882
  i880.wrapMode = i881[4]
  i880.enabled = !!i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i887 = data
  i886.center = new pc.Vec3( i887[0], i887[1], i887[2] )
  i886.size = new pc.Vec3( i887[3], i887[4], i887[5] )
  i886.enabled = !!i887[6]
  i886.isTrigger = !!i887[7]
  request.r(i887[8], i887[9], 0, i886, 'material')
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i889 = data
  i888.enabled = !!i889[0]
  request.r(i889[1], i889[2], 0, i888, 'sharedMaterial')
  var i891 = i889[3]
  var i890 = []
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 2, i890, '')
  }
  i888.sharedMaterials = i890
  i888.receiveShadows = !!i889[4]
  i888.shadowCastingMode = i889[5]
  i888.sortingLayerID = i889[6]
  i888.sortingOrder = i889[7]
  i888.lightmapIndex = i889[8]
  i888.lightmapSceneIndex = i889[9]
  i888.lightmapScaleOffset = new pc.Vec4( i889[10], i889[11], i889[12], i889[13] )
  i888.lightProbeUsage = i889[14]
  i888.reflectionProbeUsage = i889[15]
  request.r(i889[16], i889[17], 0, i888, 'sharedMesh')
  var i893 = i889[18]
  var i892 = []
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 2, i892, '')
  }
  i888.bones = i892
  i888.updateWhenOffscreen = !!i889[19]
  i888.localBounds = i889[20]
  request.r(i889[21], i889[22], 0, i888, 'rootBone')
  var i895 = i889[23]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i895[i + 0]) );
  }
  i888.blendShapesWeights = i894
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i899 = data
  i898.weight = i899[0]
  return i898
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i900 = root || request.c( 'FishingLine' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'line')
  request.r(i901[2], i901[3], 0, i900, 'startPoint')
  request.r(i901[4], i901[5], 0, i900, 'endPoint')
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i903 = data
  i902.mass = i903[0]
  i902.drag = i903[1]
  i902.angularDrag = i903[2]
  i902.useGravity = !!i903[3]
  i902.isKinematic = !!i903[4]
  i902.constraints = i903[5]
  i902.maxAngularVelocity = i903[6]
  i902.collisionDetectionMode = i903[7]
  i902.interpolation = i903[8]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i905 = data
  i904.swingAxis = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i905[3], i904.twistLimitSpring)
  i904.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i905[4], i904.swingLimitSpring)
  i904.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i905[5], i904.lowTwistLimit)
  i904.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i905[6], i904.highTwistLimit)
  i904.swing1Limit = request.d('UnityEngine.SoftJointLimit', i905[7], i904.swing1Limit)
  i904.swing2Limit = request.d('UnityEngine.SoftJointLimit', i905[8], i904.swing2Limit)
  request.r(i905[9], i905[10], 0, i904, 'connectedBody')
  i904.axis = new pc.Vec3( i905[11], i905[12], i905[13] )
  i904.anchor = new pc.Vec3( i905[14], i905[15], i905[16] )
  i904.connectedAnchor = new pc.Vec3( i905[17], i905[18], i905[19] )
  i904.autoConfigureConnectedAnchor = !!i905[20]
  i904.massScale = i905[21]
  i904.connectedMassScale = i905[22]
  i904.enableCollision = !!i905[23]
  i904.breakForce = i905[24]
  i904.breakTorque = i905[25]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i909 = data
  i908.weight = i909[0]
  i908.vertices = i909[1]
  i908.normals = i909[2]
  i908.tangents = i909[3]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i911 = data
  i910.pivot = new pc.Vec2( i911[0], i911[1] )
  i910.anchorMin = new pc.Vec2( i911[2], i911[3] )
  i910.anchorMax = new pc.Vec2( i911[4], i911[5] )
  i910.sizeDelta = new pc.Vec2( i911[6], i911[7] )
  i910.anchoredPosition3D = new pc.Vec3( i911[8], i911[9], i911[10] )
  i910.rotation = new pc.Quat(i911[11], i911[12], i911[13], i911[14])
  i910.scale = new pc.Vec3( i911[15], i911[16], i911[17] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i913 = data
  i912.cullTransparentMesh = !!i913[0]
  return i912
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i914 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i915 = data
  i914.m_hasFontAssetChanged = !!i915[0]
  request.r(i915[1], i915[2], 0, i914, 'm_baseMaterial')
  i914.m_maskOffset = new pc.Vec4( i915[3], i915[4], i915[5], i915[6] )
  i914.m_text = i915[7]
  i914.m_isRightToLeft = !!i915[8]
  request.r(i915[9], i915[10], 0, i914, 'm_fontAsset')
  request.r(i915[11], i915[12], 0, i914, 'm_sharedMaterial')
  var i917 = i915[13]
  var i916 = []
  for(var i = 0; i < i917.length; i += 2) {
  request.r(i917[i + 0], i917[i + 1], 2, i916, '')
  }
  i914.m_fontSharedMaterials = i916
  request.r(i915[14], i915[15], 0, i914, 'm_fontMaterial')
  var i919 = i915[16]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i914.m_fontMaterials = i918
  i914.m_fontColor32 = UnityEngine.Color32.ConstructColor(i915[17], i915[18], i915[19], i915[20])
  i914.m_fontColor = new pc.Color(i915[21], i915[22], i915[23], i915[24])
  i914.m_enableVertexGradient = !!i915[25]
  i914.m_colorMode = i915[26]
  i914.m_fontColorGradient = request.d('TMPro.VertexGradient', i915[27], i914.m_fontColorGradient)
  request.r(i915[28], i915[29], 0, i914, 'm_fontColorGradientPreset')
  request.r(i915[30], i915[31], 0, i914, 'm_spriteAsset')
  i914.m_tintAllSprites = !!i915[32]
  request.r(i915[33], i915[34], 0, i914, 'm_StyleSheet')
  i914.m_TextStyleHashCode = i915[35]
  i914.m_overrideHtmlColors = !!i915[36]
  i914.m_faceColor = UnityEngine.Color32.ConstructColor(i915[37], i915[38], i915[39], i915[40])
  i914.m_fontSize = i915[41]
  i914.m_fontSizeBase = i915[42]
  i914.m_fontWeight = i915[43]
  i914.m_enableAutoSizing = !!i915[44]
  i914.m_fontSizeMin = i915[45]
  i914.m_fontSizeMax = i915[46]
  i914.m_fontStyle = i915[47]
  i914.m_HorizontalAlignment = i915[48]
  i914.m_VerticalAlignment = i915[49]
  i914.m_textAlignment = i915[50]
  i914.m_characterSpacing = i915[51]
  i914.m_wordSpacing = i915[52]
  i914.m_lineSpacing = i915[53]
  i914.m_lineSpacingMax = i915[54]
  i914.m_paragraphSpacing = i915[55]
  i914.m_charWidthMaxAdj = i915[56]
  i914.m_enableWordWrapping = !!i915[57]
  i914.m_wordWrappingRatios = i915[58]
  i914.m_overflowMode = i915[59]
  request.r(i915[60], i915[61], 0, i914, 'm_linkedTextComponent')
  request.r(i915[62], i915[63], 0, i914, 'parentLinkedComponent')
  i914.m_enableKerning = !!i915[64]
  i914.m_enableExtraPadding = !!i915[65]
  i914.checkPaddingRequired = !!i915[66]
  i914.m_isRichText = !!i915[67]
  i914.m_parseCtrlCharacters = !!i915[68]
  i914.m_isOrthographic = !!i915[69]
  i914.m_isCullingEnabled = !!i915[70]
  i914.m_horizontalMapping = i915[71]
  i914.m_verticalMapping = i915[72]
  i914.m_uvLineOffset = i915[73]
  i914.m_geometrySortingOrder = i915[74]
  i914.m_IsTextObjectScaleStatic = !!i915[75]
  i914.m_VertexBufferAutoSizeReduction = !!i915[76]
  i914.m_useMaxVisibleDescender = !!i915[77]
  i914.m_pageToDisplay = i915[78]
  i914.m_margin = new pc.Vec4( i915[79], i915[80], i915[81], i915[82] )
  i914.m_isUsingLegacyAnimationComponent = !!i915[83]
  i914.m_isVolumetricText = !!i915[84]
  request.r(i915[85], i915[86], 0, i914, 'm_Material')
  i914.m_Maskable = !!i915[87]
  i914.m_Color = new pc.Color(i915[88], i915[89], i915[90], i915[91])
  i914.m_RaycastTarget = !!i915[92]
  i914.m_RaycastPadding = new pc.Vec4( i915[93], i915[94], i915[95], i915[96] )
  return i914
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i920 = root || request.c( 'TMPro.VertexGradient' )
  var i921 = data
  i920.topLeft = new pc.Color(i921[0], i921[1], i921[2], i921[3])
  i920.topRight = new pc.Color(i921[4], i921[5], i921[6], i921[7])
  i920.bottomLeft = new pc.Color(i921[8], i921[9], i921[10], i921[11])
  i920.bottomRight = new pc.Color(i921[12], i921[13], i921[14], i921[15])
  return i920
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.UI.Image' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'm_Sprite')
  i922.m_Type = i923[2]
  i922.m_PreserveAspect = !!i923[3]
  i922.m_FillCenter = !!i923[4]
  i922.m_FillMethod = i923[5]
  i922.m_FillAmount = i923[6]
  i922.m_FillClockwise = !!i923[7]
  i922.m_FillOrigin = i923[8]
  i922.m_UseSpriteMesh = !!i923[9]
  i922.m_PixelsPerUnitMultiplier = i923[10]
  request.r(i923[11], i923[12], 0, i922, 'm_Material')
  i922.m_Maskable = !!i923[13]
  i922.m_Color = new pc.Color(i923[14], i923[15], i923[16], i923[17])
  i922.m_RaycastTarget = !!i923[18]
  i922.m_RaycastPadding = new pc.Vec4( i923[19], i923[20], i923[21], i923[22] )
  return i922
}

Deserializers["Fish"] = function (request, data, root) {
  var i924 = root || request.c( 'Fish' )
  var i925 = data
  i924.fishType = request.d('FishType', i925[0], i924.fishType)
  request.r(i925[1], i925[2], 0, i924, 'fishData')
  i924.sensingRadius = i925[3]
  i924.moveSpeed = i925[4]
  i924.followTargetSpeed = i925[5]
  i924.rotationSpeed = i925[6]
  request.r(i925[7], i925[8], 0, i924, 'target')
  i924.usingMapDataNumber = i925[9]
  i924.hooked = !!i925[10]
  request.r(i925[11], i925[12], 0, i924, 'rigid')
  i924.dirToHook = new pc.Vec3( i925[13], i925[14], i925[15] )
  request.r(i925[16], i925[17], 0, i924, 'head')
  request.r(i925[18], i925[19], 0, i924, 'mapData')
  request.r(i925[20], i925[21], 0, i924, 'mousePoint')
  return i924
}

Deserializers["FishType"] = function (request, data, root) {
  var i926 = root || request.c( 'FishType' )
  var i927 = data
  i926.cost = i927[0]
  i926.tier = i927[1]
  i926.fishNumber = i927[2]
  i926.boundSize = new pc.Vec3( i927[3], i927[4], i927[5] )
  return i926
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i928 = root || request.c( 'ChestMover' )
  var i929 = data
  request.r(i929[0], i929[1], 0, i928, 'chest')
  return i928
}

Deserializers["Chest"] = function (request, data, root) {
  var i930 = root || request.c( 'Chest' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'chestMover')
  i930.chestTier = i931[2]
  request.r(i931[3], i931[4], 0, i930, 'line')
  i930.chestPullDist = i931[5]
  i930.pullForce = i931[6]
  i930.fishType = request.d('FishType', i931[7], i930.fishType)
  request.r(i931[8], i931[9], 0, i930, 'fishData')
  i930.sensingRadius = i931[10]
  i930.moveSpeed = i931[11]
  i930.followTargetSpeed = i931[12]
  i930.rotationSpeed = i931[13]
  request.r(i931[14], i931[15], 0, i930, 'target')
  i930.usingMapDataNumber = i931[16]
  i930.hooked = !!i931[17]
  request.r(i931[18], i931[19], 0, i930, 'rigid2')
  request.r(i931[20], i931[21], 0, i930, 'rigid')
  i930.dirToHook = new pc.Vec3( i931[22], i931[23], i931[24] )
  request.r(i931[25], i931[26], 0, i930, 'head')
  request.r(i931[27], i931[28], 0, i930, 'mapData')
  request.r(i931[29], i931[30], 0, i930, 'mousePoint')
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i933 = data
  i932.enabled = !!i933[0]
  i932.type = i933[1]
  i932.color = new pc.Color(i933[2], i933[3], i933[4], i933[5])
  i932.cullingMask = i933[6]
  i932.intensity = i933[7]
  i932.range = i933[8]
  i932.spotAngle = i933[9]
  i932.shadows = i933[10]
  i932.shadowNormalBias = i933[11]
  i932.shadowBias = i933[12]
  i932.shadowStrength = i933[13]
  i932.shadowResolution = i933[14]
  i932.lightmapBakeType = i933[15]
  i932.renderMode = i933[16]
  request.r(i933[17], i933[18], 0, i932, 'cookie')
  i932.cookieSize = i933[19]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i935 = data
  i934.enabled = !!i935[0]
  request.r(i935[1], i935[2], 0, i934, 'sharedMaterial')
  var i937 = i935[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.sharedMaterials = i936
  i934.receiveShadows = !!i935[4]
  i934.shadowCastingMode = i935[5]
  i934.sortingLayerID = i935[6]
  i934.sortingOrder = i935[7]
  i934.lightmapIndex = i935[8]
  i934.lightmapSceneIndex = i935[9]
  i934.lightmapScaleOffset = new pc.Vec4( i935[10], i935[11], i935[12], i935[13] )
  i934.lightProbeUsage = i935[14]
  i934.reflectionProbeUsage = i935[15]
  i934.color = new pc.Color(i935[16], i935[17], i935[18], i935[19])
  request.r(i935[20], i935[21], 0, i934, 'sprite')
  i934.flipX = !!i935[22]
  i934.flipY = !!i935[23]
  i934.drawMode = i935[24]
  i934.size = new pc.Vec2( i935[25], i935[26] )
  i934.tileMode = i935[27]
  i934.adaptiveModeThreshold = i935[28]
  i934.maskInteraction = i935[29]
  i934.spriteSortPoint = i935[30]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i939 = data
  i938.name = i939[0]
  i938.atlasId = i939[1]
  i938.mipmapCount = i939[2]
  i938.hdr = !!i939[3]
  i938.size = i939[4]
  i938.anisoLevel = i939[5]
  i938.filterMode = i939[6]
  i938.wrapMode = i939[7]
  var i941 = i939[8]
  var i940 = []
  for(var i = 0; i < i941.length; i += 4) {
    i940.push( UnityEngine.Rect.MinMaxRect(i941[i + 0], i941[i + 1], i941[i + 2], i941[i + 3]) );
  }
  i938.rects = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i945 = data
  i944.name = i945[0]
  i944.index = i945[1]
  i944.startup = !!i945[2]
  return i944
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i946 = root || request.c( 'LunaChallenge' )
  var i947 = data
  i946.challengeClear = !!i947[0]
  request.r(i947[1], i947[2], 0, i946, 'challengeObject')
  request.r(i947[3], i947[4], 0, i946, 'challengeCount')
  request.r(i947[5], i947[6], 0, i946, 'challengeClearObject')
  request.r(i947[7], i947[8], 0, i946, 'challengeSlotObject')
  request.r(i947[9], i947[10], 0, i946, 'tapToStartObject')
  request.r(i947[11], i947[12], 0, i946, 'EndCard')
  request.r(i947[13], i947[14], 0, i946, 'lunaDynamic')
  i946.goalCount = i947[15]
  i946.currentCount = i947[16]
  return i946
}

Deserializers["LunaDynamic"] = function (request, data, root) {
  var i948 = root || request.c( 'LunaDynamic' )
  var i949 = data
  i948.challengeCount = i949[0]
  i948.stageNum = i949[1]
  i948.goToStore = !!i949[2]
  var i951 = i949[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.stages = i950
  return i948
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i954 = root || request.c( 'FishingRod' )
  var i955 = data
  i954.hookThrowForce = i955[0]
  i954.lineForce = i955[1]
  i954.maxPullingForce = i955[2]
  i954.minPullingForce = i955[3]
  i954.currentPullingForece = i955[4]
  i954.maxLine = i955[5]
  i954.pullingSpeed = i955[6]
  i954.playAdsPullCount = i955[7]
  i954.isStart = !!i955[8]
  request.r(i955[9], i955[10], 0, i954, 'hookRigid')
  request.r(i955[11], i955[12], 0, i954, 'pivot')
  request.r(i955[13], i955[14], 0, i954, 'touchToStartPanel')
  request.r(i955[15], i955[16], 0, i954, 'rodAnimator')
  request.r(i955[17], i955[18], 0, i954, 'fishingHook')
  request.r(i955[19], i955[20], 0, i954, 'touchField')
  request.r(i955[21], i955[22], 0, i954, 'upgradePanel')
  request.r(i955[23], i955[24], 0, i954, 'upgradeButton')
  request.r(i955[25], i955[26], 0, i954, 'depthText')
  request.r(i955[27], i955[28], 0, i954, 'touchToPullPanel')
  request.r(i955[29], i955[30], 0, i954, 'throwTarget1')
  request.r(i955[31], i955[32], 0, i954, 'throwTarget2')
  request.r(i955[33], i955[34], 0, i954, 'hookObject')
  request.r(i955[35], i955[36], 0, i954, 'playerObject')
  request.r(i955[37], i955[38], 0, i954, 'animationController')
  return i954
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i956 = root || request.c( 'FishingLogic' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'joint')
  i956.biteBate = !!i957[2]
  i956.pulling = !!i957[3]
  i956.enablePulling = !!i957[4]
  request.r(i957[5], i957[6], 0, i956, 'rodAnimator')
  request.r(i957[7], i957[8], 0, i956, 'animationController')
  request.r(i957[9], i957[10], 0, i956, 'startButton')
  request.r(i957[11], i957[12], 0, i956, 'catchSlider')
  request.r(i957[13], i957[14], 0, i956, 'catchButton')
  request.r(i957[15], i957[16], 0, i956, 'fishingRod')
  request.r(i957[17], i957[18], 0, i956, 'arrow')
  request.r(i957[19], i957[20], 0, i956, 'fishingRodSkinned')
  request.r(i957[21], i957[22], 0, i956, 'bubbleParticle')
  request.r(i957[23], i957[24], 0, i956, 'hookRigid')
  request.r(i957[25], i957[26], 0, i956, 'hook')
  return i956
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i958 = root || request.c( 'Upgrades' )
  var i959 = data
  i958.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i959[0], i958.lineLengthUpgrade)
  i958.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i959[1], i958.hookMaxUpgrade)
  i958.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i959[2], i958.hookMoveSpeedUpgrade)
  request.r(i959[3], i959[4], 0, i958, 'hook')
  request.r(i959[5], i959[6], 0, i958, 'rod')
  request.r(i959[7], i959[8], 0, i958, 'touchField')
  request.r(i959[9], i959[10], 0, i958, 'upgradePanel')
  request.r(i959[11], i959[12], 0, i958, 'upgradeTap')
  request.r(i959[13], i959[14], 0, i958, 'closeTap')
  request.r(i959[15], i959[16], 0, i958, 'tapToStartText')
  return i958
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i960 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i961 = data
  i960.currentLevel = i961[0]
  i960.maxLevel = i961[1]
  i960.upgradeValue = i961[2]
  i960.upgradeNeedyCost = i961[3]
  i960.upgradeCostIncreaseValue = i961[4]
  i960.upgradeCostIncreaseValueMultifly = i961[5]
  request.r(i961[6], i961[7], 0, i960, 'levelText')
  request.r(i961[8], i961[9], 0, i960, 'needyCostText')
  request.r(i961[10], i961[11], 0, i960, 'cover')
  request.r(i961[12], i961[13], 0, i960, 'rod')
  return i960
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i962 = root || request.c( 'Upgrades+CountUpgrade' )
  var i963 = data
  i962.currentLevel = i963[0]
  i962.maxLevel = i963[1]
  i962.upgradeValue = i963[2]
  i962.upgradeNeedyCost = i963[3]
  i962.upgradeCostIncreaseValue = i963[4]
  i962.upgradeCostIncreaseValueMultifly = i963[5]
  request.r(i963[6], i963[7], 0, i962, 'levelText')
  request.r(i963[8], i963[9], 0, i962, 'needyCostText')
  request.r(i963[10], i963[11], 0, i962, 'cover')
  request.r(i963[12], i963[13], 0, i962, 'hook')
  return i962
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i964 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i965 = data
  i964.currentLevel = i965[0]
  i964.maxLevel = i965[1]
  i964.upgradeValue = i965[2]
  i964.upgradeNeedyCost = i965[3]
  i964.upgradeCostIncreaseValue = i965[4]
  i964.upgradeCostIncreaseValueMultifly = i965[5]
  request.r(i965[6], i965[7], 0, i964, 'levelText')
  request.r(i965[8], i965[9], 0, i964, 'needyCostText')
  request.r(i965[10], i965[11], 0, i964, 'cover')
  request.r(i965[12], i965[13], 0, i964, 'touchField')
  return i964
}

Deserializers["FishPool"] = function (request, data, root) {
  var i966 = root || request.c( 'FishPool' )
  var i967 = data
  i966.oneTierFishList = request.d('FishList', i967[0], i966.oneTierFishList)
  i966.twoTierFishList = request.d('FishList', i967[1], i966.twoTierFishList)
  i966.threeTierFishList = request.d('FishList', i967[2], i966.threeTierFishList)
  i966.fourTierFishList = request.d('FishList', i967[3], i966.fourTierFishList)
  i966.fiveTierFishList = request.d('FishList', i967[4], i966.fiveTierFishList)
  i966.chestList_one = request.d('FishList', i967[5], i966.chestList_one)
  i966.chestList_two = request.d('FishList', i967[6], i966.chestList_two)
  i966.chestList_three = request.d('FishList', i967[7], i966.chestList_three)
  i966.chestMover = request.d('FishList', i967[8], i966.chestMover)
  var i969 = i967[9]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i966.generatedFishList = i968
  request.r(i967[10], i967[11], 0, i966, 'poolParent')
  return i966
}

Deserializers["FishList"] = function (request, data, root) {
  var i970 = root || request.c( 'FishList' )
  var i971 = data
  var i973 = i971[0]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i970.fishList = i972
  var i975 = i971[1]
  var i974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 1, i974, '')
  }
  i970.spawnPoints = i974
  return i970
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i982 = root || request.c( 'LowLineRenderer' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'line')
  request.r(i983[2], i983[3], 0, i982, 'start')
  request.r(i983[4], i983[5], 0, i982, 'end')
  return i982
}

Deserializers["DataManager"] = function (request, data, root) {
  var i984 = root || request.c( 'DataManager' )
  var i985 = data
  request.r(i985[0], i985[1], 0, i984, 'setting')
  request.r(i985[2], i985[3], 0, i984, 'soundSlider')
  request.r(i985[4], i985[5], 0, i984, 'hapticSlider')
  i984.gameDataFileName = i985[6]
  i984._gameData = request.d('GameData', i985[7], i984._gameData)
  request.r(i985[8], i985[9], 0, i984, 'soundSliderHandleText')
  request.r(i985[10], i985[11], 0, i984, 'hapticSliderHandleText')
  return i984
}

Deserializers["GameData"] = function (request, data, root) {
  var i986 = root || request.c( 'GameData' )
  var i987 = data
  i986.money = i987[0]
  i986.needleUpgrade = i987[1]
  i986.lineUpgrade = i987[2]
  i986.reelUpgrade = i987[3]
  i986.sound = i987[4]
  i986.haptic = i987[5]
  return i986
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_FirstSelected')
  i988.m_sendNavigationEvents = !!i989[2]
  i988.m_DragThreshold = i989[3]
  return i988
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i991 = data
  i990.m_HorizontalAxis = i991[0]
  i990.m_VerticalAxis = i991[1]
  i990.m_SubmitButton = i991[2]
  i990.m_CancelButton = i991[3]
  i990.m_InputActionsPerSecond = i991[4]
  i990.m_RepeatDelay = i991[5]
  i990.m_ForceModuleActive = !!i991[6]
  i990.m_SendPointerHoverToParent = !!i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i993 = data
  i992.enabled = !!i993[0]
  i992.planeDistance = i993[1]
  i992.referencePixelsPerUnit = i993[2]
  i992.isFallbackOverlay = !!i993[3]
  i992.renderMode = i993[4]
  i992.renderOrder = i993[5]
  i992.sortingLayerName = i993[6]
  i992.sortingOrder = i993[7]
  i992.scaleFactor = i993[8]
  request.r(i993[9], i993[10], 0, i992, 'worldCamera')
  i992.overrideSorting = !!i993[11]
  i992.pixelPerfect = !!i993[12]
  i992.targetDisplay = i993[13]
  i992.overridePixelPerfect = !!i993[14]
  return i992
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i995 = data
  i994.m_UiScaleMode = i995[0]
  i994.m_ReferencePixelsPerUnit = i995[1]
  i994.m_ScaleFactor = i995[2]
  i994.m_ReferenceResolution = new pc.Vec2( i995[3], i995[4] )
  i994.m_ScreenMatchMode = i995[5]
  i994.m_MatchWidthOrHeight = i995[6]
  i994.m_PhysicalUnit = i995[7]
  i994.m_FallbackScreenDPI = i995[8]
  i994.m_DefaultSpriteDPI = i995[9]
  i994.m_DynamicPixelsPerUnit = i995[10]
  i994.m_PresetInfoIsWorld = !!i995[11]
  return i994
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i996 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i997 = data
  i996.m_IgnoreReversedGraphics = !!i997[0]
  i996.m_BlockingObjects = i997[1]
  i996.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i997[2] )
  return i996
}

Deserializers["UIManager"] = function (request, data, root) {
  var i998 = root || request.c( 'UIManager' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'challengeTarget')
  request.r(i999[2], i999[3], 0, i998, 'challengeText')
  request.r(i999[4], i999[5], 0, i998, 'versionText')
  i998.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i999[6] )
  i998.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i999[7] )
  request.r(i999[8], i999[9], 0, i998, 'uiCamera')
  var i1001 = i999[10]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.pictureModeObjects = i1000
  return i998
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i1002 = root || request.c( 'FixedTouchField' )
  var i1003 = data
  i1002.TouchDist = new pc.Vec2( i1003[0], i1003[1] )
  i1002.PointerOld = new pc.Vec2( i1003[2], i1003[3] )
  i1002.Pressed = !!i1003[4]
  i1002.hookMoveSpeed = i1003[5]
  request.r(i1003[6], i1003[7], 0, i1002, 'hook')
  request.r(i1003[8], i1003[9], 0, i1002, 'logic')
  request.r(i1003[10], i1003[11], 0, i1002, 'joystick_Background')
  request.r(i1003[12], i1003[13], 0, i1002, 'joystick_Handle')
  request.r(i1003[14], i1003[15], 0, i1002, 'canvas')
  request.r(i1003[16], i1003[17], 0, i1002, 'newCamera')
  i1002.clampDist = i1003[18]
  return i1002
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Button' )
  var i1005 = data
  i1004.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1005[0], i1004.m_OnClick)
  i1004.m_Navigation = request.d('UnityEngine.UI.Navigation', i1005[1], i1004.m_Navigation)
  i1004.m_Transition = i1005[2]
  i1004.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1005[3], i1004.m_Colors)
  i1004.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1005[4], i1004.m_SpriteState)
  i1004.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1005[5], i1004.m_AnimationTriggers)
  i1004.m_Interactable = !!i1005[6]
  request.r(i1005[7], i1005[8], 0, i1004, 'm_TargetGraphic')
  return i1004
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1007 = data
  i1006.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1007[0], i1006.m_PersistentCalls)
  return i1006
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('UnityEngine.Events.PersistentCall', i1011[i + 0]));
  }
  i1008.m_Calls = i1010
  return i1008
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'm_Target')
  i1014.m_TargetAssemblyTypeName = i1015[2]
  i1014.m_MethodName = i1015[3]
  i1014.m_Mode = i1015[4]
  i1014.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1015[5], i1014.m_Arguments)
  i1014.m_CallState = i1015[6]
  return i1014
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1017 = data
  request.r(i1017[0], i1017[1], 0, i1016, 'm_ObjectArgument')
  i1016.m_ObjectArgumentAssemblyTypeName = i1017[2]
  i1016.m_IntArgument = i1017[3]
  i1016.m_FloatArgument = i1017[4]
  i1016.m_StringArgument = i1017[5]
  i1016.m_BoolArgument = !!i1017[6]
  return i1016
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1019 = data
  i1018.m_Mode = i1019[0]
  i1018.m_WrapAround = !!i1019[1]
  request.r(i1019[2], i1019[3], 0, i1018, 'm_SelectOnUp')
  request.r(i1019[4], i1019[5], 0, i1018, 'm_SelectOnDown')
  request.r(i1019[6], i1019[7], 0, i1018, 'm_SelectOnLeft')
  request.r(i1019[8], i1019[9], 0, i1018, 'm_SelectOnRight')
  return i1018
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1021 = data
  i1020.m_NormalColor = new pc.Color(i1021[0], i1021[1], i1021[2], i1021[3])
  i1020.m_HighlightedColor = new pc.Color(i1021[4], i1021[5], i1021[6], i1021[7])
  i1020.m_PressedColor = new pc.Color(i1021[8], i1021[9], i1021[10], i1021[11])
  i1020.m_SelectedColor = new pc.Color(i1021[12], i1021[13], i1021[14], i1021[15])
  i1020.m_DisabledColor = new pc.Color(i1021[16], i1021[17], i1021[18], i1021[19])
  i1020.m_ColorMultiplier = i1021[20]
  i1020.m_FadeDuration = i1021[21]
  return i1020
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'm_HighlightedSprite')
  request.r(i1023[2], i1023[3], 0, i1022, 'm_PressedSprite')
  request.r(i1023[4], i1023[5], 0, i1022, 'm_SelectedSprite')
  request.r(i1023[6], i1023[7], 0, i1022, 'm_DisabledSprite')
  return i1022
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1025 = data
  i1024.m_NormalTrigger = i1025[0]
  i1024.m_HighlightedTrigger = i1025[1]
  i1024.m_PressedTrigger = i1025[2]
  i1024.m_SelectedTrigger = i1025[3]
  i1024.m_DisabledTrigger = i1025[4]
  return i1024
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1027 = data
  i1026.m_EffectColor = new pc.Color(i1027[0], i1027[1], i1027[2], i1027[3])
  i1026.m_EffectDistance = new pc.Vec2( i1027[4], i1027[5] )
  i1026.m_UseGraphicAlpha = !!i1027[6]
  return i1026
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'm_FillRect')
  request.r(i1029[2], i1029[3], 0, i1028, 'm_HandleRect')
  i1028.m_Direction = i1029[4]
  i1028.m_MinValue = i1029[5]
  i1028.m_MaxValue = i1029[6]
  i1028.m_WholeNumbers = !!i1029[7]
  i1028.m_Value = i1029[8]
  i1028.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1029[9], i1028.m_OnValueChanged)
  i1028.m_Navigation = request.d('UnityEngine.UI.Navigation', i1029[10], i1028.m_Navigation)
  i1028.m_Transition = i1029[11]
  i1028.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1029[12], i1028.m_Colors)
  i1028.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1029[13], i1028.m_SpriteState)
  i1028.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1029[14], i1028.m_AnimationTriggers)
  i1028.m_Interactable = !!i1029[15]
  request.r(i1029[16], i1029[17], 0, i1028, 'm_TargetGraphic')
  return i1028
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1031 = data
  i1030.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1031[0], i1030.m_PersistentCalls)
  return i1030
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i1032 = root || request.c( 'EnviromentEditor' )
  var i1033 = data
  i1032.oceanSpriteValueMultifly = i1033[0]
  i1032.sunLightIntensity = i1033[1]
  i1032.minSunLightIntensity = i1033[2]
  i1032.challengeLightIntensity = i1033[3]
  i1032.depthMaskTransparentValue = i1033[4]
  i1032.ambientLightIntensity = i1033[5]
  request.r(i1033[6], i1033[7], 0, i1032, 'hook')
  var i1035 = i1033[8]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 2) {
  request.r(i1035[i + 0], i1035[i + 1], 2, i1034, '')
  }
  i1032.Oceans = i1034
  request.r(i1033[9], i1033[10], 0, i1032, 'OceanSurface')
  request.r(i1033[11], i1033[12], 0, i1032, 'depthMask')
  request.r(i1033[13], i1033[14], 0, i1032, 'depthSprite')
  request.r(i1033[15], i1033[16], 0, i1032, 'depthMaskMat')
  request.r(i1033[17], i1033[18], 0, i1032, 'sunLights')
  request.r(i1033[19], i1033[20], 0, i1032, 'hookLight')
  request.r(i1033[21], i1033[22], 0, i1032, 'challengeLight')
  return i1032
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i1038 = root || request.c( 'ObjectMovement' )
  var i1039 = data
  i1038.moveX = i1039[0]
  i1038.moveSec = i1039[1]
  return i1038
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i1040 = root || request.c( 'OceanTrigger' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'touchToPullButton')
  request.r(i1041[2], i1041[3], 0, i1040, 'waterSplashParticle')
  request.r(i1041[4], i1041[5], 0, i1040, 'bubbleParticle')
  request.r(i1041[6], i1041[7], 0, i1040, 'arrow')
  request.r(i1041[8], i1041[9], 0, i1040, 'rigid')
  request.r(i1041[10], i1041[11], 0, i1040, 'hook')
  request.r(i1041[12], i1041[13], 0, i1040, 'rod')
  return i1040
}

Deserializers["Flock"] = function (request, data, root) {
  var i1042 = root || request.c( 'Flock' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'flockUnitPrefab')
  i1042.flockSize = i1043[2]
  i1042.spawnBounds = new pc.Vec3( i1043[3], i1043[4], i1043[5] )
  i1042._minSpeed = i1043[6]
  i1042._maxSpeed = i1043[7]
  i1042._cohesionDistance = i1043[8]
  i1042._avoidanceDistance = i1043[9]
  i1042._aligementDistance = i1043[10]
  i1042._obstacleDistance = i1043[11]
  i1042._boundsDistance = i1043[12]
  i1042._cohesionWeight = i1043[13]
  i1042._avoidanceWeight = i1043[14]
  i1042._aligementWeight = i1043[15]
  i1042._boundsWeight = i1043[16]
  i1042._obstacleWeight = i1043[17]
  return i1042
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1044 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'm_LookAt')
  request.r(i1045[2], i1045[3], 0, i1044, 'm_Follow')
  i1044.m_Lens = request.d('Cinemachine.LensSettings', i1045[4], i1044.m_Lens)
  i1044.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1045[5], i1044.m_Transitions)
  var i1047 = i1045[6]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1044.m_ExcludedPropertiesInInspector = i1046
  var i1049 = i1045[7]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1044.m_LockStageInInspector = i1048
  i1044.m_Priority = i1045[8]
  i1044.m_StandbyUpdate = i1045[9]
  i1044.m_LegacyBlendHint = i1045[10]
  request.r(i1045[11], i1045[12], 0, i1044, 'm_ComponentOwner')
  i1044.m_StreamingVersion = i1045[13]
  return i1044
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Cinemachine.LensSettings' )
  var i1051 = data
  i1050.FieldOfView = i1051[0]
  i1050.OrthographicSize = i1051[1]
  i1050.NearClipPlane = i1051[2]
  i1050.FarClipPlane = i1051[3]
  i1050.Dutch = i1051[4]
  i1050.ModeOverride = i1051[5]
  i1050.LensShift = new pc.Vec2( i1051[6], i1051[7] )
  i1050.GateFit = i1051[8]
  i1050.m_SensorSize = new pc.Vec2( i1051[9], i1051[10] )
  return i1050
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1052 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1053 = data
  i1052.m_BlendHint = i1053[0]
  i1052.m_InheritPosition = !!i1053[1]
  i1052.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1053[2], i1052.m_OnCameraLive)
  return i1052
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1054 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1055 = data
  i1054.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1055[0], i1054.m_PersistentCalls)
  return i1054
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1060 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1061 = data
  return i1060
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1063 = data
  i1062.m_TrackedObjectOffset = new pc.Vec3( i1063[0], i1063[1], i1063[2] )
  i1062.m_LookaheadTime = i1063[3]
  i1062.m_LookaheadSmoothing = i1063[4]
  i1062.m_LookaheadIgnoreY = !!i1063[5]
  i1062.m_HorizontalDamping = i1063[6]
  i1062.m_VerticalDamping = i1063[7]
  i1062.m_ScreenX = i1063[8]
  i1062.m_ScreenY = i1063[9]
  i1062.m_DeadZoneWidth = i1063[10]
  i1062.m_DeadZoneHeight = i1063[11]
  i1062.m_SoftZoneWidth = i1063[12]
  i1062.m_SoftZoneHeight = i1063[13]
  i1062.m_BiasX = i1063[14]
  i1062.m_BiasY = i1063[15]
  i1062.m_CenterOnActivate = !!i1063[16]
  return i1062
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1064 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1065 = data
  i1064.m_BindingMode = i1065[0]
  i1064.m_FollowOffset = new pc.Vec3( i1065[1], i1065[2], i1065[3] )
  i1064.m_XDamping = i1065[4]
  i1064.m_YDamping = i1065[5]
  i1064.m_ZDamping = i1065[6]
  i1064.m_AngularDampingMode = i1065[7]
  i1064.m_PitchDamping = i1065[8]
  i1064.m_YawDamping = i1065[9]
  i1064.m_RollDamping = i1065[10]
  i1064.m_AngularDamping = i1065[11]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1067 = data
  i1066.enabled = !!i1067[0]
  i1066.aspect = i1067[1]
  i1066.orthographic = !!i1067[2]
  i1066.orthographicSize = i1067[3]
  i1066.backgroundColor = new pc.Color(i1067[4], i1067[5], i1067[6], i1067[7])
  i1066.nearClipPlane = i1067[8]
  i1066.farClipPlane = i1067[9]
  i1066.fieldOfView = i1067[10]
  i1066.depth = i1067[11]
  i1066.clearFlags = i1067[12]
  i1066.cullingMask = i1067[13]
  i1066.rect = i1067[14]
  request.r(i1067[15], i1067[16], 0, i1066, 'targetTexture')
  return i1066
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i1068 = root || request.c( 'CameraMove' )
  var i1069 = data
  i1068.offset = new pc.Vec3( i1069[0], i1069[1], i1069[2] )
  request.r(i1069[3], i1069[4], 0, i1068, 'newCamera')
  request.r(i1069[5], i1069[6], 0, i1068, 'target')
  return i1068
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1070 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1071 = data
  i1070.m_ShowDebugText = !!i1071[0]
  i1070.m_ShowCameraFrustum = !!i1071[1]
  i1070.m_IgnoreTimeScale = !!i1071[2]
  request.r(i1071[3], i1071[4], 0, i1070, 'm_WorldUpOverride')
  i1070.m_UpdateMethod = i1071[5]
  i1070.m_BlendUpdateMethod = i1071[6]
  i1070.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1071[7], i1070.m_DefaultBlend)
  request.r(i1071[8], i1071[9], 0, i1070, 'm_CustomBlends')
  i1070.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1071[10], i1070.m_CameraCutEvent)
  i1070.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1071[11], i1070.m_CameraActivatedEvent)
  return i1070
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1072 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1073 = data
  i1072.m_Style = i1073[0]
  i1072.m_Time = i1073[1]
  i1072.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1073[2] } )
  return i1072
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1074 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1075 = data
  i1074.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1075[0], i1074.m_PersistentCalls)
  return i1074
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i1076 = root || request.c( 'CinemachineController' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'playerTrans')
  i1076.playerOffset = new pc.Vec3( i1077[2], i1077[3], i1077[4] )
  request.r(i1077[5], i1077[6], 0, i1076, 'hookTrans')
  i1076.hookOffset = new pc.Vec3( i1077[7], i1077[8], i1077[9] )
  request.r(i1077[10], i1077[11], 0, i1076, 'cvc_Hook')
  request.r(i1077[12], i1077[13], 0, i1076, 'cvc_Player')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1079 = data
  i1078.enabled = !!i1079[0]
  i1078.isTrigger = !!i1079[1]
  request.r(i1079[2], i1079[3], 0, i1078, 'material')
  i1078.center = new pc.Vec3( i1079[4], i1079[5], i1079[6] )
  i1078.radius = i1079[7]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1081 = data
  i1080.enabled = !!i1081[0]
  request.r(i1081[1], i1081[2], 0, i1080, 'sharedMaterial')
  var i1083 = i1081[3]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1080.sharedMaterials = i1082
  i1080.receiveShadows = !!i1081[4]
  i1080.shadowCastingMode = i1081[5]
  i1080.sortingLayerID = i1081[6]
  i1080.sortingOrder = i1081[7]
  i1080.lightmapIndex = i1081[8]
  i1080.lightmapSceneIndex = i1081[9]
  i1080.lightmapScaleOffset = new pc.Vec4( i1081[10], i1081[11], i1081[12], i1081[13] )
  i1080.lightProbeUsage = i1081[14]
  i1080.reflectionProbeUsage = i1081[15]
  var i1085 = i1081[16]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 3) {
    i1084.push( new pc.Vec3( i1085[i + 0], i1085[i + 1], i1085[i + 2] ) );
  }
  i1080.positions = i1084
  i1080.positionCount = i1081[17]
  i1080.time = i1081[18]
  i1080.startWidth = i1081[19]
  i1080.endWidth = i1081[20]
  i1080.widthMultiplier = i1081[21]
  i1080.autodestruct = !!i1081[22]
  i1080.emitting = !!i1081[23]
  i1080.numCornerVertices = i1081[24]
  i1080.numCapVertices = i1081[25]
  i1080.minVertexDistance = i1081[26]
  i1080.colorGradient = i1081[27] ? new pc.ColorGradient(i1081[27][0], i1081[27][1], i1081[27][2]) : null
  i1080.startColor = new pc.Color(i1081[28], i1081[29], i1081[30], i1081[31])
  i1080.endColor = new pc.Color(i1081[32], i1081[33], i1081[34], i1081[35])
  i1080.generateLightingData = !!i1081[36]
  i1080.textureMode = i1081[37]
  i1080.alignment = i1081[38]
  i1080.widthCurve = new pc.AnimationCurve( { keys_flow: i1081[39] } )
  return i1080
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i1086 = root || request.c( 'FishingHook' )
  var i1087 = data
  i1086.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i1087[0], i1086.OnMoneyChangeEvent)
  var i1089 = i1087[1]
  var i1088 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 1, i1088, '')
  }
  i1086.hookedFish = i1088
  request.r(i1087[2], i1087[3], 0, i1086, 'sellParticle')
  request.r(i1087[4], i1087[5], 0, i1086, 'sellParticleParent')
  i1086.targetHookZoomOffset = i1087[6]
  i1086.minDrag = i1087[7]
  i1086.maxDrag = i1087[8]
  i1086.dragSpeed = i1087[9]
  i1086.fishingHookScaleUpgradeValue = i1087[10]
  i1086.fullHooked = !!i1087[11]
  i1086.inTheOcean = !!i1087[12]
  i1086.money = i1087[13]
  request.r(i1087[14], i1087[15], 0, i1086, 'rigid')
  request.r(i1087[16], i1087[17], 0, i1086, 'canvas')
  request.r(i1087[18], i1087[19], 0, i1086, 'moneyTextPrefab')
  request.r(i1087[20], i1087[21], 0, i1086, 'moneyTextSpawnTransform')
  i1086.moneyTextSpawnMinOffset = new pc.Vec2( i1087[22], i1087[23] )
  i1086.moneyTextSpawnMaxOffset = new pc.Vec2( i1087[24], i1087[25] )
  var i1091 = i1087[26]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 2) {
  request.r(i1091[i + 0], i1091[i + 1], 2, i1090, '')
  }
  i1086.hookedTransforms = i1090
  request.r(i1087[27], i1087[28], 0, i1086, 'fishingRodSkinned')
  request.r(i1087[29], i1087[30], 0, i1086, 'cinemachineCamera')
  request.r(i1087[31], i1087[32], 0, i1086, 'startPoint')
  request.r(i1087[33], i1087[34], 0, i1086, 'hook')
  request.r(i1087[35], i1087[36], 0, i1086, 'rod')
  request.r(i1087[37], i1087[38], 0, i1086, 'playerModel')
  request.r(i1087[39], i1087[40], 0, i1086, 'upgradeButton')
  request.r(i1087[41], i1087[42], 0, i1086, 'depthText')
  request.r(i1087[43], i1087[44], 0, i1086, 'touchField')
  request.r(i1087[45], i1087[46], 0, i1086, 'catchRingParticle')
  request.r(i1087[47], i1087[48], 0, i1086, 'fishSkinPrefab')
  request.r(i1087[49], i1087[50], 0, i1086, 'fishSkinPoint1')
  request.r(i1087[51], i1087[52], 0, i1086, 'fishSkinPoint2')
  request.r(i1087[53], i1087[54], 0, i1086, 'moneyText')
  request.r(i1087[55], i1087[56], 0, i1086, 'HookedCount')
  return i1086
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1092 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1093 = data
  i1092.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1093[0], i1092.m_PersistentCalls)
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1095 = data
  i1094.ambientIntensity = i1095[0]
  i1094.reflectionIntensity = i1095[1]
  i1094.ambientMode = i1095[2]
  i1094.ambientLight = new pc.Color(i1095[3], i1095[4], i1095[5], i1095[6])
  i1094.ambientSkyColor = new pc.Color(i1095[7], i1095[8], i1095[9], i1095[10])
  i1094.ambientGroundColor = new pc.Color(i1095[11], i1095[12], i1095[13], i1095[14])
  i1094.ambientEquatorColor = new pc.Color(i1095[15], i1095[16], i1095[17], i1095[18])
  i1094.fogColor = new pc.Color(i1095[19], i1095[20], i1095[21], i1095[22])
  i1094.fogEndDistance = i1095[23]
  i1094.fogStartDistance = i1095[24]
  i1094.fogDensity = i1095[25]
  i1094.fog = !!i1095[26]
  request.r(i1095[27], i1095[28], 0, i1094, 'skybox')
  i1094.fogMode = i1095[29]
  var i1097 = i1095[30]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1097[i + 0]) );
  }
  i1094.lightmaps = i1096
  i1094.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1095[31], i1094.lightProbes)
  i1094.lightmapsMode = i1095[32]
  i1094.environmentLightingMode = i1095[33]
  i1094.ambientProbe = new pc.SphericalHarmonicsL2(i1095[34])
  i1094.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1095[35])
  i1094.useReferenceAmbientProbe = !!i1095[36]
  request.r(i1095[37], i1095[38], 0, i1094, 'customReflection')
  request.r(i1095[39], i1095[40], 0, i1094, 'defaultReflection')
  i1094.defaultReflectionMode = i1095[41]
  i1094.defaultReflectionResolution = i1095[42]
  i1094.sunLightObjectId = i1095[43]
  i1094.pixelLightCount = i1095[44]
  i1094.defaultReflectionHDR = !!i1095[45]
  i1094.hasLightDataAsset = !!i1095[46]
  i1094.hasManualGenerate = !!i1095[47]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1101 = data
  request.r(i1101[0], i1101[1], 0, i1100, 'lightmapColor')
  request.r(i1101[2], i1101[3], 0, i1100, 'lightmapDirection')
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1102 = root || new UnityEngine.LightProbes()
  var i1103 = data
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.bounciness = i1109[1]
  i1108.dynamicFriction = i1109[2]
  i1108.staticFriction = i1109[3]
  i1108.frictionCombine = i1109[4]
  i1108.bounceCombine = i1109[5]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1111 = data
  var i1113 = i1111[0]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(i1113[i + 0]);
  }
  i1110.invalidShaderVariants = i1112
  i1110.name = i1111[1]
  i1110.guid = i1111[2]
  var i1115 = i1111[3]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( i1115[i + 0] );
  }
  i1110.shaderDefinedKeywords = i1114
  var i1117 = i1111[4]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1117[i + 0]) );
  }
  i1110.passes = i1116
  var i1119 = i1111[5]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1119[i + 0]) );
  }
  i1110.usePasses = i1118
  var i1121 = i1111[6]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1121[i + 0]) );
  }
  i1110.defaultParameterValues = i1120
  request.r(i1111[7], i1111[8], 0, i1110, 'unityFallbackShader')
  i1110.readDepth = !!i1111[9]
  i1110.isCreatedByShaderGraph = !!i1111[10]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1126 = root || new pc.UnityShaderPass()
  var i1127 = data
  i1126.id = i1127[0]
  i1126.subShaderIndex = i1127[1]
  i1126.name = i1127[2]
  i1126.passType = i1127[3]
  i1126.usePass = !!i1127[4]
  i1126.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[5], i1126.zTest)
  i1126.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[6], i1126.zWrite)
  i1126.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[7], i1126.culling)
  i1126.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1127[8], i1126.blending)
  i1126.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1127[9], i1126.alphaBlending)
  i1126.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[10], i1126.colorWriteMask)
  i1126.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[11], i1126.offsetUnits)
  i1126.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[12], i1126.offsetFactor)
  i1126.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[13], i1126.stencilRef)
  i1126.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[14], i1126.stencilReadMask)
  i1126.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[15], i1126.stencilWriteMask)
  i1126.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1127[16], i1126.stencilOp)
  i1126.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1127[17], i1126.stencilOpFront)
  i1126.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1127[18], i1126.stencilOpBack)
  var i1129 = i1127[19]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1129[i + 0]) );
  }
  i1126.tags = i1128
  var i1131 = i1127[20]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.passDefinedKeywords = i1130
  var i1133 = i1127[21]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1133[i + 0]) );
  }
  i1126.passDefinedKeywordGroups = i1132
  var i1135 = i1127[22]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1135[i + 0]) );
  }
  i1126.variants = i1134
  var i1137 = i1127[23]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1137[i + 0]) );
  }
  i1126.excludedVariants = i1136
  i1126.hasDepthReader = !!i1127[24]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1139 = data
  i1138.val = i1139[0]
  i1138.name = i1139[1]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1141 = data
  i1140.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1141[0], i1140.src)
  i1140.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1141[1], i1140.dst)
  i1140.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1141[2], i1140.op)
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1143 = data
  i1142.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[0], i1142.pass)
  i1142.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[1], i1142.fail)
  i1142.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[2], i1142.zFail)
  i1142.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1143[3], i1142.comp)
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.value = i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1151 = data
  var i1153 = i1151[0]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1150.keywords = i1152
  i1150.hasDiscard = !!i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1157 = data
  i1156.passId = i1157[0]
  i1156.subShaderIndex = i1157[1]
  var i1159 = i1157[2]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( i1159[i + 0] );
  }
  i1156.keywords = i1158
  i1156.vertexProgram = i1157[3]
  i1156.fragmentProgram = i1157[4]
  i1156.readDepth = !!i1157[5]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'shader')
  i1162.pass = i1163[2]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.type = i1167[1]
  i1166.value = new pc.Vec4( i1167[2], i1167[3], i1167[4], i1167[5] )
  i1166.textureValue = i1167[6]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1169 = data
  i1168.name = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'texture')
  i1168.aabb = i1169[3]
  i1168.vertices = i1169[4]
  i1168.triangles = i1169[5]
  i1168.textureRect = UnityEngine.Rect.MinMaxRect(i1169[6], i1169[7], i1169[8], i1169[9])
  i1168.packedRect = UnityEngine.Rect.MinMaxRect(i1169[10], i1169[11], i1169[12], i1169[13])
  i1168.border = new pc.Vec4( i1169[14], i1169[15], i1169[16], i1169[17] )
  i1168.transparency = i1169[18]
  i1168.bounds = i1169[19]
  i1168.pixelsPerUnit = i1169[20]
  i1168.textureWidth = i1169[21]
  i1168.textureHeight = i1169[22]
  i1168.nativeSize = new pc.Vec2( i1169[23], i1169[24] )
  i1168.pivot = new pc.Vec2( i1169[25], i1169[26] )
  i1168.textureRectOffset = new pc.Vec2( i1169[27], i1169[28] )
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1171 = data
  i1170.name = i1171[0]
  i1170.wrapMode = i1171[1]
  i1170.isLooping = !!i1171[2]
  i1170.length = i1171[3]
  var i1173 = i1171[4]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1173[i + 0]) );
  }
  i1170.curves = i1172
  var i1175 = i1171[5]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1175[i + 0]) );
  }
  i1170.events = i1174
  i1170.halfPrecision = !!i1171[6]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1179 = data
  i1178.path = i1179[0]
  i1178.componentType = i1179[1]
  i1178.property = i1179[2]
  i1178.keys = i1179[3]
  var i1181 = i1179[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1181[i + 0]) );
  }
  i1178.objectReferenceKeys = i1180
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1185 = data
  i1184.time = i1185[0]
  request.r(i1185[1], i1185[2], 0, i1184, 'value')
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1189 = data
  i1188.functionName = i1189[0]
  i1188.floatParameter = i1189[1]
  i1188.intParameter = i1189[2]
  i1188.stringParameter = i1189[3]
  request.r(i1189[4], i1189[5], 0, i1188, 'objectReferenceParameter')
  i1188.time = i1189[6]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1191 = data
  i1190.name = i1191[0]
  var i1193 = i1191[1]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1193[i + 0]) );
  }
  i1190.states = i1192
  var i1195 = i1191[2]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1195[i + 0]) );
  }
  i1190.layers = i1194
  var i1197 = i1191[3]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1197[i + 0]) );
  }
  i1190.parameters = i1196
  var i1199 = i1191[4]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( i1199[i + 0] );
  }
  i1190.animationClips = i1198
  i1190.HasSubStateMachines = !!i1191[5]
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1203 = data
  i1202.cycleOffset = i1203[0]
  i1202.cycleOffsetParameter = i1203[1]
  i1202.cycleOffsetParameterActive = !!i1203[2]
  i1202.mirror = !!i1203[3]
  i1202.mirrorParameter = i1203[4]
  i1202.mirrorParameterActive = !!i1203[5]
  i1202.motionId = i1203[6]
  i1202.nameHash = i1203[7]
  i1202.fullPathHash = i1203[8]
  i1202.speed = i1203[9]
  i1202.speedParameter = i1203[10]
  i1202.speedParameterActive = !!i1203[11]
  i1202.tag = i1203[12]
  i1202.name = i1203[13]
  i1202.writeDefaultValues = !!i1203[14]
  var i1205 = i1203[15]
  var i1204 = []
  for(var i = 0; i < i1205.length; i += 1) {
    i1204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1205[i + 0]) );
  }
  i1202.transitions = i1204
  var i1207 = i1203[16]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 2) {
  request.r(i1207[i + 0], i1207[i + 1], 2, i1206, '')
  }
  i1202.behaviours = i1206
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1211 = data
  i1210.fullPath = i1211[0]
  i1210.canTransitionToSelf = !!i1211[1]
  i1210.duration = i1211[2]
  i1210.exitTime = i1211[3]
  i1210.hasExitTime = !!i1211[4]
  i1210.hasFixedDuration = !!i1211[5]
  i1210.interruptionSource = i1211[6]
  i1210.offset = i1211[7]
  i1210.orderedInterruption = !!i1211[8]
  i1210.destinationStateNameHash = i1211[9]
  i1210.destinationStateMachineId = i1211[10]
  i1210.isExit = !!i1211[11]
  i1210.mute = !!i1211[12]
  i1210.solo = !!i1211[13]
  var i1213 = i1211[14]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1213[i + 0]) );
  }
  i1210.conditions = i1212
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1217 = data
  i1216.mode = i1217[0]
  i1216.parameter = i1217[1]
  i1216.threshold = i1217[2]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1223 = data
  i1222.blendingMode = i1223[0]
  i1222.defaultWeight = i1223[1]
  i1222.name = i1223[2]
  i1222.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1223[3], i1222.stateMachine)
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1225 = data
  i1224.id = i1225[0]
  i1224.defaultStateNameHash = i1225[1]
  var i1227 = i1225[2]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1227[i + 0]) );
  }
  i1224.entryTransitions = i1226
  var i1229 = i1225[3]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1229[i + 0]) );
  }
  i1224.anyStateTransitions = i1228
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1233 = data
  i1232.destinationStateNameHash = i1233[0]
  i1232.destinationStateMachineId = i1233[1]
  i1232.isExit = !!i1233[2]
  i1232.mute = !!i1233[3]
  i1232.solo = !!i1233[4]
  var i1235 = i1233[5]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1235[i + 0]) );
  }
  i1232.conditions = i1234
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1239 = data
  i1238.defaultBool = !!i1239[0]
  i1238.defaultFloat = i1239[1]
  i1238.defaultInt = i1239[2]
  i1238.name = i1239[3]
  i1238.nameHash = i1239[4]
  i1238.type = i1239[5]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1241 = data
  i1240.name = i1241[0]
  i1240.bytes64 = i1241[1]
  i1240.data = i1241[2]
  return i1240
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1242 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1243 = data
  i1242.hashCode = i1243[0]
  request.r(i1243[1], i1243[2], 0, i1242, 'material')
  i1242.materialHashCode = i1243[3]
  request.r(i1243[4], i1243[5], 0, i1242, 'atlas')
  i1242.normalStyle = i1243[6]
  i1242.normalSpacingOffset = i1243[7]
  i1242.boldStyle = i1243[8]
  i1242.boldSpacing = i1243[9]
  i1242.italicStyle = i1243[10]
  i1242.tabSize = i1243[11]
  i1242.m_Version = i1243[12]
  i1242.m_SourceFontFileGUID = i1243[13]
  request.r(i1243[14], i1243[15], 0, i1242, 'm_SourceFontFile_EditorRef')
  request.r(i1243[16], i1243[17], 0, i1242, 'm_SourceFontFile')
  i1242.m_AtlasPopulationMode = i1243[18]
  i1242.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1243[19], i1242.m_FaceInfo)
  var i1245 = i1243[20]
  var i1244 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.add(request.d('UnityEngine.TextCore.Glyph', i1245[i + 0]));
  }
  i1242.m_GlyphTable = i1244
  var i1247 = i1243[21]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('TMPro.TMP_Character', i1247[i + 0]));
  }
  i1242.m_CharacterTable = i1246
  var i1249 = i1243[22]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 2) {
  request.r(i1249[i + 0], i1249[i + 1], 2, i1248, '')
  }
  i1242.m_AtlasTextures = i1248
  i1242.m_AtlasTextureIndex = i1243[23]
  i1242.m_IsMultiAtlasTexturesEnabled = !!i1243[24]
  i1242.m_ClearDynamicDataOnBuild = !!i1243[25]
  var i1251 = i1243[26]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('UnityEngine.TextCore.GlyphRect', i1251[i + 0]));
  }
  i1242.m_UsedGlyphRects = i1250
  var i1253 = i1243[27]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('UnityEngine.TextCore.GlyphRect', i1253[i + 0]));
  }
  i1242.m_FreeGlyphRects = i1252
  i1242.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1243[28], i1242.m_fontInfo)
  i1242.m_AtlasWidth = i1243[29]
  i1242.m_AtlasHeight = i1243[30]
  i1242.m_AtlasPadding = i1243[31]
  i1242.m_AtlasRenderMode = i1243[32]
  var i1255 = i1243[33]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.TMP_Glyph', i1255[i + 0]));
  }
  i1242.m_glyphInfoList = i1254
  i1242.m_KerningTable = request.d('TMPro.KerningTable', i1243[34], i1242.m_KerningTable)
  i1242.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1243[35], i1242.m_FontFeatureTable)
  var i1257 = i1243[36]
  var i1256 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 1, i1256, '')
  }
  i1242.fallbackFontAssets = i1256
  var i1259 = i1243[37]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1259.length; i += 2) {
  request.r(i1259[i + 0], i1259[i + 1], 1, i1258, '')
  }
  i1242.m_FallbackFontAssetTable = i1258
  i1242.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1243[38], i1242.m_CreationSettings)
  var i1261 = i1243[39]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('TMPro.TMP_FontWeightPair', i1261[i + 0]) );
  }
  i1242.m_FontWeightTable = i1260
  var i1263 = i1243[40]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('TMPro.TMP_FontWeightPair', i1263[i + 0]) );
  }
  i1242.fontWeights = i1262
  return i1242
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1265 = data
  i1264.m_FaceIndex = i1265[0]
  i1264.m_FamilyName = i1265[1]
  i1264.m_StyleName = i1265[2]
  i1264.m_PointSize = i1265[3]
  i1264.m_Scale = i1265[4]
  i1264.m_LineHeight = i1265[5]
  i1264.m_AscentLine = i1265[6]
  i1264.m_CapLine = i1265[7]
  i1264.m_MeanLine = i1265[8]
  i1264.m_Baseline = i1265[9]
  i1264.m_DescentLine = i1265[10]
  i1264.m_SuperscriptOffset = i1265[11]
  i1264.m_SuperscriptSize = i1265[12]
  i1264.m_SubscriptOffset = i1265[13]
  i1264.m_SubscriptSize = i1265[14]
  i1264.m_UnderlineOffset = i1265[15]
  i1264.m_UnderlineThickness = i1265[16]
  i1264.m_StrikethroughOffset = i1265[17]
  i1264.m_StrikethroughThickness = i1265[18]
  i1264.m_TabWidth = i1265[19]
  return i1264
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1269 = data
  i1268.m_Index = i1269[0]
  i1268.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1269[1], i1268.m_Metrics)
  i1268.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1269[2], i1268.m_GlyphRect)
  i1268.m_Scale = i1269[3]
  i1268.m_AtlasIndex = i1269[4]
  return i1268
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1271 = data
  i1270.m_Width = i1271[0]
  i1270.m_Height = i1271[1]
  i1270.m_HorizontalBearingX = i1271[2]
  i1270.m_HorizontalBearingY = i1271[3]
  i1270.m_HorizontalAdvance = i1271[4]
  return i1270
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1273 = data
  i1272.m_X = i1273[0]
  i1272.m_Y = i1273[1]
  i1272.m_Width = i1273[2]
  i1272.m_Height = i1273[3]
  return i1272
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_Character' )
  var i1277 = data
  i1276.m_ElementType = i1277[0]
  i1276.m_Unicode = i1277[1]
  i1276.m_GlyphIndex = i1277[2]
  i1276.m_Scale = i1277[3]
  return i1276
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1283 = data
  i1282.Name = i1283[0]
  i1282.PointSize = i1283[1]
  i1282.Scale = i1283[2]
  i1282.CharacterCount = i1283[3]
  i1282.LineHeight = i1283[4]
  i1282.Baseline = i1283[5]
  i1282.Ascender = i1283[6]
  i1282.CapHeight = i1283[7]
  i1282.Descender = i1283[8]
  i1282.CenterLine = i1283[9]
  i1282.SuperscriptOffset = i1283[10]
  i1282.SubscriptOffset = i1283[11]
  i1282.SubSize = i1283[12]
  i1282.Underline = i1283[13]
  i1282.UnderlineThickness = i1283[14]
  i1282.strikethrough = i1283[15]
  i1282.strikethroughThickness = i1283[16]
  i1282.TabWidth = i1283[17]
  i1282.Padding = i1283[18]
  i1282.AtlasWidth = i1283[19]
  i1282.AtlasHeight = i1283[20]
  return i1282
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1287 = data
  i1286.id = i1287[0]
  i1286.x = i1287[1]
  i1286.y = i1287[2]
  i1286.width = i1287[3]
  i1286.height = i1287[4]
  i1286.xOffset = i1287[5]
  i1286.yOffset = i1287[6]
  i1286.xAdvance = i1287[7]
  i1286.scale = i1287[8]
  return i1286
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1288 = root || request.c( 'TMPro.KerningTable' )
  var i1289 = data
  var i1291 = i1289[0]
  var i1290 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.add(request.d('TMPro.KerningPair', i1291[i + 0]));
  }
  i1288.kerningPairs = i1290
  return i1288
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.KerningPair' )
  var i1295 = data
  i1294.xOffset = i1295[0]
  i1294.m_FirstGlyph = i1295[1]
  i1294.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1295[2], i1294.m_FirstGlyphAdjustments)
  i1294.m_SecondGlyph = i1295[3]
  i1294.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1295[4], i1294.m_SecondGlyphAdjustments)
  i1294.m_IgnoreSpacingAdjustments = !!i1295[5]
  return i1294
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1299[i + 0]));
  }
  i1296.m_GlyphPairAdjustmentRecords = i1298
  return i1296
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1303 = data
  i1302.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1303[0], i1302.m_FirstAdjustmentRecord)
  i1302.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1303[1], i1302.m_SecondAdjustmentRecord)
  i1302.m_FeatureLookupFlags = i1303[2]
  return i1302
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1307 = data
  i1306.sourceFontFileName = i1307[0]
  i1306.sourceFontFileGUID = i1307[1]
  i1306.pointSizeSamplingMode = i1307[2]
  i1306.pointSize = i1307[3]
  i1306.padding = i1307[4]
  i1306.packingMode = i1307[5]
  i1306.atlasWidth = i1307[6]
  i1306.atlasHeight = i1307[7]
  i1306.characterSetSelectionMode = i1307[8]
  i1306.characterSequence = i1307[9]
  i1306.referencedFontAssetGUID = i1307[10]
  i1306.referencedTextAssetGUID = i1307[11]
  i1306.fontStyle = i1307[12]
  i1306.fontStyleModifier = i1307[13]
  i1306.renderMode = i1307[14]
  i1306.includeFontFeatures = !!i1307[15]
  return i1306
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1311 = data
  request.r(i1311[0], i1311[1], 0, i1310, 'regularTypeface')
  request.r(i1311[2], i1311[3], 0, i1310, 'italicTypeface')
  return i1310
}

Deserializers["MapData"] = function (request, data, root) {
  var i1312 = root || request.c( 'MapData' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('MapData+mapData', i1315[i + 0]));
  }
  i1312.mapDataList = i1314
  return i1312
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i1318 = root || request.c( 'MapData+mapData' )
  var i1319 = data
  i1318.tier = i1319[0]
  i1318.minMapSize = new pc.Vec3( i1319[1], i1319[2], i1319[3] )
  i1318.maxMapSize = new pc.Vec3( i1319[4], i1319[5], i1319[6] )
  return i1318
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_Settings' )
  var i1321 = data
  i1320.m_enableWordWrapping = !!i1321[0]
  i1320.m_enableKerning = !!i1321[1]
  i1320.m_enableExtraPadding = !!i1321[2]
  i1320.m_enableTintAllSprites = !!i1321[3]
  i1320.m_enableParseEscapeCharacters = !!i1321[4]
  i1320.m_EnableRaycastTarget = !!i1321[5]
  i1320.m_GetFontFeaturesAtRuntime = !!i1321[6]
  i1320.m_missingGlyphCharacter = i1321[7]
  i1320.m_warningsDisabled = !!i1321[8]
  request.r(i1321[9], i1321[10], 0, i1320, 'm_defaultFontAsset')
  i1320.m_defaultFontAssetPath = i1321[11]
  i1320.m_defaultFontSize = i1321[12]
  i1320.m_defaultAutoSizeMinRatio = i1321[13]
  i1320.m_defaultAutoSizeMaxRatio = i1321[14]
  i1320.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1321[15], i1321[16] )
  i1320.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1321[17], i1321[18] )
  i1320.m_autoSizeTextContainer = !!i1321[19]
  i1320.m_IsTextObjectScaleStatic = !!i1321[20]
  var i1323 = i1321[21]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1323.length; i += 2) {
  request.r(i1323[i + 0], i1323[i + 1], 1, i1322, '')
  }
  i1320.m_fallbackFontAssets = i1322
  i1320.m_matchMaterialPreset = !!i1321[22]
  request.r(i1321[23], i1321[24], 0, i1320, 'm_defaultSpriteAsset')
  i1320.m_defaultSpriteAssetPath = i1321[25]
  i1320.m_enableEmojiSupport = !!i1321[26]
  i1320.m_MissingCharacterSpriteUnicode = i1321[27]
  i1320.m_defaultColorGradientPresetsPath = i1321[28]
  request.r(i1321[29], i1321[30], 0, i1320, 'm_defaultStyleSheet')
  i1320.m_StyleSheetsResourcePath = i1321[31]
  request.r(i1321[32], i1321[33], 0, i1320, 'm_leadingCharacters')
  request.r(i1321[34], i1321[35], 0, i1320, 'm_followingCharacters')
  i1320.m_UseModernHangulLineBreakingRules = !!i1321[36]
  return i1320
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1324 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1325 = data
  i1324.hashCode = i1325[0]
  request.r(i1325[1], i1325[2], 0, i1324, 'material')
  i1324.materialHashCode = i1325[3]
  request.r(i1325[4], i1325[5], 0, i1324, 'spriteSheet')
  var i1327 = i1325[6]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.TMP_Sprite', i1327[i + 0]));
  }
  i1324.spriteInfoList = i1326
  var i1329 = i1325[7]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1329.length; i += 2) {
  request.r(i1329[i + 0], i1329[i + 1], 1, i1328, '')
  }
  i1324.fallbackSpriteAssets = i1328
  i1324.m_Version = i1325[8]
  i1324.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1325[9], i1324.m_FaceInfo)
  var i1331 = i1325[10]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('TMPro.TMP_SpriteCharacter', i1331[i + 0]));
  }
  i1324.m_SpriteCharacterTable = i1330
  var i1333 = i1325[11]
  var i1332 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.add(request.d('TMPro.TMP_SpriteGlyph', i1333[i + 0]));
  }
  i1324.m_SpriteGlyphTable = i1332
  return i1324
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1336 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.hashCode = i1337[1]
  i1336.unicode = i1337[2]
  i1336.pivot = new pc.Vec2( i1337[3], i1337[4] )
  request.r(i1337[5], i1337[6], 0, i1336, 'sprite')
  i1336.id = i1337[7]
  i1336.x = i1337[8]
  i1336.y = i1337[9]
  i1336.width = i1337[10]
  i1336.height = i1337[11]
  i1336.xOffset = i1337[12]
  i1336.yOffset = i1337[13]
  i1336.xAdvance = i1337[14]
  i1336.scale = i1337[15]
  return i1336
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1343 = data
  i1342.m_Name = i1343[0]
  i1342.m_HashCode = i1343[1]
  i1342.m_ElementType = i1343[2]
  i1342.m_Unicode = i1343[3]
  i1342.m_GlyphIndex = i1343[4]
  i1342.m_Scale = i1343[5]
  return i1342
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1346 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1347 = data
  request.r(i1347[0], i1347[1], 0, i1346, 'sprite')
  i1346.m_Index = i1347[2]
  i1346.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1347[3], i1346.m_Metrics)
  i1346.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1347[4], i1346.m_GlyphRect)
  i1346.m_Scale = i1347[5]
  i1346.m_AtlasIndex = i1347[6]
  return i1346
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1348 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.add(request.d('TMPro.TMP_Style', i1351[i + 0]));
  }
  i1348.m_StyleList = i1350
  return i1348
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1354 = root || request.c( 'TMPro.TMP_Style' )
  var i1355 = data
  i1354.m_Name = i1355[0]
  i1354.m_HashCode = i1355[1]
  i1354.m_OpeningDefinition = i1355[2]
  i1354.m_ClosingDefinition = i1355[3]
  i1354.m_OpeningTagArray = i1355[4]
  i1354.m_ClosingTagArray = i1355[5]
  i1354.m_OpeningTagUnicodeArray = i1355[6]
  i1354.m_ClosingTagUnicodeArray = i1355[7]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1357 = data
  var i1359 = i1357[0]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1359[i + 0]) );
  }
  i1356.files = i1358
  i1356.componentToPrefabIds = i1357[1]
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1363 = data
  i1362.path = i1363[0]
  request.r(i1363[1], i1363[2], 0, i1362, 'unityObject')
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1365 = data
  var i1367 = i1365[0]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1367[i + 0]) );
  }
  i1364.scriptsExecutionOrder = i1366
  var i1369 = i1365[1]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1369[i + 0]) );
  }
  i1364.sortingLayers = i1368
  var i1371 = i1365[2]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1371[i + 0]) );
  }
  i1364.cullingLayers = i1370
  i1364.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1365[3], i1364.timeSettings)
  i1364.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1365[4], i1364.physicsSettings)
  i1364.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1365[5], i1364.physics2DSettings)
  i1364.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1365[6], i1364.qualitySettings)
  i1364.enableRealtimeShadows = !!i1365[7]
  i1364.autoInstantiatePrefabs = !!i1365[8]
  i1364.enableAutoInstancing = !!i1365[9]
  i1364.lightmapEncodingQuality = i1365[10]
  i1364.desiredColorSpace = i1365[11]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1375 = data
  i1374.name = i1375[0]
  i1374.value = i1375[1]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1379 = data
  i1378.id = i1379[0]
  i1378.name = i1379[1]
  i1378.value = i1379[2]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1383 = data
  i1382.id = i1383[0]
  i1382.name = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1385 = data
  i1384.fixedDeltaTime = i1385[0]
  i1384.maximumDeltaTime = i1385[1]
  i1384.timeScale = i1385[2]
  i1384.maximumParticleTimestep = i1385[3]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1387 = data
  i1386.gravity = new pc.Vec3( i1387[0], i1387[1], i1387[2] )
  i1386.defaultSolverIterations = i1387[3]
  i1386.bounceThreshold = i1387[4]
  i1386.autoSyncTransforms = !!i1387[5]
  i1386.autoSimulation = !!i1387[6]
  var i1389 = i1387[7]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1389[i + 0]) );
  }
  i1386.collisionMatrix = i1388
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1393 = data
  i1392.enabled = !!i1393[0]
  i1392.layerId = i1393[1]
  i1392.otherLayerId = i1393[2]
  return i1392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1395 = data
  request.r(i1395[0], i1395[1], 0, i1394, 'material')
  i1394.gravity = new pc.Vec2( i1395[2], i1395[3] )
  i1394.positionIterations = i1395[4]
  i1394.velocityIterations = i1395[5]
  i1394.velocityThreshold = i1395[6]
  i1394.maxLinearCorrection = i1395[7]
  i1394.maxAngularCorrection = i1395[8]
  i1394.maxTranslationSpeed = i1395[9]
  i1394.maxRotationSpeed = i1395[10]
  i1394.timeToSleep = i1395[11]
  i1394.linearSleepTolerance = i1395[12]
  i1394.angularSleepTolerance = i1395[13]
  i1394.defaultContactOffset = i1395[14]
  i1394.autoSimulation = !!i1395[15]
  i1394.queriesHitTriggers = !!i1395[16]
  i1394.queriesStartInColliders = !!i1395[17]
  i1394.callbacksOnDisable = !!i1395[18]
  i1394.reuseCollisionCallbacks = !!i1395[19]
  i1394.autoSyncTransforms = !!i1395[20]
  var i1397 = i1395[21]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1397[i + 0]) );
  }
  i1394.collisionMatrix = i1396
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1401 = data
  i1400.enabled = !!i1401[0]
  i1400.layerId = i1401[1]
  i1400.otherLayerId = i1401[2]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1403 = data
  var i1405 = i1403[0]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1405[i + 0]) );
  }
  i1402.qualityLevels = i1404
  var i1407 = i1403[1]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1402.names = i1406
  i1402.shadows = i1403[2]
  i1402.anisotropicFiltering = i1403[3]
  i1402.antiAliasing = i1403[4]
  i1402.lodBias = i1403[5]
  i1402.shadowCascades = i1403[6]
  i1402.shadowDistance = i1403[7]
  i1402.shadowmaskMode = i1403[8]
  i1402.shadowProjection = i1403[9]
  i1402.shadowResolution = i1403[10]
  i1402.softParticles = !!i1403[11]
  i1402.softVegetation = !!i1403[12]
  i1402.activeColorSpace = i1403[13]
  i1402.desiredColorSpace = i1403[14]
  i1402.masterTextureLimit = i1403[15]
  i1402.maxQueuedFrames = i1403[16]
  i1402.particleRaycastBudget = i1403[17]
  i1402.pixelLightCount = i1403[18]
  i1402.realtimeReflectionProbes = !!i1403[19]
  i1402.shadowCascade2Split = i1403[20]
  i1402.shadowCascade4Split = new pc.Vec3( i1403[21], i1403[22], i1403[23] )
  i1402.streamingMipmapsActive = !!i1403[24]
  i1402.vSyncCount = i1403[25]
  i1402.asyncUploadBufferSize = i1403[26]
  i1402.asyncUploadTimeSlice = i1403[27]
  i1402.billboardsFaceCameraPosition = !!i1403[28]
  i1402.shadowNearPlaneOffset = i1403[29]
  i1402.streamingMipmapsMemoryBudget = i1403[30]
  i1402.maximumLODLevel = i1403[31]
  i1402.streamingMipmapsAddAllCameras = !!i1403[32]
  i1402.streamingMipmapsMaxLevelReduction = i1403[33]
  i1402.streamingMipmapsRenderersPerFrame = i1403[34]
  i1402.resolutionScalingFixedDPIFactor = i1403[35]
  i1402.streamingMipmapsMaxFileIORequests = i1403[36]
  i1402.currentQualityLevel = i1403[37]
  return i1402
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1411 = data
  i1410.xPlacement = i1411[0]
  i1410.yPlacement = i1411[1]
  i1410.xAdvance = i1411[2]
  i1410.yAdvance = i1411[3]
  return i1410
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1413 = data
  i1412.m_GlyphIndex = i1413[0]
  i1412.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1413[1], i1412.m_GlyphValueRecord)
  return i1412
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1414 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1415 = data
  i1414.m_XPlacement = i1415[0]
  i1414.m_YPlacement = i1415[1]
  i1414.m_XAdvance = i1415[2]
  i1414.m_YAdvance = i1415[3]
  return i1414
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[17],"83":[51],"20":[19],"84":[19],"85":[19],"86":[19],"87":[19],"88":[19],"89":[19],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[91],"99":[91],"100":[91],"101":[91],"102":[91],"103":[91],"104":[51],"105":[8],"106":[107],"108":[107],"50":[21],"109":[9],"110":[9],"111":[9],"112":[9],"113":[21],"114":[8,21],"24":[21,22],"115":[21],"116":[22,21],"117":[8],"118":[22,21],"119":[21],"120":[21],"121":[21],"53":[50],"26":[22,21],"122":[21],"52":[50],"123":[21],"124":[21],"125":[21],"126":[21],"127":[21],"128":[21],"129":[21],"130":[21],"131":[21],"132":[22,21],"133":[21],"134":[21],"135":[21],"47":[21],"136":[22,21],"137":[21],"138":[48],"139":[48],"49":[48],"140":[48],"141":[51],"142":[51],"143":[144],"145":[21],"146":[144],"147":[51],"148":[149],"150":[144]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","LunaChallenge","UnityEngine.GameObject","LunaDynamic","FishingRod","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","UnityEngine.PhysicMaterial","LowLineRenderer","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Outline","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "63.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1164";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4523";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "b7482249-f098-486d-b766-2263388433b4";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

