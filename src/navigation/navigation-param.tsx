export enum NavigationRoutes {
  Home = 'Home',
  Test = 'Test',
  CartScreen = 'CartScreen',
  ForceUpdate = 'ForceUpdate',
  CategoryDetailsScreen = 'CategoryDetailsScreen',
  ProductDetailsScreen = 'ProductDetailsScreen',
  CustomerSupportScreen = 'CustomerSupportScreen',
  OrderStatusScreen = 'Profile/OrderStatusScreen',
  OrderList = 'Profile/OrderList',
  ProfileScreen = 'ProfileScreen',
  waitingOrderList = 'waitingOrderList',
  ReceivedOrderList = 'ReceivedOrderList',
  TermsAndConditionScreen = 'Order/TermsAndConditionScreen',
  AffirmRejectDialogScreen = 'Modal/AffirmRejectDialogScreen',
  CommonErrorDialog = 'Modal/CommonErrorDialog',
  ResendCodeDialog = 'Modal/ResendCodeDialog',
  TermsAndConditionDialog = 'Modal/TermsAndConditionDialog',
  LocationScreen = 'Location',
  LocationRequestScreen = 'LocationRequestScreen',
  LocationMappingScreen = 'Order/LocationMappingScreen',
  LocationInfoScreen = 'Order/LocationInfoScreen',
  LocationBlockscreen = 'LocationBlockscreen',
  ProductRequestScreen = 'ProductRequestScreen',
  ProductRequestSuccessScreen = 'ProductRequestSuccessScreen',
  SearchItemScreen = 'SearchItemScreen',
  DeliveryOptionsScreen = 'DeliveryOptionsScreen',
  OrderConfirmationScreen = 'Order/OrderConfirmationScreen',
  OrderHistoryScreen = 'Profile/OrderHistoryScreen',
  EmptyOrderScreen = 'EmptyOrderScreen',
  DetailedOrderScreen = 'Profile/DetailedOrderScreen',
  TestScreen = 'TestScreen',
  SavedAddressScreen = 'Order/SavedAddressScreen',
  PaymentSelectionScreen = 'PaymentSelectionScreen',
  PaymentGolomtScreen = 'PaymentGolomtScreen',
  HomeTab = 'HomeTab',
  CartScreenTab = 'CartScreenTab',
  CustomerSupportScreenTab = 'CustomerSupportScreenTab',
  OrderListTab = 'OrderListTab',
  CustomerChatScreen = 'CustomerSupport/CustomerChatScreen',
  CustomerHelpScreen = 'CustomerHelpScreen',
  Splash = 'Splash',
  MainRoot = 'MainRoot',
  CardInfoScreen = 'Order/CardInfoScreen',
  CardConfirmScreen = 'Order/CardConfirmScreen',
  CardSaveScreen = 'Order/CardSaveScreen',
  PaymentCardSelectionScreen = 'Order/PaymentCardSelectionScreen',
  CustomerFeedbackScreen = 'CustomerSupport/CustomerFeedbackScreen',
  ProfileAdditionalInformationScreen = 'Profile/ProfileAdditionalInformationScreen',
  ProfileScreenTab = 'ProfileScreenTab',
  Modal = 'Modal',
  AuthenticationHome = 'Auth',
  PhoneNumberRegistrationScreen = 'Auth/PhoneNumberRegistrationScreen',
  CodeVerificationScreen = 'Auth/CodeVerificationScreen',
  CustomerSupportStack = 'CustomerSupport',
  OrderStack = 'Order',
  ProfileStack = 'Profile',
  SavedCardScreen = 'SavedCardScreen',
  DetailedAddressesScreen = 'DetailedAddressesScreen',
  AboutScreenText = 'AboutScreenText',
  discountScreen = 'discountScreen',
  EditAddress = 'EditAddress',
  SignInDialog = 'Modal/SignInDialog',
  SuccessDialog = 'SuccessDialog',
  FunctionalDialog = 'FunctionalDialog',
  DynamicDialog = 'DynamicDialog',
  ConfirmDialog = 'ConfirmDialog',
  CreateOrder = 'createOrder',
  TermsAndConditionAgreeScreen = 'TermsAndConditionAgreeScreen',
  ChooseShop = 'ChooseShop',
  AddShop = 'AddShop',
  ChooseUserTypeScreen = 'ChooseUserTypeScreen',
  AllowNotificationScreen = 'AllowNotificationScreen',
  ShopStack = 'Shop',
  MyShops = 'MyShops',
  OnBoarding = 'Onboarding',
  AdminOrderStack = 'AdminOrderStack',
  NoProductScreen = 'NoProductScreen',
  OrderBarStack = 'OrderBarStack',
  ProductStack = 'ProductStack',
  AddProductScreen = 'AddProductScreen',
  AddProductDialog = 'AddProductDialog',
  ProductsScreen = 'ProductsScreen',
  AddShopName = 'AddShopName',
  AddShopLocationText = 'AddShopLocationText',
  AddShopLocationMap = 'AddShopLocationMap',
  AddActiveTime = 'AddActiveTime',
  CardDetail = 'CardDetail',
  StoreAdminMainRoot = 'StoreAdminMainRoot',
  AdminProductTab = 'AdminProductTab',
  AdminOrderTab = 'AdminOrderTab',
  AdminProductStack = 'AdminProductStack',
  OrderListStack = 'OrderListStack',
  AdminOrders = 'AdminOrders',
  AdminOrderDetails = 'AdminOrderDetails',
  AdminProfile = 'AdminProfile',
  AdminCategoryDetail = 'AdminCategoryDetail',
}
export interface NavigationPayload<T> {
  props: T;
}
export type NavigatorParamList = {
  [NavigationRoutes.Home]: NavigationPayload<{
    storeId: string;
  }>;
  [NavigationRoutes.Test]: NavigationPayload<any>;
  [NavigationRoutes.CartScreen]: NavigationPayload<any>;
  [NavigationRoutes.waitingOrderList]: NavigationPayload<any>;
  [NavigationRoutes.ForceUpdate]: NavigationPayload<any>;
  [NavigationRoutes.CategoryDetailsScreen]: NavigationPayload<any>;
  [NavigationRoutes.ProductDetailsScreen]: NavigationPayload<any>;
  [NavigationRoutes.OrderStatusScreen]: NavigationPayload<any>;
  [NavigationRoutes.EmptyOrderScreen]: NavigationPayload<any>;
  [NavigationRoutes.OrderList]: NavigationPayload<any>;
  [NavigationRoutes.ReceivedOrderList]: NavigationPayload<any>;
  [NavigationRoutes.LocationScreen]: NavigationPayload<any>;
  [NavigationRoutes.CustomerSupportScreen]: NavigationPayload<any>;
  [NavigationRoutes.TermsAndConditionScreen]: NavigationPayload<any>;
  [NavigationRoutes.TermsAndConditionAgreeScreen]: NavigationPayload<any>;
  [NavigationRoutes.OrderBarStack]: NavigationPayload<any>;
  [NavigationRoutes.CommonErrorDialog]: NavigationPayload<{
    title: string;
    description: string;
    retry: () => void;
  }>;
  [NavigationRoutes.ResendCodeDialog]: NavigationPayload<{
    title: string;
    description: string;
    retry: () => void;
  }>;
  [NavigationRoutes.TermsAndConditionDialog]: NavigationPayload<any>;
  [NavigationRoutes.AffirmRejectDialogScreen]: NavigationPayload<{
    title: string;
    description: string;
    onAffirm: () => void;
  }>;
  [NavigationRoutes.PhoneNumberRegistrationScreen]: NavigationPayload<{
    navigateTo: string;
  }>;
  [NavigationRoutes.CodeVerificationScreen]: NavigationPayload<{
    navigateTo: string;
  }>;
  [NavigationRoutes.LocationRequestScreen]: NavigationPayload<any>;
  [NavigationRoutes.LocationMappingScreen]: NavigationPayload<any>;
  [NavigationRoutes.LocationBlockscreen]: NavigationPayload<any>;
  [NavigationRoutes.ProductRequestScreen]: NavigationPayload<any>;
  [NavigationRoutes.ProductRequestSuccessScreen]: NavigationPayload<any>;
  [NavigationRoutes.SearchItemScreen]: NavigationPayload<any>;
  [NavigationRoutes.ProfileScreen]: NavigationPayload<any>;
  [NavigationRoutes.DeliveryOptionsScreen]: NavigationPayload<any>;
  [NavigationRoutes.OrderConfirmationScreen]: NavigationPayload<any>;
  [NavigationRoutes.OrderHistoryScreen]: NavigationPayload<any>;
  [NavigationRoutes.DetailedOrderScreen]: NavigationPayload<any>;
  [NavigationRoutes.TestScreen]: NavigationPayload<any>;
  [NavigationRoutes.SavedAddressScreen]: NavigationPayload<any>;
  [NavigationRoutes.PaymentSelectionScreen]: NavigationPayload<any>;
  [NavigationRoutes.PaymentGolomtScreen]: NavigationPayload<any>;
  [NavigationRoutes.MainRoot]: NavigationPayload<any>;
  [NavigationRoutes.Splash]: NavigationPayload<any>;
  [NavigationRoutes.CustomerChatScreen]: NavigationPayload<{
    conversationId: string;
  }>;
  [NavigationRoutes.CustomerSupportScreen]: NavigationPayload<any>;
  [NavigationRoutes.CustomerHelpScreen]: NavigationPayload<{
    orderId: string;
  }>;
  [NavigationRoutes.CardInfoScreen]: NavigationPayload<any>;
  [NavigationRoutes.CardConfirmScreen]: NavigationPayload<any>;
  [NavigationRoutes.CardSaveScreen]: NavigationPayload<any>;
  [NavigationRoutes.PaymentCardSelectionScreen]: NavigationPayload<any>;
  [NavigationRoutes.CustomerFeedbackScreen]: NavigationPayload<any>;
  [NavigationRoutes.ProfileAdditionalInformationScreen]: NavigationPayload<any>;
  [NavigationRoutes.AuthenticationHome]: NavigationPayload<any>;
  [NavigationRoutes.Modal]: NavigationPayload<any>;
  [NavigationRoutes.CustomerSupportStack]: NavigationPayload<any>;
  [NavigationRoutes.OrderStack]: NavigationPayload<any>;
  [NavigationRoutes.ProfileStack]: NavigationPayload<any>;
  [NavigationRoutes.discountScreen]: NavigationPayload<any>;
  [NavigationRoutes.SavedCardScreen]: NavigationPayload<any>;
  [NavigationRoutes.DetailedAddressesScreen]: NavigationPayload<any>;
  [NavigationRoutes.AboutScreenText]: NavigationPayload<any>;
  [NavigationRoutes.EditAddress]: NavigationPayload<{
    latitude: string;
    longitude: string;
  }>;
  [NavigationRoutes.SignInDialog]: NavigationPayload<{
    title: string;
    description: string;
    onPress: () => void;
  }>;
  [NavigationRoutes.SuccessDialog]: NavigationPayload<{
    title: string;
    description: string;
    onPress: () => void;
  }>;
  [NavigationRoutes.FunctionalDialog]: NavigationPayload<{
    children: any;
    onPress: () => void;
  }>;
  [NavigationRoutes.DynamicDialog]: NavigationPayload<{
    children: any;
    onPress: () => void;
  }>;
  [NavigationRoutes.ConfirmDialog]: NavigationPayload<{
    children: any;
    onPress: () => void;
  }>;
  [NavigationRoutes.ChooseShop]: NavigationPayload<any>;
  [NavigationRoutes.AddShop]: NavigationPayload<any>;
  [NavigationRoutes.ChooseUserTypeScreen]: NavigationPayload<any>;
  [NavigationRoutes.AllowNotificationScreen]: NavigationPayload<{
    onPress: () => void;
  }>;
  [NavigationRoutes.ShopStack]: NavigationPayload<any>;
  [NavigationRoutes.ProductStack]: NavigationPayload<any>;
  [NavigationRoutes.MyShops]: NavigationPayload<any>;
  [NavigationRoutes.OnBoarding]: NavigationPayload<any>;
  [NavigationRoutes.AdminOrderStack]: NavigationPayload<any>;
  [NavigationRoutes.ProductsScreen]: NavigationPayload<any>;
  [NavigationRoutes.AddProductScreen]: NavigationPayload<any>;
  [NavigationRoutes.AddProductDialog]: NavigationPayload<any>;
  [NavigationRoutes.NoProductScreen]: NavigationPayload<{
    storeId: string;
  }>;
  [NavigationRoutes.AddShopName]: NavigationPayload<any>;
  [NavigationRoutes.AddShopLocationText]: NavigationPayload<any>;
  [NavigationRoutes.AddShopLocationMap]: NavigationPayload<any>;
  [NavigationRoutes.AddActiveTime]: NavigationPayload<any>;
  [NavigationRoutes.CardDetail]: NavigationPayload<any>;
  [NavigationRoutes.StoreAdminMainRoot]: NavigationPayload<{}>;
  [NavigationRoutes.AdminProductTab]: NavigationPayload<any>;
  [NavigationRoutes.AdminOrderTab]: NavigationPayload<any>;
  [NavigationRoutes.AdminProductStack]: NavigationPayload<any>;
  [NavigationRoutes.OrderListStack]: NavigationPayload<any>;
  [NavigationRoutes.LocationInfoScreen]: NavigationPayload<any>;
  [NavigationRoutes.AdminOrders]: NavigationPayload<any>;
  [NavigationRoutes.AdminOrderDetails]: NavigationPayload<any>;
  [NavigationRoutes.LocationInfoScreen]: NavigationPayload<any>;
  [NavigationRoutes.AdminProfile]: NavigationPayload<any>;
  [NavigationRoutes.AdminCategoryDetail]: NavigationPayload<any>;
  [NavigationRoutes.CreateOrder]: NavigationPayload<any>;
};
