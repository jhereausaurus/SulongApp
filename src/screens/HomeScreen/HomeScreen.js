import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions,Button } from 'react-native';
import { CurrentRenderContext, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';

// Tab ICons...
import ProfileJD from '../../../assets/images/ProfileJD.png';
import homelogo from '../../../assets/images/homelogo.png';
import search from '../../../assets/images/search.png';
import notifications from '../../../assets/images/bell.png';
import settings from '../../../assets/images/settings.png';
import logout from '../../../assets/images/logout.png';
import aboutt from '../../../assets/images/aboutt.png';
import incidentt from '../../../assets/images/incidentt.png';
import reservedd from '../../../assets/images/reservedd.png';
import request from '../../../assets/images/request.png';
// Menu
import menu from '../../../assets/images/menu.png';
import close from '../../../assets/images/close.png';
import photo from '../../../assets/images/photo.jpg';
//  screen
import OnboardingScreen from '../OnboardingScreen/OnboardingScreen'
import CardAnnouncement from '../CardAnnouncement/CardAnnouncement'
import Reporting from '../IncidentReport/Reporting';
import ReservationSCreen from '../ReservationScreen/ReservationScreen';
import RequestAndI from '../RequestandI/RequestAndI';
import LogInPageScreen from '../LogInPageScreen';
import FirstCar from '../Firstcar/FirstCar';
import Dashboard from '../DashboardScreen/Dashboard';
import CarouselCards from '../AboutUs/CarouselCards';
import Settings from '../Settings/Settings';



export default function HomeScreen() {

  const [currentTab, setCurrentTab] = useState("WELCOME!!");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
 const Navigation = useNavigation();
  return (



    
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={ProfileJD} style={{
          width: 120,
          height: 120,
          borderRadius: 10,
          marginTop: 40
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          marginTop: 20
        }}>Jher Domz</Text>

        <TouchableOpacity onPress={() => Navigation.replace('Profile')}>
          <Text style={{
            marginTop: 6,
            color: 'black'
          }}>View Profile</Text>
          
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 70 }}>
          {
            // Tab Bar Buttons....
          }
      
          {TabButton(currentTab, setCurrentTab, "Home", homelogo)}
          {TabButton(currentTab, setCurrentTab, "Dashboard", search)}
          {TabButton(currentTab, setCurrentTab, "Announcement", notifications)}
          {TabButton(currentTab, setCurrentTab, "Request and Inquiry", request)}
          {TabButton(currentTab, setCurrentTab, "Reservation", reservedd)}
          {TabButton(currentTab, setCurrentTab, "Incident Report", incidentt)}
          {TabButton(currentTab, setCurrentTab, "About", aboutt)}
          {TabButton(currentTab, setCurrentTab, "Settings", settings)}

        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
        </View>

      </View>

      {
        
        
      }

      <Animated.View style={{
        // screen
        
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        {
          // Menu Button...
         
        }

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              // headings and x button
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 15,

            }}></Image>

          </TouchableOpacity>

          


          <Text style={{
            // dito ung edit ng headings
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
            // sa baba ng current tab pwede ka mag dagdag ng ilalagay sa screen kahit wala ng view
          }}>{currentTab}</Text>
  

            <FirstCar/>



  

          
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );

}





// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  const Navigation = useNavigation();
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        setCurrentTab(Navigation.navigate('LogInPageScreen'));
        console.warn('Log Out');
      }
      else if (title == "Home") {
        
        setCurrentTab(Navigation.navigate('OnboardingScreen'));
       
        
      }
      else if (title == "Announcement") {
        
      
        setCurrentTab(Navigation.navigate('CardAnnouncement'));
  
      }
      else if (title == "Incident Report") {
        
        setCurrentTab(<Reporting/>);
        
      }
      else if (title == "Reservation") {
        
        setCurrentTab(<ReservationSCreen/>);
        
      }
      else if (title == "Request and Inquiry") {
        
        setCurrentTab(<RequestAndI/>);
        
      }
      else if (title == "Dashboard") {
        
        setCurrentTab(<Dashboard/>);
        
      }
      else if (title == "About") {
        
        
        setCurrentTab(Navigation.navigate('CarouselCards'));
      }
      else if (title == "Settings") {
        
        
        setCurrentTab (Navigation.replace('Settings'));
      }


      else {
    
        setCurrentTab(title)
        
      }
    }}>
     
     
      



      <View style={{
        // tab design whole design
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 5,
        top: -55
      }}>

        <Image source={image} style={{
          //tab image design
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "black"
        }}></Image>

        <Text style={{
          // tab text design
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "black"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99E7E2',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
  },

});

