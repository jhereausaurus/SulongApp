import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import Img from '../../../assets/images/Img_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useForm, Controller} from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  

    const {height} = useWindowDimensions();
    const Navigation = useNavigation();

    const {
        control, 
        handleSubmit, 
        formState: {errors},
    } = useForm();

    const onSignInPressed = data => {
        console.log(data);
     
Navigation.navigate('HomeScreen');

    };
    const onForgotPasswordPressed = () => {
        console.warn('onForgotPasswordPressed');

         //forgotpassword screen
         Navigation.navigate('ForgotPassword');
    };

    const onSignedUpPress= () => {
        console.warn('onSignedUpPress');
 //forgotpassword screen
 Navigation.navigate('SignUp');
       
    };

  return (
    <ScrollView>
    <View style={styles.root}>
    <Text style={styles.title}>SIGN IN</Text>
     <Image source={Img} styles={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
     
<CustomInput 
name="username" 
placeholder= "Username" 
control={control}
rules={{required: 'Username Is Required'}}
/> 
<CustomInput 
name="password" 
placeholder= "Password" 
secureTextEntry
control={control}
rules={{required: 'Password Is Required', minLength: {value: 3, message: 'password should be minimum 3 characters long'}}}
/> 

    <CustomButton text="Signed In" onPress={handleSubmit(onSignInPressed) }  /> 
    <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"  />


    {/* <SocialSignInButtons /> */}
 
 <CustomButton 
 text="Dont have an account yet? create one"
  onPress={onSignedUpPress} 
  type="TERTIARY"  
  
  
  />

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
   
    logo: {
        width: '70%',
        maxHeight: 300,
        maxWidth: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
});

export default SignInScreen;