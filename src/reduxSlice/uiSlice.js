import { createSlice } from "@reduxjs/toolkit";

const initialState = { showCart: false };
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleShowCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});
export const { toggleShowCart } = uiSlice.actions;
export default uiSlice;
