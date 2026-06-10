import Image from "next/image";
import { notFound } from "next/navigation";

interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  featured_image: string;
  seo_title: string;
  seo_description: string;
  seo_keywords: string | null;
  created_at: string;
  updated_at: string;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/posts/${slug}/`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Blog fetch error:", error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.seo_title || blog.title,
    description: blog.seo_description,
    keywords: blog.seo_keywords || "",
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(
    blog.created_at
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-[#F5F5F5] dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C12172] to-[#782984] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>

          <div className="mt-6 text-white/80 flex flex-wrap gap-3">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{formattedDate}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Featured Image */}
        <div className="relative w-full h-[250px] md:h-[500px] rounded-2xl overflow-hidden mb-10">
          <Image
            src={blog.featured_image}
            alt={blog.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Blog Content */}
        <article
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-sm prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: blog.content,
          }}
        />
      </section>
    </div>
  );
}