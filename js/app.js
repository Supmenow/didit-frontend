import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Login from './components/login';
import Signup from './components/signup';
import LoginAction from './actions/user';

class App extends Component {

  constructor(props) {
   super(props);
   this.style = props.style;
   this.login = this.login.bind(this);
  }

  render() {
    if (this.props.isLoggedIn == true) {
      return (
        <Signup style={this.style}/>
      );
    } else {
      return (
        <Login completion={this.login} style={this.style}/>
      );
    }
  }

  login() {
    this.props.login();
  }
}

function select(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

function actions(dispatch) {
  return {
    login: () => dispatch(LoginAction()),
  }
}

module.exports = connect(select, actions)(App);
