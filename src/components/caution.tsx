import React, {FC} from 'react';
import {Border, Text} from './core';
import {Queue, Padding, Overlay} from './layout';
import './types';

export const Caution: FC<CautionType> = props => {
  const {width, role, icon, text} = props;
  return (
    <Overlay top={2} left={6} zIndex={999} width={width}>
      <Border backgroundRole={role} radius="xmedium">
        <Padding size={[2, 2, 2, 2]}>
          <Queue alignItems="center" size={2}>
            {icon}
            <Text type="caption1.main" textAlign={'center'} role="light">
              {text}
            </Text>
          </Queue>
        </Padding>
      </Border>
    </Overlay>
  );
};
