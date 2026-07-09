"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    title: "Faster Test Execution",
    stat: "80%",
    description: "Faster Test case design. Reduces MTTR through automated RCA. Accelerates incident resolution.",
  },
  {
    title: "Reduced Manual Effort",
    stat: "70%",
    description: "Reduction of Manual Effort. Eliminates false positives using AI. Improves alert accuracy and focus.",
  },
  {
    title: "Better Requirement Coverage",
    stat: "60%",
    description: "Better Requirement Coverage. Simplifies monitoring and analysis. Reduces manual troubleshooting effort.",
  },
  {
    title: "Reduced Defect Leakage",
    stat: "50%",
    description: "Reduced Defect Leakage. Converts operational data into insights. Supports faster decision-making.",
  }
];

export default function BusinessValues() {
  return (
    <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Unmatched <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Testing Velocity</span>
          </h2>
          <p className="text-lg text-slate-600 font-manrope leading-relaxed">
            Experience exponential improvements in quality, speed, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:border-[#6843b7]/50 transition-colors group shadow-sm"
            >
              <div className="text-5xl font-bold font-urbanist text-slate-900 mb-4 group-hover:text-[#9e7be9] transition-colors">
                {metric.stat}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">{metric.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-manrope">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
