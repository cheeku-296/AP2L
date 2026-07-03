import BlogPost from "@/src/components/resources/blogs/BlogPost";

export function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Blog ${params.id} | AP2L`,
    description: "Read the latest insights and technical deep dives from AP2L experts.",
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <BlogPost id={params.id} />;
}
