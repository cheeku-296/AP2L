"use client";

import { motion } from "framer-motion";
const values = [
  {
    title: "Real-Time Detection",
    description: "Instantly flag suspicious transactions with millisecond-level latency.",
  },
  {
    title: "AML Compliance Ready",
    description: "Automated AML screening and regulatory reporting out of the box.",
  },
  {
    title: "Reduced False Positives",
    description: "AI models that learn and adapt, cutting false alerts by up to 70%.",
  },
  {
    title: "360° Visibility",
    description: "Unify data from payments, accounts, and customer profiles into one view.",
  },
  {
    title: "Actionable Insights",
    description: "Visual dashboards that turn fraud signals into strategic decisions.",
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