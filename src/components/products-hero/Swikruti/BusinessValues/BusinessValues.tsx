"use client";

import { motion } from "framer-motion";
const values = [
  {
    title: "Consent Lifecycle Management",
    description: "Capture, store, and update consent across all channels with full audit trails.",
  },
  {
    title: "DPDPA & GDPR Ready",
    description: "Pre‑built compliance frameworks for India's DPDPA, GDPR, and other regulations.",
  },
  {
    title: "User‑Centric Control",
    description: "Give users transparent control over their data with intuitive preference centres.",
  },
  {
    title: "Data Mapping & Discovery",
    description: "Automatically discover and classify personal data across your systems.",
  },
  {
    title: "Audit & Reporting",
    description: "Generate audit‑ready reports and evidence for regulatory reviews.",
  },
];

export default function BusinessValues() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
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
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col px-8 py-5 rounded-md border border-slate-200/80 bg-white overflow-hidden transition-all duration-500 hover:shadow-md hover:border-violet-200/80"
              >
                {/* Violet Light Ray Effect */}
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