"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  GitBranch,
  Cloud,
  Shield,
  Activity,
  Server,
  Zap,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    id: "ci-cd",
    title: "Intelligent CI/CD Automation",
    description: "Automate your entire delivery pipeline with AI‑powered orchestration and intelligent quality gates.",
    icon: GitBranch,
    image: "/images/solutions/devops/cicd_automation.png",
    features: ["Automated testing", "Smart quality gates", "Rollback automation", "Deployment insights"],
  },
  {
    id: "observability",
    title: "Real‑Time Observability",
    description: "Gain deep insights into your applications with end‑to‑end tracing and predictive analytics.",
    icon: Activity,
    image: "/images/solutions/devops/realtimeobservability.png",
    features: ["Distributed tracing", "Log aggregation", "Performance metrics", "Anomaly detection"],
  },
  {
    id: "security",
    title: "DevSecOps Integration",
    description: "Embed security into every stage of your pipeline with automated scanning and compliance checks.",
    icon: Shield,
    image: "/images/solutions/devops/devsecops.png",
    features: ["SAST & DAST integration", "SBOM generation", "Policy enforcement", "Compliance reporting"],
  },
  {
    id: "infrastructure",
    title: "Infrastructure as Code",
    description: "Manage and provision cloud resources with declarative configurations and version control.",
    icon: Server,
    image: "/images/solutions/devops/infra.png",
    features: ["Terraform integration", "Cloud provisioning", "State management", "Drift detection"],
  },
  {
    id: "cloud",
    title: "Multi‑Cloud Management",
    description: "Seamlessly manage deployments across AWS, Azure, GCP, and hybrid environments.",
    icon: Cloud,
    image: "/images/solutions/devops/multicloud.png",
    features: ["AWS, Azure, GCP", "Hybrid cloud", "Kubernetes management", "Auto‑scaling"],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description: "Automate repetitive tasks and orchestrate complex workflows across your entire toolchain.",
    icon: Zap,
    image: "/images/solutions/devops/automation.png",
    features: ["Task orchestration", "Event‑driven automation", "Custom workflows", "Integration hub"],
  },
];

const AUTO_DELAY = 4000; // ms between auto‑advances

export default function DevCapabilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selected = capabilities[currentIndex];

  const restartTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % capabilities.length);
    }, AUTO_DELAY);
  }, [isPaused]);

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isPaused]);

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
  };

  return (
    <section
      className="relative w-full py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Enterprise DevOps Capabilities
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              From CI/CD automation to observability and security — everything you need to build and scale.
            </p>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Left - Capability List with Images */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = currentIndex === idx;
              return (
                <motion.button
                  key={cap.id}
                  onClick={() => handleSelect(idx)}
                  whileHover={{ x: 6 }}
                  className={`group relative flex-1 w-full flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 shadow-lg dark:shadow-none border border-violet-200 dark:border-violet-900/50"
                      : "bg-transparent border border-transparent hover:bg-white/50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div className="relative flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay icon on hover */}
                    <div className="absolute inset-0 bg-violet-600/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon size={18} className="text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-urbanist font-bold text-sm transition-colors ${
                        isSelected
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {cap.title}
                    </h4>
                    <p
                      className={`text-xs transition-colors truncate ${
                        isSelected
                          ? "text-slate-500 dark:text-slate-400"
                          : "text-slate-500 dark:text-slate-500"
                      }`}
                    >
                      {cap.features.length} features
                    </p>
                  </div>

                  {isSelected && (
                    <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full bg-gradient-to-b from-violet-600 to-fuchsia-600" />
                  )}

                  {/* Auto-advance progress bar */}
                  {isSelected && !isPaused && (
                    <motion.div
                      key={`progress-${currentIndex}`}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-fuchsia-600"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right - Detail View with Full Image */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative h-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg dark:shadow-none flex flex-col"
              >
                {/* Full Width Image at Top */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent dark:from-slate-900/80 dark:via-slate-900/40" />
                  
                  {/* Icon overlay on image */}
                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 dark:bg-slate-900/90 shadow-lg backdrop-blur-sm">
                    {(() => {
                      const Icon = selected.icon;
                      return <Icon size={24} className="text-violet-600 dark:text-violet-400" />;
                    })()}
                  </div>
                </div>

                {/* Content Below Image */}
                <div className="relative z-10 flex-1 p-6 md:p-8">
                  <div className="flex flex-col h-full">
                    {/* Title & Description */}
                    <div className="mb-6">
                      <h3 className="font-urbanist text-2xl font-bold text-slate-900 dark:text-white">
                        {selected.title}
                      </h3>
                      <p className="mt-2 font-inter text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {selected.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selected.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-violet-600 dark:text-violet-400 shrink-0"
                          />
                          <span className="font-inter text-sm text-slate-700 dark:text-slate-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}