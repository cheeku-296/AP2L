"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  {
    title: "Consent Collection",
    description: "Capture granular consent across multiple touchpoints with clear language.",
  },
  {
    title: "Preference Management",
    description: "Allow users to update their preferences and revoke consent anytime.",
  },
  {
    title: "Data Subject Requests",
    description: "Automate DSAR workflows for access, rectification, and deletion.",
  },
  {
    title: "Policy Engine",
    description: "Define and enforce consent‑based data usage policies enterprise‑wide.",
  },
  {
    title: "Vendor Risk Management",
    description: "Monitor third‑party compliance and data processing agreements.",
  },
  {
    title: "Breach Notification",
    description: "Automated incident response and regulatory notification workflows.",
  },
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
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
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 mb-6">
                Privacy <span className="text-[#6843B7]">by Design</span>
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
              <p className="font-manrope text-xl md:text-[22px] text-slate-600 leading-relaxed max-w-2xl">
                Capabilities that embed privacy into every layer of your data ecosystem.
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
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-[#6843B7]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="text-[#6843B7]" size={24} />
                <h3 className="font-semibold text-lg text-slate-900 font-urbanist">{cap.title}</h3>
              </div>
              <p className="text-slate-600 font-manrope text-sm leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}