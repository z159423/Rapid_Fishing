var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.JointSpring' )
  var i707 = data
  i706.spring = i707[0]
  i706.damper = i707[1]
  i706.targetPosition = i707[2]
  return i706
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.JointMotor' )
  var i709 = data
  i708.m_TargetVelocity = i709[0]
  i708.m_Force = i709[1]
  i708.m_FreeSpin = i709[2]
  return i708
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.JointLimits' )
  var i711 = data
  i710.m_Min = i711[0]
  i710.m_Max = i711[1]
  i710.m_Bounciness = i711[2]
  i710.m_BounceMinVelocity = i711[3]
  i710.m_ContactDistance = i711[4]
  i710.minBounce = i711[5]
  i710.maxBounce = i711[6]
  return i710
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointDrive' )
  var i713 = data
  i712.m_PositionSpring = i713[0]
  i712.m_PositionDamper = i713[1]
  i712.m_MaximumForce = i713[2]
  return i712
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i715 = data
  i714.m_Spring = i715[0]
  i714.m_Damper = i715[1]
  return i714
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i717 = data
  i716.m_Limit = i717[0]
  i716.m_Bounciness = i717[1]
  i716.m_ContactDistance = i717[2]
  return i716
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i719 = data
  i718.m_ExtremumSlip = i719[0]
  i718.m_ExtremumValue = i719[1]
  i718.m_AsymptoteSlip = i719[2]
  i718.m_AsymptoteValue = i719[3]
  i718.m_Stiffness = i719[4]
  return i718
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i721 = data
  i720.m_LowerAngle = i721[0]
  i720.m_UpperAngle = i721[1]
  return i720
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i723 = data
  i722.m_MotorSpeed = i723[0]
  i722.m_MaximumMotorTorque = i723[1]
  return i722
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i725 = data
  i724.m_DampingRatio = i725[0]
  i724.m_Frequency = i725[1]
  i724.m_Angle = i725[2]
  return i724
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i727 = data
  i726.m_LowerTranslation = i727[0]
  i726.m_UpperTranslation = i727[1]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i728 = root || new pc.UnityMaterial()
  var i729 = data
  i728.name = i729[0]
  request.r(i729[1], i729[2], 0, i728, 'shader')
  i728.renderQueue = i729[3]
  i728.enableInstancing = !!i729[4]
  var i731 = i729[5]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i731[i + 0]) );
  }
  i728.floatParameters = i730
  var i733 = i729[6]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i733[i + 0]) );
  }
  i728.colorParameters = i732
  var i735 = i729[7]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i735[i + 0]) );
  }
  i728.vectorParameters = i734
  var i737 = i729[8]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i737[i + 0]) );
  }
  i728.textureParameters = i736
  var i739 = i729[9]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i739[i + 0]) );
  }
  i728.materialFlags = i738
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = i743[1]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i747 = data
  i746.name = i747[0]
  i746.value = new pc.Color(i747[1], i747[2], i747[3], i747[4])
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i751 = data
  i750.name = i751[0]
  i750.value = new pc.Vec4( i751[1], i751[2], i751[3], i751[4] )
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i755 = data
  i754.name = i755[0]
  request.r(i755[1], i755[2], 0, i754, 'value')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i759 = data
  i758.name = i759[0]
  i758.enabled = !!i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i761 = data
  i760.position = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.scale = new pc.Vec3( i761[3], i761[4], i761[5] )
  i760.rotation = new pc.Quat(i761[6], i761[7], i761[8], i761[9])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i763 = data
  i762.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i763[0], i762.main)
  i762.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i763[1], i762.colorBySpeed)
  i762.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i763[2], i762.colorOverLifetime)
  i762.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i763[3], i762.emission)
  i762.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i763[4], i762.rotationBySpeed)
  i762.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i763[5], i762.rotationOverLifetime)
  i762.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i763[6], i762.shape)
  i762.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i763[7], i762.sizeBySpeed)
  i762.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i763[8], i762.sizeOverLifetime)
  i762.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i763[9], i762.textureSheetAnimation)
  i762.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i763[10], i762.velocityOverLifetime)
  i762.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i763[11], i762.noise)
  i762.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i763[12], i762.inheritVelocity)
  i762.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i763[13], i762.forceOverLifetime)
  i762.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i763[14], i762.limitVelocityOverLifetime)
  i762.useAutoRandomSeed = !!i763[15]
  i762.randomSeed = i763[16]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i764 = root || new pc.ParticleSystemMain()
  var i765 = data
  i764.duration = i765[0]
  i764.loop = !!i765[1]
  i764.prewarm = !!i765[2]
  i764.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[3], i764.startDelay)
  i764.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[4], i764.startLifetime)
  i764.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[5], i764.startSpeed)
  i764.startSize3D = !!i765[6]
  i764.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[7], i764.startSizeX)
  i764.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[8], i764.startSizeY)
  i764.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[9], i764.startSizeZ)
  i764.startRotation3D = !!i765[10]
  i764.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[11], i764.startRotationX)
  i764.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[12], i764.startRotationY)
  i764.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[13], i764.startRotationZ)
  i764.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i765[14], i764.startColor)
  i764.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i765[15], i764.gravityModifier)
  i764.simulationSpace = i765[16]
  request.r(i765[17], i765[18], 0, i764, 'customSimulationSpace')
  i764.simulationSpeed = i765[19]
  i764.useUnscaledTime = !!i765[20]
  i764.scalingMode = i765[21]
  i764.playOnAwake = !!i765[22]
  i764.maxParticles = i765[23]
  i764.emitterVelocityMode = i765[24]
  i764.stopAction = i765[25]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i766 = root || new pc.MinMaxCurve()
  var i767 = data
  i766.mode = i767[0]
  i766.curveMin = new pc.AnimationCurve( { keys_flow: i767[1] } )
  i766.curveMax = new pc.AnimationCurve( { keys_flow: i767[2] } )
  i766.curveMultiplier = i767[3]
  i766.constantMin = i767[4]
  i766.constantMax = i767[5]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i768 = root || new pc.MinMaxGradient()
  var i769 = data
  i768.mode = i769[0]
  i768.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i769[1], i768.gradientMin)
  i768.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i769[2], i768.gradientMax)
  i768.colorMin = new pc.Color(i769[3], i769[4], i769[5], i769[6])
  i768.colorMax = new pc.Color(i769[7], i769[8], i769[9], i769[10])
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i771 = data
  i770.mode = i771[0]
  var i773 = i771[1]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i773[i + 0]) );
  }
  i770.colorKeys = i772
  var i775 = i771[2]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i775[i + 0]) );
  }
  i770.alphaKeys = i774
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemColorBySpeed()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i777[1], i776.color)
  i776.range = new pc.Vec2( i777[2], i777[3] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i781 = data
  i780.color = new pc.Color(i781[0], i781[1], i781[2], i781[3])
  i780.time = i781[4]
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i785 = data
  i784.alpha = i785[0]
  i784.time = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemColorOverLifetime()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i787[1], i786.color)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemEmitter()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.rateOverTime)
  i788.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.rateOverDistance)
  var i791 = i789[3]
  var i790 = []
  for(var i = 0; i < i791.length; i += 1) {
    i790.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i791[i + 0]) );
  }
  i788.bursts = i790
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemBurst()
  var i795 = data
  i794.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[0], i794.count)
  i794.cycleCount = i795[1]
  i794.minCount = i795[2]
  i794.maxCount = i795[3]
  i794.repeatInterval = i795[4]
  i794.time = i795[5]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemRotationBySpeed()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  i796.range = new pc.Vec2( i797[5], i797[6] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemRotationOverLifetime()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[1], i798.x)
  i798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[2], i798.y)
  i798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[3], i798.z)
  i798.separateAxes = !!i799[4]
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i800 = root || new pc.ParticleSystemShape()
  var i801 = data
  i800.enabled = !!i801[0]
  i800.shapeType = i801[1]
  i800.randomDirectionAmount = i801[2]
  i800.sphericalDirectionAmount = i801[3]
  i800.randomPositionAmount = i801[4]
  i800.alignToDirection = !!i801[5]
  i800.radius = i801[6]
  i800.radiusMode = i801[7]
  i800.radiusSpread = i801[8]
  i800.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[9], i800.radiusSpeed)
  i800.radiusThickness = i801[10]
  i800.angle = i801[11]
  i800.length = i801[12]
  i800.boxThickness = new pc.Vec3( i801[13], i801[14], i801[15] )
  i800.meshShapeType = i801[16]
  request.r(i801[17], i801[18], 0, i800, 'mesh')
  request.r(i801[19], i801[20], 0, i800, 'meshRenderer')
  request.r(i801[21], i801[22], 0, i800, 'skinnedMeshRenderer')
  i800.useMeshMaterialIndex = !!i801[23]
  i800.meshMaterialIndex = i801[24]
  i800.useMeshColors = !!i801[25]
  i800.normalOffset = i801[26]
  i800.arc = i801[27]
  i800.arcMode = i801[28]
  i800.arcSpread = i801[29]
  i800.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i801[30], i800.arcSpeed)
  i800.donutRadius = i801[31]
  i800.position = new pc.Vec3( i801[32], i801[33], i801[34] )
  i800.rotation = new pc.Vec3( i801[35], i801[36], i801[37] )
  i800.scale = new pc.Vec3( i801[38], i801[39], i801[40] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemSizeBySpeed()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.separateAxes = !!i803[4]
  i802.range = new pc.Vec2( i803[5], i803[6] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemSizeOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.separateAxes = !!i805[4]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.mode = i807[1]
  i806.animation = i807[2]
  i806.numTilesX = i807[3]
  i806.numTilesY = i807[4]
  i806.useRandomRow = !!i807[5]
  i806.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[6], i806.frameOverTime)
  i806.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[7], i806.startFrame)
  i806.cycleCount = i807[8]
  i806.rowIndex = i807[9]
  i806.flipU = i807[10]
  i806.flipV = i807[11]
  i806.spriteCount = i807[12]
  var i809 = i807[13]
  var i808 = []
  for(var i = 0; i < i809.length; i += 2) {
  request.r(i809[i + 0], i809[i + 1], 2, i808, '')
  }
  i806.sprites = i808
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.x)
  i812.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.y)
  i812.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.z)
  i812.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.speedModifier)
  i812.space = i813[5]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i814 = root || new pc.ParticleSystemNoise()
  var i815 = data
  i814.enabled = !!i815[0]
  i814.separateAxes = !!i815[1]
  i814.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[2], i814.strengthX)
  i814.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[3], i814.strengthY)
  i814.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[4], i814.strengthZ)
  i814.frequency = i815[5]
  i814.damping = !!i815[6]
  i814.octaveCount = i815[7]
  i814.octaveMultiplier = i815[8]
  i814.octaveScale = i815[9]
  i814.quality = i815[10]
  i814.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[11], i814.scrollSpeed)
  i814.scrollSpeedMultiplier = i815[12]
  i814.remapEnabled = !!i815[13]
  i814.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[14], i814.remapX)
  i814.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[15], i814.remapY)
  i814.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[16], i814.remapZ)
  i814.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[17], i814.positionAmount)
  i814.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[18], i814.rotationAmount)
  i814.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i815[19], i814.sizeAmount)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i816 = root || new pc.ParticleSystemInheritVelocity()
  var i817 = data
  i816.enabled = !!i817[0]
  i816.mode = i817[1]
  i816.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i817[2], i816.curve)
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i818 = root || new pc.ParticleSystemForceOverLifetime()
  var i819 = data
  i818.enabled = !!i819[0]
  i818.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[1], i818.x)
  i818.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[2], i818.y)
  i818.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i819[3], i818.z)
  i818.space = i819[4]
  i818.randomized = !!i819[5]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i820 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i821 = data
  i820.enabled = !!i821[0]
  i820.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[1], i820.limitX)
  i820.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[2], i820.limitY)
  i820.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[3], i820.limitZ)
  i820.dampen = i821[4]
  i820.separateAxes = !!i821[5]
  i820.space = i821[6]
  i820.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i821[7], i820.drag)
  i820.multiplyDragByParticleSize = !!i821[8]
  i820.multiplyDragByParticleVelocity = !!i821[9]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i823 = data
  i822.enabled = !!i823[0]
  request.r(i823[1], i823[2], 0, i822, 'sharedMaterial')
  var i825 = i823[3]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.sharedMaterials = i824
  i822.receiveShadows = !!i823[4]
  i822.shadowCastingMode = i823[5]
  i822.sortingLayerID = i823[6]
  i822.sortingOrder = i823[7]
  i822.lightmapIndex = i823[8]
  i822.lightmapSceneIndex = i823[9]
  i822.lightmapScaleOffset = new pc.Vec4( i823[10], i823[11], i823[12], i823[13] )
  i822.lightProbeUsage = i823[14]
  i822.reflectionProbeUsage = i823[15]
  request.r(i823[16], i823[17], 0, i822, 'mesh')
  i822.meshCount = i823[18]
  i822.activeVertexStreamsCount = i823[19]
  i822.alignment = i823[20]
  i822.renderMode = i823[21]
  i822.sortMode = i823[22]
  i822.lengthScale = i823[23]
  i822.velocityScale = i823[24]
  i822.cameraVelocityScale = i823[25]
  i822.normalDirection = i823[26]
  i822.sortingFudge = i823[27]
  i822.minParticleSize = i823[28]
  i822.maxParticleSize = i823[29]
  i822.pivot = new pc.Vec3( i823[30], i823[31], i823[32] )
  request.r(i823[33], i823[34], 0, i822, 'trailMaterial')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i829 = data
  i828.name = i829[0]
  i828.tag = i829[1]
  i828.enabled = !!i829[2]
  i828.isStatic = !!i829[3]
  i828.layer = i829[4]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i831 = data
  i830.name = i831[0]
  i830.width = i831[1]
  i830.height = i831[2]
  i830.mipmapCount = i831[3]
  i830.anisoLevel = i831[4]
  i830.filterMode = i831[5]
  i830.hdr = !!i831[6]
  i830.format = i831[7]
  i830.wrapMode = i831[8]
  i830.alphaIsTransparency = !!i831[9]
  i830.alphaSource = i831[10]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'sharedMesh')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'additionalVertexStreams')
  i834.enabled = !!i835[2]
  request.r(i835[3], i835[4], 0, i834, 'sharedMaterial')
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.sharedMaterials = i836
  i834.receiveShadows = !!i835[6]
  i834.shadowCastingMode = i835[7]
  i834.sortingLayerID = i835[8]
  i834.sortingOrder = i835[9]
  i834.lightmapIndex = i835[10]
  i834.lightmapSceneIndex = i835[11]
  i834.lightmapScaleOffset = new pc.Vec4( i835[12], i835[13], i835[14], i835[15] )
  i834.lightProbeUsage = i835[16]
  i834.reflectionProbeUsage = i835[17]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i839 = data
  i838.name = i839[0]
  i838.halfPrecision = !!i839[1]
  i838.vertexCount = i839[2]
  i838.aabb = i839[3]
  var i841 = i839[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( !!i841[i + 0] );
  }
  i838.streams = i840
  i838.vertices = i839[5]
  var i843 = i839[6]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i843[i + 0]) );
  }
  i838.subMeshes = i842
  var i845 = i839[7]
  var i844 = []
  for(var i = 0; i < i845.length; i += 16) {
    i844.push( new pc.Mat4().setData(i845[i + 0], i845[i + 1], i845[i + 2], i845[i + 3],  i845[i + 4], i845[i + 5], i845[i + 6], i845[i + 7],  i845[i + 8], i845[i + 9], i845[i + 10], i845[i + 11],  i845[i + 12], i845[i + 13], i845[i + 14], i845[i + 15]) );
  }
  i838.bindposes = i844
  var i847 = i839[8]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i847[i + 0]) );
  }
  i838.blendShapes = i846
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i853 = data
  i852.triangles = i853[0]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i859 = data
  i858.name = i859[0]
  var i861 = i859[1]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i861[i + 0]) );
  }
  i858.frames = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i863 = data
  i862.textureMode = i863[0]
  i862.alignment = i863[1]
  i862.widthCurve = new pc.AnimationCurve( { keys_flow: i863[2] } )
  i862.colorGradient = i863[3] ? new pc.ColorGradient(i863[3][0], i863[3][1], i863[3][2]) : null
  var i865 = i863[4]
  var i864 = []
  for(var i = 0; i < i865.length; i += 3) {
    i864.push( new pc.Vec3( i865[i + 0], i865[i + 1], i865[i + 2] ) );
  }
  i862.positions = i864
  i862.positionCount = i863[5]
  i862.widthMultiplier = i863[6]
  i862.startWidth = i863[7]
  i862.endWidth = i863[8]
  i862.numCornerVertices = i863[9]
  i862.numCapVertices = i863[10]
  i862.useWorldSpace = !!i863[11]
  i862.loop = !!i863[12]
  i862.startColor = new pc.Color(i863[13], i863[14], i863[15], i863[16])
  i862.endColor = new pc.Color(i863[17], i863[18], i863[19], i863[20])
  i862.generateLightingData = !!i863[21]
  i862.enabled = !!i863[22]
  request.r(i863[23], i863[24], 0, i862, 'sharedMaterial')
  var i867 = i863[25]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i862.sharedMaterials = i866
  i862.receiveShadows = !!i863[26]
  i862.shadowCastingMode = i863[27]
  i862.sortingLayerID = i863[28]
  i862.sortingOrder = i863[29]
  i862.lightmapIndex = i863[30]
  i862.lightmapSceneIndex = i863[31]
  i862.lightmapScaleOffset = new pc.Vec4( i863[32], i863[33], i863[34], i863[35] )
  i862.lightProbeUsage = i863[36]
  i862.reflectionProbeUsage = i863[37]
  return i862
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i870 = root || request.c( 'RopeBridge' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'StartPoint')
  request.r(i871[2], i871[3], 0, i870, 'EndPoint')
  i870.ropeSegLen = i871[4]
  i870.segmentLength = i871[5]
  i870.lineWidth = i871[6]
  i870.distOfStartToEnd = i871[7]
  i870.lineLengthMultifly = i871[8]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animatorController')
  i872.updateMode = i873[2]
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.humanBones = i874
  i872.enabled = !!i873[4]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i879 = data
  i878.playAutomatically = !!i879[0]
  request.r(i879[1], i879[2], 0, i878, 'clip')
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.clips = i880
  i878.wrapMode = i879[4]
  i878.enabled = !!i879[5]
  return i878
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
  request.r(i945[13], i945[14], 0, i944, 'lunaDynamic')
  i944.goalCount = i945[15]
  i944.currentCount = i945[16]
  return i944
}

