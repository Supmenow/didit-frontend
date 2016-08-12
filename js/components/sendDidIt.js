import React, { Component } from 'react';
import { View, Image} from 'react-native';
import Button from './button';

class SendDidIt extends Component {

  constructor(props) {
   super(props);

   this.style = props.style;
   this.sendDidIt = this.sendDidIt.bind(this);
  }

  sendDidIt(emoji, unicode) {
    this.props.onSendDidIt(emoji, unicode)
  }

  render() {
    return (
      <View style={this.style.sendDidItContainer}>
        <Button onPress={() => this.sendDidIt('smiley', '')} backgroundStyle={this.style.didItButtonBackground} textStyle={this.style.didItButtonText}>
        I Did It!
        </Button>
        <View style={this.style.sendDidItEmojiList}>
          {this.renderEmoji('weightlifter', '🏋')}
          {this.renderEmoji('icecream', '🍦')}
          {this.renderEmoji('obojene', '🍆')}
          {this.renderEmoji('champagne', '🍾')}
          {this.renderEmoji('airplane', '✈️')}
          {this.renderEmoji('medal', '🏅')}
          {this.renderEmoji('wink', '😉')}
          {this.renderEmoji('forkandknife', '🍴')}
          {this.renderEmoji('100', '💯')}
          {this.renderEmoji('cycling', '🚴')}
          {this.renderEmoji('beer', '🍺')}
          {this.renderEmoji('nosmoking', '🚭')}
        </View>
      </View>
    );
  }

  renderEmoji(name, unicode) {
    return (
      <Button onPress={() => this.sendDidIt(name, unicode)}>
      <Image style={this.style.sendDidItEmoji} source={{uri: name}}/>
      </Button>
    )
  }
}

module.exports = SendDidIt
