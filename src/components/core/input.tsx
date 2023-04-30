import IMask from 'imask';
import React, {FC, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
} from 'react-native';
import {CheckboxMarkIcon} from '../../assets/icons';
import {AnimatedFadeInView} from '../animated';
import {Center, Overlay, Padding, Queue} from '../layout';
import {Border, BorderType} from './border';
import {mapRoleToTextColor} from '../theme';
import {mapRoleToBackgroundColor} from '../core';
import {ColorTypes, TypographyTypes, TYPOGRAPHY} from '../../theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {mapColorToText} from '.';
import _ from 'lodash';

type InputType = {
  success?: boolean;
  error?: boolean;
  multiline?: boolean;
  autoCorrect?: boolean;
  size?: number[];
  alignment?: 'center' | 'left' | 'right';
  leftIcon?: React.Component | JSX.Element;
  rightIcon?: React.Component | JSX.Element;
  placeholder?: string;
  placeholderTextColor?: ColorTypes;
  onChangeText?: any;
  height?: number | string;
  onFocus?: () => void;
  loading?: boolean;
  keyboardType?: 'numeric' | 'default';
  maxLength?: number;
  numberOfLines?: number;
  autoFocus?: boolean;
  borderRole?: keyof typeof mapRoleToBackgroundColor;
  defaultValue?: string;
  alignVertical?: 'top' | 'middle' | 'bottom';
  fontWeight?: string;
  textColor?: ColorTypes;
  type?: keyof TypographyTypes;
};

export const AutoVerifiedInput: FC<any> = React.forwardRef((props, ref) => {
  let [loading, setLoading] = useState(false);
  let [success, setSuccess] = useState(false);
  let [error, setError] = useState(false);
  const {needToVerify, onSubmit, onSuccess} = props;
  const onChangeText = async text => {
    setSuccess(false);
    setError(false);
    if (!(await needToVerify(text))) {
      return;
    }
    setLoading(true);
    try {
      await onSubmit(text);
      setSuccess(true);
      onSuccess && onSuccess(text);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  return (
    <MaskedInput
      ref={ref}
      {...props}
      onChangeText={onChangeText}
      loading={loading}
      success={success}
      error={error}
    />
  );
});

export const MaskedInput = props => {
  const {onChangeText, mask, text: defaultValue, ...rest} = props;
  const [value, setValue] = useState(null);
  const iMask = mask && IMask.createMask({mask});
  useEffect(() => {
    const maskedValue =
      (mask && iMask.resolve(defaultValue || '')) || defaultValue;
    setValue(maskedValue);
  }, [defaultValue]);
  const onChange = (text?: string) => {
    const maskedValue = (mask && iMask.resolve(text || '')) || text;
    setValue(maskedValue);
    if (!onChangeText) {
      return;
    }
    onChangeText && onChangeText(maskedValue || text);
    return maskedValue;
  };
  return <Input {...rest} onChangeText={onChange} defaultValue={value} />;
};

export const Input: FC<InputType & BorderType> = (
  props: InputType & BorderType,
) => {
  const {
    success,
    error,
    size,
    radius,
    height,
    alignment,
    leftIcon,
    rightIcon,
    borderRole,
    onChangeText,
    alignVertical,
    placeholder,
    placeholderTextColor = 'gray.30',
    loading,
    defaultValue,
    fontWeight,
    textColor,
    onFocus,
    keyboardType,
    multiline,
    maxLength,
    type,
  } = props;
  const ref = useRef(null);
  const [value, setValue] = useState(defaultValue || '');
  const textTypes = _.get(TYPOGRAPHY, type || 'paragraph.main');

  const style = StyleSheet.create({
    container: {
      fontSize: textTypes.fontSize || 14,
      lineHeight: textTypes.lineHeight || 16,
      fontWeight: fontWeight || textTypes.fontWeight || '400',
      fontFamily: 'Montserrat',
      textAlign: alignment,
      textAlignVertical: alignVertical,
      alignItems: 'center',
      justifyContent: 'center',
      color: mapRoleToTextColor(textColor),
      width: rightIcon || leftIcon ? '90%' : '100%',
      height,
    },
  });

  const onChange = text => {
    setValue(onChangeText ? onChangeText(text) : text);
  };
  const handleFocus = () => {
    ref.current?.focus();
  };
  return (
    <TouchableWithoutFeedback onPress={handleFocus}>
      <Border radius={radius} {...props} role={borderRole}>
        <Padding
          size={size || (Platform.OS === 'ios' ? [4, 0, 4, 4] : [0, 0, 0, 2])}>
          <Queue size={2}>
            {leftIcon && <Center flex={1}>{leftIcon}</Center>}
            <TextInput
              ref={ref}
              style={style.container}
              multiline={multiline}
              defaultValue={value}
              onChangeText={onChange}
              placeholder={placeholder}
              onFocus={onFocus}
              blurOnSubmit
              maxLength={maxLength}
              keyboardType={keyboardType ? keyboardType : 'default'}
              placeholderTextColor={mapColorToText(placeholderTextColor)}
            />
          </Queue>
        </Padding>
        <Overlay right={10} height="100%">
          <AnimatedFadeInView visible={loading} height="100%">
            <Center flex={1}>
              <ActivityIndicator
                color="black"
                size={Platform.OS === 'ios' ? 'small' : 20}
              />
            </Center>
          </AnimatedFadeInView>
        </Overlay>
        <Overlay right={10} height="100%">
          <Center flex={1}>{rightIcon}</Center>
        </Overlay>

        <Overlay right={10} height="100%">
          <AnimatedFadeInView visible={success} height="100%">
            <Center flex={1}>
              <CheckboxMarkIcon />
            </Center>
          </AnimatedFadeInView>
        </Overlay>
        <Overlay right={10} height="100%">
          <AnimatedFadeInView visible={error} height="100%">
            <Center flex={1}>
              <ActivityIndicator
                color="red"
                size={Platform.OS === 'ios' ? 'small' : 20}
              />
            </Center>
          </AnimatedFadeInView>
        </Overlay>
      </Border>
    </TouchableWithoutFeedback>
  );
};
