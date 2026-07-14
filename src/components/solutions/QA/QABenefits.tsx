"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function QABenefits() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500 py-16 md:py-24">
      {/* Background Decorations (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-violet-500/5 dark:bg-violet-500/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-fuchsia-500/4 dark:bg-fuchsia-500/6 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6">
                Benefits of AI-Powered Testing
              </h2>
            </motion.div>
          </div>
          
          <div className="md:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl">
                Real results from enterprise QA teams using AP2L&apos;s AI-powered testing platform.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Full-Width Image Container (within margins) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-700/60 shadow-2xl shadow-violet-500/10"
        >
          <Image
            src="/images/solutions/QA/benefits.png" // Replace with your actual image path
            alt="Benefits of AI-Powered Testing - AP2L Platform"
            width={1600}
            height={900}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}