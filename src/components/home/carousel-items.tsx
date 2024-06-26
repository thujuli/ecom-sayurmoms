"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Carousel as CarouselType } from "@/lib/types";

type Props = {
  carousels: CarouselType[];
};

const CarouselItems: React.FC<Props> = (props) => {
  const { carousels } = props;

  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const renderCarousels = () => {
    return carousels.map((carousel, idx) => (
      <CarouselItem key={idx} className="custom-h-screen">
        <AspectRatio ratio={1536 / 782} className="custom-h-screen">
          <Image src={carousel.image} alt={carousel.title} fill priority />
          <button
            type="button"
            onClick={() => window.open(carousel.link, "_blank")?.focus()}
            className="absolute bottom-[9%] left-[10%] rounded-full bg-black px-2 py-1 text-[10px] text-gray md:bottom-11 lg:bottom-14 lg:px-4 lg:py-2 lg:text-base xl:bottom-16"
          >
            Cek Sekarang
          </button>
        </AspectRatio>
      </CarouselItem>
    ));
  };

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full"
    >
      <CarouselContent>{renderCarousels()}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselItems;
