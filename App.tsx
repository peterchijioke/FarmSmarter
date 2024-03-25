import {View, Text} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';

import {Provider} from 'react-redux';
import {store} from './src/app/store';

import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {ToastProvider} from 'react-native-toast-notifications';

const persistor = persistStore(store);

type Props = {};

const App = (props: Props) => {
  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
};

export default App;
