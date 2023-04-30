import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Border, Button, Center, Margin, Padding, Stack, Text} from '..';
import {Queue} from '../layout';
type textType =
  | 'success'
  | 'light'
  | 'primary'
  | 'info'
  | 'error'
  | 'secondary'
  | 'tertiary'
  | 'default'
  | 'gray50';
type ButtonType =
  | 'success'
  | 'light'
  | 'primary'
  | 'info'
  | 'error'
  | 'secondary'
  | 'tertiary';
type PopupType = {
  IsVisible: boolean;
  setIsVisible?: Function;
  title?: string;
  retry?: Function;
  icon?: any;
  marginSize?: any;
  description?: string;
  confirmText?: string;
  declineText?: string;
  confirmFunction?: Function;
  declineFunction?: Function;
  confirmTextColor?: textType;
  confirmButtonRole?: ButtonType;
  declineTextColor?: textType;
  declineButtonRole?: ButtonType;
  buttonsBetweenSize?: number;
  buttonRow?: boolean;
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export const PopupModal: React.FC<PopupType> = ({
  IsVisible,
  setIsVisible,
  icon,
  title,
  marginSize,
  description,
  confirmText,
  declineText,
  confirmFunction,
  declineFunction,
  confirmTextColor,
  confirmButtonRole,
  declineTextColor,
  declineButtonRole,
  buttonRow = true,
  buttonsBetweenSize,
}) => {
  const RouteButtonRow = ({children}) => {
    switch (buttonRow) {
      case true:
        return (
          <Queue
            size={buttonsBetweenSize || 3}
            alignItems={'center'}
            justifyContent={'center'}>
            {children}
          </Queue>
        );
      case false:
        return <Stack size={buttonsBetweenSize || 3}>{children}</Stack>;
    }
  };
  return (
    <Modal isVisible={IsVisible} style={styles.modal} animationOut="fadeOut">
      <Stack maxWidth={Dimensions.get('window').width / 1.3}>
        <Border backgroundRole="light" radius="medium">
          <Margin size={marginSize || [6, 4, 6, 4]}>
            <Stack size={4}>
              {icon && <Center>{icon}</Center>}
              <Text textAlign="center" type={'subheading.main'}>
                {title}
              </Text>
              {description && (
                <Text textAlign="center" role="tertiary">
                  {description}
                </Text>
              )}
              <Padding size={[0, 5, 0, 5]}>
                <RouteButtonRow>
                  {confirmText && (
                    <Button
                      lineWidth="light"
                      textRole={confirmTextColor || 'default'}
                      radius="medium"
                      size={
                        confirmFunction && declineFunction
                          ? [3, 6, 3, 6]
                          : [3, 7, 3, 7]
                      }
                      backgroundRole={confirmButtonRole || 'lightGray'}
                      onPress={() => {
                        setIsVisible(false);
                        confirmFunction && confirmFunction();
                      }}
                      textType="subheading2.bold">
                      {confirmText}
                    </Button>
                  )}
                  {declineText && (
                    <Button
                      onPress={() => {
                        setIsVisible(false);
                        declineFunction && declineFunction();
                      }}
                      lineWidth="light"
                      textRole={declineTextColor || 'default'}
                      radius="medium"
                      size={
                        confirmFunction && declineFunction
                          ? [3, 6, 3, 6]
                          : [3, 7, 3, 7]
                      }
                      backgroundRole={declineButtonRole || 'lightGray'}
                      textType="subheading2.bold">
                      {declineText}
                    </Button>
                  )}
                </RouteButtonRow>
              </Padding>
            </Stack>
          </Margin>
        </Border>
      </Stack>
    </Modal>
  );
};
