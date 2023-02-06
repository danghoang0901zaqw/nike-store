import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart-items")
    ? JSON.parse(localStorage.getItem("cart-items"))
    : [],
  cartAmount: localStorage.getItem("amount-items")
    ? JSON.parse(localStorage.getItem("amount-items"))
    : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    addItems: (state, action) => {
      const newItem = action.payload;
      const indexItem = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (indexItem >= 0) {
        state.cartItems[indexItem] = {
          ...state.cartItems[indexItem],
          quantity: (state.cartItems[indexItem].quantity += 1),
        };
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    deleteItems: (state, action) => {
      const deleteItem = action.payload;
      const newItem = [...state.cartItems];
      state.cartItems = newItem.filter((x) => x.id !== deleteItem);
      console.log(state.cartItems);
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    increaseItems: (state, action) => {
      const itemUpdate = action.payload;
      const indexItem = state.cartItems.findIndex(
        (x) => x.id === itemUpdate.id
      );
      state.cartItems[indexItem].quantity =
        state.cartItems[indexItem].quantity + 1;
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    decreaseItems: (state, action) => {
      const itemUpdate = action.payload;
      const indexItem = state.cartItems.findIndex(
        (x) => x.id === itemUpdate.id
      );
      state.cartItems[indexItem].quantity =
        state.cartItems[indexItem].quantity === 1
          ? 1
          : state.cartItems[indexItem].quantity - 1;
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    removeAllItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart-items", JSON.stringify(state.cartItems));
    },
    setTotalAmount: (state) => {
      state.cartAmount = state.cartItems.reduce(
        (totalAmount, item) => (totalAmount += item.quantity),
        0
      );
      localStorage.setItem("amount-items", JSON.stringify(state.cartAmount));
    },
  },
});
export const {
  setOpenCart,
  setCloseCart,
  addItems,
  deleteItems,
  increaseItems,
  decreaseItems,
  removeAllItems,
  setTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
