import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import R1Screen from './screens/R1Screen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAXozyFn0-HNwkU2ZXbwcLOo2nXVSye_G4",
  authDomain: "findbar-d082f.firebaseapp.com",
  projectId: "findbar-d082f",
  storageBucket: "findbar-d082f.appspot.com",
  messagingSenderId: "251276747577",
  appId: "1:251276747577:web:03b1d2f391740725677ee8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerShown: false //this will hide the header
    },
},
});


const AuthStack = createStackNavigator({
  Login : {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Prijava',
    },
},
  Register : RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading : LoadingScreen,
      App : AppStack,
      Auth : AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
