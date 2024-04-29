import CarouselItems from "@/components/home/carousel-items";
import { fetchCarousel } from "@/lib/data";
import React from "react";

const Carousels: React.FC = async () => {
  const carousels = await fetchCarousel();

  return (
    <section id="carousels">
      <CarouselItems carousels={carousels} />
    </section>
  );
};

export default Carousels;
