import React from 'react';
import {MyButton, MyScreenContainer, MyText} from '../../components';
import {useTheme} from '../../context/ThemeContext/ThemeContext';

function LoginScreen() {
  const {theme} = useTheme();
  return (
    <MyScreenContainer>
      <MyText fontSize={25} fontFamily="semiBold" color={theme.colors.primary}>
        ssss
      </MyText>

      <MyButton>Sign in</MyButton>
    </MyScreenContainer>
  );
}

export default LoginScreen;
