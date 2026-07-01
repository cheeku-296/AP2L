"use client";

import { motion } from "framer-motion";
import Button from "@/src/components/common/Button/Button";
import Container from "@/src/components/common/Container/Container";
import { ArrowRight, Play } from "lucide-react";
import { heroData } from "./data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-32">
      <div className="absolute inset-0 bg-[#0B0B14]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8"
        >
          <span className="flex h-2 w-2 rounded-full bg-violet-500"></span>
          <span className="text-sm font-medium text-violet-300">{heroData.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
        >
          {heroData.headingPart1}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            {heroData.headingPart2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10"
        >
          {heroData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="primary" className="w-full sm:w-auto px-6 py-3 flex items-center gap-2 group">
            {heroData.primaryButton}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button variant="secondary" className="w-full sm:w-auto px-6 py-3 flex items-center gap-2">
            <Play className="w-4 h-4" />
            {heroData.secondaryButton}
          </Button>
        </motion.div>
        
        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-2xl">
            <div className="rounded-xl overflow-hidden bg-[#0A0A10] border border-white/5 aspect-video flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-transparent to-fuchsia-500/10" />
              <div className="text-zinc-600 font-medium">{heroData.imageText}</div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
