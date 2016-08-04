import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import {
  DigitsLoginButton
} from 'react-native-fabric-digits';

import Store from './store/store';

class Login extends Component {

  constructor(props) {
   super(props);

   this.completion = this.completion.bind(this);
  }

  completion(error, response) {
    if (error == null) {
      this.props.login();
    } else {
      this.props.login();
      Alert.alert(
        "We couldn't log you in",
        "Please try again later",
        [
          {text: 'Ok'},
        ]
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <DigitsLoginButton
        ref="DigitsLoginButton"
        options={{
          title: "Login To Did It",
          phoneNumber: "+61",
          appearance: {
            backgroundColor: {
              hex: "#ffffff",
              alpha: 1.0
            },
            accentColor: {
              hex: "#43a16f",
              alpha: 0.7
            },
            headerFont: {
              name: "Arial",
              size: 16
            },
            labelFont: {
              name: "Helvetica",
              size: 18
            },
            bodyFont: {
              name: "Helvetica",
              size: 16
            }
          }
        }}
        text="Login With Phone Number"
        completion={this.completion}
        buttonStyle={styles.digitsAuthenticateButton}
        textStyle={styles.digitsAuthenticateButtonText}/>
      </View>
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
});

module.exports = Login
