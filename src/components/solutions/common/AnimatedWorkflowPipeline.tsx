"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

interface AnimatedWorkflowPipelineProps {
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
  themeColors?: {
    glowTop: string;
    glowBottom: string;
    iconBorder: string;
    iconActiveBg: string;
    iconActiveText: string;
    iconActiveShadow: string;
    connectorGradient: string;
    pulseBeamGradient: string;
    titleActiveText: string;
  };
}

const defaultTheme = {
  glowTop: "bg-violet-500/10",
  glowBottom: "bg-fuchsia-500/10",
  iconBorder: "border-violet-500/50 text-violet-400 hover:border-violet-400 hover:bg-violet-600 hover:text-white hover:shadow-lg hover:shadow-violet-500/30",
  iconActiveBg: "bg-violet-600 border-violet-400 text-white shadow-xl shadow-violet-500/40 scale-110",
  iconActiveText: "text-white",
  iconActiveShadow: "shadow-violet-500/40",
  connectorGradient: "from-violet-500/50 via-violet-400/70 to-fuchsia-400/50",
  pulseBeamGradient: "from-transparent via-violet-300 to-transparent",
  titleActiveText: "text-violet-400",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AnimatedWorkflowPipeline({
  title,
  subtitle,
  steps,
  themeColors = defaultTheme,
}: AnimatedWorkflowPipelineProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-cycle through steps to illustrate continuous workflow
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Background Orbs – preserved exact original style */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-0 left-0 w-[500px] h-[500px] ${themeColors.glowTop} rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3`} />
        <div className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${themeColors.glowBottom} rounded-full blur-[120px] translate-y-1/2 translate-x-1/3`} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header Section – preserved exact original grid & text styling */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6 md:mb-0"
            >
              {title}
            </motion.h2>
          </div>

          <div className="md:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-lg md:text-[20px] text-slate-300 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          </div>
        </div>

        {/* Horizontal Workflow Steps – exact grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
            steps.length === 6 ? "xl:grid-cols-6" : "xl:grid-cols-5"
          } gap-6 relative`}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className="group relative flex flex-col items-center text-center cursor-pointer"
              >
                {/* Icon Wrapper */}
                <div className="relative">
                  {/* Active Glowing Pulse Ring behind icon */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIconRing"
                      className="absolute -inset-2 rounded-2xl bg-violet-500/30 blur-md pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}

                  {/* Icon Container */}
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                      isActive
                        ? themeColors.iconActiveBg
                        : `${themeColors.iconBorder} bg-slate-950/60`
                    }`}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 ${
                        isActive ? "scale-110 rotate-3" : "group-hover:scale-110"
                      }`}
                    />
                  </div>

                  {/* Animated Flowing Connector Line (Desktop) */}
                  {!isLast && (
                    <div className="hidden xl:block absolute top-1/2 left-[calc(100%+20px)] -translate-y-1/2 w-28 pointer-events-none z-0 overflow-hidden">
                      {/* Base Line */}
                      <div className={`h-[2px] w-full rounded-full bg-gradient-to-r ${themeColors.connectorGradient} opacity-60`} />

                      {/* Traveling Light Pulse Beam Animation */}
                      <motion.div
                        className={`absolute top-0 bottom-0 w-12 rounded-full bg-gradient-to-r ${themeColors.pulseBeamGradient}`}
                        animate={{
                          x: ["-100%", "250%"],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.4,
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className="mt-4">
                  <h3
                    className={`font-urbanist text-sm font-bold transition-colors duration-300 ${
                      isActive ? themeColors.titleActiveText : "text-white group-hover:text-violet-400"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-1 font-inter text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 max-w-[160px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
