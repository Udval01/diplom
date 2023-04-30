import {useNavigation, CommonActions} from '@react-navigation/native';
import _ from 'lodash';
import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BasicScreen, SafeAreaScreen} from '.';
// import {EmptyOrderIllustration} from '../../assets/illustrations';
import {AuthContext, USERS_HOME} from '../contexts/auth';
import {
  AnimatedFadeInView,
  Border,
  Box,
  Center,
  Margin,
  Padding,
  Queue,
  Spinner,
  Stack,
  Text,
  Spacer,
  LoadingGereseeLogo,
} from '../components';
import {useFirestoreCollection} from '../firebase';
import {NavigationRoutes} from '../navigation/navigation-param';
import moment from 'moment';
import {Dimensions} from 'react-native';
import {OrderBag, OrderCalendar, TimeIcon} from '../assets/icons/index';

const OrderImageMapper = ({items, products}) => {
  const windowWidth = Dimensions.get('window').width;
  let showItemNumber = windowWidth < 380 ? 4 : 6;
  return (
    <Queue
      size={_.size(items) > showItemNumber ? 0 : 4}
      justifyContent={
        _.size(items) > showItemNumber ? 'space-between' : 'flex-start'
      }
      alignItems="center">
      {_.flow(
        items =>
          _.map(items, (item, index) => {
            const found = _.find(products, {
              id: index,
            });
            return (
              <Border key={index}>
                <Box height={40} width={40} url={found?.images[0]} />
              </Border>
            );
          }),
        items => _.slice(items, 0, showItemNumber),
      )(items)}
      {_.size(items) > showItemNumber && (
        <Margin size={[1, 0, 1, 0]}>
          <Border role="tertiary" backgroundRole="secondary" radius="xmedium">
            <Padding size={[2, 4, 2, 4]}>
              <Center flex={1}>
                <Text
                  type="subheading2.light"
                  role="info"
                  textAlign="center">{`+${
                  _.size(items) - showItemNumber
                }`}</Text>
              </Center>
            </Padding>
          </Border>
        </Margin>
      )}
    </Queue>
  );
};

export const OrderPreview = ({order}) => {
  moment.locale('mn');
  const {id, createdAt, items, status, timeSlot} = order;
  const {price: deliveryPrice} = timeSlot || {};
  const navigation = useNavigation();
  const {data: products} = useFirestoreCollection(['products']);
  const orderCreatedDate = moment.unix(createdAt?.seconds);
  const currentDate = moment();
  const totalPrice = _.chain(items)
    .filter(({quantity}) => quantity > 0)
    .sumBy(({quantity, price}) => {
      return quantity * price;
    })
    .value();

  const getDate = (createdDate, currentDate) => {
    switch (currentDate.diff(createdDate, 'days')) {
      case 0:
        return 'Өнөөдөр';
      case 1:
        return 'Өчигдөр';
      default:
        return createdDate.format('MM/DD/YYYY').toString();
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(NavigationRoutes.OrderStack, {
          screen: NavigationRoutes.DetailedOrderScreen,
          params: {order: order},
        });
      }}>
      <Spacer size={2} />
      <Border
        lineWidth="light"
        role="tertiary"
        radius="xmedium"
        backgroundRole="light">
        <Padding role="gray" size={[4, 4, 4, 4]}>
          <Queue justifyContent="space-between">
            <Queue alignItems="center" size={3}>
              <OrderCalendar />
              <Text width={'auto'} type="paragraph.medium">
                {getDate(orderCreatedDate, currentDate)}
              </Text>
            </Queue>
            <Queue alignItems="center" size={3}>
              <TimeIcon />
              <Text width={'auto'} type="paragraph.medium">
                {moment.unix(createdAt).format('hh:mm').toString()}
              </Text>
            </Queue>
          </Queue>
        </Padding>
        <Padding size={[4, 4, 4, 4]}>
          <Stack size={4}>
            <OrderImageMapper items={items} products={products} />
            <Queue justifyContent="space-between">
              <Queue>
                <Text width={'auto'} type="paragraph.light">
                  {`Захиалгын дугаар `}
                </Text>
                <Text
                  width={'auto'}
                  type="paragraph.medium"
                  numberOfLines={1}>{`#${id.slice(id.length - 5)}`}</Text>
              </Queue>
              <Text width={'auto'} role="success">{`₮${new Number(
                Number(totalPrice) + Number(deliveryPrice || 6000),
              ).toLocaleString()}`}</Text>
            </Queue>
          </Stack>
        </Padding>
      </Border>
    </TouchableOpacity>
  );
};
export const preOrderListScreen = () => {
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const {data, loading} = useFirestoreCollection([USERS_HOME, uid, 'order']);

  if (
    !_.filter(data, item => item.status === 'Хүргэгдсэн').length &&
    !loading
  ) {
    return (
      <SafeAreaScreen>
        <Stack size={3} height="100%" justifyContent="center">
          <Stack size={3}>
            <Center>
              <OrderBag />
            </Center>
            <Text textAlign="center" type="subheading.main">
              Захиалга алга
            </Text>
          </Stack>
          <Text textAlign="center" type="paragraph.light">
            Өмнө захиалсан бараа байхгүй байна.
          </Text>
        </Stack>
      </SafeAreaScreen>
    );
  }
  return (
    <BasicScreen size={[6, 0, 0, 0]}>
      <Stack size={2}>
        {loading && (
          <AnimatedFadeInView width="100%" visible={loading}>
            <Center>
              <Spinner role="success" />
            </Center>
          </AnimatedFadeInView>
        )}
        {_.flow(
          data => _.sortBy(data, ['createdAt']),
          data => _.reverse(data),
          data => _.filter(data, item => item.status === 'Хүргэгдсэн'),
          data =>
            _.map(data, (item, index) => {
              return <OrderPreview key={index} order={item} />;
            }),
        )(data)}
      </Stack>
    </BasicScreen>
  );
};
export const waitingOrderListScreen = () => {
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const {data, loading} = useFirestoreCollection([USERS_HOME, uid, 'order']);
  const {signOut} = useContext(AuthContext);

  if (!data) {
    return <LoadingGereseeLogo />;
  }

  if (!_.filter(data, item => item.status != 'Хүргэгдсэн').length) {
    return (
      <SafeAreaScreen>
        <Stack size={3} height="100%" justifyContent="center">
          <Stack size={3}>
            <Center>
              <OrderBag />
            </Center>
            <Text textAlign="center" type="subheading.main">
              Захиалга алга
            </Text>
          </Stack>
          <Text textAlign="center" type="paragraph.light">
            Өмнө захиалсан бараа байхгүй байна.
          </Text>
        </Stack>
      </SafeAreaScreen>
    );
  }

  return (
    <BasicScreen size={[6, 0, 0, 0]}>
      <Stack size={5}>
        {loading && (
          <AnimatedFadeInView width="100%" visible={loading}>
            <Center>
              <Spinner role="success" />
            </Center>
          </AnimatedFadeInView>
        )}
        {_.flow(
          data => _.sortBy(data, ['createdAt']),
          data =>
            _.filter(
              data,
              item => item.status != 'Хүргэгдсэн' && item.isPaid === true,
            ),
          data => _.reverse(data),
          data =>
            _.map(data, (item, index) => {
              return <OrderPreview key={index} order={item} />;
            }),
        )(data)}
      </Stack>
    </BasicScreen>
  );
};
