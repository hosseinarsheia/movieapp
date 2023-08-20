import React from 'react';
import {SafeAreaView} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import {ThemeContextProvider} from './src/context/ThemeContext/ThemeContext';

enableScreens(false);

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <ThemeContextProvider>
          <SafeAreaView style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text>hello</Text>
          </SafeAreaView>
        </ThemeContextProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
