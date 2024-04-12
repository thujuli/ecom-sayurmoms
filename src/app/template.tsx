"use client";

import { useAppDispatch } from "@/lib/hooks";
import { fetchCategoriesAsync } from "@/lib/features/categoriesSlice";
import { fetchFeaturedProductsAsync } from "@/lib/features/featuredProductsSlice";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function HomeTemplate(props: Props) {
  const dispatch = useAppDispatch();
  const { children } = props;

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    dispatch(fetchFeaturedProductsAsync());
  }, [dispatch]);

  return <>{children}</>;
}
