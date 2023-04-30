// @ts-nocheck
import _ from 'lodash';
import React, {useContext} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import ErrorTryAgainIllustration from '../assets/illustrations/ErrorTryAgainIllustration';
import {
  Center,
  Margin,
  ProductPreview,
  Queue,
  Stack,
  Text,
  ThemeContext,
} from '../components';

const GRID_SIZE = 2;
const window = Dimensions.get('window');

export const List = ({products}) => {
  if (_.isEmpty(products)) {
    return (
      <Stack size={4}>
        <Margin size={[4, 0, 0, 0]}>
          <Center>
            <ErrorTryAgainIllustration />
          </Center>
        </Margin>
        <Text type="subheading.main" textAlign="center">
          Таны хайсан бараа олдсонгүй
        </Text>
      </Stack>
    );
  }
  const {baseSpace} = useContext(ThemeContext);

  return (
    <FlatList
      data={_.chunk(products, GRID_SIZE)}
      keyExtractor={(item, index) => `${index}`}
      onEndReachedThreshold={100}
      ItemSeparatorComponent={() => <Margin size={[4, 4, 4, 4]} />}
      renderItem={({item}) => (
        <Queue size={3}>
          {item.map(product => {
            return (
              <ProductPreview
                product={product}
                width={(window.width - baseSpace * 15) / 2}
                onPress={() => {
                  console.log('123');
                }}
              />
            );
          })}
        </Queue>
      )}
    />
  );
};
