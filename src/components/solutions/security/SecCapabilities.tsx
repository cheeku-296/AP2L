"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const capabilities = [
  {
    id: "sbom",
    title: "Automated SBOM Lifecycle Management",
    shortTitle: "SBOM",
    description: "Generate, maintain, analyze, and govern Software Bills of Materials (SBOMs) throughout the software lifecycle to improve visibility, transparency, and software integrity.",
    image: "/solutions/features/security/1.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Continuous SBOM Generation", desc: "Automatically create updated SBOMs upon every successful software build." },
      { title: "Component Discovery", desc: "Deeply trace and map every open-source and proprietary dependency." },
      { title: "License Validation", desc: "Ensure compliance with complex open-source licensing requirements." },
      { title: "Software Risk Assessment", desc: "Proactively identify supply chain risks hidden deep within components." },
    ],
  },
  {
    id: "vulnerability",
    title: "Continuous Vulnerability Intelligence",
    shortTitle: "Vulnerability",
    description: "Continuously discover, prioritize, and monitor vulnerabilities across applications, dependencies, containers, and enterprise environments using intelligent risk analysis.",
    image: "/solutions/features/security/2.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Vulnerability discovery", desc: "Scan continuously to uncover CVEs within code and libraries." },
      { title: "Container scanning", desc: "Identify hidden security flaws inside Docker and Kubernetes setups." },
      { title: "Intelligent risk analysis", desc: "Contextualize threats based on exploitability and business impact." },
      { title: "Prioritized insight", desc: "Focus remediation efforts strictly on high-priority security alerts." },
    ],
  },
  {
    id: "compliance",
    title: "Compliance & Governance Automation",
    shortTitle: "Compliance",
    description: "Automate compliance assessments, evidence collection, policy validation, and reporting across industry regulations and security frameworks to simplify audit readiness.",
    image: "/solutions/features/security/3.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Automated assessments", desc: "Continuously map controls against SOC2, HIPAA, and ISO frameworks." },
      { title: "Evidence collection", desc: "Gather audit documentation automatically without manual intervention." },
      { title: "Policy validation", desc: "Enforce strict security guardrails seamlessly across pipelines." },
      { title: "Audit readiness", desc: "Reduce audit preparation time with automated compliance dashboards." },
    ],
  },
  {
    id: "incident",
    title: "Intelligent Threat Detection",
    shortTitle: "Threat Detection",
    description: "Accelerate threat identification and incident resolution through automated workflows, contextual security insights, and prioritized remediation guidance.",
    image: "/solutions/features/security/4.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Automated threat identification", desc: "Detect anomalous behaviors quickly using advanced ML algorithms." },
      { title: "Accelerated resolution", desc: "Execute automated runbooks to instantly isolate security breaches." },
      { title: "Contextual insights", desc: "Provide responders with deep analytical data for every alert." },
      { title: "Remediation guidance", desc: "Deliver step-by-step instructions to patch critical vulnerabilities." },
    ],
  },
  {
    id: "zero-trust",
    title: "Zero Trust Security Architecture",
    shortTitle: "Zero Trust",
    description: "Adopt a Zero Trust approach by continuously verifying identities, software integrity, infrastructure security, and access controls across your digital ecosystem.",
    image: "/solutions/features/security/5.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "Identity verification", desc: "Enforce strict authentication protocols for every access request." },
      { title: "Integrity validation", desc: "Ensure software binaries remain completely untampered in transit." },
      { title: "Infrastructure control", desc: "Micro-segment networks to prevent lateral threat movement." },
      { title: "Access management", desc: "Implement least-privilege principles across entire cloud ecosystems." },
    ],
  },
  {
    id: "devsecops",
    title: "DevSecOps Integration",
    shortTitle: "DevSecOps",
    description: "Embed security directly into CI/CD pipelines, enabling continuous security validation, automated policy enforcement, and secure software delivery without slowing development.",
    image: "/solutions/features/security/6.png",
    imagePosition: "object-[center_40%]",
    features: [
      { title: "CI/CD security embedding", desc: "Integrate security scanners natively into build automation tools." },
      { title: "Continuous validation", desc: "Analyze code automatically on every single developer commit." },
      { title: "Policy enforcement", desc: "Reject risky pull requests instantly to protect master branches." },
      { title: "Secure software delivery", desc: "Deploy hardened applications rapidly with zero security friction." },
    ],
  },
];

const AUTO_DELAY = 6000;

export default function SecCapabilities() {
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
    <section className="relative w-full py-10 md:py-16 bg-white dark:bg-[#0a0a0a] transition-colors duration-500 overflow-hidden">
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
              Comprehensive Software Supply Chain Protection
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
              Protect applications and software assets with integrated security, automated governance, continuous compliance, and risk-driven vulnerability management.
            </motion.p>
          </div>
        </div>

        {/* Top Navigation Tabs */}
        <div className="w-full border-b border-slate-200 dark:border-slate-800 mb-8 lg:mb-12">
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
                  {isSelected && (
                    <motion.div
                      layoutId="secActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-violet-600 dark:bg-violet-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
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
                <div className="relative w-full h-[220px] md:h-[280px] lg:h-[340px] rounded-md overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900/50">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className={`object-cover ${selected.imagePosition || "object-[center_75%]"}`}
                    priority
                  />
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