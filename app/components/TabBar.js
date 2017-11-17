import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import Colors from '../themes/Colors'

export default class TabIcon extends Component {
  render() {
    var imageColor = this.props.focused ? Colors.tabBarIconActive : Colors.tabBarIconInactive;
    var image
    switch(this.props.iconName) {
      case 'Create Trip':
        image = require('../../assets/home/create_trip.png');
        break;
      case 'Find Host':
        image = require('../../assets/home/find_host.png')
        break;
      case 'Feed':
        image = require('../../assets/home/feed.png')
        break;
      case 'Profile':
        image = require('../../assets/home/profile.png')
        break;
      default:
        image = '';
    }

    return (
      <View style={{flex:1, justifyContent: 'center', marginTop: 10}}>
        <Image source = {image} resizeMode = 'contain'
          style = {{tintColor: imageColor}}
        />
      </View>
      )
    };
}
