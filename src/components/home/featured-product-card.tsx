"use client";

import { useAppSelector } from "@/lib/hooks";
import { Product } from "@/lib/types";
import React, { useEffect, useState } from "react";
import CategoryButton from "./category-button";
import ProductCard from "../product-card";

const FeaturedProductCardWrapper = () => {
  const { data: categoriesData } = useAppSelector((state) => state.categories);
  const { data: featuredProductsData } = useAppSelector(
    (state) => state.featuredProducts,
  );

  const [categorySelected, setCategorySelected] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);

  useEffect(() => {
    const setStates = () => {
      const newCategories = categoriesData.map((category) => category.name);
      const newProductsByCategories = featuredProductsData.filter(
        (product) => product.acf.category.name === newCategories[0],
      );

      setFeaturedProducts(featuredProductsData);
      setProductsByCategory(newProductsByCategories);
      setCategories(newCategories);
      setCategorySelected(newCategories[0]);
    };

    setStates();
  }, [categoriesData, featuredProductsData]);

  const onHandleSelectCategory = (category: string) => {
    setCategorySelected(category);
    const newProductsByCategories = featuredProducts.filter(
      (product) => product.acf.category.name === category,
    );
    setProductsByCategory(newProductsByCategories);
  };

  return (
    <>
      {/* Select Category */}
      <div className="flex justify-center">
        <div className="no-scrollbar flex flex-nowrap gap-1 overflow-x-auto md:gap-3 lg:gap-4">
          {categories.map((category, idx) => (
            <CategoryButton
              key={idx}
              name={category}
              active={categorySelected}
              onClick={() => {
                onHandleSelectCategory(category);
              }}
            />
          ))}
        </div>
      </div>
      {/* Products */}
      <div className="flex justify-center">
        <div className="no-scrollbar flex flex-nowrap gap-[10px] overflow-x-auto md:gap-4 lg:gap-7 xl:gap-8">
          {productsByCategory.map((product) => (
            <ProductCard
              key={product.id}
              image={product.acf.image}
              price={Number(product.acf.price)}
              rating={parseFloat(product.acf.rating)}
              sold={Number(product.acf.sold)}
              title={product.title.rendered}
              discount={Number(product.acf.discount)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCardWrapper;
