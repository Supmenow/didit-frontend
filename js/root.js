import React, { Component } from 'react';
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
        <App/>
      </Provider>
    );
  }
}

module.exports = Root
