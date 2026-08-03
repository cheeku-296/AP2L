"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/src/components/common/CTA/CTA";
import ArrowLeftIcon from "@/components/ui/arrow-left-icon";
import ClockIcon from "@/components/ui/clock-icon";
import CalendarIcon from "@/components/ui/calendar-icon";
import CheckIcon from "@/components/ui/check-icon";
import TwitterIcon from "@/components/ui/twitter-icon";
import LinkedinIcon from "@/components/ui/linkedin-icon";
import FacebookIcon from "@/components/ui/facebook-icon";
import InstagramIcon from "@/components/ui/instagram-icon";
import { motion, useScroll, useSpring } from "framer-motion";

import { allBlogs } from "./data";

function getBlogData(id: string) {
  return allBlogs[id] || allBlogs["8"] || allBlogs["1"];
}

export default function BlogPost({ id }: { id: string }) {
  const blogData = getBlogData(id);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <article className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Header */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 border-b border-slate-200">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={blogData.image} 
            alt={blogData.title} 
            fill 
            className="object-cover object-center opacity-30 scale-105"
            priority
          />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <Link 
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-violet-700 hover:text-violet-900 transition-colors mb-6 text-sm font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200/80 hover:border-violet-300 w-fit"
          >
            <ArrowLeftIcon size={16} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="rounded-full bg-violet-100 border border-violet-200 px-4 py-1.5 text-sm font-medium tracking-widest uppercase text-violet-700 shadow-sm">
              {blogData.category}
            </span>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <ClockIcon size={16} />
              {blogData.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.15] tracking-tight mb-6 drop-shadow-sm">
            {blogData.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 font-medium max-w-3xl leading-relaxed">
            {blogData.subtitle}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 md:py-12 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Sidebar (Meta & Sharing) */}
        <div className="lg:w-64 shrink-0">
          <div className="sticky top-32 space-y-10">
            {/* Author */}
            <div className="flex items-center gap-4 border-b border-slate-200 pb-8">
              <Image src={blogData.author.avatar} alt={blogData.author.name} width={56} height={56} className="rounded-full ring-2 ring-violet-500/20 shadow-sm" unoptimized />
              <div>
                <h4 className="font-medium text-slate-900 text-lg">{blogData.author.name}</h4>
                <p className="text-sm text-slate-500 font-medium">{blogData.author.role}</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-3 text-slate-600 font-medium">
              <CalendarIcon size={20} className="text-violet-600" />
              {blogData.date}
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a href="https://x.com/apmosysofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white hover:shadow-md transition-all">
                  <TwitterIcon size={18} />
                </a>
                <a href="https://www.linkedin.com/company/apmosys-the-consulting-services-company/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white hover:shadow-md transition-all">
                  <LinkedinIcon size={18} />
                </a>
                <a href="https://www.facebook.com/ApMoSys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white hover:shadow-md transition-all">
                  <FacebookIcon size={18} />
                </a>
                <a href="https://www.instagram.com/apmosys_technologies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white hover:shadow-md transition-all">
                  <InstagramIcon size={18} />
                </a>
                <button onClick={handleCopyLink} aria-label="Copy Link" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-violet-600 hover:text-white hover:shadow-md transition-all relative">
                  {copied ? <CheckIcon size={18} className="text-green-500" /> : <CheckIcon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Post Body */}
        <div className="flex-1 max-w-3xl">
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-medium prose-headings:tracking-tight prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          />
        </div>

      </div>

      {/* CTA Section */}
      <CTA 
        headline="Ready to Accelerate Your Digital Transformation?" 
        description="Book a demo today and learn how AP2L solutions empower enterprises to innovate faster and operate with full confidence."
        primaryButtonText="Request Demo"
        secondaryButtonText="Explore All Solutions"
        secondaryButtonLink="/solutions/qa-teams"
        forceLight={true}
      />
    </article>
  );
}
