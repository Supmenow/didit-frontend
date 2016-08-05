import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './button';

class Signup extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.signup = this.signup.bind(this)
  }

  signup() {
    this.props.completion();
  }

  render() {
    return (
      <View style={this.style.container}>
        <TextInput
          placeholder="Enter Your Name"
          selectionColor="#fff"
          style={this.style.nameInput}
        />
        <Button onPress={this.signup} backgroundStyle={this.style.buttonBackground} textStyle={this.style.buttonText}>
        Sign Up
        </Button>
      </View>
    );
  }
}

module.exports = Signup
