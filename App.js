
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteScreen from './Screens/WritingScreen'
import ReadScreen from './screens/ReadingScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
        );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read : {screen: ReadScreen},
  Write : {screen: WriteScreen},
});

const AppContainer = createAppContainer(TabNavigator)