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
        <View style={this.style.sendDidItEmojiList}>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'weightlifter'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'icecream'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'obojene'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'champagne'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'airplane'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'medal'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'wink'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'forkandknife'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: '100'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'cycling'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'beer'}}/>
          <Image style={this.style.sendDidItEmoji} source={{uri: 'nosmoking'}}/>
        </View>
      </View>
    );
  }
}

module.exports = SendDidIt
