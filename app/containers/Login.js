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

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  _onPressSignInButton() {
    url = 'https://dikeapp.herokuapp.com/user/'

    alert(this.state.username)
    //alert(this.state.password)
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
    Actions.main()
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
          resizeMode = 'contain'
        >

          <TextInput
            style = {Styles.username_text_input}
            autoCorrect = {false}
            underlineColorAndroid = 'transparent'
            placeholder = 'Username'
            placeholderTextColor = 'grey'
            onChangeText = {(username) => this.setState({username})}
          />

        </ImageBackground>

        <ImageBackground
          source = {text_input_border}
          style = {Styles.password_border}
          resizeMode = 'contain'
        >

          <TextInput
            secureTextEntry = {true}
            style = {Styles.password_text_input}
            autoCorrect = {false}
            underlineColorAndroid = 'transparent'
            placeholder = 'Password'
            placeholderTextColor = 'grey'
            onChangeText = {(password) => this.setState({password})}
          />

        </ImageBackground>

        <TouchableOpacity onPress = {this._onPressSignInButton.bind(this)}>
          <Image
            style = {[Styles.sign_in_button, {marginBottom: 15}]}
            source = {sign_in_button}
          />
        </TouchableOpacity>

        <LoginButton
          publishPermissions = {["publish_actions"]}
          onLoginFinished = {
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    this.setState({username: data.accessToken.toString(), password: 'testPass'})
                    this._onPressSignInButton()
                  }
                )
              }
            }
          }
          onLogoutFinished = {() => alert("User logged out")}
        />

      </ImageBackground>
    )
  };
}

export default Login;
