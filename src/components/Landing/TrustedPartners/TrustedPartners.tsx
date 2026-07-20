"use client";

import { motion } from "framer-motion";
import { Landmark, Building, ShieldCheck, Activity, Briefcase, Wallet } from "lucide-react";

const partners = [
  { name: "CRIS", icon: Building },
  { name: "Axis Bank", icon: Landmark },
  { name: "FDC", icon: Activity },
  { name: "Protean", icon: ShieldCheck },
  { name: "L&T Finance", icon: Wallet },
  { name: "Bank of Maharashtra", icon: Landmark },
  { name: "UCO Bank", icon: Landmark },
  { name: "RBL Bank", icon: Landmark },
  { name: "ABCD Bank", icon: Landmark },
  { name: "Generali Central Life Insurance", icon: ShieldCheck },
  { name: "NSDL Payments Bank", icon: Wallet },
  { name: "IDBI Bank", icon: Landmark },
  { name: "Muscat Finance", icon: Briefcase },
];

export default function TrustedPartners() {
  // Duplicate array to create a seamless infinite loop
  const marqueePartners = [...partners, ...partners];

  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-12 md:py-16">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Static Text Section (Left) */}
          <div className="w-full md:w-[30%] lg:w-[25%] mb-8 md:mb-0 flex-shrink-0 z-20">
            <p className="font-manrope text-[15px] font-medium leading-relaxed text-slate-500 dark:text-slate-400 text-left">
              Backed by the best companies<br />
              and visionary angels.
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
                    <div
                      key={index}
                      className="flex items-center justify-center gap-3 whitespace-nowrap group cursor-default opacity-80 hover:opacity-100 transition-opacity"
                    >
                      <Icon 
                        size={22} 
                        strokeWidth={1.5} 
                        className="text-slate-400 dark:text-slate-500" 
                      />
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
