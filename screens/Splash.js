import React, {Component, component} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class splash extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#2c3e50'}}>
        <LottieView
          source={require('../component/assest/splash.json')}
          autoPlay
          loop={false}
          speed={0.5}
          onAnimationFinish={() => {
            console.log('Animated finished');
            this.props.navigation.replace('onboarding');
            
          }}
        />
      </View>
    );
  }
}
