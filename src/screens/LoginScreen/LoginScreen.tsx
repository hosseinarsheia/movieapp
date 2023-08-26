import React, {useMemo} from 'react';
import {Divider} from 'react-native-paper';

import {MyButton, MyScreenContainer, MyText} from '../../components';
import {useTheme} from '../../context/ThemeContext/ThemeContext';
import {createdStyle} from './styles';

function LoginScreen() {
  const {theme} = useTheme();
  const styles = useMemo(() => createdStyle(theme), [theme]);

  return (
    <MyScreenContainer contentContainerStyle={styles.contentContainerStyle}>
      <MyText fontSize={25} fontFamily="semiBold" color={theme.colors.darkPurple}>
        PRANDANA
      </MyText>

      <MyText fontSize={16} color={theme.colors.textDarkGrey} style={styles.descText}>
        By creating an account you get access to an unlimited number of exercises
      </MyText>

      <MyButton style={styles.signIn}>Sign in</MyButton>
      <MyButton labelStyle={{color: theme.colors.lightPurple}} style={styles.signUp}>
        Sign Up
      </MyButton>

      <Divider style={styles.divider} bold />
      <MyButton style={styles.facebookButton}>Sign in with Facebook</MyButton>
    </MyScreenContainer>
  );
}

export default LoginScreen;
