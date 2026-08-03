"use client";

import { motion } from "framer-motion";
import GlobeIcon from "@/components/ui/globe-icon";
import CheckIcon from "@/components/ui/check-icon";
import LockIcon from "@/components/ui/lock-icon";
import ShieldIcon from "@/components/ui/shield-icon";
import ChartLineIcon from "@/components/ui/chart-line-icon";
import DatabaseIcon from "@/components/ui/database-icon";

const capabilities = [
  {
    title: "Environment-on-Demand",
    description: "Provision virtual environments rapidly to run parallel automated test execution without waiting for static infrastructure.",
    icon: GlobeIcon,
  },
  {
    title: "Privacy-Safe Test Data",
    description: "Generate synthetic, realistic test datasets with built-in masking to meet strict data privacy regulations like DPDPA.",
    icon: CheckIcon,
  },
  {
    title: "Service Virtualization",
    description: "Simulate third-party APIs and legacy dependencies to unblock testing cycles early in the development process.",
    icon: LockIcon,
  },
  {
    title: "Quality Gate Enforcement",
    description: "Automate release readiness criteria with policy-based governance directly embedded inside your CI/CD pipelines.",
    icon: ShieldIcon,
  },
  {
    title: "Predictive Analytics",
    description: "Gain real-time visibility into test trends, flaw patterns, and environment health metrics to proactively fix issues.",
    icon: ChartLineIcon,
  },
  {
    title: "Centralized Asset Repository",
    description: "Manage test configurations, mock services, and dataset schemas from a single, unified enterprise dashboard.",
    icon: DatabaseIcon,
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
            Empower enterprise teams with complete control over test environments, synthetic data generation, and release governance.
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
