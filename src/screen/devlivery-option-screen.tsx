import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {SafeAreaScreen} from '.';
import {AuthContext, USERS_HOME} from '../contexts/auth';
import {AsyncButton, Overlay, Stack, Text} from '../components';
import {useFirestoreDocument} from '../firebase';
import {NavigationRoutes} from '../navigation/navigation-param';
import {DeliveryOptionContext} from '../contexts/delivery';
import {DeliveryTimeSlotOptions, DeliveryType} from './deliverty-type';

export const DeliveryOptionsScreen = props => {
  const {navigate} = useNavigation();
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const window = Dimensions.get('window');
  const {selectedTimeSlot, selectedAddress, setSelectedAddress} = useContext(
    DeliveryOptionContext,
  );
  const {data: addressData} = useFirestoreDocument([
    USERS_HOME,
    uid,
    'location',
    selectedAddress,
  ]);
  const goToSelectPaymentOption = () => {
    setSelectedAddress(addressData);
    navigate(NavigationRoutes.OrderStack, {
      screen: NavigationRoutes.PaymentCardSelectionScreen,
    });
  };
  return (
    <SafeAreaScreen>
      <Stack size={5}>
        <Text type="subheading.main" color="gray.50">
          Та дараах хүргэлтийн төрлүүдээс сонголтоо хийнэ үү.
        </Text>
        <DeliveryType />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: window.height / 3}}>
          <DeliveryTimeSlotOptions />
        </ScrollView>
      </Stack>
      <Overlay bottom={10} width="100%" role="transparent">
        <AsyncButton
          disabled={!selectedTimeSlot}
          buttonType="primary"
          onPress={goToSelectPaymentOption}>
          Болсон
        </AsyncButton>
      </Overlay>
    </SafeAreaScreen>
  );
};
