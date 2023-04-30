// @ts-nocheck
import _ from 'lodash';
import React, {createContext, useState} from 'react';

export const ShoppingCartContext = createContext({
  items: {},
  setItemList: items => {},
  updateItemInCart: (item, updateQuantity) => {},
  removeItem: id => {},
  emptyCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

const calculateTotalPrice = items =>
  _.chain(items)
    .filter(({quantity}) => quantity > 0)
    .sumBy(({quantity, price}) => {
      return quantity * price;
    })
    .value();

export const ShoppingCartProvider = ({children}) => {
  const [items, setItems] = useState({});
  const updateItemInCart = (item, updateQuantity) => {
    let {objectID, id, price = 4000} = item;
    let key = objectID || id;
    let {quantity} = items[key] || {quantity: 0};
    quantity = quantity + updateQuantity;
    if (quantity < 1) {
      removeItem(key);
      return;
    }
    let newItems = _.setWith({...items}, `${key}`, {
      quantity,
      price,
    });
    setItems(newItems);
  };
  const setItemList = items => {
    setItems(items);
  };
  const removeItem = id => {
    setItems(
      _.omitBy({...items}, (e, key) => {
        return key == id;
      }),
    );
  };
  const emptyCart = () => {
    setItems({});
  };
  const totalItems = _.chain(items)
    .filter(({quantity}) => quantity > 0)
    .sumBy('quantity')
    .value();

  const totalPrice = calculateTotalPrice(items);

  return (
    <ShoppingCartContext.Provider
      value={{
        items,
        setItemList,
        updateItemInCart,
        totalItems,
        removeItem,
        totalPrice,
        emptyCart,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
