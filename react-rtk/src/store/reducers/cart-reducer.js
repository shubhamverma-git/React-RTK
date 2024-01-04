import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [] },
  reducers: {
    addItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
