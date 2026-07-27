"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Anomaly Detection",
    description: "Uncover hidden patterns and outliers using unsupervised learning.",
  },
  {
    title: "AML Transaction Monitoring",
    description: "Automated screening against sanctions, PEPs, and watchlists.",
  },
  {
    title: "Risk Scoring",
    description: "Dynamic risk scores for every transaction, customer, and merchant.",
  },
  {
    title: "Fraud Ring Detection",
    description: "Graph-based analysis to identify organised fraud networks.",
  },
  {
    title: "Case Management",
    description: "Streamlined workflow for investigators to review and act.",
  },
  {
    title: "Regulatory Reporting",
    description: "Generate audit-ready reports for SAR, AML, and regulatory bodies.",
  },
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843B7]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9e7be9]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Built for <span className="text-[#9e7be9]">Financial Security</span>
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
                Enterprise-grade capabilities to detect, investigate, and prevent fraud at scale.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800 hover:border-[#6843B7]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-[#9e7be9]" size={24} />
                <h3 className="font-semibold text-lg text-white font-urbanist">{cap.title}</h3>
              </div>
              <p className="text-slate-400 font-manrope text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}