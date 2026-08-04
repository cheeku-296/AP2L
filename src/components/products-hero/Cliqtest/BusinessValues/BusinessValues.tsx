"use client";

import { motion } from "framer-motion";
import RocketIcon from "@/components/ui/rocket-icon";
import CpuIcon from "@/components/ui/cpu-icon";
import EyeIcon from "@/components/ui/eye-icon";
import BugIcon from "@/components/ui/bug-icon";
import GearIcon from "@/components/ui/gear-icon";
import ChartLineIcon from "@/components/ui/chart-line-icon";

const values = [
  {
    title: "Faster Test Execution",
    description: "Accelerates test case design and execution. Reduces MTTR through automated root cause analysis.",
    icon: RocketIcon,
  },
  {
    title: "Reduced Manual Effort",
    description: "Reduces manual testing effort by up to 70%. Eliminates false positives using AI for improved alert accuracy.",
    icon: CpuIcon,
  },
  {
    title: "Better Requirement Coverage",
    description: "Simplifies monitoring and analysis across test suites, maximizing requirement traceability.",
    icon: EyeIcon,
  },
  {
    title: "Reduced Defect Leakage",
    description: "Converts operational data into actionable insights, preventing production bugs and defects.",
    icon: BugIcon,
  },
  {
    title: "Continuous Quality Integration",
    description: "Embeds automated quality validation directly into DevSecOps CI/CD release pipelines.",
    icon: GearIcon,
  },
  {
    title: "Predictive Defect Intelligence",
    description: "Uses machine learning algorithms to identify high-risk code paths before testing begins.",
    icon: ChartLineIcon,
  },
];

export default function BusinessValues() {
  return (
    <section className="py-16 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-4 md:mb-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-black mb-6">
                Why cliQTest ? </h2>
            </motion.div>
          </div>

          <div className="md:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-600 leading-relaxed max-w-2xl">
                Experience exponential improvements in quality, speed, and reliability.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col px-7 py-6 rounded-md border border-slate-200/80 bg-white overflow-hidden transition-all duration-500 hover:shadow-md hover:border-violet-200/80"
              >
                {/* Violet Light Ray Effect */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/20 blur-[50px] rounded-full transition-colors duration-700 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header Row: Icon + Title */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex shrink-0 h-[52px] w-[52px] items-center justify-center rounded-md bg-violet-50 text-violet-600 transition-colors duration-300 group-hover:bg-violet-100" aria-hidden="true">
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <h3 className="font-urbanist text-[20px] font-bold tracking-tight text-slate-900 leading-snug">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-manrope text-[15px] text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
