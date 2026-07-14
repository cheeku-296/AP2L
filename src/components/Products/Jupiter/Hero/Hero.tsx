"use client";

// import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ParallaxBackground from "@/src/components/common/ParallaxBackground/ParallaxBackground";
import { jupiterHeroData } from "./data";

export default function JupiterHero() {
  const { backgroundImage, titleLine1, titleHighlight, titleLine2, description, buttonText } = jupiterHeroData;

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-900 pt-24 pb-12">
      
      <ParallaxBackground>
        <Image
          src={backgroundImage}
          alt="Jupiter Platform"
          fill
          priority
          className="object-cover object-right md:object-center transition-opacity duration-500 opacity-100 scale-100"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r pointer-events-none transition-colors duration-500 from-slate-900/95 via-slate-900/80 to-slate-900/30" /> */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none transition-colors duration-500 from-slate-900 to-transparent" /> */}
      </ParallaxBackground>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-start justify-center">
        
        <div className="max-w-2xl">
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-white font-urbanist">
            {titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">{titleHighlight}</span> <br />
            {titleLine2}
          </h1>
          
          <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl font-manrope leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-slate-600 px-6 py-3 text-sm font-semibold font-manrope text-white shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 hover:bg-blue-400"
            >
              {buttonText}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}
