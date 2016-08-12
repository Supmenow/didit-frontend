import React, { Component } from 'react';
import { View, Image} from 'react-native';
import Button from './button';

class SendDidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.sendDidIt = this.sendDidIt.bind(this);
  }

  sendDidIt() {
    this.props.onSendDidIt()
  }

  //FIXME: Load Emojis from a file.
  render() {
    return (
      <View style={this.style.sendDidItContainer}>
        <Button onPress={this.sendDidIt} backgroundStyle={this.style.didItButtonBackground} textStyle={this.style.didItButtonText}>
        I Did It!
        </Button>
        <Image style={this.style.sendDidItEmoji} source={{uri: 'weightlifter'}}/>
        <Image source={{uri: 'icecream'}}/>
        <Image source={{uri: 'obojene'}}/>
        <Image source={{uri: 'champagne'}}/>
        <Image source={{uri: 'airplane'}}/>
        <Image source={{uri: 'medal'}}/>
        <Image source={{uri: 'wink'}}/>
        <Image source={{uri: 'knifeandfork'}}/>
        <Image source={{uri: '100'}}/>
        <Image source={{uri: 'cycling'}}/>
        <Image source={{uri: 'beer'}}/>
        <Image source={{uri: 'nosmoking'}}/>
      </View>
    );
  }
}

module.exports = SendDidIt
