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

type Props = {
  carousels: any[];
};

const CarouselItems: React.FC<Props> = (props) => {
  const { carousels } = props;

  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full"
    >
      <CarouselContent>
        {carousels.map((carousel) => (
          <CarouselItem key={carousel.id}>
            <AspectRatio ratio={48 / 25}>
              <Image
                src={carousel.acf.image}
                alt={carousel.title.rendered}
                fill
                quality={100}
                sizes="100vw"
              />
              <button
                type="button"
                onClick={() =>
                  window.open(carousel.acf.link, "_blank")?.focus()
                }
                className="absolute bottom-[9%] left-[10%] rounded-full bg-black px-2 py-1 text-[10px] text-gray md:bottom-11 lg:bottom-14 lg:px-4 lg:py-2 lg:text-base xl:bottom-16"
              >
                Cek Sekarang
              </button>
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselItems;
