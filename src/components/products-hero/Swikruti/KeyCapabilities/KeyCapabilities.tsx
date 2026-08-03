"use client";

import { motion } from "framer-motion";
import CheckIcon from "@/components/ui/check-icon";
import GearIcon from "@/components/ui/gear-icon";
import UsersIcon from "@/components/ui/users-icon";
import ShieldIcon from "@/components/ui/shield-icon";
import BellIcon from "@/components/ui/bell-icon";

const capabilities = [
  {
    title: "Omnichannel Consent Preference Center",
    description: "Provide users with self-service portals to manage privacy preferences across web, mobile, and offline channels.",
    icon: UsersIcon,
  },
  {
    title: "Automated Data Discovery",
    description: "Map and classify PII across enterprise databases to maintain accurate data inventories automatically.",
    icon: GearIcon,
  },
  {
    title: "DSAR Automation",
    description: "Streamline Data Subject Access Requests (DSAR) with automated data retrieval and deletion workflows.",
    icon: CheckIcon,
  },
  {
    title: "Policy & Audit Trail Management",
    description: "Maintain immutable audit logs of all consent events to comply with DPDPA, GDPR, and global regulations.",
    icon: ShieldIcon,
  },
  {
    title: "Breach Notification System",
    description: "Trigger automated incident reporting and user notification workflows during potential data breaches.",
    icon: BellIcon,
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
            Manage consent lifecycles, DSAR requests, and data subject privacy governance with total transparency.
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