Deserializers["LunaDynamic"] = function (request, data, root) {
  var i946 = root || request.c( 'LunaDynamic' )
  var i947 = data
  i946.challengeCount = i947[0]
  i946.stageNum = i947[1]
  i946.goToStore = !!i947[2]
  var i949 = i947[3]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.stages = i948
  return i946
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i952 = root || request.c( 'FishingRod' )
  var i953 = data
  i952.hookThrowForce = i953[0]
  i952.lineForce = i953[1]
  i952.maxPullingForce = i953[2]
  i952.minPullingForce = i953[3]
  i952.currentPullingForece = i953[4]
  i952.maxLine = i953[5]
  i952.pullingSpeed = i953[6]
  i952.playAdsPullCount = i953[7]
  i952.isStart = !!i953[8]
  request.r(i953[9], i953[10], 0, i952, 'hookRigid')
  request.r(i953[11], i953[12], 0, i952, 'pivot')
  request.r(i953[13], i953[14], 0, i952, 'touchToStartPanel')
  request.r(i953[15], i953[16], 0, i952, 'rodAnimator')
  request.r(i953[17], i953[18], 0, i952, 'fishingHook')
  request.r(i953[19], i953[20], 0, i952, 'touchField')
  request.r(i953[21], i953[22], 0, i952, 'upgradePanel')
  request.r(i953[23], i953[24], 0, i952, 'upgradeButton')
  request.r(i953[25], i953[26], 0, i952, 'depthText')
  request.r(i953[27], i953[28], 0, i952, 'touchToPullPanel')
  request.r(i953[29], i953[30], 0, i952, 'throwTarget1')
  request.r(i953[31], i953[32], 0, i952, 'throwTarget2')
  request.r(i953[33], i953[34], 0, i952, 'hookObject')
  request.r(i953[35], i953[36], 0, i952, 'playerObject')
  request.r(i953[37], i953[38], 0, i952, 'animationController')
  return i952
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i954 = root || request.c( 'FishingLogic' )
  var i955 = data
  request.r(i955[0], i955[1], 0, i954, 'joint')
  i954.biteBate = !!i955[2]
  i954.pulling = !!i955[3]
  i954.enablePulling = !!i955[4]
  request.r(i955[5], i955[6], 0, i954, 'rodAnimator')
  request.r(i955[7], i955[8], 0, i954, 'animationController')
  request.r(i955[9], i955[10], 0, i954, 'startButton')
  request.r(i955[11], i955[12], 0, i954, 'catchSlider')
  request.r(i955[13], i955[14], 0, i954, 'catchButton')
  request.r(i955[15], i955[16], 0, i954, 'fishingRod')
  request.r(i955[17], i955[18], 0, i954, 'arrow')
  request.r(i955[19], i955[20], 0, i954, 'fishingRodSkinned')
  request.r(i955[21], i955[22], 0, i954, 'bubbleParticle')
  request.r(i955[23], i955[24], 0, i954, 'hookRigid')
  request.r(i955[25], i955[26], 0, i954, 'hook')
  return i954
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i956 = root || request.c( 'Upgrades' )
  var i957 = data
  i956.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i957[0], i956.lineLengthUpgrade)
  i956.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i957[1], i956.hookMaxUpgrade)
  i956.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i957[2], i956.hookMoveSpeedUpgrade)
  request.r(i957[3], i957[4], 0, i956, 'hook')
  request.r(i957[5], i957[6], 0, i956, 'rod')
  request.r(i957[7], i957[8], 0, i956, 'touchField')
  request.r(i957[9], i957[10], 0, i956, 'upgradePanel')
  request.r(i957[11], i957[12], 0, i956, 'upgradeTap')
  request.r(i957[13], i957[14], 0, i956, 'closeTap')
  request.r(i957[15], i957[16], 0, i956, 'tapToStartText')
  return i956
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i958 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i959 = data
  i958.currentLevel = i959[0]
  i958.maxLevel = i959[1]
  i958.upgradeValue = i959[2]
  i958.upgradeNeedyCost = i959[3]
  i958.upgradeCostIncreaseValue = i959[4]
  i958.upgradeCostIncreaseValueMultifly = i959[5]
  request.r(i959[6], i959[7], 0, i958, 'levelText')
  request.r(i959[8], i959[9], 0, i958, 'needyCostText')
  request.r(i959[10], i959[11], 0, i958, 'cover')
  request.r(i959[12], i959[13], 0, i958, 'rod')
  return i958
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i960 = root || request.c( 'Upgrades+CountUpgrade' )
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
  request.r(i961[12], i961[13], 0, i960, 'hook')
  return i960
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i962 = root || request.c( 'Upgrades+MovementUpgrade' )
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
  request.r(i963[12], i963[13], 0, i962, 'touchField')
  return i962
}

