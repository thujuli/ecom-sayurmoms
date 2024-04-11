import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../types";

type CategoriesState = {
  categories: Category[];
};

const initialState: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
