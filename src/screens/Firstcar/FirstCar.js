import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,

} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CustomButton from '../../components/CustomButton';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import {CurrentRenderContext, useNavigation} from '@react-navigation/native';
import Header from '../../components/Header/Header';



const data = [
  
  {
    id: 1,
    name: 'Annoucement',
    url: 'https://i.imgur.com/cQimzTW.png',
  },
  {
    id: 2,
    name: 'Request and Inqueries',
    url: 'https://i.imgur.com/38lFkLR.png',
  },
  {
    id: 3,
    name: 'Reservation',
    url: 'https://i.imgur.com/nNFAJre.png',
  },
  {
    id: 4,
    name: 'Incident Report',
    url: 'https://i.imgur.com/6tL0JLx.png',
  },
];




const {width, height} = Dimensions.get('window');
const renderItem = ({item}) => {

  
  return (
    
    <View style={{alignItems: 'center',top: 60}}>
    
        <TouchableOpacity >
        
      <Image
          source={{uri: item.url}}
          resizeMode="cover"
          style={{height: '75%', width, resizeMode: 'contain', top:-80}}
        />
      
    
      <Text style={{textAlign: 'center', marginVertical: 10, fontSize: 30, fontWeight: 'bold', color: "black", top: -100}}>
        {item.name}
      
      </Text>
      
    
      </TouchableOpacity>  
     
    </View>
   
  );
  
};

const FirstCar = () => {
  const [index, setIndex] = useState(0);

  const isCarousel = useRef(null);


  return (

    <View>
      <View style={{paddingBottom: 150}}>

      
   
    
      </View>
      <View
      
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          right: 25,
        top: -100,
       
      
          
    width: '100%',
   
         

        }}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={index => setIndex(index)}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 2.5,
            top: -190,
            borderRadius: 2,
            marginHorizontal: 3,
            backgroundColor: 'grey',
            right: -20,
          }}
          tappableDots={true}
          inactiveDotStyle={{
            backgroundColor: 'black',
            // Define styles for inactive dots here
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />

      </View>
    </View>
    
  
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    top: -250,
    
    
  },
}
)



export default FirstCar;
