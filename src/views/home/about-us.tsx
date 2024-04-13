import backgroundMobile from "@/public/images/home/about-us-mobile-bg.png";
import illustration from "@/public/images/home/about-us-illustration.png";
import { aboutUsItems } from "@/lib/const";
import { aboutUsDetail } from "@/lib/helper";
import Image from "next/image";
import React from "react";
import AboutUsCard from "@/components/home/about-us-card";

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="pt-3 lg:py-24">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="order-2 w-full lg:order-1 lg:mb-0 lg:w-5/12 xl:w-1/2">
          <Image
            src={illustration}
            alt="About Us Illustration"
            placeholder="blur"
            className="h-auto w-full"
          />
        </div>
        <div className="order-1 mt-8 w-full text-center lg:order-2 lg:mt-0 lg:w-7/12 xl:w-1/2">
          <h2 className="mb-0 text-sm font-medium text-[#909090] md:mb-2 md:text-base lg:text-3xl xl:text-4xl">
            Tentang Kami
          </h2>
          <h2 className="text-darkGreen mb-8 text-xl font-extrabold md:text-2xl lg:text-5xl xl:text-6xl">
            Sayurmoms
          </h2>
          <div className="relative mb-8">
            <div className="absolute inset-0 -z-10 flex items-center justify-center lg:hidden">
              <Image
                src={backgroundMobile}
                alt="About Us Background Mobile"
                placeholder="blur"
                width={500}
                height={300}
              />
            </div>

            <div className="z-10 flex justify-center gap-3 px-2 lg:px-0">
              {aboutUsItems.map((item, idx) => (
                <AboutUsCard
                  key={idx}
                  icon={item.icon}
                  number={item.number}
                  text={item.text}
                />
              ))}
            </div>
          </div>
          <div className="mx-4 space-y-3 px-4 text-[10px] text-black md:text-base lg:mx-0 lg:space-y-6 lg:px-0 lg:text-lg xl:text-xl">
            <p>{aboutUsDetail.p1}</p>
            <p>{aboutUsDetail.p2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
