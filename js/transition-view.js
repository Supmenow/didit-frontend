import React, { Component } from 'react';
import { View } from 'react-native';

class TransitionView extends Component {

  componentWillUpdate(nextProps, nextState) {
    this.previousChildren = this.props.children
  }

  componentDidUpdate(prevProps, prevState) {
    this.transition = this.props.createTransition(this, this.prev, this.next)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderPreviousChild()}
        {this.renderNextChild()}
      </View>
    )
  }

  renderPreviousChild() {
    if (this.previousChildren) {
      return (
        <View ref={component => this.prev = component} style={{flex: 1}}>
        { this.previousChildren }
        </View>
      )
    } else {
      return null
    }
  }

  renderNextChild() {
    return (
      <View ref={component => this.next = component} style={{flex: 1}}>
      { this.props.children }
      </View>
    )
  }
}

module.exports = TransitionView;
