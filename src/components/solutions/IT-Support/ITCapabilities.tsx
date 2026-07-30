"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const capabilities = [
  {
    id: "ai-triage",
    title: "AI-Powered Incident & Ticket Management",
    shortTitle: "AI Incident Mgt",
    description: "Automatically classify, prioritize, route, and resolve incidents using intelligent automation to reduce response times and improve service desk productivity.",
    image: "/images/solutions/IT/ticket.png",
    features: [
      { title: "Automatic classification", desc: "Instantly categorize incoming tickets based on deep historical text analysis." },
      { title: "Priority-based routing", desc: "Assign critical incidents directly to specialized resolution teams immediately." },
      { title: "Automated resolution", desc: "Deploy scripts to automatically fix known and recurring infrastructure issues." },
      { title: "Response time reduction", desc: "Drastically reduce MTTR by eliminating manual triage bottlenecks." },
    ],
  },
  {
    id: "virtual-agents",
    title: "Intelligent Virtual Assistants",
    shortTitle: "Virtual Agents",
    description: "Provide employees with always-available virtual support capable of resolving common issues, answering IT queries, and guiding users through service requests without human intervention.",
    image: "/images/solutions/IT/agents.png",
    features: [
      { title: "24/7 support availability", desc: "Provide continuous assistance globally regardless of time zones." },
      { title: "Common issue resolution", desc: "Automatically handle password resets and simple access requests." },
      { title: "IT query assistance", desc: "Leverage natural language processing to answer complex technical questions." },
      { title: "Guided service requests", desc: "Walk users seamlessly through software installation procedures." },
    ],
  },
  {
    id: "knowledge-base",
    title: "Enterprise Self-Service Portal",
    shortTitle: "Self-Service",
    description: "Enable employees to resolve common IT issues independently through an intelligent knowledge base, automated service catalog, and guided self-service experiences.",
    image: "/images/solutions/IT/knowledgebase.png",
    features: [
      { title: "Independent resolution", desc: "Empower users to fix their own issues rapidly and efficiently." },
      { title: "Intelligent knowledge base", desc: "Deliver contextual, up-to-date solutions based on user inquiries." },
      { title: "Automated service catalog", desc: "Streamline hardware and software provisioning through standardized requests." },
      { title: "Guided experiences", desc: "Ensure intuitive navigation for non-technical enterprise employees." },
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation & Orchestration",
    shortTitle: "Workflow",
    description: "Automate repetitive IT operations, approval workflows, service requests, incident escalations, and operational processes to improve consistency and reduce manual effort.",
    image: "/images/solutions/IT/workflow_automation.png",
    features: [
      { title: "No-Code Workflow Builder", desc: "Design complex IT processes visually without any software programming." },
      { title: "Automated Approvals", desc: "Route requests dynamically to designated managers for instant sign-off." },
      { title: "Intelligent Escalation", desc: "Notify senior engineers automatically when critical SLA deadlines approach." },
      { title: "Enterprise ITSM Integration", desc: "Connect seamlessly with ServiceNow, Jira, and enterprise systems." },
    ],
  },
  {
    id: "proactive-alerts",
    title: "Proactive Monitoring & Alerting",
    shortTitle: "Monitoring",
    description: "Identify infrastructure issues, service disruptions, and potential failures before they impact users through intelligent monitoring, predictive analytics, and automated notifications.",
    image: "/images/solutions/IT/alerts.png",
    features: [
      { title: "Infrastructure identification", desc: "Monitor server health and network latency in real-time." },
      { title: "Service disruption detection", desc: "Flag application downtime immediately to minimize business impact." },
      { title: "Predictive analytics", desc: "Forecast hardware failures before they actually occur using AI." },
      { title: "Automated notifications", desc: "Alert key stakeholders instantly via SMS, email, or Slack." },
    ],
  },
  {
    id: "multi-channel",
    title: "Omnichannel Service Delivery",
    shortTitle: "Omnichannel",
    description: "Deliver consistent IT support across web portals, email, chat, collaboration platforms, mobile applications, and virtual assistants through a unified service experience.",
    image: "/images/solutions/IT/channels.png",
    features: [
      { title: "Web & email support", desc: "Manage traditional support channels efficiently from a unified dashboard." },
      { title: "Collaboration platforms", desc: "Integrate ticketing seamlessly directly into Microsoft Teams and Slack." },
      { title: "Mobile applications", desc: "Enable on-the-go support requests for a remote-first enterprise workforce." },
      { title: "Unified service experience", desc: "Maintain context across all channels for seamless problem resolution." },
    ],
  },
];

const AUTO_DELAY = 6000;

export default function ITCapabilities() {
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
              Intelligent IT Service Management
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
              Streamline IT operations with AI-powered service management, intelligent automation, proactive monitoring, and integrated workflows.
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
                      layoutId="itActiveTab"
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