import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Onboarding from '../screens/Onboarding';
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/signUp';
import SplashScreen from '../screens/Splash';
import ResetPassword from '../screens/resetPassword';
import Home from '../screens/DrawerScreen/Home';
import Setting from '../screens/DrawerScreen/Setting';
import Details from '../screens/DrawerScreen/Details';



import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;
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


  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
    GoogleSignin.configure({
      webClientId: 'YOUR_APP_WEB_CLIENT_ID',
    });
  
  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'splash';
  } else {
    routeName = 'login';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="onboarding"
        component={Onboarding}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="signUp"
        component={SignUpScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="reset" component={ResetPassword} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="drawerTab" children={DrawerTab} />
    </Stack.Navigator>
  );
};

export default AuthStack;
