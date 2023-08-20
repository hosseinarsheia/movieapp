import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginNavigation from './LoginNavigation/LoginNavigation';

function RootNavigation() {
  return (
    <NavigationContainer>
      <LoginNavigation />
    </NavigationContainer>
  );
}

export default RootNavigation;
