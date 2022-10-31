import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../components/AppHeader'
const {width, height} = Dimensions.get('window');
import Colors from '../../constants/Colors';
const COLORS = {primary: 'white', white: 'black'};

const slides = [
  {

    id: '1',
    image: require('../../../assets/images/image_1No.png'),
    title: 'Annoucement',
    
  },
  {
    id: '2',
    image: require('../../../assets/images/image_2No.png'),
    title: 'Request and Inqueries',
   
  },
  {
    id: '3',
    image: require('../../../assets/images/image_3No.png'),
    title: 'Reservation',
  
  },
  {
    id: '4',
    image: require('../../../assets/images/image_4No.png'),
    title: 'Incident Report',
  
  },
];

const Slide = ({item}) => {
  const Navigation = useNavigation();
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item.image}
        style={{height: '75%', width, resizeMode: 'contain'}}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
      </View>
    </View>
  );
};

const OnboardingScreen = ({navigation, route}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const Enter = () => {
    
    if ( currentSlideIndex == '0') {
      navigation.navigate('CardAnnouncement');
  }

  else if ( currentSlideIndex == '1') {
    
    navigation.navigate('RequestAndI');
  }
  else if ( currentSlideIndex == '2') {
    navigation.navigate('ReservationSCreen');
  }
 

}
 



  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        {/* Render buttons */}
        <View style={{marginBottom: 20}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{height: 50}}>
              <TouchableOpacity
                 activeOpacity={0.8}
                 style={[
                   styles.btn,
                   {
                     borderColor: COLORS.white,
                     borderWidth: 1,
                     backgroundColor: 'transparent',
                   },
                  ]}
                onPress={() => navigation.replace('Reporting')}>
                <Text style={{fontWeight: 'bold', fontSize: 15, color: COLORS.white,}}>
                  ENTER
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor: 'transparent',
                  },
                ]}
                onPress={Enter}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: COLORS.white,
                  }}>
                  ENTER
                </Text>
              </TouchableOpacity>
              <View style={{width: 15,}} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={goToNextSlide}
                style={styles.btn}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    
                  }}>
                  NEXT
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center',alignContent:'center', backgroundColor: COLORS.primary}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height * 0.75}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
    
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    
  },



Slide: {
  flex:1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent:'center',
    top: -100,
    alignContent:'center'
}


});
export default OnboardingScreen;