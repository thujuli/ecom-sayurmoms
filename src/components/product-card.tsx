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
    <div className="relative flex h-[250px] min-w-[140px] max-w-[140px] cursor-pointer flex-col overflow-hidden rounded-xl border border-orange bg-[#FDFDFD] p-[10px] md:h-[390px] md:min-w-[220px] md:max-w-[220px] md:border-2 lg:h-[620px] lg:min-w-[380px] lg:max-w-[380px] lg:rounded-[40px] lg:border-2 lg:p-[25px] xl:h-[710px] xl:min-w-[415px] xl:max-w-[415px]">
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
      <div className="relative min-h-[120px] rounded-[10px] bg-[#EAEAEA] md:min-h-[200px] lg:min-h-[300px] lg:rounded-[20px] xl:min-h-[350px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {/* content */}
      <div className="mt-[6px] flex h-full flex-col justify-between lg:mt-6">
        <div>
          <p className="line-clamp-2 text-sm font-bold leading-tight text-[#181818] md:text-xl lg:text-3xl lg:leading-snug xl:text-4xl xl:leading-normal">
            {title}
          </p>
        </div>

        <div>
          {/* Price */}
          <div className="mb-2 flex justify-between text-[10px] font-medium text-[#181818] md:text-base lg:mb-6 lg:text-2xl xl:mb-8 xl:text-3xl">
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
          <div className="mb-1 grid grid-cols-2 items-center gap-x-2 md:gap-x-3 lg:mb-5 lg:gap-x-4 lg:gap-y-3">
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
            <span className="text-[10px] font-bold text-[#909090] md:text-base lg:text-2xl">
              {rating.toFixed(1)}
            </span>
            {/* Sold */}
            <span className="col-span-2 text-[10px] text-[#909090] md:text-base lg:text-[22px]">
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
    <div className="flex h-[250px] min-w-[140px] max-w-[140px] cursor-pointer flex-col overflow-hidden rounded-xl bg-slate-200 p-[10px] md:h-[390px] md:min-w-[220px] md:max-w-[220px] lg:h-[620px] lg:min-w-[380px] lg:max-w-[380px] lg:rounded-[40px] lg:p-[25px] xl:h-[710px] xl:min-w-[415px] xl:max-w-[415px]">
      <Skeleton className="min-h-[120px] rounded-[10px] md:min-h-[200px] lg:min-h-[300px] lg:rounded-[20px] xl:min-h-[350px]" />
      <div className="mt-[6px] flex h-full flex-col justify-between lg:mt-6">
        <Skeleton className="min-h-[35px] md:min-h-14 lg:min-h-[82px] xl:min-h-[108px]" />
        <Skeleton className="min-h-[57px] md:min-h-[92px] lg:min-h-[144px] xl:min-h-[156px]" />
      </div>
    </div>
  );
};

export default ProductCard;
