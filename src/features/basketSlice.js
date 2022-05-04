import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const selectItems = (state) => state.basket.items;

export const { addBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
