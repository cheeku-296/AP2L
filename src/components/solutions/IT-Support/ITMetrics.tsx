"use client";

import { motion, Variants } from "framer-motion";
import {
  Clock,
  Bot,
  Smile,
  DollarSign,
  CheckCircle,
  Zap,
} from "lucide-react";

const metrics = [
  {
    id: "resolution",
    label: "Faster Resolution",
    value: "50%",
    description: "Reduce mean time to resolution with AI-powered triage and automation.",
    icon: Clock,
  },
  {
    id: "automation",
    label: "Automation Rate",
    value: "60%",
    description: "Automate repetitive queries with intelligent virtual agents.",
    icon: Bot,
  },
  {
    id: "csat",
    label: "CSAT Improvement",
    value: "4.5x",
    description: "Improve user satisfaction with faster, more accurate support.",
    icon: Smile,
  },
  {
    id: "cost",
    label: "Lower Cost Per Ticket",
    value: "30%",
    description: "Reduce operational costs through automation and self-service.",
    icon: DollarSign,
  },
  {
    id: "sla",
    label: "SLA Adherence",
    value: "95%",
    description: "Consistently meet service level agreements with automated workflows.",
    icon: CheckCircle,
  },
  {
    id: "efficiency",
    label: "Team Efficiency",
    value: "2x",
    description: "Double the productivity of your support teams with AI assistance.",
    icon: Zap,
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

export default function ITMetrics() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header section */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6 md:mb-0"
            >
              Measurable IT Support Impact
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
              Real metrics from enterprises using AP2L's IT support platform.
            </motion.p>
          </div>
        </div>

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
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-500 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="font-urbanist text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <h3 className="mt-1 font-urbanist text-base font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {metric.label}
                  </h3>
                  <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {metric.description}
                  </p>
                  {/* <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" /> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl border border-violet-200 dark:border-violet-800/50 bg-violet-50/50 dark:bg-violet-900/20 text-center"
        >
          <p className="font-inter text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-violet-600 dark:text-violet-400">Trusted by leading enterprises</span> — Average IT team sees{' '}
            <span className="font-semibold text-black dark:text-white">2x efficiency gain</span> in first year.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}