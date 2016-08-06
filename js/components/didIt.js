import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';

import Button from './button';
import Explosion from './explosion';

class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.dismiss = this.dismiss.bind(this);
   this.sendHighFive = this.sendHighFive.bind(this);
   this.sendEyeRoll = this.sendEyeRoll.bind(this);
  }

  dismiss() {
    alert("Dismiss");
  }

  sendHighFive() {
    alert("High Five");
  }

  sendEyeRoll() {
    alert("Eye Roll");
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismiss} style={this.style.didIt}>
        <Explosion style={this.style.container}>
              <Text style={this.style.text}>You Did It!</Text>
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

module.exports = DidIt
