import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  name: string;
  active: string;
  onClick?: () => void;
};

const CategoryButton: React.FC<Props> = (props) => {
  const { active, name, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "whitespace-nowrap text-nowrap rounded-full border border-[#181818] bg-[#F8F8F8] px-4 py-1 text-[12px] text-[#181818] md:border-2 md:px-7 md:py-2 md:text-base lg:px-10 lg:py-3 lg:text-xl xl:px-12 xl:py-4 xl:text-[28px]",
        active === name ? "bg-black font-bold text-green" : "",
      )}
    >
      {name}
    </button>
  );
};

export const CategoryButtonLoading: React.FC = () => {
  return (
    <Skeleton className="min-h-[28px] min-w-[75px] max-w-[75px] rounded-full md:min-h-[43px] md:min-w-[114px] md:max-w-[114px] lg:min-h-[55px] lg:min-w-[152px] lg:max-w-[152px] xl:min-h-[63px] xl:min-w-[195px] xl:max-w-[195px]" />
  );
};
  
export default CategoryButton;
