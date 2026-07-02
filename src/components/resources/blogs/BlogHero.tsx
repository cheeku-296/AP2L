"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BlogHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="bg-slate-50 relative w-full h-[80vh] md:h-[calc(100vh-24px)] min-h-[500px] md:min-h-[600px] rounded-none md:rounded-[16px] overflow-hidden flex flex-col items-center justify-start pt-[100px] md:pt-[120px] text-center"
    >
      {/* Background */}

      <motion.div
        style={{ y }}
        className="absolute -left-[5%] -right-[5%] -top-[10%] h-[130%] w-[110%]"
      >
        <Image
          src="/images/resources/blogs/bloghero-light1.png"
          alt="AP2L Blog Hero"
          fill
          priority
          className="object-cover object-center dark:hidden"
        />

        <Image
          src="/images/resources/blogs/bloghero-dark1.png"
          alt="AP2L Blog Hero Dark"
          fill
          priority
          className="hidden object-cover object-center dark:block"
        />
      </motion.div>

      {/* Overlay */}

      {/* <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/30" /> */}

      {/* Glow */}

      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Content */}

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6">
        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-slate-900/10
            bg-white/60
            px-5
            py-2
            backdrop-blur-xl
            dark:border-slate-700
            dark:bg-slate-900/40
          "
        >
          <BookOpen className="h-4 w-4 text-violet-500" />

          <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700 dark:text-slate-300">
            Insights & Resources
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="
            mt-8
            text-5xl
            font-medium
            tracking-tight
            leading-[1.08]
            text-slate-900
            dark:text-white
            md:text-7xl
          "
        >
          Ideas That Drive
          <br />

          Enterprise Innovation
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
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
          Explore expert insights, technology trends, AI innovations,
          enterprise solutions, and digital transformation strategies.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
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
              dark:bg-white
              dark:text-slate-900
            "
          >
            Talk To Our Experts

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            className="
              rounded-full
              border
              border-slate-300
              bg-white/60
              px-8
              py-4
              text-sm
              font-semibold
              text-slate-900
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
              hover:bg-white/80
              dark:border-slate-700
              dark:bg-slate-900/40
              dark:text-white
            "
          >
            Explore Articles
          </button>
        </motion.div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400"
        >
          <span>AI</span>

          <span className="h-1 w-1 rounded-full bg-slate-400" />

          <span>Cloud</span>

          <span className="h-1 w-1 rounded-full bg-slate-400" />

          <span>Cybersecurity</span>

          <span className="h-1 w-1 rounded-full bg-slate-400" />

          <span>Enterprise Technology</span>
        </motion.div>
      </div>

    </section>
  );
}