"use client";

import { useRef } from "react";
import { motion, Variants } from "framer-motion";
import ChartLineIcon from "@/components/ui/chart-line-icon";
import LockIcon from "@/components/ui/lock-icon";
import BugIcon from "@/components/ui/bug-icon";
import EyeIcon from "@/components/ui/eye-icon";
import LayersIcon from "@/components/ui/layers-icon";
import RocketIcon from "@/components/ui/rocket-icon";
import type { AnimatedIconHandle } from "@/components/ui/types";

const features = [
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description:
      "Leverage AI-powered predictive analytics and intelligent anomaly detection to proactively identify, assess, and resolve potential issues before they impact business operations or user experience.",
    IconComponent: ChartLineIcon,
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security",
    description:
      "Strengthen your security posture with continuous vulnerability assessment, comprehensive SBOM management, and intelligent remediation workflows that proactively mitigate software supply chain risks.",
    IconComponent: LockIcon,
  },
  {
    id: "automated-qa",
    title: "Automated QA",
    description:
      "Accelerate software quality with AI-powered test generation, no-code automation, and scalable testing capabilities designed to support modern, high-velocity development environments.",
    IconComponent: BugIcon,
  },
  {
    id: "observability",
    title: "Real-Time Observability",
    description:
      "Gain complete operational visibility through end-to-end distributed tracing, centralized log management, and real-time performance insights that enable proactive monitoring and faster issue resolution.",
    IconComponent: EyeIcon,
  },
  {
    id: "integrations",
    title: "Seamless Integrations",
    description:
      "Seamlessly integrate with leading cloud platforms, enterprise applications, and DevSecOps toolchains through native connectors and robust integration capabilities.",
    IconComponent: LayersIcon,
  },
  {
    id: "performance",
    title: "High Performance",
    description:
      "Engineered on a resilient, globally distributed architecture to deliver exceptional performance, high availability, and enterprise-grade reliability for mission-critical operations.",
    IconComponent: RocketIcon,
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
} satisfies Variants;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

function FeatureCard({ feature }: { feature: (typeof features)[number] }) {
  const iconRef = useRef<AnimatedIconHandle>(null);
  const IconComponent = feature.IconComponent;

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      className="group relative flex flex-col px-8 py-6 rounded-md border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 overflow-hidden transition-all duration-500 hover:border-violet-300 dark:hover:border-violet-700/50 hover:shadow-lg"
    >
      {/* Purple Light Ray Effect */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/20 dark:bg-violet-500/10 blur-[50px] rounded-full transition-colors duration-700 group-hover:bg-violet-500/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Card Header (Icon + Title Horizontally Aligned) */}
        <div className="mb-4 flex items-center gap-4">
          {/* Animated Icon Container (52px x 52px) */}
          <div
            className="flex shrink-0 h-[52px] w-[52px] items-center justify-center rounded-xl bg-violet-50 dark:bg-violet-950/50 border border-violet-100 dark:border-violet-800/40 text-violet-600 dark:text-violet-400 transition-colors duration-300 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/60"
            aria-hidden="true"
          >
            <IconComponent ref={iconRef} size={28} strokeWidth={2} />
          </div>

          <h3 className="font-urbanist text-[22px] font-bold tracking-tight text-slate-900 dark:text-white transition-colors leading-snug">
            {feature.title}
          </h3>
        </div>

        <p className="font-manrope text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function CoreFeatures() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Core Features & Benefits
            </motion.h2>
          </div>

          <div className="md:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              A unified enterprise platform designed to help organizations build resilient systems, strengthen security, optimize performance, and scale with confidence.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
