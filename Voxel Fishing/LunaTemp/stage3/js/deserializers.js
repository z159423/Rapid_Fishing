var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2112 = root || request.c( 'UnityEngine.JointSpring' )
  var i2113 = data
  i2112.spring = i2113[0]
  i2112.damper = i2113[1]
  i2112.targetPosition = i2113[2]
  return i2112
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2114 = root || request.c( 'UnityEngine.JointMotor' )
  var i2115 = data
  i2114.m_TargetVelocity = i2115[0]
  i2114.m_Force = i2115[1]
  i2114.m_FreeSpin = i2115[2]
  return i2114
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2116 = root || request.c( 'UnityEngine.JointLimits' )
  var i2117 = data
  i2116.m_Min = i2117[0]
  i2116.m_Max = i2117[1]
  i2116.m_Bounciness = i2117[2]
  i2116.m_BounceMinVelocity = i2117[3]
  i2116.m_ContactDistance = i2117[4]
  i2116.minBounce = i2117[5]
  i2116.maxBounce = i2117[6]
  return i2116
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.JointDrive' )
  var i2119 = data
  i2118.m_PositionSpring = i2119[0]
  i2118.m_PositionDamper = i2119[1]
  i2118.m_MaximumForce = i2119[2]
  return i2118
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2121 = data
  i2120.m_Spring = i2121[0]
  i2120.m_Damper = i2121[1]
  return i2120
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2123 = data
  i2122.m_Limit = i2123[0]
  i2122.m_Bounciness = i2123[1]
  i2122.m_ContactDistance = i2123[2]
  return i2122
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2125 = data
  i2124.m_ExtremumSlip = i2125[0]
  i2124.m_ExtremumValue = i2125[1]
  i2124.m_AsymptoteSlip = i2125[2]
  i2124.m_AsymptoteValue = i2125[3]
  i2124.m_Stiffness = i2125[4]
  return i2124
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2127 = data
  i2126.m_LowerAngle = i2127[0]
  i2126.m_UpperAngle = i2127[1]
  return i2126
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2129 = data
  i2128.m_MotorSpeed = i2129[0]
  i2128.m_MaximumMotorTorque = i2129[1]
  return i2128
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2131 = data
  i2130.m_DampingRatio = i2131[0]
  i2130.m_Frequency = i2131[1]
  i2130.m_Angle = i2131[2]
  return i2130
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2133 = data
  i2132.m_LowerTranslation = i2133[0]
  i2132.m_UpperTranslation = i2133[1]
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2134 = root || new pc.UnityMaterial()
  var i2135 = data
  i2134.name = i2135[0]
  request.r(i2135[1], i2135[2], 0, i2134, 'shader')
  i2134.renderQueue = i2135[3]
  i2134.enableInstancing = !!i2135[4]
  var i2137 = i2135[5]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2137[i + 0]) );
  }
  i2134.floatParameters = i2136
  var i2139 = i2135[6]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 1) {
    i2138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2139[i + 0]) );
  }
  i2134.colorParameters = i2138
  var i2141 = i2135[7]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2141[i + 0]) );
  }
  i2134.vectorParameters = i2140
  var i2143 = i2135[8]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2143[i + 0]) );
  }
  i2134.textureParameters = i2142
  var i2145 = i2135[9]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2145[i + 0]) );
  }
  i2134.materialFlags = i2144
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2149 = data
  i2148.name = i2149[0]
  i2148.value = i2149[1]
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2153 = data
  i2152.name = i2153[0]
  i2152.value = new pc.Color(i2153[1], i2153[2], i2153[3], i2153[4])
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2157 = data
  i2156.name = i2157[0]
  i2156.value = new pc.Vec4( i2157[1], i2157[2], i2157[3], i2157[4] )
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2161 = data
  i2160.name = i2161[0]
  request.r(i2161[1], i2161[2], 0, i2160, 'value')
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2165 = data
  i2164.name = i2165[0]
  i2164.enabled = !!i2165[1]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2167 = data
  i2166.position = new pc.Vec3( i2167[0], i2167[1], i2167[2] )
  i2166.scale = new pc.Vec3( i2167[3], i2167[4], i2167[5] )
  i2166.rotation = new pc.Quat(i2167[6], i2167[7], i2167[8], i2167[9])
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2169 = data
  i2168.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2169[0], i2168.main)
  i2168.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2169[1], i2168.colorBySpeed)
  i2168.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2169[2], i2168.colorOverLifetime)
  i2168.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2169[3], i2168.emission)
  i2168.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2169[4], i2168.rotationBySpeed)
  i2168.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2169[5], i2168.rotationOverLifetime)
  i2168.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2169[6], i2168.shape)
  i2168.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2169[7], i2168.sizeBySpeed)
  i2168.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2169[8], i2168.sizeOverLifetime)
  i2168.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2169[9], i2168.textureSheetAnimation)
  i2168.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2169[10], i2168.velocityOverLifetime)
  i2168.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2169[11], i2168.noise)
  i2168.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2169[12], i2168.inheritVelocity)
  i2168.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2169[13], i2168.forceOverLifetime)
  i2168.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2169[14], i2168.limitVelocityOverLifetime)
  i2168.useAutoRandomSeed = !!i2169[15]
  i2168.randomSeed = i2169[16]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2170 = root || new pc.ParticleSystemMain()
  var i2171 = data
  i2170.duration = i2171[0]
  i2170.loop = !!i2171[1]
  i2170.prewarm = !!i2171[2]
  i2170.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[3], i2170.startDelay)
  i2170.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[4], i2170.startLifetime)
  i2170.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[5], i2170.startSpeed)
  i2170.startSize3D = !!i2171[6]
  i2170.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[7], i2170.startSizeX)
  i2170.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[8], i2170.startSizeY)
  i2170.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[9], i2170.startSizeZ)
  i2170.startRotation3D = !!i2171[10]
  i2170.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[11], i2170.startRotationX)
  i2170.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[12], i2170.startRotationY)
  i2170.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[13], i2170.startRotationZ)
  i2170.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2171[14], i2170.startColor)
  i2170.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2171[15], i2170.gravityModifier)
  i2170.simulationSpace = i2171[16]
  request.r(i2171[17], i2171[18], 0, i2170, 'customSimulationSpace')
  i2170.simulationSpeed = i2171[19]
  i2170.useUnscaledTime = !!i2171[20]
  i2170.scalingMode = i2171[21]
  i2170.playOnAwake = !!i2171[22]
  i2170.maxParticles = i2171[23]
  i2170.emitterVelocityMode = i2171[24]
  i2170.stopAction = i2171[25]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2172 = root || new pc.MinMaxCurve()
  var i2173 = data
  i2172.mode = i2173[0]
  i2172.curveMin = new pc.AnimationCurve( { keys_flow: i2173[1] } )
  i2172.curveMax = new pc.AnimationCurve( { keys_flow: i2173[2] } )
  i2172.curveMultiplier = i2173[3]
  i2172.constantMin = i2173[4]
  i2172.constantMax = i2173[5]
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2174 = root || new pc.MinMaxGradient()
  var i2175 = data
  i2174.mode = i2175[0]
  i2174.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2175[1], i2174.gradientMin)
  i2174.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2175[2], i2174.gradientMax)
  i2174.colorMin = new pc.Color(i2175[3], i2175[4], i2175[5], i2175[6])
  i2174.colorMax = new pc.Color(i2175[7], i2175[8], i2175[9], i2175[10])
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2177 = data
  i2176.mode = i2177[0]
  var i2179 = i2177[1]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2179[i + 0]) );
  }
  i2176.colorKeys = i2178
  var i2181 = i2177[2]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2181[i + 0]) );
  }
  i2176.alphaKeys = i2180
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemColorBySpeed()
  var i2183 = data
  i2182.enabled = !!i2183[0]
  i2182.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2183[1], i2182.color)
  i2182.range = new pc.Vec2( i2183[2], i2183[3] )
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2187 = data
  i2186.color = new pc.Color(i2187[0], i2187[1], i2187[2], i2187[3])
  i2186.time = i2187[4]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2191 = data
  i2190.alpha = i2191[0]
  i2190.time = i2191[1]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2192 = root || new pc.ParticleSystemColorOverLifetime()
  var i2193 = data
  i2192.enabled = !!i2193[0]
  i2192.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2193[1], i2192.color)
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemEmitter()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[1], i2194.rateOverTime)
  i2194.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2195[2], i2194.rateOverDistance)
  var i2197 = i2195[3]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2197[i + 0]) );
  }
  i2194.bursts = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemBurst()
  var i2201 = data
  i2200.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[0], i2200.count)
  i2200.cycleCount = i2201[1]
  i2200.minCount = i2201[2]
  i2200.maxCount = i2201[3]
  i2200.repeatInterval = i2201[4]
  i2200.time = i2201[5]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2202 = root || new pc.ParticleSystemRotationBySpeed()
  var i2203 = data
  i2202.enabled = !!i2203[0]
  i2202.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[1], i2202.x)
  i2202.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[2], i2202.y)
  i2202.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2203[3], i2202.z)
  i2202.separateAxes = !!i2203[4]
  i2202.range = new pc.Vec2( i2203[5], i2203[6] )
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[1], i2204.x)
  i2204.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[2], i2204.y)
  i2204.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2205[3], i2204.z)
  i2204.separateAxes = !!i2205[4]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemShape()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.shapeType = i2207[1]
  i2206.randomDirectionAmount = i2207[2]
  i2206.sphericalDirectionAmount = i2207[3]
  i2206.randomPositionAmount = i2207[4]
  i2206.alignToDirection = !!i2207[5]
  i2206.radius = i2207[6]
  i2206.radiusMode = i2207[7]
  i2206.radiusSpread = i2207[8]
  i2206.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[9], i2206.radiusSpeed)
  i2206.radiusThickness = i2207[10]
  i2206.angle = i2207[11]
  i2206.length = i2207[12]
  i2206.boxThickness = new pc.Vec3( i2207[13], i2207[14], i2207[15] )
  i2206.meshShapeType = i2207[16]
  request.r(i2207[17], i2207[18], 0, i2206, 'mesh')
  request.r(i2207[19], i2207[20], 0, i2206, 'meshRenderer')
  request.r(i2207[21], i2207[22], 0, i2206, 'skinnedMeshRenderer')
  i2206.useMeshMaterialIndex = !!i2207[23]
  i2206.meshMaterialIndex = i2207[24]
  i2206.useMeshColors = !!i2207[25]
  i2206.normalOffset = i2207[26]
  i2206.arc = i2207[27]
  i2206.arcMode = i2207[28]
  i2206.arcSpread = i2207[29]
  i2206.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[30], i2206.arcSpeed)
  i2206.donutRadius = i2207[31]
  i2206.position = new pc.Vec3( i2207[32], i2207[33], i2207[34] )
  i2206.rotation = new pc.Vec3( i2207[35], i2207[36], i2207[37] )
  i2206.scale = new pc.Vec3( i2207[38], i2207[39], i2207[40] )
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemSizeBySpeed()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[1], i2208.x)
  i2208.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.y)
  i2208.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.z)
  i2208.separateAxes = !!i2209[4]
  i2208.range = new pc.Vec2( i2209[5], i2209[6] )
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[1], i2210.x)
  i2210.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.y)
  i2210.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[3], i2210.z)
  i2210.separateAxes = !!i2211[4]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.mode = i2213[1]
  i2212.animation = i2213[2]
  i2212.numTilesX = i2213[3]
  i2212.numTilesY = i2213[4]
  i2212.useRandomRow = !!i2213[5]
  i2212.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[6], i2212.frameOverTime)
  i2212.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[7], i2212.startFrame)
  i2212.cycleCount = i2213[8]
  i2212.rowIndex = i2213[9]
  i2212.flipU = i2213[10]
  i2212.flipV = i2213[11]
  i2212.spriteCount = i2213[12]
  var i2215 = i2213[13]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 2) {
  request.r(i2215[i + 0], i2215[i + 1], 2, i2214, '')
  }
  i2212.sprites = i2214
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[1], i2218.x)
  i2218.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[2], i2218.y)
  i2218.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[3], i2218.z)
  i2218.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[4], i2218.speedModifier)
  i2218.space = i2219[5]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemNoise()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.separateAxes = !!i2221[1]
  i2220.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[2], i2220.strengthX)
  i2220.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[3], i2220.strengthY)
  i2220.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[4], i2220.strengthZ)
  i2220.frequency = i2221[5]
  i2220.damping = !!i2221[6]
  i2220.octaveCount = i2221[7]
  i2220.octaveMultiplier = i2221[8]
  i2220.octaveScale = i2221[9]
  i2220.quality = i2221[10]
  i2220.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[11], i2220.scrollSpeed)
  i2220.scrollSpeedMultiplier = i2221[12]
  i2220.remapEnabled = !!i2221[13]
  i2220.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[14], i2220.remapX)
  i2220.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[15], i2220.remapY)
  i2220.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[16], i2220.remapZ)
  i2220.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[17], i2220.positionAmount)
  i2220.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[18], i2220.rotationAmount)
  i2220.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[19], i2220.sizeAmount)
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2222 = root || new pc.ParticleSystemInheritVelocity()
  var i2223 = data
  i2222.enabled = !!i2223[0]
  i2222.mode = i2223[1]
  i2222.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[2], i2222.curve)
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemForceOverLifetime()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[1], i2224.x)
  i2224.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[2], i2224.y)
  i2224.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[3], i2224.z)
  i2224.space = i2225[4]
  i2224.randomized = !!i2225[5]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[1], i2226.limitX)
  i2226.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[2], i2226.limitY)
  i2226.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[3], i2226.limitZ)
  i2226.dampen = i2227[4]
  i2226.separateAxes = !!i2227[5]
  i2226.space = i2227[6]
  i2226.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[7], i2226.drag)
  i2226.multiplyDragByParticleSize = !!i2227[8]
  i2226.multiplyDragByParticleVelocity = !!i2227[9]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2229 = data
  i2228.enabled = !!i2229[0]
  request.r(i2229[1], i2229[2], 0, i2228, 'sharedMaterial')
  var i2231 = i2229[3]
  var i2230 = []
  for(var i = 0; i < i2231.length; i += 2) {
  request.r(i2231[i + 0], i2231[i + 1], 2, i2230, '')
  }
  i2228.sharedMaterials = i2230
  i2228.receiveShadows = !!i2229[4]
  i2228.shadowCastingMode = i2229[5]
  i2228.sortingLayerID = i2229[6]
  i2228.sortingOrder = i2229[7]
  i2228.lightmapIndex = i2229[8]
  i2228.lightmapSceneIndex = i2229[9]
  i2228.lightmapScaleOffset = new pc.Vec4( i2229[10], i2229[11], i2229[12], i2229[13] )
  i2228.lightProbeUsage = i2229[14]
  i2228.reflectionProbeUsage = i2229[15]
  request.r(i2229[16], i2229[17], 0, i2228, 'mesh')
  i2228.meshCount = i2229[18]
  i2228.activeVertexStreamsCount = i2229[19]
  i2228.alignment = i2229[20]
  i2228.renderMode = i2229[21]
  i2228.sortMode = i2229[22]
  i2228.lengthScale = i2229[23]
  i2228.velocityScale = i2229[24]
  i2228.cameraVelocityScale = i2229[25]
  i2228.normalDirection = i2229[26]
  i2228.sortingFudge = i2229[27]
  i2228.minParticleSize = i2229[28]
  i2228.maxParticleSize = i2229[29]
  i2228.pivot = new pc.Vec3( i2229[30], i2229[31], i2229[32] )
  request.r(i2229[33], i2229[34], 0, i2228, 'trailMaterial')
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2235 = data
  i2234.name = i2235[0]
  i2234.tag = i2235[1]
  i2234.enabled = !!i2235[2]
  i2234.isStatic = !!i2235[3]
  i2234.layer = i2235[4]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2237 = data
  i2236.name = i2237[0]
  i2236.width = i2237[1]
  i2236.height = i2237[2]
  i2236.mipmapCount = i2237[3]
  i2236.anisoLevel = i2237[4]
  i2236.filterMode = i2237[5]
  i2236.hdr = !!i2237[6]
  i2236.format = i2237[7]
  i2236.wrapMode = i2237[8]
  i2236.alphaIsTransparency = !!i2237[9]
  i2236.alphaSource = i2237[10]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2239 = data
  request.r(i2239[0], i2239[1], 0, i2238, 'sharedMesh')
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2241 = data
  request.r(i2241[0], i2241[1], 0, i2240, 'additionalVertexStreams')
  i2240.enabled = !!i2241[2]
  request.r(i2241[3], i2241[4], 0, i2240, 'sharedMaterial')
  var i2243 = i2241[5]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2240.sharedMaterials = i2242
  i2240.receiveShadows = !!i2241[6]
  i2240.shadowCastingMode = i2241[7]
  i2240.sortingLayerID = i2241[8]
  i2240.sortingOrder = i2241[9]
  i2240.lightmapIndex = i2241[10]
  i2240.lightmapSceneIndex = i2241[11]
  i2240.lightmapScaleOffset = new pc.Vec4( i2241[12], i2241[13], i2241[14], i2241[15] )
  i2240.lightProbeUsage = i2241[16]
  i2240.reflectionProbeUsage = i2241[17]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2245 = data
  i2244.name = i2245[0]
  i2244.halfPrecision = !!i2245[1]
  i2244.vertexCount = i2245[2]
  i2244.aabb = i2245[3]
  var i2247 = i2245[4]
  var i2246 = []
  for(var i = 0; i < i2247.length; i += 1) {
    i2246.push( !!i2247[i + 0] );
  }
  i2244.streams = i2246
  i2244.vertices = i2245[5]
  var i2249 = i2245[6]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 1) {
    i2248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2249[i + 0]) );
  }
  i2244.subMeshes = i2248
  var i2251 = i2245[7]
  var i2250 = []
  for(var i = 0; i < i2251.length; i += 16) {
    i2250.push( new pc.Mat4().setData(i2251[i + 0], i2251[i + 1], i2251[i + 2], i2251[i + 3],  i2251[i + 4], i2251[i + 5], i2251[i + 6], i2251[i + 7],  i2251[i + 8], i2251[i + 9], i2251[i + 10], i2251[i + 11],  i2251[i + 12], i2251[i + 13], i2251[i + 14], i2251[i + 15]) );
  }
  i2244.bindposes = i2250
  var i2253 = i2245[8]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2253[i + 0]) );
  }
  i2244.blendShapes = i2252
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2259 = data
  i2258.triangles = i2259[0]
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2265 = data
  i2264.name = i2265[0]
  var i2267 = i2265[1]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2267[i + 0]) );
  }
  i2264.frames = i2266
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2269 = data
  i2268.textureMode = i2269[0]
  i2268.alignment = i2269[1]
  i2268.widthCurve = new pc.AnimationCurve( { keys_flow: i2269[2] } )
  i2268.colorGradient = i2269[3] ? new pc.ColorGradient(i2269[3][0], i2269[3][1], i2269[3][2]) : null
  var i2271 = i2269[4]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 3) {
    i2270.push( new pc.Vec3( i2271[i + 0], i2271[i + 1], i2271[i + 2] ) );
  }
  i2268.positions = i2270
  i2268.positionCount = i2269[5]
  i2268.widthMultiplier = i2269[6]
  i2268.startWidth = i2269[7]
  i2268.endWidth = i2269[8]
  i2268.numCornerVertices = i2269[9]
  i2268.numCapVertices = i2269[10]
  i2268.useWorldSpace = !!i2269[11]
  i2268.loop = !!i2269[12]
  i2268.startColor = new pc.Color(i2269[13], i2269[14], i2269[15], i2269[16])
  i2268.endColor = new pc.Color(i2269[17], i2269[18], i2269[19], i2269[20])
  i2268.generateLightingData = !!i2269[21]
  i2268.enabled = !!i2269[22]
  request.r(i2269[23], i2269[24], 0, i2268, 'sharedMaterial')
  var i2273 = i2269[25]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 2) {
  request.r(i2273[i + 0], i2273[i + 1], 2, i2272, '')
  }
  i2268.sharedMaterials = i2272
  i2268.receiveShadows = !!i2269[26]
  i2268.shadowCastingMode = i2269[27]
  i2268.sortingLayerID = i2269[28]
  i2268.sortingOrder = i2269[29]
  i2268.lightmapIndex = i2269[30]
  i2268.lightmapSceneIndex = i2269[31]
  i2268.lightmapScaleOffset = new pc.Vec4( i2269[32], i2269[33], i2269[34], i2269[35] )
  i2268.lightProbeUsage = i2269[36]
  i2268.reflectionProbeUsage = i2269[37]
  return i2268
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i2276 = root || request.c( 'RopeBridge' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'StartPoint')
  request.r(i2277[2], i2277[3], 0, i2276, 'EndPoint')
  i2276.ropeSegLen = i2277[4]
  i2276.segmentLength = i2277[5]
  i2276.lineWidth = i2277[6]
  i2276.distOfStartToEnd = i2277[7]
  i2276.lineLengthMultifly = i2277[8]
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'animatorController')
  i2278.updateMode = i2279[2]
  var i2281 = i2279[3]
  var i2280 = []
  for(var i = 0; i < i2281.length; i += 2) {
  request.r(i2281[i + 0], i2281[i + 1], 2, i2280, '')
  }
  i2278.humanBones = i2280
  i2278.enabled = !!i2279[4]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2285 = data
  i2284.playAutomatically = !!i2285[0]
  request.r(i2285[1], i2285[2], 0, i2284, 'clip')
  var i2287 = i2285[3]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2284.clips = i2286
  i2284.wrapMode = i2285[4]
  i2284.enabled = !!i2285[5]
  return i2284
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i2290 = root || request.c( 'AnimationController' )
  var i2291 = data
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2293 = data
  i2292.center = new pc.Vec3( i2293[0], i2293[1], i2293[2] )
  i2292.size = new pc.Vec3( i2293[3], i2293[4], i2293[5] )
  i2292.enabled = !!i2293[6]
  i2292.isTrigger = !!i2293[7]
  request.r(i2293[8], i2293[9], 0, i2292, 'material')
  return i2292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2295 = data
  i2294.enabled = !!i2295[0]
  request.r(i2295[1], i2295[2], 0, i2294, 'sharedMaterial')
  var i2297 = i2295[3]
  var i2296 = []
  for(var i = 0; i < i2297.length; i += 2) {
  request.r(i2297[i + 0], i2297[i + 1], 2, i2296, '')
  }
  i2294.sharedMaterials = i2296
  i2294.receiveShadows = !!i2295[4]
  i2294.shadowCastingMode = i2295[5]
  i2294.sortingLayerID = i2295[6]
  i2294.sortingOrder = i2295[7]
  i2294.lightmapIndex = i2295[8]
  i2294.lightmapSceneIndex = i2295[9]
  i2294.lightmapScaleOffset = new pc.Vec4( i2295[10], i2295[11], i2295[12], i2295[13] )
  i2294.lightProbeUsage = i2295[14]
  i2294.reflectionProbeUsage = i2295[15]
  request.r(i2295[16], i2295[17], 0, i2294, 'sharedMesh')
  var i2299 = i2295[18]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2294.bones = i2298
  i2294.updateWhenOffscreen = !!i2295[19]
  i2294.localBounds = i2295[20]
  request.r(i2295[21], i2295[22], 0, i2294, 'rootBone')
  var i2301 = i2295[23]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2301[i + 0]) );
  }
  i2294.blendShapesWeights = i2300
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2305 = data
  i2304.weight = i2305[0]
  return i2304
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i2306 = root || request.c( 'FishingLine' )
  var i2307 = data
  request.r(i2307[0], i2307[1], 0, i2306, 'line')
  request.r(i2307[2], i2307[3], 0, i2306, 'startPoint')
  request.r(i2307[4], i2307[5], 0, i2306, 'endPoint')
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2309 = data
  i2308.mass = i2309[0]
  i2308.drag = i2309[1]
  i2308.angularDrag = i2309[2]
  i2308.useGravity = !!i2309[3]
  i2308.isKinematic = !!i2309[4]
  i2308.constraints = i2309[5]
  i2308.maxAngularVelocity = i2309[6]
  i2308.collisionDetectionMode = i2309[7]
  i2308.interpolation = i2309[8]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i2310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i2311 = data
  i2310.swingAxis = new pc.Vec3( i2311[0], i2311[1], i2311[2] )
  i2310.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2311[3], i2310.twistLimitSpring)
  i2310.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2311[4], i2310.swingLimitSpring)
  i2310.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i2311[5], i2310.lowTwistLimit)
  i2310.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i2311[6], i2310.highTwistLimit)
  i2310.swing1Limit = request.d('UnityEngine.SoftJointLimit', i2311[7], i2310.swing1Limit)
  i2310.swing2Limit = request.d('UnityEngine.SoftJointLimit', i2311[8], i2310.swing2Limit)
  request.r(i2311[9], i2311[10], 0, i2310, 'connectedBody')
  i2310.axis = new pc.Vec3( i2311[11], i2311[12], i2311[13] )
  i2310.anchor = new pc.Vec3( i2311[14], i2311[15], i2311[16] )
  i2310.connectedAnchor = new pc.Vec3( i2311[17], i2311[18], i2311[19] )
  i2310.autoConfigureConnectedAnchor = !!i2311[20]
  i2310.massScale = i2311[21]
  i2310.connectedMassScale = i2311[22]
  i2310.enableCollision = !!i2311[23]
  i2310.breakForce = i2311[24]
  i2310.breakTorque = i2311[25]
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2315 = data
  i2314.weight = i2315[0]
  i2314.vertices = i2315[1]
  i2314.normals = i2315[2]
  i2314.tangents = i2315[3]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2317 = data
  i2316.pivot = new pc.Vec2( i2317[0], i2317[1] )
  i2316.anchorMin = new pc.Vec2( i2317[2], i2317[3] )
  i2316.anchorMax = new pc.Vec2( i2317[4], i2317[5] )
  i2316.sizeDelta = new pc.Vec2( i2317[6], i2317[7] )
  i2316.anchoredPosition3D = new pc.Vec3( i2317[8], i2317[9], i2317[10] )
  i2316.rotation = new pc.Quat(i2317[11], i2317[12], i2317[13], i2317[14])
  i2316.scale = new pc.Vec3( i2317[15], i2317[16], i2317[17] )
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2319 = data
  i2318.cullTransparentMesh = !!i2319[0]
  return i2318
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2320 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2321 = data
  i2320.m_hasFontAssetChanged = !!i2321[0]
  request.r(i2321[1], i2321[2], 0, i2320, 'm_baseMaterial')
  i2320.m_maskOffset = new pc.Vec4( i2321[3], i2321[4], i2321[5], i2321[6] )
  i2320.m_text = i2321[7]
  i2320.m_isRightToLeft = !!i2321[8]
  request.r(i2321[9], i2321[10], 0, i2320, 'm_fontAsset')
  request.r(i2321[11], i2321[12], 0, i2320, 'm_sharedMaterial')
  var i2323 = i2321[13]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 2) {
  request.r(i2323[i + 0], i2323[i + 1], 2, i2322, '')
  }
  i2320.m_fontSharedMaterials = i2322
  request.r(i2321[14], i2321[15], 0, i2320, 'm_fontMaterial')
  var i2325 = i2321[16]
  var i2324 = []
  for(var i = 0; i < i2325.length; i += 2) {
  request.r(i2325[i + 0], i2325[i + 1], 2, i2324, '')
  }
  i2320.m_fontMaterials = i2324
  i2320.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2321[17], i2321[18], i2321[19], i2321[20])
  i2320.m_fontColor = new pc.Color(i2321[21], i2321[22], i2321[23], i2321[24])
  i2320.m_enableVertexGradient = !!i2321[25]
  i2320.m_colorMode = i2321[26]
  i2320.m_fontColorGradient = request.d('TMPro.VertexGradient', i2321[27], i2320.m_fontColorGradient)
  request.r(i2321[28], i2321[29], 0, i2320, 'm_fontColorGradientPreset')
  request.r(i2321[30], i2321[31], 0, i2320, 'm_spriteAsset')
  i2320.m_tintAllSprites = !!i2321[32]
  request.r(i2321[33], i2321[34], 0, i2320, 'm_StyleSheet')
  i2320.m_TextStyleHashCode = i2321[35]
  i2320.m_overrideHtmlColors = !!i2321[36]
  i2320.m_faceColor = UnityEngine.Color32.ConstructColor(i2321[37], i2321[38], i2321[39], i2321[40])
  i2320.m_fontSize = i2321[41]
  i2320.m_fontSizeBase = i2321[42]
  i2320.m_fontWeight = i2321[43]
  i2320.m_enableAutoSizing = !!i2321[44]
  i2320.m_fontSizeMin = i2321[45]
  i2320.m_fontSizeMax = i2321[46]
  i2320.m_fontStyle = i2321[47]
  i2320.m_HorizontalAlignment = i2321[48]
  i2320.m_VerticalAlignment = i2321[49]
  i2320.m_textAlignment = i2321[50]
  i2320.m_characterSpacing = i2321[51]
  i2320.m_wordSpacing = i2321[52]
  i2320.m_lineSpacing = i2321[53]
  i2320.m_lineSpacingMax = i2321[54]
  i2320.m_paragraphSpacing = i2321[55]
  i2320.m_charWidthMaxAdj = i2321[56]
  i2320.m_enableWordWrapping = !!i2321[57]
  i2320.m_wordWrappingRatios = i2321[58]
  i2320.m_overflowMode = i2321[59]
  request.r(i2321[60], i2321[61], 0, i2320, 'm_linkedTextComponent')
  request.r(i2321[62], i2321[63], 0, i2320, 'parentLinkedComponent')
  i2320.m_enableKerning = !!i2321[64]
  i2320.m_enableExtraPadding = !!i2321[65]
  i2320.checkPaddingRequired = !!i2321[66]
  i2320.m_isRichText = !!i2321[67]
  i2320.m_parseCtrlCharacters = !!i2321[68]
  i2320.m_isOrthographic = !!i2321[69]
  i2320.m_isCullingEnabled = !!i2321[70]
  i2320.m_horizontalMapping = i2321[71]
  i2320.m_verticalMapping = i2321[72]
  i2320.m_uvLineOffset = i2321[73]
  i2320.m_geometrySortingOrder = i2321[74]
  i2320.m_IsTextObjectScaleStatic = !!i2321[75]
  i2320.m_VertexBufferAutoSizeReduction = !!i2321[76]
  i2320.m_useMaxVisibleDescender = !!i2321[77]
  i2320.m_pageToDisplay = i2321[78]
  i2320.m_margin = new pc.Vec4( i2321[79], i2321[80], i2321[81], i2321[82] )
  i2320.m_isUsingLegacyAnimationComponent = !!i2321[83]
  i2320.m_isVolumetricText = !!i2321[84]
  request.r(i2321[85], i2321[86], 0, i2320, 'm_Material')
  i2320.m_Maskable = !!i2321[87]
  i2320.m_Color = new pc.Color(i2321[88], i2321[89], i2321[90], i2321[91])
  i2320.m_RaycastTarget = !!i2321[92]
  i2320.m_RaycastPadding = new pc.Vec4( i2321[93], i2321[94], i2321[95], i2321[96] )
  return i2320
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2326 = root || request.c( 'TMPro.VertexGradient' )
  var i2327 = data
  i2326.topLeft = new pc.Color(i2327[0], i2327[1], i2327[2], i2327[3])
  i2326.topRight = new pc.Color(i2327[4], i2327[5], i2327[6], i2327[7])
  i2326.bottomLeft = new pc.Color(i2327[8], i2327[9], i2327[10], i2327[11])
  i2326.bottomRight = new pc.Color(i2327[12], i2327[13], i2327[14], i2327[15])
  return i2326
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2328 = root || request.c( 'UnityEngine.UI.Image' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'm_Sprite')
  i2328.m_Type = i2329[2]
  i2328.m_PreserveAspect = !!i2329[3]
  i2328.m_FillCenter = !!i2329[4]
  i2328.m_FillMethod = i2329[5]
  i2328.m_FillAmount = i2329[6]
  i2328.m_FillClockwise = !!i2329[7]
  i2328.m_FillOrigin = i2329[8]
  i2328.m_UseSpriteMesh = !!i2329[9]
  i2328.m_PixelsPerUnitMultiplier = i2329[10]
  request.r(i2329[11], i2329[12], 0, i2328, 'm_Material')
  i2328.m_Maskable = !!i2329[13]
  i2328.m_Color = new pc.Color(i2329[14], i2329[15], i2329[16], i2329[17])
  i2328.m_RaycastTarget = !!i2329[18]
  i2328.m_RaycastPadding = new pc.Vec4( i2329[19], i2329[20], i2329[21], i2329[22] )
  return i2328
}

