import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

class PostItem extends Component {

  render() {
    const { 
      author,
      created_utc: date,
      score,
      title,
      thumbnail,
      num_comments: comments,
      permalink
    } = this.props.item.data;
    const url = `https://reddit.com${permalink}`;
    const { navigate } = this.props.navigation;
    const relativeDate = moment.unix(date).fromNow();
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigate('PostWebView', { url })}>
          <View>
            <Image
              style={{ width: 140, height: 112 }} 
              source={{ uri: thumbnail }} 
            />
          </View>
          <View>
            <Text>{relativeDate}</Text>
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

export default withNavigation(PostItem);
