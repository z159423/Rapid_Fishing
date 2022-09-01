#include "pch-cpp.hpp"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif


#include <limits>
#include <stdint.h>


struct VirtualActionInvoker0
{
	typedef void (*Action)(void*, const RuntimeMethod*);

	static inline void Invoke (Il2CppMethodSlot slot, RuntimeObject* obj)
	{
		const VirtualInvokeData& invokeData = il2cpp_codegen_get_virtual_invoke_data(slot, obj);
		((Action)invokeData.methodPtr)(obj, invokeData.method);
	}
};
struct GenericVirtualActionInvoker0
{
	typedef void (*Action)(void*, const RuntimeMethod*);

	static inline void Invoke (const RuntimeMethod* method, RuntimeObject* obj)
	{
		VirtualInvokeData invokeData;
		il2cpp_codegen_get_generic_virtual_invoke_data(method, obj, &invokeData);
		((Action)invokeData.methodPtr)(obj, invokeData.method);
	}
};
struct InterfaceActionInvoker0
{
	typedef void (*Action)(void*, const RuntimeMethod*);

	static inline void Invoke (Il2CppMethodSlot slot, RuntimeClass* declaringInterface, RuntimeObject* obj)
	{
		const VirtualInvokeData& invokeData = il2cpp_codegen_get_interface_invoke_data(slot, obj, declaringInterface);
		((Action)invokeData.methodPtr)(obj, invokeData.method);
	}
};
struct GenericInterfaceActionInvoker0
{
	typedef void (*Action)(void*, const RuntimeMethod*);

	static inline void Invoke (const RuntimeMethod* method, RuntimeObject* obj)
	{
		VirtualInvokeData invokeData;
		il2cpp_codegen_get_generic_interface_invoke_data(method, obj, &invokeData);
		((Action)invokeData.methodPtr)(obj, invokeData.method);
	}
};
struct InvokerActionInvoker0
{
	static inline void Invoke (Il2CppMethodPointer methodPtr, const RuntimeMethod* method, void* obj)
	{
		method->invoker_method(methodPtr, method, obj, NULL, NULL);
	}
};
template <typename T1>
struct InvokerActionInvoker1
{
	static inline void Invoke (Il2CppMethodPointer methodPtr, const RuntimeMethod* method, void* obj, T1 p1)
	{
		void* params[1] = { &p1 };
		method->invoker_method(methodPtr, method, obj, params, NULL);
	}
};
template <typename T1>
struct InvokerActionInvoker1<T1*>
{
	static inline void Invoke (Il2CppMethodPointer methodPtr, const RuntimeMethod* method, void* obj, T1* p1)
	{
		void* params[1] = { p1 };
		method->invoker_method(methodPtr, method, obj, params, NULL);
	}
};
template <typename T1, typename T2>
struct InvokerActionInvoker2;
template <typename T1, typename T2>
struct InvokerActionInvoker2<T1*, T2>
{
	static inline void Invoke (Il2CppMethodPointer methodPtr, const RuntimeMethod* method, void* obj, T1* p1, T2 p2)
	{
		void* params[2] = { p1, &p2 };
		method->invoker_method(methodPtr, method, obj, params, NULL);
	}
};
template <typename T1, typename T2>
struct InvokerActionInvoker2<T1*, T2*>
{
	static inline void Invoke (Il2CppMethodPointer methodPtr, const RuntimeMethod* method, void* obj, T1* p1, T2* p2)
	{
		void* params[2] = { p1, p2 };
		method->invoker_method(methodPtr, method, obj, params, NULL);
	}
};

// System.Action`1<System.Object>
struct Action_1_t6F9EB113EB3F16226AEF811A2744F4111C116C87;
// System.Collections.Generic.Dictionary`2<System.Int32,System.Threading.Tasks.Task>
struct Dictionary_2_t403063CE4960B4F46C688912237C6A27E550FF55;
// System.Func`1<System.Threading.Tasks.Task/ContingentProperties>
struct Func_1_tD59A12717D79BFB403BF973694B1BE5B85474BD1;
// System.Collections.Generic.List`1<System.Collections.Generic.SortedDictionary`2<System.String,System.String>>
struct List_1_tC9169B7444A041B0F08AAD275121262A80574FEC;
// System.Predicate`1<System.Object>
struct Predicate_1_t8342C85FF4E41CD1F7024AC0CDC3E5312A32CB12;
// System.Predicate`1<System.Threading.Tasks.Task>
struct Predicate_1_t7F48518B008C1472339EEEBABA3DE203FE1F26ED;
// System.Collections.Generic.Queue`1<System.Action>
struct Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA;
// System.Collections.Generic.Queue`1<System.Object>
struct Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5;
// System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>
struct TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14;
// System.Threading.Tasks.TaskFactory`1<System.Boolean>
struct TaskFactory_1_tFAEAC22A1E986463E6956C344A78A7C7197288E0;
// System.Threading.Tasks.Task`1<System.Boolean>
struct Task_1_t824317F4B958F7512E8F7300511752937A6C6043;
// System.Collections.Generic.SortedDictionary`2<System.String,System.String>[]
struct SortedDictionary_2U5BU5D_tCFF46E1C0EFBC542030A2B5875819B0B8E7FCE19;
// System.Action[]
struct ActionU5BU5D_tF6161335A0A12A221AB081D78725C8AB6FE506D2;
// System.Char[]
struct CharU5BU5D_t799905CF001DD5F13F7DBB310181FC4D8B7D0AAB;
// System.Delegate[]
struct DelegateU5BU5D_tC5AB7E8F745616680F337909D3A8E6C722CDF771;
// System.IntPtr[]
struct IntPtrU5BU5D_tFD177F8C806A6921AD7150264CCC62FA00CAD832;
// System.Object[]
struct ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918;
// System.Diagnostics.StackTrace[]
struct StackTraceU5BU5D_t32FBCB20930EAF5BAE3F450FF75228E5450DA0DF;
// System.Action
struct Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07;
// AdListener
struct AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F;
// AdUnit
struct AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1;
// UnityEngine.AndroidJavaClass
struct AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03;
// UnityEngine.AndroidJavaObject
struct AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0;
// UnityEngine.AndroidJavaProxy
struct AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D;
// UnityEngine.AndroidJavaRunnable
struct AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F;
// System.AsyncCallback
struct AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C;
// UnityEngine.Component
struct Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3;
// System.Threading.ContextCallback
struct ContextCallback_tE8AFBDBFCC040FDA8DA8C1EEFE9BD66B16BDA007;
// UnityEngine.Coroutine
struct Coroutine_t85EA685566A254C23F3FD77AB5BDFFFF8799596B;
// System.Delegate
struct Delegate_t;
// System.DelegateData
struct DelegateData_t9B286B493293CD2D23A5B2B5EF0E5B1324C2B77E;
// System.Enum
struct Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2;
// System.Exception
struct Exception_t;
// UnityEngine.GameObject
struct GameObject_t76FEDD663AB33C991A9C9A23129337651094216F;
// UnityEngine.GlobalJavaObjectRef
struct GlobalJavaObjectRef_t20D8E5AAFC2EB2518FCABBF40465855E797FF0D8;
// System.IAsyncResult
struct IAsyncResult_t7B9B5A0ECB35DCEC31B8A8122C37D687369253B5;
// System.Collections.IDictionary
struct IDictionary_t6D03155AF1FA9083817AA5B6AD7DEEACC26AB220;
// System.Collections.IEnumerator
struct IEnumerator_t7B609C2FFA6EB5167D9C62A0C32A21DE2F666DAA;
// System.Reflection.MethodInfo
struct MethodInfo_t;
// UnityEngine.MonoBehaviour
struct MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71;
// System.NotSupportedException
struct NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A;
// UnityEngine.Object
struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C;
// PlayOnSDK
struct PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23;
// System.Runtime.Serialization.SafeSerializationManager
struct SafeSerializationManager_tCBB85B95DFD1634237140CD892E82D06ECB3F5E6;
// System.Threading.Tasks.StackGuard
struct StackGuard_tACE063A1B7374BDF4AD472DE4585D05AD8745352;
// System.String
struct String_t;
// System.Threading.Tasks.Task
struct Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572;
// System.Threading.Tasks.TaskFactory
struct TaskFactory_tF781BD37BE23917412AD83424D1497C7C1509DF0;
// System.Threading.Tasks.TaskScheduler
struct TaskScheduler_t3F0550EBEF7C41F74EC8C08FF4BED0D8CE66006E;
// UnityMainThreadDispatcher
struct UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25;
// System.Void
struct Void_t4861ACF8F4594C3437BB48B6E56783494B843915;
// AdListener/<>c
struct U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F;
// AdListener/<>c__DisplayClass11_0
struct U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0;
// AdListener/<>c__DisplayClass12_0
struct U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8;
// AdListener/<>c__DisplayClass7_0
struct U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1;
// AdUnit/ImpressionData
struct ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203;
// PlayOnSDK/<>c
struct U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450;
// PlayOnSDK/<>c__DisplayClass21_0
struct U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB;
// PlayOnSDK/OnApplicationPause
struct OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480;
// PlayOnSDK/PlayOnFloatDelegate
struct PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A;
// PlayOnSDK/PlayOnImpressionDelegate
struct PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766;
// PlayOnSDK/PlayOnListener
struct PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035;
// PlayOnSDK/PlayOnNoArgsDelegate
struct PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21;
// PlayOnSDK/PlayOnStateDelegate
struct PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C;
// System.Threading.Tasks.Task/ContingentProperties
struct ContingentProperties_t3FA59480914505CEA917B1002EC675F29D0CB540;
// UnityMainThreadDispatcher/<>c__DisplayClass2_0
struct U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81;
// UnityMainThreadDispatcher/<>c__DisplayClass4_0
struct U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017;
// UnityMainThreadDispatcher/<ActionWrapper>d__5
struct U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B;
// PlayOnSDK/PlayOnListener/<>c
struct U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81;

IL2CPP_EXTERN_C RuntimeClass* Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AdUnitActionButtonType_t001E73DDDDF4D9A239DD2AF65A0E9958EBC74523_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AdUnitRewardType_tFF48B393BF10F3C33BB81A72BB862EFC5FA47418_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AdUnitType_tB69AA34C8DD719502A670B646E9E6978E55CAA42_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Exception_t_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* IDisposable_t030E0496B4E0E4E4F086825007979AF51F7248C5_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* LogLevel_tEA76C361B0E3668226BE166F914A4362D6548D22_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C String_t* _stringLiteral036D7D6FDFC899E4B081AFFBB9204873E7B89ED6;
IL2CPP_EXTERN_C String_t* _stringLiteral0B0FEB3147CE20EB2C90076367F895C59BCD14B3;
IL2CPP_EXTERN_C String_t* _stringLiteral179AF3F5541B7352619C2C420456B04D5CA4EBB0;
IL2CPP_EXTERN_C String_t* _stringLiteral1D185DB91E3DF09D623D41B1D7987E6F4A5D419D;
IL2CPP_EXTERN_C String_t* _stringLiteral2063737B07B6658BC2E1EC3128D4E09E57CA123E;
IL2CPP_EXTERN_C String_t* _stringLiteral26DF44B1CB0ACFEE85565445A886A3B08E0C107F;
IL2CPP_EXTERN_C String_t* _stringLiteral2EBECCA774392333AD0E032E0759D39E44DC855B;
IL2CPP_EXTERN_C String_t* _stringLiteral2EDBB717A5E3BBECF2DF85BE2C083C414DA4A2CE;
IL2CPP_EXTERN_C String_t* _stringLiteral318E4C92A2EF8C0EBC2BBFD8FD584981623B8A4D;
IL2CPP_EXTERN_C String_t* _stringLiteral3B0E6C6D7E6EB5870E3407B02A20249DA7CD571A;
IL2CPP_EXTERN_C String_t* _stringLiteral4A208B9FE57AB0384F58E68CD2FC92A7E7BDBCA8;
IL2CPP_EXTERN_C String_t* _stringLiteral4BDFC4653FDBEB2825732DE2876AF46674EADB7F;
IL2CPP_EXTERN_C String_t* _stringLiteral4C75F8761CF7E943CE7421225ACD69C6114921A4;
IL2CPP_EXTERN_C String_t* _stringLiteral4C7F08B24907D85A07C90F671A47F069D8420EAD;
IL2CPP_EXTERN_C String_t* _stringLiteral4D613657609485AE586A3379BA0E3FC13C1E1078;
IL2CPP_EXTERN_C String_t* _stringLiteral4DD298A95417FB51C736D39EC400C2991FE38DDE;
IL2CPP_EXTERN_C String_t* _stringLiteral4E4ABD7CAEC11788D9AE5BD65CA1A8F5972C4555;
IL2CPP_EXTERN_C String_t* _stringLiteral4EBF0CFC69F08FF395AB577A97972016BD0D2541;
IL2CPP_EXTERN_C String_t* _stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9;
IL2CPP_EXTERN_C String_t* _stringLiteral5B24578D87AB03F592583874DA3194F06EA9710C;
IL2CPP_EXTERN_C String_t* _stringLiteral6646AEF6383BB084D7AF1DBC36DE3B99CB7D5096;
IL2CPP_EXTERN_C String_t* _stringLiteral6AFC4CAFCC3FFED4BDFB42FEEB1F5E73D629EBD4;
IL2CPP_EXTERN_C String_t* _stringLiteral6C86FB2C4E7E0A7E71F2A7F2A1AEA7F33761AE60;
IL2CPP_EXTERN_C String_t* _stringLiteral6E2F7F013668AE8C44C1CABD572DBDAF2B7DCC2B;
IL2CPP_EXTERN_C String_t* _stringLiteral6F1742E49716074E291D1CF7420E15D875464950;
IL2CPP_EXTERN_C String_t* _stringLiteral738CD122DF3DDC83A0E733BE67B9607306AF3A02;
IL2CPP_EXTERN_C String_t* _stringLiteral776D3C7985FEE32897A6867DF4706E666144DAA1;
IL2CPP_EXTERN_C String_t* _stringLiteral7AB415A8BF4EA1B99D9F95E4A24A0B9932CE1DD6;
IL2CPP_EXTERN_C String_t* _stringLiteral7D5D6BBF8281151C9F5F57DE5D5BABB7140A651D;
IL2CPP_EXTERN_C String_t* _stringLiteral88E01C3FB5114D11F9BA7264373B7E2D8554C266;
IL2CPP_EXTERN_C String_t* _stringLiteral8B2A905A0C846C36A2CD4B188A3C16239D5E0C17;
IL2CPP_EXTERN_C String_t* _stringLiteral8BE2B12A3679C831C84CE04C45CC415379F94EF8;
IL2CPP_EXTERN_C String_t* _stringLiteral900867A9D9872AC4473F68EB45771199537471A8;
IL2CPP_EXTERN_C String_t* _stringLiteral92653BFF731DF145688477494D812C8FE1FD6A91;
IL2CPP_EXTERN_C String_t* _stringLiteral92A526CB3ED65668C8E49FA70853DC0B9EAC99C9;
IL2CPP_EXTERN_C String_t* _stringLiteral97FAFE930621BC2E1CAB32D4D75C0213F1630C44;
IL2CPP_EXTERN_C String_t* _stringLiteral9DC4320DADC775DCF6D71C7B84E59C4083CDCA55;
IL2CPP_EXTERN_C String_t* _stringLiteral9EE8CCE3CCBFDDF7007A0708CBC5B96EF54430A5;
IL2CPP_EXTERN_C String_t* _stringLiteralA7564FB502917FAC9A0BCC35A2AD620DDA896515;
IL2CPP_EXTERN_C String_t* _stringLiteralB430335B3B29892BFA95AE668C5359F135DD7B33;
IL2CPP_EXTERN_C String_t* _stringLiteralC13C045BDCCE540BFBAD0954B500778E78A7AFF4;
IL2CPP_EXTERN_C String_t* _stringLiteralC2D4C5F5D7D2E88572ABA9CA8379E206D6A15E9B;
IL2CPP_EXTERN_C String_t* _stringLiteralC386789464914AFAB69C70A3E07C88FB68EDB4DB;
IL2CPP_EXTERN_C String_t* _stringLiteralC9CD9BE5636542BD3CFAC8C3719D519A618BC894;
IL2CPP_EXTERN_C String_t* _stringLiteralCB1A47AD60F3E5B8498BAA4FD475F779EABAA7B1;
IL2CPP_EXTERN_C String_t* _stringLiteralD289A15F06D391673864A3B5CEDBFF42865743C1;
IL2CPP_EXTERN_C String_t* _stringLiteralD73F8A9E68AE4918DADE60AC49FEEAFFD640A7F7;
IL2CPP_EXTERN_C String_t* _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4;
IL2CPP_EXTERN_C String_t* _stringLiteralF6990E4EDF60FE1F0A5E5074196786141A3E2B05;
IL2CPP_EXTERN_C String_t* _stringLiteralF755DC6392C74370D801A857B9CE42E8AB1CC4BA;
IL2CPP_EXTERN_C String_t* _stringLiteralFA8C554EAFD9D02602358A963E882DD649EE907E;
IL2CPP_EXTERN_C String_t* _stringLiteralFB4AE4F77150C3A8E8E4F8B23E734E0C7277B7D9;
IL2CPP_EXTERN_C String_t* _stringLiteralFC96CDF1B7AE3CC0AAEF573824C705643D42A444;
IL2CPP_EXTERN_C const RuntimeMethod* AdListener_U3ConClickU3Eb__10_0_mFD3347A011E672E524C69D9DFD7E1C21D4AF7B3C_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdListener_U3ConCloseU3Eb__9_0_m9AC60F07CB75FBA2E8B82C64BC01E84567DAFB74_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdListener_U3ConShowU3Eb__8_0_m2AFB0F29FC24A5042CD199799E6285DE0AB08F06_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdUnit_OnApplicationPause_m32374B7AAC34D392B9CD1BDAFF30BD5E77066DA3_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdUnit_U3ConCloseU3Eb__22_0_m111627BFFB26FCF715FDC064BE68425BB2A9257F_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdUnit_U3ConShowU3Eb__21_0_mE90BF847B9A42D5393E6AC2C5B7C50C1DDADBA10_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdUnit_onClose_m6A6F8A1D9CDE08047769BDA04BB64C82D960A2BF_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AdUnit_onShow_m9BB62953500C9522F432D98DB71DE75029B0704A_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m020246E0988293B6126B690BD6CE4D894276AA3D_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* GameObject_AddComponent_TisUnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_mCD4587412D54834EAEEA8EB52CCF5D540B4108BF_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* PlayOnListener_U3ConInitializationFinishedU3Eb__2_0_m659FA8673C5CC63D7A44826F55F55C75A0A839A7_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Queue_1_Dequeue_m67206C56B5CF9749EFAEF48FAA0D82E2AD8D960E_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Queue_1_Enqueue_m9B59C0455EACB768D8D74CA1F57E003C91F6E3D4_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Queue_1__ctor_mCB1D86FC102A8C3B82A02702CAEDAE815FE04272_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Queue_1_get_Count_mB986A63C8D68BD8606522BF24176D36503CFD9C3_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* TaskCompletionSource_1_TrySetException_m439CB88F99980A2A50B1588B7ACD795274C8D7EE_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CActionWrapperU3Ed__5_System_Collections_IEnumerator_Reset_m058A1B20077DAFB4A9A79F103A9F57E9F9E66866_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_cctorU3Eb__40_0_m20D060CE3401D8047562622B990F4A4C225BA502_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__1_0_mF265B9E20EC7AE6F2BE712198F4BFD9EB2950FBD_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__6_0_m089EDEBB1FEF7A5F3202CDFFC7DEFBFBB8DABD54_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__6_1_m52306BED20C0F971F07A38ED2ED8564BAAEDD143_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__6_2_m4178E92E3097CD83645DD7E4668CE635D10C201C_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__6_3_mB5ABFCD55342FFBF60CC3F2E82C5D597AEEA8E66_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__6_4_m9BD48A876356D9698FC1B4FA7BD0E0E2AA649081_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec_U3C_ctorU3Eb__6_5_m46427D44E4E275D349C75B0C74212AA133B00F69_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec__DisplayClass11_0_U3ConRewardU3Eb__0_m87FA33908423FD6918DA54DBB87D83727994B6AF_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec__DisplayClass12_0_U3ConImpressionU3Eb__0_m1AFEC68F062848EAF336B0905F28246B8E978A62_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec__DisplayClass21_0_U3CInitializeU3Eb__0_mE057820476162DB61A892BDD4FC378CC08C7A426_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec__DisplayClass2_0_U3CEnqueueU3Eb__0_m206322FA992FEB42EBA84BCD54261B66CF9CC5E7_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec__DisplayClass4_0_U3CEnqueueAsyncU3Eg__WrappedActionU7C0_m970AF82DC9E7DE96469BE08A2580BEE28304FA90_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* U3CU3Ec__DisplayClass7_0_U3ConAvailabilityChangedU3Eb__0_mBE45A43138E6CA8C52A3910F04FD1B2D707DA025_RuntimeMethod_var;
struct Delegate_t_marshaled_com;
struct Delegate_t_marshaled_pinvoke;
struct Exception_t_marshaled_com;
struct Exception_t_marshaled_pinvoke;

struct DelegateU5BU5D_tC5AB7E8F745616680F337909D3A8E6C722CDF771;
struct ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918;

IL2CPP_EXTERN_C_BEGIN
IL2CPP_EXTERN_C_END

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// <Module>
struct U3CModuleU3E_tC1DE1600749C79244807141978F55E735F5C9346 
{
};

// System.EmptyArray`1<System.Object>
struct EmptyArray_1_tDF0DD7256B115243AA6BD5558417387A734240EE  : public RuntimeObject
{
};

struct EmptyArray_1_tDF0DD7256B115243AA6BD5558417387A734240EE_StaticFields
{
	// T[] System.EmptyArray`1::Value
	ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___Value_0;
};

// System.Collections.Generic.List`1<System.Collections.Generic.SortedDictionary`2<System.String,System.String>>
struct List_1_tC9169B7444A041B0F08AAD275121262A80574FEC  : public RuntimeObject
{
	// T[] System.Collections.Generic.List`1::_items
	SortedDictionary_2U5BU5D_tCFF46E1C0EFBC542030A2B5875819B0B8E7FCE19* ____items_1;
	// System.Int32 System.Collections.Generic.List`1::_size
	int32_t ____size_2;
	// System.Int32 System.Collections.Generic.List`1::_version
	int32_t ____version_3;
	// System.Object System.Collections.Generic.List`1::_syncRoot
	RuntimeObject* ____syncRoot_4;
};

struct List_1_tC9169B7444A041B0F08AAD275121262A80574FEC_StaticFields
{
	// T[] System.Collections.Generic.List`1::s_emptyArray
	SortedDictionary_2U5BU5D_tCFF46E1C0EFBC542030A2B5875819B0B8E7FCE19* ___s_emptyArray_5;
};

// System.Collections.Generic.Queue`1<System.Action>
struct Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA  : public RuntimeObject
{
	// T[] System.Collections.Generic.Queue`1::_array
	ActionU5BU5D_tF6161335A0A12A221AB081D78725C8AB6FE506D2* ____array_0;
	// System.Int32 System.Collections.Generic.Queue`1::_head
	int32_t ____head_1;
	// System.Int32 System.Collections.Generic.Queue`1::_tail
	int32_t ____tail_2;
	// System.Int32 System.Collections.Generic.Queue`1::_size
	int32_t ____size_3;
	// System.Int32 System.Collections.Generic.Queue`1::_version
	int32_t ____version_4;
	// System.Object System.Collections.Generic.Queue`1::_syncRoot
	RuntimeObject* ____syncRoot_5;
};

// System.Collections.Generic.Queue`1<System.Object>
struct Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5  : public RuntimeObject
{
	// T[] System.Collections.Generic.Queue`1::_array
	ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ____array_0;
	// System.Int32 System.Collections.Generic.Queue`1::_head
	int32_t ____head_1;
	// System.Int32 System.Collections.Generic.Queue`1::_tail
	int32_t ____tail_2;
	// System.Int32 System.Collections.Generic.Queue`1::_size
	int32_t ____size_3;
	// System.Int32 System.Collections.Generic.Queue`1::_version
	int32_t ____version_4;
	// System.Object System.Collections.Generic.Queue`1::_syncRoot
	RuntimeObject* ____syncRoot_5;
};

// System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>
struct TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14  : public RuntimeObject
{
	// System.Threading.Tasks.Task`1<TResult> System.Threading.Tasks.TaskCompletionSource`1::_task
	Task_1_t824317F4B958F7512E8F7300511752937A6C6043* ____task_0;
};

// AdUnit
struct AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1  : public RuntimeObject
{
	// UnityEngine.AndroidJavaObject AdUnit::client
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ___client_0;
	// System.Single AdUnit::fadeValue
	float ___fadeValue_1;
	// System.Single AdUnit::sceneVolumeValue
	float ___sceneVolumeValue_2;
	// AdListener AdUnit::adListener
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* ___adListener_3;
};

// UnityEngine.AndroidJavaObject
struct AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0  : public RuntimeObject
{
	// UnityEngine.GlobalJavaObjectRef UnityEngine.AndroidJavaObject::m_jobject
	GlobalJavaObjectRef_t20D8E5AAFC2EB2518FCABBF40465855E797FF0D8* ___m_jobject_1;
	// UnityEngine.GlobalJavaObjectRef UnityEngine.AndroidJavaObject::m_jclass
	GlobalJavaObjectRef_t20D8E5AAFC2EB2518FCABBF40465855E797FF0D8* ___m_jclass_2;
};

