"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  GitMerge, 
  ShieldCheck, 
  Headset, 
  LineChart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    id: "qa-teams",
    shortName: "QA & Automation",
    title: "For QA Teams",
    icon: Bot,
    description: "Accelerate your testing lifecycle, improve requirement coverage, and deploy with absolute confidence using AI-driven automation.",
    href: "/solutions/qa-teams",
    imageLight: "/images/solutions/qa-teams-light.png",
    imageDark: "/images/solutions/qa-teams-dark.png",
  },
  {
    id: "devops",
    shortName: "CI/CD & Observability",
    title: "For DevOps",
    icon: GitMerge,
    description: "Seamlessly integrate security and observability directly into your CI/CD pipelines for unbreakable, high-velocity deployments.",
    href: "/solutions/devops",
    imageLight: "/images/solutions/devops-light.png",
    imageDark: "/images/solutions/devops-dark.png",
  },
  {
    id: "security-compliance",
    shortName: "Compliance",
    title: "For Security",
    icon: ShieldCheck,
    description: "Ensure complete regulatory readiness and proactive vulnerability mitigation across your ecosystem with zero-trust architecture.",
    href: "/solutions/security-compliance",
    imageLight: "/images/solutions/security-light.png",
    imageDark: "/images/solutions/security-dark.png",
  },
  {
    id: "it-support",
    shortName: "Incident Management",
    title: "For IT Support",
    icon: Headset,
    description: "Automate incident management, slash resolution times, and elevate service delivery with intelligent routing.",
    href: "/solutions/it-support",
    imageLight: "/images/solutions/it-support-light.png",
    imageDark: "/images/solutions/it-support-dark.png",
  },
  {
    id: "fintech",
    shortName: "Risk Detection",
    title: "For FinTech",
    icon: LineChart,
    description: "Detect anomalies in real-time, enforce stringent AML compliance, and protect sensitive financial data seamlessly.",
    href: "/solutions/fintech",
    imageLight: "/images/solutions/fintech-light.png",
    imageDark: "/images/solutions/fintech-dark.png",
  },
];

export default function KeySolutions() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              {/* <div className="h-px w-8 bg-violet-600" /> */}
              {/* <span className="text-violet-600 dark:text-violet-400 font-semibold tracking-wider uppercase text-sm">
                Solutions
              </span> */}
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-urbanist text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white"
            >
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-800">High-Performance</span> Teams
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-inter text-base text-slate-600 dark:text-slate-400 max-w-md leading-relaxed md:text-right"
          >
            Whether securing infrastructure or automating testing, our AI-driven platforms are engineered for your challenges.
          </motion.p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {solutions.map((solution, index) => {
            const isLarge = index === 0;
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
                  className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all hover:shadow-xl dark:hover:shadow-violet-900/20 hover:-translate-y-1 h-full min-h-[280px] p-6 lg:p-8"
                >
                  {/* Background Pattern / Visuals */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
                    <Image 
                      src={solution.imageLight} 
                      alt="" 
                      fill 
                      className="object-cover opacity-15 group-hover:opacity-15 dark:hidden transition-opacity duration-500 scale-105 group-hover:scale-100" 
                    />
                    <Image 
                      src={solution.imageDark} 
                      alt="" 
                      fill 
                      className="object-cover opacity-25 group-hover:opacity-40 hidden dark:block transition-opacity duration-500 scale-105 group-hover:scale-100" 
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${
                      isLarge 
                        ? 'from-violet-500/5 via-transparent to-fuchsia-500/5' 
                        : 'from-slate-100/50 via-transparent to-transparent dark:from-slate-800/30 dark:via-transparent dark:to-transparent'
                    }`} />
                  </div>

                  {/* Top: Icon & Arrow */}
                  <div className="relative z-10 flex justify-between items-start mb-8">
                    <span className="inline-flex items-center justify-center p-3 lg:p-4 bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </span>
                    <ArrowRight className="text-slate-300 dark:text-slate-600 group-hover:text-violet-500 dark:group-hover:text-violet-400 group-hover:-rotate-45 transition-all duration-300" />
                  </div>
                  
                  {/* Bottom: Text Content */}
                  <div className="relative z-10 mt-auto">
                    <div className="text-xs font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-2 lg:mb-3">
                      {solution.shortName}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold font-urbanist text-slate-900 dark:text-white mb-2 lg:mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {solution.title}
                    </h3>
                    <p className={`text-slate-600 dark:text-slate-400 font-inter text-sm leading-relaxed ${isLarge ? 'max-w-xl' : ''}`}>
                      {solution.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
