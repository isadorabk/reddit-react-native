import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PostItem from './PostItem';
import { getPostsByCategory, refreshPosts } from '../actions/posts.actions';

class PostList extends Component {

  componentDidMount() {
    this.props.getPostsByCategory(this.props.category);
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
    this.props.refreshPosts({ refreshing: true });
    this.props.getPostsByCategory(this.props.category);
  }

  renderActivityIndicator = () => {
    if (!this.props.loading || this.props.refreshing) return null;
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
          refreshing={this.props.refreshing}
          onRefresh={this.handleRefresh}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return ({
      loading: state.posts.loading,
      refreshing: state.posts.refreshing,
      category: state.posts.category,
      posts: state.posts.posts
    });
};

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  refreshPosts: refreshing => dispatch(refreshPosts(refreshing))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