struct AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_StaticFields
{
	// System.Boolean UnityEngine.AndroidJavaObject::enableDebugPrints
	bool ___enableDebugPrints_0;
};
struct Il2CppArrayBounds;

// PlayOnSDK
struct PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23  : public RuntimeObject
{
};

struct PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields
{
	// UnityEngine.AndroidJavaObject PlayOnSDK::_androidBridge
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ____androidBridge_3;
	// System.String PlayOnSDK::AndroidBridge
	String_t* ___AndroidBridge_4;
	// System.String PlayOnSDK::SDK_VERSION
	String_t* ___SDK_VERSION_5;
	// PlayOnSDK/PlayOnListener PlayOnSDK::playOnListener
	PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* ___playOnListener_6;
	// PlayOnSDK/OnApplicationPause PlayOnSDK::onApplicationPause
	OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* ___onApplicationPause_7;
};

// System.String
struct String_t  : public RuntimeObject
{
	// System.Int32 System.String::_stringLength
	int32_t ____stringLength_4;
	// System.Char System.String::_firstChar
	Il2CppChar ____firstChar_5;
};

struct String_t_StaticFields
{
	// System.String System.String::Empty
	String_t* ___Empty_6;
};

// System.Threading.Tasks.Task
struct Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572  : public RuntimeObject
{
	// System.Int32 modreq(System.Runtime.CompilerServices.IsVolatile) System.Threading.Tasks.Task::m_taskId
	int32_t ___m_taskId_1;
	// System.Delegate System.Threading.Tasks.Task::m_action
	Delegate_t* ___m_action_2;
	// System.Object System.Threading.Tasks.Task::m_stateObject
	RuntimeObject* ___m_stateObject_3;
	// System.Threading.Tasks.TaskScheduler System.Threading.Tasks.Task::m_taskScheduler
	TaskScheduler_t3F0550EBEF7C41F74EC8C08FF4BED0D8CE66006E* ___m_taskScheduler_4;
	// System.Threading.Tasks.Task System.Threading.Tasks.Task::m_parent
	Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* ___m_parent_5;
	// System.Int32 modreq(System.Runtime.CompilerServices.IsVolatile) System.Threading.Tasks.Task::m_stateFlags
	int32_t ___m_stateFlags_6;
	// System.Object modreq(System.Runtime.CompilerServices.IsVolatile) System.Threading.Tasks.Task::m_continuationObject
	RuntimeObject* ___m_continuationObject_7;
	// System.Threading.Tasks.Task/ContingentProperties modreq(System.Runtime.CompilerServices.IsVolatile) System.Threading.Tasks.Task::m_contingentProperties
	ContingentProperties_t3FA59480914505CEA917B1002EC675F29D0CB540* ___m_contingentProperties_10;
};

struct Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572_StaticFields
{
	// System.Int32 System.Threading.Tasks.Task::s_taskIdCounter
	int32_t ___s_taskIdCounter_0;
	// System.Object System.Threading.Tasks.Task::s_taskCompletionSentinel
	RuntimeObject* ___s_taskCompletionSentinel_8;
	// System.Boolean System.Threading.Tasks.Task::s_asyncDebuggingEnabled
	bool ___s_asyncDebuggingEnabled_9;
	// System.Action`1<System.Object> System.Threading.Tasks.Task::s_taskCancelCallback
	Action_1_t6F9EB113EB3F16226AEF811A2744F4111C116C87* ___s_taskCancelCallback_11;
	// System.Func`1<System.Threading.Tasks.Task/ContingentProperties> System.Threading.Tasks.Task::s_createContingentProperties
	Func_1_tD59A12717D79BFB403BF973694B1BE5B85474BD1* ___s_createContingentProperties_14;
	// System.Threading.Tasks.TaskFactory System.Threading.Tasks.Task::<Factory>k__BackingField
	TaskFactory_tF781BD37BE23917412AD83424D1497C7C1509DF0* ___U3CFactoryU3Ek__BackingField_15;
	// System.Threading.Tasks.Task System.Threading.Tasks.Task::<CompletedTask>k__BackingField
	Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* ___U3CCompletedTaskU3Ek__BackingField_16;
	// System.Predicate`1<System.Threading.Tasks.Task> System.Threading.Tasks.Task::s_IsExceptionObservedByParentPredicate
	Predicate_1_t7F48518B008C1472339EEEBABA3DE203FE1F26ED* ___s_IsExceptionObservedByParentPredicate_17;
	// System.Threading.ContextCallback System.Threading.Tasks.Task::s_ecCallback
	ContextCallback_tE8AFBDBFCC040FDA8DA8C1EEFE9BD66B16BDA007* ___s_ecCallback_18;
	// System.Predicate`1<System.Object> System.Threading.Tasks.Task::s_IsTaskContinuationNullPredicate
	Predicate_1_t8342C85FF4E41CD1F7024AC0CDC3E5312A32CB12* ___s_IsTaskContinuationNullPredicate_19;
	// System.Collections.Generic.Dictionary`2<System.Int32,System.Threading.Tasks.Task> System.Threading.Tasks.Task::s_currentActiveTasks
	Dictionary_2_t403063CE4960B4F46C688912237C6A27E550FF55* ___s_currentActiveTasks_20;
	// System.Object System.Threading.Tasks.Task::s_activeTasksLock
	RuntimeObject* ___s_activeTasksLock_21;
};

struct Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572_ThreadStaticFields
{
	// System.Threading.Tasks.Task System.Threading.Tasks.Task::t_currentTask
	Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* ___t_currentTask_12;
	// System.Threading.Tasks.StackGuard System.Threading.Tasks.Task::t_stackGuard
	StackGuard_tACE063A1B7374BDF4AD472DE4585D05AD8745352* ___t_stackGuard_13;
};

// System.ValueType
struct ValueType_t6D9B272BD21782F0A9A14F2E41F85A50E97A986F  : public RuntimeObject
{
};
// Native definition for P/Invoke marshalling of System.ValueType
struct ValueType_t6D9B272BD21782F0A9A14F2E41F85A50E97A986F_marshaled_pinvoke
{
};
// Native definition for COM marshalling of System.ValueType
struct ValueType_t6D9B272BD21782F0A9A14F2E41F85A50E97A986F_marshaled_com
{
};

// UnityEngine.YieldInstruction
struct YieldInstruction_tFCE35FD0907950EFEE9BC2890AC664E41C53728D  : public RuntimeObject
{
};
// Native definition for P/Invoke marshalling of UnityEngine.YieldInstruction
struct YieldInstruction_tFCE35FD0907950EFEE9BC2890AC664E41C53728D_marshaled_pinvoke
{
};
// Native definition for COM marshalling of UnityEngine.YieldInstruction
struct YieldInstruction_tFCE35FD0907950EFEE9BC2890AC664E41C53728D_marshaled_com
{
};

// AdListener/<>c
struct U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F  : public RuntimeObject
{
};

struct U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields
{
	// AdListener/<>c AdListener/<>c::<>9
	U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* ___U3CU3E9_0;
	// PlayOnSDK/PlayOnStateDelegate AdListener/<>c::<>9__6_0
	PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* ___U3CU3E9__6_0_1;
	// PlayOnSDK/PlayOnNoArgsDelegate AdListener/<>c::<>9__6_1
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___U3CU3E9__6_1_2;
	// PlayOnSDK/PlayOnNoArgsDelegate AdListener/<>c::<>9__6_2
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___U3CU3E9__6_2_3;
	// PlayOnSDK/PlayOnNoArgsDelegate AdListener/<>c::<>9__6_3
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___U3CU3E9__6_3_4;
	// PlayOnSDK/PlayOnFloatDelegate AdListener/<>c::<>9__6_4
	PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* ___U3CU3E9__6_4_5;
	// PlayOnSDK/PlayOnImpressionDelegate AdListener/<>c::<>9__6_5
	PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* ___U3CU3E9__6_5_6;
};

// AdListener/<>c__DisplayClass11_0
struct U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0  : public RuntimeObject
{
	// AdListener AdListener/<>c__DisplayClass11_0::<>4__this
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* ___U3CU3E4__this_0;
	// System.Single AdListener/<>c__DisplayClass11_0::amount
	float ___amount_1;
};

// AdListener/<>c__DisplayClass12_0
struct U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8  : public RuntimeObject
{
	// AdListener AdListener/<>c__DisplayClass12_0::<>4__this
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* ___U3CU3E4__this_0;
	// AdUnit/ImpressionData AdListener/<>c__DisplayClass12_0::impressionData
	ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___impressionData_1;
};

// AdListener/<>c__DisplayClass7_0
struct U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1  : public RuntimeObject
{
	// AdListener AdListener/<>c__DisplayClass7_0::<>4__this
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* ___U3CU3E4__this_0;
	// System.Boolean AdListener/<>c__DisplayClass7_0::availablity
	bool ___availablity_1;
};

// AdUnit/ImpressionData
struct ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203  : public RuntimeObject
{
	// UnityEngine.AndroidJavaObject AdUnit/ImpressionData::client
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ___client_0;
};

// PlayOnSDK/<>c
struct U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450  : public RuntimeObject
{
};

struct U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_StaticFields
{
	// PlayOnSDK/<>c PlayOnSDK/<>c::<>9
	U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450* ___U3CU3E9_0;
};

// PlayOnSDK/<>c__DisplayClass21_0
struct U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB  : public RuntimeObject
{
	// System.String PlayOnSDK/<>c__DisplayClass21_0::unityVersion
	String_t* ___unityVersion_0;
	// UnityEngine.AndroidJavaObject PlayOnSDK/<>c__DisplayClass21_0::activity
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ___activity_1;
	// System.String PlayOnSDK/<>c__DisplayClass21_0::apiKey
	String_t* ___apiKey_2;
};

// UnityMainThreadDispatcher/<>c__DisplayClass2_0
struct U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81  : public RuntimeObject
{
	// UnityMainThreadDispatcher UnityMainThreadDispatcher/<>c__DisplayClass2_0::<>4__this
	UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* ___U3CU3E4__this_0;
	// System.Collections.IEnumerator UnityMainThreadDispatcher/<>c__DisplayClass2_0::action
	RuntimeObject* ___action_1;
};

// UnityMainThreadDispatcher/<>c__DisplayClass4_0
struct U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017  : public RuntimeObject
{
	// System.Action UnityMainThreadDispatcher/<>c__DisplayClass4_0::action
	Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___action_0;
	// System.Threading.Tasks.TaskCompletionSource`1<System.Boolean> UnityMainThreadDispatcher/<>c__DisplayClass4_0::tcs
	TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* ___tcs_1;
};

// UnityMainThreadDispatcher/<ActionWrapper>d__5
struct U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B  : public RuntimeObject
{
	// System.Int32 UnityMainThreadDispatcher/<ActionWrapper>d__5::<>1__state
	int32_t ___U3CU3E1__state_0;
	// System.Object UnityMainThreadDispatcher/<ActionWrapper>d__5::<>2__current
	RuntimeObject* ___U3CU3E2__current_1;
	// System.Action UnityMainThreadDispatcher/<ActionWrapper>d__5::a
	Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___a_2;
};

// PlayOnSDK/PlayOnListener/<>c
struct U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81  : public RuntimeObject
{
};

struct U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields
{
	// PlayOnSDK/PlayOnListener/<>c PlayOnSDK/PlayOnListener/<>c::<>9
	U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81* ___U3CU3E9_0;
	// PlayOnSDK/PlayOnNoArgsDelegate PlayOnSDK/PlayOnListener/<>c::<>9__1_0
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___U3CU3E9__1_0_1;
};

// System.Threading.Tasks.Task`1<System.Boolean>
struct Task_1_t824317F4B958F7512E8F7300511752937A6C6043  : public Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572
{
	// TResult System.Threading.Tasks.Task`1::m_result
	bool ___m_result_22;
};

struct Task_1_t824317F4B958F7512E8F7300511752937A6C6043_StaticFields
{
	// System.Threading.Tasks.TaskFactory`1<TResult> System.Threading.Tasks.Task`1::s_defaultFactory
	TaskFactory_1_tFAEAC22A1E986463E6956C344A78A7C7197288E0* ___s_defaultFactory_23;
};

// UnityEngine.AndroidJavaClass
struct AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03  : public AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0
{
};

// System.Boolean
struct Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22 
{
	// System.Boolean System.Boolean::m_value
	bool ___m_value_0;
};

struct Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_StaticFields
{
	// System.String System.Boolean::TrueString
	String_t* ___TrueString_5;
	// System.String System.Boolean::FalseString
	String_t* ___FalseString_6;
};

// UnityEngine.Color
struct Color_tD001788D726C3A7F1379BEED0260B9591F440C1F 
{
	// System.Single UnityEngine.Color::r
	float ___r_0;
	// System.Single UnityEngine.Color::g
	float ___g_1;
	// System.Single UnityEngine.Color::b
	float ___b_2;
	// System.Single UnityEngine.Color::a
	float ___a_3;
};

// System.Double
struct Double_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F 
{
	// System.Double System.Double::m_value
	double ___m_value_0;
};

// System.Enum
struct Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2  : public ValueType_t6D9B272BD21782F0A9A14F2E41F85A50E97A986F
{
};

struct Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2_StaticFields
{
	// System.Char[] System.Enum::enumSeperatorCharArray
	CharU5BU5D_t799905CF001DD5F13F7DBB310181FC4D8B7D0AAB* ___enumSeperatorCharArray_0;
};
// Native definition for P/Invoke marshalling of System.Enum
struct Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2_marshaled_pinvoke
{
};
// Native definition for COM marshalling of System.Enum
struct Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2_marshaled_com
{
};

// System.Int32
struct Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C 
{
	// System.Int32 System.Int32::m_value
	int32_t ___m_value_0;
};

// System.IntPtr
struct IntPtr_t 
{
	// System.Void* System.IntPtr::m_value
	void* ___m_value_0;
};

struct IntPtr_t_StaticFields
{
	// System.IntPtr System.IntPtr::Zero
	intptr_t ___Zero_1;
};

// System.Single
struct Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C 
{
	// System.Single System.Single::m_value
	float ___m_value_0;
};

// System.Void
struct Void_t4861ACF8F4594C3437BB48B6E56783494B843915 
{
	union
	{
		struct
		{
		};
		uint8_t Void_t4861ACF8F4594C3437BB48B6E56783494B843915__padding[1];
	};
};

// UnityEngine.AndroidJavaProxy
struct AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D  : public RuntimeObject
{
	// UnityEngine.AndroidJavaClass UnityEngine.AndroidJavaProxy::javaInterface
	AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* ___javaInterface_0;
	// System.IntPtr UnityEngine.AndroidJavaProxy::proxyObject
	intptr_t ___proxyObject_1;
};

struct AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D_StaticFields
{
	// UnityEngine.GlobalJavaObjectRef UnityEngine.AndroidJavaProxy::s_JavaLangSystemClass
	GlobalJavaObjectRef_t20D8E5AAFC2EB2518FCABBF40465855E797FF0D8* ___s_JavaLangSystemClass_2;
	// System.IntPtr UnityEngine.AndroidJavaProxy::s_HashCodeMethodID
	intptr_t ___s_HashCodeMethodID_3;
};

// UnityEngine.Coroutine
struct Coroutine_t85EA685566A254C23F3FD77AB5BDFFFF8799596B  : public YieldInstruction_tFCE35FD0907950EFEE9BC2890AC664E41C53728D
{
	// System.IntPtr UnityEngine.Coroutine::m_Ptr
	intptr_t ___m_Ptr_0;
};
// Native definition for P/Invoke marshalling of UnityEngine.Coroutine
struct Coroutine_t85EA685566A254C23F3FD77AB5BDFFFF8799596B_marshaled_pinvoke : public YieldInstruction_tFCE35FD0907950EFEE9BC2890AC664E41C53728D_marshaled_pinvoke
{
	intptr_t ___m_Ptr_0;
};
// Native definition for COM marshalling of UnityEngine.Coroutine
struct Coroutine_t85EA685566A254C23F3FD77AB5BDFFFF8799596B_marshaled_com : public YieldInstruction_tFCE35FD0907950EFEE9BC2890AC664E41C53728D_marshaled_com
{
	intptr_t ___m_Ptr_0;
};

// System.Delegate
struct Delegate_t  : public RuntimeObject
{
	// System.IntPtr System.Delegate::method_ptr
	Il2CppMethodPointer ___method_ptr_0;
	// System.IntPtr System.Delegate::invoke_impl
	intptr_t ___invoke_impl_1;
	// System.Object System.Delegate::m_target
	RuntimeObject* ___m_target_2;
	// System.IntPtr System.Delegate::method
	intptr_t ___method_3;
	// System.IntPtr System.Delegate::delegate_trampoline
	intptr_t ___delegate_trampoline_4;
	// System.IntPtr System.Delegate::extra_arg
	intptr_t ___extra_arg_5;
	// System.IntPtr System.Delegate::method_code
	intptr_t ___method_code_6;
	// System.IntPtr System.Delegate::interp_method
	intptr_t ___interp_method_7;
	// System.IntPtr System.Delegate::interp_invoke_impl
	intptr_t ___interp_invoke_impl_8;
	// System.Reflection.MethodInfo System.Delegate::method_info
	MethodInfo_t* ___method_info_9;
	// System.Reflection.MethodInfo System.Delegate::original_method_info
	MethodInfo_t* ___original_method_info_10;
	// System.DelegateData System.Delegate::data
	DelegateData_t9B286B493293CD2D23A5B2B5EF0E5B1324C2B77E* ___data_11;
	// System.Boolean System.Delegate::method_is_virtual
	bool ___method_is_virtual_12;
};
// Native definition for P/Invoke marshalling of System.Delegate
struct Delegate_t_marshaled_pinvoke
{
	intptr_t ___method_ptr_0;
	intptr_t ___invoke_impl_1;
	Il2CppIUnknown* ___m_target_2;
	intptr_t ___method_3;
	intptr_t ___delegate_trampoline_4;
	intptr_t ___extra_arg_5;
	intptr_t ___method_code_6;
	intptr_t ___interp_method_7;
	intptr_t ___interp_invoke_impl_8;
	MethodInfo_t* ___method_info_9;
	MethodInfo_t* ___original_method_info_10;
	DelegateData_t9B286B493293CD2D23A5B2B5EF0E5B1324C2B77E* ___data_11;
	int32_t ___method_is_virtual_12;
};
// Native definition for COM marshalling of System.Delegate
struct Delegate_t_marshaled_com
{
	intptr_t ___method_ptr_0;
	intptr_t ___invoke_impl_1;
	Il2CppIUnknown* ___m_target_2;
	intptr_t ___method_3;
	intptr_t ___delegate_trampoline_4;
	intptr_t ___extra_arg_5;
	intptr_t ___method_code_6;
	intptr_t ___interp_method_7;
	intptr_t ___interp_invoke_impl_8;
	MethodInfo_t* ___method_info_9;
	MethodInfo_t* ___original_method_info_10;
	DelegateData_t9B286B493293CD2D23A5B2B5EF0E5B1324C2B77E* ___data_11;
	int32_t ___method_is_virtual_12;
};

// System.Exception
struct Exception_t  : public RuntimeObject
{
	// System.String System.Exception::_className
	String_t* ____className_1;
	// System.String System.Exception::_message
	String_t* ____message_2;
	// System.Collections.IDictionary System.Exception::_data
	RuntimeObject* ____data_3;
	// System.Exception System.Exception::_innerException
	Exception_t* ____innerException_4;
	// System.String System.Exception::_helpURL
	String_t* ____helpURL_5;
	// System.Object System.Exception::_stackTrace
	RuntimeObject* ____stackTrace_6;
	// System.String System.Exception::_stackTraceString
	String_t* ____stackTraceString_7;
	// System.String System.Exception::_remoteStackTraceString
	String_t* ____remoteStackTraceString_8;
	// System.Int32 System.Exception::_remoteStackIndex
	int32_t ____remoteStackIndex_9;
	// System.Object System.Exception::_dynamicMethods
	RuntimeObject* ____dynamicMethods_10;
	// System.Int32 System.Exception::_HResult
	int32_t ____HResult_11;
	// System.String System.Exception::_source
	String_t* ____source_12;
	// System.Runtime.Serialization.SafeSerializationManager System.Exception::_safeSerializationManager
	SafeSerializationManager_tCBB85B95DFD1634237140CD892E82D06ECB3F5E6* ____safeSerializationManager_13;
	// System.Diagnostics.StackTrace[] System.Exception::captured_traces
	StackTraceU5BU5D_t32FBCB20930EAF5BAE3F450FF75228E5450DA0DF* ___captured_traces_14;
	// System.IntPtr[] System.Exception::native_trace_ips
	IntPtrU5BU5D_tFD177F8C806A6921AD7150264CCC62FA00CAD832* ___native_trace_ips_15;
	// System.Int32 System.Exception::caught_in_unmanaged
	int32_t ___caught_in_unmanaged_16;
};

struct Exception_t_StaticFields
{
	// System.Object System.Exception::s_EDILock
	RuntimeObject* ___s_EDILock_0;
};
// Native definition for P/Invoke marshalling of System.Exception
struct Exception_t_marshaled_pinvoke
{
	char* ____className_1;
	char* ____message_2;
	RuntimeObject* ____data_3;
	Exception_t_marshaled_pinvoke* ____innerException_4;
	char* ____helpURL_5;
	Il2CppIUnknown* ____stackTrace_6;
	char* ____stackTraceString_7;
	char* ____remoteStackTraceString_8;
	int32_t ____remoteStackIndex_9;
	Il2CppIUnknown* ____dynamicMethods_10;
	int32_t ____HResult_11;
	char* ____source_12;
	SafeSerializationManager_tCBB85B95DFD1634237140CD892E82D06ECB3F5E6* ____safeSerializationManager_13;
	StackTraceU5BU5D_t32FBCB20930EAF5BAE3F450FF75228E5450DA0DF* ___captured_traces_14;
	Il2CppSafeArray/*NONE*/* ___native_trace_ips_15;
	int32_t ___caught_in_unmanaged_16;
};
// Native definition for COM marshalling of System.Exception
struct Exception_t_marshaled_com
{
	Il2CppChar* ____className_1;
	Il2CppChar* ____message_2;
	RuntimeObject* ____data_3;
	Exception_t_marshaled_com* ____innerException_4;
	Il2CppChar* ____helpURL_5;
	Il2CppIUnknown* ____stackTrace_6;
	Il2CppChar* ____stackTraceString_7;
	Il2CppChar* ____remoteStackTraceString_8;
	int32_t ____remoteStackIndex_9;
	Il2CppIUnknown* ____dynamicMethods_10;
	int32_t ____HResult_11;
	Il2CppChar* ____source_12;
	SafeSerializationManager_tCBB85B95DFD1634237140CD892E82D06ECB3F5E6* ____safeSerializationManager_13;
	StackTraceU5BU5D_t32FBCB20930EAF5BAE3F450FF75228E5450DA0DF* ___captured_traces_14;
	Il2CppSafeArray/*NONE*/* ___native_trace_ips_15;
	int32_t ___caught_in_unmanaged_16;
};

// UnityEngine.Object
struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C  : public RuntimeObject
{
	// System.IntPtr UnityEngine.Object::m_CachedPtr
	intptr_t ___m_CachedPtr_0;
};

struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_StaticFields
{
	// System.Int32 UnityEngine.Object::OffsetOfInstanceIDInCPlusPlusObject
	int32_t ___OffsetOfInstanceIDInCPlusPlusObject_1;
};
// Native definition for P/Invoke marshalling of UnityEngine.Object
struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_marshaled_pinvoke
{
	intptr_t ___m_CachedPtr_0;
};
// Native definition for COM marshalling of UnityEngine.Object
struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_marshaled_com
{
	intptr_t ___m_CachedPtr_0;
};

// AdListener
struct AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F  : public AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D
{
	// PlayOnSDK/PlayOnStateDelegate AdListener::OnAvailabilityChanged
	PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* ___OnAvailabilityChanged_4;
	// PlayOnSDK/PlayOnNoArgsDelegate AdListener::OnShow
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___OnShow_5;
	// PlayOnSDK/PlayOnNoArgsDelegate AdListener::OnClose
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___OnClose_6;
	// PlayOnSDK/PlayOnNoArgsDelegate AdListener::OnClick
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___OnClick_7;
	// PlayOnSDK/PlayOnFloatDelegate AdListener::OnReward
	PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* ___OnReward_8;
	// PlayOnSDK/PlayOnImpressionDelegate AdListener::OnImpression
	PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* ___OnImpression_9;
};

// UnityEngine.Component
struct Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3  : public Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C
{
};

// UnityEngine.GameObject
struct GameObject_t76FEDD663AB33C991A9C9A23129337651094216F  : public Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C
{
};

// System.MulticastDelegate
struct MulticastDelegate_t  : public Delegate_t
{
	// System.Delegate[] System.MulticastDelegate::delegates
	DelegateU5BU5D_tC5AB7E8F745616680F337909D3A8E6C722CDF771* ___delegates_13;
};
// Native definition for P/Invoke marshalling of System.MulticastDelegate
struct MulticastDelegate_t_marshaled_pinvoke : public Delegate_t_marshaled_pinvoke
{
	Delegate_t_marshaled_pinvoke** ___delegates_13;
};
// Native definition for COM marshalling of System.MulticastDelegate
struct MulticastDelegate_t_marshaled_com : public Delegate_t_marshaled_com
{
	Delegate_t_marshaled_com** ___delegates_13;
};

