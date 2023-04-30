// @ts-nocheck
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import _ from 'lodash';
import React, {useContext} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaScreen} from '.';
import {ChevronRightIcon} from '../assets/icons';
import OrderStatusIllustration from '../assets/illustrations/OrderStatusIllustration';
import {AuthContext, USERS_HOME} from '../contexts/auth';
import {ShoppingCartContext} from '../contexts/cart';
import {
  AnimatedFadeInView,
  Border,
  Box,
  Button,
  Center,
  Margin,
  Padding,
  Queue,
  Spinner,
  Stack,
  Text,
} from '../components';
import {useFirestoreCollection, useFirestoreDocument} from '../firebase';
import {NavigationRoutes} from '../navigation/navigation-param';

const OrderImageMapper = ({items, products}) => {
  return (
    <Queue
      size={_.size(items) > 4 ? 0 : 3}
      justifyContent={_.size(items) > 4 ? 'space-between' : 'flex-start'}>
      {_.flow(
        items =>
          _.map(items, (item, index) => {
            const found = _.find(products, {
              id: index,
            });
            return (
              <Border
                lineWidth="light"
                role="tertiary"
                radius="xmedium"
                key={index}>
                <Box height={65} width={65} url={found?.images[0]} />
              </Border>
            );
          }),
        items => _.slice(items, 0, 4),
      )(items)}
      {_.size(items) > 4 && (
        <Border lineWidth="light" role="tertiary" radius="medium">
          <Box height={65} width={65}>
            <Center flex={1}>
              <Text type="subheading2.light" textAlign="center">{`${
                _.size(items) - 4
              }`}</Text>
            </Center>
          </Box>
        </Border>
      )}
    </Queue>
  );
};
const OrderDetailSection = ({data}) => {
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const {navigate} = useNavigation();
  const {data: order, loading} = useFirestoreDocument([
    USERS_HOME,
    uid,
    'order',
    data,
  ]);
  const {data: products} = useFirestoreCollection(['products']);
  let {items} = order || {};

  const totalPrice = _.chain(items)
    .filter(({quantity}) => quantity > 0)
    .sumBy(({quantity, price}) => {
      return quantity * price;
    })
    .value();
  if (loading)
    return (
      <AnimatedFadeInView width="100%" visible={loading}>
        <Center>
          <Spinner role="success" />
        </Center>
      </AnimatedFadeInView>
    );

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(NavigationRoutes.DetailedOrderScreen, {
          order: order,
        });
      }}>
      <Border lineWidth="light" role="tertiary" radius="xmedium">
        <Padding size={[3, 3, 3, 3]}>
          <Stack size={4}>
            <OrderImageMapper items={items} products={products} />

            <Queue size={0}>
              <Text type="subheading2.light" role="success">
                Нийт үнэ
              </Text>
              <Text type="subheading2.light" textAlign="right" role="success">
                {`₮${new Number(Number(totalPrice) || 4000).toLocaleString()}`}
              </Text>
            </Queue>
            <Text type="subheading2.light" width={340} role="info">
              Таны захиалга баталгаажлаа, таны бүртгүүлсэн дугаар луу бид
              удахгүй холбогдох болно.
            </Text>
            <Margin size={[4, 0, 0, 0]}>
              <Queue alignItems="center">
                <Text textAlign="right" role="info">
                  Дэлгэрэнгүй
                </Text>
                <ChevronRightIcon />
              </Queue>
            </Margin>
          </Stack>
        </Padding>
      </Border>
    </TouchableOpacity>
  );
};
export const OrderConfirmationScreen = () => {
  const navigation = useNavigation();
  const {emptyCart} = useContext(ShoppingCartContext);
  const router = useRoute<Route<string, any>>();
  const {invoice} = router?.params || {};

  const handleBackToHome = async () => {
    await emptyCart();
    navigation.reset({
      index: 0,
      routes: [{name: NavigationRoutes['CartScreen']}],
    });
    navigation.navigate(NavigationRoutes.Home);
  };

  return (
    <SafeAreaScreen>
      <Stack justifyContent="space-between" height="100%">
        <View />
        <Stack size={5}>
          <Center>
            <OrderStatusIllustration />
          </Center>
          <Stack size={4}>
            <Text textAlign="center" type="subheading2.light">
              Амжилттай!
            </Text>
            <Text textAlign="center" type="subheading2.light">
              Таны захиалгыг бид амжилттай хүлээн авлаа. Манай аппликешнийг
              сонгон үйлчлүүлсэн танд баярлалаа.
            </Text>
          </Stack>
          <Border role="tertiary" radius="large" backgroundRole="secondary">
            <Padding size={[4, 4, 4, 4]}>
              <Queue justifyContent="space-between">
                <Text role="info">Захиалгын дугаар</Text>
                <Text
                  role="success"
                  numberOfLines={1}
                  width={400}
                  textAlign="left">{`#${invoice.slice(-8)}`}</Text>
              </Queue>
            </Padding>
          </Border>
          <OrderDetailSection data={invoice} />
        </Stack>
        <Margin size={[0, 0, 3, 0]}>
          <Button buttonType="primary" onPress={handleBackToHome}>
            Нүүр хуудас руу буцах
          </Button>
        </Margin>
      </Stack>
    </SafeAreaScreen>
  );
};
