import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class Button extends Component {

  render() {
    return (
      <TouchableOpacity style={this.props.backgroundStyle} onPress={this.props.onPress}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

module.exports = Button
