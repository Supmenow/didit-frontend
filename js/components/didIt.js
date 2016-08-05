import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './button';

class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  render() {
    return (
      <View style={this.style.container}>
      </View>
    );
  }
}

module.exports = DidIt
