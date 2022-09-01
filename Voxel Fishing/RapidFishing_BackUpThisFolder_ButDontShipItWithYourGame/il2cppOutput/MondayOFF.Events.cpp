#include "pch-cpp.hpp"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif


#include <limits>
#include <stdint.h>


template <typename T1, typename T2>
struct VirtualActionInvoker2
{
	typedef void (*Action)(void*, T1, T2, const RuntimeMethod*);

	static inline void Invoke (Il2CppMethodSlot slot, RuntimeObject* obj, T1 p1, T2 p2)
	{
		const VirtualInvokeData& invokeData = il2cpp_codegen_get_virtual_invoke_data(slot, obj);
		((Action)invokeData.methodPtr)(obj, p1, p2, invokeData.method);
	}
};
template <typename R>
struct VirtualFuncInvoker0
{
	typedef R (*Func)(void*, const RuntimeMethod*);

	static inline R Invoke (Il2CppMethodSlot slot, RuntimeObject* obj)
	{
		const VirtualInvokeData& invokeData = il2cpp_codegen_get_virtual_invoke_data(slot, obj);
		return ((Func)invokeData.methodPtr)(obj, invokeData.method);
	}
};
template <typename R, typename T1>
struct VirtualFuncInvoker1
{
	typedef R (*Func)(void*, T1, const RuntimeMethod*);

	static inline R Invoke (Il2CppMethodSlot slot, RuntimeObject* obj, T1 p1)
	{
		const VirtualInvokeData& invokeData = il2cpp_codegen_get_virtual_invoke_data(slot, obj);
		return ((Func)invokeData.methodPtr)(obj, p1, invokeData.method);
	}
};
template <typename R, typename T1, typename T2>
struct VirtualFuncInvoker2
{
	typedef R (*Func)(void*, T1, T2, const RuntimeMethod*);

	static inline R Invoke (Il2CppMethodSlot slot, RuntimeObject* obj, T1 p1, T2 p2)
	{
		const VirtualInvokeData& invokeData = il2cpp_codegen_get_virtual_invoke_data(slot, obj);
		return ((Func)invokeData.methodPtr)(obj, p1, p2, invokeData.method);
	}
};

// System.Action`1<System.Threading.Tasks.Task`1<Firebase.DependencyStatus>>
struct Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC;
// System.Action`1<System.Threading.Tasks.Task`1<System.Int32Enum>>
struct Action_1_tC3BD22662CBF7BCA7CF101E25DD9C3BC0C8058B4;
// System.Action`1<System.Object>
struct Action_1_t6F9EB113EB3F16226AEF811A2744F4111C116C87;
// System.Collections.Generic.Dictionary`2<System.Int32,System.Threading.Tasks.Task>
struct Dictionary_2_t403063CE4960B4F46C688912237C6A27E550FF55;
// System.Collections.Generic.Dictionary`2<System.IntPtr,Firebase.FirebaseApp>
struct Dictionary_2_tD81F54C87D78FE70A5DE7DAA170AE5EB4E54E8C3;
// System.Collections.Generic.Dictionary`2<System.Object,System.Object>
struct Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA;
// System.Collections.Generic.Dictionary`2<System.String,Firebase.FirebaseApp>
struct Dictionary_2_t070EAA8A0D7DC2B4DA1223E3809A83B3933BF21A;
// System.Collections.Generic.Dictionary`2<System.String,System.String>
struct Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83;
// System.Func`1<System.Threading.Tasks.Task/ContingentProperties>
struct Func_1_tD59A12717D79BFB403BF973694B1BE5B85474BD1;
// System.Collections.Generic.IEqualityComparer`1<System.String>
struct IEqualityComparer_1_tAE94C8F24AD5B94D4EE85CA9FC59E3409D41CAF7;
// System.Collections.Generic.Dictionary`2/KeyCollection<System.String,System.String>
struct KeyCollection_t2EDD317F5771E575ACB63527B5AFB71291040342;
// System.Predicate`1<System.Object>
struct Predicate_1_t8342C85FF4E41CD1F7024AC0CDC3E5312A32CB12;
// System.Predicate`1<System.Threading.Tasks.Task>
struct Predicate_1_t7F48518B008C1472339EEEBABA3DE203FE1F26ED;
// System.Threading.Tasks.TaskFactory`1<Firebase.DependencyStatus>
struct TaskFactory_1_tA1BF99B45C5D8E4EBA82339084E38BD2DB72E0C1;
// System.Threading.Tasks.Task`1<Firebase.DependencyStatus>
struct Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF;
// System.Threading.Tasks.Task`1<System.Int32Enum>
struct Task_1_t8DED34447688BFCF5112B0D05D5A80CED94E4BFB;
// System.Collections.Generic.Dictionary`2/ValueCollection<System.String,System.String>
struct ValueCollection_t238D0D2427C6B841A01F522A41540165A2C4AE76;
// System.Collections.Generic.Dictionary`2/Entry<System.String,System.String>[]
struct EntryU5BU5D_t1AF33AD0B7330843448956EC4277517081658AE7;
// System.Delegate[]
struct DelegateU5BU5D_tC5AB7E8F745616680F337909D3A8E6C722CDF771;
// System.Int32[]
struct Int32U5BU5D_t19C97395396A72ECAF310612F0760F165060314C;
// System.IntPtr[]
struct IntPtrU5BU5D_tFD177F8C806A6921AD7150264CCC62FA00CAD832;
// System.Object[]
struct ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918;
// Firebase.Analytics.Parameter[]
struct ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA;
// System.Diagnostics.StackTrace[]
struct StackTraceU5BU5D_t32FBCB20930EAF5BAE3F450FF75228E5450DA0DF;
// System.Type[]
struct TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB;
// System.Reflection.Assembly
struct Assembly_t;
// System.AsyncCallback
struct AsyncCallback_t7FEF460CBDCFB9C5FA2EF776984778B9A4145F4C;
// System.Reflection.Binder
struct Binder_t91BFCE95A7057FADF4D8A1A342AFE52872246235;
// UnityEngine.Component
struct Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3;
// System.Threading.ContextCallback
struct ContextCallback_tE8AFBDBFCC040FDA8DA8C1EEFE9BD66B16BDA007;
// System.Delegate
struct Delegate_t;
// System.DelegateData
struct DelegateData_t9B286B493293CD2D23A5B2B5EF0E5B1324C2B77E;
// System.EventHandler
struct EventHandler_tC6323FD7E6163F965259C33D72612C0E5B9BAB82;
// System.Reflection.EventInfo
struct EventInfo_t;
// MondayOFF.EventTracker
struct EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF;
// MondayOFF.EventsManager
struct EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707;
// System.Exception
struct Exception_t;
// Firebase.FirebaseApp
struct FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25;
// Firebase.Platform.FirebaseAppPlatform
struct FirebaseAppPlatform_t5AD8517EA34467536BAC8C7C6EB4D4B6880312A2;
// UnityEngine.GameObject
struct GameObject_t76FEDD663AB33C991A9C9A23129337651094216F;
// Facebook.Unity.HideUnityDelegate
struct HideUnityDelegate_t73424171C1A0762619208C0090DD84BA51FF9BCE;
// System.IAsyncResult
struct IAsyncResult_t7B9B5A0ECB35DCEC31B8A8122C37D687369253B5;
// System.Collections.IDictionary
struct IDictionary_t6D03155AF1FA9083817AA5B6AD7DEEACC26AB220;
// Facebook.Unity.InitDelegate
struct InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F;
// System.Reflection.MemberFilter
struct MemberFilter_tF644F1AE82F611B677CE1964D5A3277DDA21D553;
// System.Reflection.MethodBase
struct MethodBase_t;
// System.Reflection.MethodInfo
struct MethodInfo_t;
// UnityEngine.MonoBehaviour
struct MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71;
// UnityEngine.Object
struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C;
// Firebase.Analytics.Parameter
struct Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E;
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
// System.Type
struct Type_t;
// System.Void
struct Void_t4861ACF8F4594C3437BB48B6E56783494B843915;
// System.Reflection.EventInfo/AddEventAdapter
struct AddEventAdapter_tE0DE36700D110F4D267B26686541ABCF9588A6DD;
// System.Threading.Tasks.Task/ContingentProperties
struct ContingentProperties_t3FA59480914505CEA917B1002EC675F29D0CB540;

IL2CPP_EXTERN_C RuntimeClass* Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* DependencyStatus_t9DA2DB2B2AC17E9DA549331B93778091496D8195_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Exception_t_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Type_t_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C String_t* _stringLiteral00722E1BEC710131BFDA7B556A35E84DC9512404;
IL2CPP_EXTERN_C String_t* _stringLiteral1A44309A41F6971AEC9BFEA88D6C3F474EBE4444;
IL2CPP_EXTERN_C String_t* _stringLiteral1D8BE65F4D775FA68F7EA356CD9EF08F2666FC54;
IL2CPP_EXTERN_C String_t* _stringLiteral1EDF4B668798016D514CA452D507AC33D2CF5C85;
IL2CPP_EXTERN_C String_t* _stringLiteral25A376D87246A9C5C448D7FCB6B29265050C1F10;
IL2CPP_EXTERN_C String_t* _stringLiteral32667E9747D6E0A33BE197C2AC709961D4658E96;
IL2CPP_EXTERN_C String_t* _stringLiteral35D96E97BC6FA789F647B02B313E3BF00060EF8B;
IL2CPP_EXTERN_C String_t* _stringLiteral3791A36F192366DEC92F1507B19B970756790BFD;
IL2CPP_EXTERN_C String_t* _stringLiteral4B53D9E0776C9D811F58C58875E07F500939E574;
IL2CPP_EXTERN_C String_t* _stringLiteral674EF683D8B400F1F0F590BCCA13A350C3C1A25F;
IL2CPP_EXTERN_C String_t* _stringLiteral69FBC7A041E2A8D2BB53C20F3EBB5DA1C681DF54;
IL2CPP_EXTERN_C String_t* _stringLiteral6BCD5C74D3C2E1E8F2BCAEAB82FC1B4547EB82EC;
IL2CPP_EXTERN_C String_t* _stringLiteral8082813B6067EF51A56748DD6ED3550F1DB14B92;
IL2CPP_EXTERN_C String_t* _stringLiteral977A71115E05B54B449539D8B6701AE4DAD2B1BE;
IL2CPP_EXTERN_C String_t* _stringLiteralA75ADB8D3EF555A267CFBA49BCC94E6A12ACB3C6;
IL2CPP_EXTERN_C String_t* _stringLiteralC619B0B50E7056F33C03335DF7D0682986F150CE;
IL2CPP_EXTERN_C String_t* _stringLiteralD8107229F68852E5B5F556B7F32DFA9FC2F4D39A;
IL2CPP_EXTERN_C String_t* _stringLiteralECF21D997D252AD36AF7989BA2535DBCF0DCBF1B;
IL2CPP_EXTERN_C String_t* _stringLiteralEE7DBD797937B55C14A6A6F818EEC5F123164873;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2_GetEnumerator_m46EC45F42CA2279D83568CD3F216AAABA8E749F6_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2_get_Count_m65C62C77C355CFCE2CC0ED6D817637E1909E0843_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Enumerator_Dispose_m068DDFF5CAFBB15C8A0602DEADA7F10C5BB7ADCD_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Enumerator_MoveNext_mA93491D9B55547D066053F3BC0A69C635F877438_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Enumerator_get_Current_m49070E88C2E34AB46E6292A3FB1C227576B8506E_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* EventTracker_U3CinitializeU3Eb__3_0_m62A7CB6C18DB2EE7E9745302FFD3C9BE89FAA801_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* EventsManager_OnFBInitialization_m35FF9E67F1085ADBAF3AC798B87E3BC6C68DF182_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* KeyValuePair_2_get_Key_m654BCCAE2F20CB11D8E8C2D2C886A0C8A13EB1C4_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* KeyValuePair_2_get_Value_m7345512A32CB4DCAA0643050B18DC8DCD71B927A_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Object_Instantiate_TisGameObject_t76FEDD663AB33C991A9C9A23129337651094216F_mC898F7E3D9541F17BD8B79579FDD431C0651E12D_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Task_1_ContinueWith_mAB52D6D57000543C9DD78F0D45BD7B66F819A0DD_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Task_1_get_Result_m543F02EC56EEA4AAED7101434F488D890414A3DA_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeType* GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_0_0_0_var;
IL2CPP_EXTERN_C const RuntimeType* String_t_0_0_0_var;
struct Delegate_t_marshaled_com;
struct Delegate_t_marshaled_pinvoke;
struct Exception_t_marshaled_com;
struct Exception_t_marshaled_pinvoke;

