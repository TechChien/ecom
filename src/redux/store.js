import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducer/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});
export default store;
