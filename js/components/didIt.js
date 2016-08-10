import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import Button from './button';
import Explosion from './explosion';

import { sendReply } from '../actions';
import { dismissedDidIt } from '../events';

//FIXME:
// - Push up login into component
// - Implement Play Sound
// - Implement choose particle effect
class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.dismiss = this.dismiss.bind(this);
   this.sendHighFive = this.sendHighFive.bind(this);
   this.sendEyeRoll = this.sendEyeRoll.bind(this);
  }

  dismiss() {
    this.props.dispatch(dismissedDidIt());
  }

  sendHighFive() {
    this.props.dispatch(sendReply());
  }

  sendEyeRoll() {
    this.props.dispatch(sendReply());
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismiss} style={this.style.didIt}>
        <Explosion style={this.style.container}>
              <View style={this.style.diditTextContainer}>
                <Text style={this.style.text}>{this.props.didit.body}</Text>
              </View>
              {this.renderReplyButtons()}
        </Explosion>
      </TouchableWithoutFeedback>
    );
  }

  renderReplyButtons() {
    if (!this.props.didit.hideReplyButtons) {
      return (
        <View hidden={!this.props.didit.hideReplyButtons} style={this.style.replyContainer}>
          <Button onPress={this.sendHighFive}>
            <Image source={require('./img/highfive.png')}/>
          </Button>
          <Button onPress={this.sendEyeRoll}>
            <Image source={require('./img/eyeroll.png')}/>
          </Button>
        </View>
      )
    }

    return null
  }
}

module.exports = connect()(DidIt);
