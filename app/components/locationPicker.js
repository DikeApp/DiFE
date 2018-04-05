import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput
} from 'react-native'

import styles from '../styles/createTrip_styles.js'

class PickerBox extends Component {
  clear() {
    this.location.clear();
  }

  render() {
    return (
      <View style = {styles.pickerContainer} {...this.props}>
        <Text style = {styles.pickerPrompt}>
          {this.props.prompt}
        </Text>
        <TextInput
          ref = {input => (this.location = input)}
          style = {styles.pickerText}
          autoCorrect = {false}
          underlineColorAndroid = 'transparent'
          placeholder = {this.props.placeholderText}
          onChangeText = {this.props.onChangeText}
        />
      </View>
    );
  }
}

export default PickerBox;
