// @ts-nocheck
import {useNavigation} from '@react-navigation/native';
import _ from 'lodash';
import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useFirestoreCollection} from '../../firebase';
import {NavigationRoutes} from '../../navigation/navigation-param';
import {LoadingIcon} from '../animated/loading-logo';
import {Text} from '../core';
import {Margin, Queue, Stack} from '../layout';
import {Spacer} from '../layout/spacer';
import {ProductPreview} from './product-preview';
import RigthArrowIcon from '../../assets/icons/RightArrowIcon';

export const CatalogPreview = ({category, products, type, onPress}: any) => {
  const {navigate} = useNavigation();
  const {name} = category;
  const categoryProducts = _.chain(products)
    .filter(({catalog}) => catalog == name)
    .orderBy(['updatedAt'], ['desc'])
    .slice(0, 4)
    .defaultTo([null, null, null])
    .value();

  const handleNavigation = () => {
    navigate(NavigationRoutes.CategoryDetailsScreen, {
      category,
    });
  };
  return (
    <Stack size={2} width="100%">
      <Margin size={[3, 0, 3, 0]}>
        <Queue justifyContent="space-between" alignItems="center">
          <Text type="subheading.main">{name}</Text>
          <TouchableOpacity onPress={handleNavigation}>
            <Queue width={51} size={2} alignItems="center">
              <Text type="paragraph.main" color="green.main" width="auto">
                Бүгд
              </Text>
              <RigthArrowIcon role={'success'} />
            </Queue>
          </TouchableOpacity>
        </Queue>
      </Margin>

      <FlatList
        data={categoryProducts}
        horizontal
        style={{overflow: 'visible'}}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.objectID}
        ItemSeparatorComponent={() => <Spacer horizontal={false} size={3} />}
        renderItem={({item}) => (
          <ProductPreview type={type} product={item} onPress={onPress} />
        )}
      />
    </Stack>
  );
};

export const ProductList = (props: {
  path?: Array<string>;
  type?: string;
  onPress?: () => void;
}) => {
  const {data, loading} = useFirestoreCollection(['catalog']);
  const {data: products, loading: productLoading} = useFirestoreCollection([
    'products',
  ]);

  if (loading || productLoading) {
    return <LoadingIcon />;
  }

  return (
    <Stack size={4}>
      <FlatList
        data={_.uniqBy(data, 'name')}
        style={{overflow: 'visible'}}
        keyExtractor={item => item?.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Margin bottom={3}>
              <CatalogPreview
                products={_.filter(products, {
                  available: true,
                })}
                category={item}
              />
            </Margin>
          );
        }}
      />
    </Stack>
  );
};
