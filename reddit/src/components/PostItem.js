import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

class PostItem extends Component {

  render() {
    const { author, created, score, title, thumbnail, url, permalink } = this.props.item.data;
    const comments = this.props.item.data.num_comments;
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <View>
            <Image
              style={{ width: 140, height: 112 }} 
              source={{ uri: thumbnail }} 
            />
          </View>
          <View>
            <Text>{created}</Text>
            <Text>{title}</Text>
          </View>
          <View>
            <Text>{author}</Text>
            <Text>{score}</Text>
            <Text>{comments}</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
  }
}

export default PostItem;
