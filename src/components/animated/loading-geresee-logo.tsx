import React from 'react';
import * as Animatable from 'react-native-animatable';
import {GereseeLogo} from '../../assets/icons';
import {Center} from '../../components';

export const LoadingGereseeLogo = () => {
  return (
    <Animatable.View
      animation="fadeOut"
      iterationCount="infinite"
      duration={3000}
      useNativeDriver={true}
      style={{height: '100%', backgroundColor: 'white'}}>
      <Center flex={1}>
        <GereseeLogo height={150} width={150} />
      </Center>
    </Animatable.View>
  );
};
