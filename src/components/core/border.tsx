// @ts-nocheck
import _ from 'lodash';
import {View} from 'react-native';
import styled, {css} from 'styled-components';
import {colors, ColorTypes} from '../../theme';
import {DimensionType} from '../layout';
import '../types';
export type BorderType = {
  role?:
    | 'success'
    | 'light'
    | 'primary'
    | 'default'
    | 'tertiary'
    | 'error'
    | 'transparent'
    | 'gray'
    | 'gray30';
  backgroundRole?: BackgroundRoleType;
  lineWidth?: keyof typeof mapLineWidth;
  radius?: keyof typeof mapBorderRadius;
  topWidth?: keyof typeof mapLineWidth;
  bottomWidth?: keyof typeof mapLineWidth;
  leftWidth?: keyof typeof mapLineWidth;
  rightWidth?: keyof typeof mapLineWidth;
  grow?: number;
  children?: any;
  color?: ColorTypes;
  backgroundColor?: ColorTypes;
  lineType?: lineTypes;
};
export const mapLineWidth = {
  xlight: 0.5,
  light: 1,
  medium: 2,
  thick: 3,
  large: 5,
};
export const mapLineWidthToBorderWidth = lineWidth => {
  return _.get(mapLineWidth, lineWidth);
};
export const mapBorderRadius = {
  small: 2,
  medium: 4,
  xmedium: 8,
  large: 15,
  xlarge: 35,
};

const mapRoleToBorder = {
  success: colors.green.main,
  light: colors.white.main,
  primary: colors.black.main,
  gray: colors.gray[20],
  gray5: colors.gray[5],
  error: colors.red.main,
  tertiary: colors.gray[20],
  transparent: colors.transparent.main,
  gray30: colors.gray[30],
};

const mapRoleToBackground = {
  success: colors.green.main,
  light: colors.white.main,
  primary: colors.black.main,
  error: colors.red.main,
  secondary: colors.gray[10],
  warning: colors.yellow.main,
  yellow: colors.yellow.light,
  lightGreen: colors.green.light,
  accent: colors.green.dark,
  lightGray: colors.gray[20],
  tertiary: colors.gray[30],
  darkGray: colors.gray[40],
  transparent: colors.transparent.main,
  overlay: colors.overlay.main,
  gray: colors.gray[5],
  opacity: colors.opacity.main,
};

const borderTypes = {
  solid: 'solid',
  dotted: 'dotted',
  dashed: 'dashed',
};

export const mapRoleToBackgroundColor = backgroundColor => {
  return _.get(mapRoleToBackground, backgroundColor);
};
export const mapRoleToBorderColor = role => {
  return _.get(mapRoleToBorder, role);
};

export const mapColorToBorder = (color: ColorTypes) => {
  return _.get(colors, color || 'gray.90');
};
export const BorderStyle = css<BorderType>`
  border-style: ${({lineType}) =>
    borderTypes?.[`${lineType}`] ? lineType : 'solid'};
  border-top-right-radius: ${({radius}) =>
    radius ? mapBorderRadius[radius] : 0}px;
  border-top-left-radius: ${({radius}) =>
    radius ? mapBorderRadius[radius] : 0}px;
  border-bottom-right-radius: ${({radius}) =>
    radius ? mapBorderRadius[radius] : 0}px;
  border-bottom-left-radius: ${({radius}) =>
    radius ? mapBorderRadius[radius] : 0}px;
  border-width: ${({lineWidth}) =>
    lineWidth ? mapLineWidthToBorderWidth(lineWidth) : 0}px;
  border-top-width: ${({topWidth, lineWidth}) =>
    topWidth
      ? mapLineWidthToBorderWidth(topWidth)
      : lineWidth
      ? mapLineWidthToBorderWidth(lineWidth)
      : 0}px;
  border-bottom-width: ${({bottomWidth, lineWidth}) =>
    bottomWidth
      ? mapLineWidthToBorderWidth(bottomWidth)
      : lineWidth
      ? mapLineWidthToBorderWidth(lineWidth)
      : 0}px;
  border-right-width: ${({rightWdidth, lineWidth}) =>
    rightWdidth
      ? mapLineWidthToBorderWidth(rightWdidth)
      : lineWidth
      ? mapLineWidthToBorderWidth(lineWidth)
      : 0}px;
  border-left-width: ${({leftWidth, lineWidth}) =>
    leftWidth
      ? mapLineWidthToBorderWidth(leftWidth)
      : lineWidth
      ? mapLineWidthToBorderWidth(lineWidth)
      : 0}px;
  border-color: ${({color, role}) =>
    color
      ? mapColorToBorder(color)
      : role
      ? mapRoleToBorderColor(role)
      : mapRoleToBackgroundColor('transparent')};
  background-color: ${({backgroundRole, backgroundColor}) =>
    mapRoleToBackgroundColor(backgroundRole || 'transparent')};
`;
export const Border = styled(View)<BorderType & DimensionType>`
  ${BorderStyle}

  position: relative;
  overflow: hidden;
`;
