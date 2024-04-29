import shopeeLogo from "@/public/images/shopee-logo.png";
import tokopediaLogo from "@/public/images/tokopedia-logo.png";
import whatsappLogo from "@/public/images/whatsapp-logo.png";
import testimonials01 from "@/public/images/home/testimonials-01.png";
import testimonials02 from "@/public/images/home/testimonials-02.png";
import testimonials03 from "@/public/images/home/testimonials-03.png";
import testimonials04 from "@/public/images/home/testimonials-04.png";
import bcaLogo from "@/public/images/home/bca-logo.png";
import ovoLogo from "@/public/images/home/ovo-logo.png";
import shopeePayLogo from "@/public/images/home/shopee-pay-logo.png";

export const metadataDetail = {
  title: "Sayurmoms - Pasar Sayur dan Buah Online",
  description:
    "Sayurmoms merupakan toko online yang menyediakan berbagai bahan makanan seperti sayur, buah, daging, ikan-ikanan, frozen food dan aneka bahan kering lainnya. Beroperasi di Surabaya sejak Juni 2020, Sayurmoms telah melayani pelanggan di berbagai kota di pulau Jawa utamanya daerah Surabaya dan sekitarnya.",
};

export const menuItems = [
  { name: "Beranda", link: "/#navbar" },
  { name: "Produk Unggulan", link: "/#featured-products" },
  { name: "Tentang Kami", link: "/#about-us" },
  { name: "Ulasan", link: "/#testimonials" },
  { name: "FAQ", link: "/#faq-footer" },
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

export const faqItems = [
  {
    question: "Bagaimana cara memesan produk di Sayurmoms?",
    prefix: "Cara memesan",
    answer: `Moms bisa memesan produk kami melalui website dan marketplace seperti Shopee dan Tokopedia. Untuk pemesanan pada website, Moms akan memilih produk terlebih dahulu, lalu akan diarahkan untuk checkout melalui Whatsapp Business yang kami sediakan. Sedangkan, pemesanan pada marketplace berjalan mengikuti ketentuan marketplace tersebut.`,
  },
  {
    question: "Kapan produk saya akan dikirim?",
    prefix: "Kapan dikirim",
    answer: `• Produk akan dikirim H+1 (pukul 09.30-16.00), apabila pesanan masuk maksimal pukul 21.00 pada hari pemesanan.
      • Produk akan dikirim H+2, apabila dipesan di atas pukul 21.00
      • Produk dapat dikirim di Hari H, namun harus konfirmasi admin terlebih dahulu
      • Pengiriman hari minggu LIBUR`,
  },
  {
    question: "Apa saja pilihan kurir yang bisa dipilih?",
    prefix: "Pilihan kurir",
    answer: `• Paxel Sameday
      • Borzo Instant
      • Grab Sameday
      • Sayurmoms juga menyediakan pilihan untuk Pickup Sendiri di toko kami (Jalan Raya Gunung Anyar Emas)`,
  },
  {
    question: "Dimana saya dapat melihat promo yang ada?",
    prefix: "Melihat promo",
    answer:
      "Moms bisa melihat di media sosial kami untuk informasi lebih lengkap. Instagram @sayurmoms.id",
  },
  {
    question: "Bagaimana cara menggunakan voucher saya?",
    prefix: "Menggunakan voucher",
    answer: `Moms dapat mengecek voucher dengan memasukan kode voucher. Apabila terjadi potongan harga, potongan atau gratis jasa kurir, maka voucher masih aktif. Selain itu, Moms dapat melihat detail voucher pada media sosial kami, ya! Instagram @sayurmoms.id`,
  },
  {
    question: "Bagaimana cara mendapatkan Gratis Ongkir?",
    prefix: "Gratis ongkir",
    answer: `Anda bisa mendapatkan gratis ongkir dengan pengiriman oleh team Sayurmoms sesuai rute jadwal berikut :
      • Produk akan dikirim H+1 (pukul 09.30-16.00), apabila pesanan masuk maksimal pukul 21.00 pada hari pemesanan.
      • Produk akan dikirim H+2, apabila dipesan di atas pukul 21.00
      • Produk dapat dikirim di Hari H, namun harus konfirmasi admin terlebih dahulu
      • Pengiriman hari minggu LIBUR`,
  },
];

export const usefulLinks = [
  {
    name: "Payment & Tax",
  },
  {
    name: "Terms of Services",
  },
  {
    name: "Discount",
  },
];

export const paymentMethods = [
  {
    name: "BCA Logo",
    image: bcaLogo,
  },
  {
    name: "OVO Logo",
    image: ovoLogo,
  },
  {
    name: "ShopeePay Logo",
    image: shopeePayLogo,
  },
];
