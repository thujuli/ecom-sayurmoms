import backgroundDesktop from "@/public/images/home/testimonials-desktop-bg.png";
import backgroundMobile from "@/public/images/home/testimonials-mobile-bg.png";
import { testimonialItems } from "@/lib/helper";

import Image from "next/image";
import React from "react";
import TestimonialCard from "@/components/home/testimonial-card";
import Marquee from "react-fast-marquee";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative">
      {/* Desktop View*/}
      <div className="relative inset-0 z-0 hidden lg:block">
        <Image
          src={backgroundDesktop}
          alt="Testimonials Desktop Background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 lg:py-24">
          <p className="pb-4 text-center text-3xl font-medium text-white">
            Ulasan
          </p>
          <h2 className="mb-16 text-center text-5xl font-extrabold text-white xl:text-6xl">
            Apa kata mereka{" "}
            <div className="mt-4">
              tentang <span className="text-[#A7BB09]">Sayurmoms?</span>{" "}
            </div>
          </h2>
          <Marquee pauseOnHover={true} speed={30} gradient={false}>
            {testimonialItems.map((testimonial, idx) => (
              <div key={idx} className="mx-6 flex-shrink-0">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Mobile View */}
      <div className="relative z-10 h-[360px] w-full overflow-hidden md:h-[440px] lg:hidden">
        <Image
          src={backgroundMobile}
          alt="Testimonials Mobile Background"
          fill
          className="absolute inset-0 z-0 object-cover"
        />
        <div className="relative z-10 py-6">
          <p className="pb-2 text-center text-sm font-medium text-white md:text-base">
            Ulasan
          </p>
          <h2 className="mb-6 text-center text-xl font-extrabold text-white md:mb-8 md:text-2xl">
            Apa kata mereka
            <div className="lg:mt-1">
              tentang <span className="text-[#A7BB09]">Sayurmoms?</span>
            </div>
          </h2>
          <Marquee pauseOnHover={true} speed={30} gradient={false}>
            {testimonialItems.map((testimonial, idx) => (
              <div key={idx} className="mx-2 sm:mx-3">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
