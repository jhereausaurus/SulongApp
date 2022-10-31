/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Button,  } from 'react-native';
import { createAppContainer } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//permanent code to dito
import Navigation from './src/navigation';
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen';
import Dashboard from './src/screens/DashboardScreen/Dashboard';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';


//testing code

//permanent code starting here
const App = () => {
return (
  
    <SafeAreaView style={styles.root}>
       <Navigation/>
       
    </SafeAreaView>

  );
};






const styles = StyleSheet.create({
root: {
  flex: 1,
 
},
App:{
  backgroundColor: 'White',
},
container: {
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 50
},

});

export default App;

