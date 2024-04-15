import Navbar from "@/views/navbar";
import Container from "@/components/container";
import StoreProvider from "./store-provider";
import { metadataDetail } from "@/lib/helper";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: metadataDetail.title,
  description: metadataDetail.description,
};

export const revalidate = 0;

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
          <Container>
            <Navbar />
            {children}
          </Container>
        </body>
      </html>
    </StoreProvider>
  );
}
