import logo from "@/public/images/logo.png";
import { menuItems } from "@/lib/helper";
import NavbarMenu from "@/components/navbar-menu";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <header className="relative h-[50px] md:h-[100px]">
      <nav className="fixed z-50 flex h-[50px] w-full items-center justify-between bg-black px-5 text-white md:h-[100px] lg:px-[70px]">
        <NavbarMenu />
        {/* image for mobile and tablet */}
        <Image
          src={logo}
          alt="Logo Sayurmoms"
          width={130}
          height={30}
          className="object-contain md:hidden"
        />
        {/* image for laptop and desktop */}
        <Image
          src={logo}
          alt="Logo Sayurmoms"
          width={170}
          height={100}
          className="hidden object-contain md:inline"
        />
        <div className="hidden text-gray md:gap-3 lg:flex lg:text-xl xl:gap-10 xl:text-2xl">
          {menuItems.map((item, idx) => (
            <Link key={idx} href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="rounded-sm bg-green p-1 md:rounded-lg md:p-2"
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
