// @ts-nocheck
import _ from 'lodash';
import React, {useContext, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {CorrectIcon} from '../assets/icons';
import {AuthContext, USERS_HOME} from '../contexts/auth';
import {
  Border,
  Button,
  Margin,
  Queue,
  RemoteImage,
  Stack,
  Text,
  PopupModal,
  Overlay,
  Padding,
} from '../components';
import {NavigationRoutes} from '../navigation/navigation-param';
import {ShoppingCartContext} from '../contexts/cart';
import {SafeAreaScreen} from '.';
import {useFirestoreCollection} from '../firebase';
import {RadioButtonSelect} from '../components/radio-button';
import {useRoute} from '@react-navigation/native';

export const CreateOrderScreen = ({navigation}) => {
  const {items, totalPrice} = useContext(ShoppingCartContext);
  const router = useRoute<Route<string, any>>();
  const {address} = router?.params || {};

  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const [selected, setSelected] = useState(null);
  const {createRecord: createOrder, updateRecord: updateOrder} =
    useFirestoreCollection([USERS_HOME, uid, 'order']);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [dialogData, setDialogData] = useState<any>({
    title: null,
    icon: null,
    description: null,
    marginSize: null,
    confirmText: null,
    confirmFunction: null,
    declineText: null,
    declineFunction: null,
  });

  const banks = [
    {
      name: 'Хаан банк',
      image: 'https://zero.mn/images/banks/Khan%20bank.png',
    },
    {
      name: 'Худалдаа хөгжлийн банк',
      image:
        'https://zero.mn/images/banks/Trade%20and%20Development%20bank.png',
    },
    {
      name: 'Төрийн банк',
      image: 'https://zero.mn/images/banks/State%20bank.png',
    },
    {
      name: 'АРД апп',
      image: 'https://zero.mn/images/banks/Ard%20App.png',
    },
    {
      name: 'Богд банк',
      image: 'https://zero.mn/images/banks/Bogd%20bank.png',
    },
    {
      name: 'Үндэсний хөрөнгө оруулалтын банк',
      image: 'https://zero.mn/images/banks/National%20investment%20bank.png',
    },
  ];

  const handlePaymentOption = async () => {
    const order = {
      items,
      address: address,
      status: 'Захиалга амжилттай',
      isPaid: true,
    };

    const orderID = await createOrder(order);

    setDialogData({
      description: 'Таны захиалга амжилттай илгээгдлээ',
      confirmText: 'Үргэлжлүүлэх',
      confirmFunction: () =>
        navigation.navigate(NavigationRoutes.OrderConfirmationScreen, {
          invoice: orderID,
          order: order,
        }),
      icon: <CorrectIcon width={30} height={30} />,
    });

    setShowSuccessModal(true);
  };

  return (
    <SafeAreaScreen>
      <Stack size={5}>
        <Margin size={[0, 5, 0, 5]}>
          <Queue justifyContent="space-between">
            <Text type="headline.bold" role="success">{`Бүгд`}</Text>
            <Text
              type="headline.bold"
              role="success"
              textAlign="right">{`₮${new Number(
              totalPrice + 3000,
            ).toLocaleString()}`}</Text>
          </Queue>
        </Margin>

        <Margin size={[0, 5, 0, 5]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              height: Dimensions.get('window').height / 1.42,
            }}>
            <Stack size={2}>
              {banks.map((bank, index) => {
                return (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setSelected(index);
                    }}>
                    <Margin size={[1, 1, 1, 1]}>
                      <Queue
                        key={index}
                        justifyContent="space-between"
                        alignItems="center">
                        <RadioButtonSelect isSelected={index === selected} />
                        <Border radius="large">
                          <RemoteImage
                            width={Dimensions.get('window').width / 8}
                            aspectRatio={1}
                            url={bank.image}
                          />
                        </Border>
                        <Text width="70%">{bank.name}</Text>
                      </Queue>
                    </Margin>

                    {index !== banks.length - 1 && (
                      <Margin size={[3, 0, 3, 0]}>
                        <Border topWidth="light" role="tertiary" />
                      </Margin>
                    )}
                  </TouchableWithoutFeedback>
                );
              })}
            </Stack>
          </ScrollView>
        </Margin>
      </Stack>
      <Overlay bottom={15} width={'100%'}>
        <Padding left={3} right={3}>
          <Button
            buttonType="primary"
            disabled={selected === null}
            onPress={handlePaymentOption}>
            Төлбөр шалгах
          </Button>
        </Padding>
      </Overlay>

      <PopupModal
        IsVisible={showSuccessModal}
        setIsVisible={setShowSuccessModal}
        icon={dialogData.icon}
        title={dialogData.title}
        description={dialogData.description}
        confirmText={dialogData.confirmText}
        confirmFunction={dialogData.confirmFunction}
        marginSize={dialogData.marginSize}
        confirmTextColor="light"
        confirmButtonRole="success"
        buttonRow={false}
      />
    </SafeAreaScreen>
  );
};
