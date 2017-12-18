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
      price = {item.price}
      guests = {item.guests}
    />
  )

  render() {
    let test1 = require('../../assets/feed/test1.png')
    let test2 = require('../../assets/feed/test2.png')
    let test3 = require('../../assets/feed/test3.png')

    return (
      <View style = {{marginTop: 25}}>
        <FlatList
          data = {[
            {avatar: require('../../assets/feed/test1.png'), host: 'Test1', origin: 'Boston', destination: 'Amherst', date: 'April 4, 2017', price: '15',
              guests : [
              {
                id: '1',
                guest: test1
              }
              ],
            key: '1'},
            {avatar: require('../../assets/feed/test2.png'), host: 'Test2', origin: 'Amherst', destination: 'Boston', date: 'February 20, 2017', price: '20',
              guests : [
              {
                id: '1',
                guest: test1
              },
              {
                id: '2',
                guest: test2
              },
              {
                id: '3',
                guest: test3
              }
              ],
            key: '2'}
          ]}
          renderItem = {this._renderItem}
        />
      </View>
    )
  }
}

export default Feed;
