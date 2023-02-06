import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import empty from "../assets/images/emptybag.png";
import { setCloseCart } from "../redux/cartSlice";

const CartEmpty = () => {
  const dispatch=useDispatch()
  const handleBackStore=()=>{
      dispatch(setCloseCart({
        cartState:false
      }))
  }
  return (
    <div className="flex items-center justify-center flex-col h-screen gap-7">
      <div>
        <img
          src={empty}
          className="w-40 object-fill transition-all duration-300"
          alt=""
        />
      </div>
      <div>
        <button onClick={handleBackStore} className="flex items-center justify-center  text-slate-900 button-theme bg-gradient-to-b from-amber-500 to-orange-500  shadow-lg py-2 px-5 font-semibold text-sm  gap-3  ">
          <ArrowLeftIcon className="w-5 h-5 " />
          <span>Back to Nike store</span>
        </button>
      </div>
    </div>
  );
};

export default CartEmpty;
