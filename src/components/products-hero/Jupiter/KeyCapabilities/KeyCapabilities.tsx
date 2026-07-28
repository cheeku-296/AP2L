"use client";

import { motion } from "framer-motion";
import { Headset, Share2, Layers, Clock, Library } from "lucide-react";

const capabilities = [
  { title: "Centralized Service Desk", description: "Single point for ticket creation, categorization, tracking, and closure.", icon: Headset },
  { title: "Automated Ticket Assignment", description: "Dynamic routing based on service type and engineer expertise.", icon: Share2 },
  { title: "Multi-Level Support Workflow", description: "Structured escalation (L1 → L2 → Dev/Infra) based on time and effort.", icon: Layers },
  { title: "SLA & SLO Governance", description: "Configurable thresholds, early breach alerts, and compliance tracking.", icon: Clock },
  { title: "Knowledge & Analytics Hub", description: "Reuse historical resolutions for faster support with real-time visibility into ticket status, workload, and SLA trends.", icon: Library }
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

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
                Powerful ticket routing, workflow automation, and real-time analytics to supercharge your IT support operations.
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
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="bg-[text-blue-400]/20 p-2 rounded-lg text-blue-400"
                >
                  <cap.icon size={24} />
                </motion.div>
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
