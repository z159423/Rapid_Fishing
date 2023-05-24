var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.JointSpring' )
  var i2125 = data
  i2124.spring = i2125[0]
  i2124.damper = i2125[1]
  i2124.targetPosition = i2125[2]
  return i2124
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.JointMotor' )
  var i2127 = data
  i2126.m_TargetVelocity = i2127[0]
  i2126.m_Force = i2127[1]
  i2126.m_FreeSpin = i2127[2]
  return i2126
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.JointLimits' )
  var i2129 = data
  i2128.m_Min = i2129[0]
  i2128.m_Max = i2129[1]
  i2128.m_Bounciness = i2129[2]
  i2128.m_BounceMinVelocity = i2129[3]
  i2128.m_ContactDistance = i2129[4]
  i2128.minBounce = i2129[5]
  i2128.maxBounce = i2129[6]
  return i2128
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.JointDrive' )
  var i2131 = data
  i2130.m_PositionSpring = i2131[0]
  i2130.m_PositionDamper = i2131[1]
  i2130.m_MaximumForce = i2131[2]
  return i2130
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2133 = data
  i2132.m_Spring = i2133[0]
  i2132.m_Damper = i2133[1]
  return i2132
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2135 = data
  i2134.m_Limit = i2135[0]
  i2134.m_Bounciness = i2135[1]
  i2134.m_ContactDistance = i2135[2]
  return i2134
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2137 = data
  i2136.m_ExtremumSlip = i2137[0]
  i2136.m_ExtremumValue = i2137[1]
  i2136.m_AsymptoteSlip = i2137[2]
  i2136.m_AsymptoteValue = i2137[3]
  i2136.m_Stiffness = i2137[4]
  return i2136
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2139 = data
  i2138.m_LowerAngle = i2139[0]
  i2138.m_UpperAngle = i2139[1]
  return i2138
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2140 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2141 = data
  i2140.m_MotorSpeed = i2141[0]
  i2140.m_MaximumMotorTorque = i2141[1]
  return i2140
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2142 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2143 = data
  i2142.m_DampingRatio = i2143[0]
  i2142.m_Frequency = i2143[1]
  i2142.m_Angle = i2143[2]
  return i2142
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2144 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2145 = data
  i2144.m_LowerTranslation = i2145[0]
  i2144.m_UpperTranslation = i2145[1]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2146 = root || new pc.UnityMaterial()
  var i2147 = data
  i2146.name = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'shader')
  i2146.renderQueue = i2147[3]
  i2146.enableInstancing = !!i2147[4]
  var i2149 = i2147[5]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2149[i + 0]) );
  }
  i2146.floatParameters = i2148
  var i2151 = i2147[6]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2151[i + 0]) );
  }
  i2146.colorParameters = i2150
  var i2153 = i2147[7]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2153[i + 0]) );
  }
  i2146.vectorParameters = i2152
  var i2155 = i2147[8]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2155[i + 0]) );
  }
  i2146.textureParameters = i2154
  var i2157 = i2147[9]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2157[i + 0]) );
  }
  i2146.materialFlags = i2156
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.value = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2165 = data
  i2164.name = i2165[0]
  i2164.value = new pc.Color(i2165[1], i2165[2], i2165[3], i2165[4])
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2169 = data
  i2168.name = i2169[0]
  i2168.value = new pc.Vec4( i2169[1], i2169[2], i2169[3], i2169[4] )
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2173 = data
  i2172.name = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'value')
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2177 = data
  i2176.name = i2177[0]
  i2176.enabled = !!i2177[1]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2179 = data
  i2178.position = new pc.Vec3( i2179[0], i2179[1], i2179[2] )
  i2178.scale = new pc.Vec3( i2179[3], i2179[4], i2179[5] )
  i2178.rotation = new pc.Quat(i2179[6], i2179[7], i2179[8], i2179[9])
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2181 = data
  i2180.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2181[0], i2180.main)
  i2180.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2181[1], i2180.colorBySpeed)
  i2180.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2181[2], i2180.colorOverLifetime)
  i2180.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2181[3], i2180.emission)
  i2180.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2181[4], i2180.rotationBySpeed)
  i2180.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2181[5], i2180.rotationOverLifetime)
  i2180.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2181[6], i2180.shape)
  i2180.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2181[7], i2180.sizeBySpeed)
  i2180.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2181[8], i2180.sizeOverLifetime)
  i2180.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2181[9], i2180.textureSheetAnimation)
  i2180.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2181[10], i2180.velocityOverLifetime)
  i2180.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2181[11], i2180.noise)
  i2180.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2181[12], i2180.inheritVelocity)
  i2180.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2181[13], i2180.forceOverLifetime)
  i2180.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2181[14], i2180.limitVelocityOverLifetime)
  i2180.useAutoRandomSeed = !!i2181[15]
  i2180.randomSeed = i2181[16]
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2182 = root || new pc.ParticleSystemMain()
  var i2183 = data
  i2182.duration = i2183[0]
  i2182.loop = !!i2183[1]
  i2182.prewarm = !!i2183[2]
  i2182.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[3], i2182.startDelay)
  i2182.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[4], i2182.startLifetime)
  i2182.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[5], i2182.startSpeed)
  i2182.startSize3D = !!i2183[6]
  i2182.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[7], i2182.startSizeX)
  i2182.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[8], i2182.startSizeY)
  i2182.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[9], i2182.startSizeZ)
  i2182.startRotation3D = !!i2183[10]
  i2182.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[11], i2182.startRotationX)
  i2182.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[12], i2182.startRotationY)
  i2182.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[13], i2182.startRotationZ)
  i2182.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2183[14], i2182.startColor)
  i2182.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2183[15], i2182.gravityModifier)
  i2182.simulationSpace = i2183[16]
  request.r(i2183[17], i2183[18], 0, i2182, 'customSimulationSpace')
  i2182.simulationSpeed = i2183[19]
  i2182.useUnscaledTime = !!i2183[20]
  i2182.scalingMode = i2183[21]
  i2182.playOnAwake = !!i2183[22]
  i2182.maxParticles = i2183[23]
  i2182.emitterVelocityMode = i2183[24]
  i2182.stopAction = i2183[25]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2184 = root || new pc.MinMaxCurve()
  var i2185 = data
  i2184.mode = i2185[0]
  i2184.curveMin = new pc.AnimationCurve( { keys_flow: i2185[1] } )
  i2184.curveMax = new pc.AnimationCurve( { keys_flow: i2185[2] } )
  i2184.curveMultiplier = i2185[3]
  i2184.constantMin = i2185[4]
  i2184.constantMax = i2185[5]
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2186 = root || new pc.MinMaxGradient()
  var i2187 = data
  i2186.mode = i2187[0]
  i2186.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2187[1], i2186.gradientMin)
  i2186.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2187[2], i2186.gradientMax)
  i2186.colorMin = new pc.Color(i2187[3], i2187[4], i2187[5], i2187[6])
  i2186.colorMax = new pc.Color(i2187[7], i2187[8], i2187[9], i2187[10])
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2189 = data
  i2188.mode = i2189[0]
  var i2191 = i2189[1]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2191[i + 0]) );
  }
  i2188.colorKeys = i2190
  var i2193 = i2189[2]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2193[i + 0]) );
  }
  i2188.alphaKeys = i2192
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2194 = root || new pc.ParticleSystemColorBySpeed()
  var i2195 = data
  i2194.enabled = !!i2195[0]
  i2194.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2195[1], i2194.color)
  i2194.range = new pc.Vec2( i2195[2], i2195[3] )
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2199 = data
  i2198.color = new pc.Color(i2199[0], i2199[1], i2199[2], i2199[3])
  i2198.time = i2199[4]
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2203 = data
  i2202.alpha = i2203[0]
  i2202.time = i2203[1]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2204 = root || new pc.ParticleSystemColorOverLifetime()
  var i2205 = data
  i2204.enabled = !!i2205[0]
  i2204.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2205[1], i2204.color)
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemEmitter()
  var i2207 = data
  i2206.enabled = !!i2207[0]
  i2206.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[1], i2206.rateOverTime)
  i2206.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[2], i2206.rateOverDistance)
  var i2209 = i2207[3]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2209[i + 0]) );
  }
  i2206.bursts = i2208
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemBurst()
  var i2213 = data
  i2212.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[0], i2212.count)
  i2212.cycleCount = i2213[1]
  i2212.minCount = i2213[2]
  i2212.maxCount = i2213[3]
  i2212.repeatInterval = i2213[4]
  i2212.time = i2213[5]
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemRotationBySpeed()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[1], i2214.x)
  i2214.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[2], i2214.y)
  i2214.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.z)
  i2214.separateAxes = !!i2215[4]
  i2214.range = new pc.Vec2( i2215[5], i2215[6] )
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2216 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[1], i2216.x)
  i2216.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[2], i2216.y)
  i2216.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[3], i2216.z)
  i2216.separateAxes = !!i2217[4]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemShape()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.shapeType = i2219[1]
  i2218.randomDirectionAmount = i2219[2]
  i2218.sphericalDirectionAmount = i2219[3]
  i2218.randomPositionAmount = i2219[4]
  i2218.alignToDirection = !!i2219[5]
  i2218.radius = i2219[6]
  i2218.radiusMode = i2219[7]
  i2218.radiusSpread = i2219[8]
  i2218.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[9], i2218.radiusSpeed)
  i2218.radiusThickness = i2219[10]
  i2218.angle = i2219[11]
  i2218.length = i2219[12]
  i2218.boxThickness = new pc.Vec3( i2219[13], i2219[14], i2219[15] )
  i2218.meshShapeType = i2219[16]
  request.r(i2219[17], i2219[18], 0, i2218, 'mesh')
  request.r(i2219[19], i2219[20], 0, i2218, 'meshRenderer')
  request.r(i2219[21], i2219[22], 0, i2218, 'skinnedMeshRenderer')
  i2218.useMeshMaterialIndex = !!i2219[23]
  i2218.meshMaterialIndex = i2219[24]
  i2218.useMeshColors = !!i2219[25]
  i2218.normalOffset = i2219[26]
  i2218.arc = i2219[27]
  i2218.arcMode = i2219[28]
  i2218.arcSpread = i2219[29]
  i2218.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[30], i2218.arcSpeed)
  i2218.donutRadius = i2219[31]
  i2218.position = new pc.Vec3( i2219[32], i2219[33], i2219[34] )
  i2218.rotation = new pc.Vec3( i2219[35], i2219[36], i2219[37] )
  i2218.scale = new pc.Vec3( i2219[38], i2219[39], i2219[40] )
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2220 = root || new pc.ParticleSystemSizeBySpeed()
  var i2221 = data
  i2220.enabled = !!i2221[0]
  i2220.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[1], i2220.x)
  i2220.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[2], i2220.y)
  i2220.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2221[3], i2220.z)
  i2220.separateAxes = !!i2221[4]
  i2220.range = new pc.Vec2( i2221[5], i2221[6] )
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2222 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2223 = data
  i2222.enabled = !!i2223[0]
  i2222.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[1], i2222.x)
  i2222.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[2], i2222.y)
  i2222.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2223[3], i2222.z)
  i2222.separateAxes = !!i2223[4]
  return i2222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.mode = i2225[1]
  i2224.animation = i2225[2]
  i2224.numTilesX = i2225[3]
  i2224.numTilesY = i2225[4]
  i2224.useRandomRow = !!i2225[5]
  i2224.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[6], i2224.frameOverTime)
  i2224.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[7], i2224.startFrame)
  i2224.cycleCount = i2225[8]
  i2224.rowIndex = i2225[9]
  i2224.flipU = i2225[10]
  i2224.flipV = i2225[11]
  i2224.spriteCount = i2225[12]
  var i2227 = i2225[13]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 2) {
  request.r(i2227[i + 0], i2227[i + 1], 2, i2226, '')
  }
  i2224.sprites = i2226
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2230 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2231 = data
  i2230.enabled = !!i2231[0]
  i2230.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[1], i2230.x)
  i2230.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[2], i2230.y)
  i2230.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[3], i2230.z)
  i2230.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[4], i2230.speedModifier)
  i2230.space = i2231[5]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemNoise()
  var i2233 = data
  i2232.enabled = !!i2233[0]
  i2232.separateAxes = !!i2233[1]
  i2232.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[2], i2232.strengthX)
  i2232.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[3], i2232.strengthY)
  i2232.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[4], i2232.strengthZ)
  i2232.frequency = i2233[5]
  i2232.damping = !!i2233[6]
  i2232.octaveCount = i2233[7]
  i2232.octaveMultiplier = i2233[8]
  i2232.octaveScale = i2233[9]
  i2232.quality = i2233[10]
  i2232.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[11], i2232.scrollSpeed)
  i2232.scrollSpeedMultiplier = i2233[12]
  i2232.remapEnabled = !!i2233[13]
  i2232.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[14], i2232.remapX)
  i2232.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[15], i2232.remapY)
  i2232.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[16], i2232.remapZ)
  i2232.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[17], i2232.positionAmount)
  i2232.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[18], i2232.rotationAmount)
  i2232.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[19], i2232.sizeAmount)
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2234 = root || new pc.ParticleSystemInheritVelocity()
  var i2235 = data
  i2234.enabled = !!i2235[0]
  i2234.mode = i2235[1]
  i2234.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2235[2], i2234.curve)
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2236 = root || new pc.ParticleSystemForceOverLifetime()
  var i2237 = data
  i2236.enabled = !!i2237[0]
  i2236.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[1], i2236.x)
  i2236.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[2], i2236.y)
  i2236.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2237[3], i2236.z)
  i2236.space = i2237[4]
  i2236.randomized = !!i2237[5]
  return i2236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2238 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2239 = data
  i2238.enabled = !!i2239[0]
  i2238.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[1], i2238.limit)
  i2238.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[2], i2238.limitX)
  i2238.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[3], i2238.limitY)
  i2238.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[4], i2238.limitZ)
  i2238.dampen = i2239[5]
  i2238.separateAxes = !!i2239[6]
  i2238.space = i2239[7]
  i2238.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2239[8], i2238.drag)
  i2238.multiplyDragByParticleSize = !!i2239[9]
  i2238.multiplyDragByParticleVelocity = !!i2239[10]
  return i2238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2241 = data
  i2240.enabled = !!i2241[0]
  request.r(i2241[1], i2241[2], 0, i2240, 'sharedMaterial')
  var i2243 = i2241[3]
  var i2242 = []
  for(var i = 0; i < i2243.length; i += 2) {
  request.r(i2243[i + 0], i2243[i + 1], 2, i2242, '')
  }
  i2240.sharedMaterials = i2242
  i2240.receiveShadows = !!i2241[4]
  i2240.shadowCastingMode = i2241[5]
  i2240.sortingLayerID = i2241[6]
  i2240.sortingOrder = i2241[7]
  i2240.lightmapIndex = i2241[8]
  i2240.lightmapSceneIndex = i2241[9]
  i2240.lightmapScaleOffset = new pc.Vec4( i2241[10], i2241[11], i2241[12], i2241[13] )
  i2240.lightProbeUsage = i2241[14]
  i2240.reflectionProbeUsage = i2241[15]
  request.r(i2241[16], i2241[17], 0, i2240, 'mesh')
  i2240.meshCount = i2241[18]
  i2240.activeVertexStreamsCount = i2241[19]
  i2240.alignment = i2241[20]
  i2240.renderMode = i2241[21]
  i2240.sortMode = i2241[22]
  i2240.lengthScale = i2241[23]
  i2240.velocityScale = i2241[24]
  i2240.cameraVelocityScale = i2241[25]
  i2240.normalDirection = i2241[26]
  i2240.sortingFudge = i2241[27]
  i2240.minParticleSize = i2241[28]
  i2240.maxParticleSize = i2241[29]
  i2240.pivot = new pc.Vec3( i2241[30], i2241[31], i2241[32] )
  request.r(i2241[33], i2241[34], 0, i2240, 'trailMaterial')
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2247 = data
  i2246.name = i2247[0]
  i2246.tagId = i2247[1]
  i2246.enabled = !!i2247[2]
  i2246.isStatic = !!i2247[3]
  i2246.layer = i2247[4]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2249 = data
  i2248.name = i2249[0]
  i2248.width = i2249[1]
  i2248.height = i2249[2]
  i2248.mipmapCount = i2249[3]
  i2248.anisoLevel = i2249[4]
  i2248.filterMode = i2249[5]
  i2248.hdr = !!i2249[6]
  i2248.format = i2249[7]
  i2248.wrapMode = i2249[8]
  i2248.alphaIsTransparency = !!i2249[9]
  i2248.alphaSource = i2249[10]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2251 = data
  request.r(i2251[0], i2251[1], 0, i2250, 'sharedMesh')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2253 = data
  request.r(i2253[0], i2253[1], 0, i2252, 'additionalVertexStreams')
  i2252.enabled = !!i2253[2]
  request.r(i2253[3], i2253[4], 0, i2252, 'sharedMaterial')
  var i2255 = i2253[5]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 2, i2254, '')
  }
  i2252.sharedMaterials = i2254
  i2252.receiveShadows = !!i2253[6]
  i2252.shadowCastingMode = i2253[7]
  i2252.sortingLayerID = i2253[8]
  i2252.sortingOrder = i2253[9]
  i2252.lightmapIndex = i2253[10]
  i2252.lightmapSceneIndex = i2253[11]
  i2252.lightmapScaleOffset = new pc.Vec4( i2253[12], i2253[13], i2253[14], i2253[15] )
  i2252.lightProbeUsage = i2253[16]
  i2252.reflectionProbeUsage = i2253[17]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2257 = data
  i2256.name = i2257[0]
  i2256.halfPrecision = !!i2257[1]
  i2256.vertexCount = i2257[2]
  i2256.aabb = i2257[3]
  var i2259 = i2257[4]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( !!i2259[i + 0] );
  }
  i2256.streams = i2258
  i2256.vertices = i2257[5]
  var i2261 = i2257[6]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2261[i + 0]) );
  }
  i2256.subMeshes = i2260
  var i2263 = i2257[7]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 16) {
    i2262.push( new pc.Mat4().setData(i2263[i + 0], i2263[i + 1], i2263[i + 2], i2263[i + 3],  i2263[i + 4], i2263[i + 5], i2263[i + 6], i2263[i + 7],  i2263[i + 8], i2263[i + 9], i2263[i + 10], i2263[i + 11],  i2263[i + 12], i2263[i + 13], i2263[i + 14], i2263[i + 15]) );
  }
  i2256.bindposes = i2262
  var i2265 = i2257[8]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2265[i + 0]) );
  }
  i2256.blendShapes = i2264
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2271 = data
  i2270.triangles = i2271[0]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2277 = data
  i2276.name = i2277[0]
  var i2279 = i2277[1]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 1) {
    i2278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2279[i + 0]) );
  }
  i2276.frames = i2278
  return i2276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2281 = data
  i2280.textureMode = i2281[0]
  i2280.alignment = i2281[1]
  i2280.widthCurve = new pc.AnimationCurve( { keys_flow: i2281[2] } )
  i2280.colorGradient = i2281[3] ? new pc.ColorGradient(i2281[3][0], i2281[3][1], i2281[3][2]) : null
  var i2283 = i2281[4]
  var i2282 = []
  for(var i = 0; i < i2283.length; i += 3) {
    i2282.push( new pc.Vec3( i2283[i + 0], i2283[i + 1], i2283[i + 2] ) );
  }
  i2280.positions = i2282
  i2280.positionCount = i2281[5]
  i2280.widthMultiplier = i2281[6]
  i2280.startWidth = i2281[7]
  i2280.endWidth = i2281[8]
  i2280.numCornerVertices = i2281[9]
  i2280.numCapVertices = i2281[10]
  i2280.useWorldSpace = !!i2281[11]
  i2280.loop = !!i2281[12]
  i2280.startColor = new pc.Color(i2281[13], i2281[14], i2281[15], i2281[16])
  i2280.endColor = new pc.Color(i2281[17], i2281[18], i2281[19], i2281[20])
  i2280.generateLightingData = !!i2281[21]
  i2280.enabled = !!i2281[22]
  request.r(i2281[23], i2281[24], 0, i2280, 'sharedMaterial')
  var i2285 = i2281[25]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 2) {
  request.r(i2285[i + 0], i2285[i + 1], 2, i2284, '')
  }
  i2280.sharedMaterials = i2284
  i2280.receiveShadows = !!i2281[26]
  i2280.shadowCastingMode = i2281[27]
  i2280.sortingLayerID = i2281[28]
  i2280.sortingOrder = i2281[29]
  i2280.lightmapIndex = i2281[30]
  i2280.lightmapSceneIndex = i2281[31]
  i2280.lightmapScaleOffset = new pc.Vec4( i2281[32], i2281[33], i2281[34], i2281[35] )
  i2280.lightProbeUsage = i2281[36]
  i2280.reflectionProbeUsage = i2281[37]
  return i2280
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i2288 = root || request.c( 'RopeBridge' )
  var i2289 = data
  request.r(i2289[0], i2289[1], 0, i2288, 'StartPoint')
  request.r(i2289[2], i2289[3], 0, i2288, 'EndPoint')
  i2288.ropeSegLen = i2289[4]
  i2288.segmentLength = i2289[5]
  i2288.lineWidth = i2289[6]
  i2288.distOfStartToEnd = i2289[7]
  i2288.lineLengthMultifly = i2289[8]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'animatorController')
  i2290.updateMode = i2291[2]
  var i2293 = i2291[3]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 2, i2292, '')
  }
  i2290.humanBones = i2292
  i2290.enabled = !!i2291[4]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2297 = data
  i2296.playAutomatically = !!i2297[0]
  request.r(i2297[1], i2297[2], 0, i2296, 'clip')
  var i2299 = i2297[3]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 2) {
  request.r(i2299[i + 0], i2299[i + 1], 2, i2298, '')
  }
  i2296.clips = i2298
  i2296.wrapMode = i2297[4]
  i2296.enabled = !!i2297[5]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2303 = data
  i2302.center = new pc.Vec3( i2303[0], i2303[1], i2303[2] )
  i2302.size = new pc.Vec3( i2303[3], i2303[4], i2303[5] )
  i2302.enabled = !!i2303[6]
  i2302.isTrigger = !!i2303[7]
  request.r(i2303[8], i2303[9], 0, i2302, 'material')
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2305 = data
  i2304.enabled = !!i2305[0]
  request.r(i2305[1], i2305[2], 0, i2304, 'sharedMaterial')
  var i2307 = i2305[3]
  var i2306 = []
  for(var i = 0; i < i2307.length; i += 2) {
  request.r(i2307[i + 0], i2307[i + 1], 2, i2306, '')
  }
  i2304.sharedMaterials = i2306
  i2304.receiveShadows = !!i2305[4]
  i2304.shadowCastingMode = i2305[5]
  i2304.sortingLayerID = i2305[6]
  i2304.sortingOrder = i2305[7]
  i2304.lightmapIndex = i2305[8]
  i2304.lightmapSceneIndex = i2305[9]
  i2304.lightmapScaleOffset = new pc.Vec4( i2305[10], i2305[11], i2305[12], i2305[13] )
  i2304.lightProbeUsage = i2305[14]
  i2304.reflectionProbeUsage = i2305[15]
  request.r(i2305[16], i2305[17], 0, i2304, 'sharedMesh')
  var i2309 = i2305[18]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 2) {
  request.r(i2309[i + 0], i2309[i + 1], 2, i2308, '')
  }
  i2304.bones = i2308
  i2304.updateWhenOffscreen = !!i2305[19]
  i2304.localBounds = i2305[20]
  request.r(i2305[21], i2305[22], 0, i2304, 'rootBone')
  var i2311 = i2305[23]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2311[i + 0]) );
  }
  i2304.blendShapesWeights = i2310
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2315 = data
  i2314.weight = i2315[0]
  return i2314
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i2316 = root || request.c( 'FishingLine' )
  var i2317 = data
  request.r(i2317[0], i2317[1], 0, i2316, 'line')
  request.r(i2317[2], i2317[3], 0, i2316, 'startPoint')
  request.r(i2317[4], i2317[5], 0, i2316, 'endPoint')
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2319 = data
  i2318.mass = i2319[0]
  i2318.drag = i2319[1]
  i2318.angularDrag = i2319[2]
  i2318.useGravity = !!i2319[3]
  i2318.isKinematic = !!i2319[4]
  i2318.constraints = i2319[5]
  i2318.maxAngularVelocity = i2319[6]
  i2318.collisionDetectionMode = i2319[7]
  i2318.interpolation = i2319[8]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i2321 = data
  i2320.swingAxis = new pc.Vec3( i2321[0], i2321[1], i2321[2] )
  i2320.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2321[3], i2320.twistLimitSpring)
  i2320.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2321[4], i2320.swingLimitSpring)
  i2320.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i2321[5], i2320.lowTwistLimit)
  i2320.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i2321[6], i2320.highTwistLimit)
  i2320.swing1Limit = request.d('UnityEngine.SoftJointLimit', i2321[7], i2320.swing1Limit)
  i2320.swing2Limit = request.d('UnityEngine.SoftJointLimit', i2321[8], i2320.swing2Limit)
  request.r(i2321[9], i2321[10], 0, i2320, 'connectedBody')
  i2320.axis = new pc.Vec3( i2321[11], i2321[12], i2321[13] )
  i2320.anchor = new pc.Vec3( i2321[14], i2321[15], i2321[16] )
  i2320.connectedAnchor = new pc.Vec3( i2321[17], i2321[18], i2321[19] )
  i2320.autoConfigureConnectedAnchor = !!i2321[20]
  i2320.massScale = i2321[21]
  i2320.connectedMassScale = i2321[22]
  i2320.enableCollision = !!i2321[23]
  i2320.breakForce = i2321[24]
  i2320.breakTorque = i2321[25]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2325 = data
  i2324.weight = i2325[0]
  i2324.vertices = i2325[1]
  i2324.normals = i2325[2]
  i2324.tangents = i2325[3]
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2327 = data
  i2326.pivot = new pc.Vec2( i2327[0], i2327[1] )
  i2326.anchorMin = new pc.Vec2( i2327[2], i2327[3] )
  i2326.anchorMax = new pc.Vec2( i2327[4], i2327[5] )
  i2326.sizeDelta = new pc.Vec2( i2327[6], i2327[7] )
  i2326.anchoredPosition3D = new pc.Vec3( i2327[8], i2327[9], i2327[10] )
  i2326.rotation = new pc.Quat(i2327[11], i2327[12], i2327[13], i2327[14])
  i2326.scale = new pc.Vec3( i2327[15], i2327[16], i2327[17] )
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2329 = data
  i2328.cullTransparentMesh = !!i2329[0]
  return i2328
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2331 = data
  i2330.m_hasFontAssetChanged = !!i2331[0]
  request.r(i2331[1], i2331[2], 0, i2330, 'm_baseMaterial')
  i2330.m_maskOffset = new pc.Vec4( i2331[3], i2331[4], i2331[5], i2331[6] )
  i2330.m_text = i2331[7]
  i2330.m_isRightToLeft = !!i2331[8]
  request.r(i2331[9], i2331[10], 0, i2330, 'm_fontAsset')
  request.r(i2331[11], i2331[12], 0, i2330, 'm_sharedMaterial')
  var i2333 = i2331[13]
  var i2332 = []
  for(var i = 0; i < i2333.length; i += 2) {
  request.r(i2333[i + 0], i2333[i + 1], 2, i2332, '')
  }
  i2330.m_fontSharedMaterials = i2332
  request.r(i2331[14], i2331[15], 0, i2330, 'm_fontMaterial')
  var i2335 = i2331[16]
  var i2334 = []
  for(var i = 0; i < i2335.length; i += 2) {
  request.r(i2335[i + 0], i2335[i + 1], 2, i2334, '')
  }
  i2330.m_fontMaterials = i2334
  i2330.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2331[17], i2331[18], i2331[19], i2331[20])
  i2330.m_fontColor = new pc.Color(i2331[21], i2331[22], i2331[23], i2331[24])
  i2330.m_enableVertexGradient = !!i2331[25]
  i2330.m_colorMode = i2331[26]
  i2330.m_fontColorGradient = request.d('TMPro.VertexGradient', i2331[27], i2330.m_fontColorGradient)
  request.r(i2331[28], i2331[29], 0, i2330, 'm_fontColorGradientPreset')
  request.r(i2331[30], i2331[31], 0, i2330, 'm_spriteAsset')
  i2330.m_tintAllSprites = !!i2331[32]
  request.r(i2331[33], i2331[34], 0, i2330, 'm_StyleSheet')
  i2330.m_TextStyleHashCode = i2331[35]
  i2330.m_overrideHtmlColors = !!i2331[36]
  i2330.m_faceColor = UnityEngine.Color32.ConstructColor(i2331[37], i2331[38], i2331[39], i2331[40])
  i2330.m_fontSize = i2331[41]
  i2330.m_fontSizeBase = i2331[42]
  i2330.m_fontWeight = i2331[43]
  i2330.m_enableAutoSizing = !!i2331[44]
  i2330.m_fontSizeMin = i2331[45]
  i2330.m_fontSizeMax = i2331[46]
  i2330.m_fontStyle = i2331[47]
  i2330.m_HorizontalAlignment = i2331[48]
  i2330.m_VerticalAlignment = i2331[49]
  i2330.m_textAlignment = i2331[50]
  i2330.m_characterSpacing = i2331[51]
  i2330.m_wordSpacing = i2331[52]
  i2330.m_lineSpacing = i2331[53]
  i2330.m_lineSpacingMax = i2331[54]
  i2330.m_paragraphSpacing = i2331[55]
  i2330.m_charWidthMaxAdj = i2331[56]
  i2330.m_enableWordWrapping = !!i2331[57]
  i2330.m_wordWrappingRatios = i2331[58]
  i2330.m_overflowMode = i2331[59]
  request.r(i2331[60], i2331[61], 0, i2330, 'm_linkedTextComponent')
  request.r(i2331[62], i2331[63], 0, i2330, 'parentLinkedComponent')
  i2330.m_enableKerning = !!i2331[64]
  i2330.m_enableExtraPadding = !!i2331[65]
  i2330.checkPaddingRequired = !!i2331[66]
  i2330.m_isRichText = !!i2331[67]
  i2330.m_parseCtrlCharacters = !!i2331[68]
  i2330.m_isOrthographic = !!i2331[69]
  i2330.m_isCullingEnabled = !!i2331[70]
  i2330.m_horizontalMapping = i2331[71]
  i2330.m_verticalMapping = i2331[72]
  i2330.m_uvLineOffset = i2331[73]
  i2330.m_geometrySortingOrder = i2331[74]
  i2330.m_IsTextObjectScaleStatic = !!i2331[75]
  i2330.m_VertexBufferAutoSizeReduction = !!i2331[76]
  i2330.m_useMaxVisibleDescender = !!i2331[77]
  i2330.m_pageToDisplay = i2331[78]
  i2330.m_margin = new pc.Vec4( i2331[79], i2331[80], i2331[81], i2331[82] )
  i2330.m_isUsingLegacyAnimationComponent = !!i2331[83]
  i2330.m_isVolumetricText = !!i2331[84]
  request.r(i2331[85], i2331[86], 0, i2330, 'm_Material')
  i2330.m_Maskable = !!i2331[87]
  i2330.m_Color = new pc.Color(i2331[88], i2331[89], i2331[90], i2331[91])
  i2330.m_RaycastTarget = !!i2331[92]
  i2330.m_RaycastPadding = new pc.Vec4( i2331[93], i2331[94], i2331[95], i2331[96] )
  return i2330
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2336 = root || request.c( 'TMPro.VertexGradient' )
  var i2337 = data
  i2336.topLeft = new pc.Color(i2337[0], i2337[1], i2337[2], i2337[3])
  i2336.topRight = new pc.Color(i2337[4], i2337[5], i2337[6], i2337[7])
  i2336.bottomLeft = new pc.Color(i2337[8], i2337[9], i2337[10], i2337[11])
  i2336.bottomRight = new pc.Color(i2337[12], i2337[13], i2337[14], i2337[15])
  return i2336
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2338 = root || request.c( 'UnityEngine.UI.Image' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'm_Sprite')
  i2338.m_Type = i2339[2]
  i2338.m_PreserveAspect = !!i2339[3]
  i2338.m_FillCenter = !!i2339[4]
  i2338.m_FillMethod = i2339[5]
  i2338.m_FillAmount = i2339[6]
  i2338.m_FillClockwise = !!i2339[7]
  i2338.m_FillOrigin = i2339[8]
  i2338.m_UseSpriteMesh = !!i2339[9]
  i2338.m_PixelsPerUnitMultiplier = i2339[10]
  request.r(i2339[11], i2339[12], 0, i2338, 'm_Material')
  i2338.m_Maskable = !!i2339[13]
  i2338.m_Color = new pc.Color(i2339[14], i2339[15], i2339[16], i2339[17])
  i2338.m_RaycastTarget = !!i2339[18]
  i2338.m_RaycastPadding = new pc.Vec4( i2339[19], i2339[20], i2339[21], i2339[22] )
  return i2338
}

