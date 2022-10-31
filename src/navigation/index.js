import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInPageScreen from '../screens/LogInPageScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import InfoOverlayScreen from '../screens/InfoOverlay/InfoOverlayScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import CardAnnouncement from '../screens/CardAnnouncement/CardAnnouncement'
import Profile from '../screens/Profile';
import Reporting from '../screens/IncidentReport/Reporting';
import ReservationSCreen from '../screens/ReservationScreen/ReservationScreen';
import RequestAndI from '../screens/RequestandI/RequestAndI';
import FirstCar from '../screens/Firstcar/FirstCar';
import CarouselCards from '../screens/AboutUs/CarouselCards';
import AppHeader from '../components/AppHeader';
import Colors from '../constants/Colors';
import Settings from '../screens/Settings/Settings';

const Stack = createNativeStackNavigator();

const Navigation = (route) => {
  return (
    <NavigationContainer>
         
   <Stack.Navigator>
   <Stack.Screen name="LogInPageScreen" component={LogInPageScreen} options={{ headerShown: false,  }}/>
   
    <Stack.Screen name="SignIn" component={SignInScreen} options={{title: ' '}}/>
    <Stack.Screen name="SignUp" component={SignUpScreen} options={{title: ' '}}/>
    <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{title: ' '}}/>
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title: ' '}}/>
    <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{title: ' '}}/>
    <Stack.Screen name="InfoOverlayScreen" component={InfoOverlayScreen} options={{title: ' '}}/>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,  }}/>
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown: true, title: '' }}/>
    <Stack.Screen name="CardAnnouncement" component={CardAnnouncement} options={{headerShown: true, title: 'ANNOUNCEMENT' }}/>
    <Stack.Screen name="CarouselCards" component={CarouselCards} options={{headerShown: true, title: '' }}/>
    <Stack.Screen name="Reporting" component={Reporting} options={{headerShown: false,  }}/>
    <Stack.Screen name="ReservationSCreen" component={ReservationSCreen} options={{headerShown: false,  }}/>
    <Stack.Screen name="RequestAndI" component={RequestAndI} options={{headerShown: false,  }}/>
    <Stack.Screen name="FirstCar" component={FirstCar} options={{headerShown: false,  }}/>
    <Stack.Screen name="Profile" component={Profile} options={{headerShown: false,  }}/>
    <Stack.Screen name="Settings" component={Settings} options={{headerShown: false,  }}/>
   </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;