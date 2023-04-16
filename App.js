import { StyleSheet, Text, View } from 'react-native';
import React,{Component} from "react";
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import LoginScreen from './Screens/LoginScreen';
import Profile from './Screens/Profile';
import HomeScreen from './Screens/HomeScreen';
import Fantasy from './Screens/Fantasy';
import Fiction from './Screens/Fiction';
import Romance from './Screens/Romance';
import Thriller from './Screens/Thriller';

export default class App extends Component{
  render(){
  return (
    <View >

      <AppContainer></AppContainer>
      
          </View>
  );
  }
}

var appNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  Profile:Profile,
  HomeScreen:HomeScreen,
  Fantasy:Fantasy,
  Fiction:Fiction,
  Thriller:Thriller,
  Romance:Romance
})
const AppContainer = createAppContainer(appNavigator)