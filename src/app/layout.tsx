import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/views/navbar";
import Container from "@/components/container";
import StoreProvider from "./store-provider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Sayurmoms - Pasar Sayur dan Buah Online",
  description:
    "Sayurmoms merupakan toko online yang menyediakan berbagai bahan makanan seperti sayur, buah, daging, ikan-ikanan, frozen food dan aneka bahan kering lainnya. Beroperasi di Surabaya sejak Juni 2020, Sayurmoms telah melayani pelanggan di berbagai kota di pulau Jawa utamanya daerah Surabaya dan sekitarnya.",
};

export const revalidate = 3600;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="scroll-smooth">
        <body
          className={cn(
            "min-h-screen font-jakarta antialiased",
            jakarta.variable,
          )}
        >
          <Navbar />
          <Container>{children}</Container>
        </body>
      </html>
    </StoreProvider>
  );
}
