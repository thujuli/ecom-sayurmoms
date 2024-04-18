"use client";

import { priceToIDR } from "@/lib/utils";
import Image from "next/image";
import React from "react";

import { Plus, Minus, Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector, useCounter } from "@/lib/hooks";
import { setCart } from "@/lib/features/cartSlice";

interface Props {
  sku: string;
  title: string;
  image: string;
  price: number;
  qty: number;
  discount?: number;
}

const CartItemCard: React.FC<Props> = (props) => {
  const { image, price, title, discount, qty, sku } = props;

  const priceIDR = priceToIDR(price);
  const fixPrice = discount ? price - (price * discount) / 100 : price;

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.cart);
  const { counter, total, handleDecrement, handleIncrement } = useCounter(
    qty,
    fixPrice,
  );

  const index = data.findIndex((product) => product.sku === sku);

  const handleDeleteProduct = (index: number) => {
    const newCart = [...data];
    newCart.splice(index, 1);

    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <div className="flex gap-2 rounded-lg bg-white px-4 py-2">
      <div className="relative h-[110px] min-w-[110px] overflow-hidden rounded bg-[#EAEAEA] md:h-[114px] md:min-w-[114px]">
        <Image
          alt={title}
          src={image}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>
      <div className="flex w-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <p className="line-clamp-2 flex-1 font-bold md:text-lg md:leading-normal">
            {title}
          </p>
          <button
            type="button"
            onClick={() => handleDeleteProduct(index)}
            className="flex-0 ml-3 flex h-6 w-6 items-center justify-center rounded border bg-gray text-red-400 lg:h-7 lg:w-7"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <div>
          <div className="flex gap-6 py-2 text-xs font-medium text-[#181818] md:text-sm">
            {discount ? (
              <>
                <p>Rp.{priceToIDR(price - (price * discount) / 100)}</p>
                <s className="text-[#909090]">Rp.{priceIDR}</s>
              </>
            ) : (
              <p>Rp.${priceIDR}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* button decrement */}
              <button
                type="button"
                disabled={counter <= 1}
                onClick={() => handleDecrement(true, index)}
                className="flex h-6 w-6 items-center justify-center rounded border bg-gray font-bold focus:bg-green disabled:text-black/20 lg:h-7 lg:w-7"
              >
                <Minus className="h-4 w-4" />
              </button>
              {/* show qty */}
              <span className="h-6 w-12 text-center lg:h-7">{counter}</span>
              {/* button increment */}
              <button
                type="button"
                onClick={() => handleIncrement(true, index)}
                className="flex h-6 w-6 items-center justify-center rounded border bg-gray font-bold focus:bg-green lg:h-7 lg:w-7"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            {/* show total price */}
            <span className="text-xs font-bold md:text-sm">
              Rp.{priceToIDR(total)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
