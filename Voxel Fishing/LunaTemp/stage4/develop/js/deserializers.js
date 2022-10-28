var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2118 = root || request.c( 'UnityEngine.JointSpring' )
  var i2119 = data
  i2118.spring = i2119[0]
  i2118.damper = i2119[1]
  i2118.targetPosition = i2119[2]
  return i2118
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2120 = root || request.c( 'UnityEngine.JointMotor' )
  var i2121 = data
  i2120.m_TargetVelocity = i2121[0]
  i2120.m_Force = i2121[1]
  i2120.m_FreeSpin = i2121[2]
  return i2120
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2122 = root || request.c( 'UnityEngine.JointLimits' )
  var i2123 = data
  i2122.m_Min = i2123[0]
  i2122.m_Max = i2123[1]
  i2122.m_Bounciness = i2123[2]
  i2122.m_BounceMinVelocity = i2123[3]
  i2122.m_ContactDistance = i2123[4]
  i2122.minBounce = i2123[5]
  i2122.maxBounce = i2123[6]
  return i2122
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2124 = root || request.c( 'UnityEngine.JointDrive' )
  var i2125 = data
  i2124.m_PositionSpring = i2125[0]
  i2124.m_PositionDamper = i2125[1]
  i2124.m_MaximumForce = i2125[2]
  return i2124
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2127 = data
  i2126.m_Spring = i2127[0]
  i2126.m_Damper = i2127[1]
  return i2126
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2128 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2129 = data
  i2128.m_Limit = i2129[0]
  i2128.m_Bounciness = i2129[1]
  i2128.m_ContactDistance = i2129[2]
  return i2128
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2130 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2131 = data
  i2130.m_ExtremumSlip = i2131[0]
  i2130.m_ExtremumValue = i2131[1]
  i2130.m_AsymptoteSlip = i2131[2]
  i2130.m_AsymptoteValue = i2131[3]
  i2130.m_Stiffness = i2131[4]
  return i2130
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2133 = data
  i2132.m_LowerAngle = i2133[0]
  i2132.m_UpperAngle = i2133[1]
  return i2132
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2135 = data
  i2134.m_MotorSpeed = i2135[0]
  i2134.m_MaximumMotorTorque = i2135[1]
  return i2134
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2136 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2137 = data
  i2136.m_DampingRatio = i2137[0]
  i2136.m_Frequency = i2137[1]
  i2136.m_Angle = i2137[2]
  return i2136
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2138 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2139 = data
  i2138.m_LowerTranslation = i2139[0]
  i2138.m_UpperTranslation = i2139[1]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2140 = root || new pc.UnityMaterial()
  var i2141 = data
  i2140.name = i2141[0]
  request.r(i2141[1], i2141[2], 0, i2140, 'shader')
  i2140.renderQueue = i2141[3]
  i2140.enableInstancing = !!i2141[4]
  var i2143 = i2141[5]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2143[i + 0]) );
  }
  i2140.floatParameters = i2142
  var i2145 = i2141[6]
  var i2144 = []
  for(var i = 0; i < i2145.length; i += 1) {
    i2144.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2145[i + 0]) );
  }
  i2140.colorParameters = i2144
  var i2147 = i2141[7]
  var i2146 = []
  for(var i = 0; i < i2147.length; i += 1) {
    i2146.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2147[i + 0]) );
  }
  i2140.vectorParameters = i2146
  var i2149 = i2141[8]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2149[i + 0]) );
  }
  i2140.textureParameters = i2148
  var i2151 = i2141[9]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2151[i + 0]) );
  }
  i2140.materialFlags = i2150
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2155 = data
  i2154.name = i2155[0]
  i2154.value = i2155[1]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2159 = data
  i2158.name = i2159[0]
  i2158.value = new pc.Color(i2159[1], i2159[2], i2159[3], i2159[4])
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.value = new pc.Vec4( i2163[1], i2163[2], i2163[3], i2163[4] )
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2167 = data
  i2166.name = i2167[0]
  request.r(i2167[1], i2167[2], 0, i2166, 'value')
  return i2166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.enabled = !!i2171[1]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2173 = data
  i2172.position = new pc.Vec3( i2173[0], i2173[1], i2173[2] )
  i2172.scale = new pc.Vec3( i2173[3], i2173[4], i2173[5] )
  i2172.rotation = new pc.Quat(i2173[6], i2173[7], i2173[8], i2173[9])
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2175 = data
  i2174.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2175[0], i2174.main)
  i2174.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2175[1], i2174.colorBySpeed)
  i2174.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2175[2], i2174.colorOverLifetime)
  i2174.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2175[3], i2174.emission)
  i2174.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2175[4], i2174.rotationBySpeed)
  i2174.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2175[5], i2174.rotationOverLifetime)
  i2174.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2175[6], i2174.shape)
  i2174.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2175[7], i2174.sizeBySpeed)
  i2174.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2175[8], i2174.sizeOverLifetime)
  i2174.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2175[9], i2174.textureSheetAnimation)
  i2174.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2175[10], i2174.velocityOverLifetime)
  i2174.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2175[11], i2174.noise)
  i2174.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2175[12], i2174.inheritVelocity)
  i2174.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2175[13], i2174.forceOverLifetime)
  i2174.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2175[14], i2174.limitVelocityOverLifetime)
  i2174.useAutoRandomSeed = !!i2175[15]
  i2174.randomSeed = i2175[16]
  return i2174
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2176 = root || new pc.ParticleSystemMain()
  var i2177 = data
  i2176.duration = i2177[0]
  i2176.loop = !!i2177[1]
  i2176.prewarm = !!i2177[2]
  i2176.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[3], i2176.startDelay)
  i2176.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[4], i2176.startLifetime)
  i2176.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[5], i2176.startSpeed)
  i2176.startSize3D = !!i2177[6]
  i2176.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[7], i2176.startSizeX)
  i2176.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[8], i2176.startSizeY)
  i2176.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[9], i2176.startSizeZ)
  i2176.startRotation3D = !!i2177[10]
  i2176.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[11], i2176.startRotationX)
  i2176.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[12], i2176.startRotationY)
  i2176.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[13], i2176.startRotationZ)
  i2176.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2177[14], i2176.startColor)
  i2176.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2177[15], i2176.gravityModifier)
  i2176.simulationSpace = i2177[16]
  request.r(i2177[17], i2177[18], 0, i2176, 'customSimulationSpace')
  i2176.simulationSpeed = i2177[19]
  i2176.useUnscaledTime = !!i2177[20]
  i2176.scalingMode = i2177[21]
  i2176.playOnAwake = !!i2177[22]
  i2176.maxParticles = i2177[23]
  i2176.emitterVelocityMode = i2177[24]
  i2176.stopAction = i2177[25]
  return i2176
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2178 = root || new pc.MinMaxCurve()
  var i2179 = data
  i2178.mode = i2179[0]
  i2178.curveMin = new pc.AnimationCurve( { keys_flow: i2179[1] } )
  i2178.curveMax = new pc.AnimationCurve( { keys_flow: i2179[2] } )
  i2178.curveMultiplier = i2179[3]
  i2178.constantMin = i2179[4]
  i2178.constantMax = i2179[5]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2180 = root || new pc.MinMaxGradient()
  var i2181 = data
  i2180.mode = i2181[0]
  i2180.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2181[1], i2180.gradientMin)
  i2180.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2181[2], i2180.gradientMax)
  i2180.colorMin = new pc.Color(i2181[3], i2181[4], i2181[5], i2181[6])
  i2180.colorMax = new pc.Color(i2181[7], i2181[8], i2181[9], i2181[10])
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2183 = data
  i2182.mode = i2183[0]
  var i2185 = i2183[1]
  var i2184 = []
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2185[i + 0]) );
  }
  i2182.colorKeys = i2184
  var i2187 = i2183[2]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2187[i + 0]) );
  }
  i2182.alphaKeys = i2186
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2188 = root || new pc.ParticleSystemColorBySpeed()
  var i2189 = data
  i2188.enabled = !!i2189[0]
  i2188.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2189[1], i2188.color)
  i2188.range = new pc.Vec2( i2189[2], i2189[3] )
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2193 = data
  i2192.color = new pc.Color(i2193[0], i2193[1], i2193[2], i2193[3])
  i2192.time = i2193[4]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2197 = data
  i2196.alpha = i2197[0]
  i2196.time = i2197[1]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2198 = root || new pc.ParticleSystemColorOverLifetime()
  var i2199 = data
  i2198.enabled = !!i2199[0]
  i2198.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2199[1], i2198.color)
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2200 = root || new pc.ParticleSystemEmitter()
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[1], i2200.rateOverTime)
  i2200.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2201[2], i2200.rateOverDistance)
  var i2203 = i2201[3]
  var i2202 = []
  for(var i = 0; i < i2203.length; i += 1) {
    i2202.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2203[i + 0]) );
  }
  i2200.bursts = i2202
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2206 = root || new pc.ParticleSystemBurst()
  var i2207 = data
  i2206.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2207[0], i2206.count)
  i2206.cycleCount = i2207[1]
  i2206.minCount = i2207[2]
  i2206.maxCount = i2207[3]
  i2206.repeatInterval = i2207[4]
  i2206.time = i2207[5]
  return i2206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2208 = root || new pc.ParticleSystemRotationBySpeed()
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[1], i2208.x)
  i2208.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[2], i2208.y)
  i2208.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2209[3], i2208.z)
  i2208.separateAxes = !!i2209[4]
  i2208.range = new pc.Vec2( i2209[5], i2209[6] )
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2210 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2211 = data
  i2210.enabled = !!i2211[0]
  i2210.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[1], i2210.x)
  i2210.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[2], i2210.y)
  i2210.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2211[3], i2210.z)
  i2210.separateAxes = !!i2211[4]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2212 = root || new pc.ParticleSystemShape()
  var i2213 = data
  i2212.enabled = !!i2213[0]
  i2212.shapeType = i2213[1]
  i2212.randomDirectionAmount = i2213[2]
  i2212.sphericalDirectionAmount = i2213[3]
  i2212.randomPositionAmount = i2213[4]
  i2212.alignToDirection = !!i2213[5]
  i2212.radius = i2213[6]
  i2212.radiusMode = i2213[7]
  i2212.radiusSpread = i2213[8]
  i2212.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[9], i2212.radiusSpeed)
  i2212.radiusThickness = i2213[10]
  i2212.angle = i2213[11]
  i2212.length = i2213[12]
  i2212.boxThickness = new pc.Vec3( i2213[13], i2213[14], i2213[15] )
  i2212.meshShapeType = i2213[16]
  request.r(i2213[17], i2213[18], 0, i2212, 'mesh')
  request.r(i2213[19], i2213[20], 0, i2212, 'meshRenderer')
  request.r(i2213[21], i2213[22], 0, i2212, 'skinnedMeshRenderer')
  i2212.useMeshMaterialIndex = !!i2213[23]
  i2212.meshMaterialIndex = i2213[24]
  i2212.useMeshColors = !!i2213[25]
  i2212.normalOffset = i2213[26]
  i2212.arc = i2213[27]
  i2212.arcMode = i2213[28]
  i2212.arcSpread = i2213[29]
  i2212.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2213[30], i2212.arcSpeed)
  i2212.donutRadius = i2213[31]
  i2212.position = new pc.Vec3( i2213[32], i2213[33], i2213[34] )
  i2212.rotation = new pc.Vec3( i2213[35], i2213[36], i2213[37] )
  i2212.scale = new pc.Vec3( i2213[38], i2213[39], i2213[40] )
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2214 = root || new pc.ParticleSystemSizeBySpeed()
  var i2215 = data
  i2214.enabled = !!i2215[0]
  i2214.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[1], i2214.x)
  i2214.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[2], i2214.y)
  i2214.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2215[3], i2214.z)
  i2214.separateAxes = !!i2215[4]
  i2214.range = new pc.Vec2( i2215[5], i2215[6] )
  return i2214
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2216 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2217 = data
  i2216.enabled = !!i2217[0]
  i2216.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[1], i2216.x)
  i2216.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[2], i2216.y)
  i2216.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2217[3], i2216.z)
  i2216.separateAxes = !!i2217[4]
  return i2216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2218 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2219 = data
  i2218.enabled = !!i2219[0]
  i2218.mode = i2219[1]
  i2218.animation = i2219[2]
  i2218.numTilesX = i2219[3]
  i2218.numTilesY = i2219[4]
  i2218.useRandomRow = !!i2219[5]
  i2218.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[6], i2218.frameOverTime)
  i2218.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2219[7], i2218.startFrame)
  i2218.cycleCount = i2219[8]
  i2218.rowIndex = i2219[9]
  i2218.flipU = i2219[10]
  i2218.flipV = i2219[11]
  i2218.spriteCount = i2219[12]
  var i2221 = i2219[13]
  var i2220 = []
  for(var i = 0; i < i2221.length; i += 2) {
  request.r(i2221[i + 0], i2221[i + 1], 2, i2220, '')
  }
  i2218.sprites = i2220
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2224 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2225 = data
  i2224.enabled = !!i2225[0]
  i2224.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[1], i2224.x)
  i2224.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[2], i2224.y)
  i2224.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[3], i2224.z)
  i2224.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2225[4], i2224.speedModifier)
  i2224.space = i2225[5]
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2226 = root || new pc.ParticleSystemNoise()
  var i2227 = data
  i2226.enabled = !!i2227[0]
  i2226.separateAxes = !!i2227[1]
  i2226.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[2], i2226.strengthX)
  i2226.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[3], i2226.strengthY)
  i2226.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[4], i2226.strengthZ)
  i2226.frequency = i2227[5]
  i2226.damping = !!i2227[6]
  i2226.octaveCount = i2227[7]
  i2226.octaveMultiplier = i2227[8]
  i2226.octaveScale = i2227[9]
  i2226.quality = i2227[10]
  i2226.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[11], i2226.scrollSpeed)
  i2226.scrollSpeedMultiplier = i2227[12]
  i2226.remapEnabled = !!i2227[13]
  i2226.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[14], i2226.remapX)
  i2226.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[15], i2226.remapY)
  i2226.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[16], i2226.remapZ)
  i2226.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[17], i2226.positionAmount)
  i2226.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[18], i2226.rotationAmount)
  i2226.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2227[19], i2226.sizeAmount)
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2228 = root || new pc.ParticleSystemInheritVelocity()
  var i2229 = data
  i2228.enabled = !!i2229[0]
  i2228.mode = i2229[1]
  i2228.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2229[2], i2228.curve)
  return i2228
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2230 = root || new pc.ParticleSystemForceOverLifetime()
  var i2231 = data
  i2230.enabled = !!i2231[0]
  i2230.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[1], i2230.x)
  i2230.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[2], i2230.y)
  i2230.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2231[3], i2230.z)
  i2230.space = i2231[4]
  i2230.randomized = !!i2231[5]
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2232 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2233 = data
  i2232.enabled = !!i2233[0]
  i2232.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[1], i2232.limitX)
  i2232.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[2], i2232.limitY)
  i2232.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[3], i2232.limitZ)
  i2232.dampen = i2233[4]
  i2232.separateAxes = !!i2233[5]
  i2232.space = i2233[6]
  i2232.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2233[7], i2232.drag)
  i2232.multiplyDragByParticleSize = !!i2233[8]
  i2232.multiplyDragByParticleVelocity = !!i2233[9]
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2235 = data
  i2234.enabled = !!i2235[0]
  request.r(i2235[1], i2235[2], 0, i2234, 'sharedMaterial')
  var i2237 = i2235[3]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 2, i2236, '')
  }
  i2234.sharedMaterials = i2236
  i2234.receiveShadows = !!i2235[4]
  i2234.shadowCastingMode = i2235[5]
  i2234.sortingLayerID = i2235[6]
  i2234.sortingOrder = i2235[7]
  i2234.lightmapIndex = i2235[8]
  i2234.lightmapSceneIndex = i2235[9]
  i2234.lightmapScaleOffset = new pc.Vec4( i2235[10], i2235[11], i2235[12], i2235[13] )
  i2234.lightProbeUsage = i2235[14]
  i2234.reflectionProbeUsage = i2235[15]
  request.r(i2235[16], i2235[17], 0, i2234, 'mesh')
  i2234.meshCount = i2235[18]
  i2234.activeVertexStreamsCount = i2235[19]
  i2234.alignment = i2235[20]
  i2234.renderMode = i2235[21]
  i2234.sortMode = i2235[22]
  i2234.lengthScale = i2235[23]
  i2234.velocityScale = i2235[24]
  i2234.cameraVelocityScale = i2235[25]
  i2234.normalDirection = i2235[26]
  i2234.sortingFudge = i2235[27]
  i2234.minParticleSize = i2235[28]
  i2234.maxParticleSize = i2235[29]
  i2234.pivot = new pc.Vec3( i2235[30], i2235[31], i2235[32] )
  request.r(i2235[33], i2235[34], 0, i2234, 'trailMaterial')
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.tag = i2241[1]
  i2240.enabled = !!i2241[2]
  i2240.isStatic = !!i2241[3]
  i2240.layer = i2241[4]
  return i2240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2243 = data
  i2242.name = i2243[0]
  i2242.width = i2243[1]
  i2242.height = i2243[2]
  i2242.mipmapCount = i2243[3]
  i2242.anisoLevel = i2243[4]
  i2242.filterMode = i2243[5]
  i2242.hdr = !!i2243[6]
  i2242.format = i2243[7]
  i2242.wrapMode = i2243[8]
  i2242.alphaIsTransparency = !!i2243[9]
  i2242.alphaSource = i2243[10]
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'sharedMesh')
  return i2244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2247 = data
  request.r(i2247[0], i2247[1], 0, i2246, 'additionalVertexStreams')
  i2246.enabled = !!i2247[2]
  request.r(i2247[3], i2247[4], 0, i2246, 'sharedMaterial')
  var i2249 = i2247[5]
  var i2248 = []
  for(var i = 0; i < i2249.length; i += 2) {
  request.r(i2249[i + 0], i2249[i + 1], 2, i2248, '')
  }
  i2246.sharedMaterials = i2248
  i2246.receiveShadows = !!i2247[6]
  i2246.shadowCastingMode = i2247[7]
  i2246.sortingLayerID = i2247[8]
  i2246.sortingOrder = i2247[9]
  i2246.lightmapIndex = i2247[10]
  i2246.lightmapSceneIndex = i2247[11]
  i2246.lightmapScaleOffset = new pc.Vec4( i2247[12], i2247[13], i2247[14], i2247[15] )
  i2246.lightProbeUsage = i2247[16]
  i2246.reflectionProbeUsage = i2247[17]
  return i2246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2251 = data
  i2250.name = i2251[0]
  i2250.halfPrecision = !!i2251[1]
  i2250.vertexCount = i2251[2]
  i2250.aabb = i2251[3]
  var i2253 = i2251[4]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( !!i2253[i + 0] );
  }
  i2250.streams = i2252
  i2250.vertices = i2251[5]
  var i2255 = i2251[6]
  var i2254 = []
  for(var i = 0; i < i2255.length; i += 1) {
    i2254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2255[i + 0]) );
  }
  i2250.subMeshes = i2254
  var i2257 = i2251[7]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 16) {
    i2256.push( new pc.Mat4().setData(i2257[i + 0], i2257[i + 1], i2257[i + 2], i2257[i + 3],  i2257[i + 4], i2257[i + 5], i2257[i + 6], i2257[i + 7],  i2257[i + 8], i2257[i + 9], i2257[i + 10], i2257[i + 11],  i2257[i + 12], i2257[i + 13], i2257[i + 14], i2257[i + 15]) );
  }
  i2250.bindposes = i2256
  var i2259 = i2251[8]
  var i2258 = []
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2259[i + 0]) );
  }
  i2250.blendShapes = i2258
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2265 = data
  i2264.triangles = i2265[0]
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2271 = data
  i2270.name = i2271[0]
  var i2273 = i2271[1]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2273[i + 0]) );
  }
  i2270.frames = i2272
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i2275 = data
  i2274.textureMode = i2275[0]
  i2274.alignment = i2275[1]
  i2274.widthCurve = new pc.AnimationCurve( { keys_flow: i2275[2] } )
  i2274.colorGradient = i2275[3] ? new pc.ColorGradient(i2275[3][0], i2275[3][1], i2275[3][2]) : null
  var i2277 = i2275[4]
  var i2276 = []
  for(var i = 0; i < i2277.length; i += 3) {
    i2276.push( new pc.Vec3( i2277[i + 0], i2277[i + 1], i2277[i + 2] ) );
  }
  i2274.positions = i2276
  i2274.positionCount = i2275[5]
  i2274.widthMultiplier = i2275[6]
  i2274.startWidth = i2275[7]
  i2274.endWidth = i2275[8]
  i2274.numCornerVertices = i2275[9]
  i2274.numCapVertices = i2275[10]
  i2274.useWorldSpace = !!i2275[11]
  i2274.loop = !!i2275[12]
  i2274.startColor = new pc.Color(i2275[13], i2275[14], i2275[15], i2275[16])
  i2274.endColor = new pc.Color(i2275[17], i2275[18], i2275[19], i2275[20])
  i2274.generateLightingData = !!i2275[21]
  i2274.enabled = !!i2275[22]
  request.r(i2275[23], i2275[24], 0, i2274, 'sharedMaterial')
  var i2279 = i2275[25]
  var i2278 = []
  for(var i = 0; i < i2279.length; i += 2) {
  request.r(i2279[i + 0], i2279[i + 1], 2, i2278, '')
  }
  i2274.sharedMaterials = i2278
  i2274.receiveShadows = !!i2275[26]
  i2274.shadowCastingMode = i2275[27]
  i2274.sortingLayerID = i2275[28]
  i2274.sortingOrder = i2275[29]
  i2274.lightmapIndex = i2275[30]
  i2274.lightmapSceneIndex = i2275[31]
  i2274.lightmapScaleOffset = new pc.Vec4( i2275[32], i2275[33], i2275[34], i2275[35] )
  i2274.lightProbeUsage = i2275[36]
  i2274.reflectionProbeUsage = i2275[37]
  return i2274
}

