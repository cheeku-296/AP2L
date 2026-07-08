"use client";

import { motion, Variants } from "framer-motion";
import {
  AlertCircle,
  Clock,
  GitBranch,
  TrendingUp,
  Users,
  Shield,
  AlertTriangle,
} from "lucide-react";

const challenges = [
  {
    id: "test-coverage",
    title: "Inadequate Test Coverage",
    description: "Critical bugs slip through to production",
    icon: AlertCircle,
    impact: "40% defects reach production",
  },
  {
    id: "slow-cycles",
    title: "Slow Testing Cycles",
    description: "Bottlenecks delay releases by days",
    icon: Clock,
    impact: "70% longer release cycles",
  },
  {
    id: "maintenance",
    title: "Test Maintenance Overhead",
    description: "Constant updates waste QA time",
    icon: GitBranch,
    impact: "40% of QA time lost",
  },
  {
    id: "skill-gap",
    title: "Skill Gaps in Testing",
    description: "Finding skilled QA engineers is hard",
    icon: Users,
    impact: "6+ months to onboard",
  },
  {
    id: "security",
    title: "Security Vulnerabilities",
    description: "Security testing is often an afterthought",
    icon: Shield,
    impact: "$4.45M breach cost",
  },
  {
    id: "performance",
    title: "Performance Bottlenecks",
    description: "Load testing skipped or done late",
    icon: TrendingUp,
    impact: "60% outages due to perf",
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

export default function QAChallenges() {
  return (
    <section className="relative w-full py-10 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-violet-500/10 dark:bg-violet-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Category Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-xs font-semibold tracking-wider uppercase mb-4">
              <AlertTriangle size={14} />
              The Challenges
            </div> */}
            
            <h2 className="font-urbanist text-3xl md:text-4xl font-medium tracking-tight text-slate-900 dark:text-white">
              What's Holding Your QA Back?
            </h2>
            <p className="mt-4 font-inter text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Modern QA teams face critical challenges that impact quality, speed,
              and business outcomes. Here's what's slowing you down.
            </p>
          </motion.div>
        </div>

        {/* Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card – QA Challenges */}
          <motion.div
            variants={cardLeftVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 flex flex-col"
          >
            <div className="mb-6">
              <h3 className="font-urbanist text-xl font-bold text-slate-900 dark:text-white">
                Quality Engineering Challenges
              </h3>
              <p className="font-inter text-sm text-slate-600 dark:text-slate-400 mt-1">
                Common bottlenecks slowing down QA teams.
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
                      <h4 className="font-urbanist text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
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
            className="bg-violet-600 dark:bg-violet-700 rounded-2xl border border-violet-400/20 shadow-2xl shadow-violet-500/20 p-6 lg:p-8 flex flex-col text-white"
          >
            <div className="mb-6">
              <h3 className="font-urbanist text-xl font-bold">Business Impact</h3>
              <p className="font-inter text-sm text-white/80 mt-1">
                These challenges directly affect cost, quality, and customer satisfaction.
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
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 border border-violet-200/50 dark:border-violet-800/50">
            <AlertTriangle size={16} className="text-violet-500 dark:text-violet-400" />
            <p className="font-inter text-sm text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-violet-600 dark:text-violet-400">
                {challenges.length} critical challenges
              </span>
              <span className="mx-2 text-slate-300 dark:text-slate-600">•</span>
              All solved with AP2L's AI-powered testing platform
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}