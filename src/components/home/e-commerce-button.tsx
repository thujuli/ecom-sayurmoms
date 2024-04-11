"use client";

import { eCommerceItem } from "@/lib/helper";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const ECommerceButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="fixed -right-[45px] top-1/2 z-50 -translate-y-1/2 md:-right-[62px] lg:-right-[86px]">
      <div
        className={cn(
          "absolute right-[66px] top-1/2 w-[80px] -translate-y-1/2 space-y-1 rounded-bl rounded-tl bg-[#F3F6EA] px-2 py-4 md:right-[86px] md:w-[120px] md:space-y-2 md:px-4 md:py-6 lg:right-[122px] lg:w-[160px] lg:space-y-4 lg:rounded-bl-lg lg:rounded-tl-lg lg:px-6 lg:py-8",
          isActive ? "block" : "hidden",
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
        className="-rotate-90 transform bg-black p-1 text-white"
      >
        <span className="flex items-center px-2 text-[10px] md:text-sm lg:px-4 lg:py-1 lg:text-[18px]">
          {/* icon for mobile */}
          <ShoppingBag height={10} width={10} className="mr-1 md:hidden" />{" "}
          {/* icon for tablet */}
          <ShoppingBag
            height={14}
            width={14}
            className="mr-1 hidden md:mr-2 md:inline-block lg:hidden"
          />{" "}
          {/* icon for laptop */}
          <ShoppingBag
            height={24}
            width={24}
            className="mr-1 hidden lg:mr-3 lg:inline-block"
          />{" "}
          Pesan Sekarang
        </span>
      </button>
    </div>
  );
};

export default ECommerceButton;
