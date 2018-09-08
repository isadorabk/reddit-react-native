import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
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

  handleRefresh = () => {
    this.setState({
      refreshing: true
    }, () => {
      this.fetchData();
    });
  }

  renderPosts = ({ item }) => <PostItem item={item} />;

  renderSeparator = () => {
    return (
      //TODO: refactor style
      <View style={{ height: 1, width: '100%', backgroundColor: '#CED0CE' }} />
    );
  }

  renderActivityIndicator = () => {
    if (!this.state.loading || this.state.refreshing) return null;
    return (
      //TODO: refactor style
      <View style={{ marginTop: '50%' }}>
        <ActivityIndicator size="large" animating />
      </View>
    );
  }

  render() {
    return (
      //TODO: refactor style
      <View style={{ flex: 1 }}>
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
