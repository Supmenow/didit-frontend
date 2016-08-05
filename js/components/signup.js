import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class Signup extends Component {

  constructor(props) {
   super(props);

   this.styles = props.styles;
  }

  render() {
    return (
      <View style={this.styles.container}>
        <TextInput
          placeholder="Enter Your Name"
          selectionColor="#fff"
          style={this.styles.nameInput}
        />
        <Text>Signup</Text>
      </View>
    );
  }
}

module.exports = Signup
