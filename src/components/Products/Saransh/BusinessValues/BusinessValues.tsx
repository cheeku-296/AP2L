"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, PieChart, CheckCircle, ShieldAlert } from "lucide-react";

const values = [
  {
    title: "Faster Release Cycles",
    description: "Reduces dependency bottlenecks and accelerates application delivery.",
    icon: Zap,
  },
  {
    title: "Regulatory Compliance",
    description: "Ensures secure and compliant testing across enterprise environments.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Optimization",
    description: "Minimizes testing effort and reduces infrastructure costs.",
    icon: PieChart,
  },
  {
    title: "Improved Quality",
    description: "Enhances release confidence through predictable and reliable validation.",
    icon: CheckCircle,
  },
  {
    title: "Risk Reduction",
    description: "Identifies integration issues early to prevent production failures.",
    icon: ShieldAlert,
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
                Why Choose Saransh?
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
                Saransh improves testing efficiency, accelerates releases, reduces operational risks, and enhances overall software reliability.
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
