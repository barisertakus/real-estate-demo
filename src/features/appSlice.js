import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
};

const stationSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const selectLanguage = (state) => state.app.language;

export const { changeLanguage } = stationSlice.actions;
export default stationSlice.reducer;
