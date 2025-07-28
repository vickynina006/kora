import { createSlice } from "@reduxjs/toolkit";
import products from "../data/product";

const initialState = { product: products };
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice;
