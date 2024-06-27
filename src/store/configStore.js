import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { thunk } from "redux-thunk";

export const configStore = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk)
})