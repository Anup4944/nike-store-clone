import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isCartOpen: false,
  cartState: null,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    openCartReq: (state) => {
      state.isLoading = true;
      state.isCartOpen = true;
    },
    openCart: (state, action) => {
      state.isLoading = false;
      state.cartState = action.payload.cartState;
    },
    closeCart: (state, action) => {
      state.isLoading = false;
      state.isCartOpen = false;
      state.cartState = action.payload.cartState;
    },
  },
});

export const { openCartReq, openCart, closeCart } = CartSlice.actions;

export default CartSlice.reducer;
