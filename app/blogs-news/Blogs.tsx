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

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState<string | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blog/posts/`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      const data: BlogResponse = await response.json();

      setBlogs(data.results || []);
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
                  className="bg-white dark:bg-gray-800 border border-[#E2E8F0] dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
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

                    <div className="absolute top-4 left-4 bg-white text-[#C12172] text-[12px] font-semibold px-3 py-1 rounded-full">
                      BLOG
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
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

                    <Link
                      href={`/blogs-news/${blog.slug}`}
                      className="text-[#C12172] font-semibold text-[15px] hover:underline"
                    >
                      Read More →
                    </Link>
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