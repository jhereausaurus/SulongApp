import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Img from '../../../assets/images/Img_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form'



const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;


const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('Password');
    const Navigation = useNavigation();
   

    
    const onRegisterPressed = () => {
        console.warn('onRegisterPressed');

        Navigation.navigate('ConfirmEmail');
    };
    const onSignInPress= () => {
        console.warn('onSignInPress');
        Navigation.navigate('SignIn');
    };
  
    const onTermsOfUsePressed= () => {
        console.warn('onTermsOfUsePressed');
    };
    const onPrivacyPressed= () => {
        console.warn('onPrivacyPressed');
    };

  return (
    <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Create An Account</Text>


<CustomInput 
name="FirstName"
control={control}
placeholder= "FirstName"
rules={{required: 'Username is Required',
minLength: {value: 3, message: 'Firstname should be minimum 3 characters long', 
},
maxLength: {value: 24, message: 'Firstname should be maximum 24 characters long', 
},
}} 
/>

<CustomInput 
name="MiddleName"
control={control}
placeholder= "MiddleName (Optional)" 

 />
 <CustomInput 
name="LastName"
control={control}
placeholder= "LastName"
rules={{required: 'LastName is Required'}}
 />
 <CustomInput 
name="Contact-Number"
control={control}
placeholder= "Contact Number"
rules={{required: 'Contact Number is Required'}}
 />

<CustomInput 
name="Username"
control={control}
placeholder= "Username" 
rules={{required: 'Username is Required'}}
 />
 <CustomInput 
name="Email"
control={control}
placeholder= "Email" 
rules={{pattern: {value: EMAIL_REGEX, message: 'email is invalid'}}}
 />

 <CustomInput 
name="Password"
control={control}
placeholder= "Password"
secureTextEntry

rules={{
    pattern: {value: PASS_REGEX, message: 'Error password must be: \n - Uppercase and Lowercase Letters (A - z) \n - Numeric Character (0-9) \n - Special Character (!,%,@,#,etc) \n - Minimum Password Length is 8'}

}} 

 />

<CustomInput 
name="Password-Repeat"
control={control}
placeholder= "Repeat Password" 
secureTextEntry
rules={{
    validate: value => value === pwd ||  'Password do not match',
    required: { value: PASS_REGEX, message: 'password must contain special letters, and should be in Upper and Lower case'}
}}
 />

    <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)}  />
    
<Text style={styles.text}> 
By Registering, you confirm that you accept our{' '} 
<Text style={styles.link} onPress={onTermsOfUsePressed}>terms of use </Text> and {' '} 
<Text style={styles.link}onPress={onPrivacyPressed}>privacy and policy</Text>
</Text>


 
 <CustomButton 
 text="Have an Account? Sign In"
  onPress={onSignInPress} 
  type="TERTIARY"  />

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

export default SignUpScreen;