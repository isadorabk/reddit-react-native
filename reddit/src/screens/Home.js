import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import PostList from '../components/PostList';

const Home = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Reddit \n /r/pics'} />
    <PostList />
  </View>
);

export default Home;
