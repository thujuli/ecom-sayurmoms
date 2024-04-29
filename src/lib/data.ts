import {
  getBanner,
  getCarousel,
  getCategories,
  getProducts,
} from "./contentful";
import { Carousel, Category, Product } from "./types";

export const fetchCategories = async () => {
  const response: any = await getCategories();
  const newResponse: Category[] = response.map((category: any) => {
    return {
      title: category.title,
      description: category.description,
      image: "https:" + category.image.fields.file.url,
    };
  });

  return newResponse;
};

export const fetchProducts = async () => {
  const response: any = await getProducts();
  const newResponse: Product[] = response.map((product: any) => {
    return {
      title: product.title,
      sku: product.sku,
      category: product.category.fields.title,
      image: "https:" + product.image.fields.file.url,
      price: product.price,
      sold: product.sold,
      rating: product.rating,
      discount: product.discount,
    };
  });

  return newResponse;
};

export const fetchBanner = async () => {
  const response: any = await getBanner();
  const { title, image } = response[0];

  return {
    title,
    image: "https:" + image.fields.file.url,
  };
};

export const fetchCarousel = async () => {
  const response: any = await getCarousel();
  const newResponse: Carousel[] = response.map((carousel: any) => {
    return {
      title: carousel.title,
      image: "https:" + carousel.image.fields.file.url,
      link: carousel.link,
    };
  });

  return newResponse;
};
