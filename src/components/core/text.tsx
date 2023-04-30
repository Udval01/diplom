// @ts-nocheck
import React, {useContext} from 'react';
import {StyleSheet, Text as RawText} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, ColorTypes, TYPOGRAPHY, TypographyTypes} from '../../theme';
import {fibonacci} from '../../utils';
import {ThemeContext} from '../theme';
import _ from 'lodash';

type TextType = {
  role?:
    | 'success'
    | 'light'
    | 'primary'
    | 'info'
    | 'error'
    | 'secondary'
    | 'tertiary'
    | 'gray50'
    | 'gray40'
    | 'dark'
    | 'blue'
    | 'darkGray';
  transform?: string;
  heigthSize?: string;
  numberOfLines?: number;
  width?: string | number;
  heigth?: string | number;
  textAlign?: 'center' | 'left' | 'right';
  textTransform?: 'capitalize' | 'lowercase' | 'uppercase' | 'none';
  type?: TypographyTypes;
  color?: ColorTypes;
  underline?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
};

const mapRoleToText = {
  default: colors.black.main,
  primary: colors.blue.light,
  secondary: colors.purple.main,
  tertiary: colors.gray[30],
  darkGray: colors.gray[40],
  success: colors.green.main,
  alert: colors.orange.main,
  error: colors.red.main,
  light: colors.white.main,
  dark: colors.black.main,
  gray50: colors.gray[50],
  gray40: colors.gray[40],
  blue: colors.blue.main,
};

const mapRoleToTextColor = role => _.get(mapRoleToText, role || 'default');
export const mapColorToText = color => _.get(colors, color || 'gray.90');

export const Text = (props: TextType) => {
  const {
    role,
    type,
    color,
    width,
    children,
    textAlign,
    transform,
    heigthSize,
    numberOfLines,
    textTransform,
    underline,
  } = props;
  const {baseSpace} = useContext(ThemeContext);
  const textTypes = _.get(TYPOGRAPHY, type || 'paragraph.main');
  const style = {
    styleName: {
      ...textTypes,
      fontFamily: 'Montserrat',
      color: color ? mapColorToText(color) : mapRoleToTextColor(role),
      textDecorationLine: underline ? 'underline' : 'none',
    },
  };
  return (
    <RawText
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[
        {
          width: width || '100%',
          flexShrink: 1,
          textAlign: textAlign || 'left',
          height: fibonacci(heigthSize) * baseSpace || 'auto',
          textTransform,
          transform,
        },
        style.styleName,
      ]}>
      {children}
    </RawText>
  );
};

export const InteractiveText = ({
  children,
  onPress,
  ...props
}: TextType & {onPress?: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text {...props}>{children}</Text>
    </TouchableOpacity>
  );
};
