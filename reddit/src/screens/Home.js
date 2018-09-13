import React from 'react';
import { View } from 'react-native';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import CategoryPicker from '../components/CategoryPicker/CategoryPicker';

const headerText = 'Reddit \n /r/pics';
const categoriesList = [
  {
    label: 'New',
    value: 'new'
  }, {
    label: 'Top',
    value: 'top'
  }, {
    label: 'Hot',
    value: 'hot'
  }, {
    label: 'Controversial',
    value: 'controversial'
  }
];
const selectedCategory = 'new';

const Home = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={headerText} />
    <CategoryPicker categoriesList={categoriesList} selectedCategory={selectedCategory} />
    <PostList />
  </View>
);

export default Home;
