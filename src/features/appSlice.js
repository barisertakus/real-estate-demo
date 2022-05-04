import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en",
  account: {
    email: "",
    password: "",
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      state.account = { email, password };
    },
    logout: (state, action) => {
      state.account.email = "";
      state.account.password = "";
    },
  },
});

export const selectLanguage = (state) => state.app.language;

export const { changeLanguage, login, logout } = appSlice.actions;
export default appSlice.reducer;
