import shopeeLogo from "@/public/images/shopee-logo.png";
import tokopediaLogo from "@/public/images/tokopedia-logo.png";
import whatsappLogo from "@/public/images/whatsapp-logo.png";
import testimonials01 from "@/public/images/home/testimonials-01.png";
import testimonials02 from "@/public/images/home/testimonials-02.png";
import testimonials03 from "@/public/images/home/testimonials-03.png";
import testimonials04 from "@/public/images/home/testimonials-04.png";

export const metadataDetail = {
  title: "Sayurmoms - Pasar Sayur dan Buah Online",
  description:
    "Sayurmoms merupakan toko online yang menyediakan berbagai bahan makanan seperti sayur, buah, daging, ikan-ikanan, frozen food dan aneka bahan kering lainnya. Beroperasi di Surabaya sejak Juni 2020, Sayurmoms telah melayani pelanggan di berbagai kota di pulau Jawa utamanya daerah Surabaya dan sekitarnya.",
};

export const menuItems = [
  { name: "Beranda", link: "/#navbar" },
  { name: "Produk Unggulan", link: "/#featured-products" },
  { name: "Tentang Kami", link: "/#about-us" },
  { name: "Produk", link: "/" },
  { name: "Ulasan", link: "/#testimonials" },
  { name: "FAQ", link: "/" },
];

export const eCommerceItems = [
  {
    name: "Shopee Logo",
    image: shopeeLogo,
    link: "https://shopee.co.id/sayurmoms.id",
  },
  {
    name: "Tokopedia Logo",
    image: tokopediaLogo,
    link: "https://www.tokopedia.com/sayurmoms",
  },
];

export const whatsapp = {
  name: "Whatsapp Logo",
  image: whatsappLogo,
  link: "https://wa.link/x4ajgs",
};

export const aboutUsDetail = {
  p1: "Sayurmoms merupakan pasar online yang menyediakan berbagai bahan makanan seperti sayur, buah, daging, ikan, frozen food, bumbu dapur dan aneka bahan makanan kering lainnya.",
  p2: "Beroperasi di kota Surabaya sejak Juni 2020, Sayurmoms kini telah melayani banyak pelanggan di berbagai kota di pulau Jawa.",
};

export const testimonialItems = [
  {
    avatar: testimonials01,
    testimonial:
      "Pesanan sudah sampai sesuai order, ada sayur yang kosong di refund, respon penjual sangat baik!",
    name: "Diana Salsabilla",
    company: "Shopee",
    rating: 4.8,
  },
  {
    avatar: testimonials02,
    testimonial:
      "Sudah langganan belanja sayur mayur disini. Murah, fresh dan free ongkir juga..",
    name: "Vanessa Priscilla",
    company: "Shopee",
    rating: 4.4,
  },
  {
    avatar: testimonials03,
    testimonial:
      "Barang sesuai pesanan. Sayur buah segar. Packingnya aman dan respon sellernya ramah. HARGANYA MURAH BANGET!!",
    name: "Citra Mutiara A.",
    company: "Shopee",
    rating: 5.0,
  },
  {
    avatar: testimonials04,
    testimonial:
      "Sudah langganan belanja sayur mayur disini. Murah, fresh dan free ongkir juga..",
    name: "Natasya Andriana",
    company: "Shopee",
    rating: 4.2,
  },
];
