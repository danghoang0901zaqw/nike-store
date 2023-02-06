import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItems } from "../redux/cartSlice";

const CartCount = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const amount=useSelector(state=>state.cart.cartAmount)
  const dispatch = useDispatch();
  const handleRemoveAllItems = () => {
    dispatch(removeAllItems());
  };
  return (
    <div className="flex px-3 bg-white sticky top-0 h-11 items-center justify-between">
      <div className="flex items-center gap-3 ">
        <div className="cursor-pointer" onClick={onClose}>
          <ChevronDoubleLeftIcon className="w-5 h-5" />
        </div>
        <div>
          <h1 className="flex items-center gap-2">
            Your Cart{" "}
            {cartItems.length > 0 && (
              <span className="bg-theme-cart px-1 py-0.5 rounded text-slate-100 text-xs font-normal ">
                ({amount} Items)
              </span>
            )}
          </h1>
        </div>
      </div>
      <div>
        <button className="bg-theme-cart p-0.5 " onClick={handleRemoveAllItems}>
          <XMarkIcon className="w-5 h-5 text-slate-100" />
        </button>
      </div>
    </div>
  );
};

export default CartCount;
