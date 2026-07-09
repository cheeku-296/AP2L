"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ContactHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="bg-slate-50 relative w-full h-[80vh] md:min-h-screen min-h-[500px] md:min-h-[600px] rounded-none md: overflow-hidden flex flex-col items-center justify-start pt-[100px] md:pt-[120px] text-center"
    >
      {/* Background Image */}

      <motion.div
        style={{ y }}
        className="absolute -left-[5%] -right-[5%] -top-[10%] h-[130%] w-[110%]"
      >
        {/* Replace these later */}

        <Image
          src="/contact-hero/contacthero_light.png"
          alt="Contact Hero"
          fill
          priority
          className="object-cover object-center dark:hidden"
        />

        <Image
          src="/contact-hero/contacthero_dark.png"
          alt="Contact Hero"
          fill
          priority
          className="hidden object-cover object-center dark:block"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/20" />

      {/* Glow */}

      <div className="absolute left-1/2 to2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Content */}

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6">
        {/* Badge */}


        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .1,
            duration: .6,
          }}
          className="
            mt-8
            text-5xl
            font-medium
            tracking-tight
            text-slate-900
            dark:text-white
            md:text-7xl
            leading-[1.08]
          "
        >
          Let's Build the
          <br />
           Future Together

          {/* <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent"> */}
           
          {/* </span> */}
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
            duration: .6,
          }}
          className="
            mt-8
            max-w-3xl
            text-lg
            font-light
            leading-relaxed
            text-slate-700
            dark:text-slate-300
            md:text-xl
          "
        >
Helping businesses accelerate digital transformation through AI, cloud, and cybersecurity.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
            duration: .6,
          }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/book-demo"
            className="
              group
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-slate-900
              px-8
              py-4
              text-sm
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
              hover:opacity-95
              dark:bg-white
              dark:text-slate-900
            "
          >
            Book a Demo

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/products"
            className="
              rounded-full
              border
              border-slate-300
              bg-white/50
              px-8
              py-4
              text-sm
              font-semibold
              text-slate-900
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/70
              dark:border-slate-700
              dark:bg-slate-900/40
              dark:text-white
            "
          >
            Explore Products
          </Link>
        </motion.div>

        {/* Bottom Text */}

        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .5,
          }}
          className="mt-16 flex items-center ga text-sm text-slate-500 dark:text-slate-400"
        >
          {/* <span>Trusted Enterprise Technology Partner</span> */}

          {/* <span className="h-1 w-1 rounded-full bg-slate-400" /> */}

          {/* <span>AI • Cloud • Cybersecurity • Automation</span> */}
        {/* </motion.div> */ }
      </div>
    </section>
  );
}