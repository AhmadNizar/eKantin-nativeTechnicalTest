import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

export default class InputScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: ''
    }
  }
  onChangeMethod(e) {
    this.setState({
      inputData: e
    })
  }
  onSubmitMethod() {
    console.log('jos')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FormLabel>Input Data</FormLabel>
        <FormInput placeholder = 'Your Input Data' onChangeText={(e) => this.onChangeMethod(e)} />
        <Button
          raised
          title='Submit'
          onPress={() => this.onSubmitMethod()}
        />
      </View>
    )
  }
}
