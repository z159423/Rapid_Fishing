var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.JointSpring' )
  var i699 = data
  i698.spring = i699[0]
  i698.damper = i699[1]
  i698.targetPosition = i699[2]
  return i698
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.JointMotor' )
  var i701 = data
  i700.m_TargetVelocity = i701[0]
  i700.m_Force = i701[1]
  i700.m_FreeSpin = i701[2]
  return i700
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.JointLimits' )
  var i703 = data
  i702.m_Min = i703[0]
  i702.m_Max = i703[1]
  i702.m_Bounciness = i703[2]
  i702.m_BounceMinVelocity = i703[3]
  i702.m_ContactDistance = i703[4]
  i702.minBounce = i703[5]
  i702.maxBounce = i703[6]
  return i702
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.JointDrive' )
  var i705 = data
  i704.m_PositionSpring = i705[0]
  i704.m_PositionDamper = i705[1]
  i704.m_MaximumForce = i705[2]
  return i704
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i707 = data
  i706.m_Spring = i707[0]
  i706.m_Damper = i707[1]
  return i706
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i709 = data
  i708.m_Limit = i709[0]
  i708.m_Bounciness = i709[1]
  i708.m_ContactDistance = i709[2]
  return i708
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i711 = data
  i710.m_ExtremumSlip = i711[0]
  i710.m_ExtremumValue = i711[1]
  i710.m_AsymptoteSlip = i711[2]
  i710.m_AsymptoteValue = i711[3]
  i710.m_Stiffness = i711[4]
  return i710
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i713 = data
  i712.m_LowerAngle = i713[0]
  i712.m_UpperAngle = i713[1]
  return i712
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i715 = data
  i714.m_MotorSpeed = i715[0]
  i714.m_MaximumMotorTorque = i715[1]
  return i714
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i717 = data
  i716.m_DampingRatio = i717[0]
  i716.m_Frequency = i717[1]
  i716.m_Angle = i717[2]
  return i716
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i719 = data
  i718.m_LowerTranslation = i719[0]
  i718.m_UpperTranslation = i719[1]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i720 = root || new pc.UnityMaterial()
  var i721 = data
  i720.name = i721[0]
  request.r(i721[1], i721[2], 0, i720, 'shader')
  i720.renderQueue = i721[3]
  i720.enableInstancing = !!i721[4]
  var i723 = i721[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i723[i + 0]) );
  }
  i720.floatParameters = i722
  var i725 = i721[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i725[i + 0]) );
  }
  i720.colorParameters = i724
  var i727 = i721[7]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i727[i + 0]) );
  }
  i720.vectorParameters = i726
  var i729 = i721[8]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i729[i + 0]) );
  }
  i720.textureParameters = i728
  var i731 = i721[9]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i731[i + 0]) );
  }
  i720.materialFlags = i730
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i735 = data
  i734.name = i735[0]
  i734.value = i735[1]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i739 = data
  i738.name = i739[0]
  i738.value = new pc.Color(i739[1], i739[2], i739[3], i739[4])
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i743 = data
  i742.name = i743[0]
  i742.value = new pc.Vec4( i743[1], i743[2], i743[3], i743[4] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i747 = data
  i746.name = i747[0]
  request.r(i747[1], i747[2], 0, i746, 'value')
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i751 = data
  i750.name = i751[0]
  i750.enabled = !!i751[1]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i753 = data
  i752.position = new pc.Vec3( i753[0], i753[1], i753[2] )
  i752.scale = new pc.Vec3( i753[3], i753[4], i753[5] )
  i752.rotation = new pc.Quat(i753[6], i753[7], i753[8], i753[9])
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i755 = data
  i754.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i755[0], i754.main)
  i754.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i755[1], i754.colorBySpeed)
  i754.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i755[2], i754.colorOverLifetime)
  i754.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i755[3], i754.emission)
  i754.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i755[4], i754.rotationBySpeed)
  i754.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i755[5], i754.rotationOverLifetime)
  i754.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i755[6], i754.shape)
  i754.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i755[7], i754.sizeBySpeed)
  i754.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i755[8], i754.sizeOverLifetime)
  i754.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i755[9], i754.textureSheetAnimation)
  i754.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i755[10], i754.velocityOverLifetime)
  i754.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i755[11], i754.noise)
  i754.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i755[12], i754.inheritVelocity)
  i754.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i755[13], i754.forceOverLifetime)
  i754.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i755[14], i754.limitVelocityOverLifetime)
  i754.useAutoRandomSeed = !!i755[15]
  i754.randomSeed = i755[16]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemMain()
  var i757 = data
  i756.duration = i757[0]
  i756.loop = !!i757[1]
  i756.prewarm = !!i757[2]
  i756.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.startDelay)
  i756.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.startLifetime)
  i756.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[5], i756.startSpeed)
  i756.startSize3D = !!i757[6]
  i756.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startSizeX)
  i756.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[8], i756.startSizeY)
  i756.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[9], i756.startSizeZ)
  i756.startRotation3D = !!i757[10]
  i756.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[11], i756.startRotationX)
  i756.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[12], i756.startRotationY)
  i756.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[13], i756.startRotationZ)
  i756.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[14], i756.startColor)
  i756.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[15], i756.gravityModifier)
  i756.simulationSpace = i757[16]
  request.r(i757[17], i757[18], 0, i756, 'customSimulationSpace')
  i756.simulationSpeed = i757[19]
  i756.useUnscaledTime = !!i757[20]
  i756.scalingMode = i757[21]
  i756.playOnAwake = !!i757[22]
  i756.maxParticles = i757[23]
  i756.emitterVelocityMode = i757[24]
  i756.stopAction = i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxCurve()
  var i759 = data
  i758.mode = i759[0]
  i758.curveMin = new pc.AnimationCurve( { keys_flow: i759[1] } )
  i758.curveMax = new pc.AnimationCurve( { keys_flow: i759[2] } )
  i758.curveMultiplier = i759[3]
  i758.constantMin = i759[4]
  i758.constantMax = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxGradient()
  var i761 = data
  i760.mode = i761[0]
  i760.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[1], i760.gradientMin)
  i760.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[2], i760.gradientMax)
  i760.colorMin = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.colorMax = new pc.Color(i761[7], i761[8], i761[9], i761[10])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i763 = data
  i762.mode = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i765[i + 0]) );
  }
  i762.colorKeys = i764
  var i767 = i763[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i767[i + 0]) );
  }
  i762.alphaKeys = i766
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemColorBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[1], i768.color)
  i768.range = new pc.Vec2( i769[2], i769[3] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i773 = data
  i772.color = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.time = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i777 = data
  i776.alpha = i777[0]
  i776.time = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemEmitter()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.rateOverTime)
  i780.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.rateOverDistance)
  var i783 = i781[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i783[i + 0]) );
  }
  i780.bursts = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemBurst()
  var i787 = data
  i786.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[0], i786.count)
  i786.cycleCount = i787[1]
  i786.minCount = i787[2]
  i786.maxCount = i787[3]
  i786.repeatInterval = i787[4]
  i786.time = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationBySpeed()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  i788.range = new pc.Vec2( i789[5], i789[6] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemShape()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.shapeType = i793[1]
  i792.randomDirectionAmount = i793[2]
  i792.sphericalDirectionAmount = i793[3]
  i792.randomPositionAmount = i793[4]
  i792.alignToDirection = !!i793[5]
  i792.radius = i793[6]
  i792.radiusMode = i793[7]
  i792.radiusSpread = i793[8]
  i792.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.radiusSpeed)
  i792.radiusThickness = i793[10]
  i792.angle = i793[11]
  i792.length = i793[12]
  i792.boxThickness = new pc.Vec3( i793[13], i793[14], i793[15] )
  i792.meshShapeType = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'mesh')
  request.r(i793[19], i793[20], 0, i792, 'meshRenderer')
  request.r(i793[21], i793[22], 0, i792, 'skinnedMeshRenderer')
  i792.useMeshMaterialIndex = !!i793[23]
  i792.meshMaterialIndex = i793[24]
  i792.useMeshColors = !!i793[25]
  i792.normalOffset = i793[26]
  i792.arc = i793[27]
  i792.arcMode = i793[28]
  i792.arcSpread = i793[29]
  i792.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[30], i792.arcSpeed)
  i792.donutRadius = i793[31]
  i792.position = new pc.Vec3( i793[32], i793[33], i793[34] )
  i792.rotation = new pc.Vec3( i793[35], i793[36], i793[37] )
  i792.scale = new pc.Vec3( i793[38], i793[39], i793[40] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.mode = i799[1]
  i798.animation = i799[2]
  i798.numTilesX = i799[3]
  i798.numTilesY = i799[4]
  i798.useRandomRow = !!i799[5]
  i798.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[6], i798.frameOverTime)
  i798.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startFrame)
  i798.cycleCount = i799[8]
  i798.rowIndex = i799[9]
  i798.flipU = i799[10]
  i798.flipV = i799[11]
  i798.spriteCount = i799[12]
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sprites = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.speedModifier)
  i804.space = i805[5]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemNoise()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.separateAxes = !!i807[1]
  i806.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.strengthX)
  i806.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.strengthY)
  i806.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.strengthZ)
  i806.frequency = i807[5]
  i806.damping = !!i807[6]
  i806.octaveCount = i807[7]
  i806.octaveMultiplier = i807[8]
  i806.octaveScale = i807[9]
  i806.quality = i807[10]
  i806.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.scrollSpeed)
  i806.scrollSpeedMultiplier = i807[12]
  i806.remapEnabled = !!i807[13]
  i806.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[14], i806.remapX)
  i806.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[15], i806.remapY)
  i806.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[16], i806.remapZ)
  i806.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[17], i806.positionAmount)
  i806.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[18], i806.rotationAmount)
  i806.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[19], i806.sizeAmount)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemInheritVelocity()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.curve)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemForceOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.space = i811[4]
  i810.randomized = !!i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.limitX)
  i812.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.limitY)
  i812.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.limitZ)
  i812.dampen = i813[4]
  i812.separateAxes = !!i813[5]
  i812.space = i813[6]
  i812.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[7], i812.drag)
  i812.multiplyDragByParticleSize = !!i813[8]
  i812.multiplyDragByParticleVelocity = !!i813[9]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i815 = data
  i814.enabled = !!i815[0]
  request.r(i815[1], i815[2], 0, i814, 'sharedMaterial')
  var i817 = i815[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[4]
  i814.shadowCastingMode = i815[5]
  i814.sortingLayerID = i815[6]
  i814.sortingOrder = i815[7]
  i814.lightmapIndex = i815[8]
  i814.lightmapSceneIndex = i815[9]
  i814.lightmapScaleOffset = new pc.Vec4( i815[10], i815[11], i815[12], i815[13] )
  i814.lightProbeUsage = i815[14]
  i814.reflectionProbeUsage = i815[15]
  request.r(i815[16], i815[17], 0, i814, 'mesh')
  i814.meshCount = i815[18]
  i814.activeVertexStreamsCount = i815[19]
  i814.alignment = i815[20]
  i814.renderMode = i815[21]
  i814.sortMode = i815[22]
  i814.lengthScale = i815[23]
  i814.velocityScale = i815[24]
  i814.cameraVelocityScale = i815[25]
  i814.normalDirection = i815[26]
  i814.sortingFudge = i815[27]
  i814.minParticleSize = i815[28]
  i814.maxParticleSize = i815[29]
  i814.pivot = new pc.Vec3( i815[30], i815[31], i815[32] )
  request.r(i815[33], i815[34], 0, i814, 'trailMaterial')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i821 = data
  i820.name = i821[0]
  i820.tag = i821[1]
  i820.enabled = !!i821[2]
  i820.isStatic = !!i821[3]
  i820.layer = i821[4]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i823 = data
  i822.name = i823[0]
  i822.width = i823[1]
  i822.height = i823[2]
  i822.mipmapCount = i823[3]
  i822.anisoLevel = i823[4]
  i822.filterMode = i823[5]
  i822.hdr = !!i823[6]
  i822.format = i823[7]
  i822.wrapMode = i823[8]
  i822.alphaIsTransparency = !!i823[9]
  i822.alphaSource = i823[10]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'sharedMesh')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'additionalVertexStreams')
  i826.enabled = !!i827[2]
  request.r(i827[3], i827[4], 0, i826, 'sharedMaterial')
  var i829 = i827[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.sharedMaterials = i828
  i826.receiveShadows = !!i827[6]
  i826.shadowCastingMode = i827[7]
  i826.sortingLayerID = i827[8]
  i826.sortingOrder = i827[9]
  i826.lightmapIndex = i827[10]
  i826.lightmapSceneIndex = i827[11]
  i826.lightmapScaleOffset = new pc.Vec4( i827[12], i827[13], i827[14], i827[15] )
  i826.lightProbeUsage = i827[16]
  i826.reflectionProbeUsage = i827[17]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i831 = data
  i830.name = i831[0]
  i830.halfPrecision = !!i831[1]
  i830.vertexCount = i831[2]
  i830.aabb = i831[3]
  var i833 = i831[4]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( !!i833[i + 0] );
  }
  i830.streams = i832
  i830.vertices = i831[5]
  var i835 = i831[6]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i835[i + 0]) );
  }
  i830.subMeshes = i834
  var i837 = i831[7]
  var i836 = []
  for(var i = 0; i < i837.length; i += 16) {
    i836.push( new pc.Mat4().setData(i837[i + 0], i837[i + 1], i837[i + 2], i837[i + 3],  i837[i + 4], i837[i + 5], i837[i + 6], i837[i + 7],  i837[i + 8], i837[i + 9], i837[i + 10], i837[i + 11],  i837[i + 12], i837[i + 13], i837[i + 14], i837[i + 15]) );
  }
  i830.bindposes = i836
  var i839 = i831[8]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i839[i + 0]) );
  }
  i830.blendShapes = i838
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i845 = data
  i844.triangles = i845[0]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i851 = data
  i850.name = i851[0]
  var i853 = i851[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i853[i + 0]) );
  }
  i850.frames = i852
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i855 = data
  i854.textureMode = i855[0]
  i854.alignment = i855[1]
  i854.widthCurve = new pc.AnimationCurve( { keys_flow: i855[2] } )
  i854.colorGradient = i855[3] ? new pc.ColorGradient(i855[3][0], i855[3][1], i855[3][2]) : null
  var i857 = i855[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 3) {
    i856.push( new pc.Vec3( i857[i + 0], i857[i + 1], i857[i + 2] ) );
  }
  i854.positions = i856
  i854.positionCount = i855[5]
  i854.widthMultiplier = i855[6]
  i854.startWidth = i855[7]
  i854.endWidth = i855[8]
  i854.numCornerVertices = i855[9]
  i854.numCapVertices = i855[10]
  i854.useWorldSpace = !!i855[11]
  i854.loop = !!i855[12]
  i854.startColor = new pc.Color(i855[13], i855[14], i855[15], i855[16])
  i854.endColor = new pc.Color(i855[17], i855[18], i855[19], i855[20])
  i854.generateLightingData = !!i855[21]
  i854.enabled = !!i855[22]
  request.r(i855[23], i855[24], 0, i854, 'sharedMaterial')
  var i859 = i855[25]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i854.sharedMaterials = i858
  i854.receiveShadows = !!i855[26]
  i854.shadowCastingMode = i855[27]
  i854.sortingLayerID = i855[28]
  i854.sortingOrder = i855[29]
  i854.lightmapIndex = i855[30]
  i854.lightmapSceneIndex = i855[31]
  i854.lightmapScaleOffset = new pc.Vec4( i855[32], i855[33], i855[34], i855[35] )
  i854.lightProbeUsage = i855[36]
  i854.reflectionProbeUsage = i855[37]
  return i854
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i862 = root || request.c( 'RopeBridge' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, 'StartPoint')
  request.r(i863[2], i863[3], 0, i862, 'EndPoint')
  i862.ropeSegLen = i863[4]
  i862.segmentLength = i863[5]
  i862.lineWidth = i863[6]
  i862.distOfStartToEnd = i863[7]
  i862.lineLengthMultifly = i863[8]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'animatorController')
  i864.updateMode = i865[2]
  var i867 = i865[3]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.humanBones = i866
  i864.enabled = !!i865[4]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i871 = data
  i870.playAutomatically = !!i871[0]
  request.r(i871[1], i871[2], 0, i870, 'clip')
  var i873 = i871[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.clips = i872
  i870.wrapMode = i871[4]
  i870.enabled = !!i871[5]
  return i870
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i876 = root || request.c( 'AnimationController' )
  var i877 = data
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i879 = data
  i878.center = new pc.Vec3( i879[0], i879[1], i879[2] )
  i878.size = new pc.Vec3( i879[3], i879[4], i879[5] )
  i878.enabled = !!i879[6]
  i878.isTrigger = !!i879[7]
  request.r(i879[8], i879[9], 0, i878, 'material')
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i881 = data
  i880.enabled = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'sharedMaterial')
  var i883 = i881[3]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.sharedMaterials = i882
  i880.receiveShadows = !!i881[4]
  i880.shadowCastingMode = i881[5]
  i880.sortingLayerID = i881[6]
  i880.sortingOrder = i881[7]
  i880.lightmapIndex = i881[8]
  i880.lightmapSceneIndex = i881[9]
  i880.lightmapScaleOffset = new pc.Vec4( i881[10], i881[11], i881[12], i881[13] )
  i880.lightProbeUsage = i881[14]
  i880.reflectionProbeUsage = i881[15]
  request.r(i881[16], i881[17], 0, i880, 'sharedMesh')
  var i885 = i881[18]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i880.bones = i884
  i880.updateWhenOffscreen = !!i881[19]
  i880.localBounds = i881[20]
  request.r(i881[21], i881[22], 0, i880, 'rootBone')
  var i887 = i881[23]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i887[i + 0]) );
  }
  i880.blendShapesWeights = i886
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i891 = data
  i890.weight = i891[0]
  return i890
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i892 = root || request.c( 'FishingLine' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'line')
  request.r(i893[2], i893[3], 0, i892, 'startPoint')
  request.r(i893[4], i893[5], 0, i892, 'endPoint')
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i895 = data
  i894.mass = i895[0]
  i894.drag = i895[1]
  i894.angularDrag = i895[2]
  i894.useGravity = !!i895[3]
  i894.isKinematic = !!i895[4]
  i894.constraints = i895[5]
  i894.maxAngularVelocity = i895[6]
  i894.collisionDetectionMode = i895[7]
  i894.interpolation = i895[8]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i897 = data
  i896.swingAxis = new pc.Vec3( i897[0], i897[1], i897[2] )
  i896.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i897[3], i896.twistLimitSpring)
  i896.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i897[4], i896.swingLimitSpring)
  i896.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i897[5], i896.lowTwistLimit)
  i896.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i897[6], i896.highTwistLimit)
  i896.swing1Limit = request.d('UnityEngine.SoftJointLimit', i897[7], i896.swing1Limit)
  i896.swing2Limit = request.d('UnityEngine.SoftJointLimit', i897[8], i896.swing2Limit)
  request.r(i897[9], i897[10], 0, i896, 'connectedBody')
  i896.axis = new pc.Vec3( i897[11], i897[12], i897[13] )
  i896.anchor = new pc.Vec3( i897[14], i897[15], i897[16] )
  i896.connectedAnchor = new pc.Vec3( i897[17], i897[18], i897[19] )
  i896.autoConfigureConnectedAnchor = !!i897[20]
  i896.massScale = i897[21]
  i896.connectedMassScale = i897[22]
  i896.enableCollision = !!i897[23]
  i896.breakForce = i897[24]
  i896.breakTorque = i897[25]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i901 = data
  i900.weight = i901[0]
  i900.vertices = i901[1]
  i900.normals = i901[2]
  i900.tangents = i901[3]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i903 = data
  i902.pivot = new pc.Vec2( i903[0], i903[1] )
  i902.anchorMin = new pc.Vec2( i903[2], i903[3] )
  i902.anchorMax = new pc.Vec2( i903[4], i903[5] )
  i902.sizeDelta = new pc.Vec2( i903[6], i903[7] )
  i902.anchoredPosition3D = new pc.Vec3( i903[8], i903[9], i903[10] )
  i902.rotation = new pc.Quat(i903[11], i903[12], i903[13], i903[14])
  i902.scale = new pc.Vec3( i903[15], i903[16], i903[17] )
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i905 = data
  i904.cullTransparentMesh = !!i905[0]
  return i904
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i906 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i907 = data
  i906.m_hasFontAssetChanged = !!i907[0]
  request.r(i907[1], i907[2], 0, i906, 'm_baseMaterial')
  i906.m_maskOffset = new pc.Vec4( i907[3], i907[4], i907[5], i907[6] )
  i906.m_text = i907[7]
  i906.m_isRightToLeft = !!i907[8]
  request.r(i907[9], i907[10], 0, i906, 'm_fontAsset')
  request.r(i907[11], i907[12], 0, i906, 'm_sharedMaterial')
  var i909 = i907[13]
  var i908 = []
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 2, i908, '')
  }
  i906.m_fontSharedMaterials = i908
  request.r(i907[14], i907[15], 0, i906, 'm_fontMaterial')
  var i911 = i907[16]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i906.m_fontMaterials = i910
  i906.m_fontColor32 = UnityEngine.Color32.ConstructColor(i907[17], i907[18], i907[19], i907[20])
  i906.m_fontColor = new pc.Color(i907[21], i907[22], i907[23], i907[24])
  i906.m_enableVertexGradient = !!i907[25]
  i906.m_colorMode = i907[26]
  i906.m_fontColorGradient = request.d('TMPro.VertexGradient', i907[27], i906.m_fontColorGradient)
  request.r(i907[28], i907[29], 0, i906, 'm_fontColorGradientPreset')
  request.r(i907[30], i907[31], 0, i906, 'm_spriteAsset')
  i906.m_tintAllSprites = !!i907[32]
  request.r(i907[33], i907[34], 0, i906, 'm_StyleSheet')
  i906.m_TextStyleHashCode = i907[35]
  i906.m_overrideHtmlColors = !!i907[36]
  i906.m_faceColor = UnityEngine.Color32.ConstructColor(i907[37], i907[38], i907[39], i907[40])
  i906.m_fontSize = i907[41]
  i906.m_fontSizeBase = i907[42]
  i906.m_fontWeight = i907[43]
  i906.m_enableAutoSizing = !!i907[44]
  i906.m_fontSizeMin = i907[45]
  i906.m_fontSizeMax = i907[46]
  i906.m_fontStyle = i907[47]
  i906.m_HorizontalAlignment = i907[48]
  i906.m_VerticalAlignment = i907[49]
  i906.m_textAlignment = i907[50]
  i906.m_characterSpacing = i907[51]
  i906.m_wordSpacing = i907[52]
  i906.m_lineSpacing = i907[53]
  i906.m_lineSpacingMax = i907[54]
  i906.m_paragraphSpacing = i907[55]
  i906.m_charWidthMaxAdj = i907[56]
  i906.m_enableWordWrapping = !!i907[57]
  i906.m_wordWrappingRatios = i907[58]
  i906.m_overflowMode = i907[59]
  request.r(i907[60], i907[61], 0, i906, 'm_linkedTextComponent')
  request.r(i907[62], i907[63], 0, i906, 'parentLinkedComponent')
  i906.m_enableKerning = !!i907[64]
  i906.m_enableExtraPadding = !!i907[65]
  i906.checkPaddingRequired = !!i907[66]
  i906.m_isRichText = !!i907[67]
  i906.m_parseCtrlCharacters = !!i907[68]
  i906.m_isOrthographic = !!i907[69]
  i906.m_isCullingEnabled = !!i907[70]
  i906.m_horizontalMapping = i907[71]
  i906.m_verticalMapping = i907[72]
  i906.m_uvLineOffset = i907[73]
  i906.m_geometrySortingOrder = i907[74]
  i906.m_IsTextObjectScaleStatic = !!i907[75]
  i906.m_VertexBufferAutoSizeReduction = !!i907[76]
  i906.m_useMaxVisibleDescender = !!i907[77]
  i906.m_pageToDisplay = i907[78]
  i906.m_margin = new pc.Vec4( i907[79], i907[80], i907[81], i907[82] )
  i906.m_isUsingLegacyAnimationComponent = !!i907[83]
  i906.m_isVolumetricText = !!i907[84]
  request.r(i907[85], i907[86], 0, i906, 'm_Material')
  i906.m_Maskable = !!i907[87]
  i906.m_Color = new pc.Color(i907[88], i907[89], i907[90], i907[91])
  i906.m_RaycastTarget = !!i907[92]
  i906.m_RaycastPadding = new pc.Vec4( i907[93], i907[94], i907[95], i907[96] )
  return i906
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i912 = root || request.c( 'TMPro.VertexGradient' )
  var i913 = data
  i912.topLeft = new pc.Color(i913[0], i913[1], i913[2], i913[3])
  i912.topRight = new pc.Color(i913[4], i913[5], i913[6], i913[7])
  i912.bottomLeft = new pc.Color(i913[8], i913[9], i913[10], i913[11])
  i912.bottomRight = new pc.Color(i913[12], i913[13], i913[14], i913[15])
  return i912
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i914 = root || request.c( 'UnityEngine.UI.Image' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'm_Sprite')
  i914.m_Type = i915[2]
  i914.m_PreserveAspect = !!i915[3]
  i914.m_FillCenter = !!i915[4]
  i914.m_FillMethod = i915[5]
  i914.m_FillAmount = i915[6]
  i914.m_FillClockwise = !!i915[7]
  i914.m_FillOrigin = i915[8]
  i914.m_UseSpriteMesh = !!i915[9]
  i914.m_PixelsPerUnitMultiplier = i915[10]
  request.r(i915[11], i915[12], 0, i914, 'm_Material')
  i914.m_Maskable = !!i915[13]
  i914.m_Color = new pc.Color(i915[14], i915[15], i915[16], i915[17])
  i914.m_RaycastTarget = !!i915[18]
  i914.m_RaycastPadding = new pc.Vec4( i915[19], i915[20], i915[21], i915[22] )
  return i914
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

