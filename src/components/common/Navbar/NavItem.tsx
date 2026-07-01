"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItemProps {
  title: string;
  href: string;
}

export default function NavItem({
  title,
  href,
}: NavItemProps) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className="group relative flex h-12 items-center"
    >
      <span
        className={`
          relative
          text-[15px]
          font-medium
          transition-all
          duration-300
          ${
            isActive
              ? "text-white"
              : "text-zinc-300 group-hover:text-white"
          }
        `}
      >
        {title}
      </span>

      {/* Animated Underline */}
      <motion.span
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: isActive ? 1 : 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          transformOrigin: "left",
        }}
        className="
          absolute
          bottom-2
          left-0
          h-[2px]
          w-full
          rounded-full
          bg-gradient-to-r
          from-violet-500
          via-fuchsia-500
          to-purple-500
        "
      />

      {/* Glow */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          absolute
          -bottom-2
          left-1/2
          h-5
          w-5
          -translate-x-1/2
          rounded-full
          bg-violet-500/30
          blur-lg
          pointer-events-none
        "
      />
    </Link>
  );
}