Deserializers["FishPool"] = function (request, data, root) {
  var i964 = root || request.c( 'FishPool' )
  var i965 = data
  i964.oneTierFishList = request.d('FishList', i965[0], i964.oneTierFishList)
  i964.twoTierFishList = request.d('FishList', i965[1], i964.twoTierFishList)
  i964.threeTierFishList = request.d('FishList', i965[2], i964.threeTierFishList)
  i964.fourTierFishList = request.d('FishList', i965[3], i964.fourTierFishList)
  i964.fiveTierFishList = request.d('FishList', i965[4], i964.fiveTierFishList)
  i964.chestList_one = request.d('FishList', i965[5], i964.chestList_one)
  i964.chestList_two = request.d('FishList', i965[6], i964.chestList_two)
  i964.chestList_three = request.d('FishList', i965[7], i964.chestList_three)
  i964.chestMover = request.d('FishList', i965[8], i964.chestMover)
  var i967 = i965[9]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 1, i966, '')
  }
  i964.generatedFishList = i966
  request.r(i965[10], i965[11], 0, i964, 'poolParent')
  return i964
}

Deserializers["FishList"] = function (request, data, root) {
  var i968 = root || request.c( 'FishList' )
  var i969 = data
  var i971 = i969[0]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i968.fishList = i970
  var i973 = i969[1]
  var i972 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 1, i972, '')
  }
  i968.spawnPoints = i972
  return i968
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i980 = root || request.c( 'LowLineRenderer' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'line')
  request.r(i981[2], i981[3], 0, i980, 'start')
  request.r(i981[4], i981[5], 0, i980, 'end')
  return i980
}

Deserializers["DataManager"] = function (request, data, root) {
  var i982 = root || request.c( 'DataManager' )
  var i983 = data
  request.r(i983[0], i983[1], 0, i982, 'setting')
  request.r(i983[2], i983[3], 0, i982, 'soundSlider')
  request.r(i983[4], i983[5], 0, i982, 'hapticSlider')
  i982.gameDataFileName = i983[6]
  i982._gameData = request.d('GameData', i983[7], i982._gameData)
  request.r(i983[8], i983[9], 0, i982, 'soundSliderHandleText')
  request.r(i983[10], i983[11], 0, i982, 'hapticSliderHandleText')
  return i982
}

Deserializers["GameData"] = function (request, data, root) {
  var i984 = root || request.c( 'GameData' )
  var i985 = data
  i984.money = i985[0]
  i984.needleUpgrade = i985[1]
  i984.lineUpgrade = i985[2]
  i984.reelUpgrade = i985[3]
  i984.sound = i985[4]
  i984.haptic = i985[5]
  return i984
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'm_FirstSelected')
  i986.m_sendNavigationEvents = !!i987[2]
  i986.m_DragThreshold = i987[3]
  return i986
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i989 = data
  i988.m_HorizontalAxis = i989[0]
  i988.m_VerticalAxis = i989[1]
  i988.m_SubmitButton = i989[2]
  i988.m_CancelButton = i989[3]
  i988.m_InputActionsPerSecond = i989[4]
  i988.m_RepeatDelay = i989[5]
  i988.m_ForceModuleActive = !!i989[6]
  i988.m_SendPointerHoverToParent = !!i989[7]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i991 = data
  i990.enabled = !!i991[0]
  i990.planeDistance = i991[1]
  i990.referencePixelsPerUnit = i991[2]
  i990.isFallbackOverlay = !!i991[3]
  i990.renderMode = i991[4]
  i990.renderOrder = i991[5]
  i990.sortingLayerName = i991[6]
  i990.sortingOrder = i991[7]
  i990.scaleFactor = i991[8]
  request.r(i991[9], i991[10], 0, i990, 'worldCamera')
  i990.overrideSorting = !!i991[11]
  i990.pixelPerfect = !!i991[12]
  i990.targetDisplay = i991[13]
  i990.overridePixelPerfect = !!i991[14]
  return i990
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i993 = data
  i992.m_UiScaleMode = i993[0]
  i992.m_ReferencePixelsPerUnit = i993[1]
  i992.m_ScaleFactor = i993[2]
  i992.m_ReferenceResolution = new pc.Vec2( i993[3], i993[4] )
  i992.m_ScreenMatchMode = i993[5]
  i992.m_MatchWidthOrHeight = i993[6]
  i992.m_PhysicalUnit = i993[7]
  i992.m_FallbackScreenDPI = i993[8]
  i992.m_DefaultSpriteDPI = i993[9]
  i992.m_DynamicPixelsPerUnit = i993[10]
  i992.m_PresetInfoIsWorld = !!i993[11]
  return i992
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i994 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i995 = data
  i994.m_IgnoreReversedGraphics = !!i995[0]
  i994.m_BlockingObjects = i995[1]
  i994.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i995[2] )
  return i994
}

