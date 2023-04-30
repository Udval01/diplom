import _ from 'lodash';
import React, {useContext} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {Margin, Queue, Stack} from '../components';
import {DeliveryOptionContext} from '../contexts/delivery';
import {DeliveryOption} from '../components/delivery/delivery-option';

export const DeliveryType = () => {
  const {deliveryTypes, selectType, selectedType} = useContext(
    DeliveryOptionContext,
  );
  const sortedDeliveryTypes = _.chain(deliveryTypes)
    .sortBy({default: true})
    .reverse()
    .value();
  return (
    <Queue justifyContent="space-between">
      <FlatList
        horizontal
        data={sortedDeliveryTypes}
        style={{overflow: 'visible'}}
        keyExtractor={_.property('id')}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Margin size={[3, 5, 3, 3]} />}
        renderItem={({item}) => {
          let {id} = item;
          return (
            <TouchableOpacity onPress={() => selectType(item)} key={id}>
              <DeliveryOption {...item} active={selectedType?.id === id} />
            </TouchableOpacity>
          );
        }}
      />
    </Queue>
  );
};

export const DeliveryTimeSlotOptions = ({}) => {
  const {availableTimeSlots, selectedTimeSlot, setSelectedTimeSlot, loading} =
    useContext(DeliveryOptionContext);
  return (
    <Stack size={4}>
      {!loading &&
        availableTimeSlots
          .map((slot, index) => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedTimeSlot(slot)}
                key={index}>
                <DeliveryTimeSlotOptions
                  {...slot}
                  active={selectedTimeSlot?.id == slot?.id}
                />
              </TouchableOpacity>
            );
          })
          .value()}
    </Stack>
  );
};