Deserializers["RopeBridge"] = function (request, data, root) {
  var i2282 = root || request.c( 'RopeBridge' )
  var i2283 = data
  request.r(i2283[0], i2283[1], 0, i2282, 'StartPoint')
  request.r(i2283[2], i2283[3], 0, i2282, 'EndPoint')
  i2282.ropeSegLen = i2283[4]
  i2282.segmentLength = i2283[5]
  i2282.lineWidth = i2283[6]
  i2282.distOfStartToEnd = i2283[7]
  i2282.lineLengthMultifly = i2283[8]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2285 = data
  request.r(i2285[0], i2285[1], 0, i2284, 'animatorController')
  i2284.updateMode = i2285[2]
  var i2287 = i2285[3]
  var i2286 = []
  for(var i = 0; i < i2287.length; i += 2) {
  request.r(i2287[i + 0], i2287[i + 1], 2, i2286, '')
  }
  i2284.humanBones = i2286
  i2284.enabled = !!i2285[4]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2291 = data
  i2290.playAutomatically = !!i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'clip')
  var i2293 = i2291[3]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 2) {
  request.r(i2293[i + 0], i2293[i + 1], 2, i2292, '')
  }
  i2290.clips = i2292
  i2290.wrapMode = i2291[4]
  i2290.enabled = !!i2291[5]
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2297 = data
  i2296.center = new pc.Vec3( i2297[0], i2297[1], i2297[2] )
  i2296.size = new pc.Vec3( i2297[3], i2297[4], i2297[5] )
  i2296.enabled = !!i2297[6]
  i2296.isTrigger = !!i2297[7]
  request.r(i2297[8], i2297[9], 0, i2296, 'material')
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2299 = data
  i2298.enabled = !!i2299[0]
  request.r(i2299[1], i2299[2], 0, i2298, 'sharedMaterial')
  var i2301 = i2299[3]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 2) {
  request.r(i2301[i + 0], i2301[i + 1], 2, i2300, '')
  }
  i2298.sharedMaterials = i2300
  i2298.receiveShadows = !!i2299[4]
  i2298.shadowCastingMode = i2299[5]
  i2298.sortingLayerID = i2299[6]
  i2298.sortingOrder = i2299[7]
  i2298.lightmapIndex = i2299[8]
  i2298.lightmapSceneIndex = i2299[9]
  i2298.lightmapScaleOffset = new pc.Vec4( i2299[10], i2299[11], i2299[12], i2299[13] )
  i2298.lightProbeUsage = i2299[14]
  i2298.reflectionProbeUsage = i2299[15]
  request.r(i2299[16], i2299[17], 0, i2298, 'sharedMesh')
  var i2303 = i2299[18]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 2) {
  request.r(i2303[i + 0], i2303[i + 1], 2, i2302, '')
  }
  i2298.bones = i2302
  i2298.updateWhenOffscreen = !!i2299[19]
  i2298.localBounds = i2299[20]
  request.r(i2299[21], i2299[22], 0, i2298, 'rootBone')
  var i2305 = i2299[23]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2305[i + 0]) );
  }
  i2298.blendShapesWeights = i2304
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2309 = data
  i2308.weight = i2309[0]
  return i2308
}

