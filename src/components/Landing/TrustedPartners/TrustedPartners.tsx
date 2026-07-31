"use client";

import { motion } from "framer-motion";
import { Landmark, Building, ShieldCheck, Activity, Briefcase, Wallet } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "CRIS", icon: Building, logo: "/clients/cris_logo.png" },
  { name: "Axis Bank", icon: Landmark, logo: "/clients/axis_bank.png" },
  { name: "FDC", icon: Activity, logo: "/clients/fdc.jpeg" },
  { name: "Protean", icon: ShieldCheck, logo: "/clients/protean.svg" },
  { name: "L&T Finance", icon: Wallet },
  { name: "Bank of Maharashtra", icon: Landmark, logo: "/clients/bank_of_maharashtra.svg" },
  { name: "UCO Bank", icon: Landmark, logo: "/clients/uco_bank.svg" },
  { name: "RBL Bank", icon: Landmark, logo: "/clients/rbl_bank.svg" },
  { name: "ABCD Bank", icon: Landmark, logo: "/clients/abcd_bank.png" },
  { name: "Generali Central Life Insurance", icon: ShieldCheck, logo: "/clients/generali_centeral.png" },
  { name: "NSDL Payments Bank", icon: Wallet, logo: "/clients/nsdl.png" },
  { name: "IDBI Bank", icon: Landmark, logo: "/clients/idbi_bank.png" },
  { name: "Muscat Finance", icon: Briefcase, logo: "/clients/muscat_finance.png" },
];

export default function TrustedPartners() {
  // Duplicate array to create a seamless infinite loop
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-6 md:py-8">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Static Text Section (Left) */}
          <div className="w-full md:w-[30%] lg:w-[25%] mb-8 md:mb-0 flex-shrink-0 z-20">
            <p className="font-manrope text-lg font-medium leading-relaxed text-slate-500 dark:text-slate-400 text-left">
              Trusted by industry leaders<br />
               worldwide.
            </p>
          </div>

          {/* Marquee Container (Right) */}
          <div className="relative w-full md:w-[70%] lg:w-[75%] flex flex-col items-center justify-center overflow-hidden">
            
            {/* Left/Right Fade Masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent" />

            {/* Scrolling Content */}
            <div className="flex w-[200%] overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 40,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="flex w-full items-center justify-around gap-12 sm:gap-20"
              >
                {marqueePartners.map((partner, index) => {
                  const Icon = partner.icon;
                  return (
                    <div key={index} className="flex items-center justify-center gap-3 whitespace-nowrap group cursor-default opacity-80 hover:opacity-100 transition-opacity">
                      {partner.logo ? (
                        <div className="relative h-7 w-7 md:h-8 md:w-8 transition-all duration-300 shrink-0">
                          <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                        </div>
                      ) : (
                        <Icon size={22} strokeWidth={1.5} className="text-slate-400 dark:text-slate-500 shrink-0" />
                      )}
                      <h3 className="font-urbanist text-lg font-bold tracking-tight text-slate-500 dark:text-slate-400">
                        {partner.name}
                      </h3>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
