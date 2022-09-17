/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import Navigation from './src/navigation';
import HomeScreen from './src/screens/HomeScreen';





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
}
});

export default App;