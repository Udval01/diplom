// @ts-nocheck
import React, {FC} from 'react';
import * as Animatable from 'react-native-animatable';
import {LoaderIcon} from '../../assets/icons';

export const Spinner: FC<{size?: number; role?: BorderRoleType}> = props => {
  const {size} = props;
  return (
    <Animatable.View
      style={{
        width: size || 42,
        height: size || 42,
      }}
      animation={'rotate'}
      iterationCount="infinite"
      duration={1000}
      useNativeDriver={true}>
      <LoaderIcon />
    </Animatable.View>
  );
};
