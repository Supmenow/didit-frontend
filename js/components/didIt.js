import React, { Component } from 'react';
import { View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';

import Button from './button';
import Explosion from './explosion';

class DidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
  }

  componentDidMount() {
    var sound = new Sound(this.props.didit.sound, Sound.MAIN_BUNDLE, (error) => {

      if (error) {
        console.log('failed to load the sound', error);
      } else { // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() +
            'number of channels: ' + sound.getNumberOfChannels());
      }

      sound.play();
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onDismiss} style={this.style.didIt}>
        <Explosion style={this.style.container}>
              <View style={this.style.diditTextContainer}>
                <Text style={this.style.text}>{this.props.didit.body}</Text>
              </View>
              {this.renderReplyButtons()}
        </Explosion>
      </TouchableWithoutFeedback>
    );
  }

  renderReplyButtons() {
    if (!this.props.didit.hideReplyButtons) {
      return (
        <View hidden={!this.props.didit.hideReplyButtons} style={this.style.replyContainer}>
          <Button onPress={this.props.onSendHighFive}>
            <Image source={require('./img/highfive.png')}/>
          </Button>
          <Button onPress={this.props.onSendEyeRoll}>
            <Image source={require('./img/eyeroll.png')}/>
          </Button>
        </View>
      )
    }

    return null
  }
}

module.exports = DidIt;