Deserializers["FishingLine"] = function (request, data, root) {
  var i2310 = root || request.c( 'FishingLine' )
  var i2311 = data
  request.r(i2311[0], i2311[1], 0, i2310, 'line')
  request.r(i2311[2], i2311[3], 0, i2310, 'startPoint')
  request.r(i2311[4], i2311[5], 0, i2310, 'endPoint')
  return i2310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2313 = data
  i2312.mass = i2313[0]
  i2312.drag = i2313[1]
  i2312.angularDrag = i2313[2]
  i2312.useGravity = !!i2313[3]
  i2312.isKinematic = !!i2313[4]
  i2312.constraints = i2313[5]
  i2312.maxAngularVelocity = i2313[6]
  i2312.collisionDetectionMode = i2313[7]
  i2312.interpolation = i2313[8]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CharacterJoint"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CharacterJoint' )
  var i2315 = data
  i2314.swingAxis = new pc.Vec3( i2315[0], i2315[1], i2315[2] )
  i2314.twistLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2315[3], i2314.twistLimitSpring)
  i2314.swingLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i2315[4], i2314.swingLimitSpring)
  i2314.lowTwistLimit = request.d('UnityEngine.SoftJointLimit', i2315[5], i2314.lowTwistLimit)
  i2314.highTwistLimit = request.d('UnityEngine.SoftJointLimit', i2315[6], i2314.highTwistLimit)
  i2314.swing1Limit = request.d('UnityEngine.SoftJointLimit', i2315[7], i2314.swing1Limit)
  i2314.swing2Limit = request.d('UnityEngine.SoftJointLimit', i2315[8], i2314.swing2Limit)
  request.r(i2315[9], i2315[10], 0, i2314, 'connectedBody')
  i2314.axis = new pc.Vec3( i2315[11], i2315[12], i2315[13] )
  i2314.anchor = new pc.Vec3( i2315[14], i2315[15], i2315[16] )
  i2314.connectedAnchor = new pc.Vec3( i2315[17], i2315[18], i2315[19] )
  i2314.autoConfigureConnectedAnchor = !!i2315[20]
  i2314.massScale = i2315[21]
  i2314.connectedMassScale = i2315[22]
  i2314.enableCollision = !!i2315[23]
  i2314.breakForce = i2315[24]
  i2314.breakTorque = i2315[25]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2319 = data
  i2318.weight = i2319[0]
  i2318.vertices = i2319[1]
  i2318.normals = i2319[2]
  i2318.tangents = i2319[3]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2321 = data
  i2320.pivot = new pc.Vec2( i2321[0], i2321[1] )
  i2320.anchorMin = new pc.Vec2( i2321[2], i2321[3] )
  i2320.anchorMax = new pc.Vec2( i2321[4], i2321[5] )
  i2320.sizeDelta = new pc.Vec2( i2321[6], i2321[7] )
  i2320.anchoredPosition3D = new pc.Vec3( i2321[8], i2321[9], i2321[10] )
  i2320.rotation = new pc.Quat(i2321[11], i2321[12], i2321[13], i2321[14])
  i2320.scale = new pc.Vec3( i2321[15], i2321[16], i2321[17] )
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2323 = data
  i2322.cullTransparentMesh = !!i2323[0]
  return i2322
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2324 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2325 = data
  i2324.m_hasFontAssetChanged = !!i2325[0]
  request.r(i2325[1], i2325[2], 0, i2324, 'm_baseMaterial')
  i2324.m_maskOffset = new pc.Vec4( i2325[3], i2325[4], i2325[5], i2325[6] )
  i2324.m_text = i2325[7]
  i2324.m_isRightToLeft = !!i2325[8]
  request.r(i2325[9], i2325[10], 0, i2324, 'm_fontAsset')
  request.r(i2325[11], i2325[12], 0, i2324, 'm_sharedMaterial')
  var i2327 = i2325[13]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.m_fontSharedMaterials = i2326
  request.r(i2325[14], i2325[15], 0, i2324, 'm_fontMaterial')
  var i2329 = i2325[16]
  var i2328 = []
  for(var i = 0; i < i2329.length; i += 2) {
  request.r(i2329[i + 0], i2329[i + 1], 2, i2328, '')
  }
  i2324.m_fontMaterials = i2328
  i2324.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2325[17], i2325[18], i2325[19], i2325[20])
  i2324.m_fontColor = new pc.Color(i2325[21], i2325[22], i2325[23], i2325[24])
  i2324.m_enableVertexGradient = !!i2325[25]
  i2324.m_colorMode = i2325[26]
  i2324.m_fontColorGradient = request.d('TMPro.VertexGradient', i2325[27], i2324.m_fontColorGradient)
  request.r(i2325[28], i2325[29], 0, i2324, 'm_fontColorGradientPreset')
  request.r(i2325[30], i2325[31], 0, i2324, 'm_spriteAsset')
  i2324.m_tintAllSprites = !!i2325[32]
  request.r(i2325[33], i2325[34], 0, i2324, 'm_StyleSheet')
  i2324.m_TextStyleHashCode = i2325[35]
  i2324.m_overrideHtmlColors = !!i2325[36]
  i2324.m_faceColor = UnityEngine.Color32.ConstructColor(i2325[37], i2325[38], i2325[39], i2325[40])
  i2324.m_fontSize = i2325[41]
  i2324.m_fontSizeBase = i2325[42]
  i2324.m_fontWeight = i2325[43]
  i2324.m_enableAutoSizing = !!i2325[44]
  i2324.m_fontSizeMin = i2325[45]
  i2324.m_fontSizeMax = i2325[46]
  i2324.m_fontStyle = i2325[47]
  i2324.m_HorizontalAlignment = i2325[48]
  i2324.m_VerticalAlignment = i2325[49]
  i2324.m_textAlignment = i2325[50]
  i2324.m_characterSpacing = i2325[51]
  i2324.m_wordSpacing = i2325[52]
  i2324.m_lineSpacing = i2325[53]
  i2324.m_lineSpacingMax = i2325[54]
  i2324.m_paragraphSpacing = i2325[55]
  i2324.m_charWidthMaxAdj = i2325[56]
  i2324.m_enableWordWrapping = !!i2325[57]
  i2324.m_wordWrappingRatios = i2325[58]
  i2324.m_overflowMode = i2325[59]
  request.r(i2325[60], i2325[61], 0, i2324, 'm_linkedTextComponent')
  request.r(i2325[62], i2325[63], 0, i2324, 'parentLinkedComponent')
  i2324.m_enableKerning = !!i2325[64]
  i2324.m_enableExtraPadding = !!i2325[65]
  i2324.checkPaddingRequired = !!i2325[66]
  i2324.m_isRichText = !!i2325[67]
  i2324.m_parseCtrlCharacters = !!i2325[68]
  i2324.m_isOrthographic = !!i2325[69]
  i2324.m_isCullingEnabled = !!i2325[70]
  i2324.m_horizontalMapping = i2325[71]
  i2324.m_verticalMapping = i2325[72]
  i2324.m_uvLineOffset = i2325[73]
  i2324.m_geometrySortingOrder = i2325[74]
  i2324.m_IsTextObjectScaleStatic = !!i2325[75]
  i2324.m_VertexBufferAutoSizeReduction = !!i2325[76]
  i2324.m_useMaxVisibleDescender = !!i2325[77]
  i2324.m_pageToDisplay = i2325[78]
  i2324.m_margin = new pc.Vec4( i2325[79], i2325[80], i2325[81], i2325[82] )
  i2324.m_isUsingLegacyAnimationComponent = !!i2325[83]
  i2324.m_isVolumetricText = !!i2325[84]
  request.r(i2325[85], i2325[86], 0, i2324, 'm_Material')
  i2324.m_Maskable = !!i2325[87]
  i2324.m_Color = new pc.Color(i2325[88], i2325[89], i2325[90], i2325[91])
  i2324.m_RaycastTarget = !!i2325[92]
  i2324.m_RaycastPadding = new pc.Vec4( i2325[93], i2325[94], i2325[95], i2325[96] )
  return i2324
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2330 = root || request.c( 'TMPro.VertexGradient' )
  var i2331 = data
  i2330.topLeft = new pc.Color(i2331[0], i2331[1], i2331[2], i2331[3])
  i2330.topRight = new pc.Color(i2331[4], i2331[5], i2331[6], i2331[7])
  i2330.bottomLeft = new pc.Color(i2331[8], i2331[9], i2331[10], i2331[11])
  i2330.bottomRight = new pc.Color(i2331[12], i2331[13], i2331[14], i2331[15])
  return i2330
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2332 = root || request.c( 'UnityEngine.UI.Image' )
  var i2333 = data
  request.r(i2333[0], i2333[1], 0, i2332, 'm_Sprite')
  i2332.m_Type = i2333[2]
  i2332.m_PreserveAspect = !!i2333[3]
  i2332.m_FillCenter = !!i2333[4]
  i2332.m_FillMethod = i2333[5]
  i2332.m_FillAmount = i2333[6]
  i2332.m_FillClockwise = !!i2333[7]
  i2332.m_FillOrigin = i2333[8]
  i2332.m_UseSpriteMesh = !!i2333[9]
  i2332.m_PixelsPerUnitMultiplier = i2333[10]
  request.r(i2333[11], i2333[12], 0, i2332, 'm_Material')
  i2332.m_Maskable = !!i2333[13]
  i2332.m_Color = new pc.Color(i2333[14], i2333[15], i2333[16], i2333[17])
  i2332.m_RaycastTarget = !!i2333[18]
  i2332.m_RaycastPadding = new pc.Vec4( i2333[19], i2333[20], i2333[21], i2333[22] )
  return i2332
}

Deserializers["Fish"] = function (request, data, root) {
  var i2334 = root || request.c( 'Fish' )
  var i2335 = data
  i2334.fishType = request.d('FishType', i2335[0], i2334.fishType)
  request.r(i2335[1], i2335[2], 0, i2334, 'fishData')
  i2334.sensingRadius = i2335[3]
  i2334.moveSpeed = i2335[4]
  i2334.followTargetSpeed = i2335[5]
  i2334.rotationSpeed = i2335[6]
  request.r(i2335[7], i2335[8], 0, i2334, 'target')
  i2334.usingMapDataNumber = i2335[9]
  i2334.hooked = !!i2335[10]
  request.r(i2335[11], i2335[12], 0, i2334, 'rigid')
  i2334.dirToHook = new pc.Vec3( i2335[13], i2335[14], i2335[15] )
  request.r(i2335[16], i2335[17], 0, i2334, 'head')
  request.r(i2335[18], i2335[19], 0, i2334, 'mapData')
  request.r(i2335[20], i2335[21], 0, i2334, 'mousePoint')
  return i2334
}

Deserializers["FishType"] = function (request, data, root) {
  var i2336 = root || request.c( 'FishType' )
  var i2337 = data
  i2336.cost = i2337[0]
  i2336.tier = i2337[1]
  i2336.fishNumber = i2337[2]
  i2336.boundSize = new pc.Vec3( i2337[3], i2337[4], i2337[5] )
  return i2336
}

Deserializers["ChestMover"] = function (request, data, root) {
  var i2338 = root || request.c( 'ChestMover' )
  var i2339 = data
  request.r(i2339[0], i2339[1], 0, i2338, 'chest')
  return i2338
}

Deserializers["Chest"] = function (request, data, root) {
  var i2340 = root || request.c( 'Chest' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'chestMover')
  i2340.chestTier = i2341[2]
  request.r(i2341[3], i2341[4], 0, i2340, 'line')
  i2340.chestPullDist = i2341[5]
  i2340.pullForce = i2341[6]
  i2340.fishType = request.d('FishType', i2341[7], i2340.fishType)
  request.r(i2341[8], i2341[9], 0, i2340, 'fishData')
  i2340.sensingRadius = i2341[10]
  i2340.moveSpeed = i2341[11]
  i2340.followTargetSpeed = i2341[12]
  i2340.rotationSpeed = i2341[13]
  request.r(i2341[14], i2341[15], 0, i2340, 'target')
  i2340.usingMapDataNumber = i2341[16]
  i2340.hooked = !!i2341[17]
  request.r(i2341[18], i2341[19], 0, i2340, 'rigid2')
  request.r(i2341[20], i2341[21], 0, i2340, 'rigid')
  i2340.dirToHook = new pc.Vec3( i2341[22], i2341[23], i2341[24] )
  request.r(i2341[25], i2341[26], 0, i2340, 'head')
  request.r(i2341[27], i2341[28], 0, i2340, 'mapData')
  request.r(i2341[29], i2341[30], 0, i2340, 'mousePoint')
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2343 = data
  i2342.enabled = !!i2343[0]
  i2342.type = i2343[1]
  i2342.color = new pc.Color(i2343[2], i2343[3], i2343[4], i2343[5])
  i2342.cullingMask = i2343[6]
  i2342.intensity = i2343[7]
  i2342.range = i2343[8]
  i2342.spotAngle = i2343[9]
  i2342.shadows = i2343[10]
  i2342.shadowNormalBias = i2343[11]
  i2342.shadowBias = i2343[12]
  i2342.shadowStrength = i2343[13]
  i2342.shadowResolution = i2343[14]
  i2342.lightmapBakeType = i2343[15]
  i2342.renderMode = i2343[16]
  request.r(i2343[17], i2343[18], 0, i2342, 'cookie')
  i2342.cookieSize = i2343[19]
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2345 = data
  i2344.enabled = !!i2345[0]
  request.r(i2345[1], i2345[2], 0, i2344, 'sharedMaterial')
  var i2347 = i2345[3]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 2) {
  request.r(i2347[i + 0], i2347[i + 1], 2, i2346, '')
  }
  i2344.sharedMaterials = i2346
  i2344.receiveShadows = !!i2345[4]
  i2344.shadowCastingMode = i2345[5]
  i2344.sortingLayerID = i2345[6]
  i2344.sortingOrder = i2345[7]
  i2344.lightmapIndex = i2345[8]
  i2344.lightmapSceneIndex = i2345[9]
  i2344.lightmapScaleOffset = new pc.Vec4( i2345[10], i2345[11], i2345[12], i2345[13] )
  i2344.lightProbeUsage = i2345[14]
  i2344.reflectionProbeUsage = i2345[15]
  i2344.color = new pc.Color(i2345[16], i2345[17], i2345[18], i2345[19])
  request.r(i2345[20], i2345[21], 0, i2344, 'sprite')
  i2344.flipX = !!i2345[22]
  i2344.flipY = !!i2345[23]
  i2344.drawMode = i2345[24]
  i2344.size = new pc.Vec2( i2345[25], i2345[26] )
  i2344.tileMode = i2345[27]
  i2344.adaptiveModeThreshold = i2345[28]
  i2344.maskInteraction = i2345[29]
  i2344.spriteSortPoint = i2345[30]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2349 = data
  i2348.name = i2349[0]
  i2348.atlasId = i2349[1]
  i2348.mipmapCount = i2349[2]
  i2348.hdr = !!i2349[3]
  i2348.size = i2349[4]
  i2348.anisoLevel = i2349[5]
  i2348.filterMode = i2349[6]
  i2348.wrapMode = i2349[7]
  var i2351 = i2349[8]
  var i2350 = []
  for(var i = 0; i < i2351.length; i += 4) {
    i2350.push( UnityEngine.Rect.MinMaxRect(i2351[i + 0], i2351[i + 1], i2351[i + 2], i2351[i + 3]) );
  }
  i2348.rects = i2350
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2355 = data
  i2354.name = i2355[0]
  i2354.index = i2355[1]
  i2354.startup = !!i2355[2]
  return i2354
}

Deserializers["LunaChallenge"] = function (request, data, root) {
  var i2356 = root || request.c( 'LunaChallenge' )
  var i2357 = data
  i2356.challengeClear = !!i2357[0]
  request.r(i2357[1], i2357[2], 0, i2356, 'challengeObject')
  request.r(i2357[3], i2357[4], 0, i2356, 'challengeCount')
  request.r(i2357[5], i2357[6], 0, i2356, 'challengeClearObject')
  request.r(i2357[7], i2357[8], 0, i2356, 'challengeSlotObject')
  request.r(i2357[9], i2357[10], 0, i2356, 'tapToStartObject')
  request.r(i2357[11], i2357[12], 0, i2356, 'EndCard')
  request.r(i2357[13], i2357[14], 0, i2356, 'lunaDynamic')
  i2356.goalCount = i2357[15]
  i2356.currentCount = i2357[16]
  return i2356
}

