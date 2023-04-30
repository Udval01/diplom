// @ts-nocheck
import _ from 'lodash';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Dimensions, Platform, SafeAreaView, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {CloseIcon} from '../assets/icons';
import {AuthContext, USERS_HOME} from '../contexts/auth';
import {
  Border,
  Button,
  mapRoleToBackgroundColor,
  Margin,
  Padding,
  Queue,
  RemoteImage,
  Stack,
  Text,
} from '../components';
import {useFirestoreCollection, useFirestoreDocument} from '../firebase';
import {NavigationRoutes} from '../navigation/navigation-param';
import {EmptyCartScreen} from './empty-cart-screen';
import {ItemTrash} from '../assets/icons/index';
import {ShoppingCartContext} from '../contexts/cart';
import {ProductEditCart} from '../components/products/product-edit-card';

export const ItemInCart = props => {
  const {id, quantity} = props;
  const {data} = useFirestoreCollection(['products']);
  const product = _.find(data, {id}) || {};
  const {images, name, size, price} = product;
  const [url] = images || [];
  const {removeItem} = useContext(ShoppingCartContext);
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };
  const handleDeleteItem = () => {
    removeItem(id);
  };

  return (
    <Border role="tertiary" lineWidth="light" radius="xmedium">
      <Padding size={[3, 4, 3, 4]}>
        <Queue>
          <Padding size={[0, 4, 0, 0]}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
              }}>
              <Border>
                <RemoteImage
                  width={Dimensions.get('window').width / 4.5}
                  aspectRatio={136 / 120}
                  url={url}
                />
              </Border>
            </View>
          </Padding>
          <View style={{flex: 5}}>
            <Padding size={[2, 2, 2, 2]}>
              <Stack size={3}>
                <Queue size={0}>
                  <Text numberOfLines={2} type="caption1.main">
                    {name}
                  </Text>
                  <Text
                    textAlign="right"
                    role="success"
                    type="caption1.main">{`₮${new Number(
                    (price || 4000) * quantity,
                  ).toLocaleString()}`}</Text>
                </Queue>
                <Queue alignItems="flex-end" justifyContent="space-between">
                  <ProductEditCart product={product} />
                  <Margin top={5}>
                    <TouchableOpacity
                      onPress={() => {
                        handleDeleteItem();
                      }}>
                      <Border backgroundRole="gray" radius="xlarge">
                        <Padding size={[4, 4, 4, 4]}>
                          <ItemTrash />
                        </Padding>
                      </Border>
                    </TouchableOpacity>
                  </Margin>
                </Queue>
              </Stack>
            </Padding>
          </View>
        </Queue>
      </Padding>
    </Border>
  );
};
export const CartSummary = () => {
  const navigation = useNavigation();
  const {totalPrice, totalItems} = useContext(ShoppingCartContext);
  const {user} = useContext(AuthContext);
  const {phoneNumber} = user || {};
  const {price: deliveryPrice} = {price: 3000};
  const totalCost = totalPrice * 1 + deliveryPrice * 1;

  const onCheckout = async () => {
    if (!phoneNumber) {
      navigation.navigate(NavigationRoutes.AuthenticationHome, {
        screen: NavigationRoutes.PhoneNumberRegistrationScreen,
        params: {
          navigateTo: NavigationRoutes.CartScreen,
        },
      });
      return;
    } else {
      navigation.navigate(NavigationRoutes.OrderStack, {
        screen: NavigationRoutes.LocationScreen,
      });
    }
  };
  return (
    <Border role="tertiary" topWidth="light">
      <Margin
        size={Platform.OS === 'ios' ? [5, 5, 5, 5] : [4, 4, 0, 4]}
        role="light">
        <Stack size={4}>
          <Queue justifyContent="space-between">
            <Text type="subheading.light">{`Барааны үнэ`}</Text>
            <Text type="subheading.light" textAlign="right">{`  ₮${new Number(
              totalPrice,
            ).toLocaleString()}`}</Text>
          </Queue>
          <Queue justifyContent="space-between">
            <Text type="subheading.light">{`Хүргэлтийн үнэ`}</Text>
            <Text type="subheading.light" textAlign="right">{`  ₮${new Number(
              deliveryPrice,
            ).toLocaleString()}`}</Text>
          </Queue>
          <Queue justifyContent="space-between">
            <Text type="headline.bold" role="success">{`Бүгд`}</Text>
            <Text
              type="headline.bold"
              role="success"
              textAlign="right">{`₮${new Number(
              totalCost || 3000,
            ).toLocaleString()}`}</Text>
          </Queue>
          {totalItems > 0 && (
            <Button buttonType="primary" onPress={onCheckout}>
              Захиалах
            </Button>
          )}
        </Stack>
      </Margin>
    </Border>
  );
};
export const CartScreen = ({navigation}) => {
  const {items, totalItems} = useContext(ShoppingCartContext);
  const analyticNavigation = () => {
    navigation.navigate(NavigationRoutes.Home);
  };
  if (!totalItems) {
    return <EmptyCartScreen />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: mapRoleToBackgroundColor('light'),
      }}>
      <Stack size={5}>
        <Margin size={[4, 4, 0, 4]}>
          <Queue alignItems="center" justifyContent="space-between">
            <TouchableOpacity onPress={analyticNavigation}>
              <CloseIcon role="black" width={24} height={24} />
            </TouchableOpacity>
            <Text width={'auto'} type="subheading.main">{`Миний сагс`}</Text>
            <Queue size={1}>
              <Text width={'auto'} type="paragraph.medium">
                {`Нийт: `}
              </Text>
              <Text
                width={'auto'}
                type="paragraph.main">{`${totalItems}`}</Text>
            </Queue>
          </Queue>
        </Margin>
        <Margin size={[0, 5, 0, 5]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              height: Dimensions.get('window').height / 1.65,
            }}>
            <Stack size={4}>
              {_.flow(items =>
                _.map(items, (item, key) => {
                  return <ItemInCart {...item} id={key} key={key} />;
                }),
              )(items)}
            </Stack>
          </ScrollView>
        </Margin>
      </Stack>
      <CartSummary />
    </SafeAreaView>
  );
};
