import { createClient } from "contentful";

const createContentClient = () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE || "",
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
  });
};

const client = createContentClient();

const getEntriesByType = async (type: string) => {
  try {
    const response = await client.getEntries({ content_type: type });
    return response.items;
  } catch (error) {
    console.error(error);
  }
};

export const getCarousel = async () => {
  try {
    const response = await getEntriesByType("carousel");
    const carousel = response?.map((item: any) => item.fields);
    return carousel;
  } catch (error) {
    console.error(error);
  }
};

export const getBanner = async () => {
  try {
    const response = await getEntriesByType("banner");
    const banner = response?.map((item: any) => item.fields);
    return banner;
  } catch (error) {
    console.error(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await getEntriesByType("categories");
    const categories = response?.map((category) => category.fields);
    return categories;
  } catch (error) {
    console.error(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await getEntriesByType("products");
    const products = response?.map((product) => product.fields);
    return products;
  } catch (error) {
    console.error(error);
  }
};
