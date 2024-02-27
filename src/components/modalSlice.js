import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
  },
  reducers: {
    showModal: (state, action) => {
      state.showModal = !state.showModal;
    },
  },
});

export default modalSlice;
