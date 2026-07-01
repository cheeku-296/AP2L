"use client";

import Container from "@/src/components/common/Container/Container";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { featuresData } from "./data";

export default function Features() {
  return (
    <section className="py-32 relative bg-[#05050A]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              {featuresData.heading}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-zinc-400 mb-10"
            >
              {featuresData.description}
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuresData.list.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-fuchsia-600/20 backdrop-blur-3xl" />
              <div className="absolute inset-4 rounded-2xl border border-white/10 bg-[#0A0A10] flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-violet-500/20 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-violet-500 animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{featuresData.dashboardVisual.title}</h3>
                  <p className="text-zinc-400 text-sm">{featuresData.dashboardVisual.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
