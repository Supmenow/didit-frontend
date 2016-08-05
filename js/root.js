import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import App from './app';
import Store from './store/store';
import { Provider } from 'react-redux';

class Root extends Component {

  constructor() {
      super();

     this.state = {
       store: Store,
     };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App style={styles}/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8154B',
  },
  text: {
    color: '#FFF',
    backgroundColor: '#F8154B',
    fontSize: 35
  },
  sendDongContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  buttonBackground: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    paddingHorizontal: 40,
    paddingVertical: 15
  },
  buttonText: {
    color: '#F8154B',
  },
  didItButtonBackground: {
    backgroundColor: '#F8154B',
    borderRadius: 5,
    paddingHorizontal: 40,
    paddingVertical: 15
  },
  didItButtonText: {
    color: '#FFF',
    fontSize: 35
  },
  digitsAuthenticateButton: {
    height: 50,
    width: 230,
    backgroundColor: '#13988A',
    justifyContent: 'center',
    borderRadius: 5,
  },
  digitsAuthenticateButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  nameInput: {
    color: '#fff',
    height: 100,
    fontSize: 35,
    margin: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});

module.exports = Root
