import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';
import Post from './Post';

class PostItem extends Component {
  thumbnailHeight = this.props.item.data.thumbnail_height;
  thumbnailWidth = this.props.item.data.thumbnail_width;
  
  styles = StyleSheet.create({
    containerStyle: {
      flexDirection: 'row'
    },
    imageContainerStyle: {
      width: this.thumbnailWidth * 0.75,
      height: this.thumbnailHeight * 0.75,
      alignSelf: 'center'
    },
    imageStyle: {
      flex: 1
    },
    textContainerStyle: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 5,
      width: Dimensions.get('window').width - 120,
    },
    dateStyle: {
      alignSelf: 'flex-end',
      fontSize: 10,
      marginBottom: 5
    },
    titleStyle: {
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center'
    },
    subtitlesContainerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    subtitlesStyle: {
      fontSize: 10
    }

  });

  renderComments = () => {
    const { num_comments: comments } = this.props.item.data;
    const numComments = comments > 1000 ? `${(comments / 1000).toFixed(1)}k` : comments;
    return (
    <Text style={this.styles.subtitlesStyle}>
      {numComments} {comments > 1 ? 'comments' : 'comment'}
    </Text>
    );
  }

  renderScore = () => {
    const { score } = this.props.item.data;
    const numScore = score > 1000 ? `${(score / 1000).toFixed(1)}k` : score;
    return (
      <Text style={this.styles.subtitlesStyle}>
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
      permalink
    } = this.props.item.data;
    const url = `https://reddit.com${permalink}`;
    const { navigate } = this.props.navigation;
    const relativeDate = moment.unix(date).fromNow();
    return (
      <Post>
        <TouchableOpacity 
          style={this.styles.containerStyle}
          onPress={() => navigate('PostWebView', { url })}
        >
          <View style={this.styles.imageContainerStyle}>
            <Image
              style={this.styles.imageStyle}
              resizeMode='contain'
              source={{ uri: thumbnail }} 
            />
          </View>
          <View style={this.styles.textContainerStyle}>
            <Text style={this.styles.dateStyle}>{relativeDate}</Text>
            <Text style={this.styles.titleStyle}>{title}</Text>
            <View style={this.styles.subtitlesContainerStyle}>
              <Text style={this.styles.subtitlesStyle}>
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
