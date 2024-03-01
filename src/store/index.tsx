import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { foodApi } from "../services/foodApi";
import articleSlice from "./articleSlice";

const store = configureStore({
  reducer: {
    [foodApi.reducerPath]: foodApi.reducer,
    article: articleSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(foodApi.middleware),
});

setupListeners(store.dispatch);

export default store

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

