import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  icon: LucideIcon;
  number: string;
  text: string;
};

const AboutUsCard: React.FC<Props> = (props) => {
  const { icon: Icon, number, text } = props;

  return (
    <div className="group flex h-[120px] w-[80px] flex-col items-center justify-center space-y-1 rounded-3xl bg-white text-center shadow-[2px_2px_0px_0px_rgba(0,0,0,0.25)] transition duration-300 ease-in-out hover:border-2 hover:border-darkGreen hover:bg-[#1F1F1F] md:h-[160px] md:w-[130px] lg:h-[220px] lg:w-[170px] lg:space-y-4 lg:p-6">
      <div>
        <Icon className="relative -top-2 h-4 w-4 text-black transition duration-300 ease-in-out group-hover:text-[#A7BB09] md:h-6 md:w-6 lg:static lg:top-0" />
      </div>
      <p className="text-xl font-extrabold text-darkGreen transition duration-300 ease-in-out group-hover:font-extrabold md:text-2xl lg:text-3xl">
        {number}
      </p>
      <p className="relative -bottom-1 text-[12px] text-[#909090] transition duration-300 ease-in-out group-hover:font-bold group-hover:text-white md:text-base lg:static lg:top-0 lg:text-base">
        {text}
      </p>
    </div>
  );
};

export default AboutUsCard;
