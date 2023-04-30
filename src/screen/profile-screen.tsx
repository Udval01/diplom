// @ts-nocheck
import {useNavigation} from '@react-navigation/core';
import {CommonActions} from '@react-navigation/native';
import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaScreen} from '.';
import {
  ExclamationMark,
  ProfilePhoneIcon,
  SettingsIconBlack,
  SignOutIconRed,
} from '../assets/icons';
import {AuthContext, useUserUID} from '../contexts/auth';
import {Border, Padding, Queue, Stack, Text} from '../components';
import {Grid} from '../components/layout/grid';
import {useFirestoreDocument} from '../firebase/';
import {NavigationRoutes} from '../navigation/navigation-param';
import {ForceLoginScreen} from './force-login';

export const ProfileScreenItem = ({text, icon, onPress}) => {
  return (
    <Border role="tertiary" topWidth="xlight">
      <TouchableOpacity onPress={onPress}>
        <Padding size={[5, 0, 0, 5]}>
          <Grid columns={[1, 7]}>
            <View style={{height: 24}}>{icon}</View>
            <Text
              type="caption1.main"
              role={text === 'Гарах' ? 'error' : 'dark'}>
              {text}
            </Text>
          </Grid>
        </Padding>
      </TouchableOpacity>
    </Border>
  );
};

type ProfileItemType = {
  icon: JSX.Element;
  text: string;
  route?: keyof typeof NavigationRoutes;
  onPress?: Function;
};

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {user, signOut} = useContext(AuthContext);
  const {phoneNumber} = user || {};
  const uid = useUserUID();
  const {data: userData} = useFirestoreDocument(['users', uid]);
  const {data: version} = useFirestoreDocument(['configurations', 'version']);
  const [ProfileScreenItems, setProfileScreenItems] = useState<
    ProfileItemType[]
  >([
    {
      icon: <ExclamationMark />,
      text: 'Бидний тухай',
      route: 'AboutScreenText',
    },
    {
      icon: <SettingsIconBlack />,
      text: 'Тохиргоо',
      route: 'ProfileAdditionalInformationScreen',
    },
    {
      icon: <SignOutIconRed />,
      text: 'Гарах',
      route: 'Home',
      onPress: async () => {
        await signOut();
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: NavigationRoutes.Home}],
          }),
        );
      },
    },
  ]);
  const goToRoute = (route: keyof typeof NavigationRoutes) => {
    navigation.navigate(NavigationRoutes.ProfileStack, {
      screen: NavigationRoutes[route],
    });
  };

  if (!user) {
    return <ForceLoginScreen />;
  }

  return (
    <SafeAreaScreen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stack size={5}>
          <Queue justifyContent="flex-start" alignItems="center">
            <Padding size={[5, 0, 0, 4]}>
              <ProfilePhoneIcon />
            </Padding>
            <Padding size={[5, 0, 0, 4]}>
              <Text type="subheading.bold">
                {!user
                  ? 'xxxx-xxxx'
                  : `${phoneNumber?.slice(4, 8)}-${phoneNumber?.slice(
                      8,
                      12,
                    )}` || 'Loading...'}
              </Text>
            </Padding>
          </Queue>

          <Stack size={4}>
            {ProfileScreenItems.map((item: ProfileItemType, index) => (
              <ProfileScreenItem
                key={index}
                {...item}
                onPress={() =>
                  item.onPress ? item.onPress() : goToRoute(item.route)
                }
              />
            ))}
          </Stack>
        </Stack>
        <Border role="light">
          <Padding size={[10, 4, 4, 4]}>
            <Text type="caption2.light" textAlign="center">
              {`V${version?.ios}` || 'V0.0.0'}
            </Text>
          </Padding>
        </Border>
      </ScrollView>
    </SafeAreaScreen>
  );
};
