"use client";

import Container from "@/src/components/common/Container/Container";
import { motion } from "framer-motion";
import { trustData } from "./data";

export default function Trust() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#08080F]">
      <Container>
        <p className="text-center text-sm font-medium text-zinc-500 mb-10">
          {trustData.heading}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
          {trustData.companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl md:text-2xl font-bold text-zinc-400"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
