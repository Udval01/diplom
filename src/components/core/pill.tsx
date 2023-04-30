// @ts-nocheck
import React, {FC} from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {TypographyTypes} from '../../theme';
import {Padding} from '../layout';
import {Border} from './border';
import {Text} from './text';

type PillType = {
  onPress?: any;
  children?: any;
  loading?: boolean;
  flat?: boolean;
  textAlign?: any;
  size?: Array<number>;
  radius?: any;
  type?: TypographyTypes;
};

export const Pill: FC<PillType> = (props: PillType) => {
  const {onPress, children, loading, flat, textAlign, size, radius, type} =
    props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Border
        radius={radius ? radius : ''}
        backgroundRole={(!flat && 'success') || 'transparent'}>
        <Padding size={size || [2, 4, 2, 4]}>
          {loading && <ActivityIndicator />}
          {!loading && (
            <Text
              role={!flat ? 'light' : 'success'}
              type={type || 'paragraph.bold'}
              textAlign={textAlign}>
              {children}
            </Text>
          )}
        </Padding>
      </Border>
    </TouchableOpacity>
  );
};
