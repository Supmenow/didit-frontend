import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Login from './components/login';
import Signup from './components/signup';
import SendDidIt from './components/sendDidIt';
import DidIt from './components/didIt';

import { loginWithDigits, signup, didit } from './actions/user';

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
    } else if (this.props.loggedIn) {
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

  login(session) {
    this.props.dispatch(loginWithDigits(session));
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
    loggedIn: state.loggedIn,
    didit: state.didit
  };
}

module.exports = connect(select)(App);
