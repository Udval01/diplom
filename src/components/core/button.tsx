// @ts-nocheck
import React, {FC, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ColorTypes, TypographyTypes} from '../../theme';
import {AnimatedFadeInView, Spinner} from '../animated';
import {Overlay, Padding} from '../layout';
import {Center} from '../layout/center';
import {Border} from './border';
import {Text} from './text';
import {mapBorderRadius, mapLineWidth} from './border';
import _ from 'lodash';

export type ButtonType = {
  size?: number[];
  onPress?: any;
  children?: any;
  loading?: boolean;
  leftIcon?: any;
  rightIcon?: any;
  disabled?: boolean;
  backgroundRole?: BackgroundRoleType;
  textColor?: ColorTypes;
  textType?: TypographyTypes;
  fontWeight?: any;
  textRole?:
    | 'success'
    | 'light'
    | 'primary'
    | 'info'
    | 'error'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'gray50';
  borderRole?:
    | 'success'
    | 'light'
    | 'primary'
    | 'default'
    | 'tertiary'
    | 'error'
    | 'transparent';
  leftSizeOfIcon?: number;
  rightSizeOfIcon?: number;
  radius?: keyof typeof mapBorderRadius;
  lineWidth?: keyof typeof mapLineWidth;
  buttonType?: 'primary' | 'secondary' | 'tertiary' | 'light';
};

const mapBorderStyle = {
  primary: {
    radius: 'xmedium',
    lineWidth: 'xlight',
    backgroundRole: 'success',
    borderRole: 'transparent',
  },
  secondary: {
    radius: 'xlarge',
    lineWidth: 'light',
    backgroundRole: 'success',
    borderRole: 'transparent',
  },
  tertiary: {
    radius: 'xlarge',
    lineWidth: 'medium',
    backgroundRole: 'transparent',
    borderRole: 'tertiary',
  },
  light: {
    borderRole: 'light',
  },
};

const mapTextStyle = {
  primary: {
    textRole: 'light',
    textType: 'subheading.bold',
    textColor: 'light',
  },
  secondary: {
    textRole: 'light',
    textType: 'subheading.main',
    textColor: 'light',
  },
  tertiary: {
    textRole: 'tertiary',
    textType: 'subheading.main',
    textColor: 'light',
  },
  light: {
    textRole: 'success',
    textType: 'subheading.main',
    // textColor: 'light',
  },
};

const mapPaddingSize = {
  primary: [4, 0, 4, 0],
  secondary: [4, 5, 4, 5],
  tertiary: [3, 5, 3, 5],
};

const mapTypeToBorder = (type: string) => _.get(mapBorderStyle, type);
const mapTypeToText = (type: string) => _.get(mapTextStyle, type);
const mapTypeToPadding = (type: string) => _.get(mapPaddingSize, type);

export const Button: FC<ButtonType> = props => {
  const {
    size = [4, 0, 4, 0],
    onPress,
    children,
    disabled,
    textRole,
    textType,
    leftIcon,
    rightIcon,
    lineWidth,
    backgroundRole,
    borderRole,
    radius,
    buttonType,
    leftSizeOfIcon = 30,
    rightSizeOfIcon = 30,
  } = props;

  return (
    <TouchableOpacity
      style={{
        opacity: disabled ? 0.4 : 1,
      }}
      disabled={disabled}
      onPress={onPress}>
      <Border
        {...props}
        radius={buttonType ? mapTypeToBorder(buttonType).radius : radius}
        role={buttonType ? mapTypeToBorder(buttonType).borderRole : borderRole}
        backgroundRole={
          buttonType
            ? mapTypeToBorder(buttonType).backgroundRole
            : backgroundRole
        }
        lineWidth={
          buttonType ? mapTypeToBorder(buttonType).lineWidth : lineWidth
        }>
        <Padding size={buttonType ? mapTypeToPadding(buttonType) : size}>
          <Center>
            <Text
              role={buttonType ? mapTypeToText(buttonType).textRole : textRole}
              type={buttonType ? mapTypeToText(buttonType).textType : textType}
              textAlign="center"
              {...props}>
              {children}
            </Text>
          </Center>
        </Padding>
        <Overlay left={leftSizeOfIcon} height="100%">
          <AnimatedFadeInView height="100%" visible={!!leftIcon}>
            <Center flex={1}>{leftIcon}</Center>
          </AnimatedFadeInView>
        </Overlay>
        <Overlay right={rightSizeOfIcon} height="100%">
          <AnimatedFadeInView height="100%" visible={!!rightIcon}>
            <Center flex={1}>{rightIcon}</Center>
          </AnimatedFadeInView>
        </Overlay>
      </Border>
    </TouchableOpacity>
  );
};

export const AsyncButton: FC<ButtonType & {error?: any}> = props => {
  const {onPress} = props;
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    setLoading(true);
    try {
      onPress && (await onPress());
    } finally {
      setLoading(false);
    }
  };
  return (
    <Button
      {...props}
      loading={loading}
      onPress={onClick}
      rightIcon={
        <AnimatedFadeInView visible={loading}>
          <Spinner size={15} />
        </AnimatedFadeInView>
      }
    />
  );
};
