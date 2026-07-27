"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "Vulnerability Mapping: Identify and prioritize security risks.",
  "Central Repository: Secure storage for SBOM inventories.",
  "AI Remediation: AI-powered fix recommendations.",
  "Compliance Reporting: Generate audit-ready compliance reports.",
  "SBOM Generation: Automated SBOM creation and management.",
  "Component Discovery: Discover software components & dependencies.",
  "Dashboard & Analytics: Real-time security and compliance insights.",
  "Security & Governance: Centralized risk and policy management.",
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header section */}
        <div className="mb-8 md:mb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Powerful Capabilities for <span className="text-violet-400">Total Security</span>
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
              <p className="font-manrope text-xl md:text-[22px] text-slate-300 leading-relaxed max-w-2xl">
                A comprehensive suite of tools designed to discover, track, and remediate vulnerabilities across your entire software supply chain.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => {
              const [title, desc] = cap.split(": ");
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-violet-400 mt-1 shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
      </div>
    </section>
  );
}
