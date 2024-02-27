import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";
const store = configureStore({
  reducer: { cart: cartSlice.reducer, modal: modalSlice.reducer },
});

export default store;
