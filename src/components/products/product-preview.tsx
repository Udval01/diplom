import React from 'react';
import {Dimensions, View, TouchableWithoutFeedback} from 'react-native';
import {Border, RemoteImage, Text} from '../core';
import {Center, Margin, Stack} from '../layout';
import {Caution} from '../caution';
import {NavigationRoutes} from '../../navigation/navigation-param';
import {useNavigation} from '@react-navigation/native';
import {ProductEditCart} from './product-edit-card';

const window = Dimensions.get('window');

type ProductPreviewType = {
  product: any;
  width?: number | string;
  type?: string;
  onPress?: () => void;
};

export const ProductPreview = ({
  product,
  width = null,
  type,
  onPress,
}: ProductPreviewType) => {
  const {navigate} = useNavigation();
  let {name, price, size, images, catalog} = product;
  let [url] = images || [];

  const navigateToProductDetails = () => {
    if (!type) {
      navigate(NavigationRoutes.ProductDetailsScreen, {
        product,
      });
    }
  };

  return (
    <Border radius="medium" role="tertiary" lineWidth="light">
      <Margin size={[3, 3, 3, 3]}>
        <Stack width={width || window.width / 3}>
          <TouchableWithoutFeedback onPress={navigateToProductDetails}>
            <View>
              <Border radius="xmedium" backgroundRole="light">
                <RemoteImage aspectRatio={1} url={url} />

                {catalog === 'Архи, Пиво' && (
                  <Caution text="+21" role="error" width="30%" />
                )}
              </Border>

              <Margin size={[3, 0, 3, 0]}>
                <Text
                  numberOfLines={3}
                  type="paragraph.medium"
                  color="black.main"
                  heigthSize={'6'}>
                  {`${name} ${size}`}
                </Text>
              </Margin>

              <Text type="paragraph.main" color="green.dark">
                {`₮${new Number(price || 4000).toLocaleString()}`}
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Margin top={3}>
            <Center>
              <ProductEditCart product={product} />
            </Center>
          </Margin>
        </Stack>
      </Margin>
    </Border>
  );
};
