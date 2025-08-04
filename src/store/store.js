import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reduxSlice/productSlice";
import uiSlice from "../reduxSlice/uiSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    ui: uiSlice.reducer,
  },
});
