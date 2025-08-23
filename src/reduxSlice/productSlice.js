import { createSlice } from "@reduxjs/toolkit";
import products from "../data/product";

const initialState = {
  product: products,
  searchTerm: "",
  filteredProducts: products,
  currentCategory: "all",
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    runSearch: (state) => {
      state.filteredProducts = state.product.filter((p) => {
        const matchCategory =
          state.currentCategory === "all"
            ? true
            : p.category === state.currentCategory;
        const matchSearch =
          state.searchTerm.trim() === ""
            ? true
            : p.name.toLowerCase().includes(state.searchTerm.toLowerCase());
        return matchCategory && matchSearch;
      });
    },
  },
});

export const { setProduct, setSearchTerm, setCurrentCategory, runSearch } =
  productSlice.actions;
export default productSlice;