// System.SystemException
struct SystemException_tCC48D868298F4C0705279823E34B00F4FBDB7295  : public Exception_t
{
};

// PlayOnSDK/PlayOnListener
struct PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035  : public AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D
{
	// PlayOnSDK/PlayOnNoArgsDelegate PlayOnSDK/PlayOnListener::OnInitializationFinished
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___OnInitializationFinished_4;
};

// System.Action
struct Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07  : public MulticastDelegate_t
{
};

// UnityEngine.AndroidJavaRunnable
struct AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F  : public MulticastDelegate_t
{
};

// System.AsyncCallback
struct AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C  : public MulticastDelegate_t
{
};

// UnityEngine.Behaviour
struct Behaviour_t01970CFBBA658497AE30F311C447DB0440BAB7FA  : public Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3
{
};

// System.NotSupportedException
struct NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A  : public SystemException_tCC48D868298F4C0705279823E34B00F4FBDB7295
{
};

// PlayOnSDK/OnApplicationPause
struct OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480  : public MulticastDelegate_t
{
};

// PlayOnSDK/PlayOnFloatDelegate
struct PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A  : public MulticastDelegate_t
{
};

// PlayOnSDK/PlayOnImpressionDelegate
struct PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766  : public MulticastDelegate_t
{
};

// PlayOnSDK/PlayOnNoArgsDelegate
struct PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21  : public MulticastDelegate_t
{
};

// PlayOnSDK/PlayOnStateDelegate
struct PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C  : public MulticastDelegate_t
{
};

// UnityEngine.MonoBehaviour
struct MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71  : public Behaviour_t01970CFBBA658497AE30F311C447DB0440BAB7FA
{
};

// UnityMainThreadDispatcher
struct UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25  : public MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71
{
};

struct UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields
{
	// System.Collections.Generic.Queue`1<System.Action> UnityMainThreadDispatcher::_executionQueue
	Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* ____executionQueue_4;
	// UnityMainThreadDispatcher UnityMainThreadDispatcher::_instance
	UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* ____instance_5;
};
#ifdef __clang__
#pragma clang diagnostic pop
#endif
// System.Object[]
struct ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918  : public RuntimeArray
{
	ALIGN_FIELD (8) RuntimeObject* m_Items[1];

	inline RuntimeObject* GetAt(il2cpp_array_size_t index) const
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items[index];
	}
	inline RuntimeObject** GetAddressAt(il2cpp_array_size_t index)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items + index;
	}
	inline void SetAt(il2cpp_array_size_t index, RuntimeObject* value)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
	inline RuntimeObject* GetAtUnchecked(il2cpp_array_size_t index) const
	{
		return m_Items[index];
	}
	inline RuntimeObject** GetAddressAtUnchecked(il2cpp_array_size_t index)
	{
		return m_Items + index;
	}
	inline void SetAtUnchecked(il2cpp_array_size_t index, RuntimeObject* value)
	{
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
};
// System.Delegate[]
struct DelegateU5BU5D_tC5AB7E8F745616680F337909D3A8E6C722CDF771  : public RuntimeArray
{
	ALIGN_FIELD (8) Delegate_t* m_Items[1];

	inline Delegate_t* GetAt(il2cpp_array_size_t index) const
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items[index];
	}
	inline Delegate_t** GetAddressAt(il2cpp_array_size_t index)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items + index;
	}
	inline void SetAt(il2cpp_array_size_t index, Delegate_t* value)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
	inline Delegate_t* GetAtUnchecked(il2cpp_array_size_t index) const
	{
		return m_Items[index];
	}
	inline Delegate_t** GetAddressAtUnchecked(il2cpp_array_size_t index)
	{
		return m_Items + index;
	}
	inline void SetAtUnchecked(il2cpp_array_size_t index, Delegate_t* value)
	{
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
};


// FieldType UnityEngine.AndroidJavaObject::GetStatic<System.Object>(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* AndroidJavaObject_GetStatic_TisRuntimeObject_m4EF4E4761A0A6E99E0A298F653E8129B1494E4C9_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___fieldName0, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::CallStatic<System.Object>(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* AndroidJavaObject_CallStatic_TisRuntimeObject_mCAFE27630F6092C4910E14592B050DACFCBE146F_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// T[] System.Array::Empty<System.Object>()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_gshared_inline (const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Boolean>(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Object>(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* AndroidJavaObject_Call_TisRuntimeObject_mA5AF1A9E0463CE91F0ACB6AC2FE0C1922B579EF7_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Int32>(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR int32_t AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Double>(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR double AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Single>(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR float AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1_gshared (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// T System.Collections.Generic.Queue`1<System.Object>::Dequeue()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* Queue_1_Dequeue_m86B243DF9EC238316EC3D27DF3E0AB8DB0987E84_gshared (Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5* __this, const RuntimeMethod* method) ;
// System.Int32 System.Collections.Generic.Queue`1<System.Object>::get_Count()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR int32_t Queue_1_get_Count_m1768ADA9855B7CDA14C9C42E098A287F1A39C3A2_gshared_inline (Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5* __this, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Queue`1<System.Object>::Enqueue(T)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Queue_1_Enqueue_m5CB8CF3906F1289F92036F0973EC5BE3450402EF_gshared (Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5* __this, RuntimeObject* ___item0, const RuntimeMethod* method) ;
// System.Void System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646_gshared (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, const RuntimeMethod* method) ;
// System.Threading.Tasks.Task`1<TResult> System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::get_Task()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR Task_1_t824317F4B958F7512E8F7300511752937A6C6043* TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_gshared_inline (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, const RuntimeMethod* method) ;
// T UnityEngine.GameObject::AddComponent<System.Object>()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* GameObject_AddComponent_TisRuntimeObject_m69B93700FACCF372F5753371C6E8FB780800B824_gshared (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* __this, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Queue`1<System.Object>::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Queue_1__ctor_m6E2A5A8173E0CC524496D5155C737DF8FD10D0EB_gshared (Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5* __this, const RuntimeMethod* method) ;
// System.Boolean System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::TrySetResult(TResult)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1_gshared (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, bool ___result0, const RuntimeMethod* method) ;
// System.Boolean System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::TrySetException(System.Exception)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool TaskCompletionSource_1_TrySetException_m439CB88F99980A2A50B1588B7ACD795274C8D7EE_gshared (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, Exception_t* ___exception0, const RuntimeMethod* method) ;

// System.Void PlayOnSDK/PlayOnStateDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnStateDelegate__ctor_m5665ABD382E868BF19F7CF32A7FA8DB603C5EEEE (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnNoArgsDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnFloatDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnFloatDelegate__ctor_m06E842D0DB41AE399787C5F9740AA6A59BC05F44 (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnImpressionDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnImpressionDelegate__ctor_m7FF64FB11B158E8300B19EA3FC8FD2C143C38538 (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Void UnityEngine.AndroidJavaProxy::.ctor(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AndroidJavaProxy__ctor_m2832886A0E1BBF6702653A7C6A4609F11FB712C7 (AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D* __this, String_t* ___javaInterface0, const RuntimeMethod* method) ;
// System.Void AdListener/<>c__DisplayClass7_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass7_0__ctor_m6F7BA28A40E8457D2B02482FDF1807F04383BDB7 (U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* __this, const RuntimeMethod* method) ;
// UnityMainThreadDispatcher UnityMainThreadDispatcher::Instance()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E (const RuntimeMethod* method) ;
// System.Void System.Action::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Void UnityMainThreadDispatcher::Enqueue(System.Action)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___action0, const RuntimeMethod* method) ;
// System.Void AdListener/<>c__DisplayClass11_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass11_0__ctor_mB9D73A8207E9E9C19920F305797BBD8A1FBD91E0 (U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* __this, const RuntimeMethod* method) ;
// System.Void AdListener/<>c__DisplayClass12_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass12_0__ctor_m82DF83E96DD88241C93405901C5FDDD5357920C9 (U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* __this, const RuntimeMethod* method) ;
// System.Void AdUnit/ImpressionData::.ctor(UnityEngine.AndroidJavaObject)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void ImpressionData__ctor_m26826B1060C583326A70EB15BC49FA3EA482A6B8 (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ___ptr0, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnNoArgsDelegate::Invoke()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_inline (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method) ;
// System.Void AdListener/<>c::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__ctor_m9BF841A5E4493A09AEB95881D5AB83D2CAFB772A (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, const RuntimeMethod* method) ;
// System.Void System.Object::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2 (RuntimeObject* __this, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnStateDelegate::Invoke(System.Boolean)
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_inline (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnFloatDelegate::Invoke(System.Single)
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_inline (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnImpressionDelegate::Invoke(AdUnit/ImpressionData)
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_inline (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method) ;
// System.Void AdListener::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener__ctor_m1CCF762F792518C3CDFEE1A04F57EAB9CF87F06D (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) ;
// System.Void UnityEngine.AndroidJavaClass::.ctor(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389 (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* __this, String_t* ___className0, const RuntimeMethod* method) ;
// FieldType UnityEngine.AndroidJavaObject::GetStatic<UnityEngine.AndroidJavaObject>(System.String)
inline AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___fieldName0, const RuntimeMethod* method)
{
	return ((  AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, const RuntimeMethod*))AndroidJavaObject_GetStatic_TisRuntimeObject_m4EF4E4761A0A6E99E0A298F653E8129B1494E4C9_gshared)(__this, ___fieldName0, method);
}
// System.String System.Enum::ToString()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741 (RuntimeObject* __this, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::CallStatic<UnityEngine.AndroidJavaObject>(System.String,System.Object[])
inline AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63 (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_CallStatic_TisRuntimeObject_mCAFE27630F6092C4910E14592B050DACFCBE146F_gshared)(__this, ___methodName0, ___args1, method);
}
// System.Void UnityEngine.AndroidJavaObject::.ctor(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AndroidJavaObject__ctor_m5A65B5D325C2CEFAC4097A0D3813F8E158178DD7 (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___className0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// System.Void AdUnit::SetAdListener()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetAdListener_m849E2EE00E48C125F2CF517DA57D33EC826C6323 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/OnApplicationPause::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void OnApplicationPause__ctor_m3BCCC6C7848EC6C8450E7F80E4B221C09A0D7F3A (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Delegate System.Delegate::Combine(System.Delegate,System.Delegate)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Delegate_t* Delegate_Combine_m8B9D24CED35033C7FC56501DFE650F5CB7FF012C (Delegate_t* ___a0, Delegate_t* ___b1, const RuntimeMethod* method) ;
// T[] System.Array::Empty<System.Object>()
inline ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline (const RuntimeMethod* method)
{
	return ((  ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* (*) (const RuntimeMethod*))Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_gshared_inline)(method);
}
// System.Void UnityEngine.AndroidJavaObject::Call(System.String,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Boolean>(System.String,System.Object[])
inline bool AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  bool (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_gshared)(__this, ___methodName0, ___args1, method);
}
// System.String UnityEngine.ColorUtility::ToHtmlStringRGBA(UnityEngine.Color)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* ColorUtility_ToHtmlStringRGBA_m50DF42C6CE20340EFDBE41E40E9C08928B757F1B (Color_tD001788D726C3A7F1379BEED0260B9591F440C1F ___color0, const RuntimeMethod* method) ;
// System.String System.String::Substring(System.Int32)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Substring_m6BA4A3FA3800FE92662D0847CC8E1EEF940DF472 (String_t* __this, int32_t ___startIndex0, const RuntimeMethod* method) ;
// System.String System.String::Remove(System.Int32)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Remove_m8266E0BF5D8565D4CDC850F21E9178AE254C3E85 (String_t* __this, int32_t ___startIndex0, const RuntimeMethod* method) ;
// System.String System.String::Concat(System.String,System.String,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Concat_m9B13B47FCB3DF61144D9647DDA05F527377251B0 (String_t* ___str00, String_t* ___str11, String_t* ___str22, const RuntimeMethod* method) ;
// System.Void AdUnit::onPause()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_onPause_mE56E3C95E405B252C791FCC55E6243AAD1F326D4 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) ;
// System.Void AdUnit::onResume()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_onResume_mD528E54AA77DEFEF3B99848AE918870FF3929F80 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) ;
// System.Single UnityEngine.AudioListener::get_volume()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR float AudioListener_get_volume_mCE38EB0C7ACCECCC98E1816DA2F816E771EE4595 (const RuntimeMethod* method) ;
// System.Void UnityEngine.AudioListener::set_volume(System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AudioListener_set_volume_mC13591F71DDD0B3A64E52E475260050E89F64C9A (float ___value0, const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.String>(System.String,System.Object[])
inline String_t* AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40 (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  String_t* (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisRuntimeObject_mA5AF1A9E0463CE91F0ACB6AC2FE0C1922B579EF7_gshared)(__this, ___methodName0, ___args1, method);
}
// ReturnType UnityEngine.AndroidJavaObject::Call<UnityEngine.AndroidJavaObject>(System.String,System.Object[])
inline AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* AndroidJavaObject_Call_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m020246E0988293B6126B690BD6CE4D894276AA3D (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisRuntimeObject_mA5AF1A9E0463CE91F0ACB6AC2FE0C1922B579EF7_gshared)(__this, ___methodName0, ___args1, method);
}
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Int32>(System.String,System.Object[])
inline int32_t AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  int32_t (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC_gshared)(__this, ___methodName0, ___args1, method);
}
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Double>(System.String,System.Object[])
inline double AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362 (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  double (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362_gshared)(__this, ___methodName0, ___args1, method);
}
// System.Void PlayOnSDK/<>c__DisplayClass21_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass21_0__ctor_m11A2AB840F1A01A265F57BF4EB35B8A6D17A8F8C (U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* __this, const RuntimeMethod* method) ;
// System.String UnityEngine.Application::get_unityVersion()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* Application_get_unityVersion_m09F45DDCFA0A4414AA296A595FDB0B59B44F5387 (const RuntimeMethod* method) ;
// System.Void UnityEngine.AndroidJavaRunnable::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AndroidJavaRunnable__ctor_m000E4FEB2DE8031A1CD733610D76E2BF60490334 (AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// UnityEngine.AndroidJavaObject PlayOnSDK::getBridge()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9 (const RuntimeMethod* method) ;
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Single>(System.String,System.Object[])
inline float AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1 (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  float (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1_gshared)(__this, ___methodName0, ___args1, method);
}
// ReturnType UnityEngine.AndroidJavaObject::Call<System.Collections.Generic.List`1<System.Collections.Generic.SortedDictionary`2<System.String,System.String>>>(System.String,System.Object[])
inline List_1_tC9169B7444A041B0F08AAD275121262A80574FEC* AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9 (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* __this, String_t* ___methodName0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___args1, const RuntimeMethod* method)
{
	return ((  List_1_tC9169B7444A041B0F08AAD275121262A80574FEC* (*) (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*, String_t*, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*, const RuntimeMethod*))AndroidJavaObject_Call_TisRuntimeObject_mA5AF1A9E0463CE91F0ACB6AC2FE0C1922B579EF7_gshared)(__this, ___methodName0, ___args1, method);
}
// System.Void UnityEngine.Debug::Log(System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219 (RuntimeObject* ___message0, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnListener::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnListener__ctor_mFA8101443AFC171D76412683B9F6B4DDFF69F9B0 (PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* __this, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/PlayOnListener/<>c::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__ctor_m4422C051C2C1DEA6C11033B0C8CEC1265A4132A2 (U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81* __this, const RuntimeMethod* method) ;
// System.String System.String::Concat(System.String,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Concat_mAF2CE02CC0CB7460753D0A1A91CCF2B1E9804C5D (String_t* ___str00, String_t* ___str11, const RuntimeMethod* method) ;
// System.Void PlayOnSDK/<>c::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__ctor_m5D70F9BE9CF058BC3D28072A72DE7EC3C3464668 (U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450* __this, const RuntimeMethod* method) ;
// System.String System.Boolean::ToString()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* Boolean_ToString_m6646C8026B1DF381A1EE8CD13549175E9703CC63 (bool* __this, const RuntimeMethod* method) ;
// System.Void System.Threading.Monitor::Exit(System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Monitor_Exit_m25A154960F91391E10E4CDA245ECDF4BA94D56A9 (RuntimeObject* ___obj0, const RuntimeMethod* method) ;
// System.Void System.Threading.Monitor::Enter(System.Object,System.Boolean&)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Monitor_Enter_m00506757392936AA62DBE2C5FFBEE69EE920C4D4 (RuntimeObject* ___obj0, bool* ___lockTaken1, const RuntimeMethod* method) ;
// T System.Collections.Generic.Queue`1<System.Action>::Dequeue()
inline Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* Queue_1_Dequeue_m67206C56B5CF9749EFAEF48FAA0D82E2AD8D960E (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* __this, const RuntimeMethod* method)
{
	return ((  Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* (*) (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA*, const RuntimeMethod*))Queue_1_Dequeue_m86B243DF9EC238316EC3D27DF3E0AB8DB0987E84_gshared)(__this, method);
}
// System.Void System.Action::Invoke()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* __this, const RuntimeMethod* method) ;
// System.Int32 System.Collections.Generic.Queue`1<System.Action>::get_Count()
inline int32_t Queue_1_get_Count_mB986A63C8D68BD8606522BF24176D36503CFD9C3_inline (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* __this, const RuntimeMethod* method)
{
	return ((  int32_t (*) (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA*, const RuntimeMethod*))Queue_1_get_Count_m1768ADA9855B7CDA14C9C42E098A287F1A39C3A2_gshared_inline)(__this, method);
}
// System.Void UnityMainThreadDispatcher/<>c__DisplayClass2_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass2_0__ctor_mDAE03EDB9DB5B7A5BE8E8588479AF0B2FF10E651 (U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* __this, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Queue`1<System.Action>::Enqueue(T)
inline void Queue_1_Enqueue_m9B59C0455EACB768D8D74CA1F57E003C91F6E3D4 (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* __this, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___item0, const RuntimeMethod* method)
{
	((  void (*) (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA*, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*, const RuntimeMethod*))Queue_1_Enqueue_m5CB8CF3906F1289F92036F0973EC5BE3450402EF_gshared)(__this, ___item0, method);
}
// System.Collections.IEnumerator UnityMainThreadDispatcher::ActionWrapper(System.Action)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* UnityMainThreadDispatcher_ActionWrapper_mE752BC99C81AD08855BF4CCA4BA4E60953553A36 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___a0, const RuntimeMethod* method) ;
// System.Void UnityMainThreadDispatcher::Enqueue(System.Collections.IEnumerator)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_Enqueue_mFF91487E5612BD2984617DB2BD6FB3CEAB4E8FC0 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, RuntimeObject* ___action0, const RuntimeMethod* method) ;
// System.Void UnityMainThreadDispatcher/<>c__DisplayClass4_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass4_0__ctor_m83E946533C8CC7344767D2CC2BEE5ABE1D490414 (U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* __this, const RuntimeMethod* method) ;
// System.Void System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::.ctor()
inline void TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646 (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, const RuntimeMethod* method)
{
	((  void (*) (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14*, const RuntimeMethod*))TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646_gshared)(__this, method);
}
// System.Threading.Tasks.Task`1<TResult> System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::get_Task()
inline Task_1_t824317F4B958F7512E8F7300511752937A6C6043* TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_inline (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, const RuntimeMethod* method)
{
	return ((  Task_1_t824317F4B958F7512E8F7300511752937A6C6043* (*) (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14*, const RuntimeMethod*))TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_gshared_inline)(__this, method);
}
// System.Void UnityMainThreadDispatcher/<ActionWrapper>d__5::.ctor(System.Int32)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CActionWrapperU3Ed__5__ctor_m8429140D8EDB4F99CD0D66026BBCFCBEC9A55B35 (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, int32_t ___U3CU3E1__state0, const RuntimeMethod* method) ;
// System.Boolean UnityEngine.Object::op_Inequality(UnityEngine.Object,UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___x0, Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___y1, const RuntimeMethod* method) ;
// System.Boolean UnityMainThreadDispatcher::Exists()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool UnityMainThreadDispatcher_Exists_m16D715157247EA9E01607B4B6E10A71CEDF723E9 (const RuntimeMethod* method) ;
// System.Void UnityEngine.GameObject::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void GameObject__ctor_m7D0340DE160786E6EFA8DABD39EC3B694DA30AAD (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* __this, const RuntimeMethod* method) ;
// T UnityEngine.GameObject::AddComponent<UnityMainThreadDispatcher>()
inline UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* GameObject_AddComponent_TisUnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_mCD4587412D54834EAEEA8EB52CCF5D540B4108BF (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* __this, const RuntimeMethod* method)
{
	return ((  UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* (*) (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F*, const RuntimeMethod*))GameObject_AddComponent_TisRuntimeObject_m69B93700FACCF372F5753371C6E8FB780800B824_gshared)(__this, method);
}
// System.Boolean UnityEngine.Object::op_Equality(UnityEngine.Object,UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Object_op_Equality_mD3DB0D72CE0250C84033DC2A90AEF9D59896E536 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___x0, Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___y1, const RuntimeMethod* method) ;
// UnityEngine.GameObject UnityEngine.Component::get_gameObject()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* Component_get_gameObject_m57AEFBB14DB39EC476F740BA000E170355DE691B (Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3* __this, const RuntimeMethod* method) ;
// System.Void UnityEngine.Object::DontDestroyOnLoad(UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Object_DontDestroyOnLoad_m303AA1C4DC810349F285B4809E426CBBA8F834F9 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___target0, const RuntimeMethod* method) ;
// System.Void UnityEngine.MonoBehaviour::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void MonoBehaviour__ctor_m592DB0105CA0BC97AA1C5F4AD27B12D68A3B7C1E (MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71* __this, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Queue`1<System.Action>::.ctor()
inline void Queue_1__ctor_mCB1D86FC102A8C3B82A02702CAEDAE815FE04272 (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* __this, const RuntimeMethod* method)
{
	((  void (*) (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA*, const RuntimeMethod*))Queue_1__ctor_m6E2A5A8173E0CC524496D5155C737DF8FD10D0EB_gshared)(__this, method);
}
// UnityEngine.Coroutine UnityEngine.MonoBehaviour::StartCoroutine(System.Collections.IEnumerator)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Coroutine_t85EA685566A254C23F3FD77AB5BDFFFF8799596B* MonoBehaviour_StartCoroutine_m4CAFF732AA28CD3BDC5363B44A863575530EC812 (MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71* __this, RuntimeObject* ___routine0, const RuntimeMethod* method) ;
// System.Boolean System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::TrySetResult(TResult)
inline bool TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1 (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, bool ___result0, const RuntimeMethod* method)
{
	return ((  bool (*) (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14*, bool, const RuntimeMethod*))TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1_gshared)(__this, ___result0, method);
}
// System.Boolean System.Threading.Tasks.TaskCompletionSource`1<System.Boolean>::TrySetException(System.Exception)
inline bool TaskCompletionSource_1_TrySetException_m439CB88F99980A2A50B1588B7ACD795274C8D7EE (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, Exception_t* ___exception0, const RuntimeMethod* method)
{
	return ((  bool (*) (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14*, Exception_t*, const RuntimeMethod*))TaskCompletionSource_1_TrySetException_m439CB88F99980A2A50B1588B7ACD795274C8D7EE_gshared)(__this, ___exception0, method);
}
// System.Void System.NotSupportedException::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void NotSupportedException__ctor_m1398D0CDE19B36AA3DE9392879738C1EA2439CDF (NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A* __this, const RuntimeMethod* method) ;
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void AdListener::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener__ctor_m1CCF762F792518C3CDFEE1A04F57EAB9CF87F06D (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__6_0_m089EDEBB1FEF7A5F3202CDFFC7DEFBFBB8DABD54_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__6_1_m52306BED20C0F971F07A38ED2ED8564BAAEDD143_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__6_2_m4178E92E3097CD83645DD7E4668CE635D10C201C_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__6_3_mB5ABFCD55342FFBF60CC3F2E82C5D597AEEA8E66_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__6_4_m9BD48A876356D9698FC1B4FA7BD0E0E2AA649081_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__6_5_m46427D44E4E275D349C75B0C74212AA133B00F69_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralF6990E4EDF60FE1F0A5E5074196786141A3E2B05);
		s_Il2CppMethodInitialized = true;
	}
	PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* G_B2_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B2_1 = NULL;
	PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* G_B1_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B1_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B4_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B4_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B3_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B3_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B6_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B6_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B5_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B5_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B8_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B8_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B7_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B7_1 = NULL;
	PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* G_B10_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B10_1 = NULL;
	PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* G_B9_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B9_1 = NULL;
	PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* G_B12_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B12_1 = NULL;
	PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* G_B11_0 = NULL;
	AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* G_B11_1 = NULL;
	{
		// public PlayOnSDK.PlayOnStateDelegate OnAvailabilityChanged = (flag) => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* L_0 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_0_1;
		PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* L_1 = L_0;
		G_B1_0 = L_1;
		G_B1_1 = __this;
		if (L_1)
		{
			G_B2_0 = L_1;
			G_B2_1 = __this;
			goto IL_0020;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_2 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* L_3 = (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C*)il2cpp_codegen_object_new(PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C_il2cpp_TypeInfo_var);
		NullCheck(L_3);
		PlayOnStateDelegate__ctor_m5665ABD382E868BF19F7CF32A7FA8DB603C5EEEE(L_3, L_2, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__6_0_m089EDEBB1FEF7A5F3202CDFFC7DEFBFBB8DABD54_RuntimeMethod_var), NULL);
		PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* L_4 = L_3;
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_0_1 = L_4;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_0_1), (void*)L_4);
		G_B2_0 = L_4;
		G_B2_1 = G_B1_1;
	}

