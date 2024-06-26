import categoriesReducer from "./features/categoriesSlice";
import featuredProductsReducer from "./features/featuredProductsSlice";
import cartSliceReducer from "./features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categoriesReducer,
      featuredProducts: featuredProductsReducer,
      cart: cartSliceReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
