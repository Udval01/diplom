import React, {useContext, useEffect, useState} from 'react';
import {NavigationRoutes} from './navigation-param';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeIconBar, ProfileIconBar, OrderIconBar} from '../assets/icons';
import {HomeStack} from './home-stack';
import {Platform, Keyboard} from 'react-native';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
// import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import {AuthContext} from '../contexts/auth';
import {ProfileBarStack} from './profile-stack';
import {orderListTopBar} from './order-list-top-bar';
// import { AuthContext, USERS_HOME } from '../authentication';
// import { useFirestoreDocument } from '../firebase';
// import { orderListTopBar } from './order-list-top-bar';

const CustomBottomTabBar = props => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let keyboardEventListeners;
    if (Platform.OS === 'android') {
      keyboardEventListeners = [
        Keyboard.addListener('keyboardDidShow', () => setVisible(false)),
        Keyboard.addListener('keyboardDidHide', () => setVisible(true)),
      ];
    }
    return () => {
      if (Platform.OS === 'android') {
        keyboardEventListeners &&
          keyboardEventListeners.forEach(eventListener =>
            eventListener.remove(),
          );
      }
    };
  }, []);

  const render = () => {
    if (Platform.OS === 'ios') {
      return <BottomTabBar {...props} />;
    }
    if (!visible) return null;
    return <BottomTabBar {...props} />;
  };

  return render();
};

export default CustomBottomTabBar;
const Tab = createBottomTabNavigator();

export const MainRoot = () => {
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const [orderId, setOrderId] = useState();
  const {navigate} = useNavigation();
  // const { data: order, loading } = useFirestoreDocument([
  //     USERS_HOME,
  //     uid,
  //     'order',
  //     orderId && orderId,
  // ]);

  // const getOrderMessage = (remoteMessage) => {
  //     if (!remoteMessage?.data?.orderId) {
  //         return;
  //     }
  //     setOrderId(remoteMessage.data.orderId);
  // };
  // const navigateToPath = () => {
  //     navigate(NavigationRoutes.OrderListStack, {
  //         screen: NavigationRoutes.DetailedOrderScreen,
  //         params: { order: order },
  //     });
  // };
  // useEffect(() => {
  //     messaging().onNotificationOpenedApp(getOrderMessage);
  //     messaging().getInitialNotification().then(getOrderMessage);
  // }, []);
  // useEffect(() => {
  //     if (order) {
  //         navigateToPath();
  //     }
  // }, [order]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#5EB14E',
        showLabel: true,
        inactiveTintColor: '#7E8085',
        keyboardHidesTabBar: true,
        style: {
          position: 'relative',
        },
        labelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomBottomTabBar {...props} />}>
      <Tab.Screen
        name={NavigationRoutes.HomeTab}
        component={HomeStack}
        options={{
          tabBarLabel: 'Нүүр',
          tabBarIcon: ({color}) => <HomeIconBar color={color} />,
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.OrderListTab}
        component={orderListTopBar}
        options={{
          tabBarLabel: 'Захиалга',
          tabBarIcon: ({color}) => <OrderIconBar color={color} />,
        }}
      />
      <Tab.Screen
        name={NavigationRoutes.ProfileScreenTab}
        component={ProfileBarStack}
        options={{
          tabBarLabel: 'Профайл',
          tabBarIcon: ({color}) => <ProfileIconBar color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
