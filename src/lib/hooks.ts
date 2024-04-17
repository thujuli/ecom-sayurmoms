import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "./store";
import { useState } from "react";
import { Cart } from "./types";
import { setCart } from "./features/cartSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useCounter = (initialCounter: number, price: number) => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.cart);
  const [counter, setCounter] = useState(initialCounter);
  const [total, setTotal] = useState(price * initialCounter);

  const handleIncrement = (
    isUpdateGlobalState: boolean = false,
    indexOfItem: null | number = null,
  ) => {
    const totalCounter = counter + 1;

    setCounter(totalCounter);
    setTotal(price * totalCounter);

    if (isUpdateGlobalState && indexOfItem !== null) {
      const newCart = [...data];

      const updatedProductQty: Cart = {
        ...newCart[indexOfItem],
        qty: newCart[indexOfItem].qty + 1,
      };

      newCart[indexOfItem] = updatedProductQty;
      dispatch(setCart(newCart));
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const handleDecrement = (
    isUpdateGlobalState: boolean = false,
    indexOfItem: null | number = null,
  ) => {
    const totalCounter = counter - 1;

    setCounter(totalCounter);
    setTotal(price * totalCounter);

    if (isUpdateGlobalState && indexOfItem !== null) {
      const newCart = [...data];

      const updatedProductQty: Cart = {
        ...newCart[indexOfItem],
        qty: newCart[indexOfItem].qty - 1,
      };

      newCart[indexOfItem] = updatedProductQty;
      dispatch(setCart(newCart));
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return {
    counter,
    setCounter,
    total,
    setTotal,
    handleIncrement,
    handleDecrement,
  };
};
