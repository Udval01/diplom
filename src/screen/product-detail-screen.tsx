// @ts-nocheck
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import React, {useContext, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaScreen} from '.';
import {Queue, RemoteImage, Stack, Text, Border, Padding} from '../components';
import {Dot} from '../assets/icons/';
import {ShoppingCartContext} from '../contexts/cart';
import {ProductEditCart} from '../components/products/product-edit-card';

export const ProductDetailsScreen = () => {
  const routes = useRoute<any>();
  const descriptionProducts = routes?.params?.product.description;

  const {catalog, images, name, price, objectID, id} =
    routes?.params?.product || {};
  const key = objectID || id;
  const {items} = useContext(ShoppingCartContext);
  const {quantity} = items[key] || {};
  let [url] = images || [];

  return (
    <SafeAreaScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack size={5}>
          <View style={{alignItems: 'center'}}>
            <RemoteImage width={'70%'} url={url} />
          </View>
          <Text type={'headline.main'}>{name}</Text>
          <Queue>
            <ProductEditCart product={routes?.params?.product} />
            <Text textAlign="right" role="success" type="headline.bold">
              {quantity != undefined ? (
                `₮${new Number((price || 4000) * quantity).toLocaleString()}`
              ) : (
                <></>
              )}
            </Text>
          </Queue>
          {descriptionProducts && (
            <Border topWidth={'light'} role={'tertiary'}>
              <Padding top={5}>
                <Stack size={4}>
                  <Text type={'subheading.bold'}>Дэлгэрэнгүй</Text>
                  {descriptionProducts.map(val => {
                    return (
                      <Queue>
                        <Padding top={3}>
                          <Dot />
                        </Padding>
                        <Padding left={3}>
                          <Queue height={'auto'}>
                            <Text>
                              <Text type={'paragraph.bold'}>
                                {`${val.title}: `}
                              </Text>
                              <Text type={'paragraph.light'} width={'100%'}>
                                {val.value}
                              </Text>
                            </Text>
                          </Queue>
                        </Padding>
                      </Queue>
                    );
                  })}
                </Stack>
              </Padding>
            </Border>
          )}
        </Stack>
      </ScrollView>
    </SafeAreaScreen>
  );
};
