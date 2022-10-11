import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { isCartOpen } = useSelector((state) => state.cart);

  const onCartClose = () => {
    dispatch(closeCart());
  };
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250] ${
        isCartOpen
          ? "opacity-1oo visible transform-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
      >
        <CartCount onCartClose={onCartClose} isCartOpen={isCartOpen} />
        <CartEmpty />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
