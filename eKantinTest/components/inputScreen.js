import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import * as firebase from 'firebase'
import Config from 'react-native-config'

const config = {
  apiKey: Config.apiKey,
  authDomain: "logo-racer.firebaseapp.com",
  databaseURL: "https://logo-racer.firebaseio.com",
  projectId: "logo-racer",
  storageBucket: "logo-racer.appspot.com",
  messagingSenderId: "841398408259"
};

firebase.initializeApp(config);

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
        <Text style={styles.titleText}>{Config.apiKey}</Text>
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
  componentWillMount() {
    console.log(`${Config.apiKey}`)
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
