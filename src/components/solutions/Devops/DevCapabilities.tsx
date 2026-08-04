"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const capabilities = [
  {
    id: "ci-cd",
    title: "Intelligent CI/CD Automation",
    shortTitle: "CI/CD Automation",
    description: "Automate the complete software delivery pipeline with intelligent build orchestration, continuous integration, automated testing, deployment governance, and release automation to accelerate delivery while maintaining quality.",
    image: "/solutions/features/devops/1.png",
    features: [
      { title: "Intelligent Build Orchestration", desc: "Dynamically route and prioritize builds for maximum efficiency and speed." },
      { title: "Continuous Integration & Testing", desc: "Automatically run test suites on every commit to catch bugs early in the cycle." },
      { title: "Deployment Governance", desc: "Enforce strict deployment policies and approval gates for secure releases." },
      { title: "Release Automation", desc: "Seamlessly push code to production with zero downtime and complete confidence." },
    ],
  },
  {
    id: "observability",
    title: "Enterprise Observability",
    shortTitle: "Observability",
    description: "Gain complete visibility across applications, infrastructure, cloud environments, and distributed services with real-time monitoring, predictive analytics, and proactive incident detection.",
    image: "/solutions/features/devops/2.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "End-to-End Tracing", desc: "Track requests seamlessly across distributed microservices to pinpoint latency issues." },
      { title: "Centralized Logging", desc: "Aggregate logs from all sources into a single, searchable platform for rapid debugging." },
      { title: "Performance Analytics", desc: "Monitor infrastructure metrics in real-time to ensure optimal application performance." },
      { title: "Anomaly Detection", desc: "Identify unusual patterns instantly using machine learning before they impact users." },
    ],
  },
  {
    id: "security",
    title: "Integrated DevSecOps",
    shortTitle: "DevSecOps",
    description: "Embed security throughout the development lifecycle by integrating vulnerability scanning, policy enforcement, compliance validation, and automated security controls directly into CI/CD pipelines.",
    image: "/solutions/features/devops/3.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Vulnerability Scanning", desc: "Automatically scan code, containers, and dependencies for flaws during every build." },
      { title: "Policy Enforcement", desc: "Prevent non-compliant code from reaching production with automated gating." },
      { title: "Compliance Validation", desc: "Generate audit-ready reports for regulatory standards without manual effort." },
      { title: "Automated Controls", desc: "Embed security guardrails without slowing down developers or compromising velocity." },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure as Code",
    shortTitle: "Infrastructure (IaC)",
    description: "Provision, configure, and manage infrastructure consistently across cloud and hybrid environments using Infrastructure as Code to improve scalability, governance, and operational efficiency.",
    image: "/solutions/features/devops/4.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Consistent Provisioning", desc: "Deploy identical environments every single time to ensure complete reliability." },
      { title: "Cloud Management", desc: "Unify management across AWS, Azure, and Google Cloud with a single control plane." },
      { title: "Governance & Compliance", desc: "Maintain strict control over infrastructure changes and enforce security baselines." },
      { title: "Operational Efficiency", desc: "Reduce manual configuration and eliminate configuration drift completely across teams." },
    ],
  },
  {
    id: "cloud",
    title: "Multi-Cloud Management",
    shortTitle: "Multi-Cloud",
    description: "Simplify deployment, monitoring, and governance across AWS, Microsoft Azure, Google Cloud, private cloud, Kubernetes, and hybrid environments through centralized management.",
    image: "/solutions/features/devops/5.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "AWS, Azure, GCP", desc: "Native integration with all major public cloud providers for maximum flexibility." },
      { title: "Hybrid Environments", desc: "Seamlessly bridge on-premise data centers with the cloud for unified operations." },
      { title: "Kubernetes Management", desc: "Orchestrate containerized applications at massive scale with automated scaling capabilities." },
      { title: "Centralized Governance", desc: "Enforce unified policies regardless of where workloads run to minimize risk." },
    ],
  },
  {
    id: "automation",
    title: "Release Orchestration",
    shortTitle: "Automation",
    description: "Automate repetitive operational tasks, approval workflows, deployment orchestration, rollback strategies, and release governance to improve operational efficiency and reduce manual intervention.",
    image: "/solutions/features/devops/6.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Approval Workflows", desc: "Automate complex, multi-stage approval processes to eliminate manual bottlenecks." },
      { title: "Deployment Orchestration", desc: "Coordinate releases across dozens of interrelated services with absolute precision." },
      { title: "Rollback Strategies", desc: "Instantly revert to stable versions if anomalies are detected post-deployment." },
      { title: "Release Governance", desc: "Ensure every release meets strict enterprise standards and compliance requirements." },
    ],
  },
];

