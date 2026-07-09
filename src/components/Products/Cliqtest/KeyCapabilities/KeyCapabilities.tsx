"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "No-Code Test Automation",
    description: "Visual drag-and-drop automation for all skill levels.",
  },
  {
    title: "AI Test Data Generation",
    description: "Synthesize realistic, secure data on demand.",
  },
  {
    title: "Requirement Traceability",
    description: "End-to-end linking for complete visibility.",
  },
  {
    title: "Smart Defect Intelligence",
    description: "Predict, classify, and prioritize issues with ML.",
  },
  {
    title: "Enterprise Governance",
    description: "Policy enforcement and compliance reporting.",
  },
  {
    title: "Release Readiness Analytics",
    description: "AI-driven risk assessment for confident deployments.",
  }
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843b7]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9e7be9]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Intelligence built into <span className="text-[#a855f7]">every layer</span>
          </h2>
          <p className="text-lg text-slate-600 font-manrope leading-relaxed">
            Capabilities designed to empower your QA teams and accelerate your release cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:bg-slate-50 hover:border-[#6843b7]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-[#a855f7]" size={24} />
                <h3 className="font-semibold text-lg text-slate-900">{cap.title}</h3>
              </div>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
