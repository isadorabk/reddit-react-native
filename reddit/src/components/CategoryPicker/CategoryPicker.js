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
      selectedCategory: props.selectedCategory,
      categoriesList: props.categoriesList
    };
  }

  handleChange = (itemValue, itemIndex) => {
    this.setState({
      selectedCategory: itemValue
    });
    this.props.getPostsByCategory(itemValue);
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
        onValueChange={this.handleChange}
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
