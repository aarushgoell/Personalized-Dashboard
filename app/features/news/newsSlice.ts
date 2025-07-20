import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (categories: string[]) => {
    const categoryQuery = categories.join(",");

    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${categoryQuery}&apiKey=fa6c71e4eb184470b100537dcbf8d910`
    );

    const data = await res.json();

    return data.articles;
  }
);

type initaltype = {
  article: Array<any>;
  status: string;
  error: null | string;
};

const initialState: initaltype = {
  article: [],
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.article = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error while fetching";
      });
  },
});

export default newsSlice.reducer;
