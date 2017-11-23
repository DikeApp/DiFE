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

import BaseStyles from '../styles/baseStyles'
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
<<<<<<< HEAD
        <Image source = {header} style = {Styles.header} resizeMode = 'contain' />

        <TextInput
          style = {Styles.picker}
          placeholder = 'Enter your start point'
=======
        <Image source = {header} style = {BaseStyles.header} resizeMode = 'contain' />

        <PickerBox
          prompt = 'From'
          placeholderText = 'Enter your start point'
>>>>>>> 821e748bf4626694175a48f61dd0d418dc035fa7
          onChangeText = {(origin) => this.setState({origin})}
        />

<<<<<<< HEAD
        <TextInput
          style = {Styles.picker}
          placeholder = 'Enter your destination'
=======
        <PickerBox
          prompt = 'To'
          placeholderText = 'Enter your destination'
>>>>>>> 821e748bf4626694175a48f61dd0d418dc035fa7
          onChangeText = {(destination) => this.setState({destination})}
        />

<<<<<<< HEAD
        {/*change to date picker*/}
        <TextInput
          style = {Styles.picker}
          placeholder = 'Choose your departure date'
          onChangeText = {(date) => this.setState({date})}
          value = {this.state.date}
        />

        {/*change to time picker*/}
        <TextInput
          style = {Styles.picker}
          placeholder = 'Choose your time'
          onChangeText = {(time) => this.setState({time})}
          value = {this.state.time}
        />

        <TextInput
          style = {Styles.picker}
          placeholder = 'Share price'
          onChangeText = {(sharePrice) => this.setState({sharePrice})}
          value = {this.state.sharePrice}
        />

        <TextInput
          style = {Styles.note}
          placeholder = 'Additional notes for your host'
          onChangeText = {(note) => this.setState({note})}
          value = {this.state.note}
        />
=======
        <View style = {BaseStyles.pickerContainer}>
          <Text style = {BaseStyles.pickerPrompt}>Date</Text>
          <DatePicker
            style = {BaseStyles.pickerText}
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

        <View style = {BaseStyles.pickerContainer}>
          <Text style = {BaseStyles.pickerPrompt}>Time</Text>
          <DatePicker
            mode = 'time'
            style = {BaseStyles.pickerText}
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

        <View style = {BaseStyles.pickerContainer}>
          <Text style = {[BaseStyles.pickerPrompt, {flex: 3}]}>Share Price</Text>
          <TextInput
            style = {[BaseStyles.pickerText]}
            placeholder = 'Enter the amount you want to share'
            onChangeText = {(sharePrice) => this.setState({sharePrice})}
          />
        </View>

        <View style = {[BaseStyles.pickerContainer, {flex: 3, alignItems: 'flex-start'}]}>
          <Text style = {[BaseStyles.pickerPrompt, {marginTop: 10, flex: 3}]}>
            Special Note
          </Text>
          <TextInput
            style = {[BaseStyles.pickerText, {marginTop: 5}]}
            placeholder = 'Additional notes for your host'
            onChangeText = {(note) => this.setState({note})}
            multiline = {true}
          />
        </View>
>>>>>>> 821e748bf4626694175a48f61dd0d418dc035fa7

        <TouchableOpacity onPress = {this._submitCreateTrip}>
          <Image source = {button}/>
        </TouchableOpacity>

      </View>
        )
    };
}

export default CreateTrip;
