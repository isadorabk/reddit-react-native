import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { getPostsByCategory } from '../../actions/posts.actions';
import styles from './styles';

const { container, text, pickerContainer, pickerItem } = styles;

class CategoryPicker extends Component {
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
    <View style={container}>
      <Text style={text}>Choose a category: </Text>
      <Picker
        style={pickerContainer}
        itemStyle={pickerItem}
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

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: category => dispatch(getPostsByCategory(category))
});

export default connect(null, mapDispatchToProps)(CategoryPicker);