Deserializers["UIManager"] = function (request, data, root) {
  var i996 = root || request.c( 'UIManager' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'challengeTarget')
  request.r(i997[2], i997[3], 0, i996, 'challengeText')
  request.r(i997[4], i997[5], 0, i996, 'versionText')
  i996.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i997[6] )
  i996.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i997[7] )
  request.r(i997[8], i997[9], 0, i996, 'uiCamera')
  var i999 = i997[10]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i996.pictureModeObjects = i998
  return i996
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i1000 = root || request.c( 'FixedTouchField' )
  var i1001 = data
  i1000.TouchDist = new pc.Vec2( i1001[0], i1001[1] )
  i1000.PointerOld = new pc.Vec2( i1001[2], i1001[3] )
  i1000.Pressed = !!i1001[4]
  i1000.hookMoveSpeed = i1001[5]
  request.r(i1001[6], i1001[7], 0, i1000, 'hook')
  request.r(i1001[8], i1001[9], 0, i1000, 'logic')
  request.r(i1001[10], i1001[11], 0, i1000, 'joystick_Background')
  request.r(i1001[12], i1001[13], 0, i1000, 'joystick_Handle')
  request.r(i1001[14], i1001[15], 0, i1000, 'canvas')
  request.r(i1001[16], i1001[17], 0, i1000, 'newCamera')
  i1000.clampDist = i1001[18]
  return i1000
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Button' )
  var i1003 = data
  i1002.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1003[0], i1002.m_OnClick)
  i1002.m_Navigation = request.d('UnityEngine.UI.Navigation', i1003[1], i1002.m_Navigation)
  i1002.m_Transition = i1003[2]
  i1002.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1003[3], i1002.m_Colors)
  i1002.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1003[4], i1002.m_SpriteState)
  i1002.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1003[5], i1002.m_AnimationTriggers)
  i1002.m_Interactable = !!i1003[6]
  request.r(i1003[7], i1003[8], 0, i1002, 'm_TargetGraphic')
  return i1002
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1005 = data
  i1004.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1005[0], i1004.m_PersistentCalls)
  return i1004
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('UnityEngine.Events.PersistentCall', i1009[i + 0]));
  }
  i1006.m_Calls = i1008
  return i1006
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_Target')
  i1012.m_TargetAssemblyTypeName = i1013[2]
  i1012.m_MethodName = i1013[3]
  i1012.m_Mode = i1013[4]
  i1012.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1013[5], i1012.m_Arguments)
  i1012.m_CallState = i1013[6]
  return i1012
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1015 = data
  request.r(i1015[0], i1015[1], 0, i1014, 'm_ObjectArgument')
  i1014.m_ObjectArgumentAssemblyTypeName = i1015[2]
  i1014.m_IntArgument = i1015[3]
  i1014.m_FloatArgument = i1015[4]
  i1014.m_StringArgument = i1015[5]
  i1014.m_BoolArgument = !!i1015[6]
  return i1014
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1016 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1017 = data
  i1016.m_Mode = i1017[0]
  i1016.m_WrapAround = !!i1017[1]
  request.r(i1017[2], i1017[3], 0, i1016, 'm_SelectOnUp')
  request.r(i1017[4], i1017[5], 0, i1016, 'm_SelectOnDown')
  request.r(i1017[6], i1017[7], 0, i1016, 'm_SelectOnLeft')
  request.r(i1017[8], i1017[9], 0, i1016, 'm_SelectOnRight')
  return i1016
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1019 = data
  i1018.m_NormalColor = new pc.Color(i1019[0], i1019[1], i1019[2], i1019[3])
  i1018.m_HighlightedColor = new pc.Color(i1019[4], i1019[5], i1019[6], i1019[7])
  i1018.m_PressedColor = new pc.Color(i1019[8], i1019[9], i1019[10], i1019[11])
  i1018.m_SelectedColor = new pc.Color(i1019[12], i1019[13], i1019[14], i1019[15])
  i1018.m_DisabledColor = new pc.Color(i1019[16], i1019[17], i1019[18], i1019[19])
  i1018.m_ColorMultiplier = i1019[20]
  i1018.m_FadeDuration = i1019[21]
  return i1018
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'm_HighlightedSprite')
  request.r(i1021[2], i1021[3], 0, i1020, 'm_PressedSprite')
  request.r(i1021[4], i1021[5], 0, i1020, 'm_SelectedSprite')
  request.r(i1021[6], i1021[7], 0, i1020, 'm_DisabledSprite')
  return i1020
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1023 = data
  i1022.m_NormalTrigger = i1023[0]
  i1022.m_HighlightedTrigger = i1023[1]
  i1022.m_PressedTrigger = i1023[2]
  i1022.m_SelectedTrigger = i1023[3]
  i1022.m_DisabledTrigger = i1023[4]
  return i1022
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.UI.Outline' )
  var i1025 = data
  i1024.m_EffectColor = new pc.Color(i1025[0], i1025[1], i1025[2], i1025[3])
  i1024.m_EffectDistance = new pc.Vec2( i1025[4], i1025[5] )
  i1024.m_UseGraphicAlpha = !!i1025[6]
  return i1024
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_FillRect')
  request.r(i1027[2], i1027[3], 0, i1026, 'm_HandleRect')
  i1026.m_Direction = i1027[4]
  i1026.m_MinValue = i1027[5]
  i1026.m_MaxValue = i1027[6]
  i1026.m_WholeNumbers = !!i1027[7]
  i1026.m_Value = i1027[8]
  i1026.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1027[9], i1026.m_OnValueChanged)
  i1026.m_Navigation = request.d('UnityEngine.UI.Navigation', i1027[10], i1026.m_Navigation)
  i1026.m_Transition = i1027[11]
  i1026.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1027[12], i1026.m_Colors)
  i1026.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1027[13], i1026.m_SpriteState)
  i1026.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1027[14], i1026.m_AnimationTriggers)
  i1026.m_Interactable = !!i1027[15]
  request.r(i1027[16], i1027[17], 0, i1026, 'm_TargetGraphic')
  return i1026
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1029 = data
  i1028.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1029[0], i1028.m_PersistentCalls)
  return i1028
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i1030 = root || request.c( 'EnviromentEditor' )
  var i1031 = data
  i1030.oceanSpriteValueMultifly = i1031[0]
  i1030.sunLightIntensity = i1031[1]
  i1030.minSunLightIntensity = i1031[2]
  i1030.challengeLightIntensity = i1031[3]
  i1030.depthMaskTransparentValue = i1031[4]
  i1030.ambientLightIntensity = i1031[5]
  request.r(i1031[6], i1031[7], 0, i1030, 'hook')
  var i1033 = i1031[8]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 2) {
  request.r(i1033[i + 0], i1033[i + 1], 2, i1032, '')
  }
  i1030.Oceans = i1032
  request.r(i1031[9], i1031[10], 0, i1030, 'OceanSurface')
  request.r(i1031[11], i1031[12], 0, i1030, 'depthMask')
  request.r(i1031[13], i1031[14], 0, i1030, 'depthSprite')
  request.r(i1031[15], i1031[16], 0, i1030, 'depthMaskMat')
  request.r(i1031[17], i1031[18], 0, i1030, 'sunLights')
  request.r(i1031[19], i1031[20], 0, i1030, 'hookLight')
  request.r(i1031[21], i1031[22], 0, i1030, 'challengeLight')
  return i1030
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i1036 = root || request.c( 'ObjectMovement' )
  var i1037 = data
  i1036.moveX = i1037[0]
  i1036.moveSec = i1037[1]
  return i1036
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i1038 = root || request.c( 'OceanTrigger' )
  var i1039 = data
  request.r(i1039[0], i1039[1], 0, i1038, 'touchToPullButton')
  request.r(i1039[2], i1039[3], 0, i1038, 'waterSplashParticle')
  request.r(i1039[4], i1039[5], 0, i1038, 'bubbleParticle')
  request.r(i1039[6], i1039[7], 0, i1038, 'arrow')
  request.r(i1039[8], i1039[9], 0, i1038, 'rigid')
  request.r(i1039[10], i1039[11], 0, i1038, 'hook')
  request.r(i1039[12], i1039[13], 0, i1038, 'rod')
  return i1038
}

