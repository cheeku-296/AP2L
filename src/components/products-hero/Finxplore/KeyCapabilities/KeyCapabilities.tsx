"use client";

import { motion } from "framer-motion";
import { SearchCode, ShieldAlert, Activity, Network, Briefcase, FileCheck } from "lucide-react";

const capabilities = [
  { title: "Anomaly Detection", description: "Uncover hidden behavioural patterns and transactional outliers instantly using advanced unsupervised machine learning models.", bgImage: "netraa-incident-bg.png" },
  { title: "AML Transaction Monitoring", description: "Automate compliance with continuous, real-time transaction screening against global sanctions, PEPs, and critical watchlists.", bgImage: "vuln-map-bg.png" },
  { title: "Risk Scoring", description: "Calculate highly accurate, dynamic risk scores for every single transaction, customer interaction, and merchant profile.", bgImage: "analytics-bg.png" },
  { title: "Fraud Ring Detection", description: "Utilize sophisticated graph-based data analysis to easily identify and dismantle deeply organized financial fraud networks.", bgImage: "netraa-correlation-bg.png" },
  { title: "Case Management", description: "Empower your investigators with a streamlined, unified workflow to review flagged cases and take decisive action rapidly.", bgImage: "discovery-bg.png" },
  { title: "Regulatory Reporting", description: "Automatically generate comprehensive, audit-ready reports for Suspicious Activity Reports (SAR), AML, and key regulatory bodies.", bgImage: "compliance-bg.png" }
];

export default function KeyCapabilities() {
  return (
    <section className="py-12 bg-[#080816] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843B7]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9e7be9]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Built for <br/>
                Financial Security
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
                Enterprise-grade capabilities to detect, investigate, and prevent fraud at scale, ensuring your financial ecosystems remain secure and compliant against emerging threats in real-time.
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
              className="group relative overflow-hidden px-5 py-4 rounded-md border border-slate-700/60 bg-slate-900/40 backdrop-blur-md hover:border-[#9e7be9]/50 transition-colors duration-500 flex flex-col min-h-[160px]"
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