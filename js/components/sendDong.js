import React, { Component } from 'react';
import { View } from 'react-native';
import Button from './button';

class SendDong extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  render() {
    return (
      <View style={this.style.sendDongContainer}>
        <Button backgroundStyle={this.style.didItButtonBackground} textStyle={this.style.didItButtonText}>
        I Did It!
        </Button>
      </View>
    );
  }
}

module.exports = SendDong
