import _ from 'lodash';
import React, {FC} from 'react';
import {
  Border,
  Center,
  Circle,
  Padding,
  Queue,
  Stack,
  Text,
} from '../../components';
import {RadioButtonSelect} from '../radio-button';

const leadingZero = time => {
  return _.padStart(time + '', 2, '0');
};
export const convertTimeText = (time = 0) => {
  return `${leadingZero(time / 100)}:${leadingZero(time % 100)}`;
};

type DeliveryTimeSlotType = {
  startTime?: any;
  price?: any;
  endTime?: any;
  active?: boolean;
  nextDay?: any;
  description?: any;
};
export const DeliveryTimeSlot = ({
  startTime,
  price,
  endTime,
  active: isBorderActive,
  nextDay,
  description,
}: DeliveryTimeSlotType) => {
  return (
    <Border
      radius="large"
      role={isBorderActive ? 'success' : 'tertiary'}
      lineWidth="light">
      <Padding size={[4, 4, 4, 4]}>
        <Queue justifyContent="space-between">
          <Queue size={5}>
            <Center>
              <RadioButtonSelect isSelected={isBorderActive} />
            </Center>
            <Stack size={2}>
              {!description && (
                <Text textAlign="left" type="subheading.main">
                  {nextDay ? 'Маргааш' : 'Өнөөдөр'}
                </Text>
              )}
              <Text textAlign="center" type="subheading.light">
                {description
                  ? description
                  : `${convertTimeText(startTime)} - ${convertTimeText(
                      endTime,
                    )} `}
              </Text>
            </Stack>
          </Queue>
          <Center flex={1}>
            <Text role="success" textAlign="right">{`₮${price || '...'}`}</Text>
          </Center>
        </Queue>
      </Padding>
    </Border>
  );
};
