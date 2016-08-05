import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Login from './components/login';
import Signup from './components/signup';
import SendDidIt from './components/sendDidIt';
import DidIt from './components/didIt';

import { authenticiateWithDigits, signup, didit } from './actions/user';

class App extends Component {

  constructor(props) {
   super(props);
   this.style = props.style;

   this.login = this.login.bind(this);
   this.signUp = this.signUp.bind(this);
   this.sendDidIt = this.sendDidIt.bind(this);
  }

  render() {
    if (this.props.didit == true) {
      return (
        <DidIt style={this.style}/>
      )
    } else if (this.props.isSignedUp == true) {
      return (
        <SendDidIt onSendDidIt={this.sendDidIt} style={this.style}/>
      );
    } else if (this.props.isAuthenticatedWithDigits == true) {
      return (
        <Signup onSignUp={this.signUp} style={this.style}/>
      );
    } else {
      return (
        <Login onLogin={this.login} style={this.style}/>
      );
    }
  }

  login() {
    this.props.dispatch(authenticiateWithDigits());
  }

  signUp() {
    this.props.dispatch(signup("James"));
  }

  sendDidIt() {
    this.props.dispatch(didit());
  }
}

function select(state) {
  return {
    isAuthenticatedWithDigits: state.isAuthenticatedWithDigits,
    isSignedUp: (state.isAuthenticatedWithDigits && state.hasOwnProperty("name")),
    didit: state.didit
  };
}

module.exports = connect(select)(App);
