"use client";

import { priceToIDR } from "@/lib/utils";
import ProductCard from "./product-card";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import Image from "next/image";
import { useAppDispatch, useAppSelector, useCounter } from "@/lib/hooks";
import { setCart } from "@/lib/features/cartSlice";
import { Cart } from "@/lib/types";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";

interface Props {
  title: string;
  image: string;
  price: number;
  sold: number;
  rating: number;
  sku: string;
  discount?: number;
}

const ProductCardWrapper: React.FC<Props> = (props) => {
  const { image, price, rating, sold, title, discount, sku } = props;

  const priceIDR = priceToIDR(price);
  const fixPrice = discount ? price - (price * discount) / 100 : price;

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.cart);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    counter,
    total,
    handleDecrement,
    handleIncrement,
    setCounter,
    setTotal,
  } = useCounter(1, fixPrice);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => {
    setCounter(1);
    setTotal(fixPrice);
    setIsDialogOpen(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changeCounter = Number(e.target.value);

    setCounter(changeCounter);
    setTotal(fixPrice * changeCounter);
  };

  const handleAddToCart = () => {
    const newCart = [...data];
    const addProduct: Cart = {
      sku,
      title,
      price,
      qty: counter,
      image,
      discount,
    };

    const index = data.findIndex((product) => product.sku === addProduct.sku);

    if (index === -1) {
      newCart.push(addProduct);
    } else {
      const updatedProduct = {
        ...newCart[index],
        qty: newCart[index].qty + addProduct.qty,
      };
      newCart[index] = updatedProduct;
    }

    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
    handleCloseDialog();
    toast(addProduct.title, {
      description: "Berhasil ditambahkan ke keranjang!",
    });
  };

  return (
    <>
      <ProductCard
        onClick={handleOpenDialog}
        image={image}
        price={price}
        rating={rating}
        sold={sold}
        title={title}
        discount={discount}
      />
      {isDialogOpen && (
        <Dialog open={isDialogOpen}>
          <DialogContent
            onCloseClick={handleCloseDialog}
            className="sm:max-w-md"
          >
            <DialogHeader>
              <AspectRatio
                ratio={1 / 1}
                className="overflow-hidden rounded-lg border border-orange"
              >
                <Image alt={title} src={image} fill sizes="100vw" />
              </AspectRatio>
            </DialogHeader>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold md:text-xl lg:text-2xl">
                {title}
              </h2>
              {/* price */}
              <div className="my-[2px] flex justify-between text-sm font-medium text-[#181818] md:text-base lg:my-2 lg:text-lg">
                {discount ? (
                  <>
                    <p>Rp.{priceToIDR(price - (price * discount) / 100)}</p>
                    <s className="text-[#909090]">Rp.{priceIDR}</s>
                  </>
                ) : (
                  <p>Rp.{priceIDR}</p>
                )}
              </div>
              {/* counter */}
              <div className="flex items-center justify-between font-medium">
                <div>
                  <p className="md:text-lg lg:text-xl">Jumlah:</p>
                </div>
                <div className="flex w-32 items-center justify-center md:w-36 md:text-lg lg:text-xl">
                  {/* button decrement */}
                  <button
                    type="button"
                    disabled={counter <= 1}
                    onClick={() => handleDecrement()}
                    className="flex h-8 w-8 items-center justify-center rounded border bg-gray font-bold focus:bg-green disabled:text-black/20 md:h-10 md:w-10"
                  >
                    <Minus className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                  {/* input qty */}
                  <input
                    type="number"
                    value={counter}
                    className="h-8 w-12 text-center md:h-10 md:w-14 lg:w-16"
                    onChange={handleChangeInput}
                  />
                  {/* button increment */}
                  <button
                    type="button"
                    onClick={() => handleIncrement()}
                    className="flex h-8 w-8 items-center justify-center rounded border bg-gray font-bold focus:bg-green md:h-10 md:w-10"
                  >
                    <Plus className="h-4 w-4 md:h-5 md:w-5" />
                  </button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                disabled={counter < 1}
                onClick={handleAddToCart}
                className="relative w-full font-medium"
              >
                Keranjang
                <span className="absolute right-2 text-[10px] lg:text-[12px]">
                  Rp.{priceToIDR(total)}
                </span>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ProductCardWrapper;
