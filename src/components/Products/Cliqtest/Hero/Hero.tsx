import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ParallaxBackground from "@/src/components/common/ParallaxBackground/ParallaxBackground";
import { cliqtestHeroData } from "./data";

export default function CliqtestHero() {
  const { backgroundImage, titleLine1, titleHighlight, titleLine2, description, buttonText, buttonLink } = cliqtestHeroData;

  return (
    <div className="lg:p-2">
      <section className="relative w-full min-h-screen md:min-min-h-screen rounded-none md: flex items-center overflow-hidden bg-black pt-24 pb-12">
        
        <ParallaxBackground>
          <Image
            src={backgroundImage}
            alt="Cliqtest Platform"
            fill
            priority
            className="object-cover object-center transition-opacity duration-500 opacity-100 scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r pointer-events-none transition-colors duration-500 from-black/95 via-black/80 to-black/30" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t pointer-events-none transition-colors duration-500 from-black to-transparent" />
        </ParallaxBackground>
        
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b z-10 pointer-events-none transition-colors duration-500 from-black/80 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-start justify-center">
          
          <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.15] tracking-[-0.02em] text-white">
              {titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">{titleHighlight}</span> <br />
              {titleLine2}
            </h1>
            
            <p className="text-base md:text-lg text-white/70 mb-10 max-w-xl font-manrope leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={buttonLink}
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#6843b7] px-6 py-3 text-sm font-semibold font-manrope text-white shadow-lg shadow-[#6843b7]/25 transition-all hover:-translate-y-0.5 hover:bg-[#5a3aa3]"
              >
                {buttonText}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}
