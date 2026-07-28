"use client";

import { motion } from "framer-motion";
const values = [
  {
    title: "Faster Resolution",
    description: "Accelerates incident response and reduces downtime.",
  },
  {
    title: "Reduced Manual Dependency",
    description: "Automates ticket handling and repetitive service desk activities.",
  },
  {
    title: "Improved IT Governance",
    description: "Ensures structured, accountable, and SLA-driven service delivery.",
  },
  {
    title: "Consistent Service Delivery",
    description: "Standardizes incident management through defined workflows and escalation paths.",
  },
  {
    title: "Enhanced Visibility",
    description: "Provides real-time insights across incidents, workloads, and SLAs.",
  },
  {
    title: "Better End-User Experience",
    description: "Delivers faster support, improved responsiveness, and reliable service outcomes.",
  },
];

export default function BusinessValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 mb-6">
                Why Choose Jupiter?
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
                Jupiter improves operational efficiency, reduces resolution times, and provides complete visibility across IT support operations.
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
                className="group relative flex flex-col px-8 py-5 rounded-md border border-slate-200/80 bg-white overflow-hidden transition-all duration-500 hover:shadow-md hover:border-violet-300/80"
              >
                {/* purple Light Ray Effect */}
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
