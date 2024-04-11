import background from "@/public/images/home/category-card-bg.png";
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description?: string;
};

const CategoryCard: React.FC<Props> = (props) => {
  const { description, image, title } = props;
  return (
    <div className="group relative h-[90px] w-full rounded-lg border border-orange md:h-[150px] md:rounded-2xl md:border-2 lg:h-[200px] lg:rounded-3xl lg:border-gray lg:shadow-md lg:hover:border-orange xl:h-[260px]">
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
        <div className="flex w-1/2 flex-col justify-center gap-1 pr-1 md:gap-2 md:pr-2 xl:gap-3">
          <p className="text-[14px] font-bold leading-none text-[#232323] md:text-xl lg:text-3xl lg:leading-normal xl:text-4xl">
            {title}
          </p>
          <p className="line-clamp-2 text-[9px] text-[#808080] md:text-base lg:line-clamp-3 xl:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