Deserializers["LunaDynamic"] = function (request, data, root) {
  var i2358 = root || request.c( 'LunaDynamic' )
  var i2359 = data
  i2358.challengeCount = i2359[0]
  i2358.stageNum = i2359[1]
  i2358.goToStore = !!i2359[2]
  var i2361 = i2359[3]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.stages = i2360
  return i2358
}

Deserializers["FishingRod"] = function (request, data, root) {
  var i2364 = root || request.c( 'FishingRod' )
  var i2365 = data
  i2364.hookThrowForce = i2365[0]
  i2364.lineForce = i2365[1]
  i2364.maxPullingForce = i2365[2]
  i2364.minPullingForce = i2365[3]
  i2364.currentPullingForece = i2365[4]
  i2364.maxLine = i2365[5]
  i2364.pullingSpeed = i2365[6]
  i2364.playAdsPullCount = i2365[7]
  i2364.isStart = !!i2365[8]
  request.r(i2365[9], i2365[10], 0, i2364, 'hookRigid')
  request.r(i2365[11], i2365[12], 0, i2364, 'pivot')
  request.r(i2365[13], i2365[14], 0, i2364, 'touchToStartPanel')
  request.r(i2365[15], i2365[16], 0, i2364, 'rodAnimator')
  request.r(i2365[17], i2365[18], 0, i2364, 'fishingHook')
  request.r(i2365[19], i2365[20], 0, i2364, 'touchField')
  request.r(i2365[21], i2365[22], 0, i2364, 'upgradePanel')
  request.r(i2365[23], i2365[24], 0, i2364, 'upgradeButton')
  request.r(i2365[25], i2365[26], 0, i2364, 'depthText')
  request.r(i2365[27], i2365[28], 0, i2364, 'touchToPullPanel')
  request.r(i2365[29], i2365[30], 0, i2364, 'throwTarget1')
  request.r(i2365[31], i2365[32], 0, i2364, 'throwTarget2')
  request.r(i2365[33], i2365[34], 0, i2364, 'hookObject')
  request.r(i2365[35], i2365[36], 0, i2364, 'playerObject')
  request.r(i2365[37], i2365[38], 0, i2364, 'animationController')
  return i2364
}

Deserializers["FishingLogic"] = function (request, data, root) {
  var i2366 = root || request.c( 'FishingLogic' )
  var i2367 = data
  request.r(i2367[0], i2367[1], 0, i2366, 'joint')
  i2366.biteBate = !!i2367[2]
  i2366.pulling = !!i2367[3]
  i2366.enablePulling = !!i2367[4]
  request.r(i2367[5], i2367[6], 0, i2366, 'rodAnimator')
  request.r(i2367[7], i2367[8], 0, i2366, 'animationController')
  request.r(i2367[9], i2367[10], 0, i2366, 'startButton')
  request.r(i2367[11], i2367[12], 0, i2366, 'catchSlider')
  request.r(i2367[13], i2367[14], 0, i2366, 'catchButton')
  request.r(i2367[15], i2367[16], 0, i2366, 'fishingRod')
  request.r(i2367[17], i2367[18], 0, i2366, 'arrow')
  request.r(i2367[19], i2367[20], 0, i2366, 'fishingRodSkinned')
  request.r(i2367[21], i2367[22], 0, i2366, 'bubbleParticle')
  request.r(i2367[23], i2367[24], 0, i2366, 'hookRigid')
  request.r(i2367[25], i2367[26], 0, i2366, 'hook')
  return i2366
}

Deserializers["Upgrades"] = function (request, data, root) {
  var i2368 = root || request.c( 'Upgrades' )
  var i2369 = data
  i2368.lineLengthUpgrade = request.d('Upgrades+RangeUpgrade', i2369[0], i2368.lineLengthUpgrade)
  i2368.hookMaxUpgrade = request.d('Upgrades+CountUpgrade', i2369[1], i2368.hookMaxUpgrade)
  i2368.hookMoveSpeedUpgrade = request.d('Upgrades+MovementUpgrade', i2369[2], i2368.hookMoveSpeedUpgrade)
  request.r(i2369[3], i2369[4], 0, i2368, 'hook')
  request.r(i2369[5], i2369[6], 0, i2368, 'rod')
  request.r(i2369[7], i2369[8], 0, i2368, 'touchField')
  request.r(i2369[9], i2369[10], 0, i2368, 'upgradePanel')
  request.r(i2369[11], i2369[12], 0, i2368, 'upgradeTap')
  request.r(i2369[13], i2369[14], 0, i2368, 'closeTap')
  request.r(i2369[15], i2369[16], 0, i2368, 'tapToStartText')
  return i2368
}

Deserializers["Upgrades+RangeUpgrade"] = function (request, data, root) {
  var i2370 = root || request.c( 'Upgrades+RangeUpgrade' )
  var i2371 = data
  i2370.currentLevel = i2371[0]
  i2370.maxLevel = i2371[1]
  i2370.upgradeValue = i2371[2]
  i2370.upgradeNeedyCost = i2371[3]
  i2370.upgradeCostIncreaseValue = i2371[4]
  i2370.upgradeCostIncreaseValueMultifly = i2371[5]
  request.r(i2371[6], i2371[7], 0, i2370, 'levelText')
  request.r(i2371[8], i2371[9], 0, i2370, 'needyCostText')
  request.r(i2371[10], i2371[11], 0, i2370, 'cover')
  request.r(i2371[12], i2371[13], 0, i2370, 'rod')
  return i2370
}

Deserializers["Upgrades+CountUpgrade"] = function (request, data, root) {
  var i2372 = root || request.c( 'Upgrades+CountUpgrade' )
  var i2373 = data
  i2372.currentLevel = i2373[0]
  i2372.maxLevel = i2373[1]
  i2372.upgradeValue = i2373[2]
  i2372.upgradeNeedyCost = i2373[3]
  i2372.upgradeCostIncreaseValue = i2373[4]
  i2372.upgradeCostIncreaseValueMultifly = i2373[5]
  request.r(i2373[6], i2373[7], 0, i2372, 'levelText')
  request.r(i2373[8], i2373[9], 0, i2372, 'needyCostText')
  request.r(i2373[10], i2373[11], 0, i2372, 'cover')
  request.r(i2373[12], i2373[13], 0, i2372, 'hook')
  return i2372
}

Deserializers["Upgrades+MovementUpgrade"] = function (request, data, root) {
  var i2374 = root || request.c( 'Upgrades+MovementUpgrade' )
  var i2375 = data
  i2374.currentLevel = i2375[0]
  i2374.maxLevel = i2375[1]
  i2374.upgradeValue = i2375[2]
  i2374.upgradeNeedyCost = i2375[3]
  i2374.upgradeCostIncreaseValue = i2375[4]
  i2374.upgradeCostIncreaseValueMultifly = i2375[5]
  request.r(i2375[6], i2375[7], 0, i2374, 'levelText')
  request.r(i2375[8], i2375[9], 0, i2374, 'needyCostText')
  request.r(i2375[10], i2375[11], 0, i2374, 'cover')
  request.r(i2375[12], i2375[13], 0, i2374, 'touchField')
  return i2374
}

Deserializers["FishPool"] = function (request, data, root) {
  var i2376 = root || request.c( 'FishPool' )
  var i2377 = data
  i2376.oneTierFishList = request.d('FishList', i2377[0], i2376.oneTierFishList)
  i2376.twoTierFishList = request.d('FishList', i2377[1], i2376.twoTierFishList)
  i2376.threeTierFishList = request.d('FishList', i2377[2], i2376.threeTierFishList)
  i2376.fourTierFishList = request.d('FishList', i2377[3], i2376.fourTierFishList)
  i2376.fiveTierFishList = request.d('FishList', i2377[4], i2376.fiveTierFishList)
  i2376.chestList_one = request.d('FishList', i2377[5], i2376.chestList_one)
  i2376.chestList_two = request.d('FishList', i2377[6], i2376.chestList_two)
  i2376.chestList_three = request.d('FishList', i2377[7], i2376.chestList_three)
  i2376.chestMover = request.d('FishList', i2377[8], i2376.chestMover)
  var i2379 = i2377[9]
  var i2378 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2379.length; i += 2) {
  request.r(i2379[i + 0], i2379[i + 1], 1, i2378, '')
  }
  i2376.generatedFishList = i2378
  request.r(i2377[10], i2377[11], 0, i2376, 'poolParent')
  return i2376
}

Deserializers["FishList"] = function (request, data, root) {
  var i2380 = root || request.c( 'FishList' )
  var i2381 = data
  var i2383 = i2381[0]
  var i2382 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i2383.length; i += 2) {
  request.r(i2383[i + 0], i2383[i + 1], 1, i2382, '')
  }
  i2380.fishList = i2382
  var i2385 = i2381[1]
  var i2384 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2385.length; i += 2) {
  request.r(i2385[i + 0], i2385[i + 1], 1, i2384, '')
  }
  i2380.spawnPoints = i2384
  return i2380
}

Deserializers["LowLineRenderer"] = function (request, data, root) {
  var i2392 = root || request.c( 'LowLineRenderer' )
  var i2393 = data
  request.r(i2393[0], i2393[1], 0, i2392, 'line')
  request.r(i2393[2], i2393[3], 0, i2392, 'start')
  request.r(i2393[4], i2393[5], 0, i2392, 'end')
  return i2392
}

Deserializers["DataManager"] = function (request, data, root) {
  var i2394 = root || request.c( 'DataManager' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'setting')
  request.r(i2395[2], i2395[3], 0, i2394, 'soundSlider')
  request.r(i2395[4], i2395[5], 0, i2394, 'hapticSlider')
  i2394.gameDataFileName = i2395[6]
  i2394._gameData = request.d('GameData', i2395[7], i2394._gameData)
  request.r(i2395[8], i2395[9], 0, i2394, 'soundSliderHandleText')
  request.r(i2395[10], i2395[11], 0, i2394, 'hapticSliderHandleText')
  return i2394
}

Deserializers["GameData"] = function (request, data, root) {
  var i2396 = root || request.c( 'GameData' )
  var i2397 = data
  i2396.money = i2397[0]
  i2396.needleUpgrade = i2397[1]
  i2396.lineUpgrade = i2397[2]
  i2396.reelUpgrade = i2397[3]
  i2396.sound = i2397[4]
  i2396.haptic = i2397[5]
  return i2396
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2399 = data
  request.r(i2399[0], i2399[1], 0, i2398, 'm_FirstSelected')
  i2398.m_sendNavigationEvents = !!i2399[2]
  i2398.m_DragThreshold = i2399[3]
  return i2398
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2401 = data
  i2400.m_HorizontalAxis = i2401[0]
  i2400.m_VerticalAxis = i2401[1]
  i2400.m_SubmitButton = i2401[2]
  i2400.m_CancelButton = i2401[3]
  i2400.m_InputActionsPerSecond = i2401[4]
  i2400.m_RepeatDelay = i2401[5]
  i2400.m_ForceModuleActive = !!i2401[6]
  i2400.m_SendPointerHoverToParent = !!i2401[7]
  return i2400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2403 = data
  i2402.enabled = !!i2403[0]
  i2402.planeDistance = i2403[1]
  i2402.referencePixelsPerUnit = i2403[2]
  i2402.isFallbackOverlay = !!i2403[3]
  i2402.renderMode = i2403[4]
  i2402.renderOrder = i2403[5]
  i2402.sortingLayerName = i2403[6]
  i2402.sortingOrder = i2403[7]
  i2402.scaleFactor = i2403[8]
  request.r(i2403[9], i2403[10], 0, i2402, 'worldCamera')
  i2402.overrideSorting = !!i2403[11]
  i2402.pixelPerfect = !!i2403[12]
  i2402.targetDisplay = i2403[13]
  i2402.overridePixelPerfect = !!i2403[14]
  return i2402
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2405 = data
  i2404.m_UiScaleMode = i2405[0]
  i2404.m_ReferencePixelsPerUnit = i2405[1]
  i2404.m_ScaleFactor = i2405[2]
  i2404.m_ReferenceResolution = new pc.Vec2( i2405[3], i2405[4] )
  i2404.m_ScreenMatchMode = i2405[5]
  i2404.m_MatchWidthOrHeight = i2405[6]
  i2404.m_PhysicalUnit = i2405[7]
  i2404.m_FallbackScreenDPI = i2405[8]
  i2404.m_DefaultSpriteDPI = i2405[9]
  i2404.m_DynamicPixelsPerUnit = i2405[10]
  i2404.m_PresetInfoIsWorld = !!i2405[11]
  return i2404
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2407 = data
  i2406.m_IgnoreReversedGraphics = !!i2407[0]
  i2406.m_BlockingObjects = i2407[1]
  i2406.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2407[2] )
  return i2406
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2408 = root || request.c( 'UIManager' )
  var i2409 = data
  request.r(i2409[0], i2409[1], 0, i2408, 'challengeTarget')
  request.r(i2409[2], i2409[3], 0, i2408, 'challengeText')
  request.r(i2409[4], i2409[5], 0, i2408, 'versionText')
  i2408.normalModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2409[6] )
  i2408.pictureModeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i2409[7] )
  request.r(i2409[8], i2409[9], 0, i2408, 'uiCamera')
  var i2411 = i2409[10]
  var i2410 = []
  for(var i = 0; i < i2411.length; i += 2) {
  request.r(i2411[i + 0], i2411[i + 1], 2, i2410, '')
  }
  i2408.pictureModeObjects = i2410
  return i2408
}

