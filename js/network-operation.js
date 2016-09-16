import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

class NetworkOperation extends Component {

  componentWillUpdate(nextProps, nextState) {

    if (!this.props.error && nextProps.error) {
      Alert.alert(
        nextProps.error.title,
        nextProps.error.message,
        [
          {text: 'OK', onPress: function(){
            nextProps.onDismissError()
          }},
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
