"use client";

import { whatsapp } from "@/lib/helper";
import Image from "next/image";
import React from "react";

const WhatsappButton: React.FC = () => {
  return (
    <>
      <Image
        src={whatsapp.image}
        alt={whatsapp.name}
        width={90}
        height={90}
        onClick={() => window.open(whatsapp.link, "_blank")?.focus()}
        className="fixed bottom-[3%] right-[2%] z-50 h-[50px] w-[50px] cursor-pointer md:h-[60px] md:w-[60px] lg:h-[90px] lg:w-[90px]"
      />
    </>
  );
};

export default WhatsappButton;
