import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { DigitsLoginButton } from 'react-native-fabric-digits';

class Login extends Component {

  constructor(props) {
   super(props);

   this.styles = props.styles;
   this.completion = this.completion.bind(this);
  }

  completion(error, response) {
    if (error == null) {
      this.props.completion();
    } else {
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
      <View style={this.styles.container}>
        <DigitsLoginButton
        ref="Login"
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
        buttonStyle={this.styles.digitsAuthenticateButton}
        textStyle={this.styles.digitsAuthenticateButtonText}/>
      </View>
    );
  }
}

module.exports = Login
