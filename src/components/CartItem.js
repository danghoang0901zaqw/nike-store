import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseItems,
  deleteItems,
  increaseItems,
  setTotalAmount,
} from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleDeleteItem = (id) => {
    dispatch(deleteItems(id));
    dispatch(setTotalAmount())
  };
  const handleIncreaseItem = (item) => {
    setQuantity((prev) => prev + 1);
    dispatch(
      increaseItems({
        ...item,
        quantity,
      })
    );
    dispatch(setTotalAmount());
  };
  const handleDecreaseItem = (item) => {
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    dispatch(
      decreaseItems({
        ...item,
        quantity,
      })
    );
    dispatch(setTotalAmount());
  };

  return (
    <div className="flex items-center justify-between px-5 w-full gap-3">
      <div className="flex items-center gap-5">
        <div
          className={`bg-gradient-to-b ${item.color} ${item.shadow} p-3 rounded relative hover:scale-105 transition-all duration-300 ease-in-out `}
        >
          <img src={item.img} alt="" className="w-36 object-cover" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex justify-centet items-start flex-col ">
            <h1 className="font-medium text-lg text-slate-900">{item.title}</h1>
            <p className="text-sm text-slate-800">{item.text}</p>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={() => handleDecreaseItem(item)}
              className="bg-theme-cart w-5 h-5 text-slate-100 text-sm cursor-pointer rounded flex items-center justify-center"
            >
              <MinusIcon className="w-5 h-5" />
            </button>
            <div className="bg-theme-cart w-5 h-5 text-slate-100 text-sm cursor-pointer rounded flex items-center justify-center">
              {item.quantity}
            </div>
            <button
              onClick={() => handleIncreaseItem(item)}
              className="bg-theme-cart w-5 h-5 text-slate-100 text-sm cursor-pointer rounded flex items-center justify-center"
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="flex items-center justify-center  ">
          <h1 className="text-lg text-slate-900 font-medium ">
            ${item.price * item.quantity}
          </h1>
        </div>
        <div className="">
          <button
            className="flex items-center justify-center  rounded p-1 bg-theme-cart "
            onClick={() => handleDeleteItem(item.id)}
          >
            <TrashIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
