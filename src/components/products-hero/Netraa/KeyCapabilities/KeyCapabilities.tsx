"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Eye, Database, GitMerge, Zap, LineChart } from "lucide-react";

const capabilities = [
  { title: "Incident Analysis", description: "Accelerates root cause investigation and impact assessment with intelligent log parsing and anomaly detection to drastically reduce MTTR.", bgImage: "netraa-incident-bg.png" },
  { title: "AI Observability", description: "Provides real-time operational insights and system visibility. Continuously monitor application health and track dynamic microservice dependencies.", bgImage: "netraa-observability-bg.png" },
  { title: "Data Ingestion", description: "Collects logs, metrics, events, and traces from multiple sources, unifying them into a centralized data lake for high-performance analysis.", bgImage: "netraa-ingestion-bg.png" },
  { title: "Event Correlation", description: "Connects related incidents across applications and infrastructure. Intelligently group fragmented alerts into singular, highly actionable priority incidents.", bgImage: "netraa-correlation-bg.png" },
  { title: "RCA Automation", description: "Automates root cause identification and resolution workflows, automatically surfacing underlying failure points to accelerate system recovery.", bgImage: "netraa-incident-bg.png" },
  { title: "AI Analytics", description: "Delivers predictive insights and actionable recommendations. Forecast potential system degradation to proactively optimize your IT infrastructure before outages occur.", bgImage: "netraa-observability-bg.png" }
];

export default function KeyCapabilities() {
  return (
    <section className="py-16 bg-[#080816] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">

        {/* Header section */}
        <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Intelligence built into <br/>
                <span className="text-[#9D7BEE]">every layer</span>
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
              <p className="font-manrope text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Capabilities designed to empower your operations team and accelerate your incident response cycles.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden px-5 py-4 rounded-md border border-slate-700/60 bg-slate-900/40 backdrop-blur-md hover:border-[#9D7BEE]/50 transition-colors duration-500 flex flex-col min-h-[160px]"
            >
              {/* Background Image (Bottom Left Half-Cut) */}
              <div 
                className="absolute -bottom-20 -left-20 w-64 h-64 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-70 mix-blend-screen rounded-full blur-[2px]"
                style={{ 
                  backgroundImage: `url('/images/products/feature-bgs/${cap.bgImage}')`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }} 
              />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full flex-1">
                {/* Text Container */}
                <div>
                  <h3 className="mb-3 font-urbanist text-[18px] font-bold text-white tracking-wide">{cap.title}</h3>
                  <p className="font-manrope font-medium text-[15px] leading-[1.6] text-slate-300/90">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
