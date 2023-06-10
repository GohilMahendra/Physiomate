import React from 'react'
import { View,Text, TouchableOpacity ,Image} from 'react-native'
import { Icon } from "react-native-elements";
type HeaderProps = {
    Title?: string
}

const Header = (Props:HeaderProps) =>
{
    const { Title } = Props
    return(
    <View style={{
        justifyContent:"space-between",
        height: 50,
        flexDirection:"row",
        paddingHorizontal:10
    }}>
        <TouchableOpacity>
            <Icon name='arrow-back' type='ionicon' size={30}/>
        </TouchableOpacity>
        <Text style={{
            fontSize:20
        }}>{Title}</Text>
        <View/>
    </View>
    )

}
export default Header