// // src/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';  // وارد کردن کاهش‌دهنده (reducer)

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, counterReducer); // استفاده از کاهش‌دهنده (reducer)

// export const store = configureStore({
//   reducer: {
//     counter: persistedReducer, // استفاده از کاهش‌دهنده (reducer) پایدار شده
//   },
// });

// export const persistor = persistStore(store);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
