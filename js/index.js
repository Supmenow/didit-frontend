import { AppRegistry } from 'react-native';
import Root from './root';
import Notification from './notification';

function main() {
  Notification.registerForActions();
  AppRegistry.registerComponent('DidIt', () => Root);
}

module.exports = main