Deserializers["FixedTouchField"] = function (request, data, root) {
  var i2412 = root || request.c( 'FixedTouchField' )
  var i2413 = data
  i2412.TouchDist = new pc.Vec2( i2413[0], i2413[1] )
  i2412.PointerOld = new pc.Vec2( i2413[2], i2413[3] )
  i2412.Pressed = !!i2413[4]
  i2412.hookMoveSpeed = i2413[5]
  request.r(i2413[6], i2413[7], 0, i2412, 'hook')
  request.r(i2413[8], i2413[9], 0, i2412, 'logic')
  request.r(i2413[10], i2413[11], 0, i2412, 'joystick_Background')
  request.r(i2413[12], i2413[13], 0, i2412, 'joystick_Handle')
  request.r(i2413[14], i2413[15], 0, i2412, 'canvas')
  request.r(i2413[16], i2413[17], 0, i2412, 'newCamera')
  i2412.clampDist = i2413[18]
  return i2412
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2414 = root || request.c( 'UnityEngine.UI.Button' )
  var i2415 = data
  i2414.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2415[0], i2414.m_OnClick)
  i2414.m_Navigation = request.d('UnityEngine.UI.Navigation', i2415[1], i2414.m_Navigation)
  i2414.m_Transition = i2415[2]
  i2414.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2415[3], i2414.m_Colors)
  i2414.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2415[4], i2414.m_SpriteState)
  i2414.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2415[5], i2414.m_AnimationTriggers)
  i2414.m_Interactable = !!i2415[6]
  request.r(i2415[7], i2415[8], 0, i2414, 'm_TargetGraphic')
  return i2414
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2417 = data
  i2416.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2417[0], i2416.m_PersistentCalls)
  return i2416
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2419 = data
  var i2421 = i2419[0]
  var i2420 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.add(request.d('UnityEngine.Events.PersistentCall', i2421[i + 0]));
  }
  i2418.m_Calls = i2420
  return i2418
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'm_Target')
  i2424.m_TargetAssemblyTypeName = i2425[2]
  i2424.m_MethodName = i2425[3]
  i2424.m_Mode = i2425[4]
  i2424.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2425[5], i2424.m_Arguments)
  i2424.m_CallState = i2425[6]
  return i2424
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2427 = data
  request.r(i2427[0], i2427[1], 0, i2426, 'm_ObjectArgument')
  i2426.m_ObjectArgumentAssemblyTypeName = i2427[2]
  i2426.m_IntArgument = i2427[3]
  i2426.m_FloatArgument = i2427[4]
  i2426.m_StringArgument = i2427[5]
  i2426.m_BoolArgument = !!i2427[6]
  return i2426
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2429 = data
  i2428.m_Mode = i2429[0]
  i2428.m_WrapAround = !!i2429[1]
  request.r(i2429[2], i2429[3], 0, i2428, 'm_SelectOnUp')
  request.r(i2429[4], i2429[5], 0, i2428, 'm_SelectOnDown')
  request.r(i2429[6], i2429[7], 0, i2428, 'm_SelectOnLeft')
  request.r(i2429[8], i2429[9], 0, i2428, 'm_SelectOnRight')
  return i2428
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2431 = data
  i2430.m_NormalColor = new pc.Color(i2431[0], i2431[1], i2431[2], i2431[3])
  i2430.m_HighlightedColor = new pc.Color(i2431[4], i2431[5], i2431[6], i2431[7])
  i2430.m_PressedColor = new pc.Color(i2431[8], i2431[9], i2431[10], i2431[11])
  i2430.m_SelectedColor = new pc.Color(i2431[12], i2431[13], i2431[14], i2431[15])
  i2430.m_DisabledColor = new pc.Color(i2431[16], i2431[17], i2431[18], i2431[19])
  i2430.m_ColorMultiplier = i2431[20]
  i2430.m_FadeDuration = i2431[21]
  return i2430
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2433 = data
  request.r(i2433[0], i2433[1], 0, i2432, 'm_HighlightedSprite')
  request.r(i2433[2], i2433[3], 0, i2432, 'm_PressedSprite')
  request.r(i2433[4], i2433[5], 0, i2432, 'm_SelectedSprite')
  request.r(i2433[6], i2433[7], 0, i2432, 'm_DisabledSprite')
  return i2432
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2435 = data
  i2434.m_NormalTrigger = i2435[0]
  i2434.m_HighlightedTrigger = i2435[1]
  i2434.m_PressedTrigger = i2435[2]
  i2434.m_SelectedTrigger = i2435[3]
  i2434.m_DisabledTrigger = i2435[4]
  return i2434
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2437 = data
  i2436.m_EffectColor = new pc.Color(i2437[0], i2437[1], i2437[2], i2437[3])
  i2436.m_EffectDistance = new pc.Vec2( i2437[4], i2437[5] )
  i2436.m_UseGraphicAlpha = !!i2437[6]
  return i2436
}

Deserializers["UnityEngine.UI.Slider"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.UI.Slider' )
  var i2439 = data
  request.r(i2439[0], i2439[1], 0, i2438, 'm_FillRect')
  request.r(i2439[2], i2439[3], 0, i2438, 'm_HandleRect')
  i2438.m_Direction = i2439[4]
  i2438.m_MinValue = i2439[5]
  i2438.m_MaxValue = i2439[6]
  i2438.m_WholeNumbers = !!i2439[7]
  i2438.m_Value = i2439[8]
  i2438.m_OnValueChanged = request.d('UnityEngine.UI.Slider+SliderEvent', i2439[9], i2438.m_OnValueChanged)
  i2438.m_Navigation = request.d('UnityEngine.UI.Navigation', i2439[10], i2438.m_Navigation)
  i2438.m_Transition = i2439[11]
  i2438.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2439[12], i2438.m_Colors)
  i2438.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2439[13], i2438.m_SpriteState)
  i2438.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2439[14], i2438.m_AnimationTriggers)
  i2438.m_Interactable = !!i2439[15]
  request.r(i2439[16], i2439[17], 0, i2438, 'm_TargetGraphic')
  return i2438
}

Deserializers["UnityEngine.UI.Slider+SliderEvent"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.Slider+SliderEvent' )
  var i2441 = data
  i2440.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2441[0], i2440.m_PersistentCalls)
  return i2440
}

Deserializers["EnviromentEditor"] = function (request, data, root) {
  var i2442 = root || request.c( 'EnviromentEditor' )
  var i2443 = data
  i2442.oceanSpriteValueMultifly = i2443[0]
  i2442.sunLightIntensity = i2443[1]
  i2442.minSunLightIntensity = i2443[2]
  i2442.challengeLightIntensity = i2443[3]
  i2442.depthMaskTransparentValue = i2443[4]
  i2442.ambientLightIntensity = i2443[5]
  request.r(i2443[6], i2443[7], 0, i2442, 'hook')
  var i2445 = i2443[8]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 2) {
  request.r(i2445[i + 0], i2445[i + 1], 2, i2444, '')
  }
  i2442.Oceans = i2444
  request.r(i2443[9], i2443[10], 0, i2442, 'OceanSurface')
  request.r(i2443[11], i2443[12], 0, i2442, 'depthMask')
  request.r(i2443[13], i2443[14], 0, i2442, 'depthSprite')
  request.r(i2443[15], i2443[16], 0, i2442, 'depthMaskMat')
  request.r(i2443[17], i2443[18], 0, i2442, 'sunLights')
  request.r(i2443[19], i2443[20], 0, i2442, 'hookLight')
  request.r(i2443[21], i2443[22], 0, i2442, 'challengeLight')
  return i2442
}

Deserializers["ObjectMovement"] = function (request, data, root) {
  var i2448 = root || request.c( 'ObjectMovement' )
  var i2449 = data
  i2448.moveX = i2449[0]
  i2448.moveSec = i2449[1]
  return i2448
}

Deserializers["OceanTrigger"] = function (request, data, root) {
  var i2450 = root || request.c( 'OceanTrigger' )
  var i2451 = data
  request.r(i2451[0], i2451[1], 0, i2450, 'touchToPullButton')
  request.r(i2451[2], i2451[3], 0, i2450, 'waterSplashParticle')
  request.r(i2451[4], i2451[5], 0, i2450, 'bubbleParticle')
  request.r(i2451[6], i2451[7], 0, i2450, 'arrow')
  request.r(i2451[8], i2451[9], 0, i2450, 'rigid')
  request.r(i2451[10], i2451[11], 0, i2450, 'hook')
  request.r(i2451[12], i2451[13], 0, i2450, 'rod')
  return i2450
}

Deserializers["Flock"] = function (request, data, root) {
  var i2452 = root || request.c( 'Flock' )
  var i2453 = data
  request.r(i2453[0], i2453[1], 0, i2452, 'flockUnitPrefab')
  i2452.flockSize = i2453[2]
  i2452.spawnBounds = new pc.Vec3( i2453[3], i2453[4], i2453[5] )
  i2452._minSpeed = i2453[6]
  i2452._maxSpeed = i2453[7]
  i2452._cohesionDistance = i2453[8]
  i2452._avoidanceDistance = i2453[9]
  i2452._aligementDistance = i2453[10]
  i2452._obstacleDistance = i2453[11]
  i2452._boundsDistance = i2453[12]
  i2452._cohesionWeight = i2453[13]
  i2452._avoidanceWeight = i2453[14]
  i2452._aligementWeight = i2453[15]
  i2452._boundsWeight = i2453[16]
  i2452._obstacleWeight = i2453[17]
  return i2452
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i2454 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'm_LookAt')
  request.r(i2455[2], i2455[3], 0, i2454, 'm_Follow')
  i2454.m_Lens = request.d('Cinemachine.LensSettings', i2455[4], i2454.m_Lens)
  i2454.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i2455[5], i2454.m_Transitions)
  var i2457 = i2455[6]
  var i2456 = []
  for(var i = 0; i < i2457.length; i += 1) {
    i2456.push( i2457[i + 0] );
  }
  i2454.m_ExcludedPropertiesInInspector = i2456
  var i2459 = i2455[7]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 1) {
    i2458.push( i2459[i + 0] );
  }
  i2454.m_LockStageInInspector = i2458
  i2454.m_Priority = i2455[8]
  i2454.m_StandbyUpdate = i2455[9]
  i2454.m_LegacyBlendHint = i2455[10]
  request.r(i2455[11], i2455[12], 0, i2454, 'm_ComponentOwner')
  i2454.m_StreamingVersion = i2455[13]
  return i2454
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i2460 = root || request.c( 'Cinemachine.LensSettings' )
  var i2461 = data
  i2460.FieldOfView = i2461[0]
  i2460.OrthographicSize = i2461[1]
  i2460.NearClipPlane = i2461[2]
  i2460.FarClipPlane = i2461[3]
  i2460.Dutch = i2461[4]
  i2460.ModeOverride = i2461[5]
  i2460.LensShift = new pc.Vec2( i2461[6], i2461[7] )
  i2460.GateFit = i2461[8]
  i2460.m_SensorSize = new pc.Vec2( i2461[9], i2461[10] )
  return i2460
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i2462 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i2463 = data
  i2462.m_BlendHint = i2463[0]
  i2462.m_InheritPosition = !!i2463[1]
  i2462.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2463[2], i2462.m_OnCameraLive)
  return i2462
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i2464 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i2465 = data
  i2464.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2465[0], i2464.m_PersistentCalls)
  return i2464
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i2470 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i2471 = data
  return i2470
}

Deserializers["Cinemachine.CinemachineComposer"] = function (request, data, root) {
  var i2472 = root || request.c( 'Cinemachine.CinemachineComposer' )
  var i2473 = data
  i2472.m_TrackedObjectOffset = new pc.Vec3( i2473[0], i2473[1], i2473[2] )
  i2472.m_LookaheadTime = i2473[3]
  i2472.m_LookaheadSmoothing = i2473[4]
  i2472.m_LookaheadIgnoreY = !!i2473[5]
  i2472.m_HorizontalDamping = i2473[6]
  i2472.m_VerticalDamping = i2473[7]
  i2472.m_ScreenX = i2473[8]
  i2472.m_ScreenY = i2473[9]
  i2472.m_DeadZoneWidth = i2473[10]
  i2472.m_DeadZoneHeight = i2473[11]
  i2472.m_SoftZoneWidth = i2473[12]
  i2472.m_SoftZoneHeight = i2473[13]
  i2472.m_BiasX = i2473[14]
  i2472.m_BiasY = i2473[15]
  i2472.m_CenterOnActivate = !!i2473[16]
  return i2472
}

Deserializers["Cinemachine.CinemachineTransposer"] = function (request, data, root) {
  var i2474 = root || request.c( 'Cinemachine.CinemachineTransposer' )
  var i2475 = data
  i2474.m_BindingMode = i2475[0]
  i2474.m_FollowOffset = new pc.Vec3( i2475[1], i2475[2], i2475[3] )
  i2474.m_XDamping = i2475[4]
  i2474.m_YDamping = i2475[5]
  i2474.m_ZDamping = i2475[6]
  i2474.m_AngularDampingMode = i2475[7]
  i2474.m_PitchDamping = i2475[8]
  i2474.m_YawDamping = i2475[9]
  i2474.m_RollDamping = i2475[10]
  i2474.m_AngularDamping = i2475[11]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2477 = data
  i2476.enabled = !!i2477[0]
  i2476.aspect = i2477[1]
  i2476.orthographic = !!i2477[2]
  i2476.orthographicSize = i2477[3]
  i2476.backgroundColor = new pc.Color(i2477[4], i2477[5], i2477[6], i2477[7])
  i2476.nearClipPlane = i2477[8]
  i2476.farClipPlane = i2477[9]
  i2476.fieldOfView = i2477[10]
  i2476.depth = i2477[11]
  i2476.clearFlags = i2477[12]
  i2476.cullingMask = i2477[13]
  i2476.rect = i2477[14]
  request.r(i2477[15], i2477[16], 0, i2476, 'targetTexture')
  return i2476
}

