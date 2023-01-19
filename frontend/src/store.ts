import { configureStore } from "@reduxjs/toolkit";
import { getAllStockDetailsReducer } from "./pages/LandingPage/slices/listingSlice";

export const store = configureStore({
  reducer: {
    stockDetails: getAllStockDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