const AUTO_DELAY = 6000; // ms between auto-advances

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
  }, [currentIndex, isPaused, restartTimer]);

  const handleSelect = (idx: number) => {
    setCurrentIndex(idx);
  };

  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full py-8 md:py-12 bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 dark:text-white mb-6 md:mb-0"
            >
              Intelligent Platform Engineering
            </motion.h2>
          </div>
          
          <div className="md:pt-3">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Accelerate development, automate operations, strengthen security, and simplify infrastructure management.
            </motion.p>
          </div>
        </div>

        {/* Top Navigation Tabs */}
        <div className={`sticky z-40 bg-white dark:bg-[#0a0a0a] w-full border-b border-slate-200 dark:border-slate-800 mb-8 lg:mb-12 transition-all duration-300 ${isNavbarHidden ? 'top-0 pt-4' : 'top-[68px] pt-4'}`}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
            {capabilities.map((cap, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={cap.id}
                  onClick={() => handleSelect(idx)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  className={`relative flex items-center justify-center pb-4 text-[15px] font-medium whitespace-nowrap transition-colors duration-300 ${
                    isSelected
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  {cap.shortTitle}
                  {/* Active Indicator Line */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-violet-600 dark:bg-violet-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {/* Auto-advance progress indicator on the active tab */}
                  {isSelected && !isPaused && (
                     <motion.div
                       key={`progress-${currentIndex}`}
                       className="absolute bottom-0 left-0 h-[2px] bg-violet-300 dark:bg-violet-800"
                       initial={{ width: "0%" }}
                       animate={{ width: "100%" }}
                       transition={{ duration: AUTO_DELAY / 1000, ease: "linear" }}
                     />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-10 lg:gap-14"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Top Row: Title/Description & Image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              {/* Left Side: Title & Description */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <h2 className="font-urbanist text-3xl md:text-4xl lg:text-[42px] leading-tight font-normal text-indigo-950 dark:text-indigo-200 uppercase tracking-wide mb-6">
                  {selected.title}
                </h2>
                <p className="font-manrope text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selected.description}
                </p>
              </div>

              {/* Right Side: Image */}
              <div className="lg:col-span-7 w-full flex justify-center">
                <div className="group relative w-full h-[220px] md:h-[280px] lg:h-[340px] rounded-md overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900/50">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className={`object-cover ${selected.imagePosition || "object-[center_75%]"}`}
                    priority
                  />
                  
                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex((prev) => (prev - 1 + capabilities.length) % capabilities.length);
                      }}
                      className="p-2 rounded-full bg-black/20 text-black hover:bg-black/30 backdrop-blur-md transition-colors"
                      aria-label="Previous capability"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex((prev) => (prev + 1) % capabilities.length);
                      }}
                      className="p-2 rounded-full bg-black/20 text-black hover:bg-black/30 backdrop-blur-md transition-colors"
                      aria-label="Next capability"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 w-full">
              {selected.features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 md:p-6 rounded-md hover:shadow-xl hover:shadow-violet-900/5 transition-all duration-300 group"
                >
                  {/* Subtle top-right glow */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-violet-400/15 dark:bg-violet-500/10 rounded-full blur-[30px] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:bg-violet-400/25" />
                  
                  <div className="relative z-10">
                    <h4 className="font-urbanist text-[19px] font-medium text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="font-manrope text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}