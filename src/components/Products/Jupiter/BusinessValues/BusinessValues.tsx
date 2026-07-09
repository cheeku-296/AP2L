"use client";

import { motion } from "framer-motion";
import { Clock, Cpu, ShieldCheck, Layers, Eye, HeartHandshake } from "lucide-react";

const values = [
  {
    title: "Faster Resolution",
    description: "Accelerates incident response and reduces downtime.",
    icon: Clock,
  },
  {
    title: "Reduced Manual Dependency",
    description: "Automates ticket handling and repetitive service desk activities.",
    icon: Cpu,
  },
  {
    title: "Improved IT Governance",
    description: "Ensures structured, accountable, and SLA-driven service delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Consistent Service Delivery",
    description: "Standardizes incident management through defined workflows and escalation paths.",
    icon: Layers,
  },
  {
    title: "Enhanced Visibility",
    description: "Provides real-time insights across incidents, workloads, and SLAs.",
    icon: Eye,
  },
  {
    title: "Better End-User Experience",
    description: "Delivers faster support, improved responsiveness, and reliable service outcomes.",
    icon: HeartHandshake,
  },
];

export default function BusinessValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header section */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 mb-6">
                Why Choose Jupiter?
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
                Jupiter improves operational efficiency, reduces resolution times, and provides complete visibility across IT support operations.
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
                className="p-8 rounded-2xl bg-white border border-slate-200 overflow-hidden"
              >
                <div className="flex gap-5 items-start">
                  <div className="shrink-0 p-3 rounded-full bg-slate-50 text-slate-600">
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
