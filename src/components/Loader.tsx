import { ActivityIndicator , Dimensions} from 'react-native'
const height = Dimensions.get("window").height

export default function Loader()
{
    return(
        <ActivityIndicator
        animating={true}
        style={{
            alignSelf:"center",
            justifyContent:"center",
            padding:20,
            top:height/2,
            zIndex:1000,
            borderRadius:15,
            backgroundColor:"#B2A4FF",
            position:"absolute",
        }}
        color={"#fff"}
        size={'large'}
        />
    
    )
}