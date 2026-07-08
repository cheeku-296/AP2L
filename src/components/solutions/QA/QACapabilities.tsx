"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  LayoutTemplate,
  Monitor,
  Cloud,
  Lock,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    id: "test-automation",
    title: "AI-Powered Test Automation",
    description:
      "Intelligent test case generation that learns from your application behavior and automatically creates comprehensive test suites.",
    icon: Code2,
    image: "/images/solutions/QA/Test_automation.png", // Add your image path
    features: [
      "Self-healing test scripts",
      "Visual regression testing",
      "Parallel test execution",
      "Cross-browser testing",
    ],
  },
  {
    id: "no-code-testing",
    title: "No-Code Testing Platform",
    description:
      "Empower your entire team with intuitive visual test creation—no coding expertise required.",
    icon: LayoutTemplate,
    image: "/images/solutions/QA/No_Code.png",
    features: [
      "Visual test builder",
      "Record & playback",
      "Drag-and-drop workflows",
      "Test templates library",
    ],
  },
  {
    id: "mobile-testing",
    title: "Mobile & Web Testing",
    description:
      "Comprehensive testing across all platforms with real device cloud and emulator support.",
    icon: Monitor,
    image: "/images/solutions/QA/mobile_web.png",
    features: [
      "Real device testing",
      "iOS & Android support",
      "Responsive testing",
      "Performance monitoring",
    ],
  },
  {
    id: "api-testing",
    title: "API & Microservices Testing",
    description:
      "Validate your microservices architecture with comprehensive API testing and service virtualization.",
    icon: Cloud,
    image: "/images/solutions/QA/API&Microservice.png",
    features: [
      "REST & GraphQL testing",
      "Service virtualization",
      "Contract testing",
      "Load testing",
    ],
  },
  {
    id: "security-testing",
    title: "Security & Compliance Testing",
    description:
      "Automated security scanning embedded in your test pipeline to catch vulnerabilities early.",
    icon: Lock,
    image: "/images/solutions/QA/sec&comp.png",
    features: [
      "SAST & DAST integration",
      "OWASP compliance",
      "Vulnerability scanning",
      "Security policy enforcement",
    ],
  },
  {
    id: "ci-cd-integration",
    title: "CI/CD Pipeline Integration",
    description:
      "Seamlessly integrate with your DevOps workflow for continuous testing and quality gates.",
    icon: GitBranch,
    image: "/images/solutions/QA/cicd.png",
    features: [
      "Jenkins & GitHub Actions",
      "Quality gates enforcement",
      "Automated reports",
      "Git integration",
    ],
  },
];

const AUTO_DELAY = 4000;

export default function QACapabilities() {
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
  }, [currentIndex, isPaused, restartTimer]);

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
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Enterprise-Grade Testing Capabilities
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              From automated functional testing to performance and security
              scanning—everything your QA team needs.
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