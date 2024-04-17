"use client";

import { useAppDispatch } from "@/lib/hooks";
import { fetchCategoriesAsync } from "@/lib/features/categoriesSlice";
import { fetchFeaturedProductsAsync } from "@/lib/features/featuredProductsSlice";
import React, { useEffect } from "react";
import { setCart } from "@/lib/features/cartSlice";
import { Cart } from "@/lib/types";

type Props = {
  children: React.ReactNode;
};

export default function HomeTemplate(props: Props) {
  const dispatch = useAppDispatch();
  const { children } = props;

  useEffect(() => {
    const rawCart = localStorage.getItem("cart");

    if (rawCart) {
      const cart: Cart[] = JSON.parse(rawCart);
      dispatch(setCart(cart));
    } else {
      dispatch(setCart([]));
    }

    dispatch(fetchCategoriesAsync());
    dispatch(fetchFeaturedProductsAsync());
  }, [dispatch]);

  return <>{children}</>;
}
