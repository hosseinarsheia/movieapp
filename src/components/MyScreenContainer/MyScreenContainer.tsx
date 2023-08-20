import React, {PropsWithChildren} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';

interface MyScreenContainerProps {}

function MyScreenContainer({children}: PropsWithChildren<MyScreenContainerProps>) {
  return <SafeAreaView style={{flex: 1, paddingHorizontal: 16}}>{children}</SafeAreaView>;
}

export default MyScreenContainer;
