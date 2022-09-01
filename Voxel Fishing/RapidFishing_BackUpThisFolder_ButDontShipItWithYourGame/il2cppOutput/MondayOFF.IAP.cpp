#include "pch-cpp.hpp"

#ifndef _MSC_VER
# include <alloca.h>
#else
# include <malloc.h>
#endif


#include <limits>
#include <stdint.h>



// System.Collections.Generic.Dictionary`2<System.Object,System.Object>
struct Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA;
// System.Collections.Generic.Dictionary`2<System.String,System.Action>
struct Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6;
// System.Collections.Generic.IEqualityComparer`1<System.String>
struct IEqualityComparer_1_tAE94C8F24AD5B94D4EE85CA9FC59E3409D41CAF7;
// System.Collections.Generic.Dictionary`2/KeyCollection<System.String,System.Action>
struct KeyCollection_t94F67CDF5E978000C16F49D121E96AC2F10CE60F;
// System.Collections.Generic.Dictionary`2/ValueCollection<System.String,System.Action>
struct ValueCollection_tB6C7A8B6372F17E2F4C197D8E93B44F04165E83B;
// System.Collections.Generic.Dictionary`2/Entry<System.String,System.Action>[]
struct EntryU5BU5D_t34DD94604A143A63F891FD7F17CE3D5ABA76DEA4;
// System.Delegate[]
struct DelegateU5BU5D_tC5AB7E8F745616680F337909D3A8E6C722CDF771;
// System.Int32[]
struct Int32U5BU5D_t19C97395396A72ECAF310612F0760F165060314C;
// System.Action
struct Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07;
// System.DelegateData
struct DelegateData_t9B286B493293CD2D23A5B2B5EF0E5B1324C2B77E;
// UnityEngine.GameObject
struct GameObject_t76FEDD663AB33C991A9C9A23129337651094216F;
// MondayOFF.IAP.IAPManager
struct IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA;
// System.Reflection.MethodInfo
struct MethodInfo_t;
// UnityEngine.MonoBehaviour
struct MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71;
// UnityEngine.Object
struct Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C;
// System.String
struct String_t;
// System.Void
struct Void_t4861ACF8F4594C3437BB48B6E56783494B843915;

IL2CPP_EXTERN_C RuntimeClass* Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C RuntimeClass* Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var;
IL2CPP_EXTERN_C String_t* _stringLiteral4B29D23CAE6DC9D4D24B4BD126BC9EF22DB7F085;
IL2CPP_EXTERN_C String_t* _stringLiteral523CB0712D9B2F55CD59C6F4935F341C6BC26F2C;
IL2CPP_EXTERN_C String_t* _stringLiteral81B59AB94CECF7937D26916055761B8B1874CC00;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2_Add_m42116195150ED3A5F1B337CEDF25923016ADBC98_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2_ContainsKey_m13BF94D119C20A0975CBEED2936B43932509D294_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2_TryGetValue_mC7224FFE7F05B1073C6D82CEA2B163BA93221CF8_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2__ctor_mA5C69BAAEA4997E39BCBB941E85A3CC71BEB6D8E_RuntimeMethod_var;
IL2CPP_EXTERN_C const RuntimeMethod* Dictionary_2_set_Item_m1E8F072CDB92C325C6B627BAFDB6F355B51CD8BA_RuntimeMethod_var;
struct Delegate_t_marshaled_com;
struct Delegate_t_marshaled_pinvoke;


IL2CPP_EXTERN_C_BEGIN
IL2CPP_EXTERN_C_END

#ifdef __clang__
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Winvalid-offsetof"
#pragma clang diagnostic ignored "-Wunused-variable"
#endif

// <Module>
struct U3CModuleU3E_t1E2268447DB590C13AD270FF6A0B138807A2B9C9 
{
};

// System.Collections.Generic.Dictionary`2<System.String,System.Action>
struct Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6  : public RuntimeObject
{
	// System.Int32[] System.Collections.Generic.Dictionary`2::_buckets
	Int32U5BU5D_t19C97395396A72ECAF310612F0760F165060314C* ____buckets_0;
	// System.Collections.Generic.Dictionary`2/Entry<TKey,TValue>[] System.Collections.Generic.Dictionary`2::_entries
	EntryU5BU5D_t34DD94604A143A63F891FD7F17CE3D5ABA76DEA4* ____entries_1;
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
	KeyCollection_t94F67CDF5E978000C16F49D121E96AC2F10CE60F* ____keys_7;
	// System.Collections.Generic.Dictionary`2/ValueCollection<TKey,TValue> System.Collections.Generic.Dictionary`2::_values
	ValueCollection_tB6C7A8B6372F17E2F4C197D8E93B44F04165E83B* ____values_8;
	// System.Object System.Collections.Generic.Dictionary`2::_syncRoot
	RuntimeObject* ____syncRoot_9;
};
struct Il2CppArrayBounds;

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

