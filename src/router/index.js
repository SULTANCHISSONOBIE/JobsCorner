import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Profile, Save, Splash, TesKemampuan, TesMinat, Detailjob, Pengaturan, Signin, Signup} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false}}/>
      <Tab.Screen name="Saved" component={Save} options={{ headerShown: false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
      <Tab.Screen name="Signup" component={Signup} options={{ headerShown: false}}/>
      <Tab.Screen name="Signin" component={Signin} options={{ headerShown: false}}/>
      <Tab.Screen name="Detail" component={Detailjob} options={{ headerShown: false}}/>
      <Tab.Screen name="Tes Minat" component={TesMinat} options={{ headerShown: false}}/>
      <Tab.Screen name="Tes Kemampuan" component={TesKemampuan} options={{ headerShown: false}}/>
      <Tab.Screen name="setting" component={Pengaturan} options={{ headerShown: false}}/>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false}}/>
      </Stack.Navigator>

  );
};

export default Router;

const styles = StyleSheet.create({});