IL_0020:
	{
		NullCheck(G_B2_1);
		G_B2_1->___OnAvailabilityChanged_4 = G_B2_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B2_1->___OnAvailabilityChanged_4), (void*)G_B2_0);
		// public PlayOnSDK.PlayOnNoArgsDelegate OnShow = () => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_5 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_1_2;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_6 = L_5;
		G_B3_0 = L_6;
		G_B3_1 = __this;
		if (L_6)
		{
			G_B4_0 = L_6;
			G_B4_1 = __this;
			goto IL_0045;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_7 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_8 = (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)il2cpp_codegen_object_new(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		NullCheck(L_8);
		PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C(L_8, L_7, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__6_1_m52306BED20C0F971F07A38ED2ED8564BAAEDD143_RuntimeMethod_var), NULL);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_9 = L_8;
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_1_2 = L_9;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_1_2), (void*)L_9);
		G_B4_0 = L_9;
		G_B4_1 = G_B3_1;
	}

IL_0045:
	{
		NullCheck(G_B4_1);
		G_B4_1->___OnShow_5 = G_B4_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B4_1->___OnShow_5), (void*)G_B4_0);
		// public PlayOnSDK.PlayOnNoArgsDelegate OnClose = () => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_10 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_2_3;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_11 = L_10;
		G_B5_0 = L_11;
		G_B5_1 = __this;
		if (L_11)
		{
			G_B6_0 = L_11;
			G_B6_1 = __this;
			goto IL_006a;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_12 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_13 = (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)il2cpp_codegen_object_new(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		NullCheck(L_13);
		PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C(L_13, L_12, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__6_2_m4178E92E3097CD83645DD7E4668CE635D10C201C_RuntimeMethod_var), NULL);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_14 = L_13;
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_2_3 = L_14;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_2_3), (void*)L_14);
		G_B6_0 = L_14;
		G_B6_1 = G_B5_1;
	}

IL_006a:
	{
		NullCheck(G_B6_1);
		G_B6_1->___OnClose_6 = G_B6_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B6_1->___OnClose_6), (void*)G_B6_0);
		// public PlayOnSDK.PlayOnNoArgsDelegate OnClick = () => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_15 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_3_4;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_16 = L_15;
		G_B7_0 = L_16;
		G_B7_1 = __this;
		if (L_16)
		{
			G_B8_0 = L_16;
			G_B8_1 = __this;
			goto IL_008f;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_17 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_18 = (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)il2cpp_codegen_object_new(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		NullCheck(L_18);
		PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C(L_18, L_17, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__6_3_mB5ABFCD55342FFBF60CC3F2E82C5D597AEEA8E66_RuntimeMethod_var), NULL);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_19 = L_18;
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_3_4 = L_19;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_3_4), (void*)L_19);
		G_B8_0 = L_19;
		G_B8_1 = G_B7_1;
	}

IL_008f:
	{
		NullCheck(G_B8_1);
		G_B8_1->___OnClick_7 = G_B8_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B8_1->___OnClick_7), (void*)G_B8_0);
		// public PlayOnSDK.PlayOnFloatDelegate OnReward = (amount) => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* L_20 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_4_5;
		PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* L_21 = L_20;
		G_B9_0 = L_21;
		G_B9_1 = __this;
		if (L_21)
		{
			G_B10_0 = L_21;
			G_B10_1 = __this;
			goto IL_00b4;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_22 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* L_23 = (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A*)il2cpp_codegen_object_new(PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A_il2cpp_TypeInfo_var);
		NullCheck(L_23);
		PlayOnFloatDelegate__ctor_m06E842D0DB41AE399787C5F9740AA6A59BC05F44(L_23, L_22, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__6_4_m9BD48A876356D9698FC1B4FA7BD0E0E2AA649081_RuntimeMethod_var), NULL);
		PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* L_24 = L_23;
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_4_5 = L_24;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_4_5), (void*)L_24);
		G_B10_0 = L_24;
		G_B10_1 = G_B9_1;
	}

IL_00b4:
	{
		NullCheck(G_B10_1);
		G_B10_1->___OnReward_8 = G_B10_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B10_1->___OnReward_8), (void*)G_B10_0);
		// public PlayOnSDK.PlayOnImpressionDelegate OnImpression = (data) => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* L_25 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_5_6;
		PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* L_26 = L_25;
		G_B11_0 = L_26;
		G_B11_1 = __this;
		if (L_26)
		{
			G_B12_0 = L_26;
			G_B12_1 = __this;
			goto IL_00d9;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_27 = ((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* L_28 = (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766*)il2cpp_codegen_object_new(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766_il2cpp_TypeInfo_var);
		NullCheck(L_28);
		PlayOnImpressionDelegate__ctor_m7FF64FB11B158E8300B19EA3FC8FD2C143C38538(L_28, L_27, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__6_5_m46427D44E4E275D349C75B0C74212AA133B00F69_RuntimeMethod_var), NULL);
		PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* L_29 = L_28;
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_5_6 = L_29;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9__6_5_6), (void*)L_29);
		G_B12_0 = L_29;
		G_B12_1 = G_B11_1;
	}

