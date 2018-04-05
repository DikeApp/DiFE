import React, { Component } from 'react';
import {
  Text
} from 'react-native'
import { Router, Scene, Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-vector-icons/Ionicons';


import FindHost from './FindHost';
import CreateTrip from './CreateTrip';
import Feed from './Feed';
import Profile from './Profile';
import Login from './Login';
import TabIcon from '../components/TabBar';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key = "root" hideNavBar = {true}>
          <Scene key = "login" component = {Login} title = "Login Page"  initial/>

          <Scene key = "main" tabs = {true} hideNavBar = {true} swipeEnabled = {false} >
            <Scene key = "feedTab" title = " " iconName = "Feed" icon = {TabIcon} >
              <Scene key ="home" component = {Feed} title = "Home"/>
            </Scene>

            <Scene key = "createTripTab" title = " " iconName = "Create Trip" icon = {TabIcon}>
              <Scene key = "createTrip" component = {CreateTrip} title = "Create Trip" />
            </Scene>

            <Scene key = "findHostTab" title = " " iconName = "Find Host" icon = {TabIcon} >
              <Scene key = "findHost" component = {FindHost} title = "Find Host" />
            </Scene>

            <Scene key = "profileTab" title = " " iconName = "Profile" icon = {TabIcon} >
              <Scene key = "profile" component = {Profile} title = "Profile" />
            </Scene>

          </Scene>

        </Scene>
      </Router>
    );
  }
}

export default App;
