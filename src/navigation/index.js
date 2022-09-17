import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInPageScreen from '../screens/LogInPageScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';

import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
   <Stack.Navigator>
   <Stack.Screen name="LogInPageScreen" component={LogInPageScreen} options={{ headerShown: false,  }}/>
   
    <Stack.Screen name="SignIn" component={SignInScreen} options={{title: ' '}}/>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: ' '}}/>
    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{title: ' '}}/>
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title: ' '}}/>
    <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{title: ' '}}/>
    
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false,  }}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;