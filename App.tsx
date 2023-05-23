/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator, } from "@react-navigation/native-stack";
import Registration from './src/screens/Auth/Registration';
import Login from './src/screens/Auth/Login';
import HomeScreen from './src/screens/Home/HomeScreen';
import { Provider } from 'react-redux';
import store from './src/Redux/store/store';

export type stackParamsList = {
  Registration: undefined,
  Login:undefined,
  HomeScreen: undefined
}
function App(): JSX.Element {
 
  const stackNavigator = createNativeStackNavigator<stackParamsList>()
  return (
    <Provider store={store}>
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <stackNavigator.Navigator
          screenOptions={{headerShown:false}}
          initialRouteName='Login'
        >
           <stackNavigator.Screen
          name='Login'
          component={Login}
          />
          <stackNavigator.Screen
          name='Registration'
          component={Registration}
          />

          <stackNavigator.Screen
          name='HomeScreen'
          component={HomeScreen}
          />
        </stackNavigator.Navigator>
      </NavigationContainer>
     
    </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
