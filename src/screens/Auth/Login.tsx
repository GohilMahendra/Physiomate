import React, { useState } from 'react'
import { Text,TextInput,View ,TouchableOpacity, Keyboard} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Auth from '@react-native-firebase/auth'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { stackParamsList } from '../../../App'
import { useDispatch, useSelector } from "react-redux"
import {login} from '../../Redux/actions/AuthSaga'
import { RootState } from "../../Redux/reducers/RootReducer"
//@ts-ignore
import BackgroundGeolocation, {
    Location,
    Subscription
  } from "react-native-background-location";
  
export const Login = () =>
{
    const dispatch = useDispatch()
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const navigation = useNavigation<NativeStackNavigationProp<stackParamsList,"Login">>()
    const [enabled, setEnabled] = React.useState(false);
    const [location, setLocation] = React.useState('');
    const Login = async()=>{
        dispatch(login({email:email,password:password}))
     }

     React.useEffect(() => {
        /// 1.  Subscribe to events.
        const onLocation:Subscription = BackgroundGeolocation.onLocation((location:any) => {
          console.log('[onLocation]', location);
          setLocation(JSON.stringify(location, null, 2));
        })
    
        const onMotionChange:Subscription = BackgroundGeolocation.onMotionChange((event:any) => {
          console.log('[onMotionChange]', event);
        });
    
        const onActivityChange:Subscription = BackgroundGeolocation.onActivityChange((event:any) => {
          console.log('[onActivityChange]', event);
        })
    
        const onProviderChange:Subscription = BackgroundGeolocation.onProviderChange((event:any) => {
          console.log('[onProviderChange]', event);
        })
    
        /// 2. ready the plugin.
        BackgroundGeolocation.ready({
          // Geolocation Config
          desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
          distanceFilter: 10,
          // Activity Recognition
          stopTimeout: 5,
          // Application config
          debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
          logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
          stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when user closes the app.
          startOnBoot: true,        // <-- Auto start tracking when device is powered-up.
          // HTTP / SQLite config
          url: 'http://yourserver.com/locations',
          batchSync: false,       // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
          autoSync: true,         // <-- [Default: true] Set true to sync each location to server as it arrives.
          headers: {              // <-- Optional HTTP headers
            "X-FOO": "bar"
          },
          params: {               // <-- Optional HTTP params
            "auth_token": "maybe_your_server_authenticates_via_token_YES?"
          }
        }).then((state:any) => {
          setEnabled(state.enabled)
          console.log("- BackgroundGeolocation is configured and ready: ", state.enabled);
        });
    
        return () => {
          // Remove BackgroundGeolocation event-subscribers when the View is removed or refreshed
          // during development live-reload.  Without this, event-listeners will accumulate with
          // each refresh during live-reload.
          onLocation.remove();
          onMotionChange.remove();
          onActivityChange.remove();
          onProviderChange.remove();
        }
      }, []);
    
      /// 3. start / stop BackgroundGeolocation
      React.useEffect(() => {
        if (enabled) {
          BackgroundGeolocation.start();
        } else {
          BackgroundGeolocation.stop();
          setLocation('');
        }
      }, [enabled]);

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
                backgroundColor:"#ECF2FF",
                borderRadius:15,
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
                backgroundColor:"#ECF2FF",
                borderRadius:15,
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