"use client";

import CategoryCard from "@/components/home/category-card";
import { useAppSelector } from "@/lib/hooks";
import React from "react";

const Categories: React.FC = () => {
  const { categories } = useAppSelector((state) => state.categories);

  return (
    <section
      id="categories"
      className="mt-[30px] px-5 lg:mt-32 lg:px-10 xl:mt-44"
    >
      <div className="mb-5 text-[20px] font-bold leading-tight  md:text-2xl lg:hidden">
        <h2 className="leading-tight text-black">Apa saja product</h2>
        <h2 className="text-green">Saryurmoms?</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:gap-8">
        <div className="hidden flex-col justify-center font-bold leading-snug lg:flex lg:space-y-3 lg:text-4xl xl:text-6xl">
          <h2 className="text-black">Apa saja product</h2>
          <h2 className="text-[#A7BB09]"> Saryurmoms?</h2>
        </div>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            description={category.description}
            image={category.acf.image}
            title={category.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Categories;
