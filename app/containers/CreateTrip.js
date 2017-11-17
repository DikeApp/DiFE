import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { Actions } from 'react-native-router-flux';

class CreateTrip extends Component {

  render() {
    return (
      <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 30}}>
          Create Trip Page
        </Text>
      </View>
      )
    };
}

export default CreateTrip;
