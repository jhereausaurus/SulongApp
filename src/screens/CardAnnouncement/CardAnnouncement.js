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
          <Card.Title>Barangay Guadalupe Viejo FREE FOODS</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 10 }}
            source={{
              uri:
                'https://files01.pna.gov.ph/source/2021/04/25/img20210425143107.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Brgy Guadalupe viejo provided free foods to the poor as a project of the SK named : Gabriel and other various SK as well
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
          <Card.Title>WATER INTERRUPTION ON BRGY GUADALUPE</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 10 }}
            source={{
              uri:
                'https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/53915115_1930158563762151_7374565766147866624_n.png?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG8yCNKRN7fJuYM8RBBRM3qgin9GkWVKkyCKf0aRZUqTEyuqhkwGMChWFJf9pbi9fVrzfhjf25w_APc5t8rJUoC&_nc_ohc=4RzNpv1aYgsAX__u31E&_nc_ht=scontent.fmnl9-2.fna&oh=00_AT8kLM6y1pvkNt7ans1oaeIbh22eHJ5Kcf4R6s_HDDWeYQ&oe=637BB6F6',
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
          <Card.Title>LIBRENG TULI PARA SA KABATAAN</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://scontent.fmnl9-4.fna.fbcdn.net/v/t31.18172-8/29872969_1510545215734266_6388796155653871_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHAqxAxMYu3fcJVFCWU23TFPDHT3vpPNEA8MdPe-k80QCyaS7O14eJKoZG4dfC6nqsgygyI030qIclhMLtafXPN&_nc_ohc=FvB2UfCx4wAAX8BpdZW&_nc_ht=scontent.fmnl9-4.fna&oh=00_AT-bq6LHulDGKvXijd184MANShj10giWxIA5cvPdbJDUCw&oe=637CE1D7',
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