import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { getPostsByCategory } from '../actions/posts.actions';

class PickerCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'new',
      categoriesList: [
        {
          label: 'New',
          value: 'new'
        }, {
          label: 'Top',
          value: 'top'
        }, {
          label: 'Hot',
          value: 'hot'
        }, {
          label: 'Controversial',
          value: 'controversial'
        }
      ]
    };
  }

  renderPickerItems = () => this.state.categoriesList.map(
    (item, index) => <Picker.Item label={item.label} value={item.value} key={index} />
  );

  render() {
    return (
    <View style={styles.viewStyle}>
      <Text style={{ width: '40%', textAlign: 'right' }}>Choose a category: </Text>
      <Picker
        style={{ width: '40%' }}
        itemStyle={{ height: 40, fontSize: 15, fontWeight: '900' }}
        selectedValue={this.state.selectedCategory}
        onValueChange={(itemValue, itemIndex) => {
          this.setState({
            selectedCategory: itemValue
          });
          this.props.getPostsByCategory(itemValue);
          }
        }
      >
        {this.renderPickerItems()}
      </Picker>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  }
});

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: category => dispatch(getPostsByCategory(category))
});

export default connect(null, mapDispatchToProps)(PickerCategory);
