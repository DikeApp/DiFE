import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-datepicker';

import CreateTripStyles from '../styles/createTrip_styles'
import PickerBox from '../components/locationPicker'

class CreateTrip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
      date: '',
      time: '',
      sharePrice: '',
      note: '',
    };
  }

  _submitCreateTrip() {
    Alert.alert('Submit create trip')
  }

  render() {
    let header = require('../../assets/create_trip/header.png')
    let button = require('../../assets/create_trip/submit.png')
    return (
      <View style = {{backgroundColor: 'white', flex: 10, alignItems: 'center', justifyContent: 'space-between'}}>
        <Image source = {header} style = {CreateTripStyles.header} resizeMode = 'contain' />

        <PickerBox
          prompt = 'From'
          placeholderText = 'Enter your start point'
          onChangeText = {(origin) => this.setState({origin})}
        />

        <PickerBox
          prompt = 'To'
          placeholderText = 'Enter your destination'
          onChangeText = {(destination) => this.setState({destination})}
        />

        <View style = {CreateTripStyles.pickerContainer}>
          <Text style = {CreateTripStyles.pickerPrompt}>Date</Text>
          <DatePicker
            style = {CreateTripStyles.pickerText}
            date = {this.state.date}
            placeholder = 'Choose your departure date'
            format = 'MM-DD-YYYY'
            confirmBtnText = 'Confirm'
            cancelBtnText = 'Cancel'
            onDateChange={(date) => {this.setState({date: date})}}
            showIcon = {false}
            customStyles = {{
              dateInput: { borderWidth: 0, alignItems: 'flex-start'}
            }}
          />
        </View>

        <View style = {CreateTripStyles.pickerContainer}>
          <Text style = {CreateTripStyles.pickerPrompt}>Time</Text>
          <DatePicker
            mode = 'time'
            style = {CreateTripStyles.pickerText}
            date = {this.state.time}
            format = 'hh:mm A'
            placeholder = 'Choose your departure time'
            confirmBtnText = 'Confirm'
            cancelBtnText = 'Cancel'
            onDateChange={(time) => {this.setState({time: time})}}
            showIcon = {false}
            customStyles = {{dateInput: { borderWidth: 0, alignItems: 'flex-start'}}}
            minuteInterval = {15}
            is24hour = {false}
          />
        </View>

        <View style = {CreateTripStyles.pickerContainer}>
          <Text style = {[CreateTripStyles.pickerPrompt, {flex: 3}]}>Share Price</Text>
          <TextInput
            style = {[CreateTripStyles.pickerText]}
            placeholder = 'Enter the amount you want to share'
            onChangeText = {(sharePrice) => this.setState({sharePrice})}
          />
        </View>

        <View style = {[CreateTripStyles.pickerContainer, {flex: 3, alignItems: 'flex-start'}]}>
          <Text style = {[CreateTripStyles.pickerPrompt, {marginTop: 10, flex: 3}]}>
            Special Note
          </Text>
          <TextInput
            style = {[CreateTripStyles.pickerText, {marginTop: 5}]}
            placeholder = 'Additional notes for your host'
            onChangeText = {(note) => this.setState({note})}
            multiline = {true}
          />
        </View>

        <TouchableOpacity onPress = {this._submitCreateTrip}>
          <Image source = {button}/>
        </TouchableOpacity>

      </View>
        )
    };
}

export default CreateTrip;
