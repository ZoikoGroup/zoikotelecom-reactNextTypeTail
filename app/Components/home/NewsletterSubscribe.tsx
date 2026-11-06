"use client";
import { useState } from "react";

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <section className="w-full bg-gradient-to-r from-[#b51f68] via-[#a21c60] to-[#7a1954] px-6 py-10 text-white sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Heading & Subtitle */}
        <div className="max-w-xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Subscribe for daily updates, offers &amp; deals
          </h2>
          <p className="mt-2 text-sm text-pink-100/90 sm:text-base">
            Stay ahead with the latest news, offers and tech from Zoiko Telecom.
          </p>
        </div>

        {/* Right Email Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="h-12 w-full rounded-full bg-white px-6 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 sm:w-80 lg:w-96"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-[#120b16] px-8 text-sm font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
