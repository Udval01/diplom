import React from 'react';
import 'react-native-gesture-handler';
import {RootNavigationContainer} from './navigation';
import {Theme} from './components';
import {AuthProvider} from './contexts/auth';
import {ShoppingCartProvider} from './contexts/cart';

const App = () => {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <Theme>
          <RootNavigationContainer />
        </Theme>
      </ShoppingCartProvider>
    </AuthProvider>
  );
};

export default App;
