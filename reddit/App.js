import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './src/reducers/index';
import Home from './src/screens/Home';
import PostWebView from './src/screens/PostWebView';
import apiMiddleware from './src/middlewares/api.middleware';

const store = createStore(reducer, applyMiddleware(logger, apiMiddleware));

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
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
