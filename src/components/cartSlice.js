import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productId: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.productId = [action.payload, ...state.productId];
    },
    removeFromCart: (state, action) => {
      const index = state.productId.indexOf(action.payload);
      state.productId.splice(index, 1);
    },
    clearAll: (state, action) => {
      state.productId = [];
    },
  },
});

export default cartSlice;
