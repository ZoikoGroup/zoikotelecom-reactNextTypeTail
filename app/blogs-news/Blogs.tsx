"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    category: "VOIP",
    image: "/image/image 2.png",
    date: "October 8, 2025",
    title: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 2,
    category: "BUSINESS",
    image: "/image/image 3.png",
    date: "August 28, 2025",
    title: "The Urgency of Quick Switch-off Deadline from Copper to Digital",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 3,
    category: "NETWORK",
    image: "/image/image 4.png",
    date: "August 20, 2025",
    title: "EE Network Adds Another Jewel in Their Crown",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 4,
    category: "DIGITAL SKILLS",
    image: "/image/image 5 (1).png",
    date: "August 12, 2025",
    title: "Why Digital Literacy Is a Workplace Must-Have",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 5,
    category: "MOBILE",
    image: "/image/image 6.png",
    date: "June 30, 2025",
    title: "UK's Most Reliable Mobile Network EE SIM Enables",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 6,
    category: "NETWORK",
    image: "/image/image 7.png",
    date: "June 30, 2025",
    title: "One In Ten UK Businesses Doesn't Get Enough Network Coverage",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 7,
    category: "5G",
    image: "/image/image 8.png",
    date: "May 7, 2025",
    title: "EE is Bringing a Free Speed Boost to 5G Mobile Network",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 8,
    category: "BROADBAND",
    image: "/image/image 9.png",
    date: "May 7, 2025",
    title: "Spring Broadband Prices Go Up, Are You Upset?",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 9,
    category: "BUSINESS",
    image: "/image/image 10.png",
    date: "May 6, 2025",
    title: "The Lack of Phone Service is Actually Impacting the Business",
    description:
      "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
];

export default function BlogsPage() {
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

      {/* Blogs Grid */}
      <section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white dark:bg-gray-800 border border-[#E2E8F0] dark:border-gray-700 rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[240px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                {/* Category */}
                <div className="absolute top-4 left-4 bg-white text-[#C12172] text-[12px] font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-[#718096] dark:text-gray-300 text-[13px] font-medium mb-4 flex-wrap">
                  <span>Posted By Jinkai</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-[#2D3748] dark:text-white text-[20px] font-semibold leading-[28px] mb-4 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[#718096] dark:text-gray-300 text-[15px] leading-[24px] mb-5 line-clamp-2">
                  {blog.description}
                </p>

                {/* Read More */}
                <Link
                  href=""
                  className="text-[#C12172] font-semibold text-[15px] hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <Link
            href=""
            className="bg-[#C12172] hover:bg-[#a61b61] text-white px-10 py-4 rounded-full text-[16px] font-semibold shadow-lg transition-all duration-300"
          >
            Load More
          </Link>
        </div>
      </section>
    </div>
  );
}