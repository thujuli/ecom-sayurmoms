import BannerCard from "@/components/home/banner-card";
import { getBanner } from "@/lib/data";
import React from "react";

const Banner: React.FC = async () => {
  const banner = await getBanner();

  return (
    <section id="banner" className="custom-h-screen">
      <BannerCard title={banner.title.rendered} image={banner.acf.image} />
    </section>
  );
};

export default Banner;
