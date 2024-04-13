import { getFeaturedProducts } from "../data";
import { Product } from "../types";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

type FeaturedProductsState = {
  data: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: FeaturedProductsState = {
  data: [],
  loading: true,
  error: null,
};

export const fetchFeaturedProductsAsync = createAsyncThunk(
  "featuredProducts/fetchFeaturedProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getFeaturedProducts();
      return response;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue("An unknown error occurred");
    }
  },
);

const FeaturedProductsSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProductsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFeaturedProductsAsync.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchFeaturedProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default FeaturedProductsSlice.reducer;
