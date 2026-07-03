"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const featured = {
  id: "1",
  category: "Artificial Intelligence",
  title: "How Enterprise AI is Reshaping Digital Transformation",
  description:
    "Discover how organizations are leveraging AI, cloud engineering, and automation to build resilient and future-ready enterprises.",
  image: "/blogs/blog-1-new.png",
  date: "July 2026",
};

const latest = [
  {
    id: "2",
    title: "The Future of Intelligent Automation",
    image: "/blogs/blog-2-new.png",
    category: "Automation",
    date: "July 2026",
  },
  {
    id: "3",
    title: "Cybersecurity Trends Every Enterprise Should Know",
    image: "/blogs/blog-3-new.png",
    category: "Cybersecurity",
    date: "June 2026",
  },
  {
    id: "4",
    title: "Building Cloud Native Applications at Scale",
    image: "/blogs/blog-4-new.png",
    category: "Cloud",
    date: "June 2026",
  },
];

export default function FeaturedBlogs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20 dark:bg-slate-950">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 max-w-3xl text-left"
        >

          <h2 className="mt-5 text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Latest Thinking from AP2L
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Stay ahead with expert perspectives on AI,
            cybersecurity, cloud engineering, automation,
            and enterprise technology.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_.9fr]">

          {/* Featured */}

          <motion.article
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-violet-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-700 group flex flex-col"
          >
            <Link href={`/blogs/${featured.id}`} className="flex flex-col h-full">
              <div className="relative h-56 w-full overflow-hidden sm:h-64 shrink-0">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-violet-100 px-3 py-1 font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                    {featured.category}
                  </span>
                  <span className="text-slate-500">
                    {featured.date}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 transition-colors">
                  {featured.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {featured.description}
                </p>

                <div className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-all group-hover:gap-3">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Latest */}

          <div className="space-y-6">

            {latest.map((article) => (

              <motion.article
                key={article.title}
                whileHover={{ x: 6 }}
                className="rounded-md border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-violet-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-700"
              >
                <Link href={`/blogs/${article.id}`} className="flex gap-4 p-3 h-full">

                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-md">

                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div className="flex flex-col justify-center w-full">

                    <span className="text-xs uppercase tracking-[0.18em] text-violet-600">
                      {article.category}
                    </span>

                    <h4 className="mt-1 text-base font-semibold leading-tight text-slate-900 dark:text-white group-hover:text-violet-600 transition-colors">
                      {article.title}
                    </h4>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-xs text-slate-500">
                        {article.date}
                      </span>
                      <span className="text-xs font-bold text-violet-600 flex items-center gap-1 group">
                        Read more <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                  </div>

                </Link>
              </motion.article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}