"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DevTechnologies() {
  return (
    <section className="relative w-full py-10 md:py-12 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        {/* Header section */}
        <div className="mb-4 md:mb-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6 md:mb-0"
            >
              Seamless Technology Integration
            </motion.h2>
          </div>

          <div className="md:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-lg md:text-[20px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              AP2L Integrates with your DevOps, cloud, security, monitoring, and automation tools without disrupting existing workflows.
            </motion.p>
          </div>
        </div>

        {/* Full-width Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full max-w-7xl mx-auto"
        >
          <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-900">
            {/* Light mode image */}
            <Image
              src="/images/solutions/devops/devops.png"
              alt="DevOps technologies compatible with AP2L"
              fill
              className="object-cover dark:hidden"
              priority
            />
            {/* Dark mode image */}
            <Image
              src="/images/solutions/devTechnologies_dark.png"
              alt="DevOps technologies compatible with AP2L"
              fill
              className="object-cover hidden dark:block"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}