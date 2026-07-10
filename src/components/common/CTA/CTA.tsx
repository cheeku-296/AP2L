"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  headline?: React.ReactNode;
  description?: React.ReactNode;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  forceLight?: boolean;
}

export default function CTA({
  headline = "Ready to Transform Your Infrastructure?",
  description = "Book a Personalized Demo to see how our platforms can automate your workflows, map vulnerabilities, and ensure enterprise-grade compliance.",
  primaryButtonText = "Contact Us",
  primaryButtonLink = "/contact",
  secondaryButtonText = "View Blogs",
  secondaryButtonLink = "/resources/blog",
  forceLight = false,
}: CTAProps) {
  return (
    <section className={`relative w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 overflow-hidden ${forceLight ? 'bg-white' : 'bg-white dark:bg-slate-950'}`}>
      <div className="relative mx-auto max-w-6xl z-10">

        {/* Rounded Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`relative flex flex-col items-center text-center px-6 py-12 md:py-16 md:px-12 rounded-md overflow-hidden border shadow-xl shadow-slate-200/20 ${forceLight ? 'border-slate-900/5 bg-slate-50' : 'border-slate-900/5 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 dark:shadow-none'}`}
        >
          {/* Dynamic Background Elements for that Soft Gradient look */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Soft background color base */}
            <div className={`absolute inset-0 bg-gradient-to-br from-violet-50/50 via-slate-50/20 to-fuchsia-50/30 ${forceLight ? '' : 'dark:from-violet-900/10 dark:via-slate-900 dark:to-fuchsia-900/10'}`} />

            {/* Blurry blobs */}
            <div className={`absolute top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] opacity-70 ${forceLight ? 'bg-violet-200/40' : 'bg-violet-200/40 dark:bg-violet-900/20'}`} />
            <div className={`absolute bottom-0 right-1/4 translate-x-1/3 translate-y-1/3 w-[500px] h-[500px] rounded-full blur-[100px] opacity-70 ${forceLight ? 'bg-indigo-200/30' : 'bg-indigo-200/30 dark:bg-indigo-900/20'}`} />
          </div>

          <h2 className={`relative z-10 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 max-w-4xl leading-tight ${forceLight ? 'text-slate-900' : 'text-slate-900 dark:text-white'}`}>
            {headline}
          </h2>

          <p className={`relative z-10 text-base md:text-lg leading-relaxed max-w-2xl mb-8 ${forceLight ? 'text-slate-600' : 'text-slate-600 dark:text-slate-300'}`}>
            {description}
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">

            {/* Primary Button */}
            <Link
              href={primaryButtonLink}
              className={`group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 ${forceLight ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100'}`}
            >
              {primaryButtonText}
            </Link>


            {/* Secondary Button */}
            <Link
              href={secondaryButtonLink}
              className={`group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border bg-transparent px-8 py-3.5 text-base font-medium transition-all ${forceLight ? 'border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400' : 'border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-600'}`}
            >
              {secondaryButtonText}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
