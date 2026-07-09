import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ParallaxBackground from "@/src/components/common/ParallaxBackground/ParallaxBackground";
import { shieldvueHeroData } from "./data";

export default function ShieldVUEHero() {
  const { backgroundImage, titleLine1, titleHighlight, description, buttonText, buttonLink } = shieldvueHeroData;

  return (
    <div className="lg:p-2">
      <section className="relative w-full min-h-screen md:min-min-h-screen rounded-none md: flex items-center overflow-hidden pt-24 pb-12 bg-slate-50">
        
        <ParallaxBackground>
          <Image
            src={backgroundImage}
            alt="ShieldVUE Background"
            fill
            priority
            className="object-cover object-right md:object-center opacity-100"
          />
        </ParallaxBackground>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col items-start justify-center">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-[-0.02em] text-slate-900">
              <span className="md:whitespace-nowrap">{titleLine1}</span> <br />
              <span className="text-[#6843b7] font-semibold md:whitespace-nowrap">{titleHighlight}</span>
            </h1>
            
            <p className="font-manrope text-base md:text-lg text-slate-600 mb-10 max-w-2xl leading-relaxed">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href={buttonLink}
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-[#6843b7] px-6 py-3 font-manrope text-sm font-semibold text-white shadow-lg shadow-[#6843b7]/25 transition-all hover:-translate-y-0.5 hover:bg-[#5a3aa3]"
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
