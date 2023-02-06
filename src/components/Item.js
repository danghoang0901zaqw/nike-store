import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addItems, setTotalAmount } from "../redux/cartSlice";

const Item = ({ isExists, ...item }) => {
  const dispatch = useDispatch();
  const handleAddItems = () => {
    dispatch(
      addItems({
        id: item.id,
        title: item.title,
        text: item.text,
        rating: item.rating,
        img: item.img,
        price: item.price,
        color: item.color,
        shadow: item.shadow,
        quantity: 1,
      })
    );
    dispatch(setTotalAmount())
  };
  return (
    <>
      <div
        className={`grid bg-gradient-to-b relative py-4 px-5 rounded-xl transition-all ease-in-out duration-700 w-full hover:scale-105  ${
          item.color
        } ${item.shadow} ${
          isExists ? "justify-items-start" : "justify-items-center"
        }`}
      >
        <div className={`flex flex-col items-center justify-center`}>
          <div
            className={`flex flex-col justify-center ${
              isExists ? "items-start" : "items-center"
            } `}
          >
            <h1 className="text-slate-200 text-xl font-medium filter drop-shadow">
              {item.title}
            </h1>
            <p className="text-slate-200 text-base font-normal   filter drop-shadow">
              {item.text}
            </p>
            <div className="flex items-center justify-between w-28">
              <div className="flex items-center bg-white/80 px-1 rounded">
                <h1 className="text-black text-sm font-medium ">
                  $ {item.price}
                </h1>
              </div>
              <div className="flex items-center justify-center gap-1 my-2">
                <StarIcon className="icon-style text-slate-200 w-5 h-5" />
                <h1 className="text-slate-200 text-sm font-normal ">
                  {item.rating}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <button
                onClick={handleAddItems}
                className="bg-white/80 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200 "
              >
                <ShoppingBagIcon className="icon-style text-slate-900" />
              </button>
              <button className="bg-white/80 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black">
                {item.btn}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`mt-2 flex items-center ${
            isExists ? "absolute top-5 right-1 " : "justify-center"
          }`}
        >
          <img
            className={`transitions-theme duration-300 hover:-rotate-[12deg] ${
              isExists ? "-rotate-[35deg] h-auto w-64 " : "h-36 w-64 "
            } `}
            src={item.img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Item;