struct ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918;
struct ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA;
struct TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB;

IL2CPP_EXTERN_C_BEGIN
IL2CPP_EXTERN_C_END

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// <Module>
struct U3CModuleU3E_t7F596902C32BF1EC691B4638310E15A6C8ECCFE6 
{
};

// System.Collections.Generic.Dictionary`2<System.String,System.String>
struct Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83  : public RuntimeObject
{
	// System.Int32[] System.Collections.Generic.Dictionary`2::_buckets
	Int32U5BU5D_t19C97395396A72ECAF310612F0760F165060314C* ____buckets_0;
	// System.Collections.Generic.Dictionary`2/Entry<TKey,TValue>[] System.Collections.Generic.Dictionary`2::_entries
	EntryU5BU5D_t1AF33AD0B7330843448956EC4277517081658AE7* ____entries_1;
	// System.Int32 System.Collections.Generic.Dictionary`2::_count
	int32_t ____count_2;
	// System.Int32 System.Collections.Generic.Dictionary`2::_freeList
	int32_t ____freeList_3;
	// System.Int32 System.Collections.Generic.Dictionary`2::_freeCount
	int32_t ____freeCount_4;
	// System.Int32 System.Collections.Generic.Dictionary`2::_version
	int32_t ____version_5;
	// System.Collections.Generic.IEqualityComparer`1<TKey> System.Collections.Generic.Dictionary`2::_comparer
	RuntimeObject* ____comparer_6;
	// System.Collections.Generic.Dictionary`2/KeyCollection<TKey,TValue> System.Collections.Generic.Dictionary`2::_keys
	KeyCollection_t2EDD317F5771E575ACB63527B5AFB71291040342* ____keys_7;
	// System.Collections.Generic.Dictionary`2/ValueCollection<TKey,TValue> System.Collections.Generic.Dictionary`2::_values
	ValueCollection_t238D0D2427C6B841A01F522A41540165A2C4AE76* ____values_8;
	// System.Object System.Collections.Generic.Dictionary`2::_syncRoot
	RuntimeObject* ____syncRoot_9;
};
struct Il2CppArrayBounds;

// System.Reflection.Assembly
struct Assembly_t  : public RuntimeObject
{
};
// Native definition for P/Invoke marshalling of System.Reflection.Assembly
struct Assembly_t_marshaled_pinvoke
{
};
// Native definition for COM marshalling of System.Reflection.Assembly
struct Assembly_t_marshaled_com
{
};

// MondayOFF.EventTracker
struct EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF  : public RuntimeObject
{
	// System.Type MondayOFF.EventTracker::adInfoType
	Type_t* ___adInfoType_0;
	// System.Boolean MondayOFF.EventTracker::_isFirebaseReady
	bool ____isFirebaseReady_1;
	// Firebase.FirebaseApp MondayOFF.EventTracker::_app
	FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25* ____app_2;
};

// System.Reflection.MemberInfo
struct MemberInfo_t  : public RuntimeObject
{
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

// System.Collections.Generic.KeyValuePair`2<System.Object,System.Object>
struct KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230 
{
	// TKey System.Collections.Generic.KeyValuePair`2::key
	RuntimeObject* ___key_0;
	// TValue System.Collections.Generic.KeyValuePair`2::value
	RuntimeObject* ___value_1;
};

// System.Collections.Generic.KeyValuePair`2<System.String,System.String>
struct KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A 
{
	// TKey System.Collections.Generic.KeyValuePair`2::key
	String_t* ___key_0;
	// TValue System.Collections.Generic.KeyValuePair`2::value
	String_t* ___value_1;
};

// System.Threading.Tasks.Task`1<Firebase.DependencyStatus>
struct Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF  : public Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572
{
	// TResult System.Threading.Tasks.Task`1::m_result
	int32_t ___m_result_22;
};

struct Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF_StaticFields
{
	// System.Threading.Tasks.TaskFactory`1<TResult> System.Threading.Tasks.Task`1::s_defaultFactory
	TaskFactory_1_tA1BF99B45C5D8E4EBA82339084E38BD2DB72E0C1* ___s_defaultFactory_23;
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

// System.Reflection.EventInfo
struct EventInfo_t  : public MemberInfo_t
{
	// System.Reflection.EventInfo/AddEventAdapter System.Reflection.EventInfo::cached_add_event
	AddEventAdapter_tE0DE36700D110F4D267B26686541ABCF9588A6DD* ___cached_add_event_0;
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

// System.Reflection.MethodBase
struct MethodBase_t  : public MemberInfo_t
{
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

// System.Collections.Generic.Dictionary`2/Enumerator<System.Object,System.Object>
struct Enumerator_tEA93FE2B778D098F590CA168BEFC4CD85D73A6B9 
{
	// System.Collections.Generic.Dictionary`2<TKey,TValue> System.Collections.Generic.Dictionary`2/Enumerator::_dictionary
	Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* ____dictionary_0;
	// System.Int32 System.Collections.Generic.Dictionary`2/Enumerator::_version
	int32_t ____version_1;
	// System.Int32 System.Collections.Generic.Dictionary`2/Enumerator::_index
	int32_t ____index_2;
	// System.Collections.Generic.KeyValuePair`2<TKey,TValue> System.Collections.Generic.Dictionary`2/Enumerator::_current
	KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230 ____current_3;
	// System.Int32 System.Collections.Generic.Dictionary`2/Enumerator::_getEnumeratorRetType
	int32_t ____getEnumeratorRetType_4;
};

// System.Collections.Generic.Dictionary`2/Enumerator<System.String,System.String>
struct Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562 
{
	// System.Collections.Generic.Dictionary`2<TKey,TValue> System.Collections.Generic.Dictionary`2/Enumerator::_dictionary
	Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* ____dictionary_0;
	// System.Int32 System.Collections.Generic.Dictionary`2/Enumerator::_version
	int32_t ____version_1;
	// System.Int32 System.Collections.Generic.Dictionary`2/Enumerator::_index
	int32_t ____index_2;
	// System.Collections.Generic.KeyValuePair`2<TKey,TValue> System.Collections.Generic.Dictionary`2/Enumerator::_current
	KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A ____current_3;
	// System.Int32 System.Collections.Generic.Dictionary`2/Enumerator::_getEnumeratorRetType
	int32_t ____getEnumeratorRetType_4;
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

// System.Runtime.InteropServices.HandleRef
struct HandleRef_t4B05E32B68797F702257D4E838B85A976313F08F 
{
	// System.Object System.Runtime.InteropServices.HandleRef::_wrapper
	RuntimeObject* ____wrapper_0;
	// System.IntPtr System.Runtime.InteropServices.HandleRef::_handle
	intptr_t ____handle_1;
};

// System.Reflection.MethodInfo
struct MethodInfo_t  : public MethodBase_t
{
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

// System.RuntimeTypeHandle
struct RuntimeTypeHandle_t332A452B8B6179E4469B69525D0FE82A88030F7B 
{
	// System.IntPtr System.RuntimeTypeHandle::value
	intptr_t ___value_0;
};

// UnityEngine.Component
struct Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3  : public Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C
{
};

// Firebase.FirebaseApp
struct FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25  : public RuntimeObject
{
	// System.Runtime.InteropServices.HandleRef Firebase.FirebaseApp::swigCPtr
	HandleRef_t4B05E32B68797F702257D4E838B85A976313F08F ___swigCPtr_0;
	// System.Boolean Firebase.FirebaseApp::swigCMemOwn
	bool ___swigCMemOwn_1;
	// System.String Firebase.FirebaseApp::name
	String_t* ___name_3;
	// System.EventHandler Firebase.FirebaseApp::AppDisposed
	EventHandler_tC6323FD7E6163F965259C33D72612C0E5B9BAB82* ___AppDisposed_4;
	// Firebase.Platform.FirebaseAppPlatform Firebase.FirebaseApp::appPlatform
	FirebaseAppPlatform_t5AD8517EA34467536BAC8C7C6EB4D4B6880312A2* ___appPlatform_15;
};

struct FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25_StaticFields
{
	// System.Object Firebase.FirebaseApp::disposeLock
	RuntimeObject* ___disposeLock_2;
	// System.Collections.Generic.Dictionary`2<System.String,Firebase.FirebaseApp> Firebase.FirebaseApp::nameToProxy
	Dictionary_2_t070EAA8A0D7DC2B4DA1223E3809A83B3933BF21A* ___nameToProxy_5;
	// System.Collections.Generic.Dictionary`2<System.IntPtr,Firebase.FirebaseApp> Firebase.FirebaseApp::cPtrToProxy
	Dictionary_2_tD81F54C87D78FE70A5DE7DAA170AE5EB4E54E8C3* ___cPtrToProxy_6;
	// System.Boolean Firebase.FirebaseApp::AppUtilCallbacksInitialized
	bool ___AppUtilCallbacksInitialized_7;
	// System.Object Firebase.FirebaseApp::AppUtilCallbacksLock
	RuntimeObject* ___AppUtilCallbacksLock_8;
	// System.Boolean Firebase.FirebaseApp::PreventOnAllAppsDestroyed
	bool ___PreventOnAllAppsDestroyed_9;
	// System.Boolean Firebase.FirebaseApp::crashlyticsInitializationAttempted
	bool ___crashlyticsInitializationAttempted_10;
	// System.Int32 Firebase.FirebaseApp::CheckDependenciesThread
	int32_t ___CheckDependenciesThread_13;
	// System.Object Firebase.FirebaseApp::CheckDependenciesThreadLock
	RuntimeObject* ___CheckDependenciesThreadLock_14;
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

// Firebase.Analytics.Parameter
struct Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E  : public RuntimeObject
{
	// System.Runtime.InteropServices.HandleRef Firebase.Analytics.Parameter::swigCPtr
	HandleRef_t4B05E32B68797F702257D4E838B85A976313F08F ___swigCPtr_0;
	// System.Boolean Firebase.Analytics.Parameter::swigCMemOwn
	bool ___swigCMemOwn_1;
};

// System.Type
struct Type_t  : public MemberInfo_t
{
	// System.RuntimeTypeHandle System.Type::_impl
	RuntimeTypeHandle_t332A452B8B6179E4469B69525D0FE82A88030F7B ____impl_8;
};

struct Type_t_StaticFields
{
	// System.Reflection.Binder modreq(System.Runtime.CompilerServices.IsVolatile) System.Type::s_defaultBinder
	Binder_t91BFCE95A7057FADF4D8A1A342AFE52872246235* ___s_defaultBinder_0;
	// System.Char System.Type::Delimiter
	Il2CppChar ___Delimiter_1;
	// System.Type[] System.Type::EmptyTypes
	TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB* ___EmptyTypes_2;
	// System.Object System.Type::Missing
	RuntimeObject* ___Missing_3;
	// System.Reflection.MemberFilter System.Type::FilterAttribute
	MemberFilter_tF644F1AE82F611B677CE1964D5A3277DDA21D553* ___FilterAttribute_4;
	// System.Reflection.MemberFilter System.Type::FilterName
	MemberFilter_tF644F1AE82F611B677CE1964D5A3277DDA21D553* ___FilterName_5;
	// System.Reflection.MemberFilter System.Type::FilterNameIgnoreCase
	MemberFilter_tF644F1AE82F611B677CE1964D5A3277DDA21D553* ___FilterNameIgnoreCase_6;
};

// System.Action`1<System.Threading.Tasks.Task`1<Firebase.DependencyStatus>>
struct Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC  : public MulticastDelegate_t
{
};

// UnityEngine.Behaviour
struct Behaviour_t01970CFBBA658497AE30F311C447DB0440BAB7FA  : public Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3
{
};

// Facebook.Unity.HideUnityDelegate
struct HideUnityDelegate_t73424171C1A0762619208C0090DD84BA51FF9BCE  : public MulticastDelegate_t
{
};

// Facebook.Unity.InitDelegate
struct InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F  : public MulticastDelegate_t
{
};

// UnityEngine.MonoBehaviour
struct MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71  : public Behaviour_t01970CFBBA658497AE30F311C447DB0440BAB7FA
{
};

// MondayOFF.EventsManager
struct EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707  : public MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71
{
	// MondayOFF.EventTracker MondayOFF.EventsManager::_eventTracker
	EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* ____eventTracker_6;
};

struct EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields
{
	// MondayOFF.EventsManager MondayOFF.EventsManager::<instance>k__BackingField
	EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* ___U3CinstanceU3Ek__BackingField_4;
	// System.Boolean MondayOFF.EventsManager::isReady
	bool ___isReady_5;
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
// Firebase.Analytics.Parameter[]
struct ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA  : public RuntimeArray
{
	ALIGN_FIELD (8) Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* m_Items[1];

