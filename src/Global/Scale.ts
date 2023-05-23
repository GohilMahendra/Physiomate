import { Dimensions } from "react-native";

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

export const Scale=(value:number)=>
{
    const dimention = height>width?height:width

    return (value/100) * dimention
}