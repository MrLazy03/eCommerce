import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'eCommerce',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const customMiddleware = [];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customMiddleware),
  devTools: __DEV__,
});

export const persistor = persistStore(store);
