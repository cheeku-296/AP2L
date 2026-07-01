"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Container from "../Container/Container";
import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";
import { footerSections } from "./footerData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070710]">
      {/* ================= Background ================= */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[160px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <Container className="relative z-10">

        {/* ================= CTA ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="py-24"
        >
          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-white/5 to-fuchsia-600/20 p-[1px]">

            <div className="rounded-[36px] bg-[#0B0B14]/95 px-10 py-14 backdrop-blur-3xl">

              <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

                <div>

                  <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white lg:text-5xl">
                    Ready to transform your business with AI?
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                    Empower your organization with intelligent automation,
                    enterprise AI, cloud solutions, and digital innovation
                    built for tomorrow.
                  </p>
                </div>

                <Link
                  href="/book-demo"
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-4 text-white shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book a Demo

                  <ArrowUpRight
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    size={20}
                  />
                </Link>

              </div>

            </div>

          </div>
        </motion.div>

        {/* ================= Footer Grid ================= */}

        <div className="grid gap-16 border-t border-white/10 py-20 lg:grid-cols-[2fr_repeat(4,1fr)]">

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

                <h3 className="text-2xl font-bold text-white">
                  AP2L
                </h3>

                <p className="text-sm uppercase tracking-[0.28em] text-zinc-500">
                  AI Platform
                </p>

              </div>

            </Link>

            <p className="mt-8 max-w-md leading-8 text-zinc-400">
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

        <div className="pb-8">
          <FooterBottom />
        </div>

      </Container>
    </footer>
  );
}