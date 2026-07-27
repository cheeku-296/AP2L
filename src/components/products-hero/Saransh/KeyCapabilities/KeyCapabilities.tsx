"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Environment Independence",
    description: "No live service dependency.",
  },
  {
    title: "Release Validation",
    description: "Continuous DevOps validation with performance and timing simulation.",
  },
  {
    title: "Security Handling",
    description: "TLS, tokens & role controls.",
  },
  {
    title: "Fault Simulation",
    description: "Latency, errors & resiliency testing.",
  },
  {
    title: "Behavior Modeling",
    description: "Functional and negative scenarios with realistic service behavior.",
  },
  {
    title: "Service Virtualization",
    description: "REST, SOAP, JMS & TCP simulation.",
  }
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

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
                Key <span className="text-white">Capabilities</span>
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
                Advanced features that empower teams to test faster, scale securely, and optimize end-to-end integration cycles.
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
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-teal-400" size={24} />
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
