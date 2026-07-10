"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Incident Analysis",
    description: "Accelerates root cause investigation and impact assessment.",
  },
  {
    title: "AI Observability",
    description: "Provides real-time operational insights and system visibility.",
  },
  {
    title: "Data Ingestion",
    description: "Collects logs, metrics, events, and traces from multiple sources.",
  },
  {
    title: "Event Correlation",
    description: "Connects related incidents across applications and infrastructure.",
  },
  {
    title: "RCA Automation",
    description: "Automates root cause identification and resolution workflows.",
  },
  {
    title: "AI Analytics",
    description: "Delivers predictive insights and actionable recommendations.",
  }
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header section */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Intelligence built into <span className="text-white">every layer</span>
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
                Capabilities designed to empower your operations team and accelerate your incident response cycles.
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
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800 hover:border-indigo-500/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-indigo-400" size={24} />
                <h3 className="font-semibold text-lg text-white font-urbanist">{cap.title}</h3>
              </div>
              <p className="text-slate-400 font-manrope text-sm leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
