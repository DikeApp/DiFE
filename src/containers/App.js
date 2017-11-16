import React, { Component } from 'react';

import { Router, Scene, Actions } from 'react-native-router-flux';
import Home from './Home';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar= {true}>
          <Scene key="login" component={Login} title="Login Page" initial />
          <Scene key="home" component={Home} title="Home Page" />
        </Scene>
      </Router>
    );
  }
}

export default App;
