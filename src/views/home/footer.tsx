import faqIllustration from "@/public/images/home/footer-faq-illustration.png";
import backgroundMobile from "@/public/images/home/footer-mobile-bg.png";
import sayurmomsLogo from "@/public/images/logo.png";
import tractorIllustration from "@/public/images/home/footer-tractor-illustration.png";
import {
  eCommerceItems,
  faqItems,
  paymentMethods,
  usefulLinks,
} from "@/lib/helper";
import {
  FooterCategoryCardMobile,
  FooterCategoryCardDesktop,
} from "@/components/home/footer-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <section
      id="faq-footer"
      className="relative flex items-start justify-center bg-none pt-[30px] lg:pt-[60px]"
    >
      <div className="flex flex-col items-center">
        {/* FAQ */}
        <div className="-mb-2 flex items-center gap-2 lg:mb-8 lg:gap-4">
          <Image
            src={faqIllustration}
            alt="FAQ Illustration"
            width={400}
            height={400}
            className="h-[100px] w-[100px] md:h-[140px] md:w-[140px] lg:h-[240px] lg:w-[240px] xl:h-[300px] xl:w-[300px]"
          />
          <h2 className="mr-8 text-left text-xl font-extrabold md:text-2xl lg:mr-0 lg:text-5xl xl:text-6xl">
            {`Frequently `}
            <br className="hidden xl:block" />
            Asked
            <br />
            Questions
          </h2>
        </div>
        <div className="px-4 pt-6 lg:pt-10">
          <Accordion type="single" collapsible>
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="mb-3 w-full max-w-[530px] rounded-[10px] bg-[#181818] py-2 lg:mb-5 lg:max-w-[800px] lg:rounded-[40px] lg:py-0 xl:max-w-[1200.6px]"
              >
                <AccordionTrigger className="font-sans-jakarta py-2 pl-4 pr-1 text-left text-sm font-medium leading-[20px] text-white md:text-base lg:ml-10 lg:py-11 lg:pr-0 lg:text-3xl lg:font-bold lg:leading-[47.52px] xl:text-4xl">
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="leading-3 text-white lg:leading-10">
                  <div className="py-2 lg:py-4">
                    <div className="mb-2 ml-4 w-[90%] border-b border-[#cbe023] lg:mb-4 lg:ml-10 lg:w-[1120px]" />
                    <div className="-mb-6 ml-4 mr-4 whitespace-pre-line pt-2 text-[10px] font-normal md:text-sm lg:mb-0 lg:ml-12 lg:mr-[60px] lg:pt-4 lg:text-xl lg:font-medium xl:text-3xl">
                      {item.answer.split("\n").map((line, i) => (
                        <p key={i} className="mb-1 lg:mb-2">
                          {line.startsWith("•") ? "• " : ""}
                          {line.replace(/^•\s*/, "")}
                        </p>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-6 block w-full lg:hidden">
          <Image
            src={backgroundMobile}
            alt="FAQ Mobile Background"
            width={397}
            height={135}
            className="w-full"
          />
        </div>

        {/* Footer */}
        <div className="mt-[15px] flex w-full flex-col rounded-[35px] bg-[#F8F8F8] lg:mt-[100px] lg:block lg:h-[1720px]">
          <div className="gap-8 lg:grid lg:w-full lg:grid-cols-3 lg:justify-between lg:px-24 lg:pt-32">
            {/* Mobile */}
            <div className="relative flex h-[700px] flex-col p-6 lg:hidden">
              <div className="mb-6 flex flex-col items-start">
                <Image
                  src={sayurmomsLogo}
                  alt="Sayurmoms Logo"
                  width={200}
                  height={67}
                  className="mb-4"
                />
                <div>
                  <h3 className="mb-2 text-lg font-bold">Kontak kami</h3>
                  <div className="text-gray-400 flex flex-row items-center">
                    <div className="flex items-center">
                      <Phone className="mr-2 h-5 w-5" />
                      <p className="text-sm">(021) 456345079</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-8 grid grid-cols-2 gap-8">
                <FooterCategoryCardMobile />
                <div>
                  <h3 className="mb-4 text-lg font-bold">Useful Links</h3>
                  {usefulLinks.map((item, idx) => (
                    <p key={idx} className="mb-2 text-sm text-[#707070]">
                      {item.name}
                    </p>
                  ))}
                  <h3 className="mb-3 text-lg font-bold">E-Commerce</h3>
                  <div className="flex flex-col gap-2">
                    {eCommerceItems.map((item, idx) => (
                      <Image
                        key={idx}
                        src={item.image}
                        alt={item.name}
                        width={90}
                        height={32}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-16">
                <h3 className="mb-4 text-lg font-bold">Metode Pembayaran</h3>
                <div className="flex items-center gap-2">
                  {paymentMethods.map((item, idx) => (
                    <Image
                      key={idx}
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={22}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <Image
                  src={tractorIllustration}
                  alt="Tractor Image"
                  layout="responsive"
                  width={428}
                  height={143}
                  objectFit="cover"
                  style={{ marginTop: "40px" }}
                />
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden flex-col items-start gap-8 lg:flex">
              <Image
                src={sayurmomsLogo}
                alt="Sayurmoms Logo"
                width={460}
                height={171}
              />
              <div className="flex flex-col gap-8">
                <h3 className="mt-4 text-4xl font-bold text-black xl:mb-4">
                  Kontak Kami
                </h3>
                <div className="flex flex-row flex-wrap items-center gap-5 lg:flex-col lg:gap-8">
                  <div className="flex items-center gap-4">
                    <Phone className="h-10 w-10 text-[#707070]" />
                    <p className="text-[#707070] lg:text-2xl xl:text-3xl">
                      (021) 456345079
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 lg:mt-[100px]">
                <h3 className="text-4xl font-bold text-black xl:mb-4">
                  E-Commerce
                </h3>
                <div className="flex gap-8">
                  {eCommerceItems.map((item, idx) => (
                    <Image
                      key={idx}
                      src={item.image}
                      alt={item.name}
                      width={145}
                      height={46}
                      className="w-[120px]"
                    />
                  ))}
                </div>
              </div>
            </div>
            <FooterCategoryCardDesktop />
            <div className="flex w-full flex-col items-center lg:w-auto lg:items-start lg:gap-8 lg:pl-4 xl:pl-8">
              <div className="hidden flex-col lg:flex lg:gap-6 xl:gap-10">
                <h3 className="mb-4 text-2xl font-bold text-black lg:text-4xl">
                  Useful Links
                </h3>
                {usefulLinks.map((item, idx) => (
                  <p key={idx} className="text-3xl text-[#707070]">
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="hidden flex-col gap-8 lg:mt-32 lg:flex">
                <h3 className="text-4xl font-bold text-black">
                  Metode Pembayaran
                </h3>
                <div className="grid grid-cols-2 items-center gap-4 xl:grid-cols-3">
                  {paymentMethods.map((item, idx) => (
                    <Image
                      key={idx}
                      src={item.image}
                      alt={item.name}
                      width={142}
                      height={44}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 lg:h-[1282px] lg:w-full">
          <Image
            src={tractorIllustration}
            alt="Tractor Image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
