"use client";

import { whatsapp } from "@/lib/helper";

import Image from "next/image";
import React from "react";

const WhatsappButton: React.FC = () => {
  return (
    <>
      {/* image for moblie */}
      <Image
        src={whatsapp.image}
        alt={whatsapp.name}
        width={50}
        height={50}
        onClick={() => window.open(whatsapp.link, "_blank")?.focus()}
        className="md:hidden fixed z-50 bottom-[3%] right-[2%] cursor-pointer"
      />
      {/* image for tablet */}
      <Image
        src={whatsapp.image}
        alt={whatsapp.name}
        width={60}
        height={60}
        onClick={() => window.open(whatsapp.link, "_blank")?.focus()}
        className="hidden md:inline-block lg:hidden fixed z-50 bottom-[3%] right-[2%] cursor-pointer"
      />
      {/* image for laptop */}
      <Image
        src={whatsapp.image}
        alt={whatsapp.name}
        width={90}
        height={90}
        onClick={() => window.open(whatsapp.link, "_blank")?.focus()}
        className="hidden lg:inline-block fixed z-50 bottom-[3%] right-[2%] cursor-pointer"
      />
    </>
  );
};

export default WhatsappButton;
