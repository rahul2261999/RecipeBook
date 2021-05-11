import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { enableScreens } from 'react-native-screens'
import AppLoading from 'expo-app-loading'

import MealsNavigator from './navigations/MealNavigator'
enableScreens()
const fetchFont = ()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded,setFontLoaded] = useState(false)



  if(!fontLoaded){
    return <AppLoading 
    startAsync={fetchFont}
    onError={()=>console.log("error")}
    onFinish={()=>setFontLoaded(true)} />
  }

  return <MealsNavigator/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