Deserializers["Flock"] = function (request, data, root) {
  var i1040 = root || request.c( 'Flock' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'flockUnitPrefab')
  i1040.flockSize = i1041[2]
  i1040.spawnBounds = new pc.Vec3( i1041[3], i1041[4], i1041[5] )
  i1040._minSpeed = i1041[6]
  i1040._maxSpeed = i1041[7]
  i1040._cohesionDistance = i1041[8]
  i1040._avoidanceDistance = i1041[9]
  i1040._aligementDistance = i1041[10]
  i1040._obstacleDistance = i1041[11]
  i1040._boundsDistance = i1041[12]
  i1040._cohesionWeight = i1041[13]
  i1040._avoidanceWeight = i1041[14]
  i1040._aligementWeight = i1041[15]
  i1040._boundsWeight = i1041[16]
  i1040._obstacleWeight = i1041[17]
  return i1040
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1042 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'm_LookAt')
  request.r(i1043[2], i1043[3], 0, i1042, 'm_Follow')
  i1042.m_Lens = request.d('Cinemachine.LensSettings', i1043[4], i1042.m_Lens)
  i1042.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1043[5], i1042.m_Transitions)
  var i1045 = i1043[6]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( i1045[i + 0] );
  }
  i1042.m_ExcludedPropertiesInInspector = i1044
  var i1047 = i1043[7]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( i1047[i + 0] );
  }
  i1042.m_LockStageInInspector = i1046
  i1042.m_Priority = i1043[8]
  i1042.m_StandbyUpdate = i1043[9]
  i1042.m_LegacyBlendHint = i1043[10]
  request.r(i1043[11], i1043[12], 0, i1042, 'm_ComponentOwner')
  i1042.m_StreamingVersion = i1043[13]
  return i1042
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1048 = root || request.c( 'Cinemachine.LensSettings' )
  var i1049 = data
  i1048.FieldOfView = i1049[0]
  i1048.OrthographicSize = i1049[1]
  i1048.NearClipPlane = i1049[2]
  i1048.FarClipPlane = i1049[3]
  i1048.Dutch = i1049[4]
  i1048.ModeOverride = i1049[5]
  i1048.LensShift = new pc.Vec2( i1049[6], i1049[7] )
  i1048.GateFit = i1049[8]
  i1048.m_SensorSize = new pc.Vec2( i1049[9], i1049[10] )
  return i1048
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1050 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1051 = data
  i1050.m_BlendHint = i1051[0]
  i1050.m_InheritPosition = !!i1051[1]
  i1050.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1051[2], i1050.m_OnCameraLive)
  return i1050
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1052 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1053 = data
  i1052.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1053[0], i1052.m_PersistentCalls)
  return i1052
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1058 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1059 = data
  return i1058
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1060 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1061 = data
  i1060.m_TrackedObjectOffset = new pc.Vec3( i1061[0], i1061[1], i1061[2] )
  i1060.m_LookaheadTime = i1061[3]
  i1060.m_LookaheadSmoothing = i1061[4]
  i1060.m_LookaheadIgnoreY = !!i1061[5]
  i1060.m_HorizontalDamping = i1061[6]
  i1060.m_VerticalDamping = i1061[7]
  i1060.m_ScreenX = i1061[8]
  i1060.m_ScreenY = i1061[9]
  i1060.m_DeadZoneWidth = i1061[10]
  i1060.m_DeadZoneHeight = i1061[11]
  i1060.m_SoftZoneWidth = i1061[12]
  i1060.m_SoftZoneHeight = i1061[13]
  i1060.m_BiasX = i1061[14]
  i1060.m_BiasY = i1061[15]
  i1060.m_CenterOnActivate = !!i1061[16]
  return i1060
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1063 = data
  i1062.m_BindingMode = i1063[0]
  i1062.m_FollowOffset = new pc.Vec3( i1063[1], i1063[2], i1063[3] )
  i1062.m_XDamping = i1063[4]
  i1062.m_YDamping = i1063[5]
  i1062.m_ZDamping = i1063[6]
  i1062.m_AngularDampingMode = i1063[7]
  i1062.m_PitchDamping = i1063[8]
  i1062.m_YawDamping = i1063[9]
  i1062.m_RollDamping = i1063[10]
  i1062.m_AngularDamping = i1063[11]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.aspect = i1065[1]
  i1064.orthographic = !!i1065[2]
  i1064.orthographicSize = i1065[3]
  i1064.backgroundColor = new pc.Color(i1065[4], i1065[5], i1065[6], i1065[7])
  i1064.nearClipPlane = i1065[8]
  i1064.farClipPlane = i1065[9]
  i1064.fieldOfView = i1065[10]
  i1064.depth = i1065[11]
  i1064.clearFlags = i1065[12]
  i1064.cullingMask = i1065[13]
  i1064.rect = i1065[14]
  request.r(i1065[15], i1065[16], 0, i1064, 'targetTexture')
  return i1064
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i1066 = root || request.c( 'CameraMove' )
  var i1067 = data
  i1066.offset = new pc.Vec3( i1067[0], i1067[1], i1067[2] )
  request.r(i1067[3], i1067[4], 0, i1066, 'newCamera')
  request.r(i1067[5], i1067[6], 0, i1066, 'target')
  return i1066
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1068 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1069 = data
  i1068.m_ShowDebugText = !!i1069[0]
  i1068.m_ShowCameraFrustum = !!i1069[1]
  i1068.m_IgnoreTimeScale = !!i1069[2]
  request.r(i1069[3], i1069[4], 0, i1068, 'm_WorldUpOverride')
  i1068.m_UpdateMethod = i1069[5]
  i1068.m_BlendUpdateMethod = i1069[6]
  i1068.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1069[7], i1068.m_DefaultBlend)
  request.r(i1069[8], i1069[9], 0, i1068, 'm_CustomBlends')
  i1068.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1069[10], i1068.m_CameraCutEvent)
  i1068.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1069[11], i1068.m_CameraActivatedEvent)
  return i1068
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1070 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1071 = data
  i1070.m_Style = i1071[0]
  i1070.m_Time = i1071[1]
  i1070.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1071[2] } )
  return i1070
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1072 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1073 = data
  i1072.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1073[0], i1072.m_PersistentCalls)
  return i1072
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i1074 = root || request.c( 'CinemachineController' )
  var i1075 = data
  request.r(i1075[0], i1075[1], 0, i1074, 'playerTrans')
  i1074.playerOffset = new pc.Vec3( i1075[2], i1075[3], i1075[4] )
  request.r(i1075[5], i1075[6], 0, i1074, 'hookTrans')
  i1074.hookOffset = new pc.Vec3( i1075[7], i1075[8], i1075[9] )
  request.r(i1075[10], i1075[11], 0, i1074, 'cvc_Hook')
  request.r(i1075[12], i1075[13], 0, i1074, 'cvc_Player')
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1077 = data
  i1076.enabled = !!i1077[0]
  i1076.isTrigger = !!i1077[1]
  request.r(i1077[2], i1077[3], 0, i1076, 'material')
  i1076.center = new pc.Vec3( i1077[4], i1077[5], i1077[6] )
  i1076.radius = i1077[7]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1079 = data
  i1078.enabled = !!i1079[0]
  request.r(i1079[1], i1079[2], 0, i1078, 'sharedMaterial')
  var i1081 = i1079[3]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.sharedMaterials = i1080
  i1078.receiveShadows = !!i1079[4]
  i1078.shadowCastingMode = i1079[5]
  i1078.sortingLayerID = i1079[6]
  i1078.sortingOrder = i1079[7]
  i1078.lightmapIndex = i1079[8]
  i1078.lightmapSceneIndex = i1079[9]
  i1078.lightmapScaleOffset = new pc.Vec4( i1079[10], i1079[11], i1079[12], i1079[13] )
  i1078.lightProbeUsage = i1079[14]
  i1078.reflectionProbeUsage = i1079[15]
  var i1083 = i1079[16]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 3) {
    i1082.push( new pc.Vec3( i1083[i + 0], i1083[i + 1], i1083[i + 2] ) );
  }
  i1078.positions = i1082
  i1078.positionCount = i1079[17]
  i1078.time = i1079[18]
  i1078.startWidth = i1079[19]
  i1078.endWidth = i1079[20]
  i1078.widthMultiplier = i1079[21]
  i1078.autodestruct = !!i1079[22]
  i1078.emitting = !!i1079[23]
  i1078.numCornerVertices = i1079[24]
  i1078.numCapVertices = i1079[25]
  i1078.minVertexDistance = i1079[26]
  i1078.colorGradient = i1079[27] ? new pc.ColorGradient(i1079[27][0], i1079[27][1], i1079[27][2]) : null
  i1078.startColor = new pc.Color(i1079[28], i1079[29], i1079[30], i1079[31])
  i1078.endColor = new pc.Color(i1079[32], i1079[33], i1079[34], i1079[35])
  i1078.generateLightingData = !!i1079[36]
  i1078.textureMode = i1079[37]
  i1078.alignment = i1079[38]
  i1078.widthCurve = new pc.AnimationCurve( { keys_flow: i1079[39] } )
  return i1078
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i1084 = root || request.c( 'FishingHook' )
  var i1085 = data
  i1084.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i1085[0], i1084.OnMoneyChangeEvent)
  var i1087 = i1085[1]
  var i1086 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1087.length; i += 2) {
  request.r(i1087[i + 0], i1087[i + 1], 1, i1086, '')
  }
  i1084.hookedFish = i1086
  request.r(i1085[2], i1085[3], 0, i1084, 'sellParticle')
  request.r(i1085[4], i1085[5], 0, i1084, 'sellParticleParent')
  i1084.targetHookZoomOffset = i1085[6]
  i1084.minDrag = i1085[7]
  i1084.maxDrag = i1085[8]
  i1084.dragSpeed = i1085[9]
  i1084.fishingHookScaleUpgradeValue = i1085[10]
  i1084.fullHooked = !!i1085[11]
  i1084.inTheOcean = !!i1085[12]
  i1084.money = i1085[13]
  request.r(i1085[14], i1085[15], 0, i1084, 'rigid')
  request.r(i1085[16], i1085[17], 0, i1084, 'canvas')
  request.r(i1085[18], i1085[19], 0, i1084, 'moneyTextPrefab')
  request.r(i1085[20], i1085[21], 0, i1084, 'moneyTextSpawnTransform')
  i1084.moneyTextSpawnMinOffset = new pc.Vec2( i1085[22], i1085[23] )
  i1084.moneyTextSpawnMaxOffset = new pc.Vec2( i1085[24], i1085[25] )
  var i1089 = i1085[26]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1084.hookedTransforms = i1088
  request.r(i1085[27], i1085[28], 0, i1084, 'fishingRodSkinned')
  request.r(i1085[29], i1085[30], 0, i1084, 'cinemachineCamera')
  request.r(i1085[31], i1085[32], 0, i1084, 'startPoint')
  request.r(i1085[33], i1085[34], 0, i1084, 'hook')
  request.r(i1085[35], i1085[36], 0, i1084, 'rod')
  request.r(i1085[37], i1085[38], 0, i1084, 'playerModel')
  request.r(i1085[39], i1085[40], 0, i1084, 'upgradeButton')
  request.r(i1085[41], i1085[42], 0, i1084, 'depthText')
  request.r(i1085[43], i1085[44], 0, i1084, 'touchField')
  request.r(i1085[45], i1085[46], 0, i1084, 'catchRingParticle')
  request.r(i1085[47], i1085[48], 0, i1084, 'fishSkinPrefab')
  request.r(i1085[49], i1085[50], 0, i1084, 'fishSkinPoint1')
  request.r(i1085[51], i1085[52], 0, i1084, 'fishSkinPoint2')
  request.r(i1085[53], i1085[54], 0, i1084, 'moneyText')
  request.r(i1085[55], i1085[56], 0, i1084, 'HookedCount')
  return i1084
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1090 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1091 = data
  i1090.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1091[0], i1090.m_PersistentCalls)
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1093 = data
  i1092.ambientIntensity = i1093[0]
  i1092.reflectionIntensity = i1093[1]
  i1092.ambientMode = i1093[2]
  i1092.ambientLight = new pc.Color(i1093[3], i1093[4], i1093[5], i1093[6])
  i1092.ambientSkyColor = new pc.Color(i1093[7], i1093[8], i1093[9], i1093[10])
  i1092.ambientGroundColor = new pc.Color(i1093[11], i1093[12], i1093[13], i1093[14])
  i1092.ambientEquatorColor = new pc.Color(i1093[15], i1093[16], i1093[17], i1093[18])
  i1092.fogColor = new pc.Color(i1093[19], i1093[20], i1093[21], i1093[22])
  i1092.fogEndDistance = i1093[23]
  i1092.fogStartDistance = i1093[24]
  i1092.fogDensity = i1093[25]
  i1092.fog = !!i1093[26]
  request.r(i1093[27], i1093[28], 0, i1092, 'skybox')
  i1092.fogMode = i1093[29]
  var i1095 = i1093[30]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1095[i + 0]) );
  }
  i1092.lightmaps = i1094
  i1092.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1093[31], i1092.lightProbes)
  i1092.lightmapsMode = i1093[32]
  i1092.environmentLightingMode = i1093[33]
  i1092.ambientProbe = new pc.SphericalHarmonicsL2(i1093[34])
  i1092.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1093[35])
  i1092.useReferenceAmbientProbe = !!i1093[36]
  request.r(i1093[37], i1093[38], 0, i1092, 'customReflection')
  request.r(i1093[39], i1093[40], 0, i1092, 'defaultReflection')
  i1092.defaultReflectionMode = i1093[41]
  i1092.defaultReflectionResolution = i1093[42]
  i1092.sunLightObjectId = i1093[43]
  i1092.pixelLightCount = i1093[44]
  i1092.defaultReflectionHDR = !!i1093[45]
  i1092.hasLightDataAsset = !!i1093[46]
  i1092.hasManualGenerate = !!i1093[47]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'lightmapColor')
  request.r(i1099[2], i1099[3], 0, i1098, 'lightmapDirection')
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1100 = root || new UnityEngine.LightProbes()
  var i1101 = data
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1107 = data
  var i1109 = i1107[0]
  var i1108 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.add(i1109[i + 0]);
  }
  i1106.invalidShaderVariants = i1108
  i1106.name = i1107[1]
  i1106.guid = i1107[2]
  var i1111 = i1107[3]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.shaderDefinedKeywords = i1110
  var i1113 = i1107[4]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1113[i + 0]) );
  }
  i1106.passes = i1112
  var i1115 = i1107[5]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1115[i + 0]) );
  }
  i1106.usePasses = i1114
  var i1117 = i1107[6]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1117[i + 0]) );
  }
  i1106.defaultParameterValues = i1116
  request.r(i1107[7], i1107[8], 0, i1106, 'unityFallbackShader')
  i1106.readDepth = !!i1107[9]
  i1106.isCreatedByShaderGraph = !!i1107[10]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1122 = root || new pc.UnityShaderPass()
  var i1123 = data
  i1122.id = i1123[0]
  i1122.subShaderIndex = i1123[1]
  i1122.name = i1123[2]
  i1122.passType = i1123[3]
  i1122.usePass = !!i1123[4]
  i1122.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[5], i1122.zTest)
  i1122.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[6], i1122.zWrite)
  i1122.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[7], i1122.culling)
  i1122.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1123[8], i1122.blending)
  i1122.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1123[9], i1122.alphaBlending)
  i1122.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[10], i1122.colorWriteMask)
  i1122.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[11], i1122.offsetUnits)
  i1122.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[12], i1122.offsetFactor)
  i1122.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[13], i1122.stencilRef)
  i1122.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[14], i1122.stencilReadMask)
  i1122.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[15], i1122.stencilWriteMask)
  i1122.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1123[16], i1122.stencilOp)
  i1122.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1123[17], i1122.stencilOpFront)
  i1122.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1123[18], i1122.stencilOpBack)
  var i1125 = i1123[19]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1125[i + 0]) );
  }
  i1122.tags = i1124
  var i1127 = i1123[20]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1122.passDefinedKeywords = i1126
  var i1129 = i1123[21]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1129[i + 0]) );
  }
  i1122.passDefinedKeywordGroups = i1128
  var i1131 = i1123[22]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1131[i + 0]) );
  }
  i1122.variants = i1130
  var i1133 = i1123[23]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1133[i + 0]) );
  }
  i1122.excludedVariants = i1132
  i1122.hasDepthReader = !!i1123[24]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1135 = data
  i1134.val = i1135[0]
  i1134.name = i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1137 = data
  i1136.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[0], i1136.src)
  i1136.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[1], i1136.dst)
  i1136.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1137[2], i1136.op)
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1139 = data
  i1138.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1139[0], i1138.pass)
  i1138.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1139[1], i1138.fail)
  i1138.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1139[2], i1138.zFail)
  i1138.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1139[3], i1138.comp)
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.value = i1143[1]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1147 = data
  var i1149 = i1147[0]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( i1149[i + 0] );
  }
  i1146.keywords = i1148
  i1146.hasDiscard = !!i1147[1]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1153 = data
  i1152.passId = i1153[0]
  i1152.subShaderIndex = i1153[1]
  var i1155 = i1153[2]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( i1155[i + 0] );
  }
  i1152.keywords = i1154
  i1152.vertexProgram = i1153[3]
  i1152.fragmentProgram = i1153[4]
  i1152.readDepth = !!i1153[5]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'shader')
  i1158.pass = i1159[2]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1163 = data
  i1162.name = i1163[0]
  i1162.type = i1163[1]
  i1162.value = new pc.Vec4( i1163[2], i1163[3], i1163[4], i1163[5] )
  i1162.textureValue = i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1165 = data
  i1164.name = i1165[0]
  request.r(i1165[1], i1165[2], 0, i1164, 'texture')
  i1164.aabb = i1165[3]
  i1164.vertices = i1165[4]
  i1164.triangles = i1165[5]
  i1164.textureRect = UnityEngine.Rect.MinMaxRect(i1165[6], i1165[7], i1165[8], i1165[9])
  i1164.packedRect = UnityEngine.Rect.MinMaxRect(i1165[10], i1165[11], i1165[12], i1165[13])
  i1164.border = new pc.Vec4( i1165[14], i1165[15], i1165[16], i1165[17] )
  i1164.transparency = i1165[18]
  i1164.bounds = i1165[19]
  i1164.pixelsPerUnit = i1165[20]
  i1164.textureWidth = i1165[21]
  i1164.textureHeight = i1165[22]
  i1164.nativeSize = new pc.Vec2( i1165[23], i1165[24] )
  i1164.pivot = new pc.Vec2( i1165[25], i1165[26] )
  i1164.textureRectOffset = new pc.Vec2( i1165[27], i1165[28] )
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1167 = data
  i1166.name = i1167[0]
  i1166.wrapMode = i1167[1]
  i1166.isLooping = !!i1167[2]
  i1166.length = i1167[3]
  var i1169 = i1167[4]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1169[i + 0]) );
  }
  i1166.curves = i1168
  var i1171 = i1167[5]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1171[i + 0]) );
  }
  i1166.events = i1170
  i1166.halfPrecision = !!i1167[6]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1175 = data
  i1174.path = i1175[0]
  i1174.componentType = i1175[1]
  i1174.property = i1175[2]
  i1174.keys = i1175[3]
  var i1177 = i1175[4]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1177[i + 0]) );
  }
  i1174.objectReferenceKeys = i1176
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1181 = data
  i1180.time = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'value')
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1185 = data
  i1184.functionName = i1185[0]
  i1184.floatParameter = i1185[1]
  i1184.intParameter = i1185[2]
  i1184.stringParameter = i1185[3]
  request.r(i1185[4], i1185[5], 0, i1184, 'objectReferenceParameter')
  i1184.time = i1185[6]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1187 = data
  i1186.name = i1187[0]
  var i1189 = i1187[1]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1189[i + 0]) );
  }
  i1186.states = i1188
  var i1191 = i1187[2]
  var i1190 = []
  for(var i = 0; i < i1191.length; i += 1) {
    i1190.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1191[i + 0]) );
  }
  i1186.layers = i1190
  var i1193 = i1187[3]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1193[i + 0]) );
  }
  i1186.parameters = i1192
  var i1195 = i1187[4]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( i1195[i + 0] );
  }
  i1186.animationClips = i1194
  i1186.HasSubStateMachines = !!i1187[5]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1199 = data
  i1198.cycleOffset = i1199[0]
  i1198.cycleOffsetParameter = i1199[1]
  i1198.cycleOffsetParameterActive = !!i1199[2]
  i1198.mirror = !!i1199[3]
  i1198.mirrorParameter = i1199[4]
  i1198.mirrorParameterActive = !!i1199[5]
  i1198.motionId = i1199[6]
  i1198.nameHash = i1199[7]
  i1198.fullPathHash = i1199[8]
  i1198.speed = i1199[9]
  i1198.speedParameter = i1199[10]
  i1198.speedParameterActive = !!i1199[11]
  i1198.tag = i1199[12]
  i1198.name = i1199[13]
  i1198.writeDefaultValues = !!i1199[14]
  var i1201 = i1199[15]
  var i1200 = []
  for(var i = 0; i < i1201.length; i += 1) {
    i1200.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1201[i + 0]) );
  }
  i1198.transitions = i1200
  var i1203 = i1199[16]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 2) {
  request.r(i1203[i + 0], i1203[i + 1], 2, i1202, '')
  }
  i1198.behaviours = i1202
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1207 = data
  i1206.fullPath = i1207[0]
  i1206.canTransitionToSelf = !!i1207[1]
  i1206.duration = i1207[2]
  i1206.exitTime = i1207[3]
  i1206.hasExitTime = !!i1207[4]
  i1206.hasFixedDuration = !!i1207[5]
  i1206.interruptionSource = i1207[6]
  i1206.offset = i1207[7]
  i1206.orderedInterruption = !!i1207[8]
  i1206.destinationStateNameHash = i1207[9]
  i1206.destinationStateMachineId = i1207[10]
  i1206.isExit = !!i1207[11]
  i1206.mute = !!i1207[12]
  i1206.solo = !!i1207[13]
  var i1209 = i1207[14]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1209[i + 0]) );
  }
  i1206.conditions = i1208
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1213 = data
  i1212.mode = i1213[0]
  i1212.parameter = i1213[1]
  i1212.threshold = i1213[2]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1219 = data
  i1218.blendingMode = i1219[0]
  i1218.defaultWeight = i1219[1]
  i1218.name = i1219[2]
  i1218.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1219[3], i1218.stateMachine)
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1221 = data
  i1220.id = i1221[0]
  i1220.defaultStateNameHash = i1221[1]
  var i1223 = i1221[2]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1223[i + 0]) );
  }
  i1220.entryTransitions = i1222
  var i1225 = i1221[3]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1225[i + 0]) );
  }
  i1220.anyStateTransitions = i1224
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1229 = data
  i1228.destinationStateNameHash = i1229[0]
  i1228.destinationStateMachineId = i1229[1]
  i1228.isExit = !!i1229[2]
  i1228.mute = !!i1229[3]
  i1228.solo = !!i1229[4]
  var i1231 = i1229[5]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1231[i + 0]) );
  }
  i1228.conditions = i1230
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1235 = data
  i1234.defaultBool = !!i1235[0]
  i1234.defaultFloat = i1235[1]
  i1234.defaultInt = i1235[2]
  i1234.name = i1235[3]
  i1234.nameHash = i1235[4]
  i1234.type = i1235[5]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1237 = data
  i1236.name = i1237[0]
  i1236.bytes64 = i1237[1]
  i1236.data = i1237[2]
  return i1236
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1238 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1239 = data
  i1238.hashCode = i1239[0]
  request.r(i1239[1], i1239[2], 0, i1238, 'material')
  i1238.materialHashCode = i1239[3]
  request.r(i1239[4], i1239[5], 0, i1238, 'atlas')
  i1238.normalStyle = i1239[6]
  i1238.normalSpacingOffset = i1239[7]
  i1238.boldStyle = i1239[8]
  i1238.boldSpacing = i1239[9]
  i1238.italicStyle = i1239[10]
  i1238.tabSize = i1239[11]
  i1238.m_Version = i1239[12]
  i1238.m_SourceFontFileGUID = i1239[13]
  request.r(i1239[14], i1239[15], 0, i1238, 'm_SourceFontFile_EditorRef')
  request.r(i1239[16], i1239[17], 0, i1238, 'm_SourceFontFile')
  i1238.m_AtlasPopulationMode = i1239[18]
  i1238.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1239[19], i1238.m_FaceInfo)
  var i1241 = i1239[20]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('UnityEngine.TextCore.Glyph', i1241[i + 0]));
  }
  i1238.m_GlyphTable = i1240
  var i1243 = i1239[21]
  var i1242 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.add(request.d('TMPro.TMP_Character', i1243[i + 0]));
  }
  i1238.m_CharacterTable = i1242
  var i1245 = i1239[22]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 2, i1244, '')
  }
  i1238.m_AtlasTextures = i1244
  i1238.m_AtlasTextureIndex = i1239[23]
  i1238.m_IsMultiAtlasTexturesEnabled = !!i1239[24]
  i1238.m_ClearDynamicDataOnBuild = !!i1239[25]
  var i1247 = i1239[26]
  var i1246 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.add(request.d('UnityEngine.TextCore.GlyphRect', i1247[i + 0]));
  }
  i1238.m_UsedGlyphRects = i1246
  var i1249 = i1239[27]
  var i1248 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.add(request.d('UnityEngine.TextCore.GlyphRect', i1249[i + 0]));
  }
  i1238.m_FreeGlyphRects = i1248
  i1238.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1239[28], i1238.m_fontInfo)
  i1238.m_AtlasWidth = i1239[29]
  i1238.m_AtlasHeight = i1239[30]
  i1238.m_AtlasPadding = i1239[31]
  i1238.m_AtlasRenderMode = i1239[32]
  var i1251 = i1239[33]
  var i1250 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.add(request.d('TMPro.TMP_Glyph', i1251[i + 0]));
  }
  i1238.m_glyphInfoList = i1250
  i1238.m_KerningTable = request.d('TMPro.KerningTable', i1239[34], i1238.m_KerningTable)
  i1238.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1239[35], i1238.m_FontFeatureTable)
  var i1253 = i1239[36]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1253.length; i += 2) {
  request.r(i1253[i + 0], i1253[i + 1], 1, i1252, '')
  }
  i1238.fallbackFontAssets = i1252
  var i1255 = i1239[37]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1255.length; i += 2) {
  request.r(i1255[i + 0], i1255[i + 1], 1, i1254, '')
  }
  i1238.m_FallbackFontAssetTable = i1254
  i1238.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1239[38], i1238.m_CreationSettings)
  var i1257 = i1239[39]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 1) {
    i1256.push( request.d('TMPro.TMP_FontWeightPair', i1257[i + 0]) );
  }
  i1238.m_FontWeightTable = i1256
  var i1259 = i1239[40]
  var i1258 = []
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.push( request.d('TMPro.TMP_FontWeightPair', i1259[i + 0]) );
  }
  i1238.fontWeights = i1258
  return i1238
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1260 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1261 = data
  i1260.m_FaceIndex = i1261[0]
  i1260.m_FamilyName = i1261[1]
  i1260.m_StyleName = i1261[2]
  i1260.m_PointSize = i1261[3]
  i1260.m_Scale = i1261[4]
  i1260.m_LineHeight = i1261[5]
  i1260.m_AscentLine = i1261[6]
  i1260.m_CapLine = i1261[7]
  i1260.m_MeanLine = i1261[8]
  i1260.m_Baseline = i1261[9]
  i1260.m_DescentLine = i1261[10]
  i1260.m_SuperscriptOffset = i1261[11]
  i1260.m_SuperscriptSize = i1261[12]
  i1260.m_SubscriptOffset = i1261[13]
  i1260.m_SubscriptSize = i1261[14]
  i1260.m_UnderlineOffset = i1261[15]
  i1260.m_UnderlineThickness = i1261[16]
  i1260.m_StrikethroughOffset = i1261[17]
  i1260.m_StrikethroughThickness = i1261[18]
  i1260.m_TabWidth = i1261[19]
  return i1260
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1264 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1265 = data
  i1264.m_Index = i1265[0]
  i1264.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1265[1], i1264.m_Metrics)
  i1264.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1265[2], i1264.m_GlyphRect)
  i1264.m_Scale = i1265[3]
  i1264.m_AtlasIndex = i1265[4]
  return i1264
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1266 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1267 = data
  i1266.m_Width = i1267[0]
  i1266.m_Height = i1267[1]
  i1266.m_HorizontalBearingX = i1267[2]
  i1266.m_HorizontalBearingY = i1267[3]
  i1266.m_HorizontalAdvance = i1267[4]
  return i1266
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1268 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1269 = data
  i1268.m_X = i1269[0]
  i1268.m_Y = i1269[1]
  i1268.m_Width = i1269[2]
  i1268.m_Height = i1269[3]
  return i1268
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1272 = root || request.c( 'TMPro.TMP_Character' )
  var i1273 = data
  i1272.m_ElementType = i1273[0]
  i1272.m_Unicode = i1273[1]
  i1272.m_GlyphIndex = i1273[2]
  i1272.m_Scale = i1273[3]
  return i1272
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1278 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1279 = data
  i1278.Name = i1279[0]
  i1278.PointSize = i1279[1]
  i1278.Scale = i1279[2]
  i1278.CharacterCount = i1279[3]
  i1278.LineHeight = i1279[4]
  i1278.Baseline = i1279[5]
  i1278.Ascender = i1279[6]
  i1278.CapHeight = i1279[7]
  i1278.Descender = i1279[8]
  i1278.CenterLine = i1279[9]
  i1278.SuperscriptOffset = i1279[10]
  i1278.SubscriptOffset = i1279[11]
  i1278.SubSize = i1279[12]
  i1278.Underline = i1279[13]
  i1278.UnderlineThickness = i1279[14]
  i1278.strikethrough = i1279[15]
  i1278.strikethroughThickness = i1279[16]
  i1278.TabWidth = i1279[17]
  i1278.Padding = i1279[18]
  i1278.AtlasWidth = i1279[19]
  i1278.AtlasHeight = i1279[20]
  return i1278
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1283 = data
  i1282.id = i1283[0]
  i1282.x = i1283[1]
  i1282.y = i1283[2]
  i1282.width = i1283[3]
  i1282.height = i1283[4]
  i1282.xOffset = i1283[5]
  i1282.yOffset = i1283[6]
  i1282.xAdvance = i1283[7]
  i1282.scale = i1283[8]
  return i1282
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.KerningTable' )
  var i1285 = data
  var i1287 = i1285[0]
  var i1286 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.add(request.d('TMPro.KerningPair', i1287[i + 0]));
  }
  i1284.kerningPairs = i1286
  return i1284
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.KerningPair' )
  var i1291 = data
  i1290.xOffset = i1291[0]
  i1290.m_FirstGlyph = i1291[1]
  i1290.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1291[2], i1290.m_FirstGlyphAdjustments)
  i1290.m_SecondGlyph = i1291[3]
  i1290.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1291[4], i1290.m_SecondGlyphAdjustments)
  i1290.m_IgnoreSpacingAdjustments = !!i1291[5]
  return i1290
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1292 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1295[i + 0]));
  }
  i1292.m_GlyphPairAdjustmentRecords = i1294
  return i1292
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1298 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1299 = data
  i1298.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1299[0], i1298.m_FirstAdjustmentRecord)
  i1298.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1299[1], i1298.m_SecondAdjustmentRecord)
  i1298.m_FeatureLookupFlags = i1299[2]
  return i1298
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1303 = data
  i1302.sourceFontFileName = i1303[0]
  i1302.sourceFontFileGUID = i1303[1]
  i1302.pointSizeSamplingMode = i1303[2]
  i1302.pointSize = i1303[3]
  i1302.padding = i1303[4]
  i1302.packingMode = i1303[5]
  i1302.atlasWidth = i1303[6]
  i1302.atlasHeight = i1303[7]
  i1302.characterSetSelectionMode = i1303[8]
  i1302.characterSequence = i1303[9]
  i1302.referencedFontAssetGUID = i1303[10]
  i1302.referencedTextAssetGUID = i1303[11]
  i1302.fontStyle = i1303[12]
  i1302.fontStyleModifier = i1303[13]
  i1302.renderMode = i1303[14]
  i1302.includeFontFeatures = !!i1303[15]
  return i1302
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1306 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1307 = data
  request.r(i1307[0], i1307[1], 0, i1306, 'regularTypeface')
  request.r(i1307[2], i1307[3], 0, i1306, 'italicTypeface')
  return i1306
}

