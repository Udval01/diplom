import React, {useContext} from 'react';
import {MinusIcon, CrossIcon} from '../../assets/icons';
import {Border, Pill, Text} from '../core';
import {Queue, Margin, Overlay, Padding} from '../layout';
// import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ShoppingCartContext} from '../../contexts/cart';

export const ProductEditCart = ({product}: any) => {
  const {objectID, id} = product;
  const key = objectID || id;
  const {items, updateItemInCart} = useContext(ShoppingCartContext);
  const {quantity} = items[key] || {};

  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  const addToCart = () => {
    updateItemInCart(product, 1);
    // ReactNativeHapticFeedback.trigger('impactLight', options);
  };

  if (!quantity || !product?.size) {
    return (
      <Pill
        radius="medium"
        size={[1, 6.2, 1, 6.2]}
        textAlign="center"
        onPress={addToCart}
        type="paragraph.medium">
        Нэмэх
      </Pill>
    );
  }
  return (
    <Border>
      <Border radius="medium" role="tertiary">
        <Queue size={4.3} justifyContent="center" alignItems="center">
          <TouchableOpacity
            onPress={() => {
              updateItemInCart(product, -1);
              //   ReactNativeHapticFeedback.trigger('impactLight', options);
            }}>
            <Border radius="xmedium" lineWidth="light" role="gray">
              <Padding size={[4.2, 3.4, 4.2, 3.4]}>
                <MinusIcon height={2} role="gray50" width={10} />
              </Padding>
            </Border>
          </TouchableOpacity>

          <Overlay width="35%">
            <Border backgroundRole="light">
              <Margin size={[2, 2, 2, 2]}>
                <Text textAlign="center" type="paragraph.main" role="gray50">
                  {quantity}
                </Text>
              </Margin>
            </Border>
          </Overlay>

          <TouchableOpacity
            onPress={() => {
              updateItemInCart(product, 1);
              //   ReactNativeHapticFeedback.trigger('impactLight', options);
            }}>
            <Border radius="xmedium" lineWidth="light" role="gray">
              <Padding size={[3.4, 3.4, 3.4, 3.4]}>
                <CrossIcon width={10} height={10} role="gray50" />
              </Padding>
            </Border>
          </TouchableOpacity>
        </Queue>
      </Border>
    </Border>
  );
};