Deserializers["Fish"] = function (request, data, root) {
  var i2330 = root || request.c( 'Fish' )
  var i2331 = data
  i2330.fishType = request.d('FishType', i2331[0], i2330.fishType)
  request.r(i2331[1], i2331[2], 0, i2330, 'fishData')
  i2330.sensingRadius = i2331[3]
  i2330.moveSpeed = i2331[4]
  i2330.followTargetSpeed = i2331[5]
  i2330.rotationSpeed = i2331[6]
  request.r(i2331[7], i2331[8], 0, i2330, 'target')
  i2330.usingMapDataNumber = i2331[9]
  i2330.hooked = !!i2331[10]
  request.r(i2331[11], i2331[12], 0, i2330, 'rigid')
  i2330.dirToHook = new pc.Vec3( i2331[13], i2331[14], i2331[15] )
  request.r(i2331[16], i2331[17], 0, i2330, 'head')
  request.r(i2331[18], i2331[19], 0, i2330, 'mapData')
  request.r(i2331[20], i2331[21], 0, i2330, 'mousePoint')
  return i2330
}

Deserializers["FishType"] = function (request, data, root) {
  var i2332 = root || request.c( 'FishType' )
  var i2333 = data
  i2332.cost = i2333[0]
  i2332.tier = i2333[1]
  i2332.fishNumber = i2333[2]
  i2332.boundSize = new pc.Vec3( i2333[3], i2333[4], i2333[5] )
  return i2332
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i2334 = root || request.c( 'ChestMover' )
  var i2335 = data
  request.r(i2335[0], i2335[1], 0, i2334, 'chest')
  return i2334
}

