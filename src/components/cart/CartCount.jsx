import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = ({ onCartClose, cartItem, clear }) => {
  return (
    <div className="bg-white h-11 flex items-center justify-between px-3 sticky top-0 left-0 right-0 w-full">
      <div className="flex items-center gap-3">
        <div className="grid items-center">
          <ChevronDoubleLeftIcon
            className="w-5 h-5 cursor-pointer text-slate-900 hover:text-orange-500 stroke-[2]"
            onClick={onCartClose}
          />
        </div>
        <div className="grid items-center ">
          <h1 className="text-base font-md text-slate-900">
            Your Cart{" "}
            <span className="bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">
              ({cartItem.length} Items)
            </span>
          </h1>
        </div>
      </div>
      <div className="flex items-center rounded bg-theme-cart active:scale-90 p-0.5">
        <button type="button">
          <XMarkIcon
            className="w-5 h-5 text-white stroke-[2]"
            onClick={clear}
          />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
