import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./reducer/productSlice";
import cartReducer from "./reducer/cartSlice";
import categoryReducer from "./reducer/categorySlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    category: categoryReducer,
  },
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(logger);
  // },
});
export default store;
