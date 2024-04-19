import { z } from "zod";
import validator from "validator";

export type Category = {
  id: number;
  name: string;
  description?: string;
  acf: {
    image: string;
  };
};

export type Carousel = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    image: string;
    link: string;
  };
};

export type Banner = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    image: string;
  };
};

export type Product = {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    sku: string;
    category: {
      term_id: number;
      name: string;
      slug: string;
      term_group: number;
      term_taxonomy_id: number;
      taxonomy: string;
      description: string;
      parent: number;
      count: number;
      filter: string;
    };
    image: string;
    price: string;
    sold: string;
    rating: string;
    discount?: string;
  };
};

export type Cart = {
  sku: string;
  title: string;
  image: string;
  price: number;
  discount?: number;
  qty: number;
};

const delivery = [
  "Pick Up",
  "Paxel Sameday",
  "Borzo Instant",
  "Grab Sameday",
] as const;

export const CheckoutSchema = z.object({
  name: z
    .string({ required_error: "Nama tidak boleh kosong!" })
    .min(3, { message: "Masukkan nama minimal 3 karakter!" })
    .max(255, { message: "Masukkan nama maksimal 255 karakter!" }),
  phone: z
    .string({ required_error: "No. Telp tidak boleh kosong!" })
    .refine(validator.isMobilePhone, "No. Telp tidak valid!"),
  voucher: z.string().optional(),
  address: z.string().optional(),
  note: z.string().optional(),
  delivery: z.enum(delivery, {
    required_error: "Pilih Pengiriman tidak boleh kosong!",
  }),
  date: z.date({ required_error: "Tanggal Pengiriman tidak boleh kosong!" }),
});

export type Checkout = z.infer<typeof CheckoutSchema>;
