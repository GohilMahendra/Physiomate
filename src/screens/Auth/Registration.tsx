import React, { useState } from 'react'
import { Text,TextInput,View ,TouchableOpacity, Keyboard} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { stackParamsList } from '../../../App'
const Registration = () =>
{
    const [userName,setuserName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [repassword,setRepassword] = useState<string>("")

    const navigation = useNavigation<NativeStackNavigationProp<stackParamsList,"Registration">>()
    const RegisterUser = async() =>
    {
      try
      {
        await Auth().createUserWithEmailAndPassword(email,password)

        const ref = await firestore()
        .collection("doctors")
        .doc(Auth().currentUser?.uid)
        .set({
            userName: userName,
            email: email,
        })
        navigation.navigate("Login")
      }
      catch(err)
      {
        console.log(err)
      }
    }

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
            fontSize:30,
            marginVertical:10,
            color:"black",
            fontWeight:"bold"
          }}>Sign Up</Text>
          <Text>
            Register your self here to explore ...
          </Text>
          <TextInput 
            value={userName}
            onChangeText={(text:string)=>setuserName(text)}
            onSubmitEditing={()=>Keyboard.dismiss}
            style={{
                borderRadius:10,
                elevation:2,
                width:"100%",
                backgroundColor:"#ECF2FF",
                marginVertical:10,
            }}
            placeholder='username...'
          />
          <TextInput 
            value={email}
            onChangeText={(text:string)=>setEmail(text)}
            style={{
                borderRadius:10,
                elevation:2,
                width:"100%",
                backgroundColor:"#ECF2FF",
                marginVertical:10,
            }}
            placeholder='email...'
          />
           <TextInput 
            value={password}
            onChangeText={(text:string)=>setPassword(text)}
            style={{
                borderRadius:10,
                elevation:2,
                width:"100%",
                backgroundColor:"#ECF2FF",
                marginVertical:10,
            }}
            placeholder='password...'
          />

            <TextInput 
             value={repassword}
             onChangeText={(text:string)=>setRepassword(text)}
            style={{
                borderRadius:10,
                elevation:2,
                width:"100%",
                backgroundColor:"#ECF2FF",
                marginVertical:10,
            }}
            placeholder='confirm password...'
          />

          <TouchableOpacity 
          onPress={()=>RegisterUser()}
          style={{
                padding:20,
                marginVertical:20,
                backgroundColor:"#B2A4FF",
                borderRadius:15,
                justifyContent:"center",
                alignItems:"center"
          }}>
            <Text style={{
                color:"#fff",
                fontSize:15,
                fontWeight:"bold"
            }}>Sign Up</Text>
          </TouchableOpacity>
          <View
            style={{
                alignItems:"center",
                flexDirection:"row",
                alignSelf:"flex-end"
            }}
            >
                <Text>Already have a account ?</Text>
                <Text 
                onPress={()=>navigation.navigate("Login")}
                style={{
                    color:"#B2A4FF"
                }}>Sign In</Text>
            </View>
          </View>
        </View>
    )

}
export default Registration