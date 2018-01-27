import React from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import InputScreen from './inputScreen'
import OutputScreen from './outputScreen' 

const RootTabs = TabNavigator({
  Input: {
    screen: InputScreen
  },
  Profile: {
    screen: OutputScreen
  }
})

export default RootTabs
