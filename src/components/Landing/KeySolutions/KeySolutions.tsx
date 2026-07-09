"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  GitMerge, 
  ShieldCheck, 
  Headset, 
  LineChart,
  Cloud,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "qa-teams",
    shortName: "QA & Automation",
    title: "For QA Teams",
    icon: Bot,
    description: "Accelerate your testing lifecycle, improve requirement coverage, and deploy with absolute confidence using AI-driven automation.",
    href: "/solutions/qa-teams",
  },
  {
    id: "devops",
    shortName: "CI/CD & Observability",
    title: "For DevOps",
    icon: GitMerge,
    description: "Seamlessly integrate security and observability directly into your CI/CD pipelines for unbreakable, high-velocity deployments.",
    href: "/solutions/devops",
  },
  {
    id: "security-compliance",
    shortName: "Compliance",
    title: "For Security",
    icon: ShieldCheck,
    description: "Ensure complete regulatory readiness and proactive vulnerability mitigation across your ecosystem with zero-trust architecture.",
    href: "/solutions/security-compliance",
  },
  {
    id: "it-support",
    shortName: "Incident Management",
    title: "For IT Support",
    icon: Headset,
    description: "Automate incident management, slash resolution times, and elevate service delivery with intelligent routing.",
    href: "/solutions/it-support",
  },
  {
    id: "fintech",
    shortName: "Risk Detection",
    title: "For FinTech",
    icon: LineChart,
    description: "Detect anomalies in real-time, enforce stringent AML compliance, and protect sensitive financial data seamlessly.",
    href: "/solutions/fintech",
  },
  {
    id: "cloud-engineering",
    shortName: "Cloud Infrastructure",
    title: "For Cloud Teams",
    icon: Cloud,
    description: "Optimize cloud infrastructure, ensure high availability, and seamlessly automate scaling and resource provisioning.",
    href: "/solutions/cloud",
  },
];

export default function KeySolutions() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
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
              Built for High-Performance Teams
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/products" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#252134] dark:bg-white text-white dark:text-[#252134] font-medium text-sm hover:opacity-90 transition-opacity">
                Explore now
              </Link>
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
              Whether securing infrastructure or automating testing, our AI-driven platforms are engineered for your challenges.
            </motion.p>
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-5">
          {solutions.map((solution, index) => {
            const isLarge = index === 0 || index === 5;
            const IconComponent = solution.icon;
            
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={isLarge ? "md:col-span-2" : "md:col-span-1"}
              >
                <Link 
                  href={solution.href}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-[16px] h-full min-h-[340px] p-8 lg:p-10 transition-transform hover:-translate-y-1 border ${
                    isLarge 
                      ? "bg-gradient-to-br from-[#f2effb] to-[#e8e4f5] dark:from-violet-900/30 dark:to-slate-900 border-white/50 dark:border-violet-800/30 text-slate-900 dark:text-white" 
                      : "bg-[#13111C] border-white/5 text-white shadow-xl"
                  }`}
                >
                  {/* Purple Light Rays */}
                  {!isLarge && (
                    <div className="absolute -top-16 -right-16 w-56 h-56 bg-violet-600/30 rounded-full blur-[80px] pointer-events-none group-hover:bg-violet-500/40 transition-colors duration-700" />
                  )}
                  {isLarge && (
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-violet-600/40 dark:bg-violet-500/30 rounded-full blur-[100px] pointer-events-none group-hover:bg-violet-700/50 transition-colors duration-700" />
                  )}

                  {/* Top: Title */}
                  <div className="relative z-10 max-w-[85%]">
                    <h3 className={`text-2xl lg:text-[28px] font-medium font-urbanist tracking-tight mb-3 ${!isLarge && "leading-snug pr-4"}`}>
                      {solution.title}
                    </h3>
                  </div>
                  
                  {/* Bottom: Text Content */}
                  <div className="relative z-10 mt-auto">
                    <p className={`font-manrope text-[15px] leading-relaxed ${isLarge ? 'text-slate-700 dark:text-slate-300 max-w-[280px]' : 'text-slate-300'}`}>
                      {solution.description}
                    </p>
                  </div>
                  
                  {/* Background Icon for Large Cards */}
                  {isLarge && (
                    <div className="absolute right-0 bottom-0 top-0 w-1/2 overflow-hidden flex items-center justify-end pr-4 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                      <IconComponent size={240} strokeWidth={0.5} className="text-violet-600/10 dark:text-violet-400/10 translate-x-12 translate-y-12" />
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
