import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../styles/login_styles'

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  _onPressSignInButton() {
    Actions.feedTab()

    // Todo: Add front-end login logics
  }

  render() {
    let logo = require('../../assets/logo/dikeLogo_white.png');
    let background = require('../../assets/login/background.png');
    let text_input_border = require('../../assets/login/text_input_border.png');
    let sign_in_button = require('../../assets/login/sign_in_button.png');

    return (
      <ImageBackground source = {background} style = {Styles.background}>

        <Image source = {logo} style = {Styles.logo}
         resizeMode = 'contain'
        />
        <ImageBackground
          source = {text_input_border}
          style = {Styles.username_border}
          resizeMode = 'contain'>

          <TextInput
            style = {Styles.username_text_input}
            placeholder = 'Username'
            placeholderTextColor = 'grey'
            onChangeText = {(username) => this.setState({username})}
          />

        </ImageBackground>

        <ImageBackground
          source = {text_input_border}
          style = {Styles.password_border}
          resizeMode = 'contain'>

          <TextInput
            secureTextEntry = {true}
            style = {Styles.password_text_input}
            placeholder = 'Password'
            placeholderTextColor = 'grey'
            onChangeText = {(password) => this.setState({password})}
          />

        </ImageBackground>

        <TouchableOpacity onPress = {this._onPressSignInButton}>
          <Image
            style = {Styles.sign_in_button}
            source = {sign_in_button}
            // resizeMode = 'contain'
          />
        </TouchableOpacity>

      </ImageBackground>
    )
  };
}

export default Login;
