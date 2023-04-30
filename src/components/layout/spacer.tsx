import React, {useContext} from 'react';
import {View} from 'react-native';
import {mapRoleToBackgroundColor} from '..';
import {fibonacci} from '../../utils';
import {ThemeContext} from '../theme';

type SpacerType = {
  horizontal: boolean;
  size: number;
  role?: BackgroundRoleType;
};

export const Spacer = (props: SpacerType) => {
  const {horizontal, size, role = 'transparent'} = props;
  const {baseSpace} = useContext(ThemeContext);
  return (
    <View
      style={{
        height: (horizontal && fibonacci(size) * baseSpace) || 0,
        width: (!horizontal && fibonacci(size) * baseSpace) || 0,
        backgroundColor: mapRoleToBackgroundColor(role),
      }}
    />
  );
};