Deserializers["Chest"] = function (request, data, root) {
  var i920 = root || request.c( 'Chest' )
  var i921 = data
  request.r(i921[0], i921[1], 0, i920, 'chestMover')
  i920.chestTier = i921[2]
  request.r(i921[3], i921[4], 0, i920, 'line')
  i920.chestPullDist = i921[5]
  i920.pullForce = i921[6]
  i920.fishType = request.d('FishType', i921[7], i920.fishType)
  request.r(i921[8], i921[9], 0, i920, 'fishData')
  i920.sensingRadius = i921[10]
  i920.moveSpeed = i921[11]
  i920.followTargetSpeed = i921[12]
  i920.rotationSpeed = i921[13]
  request.r(i921[14], i921[15], 0, i920, 'target')
  i920.usingMapDataNumber = i921[16]
  i920.hooked = !!i921[17]
  request.r(i921[18], i921[19], 0, i920, 'rigid2')
  request.r(i921[20], i921[21], 0, i920, 'rigid')
  i920.dirToHook = new pc.Vec3( i921[22], i921[23], i921[24] )
  request.r(i921[25], i921[26], 0, i920, 'head')
  request.r(i921[27], i921[28], 0, i920, 'mapData')
  request.r(i921[29], i921[30], 0, i920, 'mousePoint')
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i923 = data
  i922.enabled = !!i923[0]
  i922.type = i923[1]
  i922.color = new pc.Color(i923[2], i923[3], i923[4], i923[5])
  i922.cullingMask = i923[6]
  i922.intensity = i923[7]
  i922.range = i923[8]
  i922.spotAngle = i923[9]
  i922.shadows = i923[10]
  i922.shadowNormalBias = i923[11]
  i922.shadowBias = i923[12]
  i922.shadowStrength = i923[13]
  i922.shadowResolution = i923[14]
  i922.lightmapBakeType = i923[15]
  i922.renderMode = i923[16]
  request.r(i923[17], i923[18], 0, i922, 'cookie')
  i922.cookieSize = i923[19]
  return i922
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i924 = root || request.c( 'ChestMover' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'chest')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i927 = data
  i926.enabled = !!i927[0]
  request.r(i927[1], i927[2], 0, i926, 'sharedMaterial')
  var i929 = i927[3]
  var i928 = []
  for(var i = 0; i < i929.length; i += 2) {
  request.r(i929[i + 0], i929[i + 1], 2, i928, '')
  }
  i926.sharedMaterials = i928
  i926.receiveShadows = !!i927[4]
  i926.shadowCastingMode = i927[5]
  i926.sortingLayerID = i927[6]
  i926.sortingOrder = i927[7]
  i926.lightmapIndex = i927[8]
  i926.lightmapSceneIndex = i927[9]
  i926.lightmapScaleOffset = new pc.Vec4( i927[10], i927[11], i927[12], i927[13] )
  i926.lightProbeUsage = i927[14]
  i926.reflectionProbeUsage = i927[15]
  i926.color = new pc.Color(i927[16], i927[17], i927[18], i927[19])
  request.r(i927[20], i927[21], 0, i926, 'sprite')
  i926.flipX = !!i927[22]
  i926.flipY = !!i927[23]
  i926.drawMode = i927[24]
  i926.size = new pc.Vec2( i927[25], i927[26] )
  i926.tileMode = i927[27]
  i926.adaptiveModeThreshold = i927[28]
  i926.maskInteraction = i927[29]
  i926.spriteSortPoint = i927[30]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i931 = data
  i930.name = i931[0]
  i930.atlasId = i931[1]
  i930.mipmapCount = i931[2]
  i930.hdr = !!i931[3]
  i930.size = i931[4]
  i930.anisoLevel = i931[5]
  i930.filterMode = i931[6]
  i930.wrapMode = i931[7]
  var i933 = i931[8]
  var i932 = []
  for(var i = 0; i < i933.length; i += 4) {
    i932.push( UnityEngine.Rect.MinMaxRect(i933[i + 0], i933[i + 1], i933[i + 2], i933[i + 3]) );
  }
  i930.rects = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i937 = data
  i936.name = i937[0]
  i936.index = i937[1]
  i936.startup = !!i937[2]
  return i936
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i938 = root || request.c( 'FishingRod' )
  var i939 = data
  i938.hookThrowForce = i939[0]
  i938.lineForce = i939[1]
  i938.maxPullingForce = i939[2]
  i938.minPullingForce = i939[3]
  i938.currentPullingForece = i939[4]
  i938.maxLine = i939[5]
  i938.pullingSpeed = i939[6]
  i938.playAdsPullCount = i939[7]
  i938.isStart = !!i939[8]
  request.r(i939[9], i939[10], 0, i938, 'hookRigid')
  request.r(i939[11], i939[12], 0, i938, 'pivot')
  request.r(i939[13], i939[14], 0, i938, 'touchToStartPanel')
  request.r(i939[15], i939[16], 0, i938, 'rodAnimator')
  request.r(i939[17], i939[18], 0, i938, 'fishingHook')
  request.r(i939[19], i939[20], 0, i938, 'touchField')
  request.r(i939[21], i939[22], 0, i938, 'upgradePanel')
  request.r(i939[23], i939[24], 0, i938, 'upgradeButton')
  request.r(i939[25], i939[26], 0, i938, 'depthText')
  request.r(i939[27], i939[28], 0, i938, 'throwTarget1')
  request.r(i939[29], i939[30], 0, i938, 'throwTarget2')
  request.r(i939[31], i939[32], 0, i938, 'hookObject')
  request.r(i939[33], i939[34], 0, i938, 'playerObject')
  request.r(i939[35], i939[36], 0, i938, 'animationController')
  return i938
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i940 = root || request.c( 'FishingLogic' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'joint')
  i940.biteBate = !!i941[2]
  i940.pulling = !!i941[3]
  i940.enablePulling = !!i941[4]
  request.r(i941[5], i941[6], 0, i940, 'rodAnimator')
  request.r(i941[7], i941[8], 0, i940, 'animationController')
  request.r(i941[9], i941[10], 0, i940, 'startButton')
  request.r(i941[11], i941[12], 0, i940, 'catchSlider')
  request.r(i941[13], i941[14], 0, i940, 'catchButton')
  request.r(i941[15], i941[16], 0, i940, 'fishingRod')
  request.r(i941[17], i941[18], 0, i940, 'arrow')
  request.r(i941[19], i941[20], 0, i940, 'fishingRodSkinned')
  request.r(i941[21], i941[22], 0, i940, 'bubbleParticle')
  request.r(i941[23], i941[24], 0, i940, 'hookRigid')
  request.r(i941[25], i941[26], 0, i940, 'hook')
  return i940
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i942 = root || request.c( 'Upgrades' )
  var i943 = data
  i942.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i943[0], i942.lineLengthUpgrade)
  i942.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i943[1], i942.hookMaxUpgrade)
  i942.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i943[2], i942.hookMoveSpeedUpgrade)
  request.r(i943[3], i943[4], 0, i942, 'hook')
  request.r(i943[5], i943[6], 0, i942, 'rod')
  request.r(i943[7], i943[8], 0, i942, 'touchField')
  request.r(i943[9], i943[10], 0, i942, 'upgradePanel')
  request.r(i943[11], i943[12], 0, i942, 'upgradeTap')
  request.r(i943[13], i943[14], 0, i942, 'closeTap')
  request.r(i943[15], i943[16], 0, i942, 'tapToStartText')
  return i942
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i944 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i945 = data
  i944.currentLevel = i945[0]
  i944.maxLevel = i945[1]
  i944.upgradeValue = i945[2]
  i944.upgradeNeedyCost = i945[3]
  i944.upgradeCostIncreaseValue = i945[4]
  i944.upgradeCostIncreaseValueMultifly = i945[5]
  request.r(i945[6], i945[7], 0, i944, 'levelText')
  request.r(i945[8], i945[9], 0, i944, 'needyCostText')
  request.r(i945[10], i945[11], 0, i944, 'cover')
  request.r(i945[12], i945[13], 0, i944, 'rod')
  return i944
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i946 = root || request.c( 'Upgrades+CountUpgrade' )
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
  request.r(i947[12], i947[13], 0, i946, 'hook')
  return i946
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i948 = root || request.c( 'Upgrades+MovementUpgrade' )
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
  request.r(i949[12], i949[13], 0, i948, 'touchField')
  return i948
}

