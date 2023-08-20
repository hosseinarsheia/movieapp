import React from 'react';
import {Button, ButtonProps} from 'react-native-paper';
import R from '../../res/R';

interface MyButtonProps extends ButtonProps {
  mode?: ButtonProps['mode'];
  labelStyle?: ButtonProps['labelStyle'];
  labelFontSize?: number;
}

function MyButton({
  mode = 'contained',
  labelStyle,
  children,
  labelFontSize = R.fontSize.fs20,
}: MyButtonProps) {
  return (
    <Button
      mode={mode}
      labelStyle={[
        {
          fontWeight: '700',
          fontSize: labelFontSize,
          fontFamily: R.fontFamily.bold,
          lineHeight: labelFontSize * 1.5,
        },
        labelStyle,
      ]}>
      {children}
    </Button>
  );
}

export default MyButton;
