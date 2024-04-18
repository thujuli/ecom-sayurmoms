"use client";

import logo from "@/public/images/logo.png";
import { menuItems } from "@/lib/helper";
import NavbarMenu from "@/components/navbar-menu";
import { cn, priceToIDR } from "@/lib/utils";
import { useAppSelector } from "@/lib/hooks";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartItemCard from "@/components/cart-item-card";

export const CartButton: React.FC = () => {
  const { data } = useAppSelector((state) => state.cart);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null; // or a placeholder component
  }

  return (
    <div className="relative rounded-sm bg-green p-1 md:rounded-lg md:p-2">
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
      {data.length ? (
        <div className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-black md:-right-4 md:-top-4 md:h-8 md:w-8 md:text-sm lg:text-base">
          {data.length > 99 ? 99 : data.length}
        </div>
      ) : null}
    </div>
  );
};

const Navbar: React.FC = () => {
  const { data } = useAppSelector((state) => state.cart);
  const [menuActive, setMenuActive] = useState("");

  const totalAmount = data.reduce((prev, cur) => {
    const price = cur.discount
      ? cur.price - (cur.price * cur.discount) / 100
      : cur.price;

    return prev + price * cur.qty;
  }, 0);

  const renderMenuItems = () => {
    return menuItems.map((item, idx) => (
      <Link
        key={idx}
        href={item.link}
        onClick={() => setMenuActive(item.name)}
        className={cn(
          "rounded-full p-2 hover:bg-green hover:font-bold hover:text-black xl:px-4",
          menuActive === item.name
            ? "rounded-full bg-green p-2 font-bold text-black xl:px-4"
            : "",
        )}
      >
        {item.name}
      </Link>
    ));
  };

  const renderCartItems = () => {
    return data.map((product, idx) => (
      <CartItemCard
        key={idx}
        image={product.image}
        price={product.price}
        qty={product.qty}
        title={product.title}
        discount={product.discount}
        sku={product.sku}
      />
    ));
  };

  return (
    <header id="navbar" className="relative h-[50px] md:h-[80px]">
      <nav className="fixed z-50 flex h-[50px] w-full items-center justify-between bg-black px-5 text-white md:h-[80px] lg:px-[70px]">
        {/* Menu for mobile */}
        <NavbarMenu />

        {/* logo */}
        <Image
          src={logo}
          alt="Logo Sayurmoms"
          width={130}
          height={30}
          className="h-[30px] w-[130px] object-contain md:h-[80px] md:w-[170px]"
        />

        {/* Menu for desktop */}
        <div className="hidden text-gray lg:flex lg:text-xl xl:gap-2 xl:text-2xl">
          {renderMenuItems()}
        </div>

        <Drawer direction="right">
          <DrawerTrigger>
            <CartButton />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold md:text-2xl">Keranjang</h2>
                  <DrawerClose>
                    <button className="rounded-lg border p-1 drop-shadow md:p-2">
                      <X className="h-4 w-4" />
                    </button>
                  </DrawerClose>
                </div>
              </DrawerTitle>
            </DrawerHeader>

            <div className="no-scrollbar flex h-full flex-col gap-2 overflow-scroll bg-[#EAEAEA] py-2">
              {renderCartItems()}
            </div>

            <DrawerFooter>
              <Button
                type="button"
                disabled={!data.length}
                className="relative w-full font-medium"
              >
                {data.length ? (
                  <>
                    <span className="absolute left-2 rounded bg-white px-1 text-[10px] text-black lg:text-[12px]">
                      {data.length}
                    </span>
                    <span>Checkout</span>
                    <span className="absolute right-2 text-[10px] lg:text-[12px]">
                      Rp.
                      {priceToIDR(totalAmount)}
                    </span>
                  </>
                ) : (
                  <span>Checkout</span>
                )}
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </nav>
    </header>
  );
};

export default Navbar;
