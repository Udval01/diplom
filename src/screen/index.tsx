import React, {FC, useMemo} from 'react';
import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {mapRoleToBackgroundColor, Margin} from '../components';

type BasicScreenType = {
  children: any;
  size: any;
};
export const BasicScreen: FC<BasicScreenType> = ({children, size}) => {
  const insets = useSafeAreaInsets();
  const safeAreaStyle: ViewStyle = useMemo(() => {
    const style: ViewStyle = {};
    style.paddingTop = 0;
    style.paddingBottom = insets.bottom;
    style.paddingLeft = insets.left;
    style.paddingRight = insets.right;

    return style;
  }, [insets]);
  return (
    <View
      style={[
        safeAreaStyle,
        {
          backgroundColor: mapRoleToBackgroundColor('light'),
          flex: 1,
        },
      ]}>
      <ScrollView>
        <Margin size={size || [2, 3, 0, 3]}>{children}</Margin>
      </ScrollView>
    </View>
  );
};

export const SafeAreaScreen = ({children, size = [2, 4, 0, 4]}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: mapRoleToBackgroundColor('light'),
      }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Margin grow={1} size={size}>
          {children}
        </Margin>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
