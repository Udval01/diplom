// @ts-nocheck
import {useRoute} from '@react-navigation/native';
import _ from 'lodash';
import React from 'react';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaScreen} from '.';
import {List} from './search-list';
import {useFirestoreCollection} from '../firebase';

export const CategoryDetailsScreen = () => {
  const routes = useRoute<any>();
  const {name} = routes?.params?.category || {};
  const {height} = Dimensions.get('window');

  const {data: products, loading: productsLoading} = useFirestoreCollection([
    'products',
  ]);

  return (
    <SafeAreaScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{height: height - 190}}>
        <List
          products={_.chain(products)
            .filter(({catalog, available}) => catalog == name && available)
            .orderBy(['updatedAt'], ['desc'])
            .defaultTo([null, null, null])
            .value()}
        />
      </ScrollView>
    </SafeAreaScreen>
  );
};
