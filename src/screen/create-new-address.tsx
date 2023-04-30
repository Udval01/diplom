import React, {useState} from 'react';
import {AsyncButton, Border, Input, Padding, Stack, Text} from '../components';
import {SafeAreaScreen} from '.';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from '../navigation/navigation-param';

export const CreateNewAddress = ({}) => {
  const [additionalInformation, setAdditionalInformation] = useState({
    additionalInformation: '',
    houseNumber: '',
  });
  const navigation = useNavigation();
  const [validateInput, setValidateInput] = useState(false);

  const saveAddressAndContinue = async () => {
    if (
      additionalInformation.houseNumber === '' ||
      additionalInformation.additionalInformation === '' ||
      Object.keys(additionalInformation).length != 2
    ) {
      setValidateInput(true);
      return;
    }

    navigation.navigate(NavigationRoutes.OrderStack, {
      screen: NavigationRoutes.CreateOrder,
      params: {
        address: additionalInformation,
      },
    });
  };

  return (
    <SafeAreaScreen>
      <Padding size={[0, 4, 4, 4]}>
        <Stack size={4}>
          <Text
            role={
              validateInput && !additionalInformation.houseNumber
                ? 'error'
                : null
            }
            type="caption2.main">
            Та байрны дугаараа оруулна уу.
          </Text>
          <Border role={'success'} radius="xmedium" lineWidth="light">
            <Input
              autoCorrect={false}
              autoFocus={true}
              onChangeText={value => {
                setAdditionalInformation(prev => ({
                  ...prev,
                  houseNumber: value,
                }));
              }}
              defaultValue={additionalInformation.houseNumber}
            />
          </Border>
          <Text
            role={
              validateInput && !additionalInformation.additionalInformation
                ? 'error'
                : null
            }
            type="caption2.main">
            Та орц, хаалганы дугаар, орцны кодоо оруулна уу.
          </Text>
          <Border role={'success'} radius="xmedium" lineWidth="light">
            <Input
              autoCorrect={false}
              onChangeText={value =>
                setAdditionalInformation(prev => ({
                  ...prev,
                  additionalInformation: value,
                }))
              }
              defaultValue={additionalInformation.additionalInformation}
            />
          </Border>
          <AsyncButton buttonType="primary" onPress={saveAddressAndContinue}>
            Болсон
          </AsyncButton>
        </Stack>
      </Padding>
    </SafeAreaScreen>
  );
};
