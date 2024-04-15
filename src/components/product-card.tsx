import { cn, numberFormat, priceToIDR } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  title: string;
  image: string;
  price: number;
  sold: number;
  rating: number;
  discount?: number;
};

const ProductCard: React.FC<Props> = (props) => {
  const { image, price, rating, sold, title, discount } = props;

  const priceIDR = priceToIDR(price);
  const soldIDN = numberFormat(sold);

  return (
    <div className="relative flex h-[230px] min-w-[140px] max-w-[140px] cursor-pointer flex-col overflow-hidden rounded-xl border border-orange bg-[#FDFDFD] p-[10px] md:h-[370px] md:min-w-[220px] md:max-w-[220px] md:rounded-2xl md:border-2 lg:h-[500px] lg:min-w-[300px] lg:max-w-[300px] lg:rounded-3xl lg:border-2 lg:p-[25px]">
      {/* badge */}
      {discount ? (
        <div className="absolute left-0 top-4 z-10 rounded-br-sm rounded-tr-sm bg-orange px-1 py-[2px] lg:top-[45px] lg:rounded-br-[10px] lg:rounded-tr-[10px] lg:px-[6px] lg:py-[5px]">
          <p className="text-[10px] font-bold text-[#EAEAEA] md:text-base lg:text-2xl">
            Diskon {discount}%
          </p>
        </div>
      ) : (
        ""
      )}

      {/* image */}
      <div className="relative min-h-[118px] rounded-[10px] bg-[#EAEAEA] md:min-h-[196px] lg:min-h-[246px] lg:rounded-[20px] ">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* content */}
      <div className="mt-[6px] flex h-full flex-col justify-between lg:mt-2">
        <div>
          <p className="line-clamp-2 text-sm font-bold leading-tight text-[#181818] md:text-xl lg:text-3xl lg:leading-snug">
            {title}
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="my-[2px] flex justify-between text-[10px] font-medium text-[#181818] md:text-base lg:my-2 lg:text-xl">
            {discount ? (
              <p>Rp.{priceToIDR(price - (price * discount) / 100)}</p>
            ) : (
              ""
            )}
            <p>
              {discount ? (
                <s className="text-[#909090]">Rp.{priceIDR}</s>
              ) : (
                `Rp.${priceIDR}`
              )}
            </p>
          </div>

          {/* Rating and Sold */}
          <div className="grid grid-cols-2 items-center gap-x-2 md:gap-x-3 lg:gap-x-4">
            {/* Star */}
            <div className="flex items-center gap-[1px]">
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <Star
                    key={idx}
                    className={cn(
                      "md:hidden",
                      idx < Math.round(rating)
                        ? "fill-[#A7BB09]"
                        : "fill-[#909090]",
                    )}
                    fill="none"
                    strokeWidth="0"
                    width={12}
                    height={12}
                  />
                ))}
              {Array(5)
                .fill(null)
                .map((_, idx) => (
                  <Star
                    key={idx}
                    className={cn(
                      "hidden md:inline-block",
                      idx < Math.round(rating)
                        ? "fill-[#A7BB09]"
                        : "fill-[#909090]",
                    )}
                    fill="none"
                    strokeWidth="0"
                    width={32}
                    height={32}
                  />
                ))}
            </div>
            {/* Rating */}
            <span className="text-[10px] font-bold text-[#909090] md:text-base lg:text-xl">
              {rating.toFixed(1)}
            </span>
            {/* Sold */}
            <span className="col-span-2 text-[10px] text-[#909090] md:text-base lg:text-xl">
              {soldIDN} terjual
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductCardLoading: React.FC = () => {
  return (
    <div className="flex h-[230px] min-w-[140px] max-w-[140px] cursor-pointer flex-col overflow-hidden rounded-xl bg-slate-200 p-[10px] md:h-[370px] md:min-w-[220px] md:max-w-[220px] md:rounded-2xl lg:h-[500px] lg:min-w-[300px] lg:max-w-[300px] lg:rounded-3xl lg:p-[25px]">
      <Skeleton className="min-h-[118px] rounded-[10px] md:min-h-[196px] lg:min-h-[246px] lg:rounded-[20px]" />
      <div className="my-[6px] flex h-full flex-col justify-between lg:my-3">
        <Skeleton className="min-h-[35px] md:min-h-14 lg:min-h-[82px]" />
        <Skeleton className="mt-1 min-h-[49px] md:mt-2 md:min-h-[84px] lg:mt-3 lg:min-h-[104px]" />
      </div>
    </div>
  );
};

export default ProductCard;