Deserializers["Chest"] = function (request, data, root) {
  var i2336 = root || request.c( 'Chest' )
  var i2337 = data
  request.r(i2337[0], i2337[1], 0, i2336, 'chestMover')
  i2336.chestTier = i2337[2]
  request.r(i2337[3], i2337[4], 0, i2336, 'line')
  i2336.chestPullDist = i2337[5]
  i2336.pullForce = i2337[6]
  i2336.fishType = request.d('FishType', i2337[7], i2336.fishType)
  request.r(i2337[8], i2337[9], 0, i2336, 'fishData')
  i2336.sensingRadius = i2337[10]
  i2336.moveSpeed = i2337[11]
  i2336.followTargetSpeed = i2337[12]
  i2336.rotationSpeed = i2337[13]
  request.r(i2337[14], i2337[15], 0, i2336, 'target')
  i2336.usingMapDataNumber = i2337[16]
  i2336.hooked = !!i2337[17]
  request.r(i2337[18], i2337[19], 0, i2336, 'rigid2')
  request.r(i2337[20], i2337[21], 0, i2336, 'rigid')
  i2336.dirToHook = new pc.Vec3( i2337[22], i2337[23], i2337[24] )
  request.r(i2337[25], i2337[26], 0, i2336, 'head')
  request.r(i2337[27], i2337[28], 0, i2336, 'mapData')
  request.r(i2337[29], i2337[30], 0, i2336, 'mousePoint')
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2339 = data
  i2338.enabled = !!i2339[0]
  i2338.type = i2339[1]
  i2338.color = new pc.Color(i2339[2], i2339[3], i2339[4], i2339[5])
  i2338.cullingMask = i2339[6]
  i2338.intensity = i2339[7]
  i2338.range = i2339[8]
  i2338.spotAngle = i2339[9]
  i2338.shadows = i2339[10]
  i2338.shadowNormalBias = i2339[11]
  i2338.shadowBias = i2339[12]
  i2338.shadowStrength = i2339[13]
  i2338.shadowResolution = i2339[14]
  i2338.lightmapBakeType = i2339[15]
  i2338.renderMode = i2339[16]
  request.r(i2339[17], i2339[18], 0, i2338, 'cookie')
  i2338.cookieSize = i2339[19]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2341 = data
  i2340.enabled = !!i2341[0]
  request.r(i2341[1], i2341[2], 0, i2340, 'sharedMaterial')
  var i2343 = i2341[3]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2340.sharedMaterials = i2342
  i2340.receiveShadows = !!i2341[4]
  i2340.shadowCastingMode = i2341[5]
  i2340.sortingLayerID = i2341[6]
  i2340.sortingOrder = i2341[7]
  i2340.lightmapIndex = i2341[8]
  i2340.lightmapSceneIndex = i2341[9]
  i2340.lightmapScaleOffset = new pc.Vec4( i2341[10], i2341[11], i2341[12], i2341[13] )
  i2340.lightProbeUsage = i2341[14]
  i2340.reflectionProbeUsage = i2341[15]
  i2340.color = new pc.Color(i2341[16], i2341[17], i2341[18], i2341[19])
  request.r(i2341[20], i2341[21], 0, i2340, 'sprite')
  i2340.flipX = !!i2341[22]
  i2340.flipY = !!i2341[23]
  i2340.drawMode = i2341[24]
  i2340.size = new pc.Vec2( i2341[25], i2341[26] )
  i2340.tileMode = i2341[27]
  i2340.adaptiveModeThreshold = i2341[28]
  i2340.maskInteraction = i2341[29]
  i2340.spriteSortPoint = i2341[30]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2345 = data
  i2344.name = i2345[0]
  i2344.atlasId = i2345[1]
  i2344.mipmapCount = i2345[2]
  i2344.hdr = !!i2345[3]
  i2344.size = i2345[4]
  i2344.anisoLevel = i2345[5]
  i2344.filterMode = i2345[6]
  i2344.wrapMode = i2345[7]
  var i2347 = i2345[8]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 4) {
    i2346.push( UnityEngine.Rect.MinMaxRect(i2347[i + 0], i2347[i + 1], i2347[i + 2], i2347[i + 3]) );
  }
  i2344.rects = i2346
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2351 = data
  i2350.name = i2351[0]
  i2350.index = i2351[1]
  i2350.startup = !!i2351[2]
  return i2350
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i2352 = root || request.c( 'LunaChallenge' )
  var i2353 = data
  i2352.challengeClear = !!i2353[0]
  request.r(i2353[1], i2353[2], 0, i2352, 'challengeObject')
  request.r(i2353[3], i2353[4], 0, i2352, 'challengeCount')
  request.r(i2353[5], i2353[6], 0, i2352, 'challengeClearObject')
  request.r(i2353[7], i2353[8], 0, i2352, 'challengeSlotObject')
  request.r(i2353[9], i2353[10], 0, i2352, 'tapToStartObject')
  i2352.goalCount = i2353[11]
  i2352.currentCount = i2353[12]
  return i2352
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i2354 = root || request.c( 'FishingRod' )
  var i2355 = data
  i2354.hookThrowForce = i2355[0]
  i2354.lineForce = i2355[1]
  i2354.maxPullingForce = i2355[2]
  i2354.minPullingForce = i2355[3]
  i2354.currentPullingForece = i2355[4]
  i2354.maxLine = i2355[5]
  i2354.pullingSpeed = i2355[6]
  i2354.playAdsPullCount = i2355[7]
  i2354.isStart = !!i2355[8]
  request.r(i2355[9], i2355[10], 0, i2354, 'hookRigid')
  request.r(i2355[11], i2355[12], 0, i2354, 'pivot')
  request.r(i2355[13], i2355[14], 0, i2354, 'touchToStartPanel')
  request.r(i2355[15], i2355[16], 0, i2354, 'rodAnimator')
  request.r(i2355[17], i2355[18], 0, i2354, 'fishingHook')
  request.r(i2355[19], i2355[20], 0, i2354, 'touchField')
  request.r(i2355[21], i2355[22], 0, i2354, 'upgradePanel')
  request.r(i2355[23], i2355[24], 0, i2354, 'upgradeButton')
  request.r(i2355[25], i2355[26], 0, i2354, 'depthText')
  request.r(i2355[27], i2355[28], 0, i2354, 'touchToPullPanel')
  request.r(i2355[29], i2355[30], 0, i2354, 'throwTarget1')
  request.r(i2355[31], i2355[32], 0, i2354, 'throwTarget2')
  request.r(i2355[33], i2355[34], 0, i2354, 'hookObject')
  request.r(i2355[35], i2355[36], 0, i2354, 'playerObject')
  request.r(i2355[37], i2355[38], 0, i2354, 'animationController')
  return i2354
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i2356 = root || request.c( 'FishingLogic' )
  var i2357 = data
  request.r(i2357[0], i2357[1], 0, i2356, 'joint')
  i2356.biteBate = !!i2357[2]
  i2356.pulling = !!i2357[3]
  i2356.enablePulling = !!i2357[4]
  request.r(i2357[5], i2357[6], 0, i2356, 'rodAnimator')
  request.r(i2357[7], i2357[8], 0, i2356, 'animationController')
  request.r(i2357[9], i2357[10], 0, i2356, 'startButton')
  request.r(i2357[11], i2357[12], 0, i2356, 'catchSlider')
  request.r(i2357[13], i2357[14], 0, i2356, 'catchButton')
  request.r(i2357[15], i2357[16], 0, i2356, 'fishingRod')
  request.r(i2357[17], i2357[18], 0, i2356, 'arrow')
  request.r(i2357[19], i2357[20], 0, i2356, 'fishingRodSkinned')
  request.r(i2357[21], i2357[22], 0, i2356, 'bubbleParticle')
  request.r(i2357[23], i2357[24], 0, i2356, 'hookRigid')
  request.r(i2357[25], i2357[26], 0, i2356, 'hook')
  return i2356
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i2358 = root || request.c( 'Upgrades' )
  var i2359 = data
  i2358.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i2359[0], i2358.lineLengthUpgrade)
  i2358.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i2359[1], i2358.hookMaxUpgrade)
  i2358.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i2359[2], i2358.hookMoveSpeedUpgrade)
  request.r(i2359[3], i2359[4], 0, i2358, 'hook')
  request.r(i2359[5], i2359[6], 0, i2358, 'rod')
  request.r(i2359[7], i2359[8], 0, i2358, 'touchField')
  request.r(i2359[9], i2359[10], 0, i2358, 'upgradePanel')
  request.r(i2359[11], i2359[12], 0, i2358, 'upgradeTap')
  request.r(i2359[13], i2359[14], 0, i2358, 'closeTap')
  request.r(i2359[15], i2359[16], 0, i2358, 'tapToStartText')
  return i2358
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i2360 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i2361 = data
  i2360.currentLevel = i2361[0]
  i2360.maxLevel = i2361[1]
  i2360.upgradeValue = i2361[2]
  i2360.upgradeNeedyCost = i2361[3]
  i2360.upgradeCostIncreaseValue = i2361[4]
  i2360.upgradeCostIncreaseValueMultifly = i2361[5]
  request.r(i2361[6], i2361[7], 0, i2360, 'levelText')
  request.r(i2361[8], i2361[9], 0, i2360, 'needyCostText')
  request.r(i2361[10], i2361[11], 0, i2360, 'cover')
  request.r(i2361[12], i2361[13], 0, i2360, 'rod')
  return i2360
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i2362 = root || request.c( 'Upgrades+CountUpgrade' )
  var i2363 = data
  i2362.currentLevel = i2363[0]
  i2362.maxLevel = i2363[1]
  i2362.upgradeValue = i2363[2]
  i2362.upgradeNeedyCost = i2363[3]
  i2362.upgradeCostIncreaseValue = i2363[4]
  i2362.upgradeCostIncreaseValueMultifly = i2363[5]
  request.r(i2363[6], i2363[7], 0, i2362, 'levelText')
  request.r(i2363[8], i2363[9], 0, i2362, 'needyCostText')
  request.r(i2363[10], i2363[11], 0, i2362, 'cover')
  request.r(i2363[12], i2363[13], 0, i2362, 'hook')
  return i2362
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i2364 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i2365 = data
  i2364.currentLevel = i2365[0]
  i2364.maxLevel = i2365[1]
  i2364.upgradeValue = i2365[2]
  i2364.upgradeNeedyCost = i2365[3]
  i2364.upgradeCostIncreaseValue = i2365[4]
  i2364.upgradeCostIncreaseValueMultifly = i2365[5]
  request.r(i2365[6], i2365[7], 0, i2364, 'levelText')
  request.r(i2365[8], i2365[9], 0, i2364, 'needyCostText')
  request.r(i2365[10], i2365[11], 0, i2364, 'cover')
  request.r(i2365[12], i2365[13], 0, i2364, 'touchField')
  return i2364
}

