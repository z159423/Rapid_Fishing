!function(){class o{constructor(){planck.warnOnce()}}pc.Physics2DSystem=class extends pc.UnityComponentSystem{constructor(o){super(o),this.id="physics2D",this.performanceSamplerSection=pc.Counters.PHYSICS2D;const t=pc.ProjectSettings.instance.physics2DSettings;this.gravity=t.gravity.clone(),this.autoSyncTransforms=t.autoSyncTransforms,this.positionIterations=t.positionIterations,this.velocityIterations=t.velocityIterations,this.defaultMaterial=t.material}setIgnoreCollisionBetweenLayers(){}syncHierarchy(){}syncTransforms(){}},pc.Collider2DSystem=class extends pc.UnityComponentSystem{constructor(o){super(o),this.id="collider2D",this.performanceSamplerSection=pc.Counters.PHYSICS2D}},pc.Rigidbody2DSystem=class extends pc.UnityComponentSystem{constructor(o){super(o),this.id="rigidbody2D",this.performanceSamplerSection=pc.Counters.PHYSICS2D}},pc.Joint2DSystem=class extends pc.UnityComponentSystem{constructor(o){super(o),this.id="joint2D",this.performanceSamplerSection=pc.Counters.PHYSICS2D}},pc.Effector2DSystem=class extends pc.UnityComponentSystem{constructor(o){super(o),this.id="effector2D",this.performanceSamplerSection=pc.Counters.PHYSICS2D}},pc.Collider2DComponent=o,pc.CapsuleCollider2DComponent=o,pc.CircleCollider2DComponent=o,pc.BoxCollider2DComponent=o,pc.EdgeCollider2DComponent=o,pc.PolygonCollider2DComponent=o,pc.Rigidbody2DComponent=o,pc.Joint2DComponent=o,pc.AnchoredJoint2DComponent=o,pc.DistanceJoint2DComponent=o,pc.FixedJoint2DComponent=o,pc.FrictionJoint2DComponent=o,pc.HingeJoint2DComponent=o,pc.RelativeJoint2DComponent=o,pc.SliderJoint2DComponent=o,pc.SpringJoint2DComponent=o,pc.TargetJoint2DComponent=o,pc.WheelJoint2DComponent=o,pc.Effector2DComponent=o,pc.PlatformEffector2DComponent=o}();