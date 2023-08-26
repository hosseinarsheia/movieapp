import React, {PropsWithChildren, memo, useMemo} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import R from '../../res/R';

type FontFamily = 'extraLight' | 'light' | 'regular' | 'medium' | 'semiBold' | 'bold';

interface MyTextProps extends TextProps {
  style?: TextStyle;
  fontSize?: number;
  color?: string;
  fontFamily?: FontFamily;
  lineHeight?: number;
}

function MyText({
  style,
  fontSize = 14,
  color = 'black',
  fontFamily = 'regular',
  lineHeight,
  children,
  ...props
}: PropsWithChildren<MyTextProps>) {
  const fontFamilyValue: string = useMemo(() => {
    switch (fontFamily) {
      case 'extraLight':
        return R.fontFamily.extraLight;

      case 'light':
        return R.fontFamily.light;

      case 'regular':
        return R.fontFamily.regular;

      case 'medium':
        return R.fontFamily.medium;

      case 'semiBold':
        return R.fontFamily.semiBold;
      case 'bold':
        return R.fontFamily.bold;

      default:
        return R.fontFamily.regular;
    }
  }, [fontFamily]);

  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          color,
          fontFamily: fontFamilyValue,
          fontSize: Math.floor(moderateScale(fontSize)),
          lineHeight: lineHeight || Math.floor(moderateScale(fontSize)) * 1.5,
        },
        style,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      {children}
    </Text>
  );
}

export default memo(MyText);
