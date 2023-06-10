import React, { useEffect, useState } from 'react'
import { Text,TextInput,View ,TouchableOpacity, Keyboard} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamsList } from '../../../App'
import { useDispatch, useSelector } from "react-redux"
import {login} from '../../Redux/actions/AuthSaga'
import { RootState } from '../../Redux/reducers/RootReducer'
export const Login = () =>
{
    const dispatch = useDispatch()
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const emailUser = useSelector<RootState>(state=>state.Auth.email)
    const navigation = useNavigation<NativeStackNavigationProp<stackParamsList,"Login">>()
    const Login = async()=>{
        dispatch(login({email:email,password:password}))
     }
    useEffect(
        ()=>{
            if(emailUser != "")
            {
                navigation.navigate("HomeScreen")
            }
        },[emailUser]
    )
    return(
        <View style={{
            flex:1,
            backgroundColor:"#fff",
        }}>
            <View
            style={{
                backgroundColor:"#B2A4FF",
                height:200,
                borderBottomStartRadius:20,
                borderBottomEndRadius:20,
                padding:-20
            }}
            />
            <View style={{
                padding:20,
                flex:1
            }}>
            <Text style={{
                color:"black",
                fontSize:30,
                fontWeight:"bold",
                marginVertical:10
            }}>
                Sign In
            </Text>
            <Text>
                To login please enter you email and password !
            </Text>

            <TextInput
            value={email}
            onChangeText={(text:string)=>setEmail(text)}
            placeholder='email...'
            style={{
                height:50,
                marginVertical:20,
                elevation:2,
                backgroundColor:"#f8fafb",
                borderRadius:10,
                padding:10
            }}
            />

            <TextInput
            value={password}
            onChangeText={(text:string)=>setPassword(text)}
            placeholder='password...'
            style={{
                height:50,
                marginVertical:20,
                elevation:2,
                backgroundColor:"#f8fafb",
                borderRadius:10,
                padding:10
            }}
            />

            <Text style={{
                marginVertical:5,
                color:"#B2A4FF",
                alignSelf:"flex-end"
            }}>Forgot password ?</Text>
            
            <TouchableOpacity
            onPress={()=>Login()}
            style={{
                padding:20,
                marginVertical:20,
                backgroundColor:"#B2A4FF",
                borderRadius:15,
                justifyContent:"center",
                alignItems:"center"
            }}
            >
                <Text
                style={{
                    color:"#fff",
                    fontSize:20,
                }}
                >
                    Sign In
                </Text>
            </TouchableOpacity>
            <View
            style={{
                alignItems:"center",
                flexDirection:"row",
                alignSelf:"flex-end"
            }}
            >
                <Text>Don't have any account ?</Text>
                <Text 
                onPress={()=>navigation.navigate("Registration")}
                style={{
                    color:"#B2A4FF"
                }}>Sign Up</Text>
            </View>
            </View>
        </View>
    )

}
export default Login