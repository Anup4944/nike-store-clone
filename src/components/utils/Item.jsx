import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import {
  addItemtoCartReq,
  addItemToCart,
  openCartReq,
  openCart,
} from "../../redux/CartSlice";

const Item = ({
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
  ifExists,
}) => {
  const dispatch = useDispatch();

  const onCartOpen = () => {
    dispatch(openCartReq());
    dispatch(openCart(true));
  };

  const addToCart = () => {
    const item = { id, title, text, img, color, shadow, price };
    dispatch(addItemtoCartReq());
    dispatch(addItemToCart(item));
  };
  return (
    <div
      className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center 
      ${ifExists ? "justify-items-start" : "justify-items-center"}
       rounded-xl py-4 px-5 transition-all-700 ease-in-out w-full hover:scale-105`}
    >
      <div
        className={` grid  ${
          ifExists ? "justify-items-start" : "justify-items-center"
        }
 items-center`}
      >
        <h1 className="text-slate-200 lg:text-lg md:text-base font-medium filter drop-shadow">
          {title}
        </h1>
        <p className="text-slate-200 lg:text-lg md:text-sm font-normal filter drop-shadow">
          {text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80 px-1 rounded">
            <h1 className="text-black text-sm font-medium">${price}</h1>
          </div>
          <div className="flex items-center gap-1">
            {" "}
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <h1 className="text-sm font-normal md:text-sm text-slate-100">
              {rating}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-white-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          >
            <ShoppingBagIcon
              className="icon-style text-slate-900"
              onClick={() => addToCart()}
            />
          </button>
          <button
            type="button"
            className="bg-white-90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 text-sm text-black px-2 py-1"
            onClick={() => {
              onCartOpen();
              addToCart();
            }}
          >
            {btn}
          </button>
        </div>
      </div>
      <div
        className={`flex items-center       ${
          ifExists ? "absolute top-5 right-1" : "justify-center"
        }
`}
      >
        <img
          src={img}
          alt={`img/item-img/${id}`}
          className={`h-36 w-64 transitions-theme hover:-rotate-12       ${
            ifExists
              ? "h-auto w-64 lg:w-56 md:w-48 -rotate-[35deg]"
              : "h-36 w-64"
          }
          `}
        />
      </div>
    </div>
  );
};

export default Item;
