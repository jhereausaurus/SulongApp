import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Img from '../../../assets/images/Img_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  
    const Navigation = useNavigation();
    
    const onSubmitPressed = data => {
        console.warn(data);
        Navigation.navigate('HomeScreen')
    };
    const onSignInPress = () => {
        Navigation.navigate('SignIn')
    };


  return (
    <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
    
            <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{required: 'Code is required'}}
        />

<CustomInput
          placeholder="Enter your new password"
          name="name"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 7,
              message: 'Password should be at least 7 characters long',
            },
          }}
        />


<CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />
    


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

export default NewPasswordScreen;