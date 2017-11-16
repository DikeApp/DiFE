import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // add states
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.welcome}>
          Dike!
        </Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Home;