Deserializers["FishPool"] = function (request, data, root) {
  var i950 = root || request.c( 'FishPool' )
  var i951 = data
  i950.oneTierFishList = request.d('FishList', i951[0], i950.oneTierFishList)
  i950.twoTierFishList = request.d('FishList', i951[1], i950.twoTierFishList)
  i950.threeTierFishList = request.d('FishList', i951[2], i950.threeTierFishList)
  i950.fourTierFishList = request.d('FishList', i951[3], i950.fourTierFishList)
  i950.fiveTierFishList = request.d('FishList', i951[4], i950.fiveTierFishList)
  i950.chestList_one = request.d('FishList', i951[5], i950.chestList_one)
  i950.chestList_two = request.d('FishList', i951[6], i950.chestList_two)
  i950.chestList_three = request.d('FishList', i951[7], i950.chestList_three)
  i950.chestMover = request.d('FishList', i951[8], i950.chestMover)
  var i953 = i951[9]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 1, i952, '')
  }
  i950.generatedFishList = i952
  request.r(i951[10], i951[11], 0, i950, 'poolParent')
  return i950
}

Deserializers["FishList"] = function (request, data, root) {
  var i954 = root || request.c( 'FishList' )
  var i955 = data
  var i957 = i955[0]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i957.length; i += 2) {
  request.r(i957[i + 0], i957[i + 1], 1, i956, '')
  }
  i954.fishList = i956
  var i959 = i955[1]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i959.length; i += 2) {
  request.r(i959[i + 0], i959[i + 1], 1, i958, '')
  }
  i954.spawnPoints = i958
  return i954
}

