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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col px-8 py-5 rounded-md border border-slate-200/80 bg-white overflow-hidden transition-all duration-500 hover:shadow-md hover:border-violet-200/80"
              >
                {/* Purple Light Ray Effect */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/20 blur-[50px] rounded-full transition-colors duration-700" />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-4 font-urbanist text-[22px] font-bold tracking-tight text-slate-900 transition-colors">
                    {value.title}
                  </h3>
                  
                  <p className="font-manrope text-[15px] text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