// System.Action
struct Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07  : public MulticastDelegate_t
{
};

// UnityEngine.Behaviour
struct Behaviour_t01970CFBBA658497AE30F311C447DB0440BAB7FA  : public Component_t39FBE53E5EFCF4409111FB22C15FF73717632EC3
{
};

// UnityEngine.MonoBehaviour
struct MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71  : public Behaviour_t01970CFBBA658497AE30F311C447DB0440BAB7FA
{
};

// MondayOFF.IAP.IAPManager
struct IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA  : public MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71
{
	// UnityEngine.GameObject MondayOFF.IAP.IAPManager::pannelLoading
	GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* ___pannelLoading_5;
	// System.Collections.Generic.Dictionary`2<System.String,System.Action> MondayOFF.IAP.IAPManager::onPurchaseDict
	Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* ___onPurchaseDict_6;
};

struct IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_StaticFields
{
	// MondayOFF.IAP.IAPManager MondayOFF.IAP.IAPManager::instance
	IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* ___instance_4;
};
#ifdef __clang__
#pragma clang diagnostic pop
#endif


// System.Boolean System.Collections.Generic.Dictionary`2<System.Object,System.Object>::ContainsKey(TKey)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Dictionary_2_ContainsKey_m703047C213F7AB55C9DC346596287773A1F670CD_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, RuntimeObject* ___key0, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Dictionary`2<System.Object,System.Object>::Add(TKey,TValue)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Dictionary_2_Add_m93FFFABE8FCE7FA9793F0915E2A8842C7CD0C0C1_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, RuntimeObject* ___key0, RuntimeObject* ___value1, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Dictionary`2<System.Object,System.Object>::set_Item(TKey,TValue)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Dictionary_2_set_Item_m1A840355E8EDAECEA9D0C6F5E51B248FAA449CBD_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, RuntimeObject* ___key0, RuntimeObject* ___value1, const RuntimeMethod* method) ;
// System.Boolean System.Collections.Generic.Dictionary`2<System.Object,System.Object>::TryGetValue(TKey,TValue&)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Dictionary_2_TryGetValue_mD15380A4ED7CDEE99EA45881577D26BA9CE1B849_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, RuntimeObject* ___key0, RuntimeObject** ___value1, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Dictionary`2<System.Object,System.Object>::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Dictionary_2__ctor_m5B32FBC624618211EB461D59CFBB10E987FD1329_gshared (Dictionary_2_t14FE4A752A83D53771C584E4C8D14E01F2AFD7BA* __this, const RuntimeMethod* method) ;

