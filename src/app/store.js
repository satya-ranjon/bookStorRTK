import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import bookReducer from "../features/books/bookSlice";

const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer, books: bookReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
