import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import Post from '../Post/Post';
import styles from './styles';

const { 
  touchableContainer,
  imageContainer,
  image,
  textContainer,
  dateStyle,
  titleStyle,
  subtitlesContainer,
  subtitles
} = styles;

class PostItem extends Component {

  renderComments = () => {
    const { num_comments: comments } = this.props.item.data;
    const numComments = comments > 1000 ? `${(comments / 1000).toFixed(1)}k` : comments;
    return (
    <Text style={subtitles}>
      {numComments} {comments > 1 ? 'comments' : 'comment'}
    </Text>
    );
  }

  renderScore = () => {
    const { score } = this.props.item.data;
    const numScore = score > 1000 ? `${(score / 1000).toFixed(1)}k` : score;
    return (
      <Text style={subtitles}>
        Score: {numScore}
      </Text>
    );
  }
  
  render() {
    const { 
      author,
      created_utc: date,
      title,
      thumbnail,
      thumbnail_height: thumbnailHeight,
      thumbnail_width: thumbnailWidth,
      permalink
    } = this.props.item.data;
    const url = `https://reddit.com${permalink}`;
    const { navigate } = this.props.navigation;
    const relativeDate = moment.unix(date).fromNow();
    return (
      <Post>
        <TouchableOpacity 
          style={touchableContainer}
          onPress={() => navigate('PostWebView', { url })}
        >
          <View 
            style={{ 
              ...imageContainer,
              width: thumbnailWidth * 0.75,
              height: thumbnailHeight * 0.75,
            }}
          >
            <Image
              style={image}
              resizeMode='contain'
              source={{ uri: thumbnail }} 
            />
          </View>
          <View style={textContainer}>
            <Text style={dateStyle}>{relativeDate}</Text>
            <Text style={titleStyle}>{title}</Text>
            <View style={subtitlesContainer}>
              <Text style={subtitles}>
                By {author}
              </Text>
              {this.renderScore()}
              {this.renderComments()}
            </View>
          </View>
        </TouchableOpacity>
      </Post>
  );
  }
}

export default withNavigation(PostItem);
