import {
  BlogHero,
  FeaturedBlogs,
  BlogGrid,
  LoadMore,
  Newsletter,
} from "../../../src/components/resources/blogs";

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <FeaturedBlogs />
      <BlogGrid />
      <LoadMore />
      <Newsletter />
    </>
  );
}