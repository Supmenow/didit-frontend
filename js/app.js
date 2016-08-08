import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Login from './components/login';
import Signup from './components/signup';
import SendDidIt from './components/sendDidIt';
import DidIt from './components/didIt';

import { loginWithDigits, signup, sendDidIt, uploadContacts } from './actions/user';

class App extends Component {

  constructor(props) {
   super(props);
   this.style = props.style;

   this.login = this.login.bind(this);
   this.signUp = this.signUp.bind(this);
   this.sendDidIt = this.sendDidIt.bind(this);
  }

  componentWillMount() {
    if (this.props.profile) {
      this.props.dispatch(uploadContacts(this.props.profile["api-key"]));
    }
  }

  render() {
    if (this.props.didit) {
      return (
        <DidIt style={this.style}/>
      )
    } else if (this.props.profile) {
      return (
        <SendDidIt onSendDidIt={this.sendDidIt} style={this.style}/>
      );
    } else if (this.props.isAuthenticatedWithDigits == true) {
      return (
        <Signup onSignUp={this.signUp} style={this.style}/>
      );
    } else {
      return (
        <Login loading={this.props.loading} onLogin={this.login} style={this.style}/>
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
    this.props.dispatch(sendDidIt(this.props.profile["api-key"]));
  }
}

function select(state) {
  return {
    profile: state.profile,
    didit: state.didit,
    loading: state.loading
  };
}

module.exports = connect(select)(App);
