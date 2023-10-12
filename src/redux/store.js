import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { psReducer } from "@/layouts/Header/slice";
import { uiReducer } from "@/slices";

export const store = configureStore({
  reducer: {
    psData: psReducer,
    ui: uiReducer,
  },
  middleware: [logger],
});
