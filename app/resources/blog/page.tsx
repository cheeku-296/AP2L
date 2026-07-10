"use client";

import {
  BlogHero,
  FeaturedBlogs,
  BlogGrid,
  Newsletter,
} from "../../../src/components/resources/blogs";
import ThemeBuilder from "@/src/components/common/ThemeBuilder/ThemeBuilder";
import { useThemeConfig } from "@/src/context/ThemeConfigContext";

const COMPONENTS = [
  { id: "blog_hero", label: "Blog Hero" },
  { id: "featured_blogs", label: "Featured Blogs" },
  { id: "blog_grid", label: "Blog Grid" },
  { id: "newsletter", label: "Newsletter" },
];

export default function BlogsPage() {
  const { componentThemes } = useThemeConfig();

  const renderWithTheme = (id: string, Component: React.ReactNode) => {
    const theme = componentThemes[id] || "global";

    if (theme === "global") {
      return Component;
    }

    if (theme === "dark") {
      return (
        <div className="dark">
          {Component}
        </div>
      );
    }

    if (theme === "light") {
      return (
        <div className="light">
          {Component}
        </div>
      );
    }
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen flex flex-col transition-colors duration-500">
      <ThemeBuilder components={COMPONENTS} />

      <main className="flex-1 w-full flex flex-col relative z-0">
        {renderWithTheme("blog_hero",
          <div className="">
            <BlogHero />
          </div>
        )}

        {renderWithTheme("featured_blogs", <FeaturedBlogs />)}
        {renderWithTheme("blog_grid", <BlogGrid />)}
        {renderWithTheme("newsletter", <Newsletter />)}
      </main>
    </div>
  );
}