import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/Counter/counterSlice.js";
import redditReducer from "../store/redditSlice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    reddit: redditReducer
  }
})