import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], totalQty: 0, totalPrice: 0 };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Check if the item already exists in the cart
            const cartItem = action.payload;
            const existing = state.cart.find((p) => p.id === cartItem.id);
            if (existing) {
                existing.quantity++;
                existing.priceSum += cartItem.price;
            } else {
                state.cart.push({...cartItem, quantity: 1, priceSum: cartItem.price });
            }
            state.totalQty++;
            state.totalPrice += cartItem.price;
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const removedItem = state.cart.find((p) => p.id === id);
            state.cart = state.cart.filter((p) => p.id !== id);
            state.totalQty -= removedItem.quantity;
            state.totalPrice -= removedItem.priceSum;

            if (removedItem) {
                state.totalPrice -= removedItem.priceSum;
            }
        },

        reduceQty: (state, action) => {
            const id = action.payload;
            const item = state.cart.find((p) => p.id === id);
            if (item) {
                state.totalPrice -= item.price;
                state.totalQty--;
                item.priceSum -= item.price;
                if (item.quantity === 1) {
                    state.cart = state.cart.filter((p) => p.id !== id);
                } else {
                    item.quantity--;
                }
            }
        },

        increaseQty: (state, action) => {
            const id = action.payload;
            const item = state.cart.find((p) => p.id === id);
            if (item) {
                state.totalPrice += item.price;
                state.totalQty++;
                item.priceSum += item.price;
                item.quantity++;
            }
        },
    },
});

export default cartSlice;
export const { addToCart, removeFromCart, reduceQty, increaseQty } =
cartSlice.actions;