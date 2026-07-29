"use client";

import { motion, Variants } from "framer-motion";
import {
  Building2,
  Wallet,
  Stethoscope,
  ShoppingCart,
  Globe2,
  Cpu,
  TrendingUp,
} from "lucide-react";

const industries = [
  {
    id: "fintech",
    name: "Banking & Financial Services",
    description: "Deliver secure, compliant, and high-availability applications that meet regulatory requirements while maintaining exceptional customer experiences.",
    icon: Wallet,
    stats: "99.99% Availability",
    wide: true,
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    description: "Ensure patient safety, regulatory compliance, data privacy, and application reliability across healthcare ecosystems.",
    icon: Stethoscope,
    stats: "Regulatory-Ready Testing",
    wide: false,
  },
  {
    id: "ecommerce",
    name: "Retail & Digital Commerce",
    description: "Validate scalable customer experiences capable of handling high transaction volumes during peak demand.",
    icon: ShoppingCart,
    stats: "Millions of Transactions Validated",
    wide: false,
  },
  {
    id: "enterprise",
    name: "Enterprise Applications",
    description: "Improve software quality across ERP, CRM, HRMS, and large-scale enterprise platforms through intelligent automation.",
    icon: Building2,
    stats: "Enterprise-Scale Quality Assurance",
    wide: true,
  },
  {
    id: "tech",
    name: "SaaS & Technology",
    description: "Support continuous delivery with automated quality validation across rapidly evolving cloud-native applications.",
    icon: Cpu,
    stats: "Continuous Release Enablement",
    wide: true,
  },
  {
    id: "global",
    name: "Global Enterprises",
    description: "Execute distributed testing across multiple regions, teams, cloud environments, and deployment pipelines with centralized governance.",
    icon: Globe2,
    stats: "Enterprise-Grade Scalability",
    wide: false,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function QAIndustries() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6">
                Trusted Across Mission-Critical Industries
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
                Delivering secure, reliable, compliant, and high-performing software for enterprise and regulated environments.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Desktop Bento Grid – staggered layout */}
        <div className="hidden lg:grid grid-cols-3 gap-3 auto-rows-min">
          {/* Row 1: FinTech (wide) + Healthcare */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              {/* Hollow icon container */}
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                <Wallet size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                FinTech & Banking
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Ensure compliance, security, and performance for financial applications.
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  99.99% uptime
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                <Stethoscope size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Healthcare
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                HIPAA‑compliant testing for critical healthcare applications.
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  100% compliance
                </span>
              </div>
            </div>
          </motion.div>

          {/* Row 2: E-commerce (normal) + Enterprise (wide) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                <ShoppingCart size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                E‑commerce & Retail
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Handle peak loads with automated performance testing.
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  10M+ transactions
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                <Building2 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Enterprise Software
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Complex enterprise application testing at scale.
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  95% coverage
                </span>
              </div>
            </div>
          </motion.div>

          {/* Row 3: SaaS (wide) + Global (normal) */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-2 row-span-1 group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                <Cpu size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                SaaS & Technology
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Continuous testing for rapid release cycles.
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  50+ releases/mo
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-1 row-span-1 group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
          >
            <div className="relative z-10">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                <Globe2 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Global Enterprises
              </h3>
              <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Distributed testing for multi‑region deployments.
              </p>
              <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Global scale
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tablet & Mobile */}
        <div className="lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl"
          >
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  className="group p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-300 dark:hover:border-violet-600"
                >
                  <div className="relative z-10">
                    <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-600 dark:border-violet-400 text-violet-600 dark:text-violet-400 transition-transform duration-300 group-hover:scale-105 group-hover:border-violet-700 dark:group-hover:border-violet-300">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-urbanist text-lg font-bold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {industry.name}
                    </h3>
                    <p className="mt-1 font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {industry.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                      <TrendingUp size={14} className="text-violet-600 dark:text-violet-400" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {industry.stats}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}