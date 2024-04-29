"use client";

import { useAppSelector } from "@/lib/hooks";
import { Product } from "@/lib/types";
import React, { useEffect, useState } from "react";
import CategoryButton, { CategoryButtonLoading } from "./category-button";
import { ProductCardLoading } from "../product-card";
import ProductCardWrapper from "../product-card-wrapper";

const FeaturedProductCardWrapper = () => {
  const { data: categoriesData, loading: loadingCategories } = useAppSelector(
    (state) => state.categories,
  );
  const { data: featuredProductsData, loading: loadingFeaturedProducts } =
    useAppSelector((state) => state.featuredProducts);

  const [categorySelected, setCategorySelected] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<Product[]>([]);

  useEffect(() => {
    const setStates = () => {
      const newCategories = categoriesData.map((category) => category.title);

      const newProductsByCategories = featuredProductsData.filter(
        (product) => product.category === newCategories[0],
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
      (product) => product.category === category,
    );
    setProductsByCategory(newProductsByCategories);
  };

  if (loadingCategories || loadingFeaturedProducts)
    return <FeaturedProductCardWrapperLoading />;

  const renderCategoryButtons = () => {
    return categories.map((category, idx) => (
      <CategoryButton
        key={idx}
        name={category}
        active={categorySelected}
        onClick={() => {
          onHandleSelectCategory(category);
        }}
      />
    ));
  };

  const renderProducts = () => {
    return productsByCategory.map((product, idx) => (
      <ProductCardWrapper
        key={idx}
        image={product.image}
        price={product.price}
        rating={product.rating}
        sold={product.sold}
        title={product.title}
        discount={product.discount}
        sku={product.sku}
      />
    ));
  };

  return (
    <>
      {/* Select Category */}
      <div className="flex justify-center">
        <div className="no-scrollbar flex flex-nowrap gap-1 overflow-x-auto md:gap-3 lg:gap-4">
          {renderCategoryButtons()}
        </div>
      </div>
      {/* Products */}
      <div className="flex justify-center">
        <div className="no-scrollbar flex flex-nowrap gap-[10px] overflow-x-auto md:gap-4 lg:gap-7 xl:gap-8">
          {renderProducts()}
        </div>
      </div>
    </>
  );
};

export const FeaturedProductCardWrapperLoading: React.FC = () => {
  const renderCategoryButtons = () => {
    return Array(8)
      .fill(null)
      .map((_, idx) => <CategoryButtonLoading key={idx} />);
  };

  const renderProducts = () => {
    return Array(4)
      .fill(null)
      .map((_, idx) => <ProductCardLoading key={idx} />);
  };

  return (
    <>
      {/* Select Category */}
      <div className="flex justify-center">
        <div className="no-scrollbar flex flex-nowrap gap-1 overflow-x-auto md:gap-3 lg:gap-4">
          {renderCategoryButtons()}
        </div>
      </div>
      {/* Products */}
      <div className="flex justify-center">
        <div className="no-scrollbar flex flex-nowrap gap-[10px] overflow-x-auto md:gap-4 lg:gap-7 xl:gap-8">
          {renderProducts()}
        </div>
      </div>
    </>
  );
};

export default FeaturedProductCardWrapper;
