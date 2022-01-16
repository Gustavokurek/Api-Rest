import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'API-Consumo',
      storage,
      whitelist: ['Auth'],
    },
    reducers
  );

  return persistedReducers;
};