// System.Boolean UnityEngine.Object::op_Inequality(UnityEngine.Object,UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR bool Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___x0, Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___y1, const RuntimeMethod* method) ;
// System.Void UnityEngine.GameObject::SetActive(System.Boolean)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void GameObject_SetActive_m638E92E1E75E519E5B24CF150B08CA8E0CDFAB92 (GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* __this, bool ___value0, const RuntimeMethod* method) ;
// System.String System.String::Concat(System.String,System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR String_t* String_Concat_mAF2CE02CC0CB7460753D0A1A91CCF2B1E9804C5D (String_t* ___str00, String_t* ___str11, const RuntimeMethod* method) ;
// System.Void UnityEngine.Debug::Log(System.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219 (RuntimeObject* ___message0, const RuntimeMethod* method) ;
// System.Boolean System.Collections.Generic.Dictionary`2<System.String,System.Action>::ContainsKey(TKey)
inline bool Dictionary_2_ContainsKey_m13BF94D119C20A0975CBEED2936B43932509D294 (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* __this, String_t* ___key0, const RuntimeMethod* method)
{
	return ((  bool (*) (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6*, String_t*, const RuntimeMethod*))Dictionary_2_ContainsKey_m703047C213F7AB55C9DC346596287773A1F670CD_gshared)(__this, ___key0, method);
}
// System.Void System.Collections.Generic.Dictionary`2<System.String,System.Action>::Add(TKey,TValue)
inline void Dictionary_2_Add_m42116195150ED3A5F1B337CEDF25923016ADBC98 (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* __this, String_t* ___key0, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___value1, const RuntimeMethod* method)
{
	((  void (*) (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6*, String_t*, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*, const RuntimeMethod*))Dictionary_2_Add_m93FFFABE8FCE7FA9793F0915E2A8842C7CD0C0C1_gshared)(__this, ___key0, ___value1, method);
}
// System.Void System.Collections.Generic.Dictionary`2<System.String,System.Action>::set_Item(TKey,TValue)
inline void Dictionary_2_set_Item_m1E8F072CDB92C325C6B627BAFDB6F355B51CD8BA (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* __this, String_t* ___key0, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___value1, const RuntimeMethod* method)
{
	((  void (*) (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6*, String_t*, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07*, const RuntimeMethod*))Dictionary_2_set_Item_m1A840355E8EDAECEA9D0C6F5E51B248FAA449CBD_gshared)(__this, ___key0, ___value1, method);
}
// System.Boolean System.Collections.Generic.Dictionary`2<System.String,System.Action>::TryGetValue(TKey,TValue&)
inline bool Dictionary_2_TryGetValue_mC7224FFE7F05B1073C6D82CEA2B163BA93221CF8 (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* __this, String_t* ___key0, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07** ___value1, const RuntimeMethod* method)
{
	return ((  bool (*) (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6*, String_t*, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07**, const RuntimeMethod*))Dictionary_2_TryGetValue_mD15380A4ED7CDEE99EA45881577D26BA9CE1B849_gshared)(__this, ___key0, ___value1, method);
}
// System.Void System.Action::Invoke()
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* __this, const RuntimeMethod* method) ;
// System.Void UnityEngine.Object::DestroyImmediate(UnityEngine.Object)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void Object_DestroyImmediate_m8249CABCDF344BE3A67EE765122EBB415DC2BC57 (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C* ___obj0, const RuntimeMethod* method) ;
// System.Void System.Collections.Generic.Dictionary`2<System.String,System.Action>::.ctor()
inline void Dictionary_2__ctor_mA5C69BAAEA4997E39BCBB941E85A3CC71BEB6D8E (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* __this, const RuntimeMethod* method)
{
	((  void (*) (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6*, const RuntimeMethod*))Dictionary_2__ctor_m5B32FBC624618211EB461D59CFBB10E987FD1329_gshared)(__this, method);
}
// System.Void UnityEngine.MonoBehaviour::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void MonoBehaviour__ctor_m592DB0105CA0BC97AA1C5F4AD27B12D68A3B7C1E (MonoBehaviour_t532A11E69716D348D8AA7F854AFCBFCB8AD17F71* __this, const RuntimeMethod* method) ;
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
// System.Void MondayOFF.IAP.IAPManager::ActiveLoading()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager_ActiveLoading_m718B4B7E0D6178B4F6D535B1E48DA88F35C1D97F (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (pannelLoading != null) {
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_0 = __this->___pannelLoading_5;
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_1)
		{
			goto IL_001a;
		}
	}
	{
		// pannelLoading.SetActive(true);
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_2 = __this->___pannelLoading_5;
		NullCheck(L_2);
		GameObject_SetActive_m638E92E1E75E519E5B24CF150B08CA8E0CDFAB92(L_2, (bool)1, NULL);
	}

IL_001a:
	{
		// }
		return;
	}
}
// System.Void MondayOFF.IAP.IAPManager::HideLoading()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager_HideLoading_mC75B8EDD431625DC6BEEE7E3AD9D167E292AED1C (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (pannelLoading != null) {
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_0 = __this->___pannelLoading_5;
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_1)
		{
			goto IL_001a;
		}
	}
	{
		// pannelLoading.SetActive(false);
		GameObject_t76FEDD663AB33C991A9C9A23129337651094216F* L_2 = __this->___pannelLoading_5;
		NullCheck(L_2);
		GameObject_SetActive_m638E92E1E75E519E5B24CF150B08CA8E0CDFAB92(L_2, (bool)0, NULL);
	}

