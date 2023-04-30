// @ts-nocheck
import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../contexts/auth';
import {SafeAreaScreen} from '../screen';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
import {Padding, Text} from '../components';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ForceLoginScreen} from '../screen/force-login';
import {
  preOrderListScreen,
  waitingOrderListScreen,
} from '../screen/order-list-screen';

const TopBar = createMaterialTopTabNavigator<NavigatorParamList>();
const NavStack = createStackNavigator();

const HandleHeaderTitle = (title: string) => (
  <Text textAlign="center" type="headline.bold">
    {title}
  </Text>
);

export const orderListTopBar = () => {
  const {user} = useContext(AuthContext);
  if (!user) {
    return <ForceLoginScreen />;
  }
  return (
    <SafeAreaScreen>
      <Padding size={[2, 0, 2, 0]}>
        {HandleHeaderTitle('Таны захиалга')}
      </Padding>
      <TopBar.Navigator
        tabBarOptions={{
          activeTintColor: '#5EB14E',
          showLabel: true,
          inactiveTintColor: '#7E8085',
          style: {
            position: 'relative',
          },
          indicatorStyle: {
            backgroundColor: '#5EB14E',
            height: 2,
            borderRadius: 10,
          },
          indicatorContainerStyle: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          labelStyle: {
            textTransform: 'capitalize',
            fontSize: 13,
            fontFamily: 'Montserrat',
            fontWeight: '600',
          },
        }}>
        <TopBar.Screen
          name={NavigationRoutes.waitingOrderList}
          component={topBarSecond}
          options={{
            tabBarLabel: 'Хүлээгдэж буй',
          }}
        />
        <TopBar.Screen
          name={NavigationRoutes.OrderList}
          component={topBarFirst}
          options={{
            tabBarLabel: 'Өмнөх захиалга',
          }}
        />
      </TopBar.Navigator>
    </SafeAreaScreen>
  );
};

export const topBarFirst = () => (
  <NavStack.Navigator headerMode="none">
    <NavStack.Screen
      name={NavigationRoutes.OrderList}
      component={preOrderListScreen}
      options={{header: () => null}}
    />
  </NavStack.Navigator>
);

export const topBarSecond = () => (
  <NavStack.Navigator headerMode="screen">
    <NavStack.Screen
      name={NavigationRoutes.waitingOrderList}
      component={waitingOrderListScreen}
      options={{header: () => null}}
    />
  </NavStack.Navigator>
);
