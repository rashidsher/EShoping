import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import FormButton from '../component/FormButton';
import {AuthContext} from '../navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore';
import PostCard from '../component/PostCard';

export default function ProfileScreen() {
  const {user,logout} =useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{user.uid}</Text>
      <FormButton buttonTitle= "Logout" 
      onPress={()=>logout()}></FormButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb5b5a',
    marginBottom: 40,
  },
});