IL_001a:
	{
		// }
		return;
	}
}
// System.Void MondayOFF.IAP.IAPManager::RegisterProducts(System.String,System.Action)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager_RegisterProducts_m18860DA938999A81F0B48DB9E38C291C1456603B (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, String_t* ___productID0, Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* ___onPurchase1, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_Add_m42116195150ED3A5F1B337CEDF25923016ADBC98_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_ContainsKey_m13BF94D119C20A0975CBEED2936B43932509D294_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_set_Item_m1E8F072CDB92C325C6B627BAFDB6F355B51CD8BA_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral523CB0712D9B2F55CD59C6F4935F341C6BC26F2C);
		s_Il2CppMethodInitialized = true;
	}
	{
		// Debug.Log("[IAPManager] Register purchase callback for " + productID);
		String_t* L_0 = ___productID0;
		String_t* L_1;
		L_1 = String_Concat_mAF2CE02CC0CB7460753D0A1A91CCF2B1E9804C5D(_stringLiteral523CB0712D9B2F55CD59C6F4935F341C6BC26F2C, L_0, NULL);
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219(L_1, NULL);
		// if (!onPurchaseDict.ContainsKey(productID)) {
		Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* L_2 = __this->___onPurchaseDict_6;
		String_t* L_3 = ___productID0;
		NullCheck(L_2);
		bool L_4;
		L_4 = Dictionary_2_ContainsKey_m13BF94D119C20A0975CBEED2936B43932509D294(L_2, L_3, Dictionary_2_ContainsKey_m13BF94D119C20A0975CBEED2936B43932509D294_RuntimeMethod_var);
		if (L_4)
		{
			goto IL_002c;
		}
	}
	{
		// onPurchaseDict.Add(productID, onPurchase);
		Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* L_5 = __this->___onPurchaseDict_6;
		String_t* L_6 = ___productID0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_7 = ___onPurchase1;
		NullCheck(L_5);
		Dictionary_2_Add_m42116195150ED3A5F1B337CEDF25923016ADBC98(L_5, L_6, L_7, Dictionary_2_Add_m42116195150ED3A5F1B337CEDF25923016ADBC98_RuntimeMethod_var);
		return;
	}

IL_002c:
	{
		// onPurchaseDict[productID] = onPurchase;
		Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* L_8 = __this->___onPurchaseDict_6;
		String_t* L_9 = ___productID0;
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_10 = ___onPurchase1;
		NullCheck(L_8);
		Dictionary_2_set_Item_m1E8F072CDB92C325C6B627BAFDB6F355B51CD8BA(L_8, L_9, L_10, Dictionary_2_set_Item_m1E8F072CDB92C325C6B627BAFDB6F355B51CD8BA_RuntimeMethod_var);
		// }
		return;
	}
}
// System.Void MondayOFF.IAP.IAPManager::PurchaseProduct(System.String)
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager_PurchaseProduct_mB38B34A1F1AB4B45E2238EE03D530205DDD46591 (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, String_t* ___productID0, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_TryGetValue_mC7224FFE7F05B1073C6D82CEA2B163BA93221CF8_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral4B29D23CAE6DC9D4D24B4BD126BC9EF22DB7F085);
		s_Il2CppMethodInitialized = true;
	}
	Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* V_0 = NULL;
	{
		// Debug.Log("[IAPManager] Purchase item: " + productID);
		String_t* L_0 = ___productID0;
		String_t* L_1;
		L_1 = String_Concat_mAF2CE02CC0CB7460753D0A1A91CCF2B1E9804C5D(_stringLiteral4B29D23CAE6DC9D4D24B4BD126BC9EF22DB7F085, L_0, NULL);
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219(L_1, NULL);
		// if (onPurchaseDict.TryGetValue(productID, out System.Action onPurchase)) {
		Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* L_2 = __this->___onPurchaseDict_6;
		String_t* L_3 = ___productID0;
		NullCheck(L_2);
		bool L_4;
		L_4 = Dictionary_2_TryGetValue_mC7224FFE7F05B1073C6D82CEA2B163BA93221CF8(L_2, L_3, (&V_0), Dictionary_2_TryGetValue_mC7224FFE7F05B1073C6D82CEA2B163BA93221CF8_RuntimeMethod_var);
		if (!L_4)
		{
			goto IL_0029;
		}
	}
	{
		// onPurchase?.Invoke();
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_5 = V_0;
		if (!L_5)
		{
			goto IL_0029;
		}
	}
	{
		Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* L_6 = V_0;
		NullCheck(L_6);
		Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline(L_6, NULL);
	}

