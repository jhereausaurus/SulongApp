import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Card } from '@rneui/base';
import CustomButton from '../../components/CustomButton';

const data = [
  { label: 'Theft', value: '1' },
  { label: 'Fire', value: '2' },
  { label: 'Riot', value: '3' },
  { label: 'Missing Person', value: '4' },
  { label: 'Missing Pet', value: '5' },
  { label: 'Others', value: '6' },
];

const Reporting = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [text] = React.useState(null);

  return (
    <>
    <ScrollView>
    <View style={styles.container}>
            <Card containerStyle={{ marginTop: 110, width: 355, height: 660 }}>
                <Card.Title style = {styles.TitleText}>Incident Report</Card.Title>
        <View sytle={{backgroundColor:'black', borderRadius:15}}>
          <Text style = {styles.subti}>    What kind of Incident:</Text>
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
                <Text style = {styles.subti}>    Request Description (how does it happen):</Text>
                <TextInput
                    multiline
                    style={styles.nat}
                    value={text}
                    placeholder="Enter your request description"
                    keyboardType='alphabet'
                    numberOfLines={10}
                />
            </SafeAreaView>
            <CustomButton
            text="send"
            onPress={() => Alert.alert('Simple Button pressed')}/>
        </View>
        </Card>
    </View>
    </ScrollView>
    </>
  );
};



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
    backgroundColor: 'black',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
  nat:{
    height: 430,
    margin: 10,
    borderWidth: 1,
    padding:10,
  },
  TitleText:{
    fontSize: 24,
  },
  subti: {
    color: 'black'
  }
});
export default Reporting;