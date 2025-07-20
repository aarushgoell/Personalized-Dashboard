import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../features/theme/themeSlice";

import preferenceSlice from "../features/preferences/preferencesSlice";

import newsSlice from "../features/news/newsSlice";

const appStore = configureStore({
  reducer: {
    theme: themeSlice,
    preferences: preferenceSlice,
    news: newsSlice,
  },
});

export default appStore;
