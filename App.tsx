import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import {enableScreens} from 'react-native-screens'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {Button} from 'react-native-paper'

enableScreens(false)

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView>
        <Text>Hello</Text>
        <Button icon="account">Press messs</Button>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default App