IL_00d9:
	{
		NullCheck(G_B12_1);
		G_B12_1->___OnImpression_9 = G_B12_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B12_1->___OnImpression_9), (void*)G_B12_0);
		// public AdListener() : base ("com.playon.bridge.PlayOnManager$AdListener") { }
		il2cpp_codegen_runtime_class_init_inline(AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D_il2cpp_TypeInfo_var);
		AndroidJavaProxy__ctor_m2832886A0E1BBF6702653A7C6A4609F11FB712C7(__this, _stringLiteralF6990E4EDF60FE1F0A5E5074196786141A3E2B05, NULL);
		// public AdListener() : base ("com.playon.bridge.PlayOnManager$AdListener") { }
		return;
	}
}
// System.Void AdListener::onAvailabilityChanged(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_onAvailabilityChanged_mA6F10CD0B1860254227D759F3155578AC80DD966 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, bool ___availablity0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass7_0_U3ConAvailabilityChangedU3Eb__0_mBE45A43138E6CA8C52A3910F04FD1B2D707DA025_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* V_0 = NULL;
	{
		U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* L_0 = (U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1*)il2cpp_codegen_object_new(U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__DisplayClass7_0__ctor_m6F7BA28A40E8457D2B02482FDF1807F04383BDB7(L_0, NULL);
		V_0 = L_0;
		U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* L_1 = V_0;
		NullCheck(L_1);
		L_1->___U3CU3E4__this_0 = __this;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___U3CU3E4__this_0), (void*)__this);
		U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* L_2 = V_0;
		bool L_3 = ___availablity0;
		NullCheck(L_2);
		L_2->___availablity_1 = L_3;
		// UnityMainThreadDispatcher.Instance().Enqueue( () =>  OnAvailabilityChanged(availablity) );
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_4;
		L_4 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* L_5 = V_0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_6 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_6);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_6, L_5, (intptr_t)((void*)U3CU3Ec__DisplayClass7_0_U3ConAvailabilityChangedU3Eb__0_mBE45A43138E6CA8C52A3910F04FD1B2D707DA025_RuntimeMethod_var), NULL);
		NullCheck(L_4);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_4, L_6, NULL);
		// }
		return;
	}
}
// System.Void AdListener::onShow()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_onShow_mD7799C39DA529838B80828411A90BBF8AEADEC78 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdListener_U3ConShowU3Eb__8_0_m2AFB0F29FC24A5042CD199799E6285DE0AB08F06_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnShow() ) ;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0;
		L_0 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_1 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_1, __this, (intptr_t)((void*)AdListener_U3ConShowU3Eb__8_0_m2AFB0F29FC24A5042CD199799E6285DE0AB08F06_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_0, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdListener::onClose()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_onClose_m9B1701F6A3C7E12319848E584941549CFCDC0AF7 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdListener_U3ConCloseU3Eb__9_0_m9AC60F07CB75FBA2E8B82C64BC01E84567DAFB74_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnClose() ) ;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0;
		L_0 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_1 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_1, __this, (intptr_t)((void*)AdListener_U3ConCloseU3Eb__9_0_m9AC60F07CB75FBA2E8B82C64BC01E84567DAFB74_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_0, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdListener::onClick()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_onClick_m1C0AE584B0F521700E0C43851C4B9661B6C2295A (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdListener_U3ConClickU3Eb__10_0_mFD3347A011E672E524C69D9DFD7E1C21D4AF7B3C_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnClick() ) ;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0;
		L_0 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_1 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_1, __this, (intptr_t)((void*)AdListener_U3ConClickU3Eb__10_0_mFD3347A011E672E524C69D9DFD7E1C21D4AF7B3C_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_0, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdListener::onReward(System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_onReward_mFE7D1F647793DDFBFFF506D168ABD053B20A15F6 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, float ___amount0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass11_0_U3ConRewardU3Eb__0_m87FA33908423FD6918DA54DBB87D83727994B6AF_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* V_0 = NULL;
	{
		U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* L_0 = (U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0*)il2cpp_codegen_object_new(U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__DisplayClass11_0__ctor_mB9D73A8207E9E9C19920F305797BBD8A1FBD91E0(L_0, NULL);
		V_0 = L_0;
		U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* L_1 = V_0;
		NullCheck(L_1);
		L_1->___U3CU3E4__this_0 = __this;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___U3CU3E4__this_0), (void*)__this);
		U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* L_2 = V_0;
		float L_3 = ___amount0;
		NullCheck(L_2);
		L_2->___amount_1 = L_3;
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnReward (amount) ) ;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_4;
		L_4 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* L_5 = V_0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_6 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_6);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_6, L_5, (intptr_t)((void*)U3CU3Ec__DisplayClass11_0_U3ConRewardU3Eb__0_m87FA33908423FD6918DA54DBB87D83727994B6AF_RuntimeMethod_var), NULL);
		NullCheck(L_4);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_4, L_6, NULL);
		// }
		return;
	}
}
// System.Void AdListener::onImpression(UnityEngine.AndroidJavaObject)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_onImpression_m7CA2E20C00EEA21486B274D940E2B6DAA43E76A8 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ___data0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass12_0_U3ConImpressionU3Eb__0_m1AFEC68F062848EAF336B0905F28246B8E978A62_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* V_0 = NULL;
	{
		U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* L_0 = (U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8*)il2cpp_codegen_object_new(U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__DisplayClass12_0__ctor_m82DF83E96DD88241C93405901C5FDDD5357920C9(L_0, NULL);
		V_0 = L_0;
		U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* L_1 = V_0;
		NullCheck(L_1);
		L_1->___U3CU3E4__this_0 = __this;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___U3CU3E4__this_0), (void*)__this);
		// AdUnit.ImpressionData impressionData = new AdUnit.ImpressionData(data);
		U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* L_2 = V_0;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_3 = ___data0;
		ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* L_4 = (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203*)il2cpp_codegen_object_new(ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203_il2cpp_TypeInfo_var);
		NullCheck(L_4);
		ImpressionData__ctor_m26826B1060C583326A70EB15BC49FA3EA482A6B8(L_4, L_3, NULL);
		NullCheck(L_2);
		L_2->___impressionData_1 = L_4;
		Il2CppCodeGenWriteBarrier((void**)(&L_2->___impressionData_1), (void*)L_4);
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnImpression (impressionData) ) ;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_5;
		L_5 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* L_6 = V_0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_7 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_7);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_7, L_6, (intptr_t)((void*)U3CU3Ec__DisplayClass12_0_U3ConImpressionU3Eb__0_m1AFEC68F062848EAF336B0905F28246B8E978A62_RuntimeMethod_var), NULL);
		NullCheck(L_5);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_5, L_7, NULL);
		// }
		return;
	}
}
// System.Void AdListener::<onShow>b__8_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_U3ConShowU3Eb__8_0_m2AFB0F29FC24A5042CD199799E6285DE0AB08F06 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnShow() ) ;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_0 = __this->___OnShow_5;
		NullCheck(L_0);
		PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_inline(L_0, NULL);
		return;
	}
}
// System.Void AdListener::<onClose>b__9_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_U3ConCloseU3Eb__9_0_m9AC60F07CB75FBA2E8B82C64BC01E84567DAFB74 (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnClose() ) ;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_0 = __this->___OnClose_6;
		NullCheck(L_0);
		PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_inline(L_0, NULL);
		return;
	}
}
// System.Void AdListener::<onClick>b__10_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdListener_U3ConClickU3Eb__10_0_mFD3347A011E672E524C69D9DFD7E1C21D4AF7B3C (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnClick() ) ;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_0 = __this->___OnClick_7;
		NullCheck(L_0);
		PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_inline(L_0, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void AdListener/<>c::.cctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__cctor_m1555A78A85A2CEE40DB766D0C4152F87DFCFE2D3 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* L_0 = (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F*)il2cpp_codegen_object_new(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__ctor_m9BF841A5E4493A09AEB95881D5AB83D2CAFB772A(L_0, NULL);
		((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F_il2cpp_TypeInfo_var))->___U3CU3E9_0), (void*)L_0);
		return;
	}
}
// System.Void AdListener/<>c::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__ctor_m9BF841A5E4493A09AEB95881D5AB83D2CAFB772A (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void AdListener/<>c::<.ctor>b__6_0(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__6_0_m089EDEBB1FEF7A5F3202CDFFC7DEFBFBB8DABD54 (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, bool ___flag0, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnStateDelegate OnAvailabilityChanged = (flag) => { };
		return;
	}
}
// System.Void AdListener/<>c::<.ctor>b__6_1()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__6_1_m52306BED20C0F971F07A38ED2ED8564BAAEDD143 (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnNoArgsDelegate OnShow = () => { };
		return;
	}
}
// System.Void AdListener/<>c::<.ctor>b__6_2()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__6_2_m4178E92E3097CD83645DD7E4668CE635D10C201C (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnNoArgsDelegate OnClose = () => { };
		return;
	}
}
// System.Void AdListener/<>c::<.ctor>b__6_3()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__6_3_mB5ABFCD55342FFBF60CC3F2E82C5D597AEEA8E66 (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnNoArgsDelegate OnClick = () => { };
		return;
	}
}
// System.Void AdListener/<>c::<.ctor>b__6_4(System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__6_4_m9BD48A876356D9698FC1B4FA7BD0E0E2AA649081 (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, float ___amount0, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnFloatDelegate OnReward = (amount) => { };
		return;
	}
}
// System.Void AdListener/<>c::<.ctor>b__6_5(AdUnit/ImpressionData)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__6_5_m46427D44E4E275D349C75B0C74212AA133B00F69 (U3CU3Ec_tE5E253E8EFE4A5983B5655D47E688FEDE7DFE97F* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnImpressionDelegate OnImpression = (data) => { };
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void AdListener/<>c__DisplayClass7_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass7_0__ctor_m6F7BA28A40E8457D2B02482FDF1807F04383BDB7 (U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void AdListener/<>c__DisplayClass7_0::<onAvailabilityChanged>b__0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass7_0_U3ConAvailabilityChangedU3Eb__0_mBE45A43138E6CA8C52A3910F04FD1B2D707DA025 (U3CU3Ec__DisplayClass7_0_t5B1ADC8E6EC9FB6DD2C09F1CCA2F5BB52489B7A1* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () =>  OnAvailabilityChanged(availablity) );
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_0 = __this->___U3CU3E4__this_0;
		NullCheck(L_0);
		PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* L_1 = L_0->___OnAvailabilityChanged_4;
		bool L_2 = __this->___availablity_1;
		NullCheck(L_1);
		PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_inline(L_1, L_2, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void AdListener/<>c__DisplayClass11_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass11_0__ctor_mB9D73A8207E9E9C19920F305797BBD8A1FBD91E0 (U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void AdListener/<>c__DisplayClass11_0::<onReward>b__0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass11_0_U3ConRewardU3Eb__0_m87FA33908423FD6918DA54DBB87D83727994B6AF (U3CU3Ec__DisplayClass11_0_tE7A58B0E659E823A6221F94AE00AA23BCAB2E2A0* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnReward (amount) ) ;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_0 = __this->___U3CU3E4__this_0;
		NullCheck(L_0);
		PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* L_1 = L_0->___OnReward_8;
		float L_2 = __this->___amount_1;
		NullCheck(L_1);
		PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_inline(L_1, L_2, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void AdListener/<>c__DisplayClass12_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass12_0__ctor_m82DF83E96DD88241C93405901C5FDDD5357920C9 (U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void AdListener/<>c__DisplayClass12_0::<onImpression>b__0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass12_0_U3ConImpressionU3Eb__0_m1AFEC68F062848EAF336B0905F28246B8E978A62 (U3CU3Ec__DisplayClass12_0_tD6C15C6AE4C16CE62B3DE6BC73D7CF27FE4681F8* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnImpression (impressionData) ) ;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_0 = __this->___U3CU3E4__this_0;
		NullCheck(L_0);
		PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* L_1 = L_0->___OnImpression_9;
		ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* L_2 = __this->___impressionData_1;
		NullCheck(L_1);
		PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_inline(L_1, L_2, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// AdListener AdUnit::get_AdCallbacks()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* AdUnit_get_AdCallbacks_mB2AAE46D360631D2970F29E8B00F7B6FBD0D726D (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	{
		// return adListener;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_0 = __this->___adListener_3;
		return L_0;
	}
}
// System.Void AdUnit::.ctor(PlayOnSDK/AdUnitType)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit__ctor_m2DF621DB474738391BD7B9D5AC7CEB1FC0F977CB (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, int32_t ___adType0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnitType_tB69AA34C8DD719502A670B646E9E6978E55CAA42_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnit_OnApplicationPause_m32374B7AAC34D392B9CD1BDAFF30BD5E77066DA3_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4D613657609485AE586A3379BA0E3FC13C1E1078);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral88E01C3FB5114D11F9BA7264373B7E2D8554C266);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral97FAFE930621BC2E1CAB32D4D75C0213F1630C44);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralFB4AE4F77150C3A8E8E4F8B23E734E0C7277B7D9);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_1 = NULL;
	{
		// private float fadeValue = 0.1f;
		__this->___fadeValue_1 = (0.100000001f);
		// private float sceneVolumeValue = 1f;
		__this->___sceneVolumeValue_2 = (1.0f);
		// private AdListener adListener = new AdListener();
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_0 = (AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F*)il2cpp_codegen_object_new(AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AdListener__ctor_m1CCF762F792518C3CDFEE1A04F57EAB9CF87F06D(L_0, NULL);
		__this->___adListener_3 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&__this->___adListener_3), (void*)L_0);
		// public AdUnit(PlayOnSDK.AdUnitType adType)
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		// AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_1 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_1, _stringLiteral4D613657609485AE586A3379BA0E3FC13C1E1078, NULL);
		// AndroidJavaObject activity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
		NullCheck(L_1);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_2;
		L_2 = AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD(L_1, _stringLiteralFB4AE4F77150C3A8E8E4F8B23E734E0C7277B7D9, AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD_RuntimeMethod_var);
		V_0 = L_2;
		// AndroidJavaClass typeEnum = new AndroidJavaClass ("com.playon.bridge.AdUnit$AdUnitType");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_3 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_3);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_3, _stringLiteral88E01C3FB5114D11F9BA7264373B7E2D8554C266, NULL);
		// AndroidJavaObject curType = typeEnum.CallStatic<AndroidJavaObject> ("valueOf", adType.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_4 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_5 = L_4;
		Il2CppFakeBox<int32_t> L_6(AdUnitType_tB69AA34C8DD719502A670B646E9E6978E55CAA42_il2cpp_TypeInfo_var, (&___adType0));
		String_t* L_7;
		L_7 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_6), NULL);
		NullCheck(L_5);
		ArrayElementTypeCheck (L_5, L_7);
		(L_5)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_7);
		NullCheck(L_3);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_8;
		L_8 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_3, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_5, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_1 = L_8;
		// client = new AndroidJavaObject ("com.playon.bridge.AdUnit", activity, curType, adListener);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_9 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)3);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_10 = L_9;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_11 = V_0;
		NullCheck(L_10);
		ArrayElementTypeCheck (L_10, L_11);
		(L_10)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_11);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_12 = L_10;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_13 = V_1;
		NullCheck(L_12);
		ArrayElementTypeCheck (L_12, L_13);
		(L_12)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_13);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_14 = L_12;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_15 = __this->___adListener_3;
		NullCheck(L_14);
		ArrayElementTypeCheck (L_14, L_15);
		(L_14)->SetAt(static_cast<il2cpp_array_size_t>(2), (RuntimeObject*)L_15);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_16 = (AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0*)il2cpp_codegen_object_new(AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_il2cpp_TypeInfo_var);
		NullCheck(L_16);
		AndroidJavaObject__ctor_m5A65B5D325C2CEFAC4097A0D3813F8E158178DD7(L_16, _stringLiteral97FAFE930621BC2E1CAB32D4D75C0213F1630C44, L_14, NULL);
		__this->___client_0 = L_16;
		Il2CppCodeGenWriteBarrier((void**)(&__this->___client_0), (void*)L_16);
		// SetAdListener();
		AdUnit_SetAdListener_m849E2EE00E48C125F2CF517DA57D33EC826C6323(__this, NULL);
		// UnityMainThreadDispatcher.Instance();
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_17;
		L_17 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		// PlayOnSDK.onApplicationPause += OnApplicationPause;
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* L_18 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___onApplicationPause_7;
		OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* L_19 = (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480*)il2cpp_codegen_object_new(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var);
		NullCheck(L_19);
		OnApplicationPause__ctor_m3BCCC6C7848EC6C8450E7F80E4B221C09A0D7F3A(L_19, __this, (intptr_t)((void*)AdUnit_OnApplicationPause_m32374B7AAC34D392B9CD1BDAFF30BD5E77066DA3_RuntimeMethod_var), NULL);
		Delegate_t* L_20;
		L_20 = Delegate_Combine_m8B9D24CED35033C7FC56501DFE650F5CB7FF012C(L_18, L_19, NULL);
		((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___onApplicationPause_7 = ((OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480*)CastclassSealed((RuntimeObject*)L_20, OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var));
		Il2CppCodeGenWriteBarrier((void**)(&((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___onApplicationPause_7), (void*)((OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480*)CastclassSealed((RuntimeObject*)L_20, OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var)));
		// }
		return;
	}
}
// System.Void AdUnit::SetAdListener()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetAdListener_m849E2EE00E48C125F2CF517DA57D33EC826C6323 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnit_onClose_m6A6F8A1D9CDE08047769BDA04BB64C82D960A2BF_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnit_onShow_m9BB62953500C9522F432D98DB71DE75029B0704A_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// adListener.OnClose += onClose;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_0 = __this->___adListener_3;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_1 = L_0;
		NullCheck(L_1);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_2 = L_1->___OnClose_6;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_3 = (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)il2cpp_codegen_object_new(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		NullCheck(L_3);
		PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C(L_3, __this, (intptr_t)((void*)AdUnit_onClose_m6A6F8A1D9CDE08047769BDA04BB64C82D960A2BF_RuntimeMethod_var), NULL);
		Delegate_t* L_4;
		L_4 = Delegate_Combine_m8B9D24CED35033C7FC56501DFE650F5CB7FF012C(L_2, L_3, NULL);
		NullCheck(L_1);
		L_1->___OnClose_6 = ((PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)CastclassSealed((RuntimeObject*)L_4, PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var));
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___OnClose_6), (void*)((PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)CastclassSealed((RuntimeObject*)L_4, PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var)));
		// adListener.OnShow += onShow;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_5 = __this->___adListener_3;
		AdListener_tB0023F7D9D271AC3D6A68911CFFB25832C0E0D9F* L_6 = L_5;
		NullCheck(L_6);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_7 = L_6->___OnShow_5;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_8 = (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)il2cpp_codegen_object_new(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		NullCheck(L_8);
		PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C(L_8, __this, (intptr_t)((void*)AdUnit_onShow_m9BB62953500C9522F432D98DB71DE75029B0704A_RuntimeMethod_var), NULL);
		Delegate_t* L_9;
		L_9 = Delegate_Combine_m8B9D24CED35033C7FC56501DFE650F5CB7FF012C(L_7, L_8, NULL);
		NullCheck(L_6);
		L_6->___OnShow_5 = ((PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)CastclassSealed((RuntimeObject*)L_9, PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var));
		Il2CppCodeGenWriteBarrier((void**)(&L_6->___OnShow_5), (void*)((PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)CastclassSealed((RuntimeObject*)L_9, PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var)));
		// }
		return;
	}
}
// System.Void AdUnit::ShowAd()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_ShowAd_mD67A422A10BDF18A0EDFDCA8195D8FC82ED5636E (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4EBF0CFC69F08FF395AB577A97972016BD0D2541);
		s_Il2CppMethodInitialized = true;
	}
	{
		// client.Call ("showAd");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral4EBF0CFC69F08FF395AB577A97972016BD0D2541, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::FadeSounds(System.Boolean,System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_FadeSounds_mDD5B52C17C553EC2FF0F4C0CD38C7A9401B6AE32 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, bool ___isFade0, float ___fadeValue1, const RuntimeMethod* method) 
{
	{
		// }
		return;
	}
}
// System.Void AdUnit::CloseAd()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_CloseAd_mE292F454AAEFA08CF683B0F3C9F018868ADFE9B0 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral6F1742E49716074E291D1CF7420E15D875464950);
		s_Il2CppMethodInitialized = true;
	}
	{
		// client.Call ("closeAd");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral6F1742E49716074E291D1CF7420E15D875464950, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::SetBanner(PlayOnSDK/Position)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetBanner_m4ABD8691230ECC2125B9F606784B2A7A6D9EB2CA (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, int32_t ___location0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralC2D4C5F5D7D2E88572ABA9CA8379E206D6A15E9B);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	{
		// AndroidJavaClass posEnum = new AndroidJavaClass ("com.playon.bridge.AdUnit$Position");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_0 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_0, _stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9, NULL);
		// AndroidJavaObject curPos = posEnum.CallStatic<AndroidJavaObject> ("valueOf", location.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		Il2CppFakeBox<int32_t> L_3(Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var, (&___location0));
		String_t* L_4;
		L_4 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_3), NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_5;
		L_5 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_0, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_2, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_0 = L_5;
		// client.Call ("setBanner", curPos);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_6 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_7 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = L_7;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9 = V_0;
		NullCheck(L_8);
		ArrayElementTypeCheck (L_8, L_9);
		(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_9);
		NullCheck(L_6);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_6, _stringLiteralC2D4C5F5D7D2E88572ABA9CA8379E206D6A15E9B, L_8, NULL);
		// }
		return;
	}
}
// System.Boolean AdUnit::IsAdAvailable()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool AdUnit_IsAdAvailable_mFE198268115C3D8792F96BAFBB83682062F14E86 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral7AB415A8BF4EA1B99D9F95E4A24A0B9932CE1DD6);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return client.Call<bool>("isAdAvailable");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		bool L_2;
		L_2 = AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF(L_0, _stringLiteral7AB415A8BF4EA1B99D9F95E4A24A0B9932CE1DD6, L_1, AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var);
		return L_2;
	}
}
// System.Void AdUnit::SetReward(PlayOnSDK/AdUnitRewardType,System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetReward_mE95F22B0CB091492254853ADD333CDBC315F6F87 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, int32_t ___rewardType0, float ___value1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnitRewardType_tFF48B393BF10F3C33BB81A72BB862EFC5FA47418_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral738CD122DF3DDC83A0E733BE67B9607306AF3A02);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral9EE8CCE3CCBFDDF7007A0708CBC5B96EF54430A5);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	{
		// AndroidJavaClass en = new AndroidJavaClass ("com.playon.bridge.AdUnit$RewardType");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_0 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_0, _stringLiteral9EE8CCE3CCBFDDF7007A0708CBC5B96EF54430A5, NULL);
		// AndroidJavaObject curValue = en.CallStatic<AndroidJavaObject> ("valueOf", rewardType.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		Il2CppFakeBox<int32_t> L_3(AdUnitRewardType_tFF48B393BF10F3C33BB81A72BB862EFC5FA47418_il2cpp_TypeInfo_var, (&___rewardType0));
		String_t* L_4;
		L_4 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_3), NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_5;
		L_5 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_0, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_2, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_0 = L_5;
		// client.Call ("setReward", curValue, value);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_6 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_7 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)2);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = L_7;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9 = V_0;
		NullCheck(L_8);
		ArrayElementTypeCheck (L_8, L_9);
		(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_9);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_10 = L_8;
		float L_11 = ___value1;
		float L_12 = L_11;
		RuntimeObject* L_13 = Box(Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var, &L_12);
		NullCheck(L_10);
		ArrayElementTypeCheck (L_10, L_13);
		(L_10)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_13);
		NullCheck(L_6);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_6, _stringLiteral738CD122DF3DDC83A0E733BE67B9607306AF3A02, L_10, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::SetPopupEnabled(PlayOnSDK/Position,System.Int32,System.Int32)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetPopupEnabled_mE1F2E33C2EE3BC3805033423273A0F1F89BD9392 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, int32_t ___position0, int32_t ___xOffset1, int32_t ___yOffset2, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral6E2F7F013668AE8C44C1CABD572DBDAF2B7DCC2B);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	{
		// AndroidJavaClass en = new AndroidJavaClass ("com.playon.bridge.AdUnit$Position");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_0 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_0, _stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9, NULL);
		// AndroidJavaObject curValue = en.CallStatic<AndroidJavaObject> ("valueOf", position.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		Il2CppFakeBox<int32_t> L_3(Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var, (&___position0));
		String_t* L_4;
		L_4 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_3), NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_5;
		L_5 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_0, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_2, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_0 = L_5;
		// client.Call ("setPopup", curValue, xOffset, yOffset);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_6 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_7 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)3);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = L_7;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9 = V_0;
		NullCheck(L_8);
		ArrayElementTypeCheck (L_8, L_9);
		(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_9);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_10 = L_8;
		int32_t L_11 = ___xOffset1;
		int32_t L_12 = L_11;
		RuntimeObject* L_13 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_12);
		NullCheck(L_10);
		ArrayElementTypeCheck (L_10, L_13);
		(L_10)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_13);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_14 = L_10;
		int32_t L_15 = ___yOffset2;
		int32_t L_16 = L_15;
		RuntimeObject* L_17 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_16);
		NullCheck(L_14);
		ArrayElementTypeCheck (L_14, L_17);
		(L_14)->SetAt(static_cast<il2cpp_array_size_t>(2), (RuntimeObject*)L_17);
		NullCheck(L_6);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_6, _stringLiteral6E2F7F013668AE8C44C1CABD572DBDAF2B7DCC2B, L_14, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::SetProgressBar(UnityEngine.Color)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetProgressBar_m18720437337B3674350BCC498EB579C76E1A4B87 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, Color_tD001788D726C3A7F1379BEED0260B9591F440C1F ___progressBarColor0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral0B0FEB3147CE20EB2C90076367F895C59BCD14B3);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral2EDBB717A5E3BBECF2DF85BE2C083C414DA4A2CE);
		s_Il2CppMethodInitialized = true;
	}
	String_t* V_0 = NULL;
	{
		// string hexProgressBarColor = ColorUtility.ToHtmlStringRGBA(progressBarColor);
		Color_tD001788D726C3A7F1379BEED0260B9591F440C1F L_0 = ___progressBarColor0;
		String_t* L_1;
		L_1 = ColorUtility_ToHtmlStringRGBA_m50DF42C6CE20340EFDBE41E40E9C08928B757F1B(L_0, NULL);
		V_0 = L_1;
		// hexProgressBarColor = "#" + hexProgressBarColor.Substring(6) + hexProgressBarColor.Remove(6);
		String_t* L_2 = V_0;
		NullCheck(L_2);
		String_t* L_3;
		L_3 = String_Substring_m6BA4A3FA3800FE92662D0847CC8E1EEF940DF472(L_2, 6, NULL);
		String_t* L_4 = V_0;
		NullCheck(L_4);
		String_t* L_5;
		L_5 = String_Remove_m8266E0BF5D8565D4CDC850F21E9178AE254C3E85(L_4, 6, NULL);
		String_t* L_6;
		L_6 = String_Concat_m9B13B47FCB3DF61144D9647DDA05F527377251B0(_stringLiteral0B0FEB3147CE20EB2C90076367F895C59BCD14B3, L_3, L_5, NULL);
		V_0 = L_6;
		// client.Call ("setProgressBar", hexProgressBarColor);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_7 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_9 = L_8;
		String_t* L_10 = V_0;
		NullCheck(L_9);
		ArrayElementTypeCheck (L_9, L_10);
		(L_9)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_10);
		NullCheck(L_7);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_7, _stringLiteral2EDBB717A5E3BBECF2DF85BE2C083C414DA4A2CE, L_9, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::SetActionButton(PlayOnSDK/AdUnitActionButtonType,System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetActionButton_m7ACA7C47555CF32D5CE62DF9835320549374618D (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, int32_t ___actionType0, float ___delayTime1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnitActionButtonType_t001E73DDDDF4D9A239DD2AF65A0E9958EBC74523_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4C7F08B24907D85A07C90F671A47F069D8420EAD);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral900867A9D9872AC4473F68EB45771199537471A8);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	{
		// AndroidJavaClass en = new AndroidJavaClass ("com.playon.bridge.AdUnit$ActionButtonType");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_0 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_0, _stringLiteral4C7F08B24907D85A07C90F671A47F069D8420EAD, NULL);
		// AndroidJavaObject cur = en.CallStatic<AndroidJavaObject> ("valueOf", actionType.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		Il2CppFakeBox<int32_t> L_3(AdUnitActionButtonType_t001E73DDDDF4D9A239DD2AF65A0E9958EBC74523_il2cpp_TypeInfo_var, (&___actionType0));
		String_t* L_4;
		L_4 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_3), NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_5;
		L_5 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_0, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_2, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_0 = L_5;
		// client.Call ("setActionButton", cur, delayTime);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_6 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_7 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)2);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = L_7;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9 = V_0;
		NullCheck(L_8);
		ArrayElementTypeCheck (L_8, L_9);
		(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_9);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_10 = L_8;
		float L_11 = ___delayTime1;
		float L_12 = L_11;
		RuntimeObject* L_13 = Box(Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var, &L_12);
		NullCheck(L_10);
		ArrayElementTypeCheck (L_10, L_13);
		(L_10)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_13);
		NullCheck(L_6);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_6, _stringLiteral900867A9D9872AC4473F68EB45771199537471A8, L_10, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::SetLogo(PlayOnSDK/Position,System.Int32,System.Int32,System.Int32)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetLogo_m91D166772C3CE4FDF3F95C7A6A03F33B0BB0C473 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, int32_t ___position0, int32_t ___xOffset1, int32_t ___yOffset2, int32_t ___size3, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral776D3C7985FEE32897A6867DF4706E666144DAA1);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	{
		// AndroidJavaClass posEnum = new AndroidJavaClass ("com.playon.bridge.AdUnit$Position");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_0 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_0, _stringLiteral58CD707F14432BA92A2967A4D2DA3D47C839F5A9, NULL);
		// AndroidJavaObject curPos = posEnum.CallStatic<AndroidJavaObject> ("valueOf", position.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		Il2CppFakeBox<int32_t> L_3(Position_t4110B93EBEDF70FC2160FBEA449823DEDDDCBBE3_il2cpp_TypeInfo_var, (&___position0));
		String_t* L_4;
		L_4 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_3), NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_5;
		L_5 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_0, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_2, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_0 = L_5;
		// client.Call ("setLogo", curPos, xOffset, yOffset, size);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_6 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_7 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)4);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = L_7;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9 = V_0;
		NullCheck(L_8);
		ArrayElementTypeCheck (L_8, L_9);
		(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_9);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_10 = L_8;
		int32_t L_11 = ___xOffset1;
		int32_t L_12 = L_11;
		RuntimeObject* L_13 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_12);
		NullCheck(L_10);
		ArrayElementTypeCheck (L_10, L_13);
		(L_10)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_13);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_14 = L_10;
		int32_t L_15 = ___yOffset2;
		int32_t L_16 = L_15;
		RuntimeObject* L_17 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_16);
		NullCheck(L_14);
		ArrayElementTypeCheck (L_14, L_17);
		(L_14)->SetAt(static_cast<il2cpp_array_size_t>(2), (RuntimeObject*)L_17);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_18 = L_14;
		int32_t L_19 = ___size3;
		int32_t L_20 = L_19;
		RuntimeObject* L_21 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_20);
		NullCheck(L_18);
		ArrayElementTypeCheck (L_18, L_21);
		(L_18)->SetAt(static_cast<il2cpp_array_size_t>(3), (RuntimeObject*)L_21);
		NullCheck(L_6);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_6, _stringLiteral776D3C7985FEE32897A6867DF4706E666144DAA1, L_18, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::SetVisualization(UnityEngine.Color,UnityEngine.Color)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_SetVisualization_mD858DF71155FD3AD53D10FDC743962FAC81A0B56 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, Color_tD001788D726C3A7F1379BEED0260B9591F440C1F ___tint0, Color_tD001788D726C3A7F1379BEED0260B9591F440C1F ___background1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral0B0FEB3147CE20EB2C90076367F895C59BCD14B3);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralB430335B3B29892BFA95AE668C5359F135DD7B33);
		s_Il2CppMethodInitialized = true;
	}
	String_t* V_0 = NULL;
	String_t* V_1 = NULL;
	{
		// string hexTintColor = ColorUtility.ToHtmlStringRGBA(tint);
		Color_tD001788D726C3A7F1379BEED0260B9591F440C1F L_0 = ___tint0;
		String_t* L_1;
		L_1 = ColorUtility_ToHtmlStringRGBA_m50DF42C6CE20340EFDBE41E40E9C08928B757F1B(L_0, NULL);
		V_0 = L_1;
		// hexTintColor = "#" + hexTintColor.Substring(6) + hexTintColor.Remove(6);
		String_t* L_2 = V_0;
		NullCheck(L_2);
		String_t* L_3;
		L_3 = String_Substring_m6BA4A3FA3800FE92662D0847CC8E1EEF940DF472(L_2, 6, NULL);
		String_t* L_4 = V_0;
		NullCheck(L_4);
		String_t* L_5;
		L_5 = String_Remove_m8266E0BF5D8565D4CDC850F21E9178AE254C3E85(L_4, 6, NULL);
		String_t* L_6;
		L_6 = String_Concat_m9B13B47FCB3DF61144D9647DDA05F527377251B0(_stringLiteral0B0FEB3147CE20EB2C90076367F895C59BCD14B3, L_3, L_5, NULL);
		V_0 = L_6;
		// string hexBackgroundColor = ColorUtility.ToHtmlStringRGBA(background);
		Color_tD001788D726C3A7F1379BEED0260B9591F440C1F L_7 = ___background1;
		String_t* L_8;
		L_8 = ColorUtility_ToHtmlStringRGBA_m50DF42C6CE20340EFDBE41E40E9C08928B757F1B(L_7, NULL);
		V_1 = L_8;
		// hexBackgroundColor = "#" + hexBackgroundColor.Substring(6) + hexBackgroundColor.Remove(6);
		String_t* L_9 = V_1;
		NullCheck(L_9);
		String_t* L_10;
		L_10 = String_Substring_m6BA4A3FA3800FE92662D0847CC8E1EEF940DF472(L_9, 6, NULL);
		String_t* L_11 = V_1;
		NullCheck(L_11);
		String_t* L_12;
		L_12 = String_Remove_m8266E0BF5D8565D4CDC850F21E9178AE254C3E85(L_11, 6, NULL);
		String_t* L_13;
		L_13 = String_Concat_m9B13B47FCB3DF61144D9647DDA05F527377251B0(_stringLiteral0B0FEB3147CE20EB2C90076367F895C59BCD14B3, L_10, L_12, NULL);
		V_1 = L_13;
		// client.Call ("setVisualization", hexTintColor, hexBackgroundColor);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_14 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_15 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)2);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_16 = L_15;
		String_t* L_17 = V_0;
		NullCheck(L_16);
		ArrayElementTypeCheck (L_16, L_17);
		(L_16)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_17);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_18 = L_16;
		String_t* L_19 = V_1;
		NullCheck(L_18);
		ArrayElementTypeCheck (L_18, L_19);
		(L_18)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_19);
		NullCheck(L_14);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_14, _stringLiteralB430335B3B29892BFA95AE668C5359F135DD7B33, L_18, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::TrackRewardedOffer()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_TrackRewardedOffer_mB543A686474439753BB665F5D0E22F6E425A6128 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralFA8C554EAFD9D02602358A963E882DD649EE907E);
		s_Il2CppMethodInitialized = true;
	}
	{
		// client.Call ("trackRewardedOffer");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteralFA8C554EAFD9D02602358A963E882DD649EE907E, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::onShow()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_onShow_m9BB62953500C9522F432D98DB71DE75029B0704A (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnit_U3ConShowU3Eb__21_0_mE90BF847B9A42D5393E6AC2C5B7C50C1DDADBA10_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// UnityMainThreadDispatcher.Instance().Enqueue(() => {
		//     sceneVolumeValue = AudioListener.volume;
		//     AudioListener.volume = fadeValue;
		// });
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0;
		L_0 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_1 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_1, __this, (intptr_t)((void*)AdUnit_U3ConShowU3Eb__21_0_mE90BF847B9A42D5393E6AC2C5B7C50C1DDADBA10_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_0, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::onClose()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_onClose_m6A6F8A1D9CDE08047769BDA04BB64C82D960A2BF (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AdUnit_U3ConCloseU3Eb__22_0_m111627BFFB26FCF715FDC064BE68425BB2A9257F_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// UnityMainThreadDispatcher.Instance().Enqueue(() => AudioListener.volume = sceneVolumeValue);
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0;
		L_0 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_1 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_1, __this, (intptr_t)((void*)AdUnit_U3ConCloseU3Eb__22_0_m111627BFFB26FCF715FDC064BE68425BB2A9257F_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_0, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::OnApplicationPause(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_OnApplicationPause_m32374B7AAC34D392B9CD1BDAFF30BD5E77066DA3 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, bool ___isPause0, const RuntimeMethod* method) 
{
	{
		// if (isPause) onPause();
		bool L_0 = ___isPause0;
		if (!L_0)
		{
			goto IL_000a;
		}
	}
	{
		// if (isPause) onPause();
		AdUnit_onPause_mE56E3C95E405B252C791FCC55E6243AAD1F326D4(__this, NULL);
		return;
	}

IL_000a:
	{
		// else onResume();
		AdUnit_onResume_mD528E54AA77DEFEF3B99848AE918870FF3929F80(__this, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::onPause()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_onPause_mE56E3C95E405B252C791FCC55E6243AAD1F326D4 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralC386789464914AFAB69C70A3E07C88FB68EDB4DB);
		s_Il2CppMethodInitialized = true;
	}
	{
		// client.Call ("onPause");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteralC386789464914AFAB69C70A3E07C88FB68EDB4DB, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::onResume()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_onResume_mD528E54AA77DEFEF3B99848AE918870FF3929F80 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4DD298A95417FB51C736D39EC400C2991FE38DDE);
		s_Il2CppMethodInitialized = true;
	}
	{
		// client.Call ("onResume");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral4DD298A95417FB51C736D39EC400C2991FE38DDE, L_1, NULL);
		// }
		return;
	}
}
// System.Void AdUnit::Dispose()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_Dispose_m78D3B9FDBA1E0F5046673A24216AABF93BA3C665 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	{
		// }
		return;
	}
}
// System.Void AdUnit::<onShow>b__21_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_U3ConShowU3Eb__21_0_mE90BF847B9A42D5393E6AC2C5B7C50C1DDADBA10 (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	{
		// sceneVolumeValue = AudioListener.volume;
		float L_0;
		L_0 = AudioListener_get_volume_mCE38EB0C7ACCECCC98E1816DA2F816E771EE4595(NULL);
		__this->___sceneVolumeValue_2 = L_0;
		// AudioListener.volume = fadeValue;
		float L_1 = __this->___fadeValue_1;
		AudioListener_set_volume_mC13591F71DDD0B3A64E52E475260050E89F64C9A(L_1, NULL);
		// });
		return;
	}
}
// System.Void AdUnit::<onClose>b__22_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void AdUnit_U3ConCloseU3Eb__22_0_m111627BFFB26FCF715FDC064BE68425BB2A9257F (AdUnit_tFC0E77FAAF9635161EA6E2A17E06C5A619A0EDD1* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue(() => AudioListener.volume = sceneVolumeValue);
		float L_0 = __this->___sceneVolumeValue_2;
		AudioListener_set_volume_mC13591F71DDD0B3A64E52E475260050E89F64C9A(L_0, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void AdUnit/ImpressionData::.ctor(UnityEngine.AndroidJavaObject)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void ImpressionData__ctor_m26826B1060C583326A70EB15BC49FA3EA482A6B8 (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* ___ptr0, const RuntimeMethod* method) 
{
	{
		// public ImpressionData(AndroidJavaObject ptr){
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		// client = ptr;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = ___ptr0;
		__this->___client_0 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&__this->___client_0), (void*)L_0);
		// }
		return;
	}
}
// System.String AdUnit/ImpressionData::GetPlacementID()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* ImpressionData_GetPlacementID_m2DF75B69BDC128FB22370B4784CC53B112057925 (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral9DC4320DADC775DCF6D71C7B84E59C4083CDCA55);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return client.Call<string>("getPlacementID");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		String_t* L_2;
		L_2 = AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40(L_0, _stringLiteral9DC4320DADC775DCF6D71C7B84E59C4083CDCA55, L_1, AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var);
		return L_2;
	}
}
// System.String AdUnit/ImpressionData::GetSessionID()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* ImpressionData_GetSessionID_m8EF6987DCA54D8B0B8C1080941460F09978B85F0 (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral26DF44B1CB0ACFEE85565445A886A3B08E0C107F);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return client.Call<string>("getSessionID");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		String_t* L_2;
		L_2 = AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40(L_0, _stringLiteral26DF44B1CB0ACFEE85565445A886A3B08E0C107F, L_1, AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var);
		return L_2;
	}
}
// PlayOnSDK/AdUnitType AdUnit/ImpressionData::GetAdType()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR int32_t ImpressionData_GetAdType_mEDD63B9C3C6E82F6C252E63C73ACE70D27CAE866 (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m020246E0988293B6126B690BD6CE4D894276AA3D_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4BDFC4653FDBEB2825732DE2876AF46674EADB7F);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralC9CD9BE5636542BD3CFAC8C3719D519A618BC894);
		s_Il2CppMethodInitialized = true;
	}
	{
		// AndroidJavaObject enumAdType = client.Call<AndroidJavaObject>("getAdType");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_2;
		L_2 = AndroidJavaObject_Call_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m020246E0988293B6126B690BD6CE4D894276AA3D(L_0, _stringLiteral4BDFC4653FDBEB2825732DE2876AF46674EADB7F, L_1, AndroidJavaObject_Call_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m020246E0988293B6126B690BD6CE4D894276AA3D_RuntimeMethod_var);
		// int typeIndex = enumAdType.Call<int> ("ordinal");
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_3;
		L_3 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_2);
		int32_t L_4;
		L_4 = AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC(L_2, _stringLiteralC9CD9BE5636542BD3CFAC8C3719D519A618BC894, L_3, AndroidJavaObject_Call_TisInt32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_mDC5FD095AFC55DFE596907E5B055B5774DA5B5AC_RuntimeMethod_var);
		// return (PlayOnSDK.AdUnitType)typeIndex;
		return (int32_t)(L_4);
	}
}
// System.String AdUnit/ImpressionData::GetCountry()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* ImpressionData_GetCountry_mF4A96C8482393CFCCD69F4381F2FBD58DA57C9A2 (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral5B24578D87AB03F592583874DA3194F06EA9710C);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return client.Call<string>("getCountry");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		String_t* L_2;
		L_2 = AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40(L_0, _stringLiteral5B24578D87AB03F592583874DA3194F06EA9710C, L_1, AndroidJavaObject_Call_TisString_t_m67FC2931E81004C3F259008314180511C3D2AF40_RuntimeMethod_var);
		return L_2;
	}
}
// System.Double AdUnit/ImpressionData::GetRevenue()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR double ImpressionData_GetRevenue_m69127812A1CB29BD7C09FE1A73CA2F02CA0CD55D (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4C75F8761CF7E943CE7421225ACD69C6114921A4);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return client.Call<double>("getRevenue");
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = __this->___client_0;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		double L_2;
		L_2 = AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362(L_0, _stringLiteral4C75F8761CF7E943CE7421225ACD69C6114921A4, L_1, AndroidJavaObject_Call_TisDouble_tE150EF3D1D43DEE85D533810AB4C742307EEDE5F_m980F8BA95C5B796FDACBDF865A7BAE431DE77362_RuntimeMethod_var);
		return L_2;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// UnityEngine.AndroidJavaObject PlayOnSDK::getBridge()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&IDisposable_t030E0496B4E0E4E4F086825007979AF51F7248C5_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral2063737B07B6658BC2E1EC3128D4E09E57CA123E);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* V_0 = NULL;
	{
		// if (_androidBridge == null)
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->____androidBridge_3;
		if (L_0)
		{
			goto IL_0033;
		}
	}
	{
		// using (var pluginClass = new AndroidJavaClass( AndroidBridge ))
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		String_t* L_1 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___AndroidBridge_4;
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_2 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_2);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_2, L_1, NULL);
		V_0 = L_2;
	}
	{
		auto __finallyBlock = il2cpp::utils::Finally([&]
		{

FINALLY_0029:
			{// begin finally (depth: 1)
				{
					AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_3 = V_0;
					if (!L_3)
					{
						goto IL_0032;
					}
				}
				{
					AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_4 = V_0;
					NullCheck(L_4);
					InterfaceActionInvoker0::Invoke(0 /* System.Void System.IDisposable::Dispose() */, IDisposable_t030E0496B4E0E4E4F086825007979AF51F7248C5_il2cpp_TypeInfo_var, L_4);
				}

IL_0032:
				{
					return;
				}
			}// end finally (depth: 1)
		});
		try
		{// begin try (depth: 1)
			// _androidBridge = pluginClass.CallStatic<AndroidJavaObject> ("getInstance");
			AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_5 = V_0;
			ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_6;
			L_6 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
			NullCheck(L_5);
			AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_7;
			L_7 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_5, _stringLiteral2063737B07B6658BC2E1EC3128D4E09E57CA123E, L_6, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
			il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
			((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->____androidBridge_3 = L_7;
			Il2CppCodeGenWriteBarrier((void**)(&((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->____androidBridge_3), (void*)L_7);
			goto IL_0033;
		}// end try (depth: 1)
		catch(Il2CppExceptionWrapper& e)
		{
			__finallyBlock.StoreException(e.ex);
		}
	}

IL_0033:
	{
		// return _androidBridge;
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_8 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->____androidBridge_3;
		return L_8;
	}
}
// PlayOnSDK/PlayOnNoArgsDelegate PlayOnSDK::get_OnInitializationFinished()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* PlayOnSDK_get_OnInitializationFinished_m252201F233641127A553C64D38DC9CB05B9E1911 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return playOnListener.OnInitializationFinished;
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* L_0 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___playOnListener_6;
		NullCheck(L_0);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_1 = L_0->___OnInitializationFinished_4;
		return L_1;
	}
}
// System.Void PlayOnSDK::set_OnInitializationFinished(PlayOnSDK/PlayOnNoArgsDelegate)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_set_OnInitializationFinished_m9CF6D3D709F90554CBE0D88B5B2BD0A07C10E512 (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* ___value0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// playOnListener.OnInitializationFinished = value;
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* L_0 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___playOnListener_6;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_1 = ___value0;
		NullCheck(L_0);
		L_0->___OnInitializationFinished_4 = L_1;
		Il2CppCodeGenWriteBarrier((void**)(&L_0->___OnInitializationFinished_4), (void*)L_1);
		// }
		return;
	}
}
// System.Void PlayOnSDK::Initialize(System.String,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_Initialize_mD87265919B405A443CDE3294144A41F472961779 (String_t* ___apiKey0, String_t* ___iosStoreId1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass21_0_U3CInitializeU3Eb__0_mE057820476162DB61A892BDD4FC378CC08C7A426_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4D613657609485AE586A3379BA0E3FC13C1E1078);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral7D5D6BBF8281151C9F5F57DE5D5BABB7140A651D);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralFB4AE4F77150C3A8E8E4F8B23E734E0C7277B7D9);
		s_Il2CppMethodInitialized = true;
	}
	U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* V_0 = NULL;
	AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* V_1 = NULL;
	{
		U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* L_0 = (U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB*)il2cpp_codegen_object_new(U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__DisplayClass21_0__ctor_m11A2AB840F1A01A265F57BF4EB35B8A6D17A8F8C(L_0, NULL);
		V_0 = L_0;
		U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* L_1 = V_0;
		String_t* L_2 = ___apiKey0;
		NullCheck(L_1);
		L_1->___apiKey_2 = L_2;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___apiKey_2), (void*)L_2);
		// UnityMainThreadDispatcher.Instance();
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_3;
		L_3 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		// string unityVersion = Application.unityVersion;
		U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* L_4 = V_0;
		String_t* L_5;
		L_5 = Application_get_unityVersion_m09F45DDCFA0A4414AA296A595FDB0B59B44F5387(NULL);
		NullCheck(L_4);
		L_4->___unityVersion_0 = L_5;
		Il2CppCodeGenWriteBarrier((void**)(&L_4->___unityVersion_0), (void*)L_5);
		// AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_6 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_6);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_6, _stringLiteral4D613657609485AE586A3379BA0E3FC13C1E1078, NULL);
		V_1 = L_6;
		// AndroidJavaObject activity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
		U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* L_7 = V_0;
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_8 = V_1;
		NullCheck(L_8);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9;
		L_9 = AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD(L_8, _stringLiteralFB4AE4F77150C3A8E8E4F8B23E734E0C7277B7D9, AndroidJavaObject_GetStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_mD7D192A35EB2B2DA3775FAB081958B72088251DD_RuntimeMethod_var);
		NullCheck(L_7);
		L_7->___activity_1 = L_9;
		Il2CppCodeGenWriteBarrier((void**)(&L_7->___activity_1), (void*)L_9);
		// activity.Call("runOnUiThread", new AndroidJavaRunnable(() => {
		//     getBridge ().Call("setEngineInformation", "unity_" + unityVersion, SDK_VERSION);
		//     getBridge ().Call("setOnInitializationListener", playOnListener);
		//     getBridge ().Call("initialize", activity, apiKey);
		// }));
		U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* L_10 = V_0;
		NullCheck(L_10);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_11 = L_10->___activity_1;
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_12 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_13 = L_12;
		U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* L_14 = V_0;
		AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F* L_15 = (AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F*)il2cpp_codegen_object_new(AndroidJavaRunnable_tF23B9BBDA8C99A48BCEEA6335A47DA3C0EF34A7F_il2cpp_TypeInfo_var);
		NullCheck(L_15);
		AndroidJavaRunnable__ctor_m000E4FEB2DE8031A1CD733610D76E2BF60490334(L_15, L_14, (intptr_t)((void*)U3CU3Ec__DisplayClass21_0_U3CInitializeU3Eb__0_mE057820476162DB61A892BDD4FC378CC08C7A426_RuntimeMethod_var), NULL);
		NullCheck(L_13);
		ArrayElementTypeCheck (L_13, L_15);
		(L_13)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_15);
		NullCheck(L_11);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_11, _stringLiteral7D5D6BBF8281151C9F5F57DE5D5BABB7140A651D, L_13, NULL);
		// }
		return;
	}
}
// System.Boolean PlayOnSDK::IsInitialized()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool PlayOnSDK_IsInitialized_m0F85F6111A406751719197069752460519E2357D (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral1D185DB91E3DF09D623D41B1D7987E6F4A5D419D);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return getBridge ().Call<bool>("isInitialized");
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		bool L_2;
		L_2 = AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF(L_0, _stringLiteral1D185DB91E3DF09D623D41B1D7987E6F4A5D419D, L_1, AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var);
		return L_2;
	}
}
// System.Void PlayOnSDK::SetTestEnabled(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_SetTestEnabled_m8FE5821AA4A05017E164C3543BB72304B1BCC1CD (bool ___flag0, const RuntimeMethod* method) 
{
	{
		// }
		return;
	}
}
// System.Void PlayOnSDK::SetIsChildDirected(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_SetIsChildDirected_m8ED60672C81365DB70AD1FD681A70161AFBE8C6F (bool ___flag0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4A208B9FE57AB0384F58E68CD2FC92A7E7BDBCA8);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("setIsChildDirected", flag);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		bool L_3 = ___flag0;
		bool L_4 = L_3;
		RuntimeObject* L_5 = Box(Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var, &L_4);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_5);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_5);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral4A208B9FE57AB0384F58E68CD2FC92A7E7BDBCA8, L_2, NULL);
		// }
		return;
	}
}
// System.Boolean PlayOnSDK::GetIsChildDirected()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool PlayOnSDK_GetIsChildDirected_m7147E843E1D2A9A5931388E62FE0FE06FF08BB4F (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralCB1A47AD60F3E5B8498BAA4FD475F779EABAA7B1);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return getBridge ().Call<bool>("getIsChildDirected");
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		bool L_2;
		L_2 = AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF(L_0, _stringLiteralCB1A47AD60F3E5B8498BAA4FD475F779EABAA7B1, L_1, AndroidJavaObject_Call_TisBoolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_m05D3284A3FA772D032190A0FE82363C61000F1DF_RuntimeMethod_var);
		return L_2;
	}
}
// System.Single PlayOnSDK::GetDeviceVolumeLevel()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR float PlayOnSDK_GetDeviceVolumeLevel_m793686E2858A2AD95CE0C49EB7AA9014425C2733 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralFC96CDF1B7AE3CC0AAEF573824C705643D42A444);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return getBridge ().Call<float>("getDeviceVolumeLevel");
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		float L_2;
		L_2 = AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1(L_0, _stringLiteralFC96CDF1B7AE3CC0AAEF573824C705643D42A444, L_1, AndroidJavaObject_Call_TisSingle_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_mC6CF02CBA2C4A23EF8CD0BF612F5759B8C26DFF1_RuntimeMethod_var);
		return L_2;
	}
}
// System.Void PlayOnSDK::SetGdprConsent(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_SetGdprConsent_m9906E390166F0CBCD0733B8CE33E4A92BF92DACA (bool ___consent0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralC13C045BDCCE540BFBAD0954B500778E78A7AFF4);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("setGDPRConsent", consent);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		bool L_3 = ___consent0;
		bool L_4 = L_3;
		RuntimeObject* L_5 = Box(Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var, &L_4);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_5);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_5);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteralC13C045BDCCE540BFBAD0954B500778E78A7AFF4, L_2, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::SetIABUSPrivacyString(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_SetIABUSPrivacyString_m6EA1DBD08493A6B42EC30FF78466C831F8AF56C2 (String_t* ___consentString0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralA7564FB502917FAC9A0BCC35A2AD620DDA896515);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("setIABUSPrivacyString", consentString);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		String_t* L_3 = ___consentString0;
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_3);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_3);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteralA7564FB502917FAC9A0BCC35A2AD620DDA896515, L_2, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::ClearIABUSPrivacyString()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_ClearIABUSPrivacyString_mFBD7D4EF2D43BA6C3833406DD840CB94C5F28F44 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral179AF3F5541B7352619C2C420456B04D5CA4EBB0);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("clearIABUSPrivacyString");
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral179AF3F5541B7352619C2C420456B04D5CA4EBB0, L_1, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::AddCustomAttribute(System.String,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_AddCustomAttribute_m9530BFDD2FCF54DA92641C1C2273C50DA1640C8D (String_t* ___key0, String_t* ___value1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4E4ABD7CAEC11788D9AE5BD65CA1A8F5972C4555);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("addCustomAttribute", key, value);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)2);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		String_t* L_3 = ___key0;
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_3);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_3);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_4 = L_2;
		String_t* L_5 = ___value1;
		NullCheck(L_4);
		ArrayElementTypeCheck (L_4, L_5);
		(L_4)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_5);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral4E4ABD7CAEC11788D9AE5BD65CA1A8F5972C4555, L_4, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::ClearCustomAttributes()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_ClearCustomAttributes_mF8BC155C43B9D7CA8EA44E82FF9F623AD3D8DA5A (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral3B0E6C6D7E6EB5870E3407B02A20249DA7CD571A);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("clearCustomAttributes");
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral3B0E6C6D7E6EB5870E3407B02A20249DA7CD571A, L_1, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::RemoveCustomAttribute(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_RemoveCustomAttribute_m42CCE2701E9CFF7B3EAC32004867DA74365BA400 (String_t* ___key0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral2EBECCA774392333AD0E032E0759D39E44DC855B);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("removeCustomAttribute", key);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		String_t* L_3 = ___key0;
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_3);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_3);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteral2EBECCA774392333AD0E032E0759D39E44DC855B, L_2, NULL);
		// }
		return;
	}
}
// System.Collections.Generic.List`1<System.Collections.Generic.SortedDictionary`2<System.String,System.String>> PlayOnSDK::GetCustomAttributes()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR List_1_tC9169B7444A041B0F08AAD275121262A80574FEC* PlayOnSDK_GetCustomAttributes_m9AD6B730C8D65F5EFB21F078A7B73593D5E14120 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralD73F8A9E68AE4918DADE60AC49FEEAFFD640A7F7);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return getBridge ().Call<List<SortedDictionary<String, String>>>("getCustomAttributes");
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1;
		L_1 = Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_inline(Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_RuntimeMethod_var);
		NullCheck(L_0);
		List_1_tC9169B7444A041B0F08AAD275121262A80574FEC* L_2;
		L_2 = AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9(L_0, _stringLiteralD73F8A9E68AE4918DADE60AC49FEEAFFD640A7F7, L_1, AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9_RuntimeMethod_var);
		return L_2;
	}
}
// System.Collections.Generic.List`1<System.Collections.Generic.SortedDictionary`2<System.String,System.String>> PlayOnSDK::GetCustomAttributes(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR List_1_tC9169B7444A041B0F08AAD275121262A80574FEC* PlayOnSDK_GetCustomAttributes_mF4EE97917D306F9F36ADB02E3986A2A142696781 (String_t* ___key0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralD73F8A9E68AE4918DADE60AC49FEEAFFD640A7F7);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return getBridge ().Call<List<SortedDictionary<String, String>>>("getCustomAttributes", key);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		String_t* L_3 = ___key0;
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_3);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_3);
		NullCheck(L_0);
		List_1_tC9169B7444A041B0F08AAD275121262A80574FEC* L_4;
		L_4 = AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9(L_0, _stringLiteralD73F8A9E68AE4918DADE60AC49FEEAFFD640A7F7, L_2, AndroidJavaObject_Call_TisList_1_tC9169B7444A041B0F08AAD275121262A80574FEC_m57FC719B35F6890F346631BFE778D152F04098F9_RuntimeMethod_var);
		return L_4;
	}
}
// System.Void PlayOnSDK::SetLogLevel(PlayOnSDK/LogLevel)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_SetLogLevel_mD0AA711CF8CE93F47CDF9117D85C40449FFCE6DD (int32_t ___level0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&LogLevel_tEA76C361B0E3668226BE166F914A4362D6548D22_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral036D7D6FDFC899E4B081AFFBB9204873E7B89ED6);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral6646AEF6383BB084D7AF1DBC36DE3B99CB7D5096);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4);
		s_Il2CppMethodInitialized = true;
	}
	AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* V_0 = NULL;
	{
		// AndroidJavaClass typeEnum = new AndroidJavaClass ("com.playon.bridge.common.Log$LogLevel");
		AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03* L_0 = (AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03*)il2cpp_codegen_object_new(AndroidJavaClass_tE6296B30CC4BF84434A9B765267F3FD0DD8DDB03_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		AndroidJavaClass__ctor_mB5466169E1151B8CC44C8FED234D79984B431389(L_0, _stringLiteral036D7D6FDFC899E4B081AFFBB9204873E7B89ED6, NULL);
		// AndroidJavaObject curType = typeEnum.CallStatic<AndroidJavaObject> ("valueOf", level.ToString ());
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		Il2CppFakeBox<int32_t> L_3(LogLevel_tEA76C361B0E3668226BE166F914A4362D6548D22_il2cpp_TypeInfo_var, (&___level0));
		String_t* L_4;
		L_4 = Enum_ToString_m946B0B83C4470457D0FF555D862022C72BB55741((Enum_t2A1A94B24E3B776EEF4E5E485E290BB9D4D072E2*)(&L_3), NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		NullCheck(L_0);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_5;
		L_5 = AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63(L_0, _stringLiteralEB86645FD4CAF139C7CFC0A789470B8A75034AF4, L_2, AndroidJavaObject_CallStatic_TisAndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0_m398EA96C1DE1BB885F2B1DD0E00E8BBA86B49E63_RuntimeMethod_var);
		V_0 = L_5;
		// getBridge ().Call("setLogLevel", curType);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_6;
		L_6 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_7 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = L_7;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_9 = V_0;
		NullCheck(L_8);
		ArrayElementTypeCheck (L_8, L_9);
		(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_9);
		NullCheck(L_6);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_6, _stringLiteral6646AEF6383BB084D7AF1DBC36DE3B99CB7D5096, L_8, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::requestTrackingAuthorization()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK_requestTrackingAuthorization_m652310DE771426EA57BF9053F443789865E25F2D (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral92653BFF731DF145688477494D812C8FE1FD6A91);
		s_Il2CppMethodInitialized = true;
	}
	{
		// Debug.Log("PlayOnSDK: Requesting tracking authorization is only supported for iOS platform.");
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219(_stringLiteral92653BFF731DF145688477494D812C8FE1FD6A91, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK__ctor_m8FCE263BDAB5D247BDE8935D10770E503D0F9CAA (PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void PlayOnSDK::.cctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnSDK__cctor_m9FCD9DB0281778981189CE3163042BABEB6AAFB6 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_cctorU3Eb__40_0_m20D060CE3401D8047562622B990F4A4C225BA502_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral318E4C92A2EF8C0EBC2BBFD8FD584981623B8A4D);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral6AFC4CAFCC3FFED4BDFB42FEEB1F5E73D629EBD4);
		s_Il2CppMethodInitialized = true;
	}
	{
		// private readonly static string AndroidBridge = "com.playon.bridge.PlayOnManager";
		((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___AndroidBridge_4 = _stringLiteral6AFC4CAFCC3FFED4BDFB42FEEB1F5E73D629EBD4;
		Il2CppCodeGenWriteBarrier((void**)(&((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___AndroidBridge_4), (void*)_stringLiteral6AFC4CAFCC3FFED4BDFB42FEEB1F5E73D629EBD4);
		// public static string SDK_VERSION = "2.0.2";
		((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___SDK_VERSION_5 = _stringLiteral318E4C92A2EF8C0EBC2BBFD8FD584981623B8A4D;
		Il2CppCodeGenWriteBarrier((void**)(&((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___SDK_VERSION_5), (void*)_stringLiteral318E4C92A2EF8C0EBC2BBFD8FD584981623B8A4D);
		// private static PlayOnListener playOnListener = new PlayOnListener();
		PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* L_0 = (PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035*)il2cpp_codegen_object_new(PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		PlayOnListener__ctor_mFA8101443AFC171D76412683B9F6B4DDFF69F9B0(L_0, NULL);
		((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___playOnListener_6 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___playOnListener_6), (void*)L_0);
		// public static OnApplicationPause onApplicationPause = (isPaused) => { Debug.Log("PlayOnPaused " + isPaused); };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var);
		U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450* L_1 = ((U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* L_2 = (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480*)il2cpp_codegen_object_new(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480_il2cpp_TypeInfo_var);
		NullCheck(L_2);
		OnApplicationPause__ctor_m3BCCC6C7848EC6C8450E7F80E4B221C09A0D7F3A(L_2, L_1, (intptr_t)((void*)U3CU3Ec_U3C_cctorU3Eb__40_0_m20D060CE3401D8047562622B990F4A4C225BA502_RuntimeMethod_var), NULL);
		((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___onApplicationPause_7 = L_2;
		Il2CppCodeGenWriteBarrier((void**)(&((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___onApplicationPause_7), (void*)L_2);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_Multicast(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method)
{
	il2cpp_array_size_t length = __this->___delegates_13->max_length;
	Delegate_t** delegatesToInvoke = reinterpret_cast<Delegate_t**>(__this->___delegates_13->GetAddressAtUnchecked(0));
	for (il2cpp_array_size_t i = 0; i < length; i++)
	{
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* currentDelegate = reinterpret_cast<PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*>(delegatesToInvoke[i]);
		typedef void (*FunctionPointerType) (RuntimeObject*, const RuntimeMethod*);
		((FunctionPointerType)currentDelegate->___invoke_impl_1)((Il2CppObject*)currentDelegate->___method_code_6, reinterpret_cast<RuntimeMethod*>(currentDelegate->___method_3));
	}
}
void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_OpenInst(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(method);
}
void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_OpenStatic(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(method);
}
void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_OpenStaticInvoker(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method)
{
	InvokerActionInvoker0::Invoke(__this->___method_ptr_0, method, NULL);
}
void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_ClosedStaticInvoker(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method)
{
	InvokerActionInvoker1< RuntimeObject* >::Invoke(__this->___method_ptr_0, method, NULL, __this->___m_target_2);
}
IL2CPP_EXTERN_C  void DelegatePInvokeWrapper_PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21 (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method)
{
	typedef void (DEFAULT_CALL *PInvokeFunc)();
	PInvokeFunc il2cppPInvokeFunc = reinterpret_cast<PInvokeFunc>(il2cpp_codegen_get_reverse_pinvoke_function_ptr(__this));
	// Native function invocation
	il2cppPInvokeFunc();

}
// System.Void PlayOnSDK/PlayOnNoArgsDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) 
{
	__this->___method_ptr_0 = il2cpp_codegen_get_virtual_call_method_pointer((RuntimeMethod*)___method1);
	__this->___method_3 = ___method1;
	__this->___m_target_2 = ___object0;
	Il2CppCodeGenWriteBarrier((void**)(&__this->___m_target_2), (void*)___object0);
	int parameterCount = il2cpp_codegen_method_parameter_count((RuntimeMethod*)___method1);
	__this->___method_code_6 = (intptr_t)__this;
	if (MethodIsStatic((RuntimeMethod*)___method1))
	{
		bool isOpen = parameterCount == 0;
		if (il2cpp_codegen_call_method_via_invoker((RuntimeMethod*)___method1))
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_OpenStaticInvoker;
			else
				__this->___invoke_impl_1 = (intptr_t)&PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_ClosedStaticInvoker;
		else
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_OpenStatic;
			else
				{
					__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
					__this->___method_code_6 = (intptr_t)__this->___m_target_2;
				}
	}
	else
	{
		if (___object0 == NULL)
			il2cpp_codegen_raise_exception(il2cpp_codegen_get_argument_exception(NULL, "Delegate to an instance method cannot have null 'this'."), NULL);
		__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
		__this->___method_code_6 = (intptr_t)__this->___m_target_2;
	}
	__this->___extra_arg_5 = (intptr_t)&PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_Multicast;
}
// System.Void PlayOnSDK/PlayOnNoArgsDelegate::Invoke()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47 (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
// System.IAsyncResult PlayOnSDK/PlayOnNoArgsDelegate::BeginInvoke(System.AsyncCallback,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* PlayOnNoArgsDelegate_BeginInvoke_mD3F0FB9A52BC3CC8618A2999C5D50BEFB5B355C0 (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C* ___callback0, RuntimeObject* ___object1, const RuntimeMethod* method) 
{
	void *__d_args[1] = {0};
	return (RuntimeObject*)il2cpp_codegen_delegate_begin_invoke((RuntimeDelegate*)__this, __d_args, (RuntimeDelegate*)___callback0, (RuntimeObject*)___object1);
}
// System.Void PlayOnSDK/PlayOnNoArgsDelegate::EndInvoke(System.IAsyncResult)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnNoArgsDelegate_EndInvoke_mDAB7150B190EB23526D753F00B14CF4EDF131CC1 (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, RuntimeObject* ___result0, const RuntimeMethod* method) 
{
	il2cpp_codegen_delegate_end_invoke((Il2CppAsyncResult*) ___result0, 0);
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_Multicast(PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method)
{
	il2cpp_array_size_t length = __this->___delegates_13->max_length;
	Delegate_t** delegatesToInvoke = reinterpret_cast<Delegate_t**>(__this->___delegates_13->GetAddressAtUnchecked(0));
	for (il2cpp_array_size_t i = 0; i < length; i++)
	{
		PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* currentDelegate = reinterpret_cast<PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C*>(delegatesToInvoke[i]);
		typedef void (*FunctionPointerType) (RuntimeObject*, bool, const RuntimeMethod*);
		((FunctionPointerType)currentDelegate->___invoke_impl_1)((Il2CppObject*)currentDelegate->___method_code_6, ___flag0, reinterpret_cast<RuntimeMethod*>(currentDelegate->___method_3));
	}
}
void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_OpenInst(PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___flag0, method);
}
void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_OpenStatic(PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___flag0, method);
}
void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_OpenStaticInvoker(PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method)
{
	InvokerActionInvoker1< bool >::Invoke(__this->___method_ptr_0, method, NULL, ___flag0);
}
void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_ClosedStaticInvoker(PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method)
{
	InvokerActionInvoker2< RuntimeObject*, bool >::Invoke(__this->___method_ptr_0, method, NULL, __this->___m_target_2, ___flag0);
}
IL2CPP_EXTERN_C  void DelegatePInvokeWrapper_PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method)
{
	typedef void (DEFAULT_CALL *PInvokeFunc)(int32_t);
	PInvokeFunc il2cppPInvokeFunc = reinterpret_cast<PInvokeFunc>(il2cpp_codegen_get_reverse_pinvoke_function_ptr(__this));
	// Native function invocation
	il2cppPInvokeFunc(static_cast<int32_t>(___flag0));

}
// System.Void PlayOnSDK/PlayOnStateDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnStateDelegate__ctor_m5665ABD382E868BF19F7CF32A7FA8DB603C5EEEE (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) 
{
	__this->___method_ptr_0 = il2cpp_codegen_get_virtual_call_method_pointer((RuntimeMethod*)___method1);
	__this->___method_3 = ___method1;
	__this->___m_target_2 = ___object0;
	Il2CppCodeGenWriteBarrier((void**)(&__this->___m_target_2), (void*)___object0);
	int parameterCount = il2cpp_codegen_method_parameter_count((RuntimeMethod*)___method1);
	__this->___method_code_6 = (intptr_t)__this;
	if (MethodIsStatic((RuntimeMethod*)___method1))
	{
		bool isOpen = parameterCount == 1;
		if (il2cpp_codegen_call_method_via_invoker((RuntimeMethod*)___method1))
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_OpenStaticInvoker;
			else
				__this->___invoke_impl_1 = (intptr_t)&PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_ClosedStaticInvoker;
		else
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_OpenStatic;
			else
				{
					__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
					__this->___method_code_6 = (intptr_t)__this->___m_target_2;
				}
	}
	else
	{
		if (___object0 == NULL)
			il2cpp_codegen_raise_exception(il2cpp_codegen_get_argument_exception(NULL, "Delegate to an instance method cannot have null 'this'."), NULL);
		__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
		__this->___method_code_6 = (intptr_t)__this->___m_target_2;
	}
	__this->___extra_arg_5 = (intptr_t)&PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_Multicast;
}
// System.Void PlayOnSDK/PlayOnStateDelegate::Invoke(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98 (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___flag0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
// System.IAsyncResult PlayOnSDK/PlayOnStateDelegate::BeginInvoke(System.Boolean,System.AsyncCallback,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* PlayOnStateDelegate_BeginInvoke_m88BBB073470044A36FC08C494B27933A688D30A3 (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C* ___callback1, RuntimeObject* ___object2, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	void *__d_args[2] = {0};
	__d_args[0] = Box(Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var, &___flag0);
	return (RuntimeObject*)il2cpp_codegen_delegate_begin_invoke((RuntimeDelegate*)__this, __d_args, (RuntimeDelegate*)___callback1, (RuntimeObject*)___object2);
}
// System.Void PlayOnSDK/PlayOnStateDelegate::EndInvoke(System.IAsyncResult)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnStateDelegate_EndInvoke_m7F9B4F198B8A3DDFF5755CACDE6183BD7936F50F (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, RuntimeObject* ___result0, const RuntimeMethod* method) 
{
	il2cpp_codegen_delegate_end_invoke((Il2CppAsyncResult*) ___result0, 0);
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_Multicast(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	il2cpp_array_size_t length = __this->___delegates_13->max_length;
	Delegate_t** delegatesToInvoke = reinterpret_cast<Delegate_t**>(__this->___delegates_13->GetAddressAtUnchecked(0));
	for (il2cpp_array_size_t i = 0; i < length; i++)
	{
		PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* currentDelegate = reinterpret_cast<PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766*>(delegatesToInvoke[i]);
		typedef void (*FunctionPointerType) (RuntimeObject*, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203*, const RuntimeMethod*);
		((FunctionPointerType)currentDelegate->___invoke_impl_1)((Il2CppObject*)currentDelegate->___method_code_6, ___data0, reinterpret_cast<RuntimeMethod*>(currentDelegate->___method_3));
	}
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenInst(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	NullCheck(___data0);
	typedef void (*FunctionPointerType) (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203*, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___data0, method);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenStatic(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203*, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___data0, method);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenStaticInvoker(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	InvokerActionInvoker1< ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* >::Invoke(__this->___method_ptr_0, method, NULL, ___data0);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_ClosedStaticInvoker(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	InvokerActionInvoker2< RuntimeObject*, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* >::Invoke(__this->___method_ptr_0, method, NULL, __this->___m_target_2, ___data0);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenVirtual(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	NullCheck(___data0);
	VirtualActionInvoker0::Invoke(il2cpp_codegen_method_get_slot(method), ___data0);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenInterface(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	NullCheck(___data0);
	InterfaceActionInvoker0::Invoke(il2cpp_codegen_method_get_slot(method), il2cpp_codegen_method_get_declaring_type(method), ___data0);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenGenericVirtual(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	NullCheck(___data0);
	GenericVirtualActionInvoker0::Invoke(method, ___data0);
}
void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenGenericInterface(PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method)
{
	NullCheck(___data0);
	GenericInterfaceActionInvoker0::Invoke(method, ___data0);
}
// System.Void PlayOnSDK/PlayOnImpressionDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnImpressionDelegate__ctor_m7FF64FB11B158E8300B19EA3FC8FD2C143C38538 (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) 
{
	__this->___method_ptr_0 = il2cpp_codegen_get_virtual_call_method_pointer((RuntimeMethod*)___method1);
	__this->___method_3 = ___method1;
	__this->___m_target_2 = ___object0;
	Il2CppCodeGenWriteBarrier((void**)(&__this->___m_target_2), (void*)___object0);
	int parameterCount = il2cpp_codegen_method_parameter_count((RuntimeMethod*)___method1);
	__this->___method_code_6 = (intptr_t)__this;
	if (MethodIsStatic((RuntimeMethod*)___method1))
	{
		bool isOpen = parameterCount == 1;
		if (il2cpp_codegen_call_method_via_invoker((RuntimeMethod*)___method1))
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenStaticInvoker;
			else
				__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_ClosedStaticInvoker;
		else
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenStatic;
			else
				{
					__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
					__this->___method_code_6 = (intptr_t)__this->___m_target_2;
				}
	}
	else
	{
		bool isOpen = parameterCount == 0;
		if (isOpen)
		{
			if (__this->___method_is_virtual_12)
			{
				if (il2cpp_codegen_method_is_generic_instance_method((RuntimeMethod*)___method1))
					if (il2cpp_codegen_method_is_interface_method((RuntimeMethod*)___method1))
						__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenGenericInterface;
					else
						__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenGenericVirtual;
				else
					if (il2cpp_codegen_method_is_interface_method((RuntimeMethod*)___method1))
						__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenInterface;
					else
						__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenVirtual;
			}
			else
			{
				__this->___invoke_impl_1 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_OpenInst;
			}
		}
		else
		{
			if (___object0 == NULL)
				il2cpp_codegen_raise_exception(il2cpp_codegen_get_argument_exception(NULL, "Delegate to an instance method cannot have null 'this'."), NULL);
			__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
			__this->___method_code_6 = (intptr_t)__this->___m_target_2;
		}
	}
	__this->___extra_arg_5 = (intptr_t)&PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_Multicast;
}
// System.Void PlayOnSDK/PlayOnImpressionDelegate::Invoke(AdUnit/ImpressionData)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9 (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203*, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___data0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
// System.IAsyncResult PlayOnSDK/PlayOnImpressionDelegate::BeginInvoke(AdUnit/ImpressionData,System.AsyncCallback,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* PlayOnImpressionDelegate_BeginInvoke_m4CB51CB2777AD79A2B494CE9AD786A726D33398F (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C* ___callback1, RuntimeObject* ___object2, const RuntimeMethod* method) 
{
	void *__d_args[2] = {0};
	__d_args[0] = ___data0;
	return (RuntimeObject*)il2cpp_codegen_delegate_begin_invoke((RuntimeDelegate*)__this, __d_args, (RuntimeDelegate*)___callback1, (RuntimeObject*)___object2);
}
// System.Void PlayOnSDK/PlayOnImpressionDelegate::EndInvoke(System.IAsyncResult)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnImpressionDelegate_EndInvoke_m9781774233F0D033B76645324F0AC1BEF97E707F (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, RuntimeObject* ___result0, const RuntimeMethod* method) 
{
	il2cpp_codegen_delegate_end_invoke((Il2CppAsyncResult*) ___result0, 0);
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_Multicast(PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method)
{
	il2cpp_array_size_t length = __this->___delegates_13->max_length;
	Delegate_t** delegatesToInvoke = reinterpret_cast<Delegate_t**>(__this->___delegates_13->GetAddressAtUnchecked(0));
	for (il2cpp_array_size_t i = 0; i < length; i++)
	{
		PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* currentDelegate = reinterpret_cast<PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A*>(delegatesToInvoke[i]);
		typedef void (*FunctionPointerType) (RuntimeObject*, float, const RuntimeMethod*);
		((FunctionPointerType)currentDelegate->___invoke_impl_1)((Il2CppObject*)currentDelegate->___method_code_6, ___amount0, reinterpret_cast<RuntimeMethod*>(currentDelegate->___method_3));
	}
}
void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_OpenInst(PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (float, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___amount0, method);
}
void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_OpenStatic(PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (float, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___amount0, method);
}
void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_OpenStaticInvoker(PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method)
{
	InvokerActionInvoker1< float >::Invoke(__this->___method_ptr_0, method, NULL, ___amount0);
}
void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_ClosedStaticInvoker(PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method)
{
	InvokerActionInvoker2< RuntimeObject*, float >::Invoke(__this->___method_ptr_0, method, NULL, __this->___m_target_2, ___amount0);
}
IL2CPP_EXTERN_C  void DelegatePInvokeWrapper_PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method)
{
	typedef void (DEFAULT_CALL *PInvokeFunc)(float);
	PInvokeFunc il2cppPInvokeFunc = reinterpret_cast<PInvokeFunc>(il2cpp_codegen_get_reverse_pinvoke_function_ptr(__this));
	// Native function invocation
	il2cppPInvokeFunc(___amount0);

}
// System.Void PlayOnSDK/PlayOnFloatDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnFloatDelegate__ctor_m06E842D0DB41AE399787C5F9740AA6A59BC05F44 (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) 
{
	__this->___method_ptr_0 = il2cpp_codegen_get_virtual_call_method_pointer((RuntimeMethod*)___method1);
	__this->___method_3 = ___method1;
	__this->___m_target_2 = ___object0;
	Il2CppCodeGenWriteBarrier((void**)(&__this->___m_target_2), (void*)___object0);
	int parameterCount = il2cpp_codegen_method_parameter_count((RuntimeMethod*)___method1);
	__this->___method_code_6 = (intptr_t)__this;
	if (MethodIsStatic((RuntimeMethod*)___method1))
	{
		bool isOpen = parameterCount == 1;
		if (il2cpp_codegen_call_method_via_invoker((RuntimeMethod*)___method1))
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_OpenStaticInvoker;
			else
				__this->___invoke_impl_1 = (intptr_t)&PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_ClosedStaticInvoker;
		else
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_OpenStatic;
			else
				{
					__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
					__this->___method_code_6 = (intptr_t)__this->___m_target_2;
				}
	}
	else
	{
		if (___object0 == NULL)
			il2cpp_codegen_raise_exception(il2cpp_codegen_get_argument_exception(NULL, "Delegate to an instance method cannot have null 'this'."), NULL);
		__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
		__this->___method_code_6 = (intptr_t)__this->___m_target_2;
	}
	__this->___extra_arg_5 = (intptr_t)&PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_Multicast;
}
// System.Void PlayOnSDK/PlayOnFloatDelegate::Invoke(System.Single)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8 (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, float, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___amount0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
// System.IAsyncResult PlayOnSDK/PlayOnFloatDelegate::BeginInvoke(System.Single,System.AsyncCallback,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* PlayOnFloatDelegate_BeginInvoke_mBA650D6B484656FA9EB5D83D5220ED0EE8435528 (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C* ___callback1, RuntimeObject* ___object2, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	void *__d_args[2] = {0};
	__d_args[0] = Box(Single_t4530F2FF86FCB0DC29F35385CA1BD21BE294761C_il2cpp_TypeInfo_var, &___amount0);
	return (RuntimeObject*)il2cpp_codegen_delegate_begin_invoke((RuntimeDelegate*)__this, __d_args, (RuntimeDelegate*)___callback1, (RuntimeObject*)___object2);
}
// System.Void PlayOnSDK/PlayOnFloatDelegate::EndInvoke(System.IAsyncResult)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnFloatDelegate_EndInvoke_m9637E32AC1A11E8D7FED79E97E9664C591AD57D2 (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, RuntimeObject* ___result0, const RuntimeMethod* method) 
{
	il2cpp_codegen_delegate_end_invoke((Il2CppAsyncResult*) ___result0, 0);
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void PlayOnSDK/PlayOnListener::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnListener__ctor_mFA8101443AFC171D76412683B9F6B4DDFF69F9B0 (PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_U3C_ctorU3Eb__1_0_mF265B9E20EC7AE6F2BE712198F4BFD9EB2950FBD_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral8BE2B12A3679C831C84CE04C45CC415379F94EF8);
		s_Il2CppMethodInitialized = true;
	}
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B2_0 = NULL;
	PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* G_B2_1 = NULL;
	PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* G_B1_0 = NULL;
	PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* G_B1_1 = NULL;
	{
		// public PlayOnSDK.PlayOnNoArgsDelegate OnInitializationFinished = () => { };
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_0 = ((U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var))->___U3CU3E9__1_0_1;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_1 = L_0;
		G_B1_0 = L_1;
		G_B1_1 = __this;
		if (L_1)
		{
			G_B2_0 = L_1;
			G_B2_1 = __this;
			goto IL_0020;
		}
	}
	{
		il2cpp_codegen_runtime_class_init_inline(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var);
		U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81* L_2 = ((U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var))->___U3CU3E9_0;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_3 = (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21*)il2cpp_codegen_object_new(PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21_il2cpp_TypeInfo_var);
		NullCheck(L_3);
		PlayOnNoArgsDelegate__ctor_m7D6F1D675F42A73AA7C6DEAD9A0BB2109CDF983C(L_3, L_2, (intptr_t)((void*)U3CU3Ec_U3C_ctorU3Eb__1_0_mF265B9E20EC7AE6F2BE712198F4BFD9EB2950FBD_RuntimeMethod_var), NULL);
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_4 = L_3;
		((U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var))->___U3CU3E9__1_0_1 = L_4;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var))->___U3CU3E9__1_0_1), (void*)L_4);
		G_B2_0 = L_4;
		G_B2_1 = G_B1_1;
	}

IL_0020:
	{
		NullCheck(G_B2_1);
		G_B2_1->___OnInitializationFinished_4 = G_B2_0;
		Il2CppCodeGenWriteBarrier((void**)(&G_B2_1->___OnInitializationFinished_4), (void*)G_B2_0);
		// public PlayOnListener() : base ("com.playon.bridge.common.SdkInitializationListener") { }
		il2cpp_codegen_runtime_class_init_inline(AndroidJavaProxy_tE5521F9761F7B95444B9C39FB15FDFC23F80A78D_il2cpp_TypeInfo_var);
		AndroidJavaProxy__ctor_m2832886A0E1BBF6702653A7C6A4609F11FB712C7(__this, _stringLiteral8BE2B12A3679C831C84CE04C45CC415379F94EF8, NULL);
		// public PlayOnListener() : base ("com.playon.bridge.common.SdkInitializationListener") { }
		return;
	}
}
// System.Void PlayOnSDK/PlayOnListener::onInitializationFinished()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnListener_onInitializationFinished_mC7AEB329D63E1ED6ED456C7761DE39FA48DF2DF1 (PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnListener_U3ConInitializationFinishedU3Eb__2_0_m659FA8673C5CC63D7A44826F55F55C75A0A839A7_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnInitializationFinished() ) ;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0;
		L_0 = UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E(NULL);
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_1 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_1, __this, (intptr_t)((void*)PlayOnListener_U3ConInitializationFinishedU3Eb__2_0_m659FA8673C5CC63D7A44826F55F55C75A0A839A7_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343(L_0, L_1, NULL);
		// }
		return;
	}
}
// System.Void PlayOnSDK/PlayOnListener::<onInitializationFinished>b__2_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void PlayOnListener_U3ConInitializationFinishedU3Eb__2_0_m659FA8673C5CC63D7A44826F55F55C75A0A839A7 (PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* __this, const RuntimeMethod* method) 
{
	{
		// UnityMainThreadDispatcher.Instance().Enqueue( () => OnInitializationFinished() ) ;
		PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* L_0 = __this->___OnInitializationFinished_4;
		NullCheck(L_0);
		PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_inline(L_0, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void PlayOnSDK/PlayOnListener/<>c::.cctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__cctor_m50D4D5D5FB92252F0F511F17D1EB35B3CFA8B79C (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81* L_0 = (U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81*)il2cpp_codegen_object_new(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__ctor_m4422C051C2C1DEA6C11033B0C8CEC1265A4132A2(L_0, NULL);
		((U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var))->___U3CU3E9_0 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81_il2cpp_TypeInfo_var))->___U3CU3E9_0), (void*)L_0);
		return;
	}
}
// System.Void PlayOnSDK/PlayOnListener/<>c::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__ctor_m4422C051C2C1DEA6C11033B0C8CEC1265A4132A2 (U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void PlayOnSDK/PlayOnListener/<>c::<.ctor>b__1_0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_ctorU3Eb__1_0_mF265B9E20EC7AE6F2BE712198F4BFD9EB2950FBD (U3CU3Ec_t1EFECD56EA912D93FA4F043B9E472436B97DEA81* __this, const RuntimeMethod* method) 
{
	{
		// public PlayOnSDK.PlayOnNoArgsDelegate OnInitializationFinished = () => { };
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
void OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_Multicast(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method)
{
	il2cpp_array_size_t length = __this->___delegates_13->max_length;
	Delegate_t** delegatesToInvoke = reinterpret_cast<Delegate_t**>(__this->___delegates_13->GetAddressAtUnchecked(0));
	for (il2cpp_array_size_t i = 0; i < length; i++)
	{
		OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* currentDelegate = reinterpret_cast<OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480*>(delegatesToInvoke[i]);
		typedef void (*FunctionPointerType) (RuntimeObject*, bool, const RuntimeMethod*);
		((FunctionPointerType)currentDelegate->___invoke_impl_1)((Il2CppObject*)currentDelegate->___method_code_6, ___isPaused0, reinterpret_cast<RuntimeMethod*>(currentDelegate->___method_3));
	}
}
void OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_OpenInst(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___isPaused0, method);
}
void OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_OpenStatic(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method)
{
	typedef void (*FunctionPointerType) (bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___method_ptr_0)(___isPaused0, method);
}
void OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_OpenStaticInvoker(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method)
{
	InvokerActionInvoker1< bool >::Invoke(__this->___method_ptr_0, method, NULL, ___isPaused0);
}
void OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_ClosedStaticInvoker(OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method)
{
	InvokerActionInvoker2< RuntimeObject*, bool >::Invoke(__this->___method_ptr_0, method, NULL, __this->___m_target_2, ___isPaused0);
}
IL2CPP_EXTERN_C  void DelegatePInvokeWrapper_OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480 (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method)
{
	typedef void (DEFAULT_CALL *PInvokeFunc)(int32_t);
	PInvokeFunc il2cppPInvokeFunc = reinterpret_cast<PInvokeFunc>(il2cpp_codegen_get_reverse_pinvoke_function_ptr(__this));
	// Native function invocation
	il2cppPInvokeFunc(static_cast<int32_t>(___isPaused0));

}
// System.Void PlayOnSDK/OnApplicationPause::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void OnApplicationPause__ctor_m3BCCC6C7848EC6C8450E7F80E4B221C09A0D7F3A (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) 
{
	__this->___method_ptr_0 = il2cpp_codegen_get_virtual_call_method_pointer((RuntimeMethod*)___method1);
	__this->___method_3 = ___method1;
	__this->___m_target_2 = ___object0;
	Il2CppCodeGenWriteBarrier((void**)(&__this->___m_target_2), (void*)___object0);
	int parameterCount = il2cpp_codegen_method_parameter_count((RuntimeMethod*)___method1);
	__this->___method_code_6 = (intptr_t)__this;
	if (MethodIsStatic((RuntimeMethod*)___method1))
	{
		bool isOpen = parameterCount == 1;
		if (il2cpp_codegen_call_method_via_invoker((RuntimeMethod*)___method1))
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_OpenStaticInvoker;
			else
				__this->___invoke_impl_1 = (intptr_t)&OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_ClosedStaticInvoker;
		else
			if (isOpen)
				__this->___invoke_impl_1 = (intptr_t)&OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_OpenStatic;
			else
				{
					__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
					__this->___method_code_6 = (intptr_t)__this->___m_target_2;
				}
	}
	else
	{
		if (___object0 == NULL)
			il2cpp_codegen_raise_exception(il2cpp_codegen_get_argument_exception(NULL, "Delegate to an instance method cannot have null 'this'."), NULL);
		__this->___invoke_impl_1 = (intptr_t)__this->___method_ptr_0;
		__this->___method_code_6 = (intptr_t)__this->___m_target_2;
	}
	__this->___extra_arg_5 = (intptr_t)&OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481_Multicast;
}
// System.Void PlayOnSDK/OnApplicationPause::Invoke(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void OnApplicationPause_Invoke_mABB4F390F06C490FF611B373AA322CD5DC414481 (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___isPaused0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
// System.IAsyncResult PlayOnSDK/OnApplicationPause::BeginInvoke(System.Boolean,System.AsyncCallback,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* OnApplicationPause_BeginInvoke_m1240E52823A38298950379F0F1D8174A73512AC7 (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, bool ___isPaused0, AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C* ___callback1, RuntimeObject* ___object2, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	void *__d_args[2] = {0};
	__d_args[0] = Box(Boolean_t09A6377A54BE2F9E6985A8149F19234FD7DDFE22_il2cpp_TypeInfo_var, &___isPaused0);
	return (RuntimeObject*)il2cpp_codegen_delegate_begin_invoke((RuntimeDelegate*)__this, __d_args, (RuntimeDelegate*)___callback1, (RuntimeObject*)___object2);
}
// System.Void PlayOnSDK/OnApplicationPause::EndInvoke(System.IAsyncResult)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void OnApplicationPause_EndInvoke_mD18DAEF292B3B9DA1B2BEC91537003B5A51469C2 (OnApplicationPause_t1B55A223FFBEC1B34D773F41FD9C4B03282D9480* __this, RuntimeObject* ___result0, const RuntimeMethod* method) 
{
	il2cpp_codegen_delegate_end_invoke((Il2CppAsyncResult*) ___result0, 0);
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void PlayOnSDK/<>c__DisplayClass21_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass21_0__ctor_m11A2AB840F1A01A265F57BF4EB35B8A6D17A8F8C (U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void PlayOnSDK/<>c__DisplayClass21_0::<Initialize>b__0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass21_0_U3CInitializeU3Eb__0_mE057820476162DB61A892BDD4FC378CC08C7A426 (U3CU3Ec__DisplayClass21_0_t1A30A7EE00765085D3213226C17BB0A8434C52AB* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral6C86FB2C4E7E0A7E71F2A7F2A1AEA7F33761AE60);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral8B2A905A0C846C36A2CD4B188A3C16239D5E0C17);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralD289A15F06D391673864A3B5CEDBFF42865743C1);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralF755DC6392C74370D801A857B9CE42E8AB1CC4BA);
		s_Il2CppMethodInitialized = true;
	}
	{
		// getBridge ().Call("setEngineInformation", "unity_" + unityVersion, SDK_VERSION);
		il2cpp_codegen_runtime_class_init_inline(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_0;
		L_0 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_1 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)2);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_2 = L_1;
		String_t* L_3 = __this->___unityVersion_0;
		String_t* L_4;
		L_4 = String_Concat_mAF2CE02CC0CB7460753D0A1A91CCF2B1E9804C5D(_stringLiteral8B2A905A0C846C36A2CD4B188A3C16239D5E0C17, L_3, NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_4);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_4);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_5 = L_2;
		String_t* L_6 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___SDK_VERSION_5;
		NullCheck(L_5);
		ArrayElementTypeCheck (L_5, L_6);
		(L_5)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_6);
		NullCheck(L_0);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_0, _stringLiteralF755DC6392C74370D801A857B9CE42E8AB1CC4BA, L_5, NULL);
		// getBridge ().Call("setOnInitializationListener", playOnListener);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_7;
		L_7 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_8 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)1);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_9 = L_8;
		PlayOnListener_t4E7522241850E5B8D9889C5190D6FAB9C0BB5035* L_10 = ((PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_StaticFields*)il2cpp_codegen_static_fields_for(PlayOnSDK_t20622308F046F89A145D792B783C8F8DAAEF2F23_il2cpp_TypeInfo_var))->___playOnListener_6;
		NullCheck(L_9);
		ArrayElementTypeCheck (L_9, L_10);
		(L_9)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_10);
		NullCheck(L_7);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_7, _stringLiteral6C86FB2C4E7E0A7E71F2A7F2A1AEA7F33761AE60, L_9, NULL);
		// getBridge ().Call("initialize", activity, apiKey);
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_11;
		L_11 = PlayOnSDK_getBridge_mD2435F14840CAAB4A15E775C41FFC6B4FEEAEBA9(NULL);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_12 = (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)SZArrayNew(ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918_il2cpp_TypeInfo_var, (uint32_t)2);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_13 = L_12;
		AndroidJavaObject_t8FFB930F335C1178405B82AC2BF512BB1EEF9EB0* L_14 = __this->___activity_1;
		NullCheck(L_13);
		ArrayElementTypeCheck (L_13, L_14);
		(L_13)->SetAt(static_cast<il2cpp_array_size_t>(0), (RuntimeObject*)L_14);
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_15 = L_13;
		String_t* L_16 = __this->___apiKey_2;
		NullCheck(L_15);
		ArrayElementTypeCheck (L_15, L_16);
		(L_15)->SetAt(static_cast<il2cpp_array_size_t>(1), (RuntimeObject*)L_16);
		NullCheck(L_11);
		AndroidJavaObject_Call_mDEF7846E2AB1C5379069BB21049ED55A9D837B1C(L_11, _stringLiteralD289A15F06D391673864A3B5CEDBFF42865743C1, L_15, NULL);
		// }));
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void PlayOnSDK/<>c::.cctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__cctor_mCA336C626815DB71F2E57280DD38C1A082388720 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450* L_0 = (U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450*)il2cpp_codegen_object_new(U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__ctor_m5D70F9BE9CF058BC3D28072A72DE7EC3C3464668(L_0, NULL);
		((U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var))->___U3CU3E9_0 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_StaticFields*)il2cpp_codegen_static_fields_for(U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450_il2cpp_TypeInfo_var))->___U3CU3E9_0), (void*)L_0);
		return;
	}
}
// System.Void PlayOnSDK/<>c::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__ctor_m5D70F9BE9CF058BC3D28072A72DE7EC3C3464668 (U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void PlayOnSDK/<>c::<.cctor>b__40_0(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec_U3C_cctorU3Eb__40_0_m20D060CE3401D8047562622B990F4A4C225BA502 (U3CU3Ec_t80E182A252F78EE48C743E2D289CB0AB5D998450* __this, bool ___isPaused0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral92A526CB3ED65668C8E49FA70853DC0B9EAC99C9);
		s_Il2CppMethodInitialized = true;
	}
	{
		// public static OnApplicationPause onApplicationPause = (isPaused) => { Debug.Log("PlayOnPaused " + isPaused); };
		String_t* L_0;
		L_0 = Boolean_ToString_m6646C8026B1DF381A1EE8CD13549175E9703CC63((&___isPaused0), NULL);
		String_t* L_1;
		L_1 = String_Concat_mAF2CE02CC0CB7460753D0A1A91CCF2B1E9804C5D(_stringLiteral92A526CB3ED65668C8E49FA70853DC0B9EAC99C9, L_0, NULL);
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219(L_1, NULL);
		// public static OnApplicationPause onApplicationPause = (isPaused) => { Debug.Log("PlayOnPaused " + isPaused); };
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void UnityMainThreadDispatcher::Update()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_Update_mC8B55E58731A57463CED0FFE4DE6CC49C588CFC3 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Queue_1_Dequeue_m67206C56B5CF9749EFAEF48FAA0D82E2AD8D960E_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Queue_1_get_Count_mB986A63C8D68BD8606522BF24176D36503CFD9C3_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* V_0 = NULL;
	bool V_1 = false;
	{
		// lock(_executionQueue) {
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_0 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4;
		V_0 = L_0;
		V_1 = (bool)0;
	}
	{
		auto __finallyBlock = il2cpp::utils::Finally([&]
		{

FINALLY_0030:
			{// begin finally (depth: 1)
				{
					bool L_1 = V_1;
					if (!L_1)
					{
						goto IL_0039;
					}
				}
				{
					Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_2 = V_0;
					Monitor_Exit_m25A154960F91391E10E4CDA245ECDF4BA94D56A9(L_2, NULL);
				}

IL_0039:
				{
					return;
				}
			}// end finally (depth: 1)
		});
		try
		{// begin try (depth: 1)
			{
				Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_3 = V_0;
				Monitor_Enter_m00506757392936AA62DBE2C5FFBEE69EE920C4D4(L_3, (&V_1), NULL);
				goto IL_0021_1;
			}

IL_0012_1:
			{
				// _executionQueue.Dequeue().Invoke();
				il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
				Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_4 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4;
				NullCheck(L_4);
				Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_5;
				L_5 = Queue_1_Dequeue_m67206C56B5CF9749EFAEF48FAA0D82E2AD8D960E(L_4, Queue_1_Dequeue_m67206C56B5CF9749EFAEF48FAA0D82E2AD8D960E_RuntimeMethod_var);
				NullCheck(L_5);
				Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline(L_5, NULL);
			}

IL_0021_1:
			{
				// while (_executionQueue.Count > 0) {
				il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
				Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_6 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4;
				NullCheck(L_6);
				int32_t L_7;
				L_7 = Queue_1_get_Count_mB986A63C8D68BD8606522BF24176D36503CFD9C3_inline(L_6, Queue_1_get_Count_mB986A63C8D68BD8606522BF24176D36503CFD9C3_RuntimeMethod_var);
				if ((((int32_t)L_7) > ((int32_t)0)))
				{
					goto IL_0012_1;
				}
			}
			{
				// }
				goto IL_003a;
			}
		}// end try (depth: 1)
		catch(Il2CppExceptionWrapper& e)
		{
			__finallyBlock.StoreException(e.ex);
		}
	}

IL_003a:
	{
		// }
		return;
	}
}
// System.Void UnityMainThreadDispatcher::Enqueue(System.Collections.IEnumerator)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_Enqueue_mFF91487E5612BD2984617DB2BD6FB3CEAB4E8FC0 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, RuntimeObject* ___action0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Queue_1_Enqueue_m9B59C0455EACB768D8D74CA1F57E003C91F6E3D4_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass2_0_U3CEnqueueU3Eb__0_m206322FA992FEB42EBA84BCD54261B66CF9CC5E7_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* V_0 = NULL;
	Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* V_1 = NULL;
	bool V_2 = false;
	{
		U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* L_0 = (U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81*)il2cpp_codegen_object_new(U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__DisplayClass2_0__ctor_mDAE03EDB9DB5B7A5BE8E8588479AF0B2FF10E651(L_0, NULL);
		V_0 = L_0;
		U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* L_1 = V_0;
		NullCheck(L_1);
		L_1->___U3CU3E4__this_0 = __this;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___U3CU3E4__this_0), (void*)__this);
		U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* L_2 = V_0;
		RuntimeObject* L_3 = ___action0;
		NullCheck(L_2);
		L_2->___action_1 = L_3;
		Il2CppCodeGenWriteBarrier((void**)(&L_2->___action_1), (void*)L_3);
		// lock (_executionQueue) {
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_4 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4;
		V_1 = L_4;
		V_2 = (bool)0;
	}
	{
		auto __finallyBlock = il2cpp::utils::Finally([&]
		{

FINALLY_003c:
			{// begin finally (depth: 1)
				{
					bool L_5 = V_2;
					if (!L_5)
					{
						goto IL_0045;
					}
				}
				{
					Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_6 = V_1;
					Monitor_Exit_m25A154960F91391E10E4CDA245ECDF4BA94D56A9(L_6, NULL);
				}

IL_0045:
				{
					return;
				}
			}// end finally (depth: 1)
		});
		try
		{// begin try (depth: 1)
			Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_7 = V_1;
			Monitor_Enter_m00506757392936AA62DBE2C5FFBEE69EE920C4D4(L_7, (&V_2), NULL);
			// _executionQueue.Enqueue (() => {
			//     StartCoroutine (action);
			// });
			il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
			Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_8 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4;
			U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* L_9 = V_0;
			Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_10 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
			NullCheck(L_10);
			Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_10, L_9, (intptr_t)((void*)U3CU3Ec__DisplayClass2_0_U3CEnqueueU3Eb__0_m206322FA992FEB42EBA84BCD54261B66CF9CC5E7_RuntimeMethod_var), NULL);
			NullCheck(L_8);
			Queue_1_Enqueue_m9B59C0455EACB768D8D74CA1F57E003C91F6E3D4(L_8, L_10, Queue_1_Enqueue_m9B59C0455EACB768D8D74CA1F57E003C91F6E3D4_RuntimeMethod_var);
			// }
			goto IL_0046;
		}// end try (depth: 1)
		catch(Il2CppExceptionWrapper& e)
		{
			__finallyBlock.StoreException(e.ex);
		}
	}

