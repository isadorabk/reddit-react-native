import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import PostItem from '../PostItem/PostItem';
import { getPostsByCategory, refreshPosts } from '../../actions/posts.actions';
import styles from './styles';

const { container, activityIndicatorStyle, separator } = styles;

class PostList extends Component {

  componentDidMount() {
    this.props.getPostsByCategory(this.props.category);
  }

  handleRefresh = () => {
    this.props.refreshPosts({ refreshing: true });
    this.props.getPostsByCategory(this.props.category);
  }

  renderActivityIndicator = () => {
    if (!this.props.loading || this.props.refreshing) return null;
    return (
      <View style={activityIndicatorStyle}>
        <ActivityIndicator size="large" animating />
      </View>
    );
  }

  renderPosts = ({ item }) => <PostItem item={item} />;

  renderSeparator = () => (
    <View style={separator} />
  );

  render() {
    return (
      <View style={container}>
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

const mapStateToProps = state => ({
  loading: state.posts.loading,
  refreshing: state.posts.refreshing,
  category: state.posts.category,
  posts: state.posts.posts
});

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  refreshPosts: refreshing => dispatch(refreshPosts(refreshing))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
