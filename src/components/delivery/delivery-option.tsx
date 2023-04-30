import _ from 'lodash';
import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {Path, ForeignObject} from 'react-native-svg';
import {SelectionIcon} from '../../assets/icons';
import {
  Border,
  Box,
  mapRoleToBackgroundColor,
  Overlay,
  Padding,
  Stack,
  Text,
} from '../../components';
import {useFirestoreCollection} from '../../firebase';

export const DeliveryOption = ({
  id,
  image,
  name,
  active,
  description,
  ...props
}) => {
  const {data: timeSlots} = useFirestoreCollection([
    'deliveryMethods',
    id,
    'timeSlots',
  ]);
  const minPrice = _.minBy(timeSlots, 'price');
  const maxPrice = _.maxBy(timeSlots, 'price');

  const price = _.chain([minPrice, maxPrice])
    .map(_.property('price'))
    .compact()
    .uniq()
    .map(price => Number(price).toLocaleString())
    .map(price => `₮${price || '...'}`)
    .value()
    .join(' - ');
  return (
    <>
      <Border
        radius="large"
        role={active ? 'success' : 'tertiary'}
        lineWidth="light">
        <Padding size={[4, 4, 4, 4]}>
          <Stack size={4} width={Dimensions.get('window').width / 2.75}>
            <Box ratio={1.25} url={image} />
            <Text textAlign="center" type="subheading.main">
              {name || 'Loading...'}
            </Text>
            <Text textAlign="center" type="caption1.light" numberOfLines={2}>
              {description || 'Loading...'}
            </Text>
            <Text role="success" textAlign="center">
              {price}
            </Text>
          </Stack>
        </Padding>
        <Overlay right={0}>
          <SelectionIcon role={active ? 'success' : 'light'} />
        </Overlay>
      </Border>
    </>
  );
};
