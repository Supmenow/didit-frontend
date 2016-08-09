import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import Button from './button';
import Explosion from './explosion';
import { dismissDidit } from '../actions/user';

class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.dismiss = this.dismiss.bind(this);
   this.sendHighFive = this.sendHighFive.bind(this);
   this.sendEyeRoll = this.sendEyeRoll.bind(this);
  }

  dismiss() {
    this.props.dispatch(dismissDidit());
  }

  sendHighFive() {
    this.props.dispatch(dismissDidit());
  }

  sendEyeRoll() {
    this.props.dispatch(dismissDidit());
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismiss} style={this.style.didIt}>
        <Explosion style={this.style.container}>
              <View style={this.style.diditTextContainer}>
                <Text style={this.style.text}>{this.props.didit.body}</Text>
              </View>
              <View style={this.style.replyContainer}>
                <Button onPress={this.sendHighFive}>
                  <Image source={require('./img/highfive.png')}/>
                </Button>
                <Button onPress={this.sendEyeRoll}>
                  <Image source={require('./img/eyeroll.png')}/>
                </Button>
              </View>
        </Explosion>
      </TouchableWithoutFeedback>
    );
  }
}

module.exports = connect()(DidIt);