Deserializers["FishPool"] = function (request, data, root) {
  var i2366 = root || request.c( 'FishPool' )
  var i2367 = data
  i2366.oneTierFishList = request.d('FishList', i2367[0], i2366.oneTierFishList)
  i2366.twoTierFishList = request.d('FishList', i2367[1], i2366.twoTierFishList)
  i2366.threeTierFishList = request.d('FishList', i2367[2], i2366.threeTierFishList)
  i2366.fourTierFishList = request.d('FishList', i2367[3], i2366.fourTierFishList)
  i2366.fiveTierFishList = request.d('FishList', i2367[4], i2366.fiveTierFishList)
  i2366.chestList_one = request.d('FishList', i2367[5], i2366.chestList_one)
  i2366.chestList_two = request.d('FishList', i2367[6], i2366.chestList_two)
  i2366.chestList_three = request.d('FishList', i2367[7], i2366.chestList_three)
  i2366.chestMover = request.d('FishList', i2367[8], i2366.chestMover)
  var i2369 = i2367[9]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2369.length; i += 2) {
  request.r(i2369[i + 0], i2369[i + 1], 1, i2368, '')
  }
  i2366.generatedFishList = i2368
  request.r(i2367[10], i2367[11], 0, i2366, 'poolParent')
  return i2366
}

Deserializers["FishList"] = function (request, data, root) {
  var i2370 = root || request.c( 'FishList' )
  var i2371 = data
  var i2373 = i2371[0]
  var i2372 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2373.length; i += 2) {
  request.r(i2373[i + 0], i2373[i + 1], 1, i2372, '')
  }
  i2370.fishList = i2372
  var i2375 = i2371[1]
  var i2374 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2375.length; i += 2) {
  request.r(i2375[i + 0], i2375[i + 1], 1, i2374, '')
  }
  i2370.spawnPoints = i2374
  return i2370
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i2382 = root || request.c( 'LowLineRenderer' )
  var i2383 = data
  request.r(i2383[0], i2383[1], 0, i2382, 'line')
  request.r(i2383[2], i2383[3], 0, i2382, 'start')
  request.r(i2383[4], i2383[5], 0, i2382, 'end')
  return i2382
}

Deserializers["DataManager"] = function (request, data, root) {
  var i2384 = root || request.c( 'DataManager' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'setting')
  request.r(i2385[2], i2385[3], 0, i2384, 'soundSlider')
  request.r(i2385[4], i2385[5], 0, i2384, 'hapticSlider')
  i2384.gameDataFileName = i2385[6]
  i2384._gameData = request.d('GameData', i2385[7], i2384._gameData)
  request.r(i2385[8], i2385[9], 0, i2384, 'soundSliderHandleText')
  request.r(i2385[10], i2385[11], 0, i2384, 'hapticSliderHandleText')
  return i2384
}

