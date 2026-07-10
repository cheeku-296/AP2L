"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ParallaxBackground from "@/src/components/common/ParallaxBackground/ParallaxBackground";
import { finxploreHeroData } from "./data";

export default function FinxploreHero() {
  const { backgroundImage, titleLine1, titleHighlight, titleLine2, description, buttonText, buttonLink } = finxploreHeroData;

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-slate-900 pt-24 pb-12">
      <ParallaxBackground>
        <Image
          src={backgroundImage}
          alt="Finxplore Platform"
          fill
          priority
          className="object-cover object-center opacity-100 scale-110"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50 pointer-events-none" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
      </ParallaxBackground>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-start justify-center">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-[-0.02em] text-white">
            {titleLine1} <br />
            {titleHighlight} <br />
            {titleLine2}
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl font-manrope leading-relaxed">
            {description}
          </p>
          <button
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#6843B7] px-6 py-3 text-sm font-semibold font-manrope text-white shadow-lg shadow-[#6843B7]/25 transition-all hover:-translate-y-0.5 hover:bg-[#5a3aa3]"
          >
            {buttonText}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}