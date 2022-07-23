import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoriteScreen from '../screens/FavoriteScreen';
import MapsScreen from '../screens/MapsScreen';
import NavScreen from '../screens/NavScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import R1Screen from "../screens/R1Screen";
import { createStackNavigator } from "@react-navigation/stack";
import QRScreen from "../screens/QRScreen";
import PasswordScreen from "../screens/PasswordScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import PointsScreen from "../screens/PointsScreen";
import B1Screen from "../screens/B1Screen";
import R2Screen from "../screens/R2Screen";
import B2Screen from "../screens/B2Screen";
import temp from "../screens/temp";
import tempClass from "../screens/tempClass";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Stacks = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="tabs" component={Tabs} />
      <Stack.Screen name=" " component={R1Screen}  />
      <Stack.Screen name="Slavonski biser" component={R2Screen}  />
      <Stack.Screen name="Soho bar" component={B1Screen}  />
      <Stack.Screen name="Metropolis" component={B2Screen}  />
      <Stack.Screen name="QR" component={QRScreen}  />
      <Stack.Screen name="Postavke privatnosti" component={PasswordScreen}  />
      <Stack.Screen name="Uređivanje profila" component={EditProfileScreen}  />
      <Stack.Screen name="Stanje bodova" component={PointsScreen}  />
      <Stack.Screen name="temp" component={tempClass}  />
    </Stack.Navigator>
  );
}

const Tabs = () => {
    return(
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{activeTintColor: '#230B34', keyboardHidesTabBar:true}}>
            <Tab.Screen name = "Favorite" component = {FavoriteScreen} options={{
                    tabBarLabel: 'Omiljeno',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="heart-box" color={color} size={size} />
          ),
        }}/>
            <Tab.Screen name = "Maps" component = {MapsScreen} options={{
                    tabBarLabel: 'Karta',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="google-maps" color={color} size={size} />
          ),
        }}/>
            <Tab.Screen
                name="Home"
                component={NavScreen}
                options={{
                    tabBarLabel: 'Naslovna',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
            <Tab.Screen name = "Notification" component = {NotificationScreen} options={{
                    tabBarLabel: 'Obavijesti',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen} options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}/>
        </Tab.Navigator>
    );
}

export default Stacks;