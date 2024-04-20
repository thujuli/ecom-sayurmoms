import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { Cart } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const priceToIDR = (price: number) => {
  return price.toLocaleString("id-ID");
};

export const numberFormat = (number: number): string => {
  if (number < 1000) {
    return number.toString();
  } else if (number < 10000) {
    return (number / 1000).toFixed(1) + "rb";
  } else if (number < 1000000) {
    return Math.floor(number / 1000) + "rb";
  } else {
    return Math.floor(number / 1000000) + "jt";
  }
};

export const generateWALink = (phoneNumber: string, message = ""): string => {
  phoneNumber = phoneNumber.replace(/\D/g, "");

  let link = `https://wa.me/${phoneNumber}`;
  if (message) {
    let encodedMessage = encodeURIComponent(message);
    link += `?text=${encodedMessage}`;
  }

  return link;
};

type Params = {
  date: Date;
  delivery: string;
  name: string;
  phone: string;
  address?: string;
  note?: string;
  voucher?: string;
};

export const generateWAMsg = (
  cart: Cart[],
  totalAmount: number,
  params: Params,
) => {
  const { date, delivery, name, phone, address, note, voucher } = params;
  const formattedDate = format(date, "PPP");

  const addressText = `Alamat: ${address ? `*${address}*` : "-"}`;
  const noteText = `Catatan: ${note ? `*${note}*` : "-"}`;
  const voucherText = `Voucher: ${voucher ? `*${voucher}*` : "-"}`;

  let productsText = "";
  cart.forEach((product) => {
    const { qty, title, price, sku, discount } = product;
    const fixedPrice = discount ? price - (price * discount) / 100 : price;

    productsText += `*SKU-${sku}* | *${qty}* ${title} - Rp.${priceToIDR(fixedPrice * qty)}\n`;
  });

  const orderText = `*ORDER: #${new Date().getTime()}*`;
  const itemText = cart.length > 1 ? "items" : "item";
  const sellerNote =
    "Biaya pengiriman akan di konfirmasi oleh admin kami sesuai jarak pengiriman dan opsi yang dipilih. Kurir sameday pengiriman beberapa titik sehingga lebih murah dibanding kurir instant.";

  const customerDetailText = `Pembeli: *${name}*
No. Telp: *${phone}*
Layanan: *${delivery}*
${addressText}
${noteText}
${voucherText}
Jadwal Pengiriman: *${formattedDate}*`;

  const totalText = `Total Items: ${priceToIDR(totalAmount)} (${cart.length} ${itemText})
*Total: ${priceToIDR(totalAmount)}*`;

  let WAMsg = `${orderText}

${productsText}
${totalText}

${customerDetailText}

${sellerNote}`;

  return WAMsg;
};
