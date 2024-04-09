"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { menuItem } from "@/lib/helper";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NavbarMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex md:hidden flex-col">
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="relative"
      >
        <Menu height={25} width={25} />
      </button>
      <div
        className={cn(
          "absolute left-0 top-[50px] w-full flex-col px-2 gap-2 py-4 bg-black/90 text-gray",
          isActive ? "flex" : "hidden"
        )}
      >
        {menuItem.map((item, idx) => (
          <Link key={idx} href={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarMenu;
