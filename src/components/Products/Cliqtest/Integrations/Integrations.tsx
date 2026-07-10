"use client";

import { motion } from "framer-motion";

const integrations = [
  { 
    category: "Observability", 
    description: "Gain deep insights into system performance and detect anomalies instantly. Monitor application health in real-time.", 
    tools: ["Dynatrace", "Splunk", "Netraa"] 
  },
  { 
    category: "Collaboration", 
    description: "Streamline communication across your QA and dev teams. Share test results and incident reports seamlessly.", 
    tools: ["Teams", "Slack"] 
  },
  { 
    category: "Project Management", 
    description: "Track bugs, link defects to test cases, and manage agile workflows. Keep your entire team aligned on delivery goals.", 
    tools: ["Jira", "Azure DevOps", "ServiceNow"] 
  },
  { 
    category: "CI/CD", 
    description: "Automate test execution within your deployment pipelines. Ensure confident, high-quality releases with every commit.", 
    tools: ["Jenkins", "GitHub", "GitLab"] 
  },
];

export default function Integrations() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header section */}
        <div className="mb-8 md:mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-800 mb-6">
                Enterprise <span className="text-slate-800">Ecosystem Integration</span>
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
              <p className="font-manrope text-xl md:text-[22px] text-slate-700 dark:text-slate-600 leading-relaxed max-w-2xl">
                Seamlessly connect cliQTest with your existing toolchain.
              </p>
            </motion.div>
          </div>
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
              <h3 className="text-slate-800 font-semibold mb-2 text-lg">
                {group.category}
              </h3>
              <p className="text-slate-500 font-manrope text-sm leading-relaxed mb-4">
                {group.description}
              </p>
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
