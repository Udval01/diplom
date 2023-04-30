// @ts-nocheck
import {Route, useNavigation, useRoute} from '@react-navigation/native';
import _ from 'lodash';
import React, {useContext, useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {SafeAreaScreen} from '.';
import {CodeVerificationIllustration} from '../assets/illustrations/index';
import {CorrectIcon, PhoneVerificationSuccessIcon} from '../assets/icons';
import {AuthContext, USERS_HOME} from '../contexts/auth';
import {
  Button,
  Center,
  InteractiveText,
  Margin,
  Overlay,
  Padding,
  PopupModal,
  Spinner,
  Stack,
  Text,
} from '../components';
import {useFirestoreDocument} from '../firebase';
import {NavigationRoutes} from '../navigation/navigation-param';
import {delay} from '../utils';

export const PhoneRegistrationSuccess = props => {
  const {navigateTo} = props;
  const navigation = useNavigation();
  const {user} = useContext(AuthContext);
  const {uid} = user || {};
  const {data: fieldData, loading} = useFirestoreDocument([USERS_HOME, uid]);
  const [visible, setVisble] = useState(true);
  const waitAndNavigate = async () => {
    try {
      if (navigateTo) {
        await delay(1500);
        setVisble(false);
        navigation.navigate(navigateTo);
        return;
      }
    } catch (e) {
      console.log(e.code);
    }
  };

  useEffect(() => {
    waitAndNavigate();
  }, [loading, id]);

  return (
    <PopupModal
      IsVisible={visible}
      icon={<CorrectIcon width={40} height={40} />}
      title="Та амжилттай бүртгүүллээ."
      marginSize={[5, 6, 5, 6]}
    />
  );
};

export const CodeVerificationScreen = ({navigation}: any) => {
  const {confirmCode, verifyPhoneNumber} = useContext(AuthContext);
  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [resend, setResend] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [invalidCode, setInvalidCode] = useState(false);
  const {params} = useRoute<Route<string, any>>();
  const {phonenumber, navigateTo} = params || {};
  const isValidCode = _.size(value) == 6;
  const [success, setSuccess] = useState(false);
  const {user} = useContext(AuthContext);

  const waitAndNavigate = async () => {
    try {
      if (navigateTo) {
        await delay(1000);
        navigation.navigate(navigateTo);
        return;
      }
    } catch (e) {
      console.log(e.code);
    }
  };
  const verifyPhone = async value => {
    try {
      setLoading(true);
      await confirmCode(value);
      setSuccess(true);
      waitAndNavigate();
    } catch (error) {
      console.log({error});
      setInvalidCode(true);
    } finally {
      setLoading(false);
    }
  };

  const resendCode = async () => {
    setInvalidCode(false);
    try {
      setLoading(true);
      setResend(true);
      await verifyPhoneNumber(`+976${phonenumber.split('-').join('')}`);

      navigation.navigate(NavigationRoutes.CodeVerificationScreen, {
        phonenumber,
      });
    } catch (error) {
      if (
        error.message !=
        `this._auth.emitter.once is not a function. (In 'this._auth.emitter.once(this._internalEvents[type], this["_" + type + "Handler"].bind(this))', 'this._auth.emitter.once' is undefined)`
      ) {
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isValidCode) {
      setDisabled(false);
      Keyboard.dismiss();
    } else {
      setDisabled(true);
    }
    setInvalidCode(false);
  }, [value]);

  useEffect(() => {
    if (resend) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      if (seconds == 0) {
        setResend(false);
        setSeconds(60);
      }
      return () => clearInterval(interval);
    }
  }, [resend, seconds]);

  const styles = StyleSheet.create({
    root: {flex: 1, padding: 25, display: 'flex'},
    codeFieldRoot: {
      marginTop: 20,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    cell: {
      width: 48,
      height: 52,
      fontSize: 22,
      borderColor: '#C8C8C8',
      borderRadius: 4,
      textAlign: 'center',
      justifyContent: 'center',
      borderWidth: 1,
    },
    focusCell: {
      borderColor: '#5EB14E',
      backgroundColor: '#FFFFFF',
    },
    errorCell: {
      borderColor: '#F4495D',
      backgroundColor: '#FFFFFF',
    },
  });

  const CELL_COUNT = 6;

  const [props] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      <SafeAreaScreen>
        <Stack>
          <Padding size={[0, 0, 4, 0]}>
            <Stack size={4}>
              <Center>
                <CodeVerificationIllustration />
              </Center>
              <Text type="headline.bold" textAlign="center">
                Баталгаажуулах код оруулна уу
              </Text>
              <Text type="paragraph.light" color="gray.50" textAlign="center">
                {`Таны дугаарт очсон баталгаажуулах \n кодыг оруулна уу.`}
              </Text>
            </Stack>
          </Padding>
          <Stack size={4}>
            {success ? (
              <Margin size={[5, 5, 5, 5]}>
                <Center>
                  <PhoneVerificationSuccessIcon width={70} height={70} />
                </Center>
              </Margin>
            ) : !isValidCode || !loading ? (
              <CodeField
                {...props}
                value={value}
                defaultValue={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <View
                    style={[
                      styles.cell,
                      (isFocused || symbol) && styles.focusCell,
                      invalidCode && styles.errorCell,
                    ]}>
                    <Text key={index} type="headline.main" textAlign="center">
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  </View>
                )}
              />
            ) : (
              loading && (
                <Margin size={[5, 5, 5, 5]}>
                  <Center>
                    <Spinner role="success" />
                  </Center>
                </Margin>
              )
            )}
            {invalidCode && (
              <Text role={'error'} type={'caption1.main'} textAlign={'center'}>
                Таны оруулсан код буруу байна
              </Text>
            )}
            {resend ? (
              <Text
                textAlign="center"
                type={'subheading2.bold'}
                role={'gray40'}>
                {`Кодыг дахин илгээх : ${seconds} сек дараа`}
              </Text>
            ) : (
              <InteractiveText
                textAlign="center"
                role="success"
                type="subheading2.bold"
                onPress={resendCode}>
                Кодыг дахин илгээх
              </InteractiveText>
            )}
          </Stack>
        </Stack>
        {!success && (
          <Overlay width={'100%'} bottom={10}>
            <Padding left={3} right={3}>
              <Button
                disabled={disabled}
                radius={'medium'}
                backgroundRole={disabled ? 'tertiary' : 'success'}
                textRole={disabled ? 'info' : 'light'}
                onPress={() => {
                  verifyPhone(value);
                }}>
                <Text
                  type={'subheading.bold'}
                  color={disabled ? 'gray.40' : 'white.main'}
                  textAlign={'center'}>
                  Болсон
                </Text>
              </Button>
            </Padding>
          </Overlay>
        )}
      </SafeAreaScreen>
    </KeyboardAvoidingView>
  );
};
