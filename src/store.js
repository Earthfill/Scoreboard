import { configureStore } from "@reduxjs/toolkit";
import scoresReducer from './features/scoresSlice';

export const store = configureStore({
  reducer: {
    scores: scoresReducer,
  }
})