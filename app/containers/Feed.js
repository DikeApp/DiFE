import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'
import Trip from '../components/trip'

class Feed extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      data: [],
      refreshing: false,
    };
  }


  _renderItem = ({item}) => (
    <Trip style = {{backgroundColor: 'blue'}}
      avatar = {item.avatar}
      host = {item.host}
      origin = {item.origin}
      destination = {item.destination}
      date = {item.date}
    />
  )

  render() {
    let test1 = require('../../assets/feed/test1.png')
    let test2 = require('../../assets/feed/test2.png')

    return (
      <View style = {{marginTop: 25}}>
        <FlatList
          data = {[
            {avatar: require('../../assets/feed/test1.png'), host: 'BaoDepTrai', origin: 'Boston', destination: 'Amherst', date: 'April 4, 2017', key: '1'},
            {avatar: require('../../assets/feed/test2.png'), host: 'Bleble', origin: 'Amherst', destination: 'Boston', date: 'February 20, 2017', key: '2'}
          ]}
          renderItem = {this._renderItem}
        />
      </View>
    )
  }
}

export default Feed;
