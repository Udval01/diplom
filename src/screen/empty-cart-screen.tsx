// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {SafeAreaScreen} from '.';
import {Center, Margin, Queue, Stack, Text} from '../components';
import {OrderBag} from '../assets/icons/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CloseIcon} from '../assets/icons';

export const EmptyCartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaScreen>
      <Margin size={[4, 4, 0, 4]}>
        <Queue alignItems="center" justifyContent="space-between">
          <TouchableOpacity onPress={navigation.goBack}>
            <CloseIcon role="black" width={24} height={24} />
          </TouchableOpacity>
          <Text width={'auto'} type="subheading.main">{`Миний сагс`}</Text>
          <Queue>
            <Text width={'auto'} type="paragraph.medium">
              Нийт:
            </Text>
            <Text width={'auto'} type="paragraph.main">
              0
            </Text>
          </Queue>
        </Queue>
      </Margin>
      <Stack size={3} height="80%" justifyContent="center">
        <Stack size={3}>
          <Center>
            <OrderBag />
          </Center>
          <Text textAlign="center" type="subheading.main">
            Таны сагс хоосон байна
          </Text>
        </Stack>
      </Stack>
    </SafeAreaScreen>
  );
};
