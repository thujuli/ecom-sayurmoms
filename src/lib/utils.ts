import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