Deserializers["CameraMove"] = function (request, data, root) {
  var i2478 = root || request.c( 'CameraMove' )
  var i2479 = data
  i2478.offset = new pc.Vec3( i2479[0], i2479[1], i2479[2] )
  request.r(i2479[3], i2479[4], 0, i2478, 'newCamera')
  request.r(i2479[5], i2479[6], 0, i2478, 'target')
  return i2478
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i2480 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i2481 = data
  i2480.m_ShowDebugText = !!i2481[0]
  i2480.m_ShowCameraFrustum = !!i2481[1]
  i2480.m_IgnoreTimeScale = !!i2481[2]
  request.r(i2481[3], i2481[4], 0, i2480, 'm_WorldUpOverride')
  i2480.m_UpdateMethod = i2481[5]
  i2480.m_BlendUpdateMethod = i2481[6]
  i2480.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i2481[7], i2480.m_DefaultBlend)
  request.r(i2481[8], i2481[9], 0, i2480, 'm_CustomBlends')
  i2480.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i2481[10], i2480.m_CameraCutEvent)
  i2480.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i2481[11], i2480.m_CameraActivatedEvent)
  return i2480
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i2482 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i2483 = data
  i2482.m_Style = i2483[0]
  i2482.m_Time = i2483[1]
  i2482.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i2483[2] } )
  return i2482
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i2484 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i2485 = data
  i2484.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2485[0], i2484.m_PersistentCalls)
  return i2484
}

Deserializers["CinemachineController"] = function (request, data, root) {
  var i2486 = root || request.c( 'CinemachineController' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'playerTrans')
  i2486.playerOffset = new pc.Vec3( i2487[2], i2487[3], i2487[4] )
  request.r(i2487[5], i2487[6], 0, i2486, 'hookTrans')
  i2486.hookOffset = new pc.Vec3( i2487[7], i2487[8], i2487[9] )
  request.r(i2487[10], i2487[11], 0, i2486, 'cvc_Hook')
  request.r(i2487[12], i2487[13], 0, i2486, 'cvc_Player')
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2489 = data
  i2488.enabled = !!i2489[0]
  i2488.isTrigger = !!i2489[1]
  request.r(i2489[2], i2489[3], 0, i2488, 'material')
  i2488.center = new pc.Vec3( i2489[4], i2489[5], i2489[6] )
  i2488.radius = i2489[7]
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i2491 = data
  i2490.enabled = !!i2491[0]
  request.r(i2491[1], i2491[2], 0, i2490, 'sharedMaterial')
  var i2493 = i2491[3]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 2, i2492, '')
  }
  i2490.sharedMaterials = i2492
  i2490.receiveShadows = !!i2491[4]
  i2490.shadowCastingMode = i2491[5]
  i2490.sortingLayerID = i2491[6]
  i2490.sortingOrder = i2491[7]
  i2490.lightmapIndex = i2491[8]
  i2490.lightmapSceneIndex = i2491[9]
  i2490.lightmapScaleOffset = new pc.Vec4( i2491[10], i2491[11], i2491[12], i2491[13] )
  i2490.lightProbeUsage = i2491[14]
  i2490.reflectionProbeUsage = i2491[15]
  var i2495 = i2491[16]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 3) {
    i2494.push( new pc.Vec3( i2495[i + 0], i2495[i + 1], i2495[i + 2] ) );
  }
  i2490.positions = i2494
  i2490.positionCount = i2491[17]
  i2490.time = i2491[18]
  i2490.startWidth = i2491[19]
  i2490.endWidth = i2491[20]
  i2490.widthMultiplier = i2491[21]
  i2490.autodestruct = !!i2491[22]
  i2490.emitting = !!i2491[23]
  i2490.numCornerVertices = i2491[24]
  i2490.numCapVertices = i2491[25]
  i2490.minVertexDistance = i2491[26]
  i2490.colorGradient = i2491[27] ? new pc.ColorGradient(i2491[27][0], i2491[27][1], i2491[27][2]) : null
  i2490.startColor = new pc.Color(i2491[28], i2491[29], i2491[30], i2491[31])
  i2490.endColor = new pc.Color(i2491[32], i2491[33], i2491[34], i2491[35])
  i2490.generateLightingData = !!i2491[36]
  i2490.textureMode = i2491[37]
  i2490.alignment = i2491[38]
  i2490.widthCurve = new pc.AnimationCurve( { keys_flow: i2491[39] } )
  return i2490
}

