import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native'
import { Actions } from 'react-native-router-flux';

class CreateTrip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      date: '', // change to date picker later
      time: '', // change to time picker later
      sharePrice: '',
      note: '',
    }
  }

  _submitCreateTrip() {
    Alert.alert('Submit create trip')
  }

  render() {
    let header = require('../../assets/create_trip/header.png')
    let button = require('../../assets/create_trip/submit.png')
    return (
      <View style = {{backgroundColor: 'white', flex: 10, alignItems: 'center', justifyContent: 'space-between'}}>
        <Image source = {header} style = {styles.header} resizeMode = 'contain' />

        <TextInput
          style = {styles.picker}
          placeholder = 'Enter your start point'
          onChangeText = {(origin) => this.setState({origin})}
          value = {this.state.origin}
        />

        <TextInput
          style = {styles.picker}
          placeholder = 'Enter your destination'
          onChangeText = {(destination) => this.setState({destination})}
          value = {this.state.destination}
        />

        {/*change to date picker*/}
        <TextInput
          style = {styles.picker}
          placeholder = 'Choose your departure date'
          onChangeText = {(date) => this.setState({date})}
          value = {this.state.date}
        />

        {/*change to time picker*/}
        <TextInput
          style = {styles.picker}
          placeholder = 'Choose your time'
          onChangeText = {(time) => this.setState({time})}
          value = {this.state.time}
        />

        <TextInput
          style = {styles.picker}
          placeholder = 'Share price'
          onChangeText = {(sharePrice) => this.setState({sharePrice})}
          value = {this.state.sharePrice}
        />

        <TextInput
          style = {styles.note}
          placeholder = 'Additional notes for your host'
          onChangeText = {(note) => this.setState({note})}
          value = {this.state.note}
        />

        <TouchableOpacity onPress = {this._submitCreateTrip}>
          <View>
            <Image source = {button}/>
          </View>
        </TouchableOpacity>
      </View>
      )
    };
}

styles = StyleSheet.create({
  header: {
    flex: 3,
    marginBottom: 5,
    marginRight: 140
  },
  picker: {
    flex: 1,
    width: '95%',
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 15
  },
  note: {
    flex: 2.5,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10
  }
})

export default CreateTrip;
