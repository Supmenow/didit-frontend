import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Login from './login';
import LoginAction from './actions/user';

class App extends Component {

  constructor(props) {
   super(props);

   this.login = this.login.bind(this);
  }

  render() {
    if (this.props.isLoggedIn == true) {
      return (
        <View>
        <Text>Logged In</Text>
        </View>
      );
    } else {
      return (
        <Login login={this.login}/>
      );
    }
  }

  login() {
    this.props.login();
  }
}

function select(state) {
  return {
    isLoggedIn: state.isLoggedIn,
  };
}

function actions(dispatch) {
  return {
    login: () => dispatch(LoginAction()),
  }
}

module.exports = connect(select, actions)(App);