Deserializers["FishingHook"] = function (request, data, root) {
  var i2496 = root || request.c( 'FishingHook' )
  var i2497 = data
  i2496.OnMoneyChangeEvent = request.d('UnityEngine.Events.UnityEvent', i2497[0], i2496.OnMoneyChangeEvent)
  var i2499 = i2497[1]
  var i2498 = new (System.Collections.Generic.List$1(Bridge.ns('Fish')))
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 1, i2498, '')
  }
  i2496.hookedFish = i2498
  request.r(i2497[2], i2497[3], 0, i2496, 'sellParticle')
  request.r(i2497[4], i2497[5], 0, i2496, 'sellParticleParent')
  i2496.targetHookZoomOffset = i2497[6]
  i2496.minDrag = i2497[7]
  i2496.maxDrag = i2497[8]
  i2496.dragSpeed = i2497[9]
  i2496.fishingHookScaleUpgradeValue = i2497[10]
  i2496.fullHooked = !!i2497[11]
  i2496.inTheOcean = !!i2497[12]
  i2496.money = i2497[13]
  request.r(i2497[14], i2497[15], 0, i2496, 'rigid')
  request.r(i2497[16], i2497[17], 0, i2496, 'canvas')
  request.r(i2497[18], i2497[19], 0, i2496, 'moneyTextPrefab')
  request.r(i2497[20], i2497[21], 0, i2496, 'moneyTextSpawnTransform')
  i2496.moneyTextSpawnMinOffset = new pc.Vec2( i2497[22], i2497[23] )
  i2496.moneyTextSpawnMaxOffset = new pc.Vec2( i2497[24], i2497[25] )
  var i2501 = i2497[26]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 2) {
  request.r(i2501[i + 0], i2501[i + 1], 2, i2500, '')
  }
  i2496.hookedTransforms = i2500
  request.r(i2497[27], i2497[28], 0, i2496, 'fishingRodSkinned')
  request.r(i2497[29], i2497[30], 0, i2496, 'cinemachineCamera')
  request.r(i2497[31], i2497[32], 0, i2496, 'startPoint')
  request.r(i2497[33], i2497[34], 0, i2496, 'hook')
  request.r(i2497[35], i2497[36], 0, i2496, 'rod')
  request.r(i2497[37], i2497[38], 0, i2496, 'playerModel')
  request.r(i2497[39], i2497[40], 0, i2496, 'upgradeButton')
  request.r(i2497[41], i2497[42], 0, i2496, 'depthText')
  request.r(i2497[43], i2497[44], 0, i2496, 'touchField')
  request.r(i2497[45], i2497[46], 0, i2496, 'catchRingParticle')
  request.r(i2497[47], i2497[48], 0, i2496, 'fishSkinPrefab')
  request.r(i2497[49], i2497[50], 0, i2496, 'fishSkinPoint1')
  request.r(i2497[51], i2497[52], 0, i2496, 'fishSkinPoint2')
  request.r(i2497[53], i2497[54], 0, i2496, 'moneyText')
  request.r(i2497[55], i2497[56], 0, i2496, 'HookedCount')
  return i2496
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2502 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2503 = data
  i2502.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2503[0], i2502.m_PersistentCalls)
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2505 = data
  i2504.ambientIntensity = i2505[0]
  i2504.reflectionIntensity = i2505[1]
  i2504.ambientMode = i2505[2]
  i2504.ambientLight = new pc.Color(i2505[3], i2505[4], i2505[5], i2505[6])
  i2504.ambientSkyColor = new pc.Color(i2505[7], i2505[8], i2505[9], i2505[10])
  i2504.ambientGroundColor = new pc.Color(i2505[11], i2505[12], i2505[13], i2505[14])
  i2504.ambientEquatorColor = new pc.Color(i2505[15], i2505[16], i2505[17], i2505[18])
  i2504.fogColor = new pc.Color(i2505[19], i2505[20], i2505[21], i2505[22])
  i2504.fogEndDistance = i2505[23]
  i2504.fogStartDistance = i2505[24]
  i2504.fogDensity = i2505[25]
  i2504.fog = !!i2505[26]
  request.r(i2505[27], i2505[28], 0, i2504, 'skybox')
  i2504.fogMode = i2505[29]
  var i2507 = i2505[30]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2507[i + 0]) );
  }
  i2504.lightmaps = i2506
  i2504.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2505[31], i2504.lightProbes)
  i2504.lightmapsMode = i2505[32]
  i2504.environmentLightingMode = i2505[33]
  i2504.ambientProbe = new pc.SphericalHarmonicsL2(i2505[34])
  i2504.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2505[35])
  i2504.useReferenceAmbientProbe = !!i2505[36]
  request.r(i2505[37], i2505[38], 0, i2504, 'customReflection')
  request.r(i2505[39], i2505[40], 0, i2504, 'defaultReflection')
  i2504.defaultReflectionMode = i2505[41]
  i2504.defaultReflectionResolution = i2505[42]
  i2504.sunLightObjectId = i2505[43]
  i2504.pixelLightCount = i2505[44]
  i2504.defaultReflectionHDR = !!i2505[45]
  i2504.hasLightDataAsset = !!i2505[46]
  i2504.hasManualGenerate = !!i2505[47]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'lightmapColor')
  request.r(i2511[2], i2511[3], 0, i2510, 'lightmapDirection')
  return i2510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2512 = root || new UnityEngine.LightProbes()
  var i2513 = data
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2519 = data
  var i2521 = i2519[0]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.add(i2521[i + 0]);
  }
  i2518.invalidShaderVariants = i2520
  i2518.name = i2519[1]
  i2518.guid = i2519[2]
  var i2523 = i2519[3]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( i2523[i + 0] );
  }
  i2518.shaderDefinedKeywords = i2522
  var i2525 = i2519[4]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2525[i + 0]) );
  }
  i2518.passes = i2524
  var i2527 = i2519[5]
  var i2526 = []
  for(var i = 0; i < i2527.length; i += 1) {
    i2526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2527[i + 0]) );
  }
  i2518.usePasses = i2526
  var i2529 = i2519[6]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2529[i + 0]) );
  }
  i2518.defaultParameterValues = i2528
  request.r(i2519[7], i2519[8], 0, i2518, 'unityFallbackShader')
  i2518.readDepth = !!i2519[9]
  i2518.isCreatedByShaderGraph = !!i2519[10]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2534 = root || new pc.UnityShaderPass()
  var i2535 = data
  i2534.id = i2535[0]
  i2534.subShaderIndex = i2535[1]
  i2534.name = i2535[2]
  i2534.passType = i2535[3]
  i2534.usePass = !!i2535[4]
  i2534.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[5], i2534.zTest)
  i2534.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[6], i2534.zWrite)
  i2534.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[7], i2534.culling)
  i2534.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2535[8], i2534.blending)
  i2534.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2535[9], i2534.alphaBlending)
  i2534.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[10], i2534.colorWriteMask)
  i2534.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[11], i2534.offsetUnits)
  i2534.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[12], i2534.offsetFactor)
  i2534.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[13], i2534.stencilRef)
  i2534.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[14], i2534.stencilReadMask)
  i2534.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2535[15], i2534.stencilWriteMask)
  i2534.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2535[16], i2534.stencilOp)
  i2534.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2535[17], i2534.stencilOpFront)
  i2534.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2535[18], i2534.stencilOpBack)
  var i2537 = i2535[19]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2537[i + 0]) );
  }
  i2534.tags = i2536
  var i2539 = i2535[20]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( i2539[i + 0] );
  }
  i2534.passDefinedKeywords = i2538
  var i2541 = i2535[21]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2541[i + 0]) );
  }
  i2534.passDefinedKeywordGroups = i2540
  var i2543 = i2535[22]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2543[i + 0]) );
  }
  i2534.variants = i2542
  var i2545 = i2535[23]
  var i2544 = []
  for(var i = 0; i < i2545.length; i += 1) {
    i2544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2545[i + 0]) );
  }
  i2534.excludedVariants = i2544
  i2534.hasDepthReader = !!i2535[24]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2547 = data
  i2546.val = i2547[0]
  i2546.name = i2547[1]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2549 = data
  i2548.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[0], i2548.src)
  i2548.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[1], i2548.dst)
  i2548.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[2], i2548.op)
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2551 = data
  i2550.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[0], i2550.pass)
  i2550.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[1], i2550.fail)
  i2550.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[2], i2550.zFail)
  i2550.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2551[3], i2550.comp)
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2555 = data
  i2554.name = i2555[0]
  i2554.value = i2555[1]
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2559 = data
  var i2561 = i2559[0]
  var i2560 = []
  for(var i = 0; i < i2561.length; i += 1) {
    i2560.push( i2561[i + 0] );
  }
  i2558.keywords = i2560
  i2558.hasDiscard = !!i2559[1]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2565 = data
  i2564.passId = i2565[0]
  i2564.subShaderIndex = i2565[1]
  var i2567 = i2565[2]
  var i2566 = []
  for(var i = 0; i < i2567.length; i += 1) {
    i2566.push( i2567[i + 0] );
  }
  i2564.keywords = i2566
  i2564.vertexProgram = i2565[3]
  i2564.fragmentProgram = i2565[4]
  i2564.readDepth = !!i2565[5]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2571 = data
  request.r(i2571[0], i2571[1], 0, i2570, 'shader')
  i2570.pass = i2571[2]
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2575 = data
  i2574.name = i2575[0]
  i2574.type = i2575[1]
  i2574.value = new pc.Vec4( i2575[2], i2575[3], i2575[4], i2575[5] )
  i2574.textureValue = i2575[6]
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2577 = data
  i2576.name = i2577[0]
  request.r(i2577[1], i2577[2], 0, i2576, 'texture')
  i2576.aabb = i2577[3]
  i2576.vertices = i2577[4]
  i2576.triangles = i2577[5]
  i2576.textureRect = UnityEngine.Rect.MinMaxRect(i2577[6], i2577[7], i2577[8], i2577[9])
  i2576.packedRect = UnityEngine.Rect.MinMaxRect(i2577[10], i2577[11], i2577[12], i2577[13])
  i2576.border = new pc.Vec4( i2577[14], i2577[15], i2577[16], i2577[17] )
  i2576.transparency = i2577[18]
  i2576.bounds = i2577[19]
  i2576.pixelsPerUnit = i2577[20]
  i2576.textureWidth = i2577[21]
  i2576.textureHeight = i2577[22]
  i2576.nativeSize = new pc.Vec2( i2577[23], i2577[24] )
  i2576.pivot = new pc.Vec2( i2577[25], i2577[26] )
  i2576.textureRectOffset = new pc.Vec2( i2577[27], i2577[28] )
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2579 = data
  i2578.name = i2579[0]
  i2578.wrapMode = i2579[1]
  i2578.isLooping = !!i2579[2]
  i2578.length = i2579[3]
  var i2581 = i2579[4]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2581[i + 0]) );
  }
  i2578.curves = i2580
  var i2583 = i2579[5]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2583[i + 0]) );
  }
  i2578.events = i2582
  i2578.halfPrecision = !!i2579[6]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2587 = data
  i2586.path = i2587[0]
  i2586.componentType = i2587[1]
  i2586.property = i2587[2]
  i2586.keys = i2587[3]
  var i2589 = i2587[4]
  var i2588 = []
  for(var i = 0; i < i2589.length; i += 1) {
    i2588.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2589[i + 0]) );
  }
  i2586.objectReferenceKeys = i2588
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2593 = data
  i2592.time = i2593[0]
  request.r(i2593[1], i2593[2], 0, i2592, 'value')
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2597 = data
  i2596.functionName = i2597[0]
  i2596.floatParameter = i2597[1]
  i2596.intParameter = i2597[2]
  i2596.stringParameter = i2597[3]
  request.r(i2597[4], i2597[5], 0, i2596, 'objectReferenceParameter')
  i2596.time = i2597[6]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2599 = data
  i2598.name = i2599[0]
  var i2601 = i2599[1]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 1) {
    i2600.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2601[i + 0]) );
  }
  i2598.states = i2600
  var i2603 = i2599[2]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2603[i + 0]) );
  }
  i2598.layers = i2602
  var i2605 = i2599[3]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2605[i + 0]) );
  }
  i2598.parameters = i2604
  var i2607 = i2599[4]
  var i2606 = []
  for(var i = 0; i < i2607.length; i += 1) {
    i2606.push( i2607[i + 0] );
  }
  i2598.animationClips = i2606
  i2598.HasSubStateMachines = !!i2599[5]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2611 = data
  i2610.cycleOffset = i2611[0]
  i2610.cycleOffsetParameter = i2611[1]
  i2610.cycleOffsetParameterActive = !!i2611[2]
  i2610.mirror = !!i2611[3]
  i2610.mirrorParameter = i2611[4]
  i2610.mirrorParameterActive = !!i2611[5]
  i2610.motionId = i2611[6]
  i2610.nameHash = i2611[7]
  i2610.fullPathHash = i2611[8]
  i2610.speed = i2611[9]
  i2610.speedParameter = i2611[10]
  i2610.speedParameterActive = !!i2611[11]
  i2610.tag = i2611[12]
  i2610.name = i2611[13]
  i2610.writeDefaultValues = !!i2611[14]
  var i2613 = i2611[15]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2613[i + 0]) );
  }
  i2610.transitions = i2612
  var i2615 = i2611[16]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 2) {
  request.r(i2615[i + 0], i2615[i + 1], 2, i2614, '')
  }
  i2610.behaviours = i2614
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2619 = data
  i2618.fullPath = i2619[0]
  i2618.canTransitionToSelf = !!i2619[1]
  i2618.duration = i2619[2]
  i2618.exitTime = i2619[3]
  i2618.hasExitTime = !!i2619[4]
  i2618.hasFixedDuration = !!i2619[5]
  i2618.interruptionSource = i2619[6]
  i2618.offset = i2619[7]
  i2618.orderedInterruption = !!i2619[8]
  i2618.destinationStateNameHash = i2619[9]
  i2618.destinationStateMachineId = i2619[10]
  i2618.isExit = !!i2619[11]
  i2618.mute = !!i2619[12]
  i2618.solo = !!i2619[13]
  var i2621 = i2619[14]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2621[i + 0]) );
  }
  i2618.conditions = i2620
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2625 = data
  i2624.mode = i2625[0]
  i2624.parameter = i2625[1]
  i2624.threshold = i2625[2]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2631 = data
  i2630.blendingMode = i2631[0]
  i2630.defaultWeight = i2631[1]
  i2630.name = i2631[2]
  i2630.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2631[3], i2630.stateMachine)
  return i2630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2633 = data
  i2632.id = i2633[0]
  i2632.defaultStateNameHash = i2633[1]
  var i2635 = i2633[2]
  var i2634 = []
  for(var i = 0; i < i2635.length; i += 1) {
    i2634.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2635[i + 0]) );
  }
  i2632.entryTransitions = i2634
  var i2637 = i2633[3]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2637[i + 0]) );
  }
  i2632.anyStateTransitions = i2636
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2641 = data
  i2640.destinationStateNameHash = i2641[0]
  i2640.destinationStateMachineId = i2641[1]
  i2640.isExit = !!i2641[2]
  i2640.mute = !!i2641[3]
  i2640.solo = !!i2641[4]
  var i2643 = i2641[5]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2643[i + 0]) );
  }
  i2640.conditions = i2642
  return i2640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2647 = data
  i2646.defaultBool = !!i2647[0]
  i2646.defaultFloat = i2647[1]
  i2646.defaultInt = i2647[2]
  i2646.name = i2647[3]
  i2646.nameHash = i2647[4]
  i2646.type = i2647[5]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2649 = data
  i2648.name = i2649[0]
  i2648.bytes64 = i2649[1]
  i2648.data = i2649[2]
  return i2648
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2650 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2651 = data
  i2650.hashCode = i2651[0]
  request.r(i2651[1], i2651[2], 0, i2650, 'material')
  i2650.materialHashCode = i2651[3]
  request.r(i2651[4], i2651[5], 0, i2650, 'atlas')
  i2650.normalStyle = i2651[6]
  i2650.normalSpacingOffset = i2651[7]
  i2650.boldStyle = i2651[8]
  i2650.boldSpacing = i2651[9]
  i2650.italicStyle = i2651[10]
  i2650.tabSize = i2651[11]
  i2650.m_Version = i2651[12]
  i2650.m_SourceFontFileGUID = i2651[13]
  request.r(i2651[14], i2651[15], 0, i2650, 'm_SourceFontFile_EditorRef')
  request.r(i2651[16], i2651[17], 0, i2650, 'm_SourceFontFile')
  i2650.m_AtlasPopulationMode = i2651[18]
  i2650.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2651[19], i2650.m_FaceInfo)
  var i2653 = i2651[20]
  var i2652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2653.length; i += 1) {
    i2652.add(request.d('UnityEngine.TextCore.Glyph', i2653[i + 0]));
  }
  i2650.m_GlyphTable = i2652
  var i2655 = i2651[21]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('TMPro.TMP_Character', i2655[i + 0]));
  }
  i2650.m_CharacterTable = i2654
  var i2657 = i2651[22]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 2) {
  request.r(i2657[i + 0], i2657[i + 1], 2, i2656, '')
  }
  i2650.m_AtlasTextures = i2656
  i2650.m_AtlasTextureIndex = i2651[23]
  i2650.m_IsMultiAtlasTexturesEnabled = !!i2651[24]
  i2650.m_ClearDynamicDataOnBuild = !!i2651[25]
  var i2659 = i2651[26]
  var i2658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.add(request.d('UnityEngine.TextCore.GlyphRect', i2659[i + 0]));
  }
  i2650.m_UsedGlyphRects = i2658
  var i2661 = i2651[27]
  var i2660 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.add(request.d('UnityEngine.TextCore.GlyphRect', i2661[i + 0]));
  }
  i2650.m_FreeGlyphRects = i2660
  i2650.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2651[28], i2650.m_fontInfo)
  i2650.m_AtlasWidth = i2651[29]
  i2650.m_AtlasHeight = i2651[30]
  i2650.m_AtlasPadding = i2651[31]
  i2650.m_AtlasRenderMode = i2651[32]
  var i2663 = i2651[33]
  var i2662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.add(request.d('TMPro.TMP_Glyph', i2663[i + 0]));
  }
  i2650.m_glyphInfoList = i2662
  i2650.m_KerningTable = request.d('TMPro.KerningTable', i2651[34], i2650.m_KerningTable)
  i2650.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2651[35], i2650.m_FontFeatureTable)
  var i2665 = i2651[36]
  var i2664 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2665.length; i += 2) {
  request.r(i2665[i + 0], i2665[i + 1], 1, i2664, '')
  }
  i2650.fallbackFontAssets = i2664
  var i2667 = i2651[37]
  var i2666 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2667.length; i += 2) {
  request.r(i2667[i + 0], i2667[i + 1], 1, i2666, '')
  }
  i2650.m_FallbackFontAssetTable = i2666
  i2650.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2651[38], i2650.m_CreationSettings)
  var i2669 = i2651[39]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('TMPro.TMP_FontWeightPair', i2669[i + 0]) );
  }
  i2650.m_FontWeightTable = i2668
  var i2671 = i2651[40]
  var i2670 = []
  for(var i = 0; i < i2671.length; i += 1) {
    i2670.push( request.d('TMPro.TMP_FontWeightPair', i2671[i + 0]) );
  }
  i2650.fontWeights = i2670
  return i2650
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2672 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2673 = data
  i2672.m_FaceIndex = i2673[0]
  i2672.m_FamilyName = i2673[1]
  i2672.m_StyleName = i2673[2]
  i2672.m_PointSize = i2673[3]
  i2672.m_Scale = i2673[4]
  i2672.m_LineHeight = i2673[5]
  i2672.m_AscentLine = i2673[6]
  i2672.m_CapLine = i2673[7]
  i2672.m_MeanLine = i2673[8]
  i2672.m_Baseline = i2673[9]
  i2672.m_DescentLine = i2673[10]
  i2672.m_SuperscriptOffset = i2673[11]
  i2672.m_SuperscriptSize = i2673[12]
  i2672.m_SubscriptOffset = i2673[13]
  i2672.m_SubscriptSize = i2673[14]
  i2672.m_UnderlineOffset = i2673[15]
  i2672.m_UnderlineThickness = i2673[16]
  i2672.m_StrikethroughOffset = i2673[17]
  i2672.m_StrikethroughThickness = i2673[18]
  i2672.m_TabWidth = i2673[19]
  return i2672
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2676 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2677 = data
  i2676.m_Index = i2677[0]
  i2676.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2677[1], i2676.m_Metrics)
  i2676.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2677[2], i2676.m_GlyphRect)
  i2676.m_Scale = i2677[3]
  i2676.m_AtlasIndex = i2677[4]
  return i2676
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2678 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2679 = data
  i2678.m_Width = i2679[0]
  i2678.m_Height = i2679[1]
  i2678.m_HorizontalBearingX = i2679[2]
  i2678.m_HorizontalBearingY = i2679[3]
  i2678.m_HorizontalAdvance = i2679[4]
  return i2678
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2680 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2681 = data
  i2680.m_X = i2681[0]
  i2680.m_Y = i2681[1]
  i2680.m_Width = i2681[2]
  i2680.m_Height = i2681[3]
  return i2680
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2684 = root || request.c( 'TMPro.TMP_Character' )
  var i2685 = data
  i2684.m_ElementType = i2685[0]
  i2684.m_Unicode = i2685[1]
  i2684.m_GlyphIndex = i2685[2]
  i2684.m_Scale = i2685[3]
  return i2684
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2690 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2691 = data
  i2690.Name = i2691[0]
  i2690.PointSize = i2691[1]
  i2690.Scale = i2691[2]
  i2690.CharacterCount = i2691[3]
  i2690.LineHeight = i2691[4]
  i2690.Baseline = i2691[5]
  i2690.Ascender = i2691[6]
  i2690.CapHeight = i2691[7]
  i2690.Descender = i2691[8]
  i2690.CenterLine = i2691[9]
  i2690.SuperscriptOffset = i2691[10]
  i2690.SubscriptOffset = i2691[11]
  i2690.SubSize = i2691[12]
  i2690.Underline = i2691[13]
  i2690.UnderlineThickness = i2691[14]
  i2690.strikethrough = i2691[15]
  i2690.strikethroughThickness = i2691[16]
  i2690.TabWidth = i2691[17]
  i2690.Padding = i2691[18]
  i2690.AtlasWidth = i2691[19]
  i2690.AtlasHeight = i2691[20]
  return i2690
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2694 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2695 = data
  i2694.id = i2695[0]
  i2694.x = i2695[1]
  i2694.y = i2695[2]
  i2694.width = i2695[3]
  i2694.height = i2695[4]
  i2694.xOffset = i2695[5]
  i2694.yOffset = i2695[6]
  i2694.xAdvance = i2695[7]
  i2694.scale = i2695[8]
  return i2694
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2696 = root || request.c( 'TMPro.KerningTable' )
  var i2697 = data
  var i2699 = i2697[0]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.add(request.d('TMPro.KerningPair', i2699[i + 0]));
  }
  i2696.kerningPairs = i2698
  return i2696
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2702 = root || request.c( 'TMPro.KerningPair' )
  var i2703 = data
  i2702.xOffset = i2703[0]
  i2702.m_FirstGlyph = i2703[1]
  i2702.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2703[2], i2702.m_FirstGlyphAdjustments)
  i2702.m_SecondGlyph = i2703[3]
  i2702.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2703[4], i2702.m_SecondGlyphAdjustments)
  i2702.m_IgnoreSpacingAdjustments = !!i2703[5]
  return i2702
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2704 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2705 = data
  var i2707 = i2705[0]
  var i2706 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2707[i + 0]));
  }
  i2704.m_GlyphPairAdjustmentRecords = i2706
  return i2704
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2710 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2711 = data
  i2710.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2711[0], i2710.m_FirstAdjustmentRecord)
  i2710.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2711[1], i2710.m_SecondAdjustmentRecord)
  i2710.m_FeatureLookupFlags = i2711[2]
  return i2710
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2714 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2715 = data
  i2714.sourceFontFileName = i2715[0]
  i2714.sourceFontFileGUID = i2715[1]
  i2714.pointSizeSamplingMode = i2715[2]
  i2714.pointSize = i2715[3]
  i2714.padding = i2715[4]
  i2714.packingMode = i2715[5]
  i2714.atlasWidth = i2715[6]
  i2714.atlasHeight = i2715[7]
  i2714.characterSetSelectionMode = i2715[8]
  i2714.characterSequence = i2715[9]
  i2714.referencedFontAssetGUID = i2715[10]
  i2714.referencedTextAssetGUID = i2715[11]
  i2714.fontStyle = i2715[12]
  i2714.fontStyleModifier = i2715[13]
  i2714.renderMode = i2715[14]
  i2714.includeFontFeatures = !!i2715[15]
  return i2714
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2718 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2719 = data
  request.r(i2719[0], i2719[1], 0, i2718, 'regularTypeface')
  request.r(i2719[2], i2719[3], 0, i2718, 'italicTypeface')
  return i2718
}

