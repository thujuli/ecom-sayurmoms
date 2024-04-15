import background from "@/public/images/home/category-card-bg.png";
import Image from "next/image";
import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  image: string;
  title: string;
  description?: string;
};

const CategoryCard: React.FC<Props> = (props) => {
  const { description, image, title } = props;
  return (
    <div className="group relative h-[90px] w-full rounded-lg border border-orange md:h-[150px] md:rounded-2xl md:border-2 lg:h-[200px] lg:rounded-3xl lg:border-gray lg:shadow-md lg:hover:border-orange">
      <Image
        alt="Category Card Background Image"
        src={background}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute flex h-full w-full gap-4 ">
        <div className="relative w-1/2">
          <Image
            src={image}
            alt={title}
            fill
            sizes="100vw"
            className="object-contain pl-1 md:pl-2"
          />
        </div>
        <div className="flex w-1/2 flex-col justify-center gap-1 pr-1 md:gap-2 md:pr-2">
          <p className="text-[14px] font-bold leading-none text-[#232323] md:text-xl lg:text-3xl lg:leading-normal">
            {title}
          </p>
          <p className="line-clamp-2 text-[9px] text-[#808080] md:text-base lg:line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const CategoryCardLoading: React.FC = () => {
  return (
    <div className="flex h-[90px] w-full gap-4 rounded-lg bg-slate-200 p-1 md:h-[150px] md:rounded-2xl md:p-2 lg:h-[200px] lg:rounded-3xl">
      <div className="flex w-full items-center justify-center">
        <Skeleton className="h-[60px] w-full md:h-[88px] lg:h-[110px]" />
      </div>
      <div className="flex w-full flex-col justify-center gap-1  md:gap-2">
        <Skeleton className="h-[28px] lg:h-[45px]" />
        <Skeleton className="h-[28px] md:h-[48px] lg:h-[56px]" />
      </div>
    </div>
  );
};

export const CategoryCardLoadingWrapper: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3">
      <div className="hidden flex-col justify-center font-bold leading-snug lg:flex lg:space-y-3 lg:text-4xl">
        <h2 className="text-black">Apa saja product</h2>
        <h2 className="text-[#A7BB09]"> Saryurmoms?</h2>
      </div>
      {Array(8)
        .fill(null)
        .map((_, idx) => (
          <CategoryCardLoading key={idx} />
        ))}
    </div>
  );
};

export default CategoryCard;
