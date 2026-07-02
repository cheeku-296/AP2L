"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface LoadMoreProps {
  hasMore?: boolean;
  loading?: boolean;
  onLoadMore?: () => void;
}

export default function LoadMore({
  hasMore = true,
  loading = false,
  onLoadMore,
}: LoadMoreProps) {
  if (!hasMore) return null;

  return (
    <section className="relative bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl justify-center px-6 lg:px-8">
        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={onLoadMore}
          disabled={loading}
          className="
            group
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-slate-200
            bg-white
            px-8
            py-4
            text-sm
            font-semibold
            text-slate-900
            shadow-sm
            transition-all
            duration-300
            hover:border-violet-500
            hover:shadow-xl
            dark:border-slate-800
            dark:bg-slate-900
            dark:text-white
            disabled:pointer-events-none
            disabled:opacity-70
          "
        >
          {loading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-violet-500 border-t-transparent" />

              Loading Articles...
            </>
          ) : (
            <>
              Load More Articles

              <ArrowDown
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </>
          )}
        </motion.button>
      </div>
    </section>
  );
}