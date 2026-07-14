"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DevHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen min-h-[720px] w-full flex-col items-center justify-start overflow-hidden  pt-[120px] text-center"
    >
      {/* Background */}

      <motion.div
        style={{ y }}
        className="absolute -top-[10%] -left-[5%] -right-[5%] h-[130%] w-[110%]"
      >
        <Image
          src="/images/solutions/devops_light.png"
          alt="DevOps Solutions"
          fill
          priority
          className="object-cover object-center dark:hidden"
        />

        <Image
          src="/images/solutions/devops_dark.png"
          alt="DevOps Solutions Dark"
          fill
          priority
          className="hidden object-cover object-center dark:block"
        />
      </motion.div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-white/10 dark:bg-slate-950/30" />

      {/* Background Glow */}

      <div className="absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[150px]" />

      {/* Content */}

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-6">

        {/* Badge */}

        {/* <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/60 px-5 py-2 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/40"
        >
          <Workflow className="h-4 w-4 text-emerald-500" />

          <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.22em] text-slate-700 dark:text-slate-300">
            DevOps & Cloud Engineering
          </span>
        </motion.div> */}

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 text-5xl font-medium leading-[1.08] tracking-tight text-black dark:text-white md:text-7xl"
        >
          Build, Secure &
          <br />

          {/* <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"> */}
            Deploy Faster
          {/* </span> */}
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl"
        >
          Accelerate software delivery with intelligent CI/CD automation,
          cloud-native infrastructure, DevSecOps practices, and scalable
          deployment pipelines built for modern enterprises.
        </motion.p>

        {/* CTA Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 md:py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 dark:bg-white dark:text-slate-900"
          >
            Contact Us

            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            onClick={() =>
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-slate-300 bg-white/60 px-8 py-3.5 md:py-4 text-sm font-semibold text-slate-900 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/80 dark:border-slate-700 dark:bg-slate-900/40 dark:text-white"
          >
            View Services
          </button>
        </motion.div>

        {/* Keywords */}

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center ga text-sm text-slate-500 dark:text-slate-400"
        >
          <span>CI/CD</span>

          <span className="h-1 w-1 rounded-full bg-slate-400" />

          <span>Kubernetes</span>

          <span className="h-1 w-1 rounded-full bg-slate-400" />

          <span>Cloud Infrastructure</span>

          <span className="h-1 w-1 rounded-full bg-slate-400" />

          <span>DevSecOps</span>
        </motion.div> */}

      </div>

      {/* Scroll Indicator */}

      {/* <motion.div
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 items-start justify-center rounded-full border border-slate-300 dark:border-slate-700">
          <div className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
        </div>
      </motion.div> */}
    </section>
  );
}