Deserializers["GameData"] = function (request, data, root) {
  var i2386 = root || request.c( 'GameData' )
  var i2387 = data
  i2386.money = i2387[0]
  i2386.needleUpgrade = i2387[1]
  i2386.lineUpgrade = i2387[2]
  i2386.reelUpgrade = i2387[3]
  i2386.sound = i2387[4]
  i2386.haptic = i2387[5]
  return i2386
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'm_FirstSelected')
  i2388.m_sendNavigationEvents = !!i2389[2]
  i2388.m_DragThreshold = i2389[3]
  return i2388
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2391 = data
  i2390.m_HorizontalAxis = i2391[0]
  i2390.m_VerticalAxis = i2391[1]
  i2390.m_SubmitButton = i2391[2]
  i2390.m_CancelButton = i2391[3]
  i2390.m_InputActionsPerSecond = i2391[4]
  i2390.m_RepeatDelay = i2391[5]
  i2390.m_ForceModuleActive = !!i2391[6]
  i2390.m_SendPointerHoverToParent = !!i2391[7]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2393 = data
  i2392.enabled = !!i2393[0]
  i2392.planeDistance = i2393[1]
  i2392.referencePixelsPerUnit = i2393[2]
  i2392.isFallbackOverlay = !!i2393[3]
  i2392.renderMode = i2393[4]
  i2392.renderOrder = i2393[5]
  i2392.sortingLayerName = i2393[6]
  i2392.sortingOrder = i2393[7]
  i2392.scaleFactor = i2393[8]
  request.r(i2393[9], i2393[10], 0, i2392, 'worldCamera')
  i2392.overrideSorting = !!i2393[11]
  i2392.pixelPerfect = !!i2393[12]
  i2392.targetDisplay = i2393[13]
  i2392.overridePixelPerfect = !!i2393[14]
  return i2392
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2395 = data
  i2394.m_UiScaleMode = i2395[0]
  i2394.m_ReferencePixelsPerUnit = i2395[1]
  i2394.m_ScaleFactor = i2395[2]
  i2394.m_ReferenceResolution = new pc.Vec2( i2395[3], i2395[4] )
  i2394.m_ScreenMatchMode = i2395[5]
  i2394.m_MatchWidthOrHeight = i2395[6]
  i2394.m_PhysicalUnit = i2395[7]
  i2394.m_FallbackScreenDPI = i2395[8]
  i2394.m_DefaultSpriteDPI = i2395[9]
  i2394.m_DynamicPixelsPerUnit = i2395[10]
  i2394.m_PresetInfoIsWorld = !!i2395[11]
  return i2394
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2397 = data
  i2396.m_IgnoreReversedGraphics = !!i2397[0]
  i2396.m_BlockingObjects = i2397[1]
  i2396.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2397[2] )
  return i2396
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2398 = root || request.c( 'UIManager' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'challengeTarget')
  request.r(i2399[2], i2399[3], 0, i2398, 'challengeText')
  request.r(i2399[4], i2399[5], 0, i2398, 'versionText')
  i2398.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2399[6] )
  i2398.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2399[7] )
  request.r(i2399[8], i2399[9], 0, i2398, 'uiCamera')
  var i2401 = i2399[10]
  var i2400 = []
  for(var i = 0; i < i2401.length; i += 2) {
  request.r(i2401[i + 0], i2401[i + 1], 2, i2400, '')
  }
  i2398.pictureModeObjects = i2400
  return i2398
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i2404 = root || request.c( 'FixedTouchField' )
  var i2405 = data
  i2404.TouchDist = new pc.Vec2( i2405[0], i2405[1] )
  i2404.PointerOld = new pc.Vec2( i2405[2], i2405[3] )
  i2404.Pressed = !!i2405[4]
  i2404.hookMoveSpeed = i2405[5]
  request.r(i2405[6], i2405[7], 0, i2404, 'hook')
  request.r(i2405[8], i2405[9], 0, i2404, 'logic')
  request.r(i2405[10], i2405[11], 0, i2404, 'joystick_Background')
  request.r(i2405[12], i2405[13], 0, i2404, 'joystick_Handle')
  request.r(i2405[14], i2405[15], 0, i2404, 'canvas')
  request.r(i2405[16], i2405[17], 0, i2404, 'newCamera')
  i2404.clampDist = i2405[18]
  return i2404
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.UI.Button' )
  var i2407 = data
  i2406.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2407[0], i2406.m_OnClick)
  i2406.m_Navigation = request.d('UnityEngine.UI.Navigation', i2407[1], i2406.m_Navigation)
  i2406.m_Transition = i2407[2]
  i2406.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2407[3], i2406.m_Colors)
  i2406.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2407[4], i2406.m_SpriteState)
  i2406.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2407[5], i2406.m_AnimationTriggers)
  i2406.m_Interactable = !!i2407[6]
  request.r(i2407[7], i2407[8], 0, i2406, 'm_TargetGraphic')
  return i2406
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2409 = data
  i2408.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2409[0], i2408.m_PersistentCalls)
  return i2408
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2411 = data
  var i2413 = i2411[0]
  var i2412 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2413.length; i += 1) {
    i2412.add(request.d('UnityEngine.Events.PersistentCall', i2413[i + 0]));
  }
  i2410.m_Calls = i2412
  return i2410
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'm_Target')
  i2416.m_TargetAssemblyTypeName = i2417[2]
  i2416.m_MethodName = i2417[3]
  i2416.m_Mode = i2417[4]
  i2416.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2417[5], i2416.m_Arguments)
  i2416.m_CallState = i2417[6]
  return i2416
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2419 = data
  request.r(i2419[0], i2419[1], 0, i2418, 'm_ObjectArgument')
  i2418.m_ObjectArgumentAssemblyTypeName = i2419[2]
  i2418.m_IntArgument = i2419[3]
  i2418.m_FloatArgument = i2419[4]
  i2418.m_StringArgument = i2419[5]
  i2418.m_BoolArgument = !!i2419[6]
  return i2418
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2421 = data
  i2420.m_Mode = i2421[0]
  i2420.m_WrapAround = !!i2421[1]
  request.r(i2421[2], i2421[3], 0, i2420, 'm_SelectOnUp')
  request.r(i2421[4], i2421[5], 0, i2420, 'm_SelectOnDown')
  request.r(i2421[6], i2421[7], 0, i2420, 'm_SelectOnLeft')
  request.r(i2421[8], i2421[9], 0, i2420, 'm_SelectOnRight')
  return i2420
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2423 = data
  i2422.m_NormalColor = new pc.Color(i2423[0], i2423[1], i2423[2], i2423[3])
  i2422.m_HighlightedColor = new pc.Color(i2423[4], i2423[5], i2423[6], i2423[7])
  i2422.m_PressedColor = new pc.Color(i2423[8], i2423[9], i2423[10], i2423[11])
  i2422.m_SelectedColor = new pc.Color(i2423[12], i2423[13], i2423[14], i2423[15])
  i2422.m_DisabledColor = new pc.Color(i2423[16], i2423[17], i2423[18], i2423[19])
  i2422.m_ColorMultiplier = i2423[20]
  i2422.m_FadeDuration = i2423[21]
  return i2422
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'm_HighlightedSprite')
  request.r(i2425[2], i2425[3], 0, i2424, 'm_PressedSprite')
  request.r(i2425[4], i2425[5], 0, i2424, 'm_SelectedSprite')
  request.r(i2425[6], i2425[7], 0, i2424, 'm_DisabledSprite')
  return i2424
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2427 = data
  i2426.m_NormalTrigger = i2427[0]
  i2426.m_HighlightedTrigger = i2427[1]
  i2426.m_PressedTrigger = i2427[2]
  i2426.m_SelectedTrigger = i2427[3]
  i2426.m_DisabledTrigger = i2427[4]
  return i2426
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2429 = data
  i2428.m_EffectColor = new pc.Color(i2429[0], i2429[1], i2429[2], i2429[3])
  i2428.m_EffectDistance = new pc.Vec2( i2429[4], i2429[5] )
  i2428.m_UseGraphicAlpha = !!i2429[6]
  return i2428
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'm_FillRect')
  request.r(i2431[2], i2431[3], 0, i2430, 'm_HandleRect')
  i2430.m_Direction = i2431[4]
  i2430.m_MinValue = i2431[5]
  i2430.m_MaxValue = i2431[6]
  i2430.m_WholeNumbers = !!i2431[7]
  i2430.m_Value = i2431[8]
  i2430.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2431[9], i2430.m_OnValueChanged)
  i2430.m_Navigation = request.d('UnityEngine.UI.Navigation', i2431[10], i2430.m_Navigation)
  i2430.m_Transition = i2431[11]
  i2430.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2431[12], i2430.m_Colors)
  i2430.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2431[13], i2430.m_SpriteState)
  i2430.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2431[14], i2430.m_AnimationTriggers)
  i2430.m_Interactable = !!i2431[15]
  request.r(i2431[16], i2431[17], 0, i2430, 'm_TargetGraphic')
  return i2430
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2433 = data
  i2432.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2433[0], i2432.m_PersistentCalls)
  return i2432
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i2434 = root || request.c( 'EnviromentEditor' )
  var i2435 = data
  i2434.oceanSpriteValueMultifly = i2435[0]
  i2434.sunLightIntensity = i2435[1]
  i2434.minSunLightIntensity = i2435[2]
  i2434.challengeLightIntensity = i2435[3]
  i2434.depthMaskTransparentValue = i2435[4]
  i2434.ambientLightIntensity = i2435[5]
  request.r(i2435[6], i2435[7], 0, i2434, 'hook')
  var i2437 = i2435[8]
  var i2436 = []
  for(var i = 0; i < i2437.length; i += 2) {
  request.r(i2437[i + 0], i2437[i + 1], 2, i2436, '')
  }
  i2434.Oceans = i2436
  request.r(i2435[9], i2435[10], 0, i2434, 'OceanSurface')
  request.r(i2435[11], i2435[12], 0, i2434, 'depthMask')
  request.r(i2435[13], i2435[14], 0, i2434, 'depthSprite')
  request.r(i2435[15], i2435[16], 0, i2434, 'depthMaskMat')
  request.r(i2435[17], i2435[18], 0, i2434, 'sunLights')
  request.r(i2435[19], i2435[20], 0, i2434, 'hookLight')
  request.r(i2435[21], i2435[22], 0, i2434, 'challengeLight')
  return i2434
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i2440 = root || request.c( 'ObjectMovement' )
  var i2441 = data
  i2440.moveX = i2441[0]
  i2440.moveSec = i2441[1]
  return i2440
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i2442 = root || request.c( 'OceanTrigger' )
  var i2443 = data
  request.r(i2443[0], i2443[1], 0, i2442, 'touchToPullButton')
  request.r(i2443[2], i2443[3], 0, i2442, 'waterSplashParticle')
  request.r(i2443[4], i2443[5], 0, i2442, 'bubbleParticle')
  request.r(i2443[6], i2443[7], 0, i2442, 'arrow')
  request.r(i2443[8], i2443[9], 0, i2442, 'rigid')
  request.r(i2443[10], i2443[11], 0, i2442, 'hook')
  request.r(i2443[12], i2443[13], 0, i2442, 'rod')
  return i2442
}

