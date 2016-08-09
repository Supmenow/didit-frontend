import React, { Component } from 'react';
import { View } from 'react-native';

class TransitionView extends Component {

  componentWillUpdate(nextProps, nextState) {
    this.previousChildren = this.props.children
  }

  componentDidUpdate(prevProps, prevState) {
    this.transition = this.props.createTransition(this, this.previousChildren, this.props.children)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        { this.previousChildren }
        { this.props.children }
      </View>
    )
  }
}

module.exports = TransitionView;
