import React, { Component } from 'react';
import { View } from 'react-native';

class TransitionView extends Component {

  componentWillMount() {

  }

  componentWillUpdate(nextProps, nextState) {
    this.previousChildren = this.props.children
    // - Store Old Compoenent
    // - Grab Transition
  }

  componentDidUpdate(prevProps, prevState) {
    // - Trigger Transition
    // - Then Once Done Remove Old Component - How ?
  }

  render() {
    return (
      <View>
        { this.previousChildren }
        { this.props.children }
      </View>
    )
  }
}

module.exports = TransitionView;
