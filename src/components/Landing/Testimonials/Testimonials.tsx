"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "CRIS Team",
    role: "CRIS Success Story",
    quote: "CRIS leveraged ApMoSys’s cliQTest platform to streamline their testing processes. The platform’s robust automation capabilities and user-friendly interface significantly improved test accuracy and speed, empowering the team to deliver quality software with greater efficiency and confidence across projects.",
    initial: "C"
  },
  {
    id: 2,
    name: "Axis Bank Team",
    role: "Axis Bank Success Story",
    quote: "Axis Bank adopted ApMoSys’s innovative solutions as part of their digital transformation journey. The partnership enabled smooth deployment of tailored technology that aligned with their strategic goals, significantly boosting operational efficiency and streamlining key banking functions across their ecosystem.",
    initial: "A"
  },
  {
    id: 3,
    name: "FDC Team",
    role: "FDC Success Story",
    quote: "ApMoSys implemented its Netraa APM solution for FDC India, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "F"
  },
  {
    id: 4,
    name: "Protean Team",
    role: "Protean Success Story",
    quote: "ApMoSys implemented its Netraa Lighthouse Synthetic Monitoring solution for Protean eGov Technologies, enabling continuous availability checks, proactive performance alerts, and seamless digital experience assurance.",
    initial: "P"
  },
  {
    id: 5,
    name: "L&T Finance Team",
    role: "L&T Finance Success Story",
    quote: "ApMoSys deployed the Netraa Lighthouse Synthetic Monitoring platform for L&T Finance, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability.",
    initial: "L"
  },
  {
    id: 6,
    name: "Bank of Maharashtra Team",
    role: "Bank of Maharashtra Success Story",
    quote: "ApMoSys deployed the Netraa Lighthouse Synthetic Monitoring platform for Bank of Maharashtra, ensuring end-to-end uptime visibility, faster incident detection, and improved digital channel reliability.",
    initial: "B"
  },
  {
    id: 7,
    name: "UCO Bank Team",
    role: "UCO Bank Success Story",
    quote: "ApMoSys implemented its cliQTest and Netraa APM solution for UCO Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "U"
  },
  {
    id: 8,
    name: "RBL Bank Team",
    role: "RBL Bank Success Story",
    quote: "ApMoSys implemented its cliQTest solution for RBL Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "R"
  },
  {
    id: 9,
    name: "ABCD Bank Team",
    role: "ABCD Bank Success Story",
    quote: "ApMoSys implemented its cliQTest solution for ABCD Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "A"
  },
  {
    id: 10,
    name: "GCLI Bank Team",
    role: "Generali Central Life Insurance Success Story",
    quote: "ApMoSys implemented its Netraa APM solution for Generali Central Life Insurance, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "G"
  },
  {
    id: 11,
    name: "NSDL Payments Bank Team",
    role: "NSDL Payments Bank Success Story",
    quote: "ApMoSys implemented its cliQTest solution for NSDL Payments Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "N"
  },
  {
    id: 12,
    name: "IDBI Bank Team",
    role: "IDBI Bank Success Story",
    quote: "ApMoSys implemented its cliQTest and Netraa solution for IDBI Bank, enabling real-time performance visibility, faster issue resolution, and improved system reliability.",
    initial: "I"
  },
  {
    id: 13,
    name: "Muscat Finance Team",
    role: "Muscat Finance’s Success Story",
    quote: "We collaborated with ApMoSys on their FinXplore OCR automation platform and were impressed by their expertise and dedicated support. Their team delivered tailored solutions that aligned perfectly with our needs, ensuring smooth integration and enhancing our business operations.",
    initial: "M"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-12 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header section */}
        <div className="mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Trusted by Industry Leaders
            </motion.h2>
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
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden pb-8 pt-0">
        {/* Gradient overlays for smooth fading edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-slate-950" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 100,
          }}
          className="flex w-max items-stretch gap-6 px-4"
        >
          {/* We duplicate the array to create a seamless infinite loop */}
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="relative flex w-[350px] md:w-[450px] shrink-0 flex-col p-8 rounded-[20px] border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 transition-all hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-md"
            >
              {/* Quote */}
              <p className="flex-1 font-inter text-[15px] md:text-[16px] text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white font-urbanist font-bold text-xl bg-violet-600 dark:bg-violet-700 shadow-md">
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-urbanist text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
