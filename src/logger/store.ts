import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
