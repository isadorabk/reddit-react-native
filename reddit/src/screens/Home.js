import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import CategoryPicker from '../components/CategoryPicker/CategoryPicker';

const Home = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Reddit \n /r/pics'} />
    <CategoryPicker />
    <PostList />
  </View>
);

export default Home;
