import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './button';

class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  render() {
    return (
      <View style={this.style.container}>
        <Text style={this.style.text}>You Did It!</Text>
      </View>
    );
  }
}

module.exports = DidIt
