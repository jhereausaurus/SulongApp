import React, {useState, useRef} from 'react';
import {Text, View, Dimensions, Image, Button, TouchableHighlight, } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import { CurrentRenderContext, useNavigation } from '@react-navigation/native';





const data = [
  {
    id: 1,

    url: 'https://imgur.com/Q7P7h6b.png',
  },
  {
    id: 2,
   
    url:'https://imgur.com/fl1zEej.png',
  },
  {
    id: 3,
   
    url: 'https://imgur.com/XXfJcv0.png',
  },

];




const renderItem = ({item}) => {
  


  return (
 

    <View

  
      style={{
        
        borderWidth: 5,
        padding: 20,
        borderRadius: 20,
        itemHeight: 400,
        position: 'relative',
       
        alignItems: 'center',
        backgroundColor: '#99E7E2',
       
      }
    
      } >

<Text style={{ fontWeight: 'bold',color: 'black', top: -10,fontSize: 30,  }}>     EMERGENCY CONTACT DETAILS</Text>


      <Image 
source={{uri: item.url}}

      
      resizeMode="cover"
      style={{width: 300, height: 470}}
      />
       
       
 
    
    </View>
  
    
  );
 
};

 




const InfoOverlayScreen = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  

       



  return (
    
    <View 
    
    style={{paddingTop: 50,
      alignItems: 'center'}}>
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
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
         
          backgroundColor: '#F4BB41',
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





  );
};


export default InfoOverlayScreen