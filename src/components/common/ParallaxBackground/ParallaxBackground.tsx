"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  return (
    <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-full z-0">
      {children}
    </motion.div>
  );
}
