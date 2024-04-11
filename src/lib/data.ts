import { Carousel, Category } from "./types";

export const getCarousels = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/carousels?_fields=id,title,acf&acf_format=standard&orderby=id&order=desc",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Carousel[] = await res.json();
  return data;
};

export const getCategories = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/product-categories?_fields=id,name,description,acf&acf_format=standard&orderby=id&order=desc",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Category[] = await res.json();
  return data;
};
