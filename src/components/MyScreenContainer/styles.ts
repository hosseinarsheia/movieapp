import {StyleSheet} from 'react-native';
import {ThemeStyleType} from '../../context/ThemeContext/ThemeContext';

export const createdStyle = (theme: ThemeStyleType) =>
  StyleSheet.create({
    contentContainerStyle: {
      alignItems: 'center',
      flexGrow: 1,
    },

    screenContainer: {
      backgroundColor: theme.colors.white,
      flex: 1,
      paddingHorizontal: 20,
    },

    scrollStyle: {
      flex: 1,
      paddingVertical: 15,
      width: '100%',
    },
  });
