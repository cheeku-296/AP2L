"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface LogoProps {
  priority?: boolean;
}

export default function Logo({
  priority = true,
}: LogoProps) {
  return (
    <Link
      href="/"
      className="group relative flex items-center gap-3"
      aria-label="AP2L Home"
    >
      {/* Logo */}
      <motion.div
        whileHover={{
          scale: 1.06,
          rotate: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 18,
        }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-500/40 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
          <Image
            src="/logo/logo.png"
            alt="AP2L Logo"
            width={42}
            height={42}
            priority={priority}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Brand */}
      <div className="flex flex-col leading-none">
        <motion.span
          whileHover={{
            x: 2,
          }}
          className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-[1.45rem] font-bold tracking-tight text-transparent"
        >
          AP2L
        </motion.span>
      </div>
    </Link>
  );
}