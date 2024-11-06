import { configureStore } from "@reduxjs/toolkit";
import { redu } from "./CountSlice";
import logger from "./logger";

export const store = configureStore({
  reducer: { counter: redu },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
