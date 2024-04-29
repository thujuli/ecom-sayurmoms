import BannerCard from "@/components/home/banner-card";
import { fetchBanner } from "@/lib/data";
import React from "react";

const Banner: React.FC = async () => {
  const banner = await fetchBanner();

  return (
    <section id="banner" className="custom-h-screen">
      <BannerCard title={banner.title} image={banner.image} />
    </section>
  );
};

export default Banner;
