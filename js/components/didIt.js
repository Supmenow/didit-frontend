import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Button from './button';
import Explosion from './explosion';

class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  render() {
    return (
      <View style={this.style.container}>
        <Explosion/>
        <Text style={this.style.text}>You Did It!</Text>
      </View>
    );
  }
}

module.exports = DidIt
