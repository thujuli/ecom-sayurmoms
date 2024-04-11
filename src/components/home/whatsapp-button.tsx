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
        className="fixed bottom-[3%] right-[2%] z-50 cursor-pointer md:hidden"
      />
      {/* image for tablet */}
      <Image
        src={whatsapp.image}
        alt={whatsapp.name}
        width={60}
        height={60}
        onClick={() => window.open(whatsapp.link, "_blank")?.focus()}
        className="fixed bottom-[3%] right-[2%] z-50 hidden cursor-pointer md:inline-block lg:hidden"
      />
      {/* image for laptop */}
      <Image
        src={whatsapp.image}
        alt={whatsapp.name}
        width={90}
        height={90}
        onClick={() => window.open(whatsapp.link, "_blank")?.focus()}
        className="fixed bottom-[3%] right-[2%] z-50 hidden cursor-pointer lg:inline-block"
      />
    </>
  );
};

export default WhatsappButton;
