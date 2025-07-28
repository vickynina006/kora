import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../reduxSlice/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
