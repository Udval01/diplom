// @ts-nocheck
import {SafeAreaScreen} from '.';
import React from 'react';
import {Button, Padding, Center, Text, Stack} from '../components';
import {NavigationRoutes} from '../navigation/navigation-param';
import {useNavigation} from '@react-navigation/core';

export const ForceLoginScreen = () => {
  const navigation = useNavigation();

  const navigateToLoginScreen = () => {
    navigation.navigate(NavigationRoutes.AuthenticationHome, {
      screen: NavigationRoutes.PhoneNumberRegistrationScreen,
      params: {
        navigateTo: NavigationRoutes.ProfileScreen,
      },
    });
    return;
  };

  return (
    <SafeAreaScreen>
      <Stack size={5} justifyContent="center" height="100%">
        <Center>{/* <ForceLoginIllustration /> */}</Center>
        <Text textAlign="center" type="subheading.main">
          Та нэвтэрч ороогүй байна
        </Text>
        <Text
          textAlign="center"
          type="paragraph.main"
          role="tertiary"
          numberOfLines={3}>
          Та энэхүү үйлчилгээг ашиглаж эхлэхийн тулд нэвтэрч орох шаардлагатай.
        </Text>
        <Padding size={[0, 7, 0, 7]}>
          <Button buttonType="secondary" onPress={navigateToLoginScreen}>
            Нэвтрэх
          </Button>
        </Padding>
      </Stack>
    </SafeAreaScreen>
  );
};