Deserializers["Fish"] = function (request, data, root) {
  var i2340 = root || request.c( 'Fish' )
  var i2341 = data
  i2340.fishType = request.d('FishType', i2341[0], i2340.fishType)
  request.r(i2341[1], i2341[2], 0, i2340, 'fishData')
  i2340.sensingRadius = i2341[3]
  i2340.moveSpeed = i2341[4]
  i2340.followTargetSpeed = i2341[5]
  i2340.rotationSpeed = i2341[6]
  request.r(i2341[7], i2341[8], 0, i2340, 'target')
  i2340.usingMapDataNumber = i2341[9]
  i2340.hooked = !!i2341[10]
  request.r(i2341[11], i2341[12], 0, i2340, 'rigid')
  i2340.dirToHook = new pc.Vec3( i2341[13], i2341[14], i2341[15] )
  request.r(i2341[16], i2341[17], 0, i2340, 'head')
  request.r(i2341[18], i2341[19], 0, i2340, 'mapData')
  request.r(i2341[20], i2341[21], 0, i2340, 'mousePoint')
  return i2340
}

Deserializers["FishType"] = function (request, data, root) {
  var i2342 = root || request.c( 'FishType' )
  var i2343 = data
  i2342.cost = i2343[0]
  i2342.tier = i2343[1]
  i2342.fishNumber = i2343[2]
  i2342.boundSize = new pc.Vec3( i2343[3], i2343[4], i2343[5] )
  return i2342
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i2344 = root || request.c( 'ChestMover' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'chest')
  return i2344
}

