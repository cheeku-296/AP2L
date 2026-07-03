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
    image: "/blogs/blog-1-new.png",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Cloud",
    title: "Cloud Engineering Best Practices",
    description:
      "Learn how enterprises build scalable cloud-native applications with security and performance in mind.",
    image: "/blogs/blog-2-new.png",
    readTime: "5 min read",
  },
  {
    id: 3,
    category: "Cybersecurity",
    title: "Preparing for Modern Cyber Threats",
    description:
      "Best practices for strengthening enterprise security with modern cybersecurity strategies.",
    image: "/blogs/blog-3-new.png",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Automation",
    title: "Intelligent Process Automation",
    description:
      "Discover how automation is reducing operational costs while increasing business efficiency.",
    image: "/blogs/blog-4-new.png",
    readTime: "4 min read",
  },
  {
    id: 5,
    category: "Enterprise",
    title: "Digital Transformation Roadmap",
    description:
      "A practical guide for organizations planning enterprise-wide digital transformation initiatives.",
    image: "/blogs/blog-5-new.png",
    readTime: "8 min read",
  },
  {
    id: 6,
    category: "AI",
    title: "Generative AI in Business",
    description:
      "Understanding how Generative AI is creating new opportunities across enterprise ecosystems.",
    image: "/blogs/blog-6-new.png",
    readTime: "5 min read",
  },
  {
    id: 7,
    category: "Cloud",
    title: "The Shift to Serverless Architecture",
    description:
      "Why enterprises are adopting serverless computing to reduce operational overhead.",
    image: "/blogs/blog-7-new.png",
    readTime: "4 min read",
  },
];

const ITEMS_PER_PAGE = 6;

export default function BlogGrid() {
  const [active, setActive] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered =
    active === "All"
      ? blogs
      : blogs.filter((item) => item.category === active);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentBlogs = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="relative bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <div className="text-left mb-12">

          <h2 className="mt-4 text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Explore Our Knowledge Hub
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Expert insights on AI, cloud engineering,
            cybersecurity, enterprise software and automation.
          </p>

        </div>

        {/* Filters */}

        <div className="mt-12 flex flex-wrap justify-start gap-3">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => {
                setActive(filter);
                setCurrentPage(1);
              }}
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

          {currentBlogs.map((blog, index) => (

            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: index * .05 }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 flex flex-col group"
            >
              <Link href={`/blogs/${blog.id}`} className="flex flex-col h-full">
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-slate-500">
                      <Clock className="h-4 w-4" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-900 dark:text-white group-hover:text-violet-600 transition-colors">
                    {blog.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {blog.description}
                  </p>

                  <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-all group-hover:gap-3">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.article>

          ))}

        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-all ${
                  currentPage === i + 1
                    ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}