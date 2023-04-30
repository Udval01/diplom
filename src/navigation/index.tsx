import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {Easing} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
// import { OnBoarding } from "../screen/onboarding"
import {OnBoarding} from '../screen/test';
import {MainRoot} from './tab-bar';
import {OrderBarStack, OrderStackNavigator} from './order-bar-stack';
import {AuthStackNavigator} from './auth-stack';

const RootStack = createStackNavigator<NavigatorParamList>();

const modalDialogOverlayTransitionConfig: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 350,
    easing: Easing.inOut(Easing.poly(2)),
  },
};

export const RootNavigationContainer = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={NavigationRoutes.OnBoarding}
          screenOptions={{
            headerShown: false,
          }}>
          {/* <RootStack.Screen
                        name={NavigationRoutes.Splash}
                        component={SplashScreen}
                        options={{ headerShown: false, gestureEnabled: true }}
                    /> */}
          <RootStack.Screen
            name={NavigationRoutes.OnBoarding}
            component={OnBoarding}
            options={{headerShown: false, gestureEnabled: true}}
          />
          <RootStack.Screen
            name={NavigationRoutes.OrderBarStack}
            component={OrderBarStack}
            options={{headerShown: false, gestureEnabled: true}}
          />
          <RootStack.Screen
            name={NavigationRoutes.MainRoot}
            component={MainRoot}
            options={{headerShown: false, gestureEnabled: true}}
          />
          <RootStack.Screen
            name={NavigationRoutes.OrderStack}
            component={OrderStackNavigator}
          />
          <RootStack.Screen
            name={NavigationRoutes.AuthenticationHome}
            component={AuthStackNavigator}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
