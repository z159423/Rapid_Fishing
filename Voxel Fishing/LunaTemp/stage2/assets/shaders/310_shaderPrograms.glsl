["#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _DetailTex_ST;\nuniform \tvec4 _DetailTex_TexelSize;\nuniform \tmediump vec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nattribute mediump vec4 in_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying mediump vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0.xy = in_TEXCOORD1.xy * _DetailTex_TexelSize.xy;\n    vs_TEXCOORD1.xy = u_xlat0.xy * _DetailTex_ST.xy + _DetailTex_ST.zw;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD2 = in_POSITION0;\n    vs_COLOR0 = in_COLOR0 * _Color;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform \tmediump float _Strength;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _DetailTex;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying mediump vec4 vs_COLOR0;\n#define SV_Target0 gl_FragData[0]\nlowp vec4 u_xlat10_0;\nmediump vec3 u_xlat16_1;\nvec4 u_xlat2;\nlowp vec4 u_xlat10_2;\nmediump vec3 u_xlat16_4;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_DetailTex, vs_TEXCOORD1.xy);\n    u_xlat16_1.x = u_xlat10_0.w * _Strength;\n    u_xlat10_2 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat2 = u_xlat10_2 + _TextureSampleAdd;\n    u_xlat2 = u_xlat2 * vs_COLOR0;\n    u_xlat16_4.xyz = u_xlat2.xyz * u_xlat10_0.xyz + (-u_xlat2.xyz);\n    u_xlat16_1.xyz = u_xlat16_1.xxx * u_xlat16_4.xyz + u_xlat2.xyz;\n    SV_Target0.w = u_xlat2.w * _Color.w;\n    SV_Target0.xyz = u_xlat16_1.xyz * _Color.xyz;\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _DetailTex_ST;\nuniform \tvec4 _DetailTex_TexelSize;\nuniform \tmediump vec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nattribute mediump vec4 in_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying mediump vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0.xy = in_TEXCOORD1.xy * _DetailTex_TexelSize.xy;\n    vs_TEXCOORD1.xy = u_xlat0.xy * _DetailTex_ST.xy + _DetailTex_ST.zw;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD2 = in_POSITION0;\n    vs_COLOR0 = in_COLOR0 * _Color;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform \tmediump float _Strength;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _DetailTex;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying mediump vec4 vs_COLOR0;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec4 u_xlat10_0;\nmediump float u_xlat16_1;\nlowp vec4 u_xlat10_1;\nbool u_xlatb2;\nmediump vec3 u_xlat16_3;\nmediump float u_xlat16_15;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat0 = u_xlat10_0 + _TextureSampleAdd;\n    u_xlat0 = u_xlat0 * vs_COLOR0;\n    u_xlat16_1 = u_xlat0.w * _Color.w + -0.00100000005;\n    u_xlatb2 = u_xlat16_1<0.0;\n    if(u_xlatb2){discard;}\n    u_xlat10_1 = texture2D(_DetailTex, vs_TEXCOORD1.xy);\n    u_xlat16_3.xyz = u_xlat0.xyz * u_xlat10_1.xyz + (-u_xlat0.xyz);\n    u_xlat16_15 = u_xlat10_1.w * _Strength;\n    u_xlat16_3.xyz = vec3(u_xlat16_15) * u_xlat16_3.xyz + u_xlat0.xyz;\n    u_xlat16_15 = u_xlat0.w * _Color.w;\n    SV_Target0.w = u_xlat16_15;\n    SV_Target0.xyz = u_xlat16_3.xyz * _Color.xyz;\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _DetailTex_ST;\nuniform \tvec4 _DetailTex_TexelSize;\nuniform \tmediump vec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nattribute mediump vec4 in_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying mediump vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0.xy = in_TEXCOORD1.xy * _DetailTex_TexelSize.xy;\n    vs_TEXCOORD1.xy = u_xlat0.xy * _DetailTex_ST.xy + _DetailTex_ST.zw;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD2 = in_POSITION0;\n    vs_COLOR0 = in_COLOR0 * _Color;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform \tmediump float _Strength;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform \tvec4 _ClipRect;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _DetailTex;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying mediump vec4 vs_COLOR0;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec4 u_xlat10_0;\nbvec4 u_xlatb0;\nmediump vec3 u_xlat16_1;\nvec4 u_xlat2;\nlowp vec4 u_xlat10_2;\nmediump vec3 u_xlat16_4;\nmediump float u_xlat16_10;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_DetailTex, vs_TEXCOORD1.xy);\n    u_xlat16_1.x = u_xlat10_0.w * _Strength;\n    u_xlat10_2 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat2 = u_xlat10_2 + _TextureSampleAdd;\n    u_xlat2 = u_xlat2 * vs_COLOR0;\n    u_xlat16_4.xyz = u_xlat2.xyz * u_xlat10_0.xyz + (-u_xlat2.xyz);\n    u_xlat16_1.xyz = u_xlat16_1.xxx * u_xlat16_4.xyz + u_xlat2.xyz;\n    u_xlat16_10 = u_xlat2.w * _Color.w;\n    SV_Target0.xyz = u_xlat16_1.xyz * _Color.xyz;\n    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD2.xyxx, _ClipRect.xyxx).xy;\n    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD2.xxxy).zw;\n    u_xlat0.x = u_xlatb0.x ? float(1.0) : 0.0;\n    u_xlat0.y = u_xlatb0.y ? float(1.0) : 0.0;\n    u_xlat0.z = u_xlatb0.z ? float(1.0) : 0.0;\n    u_xlat0.w = u_xlatb0.w ? float(1.0) : 0.0;\n;\n    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;\n    u_xlat0.x = u_xlat0.y * u_xlat0.x;\n    u_xlat0.x = u_xlat0.x * u_xlat16_10;\n    SV_Target0.w = u_xlat0.x;\n    return;\n}\n\n","#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _DetailTex_ST;\nuniform \tvec4 _DetailTex_TexelSize;\nuniform \tmediump vec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nattribute mediump vec4 in_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying mediump vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlat0.xy = in_TEXCOORD1.xy * _DetailTex_TexelSize.xy;\n    vs_TEXCOORD1.xy = u_xlat0.xy * _DetailTex_ST.xy + _DetailTex_ST.zw;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    vs_TEXCOORD2 = in_POSITION0;\n    vs_COLOR0 = in_COLOR0 * _Color;\n    return;\n}\n\n","#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _Color;\nuniform \tmediump float _Strength;\nuniform \tmediump vec4 _TextureSampleAdd;\nuniform \tvec4 _ClipRect;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _DetailTex;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec2 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying mediump vec4 vs_COLOR0;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec4 u_xlat10_0;\nbvec4 u_xlatb0;\nvec4 u_xlat1;\nlowp vec4 u_xlat10_1;\nmediump vec3 u_xlat16_2;\nmediump float u_xlat16_5;\nmediump float u_xlat16_11;\nvoid main()\n{\n    u_xlatb0.xy = greaterThanEqual(vs_TEXCOORD2.xyxx, _ClipRect.xyxx).xy;\n    u_xlatb0.zw = greaterThanEqual(_ClipRect.zzzw, vs_TEXCOORD2.xxxy).zw;\n    u_xlat0.x = u_xlatb0.x ? float(1.0) : 0.0;\n    u_xlat0.y = u_xlatb0.y ? float(1.0) : 0.0;\n    u_xlat0.z = u_xlatb0.z ? float(1.0) : 0.0;\n    u_xlat0.w = u_xlatb0.w ? float(1.0) : 0.0;\n;\n    u_xlat0.xy = u_xlat0.zw * u_xlat0.xy;\n    u_xlat0.x = u_xlat0.y * u_xlat0.x;\n    u_xlat10_1 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat1 = u_xlat10_1 + _TextureSampleAdd;\n    u_xlat1 = u_xlat1 * vs_COLOR0;\n    u_xlat16_2.x = u_xlat1.w * _Color.w;\n    u_xlat16_5 = u_xlat16_2.x * u_xlat0.x + -0.00100000005;\n    u_xlat0.x = u_xlat0.x * u_xlat16_2.x;\n    SV_Target0.w = u_xlat0.x;\n    u_xlatb0.x = u_xlat16_5<0.0;\n    if(u_xlatb0.x){discard;}\n    u_xlat10_0 = texture2D(_DetailTex, vs_TEXCOORD1.xy);\n    u_xlat16_2.xyz = u_xlat1.xyz * u_xlat10_0.xyz + (-u_xlat1.xyz);\n    u_xlat16_11 = u_xlat10_0.w * _Strength;\n    u_xlat16_2.xyz = vec3(u_xlat16_11) * u_xlat16_2.xyz + u_xlat1.xyz;\n    SV_Target0.xyz = u_xlat16_2.xyz * _Color.xyz;\n    return;\n}\n\n"]