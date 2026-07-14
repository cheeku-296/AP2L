"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly will your team respond?",
      answer:
        "Our experts typically respond within one business day. For enterprise enquiries, we strive to respond even sooner.",
    },
    {
      question: "Can I schedule a live product demonstration?",
      answer:
        "Yes. You can request a personalized demo for any AP2L platform including ShieldVUE, NETRAA AI-OPS, JUPITER, FINXPLORE and more.",
    },
    {
      question: "Do you provide enterprise implementation support?",
      answer:
        "Absolutely. Our team assists with implementation, onboarding, integrations, training and long-term enterprise support.",
    },
    {
      question: "Can AP2L integrate with our existing systems?",
      answer:
        "Yes. Our platforms are designed with APIs and integration capabilities to connect with your existing enterprise ecosystem.",
    },
    {
      question: "Do you work with organizations globally?",
      answer:
        "Yes. AP2L supports organizations across multiple industries and geographies with scalable enterprise solutions.",
    },
    {
      question: "Can I request a custom solution?",
      answer:
        "Definitely. We specialize in AI, cloud, automation, cybersecurity and enterprise software tailored to your business requirements.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-12 dark:bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/40 px-4 py-2 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/40">
            <HelpCircle className="h-4 w-4 text-violet-500" />

            <span className="font-manrope text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-300">
              Frequently Asked Questions
            </span>
          </div> */}

          <h2 className="mt-8 text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Everything You Need To Know
          </h2>

          <p className="mt-6 max-w-3xl font-manrope text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Have questions before reaching out? Here are some of the most
            common questions our customers ask.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * 0.05,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-900/10
                  bg-white/40
                  backdrop-blur-xl
                  dark:border-slate-800
                  dark:bg-slate-900/40
                "
              >
                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-8
                    py-7
                    text-left
                  "
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10">
                    {open ? (
                      <Minus className="h-5 w-5 text-violet-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-violet-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                    >
                      <div className="border-t border-slate-900/10 px-8 py-6 dark:border-slate-800">
                        <p className="font-manrope leading-8 text-slate-600 dark:text-slate-400">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}