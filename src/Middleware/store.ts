import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './reducer';

const customLogger = (store: any) => (next: (arg0: any) => any) => (action: any) => {
  console.log('Action fired:', action);
  return next(action);
};

const store = configureStore({
  reducer: counterReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customLogger, logger),
});

export default store;
