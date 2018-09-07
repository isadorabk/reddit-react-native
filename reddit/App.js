import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import PostList from './src/components/PostList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText={'Reddit \n /r/pics'} />
        <PostList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
});
