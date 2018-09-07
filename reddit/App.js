import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header headerText={'Reddit \n /r/pics'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
  },
});
