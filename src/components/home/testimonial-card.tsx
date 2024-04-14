import Image, { StaticImageData } from "next/image";
import React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  avatar: StaticImageData;
  testimonial: string;
  name: string;
  company: string;
  rating: number;
};

const TestimonialCard: React.FC<Props> = (props) => {
  const { avatar, company, name, rating, testimonial } = props;

  return (
    <div className="relative h-[180px] w-[165px] items-center justify-center rounded-[20px] border-l-2 border-t-2 border-[#A7BB09] bg-[#191919]/30 p-2 text-center backdrop-blur-md md:h-[240px] md:w-[200px] lg:h-[420px] lg:w-[380px] lg:rounded-[40px] lg:border-l-4 lg:border-t-4 lg:p-6">
      <div className="mt-3 flex items-center justify-center md:mt-2 lg:mb-3">
        <div className="relative h-[53px] w-[53px] rounded-full md:h-[72px] md:w-[72px] lg:h-[127px] lg:w-[127px]">
          <Image
            src={avatar}
            alt="Avatar"
            fill
            className="object-cover"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="h-[50px] pt-2 lg:h-[120px] lg:pt-4">
        <p className="line-clamp-3 text-[10px] text-white md:text-sm lg:text-lg xl:text-xl">
          {testimonial}
        </p>
      </div>
      <div className="flex h-[15px] items-center justify-center pt-6 md:pt-12 lg:h-[32px] lg:pb-3 lg:pt-8 xl:h-[40px]">
        <p className="mr-3 text-[8px] font-light text-[#909090] md:text-[12px] md:font-normal lg:mr-8 lg:text-lg xl:text-xl">
          {name}
        </p>
        <div className="h-3 border-l lg:h-6 xl:h-8" />
        <p className="ml-3 text-[8px] font-light text-[#909090] md:text-[12px] md:font-normal lg:ml-4 lg:text-lg xl:text-xl">
          {company}
        </p>
      </div>
      <div className="flex h-[15px] items-center justify-center pt-4 md:pt-6 lg:h-[40px] lg:pt-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-[11px] w-[11px] md:h-4 md:w-4 lg:mr-2 lg:h-6 lg:w-6 xl:h-8 xl:w-8",
              i < Math.floor(rating + 0.5)
                ? "fill-[#A7BB09]"
                : "fill-[#909090]",
            )}
            fill="none"
            strokeWidth="0"
          />
        ))}
        <span className="ml-1 text-[7px] font-bold text-[#909090] md:text-sm lg:ml-2 lg:text-xl lg:font-semibold xl:text-2xl">
          {rating.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
