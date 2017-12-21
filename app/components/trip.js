import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground
} from 'react-native'
import { Avatar } from 'react-native-elements'

import Styles from '../styles/feed_styles'

class Trip extends PureComponent {

  constructor(props) {
    super(props)
  }

  render() {
    let topBar = require('../../assets/feed/feed_top_bar.png')
    let bar = require('../../assets/feed/bar.png')
    let timeIcon = require('../../assets/feed/time_icon.png')
    let guestIcon = require('../../assets/feed/guest_icon.png')

    let guestIconArr = this.props.guests.map(guestAva => (
      <Avatar
        key = {guestAva.id}
        source = {guestAva.guest}
        style = {{marginLeft: 5}}
        small
        rounded
      />
    ));

    return (
      <View style = {Styles.container}>
        <View style = {Styles.hostAva}>
          <Avatar
            medium
            rounded
            source = {this.props.avatar}
            imageProps = {{resizeMode: 'cover'}}
          />
        </View>

        <ImageBackground
          style = {{flex : 1, zIndex: 1}}
          source = {bar}
          resizeMode = 'stretch'
        >

          <ImageBackground
            source = {topBar}
            style = {{flexDirection: 'row'}}
            resizeMode = 'stretch'
          >
            <Text style = {Styles.hostName}>
              {this.props.host}
            </Text>
          </ImageBackground>

          <View style = {Styles.detailContainer}>
            <View style = {[Styles.smallDetailContainer, {marginLeft: 15}]}>
              <Text style = {Styles.destinationText}>
                {this.props.destination}
              </Text>
              <Text style = {Styles.originText}>
                from {this.props.origin}
              </Text>
              <View style = {[Styles.dateAndGuestDetailContainer, {marginBottom: 5}]}>
                <Image
                  source = {timeIcon}
                  resizeMode = 'contain'
                />
                <Text style = {Styles.dateText}>
                  {this.props.date}
                </Text>
              </View>
            </View>

            <View style = {Styles.smallDetailContainer}>
              <Text style = {Styles.priceText}>
                ${this.props.price}
              </Text>
              <View style = {[Styles.dateAndGuestDetailContainer, {marginTop: 5}]}>
                <Image
                  style = {{marginTop: 10}}
                  source = {guestIcon}
                />
                <View style = {{marginLeft: 5, flexDirection: 'row'}}>
                  {guestIconArr}
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Trip;
