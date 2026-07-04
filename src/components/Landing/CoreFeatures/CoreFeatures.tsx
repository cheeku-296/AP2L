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
    <section className="relative w-full py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[400px] h-[400px] rounded-full bg-violet-500/5 dark:bg-violet-500/10 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-16 max-w-3xl mr-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-urbanist text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl"
          >
            Core Features & Benefits
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-inter text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Everything you need to build, secure, and scale high-performance infrastructure with absolute confidence.
          </motion.p>
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
                className="group relative flex flex-col p-8 rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-violet-200 dark:hover:border-violet-900/50"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="mb-3 font-urbanist text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {feature.title}
                </h3>
                
                <p className="font-inter text-sm md:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
                
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
