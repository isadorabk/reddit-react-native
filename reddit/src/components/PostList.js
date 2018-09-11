import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPosts } from '../actions/posts.actions';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
      refreshing: false
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const url = `https://api.reddit.com/r/pics/${this.props.category}.json`;
    this.setState({ loading: true });
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      this.props.getPosts(responseJson.data.children);
      this.setState({
        loading: false,
        refreshing: false
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

  renderActivityIndicator = () => {
    if (!this.state.loading || this.state.refreshing) return null;
    return (
      <View style={this.styles.activityIndicatorStyle}>
        <ActivityIndicator size="large" animating />
      </View>
    );
  }

  renderPosts = ({ item }) => <PostItem item={item} />;

  renderSeparator = () => (
    <View style={this.styles.separatorStyle} />
  );

  render() {
    return (
      <View style={this.styles.viewStyle}>
        {this.renderActivityIndicator()}
        <FlatList 
          data={this.props.posts}
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

const mapStateToProps = state => ({
  posts: state.posts,
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  getPosts: posts => dispatch(getPosts(posts))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
