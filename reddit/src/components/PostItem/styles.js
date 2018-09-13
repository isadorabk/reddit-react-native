import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  touchableContainer: {
    flexDirection: 'row'
  },
  imageContainer: {
    alignSelf: 'center'
  },
  image: {
    flex: 1
  },
  textContainer: {
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
  subtitlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subtitles: {
    fontSize: 10
  }
});
