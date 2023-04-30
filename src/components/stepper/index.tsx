// @ts-nocheck
import React from 'react';
import {Dimensions, View} from 'react-native';
import {CheckMarkIcon} from '../../assets/icons';
import {Circle, Text} from '../core';
import {Center, Overlay, Queue, Spacer, Stack} from '../layout';
import _, {create} from 'lodash';
import styled from 'styled-components';
import {mapRoleToBackgroundColor} from '../core';
import moment from 'moment';
import 'moment/locale/mn';

const StepperHead = props => {
  const {completed = true, size = 32, active, index} = props;

  return (
    <Overlay position="relative">
      <Circle
        size={size}
        backgroundRole={completed ? 'success' : active ? 'success' : 'gray5'}
        borderRole={completed || active ? 'success' : 'gray5'}
        lineWidth="light"
      />
      <Overlay height="100%" width="100%">
        <Center flex={1}>
          <Circle size={(size * 6) / 7}>
            <Center flex={1}>
              {completed ? (
                <CheckMarkIcon height={16} width={16} />
              ) : (
                <Text textAlign="center" role={active ? 'light' : 'tertiary'}>
                  {index + 1}
                </Text>
              )}
            </Center>
          </Circle>
        </Center>
      </Overlay>
    </Overlay>
  );
};

const StepperConnector = props => {
  const {role, width, horizontal} = props;
  return (
    <View
      style={{
        flex: !horizontal && 1,
        flexDirection: horizontal ? 'column' : 'row',
        backgroundColor: mapRoleToBackgroundColor(role),
        height: horizontal ? Dimensions.get('window').height / 14 : width || 1,
        width: (horizontal && width) || 3,
      }}
    />
  );
};

const StepperInfo = props => {
  const {horizontal, label, description, createdAt, active, completed} = props;
  const timeStamp = createdAt?.toDate();
  moment.locale('mn');
  const day = moment(timeStamp).format('ll, h:mm:ss');
  return (
    <>
      <Overlay
        top={horizontal && 0}
        bottom={!horizontal ? -20 : 0}
        left={horizontal && 40}>
        <Center flex={1}>
          <Text
            type={'caption1.medium'}
            role={completed || active ? 'success' : 'tertiary'}
            numberOfLines={1}
            textAlign={horizontal ? 'left' : 'center'}>
            {horizontal ? day : label || ' '}
          </Text>
        </Center>
      </Overlay>
      <Overlay top={horizontal && 30} left={horizontal && 40}>
        {horizontal && (
          <Text
            type={'caption1.medium'}
            role={completed || active ? 'success' : 'tertiary'}>
            {description || ' '}
          </Text>
        )}
      </Overlay>
    </>
  );
};

const StepperWrapper = styled.View<any>`
  flex-direction: ${({horizontal}: any) => (horizontal ? 'column' : 'row')};
  align-items: center;
`;

export const Stepper = props => {
  const {horizontal, steps} = props;
  return (
    <View style={{flexDirection: horizontal && 'row'}}>
      <StepperWrapper horizontal={horizontal}>
        {_.flow(steps =>
          _.map(steps, (step, index) => {
            const {active = true} = step || {};
            if (parseInt(index) === steps.length - 1) {
              return (
                <Center>
                  <StepperHead {...step} {...props} index={index} />
                  <StepperInfo horizontal={horizontal} {...step} />
                </Center>
              );
            }
            return (
              <>
                <Center>
                  <StepperHead {...step} {...props} index={index} />
                  <StepperInfo horizontal={horizontal} {...step} />
                </Center>
                <Spacer size={5} />
                <StepperConnector
                  role={step.completed ? 'success' : 'tertiary'}
                  {...props}
                />
                <Spacer size={5} />
              </>
            );
          }),
        )(steps)}
      </StepperWrapper>
    </View>
  );
};
