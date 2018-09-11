import React, { Component } from 'react';
import { WebView } from 'react-native';

class PostWebView extends Component {
  render() {
    const uri = this.props.navigation.getParam('url');
    return (
      <WebView style={{ flex: 1 }} source={{ uri }} />
    );
  }
}

export default PostWebView;
