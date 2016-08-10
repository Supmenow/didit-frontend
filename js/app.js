import React, { Component, Alert } from 'react';
import { connect } from 'react-redux';

import TransitionView from './transition-view';
import Login from './components/login';
import Signup from './components/signup';
import SendDidIt from './components/sendDidIt';
import DidIt from './components/didIt';
import Notification from './notification';

import {
  loginWithDigits,
  signup,
  sendDidIt,
  uploadContacts,
} from './actions';

import {
  receivedDidIt
} from './events';

class App extends Component {

  constructor(props) {
   super(props);

   this.login = this.login.bind(this);
   this.signUp = this.signUp.bind(this);
   this.sendDidIt = this.sendDidIt.bind(this);
   this.sceneForProps = this.sceneForProps.bind(this);
   this.didReceiveNotification = this.didReceiveNotification.bind(this);

   this.style = props.style;
  }

  componentWillMount() {
    if (this.props.profile) {
      this.props.dispatch(uploadContacts(this.props.profile["api-key"]));
    }

    if (this.props.error) {
      // Show Alert
      alert();
    }

    Notification.addEventListener('notification', this.didReceiveNotification);
  }

  render() {
    return (
      <TransitionView {...this.props} sceneForProps={this.sceneForProps}/>
    )
  }

  sceneForProps(props) {
    if (props.didit) {
      return { component: (
        <DidIt didit={props.didit} style={this.style}/>
      ), type: 'DID_IT' }
    } else if (props.profile) {
      return {component: (
        <SendDidIt onSendDidIt={this.sendDidIt} style={this.style}/>
      ), type: 'SEND_DID_IT' };
    } else if (props.isAuthenticatedWithDigits === true) {
      return {component: (
        <Signup onSignUp={this.signUp} style={this.style}/>
      ), type: 'SIGN_UP'};
    } else {
      return {component: (
        <Login loading={props.loading} onLogin={this.login} style={this.style}/>
      ), type: 'LOGIN'};
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

  didReceiveNotification(notification) {
    this.props.dispatch(receivedDidIt(notification));
  }
}

function select(state) {
  return {
    profile: state.profile,
    didit: state.didit,
    loading: state.loading,
    error: state.error
  };
}

module.exports = connect(select)(App);
