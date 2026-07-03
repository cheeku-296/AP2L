import BlogPost from "@/src/components/resources/blogs/BlogPost";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Blog ${id} | AP2L`,
    description: "Read the latest insights and technical deep dives from AP2L experts.",
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <BlogPost id={id} />;
}
