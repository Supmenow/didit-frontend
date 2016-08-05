import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Login from './components/login';
import Signup from './components/signup';
import SendDong from './components/sendDong';
import { authenticiateWithDigits, signup } from './actions/user';

class App extends Component {

  constructor(props) {
   super(props);
   this.style = props.style;
   this.login = this.login.bind(this);
   this.signup = this.signup.bind(this);
  }

  render() {
    if (this.props.isSignedUp == true) {
      return (
        <SendDong style={this.style}/>
      );
    } else if (this.props.isAuthenticatedWithDigits == true) {
      return (
        <Signup completion={this.signup} style={this.style}/>
      );
    } else {
      return (
        <Login completion={this.login} style={this.style}/>
      );
    }
  }

  login() {
    this.props.dispatch(authenticiateWithDigits());
  }

  signup() {
    this.props.dispatch(signup("James"));
  }
}

function select(state) {
  return {
    isAuthenticatedWithDigits: state.isAuthenticatedWithDigits,
    isSignedUp: (state.isAuthenticatedWithDigits && state.hasOwnProperty("name"))
  };
}

module.exports = connect(select)(App);
