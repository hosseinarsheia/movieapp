import React from 'react';
import {enableScreens} from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {ThemeContextProvider} from './src/context/ThemeContext/ThemeContext';
import RootNavigation from './src/routes/RootNavigation';

enableScreens(false);

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeContextProvider>
        <RootNavigation />
      </ThemeContextProvider>
    </GestureHandlerRootView>
  );
}

export default App;
