import React, { Component } from 'react';

class TransitionView extends Component {

  componentWillUpdate(nextProps, nextState) {
    // - Store Old Compoenent
    // - Grab Transition
  }

  componentDidUpdate(prevProps, prevState) {
    // - Trigger Transition
    // - Then Once Done Remove Old Component
  }

  render() {
    return (
      this.props.renderContent()
    )
  }
}

module.exports = TransitionView;
