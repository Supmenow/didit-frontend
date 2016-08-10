import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from './notification';
import TransitionNavigation from './transition-navigation';
import NetworkOperation from './network-operation';
import { applicationState } from './reducers/application-state';
import { applicationSceneForName } from './reducers/application-scene';

import {
  loginWithDigits,
  signUpWithName,
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

    Notification.addEventListener('notification', this.didReceiveNotification);
  }

  render() {
    return (
      <NetworkOperation loading={this.props.isLoading} error={this.props.error}>
        <TransitionNavigation {...this.props} sceneForProps={this.sceneForProps}/>
      </NetworkOperation>
    )
  }

  sceneForProps(props) {
    return {
      component: applicationSceneForName(this, props.scene, props.scene),
      type: props.scene
    }
  }

  login(session) {
    this.props.dispatch(loginWithDigits(session));
  }

  signUp(name) {
    this.props.dispatch(signUpWithName(this.props.session, name));
  }

  sendDidIt() {
    this.props.dispatch(sendDidIt(this.props.profile["api-key"]));
  }

  didReceiveNotification(notification) {
    this.props.dispatch(receivedDidIt(notification));
  }
}

module.exports = connect(applicationState)(App);
