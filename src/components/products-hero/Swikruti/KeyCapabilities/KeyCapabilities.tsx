"use client";

import { motion } from "framer-motion";
import { CheckSquare, Sliders, Users, Settings, ShieldAlert, Bell } from "lucide-react";

const capabilities = [
  { title: "Consent Collection", description: "Seamlessly capture granular user consent across multiple digital touchpoints using clear, legally compliant language.", bgImage: "card_bg_compliance_1785225796232.png" },
  { title: "Preference Management", description: "Empower your users with a self-service portal to instantly update privacy preferences and revoke consent at any time.", bgImage: "card_bg_discovery_1785225815517.png" },
  { title: "Data Subject Requests", description: "Fully automate Data Subject Access Request (DSAR) workflows to rapidly handle data access, rectification, and deletion.", bgImage: "netraa_bg_incident_1785226432886.png" },
  { title: "Policy Engine", description: "Define and strictly enforce consent-based data usage policies and access controls across your entire enterprise ecosystem.", bgImage: "card_bg_ai_1785225786234.png" },
  { title: "Vendor Risk Management", description: "Continuously monitor third-party vendors for privacy compliance and automatically track data processing agreements.", bgImage: "card_bg_security_1785225837046.png" },
  { title: "Breach Notification", description: "Accelerate your incident response with automated workflows for rapid data breach identification and regulatory notification.", bgImage: "card_bg_vuln_map_1785225764334.png" }
];

export default function KeyCapabilities() {
  return (
    <section className="py-16 bg-[#080816] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6843B7]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9e7be9]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-urbanist text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight text-white mb-6">
                Privacy
                <span className="text-[#6843B7]">by Design</span>
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
              <p className="font-manrope text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
                Capabilities that embed privacy into every layer of your data ecosystem.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden px-5 py-4 rounded-md border border-slate-700/60 bg-slate-900/40 backdrop-blur-md hover:border-[#6843B7]/50 transition-colors duration-500 flex flex-col min-h-[160px]"
            >
              {/* Background Image (Bottom Left Half-Cut) */}
              <div 
                className="absolute -bottom-20 -left-20 w-64 h-64 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-70 mix-blend-screen rounded-full blur-[2px]"
                style={{ 
                  backgroundImage: `url('/images/products/${cap.bgImage}')`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center' 
                }} 
              />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col h-full flex-1">
                {/* Text Container */}
                <div>
                  <h3 className="mb-3 font-urbanist text-[18px] font-bold text-white tracking-wide">{cap.title}</h3>
                  <p className="font-manrope font-medium text-[15px] leading-[1.6] text-slate-300/90">{cap.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}