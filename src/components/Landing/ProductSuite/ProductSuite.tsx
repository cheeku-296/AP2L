"use client";

import Container from "@/src/components/common/Container/Container";
import { motion } from "framer-motion";
import { Shield, Brain, Workflow, Zap, CheckCircle, FileKey, LucideIcon } from "lucide-react";
import Link from "next/link";
import { productSuiteData } from "./data";

const iconMap: Record<string, LucideIcon> = {
  Shield, Brain, Workflow, Zap, CheckCircle, FileKey
};

export default function ProductSuite() {
  return (
    <section className="py-32 relative bg-[#0B0B14]">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {productSuiteData.heading}
          </h2>
          <p className="text-lg text-zinc-400">
            {productSuiteData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productSuiteData.products.map((product, index) => {
            const Icon = iconMap[product.icon];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={product.href}
                  className="block group h-full rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${product.color} opacity-20 blur-[50px] rounded-full group-hover:opacity-40 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className="h-14 w-14 rounded-2xl bg-[#1A1A24] border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-between">
                      {product.name}
                      <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-zinc-400">
                        &rarr;
                      </span>
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