Deserializers["DataManager"] = function (request, data, root) {
  var i966 = root || request.c( 'DataManager' )
  var i967 = data
  request.r(i967[0], i967[1], 0, i966, 'setting')
  request.r(i967[2], i967[3], 0, i966, 'soundSlider')
  request.r(i967[4], i967[5], 0, i966, 'hapticSlider')
  i966.gameDataFileName = i967[6]
  i966._gameData = request.d('GameData', i967[7], i966._gameData)
  request.r(i967[8], i967[9], 0, i966, 'soundSliderHandleText')
  request.r(i967[10], i967[11], 0, i966, 'hapticSliderHandleText')
  return i966
}

Deserializers["GameData"] = function (request, data, root) {
  var i968 = root || request.c( 'GameData' )
  var i969 = data
  i968.money = i969[0]
  i968.needleUpgrade = i969[1]
  i968.lineUpgrade = i969[2]
  i968.reelUpgrade = i969[3]
  i968.sound = i969[4]
  i968.haptic = i969[5]
  return i968
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'm_FirstSelected')
  i970.m_sendNavigationEvents = !!i971[2]
  i970.m_DragThreshold = i971[3]
  return i970
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i972 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i973 = data
  i972.m_HorizontalAxis = i973[0]
  i972.m_VerticalAxis = i973[1]
  i972.m_SubmitButton = i973[2]
  i972.m_CancelButton = i973[3]
  i972.m_InputActionsPerSecond = i973[4]
  i972.m_RepeatDelay = i973[5]
  i972.m_ForceModuleActive = !!i973[6]
  i972.m_SendPointerHoverToParent = !!i973[7]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i975 = data
  i974.enabled = !!i975[0]
  i974.planeDistance = i975[1]
  i974.referencePixelsPerUnit = i975[2]
  i974.isFallbackOverlay = !!i975[3]
  i974.renderMode = i975[4]
  i974.renderOrder = i975[5]
  i974.sortingLayerName = i975[6]
  i974.sortingOrder = i975[7]
  i974.scaleFactor = i975[8]
  request.r(i975[9], i975[10], 0, i974, 'worldCamera')
  i974.overrideSorting = !!i975[11]
  i974.pixelPerfect = !!i975[12]
  i974.targetDisplay = i975[13]
  i974.overridePixelPerfect = !!i975[14]
  return i974
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i977 = data
  i976.m_UiScaleMode = i977[0]
  i976.m_ReferencePixelsPerUnit = i977[1]
  i976.m_ScaleFactor = i977[2]
  i976.m_ReferenceResolution = new pc.Vec2( i977[3], i977[4] )
  i976.m_ScreenMatchMode = i977[5]
  i976.m_MatchWidthOrHeight = i977[6]
  i976.m_PhysicalUnit = i977[7]
  i976.m_FallbackScreenDPI = i977[8]
  i976.m_DefaultSpriteDPI = i977[9]
  i976.m_DynamicPixelsPerUnit = i977[10]
  i976.m_PresetInfoIsWorld = !!i977[11]
  return i976
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i979 = data
  i978.m_IgnoreReversedGraphics = !!i979[0]
  i978.m_BlockingObjects = i979[1]
  i978.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i979[2] )
  return i978
}

Deserializers["UIManager"] = function (request, data, root) {
  var i980 = root || request.c( 'UIManager' )
  var i981 = data
  request.r(i981[0], i981[1], 0, i980, 'challengeTarget')
  request.r(i981[2], i981[3], 0, i980, 'challengeText')
  request.r(i981[4], i981[5], 0, i980, 'versionText')
  i980.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i981[6] )
  i980.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i981[7] )
  request.r(i981[8], i981[9], 0, i980, 'uiCamera')
  var i983 = i981[10]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.pictureModeObjects = i982
  return i980
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i986 = root || request.c( 'FixedTouchField' )
  var i987 = data
  i986.TouchDist = new pc.Vec2( i987[0], i987[1] )
  i986.PointerOld = new pc.Vec2( i987[2], i987[3] )
  i986.Pressed = !!i987[4]
  i986.hookMoveSpeed = i987[5]
  request.r(i987[6], i987[7], 0, i986, 'hook')
  request.r(i987[8], i987[9], 0, i986, 'logic')
  request.r(i987[10], i987[11], 0, i986, 'joystick_Background')
  request.r(i987[12], i987[13], 0, i986, 'joystick_Handle')
  request.r(i987[14], i987[15], 0, i986, 'canvas')
  request.r(i987[16], i987[17], 0, i986, 'newCamera')
  i986.clampDist = i987[18]
  return i986
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.UI.Button' )
  var i989 = data
  i988.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i989[0], i988.m_OnClick)
  i988.m_Navigation = request.d('UnityEngine.UI.Navigation', i989[1], i988.m_Navigation)
  i988.m_Transition = i989[2]
  i988.m_Colors = request.d('UnityEngine.UI.ColorBlock', i989[3], i988.m_Colors)
  i988.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i989[4], i988.m_SpriteState)
  i988.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i989[5], i988.m_AnimationTriggers)
  i988.m_Interactable = !!i989[6]
  request.r(i989[7], i989[8], 0, i988, 'm_TargetGraphic')
  return i988
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i991 = data
  i990.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i991[0], i990.m_PersistentCalls)
  return i990
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i992 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i993 = data
  var i995 = i993[0]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('UnityEngine.Events.PersistentCall', i995[i + 0]));
  }
  i992.m_Calls = i994
  return i992
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i998 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'm_Target')
  i998.m_TargetAssemblyTypeName = i999[2]
  i998.m_MethodName = i999[3]
  i998.m_Mode = i999[4]
  i998.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i999[5], i998.m_Arguments)
  i998.m_CallState = i999[6]
  return i998
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_ObjectArgument')
  i1000.m_ObjectArgumentAssemblyTypeName = i1001[2]
  i1000.m_IntArgument = i1001[3]
  i1000.m_FloatArgument = i1001[4]
  i1000.m_StringArgument = i1001[5]
  i1000.m_BoolArgument = !!i1001[6]
  return i1000
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1003 = data
  i1002.m_Mode = i1003[0]
  i1002.m_WrapAround = !!i1003[1]
  request.r(i1003[2], i1003[3], 0, i1002, 'm_SelectOnUp')
  request.r(i1003[4], i1003[5], 0, i1002, 'm_SelectOnDown')
  request.r(i1003[6], i1003[7], 0, i1002, 'm_SelectOnLeft')
  request.r(i1003[8], i1003[9], 0, i1002, 'm_SelectOnRight')
  return i1002
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1005 = data
  i1004.m_NormalColor = new pc.Color(i1005[0], i1005[1], i1005[2], i1005[3])
  i1004.m_HighlightedColor = new pc.Color(i1005[4], i1005[5], i1005[6], i1005[7])
  i1004.m_PressedColor = new pc.Color(i1005[8], i1005[9], i1005[10], i1005[11])
  i1004.m_SelectedColor = new pc.Color(i1005[12], i1005[13], i1005[14], i1005[15])
  i1004.m_DisabledColor = new pc.Color(i1005[16], i1005[17], i1005[18], i1005[19])
  i1004.m_ColorMultiplier = i1005[20]
  i1004.m_FadeDuration = i1005[21]
  return i1004
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_HighlightedSprite')
  request.r(i1007[2], i1007[3], 0, i1006, 'm_PressedSprite')
  request.r(i1007[4], i1007[5], 0, i1006, 'm_SelectedSprite')
  request.r(i1007[6], i1007[7], 0, i1006, 'm_DisabledSprite')
  return i1006
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1009 = data
  i1008.m_NormalTrigger = i1009[0]
  i1008.m_HighlightedTrigger = i1009[1]
  i1008.m_PressedTrigger = i1009[2]
  i1008.m_SelectedTrigger = i1009[3]
  i1008.m_DisabledTrigger = i1009[4]
  return i1008
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.Slider' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'm_FillRect')
  request.r(i1011[2], i1011[3], 0, i1010, 'm_HandleRect')
  i1010.m_Direction = i1011[4]
  i1010.m_MinValue = i1011[5]
  i1010.m_MaxValue = i1011[6]
  i1010.m_WholeNumbers = !!i1011[7]
  i1010.m_Value = i1011[8]
  i1010.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i1011[9], i1010.m_OnValueChanged)
  i1010.m_Navigation = request.d('UnityEngine.UI.Navigation', i1011[10], i1010.m_Navigation)
  i1010.m_Transition = i1011[11]
  i1010.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1011[12], i1010.m_Colors)
  i1010.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1011[13], i1010.m_SpriteState)
  i1010.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1011[14], i1010.m_AnimationTriggers)
  i1010.m_Interactable = !!i1011[15]
  request.r(i1011[16], i1011[17], 0, i1010, 'm_TargetGraphic')
  return i1010
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i1013 = data
  i1012.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1013[0], i1012.m_PersistentCalls)
  return i1012
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i1014 = root || request.c( 'EnviromentEditor' )
  var i1015 = data
  i1014.oceanSpriteValueMultifly = i1015[0]
  i1014.sunLightIntensity = i1015[1]
  i1014.minSunLightIntensity = i1015[2]
  i1014.challengeLightIntensity = i1015[3]
  i1014.depthMaskTransparentValue = i1015[4]
  i1014.ambientLightIntensity = i1015[5]
  request.r(i1015[6], i1015[7], 0, i1014, 'hook')
  var i1017 = i1015[8]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.Oceans = i1016
  request.r(i1015[9], i1015[10], 0, i1014, 'OceanSurface')
  request.r(i1015[11], i1015[12], 0, i1014, 'depthMask')
  request.r(i1015[13], i1015[14], 0, i1014, 'depthSprite')
  request.r(i1015[15], i1015[16], 0, i1014, 'depthMaskMat')
  request.r(i1015[17], i1015[18], 0, i1014, 'sunLights')
  request.r(i1015[19], i1015[20], 0, i1014, 'hookLight')
  request.r(i1015[21], i1015[22], 0, i1014, 'challengeLight')
  return i1014
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i1020 = root || request.c( 'ObjectMovement' )
  var i1021 = data
  i1020.moveX = i1021[0]
  i1020.moveSec = i1021[1]
  return i1020
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i1022 = root || request.c( 'OceanTrigger' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'touchToPullButton')
  request.r(i1023[2], i1023[3], 0, i1022, 'waterSplashParticle')
  request.r(i1023[4], i1023[5], 0, i1022, 'bubbleParticle')
  request.r(i1023[6], i1023[7], 0, i1022, 'arrow')
  request.r(i1023[8], i1023[9], 0, i1022, 'rigid')
  request.r(i1023[10], i1023[11], 0, i1022, 'hook')
  request.r(i1023[12], i1023[13], 0, i1022, 'rod')
  return i1022
}

