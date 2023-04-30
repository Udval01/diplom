import React, {useContext} from 'react';
import {BagIcon} from '../assets/icons/index';
import {Border, Text} from './core';
import {Padding, Queue, Overlay} from './layout';
import {ShoppingCartContext} from '../contexts/cart';

export const CartWithCounter = () => {
  const {totalItems} = useContext(ShoppingCartContext);

  console.log('total items ----->', totalItems);

  return (
    <Border backgroundRole="success" radius="medium">
      <Padding size={[1, 4, 1, 4]}>
        <Queue size={4.2} justifyContent="space-between" alignItems="center">
          <BagIcon role="primary" />
          <Overlay right={0}>
            <Text role="light" type="paragraph.bold" textAlign="center">
              {`${totalItems}`}
            </Text>
          </Overlay>
        </Queue>
      </Padding>
    </Border>
  );
};
