import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput
} from 'react-native'

import styles from '../styles/createTrip_styles.js'

class PickerBox extends Component {

  render() {
    return (
      <View style = {styles.pickerContainer}>
        <Text style = {styles.pickerPrompt}>
          {this.props.prompt}
        </Text>
        <TextInput
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
