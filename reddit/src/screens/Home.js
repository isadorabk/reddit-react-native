import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header';
import PostList from '../components/PostList';
import PickerCategory from '../components/PickerCategory';

const Home = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Reddit \n /r/pics'} />
    <PickerCategory />
    <PostList />
  </View>
);

export default Home;
