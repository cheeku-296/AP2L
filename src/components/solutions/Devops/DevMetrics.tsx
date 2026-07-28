"use client";

import { motion, Variants } from "framer-motion";

const metrics = [
  {
    id: "deployment",
    label: "Deployment Frequency",
    value: "10x",
    description: "More frequent deployments with automated CI/CD pipelines.",
  },
  {
    id: "speed",
    label: "Deployment Speed",
    value: "75%",
    description: "Faster deployments with parallel execution and automation.",
  },
  {
    id: "security",
    label: "Security Compliance",
    value: "100%",
    description: "Automated security scanning in every pipeline stage.",
  },
  {
    id: "roi",
    label: "DevOps ROI",
    value: "4.5x",
    description: "Average ROI achieved by enterprises in first year.",
  },
  {
    id: "efficiency",
    label: "Operational Efficiency",
    value: "60%",
    description: "Less time spent on infrastructure management.",
  },
  {
    id: "uptime",
    label: "System Uptime",
    value: "99.99%",
    description: "High availability with intelligent observability.",
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
    <section className="relative w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        {/* Header section */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6 md:mb-0"
            >
              Measurable DevOps Impact
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
              Real metrics from enterprise teams using AP2L&apos;s DevOps platform.
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
            return (
              <motion.div
                key={metric.id}
                variants={itemVariants}
                className="group relative flex flex-col px-8 py-5 rounded-md border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-all duration-500 hover:shadow-md hover:border-violet-200/80 dark:hover:border-violet-500/30"
              >
                {/* Purple Light Ray Effect */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/20 blur-[50px] rounded-full transition-colors duration-700" />

                <div className="relative z-10">
                  {/* Value */}
                  <div className="font-urbanist text-3xl md:text-4xl font-extrabold tracking-tight text-violet-600 dark:text-violet-400 mb-2">
                    {metric.value}
                  </div>

                  <h3 className="mb-2 font-urbanist text-[22px] font-bold text-slate-900 dark:text-white transition-colors">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="font-manrope text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {metric.description}
                  </p>
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
            <span className="font-semibold text-black dark:text-white">4.5x ROI</span> in first year
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}