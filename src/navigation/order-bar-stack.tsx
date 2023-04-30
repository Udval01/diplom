// @ts-nocheck
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BackArrowIcon} from '../assets/icons';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
import {Text} from '../components';
import {useNavigation} from '@react-navigation/native';
import {InteractiveIcon} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CartScreen} from '../screen/cart-screen';
import {OrderConfirmationScreen} from '../screen/order-confirmation-screen';
import {CreateNewAddress} from '../screen/create-new-address';
import {DetailedOrderScreen} from '../screen/detailed-order-screen';
import {CreateOrderScreen} from '../screen/create-order-screen';

const Stack = createStackNavigator<NavigatorParamList>();

const HandleHeaderTitle = (title: string) => (
  <Text textAlign="center" type="headline.bold">
    {title}
  </Text>
);

export const OrderBarStack = () => (
  <Stack.Navigator
    initialRouteName={NavigationRoutes.CartScreen}
    screenOptions={({route}) => ({
      headerTintColor: 'black',
      headerTitleAlign: 'center',
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerRightContainerStyle: {
        paddingRight: 10,
      },
      headerStyle: {
        shadowColor: 'transparent',
      },
    })}>
    <Stack.Screen
      name={NavigationRoutes.CartScreen}
      component={CartScreen}
      options={{
        headerShown: false,
        gestureEnabled: true,
      }}
    />
  </Stack.Navigator>
);

export const OrderStackNavigator = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerStyle: {
          shadowColor: 'transparent',
          height: insets.top + 56,
          elevation: 0,
        },
        headerLeft: () => (
          <InteractiveIcon
            style={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={navigation.goBack}
            icon={<BackArrowIcon />}
          />
        ),
      })}>
      <Stack.Screen
        name={NavigationRoutes.OrderConfirmationScreen}
        component={OrderConfirmationScreen}
        options={{headerShown: false, gestureEnabled: true}}
      />
      <Stack.Screen
        name={NavigationRoutes.LocationScreen}
        component={CreateNewAddress}
        options={{
          headerBackTitleVisible: false,
          gestureEnabled: true,
          headerTitle: () => HandleHeaderTitle('Хүргэлтийн хаяг'),
        }}
      />
      <Stack.Screen
        name={NavigationRoutes.CreateOrder}
        component={CreateOrderScreen}
        options={{
          headerBackTitleVisible: false,
          gestureEnabled: true,
          headerTitle: () => HandleHeaderTitle('Төлбөр төлөх'),
        }}
      />
      <Stack.Screen
        name={NavigationRoutes.DetailedOrderScreen}
        component={DetailedOrderScreen}
        options={{
          headerBackTitleVisible: false,
          gestureEnabled: true,
          headerTitle: () => HandleHeaderTitle('Захиалгын дэлгэрэнгүй'),
        }}
      />
    </Stack.Navigator>
  );
};
