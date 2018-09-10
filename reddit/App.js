import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import PostWebView from './src/screens/PostWebView';

const AppNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    PostWebView: { screen: PostWebView }
  }, {
    initialRouteName: 'Home'
  }
);

export default class App extends Component {
  render() {
    return <AppNavigation />;
  }
}
