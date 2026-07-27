"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, TrendingDown, Eye, BarChart3 } from "lucide-react";

const values = [
  {
    title: "Real-Time Detection",
    description: "Instantly flag suspicious transactions with millisecond-level latency.",
    icon: Zap,
  },
  {
    title: "AML Compliance Ready",
    description: "Automated AML screening and regulatory reporting out of the box.",
    icon: ShieldCheck,
  },
  {
    title: "Reduced False Positives",
    description: "AI models that learn and adapt, cutting false alerts by up to 70%.",
    icon: TrendingDown,
  },
  {
    title: "360° Visibility",
    description: "Unify data from payments, accounts, and customer profiles into one view.",
    icon: Eye,
  },
  {
    title: "Actionable Insights",
    description: "Visual dashboards that turn fraud signals into strategic decisions.",
    icon: BarChart3,
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
                Why Finxplore?
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
                Protect your financial ecosystem with AI that understands the difference between legitimate behaviour and real threats.
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