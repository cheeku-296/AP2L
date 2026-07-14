"use client";

import { motion, Variants } from "framer-motion";
import { 
  LineChart, 
  Shield, 
  CheckCircle2, 
  Activity, 
  Combine, 
  Zap 
} from "lucide-react";
// import Link from "next/link";

const features = [
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "AI-driven forecasting and anomaly detection to identify and resolve issues before they impact your users.",
    icon: LineChart,
  },
  {
    id: "zero-trust",
    title: "Zero-Trust Security",
    description: "Continuous vulnerability scanning, advanced SBOM management, and automated remediation workflows.",
    icon: Shield,
  },
  {
    id: "automated-qa",
    title: "Automated QA",
    description: "No-code testing and intelligent test generation that scales effortlessly with your deployment velocity.",
    icon: CheckCircle2,
  },
  {
    id: "observability",
    title: "Real-Time Observability",
    description: "End-to-end tracing, centralized logging, and high-fidelity performance metrics delivered in real-time.",
    icon: Activity,
  },
  {
    id: "integrations",
    title: "Seamless Integrations",
    description: "Native, one-click connectors for AWS, Azure, Jira, Slack, and your entire existing CI/CD toolchain.",
    icon: Combine,
  },
  {
    id: "performance",
    title: "High Performance",
    description: "Built on a resilient, globally distributed edge architecture ensuring 99.99% uncompromising uptime.",
    icon: Zap,
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} satisfies Variants;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function CoreFeatures() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Core Features & Benefits
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* <Link href="/#products" className="inline-flex items-center justify-center px-6 py-3 rounded-[32px] bg-[#252134] dark:bg-white text-white dark:text-[#252134] font-medium text-sm hover:opacity-90 transition-opacity">
                Explore now
              </Link> */}
            </motion.div>
          </div>
          
          <div className="md:pt-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Everything you need to build, secure, and scale high-performance infrastructure with absolute confidence.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-[24px] border border-slate-200/80 bg-white overflow-hidden transition-all duration-500"
              >
                {/* Purple Light Ray Effect */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/10 blur-[50px] rounded-full transition-colors duration-700" />
                
                {/* Icon Container */}
                <div className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50/80 border border-violet-100 text-violet-600 transition-all duration-500">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mb-4 font-urbanist text-[22px] font-bold tracking-tight text-slate-900 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="font-manrope text-[15px] text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
