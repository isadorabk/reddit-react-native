import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
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
  separator: {
    height: 1,
    width: Dimensions.get('window').width - 10,
    marginLeft: 5,
    backgroundColor: '#ddd'
  }
});
