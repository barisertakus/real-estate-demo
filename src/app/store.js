import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import basketReducer from "../features/basketSlice";
export const store = configureStore({
  reducer: {
    app: appReducer,
    basket: basketReducer,
  },
});
