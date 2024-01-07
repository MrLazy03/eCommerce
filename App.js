import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import FlashMessage from 'react-native-flash-message';
import {store, persistor} from './src/store';
import AppNavigation from './src/navigation/AppNavigation';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <StatusBar
              backgroundColor="rgba(42,77,208,1)"
              barStyle={'light-content'}
            />
            <AppNavigation />
            <FlashMessage position="top" />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
