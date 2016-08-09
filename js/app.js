import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
   this.style = props.style;

   this.login = this.login.bind(this);
   this.signUp = this.signUp.bind(this);
   this.sendDidIt = this.sendDidIt.bind(this);
   this.didReceiveNotification = this.didReceiveNotification.bind(this);
   this.renderContents = this.renderContents.bind(this);
  }

  componentWillMount() {
    if (this.props.profile) {
      this.props.dispatch(uploadContacts(this.props.profile["api-key"]));
    }

    //FIXME: Where does this belong ask on Redux?
    Notification.addEventListener('notification', this.didReceiveNotification);
  }

  render() {
    return (
      <TransitionView createTransition={this.createTransition}>{this.renderContents()}</TransitionView>
    )
  }

  renderContents() {
    if (this.props.didit) {
      return (
        <DidIt didit={this.props.didit} style={this.style}/>
      )
    } else if (this.props.profile) {
      return (
        <SendDidIt onSendDidIt={this.sendDidIt} style={this.style}/>
      );
    } else if (this.props.isAuthenticatedWithDigits === true) {
      return (
        <Signup onSignUp={this.signUp} style={this.style}/>
      );
    } else {
      return (
        <Login loading={this.props.loading} onLogin={this.login} style={this.style}/>
      );
    }
  }

  createTransition(container, prevChildren, nextChildren) {

    prevChildren.setNativeProps({
      style: {
        opacity: 0
      }
    });

    // - Take style properties of each
    // - Modify for animation
    // - Animate
    // - Remove Prev Child
    // - Restore style attributes for Next Child

    // - Perform transition: prev --> next
    // Inside of container
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
    loading: state.loading
  };
}

module.exports = connect(select)(App);
