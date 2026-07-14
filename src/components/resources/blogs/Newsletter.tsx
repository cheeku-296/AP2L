"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-slate-200
            bg-white/60
            p-8
            shadow-xl
            backdrop-blur-2xl
            dark:border-slate-800
            dark:bg-slate-900/40
            md:p-14
          "
        >
          {/* Card Glow */}

          <div className="absolute -left-12 top-0 h-44 w-44 rounded-full bg-violet-500/10 blur-[90px]" />

          <div className="absolute -right-12 bottom-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-[90px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            {/* Left */}

            <div>
              <h2 className="text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Never Miss an Insight
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                Receive the latest articles, technology trends,
                enterprise insights, AI innovations, cybersecurity
                updates, and product announcements directly in your inbox.
              </p>
            </div>

            {/* Right */}

            <div className="w-full max-w-xl">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    type="email"
                    aria-label="Email Address"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="
                      w-full
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      py-4
                      pl-14
                      pr-5
                      text-sm
                      outline-none
                      transition
                      focus:border-violet-500
                      dark:border-slate-700
                      dark:bg-slate-900
                      dark:text-white
                    "
                  />
                </div>

                <button
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
                    transition-all
                    duration-300
                    hover:scale-105
                    dark:bg-white
                    dark:text-slate-900
                  "
                >
                  Subscribe

                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>

              <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
                No spam. Only high-value enterprise technology insights.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}