import React from 'react'
import {View, StyleSheet, Text, Dimensions } from 'react-native';

const Header = ({label}) => {
   console.log(label);
    return(
        <View style={styles.container}>
            <Text style={styles.labelStyle}>{label}</Text>
          
        </View>
    );
};

const deviceWidth = Math.round(Dimensions.get('window').width);


const styles = StyleSheet.create({
container:{
    width: deviceWidth,
    height: 90,
 
    justifyContent: 'flex-end',
    paddingBottom: 20,
    alignItems: 'center',
    right: 15,
},

labelStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 20,
    
}



})

export default Header;