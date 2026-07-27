"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Users, Eye, ClipboardList } from "lucide-react";

const values = [
  {
    title: "Consent Lifecycle Management",
    description: "Capture, store, and update consent across all channels with full audit trails.",
    icon: ClipboardList,
  },
  {
    title: "DPDPA & GDPR Ready",
    description: "Pre‑built compliance frameworks for India's DPDPA, GDPR, and other regulations.",
    icon: ShieldCheck,
  },
  {
    title: "User‑Centric Control",
    description: "Give users transparent control over their data with intuitive preference centres.",
    icon: Users,
  },
  {
    title: "Data Mapping & Discovery",
    description: "Automatically discover and classify personal data across your systems.",
    icon: Eye,
  },
  {
    title: "Audit & Reporting",
    description: "Generate audit‑ready reports and evidence for regulatory reviews.",
    icon: FileCheck,
  },
];

export default function BusinessValues() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 mb-6">
                Why Swikruti?
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
                Build trust with your customers through transparent, compliant, and auditable data practices.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#6843B7]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 p-3 rounded-full bg-[#6843B7]/10 text-[#6843B7]">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 font-urbanist">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] font-manrope">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}