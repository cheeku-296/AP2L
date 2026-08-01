"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/src/components/common/CTA/CTA";
import { ArrowLeft, Clock, Calendar, Link as LinkIcon, Check } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
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
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="relative min-h-screen bg-white text-slate-900">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <div className="relative w-full pt-28 md:pt-36 pb-12 md:pb-16 flex flex-col justify-end overflow-hidden mt-[68px] min-h-[480px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={blogData.image}
            alt={blogData.title}
            fill
            className="object-cover"
            priority
          />
          {/* Gradients for readability - Light Theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 md:px-12 lg:px-20">
          <Link 
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-violet-700 hover:text-violet-900 transition-colors mb-6 text-sm font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-slate-200/80 hover:border-violet-300 w-fit"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="rounded-full bg-violet-100 border border-violet-200 px-4 py-1.5 text-sm font-medium tracking-widest uppercase text-violet-700 shadow-sm">
              {blogData.category}
            </span>
            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
              <Clock size={16} />
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-16 relative">
        
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
              <Calendar size={20} className="text-violet-600" />
              {blogData.date}
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a href="https://x.com/apmosysofficial" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white hover:shadow-md transition-all">
                  <FaTwitter size={18} />
                </a>
                <a href="https://www.linkedin.com/company/apmosys-the-consulting-services-company/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white hover:shadow-md transition-all">
                  <FaLinkedin size={18} />
                </a>
                <a href="https://www.facebook.com/ApMoSys" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white hover:shadow-md transition-all">
                  <FaFacebook size={18} />
                </a>
                <a href="https://www.instagram.com/apmosys_technologies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white hover:shadow-md transition-all">
                  <FaInstagram size={18} />
                </a>
                <button onClick={handleCopyLink} aria-label="Copy Link" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 hover:bg-violet-600 hover:text-white hover:shadow-md transition-all relative">
                  {copied ? <Check size={18} className="text-green-500" /> : <LinkIcon size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-3xl w-full">
          {/* Custom Styled Prose Content */}
          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: blogData.content }}
          />

          <style dangerouslySetInnerHTML={{__html: `
            .prose-custom h2 {
              font-size: 2rem;
              font-weight: 600;
              margin-top: 3rem;
              margin-bottom: 1.5rem;
              color: #0f172a;
              letter-spacing: -0.025em;
            }
            .prose-custom h2:first-child { margin-top: 0; }
            
            .prose-custom h3 {
              font-size: 1.5rem;
              font-weight: 700;
              margin-top: 2rem;
              margin-bottom: 1rem;
              color: #0f172a;
            }

            .prose-custom p {
              font-size: 1.125rem;
              line-height: 1.8;
              margin-bottom: 1.5rem;
              color: #334155;
            }

            .prose-custom ul {
              list-style-type: disc;
              padding-left: 1.5rem;
              margin-bottom: 2rem;
            }
            .prose-custom li {
              font-size: 1.125rem;
              line-height: 1.8;
              margin-bottom: 0.5rem;
              color: #334155;
              font-weight: 400;
            }
            .prose-custom strong { font-weight: 700; color: #0f172a; }

            .prose-custom blockquote {
              border-left: 4px solid #8b5cf6;
              padding-left: 1.5rem;
              margin: 2.5rem 0;
              font-size: 1.25rem;
              font-style: italic;
              font-weight: 500;
              line-height: 1.6;
              color: #1e293b;
              background: linear-gradient(to right, rgba(139, 92, 246, 0.08), transparent);
              padding: 1.5rem;
              border-radius: 0 1rem 1rem 0;
            }
          `}} />

          {/* Bottom Tags */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap gap-2">
            {["AI", "Enterprise", "Digital Transformation", "Cloud"].map(tag => (
              <span key={tag} className="px-4 py-2 rounded-full bg-slate-100 text-sm font-medium text-slate-700 hover:bg-violet-100 hover:text-violet-700 transition-colors cursor-pointer shadow-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <CTA 
        headline="Ready to Transform Your Enterprise?"
        description="Join the organizations building the future with AP2L's AI-powered software ecosystem."
        primaryButtonText="Get a Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Knowledge Hub"
        secondaryButtonLink="/resources/blog"
        forceLight={true}
      />
    </article>
  );
}
