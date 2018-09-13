import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    elevation: 2
  },
  text: {
    width: '40%',
    textAlign: 'right'
  },
  pickerContainer: {
    width: '40%'
  },
  pickerItem: {
    height: 40,
    fontSize: 15,
    fontWeight: '900'
  }
});
