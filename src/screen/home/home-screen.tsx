import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {Keyboard, ScrollView} from 'react-native';
import {
  Border,
  Margin,
  NoProducts,
  ProductList,
  Stack,
  Categories,
} from '../../components';
import {LoadingGereseeLogo} from '../../components/animated';
import {useFirestoreCollection} from '../../firebase';
import {Autocomplete} from '../../components/search';
import {SafeAreaScreen} from '..';
import {AuthContext} from '../../contexts/auth';
import {List} from '../search-list';

export const HomeScreen = () => {
  const {token} = useContext(AuthContext);
  const [value, setValue] = useState(null);
  const {data: products, loading: productsLoading} = useFirestoreCollection([
    'products',
  ]);
  const {
    claims: {admin},
  } = token || {claims: {admin: false}};

  if (productsLoading) {
    return <LoadingGereseeLogo />;
  }
  if (!_.size(products)) {
    return <NoProducts description={'Таны дэлгүүрт бараа байхгүй байна.'} />;
  }

  return (
    <SafeAreaScreen size={[0, 0, 0, 0]}>
      <ScrollView
        onScroll={Keyboard.dismiss}
        showsVerticalScrollIndicator={false}>
        <Stack size={4}>
          <Margin left={4} right={4}>
            <Stack size={4}>
              <Autocomplete setValue={setValue} />
              {!_.isEmpty(value) && (
                <List
                  products={products.filter(products =>
                    products.name.includes(value),
                  )}
                />
              )}
            </Stack>
          </Margin>

          {_.isEmpty(value) && (
            <Stack size={4}>
              <Margin left={4} right={4}>
                <Categories />
              </Margin>
              <Border topWidth="thick" bottomWidth="thick" role="tertiary" />
              <Margin left={4} right={4}>
                <Stack size={4}>
                  <ProductList />
                </Stack>
              </Margin>
            </Stack>
          )}
        </Stack>
      </ScrollView>
    </SafeAreaScreen>
  );
};
