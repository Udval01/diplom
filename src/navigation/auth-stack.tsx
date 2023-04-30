// @ts-nocheck
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
import {InteractiveIcon} from '../components';
import {CloseIcon} from '../assets/icons';
import {PhoneNumberRegistrationScreen} from '../screen/phone-number-registration';
import {CodeVerificationScreen} from '../screen/phone-number-verfication';

const Stack = createStackNavigator<NavigatorParamList>();

export const AuthStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.PhoneNumberRegistrationScreen}
      screenOptions={() => ({
        headerTintColor: 'black',
        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
        headerStyle: {
          shadowColor: 'transparent',
        },
      })}>
      <Stack.Screen
        name={NavigationRoutes.PhoneNumberRegistrationScreen}
        component={PhoneNumberRegistrationScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          gestureEnabled: false,
          headerLeft: () => (
            <InteractiveIcon
              onPress={() => {
                navigation.goBack();
              }}
              icon={<CloseIcon role={'black'} width={36} height={36} />}
            />
          ),
        }}
      />
      <Stack.Screen
        name={NavigationRoutes.CodeVerificationScreen}
        component={CodeVerificationScreen}
        options={{
          headerBackTitleVisible: false,
          headerTitle: '',
          gestureEnabled: true,
          headerLeft: () => <></>,
          headerRight: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};
