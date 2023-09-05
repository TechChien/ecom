import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});
export default store;
