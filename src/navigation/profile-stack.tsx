import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// import {OrderHistoryScreen} from '../screen/home';
// import {OrderStatusScreen} from '../screen/order-status-stack';
// import {DetailedOrderScreen} from '../screen/order-status-stack/detailed-order-screen';
import {NavigationRoutes, NavigatorParamList} from './navigation-param';
// import {orderListTopBar} from './order-list-top-bar';
import {Text, InteractiveIcon} from '../components';
// import {AboutScreenText} from '../screen/profile-stack/about-screen';
// import {useNavigation} from '@react-navigation/native';
// import {BackArrowIcon} from '../assets/icons';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProfileScreen} from '../screen/profile-screen';

const Stack = createStackNavigator<NavigatorParamList>();

const HandleHeaderTitle = (title: string) => (
  <Text textAlign="center" type="headline.bold">
    {title}
  </Text>
);

export const ProfileBarStack = () => (
  <Stack.Navigator
    screenOptions={() => ({
      headerTintColor: 'black',
      headerTitleAlign: 'center',
      headerLeftContainerStyle: {
        paddingLeft: 10,
      },
      headerRightContainerStyle: {
        paddingRight: 10,
      },
      headerStyle: {
        shadowColor: 'transparent',
      },
    })}>
    <Stack.Screen
      name={NavigationRoutes.ProfileScreen}
      component={ProfileScreen}
      options={{
        headerBackTitleVisible: false,
        gestureEnabled: true,
        headerTintColor: 'white',
        headerTitle: () => HandleHeaderTitle('Профайл'),
      }}
    />
  </Stack.Navigator>
);

// export const ProfileStackNavigator = () => {
//   const insets = useSafeAreaInsets();
//   const navigation = useNavigation();
//   return (
//     <Stack.Navigator
//       initialRouteName={NavigationRoutes.ProfileScreen}
//       screenOptions={() => ({
//         headerTintColor: 'black',
//         headerTitleAlign: 'center',
//         headerLeftContainerStyle: {
//           paddingLeft: 10,
//         },
//         headerRightContainerStyle: {
//           paddingRight: 10,
//         },
//         headerStyle: {
//           shadowColor: 'transparent',
//         },
//         headerLeft: () => (
//           <InteractiveIcon
//             style={{
//               width: 30,
//               height: 30,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => navigation.goBack()}
//             icon={<BackArrowIcon />}
//           />
//         ),
//       })}>
//       <Stack.Screen
//         name={NavigationRoutes.SavedCardScreen}
//         component={SavedCardScreen}
//         options={() => ({
//           headerShown: true,
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Картууд'),
//         })}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.AboutScreenText}
//         component={AboutScreenText}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Бидний тухай'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.DetailedAddressesScreen}
//         component={DetailedAddressesScreen}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Хаягийн Мэдээлэл'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.ProfileAdditionalInformationScreen}
//         component={ProfileAdditionalInformationScreen}
//         options={{headerShown: false, gestureEnabled: true}}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.OrderHistoryScreen}
//         component={OrderHistoryScreen}
//         options={{headerShown: false, gestureEnabled: true}}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.OrderStatusScreen}
//         component={OrderStatusScreen}
//         options={{headerShown: false, gestureEnabled: true}}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.CardInfoScreen}
//         component={CardInfoScreen}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerStyle: {
//             borderBottomWidth: 0.6,
//             height: insets.top + 56,
//             shadowColor: 'transparent',
//           },
//           headerTitle: () => HandleHeaderTitle('Карт нэмэх'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.CardConfirmScreen}
//         component={CardConfirmScreen}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerStyle: {
//             borderBottomWidth: 0.6,
//             shadowColor: 'transparent',
//             height: insets.top + 56,
//           },
//           headerTitle: () => HandleHeaderTitle('Карт нэмэх'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.CardSaveScreen}
//         component={CardSaveScreen}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerStyle: {
//             borderBottomWidth: 0.6,
//             shadowColor: 'transparent',
//             height: insets.top + 56,
//           },
//           headerTitle: () => HandleHeaderTitle('Карт нэмэх'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.discountScreen}
//         component={discountScreen}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Урамшуулалууд'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.PaymentCardSelectionScreen}
//         component={PaymentCardSelectionScreen}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Төлбөр'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.EditAddress}
//         component={EditAddress}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Хаягийн мэдээлэл засах'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.MyShops}
//         component={MyShops}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => HandleHeaderTitle('Миний дэлгүүрүүд'),
//         }}
//       />
//       <Stack.Screen
//         name={NavigationRoutes.CardDetail}
//         options={{
//           headerBackTitleVisible: false,
//           gestureEnabled: true,
//           headerTitle: () => null,
//           headerStyle: {
//             shadowColor: 'transparent',
//             height: insets.top + 56,
//           },
//         }}
//         component={CardDetail}
//       />
//     </Stack.Navigator>
//   );
// };
