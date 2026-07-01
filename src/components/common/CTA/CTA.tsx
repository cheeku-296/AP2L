"use client";

import Container from "@/src/components/common/Container/Container";
import { motion } from "framer-motion";
import Button from "@/src/components/common/Button/Button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  heading?: string;
  description?: string;
}

export default function CTA({ 
  heading = "Ready to transform your enterprise operations?", 
  description = "Join leading organizations that use AP2L products to secure, automate, and optimize their critical workflows."
}: CTAProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#08080F]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {heading}
          </h2>
          <p className="text-lg text-zinc-400 mb-10">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 group">
              Book a Demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-6 py-3">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
