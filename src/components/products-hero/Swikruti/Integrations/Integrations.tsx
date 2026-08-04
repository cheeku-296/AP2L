"use client";

import { motion } from "framer-motion";

const integrations = [
  { category: "Identity Providers", tools: ["Okta", "Azure AD", "Auth0"] },
  { category: "Data Stores", tools: ["MongoDB", "PostgreSQL", "Snowflake"] },
  { category: "CRM", tools: ["Salesforce", "HubSpot", "Microsoft Dynamics"] },
  { category: "Compliance", tools: ["OneTrust", "TrustArc", "Securiti"] },
];

export default function Integrations() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 mb-6">
                Integrate with Confidence
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
              <p className="font-manrope text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Swikruti plugs into your existing infrastructure effortlessly. Connect with your identity providers, CRMs, and data stores to enforce privacy without disrupting workflows.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200/80 rounded-md p-6 shadow-sm"
            >
              <h3 className="text-slate-900 font-bold mb-4 text-[17px] tracking-tight">{group.category}</h3>
              <div className="flex flex-wrap gap-2.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 bg-slate-50 border border-slate-200/60 rounded-md text-[13px] font-medium text-slate-600"
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