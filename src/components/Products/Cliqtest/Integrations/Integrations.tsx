"use client";

import { motion } from "framer-motion";

const integrations = [
  { category: "Observability", tools: ["Dynatrace", "Splunk", "Netraa"] },
  { category: "Collaboration", tools: ["Teams", "Slack"] },
  { category: "Project Management", tools: ["Jira", "Azure DevOps", "ServiceNow"] },
  { category: "CI/CD", tools: ["Jenkins", "GitHub", "GitLab"] },
];

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-left max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6843B7] to-[#9e7be9]">Ecosystem Integration</span>
          </h2>
          <p className="text-slate-600 font-manrope">
            Seamlessly connect cliQTest with your existing toolchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-[#a855f7] font-semibold mb-4 text-lg">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