Deserializers["Flock"] = function (request, data, root) {
  var i1024 = root || request.c( 'Flock' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'flockUnitPrefab')
  i1024.flockSize = i1025[2]
  i1024.spawnBounds = new pc.Vec3( i1025[3], i1025[4], i1025[5] )
  i1024._minSpeed = i1025[6]
  i1024._maxSpeed = i1025[7]
  i1024._cohesionDistance = i1025[8]
  i1024._avoidanceDistance = i1025[9]
  i1024._aligementDistance = i1025[10]
  i1024._obstacleDistance = i1025[11]
  i1024._boundsDistance = i1025[12]
  i1024._cohesionWeight = i1025[13]
  i1024._avoidanceWeight = i1025[14]
  i1024._aligementWeight = i1025[15]
  i1024._boundsWeight = i1025[16]
  i1024._obstacleWeight = i1025[17]
  return i1024
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1026 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_LookAt')
  request.r(i1027[2], i1027[3], 0, i1026, 'm_Follow')
  i1026.m_Lens = request.d('Cinemachine.LensSettings', i1027[4], i1026.m_Lens)
  i1026.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1027[5], i1026.m_Transitions)
  var i1029 = i1027[6]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1026.m_ExcludedPropertiesInInspector = i1028
  var i1031 = i1027[7]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.m_LockStageInInspector = i1030
  i1026.m_Priority = i1027[8]
  i1026.m_StandbyUpdate = i1027[9]
  i1026.m_LegacyBlendHint = i1027[10]
  request.r(i1027[11], i1027[12], 0, i1026, 'm_ComponentOwner')
  i1026.m_StreamingVersion = i1027[13]
  return i1026
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Cinemachine.LensSettings' )
  var i1033 = data
  i1032.FieldOfView = i1033[0]
  i1032.OrthographicSize = i1033[1]
  i1032.NearClipPlane = i1033[2]
  i1032.FarClipPlane = i1033[3]
  i1032.Dutch = i1033[4]
  i1032.ModeOverride = i1033[5]
  i1032.LensShift = new pc.Vec2( i1033[6], i1033[7] )
  i1032.GateFit = i1033[8]
  i1032.m_SensorSize = new pc.Vec2( i1033[9], i1033[10] )
  return i1032
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1034 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1035 = data
  i1034.m_BlendHint = i1035[0]
  i1034.m_InheritPosition = !!i1035[1]
  i1034.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1035[2], i1034.m_OnCameraLive)
  return i1034
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1036 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1037 = data
  i1036.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1037[0], i1036.m_PersistentCalls)
  return i1036
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1042 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1043 = data
  return i1042
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i1044 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i1045 = data
  i1044.m_TrackedObjectOffset = new pc.Vec3( i1045[0], i1045[1], i1045[2] )
  i1044.m_LookaheadTime = i1045[3]
  i1044.m_LookaheadSmoothing = i1045[4]
  i1044.m_LookaheadIgnoreY = !!i1045[5]
  i1044.m_HorizontalDamping = i1045[6]
  i1044.m_VerticalDamping = i1045[7]
  i1044.m_ScreenX = i1045[8]
  i1044.m_ScreenY = i1045[9]
  i1044.m_DeadZoneWidth = i1045[10]
  i1044.m_DeadZoneHeight = i1045[11]
  i1044.m_SoftZoneWidth = i1045[12]
  i1044.m_SoftZoneHeight = i1045[13]
  i1044.m_BiasX = i1045[14]
  i1044.m_BiasY = i1045[15]
  i1044.m_CenterOnActivate = !!i1045[16]
  return i1044
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i1047 = data
  i1046.m_BindingMode = i1047[0]
  i1046.m_FollowOffset = new pc.Vec3( i1047[1], i1047[2], i1047[3] )
  i1046.m_XDamping = i1047[4]
  i1046.m_YDamping = i1047[5]
  i1046.m_ZDamping = i1047[6]
  i1046.m_AngularDampingMode = i1047[7]
  i1046.m_PitchDamping = i1047[8]
  i1046.m_YawDamping = i1047[9]
  i1046.m_RollDamping = i1047[10]
  i1046.m_AngularDamping = i1047[11]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.aspect = i1049[1]
  i1048.orthographic = !!i1049[2]
  i1048.orthographicSize = i1049[3]
  i1048.backgroundColor = new pc.Color(i1049[4], i1049[5], i1049[6], i1049[7])
  i1048.nearClipPlane = i1049[8]
  i1048.farClipPlane = i1049[9]
  i1048.fieldOfView = i1049[10]
  i1048.depth = i1049[11]
  i1048.clearFlags = i1049[12]
  i1048.cullingMask = i1049[13]
  i1048.rect = i1049[14]
  request.r(i1049[15], i1049[16], 0, i1048, 'targetTexture')
  return i1048
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i1050 = root || request.c( 'CameraMove' )
  var i1051 = data
  i1050.offset = new pc.Vec3( i1051[0], i1051[1], i1051[2] )
  request.r(i1051[3], i1051[4], 0, i1050, 'newCamera')
  request.r(i1051[5], i1051[6], 0, i1050, 'target')
  return i1050
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1052 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1053 = data
  i1052.m_ShowDebugText = !!i1053[0]
  i1052.m_ShowCameraFrustum = !!i1053[1]
  i1052.m_IgnoreTimeScale = !!i1053[2]
  request.r(i1053[3], i1053[4], 0, i1052, 'm_WorldUpOverride')
  i1052.m_UpdateMethod = i1053[5]
  i1052.m_BlendUpdateMethod = i1053[6]
  i1052.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1053[7], i1052.m_DefaultBlend)
  request.r(i1053[8], i1053[9], 0, i1052, 'm_CustomBlends')
  i1052.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1053[10], i1052.m_CameraCutEvent)
  i1052.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1053[11], i1052.m_CameraActivatedEvent)
  return i1052
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1054 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1055 = data
  i1054.m_Style = i1055[0]
  i1054.m_Time = i1055[1]
  i1054.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1055[2] } )
  return i1054
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1056 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1057 = data
  i1056.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1057[0], i1056.m_PersistentCalls)
  return i1056
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i1058 = root || request.c( 'CinemachineController' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'playerTrans')
  i1058.playerOffset = new pc.Vec3( i1059[2], i1059[3], i1059[4] )
  request.r(i1059[5], i1059[6], 0, i1058, 'hookTrans')
  i1058.hookOffset = new pc.Vec3( i1059[7], i1059[8], i1059[9] )
  request.r(i1059[10], i1059[11], 0, i1058, 'cvc_Hook')
  request.r(i1059[12], i1059[13], 0, i1058, 'cvc_Player')
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.isTrigger = !!i1061[1]
  request.r(i1061[2], i1061[3], 0, i1060, 'material')
  i1060.center = new pc.Vec3( i1061[4], i1061[5], i1061[6] )
  i1060.radius = i1061[7]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i1063 = data
  i1062.enabled = !!i1063[0]
  request.r(i1063[1], i1063[2], 0, i1062, 'sharedMaterial')
  var i1065 = i1063[3]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 2) {
  request.r(i1065[i + 0], i1065[i + 1], 2, i1064, '')
  }
  i1062.sharedMaterials = i1064
  i1062.receiveShadows = !!i1063[4]
  i1062.shadowCastingMode = i1063[5]
  i1062.sortingLayerID = i1063[6]
  i1062.sortingOrder = i1063[7]
  i1062.lightmapIndex = i1063[8]
  i1062.lightmapSceneIndex = i1063[9]
  i1062.lightmapScaleOffset = new pc.Vec4( i1063[10], i1063[11], i1063[12], i1063[13] )
  i1062.lightProbeUsage = i1063[14]
  i1062.reflectionProbeUsage = i1063[15]
  var i1067 = i1063[16]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 3) {
    i1066.push( new pc.Vec3( i1067[i + 0], i1067[i + 1], i1067[i + 2] ) );
  }
  i1062.positions = i1066
  i1062.positionCount = i1063[17]
  i1062.time = i1063[18]
  i1062.startWidth = i1063[19]
  i1062.endWidth = i1063[20]
  i1062.widthMultiplier = i1063[21]
  i1062.autodestruct = !!i1063[22]
  i1062.emitting = !!i1063[23]
  i1062.numCornerVertices = i1063[24]
  i1062.numCapVertices = i1063[25]
  i1062.minVertexDistance = i1063[26]
  i1062.colorGradient = i1063[27] ? new pc.ColorGradient(i1063[27][0], i1063[27][1], i1063[27][2]) : null
  i1062.startColor = new pc.Color(i1063[28], i1063[29], i1063[30], i1063[31])
  i1062.endColor = new pc.Color(i1063[32], i1063[33], i1063[34], i1063[35])
  i1062.generateLightingData = !!i1063[36]
  i1062.textureMode = i1063[37]
  i1062.alignment = i1063[38]
  i1062.widthCurve = new pc.AnimationCurve( { keys_flow: i1063[39] } )
  return i1062
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i1068 = root || request.c( 'FishingHook' )
  var i1069 = data
  i1068.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i1069[0], i1068.OnMoneyChangeEvent)
  var i1071 = i1069[1]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1068.hookedFish = i1070
  request.r(i1069[2], i1069[3], 0, i1068, 'sellParticle')
  request.r(i1069[4], i1069[5], 0, i1068, 'sellParticleParent')
  i1068.targetHookZoomOffset = i1069[6]
  i1068.minDrag = i1069[7]
  i1068.maxDrag = i1069[8]
  i1068.dragSpeed = i1069[9]
  i1068.fishingHookScaleUpgradeValue = i1069[10]
  i1068.fullHooked = !!i1069[11]
  i1068.inTheOcean = !!i1069[12]
  i1068.money = i1069[13]
  request.r(i1069[14], i1069[15], 0, i1068, 'rigid')
  request.r(i1069[16], i1069[17], 0, i1068, 'canvas')
  request.r(i1069[18], i1069[19], 0, i1068, 'moneyTextPrefab')
  request.r(i1069[20], i1069[21], 0, i1068, 'moneyTextSpawnTransform')
  i1068.moneyTextSpawnMinOffset = new pc.Vec2( i1069[22], i1069[23] )
  i1068.moneyTextSpawnMaxOffset = new pc.Vec2( i1069[24], i1069[25] )
  var i1073 = i1069[26]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1068.hookedTransforms = i1072
  request.r(i1069[27], i1069[28], 0, i1068, 'fishingRodSkinned')
  request.r(i1069[29], i1069[30], 0, i1068, 'cinemachineCamera')
  request.r(i1069[31], i1069[32], 0, i1068, 'startPoint')
  request.r(i1069[33], i1069[34], 0, i1068, 'hook')
  request.r(i1069[35], i1069[36], 0, i1068, 'rod')
  request.r(i1069[37], i1069[38], 0, i1068, 'playerModel')
  request.r(i1069[39], i1069[40], 0, i1068, 'upgradeButton')
  request.r(i1069[41], i1069[42], 0, i1068, 'depthText')
  request.r(i1069[43], i1069[44], 0, i1068, 'touchField')
  request.r(i1069[45], i1069[46], 0, i1068, 'catchRingParticle')
  request.r(i1069[47], i1069[48], 0, i1068, 'fishSkinPrefab')
  request.r(i1069[49], i1069[50], 0, i1068, 'fishSkinPoint1')
  request.r(i1069[51], i1069[52], 0, i1068, 'fishSkinPoint2')
  request.r(i1069[53], i1069[54], 0, i1068, 'moneyText')
  request.r(i1069[55], i1069[56], 0, i1068, 'HookedCount')
  return i1068
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1074 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1075 = data
  i1074.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1075[0], i1074.m_PersistentCalls)
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1077 = data
  i1076.ambientIntensity = i1077[0]
  i1076.reflectionIntensity = i1077[1]
  i1076.ambientMode = i1077[2]
  i1076.ambientLight = new pc.Color(i1077[3], i1077[4], i1077[5], i1077[6])
  i1076.ambientSkyColor = new pc.Color(i1077[7], i1077[8], i1077[9], i1077[10])
  i1076.ambientGroundColor = new pc.Color(i1077[11], i1077[12], i1077[13], i1077[14])
  i1076.ambientEquatorColor = new pc.Color(i1077[15], i1077[16], i1077[17], i1077[18])
  i1076.fogColor = new pc.Color(i1077[19], i1077[20], i1077[21], i1077[22])
  i1076.fogEndDistance = i1077[23]
  i1076.fogStartDistance = i1077[24]
  i1076.fogDensity = i1077[25]
  i1076.fog = !!i1077[26]
  request.r(i1077[27], i1077[28], 0, i1076, 'skybox')
  i1076.fogMode = i1077[29]
  var i1079 = i1077[30]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1079[i + 0]) );
  }
  i1076.lightmaps = i1078
  i1076.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1077[31], i1076.lightProbes)
  i1076.lightmapsMode = i1077[32]
  i1076.environmentLightingMode = i1077[33]
  i1076.ambientProbe = new pc.SphericalHarmonicsL2(i1077[34])
  i1076.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1077[35])
  i1076.useReferenceAmbientProbe = !!i1077[36]
  request.r(i1077[37], i1077[38], 0, i1076, 'customReflection')
  request.r(i1077[39], i1077[40], 0, i1076, 'defaultReflection')
  i1076.defaultReflectionMode = i1077[41]
  i1076.defaultReflectionResolution = i1077[42]
  i1076.sunLightObjectId = i1077[43]
  i1076.pixelLightCount = i1077[44]
  i1076.defaultReflectionHDR = !!i1077[45]
  i1076.hasLightDataAsset = !!i1077[46]
  i1076.hasManualGenerate = !!i1077[47]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'lightmapColor')
  request.r(i1083[2], i1083[3], 0, i1082, 'lightmapDirection')
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1084 = root || new UnityEngine.LightProbes()
  var i1085 = data
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.add(i1093[i + 0]);
  }
  i1090.invalidShaderVariants = i1092
  i1090.name = i1091[1]
  i1090.guid = i1091[2]
  var i1095 = i1091[3]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1090.shaderDefinedKeywords = i1094
  var i1097 = i1091[4]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1097[i + 0]) );
  }
  i1090.passes = i1096
  var i1099 = i1091[5]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1099[i + 0]) );
  }
  i1090.usePasses = i1098
  var i1101 = i1091[6]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1101[i + 0]) );
  }
  i1090.defaultParameterValues = i1100
  request.r(i1091[7], i1091[8], 0, i1090, 'unityFallbackShader')
  i1090.readDepth = !!i1091[9]
  i1090.isCreatedByShaderGraph = !!i1091[10]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1106 = root || new pc.UnityShaderPass()
  var i1107 = data
  i1106.id = i1107[0]
  i1106.subShaderIndex = i1107[1]
  i1106.name = i1107[2]
  i1106.passType = i1107[3]
  i1106.usePass = !!i1107[4]
  i1106.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[5], i1106.zTest)
  i1106.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[6], i1106.zWrite)
  i1106.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[7], i1106.culling)
  i1106.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1107[8], i1106.blending)
  i1106.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1107[9], i1106.alphaBlending)
  i1106.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[10], i1106.colorWriteMask)
  i1106.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[11], i1106.offsetUnits)
  i1106.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[12], i1106.offsetFactor)
  i1106.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[13], i1106.stencilRef)
  i1106.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[14], i1106.stencilReadMask)
  i1106.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1107[15], i1106.stencilWriteMask)
  i1106.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1107[16], i1106.stencilOp)
  i1106.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1107[17], i1106.stencilOpFront)
  i1106.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1107[18], i1106.stencilOpBack)
  var i1109 = i1107[19]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1109[i + 0]) );
  }
  i1106.tags = i1108
  var i1111 = i1107[20]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( i1111[i + 0] );
  }
  i1106.passDefinedKeywords = i1110
  var i1113 = i1107[21]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1113[i + 0]) );
  }
  i1106.passDefinedKeywordGroups = i1112
  var i1115 = i1107[22]
  var i1114 = []
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1115[i + 0]) );
  }
  i1106.variants = i1114
  var i1117 = i1107[23]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1117[i + 0]) );
  }
  i1106.excludedVariants = i1116
  i1106.hasDepthReader = !!i1107[24]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1119 = data
  i1118.val = i1119[0]
  i1118.name = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1121 = data
  i1120.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[0], i1120.src)
  i1120.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[1], i1120.dst)
  i1120.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1121[2], i1120.op)
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1123 = data
  i1122.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[0], i1122.pass)
  i1122.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[1], i1122.fail)
  i1122.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[2], i1122.zFail)
  i1122.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1123[3], i1122.comp)
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1127 = data
  i1126.name = i1127[0]
  i1126.value = i1127[1]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1131 = data
  var i1133 = i1131[0]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1130.keywords = i1132
  i1130.hasDiscard = !!i1131[1]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1137 = data
  i1136.passId = i1137[0]
  i1136.subShaderIndex = i1137[1]
  var i1139 = i1137[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1136.keywords = i1138
  i1136.vertexProgram = i1137[3]
  i1136.fragmentProgram = i1137[4]
  i1136.readDepth = !!i1137[5]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'shader')
  i1142.pass = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.type = i1147[1]
  i1146.value = new pc.Vec4( i1147[2], i1147[3], i1147[4], i1147[5] )
  i1146.textureValue = i1147[6]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1149 = data
  i1148.name = i1149[0]
  request.r(i1149[1], i1149[2], 0, i1148, 'texture')
  i1148.aabb = i1149[3]
  i1148.vertices = i1149[4]
  i1148.triangles = i1149[5]
  i1148.textureRect = UnityEngine.Rect.MinMaxRect(i1149[6], i1149[7], i1149[8], i1149[9])
  i1148.packedRect = UnityEngine.Rect.MinMaxRect(i1149[10], i1149[11], i1149[12], i1149[13])
  i1148.border = new pc.Vec4( i1149[14], i1149[15], i1149[16], i1149[17] )
  i1148.transparency = i1149[18]
  i1148.bounds = i1149[19]
  i1148.pixelsPerUnit = i1149[20]
  i1148.textureWidth = i1149[21]
  i1148.textureHeight = i1149[22]
  i1148.nativeSize = new pc.Vec2( i1149[23], i1149[24] )
  i1148.pivot = new pc.Vec2( i1149[25], i1149[26] )
  i1148.textureRectOffset = new pc.Vec2( i1149[27], i1149[28] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1151 = data
  i1150.name = i1151[0]
  i1150.wrapMode = i1151[1]
  i1150.isLooping = !!i1151[2]
  i1150.length = i1151[3]
  var i1153 = i1151[4]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1153[i + 0]) );
  }
  i1150.curves = i1152
  var i1155 = i1151[5]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1155[i + 0]) );
  }
  i1150.events = i1154
  i1150.halfPrecision = !!i1151[6]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1159 = data
  i1158.path = i1159[0]
  i1158.componentType = i1159[1]
  i1158.property = i1159[2]
  i1158.keys = i1159[3]
  var i1161 = i1159[4]
  var i1160 = []
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1161[i + 0]) );
  }
  i1158.objectReferenceKeys = i1160
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1165 = data
  i1164.time = i1165[0]
  request.r(i1165[1], i1165[2], 0, i1164, 'value')
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1169 = data
  i1168.functionName = i1169[0]
  i1168.floatParameter = i1169[1]
  i1168.intParameter = i1169[2]
  i1168.stringParameter = i1169[3]
  request.r(i1169[4], i1169[5], 0, i1168, 'objectReferenceParameter')
  i1168.time = i1169[6]
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1171 = data
  i1170.name = i1171[0]
  var i1173 = i1171[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1173[i + 0]) );
  }
  i1170.states = i1172
  var i1175 = i1171[2]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1175[i + 0]) );
  }
  i1170.layers = i1174
  var i1177 = i1171[3]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1177[i + 0]) );
  }
  i1170.parameters = i1176
  var i1179 = i1171[4]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( i1179[i + 0] );
  }
  i1170.animationClips = i1178
  i1170.HasSubStateMachines = !!i1171[5]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1183 = data
  i1182.cycleOffset = i1183[0]
  i1182.cycleOffsetParameter = i1183[1]
  i1182.cycleOffsetParameterActive = !!i1183[2]
  i1182.mirror = !!i1183[3]
  i1182.mirrorParameter = i1183[4]
  i1182.mirrorParameterActive = !!i1183[5]
  i1182.motionId = i1183[6]
  i1182.nameHash = i1183[7]
  i1182.fullPathHash = i1183[8]
  i1182.speed = i1183[9]
  i1182.speedParameter = i1183[10]
  i1182.speedParameterActive = !!i1183[11]
  i1182.tag = i1183[12]
  i1182.name = i1183[13]
  i1182.writeDefaultValues = !!i1183[14]
  var i1185 = i1183[15]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1185[i + 0]) );
  }
  i1182.transitions = i1184
  var i1187 = i1183[16]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 2) {
  request.r(i1187[i + 0], i1187[i + 1], 2, i1186, '')
  }
  i1182.behaviours = i1186
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1191 = data
  i1190.fullPath = i1191[0]
  i1190.canTransitionToSelf = !!i1191[1]
  i1190.duration = i1191[2]
  i1190.exitTime = i1191[3]
  i1190.hasExitTime = !!i1191[4]
  i1190.hasFixedDuration = !!i1191[5]
  i1190.interruptionSource = i1191[6]
  i1190.offset = i1191[7]
  i1190.orderedInterruption = !!i1191[8]
  i1190.destinationStateNameHash = i1191[9]
  i1190.destinationStateMachineId = i1191[10]
  i1190.isExit = !!i1191[11]
  i1190.mute = !!i1191[12]
  i1190.solo = !!i1191[13]
  var i1193 = i1191[14]
  var i1192 = []
  for(var i = 0; i < i1193.length; i += 1) {
    i1192.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1193[i + 0]) );
  }
  i1190.conditions = i1192
  return i1190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1197 = data
  i1196.mode = i1197[0]
  i1196.parameter = i1197[1]
  i1196.threshold = i1197[2]
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1203 = data
  i1202.blendingMode = i1203[0]
  i1202.defaultWeight = i1203[1]
  i1202.name = i1203[2]
  i1202.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1203[3], i1202.stateMachine)
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.defaultStateNameHash = i1205[1]
  var i1207 = i1205[2]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1207[i + 0]) );
  }
  i1204.entryTransitions = i1206
  var i1209 = i1205[3]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1209[i + 0]) );
  }
  i1204.anyStateTransitions = i1208
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1213 = data
  i1212.destinationStateNameHash = i1213[0]
  i1212.destinationStateMachineId = i1213[1]
  i1212.isExit = !!i1213[2]
  i1212.mute = !!i1213[3]
  i1212.solo = !!i1213[4]
  var i1215 = i1213[5]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1215[i + 0]) );
  }
  i1212.conditions = i1214
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1219 = data
  i1218.defaultBool = !!i1219[0]
  i1218.defaultFloat = i1219[1]
  i1218.defaultInt = i1219[2]
  i1218.name = i1219[3]
  i1218.nameHash = i1219[4]
  i1218.type = i1219[5]
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1221 = data
  i1220.name = i1221[0]
  i1220.bytes64 = i1221[1]
  i1220.data = i1221[2]
  return i1220
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1222 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1223 = data
  i1222.hashCode = i1223[0]
  request.r(i1223[1], i1223[2], 0, i1222, 'material')
  i1222.materialHashCode = i1223[3]
  request.r(i1223[4], i1223[5], 0, i1222, 'atlas')
  i1222.normalStyle = i1223[6]
  i1222.normalSpacingOffset = i1223[7]
  i1222.boldStyle = i1223[8]
  i1222.boldSpacing = i1223[9]
  i1222.italicStyle = i1223[10]
  i1222.tabSize = i1223[11]
  i1222.m_Version = i1223[12]
  i1222.m_SourceFontFileGUID = i1223[13]
  request.r(i1223[14], i1223[15], 0, i1222, 'm_SourceFontFile_EditorRef')
  request.r(i1223[16], i1223[17], 0, i1222, 'm_SourceFontFile')
  i1222.m_AtlasPopulationMode = i1223[18]
  i1222.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1223[19], i1222.m_FaceInfo)
  var i1225 = i1223[20]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('UnityEngine.TextCore.Glyph', i1225[i + 0]));
  }
  i1222.m_GlyphTable = i1224
  var i1227 = i1223[21]
  var i1226 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.add(request.d('TMPro.TMP_Character', i1227[i + 0]));
  }
  i1222.m_CharacterTable = i1226
  var i1229 = i1223[22]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 2) {
  request.r(i1229[i + 0], i1229[i + 1], 2, i1228, '')
  }
  i1222.m_AtlasTextures = i1228
  i1222.m_AtlasTextureIndex = i1223[23]
  i1222.m_IsMultiAtlasTexturesEnabled = !!i1223[24]
  i1222.m_ClearDynamicDataOnBuild = !!i1223[25]
  var i1231 = i1223[26]
  var i1230 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.add(request.d('UnityEngine.TextCore.GlyphRect', i1231[i + 0]));
  }
  i1222.m_UsedGlyphRects = i1230
  var i1233 = i1223[27]
  var i1232 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.add(request.d('UnityEngine.TextCore.GlyphRect', i1233[i + 0]));
  }
  i1222.m_FreeGlyphRects = i1232
  i1222.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1223[28], i1222.m_fontInfo)
  i1222.m_AtlasWidth = i1223[29]
  i1222.m_AtlasHeight = i1223[30]
  i1222.m_AtlasPadding = i1223[31]
  i1222.m_AtlasRenderMode = i1223[32]
  var i1235 = i1223[33]
  var i1234 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.add(request.d('TMPro.TMP_Glyph', i1235[i + 0]));
  }
  i1222.m_glyphInfoList = i1234
  i1222.m_KerningTable = request.d('TMPro.KerningTable', i1223[34], i1222.m_KerningTable)
  i1222.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1223[35], i1222.m_FontFeatureTable)
  var i1237 = i1223[36]
  var i1236 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1237.length; i += 2) {
  request.r(i1237[i + 0], i1237[i + 1], 1, i1236, '')
  }
  i1222.fallbackFontAssets = i1236
  var i1239 = i1223[37]
  var i1238 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1239.length; i += 2) {
  request.r(i1239[i + 0], i1239[i + 1], 1, i1238, '')
  }
  i1222.m_FallbackFontAssetTable = i1238
  i1222.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1223[38], i1222.m_CreationSettings)
  var i1241 = i1223[39]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( request.d('TMPro.TMP_FontWeightPair', i1241[i + 0]) );
  }
  i1222.m_FontWeightTable = i1240
  var i1243 = i1223[40]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('TMPro.TMP_FontWeightPair', i1243[i + 0]) );
  }
  i1222.fontWeights = i1242
  return i1222
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1244 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1245 = data
  i1244.m_FaceIndex = i1245[0]
  i1244.m_FamilyName = i1245[1]
  i1244.m_StyleName = i1245[2]
  i1244.m_PointSize = i1245[3]
  i1244.m_Scale = i1245[4]
  i1244.m_LineHeight = i1245[5]
  i1244.m_AscentLine = i1245[6]
  i1244.m_CapLine = i1245[7]
  i1244.m_MeanLine = i1245[8]
  i1244.m_Baseline = i1245[9]
  i1244.m_DescentLine = i1245[10]
  i1244.m_SuperscriptOffset = i1245[11]
  i1244.m_SuperscriptSize = i1245[12]
  i1244.m_SubscriptOffset = i1245[13]
  i1244.m_SubscriptSize = i1245[14]
  i1244.m_UnderlineOffset = i1245[15]
  i1244.m_UnderlineThickness = i1245[16]
  i1244.m_StrikethroughOffset = i1245[17]
  i1244.m_StrikethroughThickness = i1245[18]
  i1244.m_TabWidth = i1245[19]
  return i1244
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1248 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1249 = data
  i1248.m_Index = i1249[0]
  i1248.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1249[1], i1248.m_Metrics)
  i1248.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1249[2], i1248.m_GlyphRect)
  i1248.m_Scale = i1249[3]
  i1248.m_AtlasIndex = i1249[4]
  return i1248
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1250 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1251 = data
  i1250.m_Width = i1251[0]
  i1250.m_Height = i1251[1]
  i1250.m_HorizontalBearingX = i1251[2]
  i1250.m_HorizontalBearingY = i1251[3]
  i1250.m_HorizontalAdvance = i1251[4]
  return i1250
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1252 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1253 = data
  i1252.m_X = i1253[0]
  i1252.m_Y = i1253[1]
  i1252.m_Width = i1253[2]
  i1252.m_Height = i1253[3]
  return i1252
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1256 = root || request.c( 'TMPro.TMP_Character' )
  var i1257 = data
  i1256.m_ElementType = i1257[0]
  i1256.m_Unicode = i1257[1]
  i1256.m_GlyphIndex = i1257[2]
  i1256.m_Scale = i1257[3]
  return i1256
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1262 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1263 = data
  i1262.Name = i1263[0]
  i1262.PointSize = i1263[1]
  i1262.Scale = i1263[2]
  i1262.CharacterCount = i1263[3]
  i1262.LineHeight = i1263[4]
  i1262.Baseline = i1263[5]
  i1262.Ascender = i1263[6]
  i1262.CapHeight = i1263[7]
  i1262.Descender = i1263[8]
  i1262.CenterLine = i1263[9]
  i1262.SuperscriptOffset = i1263[10]
  i1262.SubscriptOffset = i1263[11]
  i1262.SubSize = i1263[12]
  i1262.Underline = i1263[13]
  i1262.UnderlineThickness = i1263[14]
  i1262.strikethrough = i1263[15]
  i1262.strikethroughThickness = i1263[16]
  i1262.TabWidth = i1263[17]
  i1262.Padding = i1263[18]
  i1262.AtlasWidth = i1263[19]
  i1262.AtlasHeight = i1263[20]
  return i1262
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1266 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1267 = data
  i1266.id = i1267[0]
  i1266.x = i1267[1]
  i1266.y = i1267[2]
  i1266.width = i1267[3]
  i1266.height = i1267[4]
  i1266.xOffset = i1267[5]
  i1266.yOffset = i1267[6]
  i1266.xAdvance = i1267[7]
  i1266.scale = i1267[8]
  return i1266
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1268 = root || request.c( 'TMPro.KerningTable' )
  var i1269 = data
  var i1271 = i1269[0]
  var i1270 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.add(request.d('TMPro.KerningPair', i1271[i + 0]));
  }
  i1268.kerningPairs = i1270
  return i1268
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1274 = root || request.c( 'TMPro.KerningPair' )
  var i1275 = data
  i1274.xOffset = i1275[0]
  i1274.m_FirstGlyph = i1275[1]
  i1274.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1275[2], i1274.m_FirstGlyphAdjustments)
  i1274.m_SecondGlyph = i1275[3]
  i1274.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1275[4], i1274.m_SecondGlyphAdjustments)
  i1274.m_IgnoreSpacingAdjustments = !!i1275[5]
  return i1274
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1276 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1277 = data
  var i1279 = i1277[0]
  var i1278 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1279.length; i += 1) {
    i1278.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1279[i + 0]));
  }
  i1276.m_GlyphPairAdjustmentRecords = i1278
  return i1276
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1283 = data
  i1282.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1283[0], i1282.m_FirstAdjustmentRecord)
  i1282.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1283[1], i1282.m_SecondAdjustmentRecord)
  i1282.m_FeatureLookupFlags = i1283[2]
  return i1282
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1286 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1287 = data
  i1286.sourceFontFileName = i1287[0]
  i1286.sourceFontFileGUID = i1287[1]
  i1286.pointSizeSamplingMode = i1287[2]
  i1286.pointSize = i1287[3]
  i1286.padding = i1287[4]
  i1286.packingMode = i1287[5]
  i1286.atlasWidth = i1287[6]
  i1286.atlasHeight = i1287[7]
  i1286.characterSetSelectionMode = i1287[8]
  i1286.characterSequence = i1287[9]
  i1286.referencedFontAssetGUID = i1287[10]
  i1286.referencedTextAssetGUID = i1287[11]
  i1286.fontStyle = i1287[12]
  i1286.fontStyleModifier = i1287[13]
  i1286.renderMode = i1287[14]
  i1286.includeFontFeatures = !!i1287[15]
  return i1286
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1291 = data
  request.r(i1291[0], i1291[1], 0, i1290, 'regularTypeface')
  request.r(i1291[2], i1291[3], 0, i1290, 'italicTypeface')
  return i1290
}

