import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCloseCart, setTotalAmount } from "../redux/cartSlice";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector((state) => state.cart.cartState);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const handleCloseCart = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
    dispatch(setTotalAmount())
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cartItems.reduce(
        (subTotal, item) => (subTotal += +item.price * item.quantity),
        0
      )
    );
  }, [cartItems]);
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen z-[9900] ${
        ifCartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      } `}
    >
      <div
        className={`blur-effect-theme absolute right-0 h-screen max-w-xl w-full  `}
      >
        <CartCount onClose={handleCloseCart} />
        {cartItems.length === 0 ? (
          <CartEmpty />
        ) : (
          <div>
            <div className="mt-5 overflow-auto flex flex-col gap-7 h-[80vh] scroll-smooth scroll-hidden">
              {cartItems.map((item, index) => (
                <CartItem key={index} item={item} />
              ))}
            </div>
            <div className="flex items-center justify-center flex-col px-5 py-2 gap-2 bg-white absolute bottom-0 w-full">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-slate-900 font-semibold">SUBTOTAL</h1>
                <p className="bg-theme-cart text-slate-100 px-2 rounded">
                  ${total}
                </p>
              </div>
              <div>
                <h1 className="text-sm font-medium text-center">
                  Tax and Shipping Will Caculate At Shipping
                </h1>
              </div>
              <div className="w-full">
                <button className="w-full py-1  bg-theme-cart text-slate-100 rounded ">
                  Checkout
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
