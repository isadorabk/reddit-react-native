import React, { Component } from 'react';
import { FlatList, Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native';

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

  //TODO: PostItem component
  renderPosts = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => console.log('Pressed!')}>
        <View>
          <Image
            style={{ width: 140, height: 112 }} 
            source={{ uri: item.data.url }} 
          />
        </View>
        <View>
          <Text>{item.data.created}</Text>
          <Text>{item.data.title}</Text>
        </View>
        <View>
          <Text>{item.data.author}</Text>
          <Text>{item.data.score}</Text>
          <Text>{item.data.num_comments}</Text>
        </View>
      </TouchableOpacity>
    );
  }

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
      <View>
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
