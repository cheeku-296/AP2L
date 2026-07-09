"use client";

import { motion, Variants } from "framer-motion";
import {
  AlertCircle,
  Clock,
  GitBranch,
  Shield,
  Server,
  Zap,
} from "lucide-react";

const challenges = [
  {
    id: "deployment-speed",
    title: "Slow Deployments",
    description: "Manual processes delay releases",
    icon: Clock,
    impact: "70% slower",
    severity: 85,
  },
  {
    id: "security-gaps",
    title: "Security Vulnerabilities",
    description: "Testing is an afterthought",
    icon: Shield,
    impact: "$4.45M breach",
    severity: 95,
  },
  {
    id: "infrastructure",
    title: "Infrastructure Sprawl",
    description: "Multi‑cloud complexity",
    icon: Server,
    impact: "45% budget waste",
    severity: 70,
  },
  {
    id: "observability",
    title: "Limited Observability",
    description: "No real‑time insights",
    icon: AlertCircle,
    impact: "70% unresolved",
    severity: 75,
  },
  {
    id: "configuration",
    title: "Configuration Drift",
    description: "Inconsistent environments",
    icon: GitBranch,
    impact: "60% incidents",
    severity: 65,
  },
  {
    id: "automation",
    title: "Automation Debt",
    description: "Legacy scripts overhead",
    icon: Zap,
    impact: "50% time lost",
    severity: 60,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

const cardLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DevChallenges() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
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
              What's Slowing Your DevOps?
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
              Modern software delivery faces multiple engineering and operational
              bottlenecks that impact release velocity, security, reliability and
              business outcomes.
            </motion.p>
          </div>
        </div>

        {/* Split Cards with left margin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch ml-4 md:ml-8">
          {/* Left Card – Engineering Challenges */}
          <motion.div
            variants={cardLeftVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-urbanist text-xl font-bold text-black dark:text-white">
                Engineering Challenges
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 mt-1">
                Common bottlenecks slowing software delivery.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex-1 space-y-1"
            >
              {challenges.slice(0, 3).map((challenge) => {
                const Icon = challenge.icon;
                return (
                  <motion.div
                    key={challenge.id}
                    variants={itemVariants}
                    className="group flex items-start gap-3 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0 hover:pl-2 transition-all duration-200"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 transition-all duration-300 group-hover:bg-violet-600 dark:group-hover:bg-violet-500 group-hover:text-white">
                      <Icon size={16} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-urbanist text-sm font-semibold text-black dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                        {challenge.title}
                      </h4>
                      <p className="font-inter text-xs text-slate-500 dark:text-slate-400 leading-tight">
                        {challenge.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Card – Business Impact */}
          <motion.div
            variants={cardRightVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative overflow-hidden bg-[#161221] rounded-2xl border border-violet-400/20 shadow-2xl shadow-violet-500/20 p-6 lg:p-8 flex flex-col text-white"
          >
            {/* Ray of light effect */}
            <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-white/20 via-transparent to-transparent pointer-events-none -translate-y-1/2 translate-x-1/4 rotate-12 blur-lg" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="mb-6">
              <h3 className="font-urbanist text-xl font-bold">Business Impact</h3>
              <p className="font-inter text-sm text-white/80 mt-1">
                These challenges directly affect speed, cost and customer experience.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex-1 space-y-4"
            >
              {challenges.slice(3, 6).map((challenge) => (
                <motion.div
                  key={challenge.id}
                  variants={itemVariants}
                  className="flex items-start gap-3 border-b border-white/10 last:border-0 pb-3 last:pb-0"
                >
                  <div className="relative h-3 w-3 mt-1.5 flex items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-300 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-urbanist text-lg font-bold">
                      {challenge.impact}
                    </div>
                    <p className="font-inter text-sm text-white/80 leading-tight">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-inter text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
            Every challenge above is addressed through AP2L's integrated DevOps, QA,
            Security and Cloud Engineering platform.
          </p>
          <div className="mt-6">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-violet-500/50"
            >
              Explore Our Solutions →
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}