Deserializers["Flock"] = function (request, data, root) {
  var i2444 = root || request.c( 'Flock' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'flockUnitPrefab')
  i2444.flockSize = i2445[2]
  i2444.spawnBounds = new pc.Vec3( i2445[3], i2445[4], i2445[5] )
  i2444._minSpeed = i2445[6]
  i2444._maxSpeed = i2445[7]
  i2444._cohesionDistance = i2445[8]
  i2444._avoidanceDistance = i2445[9]
  i2444._aligementDistance = i2445[10]
  i2444._obstacleDistance = i2445[11]
  i2444._boundsDistance = i2445[12]
  i2444._cohesionWeight = i2445[13]
  i2444._avoidanceWeight = i2445[14]
  i2444._aligementWeight = i2445[15]
  i2444._boundsWeight = i2445[16]
  i2444._obstacleWeight = i2445[17]
  return i2444
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i2446 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'm_LookAt')
  request.r(i2447[2], i2447[3], 0, i2446, 'm_Follow')
  i2446.m_Lens = request.d('Cinemachine.LensSettings', i2447[4], i2446.m_Lens)
  i2446.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i2447[5], i2446.m_Transitions)
  var i2449 = i2447[6]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( i2449[i + 0] );
  }
  i2446.m_ExcludedPropertiesInInspector = i2448
  var i2451 = i2447[7]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( i2451[i + 0] );
  }
  i2446.m_LockStageInInspector = i2450
  i2446.m_Priority = i2447[8]
  i2446.m_StandbyUpdate = i2447[9]
  i2446.m_LegacyBlendHint = i2447[10]
  request.r(i2447[11], i2447[12], 0, i2446, 'm_ComponentOwner')
  i2446.m_StreamingVersion = i2447[13]
  return i2446
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i2452 = root || request.c( 'Cinemachine.LensSettings' )
  var i2453 = data
  i2452.FieldOfView = i2453[0]
  i2452.OrthographicSize = i2453[1]
  i2452.NearClipPlane = i2453[2]
  i2452.FarClipPlane = i2453[3]
  i2452.Dutch = i2453[4]
  i2452.ModeOverride = i2453[5]
  i2452.LensShift = new pc.Vec2( i2453[6], i2453[7] )
  i2452.GateFit = i2453[8]
  i2452.m_SensorSize = new pc.Vec2( i2453[9], i2453[10] )
  return i2452
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i2454 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i2455 = data
  i2454.m_BlendHint = i2455[0]
  i2454.m_InheritPosition = !!i2455[1]
  i2454.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2455[2], i2454.m_OnCameraLive)
  return i2454
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i2456 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i2457 = data
  i2456.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2457[0], i2456.m_PersistentCalls)
  return i2456
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i2462 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i2463 = data
  return i2462
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i2464 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i2465 = data
  i2464.m_TrackedObjectOffset = new pc.Vec3( i2465[0], i2465[1], i2465[2] )
  i2464.m_LookaheadTime = i2465[3]
  i2464.m_LookaheadSmoothing = i2465[4]
  i2464.m_LookaheadIgnoreY = !!i2465[5]
  i2464.m_HorizontalDamping = i2465[6]
  i2464.m_VerticalDamping = i2465[7]
  i2464.m_ScreenX = i2465[8]
  i2464.m_ScreenY = i2465[9]
  i2464.m_DeadZoneWidth = i2465[10]
  i2464.m_DeadZoneHeight = i2465[11]
  i2464.m_SoftZoneWidth = i2465[12]
  i2464.m_SoftZoneHeight = i2465[13]
  i2464.m_BiasX = i2465[14]
  i2464.m_BiasY = i2465[15]
  i2464.m_CenterOnActivate = !!i2465[16]
  return i2464
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i2466 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i2467 = data
  i2466.m_BindingMode = i2467[0]
  i2466.m_FollowOffset = new pc.Vec3( i2467[1], i2467[2], i2467[3] )
  i2466.m_XDamping = i2467[4]
  i2466.m_YDamping = i2467[5]
  i2466.m_ZDamping = i2467[6]
  i2466.m_AngularDampingMode = i2467[7]
  i2466.m_PitchDamping = i2467[8]
  i2466.m_YawDamping = i2467[9]
  i2466.m_RollDamping = i2467[10]
  i2466.m_AngularDamping = i2467[11]
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2469 = data
  i2468.enabled = !!i2469[0]
  i2468.aspect = i2469[1]
  i2468.orthographic = !!i2469[2]
  i2468.orthographicSize = i2469[3]
  i2468.backgroundColor = new pc.Color(i2469[4], i2469[5], i2469[6], i2469[7])
  i2468.nearClipPlane = i2469[8]
  i2468.farClipPlane = i2469[9]
  i2468.fieldOfView = i2469[10]
  i2468.depth = i2469[11]
  i2468.clearFlags = i2469[12]
  i2468.cullingMask = i2469[13]
  i2468.rect = i2469[14]
  request.r(i2469[15], i2469[16], 0, i2468, 'targetTexture')
  return i2468
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i2470 = root || request.c( 'CameraMove' )
  var i2471 = data
  i2470.offset = new pc.Vec3( i2471[0], i2471[1], i2471[2] )
  request.r(i2471[3], i2471[4], 0, i2470, 'newCamera')
  request.r(i2471[5], i2471[6], 0, i2470, 'target')
  return i2470
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i2472 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i2473 = data
  i2472.m_ShowDebugText = !!i2473[0]
  i2472.m_ShowCameraFrustum = !!i2473[1]
  i2472.m_IgnoreTimeScale = !!i2473[2]
  request.r(i2473[3], i2473[4], 0, i2472, 'm_WorldUpOverride')
  i2472.m_UpdateMethod = i2473[5]
  i2472.m_BlendUpdateMethod = i2473[6]
  i2472.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i2473[7], i2472.m_DefaultBlend)
  request.r(i2473[8], i2473[9], 0, i2472, 'm_CustomBlends')
  i2472.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i2473[10], i2472.m_CameraCutEvent)
  i2472.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2473[11], i2472.m_CameraActivatedEvent)
  return i2472
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i2474 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i2475 = data
  i2474.m_Style = i2475[0]
  i2474.m_Time = i2475[1]
  i2474.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i2475[2] } )
  return i2474
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i2476 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i2477 = data
  i2476.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2477[0], i2476.m_PersistentCalls)
  return i2476
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i2478 = root || request.c( 'CinemachineController' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'playerTrans')
  i2478.playerOffset = new pc.Vec3( i2479[2], i2479[3], i2479[4] )
  request.r(i2479[5], i2479[6], 0, i2478, 'hookTrans')
  i2478.hookOffset = new pc.Vec3( i2479[7], i2479[8], i2479[9] )
  request.r(i2479[10], i2479[11], 0, i2478, 'cvc_Hook')
  request.r(i2479[12], i2479[13], 0, i2478, 'cvc_Player')
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2481 = data
  i2480.enabled = !!i2481[0]
  i2480.isTrigger = !!i2481[1]
  request.r(i2481[2], i2481[3], 0, i2480, 'material')
  i2480.center = new pc.Vec3( i2481[4], i2481[5], i2481[6] )
  i2480.radius = i2481[7]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2483 = data
  i2482.enabled = !!i2483[0]
  request.r(i2483[1], i2483[2], 0, i2482, 'sharedMaterial')
  var i2485 = i2483[3]
  var i2484 = []
  for(var i = 0; i < i2485.length; i += 2) {
  request.r(i2485[i + 0], i2485[i + 1], 2, i2484, '')
  }
  i2482.sharedMaterials = i2484
  i2482.receiveShadows = !!i2483[4]
  i2482.shadowCastingMode = i2483[5]
  i2482.sortingLayerID = i2483[6]
  i2482.sortingOrder = i2483[7]
  i2482.lightmapIndex = i2483[8]
  i2482.lightmapSceneIndex = i2483[9]
  i2482.lightmapScaleOffset = new pc.Vec4( i2483[10], i2483[11], i2483[12], i2483[13] )
  i2482.lightProbeUsage = i2483[14]
  i2482.reflectionProbeUsage = i2483[15]
  var i2487 = i2483[16]
  var i2486 = []
  for(var i = 0; i < i2487.length; i += 3) {
    i2486.push( new pc.Vec3( i2487[i + 0], i2487[i + 1], i2487[i + 2] ) );
  }
  i2482.positions = i2486
  i2482.positionCount = i2483[17]
  i2482.time = i2483[18]
  i2482.startWidth = i2483[19]
  i2482.endWidth = i2483[20]
  i2482.widthMultiplier = i2483[21]
  i2482.autodestruct = !!i2483[22]
  i2482.emitting = !!i2483[23]
  i2482.numCornerVertices = i2483[24]
  i2482.numCapVertices = i2483[25]
  i2482.minVertexDistance = i2483[26]
  i2482.colorGradient = i2483[27] ? new pc.ColorGradient(i2483[27][0], i2483[27][1], i2483[27][2]) : null
  i2482.startColor = new pc.Color(i2483[28], i2483[29], i2483[30], i2483[31])
  i2482.endColor = new pc.Color(i2483[32], i2483[33], i2483[34], i2483[35])
  i2482.generateLightingData = !!i2483[36]
  i2482.textureMode = i2483[37]
  i2482.alignment = i2483[38]
  i2482.widthCurve = new pc.AnimationCurve( { keys_flow: i2483[39] } )
  return i2482
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i2488 = root || request.c( 'FishingHook' )
  var i2489 = data
  i2488.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i2489[0], i2488.OnMoneyChangeEvent)
  var i2491 = i2489[1]
  var i2490 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2491.length; i += 2) {
  request.r(i2491[i + 0], i2491[i + 1], 1, i2490, '')
  }
  i2488.hookedFish = i2490
  request.r(i2489[2], i2489[3], 0, i2488, 'sellParticle')
  request.r(i2489[4], i2489[5], 0, i2488, 'sellParticleParent')
  i2488.targetHookZoomOffset = i2489[6]
  i2488.minDrag = i2489[7]
  i2488.maxDrag = i2489[8]
  i2488.dragSpeed = i2489[9]
  i2488.fishingHookScaleUpgradeValue = i2489[10]
  i2488.fullHooked = !!i2489[11]
  i2488.inTheOcean = !!i2489[12]
  i2488.money = i2489[13]
  request.r(i2489[14], i2489[15], 0, i2488, 'rigid')
  request.r(i2489[16], i2489[17], 0, i2488, 'canvas')
  request.r(i2489[18], i2489[19], 0, i2488, 'moneyTextPrefab')
  request.r(i2489[20], i2489[21], 0, i2488, 'moneyTextSpawnTransform')
  i2488.moneyTextSpawnMinOffset = new pc.Vec2( i2489[22], i2489[23] )
  i2488.moneyTextSpawnMaxOffset = new pc.Vec2( i2489[24], i2489[25] )
  var i2493 = i2489[26]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 2, i2492, '')
  }
  i2488.hookedTransforms = i2492
  request.r(i2489[27], i2489[28], 0, i2488, 'fishingRodSkinned')
  request.r(i2489[29], i2489[30], 0, i2488, 'cinemachineCamera')
  request.r(i2489[31], i2489[32], 0, i2488, 'startPoint')
  request.r(i2489[33], i2489[34], 0, i2488, 'hook')
  request.r(i2489[35], i2489[36], 0, i2488, 'rod')
  request.r(i2489[37], i2489[38], 0, i2488, 'playerModel')
  request.r(i2489[39], i2489[40], 0, i2488, 'upgradeButton')
  request.r(i2489[41], i2489[42], 0, i2488, 'depthText')
  request.r(i2489[43], i2489[44], 0, i2488, 'touchField')
  request.r(i2489[45], i2489[46], 0, i2488, 'catchRingParticle')
  request.r(i2489[47], i2489[48], 0, i2488, 'fishSkinPrefab')
  request.r(i2489[49], i2489[50], 0, i2488, 'fishSkinPoint1')
  request.r(i2489[51], i2489[52], 0, i2488, 'fishSkinPoint2')
  request.r(i2489[53], i2489[54], 0, i2488, 'moneyText')
  request.r(i2489[55], i2489[56], 0, i2488, 'HookedCount')
  return i2488
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2495 = data
  i2494.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2495[0], i2494.m_PersistentCalls)
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2497 = data
  i2496.ambientIntensity = i2497[0]
  i2496.reflectionIntensity = i2497[1]
  i2496.ambientMode = i2497[2]
  i2496.ambientLight = new pc.Color(i2497[3], i2497[4], i2497[5], i2497[6])
  i2496.ambientSkyColor = new pc.Color(i2497[7], i2497[8], i2497[9], i2497[10])
  i2496.ambientGroundColor = new pc.Color(i2497[11], i2497[12], i2497[13], i2497[14])
  i2496.ambientEquatorColor = new pc.Color(i2497[15], i2497[16], i2497[17], i2497[18])
  i2496.fogColor = new pc.Color(i2497[19], i2497[20], i2497[21], i2497[22])
  i2496.fogEndDistance = i2497[23]
  i2496.fogStartDistance = i2497[24]
  i2496.fogDensity = i2497[25]
  i2496.fog = !!i2497[26]
  request.r(i2497[27], i2497[28], 0, i2496, 'skybox')
  i2496.fogMode = i2497[29]
  var i2499 = i2497[30]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 1) {
    i2498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2499[i + 0]) );
  }
  i2496.lightmaps = i2498
  i2496.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2497[31], i2496.lightProbes)
  i2496.lightmapsMode = i2497[32]
  i2496.environmentLightingMode = i2497[33]
  i2496.ambientProbe = new pc.SphericalHarmonicsL2(i2497[34])
  i2496.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2497[35])
  i2496.useReferenceAmbientProbe = !!i2497[36]
  request.r(i2497[37], i2497[38], 0, i2496, 'customReflection')
  request.r(i2497[39], i2497[40], 0, i2496, 'defaultReflection')
  i2496.defaultReflectionMode = i2497[41]
  i2496.defaultReflectionResolution = i2497[42]
  i2496.sunLightObjectId = i2497[43]
  i2496.pixelLightCount = i2497[44]
  i2496.defaultReflectionHDR = !!i2497[45]
  i2496.hasLightDataAsset = !!i2497[46]
  i2496.hasManualGenerate = !!i2497[47]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2503 = data
  request.r(i2503[0], i2503[1], 0, i2502, 'lightmapColor')
  request.r(i2503[2], i2503[3], 0, i2502, 'lightmapDirection')
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2504 = root || new UnityEngine.LightProbes()
  var i2505 = data
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2511 = data
  var i2513 = i2511[0]
  var i2512 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.add(i2513[i + 0]);
  }
  i2510.invalidShaderVariants = i2512
  i2510.name = i2511[1]
  i2510.guid = i2511[2]
  var i2515 = i2511[3]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 1) {
    i2514.push( i2515[i + 0] );
  }
  i2510.shaderDefinedKeywords = i2514
  var i2517 = i2511[4]
  var i2516 = []
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2517[i + 0]) );
  }
  i2510.passes = i2516
  var i2519 = i2511[5]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2519[i + 0]) );
  }
  i2510.usePasses = i2518
  var i2521 = i2511[6]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2521[i + 0]) );
  }
  i2510.defaultParameterValues = i2520
  request.r(i2511[7], i2511[8], 0, i2510, 'unityFallbackShader')
  i2510.readDepth = !!i2511[9]
  i2510.isCreatedByShaderGraph = !!i2511[10]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2526 = root || new pc.UnityShaderPass()
  var i2527 = data
  i2526.id = i2527[0]
  i2526.subShaderIndex = i2527[1]
  i2526.name = i2527[2]
  i2526.passType = i2527[3]
  i2526.usePass = !!i2527[4]
  i2526.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[5], i2526.zTest)
  i2526.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[6], i2526.zWrite)
  i2526.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[7], i2526.culling)
  i2526.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2527[8], i2526.blending)
  i2526.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2527[9], i2526.alphaBlending)
  i2526.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[10], i2526.colorWriteMask)
  i2526.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[11], i2526.offsetUnits)
  i2526.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[12], i2526.offsetFactor)
  i2526.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[13], i2526.stencilRef)
  i2526.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[14], i2526.stencilReadMask)
  i2526.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2527[15], i2526.stencilWriteMask)
  i2526.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2527[16], i2526.stencilOp)
  i2526.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2527[17], i2526.stencilOpFront)
  i2526.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2527[18], i2526.stencilOpBack)
  var i2529 = i2527[19]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2529[i + 0]) );
  }
  i2526.tags = i2528
  var i2531 = i2527[20]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2526.passDefinedKeywords = i2530
  var i2533 = i2527[21]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2533[i + 0]) );
  }
  i2526.passDefinedKeywordGroups = i2532
  var i2535 = i2527[22]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2535[i + 0]) );
  }
  i2526.variants = i2534
  var i2537 = i2527[23]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2537[i + 0]) );
  }
  i2526.excludedVariants = i2536
  i2526.hasDepthReader = !!i2527[24]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2539 = data
  i2538.val = i2539[0]
  i2538.name = i2539[1]
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2541 = data
  i2540.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[0], i2540.src)
  i2540.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[1], i2540.dst)
  i2540.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2541[2], i2540.op)
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2543 = data
  i2542.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[0], i2542.pass)
  i2542.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[1], i2542.fail)
  i2542.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[2], i2542.zFail)
  i2542.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[3], i2542.comp)
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2547 = data
  i2546.name = i2547[0]
  i2546.value = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2551 = data
  var i2553 = i2551[0]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( i2553[i + 0] );
  }
  i2550.keywords = i2552
  i2550.hasDiscard = !!i2551[1]
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2557 = data
  i2556.passId = i2557[0]
  i2556.subShaderIndex = i2557[1]
  var i2559 = i2557[2]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( i2559[i + 0] );
  }
  i2556.keywords = i2558
  i2556.vertexProgram = i2557[3]
  i2556.fragmentProgram = i2557[4]
  i2556.readDepth = !!i2557[5]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2563 = data
  request.r(i2563[0], i2563[1], 0, i2562, 'shader')
  i2562.pass = i2563[2]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2567 = data
  i2566.name = i2567[0]
  i2566.type = i2567[1]
  i2566.value = new pc.Vec4( i2567[2], i2567[3], i2567[4], i2567[5] )
  i2566.textureValue = i2567[6]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2569 = data
  i2568.name = i2569[0]
  request.r(i2569[1], i2569[2], 0, i2568, 'texture')
  i2568.aabb = i2569[3]
  i2568.vertices = i2569[4]
  i2568.triangles = i2569[5]
  i2568.textureRect = UnityEngine.Rect.MinMaxRect(i2569[6], i2569[7], i2569[8], i2569[9])
  i2568.packedRect = UnityEngine.Rect.MinMaxRect(i2569[10], i2569[11], i2569[12], i2569[13])
  i2568.border = new pc.Vec4( i2569[14], i2569[15], i2569[16], i2569[17] )
  i2568.transparency = i2569[18]
  i2568.bounds = i2569[19]
  i2568.pixelsPerUnit = i2569[20]
  i2568.textureWidth = i2569[21]
  i2568.textureHeight = i2569[22]
  i2568.nativeSize = new pc.Vec2( i2569[23], i2569[24] )
  i2568.pivot = new pc.Vec2( i2569[25], i2569[26] )
  i2568.textureRectOffset = new pc.Vec2( i2569[27], i2569[28] )
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2571 = data
  i2570.name = i2571[0]
  i2570.wrapMode = i2571[1]
  i2570.isLooping = !!i2571[2]
  i2570.length = i2571[3]
  var i2573 = i2571[4]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2573[i + 0]) );
  }
  i2570.curves = i2572
  var i2575 = i2571[5]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2575[i + 0]) );
  }
  i2570.events = i2574
  i2570.halfPrecision = !!i2571[6]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2579 = data
  i2578.path = i2579[0]
  i2578.componentType = i2579[1]
  i2578.property = i2579[2]
  i2578.keys = i2579[3]
  var i2581 = i2579[4]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2581[i + 0]) );
  }
  i2578.objectReferenceKeys = i2580
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2585 = data
  i2584.time = i2585[0]
  request.r(i2585[1], i2585[2], 0, i2584, 'value')
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2589 = data
  i2588.functionName = i2589[0]
  i2588.floatParameter = i2589[1]
  i2588.intParameter = i2589[2]
  i2588.stringParameter = i2589[3]
  request.r(i2589[4], i2589[5], 0, i2588, 'objectReferenceParameter')
  i2588.time = i2589[6]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2591 = data
  i2590.name = i2591[0]
  var i2593 = i2591[1]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2593[i + 0]) );
  }
  i2590.states = i2592
  var i2595 = i2591[2]
  var i2594 = []
  for(var i = 0; i < i2595.length; i += 1) {
    i2594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2595[i + 0]) );
  }
  i2590.layers = i2594
  var i2597 = i2591[3]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2597[i + 0]) );
  }
  i2590.parameters = i2596
  var i2599 = i2591[4]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2590.animationClips = i2598
  i2590.HasSubStateMachines = !!i2591[5]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2603 = data
  i2602.cycleOffset = i2603[0]
  i2602.cycleOffsetParameter = i2603[1]
  i2602.cycleOffsetParameterActive = !!i2603[2]
  i2602.mirror = !!i2603[3]
  i2602.mirrorParameter = i2603[4]
  i2602.mirrorParameterActive = !!i2603[5]
  i2602.motionId = i2603[6]
  i2602.nameHash = i2603[7]
  i2602.fullPathHash = i2603[8]
  i2602.speed = i2603[9]
  i2602.speedParameter = i2603[10]
  i2602.speedParameterActive = !!i2603[11]
  i2602.tag = i2603[12]
  i2602.name = i2603[13]
  i2602.writeDefaultValues = !!i2603[14]
  var i2605 = i2603[15]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2605[i + 0]) );
  }
  i2602.transitions = i2604
  var i2607 = i2603[16]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 2) {
  request.r(i2607[i + 0], i2607[i + 1], 2, i2606, '')
  }
  i2602.behaviours = i2606
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2611 = data
  i2610.fullPath = i2611[0]
  i2610.canTransitionToSelf = !!i2611[1]
  i2610.duration = i2611[2]
  i2610.exitTime = i2611[3]
  i2610.hasExitTime = !!i2611[4]
  i2610.hasFixedDuration = !!i2611[5]
  i2610.interruptionSource = i2611[6]
  i2610.offset = i2611[7]
  i2610.orderedInterruption = !!i2611[8]
  i2610.destinationStateNameHash = i2611[9]
  i2610.destinationStateMachineId = i2611[10]
  i2610.isExit = !!i2611[11]
  i2610.mute = !!i2611[12]
  i2610.solo = !!i2611[13]
  var i2613 = i2611[14]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2613[i + 0]) );
  }
  i2610.conditions = i2612
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2617 = data
  i2616.mode = i2617[0]
  i2616.parameter = i2617[1]
  i2616.threshold = i2617[2]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2623 = data
  i2622.blendingMode = i2623[0]
  i2622.defaultWeight = i2623[1]
  i2622.name = i2623[2]
  i2622.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2623[3], i2622.stateMachine)
  return i2622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2625 = data
  i2624.id = i2625[0]
  i2624.defaultStateNameHash = i2625[1]
  var i2627 = i2625[2]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2627[i + 0]) );
  }
  i2624.entryTransitions = i2626
  var i2629 = i2625[3]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2629[i + 0]) );
  }
  i2624.anyStateTransitions = i2628
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2633 = data
  i2632.destinationStateNameHash = i2633[0]
  i2632.destinationStateMachineId = i2633[1]
  i2632.isExit = !!i2633[2]
  i2632.mute = !!i2633[3]
  i2632.solo = !!i2633[4]
  var i2635 = i2633[5]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2635[i + 0]) );
  }
  i2632.conditions = i2634
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2639 = data
  i2638.defaultBool = !!i2639[0]
  i2638.defaultFloat = i2639[1]
  i2638.defaultInt = i2639[2]
  i2638.name = i2639[3]
  i2638.nameHash = i2639[4]
  i2638.type = i2639[5]
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2641 = data
  i2640.name = i2641[0]
  i2640.bytes64 = i2641[1]
  i2640.data = i2641[2]
  return i2640
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2642 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2643 = data
  i2642.hashCode = i2643[0]
  request.r(i2643[1], i2643[2], 0, i2642, 'material')
  i2642.materialHashCode = i2643[3]
  request.r(i2643[4], i2643[5], 0, i2642, 'atlas')
  i2642.normalStyle = i2643[6]
  i2642.normalSpacingOffset = i2643[7]
  i2642.boldStyle = i2643[8]
  i2642.boldSpacing = i2643[9]
  i2642.italicStyle = i2643[10]
  i2642.tabSize = i2643[11]
  i2642.m_Version = i2643[12]
  i2642.m_SourceFontFileGUID = i2643[13]
  request.r(i2643[14], i2643[15], 0, i2642, 'm_SourceFontFile_EditorRef')
  request.r(i2643[16], i2643[17], 0, i2642, 'm_SourceFontFile')
  i2642.m_AtlasPopulationMode = i2643[18]
  i2642.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2643[19], i2642.m_FaceInfo)
  var i2645 = i2643[20]
  var i2644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.add(request.d('UnityEngine.TextCore.Glyph', i2645[i + 0]));
  }
  i2642.m_GlyphTable = i2644
  var i2647 = i2643[21]
  var i2646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.add(request.d('TMPro.TMP_Character', i2647[i + 0]));
  }
  i2642.m_CharacterTable = i2646
  var i2649 = i2643[22]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 2) {
  request.r(i2649[i + 0], i2649[i + 1], 2, i2648, '')
  }
  i2642.m_AtlasTextures = i2648
  i2642.m_AtlasTextureIndex = i2643[23]
  i2642.m_IsMultiAtlasTexturesEnabled = !!i2643[24]
  i2642.m_ClearDynamicDataOnBuild = !!i2643[25]
  var i2651 = i2643[26]
  var i2650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2651.length; i += 1) {
    i2650.add(request.d('UnityEngine.TextCore.GlyphRect', i2651[i + 0]));
  }
  i2642.m_UsedGlyphRects = i2650
  var i2653 = i2643[27]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.add(request.d('UnityEngine.TextCore.GlyphRect', i2653[i + 0]));
  }
  i2642.m_FreeGlyphRects = i2652
  i2642.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2643[28], i2642.m_fontInfo)
  i2642.m_AtlasWidth = i2643[29]
  i2642.m_AtlasHeight = i2643[30]
  i2642.m_AtlasPadding = i2643[31]
  i2642.m_AtlasRenderMode = i2643[32]
  var i2655 = i2643[33]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('TMPro.TMP_Glyph', i2655[i + 0]));
  }
  i2642.m_glyphInfoList = i2654
  i2642.m_KerningTable = request.d('TMPro.KerningTable', i2643[34], i2642.m_KerningTable)
  i2642.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2643[35], i2642.m_FontFeatureTable)
  var i2657 = i2643[36]
  var i2656 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 1, i2656, '')
  }
  i2642.fallbackFontAssets = i2656
  var i2659 = i2643[37]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2659.length; i += 2) {
  request.r(i2659[i + 0], i2659[i + 1], 1, i2658, '')
  }
  i2642.m_FallbackFontAssetTable = i2658
  i2642.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2643[38], i2642.m_CreationSettings)
  var i2661 = i2643[39]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('TMPro.TMP_FontWeightPair', i2661[i + 0]) );
  }
  i2642.m_FontWeightTable = i2660
  var i2663 = i2643[40]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('TMPro.TMP_FontWeightPair', i2663[i + 0]) );
  }
  i2642.fontWeights = i2662
  return i2642
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2664 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2665 = data
  i2664.m_FaceIndex = i2665[0]
  i2664.m_FamilyName = i2665[1]
  i2664.m_StyleName = i2665[2]
  i2664.m_PointSize = i2665[3]
  i2664.m_Scale = i2665[4]
  i2664.m_LineHeight = i2665[5]
  i2664.m_AscentLine = i2665[6]
  i2664.m_CapLine = i2665[7]
  i2664.m_MeanLine = i2665[8]
  i2664.m_Baseline = i2665[9]
  i2664.m_DescentLine = i2665[10]
  i2664.m_SuperscriptOffset = i2665[11]
  i2664.m_SuperscriptSize = i2665[12]
  i2664.m_SubscriptOffset = i2665[13]
  i2664.m_SubscriptSize = i2665[14]
  i2664.m_UnderlineOffset = i2665[15]
  i2664.m_UnderlineThickness = i2665[16]
  i2664.m_StrikethroughOffset = i2665[17]
  i2664.m_StrikethroughThickness = i2665[18]
  i2664.m_TabWidth = i2665[19]
  return i2664
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2668 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2669 = data
  i2668.m_Index = i2669[0]
  i2668.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2669[1], i2668.m_Metrics)
  i2668.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2669[2], i2668.m_GlyphRect)
  i2668.m_Scale = i2669[3]
  i2668.m_AtlasIndex = i2669[4]
  return i2668
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2670 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2671 = data
  i2670.m_Width = i2671[0]
  i2670.m_Height = i2671[1]
  i2670.m_HorizontalBearingX = i2671[2]
  i2670.m_HorizontalBearingY = i2671[3]
  i2670.m_HorizontalAdvance = i2671[4]
  return i2670
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2673 = data
  i2672.m_X = i2673[0]
  i2672.m_Y = i2673[1]
  i2672.m_Width = i2673[2]
  i2672.m_Height = i2673[3]
  return i2672
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2676 = root || request.c( 'TMPro.TMP_Character' )
  var i2677 = data
  i2676.m_ElementType = i2677[0]
  i2676.m_Unicode = i2677[1]
  i2676.m_GlyphIndex = i2677[2]
  i2676.m_Scale = i2677[3]
  return i2676
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2683 = data
  i2682.Name = i2683[0]
  i2682.PointSize = i2683[1]
  i2682.Scale = i2683[2]
  i2682.CharacterCount = i2683[3]
  i2682.LineHeight = i2683[4]
  i2682.Baseline = i2683[5]
  i2682.Ascender = i2683[6]
  i2682.CapHeight = i2683[7]
  i2682.Descender = i2683[8]
  i2682.CenterLine = i2683[9]
  i2682.SuperscriptOffset = i2683[10]
  i2682.SubscriptOffset = i2683[11]
  i2682.SubSize = i2683[12]
  i2682.Underline = i2683[13]
  i2682.UnderlineThickness = i2683[14]
  i2682.strikethrough = i2683[15]
  i2682.strikethroughThickness = i2683[16]
  i2682.TabWidth = i2683[17]
  i2682.Padding = i2683[18]
  i2682.AtlasWidth = i2683[19]
  i2682.AtlasHeight = i2683[20]
  return i2682
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2686 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2687 = data
  i2686.id = i2687[0]
  i2686.x = i2687[1]
  i2686.y = i2687[2]
  i2686.width = i2687[3]
  i2686.height = i2687[4]
  i2686.xOffset = i2687[5]
  i2686.yOffset = i2687[6]
  i2686.xAdvance = i2687[7]
  i2686.scale = i2687[8]
  return i2686
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2688 = root || request.c( 'TMPro.KerningTable' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('TMPro.KerningPair', i2691[i + 0]));
  }
  i2688.kerningPairs = i2690
  return i2688
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.KerningPair' )
  var i2695 = data
  i2694.xOffset = i2695[0]
  i2694.m_FirstGlyph = i2695[1]
  i2694.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2695[2], i2694.m_FirstGlyphAdjustments)
  i2694.m_SecondGlyph = i2695[3]
  i2694.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2695[4], i2694.m_SecondGlyphAdjustments)
  i2694.m_IgnoreSpacingAdjustments = !!i2695[5]
  return i2694
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2697 = data
  var i2699 = i2697[0]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2699[i + 0]));
  }
  i2696.m_GlyphPairAdjustmentRecords = i2698
  return i2696
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2703 = data
  i2702.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2703[0], i2702.m_FirstAdjustmentRecord)
  i2702.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2703[1], i2702.m_SecondAdjustmentRecord)
  i2702.m_FeatureLookupFlags = i2703[2]
  return i2702
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2706 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2707 = data
  i2706.sourceFontFileName = i2707[0]
  i2706.sourceFontFileGUID = i2707[1]
  i2706.pointSizeSamplingMode = i2707[2]
  i2706.pointSize = i2707[3]
  i2706.padding = i2707[4]
  i2706.packingMode = i2707[5]
  i2706.atlasWidth = i2707[6]
  i2706.atlasHeight = i2707[7]
  i2706.characterSetSelectionMode = i2707[8]
  i2706.characterSequence = i2707[9]
  i2706.referencedFontAssetGUID = i2707[10]
  i2706.referencedTextAssetGUID = i2707[11]
  i2706.fontStyle = i2707[12]
  i2706.fontStyleModifier = i2707[13]
  i2706.renderMode = i2707[14]
  i2706.includeFontFeatures = !!i2707[15]
  return i2706
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2711 = data
  request.r(i2711[0], i2711[1], 0, i2710, 'regularTypeface')
  request.r(i2711[2], i2711[3], 0, i2710, 'italicTypeface')
  return i2710
}

