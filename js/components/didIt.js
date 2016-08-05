import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

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
      <TouchableWithoutFeedback onPress={this.dismiss}>
        <View style={this.style.container}>
          <Explosion style={this.style.container}>
            <Text style={this.style.text}>You Did It!</Text>
            <Button onPress={this.sendHighFive}>High Five</Button>
            <Button onPress={this.sendEyeRoll}>Eye Roll</Button>
          </Explosion>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

module.exports = DidIt
