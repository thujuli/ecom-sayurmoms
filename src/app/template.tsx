"use client";

import { getCategories } from "@/lib/data";
import { useAppDispatch } from "@/lib/hooks";
import { setCategories } from "@/lib/features/categoriesSlice";

import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

export default function HomeTemplate(props: Props) {
  const dispatch = useAppDispatch();
  const { children } = props;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categories = await getCategories();
    dispatch(setCategories(categories));
  };

  return <>{children}</>;
}
