"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    quote: "AP2L's platform has completely transformed our CI/CD pipeline. The automated test generation alone saved our QA team hundreds of hours in the first month.",
    name: "Sarah Chen",
    role: "VP of Engineering, FinTech Global",
    initial: "S",
  },
  {
    id: 2,
    quote: "ShieldVUE gives us the peace of mind we didn't know we needed. Continuous vulnerability scanning and SBOM generation is now totally automated.",
    name: "Marcus Rodriguez",
    role: "Chief Information Security Officer",
    initial: "M",
  },
  {
    id: 3,
    quote: "The predictive analytics within NETRAA allowed us to identify a critical memory leak in production 4 hours before it impacted our end users.",
    name: "Elena Rostova",
    role: "Director of DevOps, CloudScale",
    initial: "E",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}satisfies Variants;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: {
  duration: 0.45,
  ease: "easeOut",
} },
}satisfies Variants;

export default function Testimonials() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
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
              Trusted by Industry Leaders
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* <Link href="/case-studies" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#252134] dark:bg-white text-white dark:text-[#252134] font-medium text-sm hover:opacity-90 transition-opacity">
                Read Customer Stories
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
              Don&apos;t just take our word for it. See how our platforms are driving massive efficiency and security gains for enterprises worldwide.
            </motion.p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative flex flex-col p-8 rounded-[16px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              {/* Star Rating */}
              {/* <div className="flex items-center gap-1 mb-6 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div> */}
              
              {/* Quote */}
              <p className="flex-1 font-inter text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-urbanist font-bold text-xl bg-slate-600 dark:bg-slate-700">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-urbanist text-lg font-bold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
