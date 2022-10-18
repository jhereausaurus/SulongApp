
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Card } from '@rneui/base';
import CustomButton from '../../components/CustomButton';


const data = [
  { label: 'Health Certificate', value: '1' },
  { label: 'Barangay Clearcance', value: '2' },
  { label: 'Barangay ID', value: '3' },
  { label: 'Business Permit', value: '4' },
  { label: 'Travel Pass', value: '5' },
  { label: 'Others', value: '6' },
];

const RequestAndI = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text] = React.useState(null);

  return (
    <>
    <ScrollView>
        <View style={styles.container}>
            <Card containerStyle={{ marginTop: 110, width: 335, height: 645 }}>
                <Card.Title style = {styles.TitleText}>Request & Inquries</Card.Title>
                    <View sytle={{backgroundColor:'#fff', borderRadius:15}}>
                     <Text style = {styles.romansText}>   What would you like to request:</Text>
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                     <SafeAreaView>
                           <Text style = {styles.italicText}>   Request Description:</Text>
                            <TextInput
                            multiline
                            style={styles.input}
                            value={text}
                            placeholder="Enter your request description"
                            keyboardType='alphabet'
                            numberOfLines={10}
                        />
                    </SafeAreaView>
                    <CustomButton
                     text="send" onPress={() => Alert.alert('Simple Button pressed')}
                    />
                </View>
            </Card>
        </View>
    </ScrollView>
    </>
  );
};

export default RequestAndI;


const styles = StyleSheet.create({
  container: {
 
    backgroundColor: '#99E7E2',
    position: 'relative',
    justifyContent: 'center',
    top: -100,
    width: -10,
    flex: 1,
    alignContent:'stretch',
    
  },
  TitleText: {
    fontSize: 24,
  },
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
 
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: 'black',
  },
  input:{
    height:435,
    margin: 10,
    borderWidth: 1,
    padding:10,
  },
  italicText: {
    color: 'black',
  },
  romansText: {
    color: 'black'
  }
});