Deserializers["Chest"] = function (request, data, root) {
  var i2346 = root || request.c( 'Chest' )
  var i2347 = data
  request.r(i2347[0], i2347[1], 0, i2346, 'chestMover')
  i2346.chestTier = i2347[2]
  request.r(i2347[3], i2347[4], 0, i2346, 'line')
  i2346.chestPullDist = i2347[5]
  i2346.pullForce = i2347[6]
  i2346.fishType = request.d('FishType', i2347[7], i2346.fishType)
  request.r(i2347[8], i2347[9], 0, i2346, 'fishData')
  i2346.sensingRadius = i2347[10]
  i2346.moveSpeed = i2347[11]
  i2346.followTargetSpeed = i2347[12]
  i2346.rotationSpeed = i2347[13]
  request.r(i2347[14], i2347[15], 0, i2346, 'target')
  i2346.usingMapDataNumber = i2347[16]
  i2346.hooked = !!i2347[17]
  request.r(i2347[18], i2347[19], 0, i2346, 'rigid2')
  request.r(i2347[20], i2347[21], 0, i2346, 'rigid')
  i2346.dirToHook = new pc.Vec3( i2347[22], i2347[23], i2347[24] )
  request.r(i2347[25], i2347[26], 0, i2346, 'head')
  request.r(i2347[27], i2347[28], 0, i2346, 'mapData')
  request.r(i2347[29], i2347[30], 0, i2346, 'mousePoint')
  return i2346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2349 = data
  i2348.enabled = !!i2349[0]
  i2348.type = i2349[1]
  i2348.color = new pc.Color(i2349[2], i2349[3], i2349[4], i2349[5])
  i2348.cullingMask = i2349[6]
  i2348.intensity = i2349[7]
  i2348.range = i2349[8]
  i2348.spotAngle = i2349[9]
  i2348.shadows = i2349[10]
  i2348.shadowNormalBias = i2349[11]
  i2348.shadowBias = i2349[12]
  i2348.shadowStrength = i2349[13]
  i2348.shadowResolution = i2349[14]
  i2348.lightmapBakeType = i2349[15]
  i2348.renderMode = i2349[16]
  request.r(i2349[17], i2349[18], 0, i2348, 'cookie')
  i2348.cookieSize = i2349[19]
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2351 = data
  i2350.enabled = !!i2351[0]
  request.r(i2351[1], i2351[2], 0, i2350, 'sharedMaterial')
  var i2353 = i2351[3]
  var i2352 = []
  for(var i = 0; i < i2353.length; i += 2) {
  request.r(i2353[i + 0], i2353[i + 1], 2, i2352, '')
  }
  i2350.sharedMaterials = i2352
  i2350.receiveShadows = !!i2351[4]
  i2350.shadowCastingMode = i2351[5]
  i2350.sortingLayerID = i2351[6]
  i2350.sortingOrder = i2351[7]
  i2350.lightmapIndex = i2351[8]
  i2350.lightmapSceneIndex = i2351[9]
  i2350.lightmapScaleOffset = new pc.Vec4( i2351[10], i2351[11], i2351[12], i2351[13] )
  i2350.lightProbeUsage = i2351[14]
  i2350.reflectionProbeUsage = i2351[15]
  i2350.color = new pc.Color(i2351[16], i2351[17], i2351[18], i2351[19])
  request.r(i2351[20], i2351[21], 0, i2350, 'sprite')
  i2350.flipX = !!i2351[22]
  i2350.flipY = !!i2351[23]
  i2350.drawMode = i2351[24]
  i2350.size = new pc.Vec2( i2351[25], i2351[26] )
  i2350.tileMode = i2351[27]
  i2350.adaptiveModeThreshold = i2351[28]
  i2350.maskInteraction = i2351[29]
  i2350.spriteSortPoint = i2351[30]
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2355 = data
  i2354.name = i2355[0]
  i2354.atlasId = i2355[1]
  i2354.mipmapCount = i2355[2]
  i2354.hdr = !!i2355[3]
  i2354.size = i2355[4]
  i2354.anisoLevel = i2355[5]
  i2354.filterMode = i2355[6]
  i2354.wrapMode = i2355[7]
  var i2357 = i2355[8]
  var i2356 = []
  for(var i = 0; i < i2357.length; i += 4) {
    i2356.push( UnityEngine.Rect.MinMaxRect(i2357[i + 0], i2357[i + 1], i2357[i + 2], i2357[i + 3]) );
  }
  i2354.rects = i2356
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2361 = data
  i2360.name = i2361[0]
  i2360.index = i2361[1]
  i2360.startup = !!i2361[2]
  return i2360
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i2362 = root || request.c( 'LunaChallenge' )
  var i2363 = data
  i2362.challengeClear = !!i2363[0]
  request.r(i2363[1], i2363[2], 0, i2362, 'challengeObject')
  request.r(i2363[3], i2363[4], 0, i2362, 'challengeCount')
  request.r(i2363[5], i2363[6], 0, i2362, 'challengeClearObject')
  request.r(i2363[7], i2363[8], 0, i2362, 'challengeSlotObject')
  request.r(i2363[9], i2363[10], 0, i2362, 'tapToStartObject')
  request.r(i2363[11], i2363[12], 0, i2362, 'EndCard')
  request.r(i2363[13], i2363[14], 0, i2362, 'lunaDynamic')
  i2362.goalCount = i2363[15]
  i2362.currentCount = i2363[16]
  return i2362
}

