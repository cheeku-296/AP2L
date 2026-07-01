"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      {/* Column Heading */}

      <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-white">
        {title}
      </h3>

      {/* Links */}

      <ul className="space-y-4">
        {links.map((link) => (
          <motion.li
            key={link.title}
            whileHover={{
              x: 6,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <Link
              href={link.href}
              className="
                group
                inline-flex
                items-center
                text-[15px]
                text-zinc-400
                transition-all
                duration-300
                hover:text-violet-400
              "
            >
              <span>{link.title}</span>

              <span
                className="
                  ml-2
                  h-[2px]
                  w-0
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  to-fuchsia-500
                  transition-all
                  duration-300
                  group-hover:w-5
                "
              />
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}