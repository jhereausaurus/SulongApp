import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Img from '../../../assets/images/Img_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
    const {control, handleSubmit} = useForm();
    
const Navigation = useNavigation();
    
const onConfirmPressed = data => {
    console.warn(data);
        Navigation.navigate('HomeScreen')
    };
 

    const onSignInPress= () => {
        Navigation.navigate('SignIn')
    };
    

    const onResendPress= () => {
        console.warn('onResendPress');
    };
 

  return (
    <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
    
            <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: 'Confirmation code is required',
          }}
     
/>


<CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />




 
 <CustomButton 
 text="Resend Code"
  onPress={onResendPress} 
  type="SECONDARY"  
  
  />
   <CustomButton 
 text="Back to Sign In"
  onPress={onSignInPress} 
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
    },
   
text: {
    color: 'gray',
    marginVertical: 10,
    },
    link: {
        color: '#FDB075',
      
        },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    }
});

export default ConfirmEmailScreen;