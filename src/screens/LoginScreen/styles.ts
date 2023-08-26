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
    divider: {
      backgroundColor: theme.colors.grey200,
      marginVertical: 30,
      width: '100%',
    },
    // eslint-disable-next-line react-native/no-color-literals
    facebookButton: {
      backgroundColor: '#3A559F',
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
