// @ts-nocheck
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import _ from 'lodash';
import React, {useState} from 'react';
import {Dimensions, Pressable, TouchableWithoutFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components';
import {SafeAreaScreen} from '.';
import {BackArrowIcon} from '../assets/icons';
import {
  ReceivedOrderIllustration,
  DeliveredOrderIllustration,
  DeliveringOrderIllustration,
  PreparingOrderIllustration,
} from '../assets/illustrations/index';
import {
  Border,
  Center,
  Margin,
  Padding,
  Queue,
  Stack,
  Text,
  Box,
  Stepper,
  LoadingIcon,
} from '../components';
import {useFirestoreCollection} from '../firebase';
import moment from 'moment';
const window = Dimensions.get('window');
const StretchView = styled.View`
  flex: ${({flex}: any) => flex || 1};
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({debugColor}: any) => debugColor || 'transparent'};
`;

const OrderDeliveryStage = ({status}) => {
  const orderSteps = [
    {
      active: false,
      completed: false,
    },
    {
      active: false,
      completed: false,
    },
    {
      active: false,
      completed: false,
    },
  ];

  console.log('adadadaddadada', status);

  const getStageNumber = (status: string) => {
    let step;
    switch (status) {
      case 'Захиалга амжилттай':
        step = 0;
        break;
      case 'Хүргэлтэнд гарсан':
        step = 1;
        break;
      case 'Хүргэгдсэн':
        step = 2;
        break;
      default:
        step = 0;
    }
    for (let i = 0; i < step; i++) {
      orderSteps[i].active = false;
      orderSteps[i].completed = true;
    }
    if (step != 3) orderSteps[step].active = true;
    return step;
  };

  const renderIllustration = (status: number) => {
    switch (status) {
      case 0:
        return <ReceivedOrderIllustration width={218} height={166} />;
      case 1:
        return <PreparingOrderIllustration width={218} height={166} />;
      case 2:
        return <DeliveringOrderIllustration width={218} height={166} />;
      case 3:
        return <DeliveredOrderIllustration width={218} height={166} />;
    }
  };

  return (
    <Stack size={5}>
      <Padding size={[0, 5, 0, 5]}>
        <Stepper steps={orderSteps} />
      </Padding>
      <Text>{status}</Text>
      <Center>{renderIllustration(getStageNumber(status))}</Center>
    </Stack>
  );
};

const OrderImageMapper = ({items, products, seeMore}) => {
  return (
    <Pressable onPress={seeMore}>
      <Stack
        size={_.size(items) > 3 ? 0 : 3}
        justifyContent={_.size(items) > 3 ? 'space-between' : 'flex-start'}
        width={'100%'}>
        {_.flow(
          items =>
            _.map(items, (item, index) => {
              const found = _.find(products, {
                id: index,
              });
              const totalPrice: any = found?.price * item?.quantity;
              return (
                <Margin bottom={3}>
                  <Border radius={'medium'} lineWidth={'light'} role={'gray'}>
                    <Padding size={[3, 3, 3, 3]}>
                      <Queue
                        alignItems={'center'}
                        justifyContent={'space-between'}>
                        <Queue size={4} alignItems={'center'}>
                          <Text width={'auto'} type={'paragraph.main'}>
                            {item?.quantity}x
                          </Text>
                          <Box height={65} width={65} url={found?.images[0]} />
                          <Stack>
                            <Text type={'caption1.main'} role={'success'}>
                              ₮{found?.price} / {found?.size}
                            </Text>
                            <Text type={'paragraph.main'}>{found?.name}</Text>
                          </Stack>
                        </Queue>
                        <Text role={'gray40'} width={'auto'}>
                          {totalPrice}₮
                        </Text>
                      </Queue>
                    </Padding>
                  </Border>
                </Margin>
              );
            }),
          items => _.slice(items, 0, 3),
        )(items)}
        {_.size(items) > 3 && (
          <TouchableWithoutFeedback onPress={() => seeMore()}>
            <Border
              backgroundRole={'gray'}
              radius={'medium'}
              lineWidth={'light'}>
              <Padding size={[4, 0, 4, 0]}>
                <Center flex={1}>
                  <Queue size={3} alignItems={'center'}>
                    <Text
                      width={'auto'}
                      type="subheading.main"
                      textAlign="center">{`Бусад (${_.size(items) - 3})`}</Text>
                    <BackArrowIcon
                      width={15}
                      height={15}
                      style={{
                        transform: [
                          {
                            rotate: '270deg',
                          },
                        ],
                      }}
                    />
                  </Queue>
                </Center>
              </Padding>
            </Border>
          </TouchableWithoutFeedback>
        )}
      </Stack>
    </Pressable>
  );
};

const DetailedOrders = ({data, seeMore}) => {
  const router = useRoute<Route<string, any>>();
  const {order} = router?.params || {};
  const {data: products} = useFirestoreCollection(['products']);
  let {items} = order || {};

  return (
    <Stack>
      <Border lineWidth="light" role="light" radius="xmedium">
        <Padding size={[3, 3, 3, 3]}>
          <Stack size={2}>
            <OrderImageMapper
              items={items}
              products={products}
              seeMore={seeMore}
            />
          </Stack>
        </Padding>
      </Border>
    </Stack>
  );
};

const isAfternoon = time => {
  if (time < 12) {
    return 'AM';
  } else {
    return 'PM';
  }
};

const ItemsSummary = props => {
  const {item, product} = props;
  const {price, quantity} = item || {};
  const {size, name} = product || {};
  return (
    <Margin bottom={3}>
      <Border radius={'medium'} lineWidth={'light'} role={'gray'}>
        <Padding size={[3, 3, 3, 3]}>
          <Queue alignItems={'center'} justifyContent={'space-between'}>
            <Queue size={4} alignItems={'center'}>
              <Text width={'auto'} type={'paragraph.main'}>
                {quantity}x
              </Text>
              <Box height={65} width={65} url={product?.images[0]} />
              <Stack>
                <Text type={'caption1.main'} role={'success'}>
                  ₮{price} / {size}
                </Text>
                <Text type={'paragraph.main'}>{name}</Text>
              </Stack>
            </Queue>
            <Text role={'gray40'} width={'auto'}>{`${price * quantity}₮`}</Text>
          </Queue>
        </Padding>
      </Border>
    </Margin>
  );
};

export const DetailedOrderScreen = () => {
  const navigation = useNavigation();
  const router = useRoute<Route<string, any>>();
  const {order, orderId} = router?.params || {};
  const {items, address} = order || {};
  let {additionalInformation, houseNumber} = address || {};
  const {data: products, loading: ProductsLoading} = useFirestoreCollection([
    'products',
  ]);
  const [seeMore, setSeeMore] = useState(false);
  const switchComponent = () => {
    return setSeeMore(!seeMore);
  };
  const totalPrice = _.chain(items)
    .filter(({quantity}) => quantity > 0)
    .sumBy(({quantity, price}) => {
      return quantity * price;
    })
    .value();
  const {height} = Dimensions.get('screen');
  if (ProductsLoading) {
    return <LoadingIcon />;
  }

  return (
    <SafeAreaScreen>
      <ScrollView
        style={{height: height - 150}}
        showsVerticalScrollIndicator={false}>
        <Padding top={5} right={3}>
          <Stack size={0}>
            <OrderDeliveryStage status={order.status} />
            <Stack size={4}>
              <Text type={'paragraph.main'}>Хүргэлтийн хаяг</Text>
              <Border radius={'xmedium'} role={'tertiary'} lineWidth={'light'}>
                <Stack size={3}>
                  <Padding size={[3, 3, 3, 3]}>
                    <Text textAlign={'left'} type="paragraph.light">
                      {(additionalInformation &&
                        houseNumber &&
                        additionalInformation + ' ' + houseNumber) ||
                        'Дэлгэрэнгүй хаяг алгa байна.'}
                    </Text>
                  </Padding>
                </Stack>
              </Border>

              <Border bottomWidth="light" role="tertiary" />
              <Border topWidth="light" bottomWidth="light" role="light">
                {items && (
                  <Padding top={3} bottom={3}>
                    <Text textAlign={'left'}>{`Нийт: ${
                      Object.keys(items).length
                    } бараа`}</Text>
                  </Padding>
                )}
                {!seeMore ? (
                  <Padding bottom={3}>
                    <Border>
                      <DetailedOrders
                        data={orderId}
                        seeMore={() => switchComponent()}
                      />
                    </Border>
                  </Padding>
                ) : (
                  <>
                    {_.flow(items =>
                      _.map(items, (item, index) => {
                        return (
                          <ItemsSummary
                            key={index}
                            item={item}
                            product={_.find(products, {
                              id: index,
                            })}
                          />
                        );
                      }),
                    )(items)}
                    <TouchableWithoutFeedback onPress={() => switchComponent()}>
                      <Border
                        radius={'medium'}
                        lineWidth={'light'}
                        backgroundRole={'gray'}>
                        <Padding size={[4, 9, 4, 9]}>
                          <Queue width={'100%'} size={3} alignItems={'center'}>
                            <Text
                              width={'auto'}
                              type="subheading.main"
                              textAlign="center">{`Хураах`}</Text>
                            <BackArrowIcon
                              width={15}
                              height={15}
                              style={{
                                transform: [
                                  {
                                    rotate: '450deg',
                                  },
                                ],
                              }}
                            />
                          </Queue>
                        </Padding>
                      </Border>
                    </TouchableWithoutFeedback>
                  </>
                )}
              </Border>

              <Border bottomWidth="light" role="tertiary" />
            </Stack>
            <Padding size={[0, 5, 0, 5]}>
              <Queue
                alignItems={'center'}
                width={'100%'}
                justifyContent={'space-between'}>
                <Text type={'subheading.main'} width={'auto'}>
                  Нийт үнэ
                </Text>
                <Text type={'subheading.bold'} width={'auto'} role={'success'}>
                  {`₮${totalPrice}`}
                </Text>
              </Queue>
            </Padding>
          </Stack>
        </Padding>
      </ScrollView>
    </SafeAreaScreen>
  );
};
