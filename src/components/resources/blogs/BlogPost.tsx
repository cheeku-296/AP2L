"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/src/components/common/CTA/CTA";
import { ArrowLeft, Clock, Calendar, Link as LinkIcon, Check } from "lucide-react";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";

// Function to get blog data based on ID
interface BlogData {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  content: string;
}

function getBlogData(id: string) {
  const defaultContent = `
    <h2>The New Era of Enterprise Architecture</h2>
    <p>As we navigate deeper into 2026, the convergence of Artificial Intelligence, specifically Generative AI, with traditional enterprise software has created a paradigm shift. No longer are organizations treating AI as a bolt-on capability; it has become the foundational layer upon which modern digital transformation is built.</p>
    
    <p>This shift requires a fundamental rethinking of how we design, deploy, and scale enterprise applications. Traditional monolithic architectures are giving way to intelligent, decentralized microservices that can dynamically adapt to changing business contexts.</p>
    
    <blockquote>"The organizations that will thrive in the next decade are those that seamlessly embed intelligence into their core operational workflows, rather than keeping it siloed in analytics departments."</blockquote>
    
    <h2>Intelligent Observability and Automation</h2>
    <p>One of the most profound impacts of this transformation is in the realm of observability. With platforms like NETRAA AI-OPS, we are seeing a transition from reactive monitoring to proactive, predictive intelligence. Systems can now anticipate failures before they occur, automatically allocating resources or rerouting traffic to maintain optimal performance.</p>
    
    <h3>Key Benefits of AI-Driven Observability:</h3>
    <ul>
      <li><strong>Predictive Maintenance:</strong> Identifying potential infrastructure bottlenecks before they impact end-users.</li>
      <li><strong>Automated Root Cause Analysis:</strong> Reducing Mean Time to Resolution (MTTR) from hours to minutes.</li>
      <li><strong>Dynamic Scaling:</strong> Anticipating load spikes based on historical patterns and current context.</li>
    </ul>
    
    <h2>The Role of Security in the AI Era</h2>
    <p>With increased automation comes the need for heightened, context-aware security. The software supply chain has never been more complex, making traditional perimeter defense insufficient. Solutions like ShieldVUE are critical, offering continuous SBOM (Software Bill of Materials) management and real-time vulnerability scanning that evolves alongside the threat landscape.</p>
    
    <p>As enterprises continue to adopt serverless architectures and edge computing, security must be baked into the CI/CD pipeline from day one—a practice often referred to as DevSecOps, but now supercharged by AI.</p>
    
    <h2>Looking Ahead</h2>
    <p>The journey of digital transformation is continuous. The enterprises that succeed will be those that view AI not just as a tool for efficiency, but as a catalyst for entirely new business models. By prioritizing scalable cloud architectures, intelligent automation, and robust cybersecurity, organizations can build the resilience needed to navigate whatever comes next.</p>
  `;

  const blogs: Record<string, BlogData> = {
    "1": {
      id: "1",
      category: "AI",
      title: "How AI is Transforming Enterprise Software",
      subtitle: "Explore how artificial intelligence is enabling businesses to automate workflows, enhance decision making and deliver exceptional customer experiences.",
      author: { name: "Preslas team", role: "Engineering Team", avatar: "https://i.pravatar.cc/150?u=preslas" },
      date: "July 12, 2026",
      readTime: "6 min read",
      image: "/blogs/blog-1-new.png",
      content: defaultContent,
    },
    "2": {
      id: "2",
      category: "Cloud",
      title: "Cloud Engineering Best Practices",
      subtitle: "Learn how enterprises build scalable cloud-native applications with security and performance in mind.",
      author: { name: "Arpit Gupta", role: "Cloud Architect", avatar: "https://i.pravatar.cc/150?u=arpit" },
      date: "July 10, 2026",
      readTime: "5 min read",
      image: "/blogs/blog-2-new.png",
      content: defaultContent,
    },
    "3": {
      id: "3",
      category: "Cybersecurity",
      title: "Preparing for Modern Cyber Threats",
      subtitle: "Best practices for strengthening enterprise security with modern cybersecurity strategies.",
      author: { name: "Anish Nale", role: "Security Researcher", avatar: "https://i.pravatar.cc/150?u=anish" },
      date: "July 08, 2026",
      readTime: "7 min read",
      image: "/blogs/blog-3-new.png",
      content: defaultContent,
    },
    "4": {
      id: "4",
      category: "Automation",
      title: "Intelligent Process Automation",
      subtitle: "Discover how automation is reducing operational costs while increasing business efficiency.",
      author: { name: "Himagni Dutta", role: "Automation Lead", avatar: "https://i.pravatar.cc/150?u=himagni" },
      date: "July 05, 2026",
      readTime: "4 min read",
      image: "/blogs/blog-4-new.png",
      content: defaultContent,
    },
    "5": {
      id: "5",
      category: "Enterprise",
      title: "Digital Transformation Roadmap",
      subtitle: "A practical guide for organizations planning enterprise-wide digital transformation initiatives.",
      author: { name: "GCD", role: "Principal Strategist", avatar: "https://i.pravatar.cc/150?u=gcd" },
      date: "July 02, 2026",
      readTime: "8 min read",
      image: "/blogs/blog-5-new.png",
      content: defaultContent,
    },
    "6": {
      id: "6",
      category: "AI",
      title: "Generative AI in Business",
      subtitle: "Understanding how Generative AI is creating new opportunities across enterprise ecosystems.",
      author: { name: "Preslas team", role: "Engineering Team", avatar: "https://i.pravatar.cc/150?u=preslas2" },
      date: "June 28, 2026",
      readTime: "5 min read",
      image: "/blogs/blog-6-new.png",
      content: defaultContent,
    },
    "7": {
      id: "7",
      category: "Cloud",
      title: "The Shift to Serverless Architecture",
      subtitle: "Why enterprises are adopting serverless computing to reduce operational overhead.",
      author: { name: "Arpit Gupta", role: "Cloud Architect", avatar: "https://i.pravatar.cc/150?u=arpit2" },
      date: "June 25, 2026",
      readTime: "4 min read",
      image: "/blogs/blog-7-new.png",
      content: defaultContent,
    },
  };

  return blogs[id] || blogs["1"];
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
      <div className="relative h-[60vh] min-h-[500px] w-full mt-[68px]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-20">
          <div className="max-w-4xl mx-auto w-full relative z-10">
            <Link 
              href="/resources/blog"
              className="inline-flex items-center gap-2 text-violet-700 hover:text-violet-900 transition-colors mb-8 text-sm font-medium tracking-wider uppercase"
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

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
              {blogData.title}
            </h1>
            
            <p className="text-xl text-slate-700 font-medium max-w-3xl leading-relaxed">
              {blogData.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Sidebar (Meta & Sharing) */}
        <div className="lg:w-64 shrink-0">
          <div className="sticky top-32 space-y-10">
            {/* Author */}
            <div className="flex items-center gap-4 border-b border-slate-200 pb-8">
              <img src={blogData.author.avatar} alt={blogData.author.name} className="w-14 h-14 rounded-full ring-2 ring-violet-500/20 shadow-sm" />
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
