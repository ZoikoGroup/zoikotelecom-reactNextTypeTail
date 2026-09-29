import Image from "next/image";
import { notFound } from "next/navigation";
import SwitchingBroadbandBlogPost from "../components/SwitchingBroadbandBlogPost";

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
  updated_at?: string;
}

// Fallback for the 4 original blogs when API is offline/unavailable
const oldBlogsFallback: Record<string, Blog> = {
  "why-digital-literacy-is-a-workplace-must-have": {
    id: 1,
    title: "Why Digital Literacy Is a Workplace Must-Have",
    slug: "why-digital-literacy-is-a-workplace-must-have",
    author: "lennox",
    featured_image: "/image/image 5 (1).png",
    content: "<p>Effortless Communication: Reliable Digital landline with Crystal Clear Calls...</p>",
    seo_title: "Why Digital Literacy Is a Workplace Must-Have | Zoiko Telecom",
    seo_description: "Why Digital Literacy Is a Workplace Must-Have",
    seo_keywords: "",
    created_at: "2026-06-10T10:00:00Z",
  },
  "ee-network-adds-another-jewel-in-their-crown": {
    id: 2,
    title: "EE Network Adds Another Jewel in Their Crown",
    slug: "ee-network-adds-another-jewel-in-their-crown",
    author: "lennox",
    featured_image: "/image/image 4.png",
    content: "<p>Effortless Communication: Reliable Digital landline with Crystal Clear Calls...</p>",
    seo_title: "EE Network Adds Another Jewel in Their Crown | Zoiko Telecom",
    seo_description: "EE Network Adds Another Jewel in Their Crown",
    seo_keywords: "",
    created_at: "2026-06-10T10:00:00Z",
  },
  "the-urgency-of-quick-switch-off-deadline-from-copper-to-digital": {
    id: 3,
    title: "The Urgency of Quick Switch-off Deadline from Copper to Digital",
    slug: "the-urgency-of-quick-switch-off-deadline-from-copper-to-digital",
    author: "lennox",
    featured_image: "/image/image 3.png",
    content: "<p>Effortless Communication: Reliable Digital landline with Crystal Clear Calls...</p>",
    seo_title: "The Urgency of Quick Switch-off Deadline from Copper to Digital | Zoiko Telecom",
    seo_description: "The Urgency of Quick Switch-off Deadline from Copper to Digital",
    seo_keywords: "",
    created_at: "2026-06-10T10:00:00Z",
  },
  "why-top-9-voip-features-are-a-game-changer-for-small-businesses": {
    id: 4,
    title: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses",
    slug: "why-top-9-voip-features-are-a-game-changer-for-small-businesses",
    author: "lennox",
    featured_image: "/image/image 2.png",
    content: "<p>Effortless Communication: Reliable Digital landline with Crystal Clear Calls...</p>",
    seo_title: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses | Zoiko Telecom",
    seo_description: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses",
    seo_keywords: "",
    created_at: "2026-06-10T10:00:00Z",
  },
};

async function getBlog(slug: string): Promise<Blog | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (baseUrl) {
    try {
      const response = await fetch(`${baseUrl}/api/blog/posts/${slug}/`, {
        cache: "no-store",
      });

      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.error("Blog fetch error:", error);
    }
  }

  // Fallback to old blogs catalog if API is offline
  return oldBlogsFallback[slug] || null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // New blog metadata
  if (slug === "why-more-uk-customers-are-switching-broadband-providers-in-2026") {
    return {
      title: "Why More UK Customers Are Switching Broadband Providers in 2026 | Zoiko Telecom",
      description:
        "Over 3.5 million UK customers have switched broadband provider. Learn why out-of-contract users can save £100+ annually, how One Touch Switch works, and how to find the best deal.",
      keywords: "UK broadband switching 2026, Ofcom One Touch Switch, cheap broadband UK, Zoiko Telecom",
    };
  }

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

  // New blog keeps the new rich design as per Word doc & reference
  if (slug === "why-more-uk-customers-are-switching-broadband-providers-in-2026") {
    return <SwitchingBroadbandBlogPost />;
  }

  // Old blogs render exactly the same old layout without changing any matter
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.created_at).toLocaleDateString("en-GB", {
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