Deserializers["LunaDynamic"] = function (request, data, root) {
  var i2364 = root || request.c( 'LunaDynamic' )
  var i2365 = data
  i2364.challengeCount = i2365[0]
  i2364.stageNum = i2365[1]
  i2364.goToStore = !!i2365[2]
  var i2367 = i2365[3]
  var i2366 = []
  for(var i = 0; i < i2367.length; i += 2) {
  request.r(i2367[i + 0], i2367[i + 1], 2, i2366, '')
  }
  i2364.stages = i2366
  return i2364
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i2370 = root || request.c( 'FishingRod' )
  var i2371 = data
  i2370.hookThrowForce = i2371[0]
  i2370.lineForce = i2371[1]
  i2370.maxPullingForce = i2371[2]
  i2370.minPullingForce = i2371[3]
  i2370.currentPullingForece = i2371[4]
  i2370.maxLine = i2371[5]
  i2370.pullingSpeed = i2371[6]
  i2370.playAdsPullCount = i2371[7]
  i2370.isStart = !!i2371[8]
  request.r(i2371[9], i2371[10], 0, i2370, 'hookRigid')
  request.r(i2371[11], i2371[12], 0, i2370, 'pivot')
  request.r(i2371[13], i2371[14], 0, i2370, 'touchToStartPanel')
  request.r(i2371[15], i2371[16], 0, i2370, 'rodAnimator')
  request.r(i2371[17], i2371[18], 0, i2370, 'fishingHook')
  request.r(i2371[19], i2371[20], 0, i2370, 'touchField')
  request.r(i2371[21], i2371[22], 0, i2370, 'upgradePanel')
  request.r(i2371[23], i2371[24], 0, i2370, 'upgradeButton')
  request.r(i2371[25], i2371[26], 0, i2370, 'depthText')
  request.r(i2371[27], i2371[28], 0, i2370, 'touchToPullPanel')
  request.r(i2371[29], i2371[30], 0, i2370, 'throwTarget1')
  request.r(i2371[31], i2371[32], 0, i2370, 'throwTarget2')
  request.r(i2371[33], i2371[34], 0, i2370, 'hookObject')
  request.r(i2371[35], i2371[36], 0, i2370, 'playerObject')
  request.r(i2371[37], i2371[38], 0, i2370, 'animationController')
  return i2370
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i2372 = root || request.c( 'FishingLogic' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'joint')
  i2372.biteBate = !!i2373[2]
  i2372.pulling = !!i2373[3]
  i2372.enablePulling = !!i2373[4]
  request.r(i2373[5], i2373[6], 0, i2372, 'rodAnimator')
  request.r(i2373[7], i2373[8], 0, i2372, 'animationController')
  request.r(i2373[9], i2373[10], 0, i2372, 'startButton')
  request.r(i2373[11], i2373[12], 0, i2372, 'catchSlider')
  request.r(i2373[13], i2373[14], 0, i2372, 'catchButton')
  request.r(i2373[15], i2373[16], 0, i2372, 'fishingRod')
  request.r(i2373[17], i2373[18], 0, i2372, 'arrow')
  request.r(i2373[19], i2373[20], 0, i2372, 'fishingRodSkinned')
  request.r(i2373[21], i2373[22], 0, i2372, 'bubbleParticle')
  request.r(i2373[23], i2373[24], 0, i2372, 'hookRigid')
  request.r(i2373[25], i2373[26], 0, i2372, 'hook')
  return i2372
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i2374 = root || request.c( 'Upgrades' )
  var i2375 = data
  i2374.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i2375[0], i2374.lineLengthUpgrade)
  i2374.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i2375[1], i2374.hookMaxUpgrade)
  i2374.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i2375[2], i2374.hookMoveSpeedUpgrade)
  request.r(i2375[3], i2375[4], 0, i2374, 'hook')
  request.r(i2375[5], i2375[6], 0, i2374, 'rod')
  request.r(i2375[7], i2375[8], 0, i2374, 'touchField')
  request.r(i2375[9], i2375[10], 0, i2374, 'upgradePanel')
  request.r(i2375[11], i2375[12], 0, i2374, 'upgradeTap')
  request.r(i2375[13], i2375[14], 0, i2374, 'closeTap')
  request.r(i2375[15], i2375[16], 0, i2374, 'tapToStartText')
  return i2374
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i2376 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i2377 = data
  i2376.currentLevel = i2377[0]
  i2376.maxLevel = i2377[1]
  i2376.upgradeValue = i2377[2]
  i2376.upgradeNeedyCost = i2377[3]
  i2376.upgradeCostIncreaseValue = i2377[4]
  i2376.upgradeCostIncreaseValueMultifly = i2377[5]
  request.r(i2377[6], i2377[7], 0, i2376, 'levelText')
  request.r(i2377[8], i2377[9], 0, i2376, 'needyCostText')
  request.r(i2377[10], i2377[11], 0, i2376, 'cover')
  request.r(i2377[12], i2377[13], 0, i2376, 'rod')
  return i2376
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i2378 = root || request.c( 'Upgrades+CountUpgrade' )
  var i2379 = data
  i2378.currentLevel = i2379[0]
  i2378.maxLevel = i2379[1]
  i2378.upgradeValue = i2379[2]
  i2378.upgradeNeedyCost = i2379[3]
  i2378.upgradeCostIncreaseValue = i2379[4]
  i2378.upgradeCostIncreaseValueMultifly = i2379[5]
  request.r(i2379[6], i2379[7], 0, i2378, 'levelText')
  request.r(i2379[8], i2379[9], 0, i2378, 'needyCostText')
  request.r(i2379[10], i2379[11], 0, i2378, 'cover')
  request.r(i2379[12], i2379[13], 0, i2378, 'hook')
  return i2378
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i2380 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i2381 = data
  i2380.currentLevel = i2381[0]
  i2380.maxLevel = i2381[1]
  i2380.upgradeValue = i2381[2]
  i2380.upgradeNeedyCost = i2381[3]
  i2380.upgradeCostIncreaseValue = i2381[4]
  i2380.upgradeCostIncreaseValueMultifly = i2381[5]
  request.r(i2381[6], i2381[7], 0, i2380, 'levelText')
  request.r(i2381[8], i2381[9], 0, i2380, 'needyCostText')
  request.r(i2381[10], i2381[11], 0, i2380, 'cover')
  request.r(i2381[12], i2381[13], 0, i2380, 'touchField')
  return i2380
}

Deserializers["FishPool"] = function (request, data, root) {
  var i2382 = root || request.c( 'FishPool' )
  var i2383 = data
  i2382.oneTierFishList = request.d('FishList', i2383[0], i2382.oneTierFishList)
  i2382.twoTierFishList = request.d('FishList', i2383[1], i2382.twoTierFishList)
  i2382.threeTierFishList = request.d('FishList', i2383[2], i2382.threeTierFishList)
  i2382.fourTierFishList = request.d('FishList', i2383[3], i2382.fourTierFishList)
  i2382.fiveTierFishList = request.d('FishList', i2383[4], i2382.fiveTierFishList)
  i2382.chestList_one = request.d('FishList', i2383[5], i2382.chestList_one)
  i2382.chestList_two = request.d('FishList', i2383[6], i2382.chestList_two)
  i2382.chestList_three = request.d('FishList', i2383[7], i2382.chestList_three)
  i2382.chestMover = request.d('FishList', i2383[8], i2382.chestMover)
  var i2385 = i2383[9]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 1, i2384, '')
  }
  i2382.generatedFishList = i2384
  request.r(i2383[10], i2383[11], 0, i2382, 'poolParent')
  return i2382
}

Deserializers["FishList"] = function (request, data, root) {
  var i2386 = root || request.c( 'FishList' )
  var i2387 = data
  var i2389 = i2387[0]
  var i2388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2389.length; i += 2) {
  request.r(i2389[i + 0], i2389[i + 1], 1, i2388, '')
  }
  i2386.fishList = i2388
  var i2391 = i2387[1]
  var i2390 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2391.length; i += 2) {
  request.r(i2391[i + 0], i2391[i + 1], 1, i2390, '')
  }
  i2386.spawnPoints = i2390
  return i2386
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i2398 = root || request.c( 'LowLineRenderer' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'line')
  request.r(i2399[2], i2399[3], 0, i2398, 'start')
  request.r(i2399[4], i2399[5], 0, i2398, 'end')
  return i2398
}

Deserializers["DataManager"] = function (request, data, root) {
  var i2400 = root || request.c( 'DataManager' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'setting')
  request.r(i2401[2], i2401[3], 0, i2400, 'soundSlider')
  request.r(i2401[4], i2401[5], 0, i2400, 'hapticSlider')
  i2400.gameDataFileName = i2401[6]
  i2400._gameData = request.d('GameData', i2401[7], i2400._gameData)
  request.r(i2401[8], i2401[9], 0, i2400, 'soundSliderHandleText')
  request.r(i2401[10], i2401[11], 0, i2400, 'hapticSliderHandleText')
  return i2400
}

Deserializers["GameData"] = function (request, data, root) {
  var i2402 = root || request.c( 'GameData' )
  var i2403 = data
  i2402.money = i2403[0]
  i2402.needleUpgrade = i2403[1]
  i2402.lineUpgrade = i2403[2]
  i2402.reelUpgrade = i2403[3]
  i2402.sound = i2403[4]
  i2402.haptic = i2403[5]
  return i2402
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2405 = data
  request.r(i2405[0], i2405[1], 0, i2404, 'm_FirstSelected')
  i2404.m_sendNavigationEvents = !!i2405[2]
  i2404.m_DragThreshold = i2405[3]
  return i2404
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2407 = data
  i2406.m_HorizontalAxis = i2407[0]
  i2406.m_VerticalAxis = i2407[1]
  i2406.m_SubmitButton = i2407[2]
  i2406.m_CancelButton = i2407[3]
  i2406.m_InputActionsPerSecond = i2407[4]
  i2406.m_RepeatDelay = i2407[5]
  i2406.m_ForceModuleActive = !!i2407[6]
  i2406.m_SendPointerHoverToParent = !!i2407[7]
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2409 = data
  i2408.enabled = !!i2409[0]
  i2408.planeDistance = i2409[1]
  i2408.referencePixelsPerUnit = i2409[2]
  i2408.isFallbackOverlay = !!i2409[3]
  i2408.renderMode = i2409[4]
  i2408.renderOrder = i2409[5]
  i2408.sortingLayerName = i2409[6]
  i2408.sortingOrder = i2409[7]
  i2408.scaleFactor = i2409[8]
  request.r(i2409[9], i2409[10], 0, i2408, 'worldCamera')
  i2408.overrideSorting = !!i2409[11]
  i2408.pixelPerfect = !!i2409[12]
  i2408.targetDisplay = i2409[13]
  i2408.overridePixelPerfect = !!i2409[14]
  return i2408
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2411 = data
  i2410.m_UiScaleMode = i2411[0]
  i2410.m_ReferencePixelsPerUnit = i2411[1]
  i2410.m_ScaleFactor = i2411[2]
  i2410.m_ReferenceResolution = new pc.Vec2( i2411[3], i2411[4] )
  i2410.m_ScreenMatchMode = i2411[5]
  i2410.m_MatchWidthOrHeight = i2411[6]
  i2410.m_PhysicalUnit = i2411[7]
  i2410.m_FallbackScreenDPI = i2411[8]
  i2410.m_DefaultSpriteDPI = i2411[9]
  i2410.m_DynamicPixelsPerUnit = i2411[10]
  i2410.m_PresetInfoIsWorld = !!i2411[11]
  return i2410
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2413 = data
  i2412.m_IgnoreReversedGraphics = !!i2413[0]
  i2412.m_BlockingObjects = i2413[1]
  i2412.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2413[2] )
  return i2412
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2414 = root || request.c( 'UIManager' )
  var i2415 = data
  request.r(i2415[0], i2415[1], 0, i2414, 'challengeTarget')
  request.r(i2415[2], i2415[3], 0, i2414, 'challengeText')
  request.r(i2415[4], i2415[5], 0, i2414, 'versionText')
  i2414.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2415[6] )
  i2414.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2415[7] )
  request.r(i2415[8], i2415[9], 0, i2414, 'uiCamera')
  var i2417 = i2415[10]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 2, i2416, '')
  }
  i2414.pictureModeObjects = i2416
  return i2414
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i2418 = root || request.c( 'FixedTouchField' )
  var i2419 = data
  i2418.TouchDist = new pc.Vec2( i2419[0], i2419[1] )
  i2418.PointerOld = new pc.Vec2( i2419[2], i2419[3] )
  i2418.Pressed = !!i2419[4]
  i2418.hookMoveSpeed = i2419[5]
  request.r(i2419[6], i2419[7], 0, i2418, 'hook')
  request.r(i2419[8], i2419[9], 0, i2418, 'logic')
  request.r(i2419[10], i2419[11], 0, i2418, 'joystick_Background')
  request.r(i2419[12], i2419[13], 0, i2418, 'joystick_Handle')
  request.r(i2419[14], i2419[15], 0, i2418, 'canvas')
  request.r(i2419[16], i2419[17], 0, i2418, 'newCamera')
  i2418.clampDist = i2419[18]
  return i2418
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Button' )
  var i2421 = data
  i2420.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2421[0], i2420.m_OnClick)
  i2420.m_Navigation = request.d('UnityEngine.UI.Navigation', i2421[1], i2420.m_Navigation)
  i2420.m_Transition = i2421[2]
  i2420.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2421[3], i2420.m_Colors)
  i2420.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2421[4], i2420.m_SpriteState)
  i2420.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2421[5], i2420.m_AnimationTriggers)
  i2420.m_Interactable = !!i2421[6]
  request.r(i2421[7], i2421[8], 0, i2420, 'm_TargetGraphic')
  return i2420
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2423 = data
  i2422.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2423[0], i2422.m_PersistentCalls)
  return i2422
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2425 = data
  var i2427 = i2425[0]
  var i2426 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2427.length; i += 1) {
    i2426.add(request.d('UnityEngine.Events.PersistentCall', i2427[i + 0]));
  }
  i2424.m_Calls = i2426
  return i2424
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2431 = data
  request.r(i2431[0], i2431[1], 0, i2430, 'm_Target')
  i2430.m_TargetAssemblyTypeName = i2431[2]
  i2430.m_MethodName = i2431[3]
  i2430.m_Mode = i2431[4]
  i2430.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2431[5], i2430.m_Arguments)
  i2430.m_CallState = i2431[6]
  return i2430
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'm_ObjectArgument')
  i2432.m_ObjectArgumentAssemblyTypeName = i2433[2]
  i2432.m_IntArgument = i2433[3]
  i2432.m_FloatArgument = i2433[4]
  i2432.m_StringArgument = i2433[5]
  i2432.m_BoolArgument = !!i2433[6]
  return i2432
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2435 = data
  i2434.m_Mode = i2435[0]
  i2434.m_WrapAround = !!i2435[1]
  request.r(i2435[2], i2435[3], 0, i2434, 'm_SelectOnUp')
  request.r(i2435[4], i2435[5], 0, i2434, 'm_SelectOnDown')
  request.r(i2435[6], i2435[7], 0, i2434, 'm_SelectOnLeft')
  request.r(i2435[8], i2435[9], 0, i2434, 'm_SelectOnRight')
  return i2434
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2437 = data
  i2436.m_NormalColor = new pc.Color(i2437[0], i2437[1], i2437[2], i2437[3])
  i2436.m_HighlightedColor = new pc.Color(i2437[4], i2437[5], i2437[6], i2437[7])
  i2436.m_PressedColor = new pc.Color(i2437[8], i2437[9], i2437[10], i2437[11])
  i2436.m_SelectedColor = new pc.Color(i2437[12], i2437[13], i2437[14], i2437[15])
  i2436.m_DisabledColor = new pc.Color(i2437[16], i2437[17], i2437[18], i2437[19])
  i2436.m_ColorMultiplier = i2437[20]
  i2436.m_FadeDuration = i2437[21]
  return i2436
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'm_HighlightedSprite')
  request.r(i2439[2], i2439[3], 0, i2438, 'm_PressedSprite')
  request.r(i2439[4], i2439[5], 0, i2438, 'm_SelectedSprite')
  request.r(i2439[6], i2439[7], 0, i2438, 'm_DisabledSprite')
  return i2438
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2441 = data
  i2440.m_NormalTrigger = i2441[0]
  i2440.m_HighlightedTrigger = i2441[1]
  i2440.m_PressedTrigger = i2441[2]
  i2440.m_SelectedTrigger = i2441[3]
  i2440.m_DisabledTrigger = i2441[4]
  return i2440
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2443 = data
  i2442.m_EffectColor = new pc.Color(i2443[0], i2443[1], i2443[2], i2443[3])
  i2442.m_EffectDistance = new pc.Vec2( i2443[4], i2443[5] )
  i2442.m_UseGraphicAlpha = !!i2443[6]
  return i2442
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2445 = data
  request.r(i2445[0], i2445[1], 0, i2444, 'm_FillRect')
  request.r(i2445[2], i2445[3], 0, i2444, 'm_HandleRect')
  i2444.m_Direction = i2445[4]
  i2444.m_MinValue = i2445[5]
  i2444.m_MaxValue = i2445[6]
  i2444.m_WholeNumbers = !!i2445[7]
  i2444.m_Value = i2445[8]
  i2444.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2445[9], i2444.m_OnValueChanged)
  i2444.m_Navigation = request.d('UnityEngine.UI.Navigation', i2445[10], i2444.m_Navigation)
  i2444.m_Transition = i2445[11]
  i2444.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2445[12], i2444.m_Colors)
  i2444.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2445[13], i2444.m_SpriteState)
  i2444.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2445[14], i2444.m_AnimationTriggers)
  i2444.m_Interactable = !!i2445[15]
  request.r(i2445[16], i2445[17], 0, i2444, 'm_TargetGraphic')
  return i2444
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2447 = data
  i2446.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2447[0], i2446.m_PersistentCalls)
  return i2446
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i2448 = root || request.c( 'EnviromentEditor' )
  var i2449 = data
  i2448.oceanSpriteValueMultifly = i2449[0]
  i2448.sunLightIntensity = i2449[1]
  i2448.minSunLightIntensity = i2449[2]
  i2448.challengeLightIntensity = i2449[3]
  i2448.depthMaskTransparentValue = i2449[4]
  i2448.ambientLightIntensity = i2449[5]
  request.r(i2449[6], i2449[7], 0, i2448, 'hook')
  var i2451 = i2449[8]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2448.Oceans = i2450
  request.r(i2449[9], i2449[10], 0, i2448, 'OceanSurface')
  request.r(i2449[11], i2449[12], 0, i2448, 'depthMask')
  request.r(i2449[13], i2449[14], 0, i2448, 'depthSprite')
  request.r(i2449[15], i2449[16], 0, i2448, 'depthMaskMat')
  request.r(i2449[17], i2449[18], 0, i2448, 'sunLights')
  request.r(i2449[19], i2449[20], 0, i2448, 'hookLight')
  request.r(i2449[21], i2449[22], 0, i2448, 'challengeLight')
  return i2448
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i2454 = root || request.c( 'ObjectMovement' )
  var i2455 = data
  i2454.moveX = i2455[0]
  i2454.moveSec = i2455[1]
  return i2454
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i2456 = root || request.c( 'OceanTrigger' )
  var i2457 = data
  request.r(i2457[0], i2457[1], 0, i2456, 'touchToPullButton')
  request.r(i2457[2], i2457[3], 0, i2456, 'waterSplashParticle')
  request.r(i2457[4], i2457[5], 0, i2456, 'bubbleParticle')
  request.r(i2457[6], i2457[7], 0, i2456, 'arrow')
  request.r(i2457[8], i2457[9], 0, i2456, 'rigid')
  request.r(i2457[10], i2457[11], 0, i2456, 'hook')
  request.r(i2457[12], i2457[13], 0, i2456, 'rod')
  return i2456
}

