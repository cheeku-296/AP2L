"use client";

import { motion } from "framer-motion";
import UserIcon from "@/components/ui/user-icon";
import LayersIcon from "@/components/ui/layers-icon";
import ClockIcon from "@/components/ui/clock-icon";
import DatabaseIcon from "@/components/ui/database-icon";
import GearIcon from "@/components/ui/gear-icon";

const capabilities = [
  {
    title: "AI-Powered Service Desk",
    description: "Automate ticket triage, routing, and resolution using contextual AI virtual agents.",
    icon: UserIcon,
  },
  {
    title: "SLA Management",
    description: "Track service level agreements in real time with proactive breach warnings and escalation paths.",
    icon: ClockIcon,
  },
  {
    title: "Incident Correlation",
    description: "Group related alerts into unified incident tickets to reduce noise and MTTR.",
    icon: LayersIcon,
  },
  {
    title: "Knowledge Base Intelligence",
    description: "Automatically suggest solution articles to support engineers and end-users.",
    icon: DatabaseIcon,
  },
  {
    title: "Automated Workflows",
    description: "Execute automated remediation scripts directly from incident tickets.",
    icon: GearIcon,
  },
];

export default function KeyCapabilities() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-white mb-6"
          >
            Key Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-manrope text-lg md:text-[20px] text-slate-300 leading-relaxed"
          >
            Modernize IT service management with intelligent automation, ticket routing, and predictive SLA tracking.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col p-8 rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-950 transition-all duration-300 hover:border-violet-500/50"
              >
                <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-violet-500/30 text-violet-400 bg-violet-950/40 mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-urbanist text-xl font-bold text-white mb-3 tracking-tight">
                  {cap.title}
                </h3>
                <p className="font-manrope text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
