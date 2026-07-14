"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does AP2L's AI-powered testing work?",
    answer: "Our AI engine learns from your application's behavior, user interactions, and code changes to automatically generate, maintain, and optimize test suites. It adapts to UI changes and suggests test scenarios based on risk analysis."
  },
  {
    question: "Can cliQTest integrate with our existing tools?",
    answer: "Absolutely! cliQTest integrates seamlessly with Jira, GitHub, GitLab, Jenkins, Azure DevOps, Slack, and 50+ other tools in your DevOps ecosystem."
  },
  {
    question: "What types of testing does cliQTest support?",
    answer: "cliQTest supports functional testing, API testing, performance testing, mobile testing, visual regression testing, security testing, and accessibility testing - all in one platform."
  },
  {
    question: "Do we need to hire specialized QA engineers?",
    answer: "Not at all. Our no-code test automation platform empowers both technical and non-technical team members to create and maintain tests without coding expertise."
  },
  {
    question: "How much time can we save with AI-powered testing?",
    answer: "Enterprises typically see 70-80% reduction in test creation time and 60-70% faster test execution, leading to 50% faster release cycles and 40% less maintenance effort."
  },
  {
    question: "How is security testing handled in cliQTest?",
    answer: "cliQTest includes integrated SAST, DAST, and vulnerability scanning capabilities. Security tests run automatically in your CI/CD pipeline, catching vulnerabilities before deployment."
  },
  {
    question: "Does cliQTest support mobile app testing?",
    answer: "Yes, cliQTest supports iOS and Android testing with real device cloud and emulator/simulator support. You can test native, hybrid, and mobile web applications."
  },
  {
    question: "How long does implementation take?",
    answer: "Most enterprise teams are up and running with cliQTest in 2-3 weeks. Our onboarding team provides dedicated support and training to ensure a smooth transition."
  }
];

export default function QAFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        
        {/* Header Section */}
        {/* Header section */}
        <div className="mb-10 md:mb-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black dark:text-white mb-6 md:mb-0"
            >
              Frequently Asked Questions
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
              Everything you need to know about AP2L&apos;s QA and testing solutions.
            </motion.p>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-urbanist font-semibold text-black dark:text-white pr-8 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen 
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30" 
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/30"
                  }`}>
                    {isOpen ? (
                      <Minus size={18} strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                          <p className="font-inter text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:scale-105 hover:shadow-violet-500/50"
          >
            Contact Our QA Experts
            <HelpCircle size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}