import { benefitItems } from "@/lib/const";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import benefitsMobile from "@/public/images/home/benefits-mobile-bg.png";
import benefitsDesktop from "@/public/images/home/benefits-desktop-bg.png";
import Image from "next/image";
import React from "react";

const Benefits: React.FC = () => {
  const renderBenefits = () => {
    return benefitItems.map((benefit, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center rounded border border-orange bg-white py-3 md:rounded-lg md:border-2 md:px-4 md:py-6 lg:rounded-2xl lg:px-6 lg:py-7"
      >
        <div className="mb-1 rounded bg-green p-1 md:p-2 lg:mb-2 lg:rounded-lg">
          <benefit.icon
            width={50}
            height={50}
            className="h-[17px] w-[17px] md:h-6 md:w-6 lg:h-9 lg:w-9 xl:h-[50px] xl:w-[50px]"
          />
        </div>
        <span className="text-center text-[9px] font-medium md:text-base lg:text-xl xl:text-2xl">
          {benefit.title}
        </span>
      </div>
    ));
  };
  return (
    <section id="benefits" className="relative">
      {/* benefits section for mobile and tablet */}
      <div className="lg:hidden">
        <AspectRatio ratio={2 / 1}>
          <Image
            src={benefitsMobile}
            alt="Benefits Mobile Background"
            fill
            priority
            className="rounded-bl-3xl rounded-br-3xl object-cover"
          />
        </AspectRatio>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 md:px-8">
          <div className="w-full">
            <h2 className="text-[20px] font-bold text-white md:text-2xl">
              Mengapa harus
            </h2>
            <h2 className="text-[20px] font-bold text-white md:text-2xl">
              Sayurmoms?
            </h2>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 md:mt-8 md:gap-6">
            {renderBenefits()}
          </div>
        </div>
      </div>

      {/* benefits section for laptop and desktop */}
      <div className="hidden lg:block">
        <AspectRatio ratio={1920 / 617} className="hidden lg:block">
          <Image
            src={benefitsDesktop}
            alt="Benefits Desktop Background"
            fill
            sizes="100vw"
            priority
            className="rounded-bl-3xl rounded-br-3xl object-cover "
          />
        </AspectRatio>
        <div className="absolute inset-0 flex flex-col items-center px-5 md:px-8 lg:top-[20%] lg:px-20 xl:px-36">
          <div className="w-full lg:space-y-4 xl:space-y-6">
            <h2 className="text-base font-bold text-white md:text-2xl lg:text-4xl">
              Mengapa harus
            </h2>
            <h2 className="text-base font-bold text-white md:text-2xl lg:text-4xl">
              Sayurmoms?
            </h2>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 md:mt-8 md:gap-6 lg:mt-12 lg:gap-10 xl:gap-14">
            {renderBenefits()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
