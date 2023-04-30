// @ts-nocheck
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
import {Text} from '../components';
import {ProfileScreen} from '../screen/profile-screen';

const Stack = createStackNavigator<NavigatorParamList>();

const HandleHeaderTitle = (title: string) => (
  <Text textAlign="center" type="headline.bold">
    {title}
  </Text>
);

export const ProfileBarStack = () => (
  <Stack.Navigator
    screenOptions={() => ({
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
      name={NavigationRoutes.ProfileScreen}
      component={ProfileScreen}
      options={{
        headerBackTitleVisible: false,
        gestureEnabled: true,
        headerTintColor: 'white',
        headerTitle: () => HandleHeaderTitle('Профайл'),
      }}
    />
  </Stack.Navigator>
);