IL_0029:
	{
		// }
		return;
	}
}
// System.Void MondayOFF.IAP.IAPManager::RestorePurchase()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager_RestorePurchase_m65FDA848C4A41208E15916B7C12F695DA30B229D (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&_stringLiteral81B59AB94CECF7937D26916055761B8B1874CC00);
		s_Il2CppMethodInitialized = true;
	}
	{
		// Debug.Log("[IAPManager] Restore Purchase");
		il2cpp_codegen_runtime_class_init_inline(Debug_t8394C7EEAECA3689C2C9B9DE9C7166D73596276F_il2cpp_TypeInfo_var);
		Debug_Log_m86567BCF22BBE7809747817453CACA0E41E68219(_stringLiteral81B59AB94CECF7937D26916055761B8B1874CC00, NULL);
		// }
		return;
	}
}
// System.Void MondayOFF.IAP.IAPManager::Awake()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager_Awake_mF78CD19CBD9A365542AF4231F8FF7D054D28A012 (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_il2cpp_TypeInfo_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// if (instance != null) {
		IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* L_0 = ((IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_StaticFields*)il2cpp_codegen_static_fields_for(IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_il2cpp_TypeInfo_var))->___instance_4;
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		bool L_1;
		L_1 = Object_op_Inequality_m4D656395C27694A7F33F5AA8DE80A7AAF9E20BA7(L_0, (Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C*)NULL, NULL);
		if (!L_1)
		{
			goto IL_0014;
		}
	}
	{
		// DestroyImmediate(this);
		il2cpp_codegen_runtime_class_init_inline(Object_tC12DECB6760A7F2CBF65D9DCF18D044C2D97152C_il2cpp_TypeInfo_var);
		Object_DestroyImmediate_m8249CABCDF344BE3A67EE765122EBB415DC2BC57(__this, NULL);
		// return;
		return;
	}

IL_0014:
	{
		// instance = this;
		((IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_StaticFields*)il2cpp_codegen_static_fields_for(IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_il2cpp_TypeInfo_var))->___instance_4 = __this;
		Il2CppCodeGenWriteBarrier((void**)(&((IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_StaticFields*)il2cpp_codegen_static_fields_for(IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA_il2cpp_TypeInfo_var))->___instance_4), (void*)__this);
		// }
		return;
	}
}
// System.Void MondayOFF.IAP.IAPManager::.ctor()
IL2CPP_EXTERN_C IL2CPP_METHOD_ATTR void IAPManager__ctor_m6B5560535BA46439843B6C064598B5EB4D8D2782 (IAPManager_t86E485D9EBAC7856BC8DE6DE870E2D5D5159C4FA* __this, const RuntimeMethod* method) 
{
	static bool s_Il2CppMethodInitialized;
	if (!s_Il2CppMethodInitialized)
	{
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2__ctor_mA5C69BAAEA4997E39BCBB941E85A3CC71BEB6D8E_RuntimeMethod_var);
		il2cpp_codegen_initialize_runtime_metadata((uintptr_t*)&Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6_il2cpp_TypeInfo_var);
		s_Il2CppMethodInitialized = true;
	}
	{
		// Dictionary<string, System.Action> onPurchaseDict = new Dictionary<string, System.Action>();
		Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6* L_0 = (Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6*)il2cpp_codegen_object_new(Dictionary_2_t3481DB12CFC627C97EF9EE95A2F3D08D3607A6D6_il2cpp_TypeInfo_var);
		NullCheck(L_0);
		Dictionary_2__ctor_mA5C69BAAEA4997E39BCBB941E85A3CC71BEB6D8E(L_0, Dictionary_2__ctor_mA5C69BAAEA4997E39BCBB941E85A3CC71BEB6D8E_RuntimeMethod_var);
		__this->___onPurchaseDict_6 = L_0;
		Il2CppCodeGenWriteBarrier((void**)(&__this->___onPurchaseDict_6), (void*)L_0);
		MonoBehaviour__ctor_m592DB0105CA0BC97AA1C5F4AD27B12D68A3B7C1E(__this, NULL);
		return;
	}
}
#ifdef __clang__
#pragma clang diagnostic pop
#endif
IL2CPP_MANAGED_FORCE_INLINE IL2CPP_METHOD_ATTR void Action_Invoke_m7126A54DACA72B845424072887B5F3A51FC3808E_inline (Action_tD00B0A84D7945E50C2DFFC28EFEE6ED44ED2AD07* __this, const RuntimeMethod* method) 
{
	typedef void (*FunctionPointerType) (RuntimeObject*, const RuntimeMethod*);
	((FunctionPointerType)__this->___invoke_impl_1)((Il2CppObject*)__this->___method_code_6, reinterpret_cast<RuntimeMethod*>(__this->___method_3));
}
