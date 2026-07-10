"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute -right-24 top-12 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .7,
          }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-900/10
            dark:border-slate-800
            bg-white/50
            dark:bg-slate-900/40
            backdrop-blur-2xl
            px-8
            py-16
            md:px-14
            lg:px-20
            lg:py-20
          "
        >

          {/* Card Glow */}

          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Badge */}

            {/* <div className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-900/10
              dark:border-slate-700
              bg-white/50
              dark:bg-slate-800/40
              px-4
              py-2
              backdrop-blur-xl
            ">

              <Sparkles className="h-4 w-4 text-violet-500" />

              <span className="
                font-manrope
                text-[11px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-slate-600
                dark:text-slate-300
              ">
                Let's Work Together
              </span>

            </div> */}

            {/* Heading */}

            <h2 className="
              mt-8
              max-w-4xl
              text-4xl
              font-medium
              tracking-tight
              text-slate-900
              dark:text-white
              md:text-6xl
              leading-tight
            ">
              Ready To Accelerate Your
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                {" "}Digital Transformation?
              </span>
            </h2>

            {/* Description */}

            <p className="
              mt-8
              max-w-3xl
              font-manrope
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-400
            ">
              Whether you're exploring AI, Cloud Engineering,
              Enterprise Automation, Cybersecurity or Intelligent
              Software Platforms, our experts are ready to help
              you choose the right solution for your organization.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">



              <Link
                href="/#products"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-900/10
                  dark:border-slate-700
                  bg-white/60
                  dark:bg-slate-900/40
                  backdrop-blur-xl
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  text-slate-900
                  dark:text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-violet-500/30
                  hover:bg-violet-500/5
                "
              >
                Explore Products
              </Link>

            </div>

            {/* Bottom Stats */}

            <div className="
              mt-16
              grid
              w-full
              gap-8
              border-t
              border-slate-900/10
              pt-10
              dark:border-slate-800
              md:grid-cols-3
            ">

              <div>

                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                  24 hrs
                </h3>

                <p className="mt-2 font-manrope text-sm text-slate-600 dark:text-slate-400">
                  Average Response Time
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                  Enterprise
                </h3>

                <p className="mt-2 font-manrope text-sm text-slate-600 dark:text-slate-400">
                  Dedicated Technical Experts
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                  Global
                </h3>

                <p className="mt-2 font-manrope text-sm text-slate-600 dark:text-slate-400">
                  Trusted Enterprise Solutions
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}