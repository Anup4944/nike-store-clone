import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptybag from "../../assets/emptybag.png";

const CartEmpty = ({ onCartClose }) => {
  return (
    <div className="flex items-center justify-center flex-col px-11 h-screen text-center gap-7">
      <img
        src={emptybag}
        alt="empty/bag"
        className="w-40 lg:wd-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
      />
      <button
        type="button"
        className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110 "
        onClick={onCartClose}
      >
        <ArrowLeftIcon className="w-5 h-5 text-slate-900" />
        <span className="">Back to Nike Store</span>
      </button>
    </div>
  );
};

export default CartEmpty;
