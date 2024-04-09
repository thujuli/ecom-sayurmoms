import logo from "@/public/images/logo.png";
import { menuItem } from "@/lib/helper";
import NavbarMenu from "@/components/navbar-menu";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="relative h-[50px] md:h-[100px]">
      <nav className="z-50 fixed flex justify-between items-center w-full px-5 lg:px-[70px] h-[50px] md:h-[100px] bg-black text-white">
        <NavbarMenu />
        {/* image for mobile and tablet */}
        <Image
          src={logo}
          alt="Logo Sayurmoms"
          width={130}
          height={30}
          className="md:hidden object-contain"
        />
        {/* image for laptop and desktop */}
        <Image
          src={logo}
          alt="Logo Sayurmoms"
          width={170}
          height={100}
          className="hidden md:inline object-contain"
        />
        <div className="hidden lg:flex md:gap-3 xl:gap-10 text-gray lg:text-xl xl:text-2xl">
          {menuItem.map((item, idx) => (
            <Link key={idx} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="bg-green p-1 md:p-2 rounded-sm md:rounded-lg"
        >
          <ShoppingCart
            width={16}
            height={16}
            color="black"
            className="md:hidden"
          />
          <ShoppingCart
            width={24}
            height={24}
            color="black"
            className="hidden md:inline"
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
