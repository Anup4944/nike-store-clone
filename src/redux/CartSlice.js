import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  isLoading: false,
  isCartOpen: false,
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    openCartReq: (state) => {
      state.isLoading = true;
    },
    openCart: (state, action) => {
      state.isLoading = false;
      state.isCartOpen = action.payload;
    },
    closeCart: (state, action) => {
      state.isCartOpen = action.payload;
    },
    addItemtoCartReq: (state) => {
      state.isLoading = true;
    },
    addItemToCart: (state, action) => {
      state.isLoading = false;

      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQty += 1;
        toast.success(`${action.payload.title} quantity increased`);
      } else {
        const temp = { ...action.payload, cartQty: 1 };
        state.cartItem.push(temp);
        toast.success(`${action.payload.title} added to cart`);
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    removeItemsFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );
      window.localStorage.setItem("cart", JSON.stringify(state.cartItem));
      toast.success(`${action.payload.title} removed from cart`);
    },
    increaseItemQty: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQty += 1;
        toast.success(`${action.payload.title} quantity increased`);
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    decreaseItemQty: (state, action) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItem[itemIndex].cartQty > 1) {
        state.cartItem[itemIndex].cartQty -= 1;
        toast.success(`${action.payload.title} quantity decreased`);
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    clearCartItems: (state, action) => {
      state.cartItem = [];
      toast.success(`Cart cleared`);
      window.localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
  },
});

export const {
  openCartReq,
  openCart,
  closeCart,
  addItemtoCartReq,
  addItemToCart,
  removeItemsFromCart,
  increaseItemQty,
  decreaseItemQty,
  clearCartItems,
} = CartSlice.actions;

export default CartSlice.reducer;
