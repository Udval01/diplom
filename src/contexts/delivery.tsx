import _ from 'lodash';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {AuthContext, USERS_HOME} from './auth';
import {useFirestoreCollection} from '../firebase';

export const DeliveryOptionContext = createContext<{
  deliveryTypes?: any;
  selectedType?: any;
  selectedTimeSlot?: any;
  availableTimeSlots?: any;
  selectedAddress?: any;
  setSelectedAddress: (address) => void;
  availableAddress?: any;
  availabelAddressesLoading?: boolean;
  selectType?: (type) => void;
  setSelectedTimeSlot?: (slot) => void;
  loading?: boolean;
}>({
  deliveryTypes: {},
  selectedType: {},
  availableTimeSlots: [],
  availableAddress: [],
  selectType: () => {},
  selectedTimeSlot: null,
  availabelAddressesLoading: true,
  setSelectedTimeSlot: () => {},
  setSelectedAddress: address => {},
  loading: true,
});

const isLate = ({startTime, endTime, nextDay}) => {
  const now = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const time = Number(now.split(':').join('')) + 200;
  if (nextDay) {
    return true;
  }
  return time < Number(endTime);
};
export const DeliveryOptionProvider = ({children}) => {
  const {data: deliveryTypes} = useFirestoreCollection(['deliveryMethods']);

  const defaultType =
    _.find(deliveryTypes, {default: true}) || _.first(deliveryTypes);
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const {data: availableAddress, loading: availabelAddressesLoading} =
    useFirestoreCollection([USERS_HOME, uid, 'location']);
  const [selectedType, setSelectedType] = useState<any>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<any>(null);
  const [selectedAddress, setSelectedAddress] = useState();
  const {id} = selectedType || defaultType || {};
  const {data: timeSlots, loading: loading} = useFirestoreCollection([
    'deliveryMethods',
    id,
    'timeSlots',
  ]);
  const availableTime = _.filter(timeSlots, isLate);
  const availableTimeSlots = _.chain(availableTime).sortBy(
    'nextDay',
    'startTime',
  );
  const defaultTimeSlot = _.minBy(availableTime, 'nextDay');

  const selectType = type => {
    setSelectedType(type);
  };
  const defaultAddress = _.first(availableAddress);
  return (
    <DeliveryOptionContext.Provider
      value={{
        deliveryTypes,
        selectedTimeSlot: selectedTimeSlot || defaultTimeSlot,
        selectedType: selectedType || defaultType,
        availableTimeSlots,
        setSelectedTimeSlot,
        selectedAddress: selectedAddress || defaultAddress,
        setSelectedAddress,
        availableAddress,
        availabelAddressesLoading,
        selectType,
        loading,
      }}>
      {children}
    </DeliveryOptionContext.Provider>
  );
};
