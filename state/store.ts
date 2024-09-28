import { configureStore } from "@reduxjs/toolkit";
import { AIChatSlice } from "./slice";

const store = configureStore({
  reducer: {
    chat: AIChatSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
