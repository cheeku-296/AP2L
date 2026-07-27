"use client";

import { motion } from "framer-motion";
import { Eye, ShieldAlert, Zap, Search, CheckCircle } from "lucide-react";

const values = [
  {
    title: "Enhanced Visibility",
    description: "Gain complete visibility into software components, dependencies, vulnerabilities, and supply chain risks.",
    icon: Eye,
  },
  {
    title: "AI-Driven Security Operations",
    description: "Improve decision-making with AI-powered risk prioritization, remediation guidance, and predictive insights.",
    icon: Zap,
  },
  {
    title: "Comprehensive Risk Management",
    description: "Identify, assess, and prioritize security vulnerabilities before they impact business operations.",
    icon: ShieldAlert,
  },
  {
    title: "Faster Incident Response",
    description: "Accelerate vulnerability assessment, impact analysis, and remediation through centralized intelligence.",
    icon: Search,
  },
  {
    title: "Regulatory Compliance Readiness",
    description: "Ensure continuous compliance with CERT-In guidelines, SPDX, CycloneDX, and industry regulations.",
    icon: CheckCircle,
  },
];

export default function BusinessValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-slate-800 mb-6">
                Why Choose ShieldVUE?
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
              <p className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-600 leading-relaxed max-w-2xl">
                Protect your software supply chain with intelligent insights and automated governance.
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
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
