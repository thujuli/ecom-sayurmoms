"use client";

import { menuItem } from "@/lib/helper";

import React, { useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavbarMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex lg:hidden flex-col">
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="relative"
      >
        <Menu height={25} width={25} className="md:hidden" />
        <Menu height={40} width={40} className="hidden md:inline" />
      </button>
      <div
        className={cn(
          "absolute z-20 left-0 top-[50px] md:top-[100px] w-full flex-col px-2 md:px-4 gap-2 md:gap-4 py-4 bg-black/90 text-gray font-medium",
          isActive ? "flex" : "hidden"
        )}
      >
        {menuItem.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            onClick={() => setIsActive(!isActive)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarMenu;
