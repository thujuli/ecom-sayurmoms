import Benefits from "@/views/home/benefits";
import Carousels from "@/views/home/carousels";
import Categories from "@/views/home/categories";
import ECommerce from "@/views/home/e-commerce";

export default function Home() {
  return (
    <>
      <ECommerce />
      <Carousels />
      <Benefits />
      <Categories />
    </>
  );
}
