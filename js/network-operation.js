import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class NetworkOperation extends Component {

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.error) {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'OK'},
        ]
      )
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.children}
        <Spinner visible={this.props.loading} />
      </View>
    )
  }
}

module.exports = NetworkOperation;
