import React from 'react';
import { View, ScrollView, StyleSheet, Image, } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import CustomButton from '../../components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const CardAnnouncement = () => {
return (
  <>
  <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <SafeAreaView>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 10 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                
                iconStyle={{ marginRight: 10 }}
              />
              
            }
            buttonStyle={{
              borderRadius: 25,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15,
            
            }}
            title="SEE MORE"
          />
          </SafeAreaView>
        </Card>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 10 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
              
            }
            buttonStyle={{
              borderRadius: 25,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15,
            }}
            title="SEE MORE"
          />
        </Card>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="red"
                iconStyle={{ marginRight: 10 }}
              />
              
            }
            buttonStyle={{
              borderRadius: 25,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 15,
            }}
            title="SEE MORE"
          />
          
        </Card>
        
      </View>
      
    </ScrollView>
    </SafeAreaView>
  </>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: -1500,
  height: -1500,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
});

export default CardAnnouncement;