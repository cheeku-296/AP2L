"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <Link href="/book-demo">
      <motion.div
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 22,
        }}
        className="group relative overflow-hidden rounded-full"
      >
        {/* Glow */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-80" />

        {/* Button */}
        <div className="relative flex h-11 items-center gap-2 overflow-hidden rounded-full border border-violet-400/20 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 group-hover:shadow-violet-500/40">
          
          {/* Shine Animation */}
          <motion.div
            initial={{ x: "-150%" }}
            whileHover={{ x: "250%" }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute inset-y-0 w-10 rotate-12 bg-white/25 blur-md"
          />

          <span className="relative z-10">
            Book Demo
          </span>

          <motion.div
            animate={{
              x: [0, 4, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="relative z-10"
          >
            <ArrowRight size={17} strokeWidth={2.4} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}