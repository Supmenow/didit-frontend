import React, { Component } from 'react';
import { Navigator } from 'react-native';

// FIXME: Handle pop gesture with state
class TransitionNavigation extends Component {

  constructor(props) {
   super(props);

   this.initialScene = {content: this.sceneForProps(props), index: 0};
  }

  componentWillUpdate(nextProps, nextState) {
    this.newScene = {content: this.sceneForProps(nextProps), index: 1};

    this.configureScene = () => {
      return (this.newScene.content.configuration) ? this.newScene.content.configuration : this.defaultConfiguration()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.initialScene = {content: this.sceneForProps(prevProps), index: 0};

    if (this.initialScene.content.type !== this.newScene.content.type) {
        this.navigator.push(this.newScene);
    }
  }

  render() {
    return (
      <Navigator
      style={{ flex:1 }}
      ref={(n) => this.navigator = n}
      initialRoute={this.initialScene}
      renderScene={this.renderScene}
      configureScene={this.configureScene}/>
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