Deserializers["MapData"] = function (request, data, root) {
  var i2720 = root || request.c( 'MapData' )
  var i2721 = data
  var i2723 = i2721[0]
  var i2722 = new (System.Collections.Generic.List$1(Bridge.ns('MapData+mapData')))
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.add(request.d('MapData+mapData', i2723[i + 0]));
  }
  i2720.mapDataList = i2722
  return i2720
}

Deserializers["MapData+mapData"] = function (request, data, root) {
  var i2726 = root || request.c( 'MapData+mapData' )
  var i2727 = data
  i2726.tier = i2727[0]
  i2726.minMapSize = new pc.Vec3( i2727[1], i2727[2], i2727[3] )
  i2726.maxMapSize = new pc.Vec3( i2727[4], i2727[5], i2727[6] )
  return i2726
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.TMP_Settings' )
  var i2729 = data
  i2728.m_enableWordWrapping = !!i2729[0]
  i2728.m_enableKerning = !!i2729[1]
  i2728.m_enableExtraPadding = !!i2729[2]
  i2728.m_enableTintAllSprites = !!i2729[3]
  i2728.m_enableParseEscapeCharacters = !!i2729[4]
  i2728.m_EnableRaycastTarget = !!i2729[5]
  i2728.m_GetFontFeaturesAtRuntime = !!i2729[6]
  i2728.m_missingGlyphCharacter = i2729[7]
  i2728.m_warningsDisabled = !!i2729[8]
  request.r(i2729[9], i2729[10], 0, i2728, 'm_defaultFontAsset')
  i2728.m_defaultFontAssetPath = i2729[11]
  i2728.m_defaultFontSize = i2729[12]
  i2728.m_defaultAutoSizeMinRatio = i2729[13]
  i2728.m_defaultAutoSizeMaxRatio = i2729[14]
  i2728.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2729[15], i2729[16] )
  i2728.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2729[17], i2729[18] )
  i2728.m_autoSizeTextContainer = !!i2729[19]
  i2728.m_IsTextObjectScaleStatic = !!i2729[20]
  var i2731 = i2729[21]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2731.length; i += 2) {
  request.r(i2731[i + 0], i2731[i + 1], 1, i2730, '')
  }
  i2728.m_fallbackFontAssets = i2730
  i2728.m_matchMaterialPreset = !!i2729[22]
  request.r(i2729[23], i2729[24], 0, i2728, 'm_defaultSpriteAsset')
  i2728.m_defaultSpriteAssetPath = i2729[25]
  i2728.m_enableEmojiSupport = !!i2729[26]
  i2728.m_MissingCharacterSpriteUnicode = i2729[27]
  i2728.m_defaultColorGradientPresetsPath = i2729[28]
  request.r(i2729[29], i2729[30], 0, i2728, 'm_defaultStyleSheet')
  i2728.m_StyleSheetsResourcePath = i2729[31]
  request.r(i2729[32], i2729[33], 0, i2728, 'm_leadingCharacters')
  request.r(i2729[34], i2729[35], 0, i2728, 'm_followingCharacters')
  i2728.m_UseModernHangulLineBreakingRules = !!i2729[36]
  return i2728
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2732 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2733 = data
  i2732.hashCode = i2733[0]
  request.r(i2733[1], i2733[2], 0, i2732, 'material')
  i2732.materialHashCode = i2733[3]
  request.r(i2733[4], i2733[5], 0, i2732, 'spriteSheet')
  var i2735 = i2733[6]
  var i2734 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.add(request.d('TMPro.TMP_Sprite', i2735[i + 0]));
  }
  i2732.spriteInfoList = i2734
  var i2737 = i2733[7]
  var i2736 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2737.length; i += 2) {
  request.r(i2737[i + 0], i2737[i + 1], 1, i2736, '')
  }
  i2732.fallbackSpriteAssets = i2736
  i2732.m_Version = i2733[8]
  i2732.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2733[9], i2732.m_FaceInfo)
  var i2739 = i2733[10]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('TMPro.TMP_SpriteCharacter', i2739[i + 0]));
  }
  i2732.m_SpriteCharacterTable = i2738
  var i2741 = i2733[11]
  var i2740 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.add(request.d('TMPro.TMP_SpriteGlyph', i2741[i + 0]));
  }
  i2732.m_SpriteGlyphTable = i2740
  return i2732
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2745 = data
  i2744.name = i2745[0]
  i2744.hashCode = i2745[1]
  i2744.unicode = i2745[2]
  i2744.pivot = new pc.Vec2( i2745[3], i2745[4] )
  request.r(i2745[5], i2745[6], 0, i2744, 'sprite')
  i2744.id = i2745[7]
  i2744.x = i2745[8]
  i2744.y = i2745[9]
  i2744.width = i2745[10]
  i2744.height = i2745[11]
  i2744.xOffset = i2745[12]
  i2744.yOffset = i2745[13]
  i2744.xAdvance = i2745[14]
  i2744.scale = i2745[15]
  return i2744
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2751 = data
  i2750.m_Name = i2751[0]
  i2750.m_HashCode = i2751[1]
  i2750.m_ElementType = i2751[2]
  i2750.m_Unicode = i2751[3]
  i2750.m_GlyphIndex = i2751[4]
  i2750.m_Scale = i2751[5]
  return i2750
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'sprite')
  i2754.m_Index = i2755[2]
  i2754.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2755[3], i2754.m_Metrics)
  i2754.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2755[4], i2754.m_GlyphRect)
  i2754.m_Scale = i2755[5]
  i2754.m_AtlasIndex = i2755[6]
  return i2754
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2756 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2757 = data
  var i2759 = i2757[0]
  var i2758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.add(request.d('TMPro.TMP_Style', i2759[i + 0]));
  }
  i2756.m_StyleList = i2758
  return i2756
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2762 = root || request.c( 'TMPro.TMP_Style' )
  var i2763 = data
  i2762.m_Name = i2763[0]
  i2762.m_HashCode = i2763[1]
  i2762.m_OpeningDefinition = i2763[2]
  i2762.m_ClosingDefinition = i2763[3]
  i2762.m_OpeningTagArray = i2763[4]
  i2762.m_ClosingTagArray = i2763[5]
  i2762.m_OpeningTagUnicodeArray = i2763[6]
  i2762.m_ClosingTagUnicodeArray = i2763[7]
  return i2762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2765 = data
  var i2767 = i2765[0]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2767[i + 0]) );
  }
  i2764.files = i2766
  i2764.componentToPrefabIds = i2765[1]
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2771 = data
  i2770.path = i2771[0]
  request.r(i2771[1], i2771[2], 0, i2770, 'unityObject')
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2773 = data
  var i2775 = i2773[0]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2775[i + 0]) );
  }
  i2772.scriptsExecutionOrder = i2774
  var i2777 = i2773[1]
  var i2776 = []
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2777[i + 0]) );
  }
  i2772.sortingLayers = i2776
  var i2779 = i2773[2]
  var i2778 = []
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2779[i + 0]) );
  }
  i2772.cullingLayers = i2778
  i2772.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2773[3], i2772.timeSettings)
  i2772.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2773[4], i2772.physicsSettings)
  i2772.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2773[5], i2772.physics2DSettings)
  i2772.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2773[6], i2772.qualitySettings)
  i2772.enableRealtimeShadows = !!i2773[7]
  i2772.autoInstantiatePrefabs = !!i2773[8]
  i2772.enableAutoInstancing = !!i2773[9]
  i2772.lightmapEncodingQuality = i2773[10]
  i2772.desiredColorSpace = i2773[11]
  return i2772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2783 = data
  i2782.name = i2783[0]
  i2782.value = i2783[1]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2787 = data
  i2786.id = i2787[0]
  i2786.name = i2787[1]
  i2786.value = i2787[2]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2791 = data
  i2790.id = i2791[0]
  i2790.name = i2791[1]
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2793 = data
  i2792.fixedDeltaTime = i2793[0]
  i2792.maximumDeltaTime = i2793[1]
  i2792.timeScale = i2793[2]
  i2792.maximumParticleTimestep = i2793[3]
  return i2792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2795 = data
  i2794.gravity = new pc.Vec3( i2795[0], i2795[1], i2795[2] )
  i2794.defaultSolverIterations = i2795[3]
  i2794.bounceThreshold = i2795[4]
  i2794.autoSyncTransforms = !!i2795[5]
  i2794.autoSimulation = !!i2795[6]
  var i2797 = i2795[7]
  var i2796 = []
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2797[i + 0]) );
  }
  i2794.collisionMatrix = i2796
  return i2794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2801 = data
  i2800.enabled = !!i2801[0]
  i2800.layerId = i2801[1]
  i2800.otherLayerId = i2801[2]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2803 = data
  request.r(i2803[0], i2803[1], 0, i2802, 'material')
  i2802.gravity = new pc.Vec2( i2803[2], i2803[3] )
  i2802.positionIterations = i2803[4]
  i2802.velocityIterations = i2803[5]
  i2802.velocityThreshold = i2803[6]
  i2802.maxLinearCorrection = i2803[7]
  i2802.maxAngularCorrection = i2803[8]
  i2802.maxTranslationSpeed = i2803[9]
  i2802.maxRotationSpeed = i2803[10]
  i2802.timeToSleep = i2803[11]
  i2802.linearSleepTolerance = i2803[12]
  i2802.angularSleepTolerance = i2803[13]
  i2802.defaultContactOffset = i2803[14]
  i2802.autoSimulation = !!i2803[15]
  i2802.queriesHitTriggers = !!i2803[16]
  i2802.queriesStartInColliders = !!i2803[17]
  i2802.callbacksOnDisable = !!i2803[18]
  i2802.reuseCollisionCallbacks = !!i2803[19]
  i2802.autoSyncTransforms = !!i2803[20]
  var i2805 = i2803[21]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2805[i + 0]) );
  }
  i2802.collisionMatrix = i2804
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2809 = data
  i2808.enabled = !!i2809[0]
  i2808.layerId = i2809[1]
  i2808.otherLayerId = i2809[2]
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2813[i + 0]) );
  }
  i2810.qualityLevels = i2812
  var i2815 = i2811[1]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( i2815[i + 0] );
  }
  i2810.names = i2814
  i2810.shadows = i2811[2]
  i2810.anisotropicFiltering = i2811[3]
  i2810.antiAliasing = i2811[4]
  i2810.lodBias = i2811[5]
  i2810.shadowCascades = i2811[6]
  i2810.shadowDistance = i2811[7]
  i2810.shadowmaskMode = i2811[8]
  i2810.shadowProjection = i2811[9]
  i2810.shadowResolution = i2811[10]
  i2810.softParticles = !!i2811[11]
  i2810.softVegetation = !!i2811[12]
  i2810.activeColorSpace = i2811[13]
  i2810.desiredColorSpace = i2811[14]
  i2810.masterTextureLimit = i2811[15]
  i2810.maxQueuedFrames = i2811[16]
  i2810.particleRaycastBudget = i2811[17]
  i2810.pixelLightCount = i2811[18]
  i2810.realtimeReflectionProbes = !!i2811[19]
  i2810.shadowCascade2Split = i2811[20]
  i2810.shadowCascade4Split = new pc.Vec3( i2811[21], i2811[22], i2811[23] )
  i2810.streamingMipmapsActive = !!i2811[24]
  i2810.vSyncCount = i2811[25]
  i2810.asyncUploadBufferSize = i2811[26]
  i2810.asyncUploadTimeSlice = i2811[27]
  i2810.billboardsFaceCameraPosition = !!i2811[28]
  i2810.shadowNearPlaneOffset = i2811[29]
  i2810.streamingMipmapsMemoryBudget = i2811[30]
  i2810.maximumLODLevel = i2811[31]
  i2810.streamingMipmapsAddAllCameras = !!i2811[32]
  i2810.streamingMipmapsMaxLevelReduction = i2811[33]
  i2810.streamingMipmapsRenderersPerFrame = i2811[34]
  i2810.resolutionScalingFixedDPIFactor = i2811[35]
  i2810.streamingMipmapsMaxFileIORequests = i2811[36]
  i2810.currentQualityLevel = i2811[37]
  return i2810
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2818 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2819 = data
  i2818.xPlacement = i2819[0]
  i2818.yPlacement = i2819[1]
  i2818.xAdvance = i2819[2]
  i2818.yAdvance = i2819[3]
  return i2818
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2820 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2821 = data
  i2820.m_GlyphIndex = i2821[0]
  i2820.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2821[1], i2820.m_GlyphValueRecord)
  return i2820
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2822 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2823 = data
  i2822.m_XPlacement = i2823[0]
  i2822.m_YPlacement = i2823[1]
  i2822.m_XAdvance = i2823[2]
  i2822.m_YAdvance = i2823[3]
  return i2822
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

Deserializers.buildID = "c1522ced-7aac-4923-9564-0432f7d5edba";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

