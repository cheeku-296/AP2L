"use client";

import { motion } from "framer-motion";
import { Headset, Share2, Layers, Clock, Library } from "lucide-react";

const capabilities = [
  { title: "Centralized Service Desk", description: "Establish a single, unified point of contact for seamless ticket creation, intelligent categorization, and end-to-end tracking.", bgImage: "repo-bg.png" },
  { title: "Automated Ticket Assignment", description: "Instantly route incoming support requests dynamically based on the specific service type and the engineer's technical expertise.", bgImage: "netraa-correlation-bg.png" },
  { title: "Multi-Level Support Workflow", description: "Implement highly structured escalation paths from L1 to L2 and Dev/Infra based on resolution time and effort required.", bgImage: "discovery-bg.png" },
  { title: "SLA & SLO Governance", description: "Maintain strict service quality with highly configurable thresholds, automated early breach alerts, and comprehensive compliance tracking.", bgImage: "compliance-bg.png" },
  { title: "Knowledge & Analytics Hub", description: "Easily reuse historical resolutions for faster support delivery while gaining real-time visibility into your team's workload and SLA trends.", bgImage: "analytics-bg.png" },
  { title: "AI-Powered Self-Service", description: "Empower employees with intelligent conversational agents to resolve routine IT requests instantly without human intervention.", bgImage: "ai-bg.png" }
];

export default function KeyCapabilities() {
  return (
    <section className="py-16 bg-[#080816] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Key Capabilities
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
                Powerful ticket routing, workflow automation, and real-time analytics to supercharge your IT support operations.
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
              className="group relative overflow-hidden px-5 py-4 rounded-md border border-slate-700/60 bg-slate-900/40 backdrop-blur-md hover:border-blue-400/50 transition-colors duration-500 flex flex-col min-h-[160px]"
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
