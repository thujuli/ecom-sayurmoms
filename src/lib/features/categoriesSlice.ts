import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../types";
import { getCategories } from "../data";

// Assuming you have a function to fetch categories from an API
// This function should return a promise that resolves with the categories data
const fetchCategories = async (): Promise<Category[]> => {
  const response = await getCategories();
  return response;
};

type CategoriesState = {
  categories: Category[];
  loading: boolean;
  error: string | null;
};

const initialState: CategoriesState = {
  categories: [],
  loading: false,
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
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
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
          state.categories = action.payload;
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
