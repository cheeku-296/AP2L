"use client";

import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../Navbar/ThemeToggle";
import { footerSections } from "./footerData";


// ================= FooterColumn.tsx =================

interface FooterLink {
  title: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      {/* Column Heading */}

      <h3 className="mb-4 text-[12px] font-[family-name:var(--font-manrope)] font-semibold uppercase tracking-[0.22em] text-slate-900 dark:text-white">
        {title}
      </h3>

      {/* Links */}

      <ul className="space-y-1">
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
                text-[13px]
                font-inter
                text-slate-600
                dark:text-slate-400
                transition-all
                duration-300
                hover:text-violet-400
                dark:hover:text-violet-300
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
                  from-[#4b277a]
                  to-[#4b277a]
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

// ================= FooterBottom.tsx =================
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/company/ap2l",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
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

function FooterBottom() {
  return (
    <div className="border-t border-slate-900/10 dark:border-slate-800 pt-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Copyright */}

        <div className="text-center lg:text-left">
          <p className="text-[13px] font-inter text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-slate-900 dark:text-white">
              AP2L Technologies
            </span>
            . All rights reserved.
          </p>
        </div>

        {/* Social Icons */}

        <div className="flex items-center justify-center gap-3">
          <ThemeToggle />
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
                  border-slate-900/10
                  dark:border-slate-700
                  bg-slate-900/5
                  dark:bg-slate-800/50
                  text-slate-600
                  dark:text-slate-400
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
                text-[13px]
                font-inter
                text-slate-500
                dark:text-slate-400
                transition-colors
                duration-300
                hover:text-violet-400
                dark:hover:text-violet-300
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

// ================= Footer.tsx =================




export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-900/10 dark:border-slate-800 bg-white dark:bg-slate-950">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 w-full px-2 lg:px-4">

        {/* ================= Footer Grid ================= */}

        <div className="grid gap-8 border-t border-slate-900/10 dark:border-slate-800 py-10 lg:grid-cols-[2fr_repeat(4,1fr)]">

          {/* Left */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-4"
            >
              <Image
                src="/logo/logo.png"
                alt="AP2L"
                width={55}
                height={55}
                priority
                className="rounded-full"
              />

              <div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  AP2L
                </h3>

                <p className="font-[family-name:var(--font-manrope)] text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mt-1">
                  ApMoSys Products
                </p>

              </div>

            </Link>

            <p className="font-manrope mt-4 max-w-md text-[14px] leading-relaxed text-slate-600 dark:text-slate-400">
              AP2L helps enterprises accelerate digital transformation
              through Artificial Intelligence, Cloud Engineering,
              Automation, Cyber Security, and next-generation software
              solutions.
            </p>



          </div>

          {/* Navigation */}

          {footerSections.map((section) => (
            <FooterColumn
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}

        </div>

        {/* Bottom */}

        <div className="pb-4">
          <FooterBottom />
        </div>

      </div>
    </footer>
  );
}