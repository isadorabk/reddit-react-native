import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers/posts.reducer';
import Home from './src/screens/Home';
import PostWebView from './src/screens/PostWebView';

const store = createStore(reducers);

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
