"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Bot,
  Headset,
  BookOpen,
  GitBranch,
  Bell,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const capabilities = [
  {
    id: "ai-triage",
    title: "AI-Powered Ticket Triage",
    description: "Intelligent routing and prioritization of tickets based on urgency, impact, and agent expertise.",
    icon: Bot,
    image: "/images/solutions/IT/ticket.png",
    features: [
      "Smart ticket categorization",
      "Priority-based routing",
      "Agent skill matching",
      "SLA prediction",
    ],
  },
  {
    id: "virtual-agents",
    title: "Intelligent Virtual Agents",
    description: "AI chatbots that resolve common queries instantly, 24/7, without human intervention.",
    icon: Headset,
    image: "/images/solutions/IT/agents.png",
    features: [
      "Natural language understanding",
      "Self-service resolution",
      "Seamless handoff to agents",
      "Multi-channel support",
    ],
  },
  {
    id: "knowledge-base",
    title: "Self-Service Knowledge Base",
    description: "Centralized repository of articles, FAQs, and solutions accessible to employees anytime.",
    icon: BookOpen,
    image: "/images/solutions/IT/knowledgebase.png",
    features: [
      "AI-powered search",
      "Automatic article suggestions",
      "Feedback loop",
      "Multi-language support",
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Automate repetitive tasks, approvals, and escalations across your IT service management.",
    icon: GitBranch,
    image: "/images/solutions/IT/workflow_automation.png",
    features: [
      "No-code automation builder",
      "Approval workflows",
      "Escalation rules",
      "Integration with ITSM",
    ],
  },
  {
    id: "proactive-alerts",
    title: "Proactive Alerting",
    description: "Notify users and agents about system status, outages, and scheduled maintenance before they ask.",
    icon: Bell,
    image: "/images/solutions/IT/alerts.png",
    features: [
      "Real-time notifications",
      "Scheduled maintenance alerts",
      "Incident communication",
      "Customizable channels",
    ],
  },
  {
    id: "multi-channel",
    title: "Multi-Channel Support",
    description: "Unify email, chat, Slack, Teams, and portal into a single queue for seamless support.",
    icon: Smartphone,
    image: "/images/solutions/IT/channels.png",
    features: [
      "Email integration",
      "Live chat",
      "Slack & Teams",
      "Portal self-service",
    ],
  },
];

const AUTO_DELAY = 4000;

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
    <section
      className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Modern IT Support Capabilities
            </h2>
            <p className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              From AI-powered triage to multi-channel support — everything your IT team needs to deliver exceptional service.
            </p>
          </motion.div>
        </div>

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
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                      }`}
                    >
                      {cap.title}
                    </h4>
                    {/* Removed features count */}
                  </div>

                  {isSelected && (
                    <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full bg-gradient-to-b from-violet-600 to-fuchsia-600" />
                  )}
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

          {/* Right detail with full image */}
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