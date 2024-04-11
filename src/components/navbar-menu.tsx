"use client";

import { menuItem } from "@/lib/helper";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavbarMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex flex-col lg:hidden">
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
          "absolute left-0 top-[50px] z-20 w-full flex-col gap-2 bg-black/90 px-2 py-4 font-medium text-gray md:top-[100px] md:gap-4 md:px-4",
          isActive ? "flex" : "hidden",
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
