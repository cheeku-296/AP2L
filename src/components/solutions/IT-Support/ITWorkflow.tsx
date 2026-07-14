"use client";

import { motion, Variants } from "framer-motion";
import {
  Inbox,
  Cpu,
  Wrench,
  Users,
  BarChart3,
    // ✅ added missing import
} from "lucide-react";

const steps = [
  {
    id: "ingest",
    title: "Ingest",
    description: "Unify tickets, chats, emails, and alerts into a single queue.",
    icon: Inbox,
  },
  {
    id: "triage",
    title: "Triage",
    description: "AI-powered categorization, prioritization, and routing.",
    icon: Cpu,
  },
  {
    id: "resolve",
    title: "Resolve",
    description: "Automated resolution via virtual agents or knowledge base.",
    icon: Wrench,
  },
  {
    id: "escalate",
    title: "Escalate",
    description: "Seamless handoff to human agents with full context.",
    icon: Users,
  },
  {
    id: "analyze",
    title: "Analyze",
    description: "Gain insights from ticket data to improve continuously.",
    icon: BarChart3,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ITWorkflow() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[120px] translate-y-1/2 translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header section */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6 md:mb-0"
            >
              End‑to‑End IT Support Workflow
            </motion.h2>
          </div>
          
          <div className="md:pt-2">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-lg md:text-[20px] text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              From ticket ingestion to resolution — AP2L automates and streamlines every step.
            </motion.p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="group relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-2 border-violet-500/50 text-violet-400 transition-all duration-300 group-hover:border-violet-400 group-hover:bg-violet-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-violet-500/30">
                    <Icon size={26} strokeWidth={1.5} className="transition-colors duration-300" />
                  </div>
                  {!isLast && (
                    <div className="hidden xl:block absolute top-1/2 left-[calc(100%+20px)] -translate-y-1/2 w-28">
                      <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-violet-500/50 via-violet-400/70 to-fuchsia-400/50" />
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h3 className="font-urbanist text-sm font-bold text-white group-hover:text-violet-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-1 font-inter text-xs leading-relaxed text-slate-400 max-w-[160px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-violet-500/50 text-violet-400 hover:border-violet-400 hover:bg-violet-600 hover:text-white transition-all duration-300">
              <Headset size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-urbanist font-bold text-white text-sm">
                Ready to transform your IT support?
              </p>
              <p className="font-inter text-sm text-slate-400">
                See how AP2L automates your service desk.
              </p>
            </div>
          </div>
          <a
            href="/contact"
            className="group flex items-center gap-2 whitespace-nowrap rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-violet-500/50"
          >
            Contact Us
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}