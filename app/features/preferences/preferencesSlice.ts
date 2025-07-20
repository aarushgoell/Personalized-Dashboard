import { createSlice } from "@reduxjs/toolkit";

type catCheck = {
  categories: string[];
};

const initialState: catCheck = {
  categories: [],
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = preferencesSlice.actions;

export default preferencesSlice.reducer;
