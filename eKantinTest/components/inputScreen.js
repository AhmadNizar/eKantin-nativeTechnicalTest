import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class InputScreen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>InputScreen Screen jos</Text>
      </View>
    )
  }
}
