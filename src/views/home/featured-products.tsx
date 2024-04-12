import featuredProductsMobile from "@/public/images/home/featured-products-mobile-bg.png";
import featuredProductsDesktop from "@/public/images/home/featured-products-desktop-bg.png";
import FeaturedProductCardWrapper from "@/components/home/featured-product-card";
import React from "react";
import Image from "next/image";

const FeaturedProducts: React.FC = () => {
  return (
    <section
      id="products"
      className="relative mt-10 h-[434px] w-full md:h-[640px] lg:mt-14 lg:h-[980px] xl:h-[1120px]"
    >
      {/* Background */}
      <Image
        src={featuredProductsMobile}
        alt="Featured Products Mobile Background"
        fill
        sizes="100vw"
        quality={100}
        className="object-fill lg:hidden"
      />
      <Image
        src={featuredProductsDesktop}
        alt="Featured Products Desktop Background"
        fill
        sizes="100vw"
        quality={100}
        className="hidden object-fill lg:block"
      />

      <div className="absolute left-1/2 top-10 w-full -translate-x-1/2 space-y-5 px-2 lg:top-1/2 lg:-translate-y-1/2 lg:space-y-10 lg:px-10 xl:space-y-[60px] xl:px-[60px]">
        {/* Heading */}
        <div className="mt-2 text-center leading-none md:mt-8 lg:mt-0 lg:leading-loose">
          <p className="text-sm text-[#232323] md:text-base lg:mb-[10px] lg:text-3xl xl:text-4xl">
            4 Pilihan Teratas
          </p>
          <h2 className="text-xl font-bold text-[#181818] md:text-2xl lg:text-5xl xl:text-6xl">
            Produk Unggulan
          </h2>
        </div>
        <FeaturedProductCardWrapper />
      </div>
    </section>
  );
};

export default FeaturedProducts;
