"use client";

import Link from "next/link";
import Image from "next/image";
import ParallaxBackground from "@/src/components/common/ParallaxBackground/ParallaxBackground";
import { netraaHeroData } from "./data";

export default function NetraaHero() {
  const { 
    backgroundImage, 
    eyebrow, 
    titleLine1, 
    titleLine2, 
    description, 
    primaryButtonText, 
    primaryButtonLink, 
    secondaryButtonText, 
    secondaryButtonLink 
  } = netraaHeroData;

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#1A1736] pt-24 pb-12">
      
      <ParallaxBackground>
        <Image
          src={backgroundImage}
          alt="Netraa Platform"
          fill
          priority
          className="object-cover object-center transition-opacity duration-500 opacity-100 scale-100 blur-[0px]"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b pointer-events-none transition-colors duration-500 from-[#1A1736]/95 via-[#1A1736]/80 to-[#1A1736]/60" /> */}
      </ParallaxBackground>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-start justify-center">
        
        <div className="max-w-3xl flex flex-col items-start">
          <span className="uppercase tracking-[0.2em] text-xs font-bold text-[#8C8CA1] mb-8 font-inter">
            {eyebrow}
          </span>
          
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-[56px] font-bold leading-[1.15] tracking-tight text-white font-urbanist">
            {titleLine1} <br />
            {titleLine2}
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 mb-12 max-w-3xl font-manrope leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="group flex w-full sm:w-auto items-center justify-center rounded-sm bg-[#FF6A3D] px-8 py-3.5 text-[15px] font-semibold font-manrope text-white transition-all hover:bg-[#E85D33]"
            >
              Explore Platform
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
