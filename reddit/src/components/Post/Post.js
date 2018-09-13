import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const { container } = styles;

const Post = ({ children }) => (
  <View style={container}>
    {children}
  </View>
);

export default Post;