	inline Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* GetAt(il2cpp_array_size_t index) const
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items[index];
	}
	inline Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E** GetAddressAt(il2cpp_array_size_t index)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items + index;
	}
	inline void SetAt(il2cpp_array_size_t index, Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* value)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
	inline Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* GetAtUnchecked(il2cpp_array_size_t index) const
	{
		return m_Items[index];
	}
	inline Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E** GetAddressAtUnchecked(il2cpp_array_size_t index)
	{
		return m_Items + index;
	}
	inline void SetAtUnchecked(il2cpp_array_size_t index, Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* value)
	{
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
};
// System.Type[]
struct TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB  : public RuntimeArray
{
	ALIGN_FIELD (8) Type_t* m_Items[1];

	inline Type_t* GetAt(il2cpp_array_size_t index) const
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items[index];
	}
	inline Type_t** GetAddressAt(il2cpp_array_size_t index)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		return m_Items + index;
	}
	inline void SetAt(il2cpp_array_size_t index, Type_t* value)
	{
		IL2CPP_ARRAY_BOUNDS_CHECK(index, (uint32_t)(this)->max_length);
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
	inline Type_t* GetAtUnchecked(il2cpp_array_size_t index) const
	{
		return m_Items[index];
	}
	inline Type_t** GetAddressAtUnchecked(il2cpp_array_size_t index)
	{
		return m_Items + index;
	}
	inline void SetAtUnchecked(il2cpp_array_size_t index, Type_t* value)
	{
		m_Items[index] = value;
		Il2CppCodeGenWriteBarrier((void**)m_Items + index, (void*)value);
	}
};


// T UnityEngine.Object::Instantiate<System.Object>(T)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* Object_Instantiate_TisRuntimeObject_mCD6FC6BB14BA9EF1A4B314841EB4D40675E3C1DB_gshared (RuntimeObject* ___original0, const RuntimeMethod* method) ;
// System.Void System.Action`1<System.Object>::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Action_1__ctor_m2E1DFA67718FC1A0B6E5DFEB78831FFE9C059EB4_gshared (Action_1_t6F9EB113EB3F16226AEF811A2744F4111C116C87* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Threading.Tasks.Task System.Threading.Tasks.Task`1<System.Int32Enum>::ContinueWith(System.Action`1<System.Threading.Tasks.Task`1<TResult>>)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* Task_1_ContinueWith_m80CB64874F84DB8EBDB9F3F28F5B6710670B1571_gshared (Task_1_t8DED34447688BFCF5112B0D05D5A80CED94E4BFB* __this, Action_1_tC3BD22662CBF7BCA7CF101E25DD9C3BC0C8058B4* ___continuationAction0, const RuntimeMethod* method) ;
// System.Int32 System.Collections.Generic.Dictionary`2<System.Object,System.Object>::get_Count()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR int32_t Dictionary_2_get_Count_m4DDA9442C238A443489115E22B026AD366851549_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, const RuntimeMethod* method) ;
// System.Collections.Generic.Dictionary`2/Enumerator<TKey,TValue> System.Collections.Generic.Dictionary`2<System.Object,System.Object>::GetEnumerator()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Enumerator_tEA93FE2B778D098F590CA168BEFC4CD85D73A6B9 Dictionary_2_GetEnumerator_m52AB12790B0B9B46B1DFB1F861C9DBEAB07C1FDA_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Dictionary`2/Enumerator<System.Object,System.Object>::Dispose()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Enumerator_Dispose_mEA5E01B81EB943B7003D87CEC1B6040524F0402C_gshared (Enumerator_tEA93FE2B778D098F590CA168BEFC4CD85D73A6B9* __this, const RuntimeMethod* method) ;
// System.Collections.Generic.KeyValuePair`2<TKey,TValue> System.Collections.Generic.Dictionary`2/Enumerator<System.Object,System.Object>::get_Current()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230 Enumerator_get_Current_mE3475384B761E1C7971D3639BD09117FE8363422_gshared_inline (Enumerator_tEA93FE2B778D098F590CA168BEFC4CD85D73A6B9* __this, const RuntimeMethod* method) ;
// TKey System.Collections.Generic.KeyValuePair`2<System.Object,System.Object>::get_Key()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR RuntimeObject* KeyValuePair_2_get_Key_mBD8EA7557C27E6956F2AF29DA3F7499B2F51A282_gshared_inline (KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230* __this, const RuntimeMethod* method) ;
// TValue System.Collections.Generic.KeyValuePair`2<System.Object,System.Object>::get_Value()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR RuntimeObject* KeyValuePair_2_get_Value_mC6BD8075F9C9DDEF7B4D731E5C38EC19103988E7_gshared_inline (KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230* __this, const RuntimeMethod* method) ;
// System.Boolean System.Collections.Generic.Dictionary`2/Enumerator<System.Object,System.Object>::MoveNext()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Enumerator_MoveNext_mCD4950A75FFADD54AF354D48C6C0DB0B5A22A5F4_gshared (Enumerator_tEA93FE2B778D098F590CA168BEFC4CD85D73A6B9* __this, const RuntimeMethod* method) ;
// TResult System.Threading.Tasks.Task`1<System.Int32Enum>::get_Result()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR int32_t Task_1_get_Result_mF8B724FC6FD57DF2078A1F8927214003AAAC6286_gshared (Task_1_t8DED34447688BFCF5112B0D05D5A80CED94E4BFB* __this, const RuntimeMethod* method) ;

// MondayOFF.EventsManager MondayOFF.EventsManager::get_instance()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* EventsManager_get_instance_m3E60FC8A286B2BCC6B3D835773D82FE5144CAAEC_inline (const RuntimeMethod* method) ;
// System.Boolean UnityEngine.Object::op_Inequality(UnityEngine.Object,UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___x0, Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___y1, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventsManager::Initialize()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_Initialize_m7426CDACF31E34A413E770B463D60D7D512F1066 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventTracker::TryStage(System.Int32,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_TryStage_m500214745B8030745E7C66E9A9F89D8CB5133B80 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, int32_t ___stageNum0, String_t* ___stageName1, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventTracker::ClearStage(System.Int32,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_ClearStage_m05934CC22F3A84FE3C280F117F1142548037C52F (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, int32_t ___stageNum0, String_t* ___stageName1, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventTracker::LogCustomEvent(System.String,System.Collections.Generic.Dictionary`2<System.String,System.String>)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_LogCustomEvent_mA053846EC18FDC61194EE3743301F75D03BBC4B5 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, String_t* ___eventName0, Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* ___parameters1, const RuntimeMethod* method) ;
// System.Boolean Facebook.Unity.FB::get_IsInitialized()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool FB_get_IsInitialized_m32FCC2514C3E85081D3CD60E1A904D0B3A0CD0D6 (const RuntimeMethod* method) ;
// System.Void Facebook.Unity.InitDelegate::.ctor(System.Object,System.IntPtr)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void InitDelegate__ctor_m3564BD9683A0BAB69B7B0CCB1F32F0688C9FBAB7 (InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method) ;
// System.Void Facebook.Unity.FB::Init(Facebook.Unity.InitDelegate,Facebook.Unity.HideUnityDelegate,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void FB_Init_mD4D2B39880BE40A781A7C28C0BA3B95FF24F3068 (InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F* ___onInitComplete0, HideUnityDelegate_t73424171C1A0762619208C0090DD84BA51FF9BCE* ___onHideUnity1, String_t* ___authResponse2, const RuntimeMethod* method) ;
// System.Void UnityEngine.Debug::LogException(System.Exception)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Debug_LogException_m82E44FEC6B03BC34AFC2CAF6583051570C60CB9E (Exception_t* ___exception0, const RuntimeMethod* method) ;
// System.Void UnityEngine.Debug::LogWarning(System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Debug_LogWarning_mEF15C6B17CE4E1FA7E379CDB82CE40FCD89A3F28 (RuntimeObject* ___message0, const RuntimeMethod* method) ;
// System.Void Facebook.Unity.FB::ActivateApp()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void FB_ActivateApp_mB8DF4095E59F390721C5DF6E6F9EED3A329E9E44 (const RuntimeMethod* method) ;
// System.Void MondayOFF.EventTracker::initialize()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_initialize_mCE06065B2CC0CD75F27D7571BA2D682833456401 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, const RuntimeMethod* method) ;
// System.Reflection.Assembly System.Reflection.Assembly::Load(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Assembly_t* Assembly_Load_m718E55A40D92C7BBE26812A9A7998BDF166C0BD2 (String_t* ___assemblyString0, const RuntimeMethod* method) ;
// System.Boolean System.Type::op_Equality(System.Type,System.Type)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Type_op_Equality_mE6EDDDC900C50B222CF32BCD2AD027595F2D74B7 (Type_t* ___left0, Type_t* ___right1, const RuntimeMethod* method) ;
// UnityEngine.Object UnityEngine.Object::FindObjectOfType(System.Type)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* Object_FindObjectOfType_mF9A94A2059CE512E485297DDBBA51C02B451E41F (Type_t* ___type0, const RuntimeMethod* method) ;
// System.Boolean UnityEngine.Object::op_Equality(UnityEngine.Object,UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Object_op_Equality_mD3DB0D72CE0250C84033DC2A90AEF9D59896E536 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___x0, Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___y1, const RuntimeMethod* method) ;
// System.Type System.Type::GetTypeFromHandle(System.RuntimeTypeHandle)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Type_t* Type_GetTypeFromHandle_m2570A2A5B32A5E9D9F0F38B37459DA18736C823E (RuntimeTypeHandle_t332A452B8B6179E4469B69525D0FE82A88030F7B ___handle0, const RuntimeMethod* method) ;
// UnityEngine.Object UnityEngine.Resources::Load(System.String,System.Type)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* Resources_Load_mDCC8EBD3196F1CE1B86E74416AD90CF86320C401 (String_t* ___path0, Type_t* ___systemTypeInstance1, const RuntimeMethod* method) ;
// T UnityEngine.Object::Instantiate<UnityEngine.GameObject>(T)
inline GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* Object_Instantiate_TisGameObject_t76FEDD663AB33C991A9C9A23129337651094216F_mC898F7E3D9541F17BD8B79579FDD431C0651E12D (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* ___original0, const RuntimeMethod* method)
{
	return ((  GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* (*) (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F*, const RuntimeMethod*))Object_Instantiate_TisRuntimeObject_mCD6FC6BB14BA9EF1A4B314841EB4D40675E3C1DB_gshared)(___original0, method);
}
// System.Void UnityEngine.Object::set_name(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Object_set_name_mC79E6DC8FFD72479C90F0C4CC7F42A0FEAF5AE47 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* __this, String_t* ___value0, const RuntimeMethod* method) ;
// System.Reflection.MethodInfo System.Type::GetMethod(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR MethodInfo_t* Type_GetMethod_m66AD062187F19497DBCA900823B0C268322DC231 (Type_t* __this, String_t* ___name0, const RuntimeMethod* method) ;
// System.Object System.Reflection.MethodBase::Invoke(System.Object,System.Object[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR RuntimeObject* MethodBase_Invoke_mEEF3218648F111A8C338001A7804091A0747C826 (MethodBase_t* __this, RuntimeObject* ___obj0, ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918* ___parameters1, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventsManager::OnFBInitialization()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_OnFBInitialization_m35FF9E67F1085ADBAF3AC798B87E3BC6C68DF182 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, const RuntimeMethod* method) ;
// UnityEngine.GameObject UnityEngine.Component::get_gameObject()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* Component_get_gameObject_m57AEFBB14DB39EC476F740BA000E170355DE691B (Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3* __this, const RuntimeMethod* method) ;
// System.Void UnityEngine.Object::DestroyImmediate(UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Object_DestroyImmediate_m8249CABCDF344BE3A67EE765122EBB415DC2BC57 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___obj0, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventsManager::set_instance(MondayOFF.EventsManager)
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void EventsManager_set_instance_m3C19C1AC7DE0C46DB79F3A7737D9700243DCDC58_inline (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* ___value0, const RuntimeMethod* method) ;
// System.Void MondayOFF.EventTracker::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker__ctor_mD6920EEC2835F3E2517F0DEFC95B619DDFCF374F (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, const RuntimeMethod* method) ;
// System.Void UnityEngine.MonoBehaviour::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void MonoBehaviour__ctor_m592DB0105CA0BC97AA1C5F4AD27B12D68A3B7C1E (MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71* __this, const RuntimeMethod* method) ;
// System.Threading.Tasks.Task`1<Firebase.DependencyStatus> Firebase.FirebaseApp::CheckAndFixDependenciesAsync()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF* FirebaseApp_CheckAndFixDependenciesAsync_mE6FF44FA1DDA2E2504A45F1F12696D9D089D7674 (const RuntimeMethod* method) ;
// System.Void System.Action`1<System.Threading.Tasks.Task`1<Firebase.DependencyStatus>>::.ctor(System.Object,System.IntPtr)
inline void Action_1__ctor_m4F6B8318AD92B94ABD9C753FFD7CEE0687417DAC (Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC* __this, RuntimeObject* ___object0, intptr_t ___method1, const RuntimeMethod* method)
{
	((  void (*) (Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC*, RuntimeObject*, intptr_t, const RuntimeMethod*))Action_1__ctor_m2E1DFA67718FC1A0B6E5DFEB78831FFE9C059EB4_gshared)(__this, ___object0, ___method1, method);
}
// System.Threading.Tasks.Task System.Threading.Tasks.Task`1<Firebase.DependencyStatus>::ContinueWith(System.Action`1<System.Threading.Tasks.Task`1<TResult>>)
inline Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* Task_1_ContinueWith_mAB52D6D57000543C9DD78F0D45BD7B66F819A0DD (Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF* __this, Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC* ___continuationAction0, const RuntimeMethod* method)
{
	return ((  Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* (*) (Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF*, Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC*, const RuntimeMethod*))Task_1_ContinueWith_m80CB64874F84DB8EBDB9F3F28F5B6710670B1571_gshared)(__this, ___continuationAction0, method);
}
// System.String System.String::Format(System.String,System.Object,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Format_m9499958F4B0BB6089C75760AB647AB3CA4D55806 (String_t* ___format0, RuntimeObject* ___arg01, RuntimeObject* ___arg12, const RuntimeMethod* method) ;
// System.Void Firebase.Analytics.Parameter::.ctor(System.String,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Parameter__ctor_m71889DACE276FEFBBA79A6FD792C9B3D70107E7A (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* __this, String_t* ___parameterName0, String_t* ___parameterValue1, const RuntimeMethod* method) ;
// System.Void Firebase.Analytics.FirebaseAnalytics::LogEvent(System.String,Firebase.Analytics.Parameter[])
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void FirebaseAnalytics_LogEvent_m2C4013480B02EAFF6BB2F958505B5A7637CCAF89 (String_t* ___name0, ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* ___parameters1, const RuntimeMethod* method) ;
// System.Void Firebase.Analytics.FirebaseAnalytics::LogEvent(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void FirebaseAnalytics_LogEvent_m0681C82A83329E03982FBB4E432A81B086AF382A (String_t* ___name0, const RuntimeMethod* method) ;
// System.Int32 System.Collections.Generic.Dictionary`2<System.String,System.String>::get_Count()
inline int32_t Dictionary_2_get_Count_m65C62C77C355CFCE2CC0ED6D817637E1909E0843 (Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* __this, const RuntimeMethod* method)
{
	return ((  int32_t (*) (Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83*, const RuntimeMethod*))Dictionary_2_get_Count_m4DDA9442C238A443489115E22B026AD366851549_gshared)(__this, method);
}
// System.Collections.Generic.Dictionary`2/Enumerator<TKey,TValue> System.Collections.Generic.Dictionary`2<System.String,System.String>::GetEnumerator()
inline Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562 Dictionary_2_GetEnumerator_m46EC45F42CA2279D83568CD3F216AAABA8E749F6 (Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* __this, const RuntimeMethod* method)
{
	return ((  Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562 (*) (Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83*, const RuntimeMethod*))Dictionary_2_GetEnumerator_m52AB12790B0B9B46B1DFB1F861C9DBEAB07C1FDA_gshared)(__this, method);
}
// System.Void System.Collections.Generic.Dictionary`2/Enumerator<System.String,System.String>::Dispose()
inline void Enumerator_Dispose_m068DDFF5CAFBB15C8A0602DEADA7F10C5BB7ADCD (Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562* __this, const RuntimeMethod* method)
{
	((  void (*) (Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562*, const RuntimeMethod*))Enumerator_Dispose_mEA5E01B81EB943B7003D87CEC1B6040524F0402C_gshared)(__this, method);
}
// System.Collections.Generic.KeyValuePair`2<TKey,TValue> System.Collections.Generic.Dictionary`2/Enumerator<System.String,System.String>::get_Current()
inline KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A Enumerator_get_Current_m49070E88C2E34AB46E6292A3FB1C227576B8506E_inline (Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562* __this, const RuntimeMethod* method)
{
	return ((  KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A (*) (Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562*, const RuntimeMethod*))Enumerator_get_Current_mE3475384B761E1C7971D3639BD09117FE8363422_gshared_inline)(__this, method);
}
// TKey System.Collections.Generic.KeyValuePair`2<System.String,System.String>::get_Key()
inline String_t* KeyValuePair_2_get_Key_m654BCCAE2F20CB11D8E8C2D2C886A0C8A13EB1C4_inline (KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A* __this, const RuntimeMethod* method)
{
	return ((  String_t* (*) (KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A*, const RuntimeMethod*))KeyValuePair_2_get_Key_mBD8EA7557C27E6956F2AF29DA3F7499B2F51A282_gshared_inline)(__this, method);
}
// TValue System.Collections.Generic.KeyValuePair`2<System.String,System.String>::get_Value()
inline String_t* KeyValuePair_2_get_Value_m7345512A32CB4DCAA0643050B18DC8DCD71B927A_inline (KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A* __this, const RuntimeMethod* method)
{
	return ((  String_t* (*) (KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A*, const RuntimeMethod*))KeyValuePair_2_get_Value_mC6BD8075F9C9DDEF7B4D731E5C38EC19103988E7_gshared_inline)(__this, method);
}
// System.Boolean System.Collections.Generic.Dictionary`2/Enumerator<System.String,System.String>::MoveNext()
inline bool Enumerator_MoveNext_mA93491D9B55547D066053F3BC0A69C635F877438 (Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562* __this, const RuntimeMethod* method)
{
	return ((  bool (*) (Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562*, const RuntimeMethod*))Enumerator_MoveNext_mCD4950A75FFADD54AF354D48C6C0DB0B5A22A5F4_gshared)(__this, method);
}
// System.Boolean System.Reflection.Assembly::op_Inequality(System.Reflection.Assembly,System.Reflection.Assembly)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Assembly_op_Inequality_m62E003A7871F22BC6129B2D00B4C243D995C21CA (Assembly_t* ___left0, Assembly_t* ___right1, const RuntimeMethod* method) ;
// System.Type System.Object::GetType()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR Type_t* Object_GetType_mE10A8FC1E57F3DF29972CCBC026C2DC3942263B3 (RuntimeObject* __this, const RuntimeMethod* method) ;
// System.Reflection.MethodInfo System.Type::GetMethod(System.String,System.Reflection.BindingFlags)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR MethodInfo_t* Type_GetMethod_m9E66B5053F150537A74C490C1DA5174A7875189D (Type_t* __this, String_t* ___name0, int32_t ___bindingAttr1, const RuntimeMethod* method) ;
// System.Reflection.EventInfo System.Type::GetEvent(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR EventInfo_t* Type_GetEvent_mB4D71EF747D967D102846CB4FADA5DA0291E6A83 (Type_t* __this, String_t* ___name0, const RuntimeMethod* method) ;
// System.String Firebase.Analytics.FirebaseAnalytics::get_EventAppOpen()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* FirebaseAnalytics_get_EventAppOpen_mB0A3CDEAC8DEA1A671921253CD6BFA01AF3AB519 (const RuntimeMethod* method) ;
// System.Void System.Object::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2 (RuntimeObject* __this, const RuntimeMethod* method) ;
// TResult System.Threading.Tasks.Task`1<Firebase.DependencyStatus>::get_Result()
inline int32_t Task_1_get_Result_m543F02EC56EEA4AAED7101434F488D890414A3DA (Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF* __this, const RuntimeMethod* method)
{
	return ((  int32_t (*) (Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF*, const RuntimeMethod*))Task_1_get_Result_mF8B724FC6FD57DF2078A1F8927214003AAAC6286_gshared)(__this, method);
}
// Firebase.FirebaseApp Firebase.FirebaseApp::get_DefaultInstance()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25* FirebaseApp_get_DefaultInstance_mCA6FC0DE0B25880FC6ACEAD5585ED84407690C61 (const RuntimeMethod* method) ;
// System.Void MondayOFF.EventTracker::OnFirebaseInitialized()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_OnFirebaseInitialized_m2BEF67FA97E19F01D6CD0A1B05609E6CCA161BA8 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, const RuntimeMethod* method) ;
// System.String System.String::Format(System.String,System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Format_m8C122B26BC5AA10E2550AECA16E57DAE10F07E30 (String_t* ___format0, RuntimeObject* ___arg01, const RuntimeMethod* method) ;
// System.Void UnityEngine.Debug::LogError(System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Debug_LogError_m059825802BB6AF7EA9693FEBEEB0D85F59A3E38E (RuntimeObject* ___message0, const RuntimeMethod* method) ;
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
// MondayOFF.EventsManager MondayOFF.EventsManager::get_instance()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* EventsManager_get_instance_m3E60FC8A286B2BCC6B3D835773D82FE5144CAAEC (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// public static EventsManager instance { get; private set; }
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_0 = ((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___U3CinstanceU3Ek__BackingField_4;
		return L_0;
	}
}
// System.Void MondayOFF.EventsManager::set_instance(MondayOFF.EventsManager)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_set_instance_m3C19C1AC7DE0C46DB79F3A7737D9700243DCDC58 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* ___value0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// public static EventsManager instance { get; private set; }
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_0 = ___value0;
		((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___U3CinstanceU3Ek__BackingField_4 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___U3CinstanceU3Ek__BackingField_4), (void*)L_0);
		return;
	}
}
// System.Void MondayOFF.EventsManager::PrepareManager()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_PrepareManager_mB42C560C31E859FF48C3D2768079E2DE0CD87A51 (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// isReady = true;
		((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___isReady_5 = (bool)1;
		// if (instance != null) {
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_0;
		L_0 = EventsManager_get_instance_m3E60FC8A286B2BCC6B3D835773D82FE5144CAAEC_inline(NULL);
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_1)
		{
			goto IL_001d;
		}
	}
	{
		// instance.Initialize();
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_2;
		L_2 = EventsManager_get_instance_m3E60FC8A286B2BCC6B3D835773D82FE5144CAAEC_inline(NULL);
		NullCheck(L_2);
		EventsManager_Initialize_m7426CDACF31E34A413E770B463D60D7D512F1066(L_2, NULL);
	}

IL_001d:
	{
		// }
		return;
	}
}
// System.Void MondayOFF.EventsManager::TryStage(System.Int32,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_TryStage_m164405E8E6D786C485FE7D07439843D047243C47 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, int32_t ___stageNum0, String_t* ___stageName1, const RuntimeMethod* method) 
{
	{
		// public void TryStage(int stageNum, string stageName = "Stage") => _eventTracker.TryStage(stageNum, stageName);
		EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* L_0 = __this->____eventTracker_6;
		int32_t L_1 = ___stageNum0;
		String_t* L_2 = ___stageName1;
		NullCheck(L_0);
		EventTracker_TryStage_m500214745B8030745E7C66E9A9F89D8CB5133B80(L_0, L_1, L_2, NULL);
		return;
	}
}
// System.Void MondayOFF.EventsManager::ClearStage(System.Int32,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_ClearStage_m2E99BC27D60000A87AEDB5B480945854084BDD08 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, int32_t ___stageNum0, String_t* ___stageName1, const RuntimeMethod* method) 
{
	{
		// public void ClearStage(int stageNum, string stageName = "Stage") => _eventTracker.ClearStage(stageNum, stageName);
		EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* L_0 = __this->____eventTracker_6;
		int32_t L_1 = ___stageNum0;
		String_t* L_2 = ___stageName1;
		NullCheck(L_0);
		EventTracker_ClearStage_m05934CC22F3A84FE3C280F117F1142548037C52F(L_0, L_1, L_2, NULL);
		return;
	}
}
// System.Void MondayOFF.EventsManager::LogCustomEvent(System.String,System.Collections.Generic.Dictionary`2<System.String,System.String>)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_LogCustomEvent_m5CCB7CE5D6BA3BAD5E8F1585900036F6BF67A009 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, String_t* ___eventName0, Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* ___parameters1, const RuntimeMethod* method) 
{
	{
		// public void LogCustomEvent(string eventName, Dictionary<string, string> parameters = null) => _eventTracker.LogCustomEvent(eventName, parameters);
		EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* L_0 = __this->____eventTracker_6;
		String_t* L_1 = ___eventName0;
		Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* L_2 = ___parameters1;
		NullCheck(L_0);
		EventTracker_LogCustomEvent_mA053846EC18FDC61194EE3743301F75D03BBC4B5(L_0, L_1, L_2, NULL);
		return;
	}
}
// System.Void MondayOFF.EventsManager::Initialize()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_Initialize_m7426CDACF31E34A413E770B463D60D7D512F1066 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_OnFBInitialization_m35FF9E67F1085ADBAF3AC798B87E3BC6C68DF182_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_0_0_0_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_Instantiate_TisGameObject_t76FEDD663AB33C991A9C9A23129337651094216F_mC898F7E3D9541F17BD8B79579FDD431C0651E12D_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Type_t_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral3791A36F192366DEC92F1507B19B970756790BFD);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral69FBC7A041E2A8D2BB53C20F3EBB5DA1C681DF54);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral977A71115E05B54B449539D8B6701AE4DAD2B1BE);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralD8107229F68852E5B5F556B7F32DFA9FC2F4D39A);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralEE7DBD797937B55C14A6A6F818EEC5F123164873);
		s_Il2CppMethodInitialized = true;
	}
	Type_t* V_0 = NULL;
	il2cpp::utils::ExceptionSupportStack<RuntimeObject*, 1> __active_exceptions;
	{
		// if (!FB.IsInitialized) {
		il2cpp_codegen_runtime_class_init_inline(FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		bool L_0;
		L_0 = FB_get_IsInitialized_m32FCC2514C3E85081D3CD60E1A904D0B3A0CD0D6(NULL);
		if (L_0)
		{
			goto IL_002d;
		}
	}
	try
	{// begin try (depth: 1)
		// FB.Init(OnFBInitialization);
		InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F* L_1 = (InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F*)il2cpp_codegen_object_new(InitDelegate_t880BF96D9E733404D1E36BF894DDA83C1B9A1A9F_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		InitDelegate__ctor_m3564BD9683A0BAB69B7B0CCB1F32F0688C9FBAB7(L_1, __this, (intptr_t)((void*)EventsManager_OnFBInitialization_m35FF9E67F1085ADBAF3AC798B87E3BC6C68DF182_RuntimeMethod_var), NULL);
		il2cpp_codegen_runtime_class_init_inline(FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		FB_Init_mD4D2B39880BE40A781A7C28C0BA3B95FF24F3068(L_1, (HideUnityDelegate_t73424171C1A0762619208C0090DD84BA51FF9BCE*)NULL, (String_t*)NULL, NULL);
		// } catch (System.Exception e) {
		goto IL_0032;
	}// end try (depth: 1)
	catch(Il2CppExceptionWrapper& e)
	{
		if(il2cpp_codegen_class_is_assignable_from (((RuntimeClass*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&Exception_t_il2cpp_TypeInfo_var)), il2cpp_codegen_object_class(e.ex)))
		{
			IL2CPP_PUSH_ACTIVE_EXCEPTION(e.ex);
			goto CATCH_001c;
		}
		throw e;
	}

CATCH_001c:
	{// begin catch(System.Exception)
		// Debug.LogException(e);
		il2cpp_codegen_runtime_class_init_inline(((RuntimeClass*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var)));
		Debug_LogException_m82E44FEC6B03BC34AFC2CAF6583051570C60CB9E(((Exception_t*)IL2CPP_GET_ACTIVE_EXCEPTION(Exception_t*)), NULL);
		// Debug.LogWarning("Failed to initialize Facebook SDK");
		Debug_LogWarning_mEF15C6B17CE4E1FA7E379CDB82CE40FCD89A3F28(((String_t*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&_stringLiteral25A376D87246A9C5C448D7FCB6B29265050C1F10)), NULL);
		// }
		IL2CPP_POP_ACTIVE_EXCEPTION();
		goto IL_0032;
	}// end catch (depth: 1)

IL_002d:
	{
		// FB.ActivateApp();
		il2cpp_codegen_runtime_class_init_inline(FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		FB_ActivateApp_mB8DF4095E59F390721C5DF6E6F9EED3A329E9E44(NULL);
	}

IL_0032:
	{
		// _eventTracker.initialize();
		EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* L_2 = __this->____eventTracker_6;
		NullCheck(L_2);
		EventTracker_initialize_mCE06065B2CC0CD75F27D7571BA2D682833456401(L_2, NULL);
		// var unityAssembly = System.Reflection.Assembly.Load("Assembly-CSharp");
		Assembly_t* L_3;
		L_3 = Assembly_Load_m718E55A40D92C7BBE26812A9A7998BDF166C0BD2(_stringLiteral977A71115E05B54B449539D8B6701AE4DAD2B1BE, NULL);
		// var gaType = unityAssembly.GetType("GameAnalyticsSDK.GameAnalytics");
		NullCheck(L_3);
		Type_t* L_4;
		L_4 = VirtualFuncInvoker1< Type_t*, String_t* >::Invoke(16 /* System.Type System.Reflection.Assembly::GetType(System.String) */, L_3, _stringLiteral3791A36F192366DEC92F1507B19B970756790BFD);
		V_0 = L_4;
		// if (gaType == null) {
		Type_t* L_5 = V_0;
		il2cpp_codegen_runtime_class_init_inline(Type_t_il2cpp_TypeInfo_var);
		bool L_6;
		L_6 = Type_op_Equality_mE6EDDDC900C50B222CF32BCD2AD027595F2D74B7(L_5, (Type_t*)NULL, NULL);
		if (!L_6)
		{
			goto IL_0066;
		}
	}
	{
		// Debug.LogWarning("GameAnalytics not integrated");
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_LogWarning_mEF15C6B17CE4E1FA7E379CDB82CE40FCD89A3F28(_stringLiteralD8107229F68852E5B5F556B7F32DFA9FC2F4D39A, NULL);
		// return;
		return;
	}

IL_0066:
	{
		// if (GameObject.FindObjectOfType(gaType) == null) {
		Type_t* L_7 = V_0;
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* L_8;
		L_8 = Object_FindObjectOfType_mF9A94A2059CE512E485297DDBBA51C02B451E41F(L_7, NULL);
		bool L_9;
		L_9 = Object_op_Equality_mD3DB0D72CE0250C84033DC2A90AEF9D59896E536(L_8, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_9)
		{
			goto IL_009c;
		}
	}
	{
		// var item = Resources.Load("GameAnalytics", typeof(GameObject)) as GameObject;
		RuntimeTypeHandle_t332A452B8B6179E4469B69525D0FE82A88030F7B L_10 = { reinterpret_cast<intptr_t> (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_0_0_0_var) };
		il2cpp_codegen_runtime_class_init_inline(Type_t_il2cpp_TypeInfo_var);
		Type_t* L_11;
		L_11 = Type_GetTypeFromHandle_m2570A2A5B32A5E9D9F0F38B37459DA18736C823E(L_10, NULL);
		Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* L_12;
		L_12 = Resources_Load_mDCC8EBD3196F1CE1B86E74416AD90CF86320C401(_stringLiteralEE7DBD797937B55C14A6A6F818EEC5F123164873, L_11, NULL);
		// GameObject go = GameObject.Instantiate(item);
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_13;
		L_13 = Object_Instantiate_TisGameObject_t76FEDD663AB33C991A9C9A23129337651094216F_mC898F7E3D9541F17BD8B79579FDD431C0651E12D(((GameObject_t76FEDD663AB33C991A9C9A23129337651094216F*)IsInstSealed((RuntimeObject*)L_12, GameObject_t76FEDD663AB33C991A9C9A23129337651094216F_il2cpp_TypeInfo_var)), Object_Instantiate_TisGameObject_t76FEDD663AB33C991A9C9A23129337651094216F_mC898F7E3D9541F17BD8B79579FDD431C0651E12D_RuntimeMethod_var);
		// go.name = "GameAnalytics";
		NullCheck(L_13);
		Object_set_name_mC79E6DC8FFD72479C90F0C4CC7F42A0FEAF5AE47(L_13, _stringLiteralEE7DBD797937B55C14A6A6F818EEC5F123164873, NULL);
	}

IL_009c:
	{
		// var initializeMethodInfo = gaType.GetMethod("Initialize");
		Type_t* L_14 = V_0;
		NullCheck(L_14);
		MethodInfo_t* L_15;
		L_15 = Type_GetMethod_m66AD062187F19497DBCA900823B0C268322DC231(L_14, _stringLiteral69FBC7A041E2A8D2BB53C20F3EBB5DA1C681DF54, NULL);
		// initializeMethodInfo.Invoke(null, null);
		NullCheck(L_15);
		RuntimeObject* L_16;
		L_16 = MethodBase_Invoke_mEEF3218648F111A8C338001A7804091A0747C826(L_15, NULL, (ObjectU5BU5D_t8061030B0A12A55D5AD8652A20C922FE99450918*)NULL, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.EventsManager::OnFBInitialization()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_OnFBInitialization_m35FF9E67F1085ADBAF3AC798B87E3BC6C68DF182 (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral1A44309A41F6971AEC9BFEA88D6C3F474EBE4444);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (FB.IsInitialized) {
		il2cpp_codegen_runtime_class_init_inline(FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		bool L_0;
		L_0 = FB_get_IsInitialized_m32FCC2514C3E85081D3CD60E1A904D0B3A0CD0D6(NULL);
		if (!L_0)
		{
			goto IL_000d;
		}
	}
	{
		// FB.ActivateApp();
		il2cpp_codegen_runtime_class_init_inline(FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		FB_ActivateApp_mB8DF4095E59F390721C5DF6E6F9EED3A329E9E44(NULL);
		return;
	}

IL_000d:
	{
		// Debug.LogWarning("Failed to Initialize the Facebook SDK");
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_LogWarning_mEF15C6B17CE4E1FA7E379CDB82CE40FCD89A3F28(_stringLiteral1A44309A41F6971AEC9BFEA88D6C3F474EBE4444, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.EventsManager::OnApplicationPause(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_OnApplicationPause_m5E6BDEAF07ADD54F90F0F1D58C33EEAAE9A0B13E (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, bool ___pauseStatus0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (!pauseStatus) {
		bool L_0 = ___pauseStatus0;
		if (L_0)
		{
			goto IL_0010;
		}
	}
	{
		// if (FB.IsInitialized) {
		il2cpp_codegen_runtime_class_init_inline(FB_tD6AF917A642BEC6920761C8E4AD4013414829013_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = FB_get_IsInitialized_m32FCC2514C3E85081D3CD60E1A904D0B3A0CD0D6(NULL);
		if (!L_1)
		{
			goto IL_0010;
		}
	}
	{
		// OnFBInitialization();
		EventsManager_OnFBInitialization_m35FF9E67F1085ADBAF3AC798B87E3BC6C68DF182(__this, NULL);
	}

IL_0010:
	{
		// }
		return;
	}
}
// System.Void MondayOFF.EventsManager::Awake()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager_Awake_mDC393CAC85DD0B0C301F8FD10B977E2E314B01AA (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (instance != null) {
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_0;
		L_0 = EventsManager_get_instance_m3E60FC8A286B2BCC6B3D835773D82FE5144CAAEC_inline(NULL);
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_1)
		{
			goto IL_0019;
		}
	}
	{
		// DestroyImmediate(this.gameObject);
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_2;
		L_2 = Component_get_gameObject_m57AEFBB14DB39EC476F740BA000E170355DE691B(__this, NULL);
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		Object_DestroyImmediate_m8249CABCDF344BE3A67EE765122EBB415DC2BC57(L_2, NULL);
		// return;
		return;
	}

IL_0019:
	{
		// instance = this;
		EventsManager_set_instance_m3C19C1AC7DE0C46DB79F3A7737D9700243DCDC58_inline(__this, NULL);
		// if (isReady) {
		bool L_3 = ((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___isReady_5;
		if (!L_3)
		{
			goto IL_002c;
		}
	}
	{
		// Initialize();
		EventsManager_Initialize_m7426CDACF31E34A413E770B463D60D7D512F1066(__this, NULL);
	}

IL_002c:
	{
		// }
		return;
	}
}
// System.Void MondayOFF.EventsManager::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventsManager__ctor_m5DD98519E4517B6B9C64A9A2A1F578EB9EB92BCD (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// EventTracker _eventTracker = new EventTracker();
		EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* L_0 = (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF*)il2cpp_codegen_object_new(EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		EventTracker__ctor_mD6920EEC2835F3E2517F0DEFC95B619DDFCF374F(L_0, NULL);
		__this->____eventTracker_6 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&__this->____eventTracker_6), (void*)L_0);
		MonoBehaviour__ctor_m592DB0105CA0BC97AA1C5F4AD27B12D68A3B7C1E(__this, NULL);
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
// System.Void MondayOFF.EventTracker::initialize()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_initialize_mCE06065B2CC0CD75F27D7571BA2D682833456401 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventTracker_U3CinitializeU3Eb__3_0_m62A7CB6C18DB2EE7E9745302FFD3C9BE89FAA801_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Task_1_ContinueWith_mAB52D6D57000543C9DD78F0D45BD7B66F819A0DD_RuntimeMethod_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// _isFirebaseReady = false;
		__this->____isFirebaseReady_1 = (bool)0;
		// Firebase.FirebaseApp.CheckAndFixDependenciesAsync().ContinueWith(task => {
		//     var dependencyStatus = task.Result;
		//     if (dependencyStatus == Firebase.DependencyStatus.Available) {
		//         // Create and hold a reference to your FirebaseApp,
		//         // where app is a Firebase.FirebaseApp property of your application class.
		//         _app = Firebase.FirebaseApp.DefaultInstance;
		// 
		//         // Set a flag here to indicate whether Firebase is ready to use by your app.
		//         OnFirebaseInitialized();
		// 
		//     } else {
		//         UnityEngine.Debug.LogError(System.String.Format(
		//           "Could not resolve all Firebase dependencies: {0}", dependencyStatus));
		//         // Firebase Unity SDK is NOT safe to use here.
		//     }
		// });
		il2cpp_codegen_runtime_class_init_inline(FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25_il2cpp_TypeInfo_var);
		Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF* L_0;
		L_0 = FirebaseApp_CheckAndFixDependenciesAsync_mE6FF44FA1DDA2E2504A45F1F12696D9D089D7674(NULL);
		Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC* L_1 = (Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC*)il2cpp_codegen_object_new(Action_1_t72552EB3CFD9D41493135164276F7EE71F1132FC_il2cpp_TypeInfo_var);
		NullCheck(L_1);
		Action_1__ctor_m4F6B8318AD92B94ABD9C753FFD7CEE0687417DAC(L_1, __this, (intptr_t)((void*)EventTracker_U3CinitializeU3Eb__3_0_m62A7CB6C18DB2EE7E9745302FFD3C9BE89FAA801_RuntimeMethod_var), NULL);
		NullCheck(L_0);
		Task_t751C4CC3ECD055BABA8A0B6A5DFBB4283DCA8572* L_2;
		L_2 = Task_1_ContinueWith_mAB52D6D57000543C9DD78F0D45BD7B66F819A0DD(L_0, L_1, Task_1_ContinueWith_mAB52D6D57000543C9DD78F0D45BD7B66F819A0DD_RuntimeMethod_var);
		// }
		return;
	}
}
// System.Void MondayOFF.EventTracker::TryStage(System.Int32,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_TryStage_m500214745B8030745E7C66E9A9F89D8CB5133B80 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, int32_t ___stageNum0, String_t* ___stageName1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral35D96E97BC6FA789F647B02B313E3BF00060EF8B);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral8082813B6067EF51A56748DD6ED3550F1DB14B92);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (!_isFirebaseReady) { return; }
		bool L_0 = __this->____isFirebaseReady_1;
		if (L_0)
		{
			goto IL_0009;
		}
	}
	{
		// if (!_isFirebaseReady) { return; }
		return;
	}

IL_0009:
	{
		// FirebaseAnalytics.LogEvent("Try",
		//     new Parameter(stageName, $"{stageName} {stageNum:000}")
		// );
		ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_1 = (ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA*)(ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA*)SZArrayNew(ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var, (uint32_t)1);
		ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_2 = L_1;
		String_t* L_3 = ___stageName1;
		String_t* L_4 = ___stageName1;
		int32_t L_5 = ___stageNum0;
		int32_t L_6 = L_5;
		RuntimeObject* L_7 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_6);
		String_t* L_8;
		L_8 = String_Format_m9499958F4B0BB6089C75760AB647AB3CA4D55806(_stringLiteral35D96E97BC6FA789F647B02B313E3BF00060EF8B, L_4, L_7, NULL);
		Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* L_9 = (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E*)il2cpp_codegen_object_new(Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var);
		NullCheck(L_9);
		Parameter__ctor_m71889DACE276FEFBBA79A6FD792C9B3D70107E7A(L_9, L_3, L_8, NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_9);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E*)L_9);
		il2cpp_codegen_runtime_class_init_inline(FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		FirebaseAnalytics_LogEvent_m2C4013480B02EAFF6BB2F958505B5A7637CCAF89(_stringLiteral8082813B6067EF51A56748DD6ED3550F1DB14B92, L_2, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.EventTracker::ClearStage(System.Int32,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_ClearStage_m05934CC22F3A84FE3C280F117F1142548037C52F (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, int32_t ___stageNum0, String_t* ___stageName1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral1D8BE65F4D775FA68F7EA356CD9EF08F2666FC54);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral35D96E97BC6FA789F647B02B313E3BF00060EF8B);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (!_isFirebaseReady) { return; }
		bool L_0 = __this->____isFirebaseReady_1;
		if (L_0)
		{
			goto IL_0009;
		}
	}
	{
		// if (!_isFirebaseReady) { return; }
		return;
	}

IL_0009:
	{
		// FirebaseAnalytics.LogEvent("Clear",
		//     new Parameter(stageName, $"{stageName} {stageNum:000}")
		// );
		ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_1 = (ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA*)(ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA*)SZArrayNew(ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var, (uint32_t)1);
		ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_2 = L_1;
		String_t* L_3 = ___stageName1;
		String_t* L_4 = ___stageName1;
		int32_t L_5 = ___stageNum0;
		int32_t L_6 = L_5;
		RuntimeObject* L_7 = Box(Int32_t680FF22E76F6EFAD4375103CBBFFA0421349384C_il2cpp_TypeInfo_var, &L_6);
		String_t* L_8;
		L_8 = String_Format_m9499958F4B0BB6089C75760AB647AB3CA4D55806(_stringLiteral35D96E97BC6FA789F647B02B313E3BF00060EF8B, L_4, L_7, NULL);
		Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* L_9 = (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E*)il2cpp_codegen_object_new(Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var);
		NullCheck(L_9);
		Parameter__ctor_m71889DACE276FEFBBA79A6FD792C9B3D70107E7A(L_9, L_3, L_8, NULL);
		NullCheck(L_2);
		ArrayElementTypeCheck (L_2, L_9);
		(L_2)->SetAt(static_cast<il2cpp_array_size_t>(0), (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E*)L_9);
		il2cpp_codegen_runtime_class_init_inline(FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		FirebaseAnalytics_LogEvent_m2C4013480B02EAFF6BB2F958505B5A7637CCAF89(_stringLiteral1D8BE65F4D775FA68F7EA356CD9EF08F2666FC54, L_2, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.EventTracker::LogCustomEvent(System.String,System.Collections.Generic.Dictionary`2<System.String,System.String>)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_LogCustomEvent_mA053846EC18FDC61194EE3743301F75D03BBC4B5 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, String_t* ___eventName0, Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* ___parameters1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_GetEnumerator_m46EC45F42CA2279D83568CD3F216AAABA8E749F6_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_get_Count_m65C62C77C355CFCE2CC0ED6D817637E1909E0843_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Enumerator_Dispose_m068DDFF5CAFBB15C8A0602DEADA7F10C5BB7ADCD_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Enumerator_MoveNext_mA93491D9B55547D066053F3BC0A69C635F877438_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Enumerator_get_Current_m49070E88C2E34AB46E6292A3FB1C227576B8506E_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&KeyValuePair_2_get_Key_m654BCCAE2F20CB11D8E8C2D2C886A0C8A13EB1C4_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&KeyValuePair_2_get_Value_m7345512A32CB4DCAA0643050B18DC8DCD71B927A_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* V_0 = NULL;
	int32_t V_1 = 0;
	Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562 V_2;
	memset((&V_2), 0, sizeof(V_2));
	KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A V_3;
	memset((&V_3), 0, sizeof(V_3));
	{
		// if (!_isFirebaseReady) { return; }
		bool L_0 = __this->____isFirebaseReady_1;
		if (L_0)
		{
			goto IL_0009;
		}
	}
	{
		// if (!_isFirebaseReady) { return; }
		return;
	}

IL_0009:
	{
		// if (parameters == null) {
		Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* L_1 = ___parameters1;
		if (L_1)
		{
			goto IL_0013;
		}
	}
	{
		// FirebaseAnalytics.LogEvent(eventName);
		String_t* L_2 = ___eventName0;
		il2cpp_codegen_runtime_class_init_inline(FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		FirebaseAnalytics_LogEvent_m0681C82A83329E03982FBB4E432A81B086AF382A(L_2, NULL);
		return;
	}

IL_0013:
	{
		// var eventParams = new Parameter[parameters.Count];
		Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* L_3 = ___parameters1;
		NullCheck(L_3);
		int32_t L_4;
		L_4 = Dictionary_2_get_Count_m65C62C77C355CFCE2CC0ED6D817637E1909E0843(L_3, Dictionary_2_get_Count_m65C62C77C355CFCE2CC0ED6D817637E1909E0843_RuntimeMethod_var);
		ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_5 = (ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA*)(ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA*)SZArrayNew(ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA_il2cpp_TypeInfo_var, (uint32_t)L_4);
		V_0 = L_5;
		// int i = 0;
		V_1 = 0;
		// foreach (var item in parameters) {
		Dictionary_2_t46B2DB028096FA2B828359E52F37F3105A83AD83* L_6 = ___parameters1;
		NullCheck(L_6);
		Enumerator_t173E7BE1F35CA448C7E0EE77345C9E0EC0206562 L_7;
		L_7 = Dictionary_2_GetEnumerator_m46EC45F42CA2279D83568CD3F216AAABA8E749F6(L_6, Dictionary_2_GetEnumerator_m46EC45F42CA2279D83568CD3F216AAABA8E749F6_RuntimeMethod_var);
		V_2 = L_7;
	}
	{
		auto __finallyBlock = il2cpp::utils::Finally([&]
		{

FINALLY_0057:
			{// begin finally (depth: 1)
				Enumerator_Dispose_m068DDFF5CAFBB15C8A0602DEADA7F10C5BB7ADCD((&V_2), Enumerator_Dispose_m068DDFF5CAFBB15C8A0602DEADA7F10C5BB7ADCD_RuntimeMethod_var);
				return;
			}// end finally (depth: 1)
		});
		try
		{// begin try (depth: 1)
			{
				goto IL_004c_1;
			}

IL_002a_1:
			{
				// foreach (var item in parameters) {
				KeyValuePair_2_t47AB280304B50F542FD7E14F25DB2C374AEDD80A L_8;
				L_8 = Enumerator_get_Current_m49070E88C2E34AB46E6292A3FB1C227576B8506E_inline((&V_2), Enumerator_get_Current_m49070E88C2E34AB46E6292A3FB1C227576B8506E_RuntimeMethod_var);
				V_3 = L_8;
				// eventParams[i++] = new Parameter(item.Key, item.Value);
				ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_9 = V_0;
				int32_t L_10 = V_1;
				int32_t L_11 = L_10;
				V_1 = ((int32_t)il2cpp_codegen_add(L_11, 1));
				String_t* L_12;
				L_12 = KeyValuePair_2_get_Key_m654BCCAE2F20CB11D8E8C2D2C886A0C8A13EB1C4_inline((&V_3), KeyValuePair_2_get_Key_m654BCCAE2F20CB11D8E8C2D2C886A0C8A13EB1C4_RuntimeMethod_var);
				String_t* L_13;
				L_13 = KeyValuePair_2_get_Value_m7345512A32CB4DCAA0643050B18DC8DCD71B927A_inline((&V_3), KeyValuePair_2_get_Value_m7345512A32CB4DCAA0643050B18DC8DCD71B927A_RuntimeMethod_var);
				Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E* L_14 = (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E*)il2cpp_codegen_object_new(Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E_il2cpp_TypeInfo_var);
				NullCheck(L_14);
				Parameter__ctor_m71889DACE276FEFBBA79A6FD792C9B3D70107E7A(L_14, L_12, L_13, NULL);
				NullCheck(L_9);
				ArrayElementTypeCheck (L_9, L_14);
				(L_9)->SetAt(static_cast<il2cpp_array_size_t>(L_11), (Parameter_t53E3C0E61EE5B09E97ECA94713B1B8EFF293E85E*)L_14);
			}

IL_004c_1:
			{
				// foreach (var item in parameters) {
				bool L_15;
				L_15 = Enumerator_MoveNext_mA93491D9B55547D066053F3BC0A69C635F877438((&V_2), Enumerator_MoveNext_mA93491D9B55547D066053F3BC0A69C635F877438_RuntimeMethod_var);
				if (L_15)
				{
					goto IL_002a_1;
				}
			}
			{
				goto IL_0065;
			}
		}// end try (depth: 1)
		catch(Il2CppExceptionWrapper& e)
		{
			__finallyBlock.StoreException(e.ex);
		}
	}

IL_0065:
	{
		// FirebaseAnalytics.LogEvent(eventName, eventParams);
		String_t* L_16 = ___eventName0;
		ParameterU5BU5D_tF777A69F0CD968F78075EB10F2E1FE58C87DD0DA* L_17 = V_0;
		il2cpp_codegen_runtime_class_init_inline(FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		FirebaseAnalytics_LogEvent_m2C4013480B02EAFF6BB2F958505B5A7637CCAF89(L_16, L_17, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.EventTracker::OnFirebaseInitialized()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_OnFirebaseInitialized_m2BEF67FA97E19F01D6CD0A1B05609E6CCA161BA8 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&String_t_0_0_0_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Type_t_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral00722E1BEC710131BFDA7B556A35E84DC9512404);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral1EDF4B668798016D514CA452D507AC33D2CF5C85);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral32667E9747D6E0A33BE197C2AC709961D4658E96);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4B53D9E0776C9D811F58C58875E07F500939E574);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral6BCD5C74D3C2E1E8F2BCAEAB82FC1B4547EB82EC);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralA75ADB8D3EF555A267CFBA49BCC94E6A12ACB3C6);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralC619B0B50E7056F33C03335DF7D0682986F150CE);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteralECF21D997D252AD36AF7989BA2535DBCF0DCBF1B);
		s_Il2CppMethodInitialized = true;
	}
	Assembly_t* V_0 = NULL;
	EventInfo_t* V_1 = NULL;
	Delegate_t* V_2 = NULL;
	il2cpp::utils::ExceptionSupportStack<RuntimeObject*, 1> __active_exceptions;
	{
		// _isFirebaseReady = true;
		__this->____isFirebaseReady_1 = (bool)1;
	}
	try
	{// begin try (depth: 1)
		{
			// var maxAssembly = System.Reflection.Assembly.Load("MaxSdk.Scripts");
			Assembly_t* L_0;
			L_0 = Assembly_Load_m718E55A40D92C7BBE26812A9A7998BDF166C0BD2(_stringLiteralC619B0B50E7056F33C03335DF7D0682986F150CE, NULL);
			V_0 = L_0;
			// if (maxAssembly != null) {
			Assembly_t* L_1 = V_0;
			bool L_2;
			L_2 = Assembly_op_Inequality_m62E003A7871F22BC6129B2D00B4C243D995C21CA(L_1, (Assembly_t*)NULL, NULL);
			if (!L_2)
			{
				goto IL_00cb_1;
			}
		}
		{
			// adInfoType = maxAssembly.GetType("MaxSdkBase+AdInfo");
			Assembly_t* L_3 = V_0;
			NullCheck(L_3);
			Type_t* L_4;
			L_4 = VirtualFuncInvoker1< Type_t*, String_t* >::Invoke(16 /* System.Type System.Reflection.Assembly::GetType(System.String) */, L_3, _stringLiteral00722E1BEC710131BFDA7B556A35E84DC9512404);
			__this->___adInfoType_0 = L_4;
			Il2CppCodeGenWriteBarrier((void**)(&__this->___adInfoType_0), (void*)L_4);
			// var trackAdRevenueMi = this.GetType().GetMethod(nameof(TrackAdRevenue), System.Reflection.BindingFlags.Instance | System.Reflection.BindingFlags.NonPublic).MakeGenericMethod(typeof(string), adInfoType);
			Type_t* L_5;
			L_5 = Object_GetType_mE10A8FC1E57F3DF29972CCBC026C2DC3942263B3(__this, NULL);
			NullCheck(L_5);
			MethodInfo_t* L_6;
			L_6 = Type_GetMethod_m9E66B5053F150537A74C490C1DA5174A7875189D(L_5, _stringLiteral6BCD5C74D3C2E1E8F2BCAEAB82FC1B4547EB82EC, ((int32_t)36), NULL);
			TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB* L_7 = (TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB*)(TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB*)SZArrayNew(TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB_il2cpp_TypeInfo_var, (uint32_t)2);
			TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB* L_8 = L_7;
			RuntimeTypeHandle_t332A452B8B6179E4469B69525D0FE82A88030F7B L_9 = { reinterpret_cast<intptr_t> (String_t_0_0_0_var) };
			il2cpp_codegen_runtime_class_init_inline(Type_t_il2cpp_TypeInfo_var);
			Type_t* L_10;
			L_10 = Type_GetTypeFromHandle_m2570A2A5B32A5E9D9F0F38B37459DA18736C823E(L_9, NULL);
			NullCheck(L_8);
			ArrayElementTypeCheck (L_8, L_10);
			(L_8)->SetAt(static_cast<il2cpp_array_size_t>(0), (Type_t*)L_10);
			TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB* L_11 = L_8;
			Type_t* L_12 = __this->___adInfoType_0;
			NullCheck(L_11);
			ArrayElementTypeCheck (L_11, L_12);
			(L_11)->SetAt(static_cast<il2cpp_array_size_t>(1), (Type_t*)L_12);
			NullCheck(L_6);
			MethodInfo_t* L_13;
			L_13 = VirtualFuncInvoker1< MethodInfo_t*, TypeU5BU5D_t97234E1129B564EB38B8D85CAC2AD8B5B9522FFB* >::Invoke(40 /* System.Reflection.MethodInfo System.Reflection.MethodInfo::MakeGenericMethod(System.Type[]) */, L_6, L_11);
			// var interstitialCallbackType = maxAssembly.GetType("MaxSdkCallbacks+Interstitial");
			Assembly_t* L_14 = V_0;
			NullCheck(L_14);
			Type_t* L_15;
			L_15 = VirtualFuncInvoker1< Type_t*, String_t* >::Invoke(16 /* System.Type System.Reflection.Assembly::GetType(System.String) */, L_14, _stringLiteral1EDF4B668798016D514CA452D507AC33D2CF5C85);
			// var onAdRevenuePaidEventProperty = interstitialCallbackType.GetEvent("OnAdRevenuePaidEvent");
			NullCheck(L_15);
			EventInfo_t* L_16;
			L_16 = Type_GetEvent_mB4D71EF747D967D102846CB4FADA5DA0291E6A83(L_15, _stringLiteralA75ADB8D3EF555A267CFBA49BCC94E6A12ACB3C6, NULL);
			V_1 = L_16;
			// var trackAdRevenueDelegate = trackAdRevenueMi.CreateDelegate(onAdRevenuePaidEventProperty.EventHandlerType, this);
			EventInfo_t* L_17 = V_1;
			NullCheck(L_17);
			Type_t* L_18;
			L_18 = VirtualFuncInvoker0< Type_t* >::Invoke(20 /* System.Type System.Reflection.EventInfo::get_EventHandlerType() */, L_17);
			NullCheck(L_13);
			Delegate_t* L_19;
			L_19 = VirtualFuncInvoker2< Delegate_t*, Type_t*, RuntimeObject* >::Invoke(42 /* System.Delegate System.Reflection.MethodInfo::CreateDelegate(System.Type,System.Object) */, L_13, L_18, __this);
			V_2 = L_19;
			// onAdRevenuePaidEventProperty.AddEventHandler(this, trackAdRevenueDelegate);
			EventInfo_t* L_20 = V_1;
			Delegate_t* L_21 = V_2;
			NullCheck(L_20);
			VirtualActionInvoker2< RuntimeObject*, Delegate_t* >::Invoke(22 /* System.Void System.Reflection.EventInfo::AddEventHandler(System.Object,System.Delegate) */, L_20, __this, L_21);
			// var rewardedCallbackType = maxAssembly.GetType("MaxSdkCallbacks+Rewarded");
			Assembly_t* L_22 = V_0;
			NullCheck(L_22);
			Type_t* L_23;
			L_23 = VirtualFuncInvoker1< Type_t*, String_t* >::Invoke(16 /* System.Type System.Reflection.Assembly::GetType(System.String) */, L_22, _stringLiteralECF21D997D252AD36AF7989BA2535DBCF0DCBF1B);
			// onAdRevenuePaidEventProperty = rewardedCallbackType.GetEvent("OnAdRevenuePaidEvent");
			NullCheck(L_23);
			EventInfo_t* L_24;
			L_24 = Type_GetEvent_mB4D71EF747D967D102846CB4FADA5DA0291E6A83(L_23, _stringLiteralA75ADB8D3EF555A267CFBA49BCC94E6A12ACB3C6, NULL);
			V_1 = L_24;
			// onAdRevenuePaidEventProperty.AddEventHandler(this, trackAdRevenueDelegate);
			EventInfo_t* L_25 = V_1;
			Delegate_t* L_26 = V_2;
			NullCheck(L_25);
			VirtualActionInvoker2< RuntimeObject*, Delegate_t* >::Invoke(22 /* System.Void System.Reflection.EventInfo::AddEventHandler(System.Object,System.Delegate) */, L_25, __this, L_26);
			// var bannerCallbackType = maxAssembly.GetType("MaxSdkCallbacks+Banner");
			Assembly_t* L_27 = V_0;
			NullCheck(L_27);
			Type_t* L_28;
			L_28 = VirtualFuncInvoker1< Type_t*, String_t* >::Invoke(16 /* System.Type System.Reflection.Assembly::GetType(System.String) */, L_27, _stringLiteral32667E9747D6E0A33BE197C2AC709961D4658E96);
			// onAdRevenuePaidEventProperty = bannerCallbackType.GetEvent("OnAdRevenuePaidEvent");
			NullCheck(L_28);
			EventInfo_t* L_29;
			L_29 = Type_GetEvent_mB4D71EF747D967D102846CB4FADA5DA0291E6A83(L_28, _stringLiteralA75ADB8D3EF555A267CFBA49BCC94E6A12ACB3C6, NULL);
			V_1 = L_29;
			// onAdRevenuePaidEventProperty.AddEventHandler(this, trackAdRevenueDelegate);
			EventInfo_t* L_30 = V_1;
			Delegate_t* L_31 = V_2;
			NullCheck(L_30);
			VirtualActionInvoker2< RuntimeObject*, Delegate_t* >::Invoke(22 /* System.Void System.Reflection.EventInfo::AddEventHandler(System.Object,System.Delegate) */, L_30, __this, L_31);
			goto IL_00d5_1;
		}

IL_00cb_1:
		{
			// Debug.LogWarning("Max SDK not integrated");
			il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
			Debug_LogWarning_mEF15C6B17CE4E1FA7E379CDB82CE40FCD89A3F28(_stringLiteral4B53D9E0776C9D811F58C58875E07F500939E574, NULL);
		}

IL_00d5_1:
		{
			// } catch (System.Exception e) {
			goto IL_00de;
		}
	}// end try (depth: 1)
	catch(Il2CppExceptionWrapper& e)
	{
		if(il2cpp_codegen_class_is_assignable_from (((RuntimeClass*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&Exception_t_il2cpp_TypeInfo_var)), il2cpp_codegen_object_class(e.ex)))
		{
			IL2CPP_PUSH_ACTIVE_EXCEPTION(e.ex);
			goto CATCH_00d7;
		}
		throw e;
	}

CATCH_00d7:
	{// begin catch(System.Exception)
		// Debug.LogException(e);
		il2cpp_codegen_runtime_class_init_inline(((RuntimeClass*)il2cpp_codegen_initialize_runtime_metadata_inline((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var)));
		Debug_LogException_m82E44FEC6B03BC34AFC2CAF6583051570C60CB9E(((Exception_t*)IL2CPP_GET_ACTIVE_EXCEPTION(Exception_t*)), NULL);
		// }
		IL2CPP_POP_ACTIVE_EXCEPTION();
		goto IL_00de;
	}// end catch (depth: 1)

IL_00de:
	{
		// FirebaseAnalytics.LogEvent(FirebaseAnalytics.EventAppOpen);
		il2cpp_codegen_runtime_class_init_inline(FirebaseAnalytics_t04B9FAB0E66C2DAB7301E7D1C74019B4F500DAAF_il2cpp_TypeInfo_var);
		String_t* L_32;
		L_32 = FirebaseAnalytics_get_EventAppOpen_mB0A3CDEAC8DEA1A671921253CD6BFA01AF3AB519(NULL);
		FirebaseAnalytics_LogEvent_m0681C82A83329E03982FBB4E432A81B086AF382A(L_32, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.EventTracker::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker__ctor_mD6920EEC2835F3E2517F0DEFC95B619DDFCF374F (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, const RuntimeMethod* method) 
{
	{
		// bool _isFirebaseReady = true;
		__this->____isFirebaseReady_1 = (bool)1;
		Object__ctor_mE837C6B9FA8C6D5D109F4B2EC885D79919AC0EA2(__this, NULL);
		return;
	}
}
// System.Void MondayOFF.EventTracker::<initialize>b__3_0(System.Threading.Tasks.Task`1<Firebase.DependencyStatus>)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void EventTracker_U3CinitializeU3Eb__3_0_m62A7CB6C18DB2EE7E9745302FFD3C9BE89FAA801 (EventTracker_t1111F358E9F230F7F7A62C6CEAA220ECC4BC8CAF* __this, Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF* ___task0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&DependencyStatus_t9DA2DB2B2AC17E9DA549331B93778091496D8195_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Task_1_get_Result_m543F02EC56EEA4AAED7101434F488D890414A3DA_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral674EF683D8B400F1F0F590BCCA13A350C3C1A25F);
		s_Il2CppMethodInitialized = true;
	}
	int32_t V_0 = 0;
	{
		// var dependencyStatus = task.Result;
		Task_1_tCDCA9B2073B1AC4ED4537A6D74742D20B122E1EF* L_0 = ___task0;
		NullCheck(L_0);
		int32_t L_1;
		L_1 = Task_1_get_Result_m543F02EC56EEA4AAED7101434F488D890414A3DA(L_0, Task_1_get_Result_m543F02EC56EEA4AAED7101434F488D890414A3DA_RuntimeMethod_var);
		V_0 = L_1;
		// if (dependencyStatus == Firebase.DependencyStatus.Available) {
		int32_t L_2 = V_0;
		if (L_2)
		{
			goto IL_001c;
		}
	}
	{
		// _app = Firebase.FirebaseApp.DefaultInstance;
		il2cpp_codegen_runtime_class_init_inline(FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25_il2cpp_TypeInfo_var);
		FirebaseApp_tD23C437863A3502177988D1382B58820B0571A25* L_3;
		L_3 = FirebaseApp_get_DefaultInstance_mCA6FC0DE0B25880FC6ACEAD5585ED84407690C61(NULL);
		__this->____app_2 = L_3;
		Il2CppCodeGenWriteBarrier((void**)(&__this->____app_2), (void*)L_3);
		// OnFirebaseInitialized();
		EventTracker_OnFirebaseInitialized_m2BEF67FA97E19F01D6CD0A1B05609E6CCA161BA8(__this, NULL);
		return;
	}

IL_001c:
	{
		// UnityEngine.Debug.LogError(System.String.Format(
		//   "Could not resolve all Firebase dependencies: {0}", dependencyStatus));
		int32_t L_4 = V_0;
		int32_t L_5 = L_4;
		RuntimeObject* L_6 = Box(DependencyStatus_t9DA2DB2B2AC17E9DA549331B93778091496D8195_il2cpp_TypeInfo_var, &L_5);
		String_t* L_7;
		L_7 = String_Format_m8C122B26BC5AA10E2550AECA16E57DAE10F07E30(_stringLiteral674EF683D8B400F1F0F590BCCA13A350C3C1A25F, L_6, NULL);
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_LogError_m059825802BB6AF7EA9693FEBEEB0D85F59A3E38E(L_7, NULL);
		// });
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* EventsManager_get_instance_m3E60FC8A286B2BCC6B3D835773D82FE5144CAAEC_inline (const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// public static EventsManager instance { get; private set; }
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_0 = ((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___U3CinstanceU3Ek__BackingField_4;
		return L_0;
	}
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void EventsManager_set_instance_m3C19C1AC7DE0C46DB79F3A7737D9700243DCDC58_inline (EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* ___value0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// public static EventsManager instance { get; private set; }
		EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707* L_0 = ___value0;
		((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___U3CinstanceU3Ek__BackingField_4 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&((EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_StaticFields*)il2cpp_codegen_static_fields_for(EventsManager_tEC2A893F006A0702BEF80EAD4EE251D81098E707_il2cpp_TypeInfo_var))->___U3CinstanceU3Ek__BackingField_4), (void*)L_0);
		return;
	}
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230 Enumerator_get_Current_mE3475384B761E1C7971D3639BD09117FE8363422_gshared_inline (Enumerator_tEA93FE2B778D098F590CA168BEFC4CD85D73A6B9* __this, const RuntimeMethod* method) 
{
	{
		KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230 L_0 = (KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230)__this->____current_3;
		return L_0;
	}
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR RuntimeObject* KeyValuePair_2_get_Key_mBD8EA7557C27E6956F2AF29DA3F7499B2F51A282_gshared_inline (KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230* __this, const RuntimeMethod* method) 
{
	{
		RuntimeObject* L_0 = (RuntimeObject*)__this->___key_0;
		return L_0;
	}
}
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR RuntimeObject* KeyValuePair_2_get_Value_mC6BD8075F9C9DDEF7B4D731E5C38EC19103988E7_gshared_inline (KeyValuePair_2_tFC32D2507216293851350D29B64D79F950B55230* __this, const RuntimeMethod* method) 
{
	{
		RuntimeObject* L_0 = (RuntimeObject*)__this->___value_1;
		return L_0;
	}
}
