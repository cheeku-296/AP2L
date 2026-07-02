"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

const filters = [
  "All",
  "AI",
  "Cloud",
  "Cybersecurity",
  "Automation",
  "Enterprise",
];

const blogs = [
  {
    id: 1,
    category: "AI",
    title: "How AI is Transforming Enterprise Software",
    description:
      "Explore how artificial intelligence is enabling businesses to automate workflows, enhance decision making and deliver exceptional customer experiences.",
    image: "/blogs/blog-1.jpg",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Cloud",
    title: "Cloud Engineering Best Practices",
    description:
      "Learn how enterprises build scalable cloud-native applications with security and performance in mind.",
    image: "/blogs/blog-2.jpg",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Cybersecurity",
    title: "Preparing for Modern Cyber Threats",
    description:
      "Best practices for strengthening enterprise security with modern cybersecurity strategies.",
    image: "/blogs/blog-3.jpg",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Automation",
    title: "Intelligent Process Automation",
    description:
      "Discover how automation is reducing operational costs while increasing business efficiency.",
    image: "/blogs/blog-4.jpg",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "Enterprise",
    title: "Digital Transformation Roadmap",
    description:
      "A practical guide for organizations planning enterprise-wide digital transformation initiatives.",
    image: "/blogs/blog-5.jpg",
    readTime: "8 min read",
  },
  {
    id: 6,
    category: "AI",
    title: "Generative AI in Business",
    description:
      "Understanding how Generative AI is creating new opportunities across enterprise ecosystems.",
    image: "/blogs/blog-6.jpg",
    readTime: "5 min read",
  },
];

export default function BlogGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? blogs
      : blogs.filter((item) => item.category === active);

  return (
    <section className="relative bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="text-center">

          <span className="font-manrope text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
            Browse Articles
          </span>

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-slate-900 dark:text-white">
            Explore Our Knowledge Hub
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Expert insights on AI, cloud engineering,
            cybersecurity, enterprise software and automation.
          </p>

        </div>

        {/* Filters */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                active === filter
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-violet-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {filtered.map((blog, index) => (

            <motion.article
              key={blog.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .05,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image */}

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                    {blog.category}
                  </span>

                  <span className="flex items-center gap-1 text-sm text-slate-500">

                    <Clock className="h-4 w-4" />

                    {blog.readTime}

                  </span>

                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight text-slate-900 dark:text-white">
                  {blog.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {blog.description}
                </p>

                <Link
                  href={`/blogs/${blog.id}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-600 transition-all hover:gap-3"
                >
                  Read Article

                  <ArrowRight className="h-4 w-4" />

                </Link>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}