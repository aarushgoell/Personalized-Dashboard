import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  mode: "light" | "dark";
};

const initialState: ThemeState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;
