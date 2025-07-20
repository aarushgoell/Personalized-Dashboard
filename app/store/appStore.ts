import { configureStore } from "@reduxjs/toolkit";

import themeSlice from "../features/theme/themeSlice";

const appStore = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default appStore;
