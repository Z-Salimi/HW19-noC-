import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: {
    data: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
