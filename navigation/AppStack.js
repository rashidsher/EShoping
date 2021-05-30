/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage';

import Onboarding from '../screens/Onboarding';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/signUp';
import SplashScreen from '../screens/Splash';
import ResetPassword from '../screens/resetPassword';
import Home from '../screens/DrawerScreen/Home';
import Setting from '../screens/DrawerScreen/Setting';
import Details from '../screens/DrawerScreen/Details';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppStack() {
  const DrawerTab = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          title="Home"></Drawer.Screen>
        <Drawer.Screen name="Setting" component={Setting}></Drawer.Screen>
      </Drawer.Navigator>
    );
  };

  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('AlreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('AlreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
       routeName = 'splash';
  } else {
       routeName = 'login';
  }
     return (
     
         <Stack.Navigator
           initialRouteName={routeName}
           screenOptions={{
             headerShown: false,
           }}>
           <Stack.Screen name="splash" component={SplashScreen} />
           <Stack.Screen name="onboarding" component={Onboarding} />
           <Stack.Screen name="login" component={LoginScreen} />
           <Stack.Screen name="signUp" component={SignUpScreen} />
           <Stack.Screen name="reset" component={ResetPassword} />
           <Stack.Screen name="details" component={Details} />
           <Stack.Screen name="drawerTab" children={DrawerTab} />
         </Stack.Navigator>
      
     );
}
