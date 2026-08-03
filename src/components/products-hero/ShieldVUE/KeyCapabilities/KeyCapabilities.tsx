"use client";

import { motion } from "framer-motion";
import { Map, Database, Wand2, FileText, Box, Search, BarChart3, Shield, ChevronRight } from "lucide-react";

const capabilities = [
  { title: "Vulnerability Mapping", description: "Automatically scan and prioritize complex security risks to visualize your attack surface.", bgImage: "vuln-map-bg.png" },
  { title: "Central Repository", description: "Maintain a single, secure source of truth to easily track all your SBOM inventories.", bgImage: "repo-bg.png" },
  { title: "AI Remediation", description: "Leverage advanced machine learning to receive intelligent, context-aware fix recommendations.", bgImage: "ai-bg.png" },
  { title: "Compliance Reporting", description: "Generate comprehensive, audit-ready reports tailored to SOC2, GDPR, and ISO standards.", bgImage: "shieldvue-4-bg.png" },
  { title: "SBOM Generation", description: "Instantly create and manage Software Bill of Materials in standard formats like CycloneDX.", bgImage: "sbom-bg.png" },
  { title: "Component Discovery", description: "Deeply analyze your codebase to automatically discover hidden third-party dependencies.", bgImage: "shieldvue-6-bg.png" },
  { title: "Dashboard & Analytics", description: "Access a unified pane of glass for real-time security postures and actionable threat intelligence.", bgImage: "analytics-bg.png" },
  { title: "Security & Governance", description: "Enforce centralized security policies across your entire software development lifecycle.", bgImage: "shieldvue-8-bg.png" }
];

export default function KeyCapabilities() {
  return (
    <section className="py-12 bg-[#080816] text-white overflow-hidden relative">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Header section */}
        <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-4">
                Powerful Capabilities for <br />
                <span className="text-[#9D7BEE]">Total Security</span>
              </h2>
            </motion.div>
          </div>

          <div className="md:pt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-manrope text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                A comprehensive suite of tools designed to discover, track, and remediate vulnerabilities across your entire software supply chain.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden px-5 py-4 rounded-md border border-slate-700/60 bg-slate-900/40 backdrop-blur-md hover:border-[#9D7BEE]/50 transition-colors duration-500 flex flex-col min-h-[160px]"
            >
              {/* Background Image (Bottom Left Half-Cut) */}
              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 z-0 opacity-10 transition-opacity duration-500 group-hover:opacity-30  mix-blend-screen rounded-full blur-[2px]"
                style={{
                  backgroundImage: `url('/images/products/feature-bgs/${cap.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full flex-1">
                {/* Text Container */}
                <div>
                  <h3 className="mb-3 font-urbanist text-[18px] font-bold text-white tracking-wide">{cap.title}</h3>
                  <p className="font-manrope font-medium text-[15px] leading-[1.6] text-slate-300/90">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
