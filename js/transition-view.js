import React, { Component } from 'react';
import { Navigator } from 'react-native';

class TransitionView extends Component {

  constructor(props) {
   super(props);

   this.initialScene = {content: this.sceneForProps(props), index: 0};
  }

  componentDidUpdate(prevProps, prevState) {

    this.initialScene = {content: this.sceneForProps(prevProps), index: 0};
    var newScene = {content: this.sceneForProps(this.props), index: 1};

    if (this.initialScene.content.type != newScene.content.type) {
        this.navigator.push(newScene);
    }
  }

  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      ref={(n) => this.navigator = n}
      initialRoute={this.initialScene}
      renderScene={this.renderScene}/>
    )
  }

  renderScene(scene, navigator) {
    return scene.content.component
  }

  sceneForProps(props) {
    // FIXME:
    // - Is there a Pop Animation
    // - Expose ability to customize animations
    return this.props.sceneForProps(props)
  }
}

module.exports = TransitionView;
