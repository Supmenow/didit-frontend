import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from './button';

class Signup extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.signUp = this.signUp.bind(this)
  }

  signUp() {
    this.props.onSignUp(this.state.text);
  }

  render() {
    return (
      <View style={this.style.container}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          placeholder="Enter Your Name"
          selectionColor="#fff"
          style={this.style.nameInput}
        />
        <Button onPress={this.signUp} backgroundStyle={this.style.buttonBackground} textStyle={this.style.buttonText}>
        Sign Up
        </Button>
      </View>
    );
  }
}

module.exports = Signup
