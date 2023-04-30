import React from 'react';
import 'react-native-gesture-handler';
import {RootNavigationContainer} from './navigation';
import {Theme} from './components';
import {AuthProvider} from './contexts/auth';
import {ShoppingCartProvider} from './contexts/cart';
import {DeliveryOptionProvider} from './contexts/delivery';

const App = () => {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <DeliveryOptionProvider>
          <Theme>
            <RootNavigationContainer />
          </Theme>
        </DeliveryOptionProvider>
      </ShoppingCartProvider>
    </AuthProvider>
  );
};

export default App;
