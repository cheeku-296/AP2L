"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowRightIcon from "@/components/ui/arrow-right-icon";
import Link from "next/link";
import Image from "next/image";

const products = [
  {
    id: "shieldvue",
    title: "ShieldVUE",
    logo: "/images/products/logos/shieldvue-logo.png",
    description: "End-to-End Software Supply Chain Security. Protect your infrastructure with automated SBOM management, continuous vulnerability scanning, and cryptographic asset governance. Gain complete visibility into your dependencies and ensure compliance with industry standards through our zero-trust architecture, neutralizing threats before they ever reach production.",
    href: "/products/shieldvue",
    image: "/images/products/mockups/shieldvue-mockup-light.png",
    tags: ["Software Supply Chain", "SBOM Management", "Zero-Trust Governance"]
  },
  {
    id: "netraa",
    title: "NETRAA AI-OPS",
    logo: "/images/products/logos/netraa-logo.png",
    description: "Explainable AI-Driven Observability. Transform complex telemetry into actionable intelligence with automated root cause analysis, predictive fault isolation, and noise suppression. Eliminate monitoring fatigue by correlating logs, metrics, and traces into a single source of truth that dynamically adapts to evolving cloud workloads.",
    href: "/products/netraa",
    image: "/images/products/mockups/netraa-mockup-light.png",
    tags: ["Explainable AI", "Telemetry Analysis", "Predictive Operations"]
  },
  {
    id: "cliqtest",
    title: "cliQTest",
    logo: "/images/products/logos/cliqtest-logo.png",
    description: "Autonomous Quality Engineering. Accelerate release velocity with self-healing test automation, risk-based regression suites, and cross-platform validation. Eliminate manual testing bottlenecks with adaptive scripts that automatically update alongside UI and API changes, providing total coverage and zero defect leakage.",
    href: "/products/cliqtest",
    image: "/images/products/mockups/cliqtest-mockup-light.png",
    tags: ["Self-Healing Automation", "No-Code Scripting", "Regression Intelligence"]
  },
  {
    id: "jupiter",
    title: "JUPITER",
    logo: "/images/products/logos/jupiter-logo.png",
    description: "Next-Gen IT Operations & Service Management. Streamline service desk operations with AI-powered ticket routing, self-service resolution, and real-time SLA tracking. Empower your IT support teams with automated workflows that resolve incidents faster and reduce ticket volume across enterprise environments.",
    href: "/products/jupiter",
    image: "/images/products/mockups/jupiter-mockup-light.png",
    tags: ["AI Ticket Routing", "SLA Automation", "Service Management"]
  },
  {
    id: "finxplore",
    title: "FINXPLORE",
    logo: "/images/products/logos/finxplore-logo.png",
    description: "Financial Intelligence & Fraud Risk Prevention. Mitigate transactional risk in real time using deep learning anomaly detection, automated AML compliance screening, and unified fraud analytics. Safeguard your financial ecosystem with millisecond response times and ultra-low false positive rates.",
    href: "/products/finxplore",
    image: "/images/products/mockups/finxplore-mockup-light.png",
    tags: ["Real-Time Detection", "AML Compliance", "Risk Analytics"]
  },
  {
    id: "swikruti",
    title: "SWIKRUTI",
    logo: "/images/products/logos/swikruti-logo.png",
    description: "Enterprise Consent & Privacy Lifecycle Management. Build user trust with automated consent tracking, automated data mapping, and built-in DPDPA and GDPR compliance frameworks. Manage data subject requests seamlessly while maintaining full auditability across all digital touchpoints.",
    href: "/products/swikruti",
    image: "/images/products/mockups/swikruti-mockup-light.png",
    tags: ["DPDPA & GDPR", "Consent Lifecycle", "Data Subject Governance"]
  },
  {
    id: "saransh",
    title: "SARANSH",
    logo: "/images/products/logos/saransh-logo.png",
    description: "Enterprise Test Environment & Data Governance. Virtualize dependent services and generate synthetic, privacy-compliant test data on demand. Eliminate environment bottlenecks and execute parallel testing cycles with predictable quality gates.",
    href: "/products/saransh",
    image: "/images/products/mockups/saransh-mockup-light.png",
    tags: ["Service Virtualization", "Data Synthesis", "Quality Gates"]
  }
];

export default function PlatformOverview() {
  const [activeTab, setActiveTab] = useState(products[0].id);

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];
  const activeIndex = products.findIndex((p) => p.id === activeTab);

  return (
    <section className="py-24 bg-[#090A1F] text-white relative overflow-hidden transition-colors duration-500">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white mb-6 leading-tight"
          >
            The AP2L Platform Ecosystem
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-manrope text-lg md:text-[20px] text-slate-300 leading-relaxed"
          >
            A unified suite of specialized platforms designed to secure, automate, and optimize your entire enterprise infrastructure.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto gap-2 md:gap-3 pb-6 mb-12 scrollbar-none">
          {products.map((product) => {
            const isActive = activeTab === product.id;
            return (
              <button
                key={product.id}
                onClick={() => setActiveTab(product.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-[1.02]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <div className="relative w-5 h-5 flex-shrink-0">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <span>{product.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Product Feature Showcase */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl bg-[#13111C] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center ${
                activeIndex % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Left Content Area */}
              <div className="p-8 md:p-12 lg:p-14 w-full md:w-1/2 lg:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-10 h-10 p-2 rounded-xl bg-violet-500/10 border border-violet-500/20">
                    <Image
                      src={activeProduct.logo}
                      alt={activeProduct.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <h3 className="font-urbanist text-2xl md:text-3xl font-bold text-white tracking-tight">
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
                    <ArrowRightIcon size={18} />
                  </Link>
                </div>
              </div>

              {/* Right Image Area */}
              <div className="hidden md:block w-1/2 lg:w-[55%] h-auto min-h-[440px] relative">
                <div className={`absolute inset-0 z-10 bg-gradient-to-${activeIndex % 2 === 1 ? 'r' : 'l'} from-transparent via-transparent to-[#13111C] pointer-events-none`} />
                <div className={`absolute inset-0 z-10 bg-gradient-to-t from-[#13111C] via-transparent to-[#13111C] pointer-events-none opacity-40`} />
                
                <Image
                  src={activeProduct.image}
                  alt={`${activeProduct.title} Interface Mockup`}
                  fill
                  className="object-cover object-left transition-transform duration-1000 hover:scale-[1]"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
