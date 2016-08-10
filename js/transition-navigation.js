import React, { Component } from 'react';
import { Navigator } from 'react-native';

class TransitionNavigation extends Component {

  constructor(props) {
   super(props);

   this.initialScene = {content: this.sceneForProps(props), index: 0};
  }

  componentDidUpdate(prevProps, prevState) {

    this.initialScene = {content: this.sceneForProps(prevProps), index: 0};
    var newScene = {content: this.sceneForProps(this.props), index: 1};

    this.configuration = Object.assign(
      defaultConfiguration(),
      newScene.configuration
    )

    if (this.initialScene.content.type !== newScene.content.type) {
        this.navigator.push(newScene);
    }
  }

  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      ref={(n) => this.navigator = n}
      initialRoute={this.initialScene}
      renderScene={this.renderScene}
      configureScene={this.configuration}/>
    )
  }

  renderScene(scene, navigator) {
    return scene.content.component
  }

  sceneForProps(props) {
    return this.props.sceneForProps(props)
  }

  defaultConfiguration() {
    return Navigator.SceneConfigs.PushFromRight
  }
}

module.exports = TransitionNavigation;