Deserializers["Flock"] = function (request, data, root) {
  var i2458 = root || request.c( 'Flock' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'flockUnitPrefab')
  i2458.flockSize = i2459[2]
  i2458.spawnBounds = new pc.Vec3( i2459[3], i2459[4], i2459[5] )
  i2458._minSpeed = i2459[6]
  i2458._maxSpeed = i2459[7]
  i2458._cohesionDistance = i2459[8]
  i2458._avoidanceDistance = i2459[9]
  i2458._aligementDistance = i2459[10]
  i2458._obstacleDistance = i2459[11]
  i2458._boundsDistance = i2459[12]
  i2458._cohesionWeight = i2459[13]
  i2458._avoidanceWeight = i2459[14]
  i2458._aligementWeight = i2459[15]
  i2458._boundsWeight = i2459[16]
  i2458._obstacleWeight = i2459[17]
  return i2458
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i2460 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'm_LookAt')
  request.r(i2461[2], i2461[3], 0, i2460, 'm_Follow')
  i2460.m_Lens = request.d('Cinemachine.LensSettings', i2461[4], i2460.m_Lens)
  i2460.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i2461[5], i2460.m_Transitions)
  var i2463 = i2461[6]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( i2463[i + 0] );
  }
  i2460.m_ExcludedPropertiesInInspector = i2462
  var i2465 = i2461[7]
  var i2464 = []
  for(var i = 0; i < i2465.length; i += 1) {
    i2464.push( i2465[i + 0] );
  }
  i2460.m_LockStageInInspector = i2464
  i2460.m_Priority = i2461[8]
  i2460.m_StandbyUpdate = i2461[9]
  i2460.m_LegacyBlendHint = i2461[10]
  request.r(i2461[11], i2461[12], 0, i2460, 'm_ComponentOwner')
  i2460.m_StreamingVersion = i2461[13]
  return i2460
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i2466 = root || request.c( 'Cinemachine.LensSettings' )
  var i2467 = data
  i2466.FieldOfView = i2467[0]
  i2466.OrthographicSize = i2467[1]
  i2466.NearClipPlane = i2467[2]
  i2466.FarClipPlane = i2467[3]
  i2466.Dutch = i2467[4]
  i2466.ModeOverride = i2467[5]
  i2466.LensShift = new pc.Vec2( i2467[6], i2467[7] )
  i2466.GateFit = i2467[8]
  i2466.m_SensorSize = new pc.Vec2( i2467[9], i2467[10] )
  return i2466
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i2468 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i2469 = data
  i2468.m_BlendHint = i2469[0]
  i2468.m_InheritPosition = !!i2469[1]
  i2468.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2469[2], i2468.m_OnCameraLive)
  return i2468
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i2470 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i2471 = data
  i2470.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2471[0], i2470.m_PersistentCalls)
  return i2470
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i2476 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i2477 = data
  return i2476
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i2478 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i2479 = data
  i2478.m_TrackedObjectOffset = new pc.Vec3( i2479[0], i2479[1], i2479[2] )
  i2478.m_LookaheadTime = i2479[3]
  i2478.m_LookaheadSmoothing = i2479[4]
  i2478.m_LookaheadIgnoreY = !!i2479[5]
  i2478.m_HorizontalDamping = i2479[6]
  i2478.m_VerticalDamping = i2479[7]
  i2478.m_ScreenX = i2479[8]
  i2478.m_ScreenY = i2479[9]
  i2478.m_DeadZoneWidth = i2479[10]
  i2478.m_DeadZoneHeight = i2479[11]
  i2478.m_SoftZoneWidth = i2479[12]
  i2478.m_SoftZoneHeight = i2479[13]
  i2478.m_BiasX = i2479[14]
  i2478.m_BiasY = i2479[15]
  i2478.m_CenterOnActivate = !!i2479[16]
  return i2478
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i2480 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i2481 = data
  i2480.m_BindingMode = i2481[0]
  i2480.m_FollowOffset = new pc.Vec3( i2481[1], i2481[2], i2481[3] )
  i2480.m_XDamping = i2481[4]
  i2480.m_YDamping = i2481[5]
  i2480.m_ZDamping = i2481[6]
  i2480.m_AngularDampingMode = i2481[7]
  i2480.m_PitchDamping = i2481[8]
  i2480.m_YawDamping = i2481[9]
  i2480.m_RollDamping = i2481[10]
  i2480.m_AngularDamping = i2481[11]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2483 = data
  i2482.enabled = !!i2483[0]
  i2482.aspect = i2483[1]
  i2482.orthographic = !!i2483[2]
  i2482.orthographicSize = i2483[3]
  i2482.backgroundColor = new pc.Color(i2483[4], i2483[5], i2483[6], i2483[7])
  i2482.nearClipPlane = i2483[8]
  i2482.farClipPlane = i2483[9]
  i2482.fieldOfView = i2483[10]
  i2482.depth = i2483[11]
  i2482.clearFlags = i2483[12]
  i2482.cullingMask = i2483[13]
  i2482.rect = i2483[14]
  request.r(i2483[15], i2483[16], 0, i2482, 'targetTexture')
  i2482.usePhysicalProperties = !!i2483[17]
  i2482.focalLength = i2483[18]
  i2482.sensorSize = new pc.Vec2( i2483[19], i2483[20] )
  i2482.lensShift = new pc.Vec2( i2483[21], i2483[22] )
  i2482.gateFit = i2483[23]
  return i2482
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i2484 = root || request.c( 'CameraMove' )
  var i2485 = data
  i2484.offset = new pc.Vec3( i2485[0], i2485[1], i2485[2] )
  request.r(i2485[3], i2485[4], 0, i2484, 'newCamera')
  request.r(i2485[5], i2485[6], 0, i2484, 'target')
  return i2484
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i2486 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i2487 = data
  i2486.m_ShowDebugText = !!i2487[0]
  i2486.m_ShowCameraFrustum = !!i2487[1]
  i2486.m_IgnoreTimeScale = !!i2487[2]
  request.r(i2487[3], i2487[4], 0, i2486, 'm_WorldUpOverride')
  i2486.m_UpdateMethod = i2487[5]
  i2486.m_BlendUpdateMethod = i2487[6]
  i2486.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i2487[7], i2486.m_DefaultBlend)
  request.r(i2487[8], i2487[9], 0, i2486, 'm_CustomBlends')
  i2486.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i2487[10], i2486.m_CameraCutEvent)
  i2486.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2487[11], i2486.m_CameraActivatedEvent)
  return i2486
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i2488 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i2489 = data
  i2488.m_Style = i2489[0]
  i2488.m_Time = i2489[1]
  i2488.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i2489[2] } )
  return i2488
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i2490 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i2491 = data
  i2490.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2491[0], i2490.m_PersistentCalls)
  return i2490
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i2492 = root || request.c( 'CinemachineController' )
  var i2493 = data
  request.r(i2493[0], i2493[1], 0, i2492, 'playerTrans')
  i2492.playerOffset = new pc.Vec3( i2493[2], i2493[3], i2493[4] )
  request.r(i2493[5], i2493[6], 0, i2492, 'hookTrans')
  i2492.hookOffset = new pc.Vec3( i2493[7], i2493[8], i2493[9] )
  request.r(i2493[10], i2493[11], 0, i2492, 'cvc_Hook')
  request.r(i2493[12], i2493[13], 0, i2492, 'cvc_Player')
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2495 = data
  i2494.enabled = !!i2495[0]
  i2494.isTrigger = !!i2495[1]
  request.r(i2495[2], i2495[3], 0, i2494, 'material')
  i2494.center = new pc.Vec3( i2495[4], i2495[5], i2495[6] )
  i2494.radius = i2495[7]
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2497 = data
  i2496.enabled = !!i2497[0]
  request.r(i2497[1], i2497[2], 0, i2496, 'sharedMaterial')
  var i2499 = i2497[3]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2496.sharedMaterials = i2498
  i2496.receiveShadows = !!i2497[4]
  i2496.shadowCastingMode = i2497[5]
  i2496.sortingLayerID = i2497[6]
  i2496.sortingOrder = i2497[7]
  i2496.lightmapIndex = i2497[8]
  i2496.lightmapSceneIndex = i2497[9]
  i2496.lightmapScaleOffset = new pc.Vec4( i2497[10], i2497[11], i2497[12], i2497[13] )
  i2496.lightProbeUsage = i2497[14]
  i2496.reflectionProbeUsage = i2497[15]
  var i2501 = i2497[16]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 3) {
    i2500.push( new pc.Vec3( i2501[i + 0], i2501[i + 1], i2501[i + 2] ) );
  }
  i2496.positions = i2500
  i2496.positionCount = i2497[17]
  i2496.time = i2497[18]
  i2496.startWidth = i2497[19]
  i2496.endWidth = i2497[20]
  i2496.widthMultiplier = i2497[21]
  i2496.autodestruct = !!i2497[22]
  i2496.emitting = !!i2497[23]
  i2496.numCornerVertices = i2497[24]
  i2496.numCapVertices = i2497[25]
  i2496.minVertexDistance = i2497[26]
  i2496.colorGradient = i2497[27] ? new pc.ColorGradient(i2497[27][0], i2497[27][1], i2497[27][2]) : null
  i2496.startColor = new pc.Color(i2497[28], i2497[29], i2497[30], i2497[31])
  i2496.endColor = new pc.Color(i2497[32], i2497[33], i2497[34], i2497[35])
  i2496.generateLightingData = !!i2497[36]
  i2496.textureMode = i2497[37]
  i2496.alignment = i2497[38]
  i2496.widthCurve = new pc.AnimationCurve( { keys_flow: i2497[39] } )
  return i2496
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i2502 = root || request.c( 'FishingHook' )
  var i2503 = data
  i2502.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i2503[0], i2502.OnMoneyChangeEvent)
  var i2505 = i2503[1]
  var i2504 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2505.length; i += 2) {
  request.r(i2505[i + 0], i2505[i + 1], 1, i2504, '')
  }
  i2502.hookedFish = i2504
  request.r(i2503[2], i2503[3], 0, i2502, 'sellParticle')
  request.r(i2503[4], i2503[5], 0, i2502, 'sellParticleParent')
  i2502.targetHookZoomOffset = i2503[6]
  i2502.minDrag = i2503[7]
  i2502.maxDrag = i2503[8]
  i2502.dragSpeed = i2503[9]
  i2502.fishingHookScaleUpgradeValue = i2503[10]
  i2502.fullHooked = !!i2503[11]
  i2502.inTheOcean = !!i2503[12]
  i2502.money = i2503[13]
  request.r(i2503[14], i2503[15], 0, i2502, 'rigid')
  request.r(i2503[16], i2503[17], 0, i2502, 'canvas')
  request.r(i2503[18], i2503[19], 0, i2502, 'moneyTextPrefab')
  request.r(i2503[20], i2503[21], 0, i2502, 'moneyTextSpawnTransform')
  i2502.moneyTextSpawnMinOffset = new pc.Vec2( i2503[22], i2503[23] )
  i2502.moneyTextSpawnMaxOffset = new pc.Vec2( i2503[24], i2503[25] )
  var i2507 = i2503[26]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 2) {
  request.r(i2507[i + 0], i2507[i + 1], 2, i2506, '')
  }
  i2502.hookedTransforms = i2506
  request.r(i2503[27], i2503[28], 0, i2502, 'fishingRodSkinned')
  request.r(i2503[29], i2503[30], 0, i2502, 'cinemachineCamera')
  request.r(i2503[31], i2503[32], 0, i2502, 'startPoint')
  request.r(i2503[33], i2503[34], 0, i2502, 'hook')
  request.r(i2503[35], i2503[36], 0, i2502, 'rod')
  request.r(i2503[37], i2503[38], 0, i2502, 'playerModel')
  request.r(i2503[39], i2503[40], 0, i2502, 'upgradeButton')
  request.r(i2503[41], i2503[42], 0, i2502, 'depthText')
  request.r(i2503[43], i2503[44], 0, i2502, 'touchField')
  request.r(i2503[45], i2503[46], 0, i2502, 'catchRingParticle')
  request.r(i2503[47], i2503[48], 0, i2502, 'fishSkinPrefab')
  request.r(i2503[49], i2503[50], 0, i2502, 'fishSkinPoint1')
  request.r(i2503[51], i2503[52], 0, i2502, 'fishSkinPoint2')
  request.r(i2503[53], i2503[54], 0, i2502, 'moneyText')
  request.r(i2503[55], i2503[56], 0, i2502, 'HookedCount')
  return i2502
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2508 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2509 = data
  i2508.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2509[0], i2508.m_PersistentCalls)
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2511 = data
  i2510.ambientIntensity = i2511[0]
  i2510.reflectionIntensity = i2511[1]
  i2510.ambientMode = i2511[2]
  i2510.ambientLight = new pc.Color(i2511[3], i2511[4], i2511[5], i2511[6])
  i2510.ambientSkyColor = new pc.Color(i2511[7], i2511[8], i2511[9], i2511[10])
  i2510.ambientGroundColor = new pc.Color(i2511[11], i2511[12], i2511[13], i2511[14])
  i2510.ambientEquatorColor = new pc.Color(i2511[15], i2511[16], i2511[17], i2511[18])
  i2510.fogColor = new pc.Color(i2511[19], i2511[20], i2511[21], i2511[22])
  i2510.fogEndDistance = i2511[23]
  i2510.fogStartDistance = i2511[24]
  i2510.fogDensity = i2511[25]
  i2510.fog = !!i2511[26]
  request.r(i2511[27], i2511[28], 0, i2510, 'skybox')
  i2510.fogMode = i2511[29]
  var i2513 = i2511[30]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2513[i + 0]) );
  }
  i2510.lightmaps = i2512
  i2510.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2511[31], i2510.lightProbes)
  i2510.lightmapsMode = i2511[32]
  i2510.mixedBakeMode = i2511[33]
  i2510.environmentLightingMode = i2511[34]
  i2510.ambientProbe = new pc.SphericalHarmonicsL2(i2511[35])
  i2510.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2511[36])
  i2510.useReferenceAmbientProbe = !!i2511[37]
  request.r(i2511[38], i2511[39], 0, i2510, 'customReflection')
  request.r(i2511[40], i2511[41], 0, i2510, 'defaultReflection')
  i2510.defaultReflectionMode = i2511[42]
  i2510.defaultReflectionResolution = i2511[43]
  i2510.sunLightObjectId = i2511[44]
  i2510.pixelLightCount = i2511[45]
  i2510.defaultReflectionHDR = !!i2511[46]
  i2510.hasLightDataAsset = !!i2511[47]
  i2510.hasManualGenerate = !!i2511[48]
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'lightmapColor')
  request.r(i2517[2], i2517[3], 0, i2516, 'lightmapDirection')
  return i2516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2518 = root || new UnityEngine.LightProbes()
  var i2519 = data
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i2524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i2525 = data
  i2524.name = i2525[0]
  i2524.bounciness = i2525[1]
  i2524.dynamicFriction = i2525[2]
  i2524.staticFriction = i2525[3]
  i2524.frictionCombine = i2525[4]
  i2524.bounceCombine = i2525[5]
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2527 = data
  var i2529 = i2527[0]
  var i2528 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.add(i2529[i + 0]);
  }
  i2526.invalidShaderVariants = i2528
  i2526.name = i2527[1]
  i2526.guid = i2527[2]
  var i2531 = i2527[3]
  var i2530 = []
  for(var i = 0; i < i2531.length; i += 1) {
    i2530.push( i2531[i + 0] );
  }
  i2526.shaderDefinedKeywords = i2530
  var i2533 = i2527[4]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2533[i + 0]) );
  }
  i2526.passes = i2532
  var i2535 = i2527[5]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2535[i + 0]) );
  }
  i2526.usePasses = i2534
  var i2537 = i2527[6]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2537[i + 0]) );
  }
  i2526.defaultParameterValues = i2536
  request.r(i2527[7], i2527[8], 0, i2526, 'unityFallbackShader')
  i2526.readDepth = !!i2527[9]
  i2526.isCreatedByShaderGraph = !!i2527[10]
  i2526.usedBatchUniforms = i2527[11]
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2542 = root || new pc.UnityShaderPass()
  var i2543 = data
  i2542.id = i2543[0]
  i2542.subShaderIndex = i2543[1]
  i2542.name = i2543[2]
  i2542.passType = i2543[3]
  i2542.usePass = !!i2543[4]
  i2542.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[5], i2542.zTest)
  i2542.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[6], i2542.zWrite)
  i2542.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[7], i2542.culling)
  i2542.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2543[8], i2542.blending)
  i2542.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2543[9], i2542.alphaBlending)
  i2542.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[10], i2542.colorWriteMask)
  i2542.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[11], i2542.offsetUnits)
  i2542.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[12], i2542.offsetFactor)
  i2542.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[13], i2542.stencilRef)
  i2542.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[14], i2542.stencilReadMask)
  i2542.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2543[15], i2542.stencilWriteMask)
  i2542.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2543[16], i2542.stencilOp)
  i2542.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2543[17], i2542.stencilOpFront)
  i2542.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2543[18], i2542.stencilOpBack)
  var i2545 = i2543[19]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2545[i + 0]) );
  }
  i2542.tags = i2544
  var i2547 = i2543[20]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 1) {
    i2546.push( i2547[i + 0] );
  }
  i2542.passDefinedKeywords = i2546
  var i2549 = i2543[21]
  var i2548 = []
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2549[i + 0]) );
  }
  i2542.passDefinedKeywordGroups = i2548
  var i2551 = i2543[22]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2551[i + 0]) );
  }
  i2542.variants = i2550
  var i2553 = i2543[23]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2553[i + 0]) );
  }
  i2542.excludedVariants = i2552
  i2542.hasDepthReader = !!i2543[24]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2555 = data
  i2554.val = i2555[0]
  i2554.name = i2555[1]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2557 = data
  i2556.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2557[0], i2556.src)
  i2556.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2557[1], i2556.dst)
  i2556.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2557[2], i2556.op)
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2559 = data
  i2558.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2559[0], i2558.pass)
  i2558.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2559[1], i2558.fail)
  i2558.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2559[2], i2558.zFail)
  i2558.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2559[3], i2558.comp)
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2563 = data
  i2562.name = i2563[0]
  i2562.value = i2563[1]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2567 = data
  var i2569 = i2567[0]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( i2569[i + 0] );
  }
  i2566.keywords = i2568
  i2566.hasDiscard = !!i2567[1]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2573 = data
  i2572.passId = i2573[0]
  i2572.subShaderIndex = i2573[1]
  var i2575 = i2573[2]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( i2575[i + 0] );
  }
  i2572.keywords = i2574
  i2572.vertexProgram = i2573[3]
  i2572.fragmentProgram = i2573[4]
  i2572.readDepth = !!i2573[5]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'shader')
  i2578.pass = i2579[2]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2583 = data
  i2582.name = i2583[0]
  i2582.type = i2583[1]
  i2582.value = new pc.Vec4( i2583[2], i2583[3], i2583[4], i2583[5] )
  i2582.textureValue = i2583[6]
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2585 = data
  i2584.name = i2585[0]
  request.r(i2585[1], i2585[2], 0, i2584, 'texture')
  i2584.aabb = i2585[3]
  i2584.vertices = i2585[4]
  i2584.triangles = i2585[5]
  i2584.textureRect = UnityEngine.Rect.MinMaxRect(i2585[6], i2585[7], i2585[8], i2585[9])
  i2584.packedRect = UnityEngine.Rect.MinMaxRect(i2585[10], i2585[11], i2585[12], i2585[13])
  i2584.border = new pc.Vec4( i2585[14], i2585[15], i2585[16], i2585[17] )
  i2584.transparency = i2585[18]
  i2584.bounds = i2585[19]
  i2584.pixelsPerUnit = i2585[20]
  i2584.textureWidth = i2585[21]
  i2584.textureHeight = i2585[22]
  i2584.nativeSize = new pc.Vec2( i2585[23], i2585[24] )
  i2584.pivot = new pc.Vec2( i2585[25], i2585[26] )
  i2584.textureRectOffset = new pc.Vec2( i2585[27], i2585[28] )
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.wrapMode = i2587[1]
  i2586.isLooping = !!i2587[2]
  i2586.length = i2587[3]
  var i2589 = i2587[4]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2589[i + 0]) );
  }
  i2586.curves = i2588
  var i2591 = i2587[5]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2591[i + 0]) );
  }
  i2586.events = i2590
  i2586.halfPrecision = !!i2587[6]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2595 = data
  i2594.path = i2595[0]
  i2594.componentType = i2595[1]
  i2594.property = i2595[2]
  i2594.keys = i2595[3]
  var i2597 = i2595[4]
  var i2596 = []
  for(var i = 0; i < i2597.length; i += 1) {
    i2596.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2597[i + 0]) );
  }
  i2594.objectReferenceKeys = i2596
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2601 = data
  i2600.time = i2601[0]
  request.r(i2601[1], i2601[2], 0, i2600, 'value')
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2605 = data
  i2604.functionName = i2605[0]
  i2604.floatParameter = i2605[1]
  i2604.intParameter = i2605[2]
  i2604.stringParameter = i2605[3]
  request.r(i2605[4], i2605[5], 0, i2604, 'objectReferenceParameter')
  i2604.time = i2605[6]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2607 = data
  i2606.name = i2607[0]
  var i2609 = i2607[1]
  var i2608 = []
  for(var i = 0; i < i2609.length; i += 1) {
    i2608.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2609[i + 0]) );
  }
  i2606.states = i2608
  var i2611 = i2607[2]
  var i2610 = []
  for(var i = 0; i < i2611.length; i += 1) {
    i2610.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2611[i + 0]) );
  }
  i2606.layers = i2610
  var i2613 = i2607[3]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2613[i + 0]) );
  }
  i2606.parameters = i2612
  i2606.animationClips = i2607[4]
  i2606.HasSubStateMachines = !!i2607[5]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2617 = data
  i2616.cycleOffset = i2617[0]
  i2616.cycleOffsetParameter = i2617[1]
  i2616.cycleOffsetParameterActive = !!i2617[2]
  i2616.mirror = !!i2617[3]
  i2616.mirrorParameter = i2617[4]
  i2616.mirrorParameterActive = !!i2617[5]
  i2616.motionId = i2617[6]
  i2616.nameHash = i2617[7]
  i2616.fullPathHash = i2617[8]
  i2616.speed = i2617[9]
  i2616.speedParameter = i2617[10]
  i2616.speedParameterActive = !!i2617[11]
  i2616.tag = i2617[12]
  i2616.name = i2617[13]
  i2616.layer = i2617[14]
  i2616.writeDefaultValues = !!i2617[15]
  var i2619 = i2617[16]
  var i2618 = []
  for(var i = 0; i < i2619.length; i += 1) {
    i2618.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2619[i + 0]) );
  }
  i2616.transitions = i2618
  var i2621 = i2617[17]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 2) {
  request.r(i2621[i + 0], i2621[i + 1], 2, i2620, '')
  }
  i2616.behaviours = i2620
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2625 = data
  i2624.fullPath = i2625[0]
  i2624.canTransitionToSelf = !!i2625[1]
  i2624.duration = i2625[2]
  i2624.exitTime = i2625[3]
  i2624.hasExitTime = !!i2625[4]
  i2624.hasFixedDuration = !!i2625[5]
  i2624.interruptionSource = i2625[6]
  i2624.offset = i2625[7]
  i2624.orderedInterruption = !!i2625[8]
  i2624.destinationStateNameHash = i2625[9]
  i2624.destinationStateMachineId = i2625[10]
  i2624.isExit = !!i2625[11]
  i2624.mute = !!i2625[12]
  i2624.solo = !!i2625[13]
  var i2627 = i2625[14]
  var i2626 = []
  for(var i = 0; i < i2627.length; i += 1) {
    i2626.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2627[i + 0]) );
  }
  i2624.conditions = i2626
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2631 = data
  i2630.mode = i2631[0]
  i2630.parameter = i2631[1]
  i2630.threshold = i2631[2]
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2637 = data
  i2636.blendingMode = i2637[0]
  i2636.defaultWeight = i2637[1]
  i2636.name = i2637[2]
  i2636.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2637[3], i2636.stateMachine)
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2639 = data
  i2638.id = i2639[0]
  i2638.defaultStateNameHash = i2639[1]
  var i2641 = i2639[2]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2641[i + 0]) );
  }
  i2638.entryTransitions = i2640
  var i2643 = i2639[3]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2643[i + 0]) );
  }
  i2638.anyStateTransitions = i2642
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2647 = data
  i2646.destinationStateNameHash = i2647[0]
  i2646.destinationStateMachineId = i2647[1]
  i2646.isExit = !!i2647[2]
  i2646.mute = !!i2647[3]
  i2646.solo = !!i2647[4]
  var i2649 = i2647[5]
  var i2648 = []
  for(var i = 0; i < i2649.length; i += 1) {
    i2648.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2649[i + 0]) );
  }
  i2646.conditions = i2648
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2653 = data
  i2652.defaultBool = !!i2653[0]
  i2652.defaultFloat = i2653[1]
  i2652.defaultInt = i2653[2]
  i2652.name = i2653[3]
  i2652.nameHash = i2653[4]
  i2652.type = i2653[5]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2655 = data
  i2654.name = i2655[0]
  i2654.bytes64 = i2655[1]
  i2654.data = i2655[2]
  return i2654
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2656 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2657 = data
  i2656.hashCode = i2657[0]
  request.r(i2657[1], i2657[2], 0, i2656, 'material')
  i2656.materialHashCode = i2657[3]
  request.r(i2657[4], i2657[5], 0, i2656, 'atlas')
  i2656.normalStyle = i2657[6]
  i2656.normalSpacingOffset = i2657[7]
  i2656.boldStyle = i2657[8]
  i2656.boldSpacing = i2657[9]
  i2656.italicStyle = i2657[10]
  i2656.tabSize = i2657[11]
  i2656.m_Version = i2657[12]
  i2656.m_SourceFontFileGUID = i2657[13]
  request.r(i2657[14], i2657[15], 0, i2656, 'm_SourceFontFile_EditorRef')
  request.r(i2657[16], i2657[17], 0, i2656, 'm_SourceFontFile')
  i2656.m_AtlasPopulationMode = i2657[18]
  i2656.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2657[19], i2656.m_FaceInfo)
  var i2659 = i2657[20]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('UnityEngine.TextCore.Glyph', i2659[i + 0]));
  }
  i2656.m_GlyphTable = i2658
  var i2661 = i2657[21]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.add(request.d('TMPro.TMP_Character', i2661[i + 0]));
  }
  i2656.m_CharacterTable = i2660
  var i2663 = i2657[22]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 2) {
  request.r(i2663[i + 0], i2663[i + 1], 2, i2662, '')
  }
  i2656.m_AtlasTextures = i2662
  i2656.m_AtlasTextureIndex = i2657[23]
  i2656.m_IsMultiAtlasTexturesEnabled = !!i2657[24]
  i2656.m_ClearDynamicDataOnBuild = !!i2657[25]
  var i2665 = i2657[26]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.add(request.d('UnityEngine.TextCore.GlyphRect', i2665[i + 0]));
  }
  i2656.m_UsedGlyphRects = i2664
  var i2667 = i2657[27]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2667.length; i += 1) {
    i2666.add(request.d('UnityEngine.TextCore.GlyphRect', i2667[i + 0]));
  }
  i2656.m_FreeGlyphRects = i2666
  i2656.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2657[28], i2656.m_fontInfo)
  i2656.m_AtlasWidth = i2657[29]
  i2656.m_AtlasHeight = i2657[30]
  i2656.m_AtlasPadding = i2657[31]
  i2656.m_AtlasRenderMode = i2657[32]
  var i2669 = i2657[33]
  var i2668 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.add(request.d('TMPro.TMP_Glyph', i2669[i + 0]));
  }
  i2656.m_glyphInfoList = i2668
  i2656.m_KerningTable = request.d('TMPro.KerningTable', i2657[34], i2656.m_KerningTable)
  i2656.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2657[35], i2656.m_FontFeatureTable)
  var i2671 = i2657[36]
  var i2670 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2671.length; i += 2) {
  request.r(i2671[i + 0], i2671[i + 1], 1, i2670, '')
  }
  i2656.fallbackFontAssets = i2670
  var i2673 = i2657[37]
  var i2672 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2673.length; i += 2) {
  request.r(i2673[i + 0], i2673[i + 1], 1, i2672, '')
  }
  i2656.m_FallbackFontAssetTable = i2672
  i2656.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2657[38], i2656.m_CreationSettings)
  var i2675 = i2657[39]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('TMPro.TMP_FontWeightPair', i2675[i + 0]) );
  }
  i2656.m_FontWeightTable = i2674
  var i2677 = i2657[40]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('TMPro.TMP_FontWeightPair', i2677[i + 0]) );
  }
  i2656.fontWeights = i2676
  return i2656
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2679 = data
  i2678.m_FaceIndex = i2679[0]
  i2678.m_FamilyName = i2679[1]
  i2678.m_StyleName = i2679[2]
  i2678.m_PointSize = i2679[3]
  i2678.m_Scale = i2679[4]
  i2678.m_LineHeight = i2679[5]
  i2678.m_AscentLine = i2679[6]
  i2678.m_CapLine = i2679[7]
  i2678.m_MeanLine = i2679[8]
  i2678.m_Baseline = i2679[9]
  i2678.m_DescentLine = i2679[10]
  i2678.m_SuperscriptOffset = i2679[11]
  i2678.m_SuperscriptSize = i2679[12]
  i2678.m_SubscriptOffset = i2679[13]
  i2678.m_SubscriptSize = i2679[14]
  i2678.m_UnderlineOffset = i2679[15]
  i2678.m_UnderlineThickness = i2679[16]
  i2678.m_StrikethroughOffset = i2679[17]
  i2678.m_StrikethroughThickness = i2679[18]
  i2678.m_TabWidth = i2679[19]
  return i2678
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2682 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2683 = data
  i2682.m_Index = i2683[0]
  i2682.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2683[1], i2682.m_Metrics)
  i2682.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2683[2], i2682.m_GlyphRect)
  i2682.m_Scale = i2683[3]
  i2682.m_AtlasIndex = i2683[4]
  return i2682
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2684 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2685 = data
  i2684.m_Width = i2685[0]
  i2684.m_Height = i2685[1]
  i2684.m_HorizontalBearingX = i2685[2]
  i2684.m_HorizontalBearingY = i2685[3]
  i2684.m_HorizontalAdvance = i2685[4]
  return i2684
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2687 = data
  i2686.m_X = i2687[0]
  i2686.m_Y = i2687[1]
  i2686.m_Width = i2687[2]
  i2686.m_Height = i2687[3]
  return i2686
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.TMP_Character' )
  var i2691 = data
  i2690.m_ElementType = i2691[0]
  i2690.m_Unicode = i2691[1]
  i2690.m_GlyphIndex = i2691[2]
  i2690.m_Scale = i2691[3]
  return i2690
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2697 = data
  i2696.Name = i2697[0]
  i2696.PointSize = i2697[1]
  i2696.Scale = i2697[2]
  i2696.CharacterCount = i2697[3]
  i2696.LineHeight = i2697[4]
  i2696.Baseline = i2697[5]
  i2696.Ascender = i2697[6]
  i2696.CapHeight = i2697[7]
  i2696.Descender = i2697[8]
  i2696.CenterLine = i2697[9]
  i2696.SuperscriptOffset = i2697[10]
  i2696.SubscriptOffset = i2697[11]
  i2696.SubSize = i2697[12]
  i2696.Underline = i2697[13]
  i2696.UnderlineThickness = i2697[14]
  i2696.strikethrough = i2697[15]
  i2696.strikethroughThickness = i2697[16]
  i2696.TabWidth = i2697[17]
  i2696.Padding = i2697[18]
  i2696.AtlasWidth = i2697[19]
  i2696.AtlasHeight = i2697[20]
  return i2696
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2700 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2701 = data
  i2700.id = i2701[0]
  i2700.x = i2701[1]
  i2700.y = i2701[2]
  i2700.width = i2701[3]
  i2700.height = i2701[4]
  i2700.xOffset = i2701[5]
  i2700.yOffset = i2701[6]
  i2700.xAdvance = i2701[7]
  i2700.scale = i2701[8]
  return i2700
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.KerningTable' )
  var i2703 = data
  var i2705 = i2703[0]
  var i2704 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.add(request.d('TMPro.KerningPair', i2705[i + 0]));
  }
  i2702.kerningPairs = i2704
  return i2702
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2708 = root || request.c( 'TMPro.KerningPair' )
  var i2709 = data
  i2708.xOffset = i2709[0]
  i2708.m_FirstGlyph = i2709[1]
  i2708.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2709[2], i2708.m_FirstGlyphAdjustments)
  i2708.m_SecondGlyph = i2709[3]
  i2708.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2709[4], i2708.m_SecondGlyphAdjustments)
  i2708.m_IgnoreSpacingAdjustments = !!i2709[5]
  return i2708
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2711 = data
  var i2713 = i2711[0]
  var i2712 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2713[i + 0]));
  }
  i2710.m_GlyphPairAdjustmentRecords = i2712
  return i2710
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2717 = data
  i2716.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2717[0], i2716.m_FirstAdjustmentRecord)
  i2716.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2717[1], i2716.m_SecondAdjustmentRecord)
  i2716.m_FeatureLookupFlags = i2717[2]
  return i2716
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2720 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2721 = data
  i2720.sourceFontFileName = i2721[0]
  i2720.sourceFontFileGUID = i2721[1]
  i2720.pointSizeSamplingMode = i2721[2]
  i2720.pointSize = i2721[3]
  i2720.padding = i2721[4]
  i2720.packingMode = i2721[5]
  i2720.atlasWidth = i2721[6]
  i2720.atlasHeight = i2721[7]
  i2720.characterSetSelectionMode = i2721[8]
  i2720.characterSequence = i2721[9]
  i2720.referencedFontAssetGUID = i2721[10]
  i2720.referencedTextAssetGUID = i2721[11]
  i2720.fontStyle = i2721[12]
  i2720.fontStyleModifier = i2721[13]
  i2720.renderMode = i2721[14]
  i2720.includeFontFeatures = !!i2721[15]
  return i2720
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2724 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2725 = data
  request.r(i2725[0], i2725[1], 0, i2724, 'regularTypeface')
  request.r(i2725[2], i2725[3], 0, i2724, 'italicTypeface')
  return i2724
}

