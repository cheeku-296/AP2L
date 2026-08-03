"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

type CardVariant = "tall" | "wide" | "standard";

interface IndustryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  variant: CardVariant;
  imagePosition: string;
  overlayOverride?: string;
  bullets?: string[];
  priority?: boolean;
}

const variantStyles: Record<
  CardVariant,
  {
    container: string;
    overlay: string;
    content: string;
    textWidth: string;
  }
> = {
  tall: {
    container: "lg:col-span-1 lg:row-span-2 min-h-[380px] lg:min-h-[420px]",
    overlay:
      "absolute left-0 right-0 bottom-0 w-full h-3/4 z-10 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent",
    content: "flex flex-col justify-end h-full p-6 md:p-8",
    textWidth: "max-w-full",
  },
  wide: {
    container: "lg:col-span-2 lg:row-span-1 min-h-[220px] lg:min-h-[200px]",
    overlay:
      "absolute left-0 top-0 bottom-0 w-full md:w-3/5 h-full z-10 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/90 to-transparent dark:from-slate-950 dark:via-slate-950/90 dark:to-transparent",
    content: "flex flex-col justify-end md:justify-center h-full p-6 md:p-8",
    textWidth: "max-w-full md:max-w-sm lg:max-w-md",
  },
  standard: {
    container: "lg:col-span-1 lg:row-span-1 min-h-[260px] lg:min-h-[250px]",
    overlay:
      "absolute left-0 right-0 bottom-0 w-full h-3/4 z-10 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent",
    content: "flex flex-col justify-end h-full p-5 md:p-7",
    textWidth: "max-w-full",
  },
};

const industries: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description:
      "Ensure HIPAA compliance and secure embedded software supply chains for critical medical devices. Automatically scan third-party dependencies in health monitoring systems.",
    image: "/old/healthcare.png",
    variant: "tall",
    imagePosition: "object-cover object-top",
    priority: true,
  },
  {
    id: "bfsi",
    name: "BFSI",
    description:
      "Meet strict OCC guidelines and secure automated financial software pipelines.",
    image: "/old/banking.png",
    variant: "wide",
    imagePosition: "object-cover object-right md:object-center",
    bullets: [
      "Automated OSS compliance",
      "Zero-day vulnerability alerts",
      "Secure vendor workflows",
    ],
  },
  {
    id: "government",
    name: "Government",
    description:
      "Comply with Executive Order 14028 and FedRAMP SBOM mandates effortlessly.",
    image: "/old/global.png",
    variant: "standard",
    imagePosition: "object-cover object-top -translate-y-8",
  },
  {
    id: "insurance",
    name: "Insurance",
    description:
      "Protect sensitive policyholder data and audit third-party components.",
    image: "/old/retail.png",
    variant: "standard",
    imagePosition: "object-cover object-top -translate-y-8",
  },
  {
    id: "saas",
    name: "SaaS Providers",
    description:
      "Build trust with enterprise buyers by proactively proving application security posture.",
    image: "/old/saas.png",
    variant: "wide",
    imagePosition: "object-cover object-right translate-x-8 lg:translate-x-16",
    overlayOverride: "absolute left-0 top-0 bottom-0 w-full md:w-3/4 h-full z-10 bg-gradient-to-t md:bg-gradient-to-r from-white via-white to-transparent dark:from-slate-950 dark:via-slate-950 dark:to-transparent",
    bullets: ["Multi-tenant isolation", "SOC 2 evidence"],
  },
  {
    id: "enterprise",
    name: "Enterprise IT",
    description:
      "Govern internal development teams and audit vendor software securely.",
    image: "/old/enterprice.png",
    variant: "standard",
    imagePosition: "object-cover object-bottom",
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
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function QAIndustries() {
  return (
    <section className="relative w-full py-10 md:py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-md blur-[140px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/10 rounded-md blur-[140px] translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header section */}
        <div className="mb-10 md:mb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-slate-900 dark:text-white"
            >
              Trusted Across Mission-Critical Industries
            </motion.h2>
          </div>

          <div className="md:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-manrope text-xl md:text-[22px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl"
            >
              Delivering secure, reliable, compliant, and high-performing software for enterprise and regulated environments.
            </motion.p>
          </div>
        </div>

        {/* Image-First Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {industries.map((item) => {
            const vStyle = variantStyles[item.variant];

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`group relative overflow-hidden rounded-md border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1 ${vStyle.container}`}
              >
                {/* Background Illustration */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.priority}
                    className={`${item.imagePosition} group-hover:scale-[1.03] group-hover:brightness-[1.03] transition-all duration-700 ease-out`}
                  />
                </div>

                {/* Directional Soft Gradient Overlay (Localized over text) */}
                <div className={item.overlayOverride || vStyle.overlay} />

                {/* Card Content Overlay */}
                <div className={`relative z-20 ${vStyle.content}`}>
                  <div className={vStyle.textWidth}>
                    <h3 className="font-urbanist text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200">
                      {item.name}
                    </h3>

                    <p className="mt-2 font-manrope text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>

                    {item.bullets && (
                      <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-y-1.5 gap-x-4">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start text-xs md:text-sm text-slate-600 dark:text-slate-400">
                            <span className="mr-2 mt-0.5 flex-shrink-0 text-violet-500">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
