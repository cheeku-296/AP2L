"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  TestTube2,
  Headset,
  Search,
  FileCheck2,
  Layers,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "shieldvue",
    title: "ShieldVUE",
    description: "End-to-End Software Supply Chain Security. Protect your infrastructure with automated SBOM management, continuous vulnerability scanning, and cryptographic asset governance. Gain complete visibility into your dependencies and ensure compliance with industry standards through our zero-trust architecture, neutralizing threats before they ever reach production.",
    href: "/products/shieldvue",
    icon: ShieldCheck,
    tags: ["SBOM Management", "Vulnerability Scanning", "Zero Trust"],
  },
  {
    id: "netraa",
    title: "NETRAA AI-OPS",
    description: "Explainable AI for Intelligent Observability and rapid Root Cause Analysis. Consolidate your logs, metrics, and traces into a single pane of glass. Leverage machine learning algorithms to instantly identify anomalies, correlate events across distributed systems, and reduce your Mean Time to Resolution (MTTR) by up to 80%.",
    href: "/products/netraa",
    icon: Activity,
    tags: ["Predictive Alerts", "Log Analytics", "AIOps"],
  },
  {
    id: "cliqtest",
    title: "cliQTest",
    description: "AI-Powered Test Automation Platform enabling zero-touch continuous testing. Automate complex scenarios and ensure flawless deployments across every environment. Empower your QA teams with self-healing scripts, intelligent test generation, and seamless CI/CD integration that scales dynamically with your architecture.",
    href: "/products/cliqtest",
    icon: TestTube2,
    tags: ["No-Code Automation", "Cross-Browser", "AI Test Generation"],
  },
  {
    id: "jupiter",
    title: "JUPITER",
    description: "Modern, AI-Powered IT Service Desk. Resolve tickets faster with intelligent routing, automated workflows, and robust self-service capabilities for your enterprise. Streamline your entire IT support lifecycle by deflecting routine queries and delivering context-aware assistance to your employees 24/7.",
    href: "/products/jupiter",
    icon: Headset,
    tags: ["ITSM Automation", "SLA Tracking", "Smart Routing"],
  },
  {
    id: "finxplore",
    title: "FINXPLORE",
    description: "Real-time AI-Powered Risk & Fraud Detection for financial institutions. Neutralize threats instantaneously while maintaining frictionless customer experiences. Analyze millions of data points across payment networks to uncover sophisticated fraud rings, enforce AML protocols, and ensure absolute regulatory compliance.",
    href: "/products/finxplore",
    icon: Search,
    tags: ["AML Compliance", "Anomaly Detection", "Risk Scoring"],
  },
  {
    id: "swikruti",
    title: "SWIKRUTI",
    description: "Consent Management & DPDPA Compliance platform for enterprise privacy. Keep your customer data compliant, secure, and fully auditable. Provide users with transparent control over their digital footprint while seamlessly mapping consent lifecycles across your data ecosystem to prevent unauthorized access.",
    href: "/products/swikruti",
    icon: FileCheck2,
    tags: ["Data Privacy", "DPDPA Ready", "Consent Ledger"],
  },
  {
    id: "saransh",
    title: "SARANSH",
    description: "AI-Enabled Service Virtualization. Isolate complex subsystems and simulate behaviors to enable continuous testing in isolated sandbox environments. Decouple your development cycles from third-party API dependencies by replicating realistic stateful behaviors and edge-case failure scenarios on demand.",
    href: "/products/saransh",
    icon: Layers,
    tags: ["API Mocking", "Stateful Sim", "Sandboxing"],
  },
];

export default function PlatformOverview() {
  const [activeId, setActiveId] = useState(products[0].id);
  const activeProduct = products.find(p => p.id === activeId) || products[0];

  return (
    <section className="relative w-full py-24 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">

      {/* Decorative Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            background: `radial-gradient(circle at center, var(--tw-gradient-stops))`
          }}
          className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-20 dark:opacity-10 bg-gradient-to-br from-violet-600 to-fuchsia-600`}
        />
      </div>

      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">

        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex-1 max-w-xl">
            <h2 className="font-urbanist text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-800 dark:text-white">
              The AP2L Platform <br />
              Suite
            </h2>
          </div>
          <p className="font-inter text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-md md:text-right">
            An interconnected AI ecosystem built to automate, secure, and accelerate your engineering lifecycle.
          </p>
        </div>

        {/* Pill Navigation */}
        <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 mb-12">
          {products.map((product) => {
            const isActive = activeId === product.id;
            return (
              <button
                key={product.id}
                onClick={() => setActiveId(product.id)}
                className={`relative px-5 py-2.5 rounded-full font-semibold text-[13px] uppercase tracking-wider transition-colors duration-300 border focus:outline-none ${isActive
                  ? `text-white dark:text-slate-900 border-transparent`
                  : "bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className={`absolute inset-0 rounded-full bg-slate-800 dark:bg-slate-200 shadow-md -z-10`}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{product.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="w-full relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-2xl shadow-slate-200/20 dark:shadow-none p-2 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`w-full h-full min-h-[384px] rounded-lg flex flex-col md:flex-row items-center overflow-hidden border border-slate-100 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-700`}
            >

              {/* Left Content Area */}
              <div className="flex-1 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl font-bold font-urbanist text-slate-900 dark:text-white">
                    {activeProduct.title}
                  </h3>
                </div>

                <p className="font-inter text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  {activeProduct.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {activeProduct.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-1.5 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-semibold border border-slate-200 dark:border-slate-700 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={activeProduct.href}
                    className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-[14px] font-semibold transition-all hover:-translate-y-0.5 shadow-sm shadow-slate-900/10 bg-slate-800 dark:bg-white dark:text-slate-900 hover:bg-slate-900 dark:hover:bg-slate-100`}
                  >
                    Explore {activeProduct.title}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Decorative Graphic Area */}
              <div className="hidden md:flex w-5/12 h-full items-center justify-center p-8 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-10 dark:opacity-20`} />

                {/* Abstract visual representation */}
                <div className="relative w-full aspect-square max-w-[320px] rounded-full border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center">
                  <div className="absolute inset-4 rounded-full border border-slate-300/50 dark:border-slate-600/50 animate-spin-slow flex items-center justify-center">
                    <div className="absolute top-0 w-3 h-3 rounded-full bg-slate-400" />
                  </div>
                  <div className="absolute inset-12 rounded-full border border-slate-400/50 dark:border-slate-500/50 animate-reverse-spin flex items-center justify-center">
                    <div className="absolute bottom-0 w-4 h-4 rounded-full bg-slate-500" />
                  </div>

                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-2xl flex items-center justify-center transform rotate-12 transition-transform duration-700 hover:rotate-0`}>
                    <activeProduct.icon size={64} className="text-white" strokeWidth={1} />
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
