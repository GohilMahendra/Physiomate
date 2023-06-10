import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'

export default function HomeScreen() {
  return (
    <View style={{
        backgroundColor:"#fff",
        flex:1
    }}>
      <Header Title='Home'/>
      <Text>HomeScreen</Text>
    </View>
  )
}