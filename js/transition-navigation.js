import React, { Component } from 'react';
import { Navigator } from 'react-native';

//FIXME: When rehydrating disable animation.
class TransitionNavigation extends Component {

  constructor(props) {
   super(props);

   this.initialScene = {content: this.sceneForProps(props), index: 0};
   this.onDidFocus = this.onDidFocus.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    this.initialScene = {content: this.sceneForProps(this.props), index: 0};
    this.newScene = {content: this.sceneForProps(nextProps), index: 1};

    var configuration = this.props.configurationForTransition(this.initialScene, this.newScene);

    this.configureScene = () => {
      return (configuration) ? configuration : this.defaultConfiguration()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.initialScene.content.type !== this.newScene.content.type && !this.unwinding) {

        var configuration = this.configureScene();

        if (configuration.pop) {
          this.navigator.replacePreviousAndPop(this.newScene);
        } else {
          this.navigator.push(this.newScene);
        }
    }
  }

  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      ref={(n) => this.navigator = n}
      initialRoute={this.initialScene}
      renderScene={this.renderScene}
      configureScene={this.configureScene}
      onDidFocus={this.onDidFocus}/>
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

  onDidFocus(route) {
    if (this.newScene && route != this.newScene) {

      var unwindingScene = this.newScene

      this.unwinding = true
      this.props.unwindScene(unwindingScene)
      this.unwinding = false
    }
  }
}

module.exports = TransitionNavigation;
