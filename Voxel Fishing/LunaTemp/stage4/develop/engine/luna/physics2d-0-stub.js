window.planck={},planck.warned=!1,planck.warnOnce=function(){planck.warned||(planck.warned=!0,console.error("You have excluded Physics 2D from your build but your game is still using it. Consider including it back if you are experiencing any issues."))},planck.ExcludedClass=planck.warnOnce,planck.Vec2=class{set(){planck.warnOnce()}},planck.WorldStub=class{constructor(){this.collision_matrix=[]}on(){}step(){}getGravity(){return new planck.Vec2}setGravity(){}setPositionIterations(){}setVelocityIterations(){}createBody(){planck.warnOnce()}destroyBody(){planck.warnOnce()}},planck.World=()=>new planck.WorldStub,planck.Math={},planck.Body={},planck.Box=planck.ExcludedClass,planck.Circle=planck.ExcludedClass,planck.Capsule=planck.ExcludedClass,planck.Chain=planck.ExcludedClass,planck.CompositePolygon=planck.ExcludedClass,planck.DistanceJoint=planck.ExcludedClass,planck.RopeJoint=planck.ExcludedClass,planck.WeldJoint=planck.ExcludedClass,planck.RevoluteJoint=planck.ExcludedClass,planck.WheelJoint=planck.ExcludedClass,planck.FrictionJoint=planck.ExcludedClass,planck.MotorJoint=planck.ExcludedClass,planck.PrismaticJoint=planck.ExcludedClass,planck.MouseJoint=planck.ExcludedClass,planck.Contact=planck.ExcludedClass,planck.AABB=planck.ExcludedClass;