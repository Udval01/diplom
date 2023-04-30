import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, Keyboard} from 'react-native';
import {SafeAreaScreen} from '.';
import {PhoneNumberRegistrationIcon} from '../assets/icons';
import {
  AnimatedFadeInView,
  AnimatedSlideDownView,
  Button,
  Center,
  Margin,
  MaskedInput,
  Overlay,
  Padding,
  Spinner,
  Stack,
  Text,
  Border,
} from '../components';
import {NavigationRoutes} from '../navigation/navigation-param';
import {Route, useRoute} from '@react-navigation/native';
import {AuthContext} from '../contexts/auth';

export const PhoneNumberRegistrationScreen = ({navigation}) => {
  const router = useRoute<Route<string, any>>();

  const {signInWithPhoneNumber} = useContext(AuthContext);
  const [phonenumber, setPhonenumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [startState, setStartState] = useState(false);
  const isValidPhone = _.size(phonenumber) == 9;
  const [isFocused, setIsFocused] = useState(false);
  const {navigateTo} = router?.params || {};
  const [errorMessage, setErrorMessage] = useState('');

  const verifyPhone = async () => {
    if (!isValidPhone) {
      return;
    }
    setLoading(true);
    try {
      await signInWithPhoneNumber(`+976${phonenumber}`);
      navigation.navigate(NavigationRoutes.CodeVerificationScreen, {
        phonenumber,
        navigateTo: navigateTo,
      });
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-phone-number':
          setErrorMessage('Уучлаарай! Та утасны дугаараа зөв оруулна уу.');
          break;
        case 'auth/network-request-failed':
          setErrorMessage('Уучлаарай! Та интернет холболтоо шалгана уу.');
          break;
        case 'auth/too-many-requests':
          setErrorMessage('Уучлаарай! Та түр хугацааны дараа оролдож үзнэ үү.');
          break;
        default:
          break;
      }
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (phonenumber.length === 9) {
      Keyboard.dismiss();
    }
  }, [phonenumber]);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsFocused(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const onFocus = () => {
    setIsFocused(true);
    setStartState(true);
  };
  return (
    <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
      <SafeAreaScreen>
        <Margin size={Platform.OS === 'ios' ? [0, 2, 0, 2] : [4, 4, 0, 4]}>
          <Stack size={6}>
            <Padding size={[0, 0, 6, 0]}>
              <Stack size={3}>
                <Center>
                  <PhoneNumberRegistrationIcon />
                </Center>
                <Text type="headline.bold" textAlign="center">
                  Утасны дугаараа оруулна уу
                </Text>
                <Text type="paragraph.light" role="info" textAlign="center">
                  Та дугаараа оруулснаар бид таны дугаарлуу баталгаажуулах кодыг
                  илгээх болно.
                </Text>
                <Padding top={3}>
                  <AnimatedFadeInView visible={!loading}>
                    <MaskedInput
                      lineWidth="light"
                      borderRole={
                        isFocused && !error
                          ? 'success'
                          : error || (!isFocused && !isValidPhone && startState)
                          ? 'error'
                          : 'tertiary'
                      }
                      radius="medium"
                      backgroundRole="light"
                      textColor={error ? 'error' : 'default'}
                      size={
                        Platform.OS === 'ios' ? [4.2, 4, 4.2, 4] : [2, 0, 2, 4]
                      }
                      fontWeight="600"
                      role="info"
                      autoFocus={true}
                      onFocus={onFocus}
                      mask="0000-0000"
                      placeholder="Утасны дугаар"
                      placeholderTextColor={'gray.40'}
                      keyboardType="numeric"
                      onChangeText={value => {
                        setError(false);
                        setErrorMessage('');
                        setPhonenumber(value);
                      }}
                    />
                  </AnimatedFadeInView>
                </Padding>
                {!startState && (
                  <Border leftWidth={'light'} role={'success'}>
                    <Padding role={'lightGreen'} size={[4, 4, 4, 4]}>
                      <Stack size={1}>
                        <Text type={'paragraph.bold'}>Мэдэгдэл</Text>
                        <Text type={'paragraph.light'}>
                          Та захиалга хийхийн тулд бүртгүүлэх естой байгаа шүү
                          дээ хөөөө
                        </Text>
                      </Stack>
                    </Padding>
                  </Border>
                )}
                {!isValidPhone && !isFocused && startState ? (
                  <AnimatedSlideDownView height={20} visible={true}>
                    <Text
                      type={'paragraph.main'}
                      role={'error'}
                      numberOfLines={2}>
                      8 тоотой утасны дугаар оруулна
                    </Text>
                  </AnimatedSlideDownView>
                ) : (
                  <></>
                )}
                <AnimatedSlideDownView height={20} visible={error}>
                  <Text type="paragraph.main" role="error" numberOfLines={2}>
                    {errorMessage}
                  </Text>
                </AnimatedSlideDownView>
                <Overlay top={0} right={0} left={0}>
                  <AnimatedFadeInView width="100%" visible={loading}>
                    <Center>
                      <Spinner role="success" />
                    </Center>
                  </AnimatedFadeInView>
                </Overlay>
              </Stack>
            </Padding>
          </Stack>
        </Margin>
        <Overlay bottom={15} width={'100%'}>
          <Padding left={3} right={3}>
            <Button
              disabled={!isValidPhone || error}
              textRole={!isValidPhone || error ? 'info' : 'light'}
              backgroundRole={!isValidPhone || error ? 'tertiary' : 'success'}
              radius={'small'}
              onPress={verifyPhone}
              size={[4.2, 0, 4.2, 0]}>
              <Text
                type={'subheading.bold'}
                color={!isValidPhone || error ? 'gray.40' : 'white.main'}
                textAlign={'center'}>
                Болсон
              </Text>
            </Button>
          </Padding>
        </Overlay>
      </SafeAreaScreen>
    </KeyboardAvoidingView>
  );
};
