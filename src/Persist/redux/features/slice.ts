// src/features/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer; // حتما کاهش‌دهنده را به عنوان export پیش‌فرض صادر کنید
