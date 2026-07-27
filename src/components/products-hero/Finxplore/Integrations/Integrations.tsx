"use client";

import { motion } from "framer-motion";

const integrations = [
  { category: "Payment Gateways", tools: ["Stripe", "Adyen", "PayPal"] },
  { category: "Core Banking", tools: ["Finacle", "Temenos", "FIS"] },
  { category: "Data Platforms", tools: ["Snowflake", "BigQuery", "Databricks"] },
  { category: "Monitoring", tools: ["Splunk", "Datadog", "Dynatrace"] },
];

export default function Integrations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 mb-6">
                Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Ecosystem Integration</span>
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
                Connect Finxplore with your existing financial infrastructure in minutes.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-[#6843B7] font-semibold mb-4 text-lg">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}