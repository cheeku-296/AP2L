"use client";

import { motion, type Variants } from "framer-motion";

const metrics = [
  {
    id: "deployment",
    value: "75%",
    label: "Faster Deployments",
    description: "Accelerate your release cycles with our AI-driven automated pipelines.",
  },
  {
    id: "coverage",
    value: "99.9%",
    label: "Test Coverage",
    description: "Achieve near-perfect reliability across your infrastructure with no-code test automation.",
  },
  {
    id: "roi",
    value: "10x",
    label: "First Year ROI",
    description: "Drastically reduce operational overhead and redundant infrastructure costs.",
  },
  {
    id: "uptime",
    value: "99.99%",
    label: "System Uptime",
    description: "Enterprise-grade resilience engineered for your mission-critical applications.",
  }
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} satisfies Variants;

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 30,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
} satisfies Variants;

export default function ROIMetrics() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-4 py-2 mb-6"
          >
            <span className="font-[family-name:var(--font-manrope)] text-[11px] font-bold uppercase tracking-widest text-fuchsia-700 dark:text-fuchsia-400">
              Proven Impact
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl"
          >
            Measurable ROI from Day One
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Our ecosystem is designed not just to add tools, but to mathematically improve your engineering efficiency and bottom line.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center p-8 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-fuchsia-200 dark:hover:border-fuchsia-900/50 group"
            >
              {/* Massive Number */}
              <h3 className="mb-4 font-urbanist text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-fuchsia-600 group-hover:from-violet-500 group-hover:to-fuchsia-500 transition-all duration-500">
                {metric.value}
              </h3>
              
              {/* Label */}
              <p className="mb-3 font-urbanist text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                {metric.label}
              </p>
              
              {/* Description */}
              <p className="font-inter text-sm md:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed max-w-[200px]">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
