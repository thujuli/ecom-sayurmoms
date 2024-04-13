import { benefitItems } from "@/lib/const";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import benefitsMobile from "@/public/images/home/benefits-mobile-bg.png";
import benefitsDesktop from "@/public/images/home/benefits-desktop-bg.png";
import Image from "next/image";
import React from "react";

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="relative">
      {/* benefits section for mobile and tablet */}
      <div className="lg:hidden">
        <AspectRatio ratio={2 / 1}>
          <Image
            src={benefitsMobile}
            alt="Benefits Mobile Background"
            fill
            sizes="100vw"
            placeholder="blur"
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
            {benefitItems.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded border border-orange bg-white py-3 md:rounded-lg md:border-2 md:px-4 md:py-6"
              >
                <div className="mb-1 rounded bg-green p-1 md:p-2">
                  <benefit.icon width={17} height={17} className="md:hidden" />
                  <benefit.icon
                    width={24}
                    height={24}
                    className="hidden md:inline-block"
                  />
                </div>
                <span className="text-center text-[9px] font-medium md:text-base">
                  {benefit.title}
                </span>
              </div>
            ))}
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
            placeholder="blur"
            className="rounded-bl-3xl rounded-br-3xl object-cover "
          />
        </AspectRatio>
        <div className="absolute inset-0 flex flex-col items-center px-5 md:px-8 lg:top-[20%] lg:px-20">
          <div className="w-full lg:space-y-4 xl:space-y-6">
            <h2 className="text-base font-bold text-white md:text-2xl lg:text-4xl xl:text-6xl">
              Mengapa harus
            </h2>
            <h2 className="text-base font-bold text-white md:text-2xl lg:text-4xl xl:text-6xl">
              Sayurmoms?
            </h2>
          </div>
          <div className="mt-5 grid grid-cols-4 gap-2 md:mt-8 md:gap-6 lg:mt-12 lg:gap-10 xl:mt-16 xl:gap-14">
            {benefitItems.map((benefit, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded border border-orange bg-white py-3 md:rounded-lg md:border-2 md:px-4 md:py-6 lg:rounded-2xl lg:px-6 lg:py-7 xl:rounded-3xl xl:px-9 xl:py-12"
              >
                <div className="mb-1 rounded bg-green p-1 md:p-2 lg:mb-2 lg:rounded-lg xl:mb-3">
                  <benefit.icon
                    width={36}
                    height={36}
                    className="hidden lg:inline-block xl:hidden"
                  />
                  <benefit.icon
                    width={50}
                    height={50}
                    className="hidden xl:inline-block"
                  />
                </div>
                <span className="text-center text-[10px] font-medium md:text-base lg:text-xl xl:text-2xl">
                  {benefit.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
