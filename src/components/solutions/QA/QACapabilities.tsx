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
      "Leverage intelligent automation to generate, execute, maintain, and optimize test cases while significantly reducing manual effort and accelerating software validation.",
    icon: Code2,
    image: "/images/solutions/QA/Test_automation.png",
    features: [
      "AI test case generation",
      "Self-healing test scripts",
      "Parallel execution optimization",
      "Manual effort reduction",
    ],
  },
  {
    id: "no-code-testing",
    title: "Low-Code & No-Code Test Automation",
    description:
      "Empower both technical and business users to create scalable automated tests without extensive programming expertise, accelerating adoption across teams.",
    icon: LayoutTemplate,
    image: "/images/solutions/QA/No_Code.png",
    features: [
      "Visual test creation",
      "Low-code & no-code platform",
      "Technical & business user enablement",
      "Accelerated team adoption",
    ],
  },
  {
    id: "mobile-testing",
    title: "Cross-Platform Web & Mobile Testing",
    description:
      "Validate seamless user experiences across browsers, operating systems, devices, and mobile platforms using unified test orchestration.",
    icon: Monitor,
    image: "/images/solutions/QA/mobile_web.png",
    features: [
      "Cross-browser validation",
      "Mobile platform testing",
      "Operating system coverage",
      "Unified test orchestration",
    ],
  },
  {
    id: "api-testing",
    title: "API & Microservices Validation",
    description:
      "Ensure the reliability, security, and performance of modern distributed architectures through comprehensive API, integration, and microservices testing.",
    icon: Cloud,
    image: "/images/solutions/QA/API&Microservice.png",
    features: [
      "Comprehensive API testing",
      "Integration testing",
      "Microservices validation",
      "Distributed architecture coverage",
    ],
  },
  {
    id: "security-testing",
    title: "Security & Compliance Testing",
    description:
      "Embed security throughout the Software Development Lifecycle by continuously identifying vulnerabilities, validating security controls, and ensuring regulatory compliance before production deployment.",
    icon: Lock,
    image: "/images/solutions/QA/sec&comp.png",
    features: [
      "Integrated SAST & DAST Analysis",
      "Continuous Vulnerability Assessment",
      "OWASP Security Validation",
      "Automated Compliance Verification",
      "Security Policy Enforcement",
    ],
  },
  {
    id: "ci-cd-integration",
    title: "CI/CD Quality Integration",
    description:
      "Integrate intelligent testing seamlessly into your DevSecOps pipeline to enable continuous validation, faster feedback loops, and automated release governance.",
    icon: GitBranch,
    image: "/images/solutions/QA/cicd.png",
    features: [
      "DevSecOps pipeline integration",
      "Continuous quality validation",
      "Faster feedback loops",
      "Automated release governance",
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
      className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header Section */}
        {/* Header section */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6 md:mb-0"
            >
              Quality Engineering for Modern Software
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
              Deliver continuous quality with AI-driven automation, intelligent analytics, and integrated quality assurance.
            </motion.p>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Left - Capability List with Icons Only */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = currentIndex === idx;
              return (
                <motion.button
                  key={cap.id}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  whileHover={{ x: 6 }}
                  className={`group relative flex-1 w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 overflow-hidden ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 shadow-lg dark:shadow-none border border-violet-200 dark:border-violet-900/50"
                      : "bg-transparent border border-transparent hover:bg-white/50 dark:hover:bg-slate-900/50"
                  }`}
                >
                  {/* Icon Only - No Image */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                      isSelected
                        ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                        : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-urbanist font-bold text-sm transition-colors ${
                        isSelected
                          ? "text-black dark:text-white"
                          : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {cap.title}
                    </h4>
                  
                  </div>

                  {/* {isSelected && (
                    <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full bg-gradient-to-b from-violet-600 to-fuchsia-600" />
                  )} */}

                  {/* Auto-advance progress bar */}
                  {isSelected && !isPaused && (
                    <motion.div
                      key={`progress-${currentIndex}`}
                      className="absolute bottom-0 left-0 h-0.5 bg-violet-600"
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
                      <h3 className="font-urbanist text-2xl font-bold text-black dark:text-white">
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