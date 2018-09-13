import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const { container, text } = styles;

const Header = ({ headerText }) => {
  return (
    <View style={container}>
      <Text style={text}>{headerText}</Text>
    </View>
    );
};

export default Header;
