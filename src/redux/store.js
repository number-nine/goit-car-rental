import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';

// import contactsReducer from './contactsSlice';
// import filterReducer from './filterSlice';
// import authReducer from './authSlice';
import vehiclesReducer from './vehiclesSlice';

const rootReducer = combineReducers({
  // contacts: contactsReducer,
  // filter: filterReducer,
  // auth: authReducer,
  vehicles: vehiclesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);