Deserializers["MapData"] = function (request, data, root) {
  var i2726 = root || request.c( 'MapData' )
  var i2727 = data
  var i2729 = i2727[0]
  var i2728 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i2729.length; i += 1) {
    i2728.add(request.d('MapData+mapData', i2729[i + 0]));
  }
  i2726.mapDataList = i2728
  return i2726
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i2732 = root || request.c( 'MapData+mapData' )
  var i2733 = data
  i2732.tier = i2733[0]
  i2732.minMapSize = new pc.Vec3( i2733[1], i2733[2], i2733[3] )
  i2732.maxMapSize = new pc.Vec3( i2733[4], i2733[5], i2733[6] )
  return i2732
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.TMP_Settings' )
  var i2735 = data
  i2734.m_enableWordWrapping = !!i2735[0]
  i2734.m_enableKerning = !!i2735[1]
  i2734.m_enableExtraPadding = !!i2735[2]
  i2734.m_enableTintAllSprites = !!i2735[3]
  i2734.m_enableParseEscapeCharacters = !!i2735[4]
  i2734.m_EnableRaycastTarget = !!i2735[5]
  i2734.m_GetFontFeaturesAtRuntime = !!i2735[6]
  i2734.m_missingGlyphCharacter = i2735[7]
  i2734.m_warningsDisabled = !!i2735[8]
  request.r(i2735[9], i2735[10], 0, i2734, 'm_defaultFontAsset')
  i2734.m_defaultFontAssetPath = i2735[11]
  i2734.m_defaultFontSize = i2735[12]
  i2734.m_defaultAutoSizeMinRatio = i2735[13]
  i2734.m_defaultAutoSizeMaxRatio = i2735[14]
  i2734.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2735[15], i2735[16] )
  i2734.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2735[17], i2735[18] )
  i2734.m_autoSizeTextContainer = !!i2735[19]
  i2734.m_IsTextObjectScaleStatic = !!i2735[20]
  var i2737 = i2735[21]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 1, i2736, '')
  }
  i2734.m_fallbackFontAssets = i2736
  i2734.m_matchMaterialPreset = !!i2735[22]
  request.r(i2735[23], i2735[24], 0, i2734, 'm_defaultSpriteAsset')
  i2734.m_defaultSpriteAssetPath = i2735[25]
  i2734.m_enableEmojiSupport = !!i2735[26]
  i2734.m_MissingCharacterSpriteUnicode = i2735[27]
  i2734.m_defaultColorGradientPresetsPath = i2735[28]
  request.r(i2735[29], i2735[30], 0, i2734, 'm_defaultStyleSheet')
  i2734.m_StyleSheetsResourcePath = i2735[31]
  request.r(i2735[32], i2735[33], 0, i2734, 'm_leadingCharacters')
  request.r(i2735[34], i2735[35], 0, i2734, 'm_followingCharacters')
  i2734.m_UseModernHangulLineBreakingRules = !!i2735[36]
  return i2734
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2738 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2739 = data
  i2738.hashCode = i2739[0]
  request.r(i2739[1], i2739[2], 0, i2738, 'material')
  i2738.materialHashCode = i2739[3]
  request.r(i2739[4], i2739[5], 0, i2738, 'spriteSheet')
  var i2741 = i2739[6]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('TMPro.TMP_Sprite', i2741[i + 0]));
  }
  i2738.spriteInfoList = i2740
  var i2743 = i2739[7]
  var i2742 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2743.length; i += 2) {
  request.r(i2743[i + 0], i2743[i + 1], 1, i2742, '')
  }
  i2738.fallbackSpriteAssets = i2742
  i2738.m_Version = i2739[8]
  i2738.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2739[9], i2738.m_FaceInfo)
  var i2745 = i2739[10]
  var i2744 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2745.length; i += 1) {
    i2744.add(request.d('TMPro.TMP_SpriteCharacter', i2745[i + 0]));
  }
  i2738.m_SpriteCharacterTable = i2744
  var i2747 = i2739[11]
  var i2746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.add(request.d('TMPro.TMP_SpriteGlyph', i2747[i + 0]));
  }
  i2738.m_SpriteGlyphTable = i2746
  return i2738
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2751 = data
  i2750.name = i2751[0]
  i2750.hashCode = i2751[1]
  i2750.unicode = i2751[2]
  i2750.pivot = new pc.Vec2( i2751[3], i2751[4] )
  request.r(i2751[5], i2751[6], 0, i2750, 'sprite')
  i2750.id = i2751[7]
  i2750.x = i2751[8]
  i2750.y = i2751[9]
  i2750.width = i2751[10]
  i2750.height = i2751[11]
  i2750.xOffset = i2751[12]
  i2750.yOffset = i2751[13]
  i2750.xAdvance = i2751[14]
  i2750.scale = i2751[15]
  return i2750
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2757 = data
  i2756.m_Name = i2757[0]
  i2756.m_HashCode = i2757[1]
  i2756.m_ElementType = i2757[2]
  i2756.m_Unicode = i2757[3]
  i2756.m_GlyphIndex = i2757[4]
  i2756.m_Scale = i2757[5]
  return i2756
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2760 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2761 = data
  request.r(i2761[0], i2761[1], 0, i2760, 'sprite')
  i2760.m_Index = i2761[2]
  i2760.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2761[3], i2760.m_Metrics)
  i2760.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2761[4], i2760.m_GlyphRect)
  i2760.m_Scale = i2761[5]
  i2760.m_AtlasIndex = i2761[6]
  return i2760
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2763 = data
  var i2765 = i2763[0]
  var i2764 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2765.length; i += 1) {
    i2764.add(request.d('TMPro.TMP_Style', i2765[i + 0]));
  }
  i2762.m_StyleList = i2764
  return i2762
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2768 = root || request.c( 'TMPro.TMP_Style' )
  var i2769 = data
  i2768.m_Name = i2769[0]
  i2768.m_HashCode = i2769[1]
  i2768.m_OpeningDefinition = i2769[2]
  i2768.m_ClosingDefinition = i2769[3]
  i2768.m_OpeningTagArray = i2769[4]
  i2768.m_ClosingTagArray = i2769[5]
  i2768.m_OpeningTagUnicodeArray = i2769[6]
  i2768.m_ClosingTagUnicodeArray = i2769[7]
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2771 = data
  var i2773 = i2771[0]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2773[i + 0]) );
  }
  i2770.files = i2772
  i2770.componentToPrefabIds = i2771[1]
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2777 = data
  i2776.path = i2777[0]
  request.r(i2777[1], i2777[2], 0, i2776, 'unityObject')
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2779 = data
  var i2781 = i2779[0]
  var i2780 = []
  for(var i = 0; i < i2781.length; i += 1) {
    i2780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2781[i + 0]) );
  }
  i2778.scriptsExecutionOrder = i2780
  var i2783 = i2779[1]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2783[i + 0]) );
  }
  i2778.sortingLayers = i2782
  var i2785 = i2779[2]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2785[i + 0]) );
  }
  i2778.cullingLayers = i2784
  i2778.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2779[3], i2778.timeSettings)
  i2778.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2779[4], i2778.physicsSettings)
  i2778.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2779[5], i2778.physics2DSettings)
  i2778.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2779[6], i2778.qualitySettings)
  i2778.enableRealtimeShadows = !!i2779[7]
  i2778.enableAutoInstancing = !!i2779[8]
  i2778.enableDynamicBatching = !!i2779[9]
  i2778.lightmapEncodingQuality = i2779[10]
  i2778.desiredColorSpace = i2779[11]
  var i2787 = i2779[12]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( i2787[i + 0] );
  }
  i2778.allTags = i2786
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2791 = data
  i2790.name = i2791[0]
  i2790.value = i2791[1]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2795 = data
  i2794.id = i2795[0]
  i2794.name = i2795[1]
  i2794.value = i2795[2]
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2799 = data
  i2798.id = i2799[0]
  i2798.name = i2799[1]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2801 = data
  i2800.fixedDeltaTime = i2801[0]
  i2800.maximumDeltaTime = i2801[1]
  i2800.timeScale = i2801[2]
  i2800.maximumParticleTimestep = i2801[3]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2803 = data
  i2802.gravity = new pc.Vec3( i2803[0], i2803[1], i2803[2] )
  i2802.defaultSolverIterations = i2803[3]
  i2802.bounceThreshold = i2803[4]
  i2802.autoSyncTransforms = !!i2803[5]
  i2802.autoSimulation = !!i2803[6]
  var i2805 = i2803[7]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2805[i + 0]) );
  }
  i2802.collisionMatrix = i2804
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2809 = data
  i2808.enabled = !!i2809[0]
  i2808.layerId = i2809[1]
  i2808.otherLayerId = i2809[2]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2811 = data
  request.r(i2811[0], i2811[1], 0, i2810, 'material')
  i2810.gravity = new pc.Vec2( i2811[2], i2811[3] )
  i2810.positionIterations = i2811[4]
  i2810.velocityIterations = i2811[5]
  i2810.velocityThreshold = i2811[6]
  i2810.maxLinearCorrection = i2811[7]
  i2810.maxAngularCorrection = i2811[8]
  i2810.maxTranslationSpeed = i2811[9]
  i2810.maxRotationSpeed = i2811[10]
  i2810.baumgarteScale = i2811[11]
  i2810.baumgarteTOIScale = i2811[12]
  i2810.timeToSleep = i2811[13]
  i2810.linearSleepTolerance = i2811[14]
  i2810.angularSleepTolerance = i2811[15]
  i2810.defaultContactOffset = i2811[16]
  i2810.autoSimulation = !!i2811[17]
  i2810.queriesHitTriggers = !!i2811[18]
  i2810.queriesStartInColliders = !!i2811[19]
  i2810.callbacksOnDisable = !!i2811[20]
  i2810.reuseCollisionCallbacks = !!i2811[21]
  i2810.autoSyncTransforms = !!i2811[22]
  var i2813 = i2811[23]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2813[i + 0]) );
  }
  i2810.collisionMatrix = i2812
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2817 = data
  i2816.enabled = !!i2817[0]
  i2816.layerId = i2817[1]
  i2816.otherLayerId = i2817[2]
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2819 = data
  var i2821 = i2819[0]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2821[i + 0]) );
  }
  i2818.qualityLevels = i2820
  var i2823 = i2819[1]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( i2823[i + 0] );
  }
  i2818.names = i2822
  i2818.shadows = i2819[2]
  i2818.anisotropicFiltering = i2819[3]
  i2818.antiAliasing = i2819[4]
  i2818.lodBias = i2819[5]
  i2818.shadowCascades = i2819[6]
  i2818.shadowDistance = i2819[7]
  i2818.shadowmaskMode = i2819[8]
  i2818.shadowProjection = i2819[9]
  i2818.shadowResolution = i2819[10]
  i2818.softParticles = !!i2819[11]
  i2818.softVegetation = !!i2819[12]
  i2818.activeColorSpace = i2819[13]
  i2818.desiredColorSpace = i2819[14]
  i2818.masterTextureLimit = i2819[15]
  i2818.maxQueuedFrames = i2819[16]
  i2818.particleRaycastBudget = i2819[17]
  i2818.pixelLightCount = i2819[18]
  i2818.realtimeReflectionProbes = !!i2819[19]
  i2818.shadowCascade2Split = i2819[20]
  i2818.shadowCascade4Split = new pc.Vec3( i2819[21], i2819[22], i2819[23] )
  i2818.streamingMipmapsActive = !!i2819[24]
  i2818.vSyncCount = i2819[25]
  i2818.asyncUploadBufferSize = i2819[26]
  i2818.asyncUploadTimeSlice = i2819[27]
  i2818.billboardsFaceCameraPosition = !!i2819[28]
  i2818.shadowNearPlaneOffset = i2819[29]
  i2818.streamingMipmapsMemoryBudget = i2819[30]
  i2818.maximumLODLevel = i2819[31]
  i2818.streamingMipmapsAddAllCameras = !!i2819[32]
  i2818.streamingMipmapsMaxLevelReduction = i2819[33]
  i2818.streamingMipmapsRenderersPerFrame = i2819[34]
  i2818.resolutionScalingFixedDPIFactor = i2819[35]
  i2818.streamingMipmapsMaxFileIORequests = i2819[36]
  i2818.currentQualityLevel = i2819[37]
  return i2818
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2826 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2827 = data
  i2826.xPlacement = i2827[0]
  i2826.yPlacement = i2827[1]
  i2826.xAdvance = i2827[2]
  i2826.yAdvance = i2827[3]
  return i2826
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2828 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2829 = data
  i2828.m_GlyphIndex = i2829[0]
  i2828.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2829[1], i2828.m_GlyphValueRecord)
  return i2828
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2830 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2831 = data
  i2830.m_XPlacement = i2831[0]
  i2830.m_YPlacement = i2831[1]
  i2830.m_XAdvance = i2831[2]
  i2830.m_YAdvance = i2831[3]
  return i2830
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.CharacterJoint":{"swingAxis":0,"twistLimitSpring":3,"swingLimitSpring":4,"lowTwistLimit":5,"highTwistLimit":6,"swing1Limit":7,"swing2Limit":8,"connectedBody":9,"axis":11,"anchor":14,"connectedAnchor":17,"autoConfigureConnectedAnchor":20,"massScale":21,"connectedMassScale":22,"enableCollision":23,"breakForce":24,"breakTorque":25},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"enabled":0,"isTrigger":1,"material":2,"center":4,"radius":7},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"passDefinedKeywordGroups":21,"variants":22,"excludedVariants":23,"hasDepthReader":24},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[17],"83":[51],"20":[19],"84":[19],"85":[19],"86":[19],"87":[19],"88":[19],"89":[19],"90":[91],"92":[91],"93":[91],"94":[91],"95":[91],"96":[91],"97":[91],"98":[91],"99":[91],"100":[91],"101":[91],"102":[91],"103":[91],"104":[51],"105":[8],"106":[107],"108":[107],"50":[21],"109":[9],"110":[9],"111":[9],"112":[9],"113":[21],"114":[8,21],"24":[21,22],"115":[21],"116":[22,21],"117":[8],"118":[22,21],"119":[21],"120":[21],"121":[21],"53":[50],"26":[22,21],"122":[21],"52":[50],"123":[21],"124":[21],"125":[21],"126":[21],"127":[21],"128":[21],"129":[21],"130":[21],"131":[21],"132":[22,21],"133":[21],"134":[21],"135":[21],"47":[21],"136":[22,21],"137":[21],"138":[48],"139":[48],"49":[48],"140":[48],"141":[51],"142":[51],"143":[144],"145":[21],"146":[144],"147":[51],"148":[149],"150":[144]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Texture2D","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.LineRenderer","UnityEngine.MonoBehaviour","RopeBridge","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Animation","UnityEngine.AnimationClip","UnityEngine.BoxCollider","UnityEngine.SkinnedMeshRenderer","FishingLine","UnityEngine.Rigidbody","UnityEngine.CharacterJoint","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","UnityEngine.Sprite","Fish","ChestMover","Chest","UnityEngine.Light","UnityEngine.SpriteRenderer","LunaChallenge","UnityEngine.GameObject","LunaDynamic","FishingRod","FishingHook","FixedTouchField","FishingLogic","UnityEngine.UI.Button","Upgrades","FishPool","UnityEngine.PhysicMaterial","MapData","LowLineRenderer","DataManager","UnityEngine.UI.Slider","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Outline","EnviromentEditor","ObjectMovement","OceanTrigger","Flock","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineComposer","Cinemachine.CinemachineTransposer","UnityEngine.AudioListener","CameraMove","Cinemachine.CinemachineBrain","CinemachineController","UnityEngine.SphereCollider","UnityEngine.TrailRenderer","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CableProceduralCurve","CableProceduralMultipoint","CableProceduralSimple","CableProceduralStatic","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.6f1";

Deserializers.productName = "Rapid Fishing";

Deserializers.lunaInitializationTime = "05/22/2023 03:21:39";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "5.1.0";

Deserializers.lunaSHA = "689199eecce89524f3e7fda112223d26ecdff84c";

Deserializers.creativeName = "version-1";

Deserializers.lunaAppID = "13949";

Deserializers.projectId = "bbbf5d6b-7dba-4762-ac82-31056fd84bde";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.8.6\ncom.unity.shadergraph: 12.1.7\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.4\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1164";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4523";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "MondayOFF";

Deserializers.buildPlatform = "StandaloneOSX";

Deserializers.applicationIdentifier = "com.MondayOFF.Rapid-Fishing";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "e96a1b26-dcb6-4a98-a3bc-479b0a698988";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

