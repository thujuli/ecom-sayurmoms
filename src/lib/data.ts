import { Banner, Carousel, Category, Product } from "./types";

export const getCarousels = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/carousels?_fields=id,title,acf&acf_format=standard&orderby=date&order=desc",
  );

  if (!res.ok) throw new Error("Failed to fetch carousels");

  const data: Carousel[] = await res.json();
  return data;
};

export const getCategories = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/product-categories?_fields=id,name,description,acf&acf_format=standard&orderby=id&order=desc",
  );

  if (!res.ok) throw new Error("Failed to fetch categories");

  const data: Category[] = await res.json();
  return data;
};

export const getFeaturedProducts = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/featured-products?_fields=id,title,acf&acf_format=standard&orderby=date&order=desc&per_page=32",
  );

  if (!res.ok) throw new Error("Failed to fetch featured products");

  const data: Product[] = await res.json();
  return data;
};

export const getBanner = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_WP_API_URL +
      "/banners?_fields=id,title,acf&acf_format=standard&orderby=date&order=desc&per_page=1",
  );

  if (!res.ok) throw new Error("Failed to fetch banner");

  const data: Banner[] = await res.json();
  return data[0];
};
