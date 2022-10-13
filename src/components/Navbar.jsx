import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { openCartReq, openCart } from "../redux/CartSlice";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();

  const { cartItem } = useSelector((state) => state.cart);

  const onCartOpen = () => {
    dispatch(openCartReq());
    dispatch(openCart(true));
  };

  const onScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <header
      className={
        !navState
          ? `absolute top-7 left-0 right-0 opacity-100 z-50`
          : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[100] blur-effect-theme"
      }
    >
      <nav className="flex items-center justify-between nike-container">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo/img"
            className={`w-16 h-auto  ${navState && "filter brightness-0"}`}
          />
        </div>

        <ul className="flex items-center justify-center gap-2">
          <li className="grid items-center">
            <MagnifyingGlassCircleIcon
              className={`icon-style ${navState && "filter brightness-0"}`}
            />
          </li>
          <li className="grid items-center">
            <HeartIcon
              className={`icon-style ${navState && "filter brightness-0"}`}
            />
          </li>
          <li className="grid items-center relative">
            <button className="border-none outline-none active:scale-110 transition-all duration-300 relative">
              <ShoppingCartIcon
                className={`icon-style ${
                  navState && "filter brightness-0 text-white"
                }`}
                onClick={onCartOpen}
              />
            </button>
            <div
              className={`absolute top-3.5 right-0  text-slate-900 shadow  w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                navState
                  ? "bg-slate-900 text-sky-100 shadow-slate-900"
                  : "bg-slate-100 text-sky-900 shadow-slate-100"
              }`}
            >
              {cartItem.length}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
