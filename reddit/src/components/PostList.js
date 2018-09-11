import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import PostItem from './PostItem';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      loading: false,
      refreshing: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const url = 'https://api.reddit.com/r/pics/new.json';
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState({
        loading: false,
        refreshing: false,
        posts: responseJson.data.children
      });
    } catch (error) {
      console.error(error);
    }
  }

  styles = StyleSheet.create({
    viewStyle: {
      flex: 1,
      backgroundColor: '#F8F8F8',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.2,
      elevation: 2,
    },
    activityIndicatorStyle: {
      marginTop: '50%'
    },
    separatorStyle: {
      height: 1,
      width: Dimensions.get('window').width - 10,
      marginLeft: 5,
      backgroundColor: '#ddd'
    }
  });

  handleRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.fetchData();
    });
  }

  renderPosts = ({ item }) => <PostItem item={item} />;

  renderSeparator = () => (
    <View style={this.styles.separatorStyle} />
  );

  renderActivityIndicator = () => {
    if (!this.state.loading || this.state.refreshing) return null;
    return (
      <View style={this.styles.activityIndicatorStyle}>
        <ActivityIndicator size="large" animating />
      </View>
    );
  }

  render() {
    return (
      <View style={this.styles.viewStyle}>
        {this.renderActivityIndicator()}
        <FlatList 
          data={this.state.posts}
          keyExtractor={(item) => item.data.id}
          renderItem={this.renderPosts}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

export default PostList;
