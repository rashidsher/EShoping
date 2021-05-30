import React, {Component, component} from 'react';

import {View, Text,Image,Button,TouchableOpacity} from 'react-native';
import OnboardingComponent from 'react-native-onboarding-swiper';


export default function Onboarding({navigation}) {
 

    
      const Done = ({...props}) => (
        <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
          <Text style={{fontSize: 16}}>Done</Text>
        </TouchableOpacity>
      );
        
             
         
      
    return (
      <OnboardingComponent
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace('login')}
        onDone={() => navigation.navigate('login')}
        pages={[
          {
            backgroundColor: '#a6e4d8',
            image: (
              <Image
                source={require('../component/assest/clothes.png')}
                style={{width: 360, height: 280}}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fdeb93',
            image: (
              <Image
                source={require('../component/assest/pickUp.png')}
                style={{width: 320, height: 200, margin: 10, marginTop: 20}}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#e9bcbe',
            image: (
              <Image
                source={require('../component/assest/parsal.png')}
                style={{width: 230, height: 280}}
              />
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    );
  }

