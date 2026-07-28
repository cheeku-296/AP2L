"use client";

import { motion } from "framer-motion";
import { CheckSquare, Sliders, Users, Settings, ShieldAlert, Bell } from "lucide-react";

const capabilities = [
  { title: "Consent Collection", description: "Capture granular consent across multiple touchpoints with clear language.", icon: CheckSquare },
  { title: "Preference Management", description: "Allow users to update their preferences and revoke consent anytime.", icon: Sliders },
  { title: "Data Subject Requests", description: "Automate DSAR workflows for access, rectification, and deletion.", icon: Users },
  { title: "Policy Engine", description: "Define and enforce consent‑based data usage policies enterprise‑wide.", icon: Settings },
  { title: "Vendor Risk Management", description: "Monitor third‑party compliance and data processing agreements.", icon: ShieldAlert },
  { title: "Breach Notification", description: "Automated incident response and regulatory notification workflows.", icon: Bell }
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
              <p className="font-manrope text-xl md:text-[22px] text-slate-300 leading-relaxed max-w-2xl">
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
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:bg-slate-800 hover:border-[#6843B7]/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#6843B7]/20 p-2 rounded-lg text-[#6843B7]"
                >
                  <cap.icon size={24} />
                </motion.div>
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