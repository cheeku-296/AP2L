"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const capabilities = [
  {
    id: "test-automation",
    title: "AI-Powered Test Automation",
    shortTitle: "AI Automation",
    description: "Leverage intelligent automation to generate, execute, maintain, and optimize test cases while significantly reducing manual effort and accelerating software validation.",
    image: "/images/solutions/QA/Test_automation.png",
    features: [
      { title: "AI test case generation", desc: "Automatically create robust test scenarios using advanced machine learning models." },
      { title: "Self-healing test scripts", desc: "Dynamically adapt to UI changes to prevent script failures." },
      { title: "Parallel execution", desc: "Run thousands of tests concurrently to drastically reduce cycle times." },
      { title: "Manual effort reduction", desc: "Eliminate repetitive maintenance tasks to focus on test strategy." },
    ],
  },
  {
    id: "no-code-testing",
    title: "Low-Code & No-Code Test Automation",
    shortTitle: "Low-Code",
    description: "Empower both technical and business users to create scalable automated tests without extensive programming expertise, accelerating adoption across teams.",
    image: "/images/solutions/QA/No_Code.png",
    features: [
      { title: "Visual test creation", desc: "Design comprehensive tests using intuitive drag-and-drop interfaces." },
      { title: "No-code platform", desc: "Bridge the gap between developers and QA with accessible tools." },
      { title: "Business enablement", desc: "Allow product owners to directly validate complex business logic." },
      { title: "Accelerated adoption", desc: "Onboard new team members instantly with a flat learning curve." },
    ],
  },
  {
    id: "mobile-testing",
    title: "Cross-Platform Web & Mobile Testing",
    shortTitle: "Cross-Platform",
    description: "Validate seamless user experiences across browsers, operating systems, devices, and mobile platforms using unified test orchestration.",
    image: "/images/solutions/QA/mobile_web.png",
    features: [
      { title: "Cross-browser validation", desc: "Ensure pixel-perfect rendering across Chrome, Firefox, Safari, and Edge." },
      { title: "Mobile platform testing", desc: "Execute automated tests on real iOS and Android devices." },
      { title: "OS coverage", desc: "Validate application stability across Windows, macOS, and Linux." },
      { title: "Unified orchestration", desc: "Manage all platforms from a single, centralized control plane." },
    ],
  },
  {
    id: "api-testing",
    title: "API & Microservices Validation",
    shortTitle: "API Testing",
    description: "Ensure the reliability, security, and performance of modern distributed architectures through comprehensive API, integration, and microservices testing.",
    image: "/images/solutions/QA/API&Microservice.png",
    features: [
      { title: "Comprehensive API testing", desc: "Automate REST, GraphQL, and SOAP endpoint validation seamlessly." },
      { title: "Integration testing", desc: "Verify data flow and state changes between connected systems." },
      { title: "Microservices validation", desc: "Isolate and test individual services in complex architectures." },
      { title: "Distributed coverage", desc: "Ensure robust communication across entire distributed networks." },
    ],
  },
  {
    id: "security-testing",
    title: "Security & Compliance Testing",
    shortTitle: "Security QA",
    description: "Embed security throughout the Software Development Lifecycle by continuously identifying vulnerabilities, validating security controls, and ensuring regulatory compliance before production deployment.",
    image: "/images/solutions/QA/sec&comp.png",
    features: [
      { title: "SAST & DAST Analysis", desc: "Perform deep static and dynamic security testing during builds." },
      { title: "Vulnerability Assessment", desc: "Identify critical flaws in code and third-party dependencies." },
      { title: "OWASP Validation", desc: "Automatically test for the top 10 most critical security risks." },
      { title: "Compliance Verification", desc: "Generate audit-ready compliance reports for enterprise standards." },
    ],
  },
  {
    id: "ci-cd-integration",
    title: "CI/CD Quality Integration",
    shortTitle: "CI/CD QA",
    description: "Integrate intelligent testing seamlessly into your DevSecOps pipeline to enable continuous validation, faster feedback loops, and automated release governance.",
    image: "/images/solutions/QA/cicd.png",
    features: [
      { title: "Pipeline integration", desc: "Embed quality gates directly into Jenkins, GitLab, or GitHub Actions." },
      { title: "Continuous validation", desc: "Trigger automated test suites instantly on every code commit." },
      { title: "Faster feedback loops", desc: "Deliver actionable insights to developers within minutes." },
      { title: "Release governance", desc: "Block deployments automatically if quality thresholds fail." },
    ],
  },
];

const AUTO_DELAY = 6000;

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
              Quality Engineering for Modern Software
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
              Deliver continuous quality with AI-driven automation, intelligent analytics, and integrated quality assurance.
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
                      layoutId="qaActiveTab"
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
                <div className="relative w-full h-[220px] md:h-[280px] lg:h-[340px] rounded-md overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-900/50">
                  <Image
                    src={selected.image}
                    alt={selected.title}
                    fill
                    className="object-cover object-[center_75%]"
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