import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/AppSlice";

const store = configureStore({
  reducer: {
    App: AppSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export const selectApp = (state) => state.App;

export { store };
