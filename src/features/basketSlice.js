import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  shipping: 0,
  grandTotal: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const { price,shipping } = action.payload;
      state.items.push(action.payload);
      state.totalPrice = Number((state.totalPrice + price).toFixed(2));
      state.shipping = Number((state.shipping + shipping).toFixed(2));
      state.grandTotal = Number((state.grandTotal + price).toFixed(2));
    },
    clearBasket: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.shipping = 0;
      state.grandTotal = 0;
    },
  },
});

export const selectItems = (state) => state.basket.items;
export const selectBasket = (state) => state.basket;

export const { addBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
