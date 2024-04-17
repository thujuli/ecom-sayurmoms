import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../types";

type CartState = {
  data: Cart[];
};

const initialState: CartState = {
  data: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
