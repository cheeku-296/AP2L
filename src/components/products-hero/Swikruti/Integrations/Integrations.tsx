"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  {
    category: "Identity Providers",
    description: "Authenticate users seamlessly and enforce role-based access control across enterprise identity platforms.",
    tools: ["Okta", "Azure AD", "Auth0"],
  },
  {
    category: "Data Stores",
    description: "Protect sensitive user data and ensure privacy compliance across SQL and NoSQL database infrastructures.",
    tools: ["MongoDB", "PostgreSQL", "Snowflake"],
  },
  {
    category: "CRM",
    description: "Manage customer consent and privacy preferences across your sales and marketing automation tools.",
    tools: ["Salesforce", "HubSpot", "Microsoft Dynamics"],
  },
  {
    category: "Compliance",
    description: "Streamline audit readiness and automate governance across enterprise data privacy frameworks.",
    tools: ["OneTrust", "TrustArc", "Securiti"],
  },
];

export default function Integrations() {
  return (
    <section className="relative w-full pt-12 md:pt-16 pb-2 md:pb-4 bg-white transition-colors duration-500 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-[130px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10">
        {/* Header Section: Heading on Left, Subheading on Right */}
        <div className="mb-0 md:mb-2 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-black mb-4 md:mb-0"
            >
              Integrate with Confidence
            </motion.h2>
          </div>

          <div className="md:pt-2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-manrope text-lg md:text-[20px] text-slate-700 leading-relaxed max-w-2xl"
            >
              Swikruti plugs into your existing infrastructure effortlessly. Connect with your identity providers, CRMs, and data stores to enforce privacy without disrupting workflows.
            </motion.p>
          </div>
        </div>

        {/* Content Section: Cards on Left, Image on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          {/* Left Column - Category Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {integrations.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-md border border-slate-200/80 bg-white transition-all duration-300 overflow-hidden"
                >
                  {/* Violet Light Ray Effect */}
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-violet-400/20 blur-[50px] rounded-full transition-colors duration-700 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h3 className="font-urbanist text-lg font-bold text-slate-900 mb-2 tracking-tight">
                      {group.category}
                    </h3>
                    <p className="font-manrope text-[14px] text-slate-600 leading-relaxed">
                      {group.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Visual */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-xl lg:max-w-none"
            >
              <div className="relative w-full aspect-[4/3] rounded-md">
                <Image
                  src="/new/swikruti.png"
                  alt="Swikruti Ecosystem Integration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}