Deserializers["MapData"] = function (request, data, root) {
  var i1292 = root || request.c( 'MapData' )
  var i1293 = data
  var i1295 = i1293[0]
  var i1294 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.add(request.d('MapData+mapData', i1295[i + 0]));
  }
  i1292.mapDataList = i1294
  return i1292
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i1298 = root || request.c( 'MapData+mapData' )
  var i1299 = data
  i1298.tier = i1299[0]
  i1298.minMapSize = new pc.Vec3( i1299[1], i1299[2], i1299[3] )
  i1298.maxMapSize = new pc.Vec3( i1299[4], i1299[5], i1299[6] )
  return i1298
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1300 = root || request.c( 'TMPro.TMP_Settings' )
  var i1301 = data
  i1300.m_enableWordWrapping = !!i1301[0]
  i1300.m_enableKerning = !!i1301[1]
  i1300.m_enableExtraPadding = !!i1301[2]
  i1300.m_enableTintAllSprites = !!i1301[3]
  i1300.m_enableParseEscapeCharacters = !!i1301[4]
  i1300.m_EnableRaycastTarget = !!i1301[5]
  i1300.m_GetFontFeaturesAtRuntime = !!i1301[6]
  i1300.m_missingGlyphCharacter = i1301[7]
  i1300.m_warningsDisabled = !!i1301[8]
  request.r(i1301[9], i1301[10], 0, i1300, 'm_defaultFontAsset')
  i1300.m_defaultFontAssetPath = i1301[11]
  i1300.m_defaultFontSize = i1301[12]
  i1300.m_defaultAutoSizeMinRatio = i1301[13]
  i1300.m_defaultAutoSizeMaxRatio = i1301[14]
  i1300.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1301[15], i1301[16] )
  i1300.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1301[17], i1301[18] )
  i1300.m_autoSizeTextContainer = !!i1301[19]
  i1300.m_IsTextObjectScaleStatic = !!i1301[20]
  var i1303 = i1301[21]
  var i1302 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1303.length; i += 2) {
  request.r(i1303[i + 0], i1303[i + 1], 1, i1302, '')
  }
  i1300.m_fallbackFontAssets = i1302
  i1300.m_matchMaterialPreset = !!i1301[22]
  request.r(i1301[23], i1301[24], 0, i1300, 'm_defaultSpriteAsset')
  i1300.m_defaultSpriteAssetPath = i1301[25]
  i1300.m_enableEmojiSupport = !!i1301[26]
  i1300.m_MissingCharacterSpriteUnicode = i1301[27]
  i1300.m_defaultColorGradientPresetsPath = i1301[28]
  request.r(i1301[29], i1301[30], 0, i1300, 'm_defaultStyleSheet')
  i1300.m_StyleSheetsResourcePath = i1301[31]
  request.r(i1301[32], i1301[33], 0, i1300, 'm_leadingCharacters')
  request.r(i1301[34], i1301[35], 0, i1300, 'm_followingCharacters')
  i1300.m_UseModernHangulLineBreakingRules = !!i1301[36]
  return i1300
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1305 = data
  i1304.hashCode = i1305[0]
  request.r(i1305[1], i1305[2], 0, i1304, 'material')
  i1304.materialHashCode = i1305[3]
  request.r(i1305[4], i1305[5], 0, i1304, 'spriteSheet')
  var i1307 = i1305[6]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('TMPro.TMP_Sprite', i1307[i + 0]));
  }
  i1304.spriteInfoList = i1306
  var i1309 = i1305[7]
  var i1308 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1309.length; i += 2) {
  request.r(i1309[i + 0], i1309[i + 1], 1, i1308, '')
  }
  i1304.fallbackSpriteAssets = i1308
  i1304.m_Version = i1305[8]
  i1304.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1305[9], i1304.m_FaceInfo)
  var i1311 = i1305[10]
  var i1310 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.add(request.d('TMPro.TMP_SpriteCharacter', i1311[i + 0]));
  }
  i1304.m_SpriteCharacterTable = i1310
  var i1313 = i1305[11]
  var i1312 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.add(request.d('TMPro.TMP_SpriteGlyph', i1313[i + 0]));
  }
  i1304.m_SpriteGlyphTable = i1312
  return i1304
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1316 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.hashCode = i1317[1]
  i1316.unicode = i1317[2]
  i1316.pivot = new pc.Vec2( i1317[3], i1317[4] )
  request.r(i1317[5], i1317[6], 0, i1316, 'sprite')
  i1316.id = i1317[7]
  i1316.x = i1317[8]
  i1316.y = i1317[9]
  i1316.width = i1317[10]
  i1316.height = i1317[11]
  i1316.xOffset = i1317[12]
  i1316.yOffset = i1317[13]
  i1316.xAdvance = i1317[14]
  i1316.scale = i1317[15]
  return i1316
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1323 = data
  i1322.m_Name = i1323[0]
  i1322.m_HashCode = i1323[1]
  i1322.m_ElementType = i1323[2]
  i1322.m_Unicode = i1323[3]
  i1322.m_GlyphIndex = i1323[4]
  i1322.m_Scale = i1323[5]
  return i1322
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1326 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1327 = data
  request.r(i1327[0], i1327[1], 0, i1326, 'sprite')
  i1326.m_Index = i1327[2]
  i1326.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1327[3], i1326.m_Metrics)
  i1326.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1327[4], i1326.m_GlyphRect)
  i1326.m_Scale = i1327[5]
  i1326.m_AtlasIndex = i1327[6]
  return i1326
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1328 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1329 = data
  var i1331 = i1329[0]
  var i1330 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1331.length; i += 1) {
    i1330.add(request.d('TMPro.TMP_Style', i1331[i + 0]));
  }
  i1328.m_StyleList = i1330
  return i1328
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_Style' )
  var i1335 = data
  i1334.m_Name = i1335[0]
  i1334.m_HashCode = i1335[1]
  i1334.m_OpeningDefinition = i1335[2]
  i1334.m_ClosingDefinition = i1335[3]
  i1334.m_OpeningTagArray = i1335[4]
  i1334.m_ClosingTagArray = i1335[5]
  i1334.m_OpeningTagUnicodeArray = i1335[6]
  i1334.m_ClosingTagUnicodeArray = i1335[7]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1337 = data
  var i1339 = i1337[0]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1339[i + 0]) );
  }
  i1336.files = i1338
  i1336.componentToPrefabIds = i1337[1]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1343 = data
  i1342.path = i1343[0]
  request.r(i1343[1], i1343[2], 0, i1342, 'unityObject')
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1345 = data
  var i1347 = i1345[0]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1347[i + 0]) );
  }
  i1344.scriptsExecutionOrder = i1346
  var i1349 = i1345[1]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1349[i + 0]) );
  }
  i1344.sortingLayers = i1348
  var i1351 = i1345[2]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1351[i + 0]) );
  }
  i1344.cullingLayers = i1350
  i1344.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1345[3], i1344.timeSettings)
  i1344.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1345[4], i1344.physicsSettings)
  i1344.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1345[5], i1344.physics2DSettings)
  i1344.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1345[6], i1344.qualitySettings)
  i1344.enableRealtimeShadows = !!i1345[7]
  i1344.autoInstantiatePrefabs = !!i1345[8]
  i1344.enableAutoInstancing = !!i1345[9]
  i1344.lightmapEncodingQuality = i1345[10]
  i1344.desiredColorSpace = i1345[11]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1355 = data
  i1354.name = i1355[0]
  i1354.value = i1355[1]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1359 = data
  i1358.id = i1359[0]
  i1358.name = i1359[1]
  i1358.value = i1359[2]
  return i1358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1363 = data
  i1362.id = i1363[0]
  i1362.name = i1363[1]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1365 = data
  i1364.fixedDeltaTime = i1365[0]
  i1364.maximumDeltaTime = i1365[1]
  i1364.timeScale = i1365[2]
  i1364.maximumParticleTimestep = i1365[3]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1367 = data
  i1366.gravity = new pc.Vec3( i1367[0], i1367[1], i1367[2] )
  i1366.defaultSolverIterations = i1367[3]
  i1366.bounceThreshold = i1367[4]
  i1366.autoSyncTransforms = !!i1367[5]
  i1366.autoSimulation = !!i1367[6]
  var i1369 = i1367[7]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1369[i + 0]) );
  }
  i1366.collisionMatrix = i1368
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1373 = data
  i1372.enabled = !!i1373[0]
  i1372.layerId = i1373[1]
  i1372.otherLayerId = i1373[2]
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'material')
  i1374.gravity = new pc.Vec2( i1375[2], i1375[3] )
  i1374.positionIterations = i1375[4]
  i1374.velocityIterations = i1375[5]
  i1374.velocityThreshold = i1375[6]
  i1374.maxLinearCorrection = i1375[7]
  i1374.maxAngularCorrection = i1375[8]
  i1374.maxTranslationSpeed = i1375[9]
  i1374.maxRotationSpeed = i1375[10]
  i1374.timeToSleep = i1375[11]
  i1374.linearSleepTolerance = i1375[12]
  i1374.angularSleepTolerance = i1375[13]
  i1374.defaultContactOffset = i1375[14]
  i1374.autoSimulation = !!i1375[15]
  i1374.queriesHitTriggers = !!i1375[16]
  i1374.queriesStartInColliders = !!i1375[17]
  i1374.callbacksOnDisable = !!i1375[18]
  i1374.reuseCollisionCallbacks = !!i1375[19]
  i1374.autoSyncTransforms = !!i1375[20]
  var i1377 = i1375[21]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1377[i + 0]) );
  }
  i1374.collisionMatrix = i1376
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1381 = data
  i1380.enabled = !!i1381[0]
  i1380.layerId = i1381[1]
  i1380.otherLayerId = i1381[2]
  return i1380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1385[i + 0]) );
  }
  i1382.qualityLevels = i1384
  var i1387 = i1383[1]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1382.names = i1386
  i1382.shadows = i1383[2]
  i1382.anisotropicFiltering = i1383[3]
  i1382.antiAliasing = i1383[4]
  i1382.lodBias = i1383[5]
  i1382.shadowCascades = i1383[6]
  i1382.shadowDistance = i1383[7]
  i1382.shadowmaskMode = i1383[8]
  i1382.shadowProjection = i1383[9]
  i1382.shadowResolution = i1383[10]
  i1382.softParticles = !!i1383[11]
  i1382.softVegetation = !!i1383[12]
  i1382.activeColorSpace = i1383[13]
  i1382.desiredColorSpace = i1383[14]
  i1382.masterTextureLimit = i1383[15]
  i1382.maxQueuedFrames = i1383[16]
  i1382.particleRaycastBudget = i1383[17]
  i1382.pixelLightCount = i1383[18]
  i1382.realtimeReflectionProbes = !!i1383[19]
  i1382.shadowCascade2Split = i1383[20]
  i1382.shadowCascade4Split = new pc.Vec3( i1383[21], i1383[22], i1383[23] )
  i1382.streamingMipmapsActive = !!i1383[24]
  i1382.vSyncCount = i1383[25]
  i1382.asyncUploadBufferSize = i1383[26]
  i1382.asyncUploadTimeSlice = i1383[27]
  i1382.billboardsFaceCameraPosition = !!i1383[28]
  i1382.shadowNearPlaneOffset = i1383[29]
  i1382.streamingMipmapsMemoryBudget = i1383[30]
  i1382.maximumLODLevel = i1383[31]
  i1382.streamingMipmapsAddAllCameras = !!i1383[32]
  i1382.streamingMipmapsMaxLevelReduction = i1383[33]
  i1382.streamingMipmapsRenderersPerFrame = i1383[34]
  i1382.resolutionScalingFixedDPIFactor = i1383[35]
  i1382.streamingMipmapsMaxFileIORequests = i1383[36]
  i1382.currentQualityLevel = i1383[37]
  return i1382
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1390 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1391 = data
  i1390.xPlacement = i1391[0]
  i1390.yPlacement = i1391[1]
  i1390.xAdvance = i1391[2]
  i1390.yAdvance = i1391[3]
  return i1390
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1392 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1393 = data
  i1392.m_GlyphIndex = i1393[0]
  i1392.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1393[1], i1392.m_GlyphValueRecord)
  return i1392
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1394 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1395 = data
  i1394.m_XPlacement = i1395[0]
  i1394.m_YPlacement = i1395[1]
  i1394.m_XAdvance = i1395[2]
  i1394.m_YAdvance = i1395[3]
  return i1394
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[18],"79":[48],"21":[20],"80":[20],"81":[20],"82":[20],"83":[20],"84":[20],"85":[20],"86":[87],"88":[87],"89":[87],"90":[87],"91":[87],"92":[87],"93":[87],"94":[87],"95":[87],"96":[87],"97":[87],"98":[87],"99":[87],"100":[48],"101":[8],"102":[103],"104":[103],"47":[22],"105":[9],"106":[9],"107":[9],"108":[9],"109":[22],"110":[8,22],"25":[22,23],"111":[22],"112":[23,22],"113":[8],"114":[23,22],"115":[22],"116":[22],"117":[22],"50":[47],"27":[23,22],"118":[22],"49":[47],"119":[22],"120":[22],"121":[22],"122":[22],"123":[22],"124":[22],"125":[22],"126":[22],"127":[22],"128":[23,22],"129":[22],"130":[22],"131":[22],"44":[22],"132":[23,22],"133":[22],"134":[45],"135":[45],"46":[45],"136":[45],"137":[48],"138":[48],"139":[140],"141":[22],"142":[140],"143":[48],"144":[145],"146":[140]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","AnimationController","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","Chest","UnityEngine.Light","ChestMover","UnityEngine.SpriteRenderer","FishingRod","UnityEngine.GameObject","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "59.9";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4524";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "5d9eac72-0301-49e7-b46a-4135335430b3";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

