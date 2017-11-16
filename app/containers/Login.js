import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // add states
    }
  }

  render() {
    let logo = require('../../assets/logo/dikeLogo_white.png');
    let background = require('../../assets/background/loginBackground.png');
    return (
      // <Image source = {logo}
      //  style = {styles.logo}
      //  onPress={() => Actions.home()} />
    // <View style = {styles.container}>
      <ImageBackground source = {background} style = {styles.background}>
        <Image source = {logo} style = {styles.logo}
         resizeMode = 'contain'
        />
      </ImageBackground>
    // </View>
  )
  };
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 160,
    height: 83,
    width: 159,
  }
});

export default Login;
