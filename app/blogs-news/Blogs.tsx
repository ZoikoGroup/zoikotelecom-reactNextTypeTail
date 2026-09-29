"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  featured_image: string;
  seo_description: string;
  created_at: string;
}

interface BlogResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
}

// Exactly the 4 old blogs that were live on the page
const defaultOldBlogs: Blog[] = [
  {
    id: 1,
    title: "Why Digital Literacy Is a Workplace Must-Have",
    slug: "why-digital-literacy-is-a-workplace-must-have",
    author: "lennox",
    featured_image: "/image/image 5 (1).png",
    content:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
    seo_description: "Why Digital Literacy Is a Workplace Must-Have",
    created_at: "2026-06-10T10:00:00Z",
  },
  {
    id: 2,
    title: "EE Network Adds Another Jewel in Their Crown",
    slug: "ee-network-adds-another-jewel-in-their-crown",
    author: "lennox",
    featured_image: "/image/image 4.png",
    content:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
    seo_description: "EE Network Adds Another Jewel in Their Crown",
    created_at: "2026-06-10T10:00:00Z",
  },
  {
    id: 3,
    title: "The Urgency of Quick Switch-off Deadline from Copper to Digital",
    slug: "the-urgency-of-quick-switch-off-deadline-from-copper-to-digital",
    author: "lennox",
    featured_image: "/image/image 3.png",
    content:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
    seo_description: "The Urgency of Quick Switch-off Deadline from Copper to Digital",
    created_at: "2026-06-10T10:00:00Z",
  },
  {
    id: 4,
    title: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses",
    slug: "why-top-9-voip-features-are-a-game-changer-for-small-businesses",
    author: "lennox",
    featured_image: "/image/image 2.png",
    content:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
    seo_description: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses",
    created_at: "2026-06-10T10:00:00Z",
  },
];

// The new blog added after the old blogs as per doc
const newBroadbandBlog: Blog = {
  id: 5,
  title: "Why More UK Customers Are Switching Broadband Providers in 2026",
  slug: "why-more-uk-customers-are-switching-broadband-providers-in-2026",
  author: "lennox",
  featured_image: "/Images/blog-images/Header_card.jpg",
  content:
    "For many households across the UK, broadband has become an essential part of everyday life. According to Ofcom, around 3.5 million people have switched broadband provider, with out-of-contract customers saving over £100 a year...",
  seo_description:
    "Why More UK Customers Are Switching Broadband Providers in 2026",
  created_at: "2026-09-29T10:00:00Z",
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([...defaultOldBlogs, newBroadbandBlog]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) return;

    try {
      setLoading(true);

      const response = await fetch(`${baseUrl}/api/blog/posts/`, {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) return;

      const data: BlogResponse = await response.json();
      const apiResults = data.results && data.results.length > 0 ? data.results : defaultOldBlogs;

      // Always ensure the new blog appears after the old blogs
      const hasNewBlog = apiResults.some((b) => b.slug === newBroadbandBlog.slug);
      setBlogs(hasNewBlog ? apiResults : [...apiResults, newBroadbandBlog]);
      setNextPage(data.next);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreBlogs = async () => {
    if (!nextPage) return;

    try {
      setLoadingMore(true);

      const response = await fetch(nextPage, {
        method: "GET",
        cache: "no-store",
      });

      const data: BlogResponse = await response.json();

      setBlogs((prevBlogs) => [...prevBlogs, ...data.results]);
      setNextPage(data.next);
    } catch (error) {
      console.error("Error loading more blogs:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const stripHtml = (html: string) => {
    return html
      .replace(/<[^>]*>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="bg-[#F5F5F5] dark:bg-gray-900 dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#C12172] to-[#782984] py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-white text-center text-[32px] md:text-[48px] font-extrabold leading-tight">
            Blogs & News
          </h1>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg font-medium">Loading blogs...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-lg font-medium">No blogs found.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white dark:bg-gray-800 border border-[#E2E8F0] dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="relative w-full h-[240px]">
                    <Image
                      src={blog.featured_image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />

                    <div
                      className={`absolute top-4 ${
                        blog.slug === "why-more-uk-customers-are-switching-broadband-providers-in-2026"
                          ? "right-4"
                          : "left-4"
                      } bg-white text-[#C12172] text-[12px] font-semibold px-3 py-1 rounded-full shadow-sm`}
                    >
                      BLOG
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-1 flex-col">
                    <div className="flex items-center gap-3 text-[#718096] dark:text-gray-300 text-[13px] font-medium mb-4 flex-wrap">
                      <span>Posted By {blog.author}</span>
                      <span>•</span>
                      <span>{formatDate(blog.created_at)}</span>
                    </div>

                    <h3 className="text-[#2D3748] dark:text-white text-[20px] font-semibold leading-[28px] mb-4 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-[#718096] dark:text-gray-300 text-[15px] leading-[24px] mb-5 line-clamp-2">
                      {stripHtml(blog.content)}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={`/blogs-news/${blog.slug}`}
                        className="text-[#C12172] font-semibold text-[15px] hover:underline inline-block"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {nextPage && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMoreBlogs}
                  disabled={loadingMore}
                  className="bg-[#C12172] hover:bg-[#a61b61] disabled:bg-gray-400 text-white px-10 py-4 rounded-full text-[16px] font-semibold shadow-lg transition-all duration-300"
                >
                  {loadingMore ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}