IL_0046:
	{
		// }
		return;
	}
}
// System.Void UnityMainThreadDispatcher::Enqueue(System.Action)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_Enqueue_mB5618E1EF734DE45BBC0D756FE03F2F1FFA76343 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___action0, const RuntimeMethod* method) 
{
	{
		// Enqueue(ActionWrapper(action));
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_0 = ___action0;
		RuntimeObject* L_1;
		L_1 = UnityMainThreadDispatcher_ActionWrapper_mE752BC99C81AD08855BF4CCA4BA4E60953553A36(__this, L_0, NULL);
		UnityMainThreadDispatcher_Enqueue_mFF91487E5612BD2984617DB2BD6FB3CEAB4E8FC0(__this, L_1, NULL);
		// }
		return;
	}
}
// System.Threading.Tasks.Task UnityMainThreadDispatcher::EnqueueAsync(System.Action)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* UnityMainThreadDispatcher_EnqueueAsync_m793B4DEE90B37E377A7138B436ED86CFCAC4801D (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___action0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass4_0_U3CEnqueueAsyncU3Eg__WrappedActionU7C0_m970AF82DC9E7DE96469BE08A2580BEE28304FA90_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* V_0 = NULL;
	{
		U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* L_0 = (U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017*)il2cpp_codegen_object_new(U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CU3Ec__DisplayClass4_0__ctor_m83E946533C8CC7344767D2CC2BEE5ABE1D490414(L_0, NULL);
		V_0 = L_0;
		U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* L_1 = V_0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_2 = ___action0;
		NullCheck(L_1);
		L_1->___action_0 = L_2;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___action_0), (void*)L_2);
		// var tcs = new TaskCompletionSource<bool>();
		U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* L_3 = V_0;
		TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* L_4 = (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14*)il2cpp_codegen_object_new(TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14_il2cpp_TypeInfo_var);
		NullCheck(L_4);
		TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646(L_4, TaskCompletionSource_1__ctor_mBAB8D6EFEAD1AA6482D19D7CE639528BE66AF646_RuntimeMethod_var);
		NullCheck(L_3);
		L_3->___tcs_1 = L_4;
		Il2CppCodeGenWriteBarrier((void**)(&L_3->___tcs_1), (void*)L_4);
		// Enqueue(ActionWrapper(WrappedAction));
		U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* L_5 = V_0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_6 = (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*)il2cpp_codegen_object_new(Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07_il2cpp_TypeInfo_var);
		NullCheck(L_6);
		Action__ctor_mBDC7B0B4A3F583B64C2896F01BDED360772F67DC(L_6, L_5, (intptr_t)((void*)U3CU3Ec__DisplayClass4_0_U3CEnqueueAsyncU3Eg__WrappedActionU7C0_m970AF82DC9E7DE96469BE08A2580BEE28304FA90_RuntimeMethod_var), NULL);
		RuntimeObject* L_7;
		L_7 = UnityMainThreadDispatcher_ActionWrapper_mE752BC99C81AD08855BF4CCA4BA4E60953553A36(__this, L_6, NULL);
		UnityMainThreadDispatcher_Enqueue_mFF91487E5612BD2984617DB2BD6FB3CEAB4E8FC0(__this, L_7, NULL);
		// return tcs.Task;
		U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* L_8 = V_0;
		NullCheck(L_8);
		TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* L_9 = L_8->___tcs_1;
		NullCheck(L_9);
		Task_1_t824317F4B958F7512E8F7300511752937A6C6043* L_10;
		L_10 = TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_inline(L_9, TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_RuntimeMethod_var);
		return L_10;
	}
}
// System.Collections.IEnumerator UnityMainThreadDispatcher::ActionWrapper(System.Action)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* UnityMainThreadDispatcher_ActionWrapper_mE752BC99C81AD08855BF4CCA4BA4E60953553A36 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___a0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* L_0 = (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B*)il2cpp_codegen_object_new(U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		U3CActionWrapperU3Ed__5__ctor_m8429140D8EDB4F99CD0D66026BBCFCBEC9A55B35(L_0, 0, NULL);
		U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* L_1 = L_0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_2 = ___a0;
		NullCheck(L_1);
		L_1->___a_2 = L_2;
		Il2CppCodeGenWriteBarrier((void**)(&L_1->___a_2), (void*)L_2);
		return L_1;
	}
}
// System.Boolean UnityMainThreadDispatcher::Exists()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool UnityMainThreadDispatcher_Exists_m16D715157247EA9E01607B4B6E10A71CEDF723E9 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// return _instance != null;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5;
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		return L_1;
	}
}
// UnityMainThreadDispatcher UnityMainThreadDispatcher::Instance()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* UnityMainThreadDispatcher_Instance_mE1945D7F1E04CDCAB3C6D15450B171734C54553E (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&GameObject_AddComponent_TisUnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_mCD4587412D54834EAEEA8EB52CCF5D540B4108BF_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (!Exists ()) {
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		bool L_0;
		L_0 = UnityMainThreadDispatcher_Exists_m16D715157247EA9E01607B4B6E10A71CEDF723E9(NULL);
		if (L_0)
		{
			goto IL_0012;
		}
	}
	{
		// GameObject go = new GameObject();
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_1 = (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F*)il2cpp_codegen_object_new(GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		GameObject__ctor_m7D0340DE160786E6EFA8DABD39EC3B694DA30AAD(L_1, NULL);
		// return go.AddComponent<UnityMainThreadDispatcher>();
		NullCheck(L_1);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_2;
		L_2 = GameObject_AddComponent_TisUnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_mCD4587412D54834EAEEA8EB52CCF5D540B4108BF(L_1, GameObject_AddComponent_TisUnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_mCD4587412D54834EAEEA8EB52CCF5D540B4108BF_RuntimeMethod_var);
		return L_2;
	}

IL_0012:
	{
		// return _instance;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_3 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5;
		return L_3;
	}
}
// System.Void UnityMainThreadDispatcher::Awake()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_Awake_mC95945DBC735B8E2CF2936F983FE7658F471EAB4 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (_instance == null) {
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0 = ((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5;
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Equality_mD3DB0D72CE0250C84033DC2A90AEF9D59896E536(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_1)
		{
			goto IL_001e;
		}
	}
	{
		// _instance = this;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5 = __this;
		Il2CppCodeGenWriteBarrier((void**)(&((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5), (void*)__this);
		// DontDestroyOnLoad(this.gameObject);
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_2;
		L_2 = Component_get_gameObject_m57AEFBB14DB39EC476F740BA000E170355DE691B(__this, NULL);
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		Object_DontDestroyOnLoad_m303AA1C4DC810349F285B4809E426CBBA8F834F9(L_2, NULL);
	}

IL_001e:
	{
		// }
		return;
	}
}
// System.Void UnityMainThreadDispatcher::OnDestroy()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher_OnDestroy_m8BE00D133F3EE6198B31548D3D2880A120C06C50 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// _instance = null;
		il2cpp_codegen_runtime_class_init_inline(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5 = (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25*)NULL;
		Il2CppCodeGenWriteBarrier((void**)(&((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5), (void*)(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25*)NULL);
		// }
		return;
	}
}
// System.Void UnityMainThreadDispatcher::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher__ctor_m4D90CB0AD26FAB5A472592AF98C20FE6CC832EE3 (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* __this, const RuntimeMethod* method) 
{
	{
		MonoBehaviour__ctor_m592DB0105CA0BC97AA1C5F4AD27B12D68A3B7C1E(__this, NULL);
		return;
	}
}
// System.Void UnityMainThreadDispatcher::.cctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void UnityMainThreadDispatcher__cctor_mD2841805B871B0265B80BE9EFD9FF0840D54D9C0 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Queue_1__ctor_mCB1D86FC102A8C3B82A02702CAEDAE815FE04272_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// private static readonly Queue<Action> _executionQueue = new Queue<Action>();
		Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA* L_0 = (Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA*)il2cpp_codegen_object_new(Queue_1_tDCDB1CEF747EF8D38C6708645EC5FD3799C168BA_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		Queue_1__ctor_mCB1D86FC102A8C3B82A02702CAEDAE815FE04272(L_0, Queue_1__ctor_mCB1D86FC102A8C3B82A02702CAEDAE815FE04272_RuntimeMethod_var);
		((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____executionQueue_4), (void*)L_0);
		// private static UnityMainThreadDispatcher _instance = null;
		((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5 = (UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25*)NULL;
		Il2CppCodeGenWriteBarrier((void**)(&((UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_StaticFields*)il2cpp_codegen_static_fields_for(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25_il2cpp_TypeInfo_var))->____instance_5), (void*)(UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25*)NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void UnityMainThreadDispatcher/<>c__DisplayClass2_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass2_0__ctor_mDAE03EDB9DB5B7A5BE8E8588479AF0B2FF10E651 (U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void UnityMainThreadDispatcher/<>c__DisplayClass2_0::<Enqueue>b__0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass2_0_U3CEnqueueU3Eb__0_m206322FA992FEB42EBA84BCD54261B66CF9CC5E7 (U3CU3Ec__DisplayClass2_0_t0A22CA5D85575AA77472DA3D1AE43F3FDC0A9F81* __this, const RuntimeMethod* method) 
{
	{
		// StartCoroutine (action);
		UnityMainThreadDispatcher_t696C2570502BC59C4816A88320FFC0ADFACD2D25* L_0 = __this->___U3CU3E4__this_0;
		RuntimeObject* L_1 = __this->___action_1;
		NullCheck(L_0);
		Coroutine_t85EA685566A254C23F3FD77AB5BDFFFF8799596B* L_2;
		L_2 = MonoBehaviour_StartCoroutine_m4CAFF732AA28CD3BDC5363B44A863575530EC812(L_0, L_1, NULL);
		// });
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void UnityMainThreadDispatcher/<>c__DisplayClass4_0::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass4_0__ctor_m83E946533C8CC7344767D2CC2BEE5ABE1D490414 (U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* __this, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void UnityMainThreadDispatcher/<>c__DisplayClass4_0::<EnqueueAsync>g__WrappedAction|0()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CU3Ec__DisplayClass4_0_U3CEnqueueAsyncU3Eg__WrappedActionU7C0_m970AF82DC9E7DE96469BE08A2580BEE28304FA90 (U3CU3Ec__DisplayClass4_0_t490CF526CEEBF9EF13F3D6EAA373C0FD1D9E5017* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1_RuntimeMethod_var);
		s_Il2CppMethodInitialized = true;
	}
	Exception_t* V_0 = NULL;
	il2cpp::utils::ExceptionSupportStack<RuntimeObject*, 1> __active_exceptions;
	try
	{// begin try (depth: 1)
		// action();
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_0 = __this->___action_0;
		NullCheck(L_0);
		Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline(L_0, NULL);
		// tcs.TrySetResult(true);
		TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* L_1 = __this->___tcs_1;
		NullCheck(L_1);
		bool L_2;
		L_2 = TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1(L_1, (bool)1, TaskCompletionSource_1_TrySetResult_m3B4D8D267C1B26945C3C417057DEB50C56B689B1_RuntimeMethod_var);
		// } catch (Exception ex)
		goto IL_002a;
	}// end try (depth: 1)
	catch(Il2CppExceptionWrapper& e)
	{
		if(il2cpp_codegen_class_is_assignable_from (((RuntimeClass*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&Exception_t_il2cpp_TypeInfo_var)), il2cpp_codegen_object_class(e.ex)))
		{
			IL2CPP_PUSH_ACTIVE_EXCEPTION(e.ex);
			goto CATCH_001a;
		}
		throw e;
	}

CATCH_001a:
	{// begin catch(System.Exception)
		// } catch (Exception ex)
		V_0 = ((Exception_t*)IL2CPP_GET_ACTIVE_EXCEPTION(Exception_t*));
		// tcs.TrySetException(ex);
		TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* L_3 = __this->___tcs_1;
		Exception_t* L_4 = V_0;
		NullCheck(L_3);
		bool L_5;
		L_5 = TaskCompletionSource_1_TrySetException_m439CB88F99980A2A50B1588B7ACD795274C8D7EE(L_3, L_4, ((RuntimeMethod*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&TaskCompletionSource_1_TrySetException_m439CB88F99980A2A50B1588B7ACD795274C8D7EE_RuntimeMethod_var)));
		// }
		IL2CPP_POP_ACTIVE_EXCEPTION();
		goto IL_002a;
	}// end catch (depth: 1)

IL_002a:
	{
		// }
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif
// System.Void UnityMainThreadDispatcher/<ActionWrapper>d__5::.ctor(System.Int32)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CActionWrapperU3Ed__5__ctor_m8429140D8EDB4F99CD0D66026BBCFCBEC9A55B35 (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, int32_t ___U3CU3E1__state0, const RuntimeMethod* method) 
{
	{
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		int32_t L_0 = ___U3CU3E1__state0;
		__this->___U3CU3E1__state_0 = L_0;
		return;
	}
}
// System.Void UnityMainThreadDispatcher/<ActionWrapper>d__5::System.IDisposable.Dispose()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CActionWrapperU3Ed__5_System_IDisposable_Dispose_mCA75A1FC9F08283F3529897216207713655E3345 (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, const RuntimeMethod* method) 
{
	{
		return;
	}
}
// System.Boolean UnityMainThreadDispatcher/<ActionWrapper>d__5::MoveNext()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool U3CActionWrapperU3Ed__5_MoveNext_mC79EE8C8B123CE02B83D46CAEB1958A5ADA95597 (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, const RuntimeMethod* method) 
{
	int32_t V_0 = 0;
	{
		int32_t L_0 = __this->___U3CU3E1__state_0;
		V_0 = L_0;
		int32_t L_1 = V_0;
		if (!L_1)
		{
			goto IL_0010;
		}
	}
	{
		int32_t L_2 = V_0;
		if ((((int32_t)L_2) == ((int32_t)1)))
		{
			goto IL_0032;
		}
	}
	{
		return (bool)0;
	}

IL_0010:
	{
		__this->___U3CU3E1__state_0 = (-1);
		// a();
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_3 = __this->___a_2;
		NullCheck(L_3);
		Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline(L_3, NULL);
		// yield return null;
		__this->___U3CU3E2__current_1 = NULL;
		Il2CppCodeGenWriteBarrier((void**)(&__this->___U3CU3E2__current_1), (void*)NULL);
		__this->___U3CU3E1__state_0 = 1;
		return (bool)1;
	}

IL_0032:
	{
		__this->___U3CU3E1__state_0 = (-1);
		// }
		return (bool)0;
	}
}
// System.Object UnityMainThreadDispatcher/<ActionWrapper>d__5::System.Collections.Generic.IEnumerator<System.Object>.get_Current()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* U3CActionWrapperU3Ed__5_System_Collections_Generic_IEnumeratorU3CSystem_ObjectU3E_get_Current_m18584490B348A5CBA770793634CE8BCF42D1856E (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, const RuntimeMethod* method) 
{
	{
		RuntimeObject* L_0 = __this->___U3CU3E2__current_1;
		return L_0;
	}
}
// System.Void UnityMainThreadDispatcher/<ActionWrapper>d__5::System.Collections.IEnumerator.Reset()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void U3CActionWrapperU3Ed__5_System_Collections_IEnumerator_Reset_m058A1B20077DAFB4A9A79F103A9F57E9F9E66866 (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, const RuntimeMethod* method) 
{
	{
		NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A* L_0 = (NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A*)il2cpp_codegen_object_new(((RuntimeClass*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&NotSupportedException_t1429765983D409BD2986508963C98D214E4EBF4A_il2cpp_TypeInfo_var)));
		NullCheck(L_0);
		NotSupportedException__ctor_m1398D0CDE19B36AA3DE9392879738C1EA2439CDF(L_0, NULL);
		IL2CPP_RAISE_MANAGED_EXCEPTION(L_0, ((RuntimeMethod*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&U3CActionWrapperU3Ed__5_System_Collections_IEnumerator_Reset_m058A1B20077DAFB4A9A79F103A9F57E9F9E66866_RuntimeMethod_var)));
	}
}
// System.Object UnityMainThreadDispatcher/<ActionWrapper>d__5::System.Collections.IEnumerator.get_Current()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* U3CActionWrapperU3Ed__5_System_Collections_IEnumerator_get_Current_m03497395E5E39642440B16AA9E60ADDD90E3BE9A (U3CActionWrapperU3Ed__5_t12C5586988877A70DFC0AF5C5C04F73B045CC19B* __this, const RuntimeMethod* method) 
{
	{
		RuntimeObject* L_0 = __this->___U3CU3E2__current_1;
		return L_0;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnNoArgsDelegate_Invoke_m1EE36DD1DE4396CC6618D27850E4E377C9139A47_inline (PlayOnNoArgsDelegate_t4E7F8BC9DDB324E604FE51371DCD06B83AA7DF21* __this, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnStateDelegate_Invoke_mAE321C36636DC2A92FBF8B55B4961DF203997D98_inline (PlayOnStateDelegate_t287B0D81DD99C521A8B89531311F6EBBEF83816C* __this, bool ___flag0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, bool, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___flag0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnFloatDelegate_Invoke_mBD546F53863D01A5CB9247923A2BB86A7A1BB7E8_inline (PlayOnFloatDelegate_t15369E803C7C169FC99C1B3882165D97337E513A* __this, float ___amount0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, float, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___amount0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void PlayOnImpressionDelegate_Invoke_mA83F9425BCF5AA438DE4F1EB663CB8413CABEFE9_inline (PlayOnImpressionDelegate_t9EA91460747F204556AD8D4301F7C0F3FF3A7766* __this, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203* ___data0, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, ImpressionData_t9581323C69CCCE3C3A835EAFE7D62DDCC559C203*, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, ___data0, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* __this, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* Array_Empty_TisRuntimeObject_m55011E8360A8199FB239A5787BA8631CDD6116FC_gshared_inline (const RuntimeMethod* method) 
{
	{
		il2cpp_codegen_runtime_class_init_inline(il2cpp_rgctx_data(method->rgctx_data, 0));
		ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* L_0 = ((EmptyArray_1_tDF0DD7256B115243AA6BD5558417387A734240EE_StaticFields*)il2cpp_codegen_static_fields_for(il2cpp_rgctx_data(method->rgctx_data, 0)))->___Value_0;
		return L_0;
	}
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR int32_t Queue_1_get_Count_m1768ADA9855B7CDA14C9C42E098A287F1A39C3A2_gshared_inline (Queue_1_tE9EF546915795972C3BFD68FBB8FA859D3BAF3B5* __this, const RuntimeMethod* method) 
{
	{
		int32_t L_0 = (int32_t)__this->____size_3;
		return L_0;
	}
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR Task_1_t824317F4B958F7512E8F7300511752937A6C6043* TaskCompletionSource_1_get_Task_m068E06095F165AE266E15C328CBDA1543429EC66_gshared_inline (TaskCompletionSource_1_t486CD8AD64929E5C47B9FE9AD7AE2CB00B5BAB14* __this, const RuntimeMethod* method) 
{
	{
		Task_1_t824317F4B958F7512E8F7300511752937A6C6043* L_0 = (Task_1_t824317F4B958F7512E8F7300511752937A6C6043*)__this->____task_0;
		return L_0;
	}
}
