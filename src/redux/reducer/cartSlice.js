import { faAnchorLock } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      productId: 12,
      amount: 2,
    },
    {
      productId: 7,
      amount: 1,
    },
    {
      productId: 9,
      amount: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteCart: (state, action) => {
      return {
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    },
    addCart: (state, action) => {
      state.items.push({ ...action.payload });
    },
    updateCartItemAmount: (state, action) => {
      console.log(action);
      const { productId, amount } = action.payload;
      const findItem = state.items.find((item) => item.productId === productId);
      if (findItem) {
        findItem.amount = amount;
      }
    },
  },
});

export default cartSlice.reducer;
export const { deleteCart, addCart, updateCartItemAmount } = cartSlice.actions;
