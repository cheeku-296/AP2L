"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  {
    category: "Payment Gateways",
    description: "Consolidate transaction streams, fees, and settlements across global payment processors.",
    tools: ["Stripe", "Adyen", "PayPal"],
  },
  {
    category: "Core Banking",
    description: "Integrate directly with core banking engines for real-time ledger auditing and automated reconciliation.",
    tools: ["Finacle", "Temenos", "FIS"],
  },
  {
    category: "Data Platforms",
    description: "Ingest and process high-volume financial data streams with cloud data warehousing capabilities.",
    tools: ["Snowflake", "BigQuery", "Databricks"],
  },
  {
    category: "Monitoring",
    description: "Track transaction anomalies, reconciliation failures, and platform health in real-time.",
    tools: ["Splunk", "Datadog", "Dynatrace"],
  },
];

export default function Integrations() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white transition-colors duration-500 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header Section: Heading on Left, Subheading on Right */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black mb-4 md:mb-0"
            >
              Seamless Ecosystem Integration
            </motion.h2>
          </div>

          <div className="md:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-lg md:text-[20px] text-slate-700 leading-relaxed max-w-2xl"
            >
              Connect Finxplore with your existing financial infrastructure in minutes to unify data streams and accelerate reconciliation.
            </motion.p>
          </div>
        </div>

        {/* Content Section: Cards on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Category Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrations.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl border border-slate-200/80 bg-white hover:border-violet-300 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <h3 className="font-urbanist text-lg font-bold text-slate-900 mb-2 tracking-tight group-hover:text-violet-600 transition-colors">
                    {group.category}
                  </h3>
                  <p className="font-manrope text-[14px] text-slate-600 leading-relaxed">
                    {group.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl lg:max-w-none"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
                <Image
                  src="/new/finxplore.png"
                  alt="Finxplore Ecosystem Integration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}