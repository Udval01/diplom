import React from 'react';
import _ from 'lodash';
import {SafeAreaScreen} from '../../screen';
import {Button, Padding, Center, Stack, Text, Border} from '../../components';
import {ShopIllustrations} from '../../assets/illustrations';

export const NoProducts = (props: {
  title?: string;
  description?: string;
  buttonText?: string;
}) => {
  const {title, description, buttonText} = props;
  return (
    <SafeAreaScreen size={[0, 0, 0, 0]}>
      <Border topWidth="light" role="tertiary" />
      <Stack justifyContent={'center'} size={3} height="90%">
        <Center>
          <ShopIllustrations />
        </Center>
        <Text type={'subheading.bold'} textAlign={'center'}>
          {title || 'Дэлгүүрт бараа алга'}
        </Text>
        <Text width={'100%'} type={'paragraph.light'} textAlign={'center'}>
          {description || 'Таны дэлгүүрт бараа байхгүй байна.'}
        </Text>
      </Stack>
    </SafeAreaScreen>
  );
};
