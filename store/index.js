import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./coounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
