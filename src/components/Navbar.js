import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import { setOpenCart } from "../redux/cartSlice";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.cartAmount);
  console.log(totalQuantity)
  const dispatch = useDispatch();
  const handleOpenCart = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  const handleScroll = () => {
    setNavActive(window.scrollY > 30);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`opacity-100 z-[999] flex items-center justify-center ${
        navActive
          ? "sticky top-0 bg-slate-100 blur-effect-theme h-[8vh]"
          : "absolute top-0 h-[8vh] right-0 left-0 "
      }`}
    >
      <nav className="nike-container flex items-center justify-between">
        <div>
          <img
            src={logo}
            alt=""
            className={`w-16 h-auto object-cover ${
              navActive ? "filter brightness-0" : ""
            }`}
          />
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="flex items-center justify-center">
            <MagnifyingGlassIcon
              className={`icon-style ${navActive && "text-slate-900"}`}
            />
          </li>
          <li className="flex items-center justify-center">
            <HeartIcon
              className={`icon-style ${navActive && "text-slate-900"}`}
            />
          </li>
          <li
            className="flex items-center justify-center"
            onClick={handleOpenCart}
          >
            <button className="border-none outline-none relative">
              <ShoppingBagIcon
                className={`icon-style ${navActive && "text-slate-900 "}`}
              />
              {totalQuantity > 0 ? (
                <div
                  className={`absolute top-[-5px] right-[-5px] shadow w-4 h-4 text-xs leading-tight font-medium rounded-full flex items-center justify-center ${
                    navActive
                      ? "bg-green-500 text-slate-100 shadow-slate-900"
                      : "bg-green-500 text-slate-100 shadow-slate-100"
                  }`}
                >
                  {totalQuantity}
                </div>
              ) : (
                ""
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
