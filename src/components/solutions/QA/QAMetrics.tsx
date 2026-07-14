"use client";

import { motion, Variants } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Shield,
  GitMerge,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const metrics = [
  {
    id: "speed",
    label: "Test Execution Speed",
    value: "75%",
    description: "Faster test execution with parallel runs and intelligent test selection.",
    icon: Clock,
  },
  {
    id: "coverage",
    label: "Test Coverage",
    value: "95%",
    description: "Comprehensive coverage with AI‑generated test cases.",
    icon: CheckCircle2,
  },
  {
    id: "defects",
    label: "Defects Found Early",
    value: "3x",
    description: "More defects detected in development phase with shift‑left testing.",
    icon: Shield,
  },
  {
    id: "releases",
    label: "Release Velocity",
    value: "2x",
    description: "Double the releases with automated quality gates.",
    icon: GitMerge,
  },
  {
    id: "roi",
    label: "Testing ROI",
    value: "4.5x",
    description: "Average ROI achieved by QA teams in first year.",
    icon: TrendingUp,
  },
  {
    id: "maintenance",
    label: "Maintenance Reduction",
    value: "60%",
    description: "Less time spent on test maintenance with self‑healing tests.",
    icon: BarChart3,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

export default function QAMetrics() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header Section – Left Aligned */}
        {/* Header section */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6 md:mb-0"
            >
              Measurable Impact on Quality
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
              Real metrics from enterprise QA teams using AP2L&apos;s AI‑powered testing platform.
            </motion.p>
          </div>
        </div>

        {/* Metrics Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
                className="group relative p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 dark:hover:border-violet-600 overflow-hidden"
              >
                {/* Subtle gradient overlay (kept for hover effect, but only violet) */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/5 group-hover:via-violet-500/5 group-hover:to-violet-500/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon – solid violet */}
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Value – solid violet (removed gradient) */}
                  <div className="font-urbanist text-3xl md:text-4xl font-extrabold tracking-tight text-violet-600 dark:text-violet-400">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3 className="mt-1 font-urbanist text-base font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {metric.description}
                  </p>

                  {/* Decorative line – solid violet (removed gradient) */}
                  {/* <div className="mt-4 h-0.5 w-0 rounded-full bg-violet-600 transition-all duration-300 group-hover:w-full" /> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}