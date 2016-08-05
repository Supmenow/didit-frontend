import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './button';

class Signup extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  render() {
    return (
      <View style={this.style.container}>
        <TextInput
          placeholder="Enter Your Name"
          selectionColor="#fff"
          style={this.style.nameInput}
        />
        <Button style={this.style.button}>Signup</Button>
      </View>
    );
  }
}

module.exports = Signup
