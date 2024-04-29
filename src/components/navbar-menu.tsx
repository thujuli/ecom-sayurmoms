"use client";

import { menuItems } from "@/lib/helper";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const NavbarMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [menuActive, setMenuActive] = useState("");

  return (
    <div className="flex flex-col lg:hidden">
      <button
        type="button"
        aria-label="Hamburger Menu"
        onClick={() => setIsActive(!isActive)}
        className="relative"
      >
        <Menu height={25} width={25} className="md:hidden" />
        <Menu height={40} width={40} className="hidden md:inline" />
      </button>
      <div
        className={cn(
          "absolute left-0 top-[50px] z-20 w-full flex-col gap-1 bg-black/90 text-gray md:top-[100px]",
          isActive ? "flex" : "hidden",
        )}
      >
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            onClick={() => {
              setIsActive(!isActive);
              setMenuActive(item.name);
            }}
            className={cn(
              "px-2 py-2 text-lg hover:bg-green hover:font-bold hover:text-black md:px-4 md:py-3",
              menuActive === item.name
                ? "bg-green px-2 py-2 text-lg font-bold text-black md:px-4 md:py-3"
                : "",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarMenu;
