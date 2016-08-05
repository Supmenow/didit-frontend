import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class Button extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  render() {
    return (
      <TouchableOpacity>
        <Text style={this.style}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = Button
