"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, useScroll, useTransform } from "framer-motion";
import { heroData } from "./data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect: image moves slightly slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="bg-slate-50 relative w-full h-[80vh] md:min-h-screen min-h-[500px] md:min-h-[600px] rounded-none md: overflow-hidden flex flex-col items-center justify-start pt-[100px] md:pt-[120px] text-center">

      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute -top-[10%] -left-[5%] -right-[5%] h-[130%] w-[110%]"
      >
        <Image
          src="/landing-hero/light-hero1.png"
          alt="Hero Section"
          fill
          priority
          className="object-cover object-center dark:hidden"
        />
        <Image
          src="/landing-hero/dark-hero.png"
          alt="Hero Section Dark"
          fill
          priority
          className="hidden object-cover object-center dark:block"
        />
      </motion.div>

      {/* <div className="absolute inset-0 bg-white/20" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 max-w-3xl mx-auto">

        {/* Top Icon */}
        <div className="mb-6 flex h-12 w-12 items-center justify-center">
          {/* <Sparkles size={24} /> */}
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
          {heroData.heading}
        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
          {heroData.description}
        </p>

        {/* CTA Button */}
        <Link
          href={heroData.primaryButtonLink}
          className="rounded-full bg-slate-800 dark:bg-white px-8 py-4 text-sm font-semibold text-white dark:text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
        >
          {heroData.primaryButton}
        </Link>

      </div>
    </div>
  );
}
