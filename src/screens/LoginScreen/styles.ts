import {StyleSheet} from 'react-native';
import {ThemeStyleType} from '../../context/ThemeContext/ThemeContext';

export const createdStyle = (theme: ThemeStyleType) =>
  StyleSheet.create({
    contentContainerStyle: {
      justifyContent: 'flex-end',
    },
    descText: {
      marginTop: 10,
      textAlign: 'center',
    },
    signIn: {
      backgroundColor: theme.colors.red,
      marginTop: 20,
    },
    signUp: {
      backgroundColor: theme.colors.lightGrey,
      marginTop: 20,
    },
  });
