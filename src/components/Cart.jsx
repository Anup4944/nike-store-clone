import React from "react";
import CartCount from "./cart/CartCount";
import CartEmpty from "./cart/CartEmpty";
import CartItem from "./cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCartItems, closeCart } from "../redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const { isCartOpen, cartItem } = useSelector((state) => state.cart);

  const onCartClose = () => {
    dispatch(closeCart(false));
  };

  const clear = () => {
    dispatch(clearCartItems());
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
        <CartCount
          onCartClose={onCartClose}
          isCartOpen={isCartOpen}
          cartItem={cartItem}
          clear={clear}
        />

        {cartItem?.length === 0 ? (
          <CartEmpty onCartClose={onCartClose} />
        ) : (
          <div>
            <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
              {cartItem?.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                  000
                </h1>
              </div>
              <div className="grid items-center gap-2 ">
                <p className="text-sm font-md text-center">
                  Taxes and Shipping will calculate at shipping
                </p>
                <button
                  type="button"
                  className="button-theme bg-theme-cart text-white"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
