"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/company/ap2l",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:info@ap2l.ai",
    label: "Email",
  },
];

const legalLinks = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    title: "Cookie Policy",
    href: "/cookie-policy",
  },
];

export default function FooterBottom() {
  return (
    <div className="border-t border-white/10 pt-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Copyright */}

        <div className="text-center lg:text-left">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-white">
              AP2L Technologies
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-zinc-400
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-violet-500/40
                  hover:bg-violet-500/10
                  hover:text-violet-400
                "
                aria-label={item.label}
              >
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>

        {/* Legal Links */}

        <div className="flex flex-wrap items-center justify-center gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="
                text-sm
                text-zinc-500
                transition-colors
                duration-300
                hover:text-violet-400
              "
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}