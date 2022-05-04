import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.items.push(action.payload);
    },
    clearBasket: (state) => {
      state.items = [];
    },
  },
});

export const selectItems = (state) => state.basket.items;

export const { addBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
