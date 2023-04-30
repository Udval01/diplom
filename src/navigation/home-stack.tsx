// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackArrowIcon} from '../assets/icons';
import {CartWithCounter, Center, InteractiveIcon, Text} from '../components';
import {HomeScreen} from '../screen/home/home-screen';
import {TypographyTypes} from '../theme';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
import {CategoryDetailsScreen} from '../screen/category-detail-screen';
import {ProductDetailsScreen} from '../screen/product-detail-screen';
import {OrderConfirmationScreen} from '../screen/order-confirmation-screen';

const Stack = createStackNavigator<NavigatorParamList>();

const HandleHeaderTitle = (title: string, type?: TypographyTypes) => (
  <Text textAlign="center" type={type || 'headline.bold'}>
    {title}
  </Text>
);

export const HomeStack = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.Home}
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
            onPress={() => navigation.navigate(NavigationRoutes.Home)}
            icon={<BackArrowIcon />}
          />
        ),
      })}>
      <Stack.Screen
        name={NavigationRoutes.Home}
        component={HomeScreen}
        options={() => ({
          headerBackTitleVisible: true,
          headerBackImage: () => null,
          headerLeft: () => null,
          headerTitle: () => (
            <Text textAlign="center" type="headline.bold">
              Udval Shop
            </Text>
          ),
          headerRight: () => (
            <InteractiveIcon
              onPress={() => {
                navigation.navigate(NavigationRoutes.OrderBarStack);
              }}
              icon={
                <Center>
                  <CartWithCounter />
                </Center>
              }
            />
          ),
          gestureEnabled: true,
        })}
      />

      <Stack.Screen
        name={NavigationRoutes.CategoryDetailsScreen}
        component={CategoryDetailsScreen}
        options={({route}) => ({
          headerBackTitleVisible: false,
          gestureEnabled: true,
          headerTitle: () =>
            HandleHeaderTitle(route.params?.category?.name, 'subheading.bold'),
          headerRight: () => (
            <InteractiveIcon
              onPress={() => {
                navigation.navigate(NavigationRoutes.OrderBarStack);
              }}
              icon={
                <Center>
                  <CartWithCounter />
                </Center>
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name={NavigationRoutes.ProductDetailsScreen}
        component={ProductDetailsScreen}
        options={({route}) => ({
          headerBackTitleVisible: false,
          gestureEnabled: true,
          headerTitle: () =>
            HandleHeaderTitle(route.params?.product?.name, 'subheading.bold'),
          headerRight: () => (
            <InteractiveIcon
              onPress={() => {
                navigation.navigate(NavigationRoutes.CartScreenTab);
              }}
              icon={<CartWithCounter />}
            />
          ),
        })}
      />
      <Stack.Screen
        name={NavigationRoutes.OrderConfirmationScreen}
        component={OrderConfirmationScreen}
        options={{headerShown: false, gestureEnabled: true}}
      />
    </Stack.Navigator>
  );
};
