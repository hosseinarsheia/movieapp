import React, {PropsWithChildren, useMemo} from 'react';
import {ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {createdStyle} from './styles';
import {useTheme} from '../../context/ThemeContext/ThemeContext';

interface MyScreenContainerProps {
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

function MyScreenContainer({
  children,
  style,
  containerStyle,
  contentContainerStyle,
}: PropsWithChildren<MyScreenContainerProps>) {
  const {theme} = useTheme();
  const styles = useMemo(() => createdStyle(theme), [theme]);
  return (
    <SafeAreaView style={[styles.screenContainer, style]}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={[styles.scrollStyle, containerStyle]}
        contentContainerStyle={[styles.contentContainerStyle, contentContainerStyle]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyScreenContainer;
