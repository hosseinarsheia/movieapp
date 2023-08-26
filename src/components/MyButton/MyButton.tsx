import React from 'react';
import {Button, ButtonProps} from 'react-native-paper';
import {View, StyleProp, ViewStyle} from 'react-native';
import R from '../../res/R';
import {styles} from './styles';

interface MyButtonProps extends ButtonProps {
  mode?: ButtonProps['mode'];
  labelStyle?: ButtonProps['labelStyle'];
  labelFontSize?: number;
  style?: StyleProp<ViewStyle>;
}

function MyButton({
  mode = 'contained',
  labelStyle,
  children,
  labelFontSize = R.fontSize.fs18,
  style,
}: MyButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <Button
        style={[styles.buttonStyle, style]}
        mode={mode}
        labelStyle={[
          styles.labelStyles,
          {
            fontSize: labelFontSize,
            fontFamily: R.fontFamily.regular,
            lineHeight: labelFontSize * 1.5,
          },
          labelStyle,
        ]}>
        {children}
      </Button>
    </View>
  );
}

export default MyButton;