Deserializers["MapData"] = function (request, data, root) {
  var i2712 = root || request.c( 'MapData' )
  var i2713 = data
  var i2715 = i2713[0]
  var i2714 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.add(request.d('MapData+mapData', i2715[i + 0]));
  }
  i2712.mapDataList = i2714
  return i2712
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i2718 = root || request.c( 'MapData+mapData' )
  var i2719 = data
  i2718.tier = i2719[0]
  i2718.minMapSize = new pc.Vec3( i2719[1], i2719[2], i2719[3] )
  i2718.maxMapSize = new pc.Vec3( i2719[4], i2719[5], i2719[6] )
  return i2718
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.TMP_Settings' )
  var i2721 = data
  i2720.m_enableWordWrapping = !!i2721[0]
  i2720.m_enableKerning = !!i2721[1]
  i2720.m_enableExtraPadding = !!i2721[2]
  i2720.m_enableTintAllSprites = !!i2721[3]
  i2720.m_enableParseEscapeCharacters = !!i2721[4]
  i2720.m_EnableRaycastTarget = !!i2721[5]
  i2720.m_GetFontFeaturesAtRuntime = !!i2721[6]
  i2720.m_missingGlyphCharacter = i2721[7]
  i2720.m_warningsDisabled = !!i2721[8]
  request.r(i2721[9], i2721[10], 0, i2720, 'm_defaultFontAsset')
  i2720.m_defaultFontAssetPath = i2721[11]
  i2720.m_defaultFontSize = i2721[12]
  i2720.m_defaultAutoSizeMinRatio = i2721[13]
  i2720.m_defaultAutoSizeMaxRatio = i2721[14]
  i2720.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2721[15], i2721[16] )
  i2720.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2721[17], i2721[18] )
  i2720.m_autoSizeTextContainer = !!i2721[19]
  i2720.m_IsTextObjectScaleStatic = !!i2721[20]
  var i2723 = i2721[21]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2723.length; i += 2) {
  request.r(i2723[i + 0], i2723[i + 1], 1, i2722, '')
  }
  i2720.m_fallbackFontAssets = i2722
  i2720.m_matchMaterialPreset = !!i2721[22]
  request.r(i2721[23], i2721[24], 0, i2720, 'm_defaultSpriteAsset')
  i2720.m_defaultSpriteAssetPath = i2721[25]
  i2720.m_enableEmojiSupport = !!i2721[26]
  i2720.m_MissingCharacterSpriteUnicode = i2721[27]
  i2720.m_defaultColorGradientPresetsPath = i2721[28]
  request.r(i2721[29], i2721[30], 0, i2720, 'm_defaultStyleSheet')
  i2720.m_StyleSheetsResourcePath = i2721[31]
  request.r(i2721[32], i2721[33], 0, i2720, 'm_leadingCharacters')
  request.r(i2721[34], i2721[35], 0, i2720, 'm_followingCharacters')
  i2720.m_UseModernHangulLineBreakingRules = !!i2721[36]
  return i2720
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2725 = data
  i2724.hashCode = i2725[0]
  request.r(i2725[1], i2725[2], 0, i2724, 'material')
  i2724.materialHashCode = i2725[3]
  request.r(i2725[4], i2725[5], 0, i2724, 'spriteSheet')
  var i2727 = i2725[6]
  var i2726 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2727.length; i += 1) {
    i2726.add(request.d('TMPro.TMP_Sprite', i2727[i + 0]));
  }
  i2724.spriteInfoList = i2726
  var i2729 = i2725[7]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2729.length; i += 2) {
  request.r(i2729[i + 0], i2729[i + 1], 1, i2728, '')
  }
  i2724.fallbackSpriteAssets = i2728
  i2724.m_Version = i2725[8]
  i2724.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2725[9], i2724.m_FaceInfo)
  var i2731 = i2725[10]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('TMPro.TMP_SpriteCharacter', i2731[i + 0]));
  }
  i2724.m_SpriteCharacterTable = i2730
  var i2733 = i2725[11]
  var i2732 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2733.length; i += 1) {
    i2732.add(request.d('TMPro.TMP_SpriteGlyph', i2733[i + 0]));
  }
  i2724.m_SpriteGlyphTable = i2732
  return i2724
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2737 = data
  i2736.name = i2737[0]
  i2736.hashCode = i2737[1]
  i2736.unicode = i2737[2]
  i2736.pivot = new pc.Vec2( i2737[3], i2737[4] )
  request.r(i2737[5], i2737[6], 0, i2736, 'sprite')
  i2736.id = i2737[7]
  i2736.x = i2737[8]
  i2736.y = i2737[9]
  i2736.width = i2737[10]
  i2736.height = i2737[11]
  i2736.xOffset = i2737[12]
  i2736.yOffset = i2737[13]
  i2736.xAdvance = i2737[14]
  i2736.scale = i2737[15]
  return i2736
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2743 = data
  i2742.m_Name = i2743[0]
  i2742.m_HashCode = i2743[1]
  i2742.m_ElementType = i2743[2]
  i2742.m_Unicode = i2743[3]
  i2742.m_GlyphIndex = i2743[4]
  i2742.m_Scale = i2743[5]
  return i2742
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2747 = data
  request.r(i2747[0], i2747[1], 0, i2746, 'sprite')
  i2746.m_Index = i2747[2]
  i2746.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2747[3], i2746.m_Metrics)
  i2746.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2747[4], i2746.m_GlyphRect)
  i2746.m_Scale = i2747[5]
  i2746.m_AtlasIndex = i2747[6]
  return i2746
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2748 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2749 = data
  var i2751 = i2749[0]
  var i2750 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2751.length; i += 1) {
    i2750.add(request.d('TMPro.TMP_Style', i2751[i + 0]));
  }
  i2748.m_StyleList = i2750
  return i2748
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_Style' )
  var i2755 = data
  i2754.m_Name = i2755[0]
  i2754.m_HashCode = i2755[1]
  i2754.m_OpeningDefinition = i2755[2]
  i2754.m_ClosingDefinition = i2755[3]
  i2754.m_OpeningTagArray = i2755[4]
  i2754.m_ClosingTagArray = i2755[5]
  i2754.m_OpeningTagUnicodeArray = i2755[6]
  i2754.m_ClosingTagUnicodeArray = i2755[7]
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2757 = data
  var i2759 = i2757[0]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2759[i + 0]) );
  }
  i2756.files = i2758
  i2756.componentToPrefabIds = i2757[1]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2763 = data
  i2762.path = i2763[0]
  request.r(i2763[1], i2763[2], 0, i2762, 'unityObject')
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2767[i + 0]) );
  }
  i2764.scriptsExecutionOrder = i2766
  var i2769 = i2765[1]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2769[i + 0]) );
  }
  i2764.sortingLayers = i2768
  var i2771 = i2765[2]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2771[i + 0]) );
  }
  i2764.cullingLayers = i2770
  i2764.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2765[3], i2764.timeSettings)
  i2764.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2765[4], i2764.physicsSettings)
  i2764.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2765[5], i2764.physics2DSettings)
  i2764.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2765[6], i2764.qualitySettings)
  i2764.enableRealtimeShadows = !!i2765[7]
  i2764.autoInstantiatePrefabs = !!i2765[8]
  i2764.enableAutoInstancing = !!i2765[9]
  i2764.lightmapEncodingQuality = i2765[10]
  i2764.desiredColorSpace = i2765[11]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2775 = data
  i2774.name = i2775[0]
  i2774.value = i2775[1]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2779 = data
  i2778.id = i2779[0]
  i2778.name = i2779[1]
  i2778.value = i2779[2]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2783 = data
  i2782.id = i2783[0]
  i2782.name = i2783[1]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2785 = data
  i2784.fixedDeltaTime = i2785[0]
  i2784.maximumDeltaTime = i2785[1]
  i2784.timeScale = i2785[2]
  i2784.maximumParticleTimestep = i2785[3]
  return i2784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2787 = data
  i2786.gravity = new pc.Vec3( i2787[0], i2787[1], i2787[2] )
  i2786.defaultSolverIterations = i2787[3]
  i2786.bounceThreshold = i2787[4]
  i2786.autoSyncTransforms = !!i2787[5]
  i2786.autoSimulation = !!i2787[6]
  var i2789 = i2787[7]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2789[i + 0]) );
  }
  i2786.collisionMatrix = i2788
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2793 = data
  i2792.enabled = !!i2793[0]
  i2792.layerId = i2793[1]
  i2792.otherLayerId = i2793[2]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2795 = data
  request.r(i2795[0], i2795[1], 0, i2794, 'material')
  i2794.gravity = new pc.Vec2( i2795[2], i2795[3] )
  i2794.positionIterations = i2795[4]
  i2794.velocityIterations = i2795[5]
  i2794.velocityThreshold = i2795[6]
  i2794.maxLinearCorrection = i2795[7]
  i2794.maxAngularCorrection = i2795[8]
  i2794.maxTranslationSpeed = i2795[9]
  i2794.maxRotationSpeed = i2795[10]
  i2794.timeToSleep = i2795[11]
  i2794.linearSleepTolerance = i2795[12]
  i2794.angularSleepTolerance = i2795[13]
  i2794.defaultContactOffset = i2795[14]
  i2794.autoSimulation = !!i2795[15]
  i2794.queriesHitTriggers = !!i2795[16]
  i2794.queriesStartInColliders = !!i2795[17]
  i2794.callbacksOnDisable = !!i2795[18]
  i2794.reuseCollisionCallbacks = !!i2795[19]
  i2794.autoSyncTransforms = !!i2795[20]
  var i2797 = i2795[21]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2797[i + 0]) );
  }
  i2794.collisionMatrix = i2796
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2801 = data
  i2800.enabled = !!i2801[0]
  i2800.layerId = i2801[1]
  i2800.otherLayerId = i2801[2]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2803 = data
  var i2805 = i2803[0]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2805[i + 0]) );
  }
  i2802.qualityLevels = i2804
  var i2807 = i2803[1]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( i2807[i + 0] );
  }
  i2802.names = i2806
  i2802.shadows = i2803[2]
  i2802.anisotropicFiltering = i2803[3]
  i2802.antiAliasing = i2803[4]
  i2802.lodBias = i2803[5]
  i2802.shadowCascades = i2803[6]
  i2802.shadowDistance = i2803[7]
  i2802.shadowmaskMode = i2803[8]
  i2802.shadowProjection = i2803[9]
  i2802.shadowResolution = i2803[10]
  i2802.softParticles = !!i2803[11]
  i2802.softVegetation = !!i2803[12]
  i2802.activeColorSpace = i2803[13]
  i2802.desiredColorSpace = i2803[14]
  i2802.masterTextureLimit = i2803[15]
  i2802.maxQueuedFrames = i2803[16]
  i2802.particleRaycastBudget = i2803[17]
  i2802.pixelLightCount = i2803[18]
  i2802.realtimeReflectionProbes = !!i2803[19]
  i2802.shadowCascade2Split = i2803[20]
  i2802.shadowCascade4Split = new pc.Vec3( i2803[21], i2803[22], i2803[23] )
  i2802.streamingMipmapsActive = !!i2803[24]
  i2802.vSyncCount = i2803[25]
  i2802.asyncUploadBufferSize = i2803[26]
  i2802.asyncUploadTimeSlice = i2803[27]
  i2802.billboardsFaceCameraPosition = !!i2803[28]
  i2802.shadowNearPlaneOffset = i2803[29]
  i2802.streamingMipmapsMemoryBudget = i2803[30]
  i2802.maximumLODLevel = i2803[31]
  i2802.streamingMipmapsAddAllCameras = !!i2803[32]
  i2802.streamingMipmapsMaxLevelReduction = i2803[33]
  i2802.streamingMipmapsRenderersPerFrame = i2803[34]
  i2802.resolutionScalingFixedDPIFactor = i2803[35]
  i2802.streamingMipmapsMaxFileIORequests = i2803[36]
  i2802.currentQualityLevel = i2803[37]
  return i2802
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2810 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2811 = data
  i2810.xPlacement = i2811[0]
  i2810.yPlacement = i2811[1]
  i2810.xAdvance = i2811[2]
  i2810.yAdvance = i2811[3]
  return i2810
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2812 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2813 = data
  i2812.m_GlyphIndex = i2813[0]
  i2812.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2813[1], i2812.m_GlyphValueRecord)
  return i2812
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2814 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2815 = data
  i2814.m_XPlacement = i2815[0]
  i2814.m_YPlacement = i2815[1]
  i2814.m_XAdvance = i2815[2]
  i2814.m_YAdvance = i2815[3]
  return i2814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"referenceAmbientProbe":35,"useReferenceAmbientProbe":36,"customReflection":37,"defaultReflection":39,"defaultReflectionMode":41,"defaultReflectionResolution":42,"sunLightObjectId":43,"pixelLightCount":44,"defaultReflectionHDR":45,"hasLightDataAsset":46,"hasManualGenerate":47},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"74":[75],"76":[75],"77":[75],"78":[75],"79":[75],"80":[75],"81":[18],"82":[50],"21":[20],"83":[20],"84":[20],"85":[20],"86":[20],"87":[20],"88":[20],"89":[90],"91":[90],"92":[90],"93":[90],"94":[90],"95":[90],"96":[90],"97":[90],"98":[90],"99":[90],"100":[90],"101":[90],"102":[90],"103":[50],"104":[8],"105":[106],"107":[106],"49":[22],"108":[9],"109":[9],"110":[9],"111":[9],"112":[22],"113":[8,22],"25":[22,23],"114":[22],"115":[23,22],"116":[8],"117":[23,22],"118":[22],"119":[22],"120":[22],"52":[49],"27":[23,22],"121":[22],"51":[49],"122":[22],"123":[22],"124":[22],"125":[22],"126":[22],"127":[22],"128":[22],"129":[22],"130":[22],"131":[23,22],"132":[22],"133":[22],"134":[22],"46":[22],"135":[23,22],"136":[22],"137":[47],"138":[47],"48":[47],"139":[47],"140":[50],"141":[50],"142":[143],"144":[22],"145":[143],"146":[50],"147":[148],"149":[143]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","AnimationController","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","MapData","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","LunaChallenge","UnityEngine.GameObject","FishingRod","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","LowLineRenderer","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Outline","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "08/26/2022 07:02:41";

Deserializers.lunaDaysRunning = "61.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1163";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4523";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "bbe806a4-44d2-481c-9455-d300c9905adf";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

