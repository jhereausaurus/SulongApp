import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Card } from '@rneui/base';
import CustomButton from '../../components/CustomButton';



const data = [
  { label: 'Court', value: '1' },
  { label: 'Stage', value: '2' },
  { label: 'Tent', value: '3' },
  { label: 'Table', value: '4' },
  { label: 'Chair', value: '5' },
  { label: 'Others', value: '5' },
];

const ReservationSCreen = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text] = React.useState(null);

  return (
    <>
    <ScrollView>
        <View style={styles.container}>
            <Card containerStyle={{marginTop: 110, width: 335, height: 670 }}>
                <Card.Title style = {styles.TitleText}>Reservation</Card.Title>
                <SafeAreaView>
                        <Text  style = {styles.whawers}>   Event/Title:</Text>
                            <TextInput
                            style={styles.one}
                            value={text}
                            placeholder="Enter Event"
                            keyboardType='alphabet'
                        />
                    </SafeAreaView>
                    <View sytle={{backgroundColor:'#fff', borderRadius:15}}>
                     <Text  style = {styles.facilitys}>   Which Facility:</Text>
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
                        <Text>   Description:</Text>
                            <TextInput
                            multiline
                            style={styles.five}
                            value={text}
                            placeholder="Enter the description of your reservation"
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

export default ReservationSCreen;


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
  dropdown: {
    height: 50,
    borderColor: 'gray',
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
    height: 500,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    
  },
  one:{
    height:50,
    margin: 12,
    borderWidth: 1,
    padding:10,
  },
  five:{
    height:300,
    margin: 12,
    borderWidth: 1,
    padding:10,
    height: 340,
  },
  facilitys: {
    color: 'black'
  },
  whawers: {
color: 'black'
  },
  TitleText : {
    fontSize: 24,
  }
});