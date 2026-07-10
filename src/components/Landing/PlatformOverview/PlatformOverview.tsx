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
import Image from "next/image";

const products = [
  {
    id: "shieldvue",
    title: "ShieldVUE",
    description: "End-to-End Software Supply Chain Security. Protect your infrastructure with automated SBOM management, continuous vulnerability scanning, and cryptographic asset governance. Gain complete visibility into your dependencies and ensure compliance with industry standards through our zero-trust architecture, neutralizing threats before they ever reach production.",
    href: "/products/shieldvue",
    image: "/images/products/shieldvue.png",
    icon: ShieldCheck,
    tags: ["SBOM Management", "Vulnerability Scanning", "Zero Trust"],
  },
  {
    id: "netraa",
    title: "NETRAA AI-OPS",
    description: "Explainable AI for Intelligent Observability and rapid Root Cause Analysis. Consolidate your logs, metrics, and traces into a single pane of glass. Leverage machine learning algorithms to instantly identify anomalies, correlate events across distributed systems, and reduce your Mean Time to Resolution (MTTR) by up to 80%.",
    href: "/products/netraa",
    image: "/images/products/netraa.png",
    icon: Activity,
    tags: ["Predictive Alerts", "Log Analytics", "AIOps"],
  },
  {
    id: "cliqtest",
    title: "cliQTest",
    description: "AI-Powered Test Automation Platform enabling zero-touch continuous testing. Automate complex scenarios and ensure flawless deployments across every environment. Empower your QA teams with self-healing scripts, intelligent test generation, and seamless CI/CD integration that scales dynamically with your architecture.",
    href: "/products/cliqtest",
    image: "/images/products/cliqtest.png",
    icon: TestTube2,
    tags: ["No-Code Automation", "Cross-Browser", "AI Test Generation"],
  },
  {
    id: "jupiter",
    title: "JUPITER",
    description: "Modern, AI-Powered IT Service Desk. Resolve tickets faster with intelligent routing, automated workflows, and robust self-service capabilities for your enterprise. Streamline your entire IT support lifecycle by deflecting routine queries and delivering context-aware assistance to your employees 24/7.",
    href: "/products/jupiter",
    image: "/images/products/jupiter.png",
    icon: Headset,
    tags: ["ITSM Automation", "SLA Tracking", "Smart Routing"],
  },
  {
    id: "finxplore",
    title: "FINXPLORE",
    description: "Real-time AI-Powered Risk & Fraud Detection for financial institutions. Neutralize threats instantaneously while maintaining frictionless customer experiences. Analyze millions of data points across payment networks to uncover sophisticated fraud rings, enforce AML protocols, and ensure absolute regulatory compliance.",
    href: "/products/finxplore",
    image: "/images/products/finxplore.png",
    icon: Search,
    tags: ["AML Compliance", "Anomaly Detection", "Risk Scoring"],
  },
  {
    id: "swikruti",
    title: "SWIKRUTI",
    description: "Consent Management & DPDPA Compliance platform for enterprise privacy. Keep your customer data compliant, secure, and fully auditable. Provide users with transparent control over their digital footprint while seamlessly mapping consent lifecycles across your data ecosystem to prevent unauthorized access.",
    href: "/products/swikruti",
    image: "/images/products/swikruti.png",
    icon: FileCheck2,
    tags: ["Data Privacy", "DPDPA Ready", "Consent Ledger"],
  },
  {
    id: "saransh",
    title: "SARANSH",
    description: "AI-Enabled Service Virtualization. Isolate complex subsystems and simulate behaviors to enable continuous testing in isolated sandbox environments. Decouple your development cycles from third-party API dependencies by replicating realistic stateful behaviors and edge-case failure scenarios on demand.",
    href: "/products/saransh",
    image: "/images/products/saransh.png",
    icon: Layers,
    tags: ["API Mocking", "Stateful Sim", "Sandboxing"],
  },
];

export default function PlatformOverview() {
  const [activeId, setActiveId] = useState(products[0].id);
  const activeIndex = products.findIndex(p => p.id === activeId);
  const activeProduct = products[activeIndex] || products[0];

  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">

      {/* Decorative Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            background: `radial-gradient(circle at center, var(--tw-gradient-stops))`
          }}
          className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-20 dark:opacity-10 bg-gradient-to-br from-violet-600 to-fuchsia-600`}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 dark:text-white mb-6"
            >
              The AP2L Products
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#252134] dark:bg-white text-white dark:text-[#252134] font-medium text-sm hover:opacity-90 transition-opacity">
                Explore now
              </Link> */}
            </motion.div>
          </div>
          
          <div className="md:pt-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              An interconnected AI ecosystem built to automate, secure, and accelerate your engineering lifecycle.
            </motion.p>
          </div>
        </div>

        {/* Pill Navigation */}
        <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 mb-8">
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
                    className="absolute inset-0 rounded-full bg-slate-800 dark:bg-slate-200 shadow-md -z-10"
                    transition={{ type: "tween", ease: "easeInOut", duration: 0.25 }}
                  />
                )}
                <span className="relative z-10">{product.title}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <div className="w-full relative mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full h-full min-h-[440px] rounded-[24px] flex flex-col ${activeIndex % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch overflow-hidden border border-slate-800 bg-[#13111C] shadow-2xl shadow-violet-900/10 transition-colors duration-700`}
            >

              {/* Left Content Area */}
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative z-20">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl lg:text-[40px] font-bold font-urbanist text-white tracking-tight">
                    {activeProduct.title}
                  </h3>
                </div>

                <p className="font-manrope text-[16px] md:text-[17px] text-slate-400 leading-relaxed mb-10 max-w-2xl">
                  {activeProduct.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {activeProduct.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/5 text-slate-300 text-[13px] font-medium border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div>
                  <Link
                    href={activeProduct.href}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-[15px] font-semibold transition-all hover:-translate-y-0.5 bg-violet-600 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-600/25"
                  >
                    Explore {activeProduct.title}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Right Image Area */}
              <div className="hidden md:block w-1/2 lg:w-[55%] h-auto min-h-[440px] relative">
                {/* Fade gradient to blend image into the dark background */}
                <div className={`absolute inset-0 z-10 bg-gradient-to-${activeIndex % 2 === 1 ? 'r' : 'l'} from-transparent via-transparent to-[#13111C] pointer-events-none`} />
                <div className={`absolute inset-0 z-10 bg-gradient-to-t from-[#13111C] via-transparent to-[#13111C] pointer-events-none opacity-40`} />
                
                <Image
                  src={activeProduct.image}
                  alt={`${activeProduct.title} Interface Mockup`}
                  fill
                  className="object-cover object-left transition-transform duration-1000 hover:scale-[1.03]"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
