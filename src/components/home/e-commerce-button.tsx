"use client";

import { eCommerceItem } from "@/lib/helper";
import { cn } from "@/lib/utils";

import React, { useState } from "react";
import Image from "next/image";

import { ShoppingBag } from "lucide-react";

const ECommerceButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed z-50 top-1/2 -right-[45px] md:-right-[60px] lg:-right-[86px] -translate-y-1/2">
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-[66px] md:right-[86px] lg:right-[122px] py-4 md:py-6 lg:py-8 px-2 md:px-4 lg:px-6 w-[80px] md:w-[120px] lg:w-[160px] space-y-1 md:space-y-2 lg:space-y-4 rounded-tl lg:rounded-tl-lg rounded-bl lg:rounded-bl-lg bg-[#F3F6EA]",
          isActive ? "block" : "hidden"
        )}
      >
        {eCommerceItem.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            onClick={() => setIsActive(!isActive)}
            className="inline-block"
          >
            {/* image for mobile */}
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="md:hidden"
            />
            {/* image for tablets */}
            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={70}
              className="hidden md:inline-block lg:hidden"
            />
            <Image
              src={item.image}
              alt={item.name}
              width={110}
              height={110}
              className="hidden lg:inline-block"
            />
          </a>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="transform -rotate-90 p-1 bg-black text-white"
      >
        <span className="flex items-center px-2 lg:px-4 lg:py-1 text-[10px] md:text-sm lg:text-[18px]">
          {/* icon for mobile */}
          <ShoppingBag height={10} width={10} className="mr-1 md:hidden" />{" "}
          {/* icon for tablet */}
          <ShoppingBag
            height={14}
            width={14}
            className="mr-1 md:mr-2 hidden md:inline-block lg:hidden"
          />{" "}
          {/* icon for laptop */}
          <ShoppingBag
            height={24}
            width={24}
            className="mr-1 lg:mr-3 hidden lg:inline-block"
          />{" "}
          Pesan Sekarang
        </span>
      </button>
    </div>
  );
};

export default ECommerceButton;
