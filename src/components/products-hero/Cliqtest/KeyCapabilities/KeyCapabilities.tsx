"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "No-Code Test Automation",
    description: "Accelerate testing with an intuitive, visual drag-and-drop interface designed for teams of all technical skill levels.",
    bgImage: "discovery-bg.png",
  },
  {
    title: "AI Test Data Generation",
    description: "Automatically synthesize highly realistic, secure, and compliant test data on demand to bypass privacy bottlenecks.",
    bgImage: "repo-bg.png",
  },
  {
    title: "Requirement Traceability",
    description: "Ensure complete project visibility by establishing automated end-to-end linking between requirements and test cases.",
    bgImage: "compliance-bg.png",
  },
  {
    title: "Smart Defect Intelligence",
    description: "Leverage machine learning algorithms to proactively predict, classify, and prioritize critical software defects.",
    bgImage: "ai-bg.png",
  },
  {
    title: "Enterprise Governance",
    description: "Maintain strict quality standards with automated policy enforcement and comprehensive audit-ready compliance reporting.",
    bgImage: "security-bg.png",
  },
  {
    title: "Release Readiness Analytics",
    description: "Deploy with confidence using AI-driven risk assessments that accurately predict the stability of your next release.",
    bgImage: "analytics-bg.png",
  }
];

export default function KeyCapabilities() {
  return (
    <section className="py-16 bg-[#080816] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843b7]/20 rounded-full blur-[150px] pointer-events-none" />
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
                Capabilities designed to empower your QA teams and accelerate your release cycles.
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
              <div 
                className="absolute -bottom-20 -left-20 w-64 h-64 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-70 mix-blend-screen rounded-full blur-[2px]"
                style={{ 
                  backgroundImage: `url('/images/products/feature-bgs/${cap.bgImage}')`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }} 
              />

              <div className="relative z-10 flex flex-col h-full flex-1">
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
