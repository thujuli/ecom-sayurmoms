import { z } from "zod";
import validator from "validator";

export type Category = {
  title: string;
  description: string;
  image: string;
};

export type Product = {
  title: string;
  sku: string;
  category: string;
  image: string;
  price: number;
  sold: number;
  rating: number;
  discount?: number;
};

export type Banner = {
  title: string;
  image: string;
};

export type Carousel = {
  title: string;
  image: string;
  link: string;
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
