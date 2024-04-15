"use client";

import { useAppSelector } from "@/lib/hooks";
import React from "react";

export const FooterCategoryCardMobile: React.FC = () => {
  const { data } = useAppSelector((state) => state.categories);

  return (
    <div>
      <h3 className="mb-4 text-lg font-bold lg:text-4xl">Kategori</h3>
      {data.map((category) => (
        <p
          key={category.id}
          className="mb-2 text-sm text-[#707070] lg:mb-0 lg:text-3xl"
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

export const FooterCategoryCardDesktop: React.FC = () => {
  const { data } = useAppSelector((state) => state.categories);

  return (
    <div className="hidden flex-col items-center lg:flex lg:items-start lg:gap-6 lg:pl-10 xl:gap-10 xl:pl-32">
      <h3 className="mb-4 text-lg font-bold lg:text-4xl">Kategori</h3>
      {data.map((category) => (
        <p
          key={category.id}
          className="mb-2 text-sm text-[#707070] lg:mb-0 lg:text-3xl"
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};
