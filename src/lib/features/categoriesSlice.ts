import { Category } from "../types";
import { fetchCategories } from "../data";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type CategoriesState = {
  data: Category[];
  loading: boolean;
  error: string | null;
};

const initialState: CategoriesState = {
  data: [],
  loading: true,
  error: null,
};

// Create an async thunk for fetching categories
export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await fetchCategories();
      return categories;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue("An unknown error occurred");
    }
  },
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.data = action.payload;
          state.loading = false;
        },
      )
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default categoriesSlice.reducer;
