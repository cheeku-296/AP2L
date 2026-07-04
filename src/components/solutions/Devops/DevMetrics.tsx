"use client";

import { motion, Variants } from "framer-motion";
import {
  TrendingUp,
  Clock,
  Shield,
  GitMerge,
  BarChart3,
  Zap,
} from "lucide-react";

const metrics = [
  {
    id: "deployment",
    label: "Deployment Frequency",
    value: "10x",
    description: "More frequent deployments with automated CI/CD pipelines.",
    icon: GitMerge,
  },
  {
    id: "speed",
    label: "Deployment Speed",
    value: "75%",
    description: "Faster deployments with parallel execution and automation.",
    icon: Clock,
  },
  {
    id: "security",
    label: "Security Compliance",
    value: "100%",
    description: "Automated security scanning in every pipeline stage.",
    icon: Shield,
  },
  {
    id: "roi",
    label: "DevOps ROI",
    value: "4.5x",
    description: "Average ROI achieved by enterprises in first year.",
    icon: TrendingUp,
  },
  {
    id: "efficiency",
    label: "Operational Efficiency",
    value: "60%",
    description: "Less time spent on infrastructure management.",
    icon: BarChart3,
  },
  {
    id: "uptime",
    label: "System Uptime",
    value: "99.99%",
    description: "High availability with intelligent observability.",
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

export default function DevMetrics() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* <p className="font-inter text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              Metrics
            </p> */}
            <h2 className="mt-4 font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Measurable DevOps Impact
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real metrics from enterprise teams using AP2L's DevOps platform.
            </p>
          </motion.div>
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
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-violet-500/0 to-fuchsia-500/0 group-hover:from-violet-500/5 group-hover:via-violet-500/5 group-hover:to-fuchsia-500/5 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/20">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div className="font-urbanist text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {metric.value}
                  </div>

                  <h3 className="mt-1 font-urbanist text-base font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {metric.label}
                  </h3>

                  <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {metric.description}
                  </p>

                  <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl border border-violet-200 dark:border-violet-800/50 bg-violet-50/50 dark:bg-violet-900/20 text-center"
        >
          <p className="font-inter text-sm text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-violet-600 dark:text-violet-400">Trusted by leading enterprises</span> — Average DevOps team sees{' '}
            <span className="font-semibold text-slate-900 dark:text-white">4.5x ROI</span> in first year
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}