import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigator } from 'react-native';

import CodePush from 'react-native-code-push';
import Notification from './notification';
import PushNotification from './notification/push-notification';
import TransitionNavigation from './transition-navigation';
import NetworkOperation from './network-operation';
import { applicationState } from './reducers/application-state';
import { applicationSceneForName, configurationForSceneName } from './reducers/application-scene';

var NotificationManager = require('react-native').NativeModules.NotificationManager;

var ReplyManager = require('react-native').NativeModules.ReplyManager;

import {
  loginWithDigits,
  signUpWithName,
  sendDidIt,
  uploadContacts,
  sendReply,
  registerForNotifications
} from './actions';

import {
  receivedDidIt,
  dismissedDidIt,
  dismissedError
} from './events';

class App extends Component {

  constructor(props) {
   super(props);

   this.login = this.login.bind(this);
   this.signUp = this.signUp.bind(this);
   this.sendDidIt = this.sendDidIt.bind(this);
   this.sceneForProps = this.sceneForProps.bind(this);
   this.unwindScene = this.unwindScene.bind(this);
   this.dismissError = this.dismissError.bind(this);
   this.dismissDidIt = this.dismissDidIt.bind(this);
   this.sendHighFive = this.sendHighFive.bind(this);
   this.sendEyeRoll = this.sendEyeRoll.bind(this);
   this.didReceiveNotification = this.didReceiveNotification.bind(this);

   this.style = props.style;
  }

  componentDidMount() {
    NotificationManager.postNotification("appMounted")
  }

  componentDidUpdate(prevProps, prevState) {

    CodePush.sync({installMode: CodePush.InstallMode.ON_NEXT_RESUME});

    if (!prevProps.profile && this.props.profile) {
      this.didAuthenticate();
    }
  }

  render() {
    return (
      <NetworkOperation loading={this.props.isLoading} error={this.props.error} onDismissError={this.dismissError}>
        <TransitionNavigation {...this.props} sceneForProps={this.sceneForProps} configurationForTransition={this.configurationForTransition} unwindScene={this.unwindScene}/>
      </NetworkOperation>
    )
  }

  sceneForProps(props) {
    return {
      component: applicationSceneForName(this, props.scene, props),
      type: props.scene
    }
  }

  configurationForTransition(prevScene, newScene) {
    switch (newScene.content.type) {
      case 'DID_IT':
      return Navigator.SceneConfigs.FloatFromBottom
    }

    var configuration = Navigator.SceneConfigs.PushFromRight

    if (prevScene.content.type == 'DID_IT' && newScene.content.type == 'SEND_DID_IT') {
      configuration.pop = true
    }

    configuration.gestures = {}
    return configuration
  }

  unwindScene(scene) {
    if (scene.content.type == 'DID_IT') {
      this.dismissDidIt()
    }
  }

  login(session) {
    this.props.dispatch(loginWithDigits(session, Notification.protocol()));
  }

  signUp(name) {
    this.props.dispatch(signUpWithName(this.props.session, name, Notification.protocol()));
  }

  sendDidIt(emoji, unicode) {
    this.props.dispatch(sendDidIt(this.props.profile["api-key"], emoji, unicode));
  }

  dismissDidIt() {
    this.props.dispatch(dismissedDidIt());
  }

  dismissError() {
    this.props.dispatch(dismissedError());
  }

  sendHighFive(didit) {
    this.props.dispatch(sendReply(this.props.profile["api-key"], didit, {
      'type': 'highfive',
      'emoji': '🙌'
    }));
  }

  sendEyeRoll(didit) {
    this.props.dispatch(sendReply(this.props.profile["api-key"], didit, {
      'type': 'eyeroll',
      'emoji': '🙄'
    }));
  }

  didAuthenticate() {
    this.props.dispatch(uploadContacts(this.props.profile["api-key"]));

    Notification.addEventListener('notification', this.didReceiveNotification);
    Notification.addEventListener('remoteNotificationAction', (action) => {

      var didit = new PushNotification(action.userInfo)

      switch (action.identifier) {
        case 'HIGH_FIVE_IDENTIFIER':
        ReplyManager.sendHighFive(this.props.profile["api-key"], didit.userID)
        break

        case 'EYE_ROLL_IDENTIFIER':
        ReplyManager.sendEyeRoll(this.props.profile["api-key"], didit.userID)
        break
      }
    });

    this.props.dispatch(registerForNotifications(this.props.profile["api-key"], Notification.protocol()))
  }

  didReceiveNotification(notification) {
    if (!this.props.didit) {
      this.props.dispatch(receivedDidIt(notification));
    }
  }
}

module.exports = connect(applicationState)(App);