Deserializers["MapData"] = function (request, data, root) {
  var i1308 = root || request.c( 'MapData' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('MapData+mapData', i1311[i + 0]));
  }
  i1308.mapDataList = i1310
  return i1308
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i1314 = root || request.c( 'MapData+mapData' )
  var i1315 = data
  i1314.tier = i1315[0]
  i1314.minMapSize = new pc.Vec3( i1315[1], i1315[2], i1315[3] )
  i1314.maxMapSize = new pc.Vec3( i1315[4], i1315[5], i1315[6] )
  return i1314
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_Settings' )
  var i1317 = data
  i1316.m_enableWordWrapping = !!i1317[0]
  i1316.m_enableKerning = !!i1317[1]
  i1316.m_enableExtraPadding = !!i1317[2]
  i1316.m_enableTintAllSprites = !!i1317[3]
  i1316.m_enableParseEscapeCharacters = !!i1317[4]
  i1316.m_EnableRaycastTarget = !!i1317[5]
  i1316.m_GetFontFeaturesAtRuntime = !!i1317[6]
  i1316.m_missingGlyphCharacter = i1317[7]
  i1316.m_warningsDisabled = !!i1317[8]
  request.r(i1317[9], i1317[10], 0, i1316, 'm_defaultFontAsset')
  i1316.m_defaultFontAssetPath = i1317[11]
  i1316.m_defaultFontSize = i1317[12]
  i1316.m_defaultAutoSizeMinRatio = i1317[13]
  i1316.m_defaultAutoSizeMaxRatio = i1317[14]
  i1316.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1317[15], i1317[16] )
  i1316.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1317[17], i1317[18] )
  i1316.m_autoSizeTextContainer = !!i1317[19]
  i1316.m_IsTextObjectScaleStatic = !!i1317[20]
  var i1319 = i1317[21]
  var i1318 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1319.length; i += 2) {
  request.r(i1319[i + 0], i1319[i + 1], 1, i1318, '')
  }
  i1316.m_fallbackFontAssets = i1318
  i1316.m_matchMaterialPreset = !!i1317[22]
  request.r(i1317[23], i1317[24], 0, i1316, 'm_defaultSpriteAsset')
  i1316.m_defaultSpriteAssetPath = i1317[25]
  i1316.m_enableEmojiSupport = !!i1317[26]
  i1316.m_MissingCharacterSpriteUnicode = i1317[27]
  i1316.m_defaultColorGradientPresetsPath = i1317[28]
  request.r(i1317[29], i1317[30], 0, i1316, 'm_defaultStyleSheet')
  i1316.m_StyleSheetsResourcePath = i1317[31]
  request.r(i1317[32], i1317[33], 0, i1316, 'm_leadingCharacters')
  request.r(i1317[34], i1317[35], 0, i1316, 'm_followingCharacters')
  i1316.m_UseModernHangulLineBreakingRules = !!i1317[36]
  return i1316
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1320 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1321 = data
  i1320.hashCode = i1321[0]
  request.r(i1321[1], i1321[2], 0, i1320, 'material')
  i1320.materialHashCode = i1321[3]
  request.r(i1321[4], i1321[5], 0, i1320, 'spriteSheet')
  var i1323 = i1321[6]
  var i1322 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1323.length; i += 1) {
    i1322.add(request.d('TMPro.TMP_Sprite', i1323[i + 0]));
  }
  i1320.spriteInfoList = i1322
  var i1325 = i1321[7]
  var i1324 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1325.length; i += 2) {
  request.r(i1325[i + 0], i1325[i + 1], 1, i1324, '')
  }
  i1320.fallbackSpriteAssets = i1324
  i1320.m_Version = i1321[8]
  i1320.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1321[9], i1320.m_FaceInfo)
  var i1327 = i1321[10]
  var i1326 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.add(request.d('TMPro.TMP_SpriteCharacter', i1327[i + 0]));
  }
  i1320.m_SpriteCharacterTable = i1326
  var i1329 = i1321[11]
  var i1328 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1329.length; i += 1) {
    i1328.add(request.d('TMPro.TMP_SpriteGlyph', i1329[i + 0]));
  }
  i1320.m_SpriteGlyphTable = i1328
  return i1320
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1332 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.hashCode = i1333[1]
  i1332.unicode = i1333[2]
  i1332.pivot = new pc.Vec2( i1333[3], i1333[4] )
  request.r(i1333[5], i1333[6], 0, i1332, 'sprite')
  i1332.id = i1333[7]
  i1332.x = i1333[8]
  i1332.y = i1333[9]
  i1332.width = i1333[10]
  i1332.height = i1333[11]
  i1332.xOffset = i1333[12]
  i1332.yOffset = i1333[13]
  i1332.xAdvance = i1333[14]
  i1332.scale = i1333[15]
  return i1332
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1339 = data
  i1338.m_Name = i1339[0]
  i1338.m_HashCode = i1339[1]
  i1338.m_ElementType = i1339[2]
  i1338.m_Unicode = i1339[3]
  i1338.m_GlyphIndex = i1339[4]
  i1338.m_Scale = i1339[5]
  return i1338
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1342 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'sprite')
  i1342.m_Index = i1343[2]
  i1342.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1343[3], i1342.m_Metrics)
  i1342.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1343[4], i1342.m_GlyphRect)
  i1342.m_Scale = i1343[5]
  i1342.m_AtlasIndex = i1343[6]
  return i1342
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1344 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.TMP_Style', i1347[i + 0]));
  }
  i1344.m_StyleList = i1346
  return i1344
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_Style' )
  var i1351 = data
  i1350.m_Name = i1351[0]
  i1350.m_HashCode = i1351[1]
  i1350.m_OpeningDefinition = i1351[2]
  i1350.m_ClosingDefinition = i1351[3]
  i1350.m_OpeningTagArray = i1351[4]
  i1350.m_ClosingTagArray = i1351[5]
  i1350.m_OpeningTagUnicodeArray = i1351[6]
  i1350.m_ClosingTagUnicodeArray = i1351[7]
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1353 = data
  var i1355 = i1353[0]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1355[i + 0]) );
  }
  i1352.files = i1354
  i1352.componentToPrefabIds = i1353[1]
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1359 = data
  i1358.path = i1359[0]
  request.r(i1359[1], i1359[2], 0, i1358, 'unityObject')
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1361 = data
  var i1363 = i1361[0]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1363[i + 0]) );
  }
  i1360.scriptsExecutionOrder = i1362
  var i1365 = i1361[1]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1365[i + 0]) );
  }
  i1360.sortingLayers = i1364
  var i1367 = i1361[2]
  var i1366 = []
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1367[i + 0]) );
  }
  i1360.cullingLayers = i1366
  i1360.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1361[3], i1360.timeSettings)
  i1360.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1361[4], i1360.physicsSettings)
  i1360.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1361[5], i1360.physics2DSettings)
  i1360.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1361[6], i1360.qualitySettings)
  i1360.enableRealtimeShadows = !!i1361[7]
  i1360.autoInstantiatePrefabs = !!i1361[8]
  i1360.enableAutoInstancing = !!i1361[9]
  i1360.lightmapEncodingQuality = i1361[10]
  i1360.desiredColorSpace = i1361[11]
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1371 = data
  i1370.name = i1371[0]
  i1370.value = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1375 = data
  i1374.id = i1375[0]
  i1374.name = i1375[1]
  i1374.value = i1375[2]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1379 = data
  i1378.id = i1379[0]
  i1378.name = i1379[1]
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1381 = data
  i1380.fixedDeltaTime = i1381[0]
  i1380.maximumDeltaTime = i1381[1]
  i1380.timeScale = i1381[2]
  i1380.maximumParticleTimestep = i1381[3]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1383 = data
  i1382.gravity = new pc.Vec3( i1383[0], i1383[1], i1383[2] )
  i1382.defaultSolverIterations = i1383[3]
  i1382.bounceThreshold = i1383[4]
  i1382.autoSyncTransforms = !!i1383[5]
  i1382.autoSimulation = !!i1383[6]
  var i1385 = i1383[7]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1385[i + 0]) );
  }
  i1382.collisionMatrix = i1384
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1389 = data
  i1388.enabled = !!i1389[0]
  i1388.layerId = i1389[1]
  i1388.otherLayerId = i1389[2]
  return i1388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1391 = data
  request.r(i1391[0], i1391[1], 0, i1390, 'material')
  i1390.gravity = new pc.Vec2( i1391[2], i1391[3] )
  i1390.positionIterations = i1391[4]
  i1390.velocityIterations = i1391[5]
  i1390.velocityThreshold = i1391[6]
  i1390.maxLinearCorrection = i1391[7]
  i1390.maxAngularCorrection = i1391[8]
  i1390.maxTranslationSpeed = i1391[9]
  i1390.maxRotationSpeed = i1391[10]
  i1390.timeToSleep = i1391[11]
  i1390.linearSleepTolerance = i1391[12]
  i1390.angularSleepTolerance = i1391[13]
  i1390.defaultContactOffset = i1391[14]
  i1390.autoSimulation = !!i1391[15]
  i1390.queriesHitTriggers = !!i1391[16]
  i1390.queriesStartInColliders = !!i1391[17]
  i1390.callbacksOnDisable = !!i1391[18]
  i1390.reuseCollisionCallbacks = !!i1391[19]
  i1390.autoSyncTransforms = !!i1391[20]
  var i1393 = i1391[21]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1393[i + 0]) );
  }
  i1390.collisionMatrix = i1392
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1397 = data
  i1396.enabled = !!i1397[0]
  i1396.layerId = i1397[1]
  i1396.otherLayerId = i1397[2]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1399 = data
  var i1401 = i1399[0]
  var i1400 = []
  for(var i = 0; i < i1401.length; i += 1) {
    i1400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1401[i + 0]) );
  }
  i1398.qualityLevels = i1400
  var i1403 = i1399[1]
  var i1402 = []
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.push( i1403[i + 0] );
  }
  i1398.names = i1402
  i1398.shadows = i1399[2]
  i1398.anisotropicFiltering = i1399[3]
  i1398.antiAliasing = i1399[4]
  i1398.lodBias = i1399[5]
  i1398.shadowCascades = i1399[6]
  i1398.shadowDistance = i1399[7]
  i1398.shadowmaskMode = i1399[8]
  i1398.shadowProjection = i1399[9]
  i1398.shadowResolution = i1399[10]
  i1398.softParticles = !!i1399[11]
  i1398.softVegetation = !!i1399[12]
  i1398.activeColorSpace = i1399[13]
  i1398.desiredColorSpace = i1399[14]
  i1398.masterTextureLimit = i1399[15]
  i1398.maxQueuedFrames = i1399[16]
  i1398.particleRaycastBudget = i1399[17]
  i1398.pixelLightCount = i1399[18]
  i1398.realtimeReflectionProbes = !!i1399[19]
  i1398.shadowCascade2Split = i1399[20]
  i1398.shadowCascade4Split = new pc.Vec3( i1399[21], i1399[22], i1399[23] )
  i1398.streamingMipmapsActive = !!i1399[24]
  i1398.vSyncCount = i1399[25]
  i1398.asyncUploadBufferSize = i1399[26]
  i1398.asyncUploadTimeSlice = i1399[27]
  i1398.billboardsFaceCameraPosition = !!i1399[28]
  i1398.shadowNearPlaneOffset = i1399[29]
  i1398.streamingMipmapsMemoryBudget = i1399[30]
  i1398.maximumLODLevel = i1399[31]
  i1398.streamingMipmapsAddAllCameras = !!i1399[32]
  i1398.streamingMipmapsMaxLevelReduction = i1399[33]
  i1398.streamingMipmapsRenderersPerFrame = i1399[34]
  i1398.resolutionScalingFixedDPIFactor = i1399[35]
  i1398.streamingMipmapsMaxFileIORequests = i1399[36]
  i1398.currentQualityLevel = i1399[37]
  return i1398
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1406 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1407 = data
  i1406.xPlacement = i1407[0]
  i1406.yPlacement = i1407[1]
  i1406.xAdvance = i1407[2]
  i1406.yAdvance = i1407[3]
  return i1406
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1408 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1409 = data
  i1408.m_GlyphIndex = i1409[0]
  i1408.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1409[1], i1408.m_GlyphValueRecord)
  return i1408
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1410 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1411 = data
  i1410.m_XPlacement = i1411[0]
  i1410.m_YPlacement = i1411[1]
  i1410.m_XAdvance = i1411[2]
  i1410.m_YAdvance = i1411[3]
  return i1410
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[17],"82":[50],"20":[19],"83":[19],"84":[19],"85":[19],"86":[19],"87":[19],"88":[19],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[50],"104":[8],"105":[106],"107":[106],"49":[21],"108":[9],"109":[9],"110":[9],"111":[9],"112":[21],"113":[8,21],"24":[21,22],"114":[21],"115":[22,21],"116":[8],"117":[22,21],"118":[21],"119":[21],"120":[21],"52":[49],"26":[22,21],"121":[21],"51":[49],"122":[21],"123":[21],"124":[21],"125":[21],"126":[21],"127":[21],"128":[21],"129":[21],"130":[21],"131":[22,21],"132":[21],"133":[21],"134":[21],"46":[21],"135":[22,21],"136":[21],"137":[47],"138":[47],"48":[47],"139":[47],"140":[50],"141":[50],"142":[143],"144":[21],"145":[143],"146":[50],"147":[148],"149":[143]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","LunaChallenge","UnityEngine.GameObject","LunaDynamic","FishingRod","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","LowLineRenderer","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Outline","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "62.9";

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

Deserializers.buildID = "28c2dd9e-4eba-421f-93eb-355773de6d7c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

