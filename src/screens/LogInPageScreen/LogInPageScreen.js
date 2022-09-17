import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView,} from 'react-native';
import Img from '../../../assets/images/image5.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';

const LogInPageScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const Navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Signed In');

        //validate user
Navigation.navigate('SignIn');

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
<View style={styles.hairlines} />
    <View style={styles.root}>
     <Image source={Img} styles={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
     
       <Text style={styles.innerText}>Community Interaction Made Easy</Text>
       <View style={styles.hairline} />
  

<Text style={styles.jointext}> JOIN US WITH</Text>

    <SocialSignInButtons />
 
 <CustomButton 
 text="Dont have an account yet? click here"
 
  onPress={onSignedUpPress} 
  type="TERTIARY"  
  
  
  />
    

  <CustomButton text="Signed In" onPress={onSignInPressed}  />
  
<View style={styles.hairliness} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
   
    logo: {
        width: '70%',
        maxHeight: 300,
        maxWidth: 200,
    },
    innerText: {
        fontWeight: 'bold',
        color: 'black',
        top: -15,
      },

      jointext:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        padding: 15,

      },
      hairline: {
        backgroundColor: 'black',
        height: 3,
        width: 260,
        top: -15,
        flex: 1,
        
        
      },
      hairlines: {
      left: 40,
        backgroundColor: 'black',
        height: 3,
        width: '80%' ,
        top: 150,
        flex: 1,
        
     
      },
      hairliness: {
        backgroundColor: 'gray',
        height: 2,
        width: '18%',
        top: -80,
        left: 85,
        flex: 1,
        
        
      }
  
  
});

export default LogInPageScreen;