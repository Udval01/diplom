// @ts-nocheck
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {mapRoleToBackgroundColor} from '../core';
import {mapLineWidthToBorderWidth, mapRoleToBorderColor} from './border';
type CircleType = {
  children?: any;
  backgroundRole?:
    | 'success'
    | 'lightSuccess'
    | 'light'
    | 'primary'
    | 'info'
    | 'error'
    | 'secondary'
    | 'tertiary'
    | 'lightGray'
    | 'transparent'
    | 'overlay'
    | 'gray5'
    | 'accent';
  role?: 'success' | 'light' | 'primary' | 'info' | 'error' | 'secondary';
  borderRole?: BorderRoleType;
  lineWidth?: 'xlight' | 'light' | 'medium' | 'thick';
  size?: number;
  height?: number | string;
  width?: number | string;
  opacity?: number;
  flex?: number;
  center?: boolean;
};

export const Circle: FC<CircleType> = props => {
  const {
    children,
    backgroundRole,
    lineWidth,
    size = 50,
    height,
    width,
    borderRole,
    opacity,
    flex,
    center,
  } = props;
  const style = StyleSheet.create({
    container: {
      position: 'relative',
      overflow: 'hidden',
      height: height || size,
      width: width || size,
      borderRadius: size / 2,
      borderWidth: mapLineWidthToBorderWidth(lineWidth),
      borderColor: mapRoleToBorderColor(borderRole),
      backgroundColor: mapRoleToBackgroundColor(backgroundRole),
      opacity,
      flex,
    },
    innerContainer: {
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
      justifyContent: center ? 'center' : null,
      alignItems: center ? 'center' : null,
    },
  });

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>{children}</View>
    </View>
  );
};
